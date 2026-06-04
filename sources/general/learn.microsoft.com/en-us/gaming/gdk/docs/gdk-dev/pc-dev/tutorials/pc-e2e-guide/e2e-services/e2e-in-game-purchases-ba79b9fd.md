# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-in-game-purchases?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-in-game-purchases?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Implement in-game purchases in your game

Feedback

Summarize this article for me

This article describes implementing in-game purchases. They are transactions within a game so that players can acquire virtual items or enhance their gaming experience. These purchases can be cosmetic, offering visual customization options like character skins or outfits, or functional, providing in-game advantages such as weapons or power-ups.

## Implement in-game purchases by using the Microsoft Game Development Kit and Microsoft Store

To implement player in-game purchases by using the Microsoft Game Development Kit (GDK) APIs and services, follow these steps.

1. Go to the **Apps and games** dashboard in [Partner Center](https://partner.microsoft.com/dashboard/home).
2. Select your Game product from the list, or use the **Search** option to search by name or Store ID.
3. Select **Add-ons** from the left navigation pane.
4. Select **\+ Create a new**, and then select **Consumable or Durable**.
5. Enter an identifier for the item. This will be displayed in the Partner Center UI and referenced in game code.
6. Integrate with GDK Commerce Systems: Use the Commerce System in the GDK to interact with the platform's (Xbox/Microsoft Store) purchase system. Use the following functions to retrieve product information from the platform's store.
 - [XStoreQueryAssociatedProductsAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryassociatedproductsasync?view=gdk-2604): Gets store listing information for the products that can be purchased from within the current game.
 - [XStoreQueryProductForCurrentGameAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryproductforcurrentgameasync?view=gdk-2604): Provides store product information for the currently running game, its SKUs and availabilities, and other metadata.
 - [XStoreShowAssociatedProductsUIAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstoreshowassociatedproductsuiasync?view=gdk-2604): This opens the Microsoft Store app and shows the set of available add-ons that are associated with the game.
7. Purchase initiation: The player selects the product they want to purchase from the in-game store. This could be a consumable, durable, subscription, or other types of in-game content. The game initiates the purchase process by using functions like the following:
 - [XStoreShowPurchaseUIAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstoreshowpurchaseuiasync?view=gdk-2604): Begins the purchase UI overlay for the specified product.
 - [XStoreShowProductPageUIAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstoreshowproductpageuiasync?view=gdk-2604): Opens the Microsoft Store app directly to the Product Details Page (PDP) of the provided ProductId.
8. Manage entitlements: Use the entitlement APIs ([XStoreQueryEntitledProductsAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryentitledproductsasync?view=gdk-2604) and [XStoreQueryEntitledProductsResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryentitledproductsresult?view=gdk-2604) in the GDK to verify and manage player ownership of purchased items. Use the `XStoreAcquireLicense` APIs for durable products where licenses can be shared.

## See also

The GDK documentation is the best source of up-to-date information. For more details see the following articles and samples.

- [GDK Commerce Systems](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/getting-started/xstore-overview?view=gdk-2604)
 
- [Initial configuration in Partner Center](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/getting-started/xstore-initial-configuration-in-partner-center?view=gdk-2604)
 
- [Basic store operations](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-basic-store-operations?view=gdk-2604)
 
- [Microsoft Store Service APIs](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/microsoft-store-apis/xstore-nav?view=gdk-2604)
 
- [In-Game Store Sample](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/InGameStore)
 
 This sample demonstrates the client-based operations that are used in presenting and operating an in-game storefront. This sample also shows how to examine game license information, including how to enable and check for trial status.
 
- [MicrosoftStoreServicesClient](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/MicrosoftStoreServicesClient)
 
 This sample works with the [Microsoft.StoreServices Sample](https://github.com/microsoft/Microsoft-Store-Services-Sample) and demonstrates the client-side call pattern to do service-to-service authentication with Store Services.
 

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