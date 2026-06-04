---
title: How to delist items from the Store
description: How to delist items from the Microsoft Store.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# How to delist items from the Microsoft Store

This topic walks you through the options available when you want to delist products from the Store. There are two scenarios included: [Delisting a product from all markets](#delisting-a-product-from-all-markets), and [Delisting a product from specific markets](#delisting-a-product-from-specific-markets).

> [!NOTE]
> The Microsoft Store Product Details Page (PDP) for products that have been delisted using the **No longer discoverable in the Microsoft Store** configuration options described in this topic will remain accessible using the direct link to the product (either the web URL or app URI).

## Products this applies to

 - All product types

## Delisting a product from all markets

### Definition

This scenario covers delisting a product from the Microsoft Store in all markets. Delisting a product will make it no longer purchasable. Products that have packages must remain discoverable to enable players who own these products to download them from the Microsoft Store.

### Configuration  

1. Go to the product you want to delist in **Partner Center**.
2. Select **Pricing and availability** from the page navigation, and then scroll down to the **Schedule** section.
3. Set **Stop acquisition** to **at**, and then define the date and time you want to stop the customer's ability to purchase the product.
4. Set **No longer discoverable in the Microsoft Store** to the required option.
    - For products with packages, select **never**.
    - For products without packages, select **at stop acquisition**.
5. Select **Save draft**.
6. Select **Review and Publish** to publish your changes to your development sandbox or RETAIL.

## Delisting a product from specific markets

### Definition

This scenario covers delisting a product from the Microsoft Store in specific markets. Delisting a product will make it no longer purchasable. Products that have packages must remain discoverable to enable players who own these products to download them from the Microsoft Store.

### Configuration  

1. Go to the product you want to delist in **Partner Center**.
2. Select **Pricing and availability** from the page navigation, and then scroll down to the **Schedule** section.
3. Select **Customize for specific markets**, and then define the markets you want to delist the product in.
4. Set **Release** to **as soon as possible**.
5. Set **Stop acquisition** to **at**, and then define the date and time you want to stop the customer's ability to purchase the product.
6. Set **No longer discoverable in the Microsoft Store** to the required option.
    - For products with packages, select **never**.
    - For products without packages, select **at stop acquisition**.
7. Select **Save draft**.
8. Select **Review and Publish** to publish your changes to your development sandbox or RETAIL.

## See also

 - [Availability - markets, pricing, release schedule](../concepts/availability/availability-overview.md)
