---
author: CameronGoodwin
title: "purchase.mp.microsoft.com/v8.0/b2b/orders/query"
description: "Describes how to query for refunded or revoked items that a user previously consumed. Known as the Clawback service."
kindex:
  - purchase mp b2b orders query
  - v8 orders query API
  - clawback order query
  - refund and chargeback order lookup
ms.author: cagood
ms.topic: reference
edited: '03/23/2026'
ms.date: 03/31/2026
permissioned-type: public
---

# purchase.mp.microsoft.com/v8.0/b2b/orders/query

> [!NOTE]
> This API is deprecated for refund detection.
> Instead, use the Clawback event service as outlined in [Managing refunds and chargebacks from your service](../xstore-managing-refunds-and-chargebacks.md).

The `purchase.mp.microsoft.com/v8.0/b2b/orders/query` API lets a game service query a user's consumable purchases from the last 90 days.
It also returns fields not available in a Collections query, such as `ShortOrderID` for support workflows.

## Prerequisites

Review [Prerequisites for service-to-service APIs](../service-to-service-nav.md#prerequisites-for-service-to-service-apis).

This API only supports the Microsoft Entra ID auth type.

If product configuration isn't published in Partner Center, can succeed but return no results.

## Request

### Request syntax

| Method | Request URI |
| ------ | ----------- |
| `POST` | ```https://purchase.mp.microsoft.com/v8.0/b2b/orders/query``` |

### Request header

| Header           | Type     | Description                                                                                         |
|------------------|----------|-----------------------------------------------------------------------------------------------------|
| `Authorization`  | `string` | Required. The Microsoft Entra ID service access token in the form `Bearer` &lt;*token*&gt;.         |
| `Host`           | `string` | Must be set to the value `purchase.mp.microsoft.com`.                                               |
| `Content-Length` | `number` | The length of the request body.                                                                     |
| `Content-Type`   | `string` | Specifies the request and response type. Currently, the only supported value is `application/json`. |

### Request body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `b2bKey` | `string` | The User Purchase ID that represents the identity of the user for whom you are requesting. See [User Store ID key](../xstore-requesting-a-userstoreid.md#step-4-create-a-user-store-id-key). | Yes |
| `lineItemStateFilter` | `list<string>` | Specifies which item states to return in the query results. For a list of valid values, see [Line item states](#line-item-states). | No |
| `sbx` | `string` | Optional value for authenticating with UserStoreIds that specifies the Sandbox the results should be scoped to. Default without this value is the RETAIL sandbox. X-Token auth doesn't need this value as the Sandbox is specified within the X-Token. | No |

### Line item states

| Value | Description |
| ----- | ----------- |
| `Purchased` | Consumable purchase in an active (good) state. This state includes unfulfilled and fulfilled consumables. |
| `Revoked` | Consumable purchase fulfilled or consumed by the game service, and later refunded by the user. |
| `Refunded` | Consumable purchase refunded to the user before being fulfilled or consumed. |

### Request example

```html
POST https://purchase.mp.microsoft.com/v8.0/b2b/orders/query HTTP/1.1
Host: purchase.mp.microsoft.com
Authorization: Bearer [Microsoft Entra bearer token]
User-Agent: MicrosoftStoreServiceSample_1.21.9.0
Content-Type: application/json; charset=utf-8
Content-Length: 2032

{
  "b2bKey":"[UserPurchaseId]",
  "lineItemStateFilter": [
    "Purchased",
    "Revoked",
    "Refunded"],
  "sbx": "XDKS.1"
}
```

## Response

### Response body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `items` | `list<PurchasedItem>` | An array of products for the specified user. For more information, see the following table. | Yes |

The `PurchasedItem` object contains the following parameters.

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `orderId` | `GUID` | Long form ID of the purchase's order #. OrderID used by Collections and other services. | Yes |
| `shortOrderId` | `GUID` | Short form ID of the purchase's order #. Order # that the end-user sees in their purchase history and confirmation emails. Users provide this ID to your support staff to represent their purchase. | No |
| `orderLineItems` | `list<OrderLineItem>` | An array of additional information related to the consumable within the purchasing OrderId from the user. For more information, see the following table. | Yes |
| `orderPurchasedDate` | `datetime` | The UTC date and time that the consumable was purchased. | Yes |
| `orderRefundedDate` | `datetime` | The UTC date and time that the consumable was refunded. This value takes a few hours to show up on a refunded item. | No |

The `OrderLineItem` object contains the following parameters.

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `lineItemId` | `GUID` | Identifies the lineItem within the purchase order for the consumable (orders can have multiple lineItemIds for shopping cart scenarios) | Yes |
| `lineItemState` | `string` | The state of this specific consumable purchase. See [Line item states](#line-item-states). | Yes |
| `productId` | `string` | Also refereed to as the Store ID for the product within the Microsoft Store catalog. An example Store ID for a product is 9NBLGGH42CFD. | Yes |
| `quantity` | `number` | The quantity of the item when purchased in the order. | Yes |
| `skuId` | `string` | The specific SKU identifier if there are multiple offerings of the product in the Microsoft Store catalog. An example Store ID for a SKU is 0010. | Yes |
| `wasConsumableQuantityRevoked` | `bool` | Indicates if the purchased quantity was able to be removed from the user's store account when the refund happened. | No |

### Response example

```json
HTTP/1.1 200 OK
Content-Length: 1042
Content-Type: application/json
MS-CorrelationId: b5157f23-7f26-4e0b-8f06-07733bd09355
MS-RequestId: 2b0933bc-19f7-4f96-bb47-2602491fed1f
MS-CV: OAIoYIzDJkO2Knp.7
MS-ServerId: 1
Date: Tue, 30 Jun 2020 18:29:22 GMT
 
{
    "items": [
        {
            "orderId": "3c1ad7bc-b0c2-442c-aad4-46d8d0e0184e",
            "shortOrderId": "8483143756",
            "orderLineItems": [
                {
                    "lineItemId": "febdd51b-97aa-45fc-bf46-0120eacbf8aa",
                    "lineItemState": "Purchased",
                    "productId": "9MT5TGW893HV",
                    "quantity": 1,
                    "skuId": "0010",
                    "wasConsumableQuantityRevoked": false
                }
            ],
            "orderPurchasedDate": "2021-06-12T23:57:51.1415104+00:00"
        },
        {
            "orderId": "75bf81ec-7c31-46f9-9828-6ac61464e553",
            "shortOrderId": "3145294485",
            "orderLineItems": [
                {
                    "lineItemId": "ad7adfc5-be76-4548-aede-155084490044",
                    "lineItemState": "Purchased",
                    "productId": "9MT5TGW893HV",
                    "quantity": 1,
                    "skuId": "0010",
                    "wasConsumableQuantityRevoked": false
                }
            ],
            "orderPurchasedDate": "2021-06-13T23:57:51.1415104+00:00"
        },
        {
            "orderId": "b9d6d1fd-3e68-423b-85fa-feea1ee125b3",
            "shortOrderId": "7620137155",
            "orderLineItems": [
                {
                    "lineItemId": "eb565041-6e1f-4210-97a3-54a2ab80f49e",
                    "lineItemState": "Revoked",
                    "productId": "9MT5TGW893HV",
                    "quantity": 1,
                    "skuId": "0010",
                    "wasConsumableQuantityRevoked": false
                }
            ],
            "orderPurchasedDate": "2021-06-142T23:57:51.1415104+00:00",
            "orderRefundedDate": "2021-06-162T10:05:35.9634676+00:00"
        },
        {
            "orderId": "cda65a53-30b0-4e19-8ec1-c08219174e45",
            "shortOrderId": "5993204763",
            "orderLineItems": [
                {
                    "lineItemId": "a30b4285-c456-4486-8048-a9f5b5231b76",
                    "lineItemState": "Revoked",
                    "productId": "9MT5TGW893HV",
                    "quantity": 1,
                    "skuId": "0010",
                    "wasConsumableQuantityRevoked": false
                }
            ],
            "orderPurchasedDate": "2021-06-152T23:57:51.1415104+00:00",
            "orderRefundedDate": "2021-06-162T10:05:35.9634676+00:00"
        },
        {
            "orderId": "f1da6d12-8b0d-4dc1-8aca-c52fcece582a",
            "shortOrderId": "8768763421",
            "orderLineItems": [
                {
                    "lineItemId": "7da73274-b4bc-4a4f-bb93-e49618f7a7d7",
                    "lineItemState": "Purchased",
                    "productId": "9MT5TGW893HV",
                    "quantity": 1,
                    "skuId": "0010",
                    "wasConsumableQuantityRevoked": false
                }
            ],
            "orderPurchasedDate": "2021-06-16T23:57:51.1415104+00:00"
        }
    ]
}

```

### Explanation of example response

In this example, the user purchased consumable `9MT5TGW893HV` five times.
Two purchases are `Revoked`, meaning they were refunded *after* being consumed.
For near-real-time refund detection, use the Clawback event flow described in [Managing refunds and chargebacks from your service](../xstore-managing-refunds-and-chargebacks.md).  

## Related articles

[Managing consumable products from your service](../xstore-managing-consumables-and-refunds.md)

[Managing refunds and chargebacks from your service](../xstore-managing-refunds-and-chargebacks.md)

[Manage products from your services](../service-to-service-nav.md)

[Authenticating your service with the Microsoft Store APIs](../xstore-authenticating-your-service.md)

[Using publisherQuery (Collections v9) to query a user's products and entitlements](xstore-v9-query-for-products.md)
