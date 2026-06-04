# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-user-generated-content?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-user-generated-content?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Implement user-generated content in your game

Feedback

Summarize this article for me

This article describes how to implement user-generated content in your game. For more information, be sure to review the pages in the [See also](https://learn.microsoft.com/#see-also) section at the end of the article.

## Implement user-generated content features by using Microsoft Azure PlayFab

1. [Authenticate the player](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-user-sign-in?view=gdk-2604): players must be authenticated with both Xbox services and PlayFab before they can use the features that rely on these services in your games.
2. Use the `CreateUploadUrls` API to generate URLs for uploading user-generated content (UGC) files. For more information, see [Publish your first user-generated content](https://learn.microsoft.com/en-us/gaming/playfab/economy-monetization/economy-v2/tutorials/publish-ugc).
3. Create a draft UGC item: call the [CreateDraftItem](https://learn.microsoft.com/en-us/gaming/playfab/api-references/c/pfcatalog/functions/pfcatalogcreatedraftitemasync) API with the `Type:ugc` parameter. Draft items are designed to be reviewed and accessed by their creators or [catalog reviewers](https://learn.microsoft.com/en-us/gaming/playfab/economy-monetization/economy-v2/settings#catalog-reviewers) before being moved to a published state.
4. Get draft item IDs for a player: use the [GetEntityDraftItems](https://learn.microsoft.com/en-us/gaming/playfab/api-references/c/pfcatalog/functions/pfcataloggetentitydraftitemsasync) API. Title entities can call this API with the player ID in the `Entity` parameter. The API returns a list of draft items for that player. Only title entities can pass in an `Entity` parameter. Player entities can call the API without an `Entity` parameter. The API returns a list of draft items created by the calling player.
5. Publish a UGC item: after an item is in draft, push it to a published state by using [PublishDraftItem](https://learn.microsoft.com/en-us/gaming/playfab/api-references/c/pfcatalog/functions/pfcatalogpublishdraftitemasync). Published UGC items are searchable and available publicly. Use the item `Id` returned from the `CreateDraftItem` response.
6. Get the published status of a UGC item: use the item `Id` to get the published status for an item in your UGC catalog by using the [GetItemPublishStatus](https://learn.microsoft.com/en-us/gaming/playfab/api-references/c/pfcatalog/functions/pfcataloggetitempublishstatusasync) API.
7. Do a simple search: after the publishing call succeeds, all players can access the item via the public catalog. The [SearchItems API](https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/search) executes a search against the published catalog (including UGC items) by using the provided parameters. The API returns a set of paginated results. The `Filter`, `OrderBy`, and `Select` fields use `OData` as the query standard.

## See also

The [PlayFab documentation](https://learn.microsoft.com/en-us/gaming/playfab/) is the best source of information. Use it as a primary source. For additional information, see the following articles and sample.

- [User-Generated Content (UGC) quickstart](https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/ugc/quickstart)
 
- [Publish your first user generated content](https://learn.microsoft.com/en-us/gaming/playfab/economy-monetization/economy-v2/tutorials/publish-ugc)
 
- [PlayFabStore](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/PlayFabStore)
 
 This sample demonstrates the client-based operations that are used in presenting and operating an in-game economy with PlayFab Economy v2.
 

UGC is part of Azure PlayFab Economy, making Catalog Search, Catalog Settings, and Catalog Moderation essential for enabling UGC in your game. For additional information, see the following articles.

- [Economy v2 settings overview](https://learn.microsoft.com/en-us/gaming/playfab/economy-monetization/economy-v2/settings)
 
- [Moderating your user generated content](https://learn.microsoft.com/en-us/gaming/playfab/economy-monetization/economy-v2/ugc/moderation)
 
- [Adding ratings to your content](https://learn.microsoft.com/en-us/gaming/playfab/economy-monetization/economy-v2/catalog/ratings)
 
- [Catalog Search](https://learn.microsoft.com/en-us/gaming/playfab/economy-monetization/economy-v2/catalog/search)
 

---

## Feedback

Was this page helpful?

Yes No No

Need help with this topic?

Want to try using Ask Learn to clarify or guide you through this topic?

Ask Learn Ask Learn

Suggest a fix?

---

## Additional resources

---

- Last updated on 11/06/2025