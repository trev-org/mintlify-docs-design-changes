---
author: CameronGoodwin
title: "Commerce (contents)"
description: "This section describes the commerce features of the Microsoft Game Development Kit (GDK)."
kindex: Commerce overview
ms.author: cagood
ms.topic: article
edited: '09/08/2021'
ms.date: '08/01/2022'
permissioned-type: public
---


# Commerce

Your game can offer various monetization options in addition to the base game purchase. For example:

- Micro-transactions and in-game currency for cosmetic items
- A curated or usage-limited trial
- Downloadable Content (DLC) expansion packs
- Unlock-able characters, experiences, or game modes

These features and more are supported through Partner Center product configuration and the use of XStore API by your title.
A robust consumable economy solution can also involve setting up your own title service that calls Microsoft Store services on behalf of the player.
These topics and more are covered in the following sections.

> [!NOTE]
> It's crucial to understand that using the XStore API requires a fully licensed context.
> Review the below sections for details on how to set up to test with loose and packaged builds properly.

## In this section  
  
[Getting Started](getting-started/getting-started-nav.md)  
Understanding the commerce related systems and options available to your title. Included are instructions on how to configure and set up your initial products to enable commerce related development and testing.  
  
[Fundamentals](fundamentals/fundamentals-nav.md)  
Fundamental concepts and features available for developing an in-game commerce solution.

[Manage products from your services](service-to-service/service-to-service-nav.md)
How to enable service-to-service calling patterns between your game service and the Microsoft Store Services.
Also best practices and guidance on how to build a consumable management system, detect Game Pass subscriptions, reconcile refunded products, manage subscriptions, and more.

[PC Specific Considerations](pc-specific-considerations/pc-specific-considerations-nav.md)  
Commerce related information specific for PC enabled titles such as licensing options, license validation, and user account management.  
  