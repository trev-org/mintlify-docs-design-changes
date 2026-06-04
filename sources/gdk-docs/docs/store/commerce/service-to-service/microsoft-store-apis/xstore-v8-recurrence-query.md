---
author: CameronGoodwin
title: "purchase.mp.microsoft.com/v8.0/b2b/recurrences/query"
description: "Describes how to query for a user's subscription products."
kindex:
  - recurrence query API
  - subscription recurrence lookup
  - v8 recurrences query endpoint
  - query recurring subscription state
ms.author: cagood
ms.topic: reference
edited: '03/23/2026'
ms.date: 03/31/2026
permissioned-type: public
---

# purchase.mp.microsoft.com/v8.0/b2b/recurrences/query

This endpoint queries subscription product status for a user in Microsoft Store.
It provides more detail than Collections, including Grace-period data after a failed auto-renew.

## Prerequisites

Review [Prerequisites for service-to-service APIs](../service-to-service-nav.md#prerequisites-for-service-to-service-apis).

This API only supports the Microsoft Entra ID auth type.

If product configuration isn't published in Partner Center, can succeed but return no results.

## Request

### Request syntax

| Method | Request URI |
| ------ | ----------- |
| `POST` | ```purchase.mp.microsoft.com/v8.0/b2b/recurrences/query``` |

### Request header

| Header | Type | Description |
| ------ | ---- | ----------- |
| `Authorization` | `string` | Required. The Microsoft Entra ID service access token in the form `Bearer` &lt;*token*&gt;. |
| `Host` | `string` | Must be set to the value `purchase.mp.microsoft.com`. |
| `Content-Length` | `number` | The length of the request body. |
| `Content-Type` | `string` | Specifies the request and response type. Currently, the only supported value is `application/json`. |

### Request body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `b2bKey` | `string` | The User Purchase ID that represents the identity of the user for whom you are requesting. See [User Store ID key](../xstore-requesting-a-userstoreid.md#step-4-create-a-user-store-id-key). | Yes |
| `sbx` | `string` | Optional value for authenticating with UserStoreIds that specifies the Sandbox the results should be scoped to. Default without this value is the RETAIL sandbox. X-Token auth doesn't need this value as the Sandbox is specified within the X-Token. | No |
| `continuationToken` | `string` | If there are multiple sets of products that can't fit within `maxPageSize`, the response body returns a continuation token when the page limit is reached. Provide the continuation token in the subsequent calls for more results. | No |

### Request example

```html
POST https://purchase.mp.microsoft.com/v8.0/b2b/recurrences/query HTTP/1.1
Host: purchase.mp.microsoft.com
Authorization: Bearer [Microsoft Entra ID bearer token]
User-Agent: MicrosoftStoreServiceSample_1.21.9.0
Content-Type: application/json; charset=utf-8
Content-Length: 2032

{
  "b2bKey":"[UserPurchaseId]",
  "sbx": "XDKS.1"
}
```

## Response

### Response body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `continuationToken` | `string` | This token is returned when the page limit is reached. You can specify this continuation token in subsequent calls to retrieve the remaining products. | No |
| `items` | `list<RecurrenceItem>` | An array of products for the specified user. For more information, see the following table. | Yes |

The `RecurrenceItem` object contains the following parameters.

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `autoRenew` | `bool` | Indicates if the user is enrolled to have their subscription auto-renew at the end of the next billing cycle. | Yes |
| `beneficiary` | `string` | The Publisher ID of the beneficiary within the User Purchase ID. | Yes |
| `expirationTime` | `DateTime` | The UTC date and time that the subscription expires | Yes |
| `expirationTimeWithGrace` | `DateTime` | The UTC date and time that the user's Grace period ends if auto-renew fails at the ExpirationTime. During Grace, users should still have access and be considered valid subscribers, but notified they need to fix their auto-renew payment. | Yes |
| `id` | `string` | An ID that identifies this collection item from other items that the user owns. This ID is unique per product. | Yes |
| `isTrial` | `bool` | Indicates if the product is in a trial period, such as a subscription. | Yes |
| `lastModified` | `DateTime` | The UTC date that this item was last modified. | Yes |
| `market` | `string` | The marketplace region the product was purchased in following the two-character ISO 3166 region code. EX: US. | Yes |
| `productId` | `string` | Also referred to as the Store ID for the product within the Microsoft Store catalog. An example Store ID for a product is 9NBLGGH42CFD. | Yes |
| `recurrenceState` | `string` | Current state of the recurrence. See Recurrence States. | Yes |
| `skuId` | `string` | The specific SKU identifier if there are multiple offerings of the product in the Microsoft Store catalog. An example Store ID for a SKU is 0010. | Yes |
| `startTime` | `DateTime` | The UTC date that the subscription becomes valid. | Yes |
| `cancellationDate` | `DateTime` | The UTC date that the subscription was canceled. | No |

### Recurrence States

| Value | Description |
| ----- | ----------- |
| `None` | Indicates a perpetual subscription. |
| `Active` | Subscription is valid and user is entitled to the subscription benefits. |
| `Inactive` | The subscription is past the expiration date, and the user turned off the automatic renew option for the subscription. |
| `Canceled` | The subscription was purposefully terminated before the expiration date, with or without a refund. |
| `InDunning` | The subscription is in dunning (that is, the subscription is nearing expiration, and Microsoft is trying to acquire funds to automatically renew the subscription). If the current date is before the expirationTimeWithGrace value, user should still be entitled to the subscription benefits. If current date is after the expirationTimeWithGrace value, user shouldn't have access to subscription benefits. |
| `Failed` | The dunning period is over, and the subscription failed to renew after several attempts. |

* *Inactive/Canceled/Failed* are terminal states. When a subscription enters one of these states, the user must repurchase the subscription to activate it again. The user isn't entitled to use the services in these states.
* When a subscription is Canceled, the expirationTime is updated with the date and time of the cancellation.
* The ID of the subscription remains the same during its entire lifetime. It doesn't change if the auto-renew option is turned on or off. If a user repurchases a subscription after reaching a terminal state, a new subscription ID will be created.
* The ID of a subscription should be used to execute any operation on an individual subscription.
* When a user repurchases a subscription after canceling or discontinuing it, if you query the results for the user you'll get two entries: one with the old subscription ID in a terminal state, and one with the new subscription ID in an active state.
* It's always a good practice to check both recurrenceState and expirationTime, as updates to recurrenceState can be delayed a few minutes (or occasionally hours).

### Response Example

```json
HTTP/1.1 200 OK
date: Tue, 17 Aug 2021 21:22:28 GMT
content-type: application/json; charset=utf-8
content-length: 2382
ms-cv: aft4s000mwNmYF.0
x-content-type-options: nosniff
x-envoy-upstream-service-time: 2099

{
    "items": [
        {
            "autoRenew": true,
            "beneficiary": "pub:NoUserIdProvided",
            "expirationTime": "2021-08-25T23:59:59.00+00:00",
            "expirationTimeWithGrace": "2021-09-08T23:59:59.00+00:00",
            "id": "mdr:0:1ecc1424ed8f457ab6107f08033e6b50:907f0a31-035c-41a2-b70b-5a62925a4f92",
            "isTrial": false,
            "lastModified": "2021-07-26T22:59:55.99+00:00",
            "market": "US",
            "productId": "CFQ7TTC0HC8Z",
            "skuId": "0002",
            "startTime": "2021-07-26T00:00:00.00+00:00",
            "recurrenceState": "Active"
        },
        {
            "autoRenew": true,
            "beneficiary": "pub:NoUserIdProvided",
            "expirationTime": "2021-07-26T21:08:30.52+00:00",
            "expirationTimeWithGrace": "2021-07-26T21:08:30.52+00:00",
            "id": "mdr:0:50c7396d0e5f4e7f9deeede3ba25f1a4:87c4cfae-ed1d-400f-a6b0-19fdb3c327f5",
            "isTrial": false,
            "lastModified": "2021-07-26T21:08:34.61+00:00",
            "market": "US",
            "productId": "CFQ7TTC0HC8Z",
            "skuId": "0002",
            "startTime": "2021-07-15T00:00:00.00+00:00",
            "recurrenceState": "Canceled",
            "cancellationDate": "2021-07-26T21:08:31.52+00:00"
        },
        {
            "autoRenew": false,
            "beneficiary": "pub:NoUserIdProvided",
            "expirationTime": "2021-07-26T22:35:29.54+00:00",
            "expirationTimeWithGrace": "2021-07-26T22:35:29.54+00:00",
            "id": "mdr:0:528115d9771f4e49b79550790fd4a263:f30a646e-54cf-4fe8-8c95-7add9fc2ebde",
            "isTrial": false,
            "lastModified": "2021-07-26T22:35:33.96+00:00",
            "market": "US",
            "productId": "CFQ7TTC0HC8Z",
            "skuId": "0002",
            "startTime": "2021-07-26T00:00:00.00+00:00",
            "recurrenceState": "Canceled",
            "cancellationDate": "2021-07-26T22:35:30.54+00:00"
        },
    ]
}

```

### Explanation of example response

This response shows three subscription entries for the user: two in a `Canceled` state and one currently `Active` that started on July 26, 2021.
The active subscription's period ends on August 26, 2021 and is set to auto-renew on that date.

If the renewal payment fails, the subscription transitions to the Grace window where the user still receives benefits before `expirationTimeWithGrace` (September 08, 2021 in this example).
When the subscription transitions to the Grace window, the `recurrenceState` becomes `InDunning`.

After Grace ends, the subscription transitions into the Dunning window.  
During this period, your service stops granting benefits, and the user must fix their payment method.
The user is unable to cancel, or start a new subscription during this period.
When the payment is processed, the Grace time (two weeks in this example) is deducted from the next paid period.

### Requesting remaining results with the continuation token

If your query has more results than can be returned in a single response, your initial query response has a continuationToken.
You can then use this continuationToken in a follow-up request by adding the continuation token to a copy of the previous request body.

Example continuation request:

```html
POST https://purchase.mp.microsoft.com/v8.0/b2b/recurrences/query HTTP/1.1
Host: purchase.mp.microsoft.com
Authorization: Bearer [Microsoft Entra ID bearer token]
User-Agent: MicrosoftStoreServiceSample_1.21.9.0
Content-Type: application/json; charset=utf-8
Content-Length: 2032

{
  "continuationToken":"[Continuation Token]",
  "b2bKey":"[UserPurchaseId]",
  "sbx": "XDKS.1"
}
```

## Related articles

[purchase.mp.microsoft.com/v8.0/b2b/recurrences/{recurrenceId}/change](xstore-v8-recurrence-change.md)

[Manage products from your services](../service-to-service-nav.md)

[Managing refunds and chargebacks from your service](../xstore-managing-refunds-and-chargebacks.md)

[Authenticating your service with the Microsoft Store APIs](../xstore-authenticating-your-service.md)

[Using publisherQuery (Collections v9) to query a user's products and entitlements](xstore-v9-query-for-products.md)
