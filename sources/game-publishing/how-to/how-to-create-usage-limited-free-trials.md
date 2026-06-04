---
title: Set up a usage-limited trial
description: Set up a usage-limited trial.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: usage-limited free trials
ms.localizationpriority: medium
permissioned-type: public
---

# Set up a usage-limited trial

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

## Definition

Usage-limited trials allow users to access a product for a limited amount of use. The amount of use available to the user is defined in minutes or hours. This type of trial is common for games. For example, you might let customers play your game for 60 consecutive minutes and then require that they acquire the game if they want to keep playing.

Usage-limited trials are different from [time-limited free trials](how-to-timedtrial.md), which expire after a defined amount of *calendar* time has passed (for example, 7 days after customers download the trial, regardless of how they use it).

> [!NOTE]
> The configuration for a usage-limited trial will allow the player to use the full product for the configured duration. If they want to, developers can detect the trial license state and restrict access to certain features in-game.

## Product types this applies to

 - Game

## Configuration

 1. Go to **Partner Center**.
 2. Locate the product that you want to configure the trial for.
 3. Select the **Pricing and availability** module from the product page navigation.
 4. Scroll down to the **Free Trial** section, and then select **Show options**.
 5. Select **Usage-limited**, and then select the duration you want. The minimum duration is 15 minutes. The maximum duration is 10 hours.
 6. Set a **Starts on** date to specify the date and time for the trial to be available from your Microsoft Store Product Details Page (PDP).
 7. If you want to, set an **Ends on** date to specify the date and time for the trial to no longer be available from your Store PDP.
 8. **Optional**: If required, select **Customize for specific markets** to set start and end dates for specific markets where your product is available.
 9. Scroll to the bottom of the page, and then select **Save draft**.
 10. When you're ready, select **Review and Publish** to publish to your development sandbox or RETAIL.

## See also

 - [Trials overview](../concepts/availability/trials.md)
