---
title: Manage Free to Use scenarios
description: Manage Free to Use scenarios.
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

# Manage Free to Use scenarios  

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

## Definition  

The **Free to Use** section of the **Pricing and availability** module in Partner Center can only be configured by Microsoft.

*Free to use configurations* give an entitlement to a product for a subset of users based on criteria, such as product ownership, and for a defined period of time. Users gaining access to a product in this way won't go through a purchase transaction and will instead see the option to **Install** when viewing the Microsoft Store Product Details Page (PDP).

## Product types this applies to

 - Game
 - Bundle
 - Game Demo
 - Durable (with or without bits)
 - Add-on Bundle
 - Season Pass

## Product types this does not apply to
 
 - Consumable (Developer or Store managed)

## Requesting a free to use configuration

Free to use configurations are submitted to Microsoft using a Free to Use Request Form. Speak to your Microsoft contacts to get the latest version of the form.

Free to use configurations are created based on the following components.
 - **Markets** are the markets where the free to use configuration will be available to users.
    - Markets must be configured for the product availability before they can be selected in the free to use configuration.
 - **Defined user group** is the category of users that are entitled to use the product.
    - User groups primarily include, but are not limited to, *Owners of*, *Subscribers*, or *Everyone*.
 - **Starts on** is the date and time for the entitlement to become active for users in the Defined User Group.
    - Users can install the product starting on this date and time.
 - **Ends on** is the date and time for the entitlement to become inactive for users in the Defined User Group.
    - Users can't install the product after this date and time. Users who have already installed the product can't use it after this date and time.
 - **Unlocks on** is the date and time that the product can be used by users in the Defined User Group.
    - It must be on or after the *Starts on* date and time and before the *Ends on* date and time.
    - If an unlock date isn't configured, the *Released* status in inventory will default to the availability that's configured. Set *Unlocks On* for the date and time the product will be usable by owners.
      - If you're configuring a free to use entitlement on a product that isn't released, or on a product in a pre-order bundle, speak to your Microsoft contacts to validate your configuration and ensure that players can use the product at the right time.

A user's entitlement to the product will remain active as long as the user remains in the *Defined User Group* and the *Ends on* date and time hasn't passed. After the *Ends on* date and time has passed, all users who were entitled by the free to use configuration to use the product will lose access to it.

## Scenarios where free to use configurations can be used 

 - Giving a user access to a product if they own a specific product.
   - It's possible to use an **AND** condition to give a user access to a product if they own two specific products.
 - Giving a user access to a product as part of a subscription.
 - Giving a user access to a specific product included in a pre-order bundle, if the product has already released.
    - A pre-order bundle is created and includes each of the products that the user will purchase to own.
    - A free to use entitlement is then configured on the product that's included in the bundle that you want the user to be able to play during the pre-order period.
      - The free to use configuration's Defined User Group is owners of the pre-order bundle.
      - The configuration's Unlock date matches the date you want the users to be able to play the content. If an *Unlocks on* date and time isn't specified, the user wouldn't be able to use the product until the release date of the pre-order bundle.
    - This scenario can also be used to give access to an unreleased product, such as a beta or demo, during the pre-order period.
 - Double purchase protection on Day 1 bundles for users who own a pre-order version of the bundle
    - Bundle A is a pre-order bundle that will be available until the release date of the product (*Date C*).
    - Bundle B is a bundle that is only available to purchase after *Date C*.
    - To prevent users who purchased Bundle A from being able to purchase Bundle B, configure a free to use entitlement on Bundle B with a Condition of ownership of Bundle A.
    - Do this only if Bundle B only contains a subset of the content included in Bundle A. If Bundle B contains different products, the user will be able to purchase it.
 - Free Play Days
   - Microsoft might schedule products available on PC or Console to be accessible to users for free for a specific period of time. For more information about Free Play Days, speak to your Microsoft contacts.

## See also

 - [Availability - markets, pricing, release schedule](../concepts/availability/availability-overview.md)
