---
author: anhillier-xbox
title: "Granting players access to add-on content"
description: "Describes how to use entitlements and licensing to grant players access to add-on content."
kindex:
- Granting players access to add-on content using entitlements and licensing
- Entitlements overview, core APIs, basic usage
- Licensing overview, core APIs, basic usage
ms.author: anhillier
ms.topic: article
edited: '02/06/2026'
ms.date: '02/06/2026'
permissioned-type: public
---

# Grant players access to add-on content

Many titles offer add-on content for purchase in the Microsoft Store and within an in-game storefront.
Entitlements and licensing are two systems that help determine if a player should be granted access to add-on content within a game.
The approach you use depends on the content type (such as durable, consumable, or bundle) and the game's design.
You might manage consumable entitlements from a service, acquire durable licenses by using the client, or use a combination of both entitlements and licensing to control content access within your game.

## Entitlements

An entitlement represents the customer's right to access and use a digital product, including games, subscriptions, and add-ons.
Every purchase or redemption made in the Microsoft Store results in one or more entitlements tracked by Microsoft's collections service.
For more information about product types that work with entitlements, see [Choosing the right product type](../getting-started/xstore-choosing-the-right-product-type.md).

Product entitlements can be granted through a player's direct purchase of the product, purchase of a satisfying product (such as a bundle or subscription), or a shared entitlement from another user.
Entitlements support multiple states: active, inactive, expired, and revoked.

Game clients and services can query a player's entitlements, but results might differ:

* Client APIs can only return entitlements that have an active state, but they can return all entitlement types (direct, shared, satisfying).
However, an entitlement's type is invisible to the client.
* Service APIs can return entitlements of any state, but they can't return shared entitlements because they lack device context.
However, they can distinguish between direct and satisfying entitlements.

### Entitlement sharing and offline availability

* When the account that owns the product designates the current device as their offline device (by using **Home Xbox** on console or **Offline permissions** on PC), they share their non-consumable entitlements with other accounts on the device.
* Consumable entitlements are direct entitlements that are tied to the purchasing account and can't be shared with other accounts on the device.
* All entitlement queries require an online connection. Don't use entitlements to determine a player's access rights when offline. Use [licensing](#licensing) instead.

### Entitlement usage for a game client

Whenever the client sends a catalog request, it sends a corresponding call to the collections service to populate the `IsInUserCollection` property of each [XStoreProduct](../../../reference/system/xstore/structs/xstoreproduct.md) returned.
If `IsInUserCollection` is true, it indicates that the player is entitled to use the product.
Use this value when deciding which products appear as purchasable or already 'owned' by the player in your in-game storefront.

You can retrieve XStoreProduct details for add-on content through the following methods:

* [XStoreQueryAssociatedProductsAsync](../../../reference/system/xstore/functions/xstorequeryassociatedproductsasync.md) / [Result](../../../reference/system/xstore/functions/xstorequeryassociatedproductsresult.md) - returns only purchasable products.
The result doesn't include products that are hidden, only available in a bundle, or no longer purchasable in the Microsoft Store.
* [XStoreQueryProductsAsync](../../../reference/system/xstore/functions/xstorequeryproductsasync.md) / [Result](../../../reference/system/xstore/functions/xstorequeryproductsresult.md) - used to query for specific products.
Use this function to check for entitlement changes for a single product or subset of products.

To query the collections service for all active entitlements, including products that are hidden or no longer purchasable in the Microsoft Store, call:

* [XStoreQueryEntitledProductsAsync](../../../reference/system/xstore/functions/xstorequeryentitledproductsasync.md) /
[Result](../../../reference/system/xstore/functions/xstorequeryentitledproductsresult.md)

We recommend checking for entitlement changes when the game regains focus (PC) or returns from a constrained state (console) as the player might acquire new content while away from the game.
If add-on content is available for purchase on external storefronts (Microsoft Store, Xbox App, xbox.com), then a purchase can happen at any time on another device that the client fails to detect.

Check for new entitlements at strategic points in the game, such as when the player visits a store or inventory menu.
Or your title can poll for updates occasionally to reduce delays between players purchasing a product and the content becoming available in game.

For more information about querying products and entitlements from the client, see [Basic store operations](xstore-basic-store-operations.md).

### Entitlement usage for a game service

More advanced options for querying and managing entitlements are available when using a game service.
Here's a small sample of what's possible:

* Query for a user's entitlements across the entire publisher catalog.
* Distinguish between direct and satisfying entitlements to better understand how players acquire content.
* Query for inactive entitlements with a future start date to detect purchases still in a pre-order state.
* Manage a robust, cross-platform consumable ecosystem (see [Consumable-based ecosystems](xstore-consumable-based-ecosystems.md)).
* Detect when products are refunded with the Clawback service (see [Managing refunds and chargebacks from your service](../service-to-service/xstore-managing-refunds-and-chargebacks.md)).
* Detect Xbox Game Pass subscription status to award perks to subscribers in your game (see [Detecting Xbox Game Pass subscription access from your service](../service-to-service/xstore-detecting-game-pass.md)).

For more information about the service-to-service offerings, see [Manage products from your service](../service-to-service/service-to-service-nav.md).

### Entitlement considerations

* When you operate in a developer sandbox on PC, the client makes all entitlement queries on behalf of the account signed into the Xbox App.
* When you operate in RETAIL on PC, the client makes all entitlement queries on behalf of the account signed into the Microsoft Store.
Mismatched account scenarios can occur when the account signed into the game doesn't match the account signed into the Microsoft Store (see [Handling mismatched store accounts](../pc-specific-considerations/xstore-handling-mismatched-store-accounts.md) for details).

For troubleshooting common issues with entitlements, see [Troubleshooting XStore development](../getting-started/xstore-troubleshooting.md).

## Licensing

A license is a digital key that confirms the user's right to access content on the device.
The user must be entitled to use the product or insert a disc that includes the product (games and Durables with packages), before a license can be acquired.

When working with a Durable (with or without a package), use licensing to meet expectations around sharing, concurrency, and offline availability (see [product sharing model for games](xstore-product-sharing-model-for-games.md)).

Licenses are subject to device limitations and concurrency checks dependent on the license model used by the game (see [Open and restrictive licensing](../pc-specific-considerations/xstore-open-and-restrictive-licensing.md).
Even if a player has an active entitlement to the product, they might fail to acquire a valid license for use on the device.

### License sharing and offline availability

License sharing occurs on the device when one or more of these conditions are true:

* The game acquired a license while an owner's account is signed in and an online connection is established.
* The game acquired an offline license for the owner's account as the offline-device (**Home Xbox** on console or **Offline permissions** on PC). The owning account doesn't need to be signed into the device to share their licenses with other accounts in this scenario.
* The player inserts a disc that includes the DLC (Durable with package) and the DLC is installed on the device.

Licenses are available offline when one or more of these conditions are true:

* The account that owns the product designates the current device to be their 'offline' device (by using **Home Xbox** on console or **Offline permissions** on PC).
After the offline designation is enabled, the game must acquire a license for the Durable product while online. The next time the game is launched, it acquires the offline-capable license.
* The player inserts a disc that includes the DLC (Durable with package) and the DLC is installed on the device.

### License usage for a game client

You can license a Durable (with or without a package) by using the following flow:

* [XStoreCanAcquireLicenseForStoreIdAsync](../../../reference/system/xstore/functions/xstorecanacquirelicenseforstoreidasync.md) / [Result](../../../reference/system/xstore/functions/xstorecanacquirelicenseforstoreidresult.md) previews a license without invoking a concurrency check.
If [XStoreCanLicenseStatus](../../../reference/system/xstore/enums/xstorecanlicensestatus.md) is `Licensable`, then the game can attempt to acquire a durable license.
This preview check requires an online connection.
* [XStoreAcquireLicenseForDurablesAsync](../../../reference/system/xstore/functions/xstoreacquirelicensefordurablesasync.md) / [Result](../../../reference/system/xstore/functions/xstoreacquirelicensefordurablesresult.md) calls the licensing service to acquire a license if there's no license on the device or the current license is expired. A cached license is returned when an active license for the product is already available on the device or when this API is called offline.
If a cached license is returned, it might not be valid for the current player.
* Always call [XStoreIsLicenseValid](../../../reference/system/xstore/functions/xstoreislicensevalid.md) to check if the license is valid before unlocking content in the game.
* If you acquire a valid license, use [XStoreRegisterPackageLicenseLost](../../../reference/system/xstore/functions/xstoreregisterpackagelicenselost.md) to listen for license lost events.
If a license is lost, attempt to reacquire the license.
If the license can't be reacquired, decide when or if to block the player's access to content (dependent on game's design).
* After handling a license lost event, call [XStoreUnregisterPackageLicenseLost](../../../reference/system/xstore/functions/xstoreunregisterpackagelicenselost.md) and release the old license handle by calling [XStoreCloseLicenseHandle](../../../reference/system/xstore/functions/xstorecloselicensehandle.md).

For an example of how to use XStoreAcquireLicenseForDurablesAsync, see [How to use a durable without a package](xstore-dwobs.md).

A Durable with a package (DLC) can be included as part of a game bundle on disc.
The user must insert the disc and install the DLC before the game can acquire a license.
If DLC is included on disc, or the game is using [XPackage](../../../reference/system/xpackage/xpackage_members.md) APIs to enumerate installed packages, we recommend using the *ForPackage variant of each licensing API: [XStoreCanAcquireLicenseForPackageAsync](../../../reference/system/xstore/functions/xstorecanacquirelicenseforpackageasync.md) / [Result](../../../reference/system/xstore/functions/xstorecanacquirelicenseforpackageresult.md) and [XStoreAcquireLicenseForPackageAsync](../../../reference/system/xstore/functions/xstoreacquirelicenseforpackageasync.md) / [Result](../../../reference/system/xstore/functions/xstoreacquirelicenseforpackageresult.md).

For an example of enumerating installed packages and licensing DLC, see [Manage and license downloadable content (DLC)](xstore-manage-and-license-optional-packages.md).

### License usage for a game service

Licenses are tied to the device and can't be queried from a game service.
However, the client can call [XStoreQueryLicenseTokenAsync](../../../reference/system/xstore/functions/xstorequerylicensetokenasync.md) / [Result](../../../reference/system/xstore/functions/xstorequerylicensetokenresult.md) to provide extra validation by using a game service.
For more information, see [Using License Tokens](../pc-specific-considerations/xstore-license-tokens.md).

### Licensing considerations

* There might be a delay between when a purchase is completed, and a new license can be acquired.
Check for changes to a user's [entitlements](#entitlements) and acquire a license after a new entitlement is added for a Durable product.
* Test licenses are automatically granted for Durables with packages when deploying side-loaded packages.
To test licensing scenarios for Durables with packages, use license overrides or store-installed packages instead.
For more information, see [Enabling license testing](../getting-started/xstore-licensing-setup.md).
* When a game acquires a Durable license, the license is cached on the device.
Licenses are pulled from the cache until the system triggers a license refresh (there's no API that can force a refresh).
Repeated calls to XStoreAcquireLicense* check the device cache and not the service.
* License lost callbacks can help detect if the system erroneously returns a cached license to the current player that belongs to another account.
In such cases, a license lost event immediately fires and if XStoreAcquireLicense* is called again, a fresh license is provided.
* License sharing and caching can leave test machines in an unclean state.
For more information, see [Troubleshooting XStore development](../getting-started/xstore-troubleshooting.md).
  
## Sample Resources

For sample code that demonstrates how to query for player entitlements and acquire durable licenses, see the following resources:

* [InGameStore Sample (GitHub)](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/InGameStore): C++ sample demonstrating XStore functionality, including product retrieval, purchase, entitlements, and licensing Durables.
* [DownloadableContent Sample (GitHub)](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/DownloadableContent): C++ sample demonstrating XStore and XPackage functionality, including enumerating and licensing packaged Durables.
* [UnityInGameStore Sample (GitHub)](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Unity/Live/UnityInGameStore): C# sample demonstrating XStore functionality using the Unity game engine and 'Microsoft GDK API package.

## See also

[Commerce Overview](../commerce-nav.md)  
[XStore API reference](../../../reference/system/xstore/xstore_members.md)  
