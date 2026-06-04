---
title: Advanced settings for packages
description: Advanced settings for packages.
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

# Packages&mdash;advanced settings

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

The **Packages** page of your product in Partner Center is where you can upload packages for your product. In addition to discussing the specific features available only with proper permissions, this topic will discuss the differences between general and advanced experiences. 

## Device family availability

The device family availability configuration in your **Game setup** defines which devices you must upload a package for. If you've specified **Retail** for a device family, you won't be able to publish to the RETAIL sandbox without uploading a package for the device family. If you've specified **Sandboxes** for a device family, you won't be able to publish to your development sandbox without uploading a package for the device family.

## Pre-order packages

If you've enabled pre-order in your **Pricing and availability** and you're using a placeholder package, select the **Contains placeholder package(s) to enable pre-order** checkbox. You'll be prompted to specify the expected maximum file-size for the final packages. This value will be shown on your product's Microsoft Store Product Details Page (PDP) and will direct customers who pre-order the product to install it on a drive with disk space sufficient for the full package, when it becomes available.

> [!Important]
> At least one week before your product's release date, be sure to publish an updated package that replaces your placeholder package with your release packages. This will enable customers' devices to start installing the full package before release. When you make this change, clear the **Contains placeholder package(s) to enable pre-order** checkbox. For more information about pre-orders, see [Pre-orders](../concepts/availability/preorder-overview.md).

## Market-specific packages

In some scenarios, you might want to publish different packages to different markets. For example, you might want to omit particular content to comply with local age rating requirements. You can do this for any type of a product that uses packages, including games, game demos, and durables with packages.

Market-specific packages are supported on Store clients only on Windows 10, version 1607 or later (including Xbox).

### Configure market-specific packages

To configure a package for a specific market group

1. Navigate to the **Packages** page for your product, and then select **Add market-specific packages**.
2. In the **Select markets** window, select the markets you want to target with your market-specific package.
   - You can only select from markets that have been configured for the product in the **Pricing and availability** page's market selection. For details about configuring this section, see [Availability - markets, pricing, release schedule](../concepts/availability/availability-overview.md).
   - You must select at least one market. You can't include markets in multiple market groups.
   - You can't remove a market-specific package after it has been published.
   - A product can have a maximum of 10 market groups.
4. After finalizing your selection, give it a **Market group name** (a maximum of 256 characters).
5. Select **Continue**.
6. Select **Save draft** to save your configuration.

If the market-specific package hasn't been published, you can select **Delete** to remove it.

To edit the markets for the market-specific package, select **Edit**.

## Package availability and predownload dates

When submitting an update for a product already published to the RETAIL sandbox, you have the option of setting a custom date on which the package will become **available**. On this date: 
1. Customers that have a previous package installed can start downloading the new package.
2. New customers who download the product from the Store will start getting the newest package.
3. Customers who own the game and who've installed the package can launch and use it.

You can also specify a **predownload** date. If the predownload date is the same as the **available** date, no additional functionality is enabled. If the **predownload** date is before the **available** date, customers that have a previous package installed can start downloading the new package from the configured date and time. They won't be able to use the new package until the **available** date and time that was configured.

Before the package's **available** or **predownload** date, customers will get the latest package available applicable to their device *not* including this scheduled version. After the scheduled date, customers will get the latest version available *including* this version. This lets you stagger updates and control when they reach customers.

### Setting the package availability date

1. Navigate to the **Packages** page for the packages you want to configure.
2. Under **Advanced options**, select **Configure custom availability date for your XVC/MSIXVC packages**.
3. Set a date and time (UTC) the packages will become available and mandatory.
4. Select **Save draft**.

When setting a date, keep the following in mind.

* Ensure that the date is in the future.
* If the package hasn't already been Certified, allow sufficient time for Certification between now and the package's availability date.
* A custom availability date can be configured for the base package and any market-specific packages.
* This feature applies only to products already published to RETAIL. For details on setting availability dates for your first submission, see [Availability - markets, pricing, release schedule](../concepts/availability/availability-overview.md).

## Mandatory update

XVC package updates are *always* mandatory. Updates to PC MSIXVC packages aren't considered mandatory by default. For more information, see [Checking for updates](/gaming/gdk/_content/gc/commerce/fundamentals/xstore-checking-for-updates). 

## See also

* [Packages](../concepts/packages-overview.md)
* [XVC packages](../concepts/packages-xvc.md)
