---
author: CameronGoodwin
title: "collections.mp.microsoft.com/v8.0/collections/consume"
description: "Describes how to report developer-managed consumables as fulfilled or remove a specified quantity of a store-managed consumable from a user's balance."
kindex:
  - collections consume API
  - v8 consume endpoint
  - consumable fulfillment API
  - consume entitlement quantity
ms.author: cagood
ms.topic: reference
edited: '03/23/2026'
ms.date: 04/15/2026
permissioned-type: public
---

# collections.mp.microsoft.com/v8.0/collections/consume

Use the Consume API to manage these Microsoft Store consumable types:

* **Store-managed consumable:** Report a quantity as consumed and remove it from the specified user's current quantity balance.
Users can repurchase store-managed consumables repeatedly without your service having to report them as consumed or fulfilled.
For more information, see [Store-managed consume request](#store-managed-consume-request).

* **Developer-managed consumable:** Report a consumable product as fulfilled for a specified user.
Before a user can repurchase a developer-managed consumable product, your app or service must report the consumable product as fulfilled for that user.
For more information, see [Developer-managed consume request](#developer-managed-consume-request).

## Using `trackingId` to validate fulfillment completion

`trackingId` provides retry-safe fulfillment validation.
If your service doesn't receive a confirmation response, resend the same request body.
The service recognizes prior requests and treats retries as confirmation checks.

Each request to the API should have a unique `trackingId`.
If the original request didn’t succeed, or the response wasn’t received, the service completes the requested transaction when the request is retried.
If the fulfillment was completed in a previous request, the API recognizes the request and sends a confirmation response.
In this case, the API doesn't fulfill or deduct a second time from the user's balance.
Instead, the API responds with a success as if the item was consumed with the user's remaining balance.  

Therefore, cache the values and `trackingId` of each request on your server or in your logs until you receive a confirmation response that the request was fulfilled.
For an example, see the [Game Service Sample](https://aka.ms/gdkdl).  

When your request has the `includeOrderIds` parameter, these behaviors are expected based on the consumable's product type:

| Consumable type | First consume request behavior | Retry consume request behavior |
| --------------- | ------------------------------ | ------------------------------ |
| Store-managed | OrderIds used to fulfill the request are returned | Same OrderIds used to fulfill the request are returned |
| Developer-managed | OrderIds used to fulfill the request returned | No OrderIDs returned as this data isn't tracked for this product type |

If you use developer-managed consumables, you can't get the order IDs from a retry request.

## Prerequisites

Review [Prerequisites for service-to-service APIs](../service-to-service-nav.md#prerequisites-for-service-to-service-apis).

This API supports both Microsoft Entra ID and delegated auth X-token auth types.

> [!IMPORTANT]
> **Sandbox limitation for developer-managed consumables:** When you consume developer-managed consumable products in a development sandbox (non-RETAIL), authentication using User Store ID or Microsoft Entra ID isn’t supported. In sandbox environments, you must use delegated authorization XSTS tokens to successfully consume developer-managed consumable products. This limitation doesn't apply to store-managed consumables or to the RETAIL sandbox.

If you don't publish product configuration in Partner Center, calls can succeed but return no results.

### User Store ID authentication error codes

| Code | Error | Inner error code | Description |
| ---- | ----- | ---------------- | ----------- |
| 401 | Unauthorized | AuthenticationTokenInvalid | The Microsoft Entra ID access token is invalid. In some cases, the detail of `ServiceError` contains more information, such as when the token is expired or the `appid` claim is missing. |
| 401 | Unauthorized | PartnerAadTicketRequired | A Microsoft Entra ID access token wasn't passed to the service in the authorization header. |
| 401 | Unauthorized | InconsistentClientId | The `clientId` claim in the Microsoft Store ID key in the request body and the `appid` claim in the Microsoft Entra ID access token in the authorization header don't match. |

### Error codes by using X-token authentication

| Code | Error | Inner error code | Description |
| ---- | ----- | ---------------- | ----------- |
| 401 | Unauthorized | Expired Token | The X-token expired, and a new one is required to complete the call. |
| 403 | Unauthorized | Invalid Token | The token used isn't authorized to authenticate with this endpoint. The token might be for the wrong sandbox or Relying Party. |
| 429 | Throttled | Too frequent calls | The service called too many times for the user within the specified call limits. For information about when your service can make another call for this user to the service, see the response. |

## Request

### Request syntax

| Method | Request URI |
| ------ | ----------- |
| `POST` | ```https://collections.mp.microsoft.com/v8.0/collections/consume``` |

### Request header

| Header | Type | Description |
| ------ | ---- | ----------- |
| `Authorization` | `string` | Required. Either the delegated authorization X-token or the Microsoft Entra ID access token based on the authentication type being used. |
| `Signature` | `string` | Required when authenticating with X-tokens. Not required for User Store ID authentication. |
| `User-Agent` | `string` | Optional but recommended. Helps identify your service for logging and investigations. |
| `Host` | `string` | Must be set to the value `collections.mp.microsoft.com`. |
| `Content-Length` | `number` | The length of the request body. |
| `Content-Type` | `string` | Specifies the request and response type. Currently, the only supported value is `application/json`. |

### Request body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `beneficiary` | `UserIdentity` | The user for whom this item is being consumed. For more information, see [Authenticating with Microsoft Entra ID and User Store IDs](../xstore-authenticating-your-service.md#authenticating-with-microsoft-entra-id-and-user-store-ids). Not required for X-token authentication. | Only for User Store ID authentication |
| `trackingId` | `guid` | A unique `trackingId` provided by the developer for redundancy checks. The GUID should be unique for each request. For more information, see [Using trackingId to validate fulfillment completion](#using-trackingid-to-validate-fulfillment-completion). | Yes |
| `productId` | `string` | The `productId` of the consumable that the request is for. Can be obtained from Partner Center or by [Querying a user's products and entitlements from a service](xstore-v9-query-for-products.md). | Yes |
| `removeQuantity` | `int` | The quantity to consume from the user's current balance. | Applies only to store-managed consumables. |
| `includeOrderIds` | `bool` | Include the OrderIds and LineItemIds of the orders used to fulfill the consume request. These values can then be used with the [Clawback event service](../xstore-managing-refunds-and-chargebacks.md) results to identify refunded consume transactions in your game service. | No |
| `sbx` | `string` | Optional value for authenticating with UserStoreIds that specifies the Sandbox the results should be scoped to. Default without this value is the RETAIL sandbox. X-Token auth doesn't need this value as the Sandbox is specified within the X-Token. **Note:** For developer-managed consumables, User Store ID authentication with the `sbx` parameter targeting a development sandbox isn't supported. Use XSTS token authentication for sandbox testing of developer-managed consumables. | No |

### Consume request examples

The following examples use a User Store ID for authentication and require the beneficiary object in the request JSON body.

#### Store-managed consume request

```syntax
POST https://collections.mp.microsoft.com/v8.0/collections/consume HTTP/1.1
Authorization: Bearer eyJ0eXAiOiJKV1...
Host: collections.mp.microsoft.com
Content-Type: application/json

{
    "beneficiary" : {
        "localTicketReference": "testReference",
        "identityValue": "eyJ0eXAiOiJ...",
        "identityType": "b2b"
    },
    "productId": "9N0297GK108W",
    "trackingId": "1b3afaa8-8644-40e9-9073-266a3bb8804f",
    "removeQuantity": 1,
    "sandbox": "XDKS.1",
    "includeOrderIds": true
}
```

#### Developer-managed consume request

> [!NOTE]
> The following example uses User Store ID authentication. However, this authentication method doesn't work for developer-managed consumables in development sandboxes. If you're testing in a sandbox environment, use XSTS token authentication instead. See [Authenticating through delegated authentication XSTS tokens](../xstore-authenticating-your-service.md#authenticating-with-delegated-authentication-x-tokens) for details.

```syntax
POST https://collections.mp.microsoft.com/v8.0/collections/consume HTTP/1.1
Authorization: Bearer eyJ0eXAiOiJKV1...
Content-Type: application/json
Host: collections.md.mp.microsoft.com

{
    "beneficiary" : {
        "localTicketReference" : "testReference",
        "identityValue": "eyJ0eXAiOiJ...",
        "identityType": "b2b"
    },
    "productId" : "9NBLGGH5WVP6",
    "trackingId" : "08a14c7c-1892-49fc-9135-190ca4f10490",
    "sbx" : "XDKS.1",
    "includeOrderIds": true
}
```

## Response

### Response body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `itemId` | string | An ID that identifies the collection item from other items the user owns. This ID is unique per product. | Yes |
| `productId` | `string` | Also referred to as the Store ID for the product within the Microsoft Store catalog. An example Store ID for a product is 9NBLGGH42CFD. | Yes |
| `trackingId` | `GUID` | Unique `trackingId` provided by the caller for the consume request. | Yes |
| `newQuantity` | `int` | Remaining quantity of the user's balance for this consumable product. Value is 0 for developer-managed consumables. | Yes |
| `orderTransactions` | `List<ConsumeOrderTransaction>` | An array of ConsumeOrderTransaction objects indicating the orders used to fulfill the request. Only returned if the `includeOrderIds` parameter is set to true in the request. For more information, see the following table. | No |

The `ConsumeOrderTransaction` object contains the following parameters.

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `orderId` | `GUID` | ID of user's purchase order used to fulfill all or part of the consume request. | Yes |
| `orderLineItemId` | `GUID` | ID of the line item the consumable was within the purchase order made by the user. This ID is more unique to a consumable purchase than OrderId as there can be multiple LineItemIds per OrderID. | Yes |
| `quantityConsumed` | `int` | Amount of the request fulfilled by this specific OrderId / LineItemId | Yes |

### Consume response example

```syntax
HTTP/1.1 200 OK
Date: Sat, 04 Sep 2021 01:59:13 GMT
Content-Type: application/json; charset=utf-8
Server: Kestrel
Content-Length: 140
MS-CorrelationId: c7ed3826-c332-4394-af7e-32800e492695
MS-RequestId: 0702fbcf-01ec-4591-995e-13b92149df4d
MS-CV: rJGMXgDq8E2A1EmX.0
X-Content-Type-Options: nosniff
MS-ServerId: 6

{
    "newQuantity": 0,
    "itemId": "c95fef434d1241d6bdb09090b130b6f4",
    "trackingId": "1b3afaa8-8644-40e9-9073-266a3bb8804f",
    "productId": "9N0297GK108W",
    "orderTransactions": [
        {
            "orderId": "8060a406-85c8-4d01-a105-ff11725499c9",
            "orderLineItemId": "cb054aa0-7392-4cc6-af06-53b285e39259",
            "quantityConsumed": 1
        }
    ]
}
```

## Related articles

[Manage products from your services](../service-to-service-nav.md)

[Authenticating your service with the Microsoft Store APIs](../xstore-authenticating-your-service.md)

[Using publisherQuery (Collections v9) to query a user's products and entitlements](xstore-v9-query-for-products.md)

[Managing consumable products from your service](../xstore-managing-consumables-and-refunds.md)

[Managing refunds and chargebacks from your service](../xstore-managing-refunds-and-chargebacks.md)
