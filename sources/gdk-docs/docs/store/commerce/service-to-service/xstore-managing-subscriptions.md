---
author: CameronGoodwin
title: "Managing subscription products from your service"
description: "Describes how to use the Recurrence service to query and manage your subscription products and handle the different subscription states of a user."
kindex:
  - manage subscription products
  - subscription lifecycle from service
  - Store subscription operations
  - recurring billing management
ms.author: cagood
ms.topic: article
edited: '03/23/2026'
ms.date: 03/31/2026
permissioned-type: public
---


# Managing subscription products from your service

For subscription products, use a back-end service to validate status and manage lifecycle operations.
Using the Recurrence APIs gives your support and live-ops teams a reliable way to inspect, extend, or cancel subscriptions.

This article explains how to use the Recurrence endpoints for those scenarios.

## Utilizing the Microsoft.StoreServices .NET library and sample

To help demonstrate the principles and flows outlined in this article, review the Microsoft.StoreServices Sample.
The sample uses the Microsoft.StoreServices library to manage authentication and make the calls to the Microsoft Store Services.
The sample service itself has example logic for managing subscription products and provides a configuration guide to get it set up.  

- [Microsoft.StoreServices (GitHub)](https://github.com/microsoft/Microsoft-Store-Services)
- [Microsoft.StoreServices Sample (GitHub)](https://github.com/microsoft/Microsoft-Store-Services-Sample)

## Subscription Product Types

Both Store-managed and Add-on subscription product types work with the Recurrence service to view and manage the user's subscription.
For more information on each of these product types, see [Choosing the right product type](../getting-started/xstore-choosing-the-right-product-type.md#subscriptions)

## Querying for a user's subscription

Use [purchase.mp.microsoft.com/v8.0/b2b/recurrences/query](microsoft-store-apis/xstore-v8-recurrence-query.md) as the primary endpoint for subscription status.
It returns active and historical subscription periods, plus the `subscriptionId` needed for change operations.
It also includes the fields required to distinguish Grace and Dunning periods.

Collections APIs ([b2bLicensePreview (v8)](microsoft-store-apis/xstore-v8-query-for-products.md) and [publisherQuery (v9)](microsoft-store-apis/xstore-v9-query-for-products.md)) can show active subscription entitlement but not the same recurrence detail.

## Delay between satisfying entitlement checks on the client vs server-to-server

When you publish an update adding new items (satisfying entitlements) to a bundle, a delay exists between the visibility of the new items between the client and server-to-server API queries.
This delay occurs because different store systems update their catalog caches at different intervals.
When the change is published to the catalog, the local licensing services will usually get the updated info first and the caches used by publisherQuery within two to three hours after.
Therefore, anticipate a few hours between client side APIs granting access and your server-to-server calls not reflecting ownership of the new items.

The Recurrence service itself isn't affected, only the publisherQuery or b2bLicensePreview endpoints querying for satisfying entitlements on the newly added items.  

### Understanding subscription start, renew, and expire dates

The `StartTime` date of a subscription is the date on which the active subscription started.
If the subscription is set for auto-renew, the start date remains the same but the expired dates change as the subscription is renewed in the following months.
If a subscription is canceled, expires, or revoked, a new subscription object is created when the user purchases the subscription again.
The new active subscription period has the `StartTime` of the day they activated or purchased the new subscription.

The subscription periods within the Microsoft Store are normally configured as a quantity of months.
For example, 1 month, 3 months, or 12 months.
When a user purchases a one month subscription, the `StartTime` is midnight UTC (00:00:00) of the day they started the subscription. `ExpirationTime` is the number of months (not days) added to the `StartTime` minus one second (23:59:59 UTC).  
This value is so that the subscription expires just before midnight UTC.

However, some months have a different number of days creating a conflict with subscriptions starting on a 29th, 30th, or 31st of a month.  
If the user's `StartTime` falls on any of these days, the `ExpirationTime` is modified to be 23:59:59 UTC the last day of the expiring month.
This way, the renewal date is always midnight UTC (00:00:00) the first day of the month going forward and the `ExpirationTime` is always 23:59:59 UTC the last day of the month.

#### Example start, renew, and expire date behavior of a one month subscription

| Purchase Date | StartTime | ExpireTime | Auto Renew Date | Active Days |
| ------------- | --------- | ---------- | --------------- | ----------- |
| 2023-02-27T12:00:00Z | 2023-02-27T00:00:00Z | 2023-03-26T23:59:59Z | 2023-03-27T00:00:00Z | 28 |
| 2023-03-27T12:00:00Z | 2023-03-27T00:00:00Z | 2023-04-26T23:59:59Z | 2023-05-27T00:00:00Z | 31 |
| 2023-03-29T12:00:00Z | 2023-03-29T00:00:00Z | 2023-04-30T23:59:59Z | 2023-05-01T00:00:00Z | 32 |
| 2023-04-29T12:00:00Z | 2023-04-29T00:00:00Z | 2023-05-31T23:59:59Z | 2023-06-01T00:00:00Z | 33 |
| 2023-04-30T12:00:00Z | 2023-04-30T00:00:00Z | 2023-05-31T23:59:59Z | 2023-06-01T00:00:00Z | 32 |
| 2024-02-27T12:00:00Z | 2024-02-27T00:00:00Z | 2024-03-26T23:59:59Z | 2024-03-27T00:00:00Z | 29 (Leap Year) |

### Understanding Grace and Dunning states

If an auto-renew payment fails at `ExpirationTime`, the subscription enters Grace, then Dunning if still unresolved.
Both periods report status of `InDunning`, so determine the current period by comparing current UTC time to `ExpirationTimeWithGrace`.

While a user's subscription is in Grace or Dunning, you should notify users to check their billing status on [Microsoft Account Service & Subscriptions](https://account.microsoft.com/services).

To properly set an account into each of these states for testing, see [Testing subscription products](#testing-subscription-products).

#### Grace period

During Grace, keep subscription benefits enabled while the Store retries the renewal payment.
If renewal succeeds, used Grace days are deducted from the next period.
If payment isn't resolved before `ExpirationTimeWithGrace`, the subscription moves to Dunning.

#### Dunning period

Dunning starts after Grace ends.
Disable subscription benefits during this period.
Users can't repurchase or redeem the same subscription during Dunning.
If payment remains unresolved through Dunning, the subscription becomes inactive.

### Grace and Dunning lengths

| Subscription Type | Subscription Length | Grace | Dunning (after Grace) |
| ----------------- | ------------------- | ----- | --------------------- |
| Add-on Subscription | Any | 3 days | 39 days |
| Store-managed Subscription | Any | 7 days | 36 days |

## Changing a user's subscription

Your services can also modify subscriptions with [purchase.mp.microsoft.com/v8.0/b2b/recurrences/{recurrenceId}/change](microsoft-store-apis/xstore-v8-recurrence-change.md).
Supported operations include adding days, disabling auto-renew, and canceling the subscription.
Your service needs the `recurrenceId` (same value as `id` from [RecurrenceQuery API](../service-to-service/microsoft-store-apis/xstore-v8-recurrence-query.md) and `recurrenceData` values from [Collections query API](../service-to-service/microsoft-store-apis/xstore-v9-query-for-products.md)) to operate on the user's subscription.

Here are some examples of how the Recurrence Change endpoint can be useful with your services:

- Adding time to users' subscriptions who experienced a service downtime.
- Integration with your Customer Service Support teams to help users with information on their subscription status, cancellations, etc.
- In-game UI allowing users to change settings such as auto-renew or end their subscriptions.

## Testing subscription products

The [Recurrence Change API](microsoft-store-apis/xstore-v8-recurrence-change.md) can also be used for testing.
`Extend` accepts negative day values, letting you move a test subscription forward to target states.

### Testing Active, Inactive, and Canceled states

When you test the Active, Inactive, and Canceled states for a subscription, you can use a base price of $0.00 on the subscription.
Add the subscription to the test account to verify the Active state and use the Recurrence Change endpoint to disable auto-renewal.
Then use the Recurrence Change endpoint to cancel the subscription or subtract enough days so that the `ExpirationTime` is past the current UTC DateTime.

### Testing Grace and Dunning states

To test Grace and Dunning states, the subscription must have a non-zero price.  
Additionally, the test account must be configured where follow-up payments wouldn't succeed when the `ExpirationTime` passes.
Currently the Microsoft Store doesn't have test payment instruments so the easiest way to set up an account is using prepaid currency codes as follows:

1. Set up the subscription with a low price point such as $0.99 in your test environment.
2. [Purchase an Xbox prepaid gift card](https://www.microsoft.com/en-us/p/xbox-gift-card-digital-code/cfq7ttc0k63h/0002?activetab=pivot:overviewtab) for $1.00 or $2.00 to cover the first subscription purchase (plus tax) but not the renewal.
3. Redeem the gift card on your test account.
4. Purchase the subscription on the test account.
5. Make sure auto-renew is enabled for the subscription but there aren't enough funds to renew the subscription.
6. Use Recurrence Change to move the `ExpirationTime` of the subscription to be within the next 24 hours (see the following note).
7. Wait for `ExpirationTime` to pass naturally and for status to show `InDunning` (can take up to 24 hours after `ExpirationTime`).

For accurate Grace -> Dunning -> Inactive behavior, let the account progress naturally after setting up the test.

> [!NOTE]
> To properly get an account into the 'InDunning' state for Grace and Dunning periods, the account must pass the `ExpirationTime` and `ExpirationTimeWithGrace` dates naturally.
> When subtracting days, target an `ExpirationTime` within the next 24 hours, then let time pass naturally.
> If you move `ExpirationTime` to a point already in the past, `InDunning` might not appear and the test state can become invalid.
> The only way to resolve this issue is to cancel the subscription and create a new test subscription.

## See also

[Commerce Overview](../commerce-nav.md)

[Microsoft Store Service APIs](microsoft-store-apis/xstore-nav.md)

[purchase.mp.microsoft.com/v8.0/b2b/recurrences/query](microsoft-store-apis/xstore-v8-recurrence-query.md)

[purchase.mp.microsoft.com/v8.0/b2b/recurrences/{recurrenceId}/change](microsoft-store-apis/xstore-v8-recurrence-change.md)

[Microsoft.StoreServices library (GitHub)](https://github.com/microsoft/Microsoft-Store-Services)

[Microsoft.StoreServices Sample (GitHub)](https://github.com/microsoft/Microsoft-Store-Services-Sample)
