---
author: CameronGoodwin
title: "Detecting Xbox Game Pass subscription access from your service"
description: "Describes how to detect a user's Xbox Game Pass subscription status."
kindex:
  - detect Xbox Game Pass subscription
  - Game Pass entitlement from service
  - subscription access detection
  - Store API subscription check
ms.author: cagood
ms.topic: article
edited: '03/23/2026'
ms.date: 03/31/2026
permissioned-type: public
---


# Detecting Xbox Game Pass subscription access from your service

If your title participates in Game Pass, your service can use the [collections.mp.microsoft.com/v9.0/collections/publisherQuery API](microsoft-store-apis/xstore-v9-query-for-products.md) to verify active subscriber status to grant in-game rewards and perks.
Before querying Game Pass status, your publisher must be authorized for the tiers you want to check.
Request this authorization through your Developer Partner Manager or Microsoft contact.

## Response data behavior for authorized and unauthorized publishers

If your publisher isn't authorized, Game Pass-entitled items appear as directly owned entitlements.
For example, `acquisitionType` appears as `Single`, and Game Pass ProductIds don't appear in `satisfiedByProductIds`.

For authorized publishers, only active Game Pass subscriptions are returned.
If the user's Game Pass subscription is canceled or ends, further queries no longer contain the Game Pass information.
Also, the `EndDate` is normalized to max value so it can't be used for subscription end detection.

## Game Pass release day delay in server-to-server entitlement results

When titles or add-ons go live in Game Pass, expect a delay between client availability and `publisherQuery` visibility.
This behavior is due to different cache refresh intervals across store systems.
In practice, local licensing usually updates first, and publisherQuery can lag by two to three hours.

Direct checks for Game Pass ProductIds aren't affected; the delay is mainly for items granted via satisfying entitlements.

## Requesting Game Pass subscription status

To request the user's Game Pass subscription status, add the corresponding ProductIds of the subscription tiers you're authorized to view into the query request's productSkuIds list (see table).  

| Subscription Tier | ProductID |
| ----------------- | --------- |
| Xbox Game Pass for Console (retired) | CFQ7TTC0K6L8 |
| Xbox Game Pass (Starter Edition) | CFQ7TTC10QFD |
| PC Game Pass | CFQ7TTC0KGQ8 |
| Xbox Game Pass Essential | CFQ7TTC0K5DJ |
| Xbox Game Pass Premium | CFQ7TTC0P85B |
| Xbox Game Pass Ultimate | CFQ7TTC0KHS0 |

If the user has a subscription in the tier you requested, the query response includes an item with the ProductId of the corresponding Game Pass subscription tier.

### Behavior requesting tiers included in higher tiers

Some Game Pass tiers are included when a subscriber has a higher tier.
Any of your authorized tiers that are included in higher tiers are returned when the user is subscribed to the higher tier.

Example:
Our publisher is authorized for Xbox Game Pass Essential.
The user has Xbox Game Pass Ultimate and when you query for all Game Pass ProductIds, publisherQuery only returns a result for Xbox Game Pass Essential.
However, if your publisher has access to view any of the other tiers those tiers would also be returned.

> [!NOTE]
> Xbox Game Pass (Starter Edition) is an exception to inheritance and is a stand-alone tier. It isn't included in any of the other tiers.  

### Granting in-game perks for Game Pass subscribers

We recommend requesting access to the lowest Game Pass tier needed to grant in-game perks and benefits to subscribers.

Example:
You're granting an in-game reward to all Game Pass subscribers on the console.
You only need access to Xbox Game Pass Essential (CFQ7TTC0K5DJ) because Premium and Ultimate include Essential.

### Detecting products entitled through a Game Pass subscription with satisfiedByProductIds

After authorization, identify Game Pass-derived entitlements by checking `satisfiedByProductIds` and `acquisitionType`.
A Game Pass-based entitlement has an `acquisitionType` of `Recurring` and includes the corresponding Game Pass ProductId in `satisfiedByProductIds`.

> [!NOTE]
> If you're using the excludeDuplicates filter option, the Game Pass related entitlement is filtered out if the user owns the title directly.
Therefore, include Game Pass ProductId values in publisherQuery when checking subscription status.

### Duplicate Item Example with Xbox Game Pass

If the user has both direct ownership and Game Pass entitlement for the same product, two entries can appear when `excludeDuplicates` is `false`.
When `excludeDuplicates` is `true`, the direct-purchase item is returned.

For full duplicate-resolution rules and source-priority behavior, see [Understanding duplicate items in the response](xstore-query-user-entitlements.md#understanding-duplicate-items-in-the-response).

### Example request for Xbox Game Pass Essential subscription status

```json
POST https://collections.mp.microsoft.com/v9.0/collections/publisherQuery HTTP/1.1
{authorization header}
User-Agent: {identifier string of your service}
Content-Type: application/json;
Host: collections.mp.microsoft.com

{
  "maxPageSize": 100,
  "excludeDuplicates": true,
  "validityType": "All",
  "productSkuIds": [
    {"productId": "CFQ7TTC0K5DJ"}
  ],
  "beneficiaries": [
    {
      "identitytype": "b2b",
      "identityValue": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYxNTI2OEI4N0YwNEFDQzIzRDdCQ0E2M...",
      "localTicketReference": ""
    }
  ],
  "sbx":"XDKS.1"
}
```

### Example response for Xbox Game Pass Essential

```json
HTTP/1.1 200 OK
Date: Mon, 18 May 2026 18:40:32 GMT
Content-Type: application/json; charset=utf-8
Server: Kestrel
Content-Length: 602
MS-CorrelationId: 5ec99421-7fa8-457e-87c1-edf16297528e
MS-RequestId: a604aca2-f60d-4de5-993f-125a57dcabdd
MS-CV: pjtLxeR5BUOY5n.0
X-Content-Type-Options: nosniff
MS-ServerId: c9cf4cd5b-4dhs

{
 "items": [
  {
   "acquiredDate": "2026-05-15T18:29:24.2131463+00:00",
   "acquisitionType": "Recurring",
   "endDate": "9999-12-31T23:59:59.9999999+00:00",
   "id": "a1702e2c6cff4e0095b3c51d06d9fac9",
   "modifiedDate": "2026-05-15T18:29:24.2153924+00:00",
   "productId": "CFQ7TTC0K5DJ",
   "productKind": "Pass",
   "quantity": 1,
   "recurrenceData": "mdr:0:9ee54c66dc2a49ca81bd2c3eaf148826:a118bfe9-8175-4407-9d14-b2be4af30acd",
   "satisfiedByProductIds": [],
   "skuId": "",
   "startDate": "2026-05-15T00:00:00+00:00",
   "status": "Active",
   "tags": [],
   "transactionId": "a118bfe9-8175-4407-9d14-b2be4af30acd",
   "trialData": {
    "isInTrialPeriod": false,
    "isTrial": false
   }
  }
 ]
}
```

## See also

[Commerce Overview](../commerce-nav.md)

[XStore API reference](../../../reference/system/xstore/xstore_members.md)
