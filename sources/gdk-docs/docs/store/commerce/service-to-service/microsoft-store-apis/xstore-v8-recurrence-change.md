---
author: CameronGoodwin
title: "purchase.mp.microsoft.com/v8.0/b2b/recurrences/{recurrenceId}/change"
description: "Describes how to change the user's subscription billing state."
kindex:
  - recurrence change API
  - subscription recurrence update
  - v8 recurrences change endpoint
  - modify recurring subscription settings
ms.author: cagood
ms.topic: reference
edited: '03/23/2026'
ms.date: 03/31/2026
permissioned-type: public
---

# purchase.mp.microsoft.com/v8.0/b2b/recurrences/{recurrenceId}/change

> [!NOTE]
> This API only works if the subscription is published to RETAIL. If using a development sandbox, first publish the subscription to either a private flight group or as hidden in RETAIL, before calling this API. If the subscription isn't published to RETAIL, the response is an HTTP 400 error with a message stating "Requested catalog product data wasn't found."

This endpoint is used to change the billing state of the user's subscription product in the Microsoft Store.
You can cancel, extend, refund, or disable automatic renewal for a subscription.

The [Microsoft.StoreServices library (GitHub)](https://github.com/microsoft/Microsoft-Store-Services) provides the functionality of this method through the StoreServicesClient.RecurrenceChangeAsync API.

## Prerequisites

Review [Prerequisites for service-to-service APIs](../service-to-service-nav.md#prerequisites-for-service-to-service-apis).

This API only supports the Microsoft Entra ID auth type.

If product configuration isn't published in Partner Center, can succeed but return no results.

## Request

### Request syntax

| Method | Request URI |
| ------ | ----------- |
| `POST` | ```purchase.mp.microsoft.com/v8.0/b2b/recurrences/{recurrenceId}/change``` |

### Request header

| Header | Type | Description |
| ------ | ---- | ----------- |
| `Authorization` | `string` | Required. The Microsoft Entra ID service access token in the form `Bearer` &lt;*token*&gt;. |
| `Host` | `string` | Must be set to the value `purchase.mp.microsoft.com`. |
| `Content-Length` | `number` | The length of the request body. |
| `Content-Type` | `string` | Specifies the request and response type. Currently, the only supported value is `application/json`. |

### Request parameters

| Header | Type | Description | Required |
| ------ | ---- | ----------- | -------- |
| `recurrenceId` | `string` | Unique to the user's subscription and is the same value as `id` from the [RecurrenceQuery API](xstore-v8-recurrence-query.md) and `recurrenceData` from the [Collections query API](xstore-v9-query-for-products.md). | Yes |

### Request body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `b2bKey` | `string` | The User Purchase ID that represents the identity of the user for whom you are requesting. See [User Store ID key](../xstore-requesting-a-userstoreid.md#step-4-create-a-user-store-id-key). | Yes |
| `changeType` | `string` | Identifies the type of change you want to make. See table [Change Type operations](#change-type-operations) for possible values. | Yes |
| `extensionTimeInDays` | `string` | If the changeType parameter has the value Extend, this parameter specifies the number of days to extend the subscription. For testing scenarios, this number can be negative to remove days from the subscription. | Yes, if changeType has the value *Extend*; otherwise, no. |
| `sbx` | `string` | Optional value for authenticating with UserStoreIds that specifies the Sandbox the results should be scoped to. Default without this value is the RETAIL sandbox. X-Token auth doesn't need this value as the Sandbox is specified within the X-Token. | No |

### Change Type operations

| Change Type | Description |
| ----------- | ----------- |
| `Cancel` | Cancels the subscription. |
| `Extend` | Extends the subscription. If you specify this value, you must also include the `extensionTimeInDays` parameter in the request body. |
| `Refund` | Refunds the subscription to the customer. |
| `ToggleAutoRenew` | Disables automatic renewal for the subscription. If automatic renewal is currently disabled for the subscription, this value does nothing. |

### Request example

The following example demonstrates how to use this method to extend the subscription period by five days. Replace the b2bKey value with the User Store ID key that represents the identity of the user whose subscription you want to change.

```html
POST https://purchase.mp.microsoft.com/v8.0/b2b/recurrences/mdr:0:bc0cb6960acd4515a0e1d638192d77b7:77d5ebee-0310-4d23-b204-83e8613baaac/change HTTP/1.1
Authorization: Bearer <your access token>
Content-Type: application/json
Host: https://purchase.mp.microsoft.com

{
  "b2bKey":  "eyJ0eXAiOiJ...",
  "changeType": "Extend",
  "extensionTimeInDays": "5"
}
```

## Response

This method returns a JSON response body describing the updated subscription add-on, including modified fields.

> [!NOTE]
> This method has the same RETAIL publishing requirement described at the beginning of this article.

### Response body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `continuationToken` | `string` | If there are multiple sets of products, this token is returned when the page limit is reached. You can specify this continuation token in subsequent calls to retrieve remaining products. | No |
| `items` | `list<RecurrenceItem>` | An array of products for the specified user. For more information, see the following table. | Yes |

The `RecurrenceItem` object contains the following parameters.

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `autoRenew` | `bool` | Indicates if the user is enrolled to have their subscription auto-renew at the end of the next billing cycle. | Yes |
| `beneficiary` | `string` | The Publisher ID of the beneficiary within the User Purchase ID. | Yes |
| `expirationTime` | `DateTime` | The UTC date and time that the subscription expires. | Yes |
| `expirationTimeWithGrace` | `DateTime` | The UTC date and time that the user's Grace period ends if auto-renew fails at the ExpirationTime. During Grace, users should still have access and be considered valid subscribers, but notified they need to fix their auto-renew payment. | Yes |
| `id` | `string` | An ID that identifies this collection item from other items that the user owns. This ID is unique per product. | Yes |
| `isTrial` | `bool` | Indicates if the product is in a trial period, such as a subscription. | Yes |
| `lastModified` | `DateTime` | The UTC date that this item was last modified. | Yes |
| `market` | `string` | The country/region the product was purchased in following the two-character ISO 3166 country/region code. EX: US. | Yes |
| `productId` | `string` | Also referred to as the Store ID for the product within the Microsoft Store catalog. An example Store ID for a product is 9NBLGGH42CFD. | Yes |
| `recurrenceState` | `string` | Current state of the recurrence. See Recurrence States. | Yes |
| `skuId` | `string` | The specific SKU identifier if there are multiple offerings of the product in the Microsoft Store catalog. An example Store ID for a SKU is 0010. | Yes |
| `startTime` | `DateTime` | The UTC date that the subscription started. | Yes |
| `cancellationDate` | `DateTime` | The UTC date that the subscription was canceled. | No |

### Recurrence States

| Value | Description |
| ----- | ----------- |
| `None` | Indicates a perpetual subscription. |
| `Active` | The Subscription is valid, and the user is entitled to the subscription benefits. |
| `Inactive` | The subscription is past the expiration date, and the user turned off the automatic renew option for the subscription. |
| `Canceled` | The subscription was purposefully terminated before the expiration date, with or without a refund. |
| `InDunning` | The subscription is in dunning (that is, the subscription is nearing expiration, and Microsoft is trying to acquire funds to automatically renew the subscription). If the current date is before the expirationTimeWithGrace value, user should still be entitled to the subscription benefits. If current date is after the expirationTimeWithGrace value, user shouldn't have access to subscription benefits. |
| `Failed` | The dunning period is over, and the subscription failed to renew after several attempts. |

* *Inactive/Canceled/Failed* are terminal states. When a subscription enters one of these states, the user must repurchase the subscription to activate it again. The user isn't entitled to use the services in these states.
* When a subscription is Canceled, the `expirationTime` is updated with the date and time of the cancellation.
* The ID of the subscription remains the same during its entire lifetime. It doesn't change if the auto-renew option is turned on or off. If a user repurchases a subscription after reaching a terminal state, a new subscription ID will be created.
* The ID of a subscription should be used to execute any operation on an individual subscription.
* When a user repurchases a subscription after canceling or discontinuing it, if you query the results for the user you'll get two entries: one with the old subscription ID in a terminal state, and one with the new subscription ID in an active state.
* It's always a good practice to check both recurrenceState and `expirationTime`, since updates to `recurrenceState` can be delayed a few minutes (or occasionally hours).

### Response Example

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 431
ms-correlationid: 95b2aee4-1118-437b-8910-a2f7d84d0766
ms-cv: Kl684e1htkqb19Ch.0
Date: Thu, 03 Mar 2022 23:19:12 GMT

{
    "autoRenew": true,
    "beneficiary": "pub:NoUserIdProvided",
    "expirationTime": "2022-03-03T23:59:59.00+00:00",
    "expirationTimeWithGrace": "2022-03-17T23:59:59.00+00:00",
    "id": "mdr:0:3172048a2d1849ba9a24fd305854d4a8:cedca1d3-9580-4229-9cb5-f00c4547078c",
    "isTrial": false,
    "lastModified": "2022-03-03T23:19:12.26+00:00",
    "market": "US",
    "productId": "CFQ7TTC0HC8Z",
    "skuId": "0003",
    "startTime": "2022-03-03T00:00:00.00+00:00",
    "recurrenceState": "Active"
}

```

## Related articles

[purchase.mp.microsoft.com/v8.0/b2b/recurrences/query](xstore-v8-recurrence-query.md)

[Manage products from your services](../service-to-service-nav.md)

[Managing refunds and chargebacks from your service](../xstore-managing-refunds-and-chargebacks.md)

[Authenticating your service with the Microsoft Store APIs](../xstore-authenticating-your-service.md)

[Using publisherQuery (Collections v9) to query a user's products and entitlements](xstore-v9-query-for-products.md)
