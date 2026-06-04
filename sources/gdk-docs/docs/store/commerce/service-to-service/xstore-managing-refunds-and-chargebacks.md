---
author: CameronGoodwin
title: "Managing refunds and chargebacks from your service"
description: "Describes how to configure and use a Clawback event queue to detect refunds, returns, and chargebacks of your products across all product types."
kindex:
  - manage refunds and chargebacks
  - Microsoft Store refund workflow
  - chargeback handling in services
  - Store commerce reconciliation
ms.author: cagood
ms.topic: article
edited: '03/19/2026'
ms.date: 03/31/2026
permissioned-type: public
---

# Managing refunds and chargebacks from your service

## Table of Contents

- [What is the Clawback Service?](#what-is-the-clawback-service)
- [Latest Updates October 2025](#latest-updates-october-2025)
- [Risk and Fraud Potential](#risk-and-fraud-potential-with-refunded-products)
- [Microsoft.StoreServices Library](#utilizing-the-microsoftstoreservices-library-and-sample)
- [Setup and Configuration](#clawback-event-queues)
  - [Supported Product Types](#supported-clawback-product-types)
  - [Queue Setup Request](#required-setup--onboarding-request)
  - [Associating Products](#associating-your-products-with-your-clawback-queue)
  - [Accessing Your Queue](#accessing-your-clawback-event-queue)
- [Processing Events](#processing-clawback-messages-from-the-queue)
  - [Queue Operations](#processing-clawback-messages-from-the-queue)
  - [Event Structure](#clawback-event-structure)
  - [Event Sources](#clawback-event-source-values)
- [Reconciliation by Product Type](#reconciling-consumable-clawback-events)
  - [Consumable Products](#reconciling-consumable-clawback-events)
  - [Store-managed Subscriptions](#reconciling-store-managed-subscription-clawback-events)
  - [Durable and Game Products](#reconciling-durable-and-game-product-clawback-events)
  - [Bundle Products](#clawback-events-for-bundles)
- [Event States and Actions](#clawback-refund-vs-return-states)
  - [Refund vs Return](#clawback-refund-vs-return-states)
  - [Chargebacks](#chargebacks-and-chargeback-reversals)
- [Testing](#testing-product-returns-within-your-development-sandbox)
- [Troubleshooting](#troubleshooting-common-issues)

## What is the Clawback Service?

The Clawback service sends queue notifications when Microsoft Store purchases are refunded, returned, or charged back.
These events help protect your in-game economy from refund abuse and payment reversals.

### Why Use Clawback Events?

Clawback closes the gap between a payment reversal and your service-side reconciliation.
Without it, users can keep the product's value after a refund or chargeback is issued unless you detect and reverse it yourself.

| Scenario | Outcome |
| -------- | ------- |
| Without Clawback processing | A user can purchase consumables, consume them, request a refund, and keep both money and consumed value. |
| With Clawback processing | Your service receives an event quickly on a refund and can revoke the value or adjust balances using a deterministic workflow. |

### Key Benefits

- **Fraud Prevention**: Detect and respond to refund abuse in real-time
- **Revenue Protection**: Revoke content when payments are reversed
- **Real-time Notifications**: Get instant alerts instead of waiting for periodic entitlement checks
- **Comprehensive Coverage**: Support for all product types (consumables, subscriptions, games, durables, bundles)

### How It Works

1. **User requests refund** through Microsoft Store
2. **Clawback event created** and sent to your message queue
3. **Your service reads the event** and finds the affected purchases
4. **Take corrective action** by removing content or adjusting balances

## Latest updates October 2025

- Clawback events can now be configured for all product types including Games, Durables, and Bundles.
To enable these extra product types for your Clawback queue, contact your Developer Partner Manager or Microsoft contact. See [Supported Clawback product types](#supported-clawback-product-types).

- When a bundle (Game bundle, Add-on bundle, or Season Pass bundle) is refunded, the Clawback service generates individual events for each consumable product included within that bundle. These extra events ensure partners receive appropriate notifications related to consumed items within refunded bundles. See [Clawback events for bundles](#clawback-events-for-bundles).

## Risk and fraud potential with refunded products

Users can request digital refunds/returns through their account orders page (<https://account.microsoft.com/billing/orders/>).
Automated approvals depend on criteria such as elapsed time since purchase and play time; other cases are handled through Microsoft Customer Support.

The risk of refund fraud depends on product type and how entitlements are managed from your game service.
You can use Clawback events to quickly detect and apply corrective actions to mitigate these risks.

| Product type | What refund does | Risk without Clawback |
| ------------ | ---------------- | ------------------------------ |
| Consumables | Unfulfilled purchases are removed, but consumed quantities aren't. | Users can keep consumed value after refund without reconciliation. This risk also applies to consumables granted in bundles. |
| Store-managed subscriptions | Full or partial (pro-rated) refunded payments are possible depending on regional laws and restrictions. | Benefits already granted need selective rollback based on refund scope. |
| Games and durables (including bundles) | Licenses and entitlements are revoked. | Rewards or content access managed by your service remain until another entitlement check. |

> [!NOTE]
> If your game client uses the XStore license APIs to validate licenses for durable content, those APIs reflect revoked entitlements after refund processing. For more information, see [Acquiring license for DLC](../fundamentals/xstore-manage-and-license-optional-packages.md#acquiring-license-for-dlc).

## Utilizing the Microsoft.StoreServices library and sample

To help demonstrate the principles and flows outlined in this article, review the Microsoft.StoreServices Sample for:

- Use of the Microsoft.StoreServices library to manage authentication and make the calls to the Microsoft Store Services.
- Example logic for managing consumable products, tracking pending consume requests, reconciling refunded purchases, renew expired User Store IDs, and more.
- A configuration guide that includes the steps in this article on how to configure and set up your Microsoft Entra ID for this authentication method.

- [Microsoft.StoreServices (GitHub)](https://github.com/microsoft/Microsoft-Store-Services)
- [Microsoft.StoreServices Sample (GitHub)](https://github.com/microsoft/Microsoft-Store-Services-Sample)

## Clawback event queues

The Clawback event service uses an [Azure Storage Queue](/azure/storage/queues/storage-quickstart-queues-dotnet) set up for your service's Microsoft Entra application client ID.
Events are added to the queue within seconds of when a refund, return, or chargeback is processed through Microsoft Store services.
Your service is able to regularly check for recent Clawback events across all your products and handle them in your system quickly.

## Supported Clawback product types

As of October 2025, the Clawback event service supports refunds of all product types.

| Product type | ProductKind value |
| ------------ | ----------------- |
| [Store-managed Consumable](../getting-started/xstore-choosing-the-right-product-type.md#microsoft-store-managed-consumable) | `Consumable` |
| [Developer-managed Consumable](../getting-started/xstore-choosing-the-right-product-type.md#developer-managed-consumable) | `UnmanagedConsumable` |
| [Store-managed Subscription](../getting-started/xstore-choosing-the-right-product-type.md#subscriptions) | `Pass` |
| [Durable with a package](../getting-started/xstore-choosing-the-right-product-type.md#durable-with-a-package) | `Durable` |
| [Durable without a package](../getting-started/xstore-choosing-the-right-product-type.md#durable-without-a-package) | `Durable` |
| [Add-on Bundle](../getting-started/xstore-choosing-the-right-product-type.md#add-on-bundle) | `Durable` |
| [Season Pass](../getting-started/xstore-choosing-the-right-product-type.md#season-pass) | `Durable` |
| Base Game | `Game` |
| [Game Bundle](../getting-started/xstore-choosing-the-right-product-type.md#game-bundle) | `Game` |

> [!NOTE]
> To enable your Clawback queue to receive events for product types beyond Consumables and Store-managed subscriptions, request those extra product types through your Developer Partner Manager or Microsoft Contact. This configuration can be done when your Clawback queue is originally set up or can be added later.

### Required setup / onboarding request

Setting up a Clawback event queue requires the Microsoft Store services team to configure an Azure Storage Queue for you.
Microsoft covers the hosting costs and management.

To have a Clawback event queue setup for you, contact your Developer Partner Manager or Microsoft contact.
When requesting the queue's setup, you must provide the following parameters:

- The Microsoft Entra application client ID that your services use to authenticate and that your products are associated with in Partner Center.
- The [preferred geographical Azure data center](/azure/reliability/regions-list) of the primary queue. Not required, but provides better latency if close to your own services.
- The product types you want to receive Clawback events for. By default, consumables and store-managed subscriptions are enabled. If you want to receive events for extra product types such as durables, games, or bundles, you must specifically request them.

Once submitted, it can take 1-2 weeks for your queue setup to be deployed.

#### Associating your products with your Clawback queue

To receive Clawback events for your products, you must link the Microsoft Entra client ID from your queue setup with your products in Partner Center. Follow the same steps in [extra configuration required to view and manage products with a User Store ID and Microsoft Entra ID Auth](xstore-authenticating-your-service.md#extra-configuration-required-to-view-and-manage-products-with-a-user-store-id-and-microsoft-entra-id-auth).

### Accessing your Clawback event queue

To access your Clawback event queue, your service gets an [SAS Token](/azure/storage/common/storage-sas-overview) from [purchase.mp.microsoft.com/v8.0/b2b/clawback/sastoken](microsoft-store-apis/xstore-v8-clawbackv2-sastoken.md) using your service's Microsoft Entra ID credentials.
The SAS Token expires after a set time, but you can request a new one anytime.

The `uri` parameter from the SAS Token is the web address to your Clawback Queue and includes the authentication details.
To perform different operations on your queue, you need to add specific parameters to the URI as shown in the following section.

### Processing Clawback messages from the queue

Your service uses the modified `uri` parameter of the SAS token to interact with your Clawback queue.
Calls can be made via .NET APIs or HTTPS REST APIs defined in the following articles:

- [Azure Queue Storage REST APIs](/rest/api/storageservices/queue-service-rest-api)
- [Azure Queue Storage using .NET](/azure/storage/queues/storage-dotnet-how-to-use-queues?tabs=dotnet)

Each Clawback event in the queue is stored as a message containing the event details.  
To work with messages in the queue, your service can perform these operations by adding the following parameters to the URI:

| Operation | URI Addition | Other Parameter | Description |
| --------- | ------------ | --------------- | ----------- |
| [Peek](/rest/api/storageservices/peek-messages) | /messages | peekonly=true | Looks at messages without removing them or making them invisible to others. |
| [Get](/rest/api/storageservices/get-messages) | /messages | none | Gets messages and makes them invisible to others for 30 seconds (so no one else processes them while you work on them). |
| [Delete](/rest/api/storageservices/delete-message2) | /messages/(message ID from queue) | popreceipt=(value from queue message) | Permanently removes the message from the queue. |

| Operation | Example URI |
| --------- | ----------- |
| Peek | <https://uluufeofsxh2k.queue.core.windows.net/gxhxcvb32lnk4**/messages**?sv=2021-10-04&spr=https&st=2023-01-20T22%3A59%3A25Z&se=2023-01-21T04%3A59%3A25Z&sp=rp&sig=zJ4n%2BJdcv0nVNSh5vEwICguV54tqZ62jJwD7Omr87WE%3D**&peekonly=true>** |
| Get | <https://uluufeofsxh2k.queue.core.windows.net/gxhxcvb32lnk4**/messages**?sv=2021-10-04&spr=https&st=2023-01-20T22%3A59%3A25Z&se=2023-01-21T04%3A59%3A25Z&sp=rp&sig=zJ4n%2BJdcv0nVNSh5vEwICguV54tqZ62jJwD7Omr87WE%3D> |
| Delete | <https://uluufeofsxh2k.queue.core.windows.net/gxhxcvb32lnk4**/messages/7df1da25-2c9b-4a09-9913-2e4f843ca439**?sv=2021-10-04&spr=https&st=2023-01-20T22%3A59%3A25Z&se=2023-01-21T04%3A59%3A25Z&sp=rp&sig=zJ4n%2BJdcv0nVNSh5vEwICguV54tqZ62jJwD7Omr87WE%3D**&popreceipt=AgAAAAMAAAAAAAAAP%2B4YHSMt2QE%3D>** |

When you use the Get operation, it makes the messages invisible to others for 30 seconds, preventing other services from processing the same messages while you're working on them.
The Peek operation doesn't hide messages - everyone can still see them.
However, to delete a message you need the `popreceipt` value, which you only get from the Get operation (not Peek).

Recommended steps for processing messages:

1. Get messages from the queue.
2. Read the Clawback event details from each message.
3. Find matching transactions in your database using the same productId, orderId, and lineItemId.
4. Fix the items given to the user (remove currency, revoke content, etc.).
5. Mark the transaction as processed in your database.
6. Delete the message from the queue.

The response from the Get or Peek functions are XML Lists of QueueMessage items with the following format:

```xml
<QueueMessagesList>  
    <QueueMessage>  
      <MessageId>string-message-id</MessageId>  
      <InsertionTime>insertion-time</InsertionTime>  
      <ExpirationTime>expiration-time</ExpirationTime>  
      <PopReceipt>opaque-string-receipt-data</PopReceipt>  
      <TimeNextVisible>time-next-visible</TimeNextVisible>  
      <DequeueCount>integer</DequeueCount>  
      <MessageText>message-body</MessageText>  
    </QueueMessage>  
</QueueMessagesList>  
```

### QueueMessage structure

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `MessageId` | `GUID` | Unique ID for the message in the queue. | Yes |
| `InsertionTime` | `datetime` | The UTC date and time that the message was inserted into the queue. | Yes |
| `ExpirationTime` | `datetime` | The UTC date and time the message deletes from the queue. | Yes |
| `PopReceipt` | `string` | Used in the Delete operation to remove the message from the queue. | No |
| `TimeNextVisible` | `datetime` | The UTC date and time the message is visible again in the queue. | Yes |
| `DequeueCount` | `int` | Number of times the message was dequeued (pulled off the queue with the Get API). | Yes |
| `MessageText` | `string` | Base64 encoded string that is a JSON structure of a [Clawback event](#clawback-event-structure) | Yes |

### Clawback event structure

Each message in the queue has an encoded JSON string in the MessageText that represents the Clawback event with the following parameters:

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `id` | `GUID` | Unique ID for the Clawback event. | Yes |
| `source` | `string` | [Source service](#clawback-event-source-values) that triggered the event. | Yes |
| `type` | `string` | The object format of the data field, ClawbackEventContractV2. | Yes |
| `data` | `ClawbackEventContractV2` | [ClawbackEventContractV2](#clawbackeventcontractv2-structure) object that contains the data relevant to the Order affected by the Clawback event. | Yes |
| `time` | `datetime` | The UTC date and time that the event was created. | Yes |
| `specversion` | `string` | Version of the contract, expected 1.0. | Yes |
| `datacontenttype` | `string` | Format of the data parameter. | Yes |
| `subject` | `string` | Information used by the Clawback service for logging. | Yes |
| `traceparent` | `string` | Information used by the Clawback service for logging. | Yes |

### Clawback event source values

| Value | Description |
| ----- | ----------- |
| `/Purchase/Refund` | Event originated from a return or refund being processed through Microsoft Customer Support or the Xbox Support return request site. |
| `/Purchase/Chargeback` | Event originated from a chargeback or chargeback reversal by the payment institution from the order. Could be a bank, credit card, etc. |

### ClawbackEventContractV2 structure

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `lineItemId` | `GUID` | Identifies the lineItem within the purchase order for the consumable (orders can have multiple lineItemIds for shopping cart scenarios). | Yes |
| `orderId` | `GUID` | Identifies the purchasing order the product was a part of when purchased by the user. | Yes |
| `productId` | `string` | Also referred to as the Store ID for the product within the Microsoft Store catalog. An example Store ID for a product is 9NBLGGH42CFD. | Yes |
| `productType` | `string` | Indicates the product type. For more information, see [Product type values and meaning](microsoft-store-apis/xstore-v8-query-for-products.md#product-type-values-and-meaning). | Yes |
| `purchasedDate` | `datetime` | The UTC date and time that the item was purchased. | Yes |
| `eventDate` | `datetime` | The UTC date and time that the item was returned or refunded. | Yes |
| `sandboxId` | `string` | Sandbox that the product's purchase is tied to. Production environment with end-users is RETAIL. | Yes |
| `eventState` | `string` | The state of this specific Clawback event. See [Clawback event states](#clawback-event-states). | Yes |
| `skuId` | `string` | The specific SKU identifier if there are multiple offerings of the product in the Microsoft Store catalog. An example Store ID for a SKU is 0010. | Yes |
| `recurrenceData` | `ClawbackEventRecurrenceData` | The [ClawbackEventRecurrenceData](#clawbackeventrecurrencedata-structure) object returned if the order was for a subscription product. Contains data relevant to the subscription order affected by the Clawback event. | No |

### Clawback event states

| Value | Description |
| ----- | ----------- |
| `Revoked` | User's payment was given back and an attempt was made to revoke the user's entitlement but it wasn't successful. For consumables, indicates the item was fulfilled from your service before the order was returned. Reconciliation with your own records and data would be required. See [Reconciling consumable Clawback events](#reconciling-consumable-clawback-events) |
| `Returned` | User's payment was given back and their entitlement was removed from their account. No reconciliation on your service is required. For consumables, the purchased item wasn't fulfilled from your service. |
| `Refunded` | User's payment was given back but they were allowed to retain the entitlement to the product. No reconciliation on your service is required, but you should keep track of the user account and frequency of the event type to flag possible fraudulent behavior. |
| `ChargebackReversal` | This item was originally reported as either Revoked or Returned due to a Chargeback that was initiated from the payment instrument (Credit Card, Bank, etc.). Microsoft successfully appealed the chargeback. The cost of the item was restored to Microsoft and the item's state restored to the user's account. For information on Chargebacks see [Chargebacks and chargeback reversals](#chargebacks-and-chargeback-reversals). For specific behavior of Developer-managed vs. Store-managed consumables, see [Unique behavior of Developer-managed consumables during chargeback Reversal](#unique-behavior-of-developer-managed-consumables-during-chargeback-reversal). |

### ClawbackEventRecurrenceData structure

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `recurrenceId` | `string` | Unique ID to the user's subscription period and can be used with the Subscription management APIs. Same value as `id` from the [RecurrenceQuery API](../service-to-service/microsoft-store-apis/xstore-v8-recurrence-query.md) and `recurrenceData` from the [Collections query API](../service-to-service/microsoft-store-apis/xstore-v9-query-for-products.md). | Yes |
| `durationIntervalStart` | `datetime` | The UTC date and time that the subscription's interval tied to the purchase order started. | Yes |
| `durationInDays` | `int` | Number of days purchased for the subscription interval in the order. | Yes |
| `consumedDurationInDays` | `int` | Number of days that were used and not refunded / returned to the user. | Yes |
| `refundType` | `string` | Either `Full` (user given a full refund for the current subscription period regardless of days used), or `Partial` representing a pro-rated refund of the remaining unused subscription days. See [Example ClawbackEvenRecurrenceData for full and partial returns](#example-clawbackevenrecurrencedata-for-full-and-partial-returns) | Yes |

### Clawback event example

```json
{
  "id": "5ef37bd1-8b4b-48c4-9b67-be458d8ab9de",
  "source": "/Purchase/Refund",
  "type": "ClawbackEventContractV2",
  "data": {
    "lineItemId": "230e9063-bffe-411a-8aa1-6f99ca091452",
    "orderId": "70fd35f2-7e4a-4f27-8df3-a673a5a4d9d9",
    "productId": "9N0297GK108W",
    "productType": "UnmanagedConsumable",
    "purchasedDate": "2023-01-24T21:59:19.5725585+00:00",
    "eventDate": "2023-01-26T08:18:52.246847+00:00",
    "eventState": "Revoked",
    "sandboxId": "XDKS.1",
    "skuId": "0010"
  },
  "time": "2023-01-26T08:18:56.7103057+00:00",
  "specversion": "1.0",
  "datacontenttype": "application/json",
  "subject": "/Purchase/Refund/907eb4af-57bf-4ff6-b040-e9296d169436",
  "traceparent": "00-6d2a86a53e8cae15cddaadc43f4d9670-4821cba073c416c1-00"
}
```

## Clawback refund vs return states

When an event comes from the `/Purchase/Refund` source, it indicates that the event is tied to either a customer `refund` or `return` request.
These two terms are sometimes used synonymously, but in the context of the Microsoft Store services they each have unique behavior that your service should handle.

For both cases, the user receives their payment back from the order, but they differ in what happens to the entitlement or quantity granted from the purchase.
A return operation attempts to remove the entitlement or quantity from the user's account.
Refunds however result in the user's account retaining the entitlement or quantity from the purchase.  

Requests to Microsoft Customer Support or through the automated tools are treated as return requests.
However, in rare cases, as a make-good gesture based on the circumstances related to the customer's issue, the state of the event might be `Refund` to provide positive customer service.
The `Refund` state might also be used as a pro-active refund issued to the customer if there's an indication the purchase is reported as a chargeback to avoid the chargeback processing fees.

Your service should check the `eventState` value and follow the recommendations for reconciliation of each value outlined in [Clawback event states](#clawback-event-states).
For example scenarios, see [Return and Revoked state behavior for consumable products](#return-and-revoked-state-behavior-for-consumable-products) and [Clawback event behavior for Store-managed subscriptions](#clawback-event-behavior-for-store-managed-subscriptions).

## Chargebacks and chargeback reversals

An event from the `/Purchase/Chargeback` source indicates the payment institution reversed the charge of the order and took back the payment.
A common cause of a chargeback is a dispute or fraudulent charge to the payment instrument.
When the chargeback event happens, the Clawback service reports the event with either a `Revoked` or `Returned` state based on the attempt to remove the entitlement or quantity from the user's account.
At the time of the event, your service should treat chargeback events with the same reconciliation actions as events from `/Purchase/Refund`.

Microsoft commonly appeals the chargeback if we believe the purchase appears to be legitimate and the quantity was used.
If the appeal is granted, payment is sent back to Microsoft and a `ChargebackReversal` event is written to your Clawback queue.
This event has the same OrderIDs as the initial chargeback event.

When a `ChargebackReversal` happens, the item that was purchased is restored to the user's account.
Therefore, any action taken on your server to revoke or remove the purchased item should be reversed as the payment restored.

## Reconciling Consumable Clawback events

When a Clawback event shows that an item was already used by the player, you can choose what action to take on their account.
Some possible actions include:

- Remove the same amount of currency from the user's current balance (if they have enough)
- Remove the most recent items they bought with that currency (if they don't have enough currency left)
- Don't take action right now, but watch their account for patterns of fraud or abuse (example: buying large amounts of currency, using it, then getting refunds repeatedly)

We recommend telling the user what action you took and why, and logging this information to avoid customer support issues.
Example: Due to a return issued to your account through Microsoft, [qty] of [product] was removed from your account balance.

### Requirements to manage consumable Clawback events

To properly handle Clawback events for consumables, your service must track each consume transaction and use the `includeOrderIds` parameter as TRUE.
This parameter returns the IDs related to the purchase orders and quantity used to fulfill the consume request.

These same OrderIds are provided in the Clawback events to search for and identify which transaction and user in your database should be reconciled.

For more information on consume tracking recommendations, see [Managing consumable products from your service](xstore-managing-consumables-and-refunds.md)

#### Create a consume tracking database

Your tracking database should store these values for each transaction so you can find and update them when Clawback events arrive.

| Variable | Source | Description |
| -------- | ------ | ----------- |
| `Key / Unique Id` | [OrderId]:[LineItemId]:[ProductId] | OrderId and LineItemId might be duplicated across products granted through a bundle purchase, therefore your unique keys should include ProductId. The recommendation is to use a combination of the OrderId, LineItemId, and ProductId. However, you might not have access to the LineItemId for Durable, Games, and Bundle products. For consumables a minimum of LineItemId and ProductId would be required for a unique identifier if your consumable is granting a quantity of 1 per purchase. |
| `ProductId` | ProductId from consume request | Because the same orderId and lineItemId can be shared between different products granted through a bundle purchase, you should also track the ProductId of the item consumed. |
| `UserId` | UserId your system uses to identify the user being granted the consumable value | Clawback events don't provide userIds, therefore you must track which user received the content within your system to take reconciliation action. |
| `OrderId` | orderTransactions -> orderId (when using the includeOrderIds: true option in /consume request) | ID of user's purchase order used to fulfill all or part of the consume request. Example: ID related to the purchase of the whole shopping cart. |
| `LineItemId` | orderTransactions -> orderLineItemId (when using includeOrderIds: true in /consume request) | ID representing a unique product within the user’s purchase order used to fulfill the consume request. Example: ID related to a unique item within the shopping cart during the purchase. |
| `Qty` | orderTransactions -> quantityConsumed (when using includeOrderIds: true in /consume request) | Amount of consume request fulfilled by this specific OrderId / LineItemId. Note: Should be 1 in the standard consumable configuration but can be greater than 1 if your consumable is configured to grant a qty greater than 1 on each purchase. |
| `Status` | Current state of the consumed transaction within your system for your own tracking | Helpful so that you can mark when a consume transaction was already reconciled when a Clawback event is read and processed. Also needed for Chargeback and Chargeback reversal so that when you revoke an item due to a Chargeback event, you can undo the previous action taken during the initial Chargeback event reconciliation. |

Set up your tracking database early.
Preferably, before you start using the Clawback event queue giving you a history of transactions that might get refunded or charged back later.
It also lets you compare data from before and after you start handling Clawback events to see effects.

### Return and Revoked state behavior for consumable products

| Consumable Type | Consumed | eventStatus | Effect to the user's entitlement of the consumable | Recommended actions for developer services |
| --------------- | -------- | ----------- | -------------------------------------------------- | ------------------------------------------ |
| `Store-managed` | No | `Return` | Qty reduced by the amount granted from the purchase. Ex: Qty = 1 before return, Qty = 0 after event. | No action, item wasn't consumed. |
| `Store-managed` | Yes | `Revoked` | Qty not reduced as the item was previously consumed / fulfilled. Ex: Qty = 0 before return, Qty = 0 after event. | Search your completed transactions database for matching OrderId, LineItemId, and ProductId. Revoke value of purchase from the user's balance tracked on game server. |
| `Developer-managed` | No | `Return` | Qty reduced by the amount granted from the purchase. Ex: Qty = 1 before return, Qty = 0 after event. | No action, item wasn't consumed. |
| `Developer-managed` | Yes | `Revoked` | Qty not reduced as the item was previously consumed / fulfilled. Ex: Qty = 0 before return, Qty = 0 after event. | Search your completed transactions database for matching OrderId, LineItemId, and ProductId. Revoke value of purchase from the user's balance tracked on game server. |

### Refund state behavior for consumable products

A Refund event state is a special case where the user's payment is returned, but also allowed to keep the entitlement to the item. There are two main scenarios that would lead to this event state:

- Refund issued by customer service as a make good effort to a user for their inconvenience or issue that lead to the refund.
- Proactively issued refund when there's a high probability the purchase is reported as a chargeback. Preventing the added fees and resource cost of processing a likely chargeback event.

Therefore, the correct action when you see a Refund event state is to record the event with the linked account information on your service.
Then watch for patterns or repeated Refund event states on a single account indicating possible fraud or abuse on that account.

| Consumable Type | Consumed | eventStatus | Effect to the user's entitlement of the consumable | Recommended actions for developer services |
| --------------- | -------- | ----------- | -------------------------------------------------- | ------------------------------------------ |
| `Store-managed` | No | `Refund` | Qty isn't reduced | No revocation action, user is allowed to keep the entitlement, but log the event and any linked user information to watch for repeated patterns |
| `Store-managed` | Yes | `Refund` | Qty isn't reduced | No revocation action, user is allowed to keep the entitlement, but log the event and any linked user information to watch for repeated patterns |
| `Developer-managed` | No | `Refund` | Qty isn't reduced | No revocation action, user is allowed to keep the entitlement, but log the event and any linked user information to watch for repeated patterns |
| `Developer-managed` | Yes | `Refund` | Qty isn't reduced | No revocation action, user is allowed to keep the entitlement, but log the event and any linked user information to watch for repeated patterns |

### Chargeback behavior for consumable products

| Consumable Type | Consumed | eventStatus | Effect to the user's entitlement of the consumable | Recommended actions for developer services |
| --------------- | -------- | ----------- | -------------------------------------------------- | ------------------------------------------ |
| `Store-managed` | No | `Return` | Qty reduced by the amount granted from the purchase. Ex: Qty = 1 before return, Qty = 0 after event. | No action, item wasn't consumed. |
| `Store-managed` | Yes | `Revoked` | Qty not reduced as the item was previously consumed / fulfilled. Ex: Qty = 0 before return, Qty = 0 after event. | Search your completed transactions database for matching OrderID, LineItemID, and ProductID. Revoke value of purchase from the user's balance tracked on game server, then update tracking database entry and note it was a chargeback |
| `Developer-managed` | No | `Return` | Qty reduced by the amount granted from the purchase. Ex: Qty = 1 before return, Qty = 0 after event. | No action, item wasn't consumed. |
| `Developer-managed` | Yes | `Revoked` | Qty not reduced as the item was previously consumed / fulfilled. Ex: Qty = 0 before return, Qty = 0 after event. | Search your completed transactions database for matching OrderID, LineItemID, and ProductID. Revoke value of purchase from the user's balance tracked on game server, then update tracking database entry and note it was a chargeback |

### Chargeback reversal behavior for consumable products

| Consumable Type | Consumed | eventStatus | Effect to the user's entitlement of the consumable | Recommended actions for developer services |
| --------------- | -------- | ----------- | -------------------------------------------------- | ------------------------------------------ |
| `Store-managed` | No | `ChargebackReversal` | Qty from chargeback is restored to the user's Qty because it wasn't consumed before the chargeback event. Ex: Qty = 0 before reversal, Qty = 1 after reversal. | Qty should be seen and consumed as normal by your normal query flow. Search your completed transactions database for matching OrderID, LineItemID, and ProductID. If a match isn't found, or the record doesn't indicate it went through a Chargeback, do nothing. |
| `Store-managed` | Yes | `ChargebackReversal` | Qty from chargeback is **not** restored to the user's Qty because it was previously consumed before the chargeback event. Ex: Qty = 0 before reversal, Qty = 0 after reversal. | Search your completed transactions database for matching OrderID, LineItemID, and ProductID. If a match is found and it was recorded as being a Chargeback in your system, reverse the Chargeback action taken to the user's balance previously. Then update the tracking entry to note the Chargeback was reversed. |
| `Developer-managed` | No | `ChargebackReversal` | Qty from chargeback is restored to the user's Qty because it wasn't consumed before the chargeback event. But Qty never shows greater than 1, See following note. | See following note. |
| `Developer-managed` | Yes | `ChargebackReversal` | Qty from chargeback **is** restored to the user's Qty even though it was already consumed. See following note. | See following note. |

> [!NOTE]
> Developer-Managed consumables behave uniquely with chargeback reversals and require extra logic to handle these events. See following section.

#### Unique behavior of Developer-managed consumables during chargeback reversal

Regardless if the Developer-managed consumable was consumed or not before the chargeback event, if there's a chargeback reversal the consumable quantity from the purchase is added back to the user's account balance.
However, Developer-managed consumables **never** report a quantity greater than 1 even if there are multiple valid entitlements to the Developer-managed consumable.
This behavior is because Developer-managed consumables are intended to block users from purchasing the consumable again until consumed/fulfilled by the game service.
For a chargeback reversal, when there's already a nonzero balance on the user's account the multiple entitlements are still valid and can be individually consumed as normal.
Just note that the user's balance will remain as '1' after each consume request until all of the active entitlements are consumed / fulfilled.
Therefore, your system should go through the consume flow as normal until the user's balance for the Developer-managed consumable reports as 0.
When your service consumes a product check for a matching OrderID, LineItemID, and ProductID.
If there's a match, check the status for the item's record to know if it was previously part of a Chargeback reconciliation.
If it was marked as reconciled from a chargeback, reverse the action taken on the user's account balance and mark the item as a chargeback reversal.

Example:
Qty = 1 before reversal, Qty = 1 after reversal but there are actually two active entitlements.
Service consumes one of the consumable, user's quantity will still be '1' after the consumed request.
Service consumes one more of the consumable, user's quantity now reports as 0.

### Bundle refund considerations for consumables

When consumables are included in a refunded bundle, you receive separate Clawback events for:

1. **The bundle itself** - This event represents the bundle product that was refunded
2. **Each consumable included in the bundle** - Individual events for each consumable product that was granted as part of the bundle

When reconciling bundle-related consumable refunds:

- **Track bundle relationships**: Consider maintaining records of which consumables were granted as part of bundle purchases vs individual purchases
- **Coordinate reconciliation**: Ensure that both the bundle refund and individual consumable refunds are properly handled without double-processing
- **User communication**: When notifying users about revoked content, consider mentioning that the action is related to a bundle refund to provide better context

The OrderIDs for consumable events from bundle refunds match the bundle's original purchase OrderID, allowing you to correlate these events together.

## Reconciling Store-managed subscription Clawback events

When a Clawback event for a store-managed subscription is detected, extra information related to the subscription is added to the Clawback event through the [ClawbackEventRecurrenceData structure](#clawbackeventrecurrencedata-structure).
Specifically, if the user was issued a full or partial amount of their payment for the corresponding subscription interval.
If your subscription grants monthly in-game rewards or currency to the user’s account, you might want to revoke those rewards depending on how many days payment was returned vs retained.

  [NOTE!]
  The development team and publisher are free to determine the proper course of action on a user’s account when a store-managed subscription Clawback event is received. If action is taken to revoke items or benefits, the best practice is to notify the user of the reconciliation actions. Including action taken, reason why, and then logging the information in your service. These logs can help avoid further Customer Support calls or disputes. Example: Due to a return issued to your account through Microsoft, we adjusted your [subscription product] benefits.

### Requirements for managing Clawback events for Store-managed subscription

For subscription products, the OrderID associated with the clawback event might change with each renewal transaction of the subscription.
Additionally, the LineItemIds for subscriptions aren't exposed in the Collections or Recurrence APIs.
Therefore, the best way to track and identify the subscription from the Recurrence APIs to related clawback events is through the recurrenceID value, which is the same value as `id` from the [RecurrenceQuery API](../service-to-service/microsoft-store-apis/xstore-v8-recurrence-query.md) and `recurrenceData` from the [Collections query API](../service-to-service/microsoft-store-apis/xstore-v9-query-for-products.md).
We recommend using the `id` as a lookup / unique ID for the subscription that you're associating with the user in your tracking database.

### Clawback event behavior for Store-managed subscriptions

| eventStatus | Scenario | Recommended actions for developer services |
| ----------- | -------- | ------------------------------------------ |
| Revoked | Subscription interval includes days that already used, the subscription entitlement was removed from the user’s account. | Verify if return is partial or full. Take appropriate action to revoke entitlements not paid for, or grant partial value based on how much of a partial payment was retained. |
| Return | Upcoming subscription interval that not yet used / started was removed from the user’s account. | No action, interval wasn't started. |
| Refund | Current active subscription's interval payment returned to the user. | No revocation action, user is allowed to keep the entitlement, but log the event and any linked user information to watch for repeated patterns. Follow normal status and logic using the Recurrence services. See [Managing subscription products from your service](xstore-managing-subscriptions.md). |
| ChargebackReversal | Subscription interval from a previous Revoked state was restored to the user’s account. | Reverse any action taken when the item was reconciled as revoked. Follow normal status and logic of the subscription state as reported by the Recurrence services. See [Managing subscription products from your service](xstore-managing-subscriptions.md). |

#### Example ClawbackEvenRecurrenceData for full and partial returns

Scenario: Monthly subscription, user was issued a pro-rated (partial) return on July 6, 2023.
User was given back the price of 25 unused days, Microsoft retained the remaining price for six days that were used.

```json
    "recurrenceData": {
      "recurrenceId": "mdr:0:ae5cad80acf2428fa64c38529996a3fd:df3763c2-36f8-4bde-8fa5-a29fb6058d62",
      "durationIntervalStart": "2023-07-01T00:00:00+00:00",
      "durationInDays": 31,
      "consumedDurationInDays": 6,
      "refundType": "Partial"
    }
```

Scenario: Monthly subscription, user was issued for a full return on July 6, 2023.
User was given back the full price paid for the month subscription, Microsoft didn't retain any payment.

```json
    "recurrenceData": {
      "recurrenceId": "mdr:0:0dc7194514404dd3bf0f678e21716774:23a454d5-f240-4dad-9923-9c3f53f515cc",
      "durationIntervalStart": "2023-07-01T00:00:00+00:00",
      "durationInDays": 31,
      "consumedDurationInDays": 6,
      "refundType": "Full"
    }
```

Scenario: Yearly subscription, user was issued a pro-rated (partial) return on January 15, 2024.
User was given back the price of 199 unused days, Microsoft retained the remaining price for 168 days that were used.

```json
    "recurrenceData": {
      "recurrenceId": "mdr:0:9ed0a48236404b78a017e9e226da94c6:22aa4f3c-1ffc-4dd3-8801-cb2a227a5c46",
      "durationIntervalStart": "2023-07-31T00:00:00+00:00",
      "durationInDays": 367,
      "consumedDurationInDays": 168,
      "refundType": "Partial"
    }
```

 [NOTE!]
 The previous example’s yearly subscription durationInDays is 367 rather than 365. One day is added due to 2024 being a leap-year. The other day added is to move the renewal date to the first of the next month, which avoids issues with months that don't have a 29th, 30th, or 31st day. For more information, see [Understanding subscription start, renew, and expire dates](xstore-managing-subscriptions.md#understanding-subscription-start-renew-and-expire-dates).

In the latter example, payment for time before the Clawback event was retained. If the subscription granted monthly rewards or in-game items, the recommendation is to ensure the user keeps the items granted to them for that time period.

## Reconciling Durable and Game product Clawback events

When a Clawback event is received for a durable or game product (including bundles), your reconciliation approach might be different than a consumable.
If your client is using the appropriate XStore licensing APIs, the client should act appropriately as the user no longer has a valid license.
However, in some cases your title or services might be granting tracked rewards or benefits added to their account from the durable purchase.
In this case, it would be similar to a consumable where the granted reward tracked in your service would need to be revoked from the user's account.

### OrderIds and LineItemIds for Durable and Game products

When a Game or Durable product is purchased, it generates an OrderId and LineItemId as any other product purchase.
However, these product types' LineItemIds aren't exposed within the existing Collections service query APIs.
If your service tracks the ownership of and matching Clawback events for a Game or Durable, use the OrderID combined with the ProductID of the Game or Durable as a unique identifier.

### Clawback event states for Durable and Game products

| eventStatus | Effect to user entitlement | Recommended actions |
| ----------- | -------------------------- | ------------------- |
| `Returned` | Entitlement and license removed from user's account | Implement your own revocation logic for the specific content or features based on this product (if necessary) |
| `Revoked` | Entitlement and licenses removed from user's account | Implement your own revocation logic for the specific content or features based on this product (if necessary) |
| `Refunded` | User keeps the entitlement | No revocation action but log the event and monitor for patterns of abuse |
| `ChargebackReversal` | Previously revoked entitlement restored | Restore any content or features that were previously revoked due to chargeback |

Your service or game should notify users of any reconciliation actions taken, provide clear reasons, and log all actions in your service to help resolve potential Customer Support inquiries.

## Clawback events for bundles

When a bundle is refunded, the following Clawback events are generated and written to the Clawback queues associated with the bundle product itself.
If the included products in the bundle are associated with different Microsoft Entra client IDs, the events aren't written to those queues.
Therefore, ensure your bundle product is linked to the Microsoft Entra client IDs of the queues you expect to receive these events in.

- **Bundle**: The bundle itself generates a Clawback event based on its product type (Game bundle or Durable bundle) and if the partner's Clawback queue is configured for the associated product types
- **All included consumables**: Each consumable product included in the bundle generates separate Clawback events
- **Other included products**: Durable and Game products included in bundles also generate events if those product types are enabled for your queue. However, items enabled through free-to-use configurations don't generate events.

### Required configuration for bundle events

To receive Clawback events for a bundle and its included products, you must ensure your Microsoft Entra Client IDs are properly associated with the bundle product in Partner Center:

**Add-on & Season Pass Bundles:**

1. Navigate to the **Product collections and purchases** page of the base Game that the bundle is configured under
2. Ensure the correct Microsoft Entra Client IDs are associated with the bundle
3. Save and republish the product to your sandbox and RETAIL

**Game Bundles:**

1. Navigate to the **Product collections and purchases** page for the Game bundle product
2. Ensure the correct Microsoft Entra Client IDs are associated with the bundle  
3. Save and republish the product to your sandbox and RETAIL

> [!IMPORTANT]
> Bundle products must be republished after updating Microsoft Entra Client ID for the changes to take effect and clawback events to be written to your queue.

### OrderIds and LineItemIds for bundles and their included products

When a bundle is purchased, an OrderID and LineItemId are generated as any other product purchase.
The included products granted within the bundle inherit these same values.
Therefore, consumables within a bundle share the same OrderID and LineItemId that are reflected in both the consume results and Clawback events.

Similar to Durable and Game products, the bundle's LineItemId isn't exposed within the existing Collections service query APIs.
If your service is tracking the ownership of and matching Clawback events for the bundle, use the OrderID combined with the ProductID of the bundle as a unique identifier.

## Testing product returns within your development sandbox

Development accounts for sandboxes don't have access to the automated product return request tool on support.xbox.com.
Therefore, testing your Clawback implementation requires making a refund request through your Microsoft Developer Account manager or Microsoft contact following these steps:

1. Verify that the test products are set with nonzero prices ($0.01 is sufficient).
2. Sign-in to the development sandbox with your test account.
3. Purchase the products on the test account.
4. For consumable products: Fulfill / consume the purchased items using the `includeOrderIds: true` option on the consume request. For other product types: Ensure the products are granted to the user's account.
5. Note the OrderIDs from the purchase (available through the query API as the TransactionID, or consume responses for consumables).
6. Send an email to your Microsoft Developer Partner Manager or Microsoft contact and request a product return for one or more products.
The email must include the following information in the following template example:  

| Request Type | OrderID | OrderLineItemId | Test Account (Email) | Name of item purchased | Date of Purchase | Request Summary |
| ------------ | ------- | --------------- | -------------------- | ---------------------- | ---------------- | --------------- |
| Return | 8060a406-85c8-4d01-a105-ff11725499c9 | cb054aa0-7392-4cc6-af06-53b285e39259 | `XDKS-RefundTest0001@xboxtest.com` | Test Consumable Pack | 2025-08-30T21:53:08.2565331+00:00 | Clawback testing of consumable item |
| Return | 9070b507-96d9-5e02-b206-gg22836500a0 | dc165bb1-8493-5dd7-bg07-64c396f40360 | `XDKS-RefundTest0001@xboxtest.com` | Test DLC Pack | 2025-08-30T22:15:22.1234567+00:00 | Clawback testing of durable item |
| Return | a180c608-a7ea-6f03-c317-hh33947611b1 | ed276cc2-9504-6ee8-ch08-75d407g51471 | `XDKS-RefundTest0001@xboxtest.com` | Test Season Pass Bundle | 2025-08-30T23:45:33.9876543+00:00 | Clawback testing of bundle with included consumables |
| | | | | | | |

![alert](../../../../media/public-images/common/note.gif) **NOTE:** Make sure your request is listed as a 'return' and not a 'refund.' The tools used for 'refunds' returns the payment, but keeps the entitlement on the user's account. A 'return' in the tools causes the entitlement to be revoked and cause Clawback event messages to be written to the queue.

![alert](../../../../media/public-images/common/note.gif) **NOTE:** When testing bundle refunds, you receive multiple Clawback events - one for the bundle itself and extra events for any consumables (and possibly other products) included in the bundle. Ensure your Microsoft Entra Client ID is properly associated with the bundle product in Partner Center and the bundle republished for the included product events to generate.

A representative from the Xbox support team replies to confirm the request was processed within three business days.
You should then be able to see the correct Clawback information in your queries.
If authorized by your Developer Partner Manager, they might provide you with the Xbox Support team's email address for making future requests directly.
Don't share this alias broadly within your organization and remember to CC your Developer Partner Manager on any future direct requests.

![alert](../../../../media/public-images/common/note.gif) **NOTE:** Returns and refunds only generate Clawback events for nonzero priced products. Therefore, your products must have at least a $0.01 price. All test accounts have a test payment instrument to make test purchases in a sandbox. If you're using an older account that doesn't have a test payment instrument, create a new account to be able to do this flow.

## Troubleshooting Common Issues

### Queue Access Problems

- **Symptom**: Can't access queue with SAS token
- **Solutions**:
  - Verify Microsoft Entra client ID is correctly associated with products in Partner Center
  - Check that the SAS token isn't expired. If expired, request a new one.
  - Ensure correct Azure Storage Queue URI format

### Missing Clawback Events

- **Symptom**: Expected events not appearing in queue
- **Solutions**:
  - Confirm product type is enabled for your queue (contact Developer Partner Manager)
  - Verify products are republished after Microsoft Entra client ID association
  - Check that test products have nonzero prices ($0.01 minimum)

### Duplicate Event Processing

- **Symptom**: Same event processed multiple times
- **Solutions**:
  - Implement idempotency using `id` field from Clawback event
  - Track processed message IDs to prevent reprocessing
  - Use proper Get/Delete workflow (not just Peek)

### Reconciliation Issues

- **Symptom**: Can't match events to transactions
- **Solutions**:
  - Ensure consume tracking database includes OrderID, LineItemID, ProductID
  - Verify `includeOrderIds: true` is used in consume requests
  - For subscriptions, use the `id` value from the [RecurrenceQuery API](../service-to-service/microsoft-store-apis/xstore-v8-recurrence-query.md) or `recurrenceData` value from the [Collections query API](../service-to-service/microsoft-store-apis/xstore-v9-query-for-products.md) instead of OrderId. These values match the `recurrenceId` value within a matching clawback event.

### Bundle Event Confusion

- **Symptom**: Unexpected number of events for bundle refunds
- **Solutions**:
  - Expect multiple events: one for bundle + one per included consumable
  - Check that bundle product has correct Microsoft Entra client ID association
  - Verify bundle was republished after configuration changes

## See also

[Commerce Overview](../commerce-nav.md)

[Consumable-based ecosystems](../fundamentals/xstore-consumable-based-ecosystems.md)

[Managing consumable products from your service](xstore-managing-consumables-and-refunds.md)

[Microsoft Store Service APIs](microsoft-store-apis/xstore-nav.md)

[Microsoft.StoreServices library (GitHub)](https://github.com/microsoft/Microsoft-Store-Services)

[Microsoft.StoreServices Sample (GitHub)](https://github.com/microsoft/Microsoft-Store-Services-Sample)
