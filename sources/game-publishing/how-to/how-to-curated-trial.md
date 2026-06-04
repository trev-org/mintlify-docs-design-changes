---
title: Set up a curated trial
description: Set up a curated trial.
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

# Set up a curated trial

## Definition

This scenario allows users to access a trial version of the product for as long as the game allows them to play it. Trial versions of products usually have limited features or progression. The ability to access the trial is gated by the game itself by using logic that the developers have designed.

Example scenarios for a curated trial include:
 - Allowing gameplay up to a certain level or with specific features enabled.
 - Allowing gameplay for a specific length of time that's tracked in-game.

The main feature of a curated trial compared with other trial options (time or usage-limited) is that the game logic, not calendar time, dictates how long a user can play for.

> [!NOTE]
> The configuration for a curated trial will allow the player to launch the product for an unlimited amount of time. Developers must detect the trial license state and limit player access in-game.

## Product types this applies to
 - Game

## Configuration

 1. Go to the product that you want to configure the trial for in Partner Center.
 2. Select **Pricing and availability** from the page navigation.
 3. Select **Show options** under the **Free Trial** heading.
 4. Select **Unlimited** from the dropdown list.
 5. Specify a date and time for the trial to start.
     - **Note:** The start date defines when the trial will become available to players via your Microsoft Store Product Details Page (PDP)
 7. Specify a date and time for the trial to end.
 8. **Optional:** Select **Customize for specific markets** if you need to configure different start and end dates for the trial in certain markets.
 9. Scroll to the bottom of the page, and then select **Save draft**.
 10. When you're ready, select **Review and publish** to publish your changes to your development sandbox or RETAIL.

## See also

 - [Trials overview](../concepts/availability/trials.md)

