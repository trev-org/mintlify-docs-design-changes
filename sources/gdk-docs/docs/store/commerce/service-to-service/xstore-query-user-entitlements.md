---
author: CameronGoodwin
title: "Query user entitlements from your services"
description: "Describes how to query for digital content the user is entitled to from your own services."
kindex:
  - query user entitlements
  - entitlement lookup from service
  - product ownership query
  - Store entitlement API
ms.author: cagood
ms.topic: article
edited: '03/23/2026'
ms.date: 03/31/2026
permissioned-type: public
---

# Query user entitlements from your services

The Collections Query APIs are the primary way for services to determine user ownership and entitlement state.
Compared to client-side XStore APIs, service-to-service queries support broader publisher-level scenarios and central service architectures.

Results from the Collections APIs include only products directly owned/entitled by the target user.
Shared entitlements that are valid on the client aren't returned in service-to-service responses.
For more information on sharing scenarios, see [Product sharing model for games](../fundamentals/xstore-product-sharing-model-for-games.md).

This article helps understand and integrate with the Query APIs through:

* [Selecting the right Collections Query API for your needs](#selecting-the-right-collections-query-api-for-your-needs)
* [Understanding satisfying entitlements in the response](#understanding-satisfying-entitlements-in-the-response)
* [Understanding duplicate items in the response](#understanding-duplicate-items-in-the-response)

> [!NOTE]
> Review [Prerequisites for service-to-service APIs](service-to-service-nav.md#prerequisites-for-service-to-service-apis).
> If products aren't correctly configured for your auth type, calls can succeed but return results.

## Selecting the right Collections Query API for your needs

There are two versions of Collections Query: `b2bLicensePreview` (v8) and `publisherQuery` (v9).
In most cases, use `publisherQuery` because it has streamlined request parameters and supports Xbox Game Pass status.
Use `b2bLicensePreview` when you need legacy behaviors such as LegacyProductId support.

| Query API Feature | [b2bLicensePreview (v8)](microsoft-store-apis/xstore-v8-query-for-products.md) | [publisherQuery (v9)](microsoft-store-apis/xstore-v9-query-for-products.md) |
| ----------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| View a user's Xbox Game Pass subscription status | No | Yes |
| X-token authentication | Yes | Yes |
| Microsoft Entra ID / User Store ID authentication | Yes | Yes |
| Partner Center StoreIds | Yes | Yes |
| LegacyProductIds (Product ID from Xbox Inventory / Xbox Developer Portal) | Yes | No |
| Ability to turn off satisfying entitlement results | Yes | No |

> [!NOTE]
> Although there's no v9 URI equivalent for consume functionality, you can use publisherQuery and the v8 consume URI together without issue.

## Understanding satisfying entitlements in the response

A user can be entitled to a product directly (purchase/redeem) or indirectly (bundle/subscription).
If the entitlement is indirect, the `satisfiedByProductIds` array contains the ProductId(s) the entitlement is coming from.

Example:
A user purchased the Deluxe Edition bundle of a game.
Calling the Query APIs shows the game product and any included products in the bundle returned in the result.
Each of these items has the ProductID of the Deluxe Edition bundle in their satisfiedByProductIds list.

## Understanding duplicate items in the response

You might see multiple items with the same ProductId/SKU when users have multiple entitlement sources.
Differences usually appear in fields such as `acquisitionType`, dates, and `satisfiedByProductIds`.
Use `excludeDuplicates` to collapse multiple entitlement sources into one item with the most direct ownership entitlement in this order:

* Direct purchase / redeem code
* Satisfied by a bundle purchased directly
* Satisfied by a subscription
* Satisfied by a promotional purchase (Ex: Games With Gold)

If duplicates come from the same source (for example, `Active` and `Expired` subscription periods), only one item is returned (even if `excludeDuplicates` is off) using the following status priority:

* `Active`
* `Invalid` (If multiple invalid entitlements, the most recently invalidated item would be returned)
* `Revoked`

Common duplicate scenarios and outcomes are shown in the following table.

| Scenario | `excludeDuplicates: false` | `excludeDuplicates: true` |
| -------- | -------------------------- | ------------------------- |
| Direct purchase + bundle entitlement | Both items can appear. | Direct purchase item is returned. |
| Direct purchase + Game Pass entitlement | Both items can appear (`Single` and `Recurring`). | Direct purchase item is returned. |
| Same entitlement source with multiple periods (for example, Active + Expired subscription periods) | One item is returned based on status priority. | One item is returned based on status priority. |

### Example

A user buys Game A and Add-on B, then later buys a Season Pass that also includes Add-on B.
The response can contain two entries for add-on B: the direct purchase and the satisfied entitlement from the Season Pass.
If `excludeDuplicates` is enabled, only the direct purchase entry is returned.

## See also

[Commerce Overview](../commerce-nav.md)

[Manage products from your services](service-to-service-nav.md)

[XStore API reference](../../../reference/system/xstore/xstore_members.md)
