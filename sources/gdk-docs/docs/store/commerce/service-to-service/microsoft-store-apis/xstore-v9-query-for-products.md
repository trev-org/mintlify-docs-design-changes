---
author: CameronGoodwin
title: "collections.mp.microsoft.com/v9.0/collections/publisherQuery"
description: "Describes how to use publisherQuery (v9 of the Microsoft Store Collections API) to get all the products that a customer owns from your service. This service allows visibility of a user's Xbox Game Pass subscription status and streamlined request and response values over b2bLicensePreview (v8)."
kindex:
  - publisher query API
  - v9 query for products
  - collections publisher query
  - product entitlement query v9
ms.author: cagood
ms.topic: reference
edited: '03/23/2026'
ms.date: 03/31/2026
permissioned-type: public
---

# collections.mp.microsoft.com/v9.0/collections/publisherQuery

publisherQuery allows your own services to query a user's products and entitlements including their Xbox Game Pass subscription status.
Your service shouldn't regularly poll for user purchases to avoid call rate limits based on a per-user time window.
Currently, the limit is 100 query requests within a five-minute window for the same user.
Triggering a rate limit causes a 429 HTTP response with information about when the next request can be made.

Results include only products directly owned or entitled by the user account your service is calling on-behalf-of.
Shared entitlements that can appear on client aren't returned. See [Product sharing model for games](../../fundamentals/xstore-product-sharing-model-for-games.md).

For specific info on querying a user's Game Pass subscription status, see [Detecting Xbox Game Pass subscription access from your service](../xstore-detecting-game-pass.md).

> [!NOTE]
> publisherQuery only supports calls from partner services.
Client apps or games aren't able to call this service directly.

## Updates and improvements in publisherQuery (Collections Query v9)

publisherQuery is the latest Collections Query API (v9).
If migrating from b2bLicensePreview (v8), review this section for behavior differences.

publisherQuery has the following changes and improvements over b2bLicensePreview:

* Ability to query for a user's Xbox Game Pass subscription status
* Requires a predefined list of products to return.
A best practice, but not required with v8 b2bLicensePreview.
Titles who didn't follow this best practice often had post-release issues where the request would timeout due to the large scope of content based on their query parameters.
This prevented users from getting in-game credit until the game's service was updated to specify which ProductIds they wanted within the query request.
* Streamlined response data fields to remove unused or unnecessary values
* Streamlined request parameters based on developer feedback

Removed from the request body:

* Market - All requests have context for all regions in publisherQuery
* ExpandSatisfyingItems - All results expand satisfying entitlements in publisherQuery
* EntitlementsFilter - Not used as a predefined list of productIds of the query are required

> [!NOTE]
> publisherQuery doesn't support LegacyProductIds (ProductIds generated from the retired Xbox Developer Portal and used as ProductId from the Xbox Inventory service).
If migrating your service from Xbox Inventory, you need to internally map the StoreId (ProductId value from Collections) to the matching LegacyProductId on your own service.
Otherwise, you can look at v8 b2bLicensePreview, which returns both StoreId and LegacyProductIds.

For more information, see the corresponding article [Selecting the right Collections Query API for your needs](../xstore-query-user-entitlements.md#selecting-the-right-collections-query-api-for-your-needs)

### Prerequisites

Review [Prerequisites for service-to-service APIs](../service-to-service-nav.md#prerequisites-for-service-to-service-apis).

This API supports both Microsoft Entra ID and delegated auth X-token auth types.

If product configuration isn't published in Partner Center, calls can succeed but return no results.

## Request

### Request syntax

| Method | Request URI |
| ------ | ----------- |
| `POST` | ```https://collections.mp.microsoft.com/v9.0/collections/publisherQuery``` |

### Request header

| Header | Type | Description |
| ------ | ---- | ----------- |
| `Authorization` | `string` | Required. Either the delegated authorization X-token or the Microsoft Entra ID service access token based on authentication type being used. |
| `Signature` | `string` | Required when authenticating with X-tokens. |
| `User-Agent` | `string` | Recommended. Helps identify your service for logging and investigations. |
| `Host` | `string` | Must be `collections.mp.microsoft.com`. |
| `Content-Length` | `number` | The length of the request body. |
| `Content-Type` | `string` | Specifies the request and response type. Currently, the only supported value is `application/json`. |

### Request body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `beneficiaries` | `UserIdentity` | User for which this item is being consumed. For more information, see [Authenticating with Microsoft Entra ID and User Store IDs](../xstore-authenticating-your-service.md#authenticating-with-microsoft-entra-id-and-user-store-ids). Not required for X-token authentication. | Only for User Store ID authentication |
| `productSkuIds` | `list<ProductSkuId>` | List of target products. For more information, see the following table. The v9 publisherQuery API supports a maximum of 100 productSkuIds per request. | Yes |
| `continuationToken` | `string` | If there are multiple sets of products that can't fit within `maxPageSize`, the response body returns a continuation token when the page limit is reached. Provide the continuation token in the subsequent calls for more results. | No |
| `maxPageSize` | `number` | The maximum number of products to return in one response. The default is 100 and maximum value is 200 items per page. | No |
| `excludeDuplicates` | `bool` | Removes duplicate entitlements where the user might be entitled to a single product from multiple sources. | No |
| `validityType` | `string` | When set to **All**, all products for a user are returned, including expired items. **Valid** returns products that have an active status, start date &lt; now, and end date is &gt; now). **Invalid** returns products that don't meet the requirements of the Valid option. | No |
| `sbx` | `string` | Optional value for authenticating with UserStoreIds that specifies the Sandbox the results should be scoped to. Default without this value is the RETAIL sandbox. X-Token auth doesn't need this value as the Sandbox is specified within the X-Token. | No |

The `ProductSkuId` object contains the following parameters.

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `productId` | `string` | Also refereed to as the Store ID for the product within the Microsoft Store catalog. An example Store ID for a product is 9NBLGGH42CFD. | Yes |
| `skuId` | `string` | The specific SKU identifier if there are multiple offerings of the product in the Microsoft Store catalog. An example Store ID for a SKU is 0010. | No |

### Request example

> [!NOTE]
> The v9 publisherQuery API supports a maximum of 100 productSkuIds per request. Providing more than 100 productIds in the productSkuIds the API returns an HTTP 400 error.

> [!NOTE]
> Default `maxPageSize` is 100, but in the example it's lower to demonstrate requesting the remaining items.

```html
POST https://collections.mp.microsoft.com/v9.0/collections/publisherQuery HTTP/1.1
Host: collections.mp.microsoft.com
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1...
User-Agent: {identifier string of your service}
Content-Type: application/json; charset=utf-8
Content-Length: 2243

{
  "maxPageSize":2,
  "excludeDuplicates":true,
  "productSkuIds":[
    {"productId": "9N30KZZF4BR9"},
    {"productId": "9MXL21XPWWWK"},
    {"productId": "9PLRFWZWWF91"},
    {"productId": "9MZ0MGGFPLTP"}
  ],
  "beneficiaries": [
    {
      "identityType": "b2b",
      "identityValue": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYxNTI2OEI4N0YwNEFDQzIzRDdCQ0E2M...",
      "localTicketReference": ""
    }
  ],
  "sbx":"XDKS.1",
}
```

## Response

### Response body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `continuationToken` | `string` | This token is returned when the page limit is reached. You can specify this continuation token in subsequent calls to retrieve the remaining products. | No |
| `items` | `PublisherQueryItemContractV9` | An array of products for the specified user. For more information, see the following table. | No |

The `PublisherQueryItemContractV9` object contains the following parameters.

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `acquiredDate` | `datetime` | Date on which the user acquired the item. | Yes |
| `acquisitionType` | `string` | Indicates how the user has this entitlement. For more information, see [Product acquisitionType values and meaning](#product-acquisitiontype-values-and-meaning). | No |
| `endDate` | `datetime` | The end date of the item. | Yes |
| `id` | `string` | An ID that identifies this collection item from other items that the user owns. This ID is unique per product. | Yes |
| `modifiedDate` | `datetime` | The date that this item was last modified. With consumable products, this value changes when the user's quantity balance changes through another purchase of the consumable product or when a consume request is issued. | Yes |
| `productId` | `string` | Also refereed to as the Store ID for the product within the Microsoft Store catalog. An example Store ID for a product is 9NBLGGH42CFD. | Yes |
| `productKind` | `string` | Indicates the product type. For more information, see [Product type values and meaning](#product-type-values-and-meaning). | Yes |
| `quantity` | `number` | The quantity of the item. Non-consumable products are always 1. For consumable products, value represents the remaining balance that can be consumed or fulfilled for the user. | No |
| `recurrenceData` | `string` | ID of the item used as the `recurrenceId` parameter of the recurrence management APIs. Same value as `id` from the [RecurrenceQuery API](xstore-v8-recurrence-query.md) and `recurrenceId` in a Clawback event. | Yes |
| `satisfiedByProductIds` | `list<string>` | If this product is entitled because of a bundle or subscription, the `ProductIds` of those parent products are provided here. | No |
| `skuId` | `string` | The specific SKU identifier if there are multiple offerings of the product in the Microsoft Store catalog. An example Store ID for a SKU is 0010. | Yes |
| `startDate` | `datetime` | The date that the item starts being valid. | Yes |
| `status` | `string` | The status of the item. For more information, see [Product status values and meaning](#product-status-values-and-meaning). | Yes |
| `tags` | `list<string>` | N/A. | Yes |
| `transactionId` | `GUID` | The transaction ID as a result of the purchase of this item. Can be used for reporting an item as fulfilled. This value is the OrderID associated to when the user purchased the item. Shouldn't be used as a unique identifier for this user's entitlement | No |
| `trialData` | `TrialInformation` | Information about this product&mdash;if it's a trial and the time remaining. | Yes |

The `TrialInformation` object contains the parameters that are shown in the following table.

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `isInTrialPeriod` | `bool` | Indicates if the product is in a trial period, such as a subscription | Yes |
| `isTrial` | `bool` | Indicates if this product is licensed through a trial | Yes |
| `trialTimeRemaining` | `timespan` | Indicates the remaining time the trial is valid with the format of DD:HH:MM:SS.MS | No |

### Product type values and meaning

| Value | Description |
| ----- | ----------- |
| `Application` | An app within Microsoft Store that isn't listed as a game. |
| `Consumable` | A Store-managed consumable, where the user's balance (or quantity) is kept and managed on the Collections service. On purchase, the quantity is added to the user's balance and can then be removed by performing a consume request. Users are able to purchase this type of consumable again without it being fulfilled first. |
| `Durable` | A downloadable content purchased once and owned until the product's end date. Also the product type for Add-on bundles and Season Pass bundles. |
| `Game` | A base game product. |
| `Pass` | Some subscription types such as Game Pass |
| `UnmanagedConsumable` | Also called a Developer-managed consumable. Must be fulfilled from the game or game's service before user can purchase the product again. |
| `Pass` | A Store-managed Subscription. Different than an Add-on subscription type configured under an app's Add-ons page in Partner Center. |

### Product status values and meaning

| Value | Description |
| ----- | ----------- |
| `Active` | The product is actively entitled (including pre-ordered items). The user should have access to it. |
| `Revoked` | Most commonly indicates that the user requested a refund. |
| `Expired` | The product was part of an entitlement (usually a subscription) that has since expired. |
| `Banned` | N/A. |
| `Suspended` | N/A. |

### Product acquisitionType values and meaning

| Value | Description |
| ----- | ----------- |
| `Single` | Direct digital purchase or code redemption. |
| `Recurring` | Owned or entitled through a subscription. |
| `Conditional` | Owned but requires other products to continue use. Ex: Games With Gold obtained games |

### Response example

```json
HTTP/1.1 200 OK
Date: Wed, 10 Nov 2021 02:21:22 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 1115
MS-CorrelationId: d46cbd11-c2cf-4d8b-99b3-ea63ea976f39
MS-RequestId: 76b82179-2c83-41b2-b9f7-6e775f2c0fed
MS-CV: zpiOM+izH0iubCuw.0

{
    "continuationToken": "{\"checkSatisfactionIndex\":2}",
    "items": [
        {
            "acquiredDate": "2021-08-30T21:53:08.2565331+00:00",
            "acquisitionType": "Single",
            "endDate": "2021-08-31T21:53:07.4374279+00:00",
            "id": "1046015f83a8478397064c915224e5d3",
            "modifiedDate": "2021-08-30T21:53:08.2589804+00:00",
            "productId": "9N30KZZF4BR9",
            "productKind": "Durable",
            "quantity": 1,
            "satisfiedByProductIds": [],
            "skuId": "0010",
            "startDate": "2021-08-30T21:53:07.4374279+00:00",
            "status": "Active",
            "tags": [],
            "transactionId": "995ec667-8114-4ab9-9f11-597a8419a775",
            "trialData": {
                "isInTrialPeriod": false,
                "isTrial": false
            }
        },
        {
            "acquiredDate": "2021-08-30T19:55:44.7994325+00:00",
            "acquisitionType": "Single",
            "endDate": "9999-12-31T23:59:59.9999999+00:00",
            "id": "27662ad4749342608ec09130b76601f9",
            "modifiedDate": "2021-08-30T19:55:44.8043849+00:00",
            "productId": "9MXL21XPWWWK",
            "productKind": "Game",
            "quantity": 1,
            "satisfiedByProductIds": [],
            "skuId": "0010",
            "startDate": "2021-08-30T19:40:44.7994325+00:00",
            "status": "Active",
            "tags": [
                "4c584d39-3132-3058-c050-5757574b8500"
            ],
            "transactionId": "8d5ed958-6c72-4812-87fc-57b105d3d197",
            "trialData": {
                "isInTrialPeriod": true,
                "isTrial": true,
                "trialTimeRemaining": "09:43:52.8580690"
            }
        }
    ]
}
```

### Requesting remaining results with the continuation token

If your query has more results than can be returned in a single response (controlled by the maxPageSize), your initial query response has a continuationToken.
 You can then use this continuationToken in a follow-up request by adding the continuation token to a copy of the previous request body.

Example continuation request:

```html
POST https://collections.mp.microsoft.com/v9.0/collections/publisherQuery HTTP/1.1
Host: collections.mp.microsoft.com
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1...
User-Agent: {identifier string of your service}
Content-Type: application/json; charset=utf-8
Content-Length: 2243

{
  "continuationToken":"{\"checkSatisfactionIndex\":2}",
  "maxPageSize":2,
  "excludeDuplicates":true,
  "productSkuIds":[
    {"productId": "9N30KZZF4BR9"},
    {"productId": "9MXL21XPWWWK"},
    {"productId": "9PLRFWZWWF91"},
    {"productId": "9MZ0MGGFPLTP"}
  ],
  "beneficiaries": [
    {
      "identityType": "b2b",
      "identityValue": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYxNTI2OEI4N0YwNEFDQzIzRDdCQ0E2M...",
      "localTicketReference": ""
    }
  ],
  "sbx":"XDKS.1",
}
```

> [!NOTE]
> Even if you specify the excludeDuplicates flag, when using a continuation token it's possible to get entries of entitlements that have different status. So verify the results for duplicate entries and if they have a status that isn't Active.

## Related articles

[Manage products from your services](../service-to-service-nav.md)

[Authenticating your service with the Microsoft Store APIs](../xstore-authenticating-your-service.md)

[

Managing consumable products from your service](../xstore-managing-consumables-and-refunds.md)
