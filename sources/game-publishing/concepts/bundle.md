---
title: Bundles
description: Bundles.
services: gaming
author: joannaleecy
ms.author: mingshen
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: bundles
ms.localizationpriority: medium
permissioned-type: public
---

# Bundles

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

A bundle is a collection of games and/or add-ons that customers can purchase as one product in the Microsoft Store. When a customer purchases a bundle, the individual products included in the bundle will be installed without any additional action required from the customer. If you have selected a product for **Edition of** (described as follows), that product will be installed first. All the included products will be shown separately under **My games & apps**.

A Game bundle is similar to a [Season Pass](add-ons/add-on-bundle.md#season-pass) or [Add-on bundle](add-ons/add-on-bundle.md); however, a Game bundle can include products from across the publisher. A Season Pass or Add-on bundle is an add-on and can include only the durables that are under the same parent product as that of the Season Pass or Add-on bundle, respectively. The difference between a Season Pass and Add-on bundle is that a Season Pass can start out as an empty bundle, whereas Game bundles and Add-on bundles require that they contain at least one product.

All kinds of bundles that are supported in Partner Center can be updated to include new Durables or Durables with packages, even if the bundle has been published to the RETAIL sandbox already. The only caveat is that you can't add consumables as a new bundle member. You can't add bundles within other bundles. The only exception are Game bundles, which can contain Season Pass or Add-on bundles.

Here’s a table that contains the similarities, differences, and nuances between the various bundle offerings in Partner Center.

| Features                                                  |  Game bundle  | Season Pass | Add-on bundle |
|-----------------------------------------------------------|----------|-------------|---------------|
| Can include base game                                     |    ✔      |       ✖      |        ✖       |
| Can include add-ons                                       |    ✔      |       ✔      |        ✔       |
| Can include Subscriptions                                 |    ✖      |       ✖      |        ✖       |
| Game channel visibility                                   |    ✔      |       ✖      |        ✖       |
| Add-on channel visibility                                 |    ✖      |       ✔      |        ✔       |
| Available in Partner Center submission experience         |    ✔      |       ✔      |        ✖       |
| Available in Partner Center modular publishing experience |    ✔      |       ✔      |        ✔       |
| Available to managed partners (ID/AAA)                    |    ✔      |       ✔      |        ✔       |
| Available to breadth publishers                           |    ✖      |       ✖      |        ✖       |
| Requires special product-level permission                 |    ✖      |       ✔      |        ✖       |
| Can be published as an empty bundle initially             |    ✖      |       ✔      |        ✖       |
| Can be added to Game Pass                                 |    ✔      |       ✔      |        ✔       |
| Supports pre-order/early access                           |    ✔      |       ✔      |        ✔       |

## Create a bundle

Follow these steps to create a bundle in Partner Center.

1. On the **Apps and games** dashboard page, select **New product**, and then select **Game bundle**.

2. Enter a name for your bundle.

3. Select **Create this bundle in a sandbox environment** when creating a Game bundle, and the select **Create**.
   * If you create your bundle in a sandbox, you can include only the products published to the same sandbox. Keep this in mind when choosing the sandbox in which you'll create your bundle.

The rest of the submission process is almost the same as the process used for other types of products. We'll discuss the differences later in this article.

### Include products in a bundle

If you configure a bundle, Season Pass, Add-on bundle,  or Subscription to be visible to a **Private audience**, products within it aren't automatically configured for a **Private audience**, because audience visibility is set by product. Bundles, Season Passes, Add-on bundles, and Subscriptions are independent products. 

For all bundle types, the **Setup** page has a section called **Included products**. This is where you'll specify the products to be included in the bundle, and you'll use a process similar to that used for including products in a [Season Pass](add-ons/add-on-bundle.md#season-pass) or [Add-on bundle](add-ons/add-on-bundle.md).

Under **Products**, you'll find a list of products that have been created by your account. Select a product, and then select **Add** to add it to the bundle. To remove a product from the bundle, either cancel the selection from the product in the **Included products** dialog  or select **Remove** for the product in the **Included products** section of the **Product Setup** page. Above the list, there is a handy search bar that make it easy to find products.

You can also include add-ons by selecting **Add-ons for <*Parent product name*>**. If you expand the list of add-ons by selecting **See all**, you can include individual add-ons in the bundle.

> [!IMPORTANT]
> [Visibility](#visibility-date-control-of-bundle-members) only defines when the product is displayed to users as an included product of the bundle. The product might still be discoverable and accessible, depending on the product's own Schedule configuration.

Bundles require at least two included products, and you can't include one bundle in another. In addition, you can submit a bundle only if all of its included products have already been published to the Microsoft Store.

### Set a bundle as an edition of an app or a game

You can also specify a bundle as an edition of one of its included apps or games. This means that the bundle will be displayed for purchase on the app's or game's Microsoft Store listing. On the **Bundle setup** page, under **Edition of**, open the dropdown list and then select one of the bundle's included apps or games. If you don't want to specify the bundle as an edition of an app or a game, leave it as **Not applicable**.

If you publish more than one bundle as an **Edition of** for one of your products, be sure to provide a unique value (for example, "Standard bundle" or "Deluxe bundle") in the **Short title** field of your bundle's Store listing. When a product has more than one bundle as **Edition of**, a control that shows the available editions (by using the **Short title** values you provide) will appear on that product's Store listing.

<span id="store-display" />

### Specify the order in which included products are displayed

The bundle’s Store listing will show all the included products by default unless:

* The products' **Visibility** settings prevent them from being displayed.
* The products don't have a Store listing of their own, as with some add-ons.

To specify the order in which the included products will be displayed in the **Store display** section of the **Properties** page:

1. Select **Show options** to expand the **Store display** section. All the products that you’ve included in your bundle (in the **In this bundle** section of the page) will appear. 

2. Drag the products to get the order you want them in, or manually edit the numbers in the **Display rank** column.

   The order you save will be applied to the products displayed on the bundle's Store listing.

Even if a product won't be included in your Store listing, it will still be shown in the list. The order you select for such a product will be ignored because the product won't be displayed in your Store listing at all. However, if a subsequent submission for the product changes in a way that exposes the product in the bundle’s Store listing, the order you select for that product will be applied.

<span id="install-order" />

### Specify the order in which included products are installed

By default, the installable products included in the bundle can be installed to a customer’s device in any order. However, if you used the **Edition of** section to configure the bundle as an edition of an app or a game, that app or game will always be installed first. You can change this order in the **Install order** section of the **Properties** page.

To specify the installation order for the products in your bundle: 

1. Select **Show options** to expand the **Install order** section. All of the products you’ve included in your bundle in the **In this bundle** section of the page will appear. 

2. Drag the products to get the order you want them in, or manually edit the numbers in the **Install order** column. 

The order you save will be used to install the products to customers' devices after they acquire the bundle, although we'll make the following exceptions.

* If you've configured the bundle as an edition of an app or a game, that app or game will be installed first, regardless of your selections. 
* If dependencies require certain products to be installed before others, we’ll adjust the order accordingly. For example, we'll install a parent product before any of its add-ons, regardless of your selections.
* Selections for products that aren't individually installed to a customer’s device (such as add-ons that don’t have packages) will be ignored.

**Important:** The order that you select is used only for customers with devices that are running Windows 10, version 1803 or later; this includes Xbox. If your bundle supports earlier OS versions, products might be installed in any order on those devices, regardless of what you specify in this section.

### Review age ratings

A bundle's [age rating](age-ratings.md) will be the highest age rating of all included products. For example, if a bundle has two included products, one rated E for Everyone and one rated T for Teen, your bundle will receive a rating of T.

If the bundle has no included products yet, a screen on the **Age ratings** page will notify you accordingly.

After you've added some products to your bundle, review the age ratings applied.

### Set the device family availability

You can offer a bundle only on platforms supported by all included products. For example, if you have a bundle with two games&mdash;one published to Xbox and one to both Xbox and PC&mdash;you can offer the bundle on Xbox only.

## Get a bundle's URL, Store ID, and Store protocol link

For products using sandboxes, information such as the Store protocol link, web URL, and Store ID can be obtained from the Identity section in the **Setup** page. 

## Sell a product only as part of a bundle

Sometimes you'll want to sell a product only as part of a bundle and not let customers acquire the product separately. For example, maybe you want to have a special edition of a product that you offer only as part of a bundle. In such a scenario, you'll configure the product's [Pricing and availability](availability/availability-overview.md) settings according to how you want to display the product in the Store.

If you make such a product available in the Store (to let customers search for it and view its Store listing if it has one), you must configure the **Schedule** section such that customers can't acquire the product separately from the bundle. In the **Base Schedule**, set **Release** to **not scheduled**, set **Discoverable in the Store** to the date on which the bundle will become visible, and set **No longer discoverable in the Store** to **never**. If you have customized schedules for other regions, change those schedules as well.

For more information, see [Configure products to be visible but not purchasable in the Store](../how-to/how-to-visible-only-pdp.md).

If you do this, customers won't be able to acquire the product on its Store listing, and it will show the following text.

![Available only as part of a bundle](media/available-only-as-part-of-a-bundle.png) <!-- Available only as part of a bundle. Jump to bundles. -->

If you hide the product in the Store, customers won't be able to find the product by searching for it, but customers viewing the bundle's Store listing will still see the product and, by selecting it, will be able to view its Store listing. If you selected **Direct link only** under **Visibility**, or if the customers have a promotional code and you selected one of the other options, the customers can acquire the product separately.

## Bundle analytics

You can [view analytic reports](/windows/apps/publish/analytics) for your bundle. The [Reviews report](/windows/apps/publish/reviews-report) reflects the reviews left only for your bundle, not for the individual products in the bundle. For this reason, the reviews you see in this report might differ from those you see on your bundle's Store listing, which might include reviews both for the bundle and for the individual products it includes.

## Updating bundle members

You can add or remove bundle members before publishing to RETAIL. Once published to RETAIL, you can only **add** members. You can't remove products from a bundle via self-serve after the bundle is published to RETAIL.

> [!NOTE]
> Consumable products can't be added to a bundle after it has been published to RETAIL. If you've published a bundle to RETAIL without a Consumable that was intended to be included, speak to your Microsoft contacts.

On the Setup page for the bundle, select **Manage included products**. Select the non-consumable products, select **continue** to add the products to the bundle, select **Save on Bundle setup**, and then finally Publish the bundle.

Users that purchased the bundle before the new members were added to the bundle will automatically own the newly added products. Newly added bundle members will not automatically download to the customer's device for existing consumers. However, customers can get the newly added members by going to the Store page for the bundle or the included member. Note that the bundle and the newly added members need to be republished for these changes to take effect. You can publish them from Partner Center by selecting the **Review and Publish** button.

If you want these changes to happen on a certain date, ensure that you make those changes closer to your desired date. Any republishing of the bundle would make these changes take effect immediately, even if you don’t publish the changes from Partner Center explicitly.

## Visibility date control of bundle members

When members of a bundle are added, the included members are unlocked for customers immediately and are also displayed in the bundle’s Store Listings immediately on the **Visible in bundle** configured date. In Partner Center, you can control the visibility date of bundle members. However, **this does not mean control of entitlements.** Customers are still given an entitlement immediately. To prevent customers from receiving an entitlement to the added members immediately, wait to include them in the bundle until nearer to the intended release date. 

### Frequently asked questions for visibility date control of bundle members

**Q:** Can game publishers provide a rolling schedule for their customers?

**A:** Yes. Game publishers can either choose to make the bundle members visible at a specific UTC time or by the customer's local time.

**Q:** Do customers get entitlements to these products even if they are not visible in the UX?

**A:** Yes. Customers will have entitlements to the included products when updates to the bundle members are published.

**Q:** How can publishers ensure that their customers don’t accidentally access the content?

**A:** Ensure that the product isn't added as an included member until the release date.

**Q:** Is it true that I can hide the bundle members?

**A:** Yes. Game publishers can make the product not be visible in the bundle. This is a quick way to hide products in a bundle. Publishers just need to set the visibility date to **Never** in the bundle setup page and publish the bundle. Publishers can modify that setting and republish an update at any time.

**Q:** Do I need to republish the bundle and/or its included members?

**A:** Yes. The bundle needs to be republished for these changes to take effect.

## Next steps

* [How to add and edit products in a bundle](../how-to/how-to-addeditproductstobundle.md)

## See also

* [Create and publish add-ons for a game](../tutorial-xbox-managed/how-to-create-use-publish-add-ons.md)
* [Analyze app performance](/windows/apps/publish/analytics)
* [Reviews report](/windows/apps/publish/reviews-report)
