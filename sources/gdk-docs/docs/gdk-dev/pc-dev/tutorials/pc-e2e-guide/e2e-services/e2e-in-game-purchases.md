---
author: sdgmiller
title: "Implement in-game purchases in your game"
description: "Describes how to set up in-game purchase."
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
# Implement in-game purchases in your game

This article describes implementing in-game purchases. They are transactions within a game so that players can acquire virtual items or enhance their gaming experience. These purchases can be cosmetic, offering visual customization options like character skins or outfits, or functional, providing in-game advantages such as weapons or power-ups.

## Implement in-game purchases by using the Microsoft Game Development Kit and Microsoft Store

To implement player in-game purchases by using the Microsoft Game Development Kit (GDK) APIs and services, follow these steps.

1. Go to the **Apps and games** dashboard in [Partner Center](https://partner.microsoft.com/dashboard/home).
1. Select your Game product from the list, or use the **Search** option to search by name or Store ID.
1. Select **Add-ons** from the left navigation pane.
1. Select **+ Create a new**, and then select **Consumable or Durable**.
1. Enter an identifier for the item. This will be displayed in the Partner Center UI and referenced in game code.
1. Integrate with GDK Commerce Systems: Use the Commerce System in the GDK to interact with the platform's (Xbox/Microsoft Store) purchase system. Use the following functions to retrieve product information from the platform's store.
   * [XStoreQueryAssociatedProductsAsync](../../../../../reference/system/xstore/functions/xstorequeryassociatedproductsasync.md): Gets store listing information for the products that can be purchased from within the current game.
   * [XStoreQueryProductForCurrentGameAsync](../../../../../reference/system/xstore/functions/xstorequeryproductforcurrentgameasync.md): Provides store product information for the currently running game, its SKUs and availabilities, and other metadata.
   * [XStoreShowAssociatedProductsUIAsync](../../../../../reference/system/xstore/functions/xstoreshowassociatedproductsuiasync.md): This opens the Microsoft Store app and shows the set of available add-ons that are associated with the game. 
1. Purchase initiation: The player selects the product they want to purchase from the in-game store. This could be a consumable, durable, subscription, or other types of in-game content. The game initiates the purchase process by using functions like the following: 
   * [XStoreShowPurchaseUIAsync](../../../../../reference/system/xstore/functions/xstoreshowpurchaseuiasync.md): Begins the purchase UI overlay for the specified product.
   * [XStoreShowProductPageUIAsync](../../../../../reference/system/xstore/functions/xstoreshowproductpageuiasync.md): Opens the Microsoft Store app directly to the Product Details Page (PDP) of the provided ProductId. 
1. Manage entitlements: Use the entitlement APIs ([XStoreQueryEntitledProductsAsync](../../../../../reference/system/xstore/functions/xstorequeryentitledproductsasync.md) and [XStoreQueryEntitledProductsResult](../../../../../reference/system/xstore/functions/xstorequeryentitledproductsresult.md) in the GDK to verify and manage player ownership of purchased items. Use the `XStoreAcquireLicense` APIs for durable products where licenses can be shared. 

## See also 

The GDK documentation is the best source of up-to-date information. For more details see the following articles and samples.

* [GDK Commerce Systems](../../../../../store/commerce/getting-started/xstore-overview.md)

* [Initial configuration in Partner Center](../../../../../store/commerce/getting-started/xstore-initial-configuration-in-partner-center.md)

* [Basic store operations](../../../../../store/commerce/fundamentals/xstore-basic-store-operations.md)

* [Microsoft Store Service APIs](../../../../../store/commerce/service-to-service/microsoft-store-apis/xstore-nav.md)

* [In-Game Store Sample](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/InGameStore)

  This sample demonstrates the client-based operations that are used in presenting and operating an in-game storefront. This sample also shows how to examine game license information, including how to enable and check for trial status.

* [MicrosoftStoreServicesClient](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/MicrosoftStoreServicesClient)

  This sample works with the [Microsoft.StoreServices Sample](https://github.com/microsoft/Microsoft-Store-Services-Sample) and demonstrates the client-side call pattern to do service-to-service authentication with Store Services.
