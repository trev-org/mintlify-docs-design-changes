---
title: Configuring a Schedule
description: Explains the concepts about the Schedule options in Partner Center. This page lets you determine the release, pre-order, discoverable, and stop acquisition dates for your product.
services: gaming
author: FLY1NGSQU1RR3L
ms.author: clintw
ms.service: gaming
ms.topic: article
ms.date: 9/14/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Configuring a Schedule

The product's schedule lets you configure the product's release date, pre-order, discoverable, and stop acquisition dates.

## Release

The **Release** dropdown list lets you configure the date and time you want your product to be purchasable in the Microsoft Store. This is required for products that are intended to be available to customers for purchase.

If the product supports pre-order, the **Release** date is the date that the product can be played by customers, unless a separate pre-order unlock date has been configured (this only applies to bundle products).

The options for your product's **Release** configuration are:

* **as soon as possible**: The product will be available for purchase, and can be used by customers, as soon as it's published.
* **at**: The product will be available for purchase, and can be used by customers, at the date and time specified.
* **not scheduled**: The product won't be available for purchase. The Store PDP will display *"not currently available"*.

## Discoverable in the Store

The **Discoverable in the Store** dropdown list lets you configure the date and time you want your product's Store PDP to be discoverable in the Store, either by Search or in collections such as *New Releases* or *Coming Soon*. This is useful for scenarios where you want your product to be discoverable by customers before it becomes available for pre-order or is released. Customers won't be able to acquire or download the product during this period unless a **release** or **pre-order** date has been reached.

If a product supports pre-order, its **Discoverable in the Store** date must be on or before the pre-order's start date; otherwise, **Discoverable in the Store** must be on or before the release date.

Here are the options for your product's **Discoverable in the Store** schedule.

* **at Release**: The product's PDP will be discoverable in the Store on the release date.
* **at**: The product's PDP will be discoverable in the Store on the specified date and time.
* **at Pre-order**: The product's PDP will be discoverable in the Store on the specified pre-order date. This option appears only if the product is configured for pre-order.

## Stop acquisition

The **Stop acquisition** dropdown list lets you configure the date and time you want your product to no longer be acquirable by new customers. Existing customers can continue to redownload the product.

Here are the options for your product's **Stop acquisition** schedule.

* **never**: Customers will always be able to acquire the product in the Store.
* **at**: The product will no longer be acquirable by customers after the specified date and time.

## No longer discoverable in the Store

Finally, the **No longer discoverable in the Store** dropdown list lets you choose when you want your product to become hidden in the Store. After this date, customers will no longer be able to search for or browse for your product. However, customers can still access the PDP via a direct link, and existing customers can access it via **My Library**. Customers who own the product will still be able to download and use it. Usually, this date is set to the end of a product's life cycle.

Here are the options for a product's **No longer discoverable in the Store** schedule.

* **never**: Customers will always be able to find your product in the Store.
* **at**: After the specified date and time, customers will no longer be able to find your product in the Store.
* **at Stop acquisition**: After the **Stop acquisition** date, customers will no longer be able to find your product in the Store.
  
The **No longer discoverable in the Store** date must be on or after the **Stop acquisition** date.

After the product has already been released, you'll be unable to change some settings, such as pre-order dates. These settings will appear dimmed.

## Next steps

* [Availability - markets, pricing, release schedule](availability-overview.md)
