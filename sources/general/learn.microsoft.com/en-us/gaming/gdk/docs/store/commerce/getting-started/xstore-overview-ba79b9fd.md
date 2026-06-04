# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/getting-started/xstore-overview?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/getting-started/xstore-overview?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# GDK Commerce Systems

Feedback

Summarize this article for me

The commerce related features and services available within the GDK enable multiple monetization models and the ability for deep integration of back-end services to those commerce options. This document provides an overview of these systems and options that are covered more in-depth within the Commerce section of the GDK documentation.

## Client Side Features

The GDK allows games to implement multiple types of in-game add-ons and product types such as consumables, durables (downloadable content), subscriptions, bundles, and trials. The XStore API set provides the needed functionality to query, advertise, and manage these products from the client side. For an example of a fully functional in-game store, see the [GDK In-Game Store sample](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/InGameStore).

The following articles under the Fundamentals section cover these APIs and scenarios:

- [Basic store operations](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-basic-store-operations?view=gdk-2604) - Query what is available to sell and what the user owns
 
- [How to use a durable without a package](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-dwobs?view=gdk-2604) - Using a durable that doesn't have a separate download package.
 
- [Manage and license downloadable content (DLC)](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-manage-and-license-optional-packages?view=gdk-2604) - Using traditional durables with download packages.
 
- [Consumable-based ecosystems](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-consumable-based-ecosystems?view=gdk-2604) - Setting up and configuring a consumable-based monetization model within your game.
 
- [Implementing Trials for your game](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-usage-limited-free-trials?view=gdk-2604) - Implementing a trial built into your game.
 
- [Bundles and Season Passes](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-bundles-and-season-passes?view=gdk-2604) - Using bundles and Season Passes to provide value and engagement to customers with your products.
 
- [Product sharing model for games](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-product-sharing-model-for-games?view=gdk-2604) - The licensing model for GDK games on both Xbox Console and Windows PC and how sharing between users is applied.
 

## Server Side Features

The Microsoft Store Services that support the client side APIs and allow service-to-service calls are split into the following services:

- [Collections](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-query-user-entitlements?view=gdk-2604) - Provides information on which products the user owns or is entitled to use and fulfills consumable products. Also can be used to detect Game Pass subscription status for authorized partners.
 
- [Clawback](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-managing-consumables-and-refunds?view=gdk-2604) - Allows partner services to detect and manage refunds issued to users for already fulfilled consumables.
 
- [Purchase](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/microsoft-store-apis/xstore-v8-grant?view=gdk-2604) - Allows partner services to add free items to the user's account.
 
- Recurrence - Provides detailed information on a user's subscriptions and allows partner services to manage those subscriptions on behalf of the user.
 

### Authenticating with the Microsoft Store Services

For detailed information on how to authenticate your service with the Microsoft Store Services see [Requesting a User Store ID for service-to-service authentication](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-requesting-a-userstoreid?view=gdk-2604).

Note

If you're familiar with X--token authentication, the Collections service does support X-tokens. However other Microsoft Store Services don't. Because of the valuable features offered in the other services, we now recommend that partners transition their server-to-server authentication flows to the Microsoft Entra ID and UserStoreId flow.

To help streamline the authentication flow and calling the Microsoft Store Services, review the Microsoft.StoreServices project and sample on GitHub. The Microsoft.StoreServices library helps manage the authentication keys and provides wrapper APIs to call into the Microsoft Store Services for managing products. The sample project highlights how a service can use the Microsoft.StoreServices library, example logic for managing consumable products, reconciling refunded purchases, renew expired credentials, and more. A step-by-step configuration guide is included with the sample to set up the sample service on your PC or through Azure.

- [Microsoft.StoreServices library (GitHub)](https://github.com/microsoft/Microsoft-Store-Services)
- [Microsoft.StoreServices Sample (GitHub)](https://github.com/microsoft/Microsoft-Store-Services-Sample)

## Key information for developers who used the XDK

If you're familiar with the commerce systems from the XDK, the following definitions should help guide you to what the equivalent GDK services are called

- **Inventory Service** - The functionality of the XDK's Inventory service (query ownership, fulfill consumables, etc.) is now handled by the Collections Service. This includes all server-to-server scenarios for validating ownership and consumable quantities. Although X-tokens used for Inventory work for calling Collections, we recommend that partners move to the Microsoft Entra ID and User Store ID token auth flow to use the expanded functionality of the Microsoft Store Services. 
 Example: [https://collections.mp.microsoft.com/v8.0/collections/b2bLicensePreview](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/microsoft-store-apis/xstore-v8-query-for-products?view=gdk-2604)
 
- **Inventory Client APIs** - All client side functionality related to querying ownership of items are now handled through the XStore APIs. 
 Example: [XStoreQueryEntitledProductsAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryentitledproductsasync?view=gdk-2604) returns the items that the current user is entitled to use at that moment.
 
- **Catalog Browse APIs** - All client side functionality related to querying available products to purchase in-game are now handled through the XStore APIs. There's no server-to-server option for querying available products to sell within your title. 
 Example: [XStoreQueryAssociatedProductsAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryassociatedproductsasync?view=gdk-2604) returns products that are able to be sold as part of an in-game store.
 
- **Trials and Licenses** - All client side functionality related to trial licenses are now part of the XStore APIs. Example: [XStoreQueryGameLicenseAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequerygamelicenseasync?view=gdk-2604) returns the current game's license info including any trial license info. For ability to validate a client side license on your own service see [Using License Tokens to validate licensing on your services](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/pc-specific-considerations/xstore-license-tokens?view=gdk-2604).
 

## See also

[Getting Started](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/getting-started/getting-started-nav?view=gdk-2604)

[Fundamentals](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/fundamentals-nav?view=gdk-2604)

[Manage products from your service](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/service-to-service-nav?view=gdk-2604)

[PC Specific Considerations](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/pc-specific-considerations/pc-specific-considerations-nav?view=gdk-2604)

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