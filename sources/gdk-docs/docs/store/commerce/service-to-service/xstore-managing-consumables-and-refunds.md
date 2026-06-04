---
author: CameronGoodwin
title: "Managing consumable products from your service"
description: "Describes how to build a robust system that manages consumables on your game service including managing user refunds of consumed items."
kindex:
  - manage consumable products
  - consumable fulfillment and refunds
  - Store consumable operations
  - service-to-service consumables
ms.author: cagood
ms.topic: article
edited: '03/18/2026'
ms.date: 04/15/2026
permissioned-type: public
---


# Managing consumable products from your service

For consumable-based economies, use a trusted back-end service to validate and manage transactions.
Service-to-service calls are more secure and reliable than client-managed fulfillment, which can be affected by tampering or network loss.

This article shows how to manage consumables and reconcile refunds to reduce fraud and revenue loss.

To manage consumable products and handle refunds, call the following Microsoft Store APIs from your service.
See the documentation pages for specifics on calling and parsing the results.

| Microsoft Store API | Function |
| ------------------- | -------- |
| [collections.mp.microsoft.com/v8.0/collections/consume](microsoft-store-apis/xstore-v8-consume.md) | Consume or fulfill a consumable product the user owns. |
| [purchase.mp.microsoft.com/v8.0/b2b/orders/query](microsoft-store-apis/xstore-v8-clawbackv1.md) | Purchase Orders - Reports consumable purchases made by the user over the last 90 days. |
| [purchase.mp.microsoft.com/v8.0/b2b/clawback/sastoken](microsoft-store-apis/xstore-v8-clawbackv2-sastoken.md) | Provides an SAS token used to query the Clawback event service message queue for refund events related to your products. |

> [!NOTE]
> **Sandbox limitation:** When consuming developer-managed consumable products in a development sandbox, only XSTS token authentication is supported. User Store ID or Microsoft Entra ID authentication doesn't work for Dev-Managed Consumable consume calls in sandbox environments. Plan your testing accordingly. For more information, see the [Prerequisites section of the Consume API](microsoft-store-apis/xstore-v8-consume.md#prerequisites).

## Utilizing the Microsoft.StoreServices .NET library and sample

To help demonstrate the principles and flows outlined in this article, review the Microsoft.StoreServices Sample that provides:  

- Use of the Microsoft.StoreServices library to manage authentication and make the calls to the Microsoft Store Services.
- Example logic for managing consumable products, tracking pending consume requests, reconciling refunded purchases, renewing expired User Store IDs, and more.
- A configuration guide that includes the steps in this article on how to configure and set up your Microsoft Entra ID for this authentication method.  

- [Microsoft.StoreServices (GitHub)](https://github.com/microsoft/Microsoft-Store-Services)
- [Microsoft.StoreServices Sample (GitHub)](https://github.com/microsoft/Microsoft-Store-Services-Sample)

## Managing consumables

### Recommended outline of a consumable management service

Use a single server flow to validate ownership, fulfill usage, and reconcile refunds.
The following outline keeps these responsibilities explicit and retry-safe.

| Stage | Service action |
| ----- | -------------- |
| Request intake | Receive client requests to use or purchase items with consumable currency. |
| Authentication | Authenticate to Microsoft Store Service APIs. |
| Balance checks | Validate the user's balance for the consumable products from the Store. |
| Fulfillment | Consume or fulfill the required quantity from the user's balance. |
| Retry safety | Track pending consume requests and retry safely when responses are lost. |
| Grant balance | Grant the balance from the purchased product to the user's account. |
| Log transactions | Keep a tracking database of consume and grant transactions related to the user. |
| Client response | Return transaction results or granted items to the game client. |
| Reconciliation | Process refunded consumable transactions and apply corrective actions. |

### Managing the user balance on your service vs. the Microsoft Store

Store-managed consumable products can be fully managed on your game service by consuming any nonzero balance from the Microsoft Store.
Alternatively, the user's consumable balance can be managed through the Microsoft Store, only consuming quantity when used for in-game items.
Developer-managed consumable products however, require management on a game service.
See [Choosing the Right Product Type](../getting-started/xstore-choosing-the-right-product-type.md) for more info on developer-managed vs Microsoft store-managed consumables.

The most common approach is to track the user's effective currency balance on your service.
In this design, your service queries nonzero consumable balances, consumes them, and credits the equivalent in-game currency to the user's account.
This flow reduces repeated Store API calls after fulfillment, simplifies cross-platform balance handling, and gives support teams a central system for balance adjustments.

Typical setup: configure each currency tier as a separate store-managed consumable that grants quantity `1` per purchase, then map each product to its in-game value.
Example: a "500 coin" consumable increases Store quantity to `1`; after consume, Store quantity returns to `0` and your service credits 500 coins.

Store-managed consumables can grant the full value directly to Store quantity on purchase (for example, 500 per purchase).
In that model, the Store tracks balance growth and your service deducts quantity when users spend currency in-game.
However, putting all tiers as SKUs under a single product ID limits features such as tier-specific promotional pricing and 5x5 redeem tokens.
See [Best practices for offering in-game currency](../fundamentals/xstore-consumable-based-ecosystems.md#best-practices-for-offering-in-game-currency).

### Use TrackingIds as a redundant system for consume validation

Include a `TrackingId` in each consume request.
If a response is lost, retry with the same `TrackingId`, user, `productId`, and quantity to confirm whether the original consume succeeded.
This retry request prevents double-grants while still allowing safe retries.

The following flow shows a retry-safe consume pattern.

Product A (500 in-game coins) is a consumable configured to grant a quantity of 1 within the store.

1. The user purchases Product A and now has a quantity of `1` for the product when calling the query service.
2. The game's service queries the user's consumable balance within the Microsoft Store query API and sees the user's balance is `1`.
3. Game service generates a TrackingID, creates a consume request to consume one product quantity, and adds the request information to a pending transaction list.
4. Game service sends the request to the Microsoft Store consume API.
5. Game service fails to get a consume API response (network packet loss, service outage, power loss, and so on).
  At this point, the service can't confirm whether the transaction completed.
  Querying inventory alone can be ambiguous if the user repurchased during the outage.
  Use the pending transaction list and retry with the same request values.

6. Game service determines when it should retry the consumed request.
7. Game service re-creates the consume request using the same user, ProductId, TrackingId, and quantity.
8. Game service sends the request to the Microsoft Store consume API.
9. Game service receives a response that the request was successful and the new user's balance is '0'.
10. Game service adds 500 coins to the user's currency balance tracked on the server.
11. Game service removes the consume request from the pending transaction list as the item was consumed, verified, and user granted the correct in-game currency on the service.

### Behavior of the Microsoft Store Consume API when verifying previous transaction requests

If a request arrives with different values, the API treats it as a new consume request.

If the API detects a retry with the same `TrackingId`, user, quantity, and `productId`, it doesn't consume a second time.
Instead, it returns a successful response with the current remaining balance.
Because of this behavior, replaying a timed-out request is safe as long as the request values are identical.

If you use X-Token authentication to the consume API, you can update and get a new X-Token as long as the new X-Token is for the same Xbox user as the previous request.

### Mitigating consumable return and refund fraud with the Clawback event service

To help prevent abuse and fraudulent returns or refunds of consumable products, your service should use the Clawback event service.
Clawback enables your service to receive events when a consumable product is returned or refunded. Your service should remove the added value from the user's account for that consumable.

To take action on Clawback events, ensure that you use the `"includeOrderIds": TRUE` option in your consume request to [collections.mp.microsoft.com/v8.0/collections/consume](microsoft-store-apis/xstore-v8-consume.md).
Your service should store consume transaction data from API responses by using the following variables:

| Variable | Source | Description |
| -------- | ------ | ----------- |
| `Key / Unique ID` | [OrderID]:[LineItemID]:[ProductID]:[TrackingId] | Include `ProductID` because bundles can reuse the same `OrderID` and `LineItemID` across different products. If your consumable grants quantity greater than `1`, include `TrackingId` to distinguish individual consume operations. |
| `ProductId` | ProductId from consume request | Because the same orderID and orderLineItemID can be shared between different products granted through a bundle purchase, you should also track the ProductID of the item consumed. |
| `UserId` | UserId your system uses to identify the user being granted the consumable value | Clawback events don't provide userIds, so you must track the user receiving the content within your system to take reconciliation action. |
| `OrderID` | orderTransactions -> orderId (when using "includeOrderIds": true in /consume request) | ID of user's purchase order used to fulfill all or part of the consume request. Example: ID related to the purchase of the whole shopping cart. |
| `LineItemID` | orderTransactions -> orderLineItemId (when using "includeOrderIds": true in /consume request) | ID representing a unique product within the user’s purchase order used to fulfill the consume request. Example: ID related to a unique item within the shopping cart during the purchase. |
| `Qty` | orderTransactions -> quantityConsumed (when using "includeOrderIds": true in /consume request) | Amount the request fulfilled by this specific OrderId / LineItemId. Note: Should be 1 in the standard consumable configuration but can be greater than 1 if your consumable is configured to grant a qty greater than 1 on each purchase. |
| `Status` | Current state of the consume transaction within your system for your own tracking | Helpful so that you can mark when a consume transaction is reconciled with a Clawback event. Also needed for Chargeback and Chargeback reversals. For example, if an item is revoked due to a Chargeback event reconciliation, you can undo the action later if a ChargebackReversal occurs. |

Set up this tracking database early, preferably before Clawback queue onboarding.
Early data gives you historical transactions for future reconciliation and a clean baseline to measure Clawback processing effects.

For more information, see [Managing refunds and chargebacks from your service](xstore-managing-refunds-and-chargebacks.md).

## See also

[Commerce Overview](../commerce-nav.md)

[Consumable-based ecosystems](../fundamentals/xstore-consumable-based-ecosystems.md)

[Managing refunds and chargebacks from your service](xstore-managing-refunds-and-chargebacks.md)

[Microsoft Store Service APIs](microsoft-store-apis/xstore-nav.md)

[Microsoft.StoreServices library (GitHub)](https://github.com/microsoft/Microsoft-Store-Services)

[Microsoft.StoreServices Sample (GitHub)](https://github.com/microsoft/Microsoft-Store-Services-Sample)
