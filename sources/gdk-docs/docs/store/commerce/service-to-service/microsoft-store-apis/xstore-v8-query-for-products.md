---
author: CameronGoodwin
title: "collections.mp.microsoft.com/v8.0/collections/b2bLicensePreview"
description: "Describes how to use b2bLicensePreview (v8 of the Microsoft Store collections API) to get all the products that a customer owns from your service."
kindex:
  - b2b license preview API
  - v8 query for products
  - collections license query
  - product catalog query service
ms.author: cagood
ms.topic: reference
edited: '03/23/2026'
ms.date: 03/31/2026
permissioned-type: public
---

# collections.mp.microsoft.com/v8.0/collections/b2bLicensePreview

The b2bLicensePreview API allows your own services to query for a user's products and entitlements.
You can scope your query to particular products, product types, or use other filters in your query.
Your service shouldn't regularly poll for user purchases to avoid call rate limits based on a per-user time window.
Currently, the limit is 100 query requests within a five-minute window for the same user.
Triggering a rate limit causes a 429 HTTP response with information about when the next request can be made.

Results include only products directly owned or entitled to the user account your service is calling on-behalf-of.
Shared entitlements that can appear on the client aren't returned.
For more information on sharing scenarios, see [Product sharing model for games](../../fundamentals/xstore-product-sharing-model-for-games.md).

> [!NOTE]
> To avoid response timeouts and long response times, you should always specify the exact products you want in your results by using the `productSkuIds` parameter in the request.
Calling without the `productSkuIds` list results in longer response times that increase based on the total number of entitlements and purchases the user made across Xbox and the Microsoft Store App.

> [!NOTE]
> b2bLicensePreview is for calls from partner services.
Client apps or games shouldn't call this service directly.

## b2bLicensePreview (Collections v8) vs publisherQuery (Collections v9) to query products

b2bLicensePreview (Collections v8) is the prior Collections service to query user entitlements, but is still available for partner use.
publisherQuery (Collections v9) is the latest and provides expanded features such as exposing Xbox Game Pass subscription status.
There are still scenarios where partners might want to use b2bLicensePreview such as support for LegacyProductIds used by the Xbox Inventory service.
  
For more information, see the corresponding article [Selecting the right Collections Query API for your needs](../xstore-query-user-entitlements.md#selecting-the-right-collections-query-api-for-your-needs)

## Prerequisites

Review [Prerequisites for service-to-service APIs](../service-to-service-nav.md#prerequisites-for-service-to-service-apis).

This API supports both Microsoft Entra ID and delegated auth X-token auth types.

If product configuration isn't published in Partner Center, calls can succeed but return no results.

## Request

### Request syntax

| Method | Request URI |
| ------ | ----------- |
| `POST` | ```https://collections.mp.microsoft.com/v8.0/collections/b2bLicensePreview``` |

### Request header

| Header | Type | Description |
| ------ | ---- | ----------- |
| `Authorization` | `string` | Required. Either the delegated authorization X-token or the Microsoft Entra ID access token based on authentication type being used. |
| `Signature` | `string` | Required when authenticating with X-tokens. Not required for User Store ID authentication. |
| `User-Agent` | `string` | Optional but recommended. Helps identify your service for logging and investigations. |
| `Host` | `string` | Must be set to the value `collections.mp.microsoft.com`. |
| `Content-Length` | `number` | The length of the request body. |
| `Content-Type` | `string` | Specifies the request and response type. Currently, the only supported value is `application/json`. |

### Request body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `beneficiaries` | `UserIdentity` | User for which this item is being consumed. For more information, see [Authenticating with Microsoft Entra ID and User Store IDs](../xstore-authenticating-your-service.md#authenticating-with-microsoft-entra-id-and-user-store-ids). Not required for X-token authentication. | Only for User Store ID authentication |
| `productSkuIds` | `list<ProductSkuId>` | If specified, the service only returns products applicable to the provided product/SKU pairs. Recommended for all service-to-service queries for faster and more reliable results. For more information, see the following table. | No |
| `continuationToken` | `string` | If there are multiple sets of products that can't fit within `maxPageSize`, the response body returns a continuation token when the page limit is reached. To retrieve the remaining results from your query, provide the `continuationToken` in subsequent calls. | No |
| `maxPageSize` | `number` | The maximum number of products to return in one response. The default and maximum value is 100. | No |
| `entitlementFilters` | `list<string>` | Specifies which product types to return in the query results. For a list of valid values, see [Product type values and meaning](#product-type-values-and-meaning). | No |
| `market` | `string` | The country/region/market that you want to check the entitlement for. Using "neutral" (recommended) searches all markets. Otherwise, use the two-character ISO 3166 country/region code, for example, US. | Yes |
| `expandSatisfyingItems` | `bool` | Include items that are entitled through bundles or subscriptions in the results. If set to `false`, the results only contain the items the user purchased, such as the parent bundle's product information. If you're using this parameter, always specify which products you want results for to avoid long or timed-out requests. | No |
| `excludeDuplicates` | `bool` | Removes duplicate entitlements where the user might be entitled to a single product from multiple sources. | No |
| `validityType` | `string` | When set to **All**, all products for a user are returned, including expired items. **Valid** returns products that have an active status, start date &lt; now, and end date is &gt; now. **Invalid** returns products that don't meet the requirements of the Valid option. | No |
| `sbx` | `string` | Optional value for authenticating with UserStoreIds that specifies the Sandbox the results should be scoped to. Default without this value is the RETAIL sandbox. X-Token auth doesn't need this value as the Sandbox is specified within the X-Token. | No |

The `ProductSkuId` object contains the following parameters.

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `productId` | `string` | Also refereed to as the Store ID for the product within the Microsoft Store catalog. An example Store ID for a product is 9NBLGGH42CFD. | Yes |
| `skuId` | `string` | The specific SKU identifier if there are multiple offerings of the product in the Microsoft Store catalog. An example Store ID for a SKU is 0010. | No |

### Request example

> [!NOTE]
> Default `maxPageSize` is 100, but in the example it's lower to demonstrate requesting the remaining items.

```html
POST https://collections.mp.microsoft.com/v8.0/collections/b2bLicensePreview HTTP/1.1
Host: collections.mp.microsoft.com
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0e...
User-Agent: MicrosoftStoreServiceSample_1.21.9.0
Content-Type: application/json; charset=utf-8
Content-Length: 2032

{
    "maxPageSize": 2,
    "excludeDuplicates": true,
    "entitlementFilters": [
        "*:Game",
        "*:Consumable",
        "*:UnmanagedConsumable",
        "*:Durable",
        "*:Pass"
    ],
    "market": "neutral",
    "expandSatisfyingItems": true,
    "productSkuIds": [
        {"productId": "9N30KZZF4BR9"},
        {"productId": "9MXL21XPWWWK"},
        {"productId": "9PLRFWZWWF91"},
        {"productId": "9MZ0MGGFPLTP"}
    ],
    "beneficiaries": [
        {
            "identityType": "b2b",
            "identityValue": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYxNTI2OEI4...",
            "localTicketReference": ""
        }
    ],
    "sbx": "XDKS.1"
}
```

## Response

### Response body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `continuationToken` | `string` | If there are multiple sets of products, this token is returned when the page limit is reached. You can specify this continuation token in subsequent calls to retrieve remaining products. | No |
| `items` | `CollectionItemContractV8` | An array of products for the specified user. For more information, see the following table. | No |

The `CollectionItemContractV8` object contains the following parameters.

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `acquiredDate` | `datetime` | Date on which the user acquired the item. | Yes |
| `acquisitionType` | `string` | Indicates how the user has this entitlement. For more information, see [Product acquisitionType values and meaning](#product-acquisitiontype-values-and-meaning). | No |
| `devOfferId` | `string` | The offer ID from an in-app purchase. | No |
| `endDate` | `datetime` | The end date of the item. | Yes |
| `inAppOfferToken` | `string` | The developer-specified product ID string assigned to the item in Partner Center. An example product ID is product123. | No |
| `id` | `string` | An ID that identifies this collection item from other items that the user owns. This ID is unique per product. | Yes |
| `legacyOfferInstanceId` | `string` | The `offerInstanceId` value provided if request was to the old Xbox Inventory Service. Shouldn't be needed in most cases. | No |
| `legacyProductId` | `string` | The older `ProductID` format from the Xbox Developer Portal and used by the Xbox Inventory Service. New products created in Partner Center don't have this value by default but can be enrolled to have this value if needed. | No |
| `localTicketReference` | `string` | The ID of the previously supplied `localTicketReference` in the request body. | Yes |
| `modifiedDate` | `datetime` | The date that this item was last modified. With consumable products, this value changes when the user's quantity balance changes through another purchase of the consumable product or when a consume request is issued. | Yes |
| `productFamily` | `string` | Indicates what type of product that the product relates to. Usually "Games" but can also be blank for game-related content. | No |
| `productId` | `string` | Also refereed to as the Store ID for the product within the Microsoft Store catalog. An example Store ID for a product is 9NBLGGH42CFD. | Yes |
| `productType` | `string` | Indicates the product type. For more information, see [Product type values and meaning](#product-type-values-and-meaning). | Yes |
| `purchasedCountry` | `string` | The two-character ISO 3166 country/region code indicating the region store the product was acquired from. | No |
| `quantity` | `number` | The quantity of the item. Non-consumable products are always 1. For consumable products, this value represents the remaining balance that can be consumed or fulfilled for the user. | No |
| `satisfiedByProductIds` | `list<string>` | If this product is entitled because of a bundle or subscription, the `ProductIds` of those parent products are provided here. | No |
| `sharingSource` | `string` | Indicates if the item is entitled because of a sharing scenario. However, with service-to-service calls, the results are always scoped to directly owned entitlements and the value should always return as `None`. | No |
| `skuId` | `string` | The specific SKU identifier if there are multiple offerings of the product in the Microsoft Store catalog. An example Store ID for a SKU is 0010. | Yes |
| `startDate` | `datetime` | The date that the item starts being valid. | Yes |
| `status` | `string` | The status of the item. For more information, see [Product status values and meaning](#product-status-values-and-meaning). | Yes |
| `tags` | `string` | N/A. | Yes |
| `transactionId` | `GUID` | The transaction ID as a result of the purchase of this item. Can be used for reporting an item as fulfilled. This value is the OrderID associated to when the user purchased the item. Shouldn't be used as a unique identifier for this user's entitlement | No |
| `trialData` | `TrialInformation` | Information about this product&mdash;if it's a trial and the time remaining. | Yes |

The `TrialInformation` object contains the parameters that are shown in the following table.

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `isTrial` | `bool` | Indicates if this product is licensed through a trial | Yes |
| `isInTrialPeriod` | `bool` | Indicates if the product is in a trial period, such as a subscription | Yes |
| `trialTimeRemaining` | `timespan` | Indicates the remaining time the trial is valid with the format of DD:HH:MM:SS.MS | No |

### Product type values and meaning

| Value | Description |
| ----- | ----------- |
| `Game` | A base game product or a game bundle. |
| `Application` | An app within Microsoft Store that isn't listed as a game. |
| `Durable` | A downloadable content purchased once and owned until the product's end date. Also the product type for Add-on bundles and Season Pass bundles. |
| `Consumable` | A Store-managed consumable, where the user's balance (or quantity) is kept and managed on the Collections service. On purchase, the quantity is added to the user's balance and can then be removed by performing a consume request. Users are able to purchase this type of consumable again without it being fulfilled first. |
| `UnmanagedConsumable` | Also called a Developer-managed consumable. Must be fulfilled from the game or game's service before user can purchase the product again. |
| `Pass` | A Store-managed Subscription. Different than an Add-on subscription, which is configured under an app's Add-ons page in Partner Center. |

### Product status values and meaning

| Value | Description |
| ----- | ----------- |
| `Active` | The product is actively entitled. The user should have access to it. |
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

### Response Example

```json
HTTP/1.1 200 OK
Date: Wed, 10 Nov 2021 02:29:18 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 1744
MS-CorrelationId: aadb976e-634e-4e63-92b1-93af49883b43
MS-RequestId: afeb8062-41e3-486e-b6c5-ec53a417bef3
MS-CV: BW/uJSvAbU6p3rbS.0
X-Content-Type-Options: nosniff

{
    "continuationToken": "{\"checkSatisfactionIndex\":2}",
    "items": [
        {
            "acquiredDate": "2021-08-30T21:53:08.2565331+00:00",
            "acquisitionType": "Single",
            "beneficiary": {
                "identityType": "pub",
                "identityValue": "NoUserIdProvided"
            },
            "devOfferId": "",
            "endDate": "2021-08-31T21:53:07.4374279+00:00",
            "id": "1046015f83a8478397064c915224e5d3",
            "legacyOfferInstanceId": "fb758141-05cf-406d-b004-57e2a7c0d889",
            "legacyProductId": "fb758141-05cf-406d-b004-57e2a7c0d889",
            "localTicketReference": "",
            "modifiedDate": "2021-08-30T21:53:08.2589804+00:00",
            "purchasedCountry": "US",
            "productFamily": "",
            "productId": "9N30KZZF4BR9",
            "productKind": "Durable",
            "quantity": 1,
            "recurrenceData": {},
            "satisfiedByProductIds": [],
            "sharingSource": "None",
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
            "beneficiary": {
                "identityType": "pub",
                "identityValue": "NoUserIdProvided"
            },
            "endDate": "9999-12-31T23:59:59.9999999+00:00",
            "id": "27662ad4749342608ec09130b76601f9",
            "legacyOfferInstanceId": "4c584d39-3132-3058-c050-5757574b8500",
            "legacyProductId": "4c584d39-3132-3058-c050-5757574b8500",
            "localTicketReference": "",
            "modifiedDate": "2021-08-30T19:55:44.8043849+00:00",
            "purchasedCountry": "US",
            "productFamily": "Games",
            "productId": "9MXL21XPWWWK",
            "productKind": "Game",
            "quantity": 1,
            "recurrenceData": {},
            "satisfiedByProductIds": [],
            "sharingSource": "None",
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

If your query has more results than can be returned in a single response, a continuationToken is provided in the latest response.
You use this continuationToken in a follow-up request by adding it to a copy of the previous request body.

Example:

```html
POST https://collections.mp.microsoft.com/v8.0/collections/b2bLicensePreview HTTP/1.1
Host: collections.mp.microsoft.com
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0e...
User-Agent: MicrosoftStoreServiceSample_1.21.9.0
Content-Type: application/json; charset=utf-8
Content-Length: 2032

{
    "continuationToken": "{\"checkSatisfactionIndex\":2}",
    "maxPageSize": 2,
    "excludeDuplicates": true,
    "entitlementFilters": [
        "*:Game",
        "*:Consumable",
        "*:UnmanagedConsumable",
        "*:Durable",
        "*:Pass"
    ],
    "market": "neutral",
    "expandSatisfyingItems": true,
    "productSkuIds": [
        {"productId": "9N30KZZF4BR9"},
        {"productId": "9MXL21XPWWWK"},
        {"productId": "9PLRFWZWWF91"},
        {"productId": "9MZ0MGGFPLTP"}
    ],
    "beneficiaries": [
        {
            "identityType": "b2b",
            "identityValue": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYxNTI2OEI4...",
            "localTicketReference": ""
        }
    ],
    "sbx": "XDKS.1"
}
```

> [!NOTE]
> Even if you specify the excludeDuplicates flag, when using a continuation token it's possible to get entries of entitlements that have different status. So verify the results for duplicate entries and if they have a status that isn't Active.

## Related articles

[Manage products from your services](../service-to-service-nav.md)

[Authenticating your service with the Microsoft Store APIs](../xstore-authenticating-your-service.md)

[Managing consumable products from your service](../xstore-managing-consumables-and-refunds.md)

[Renewing a User Store ID key](../xstore-renew-a-user-store-id-key.md)
