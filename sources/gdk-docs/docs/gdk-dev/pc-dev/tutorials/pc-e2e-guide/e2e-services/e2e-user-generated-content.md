---
author: sdgmiller
title: "Implement user-generated content in your game"
description: "Describes how to implement user-generated content in your game."
kindex:
- User authentication and ownership
- Xbox services, Xbox account
- Xbox services, identity
- Xbox services, user authentication
ms.topic: article
edited: 06/03/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Implement user-generated content in your game

This article describes how to implement user-generated content in your game. For more information, be sure to review the pages in the [See also](#see-also) section at the end of the article.

## Implement user-generated content features by using Microsoft Azure PlayFab

1. [Authenticate the player](e2e-user-sign-in.md): players must be authenticated with both Xbox services and PlayFab before they can use the features that rely on these services in your games.
1. Use the `CreateUploadUrls` API to generate URLs for uploading user-generated content (UGC) files. For more information, see [Publish your first user-generated content](/gaming/playfab/economy-monetization/economy-v2/tutorials/publish-ugc).
1. Create a draft UGC item: call the [CreateDraftItem](/gaming/playfab/api-references/c/pfcatalog/functions/pfcatalogcreatedraftitemasync) API with the `Type:ugc` parameter. Draft items are designed to be reviewed and accessed by their creators or [catalog reviewers](/gaming/playfab/economy-monetization/economy-v2/settings#catalog-reviewers) before being moved to a published state.  
1. Get draft item IDs for a player: use the [GetEntityDraftItems](/gaming/playfab/api-references/c/pfcatalog/functions/pfcataloggetentitydraftitemsasync) API. Title entities can call this API with the player ID in the `Entity` parameter. The API returns a list of draft items for that player. Only title entities can pass in an `Entity` parameter. Player entities can call the API without an `Entity` parameter. The API returns a list of draft items created by the calling player.
1. Publish a UGC item: after an item is in draft, push it to a published state by using [PublishDraftItem](/gaming/playfab/api-references/c/pfcatalog/functions/pfcatalogpublishdraftitemasync). Published UGC items are searchable and available publicly. Use the item `Id` returned from the `CreateDraftItem` response.
1. Get the published status of a UGC item: use the item `Id` to get the published status for an item in your UGC catalog by using the [GetItemPublishStatus](/gaming/playfab/api-references/c/pfcatalog/functions/pfcataloggetitempublishstatusasync) API.
1. Do a simple search: after the publishing call succeeds, all players can access the item via the public catalog. The  [SearchItems API](/gaming/playfab/features/economy-v2/catalog/search) executes a search against the published catalog (including UGC items) by using the provided parameters. The API returns a set of paginated results. The `Filter`, `OrderBy`, and `Select` fields use `OData` as the query standard.

## See also

The [PlayFab documentation](/gaming/playfab/) is the best source of information. Use it as a primary source. For additional information, see the following articles and sample.

* [User-Generated Content (UGC) quickstart](/gaming/playfab/features/economy-v2/ugc/quickstart)

* [Publish your first user generated content](/gaming/playfab/economy-monetization/economy-v2/tutorials/publish-ugc)

* [PlayFabStore](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/PlayFabStore)

  This sample demonstrates the client-based operations that are used in presenting and operating an in-game economy with PlayFab Economy v2.

UGC is part of Azure PlayFab Economy, making Catalog Search, Catalog Settings, and Catalog Moderation essential for enabling UGC in your game. For additional information, see the following articles.

* [Economy v2 settings overview](/gaming/playfab/economy-monetization/economy-v2/settings)

* [Moderating your user generated content](/gaming/playfab/economy-monetization/economy-v2/ugc/moderation)

* [Adding ratings to your content](/gaming/playfab/economy-monetization/economy-v2/catalog/ratings)

* [Catalog Search](/gaming/playfab/economy-monetization/economy-v2/catalog/search)
