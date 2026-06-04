---
title: Consumable add-ons
description: Consumable add-ons.
services: gaming
author: FLY1NGSQU1RR3L
ms.author: clintw
ms.service: gaming
ms.topic: article
ms.date: 9/25/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Consumable add-ons

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

Consumable add-ons can be used to provide customers with limited-use, in-game items that can be purchased multiple times and used based on the configured quantity received. For example, to offer virtual currency that can be spent in an in-game store. You can configure two types of Consumable add-ons: **Consumable (Microsoft Store-managed)** and **Consumable (Developer-managed)**.

## Consumable (Microsoft Store-managed)
Microsoft Store-managed consumables can be purchased multiple times before being fulfilled. A customer's balance can be tracked through the Microsoft Store or your own custom service.

## Consumable (Developer-managed)
Developer-managed consumables can only be purchased again by the same customer after the previous purchase has been reported as fulfilled to the Store.

For more information, see  [Product creation and onboarding](../../publishing-processes/managed-creators/publishing-processes-product-onboarding-and-configuration.md).

## Create and configure Consumables

 1. Navigate to your Game product in Partner Center.
 2. Select **Add-ons** from the left navigation.
 3. On the **Add-ons** page, select **+ Create a new...** and select **Consumable (Microsoft Store-managed)** or **Consumable (Developer-managed)**.
 4. Enter an identifier for the consumable. This will be displayed in the Partner Center UI and referenced in game code.

For more information, see [Create and publish add-ons](../../tutorial-xbox-managed/how-to-create-use-publish-add-ons.md).

## Additional considerations

If you want to offer customers various quantities of a consumable, create one add-on per quantity. Set the quantity in the **Consumable setup** page for each add-on. You can set the quantity to 1 and use in-game logic to grant the appropriate amount of the item to the customer, or you can set the quantity to the respective amount of items that the customer will receive. For more information, see [Consumable-based ecosystems](/gaming/gdk/_content/gc/commerce/fundamentals/xstore-consumable-based-ecosystems).

## Next steps

* [How to add and edit products in a bundle](../../how-to/how-to-addeditproductstobundle.md)

## See also

* [Add-ons](../add-ons.md)
* [Availability - markets, pricing, release schedule](../availability/availability-overview.md)
* [Choosing the right product type](/gaming/gdk/_content/gc/commerce/getting-started/xstore-choosing-the-right-product-type)
