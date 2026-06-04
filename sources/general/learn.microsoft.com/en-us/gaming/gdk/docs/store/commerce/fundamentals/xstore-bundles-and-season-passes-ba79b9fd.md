# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-bundles-and-season-passes?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-bundles-and-season-passes?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Bundles and Season Passes

Feedback

Summarize this article for me

Offering bundles or season passes for your game can provide good value for the user and help offer increased revenue potential. The value to the customer comes from either a discounted cumulative price on all the items, or exclusive content for purchasing the bundle or season pass. Developers benefit by having users engaged and invested into the game long-term. Effective examples are pre-order bundles and season passes that include upcoming content. But most important is having clear value and incentives for the end-user when configuring these product types.

Although both product types 'bundle' content together for a single price, there are differences between these product types and how they're used within the Microsoft Store:

- Game bundle - Can include Game product types, DLC, etc. across the publisher.
- Add-on bundle - Includes multiple add-on products under a single game.
- Season Pass - An Add-on bundle that includes products of the parent game, including ones to be added later.

## How bundles reflect ownership and entitlements to the included contents

When a user purchases bundle type product, a license is granted for each included Game and Durable. Ownership reflects in the Store UI by showing 'You own this' and offering to install the item. The license follows the [Product sharing model for games](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-product-sharing-model-for-games?view=gdk-2604). So, other users on a shared console or PC would have access to the contents as well. When using the [XStore](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/microsoft-store-apis/xstore-nav?view=gdk-2604) APIs for your in-game store, the included items show as owned by users on a shared device. If your design calls for Season Pass benefits to apply only to direct owners and ignore sharing, you need to [query the user's entitlements from your services](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-query-user-entitlements?view=gdk-2604).

Consumable products included in a bundle product however are only granted once at time of purchase to the purchasing account and not shared.

While the client shows the bundle and its contents as owned by all shared users, the behavior is different when [managing products from your services](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/service-to-service-nav?view=gdk-2604). The service-to-service calls are scoped to just what the user owns directly and not shared entitlements. The bundle or Season Pass product show up in these results as owned, but the included products are reported as satisfying entitlements. If your query request doesn't specify to include satisfying entitlements, items included in the pass or bundle aren't returned from the call. For more information, see [Understanding satisfying entitlements in the response](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-query-user-entitlements?view=gdk-2604#understanding-satisfying-entitlements-in-the-response).

## Delay between satisfying entitlement checks on the client vs server-to-server

When you publish an update to a bundle or a season pass, there's a visibility delay of added items between the client and server-to-server API queries (see [b2bLicensePreview](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/microsoft-store-apis/xstore-v8-query-for-products?view=gdk-2604) or [PublisherQuery](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/microsoft-store-apis/xstore-v9-query-for-products?view=gdk-2604)). The delay is due to the catalog caches used by different store systems being updated at different intervals. When the change is published to the catalog, the local licensing services will usually get the updated info first and the caches used by PublisherQuery within two to three hours after. Therefore, anticipate a few hours between client side APIs granting access and your server-to-server calls not reflecting ownership of the new items.

## Using a Game Bundle with your game

Game Bundles have the ability to include all product types and content across a publisher's catalog. Some common examples are:

- Pre-order bundle - Includes game not yet released and exclusive pre-order content / incentives.
- Starter Edition - Includes game product but with limited features or characters as a starter or free-to-play entry point for users to a game.
- Standard Edition - Used with free-to-play games or Starter Edition bundles. Includes the Starter Edition content and unlocks the full features or characters of game. Equivalent to the full base game purchase.
- Deluxe Edition - Includes the game product, season pass, DLC, and other exclusive content or incentives.
- Franchise bundle - Includes all games (and content if available) from a specific franchise under a publisher.

### Including a Season Pass in your game's bundle

If you're configuring a game bundle that includes a Season Pass or another bundle product, you must include that bundle **and** the contents of that bundle or Season Pass individually in the bundle you're configuring to ensure:

- The user sees the content included in the bundle and gets proper licenses for the individual contents.
- The included bundle or Season Pass shows as 'owned' in the store UI to prevent repurchasing the included bundle.
- Ensure all included items are installed on the user's device.

If you add new items to your Season Pass, add them to all existing bundles that included the Season Pass such as Deluxe or Pre-order bundles.

### Pre-order Bundles

If offering pre-order versions of your game bundles, you need to include the post-release bundle in the pre-order bundle to ensure that the post-release version of the game bundle shows as 'owned' in the Store UI. Just like adding a Season Pass, a pre-order bundle should include all of the individual items of any included bundles.

Incentive or bonus products for pre-ordering the game should also be included in these bundles. Examples of incentives are access to a Beta test, cosmetic items, or limited time access to items.

### Configuring a Game Bundle in Partner Center

Because a bundle product's scope is across your publisher, you create it from the publisher's Overview dashboard.

1. From the **Overview** page of the publisher, select **Create a new...**\* to open the drop-down menu.
 
2. Select **Create a new bundle**.
 
3. Enter the string name the product and select **Create this product in a sandbox**.
 
4. Select **Create**.
 
5. Enable the check box for **Make this product a season pass**.
 
6. Select **Create**.
 
7. From the **Bundle setup** page, enable Retail and Sandbox check boxes for each platform the product should be available on.
 
8. Select **Manage included products**
 
9. Select all the products to be included in the bundle (including the items inside of a Season Pass or other bundle that this new bundle includes).
 
10. Select **Continue**.
 
11. If an item shouldn't be shown as 'included in' the bundle until a later date, change the **Visible** in bundle setting as appropriate.
 

Note

Making a product visible at a future date in the bundle only hides that product from the bundle Store Listing page until the specified date. Consumers that own the bundle immediately own the included hidden member and can potentially use the content. Disable store presence for the add-on if you don't want your products to be accessible before their release date.

12. If this bundle includes a game product, select the game from the **Edition of** drop-down. This setting enables Store UI when a customer chooses to buy the game that shows the bundle options for buying the game.
 
13. Select **Save draft**.
 
14. Configure the rest of the store properties, ratings, listings, pricing, and then publish to your Sandbox.
 

Note

If your bundle includes a Season Pass and other content is added later, you need to update the bundle to ensure users get access to the new content.

## Using a Season Pass within your game

A Season Pass is unique from a bundle product because it only scopes to the content within a single game. A Season Pass is intended as an offering of content and experiences to a user during a set time period after the game is launched. Season Passes are also intended to contain content that isn't released, or even configured on Partner Center yet. When planning your Season Pass offerings and content, you should contact your Microsoft Developer Partner Manager who can provide guidance and review your plans. Examples of using a Season Pass:

- First 12 months of planned DLC content bundled together at a discounted price
- Season Pass owners get exclusive first access to new characters, maps, or bonus rewards in-game
- Season Pass owners get an allotment of monthly in-game currency (controlled through your own services, not configurable in Partner Center)
- Season Pass owners get access to new rewards and progressions within the defined season's time frame.

### Season Pass best practices

When offering a Season Pass, it should include at least one product at release. If your main DLC content isn't yet released, include a bonus incentive or exclusive cosmetic item to the Season Pass. Any bonus items should be unique products in the store and have their own product details page so they're visible in the 'Included in' UI elements.

Season Pass products don't show up in the Console's My Games and Apps UI, but the included products do. Therefore we recommended referencing the Season Pass in the bonus product's name and store images. Ex: "Title's Season Pass Exclusive Content."

As a Season Pass represents a user buying-in to the upcoming content and features of a title, even when some included products not announced or released. It's a good practice to provide proper description text of the marketplace item referencing upcoming content such as 'Includes the first three story expansion DLCs.' When the new product is added and the Season Pass punished, current Season Pass owners receive a license to the new content.

When a new item is added to the Season Pass, the owner gets a license for the product automatically. The new product's store page shows the item as 'owned' and it also appears in the My Games and Apps UI for download. However, if the new product includes a download package, the package isn't automatically downloaded. Your title can use the [XStoreDownload APIs](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/microsoft-store-apis/xstore-nav?view=gdk-2604) to download the item, or the user can start a download from the Store page or My Games and Apps UI.

### Configuring a Season Pass in Partner Center

A Season Pass is configured in Partner Center as an Add-on Bundle under the parent game.

1. From the **Submission overview** page of the parent game, go to the **Add-ons** page.
 
2. Select **Create a new...** to open the drop-down menu, and then select **Add-on bundle**. ![Screenshot of Season Pass Creation](https://learn.microsoft.com/../../../../media/public-images/xstore/seasonpasscreation.png?view=gdk-2604)
 
3. **Product ID** is a custom string that's how the product is shown to you in the PartnerCenterUI. We recommend a recognizable string name as seen in the screenshot.
 
4. Enter the string name the product is shown as in the store in the **Name** field.
 
5. Enable the check box for **Make this product a season pass**.
 
6. Select **Create**.
 
7. From the Season Pass's Overview page, select **Season pass setup**
 
8. Enable Retail and Sandbox check boxes for each platform the product should be available on.
 
9. Select **Manage included add-ons**
 
10. Select the products to be included in the Season Pass at release and select Continue.
 
11. Select **Save draft**.
 
12. Configure the rest of the store properties, ratings, listings, pricing, and then publish to your Sandbox.
 

As future content included in the Season Pass is released, add those items to the **Included add-ons** list and republish both the Season Pass and the new product (if already in the store).

## See also

[Commerce Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/commerce-nav?view=gdk-2604)

[XStore API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/xstore_members?view=gdk-2604)

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

- Last updated on 04/22/2026