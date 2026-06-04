---
title:  How to make price changes
description:  How to make price changes.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 11/14/2025
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# How to make price changes

A pricing update occurs when you initiate a permanent price change of a product within Partner Center. After a permanent price change is submitted in Partner Center, it might need to go through a price approval process that might take up to five business days.

This topic provides guidance for three scenarios: Immediate pricing changes to the base price, Immediate pricing changes to market-specific prices, and Scheduling a pricing change to the base price or market-specific prices.

> [!NOTE]
> Permanent pricing changes are different from *Sale pricing*, which is temporary and shows as a strike-through price on your Microsoft Store Product Details Page (PDP). Sale pricing can only be configured by Microsoft. Speak to your Microsoft representative if you're interested in configuring sale pricing.

## Products this applies to

 -  Game
 -  Bundle
 -  Add-On bundle
 -  Season Pass
 -  Consumable
 -  Durable/Durable with Packages

## Doesn't apply to

 - Game Demo

## Updating pricing with the latest currency conversion rates

If you haven't configured market-specific pricing for a market where your game is available, the **Base Price** you configured for your game will automatically be converted to that market's local currency in the Microsoft Store. When customers browse your game, they will see the base price converted into their local currency. 

Exchange rates used to convert base prices (in US dollars) to local prices (in foreign currencies) are adjusted at times based on market conditions. 

When you configure the base price for a product that previously had none, the latest currency conversion rates in Partner Center will be applied automatically. For existing products, updates to exchange rates don't change current wholesale or suggested retail prices. **Any adjustments to those prices must be made by you.** 

When you edit wholesale or suggested retail pricing, any newly selected price tiers will use the most recent conversion tables. After updating the base price, select **Review price per market** to confirm local prices. 

Before publishing, review pricing conversions to ensure each market aligns with your intended end-user price. 

To override the base price for any specific market, select **Create new market group**, select the markets for price override and then configure the market-specific pricing as required.

## Scenario: Immediate pricing changes to the base price

This scenario is for an immediate pricing change to the base price. Use this guidance in cases where you've published incorrect pricing to a sandbox and require a quick correction to the mistake. If you're correcting a mistake, inform your Microsoft representative.

 1. Go to **Partner Center**.
 2. Locate the **product** you want to configure.
 3. On the product page, select the **Pricing and availability** module from the page navigation.
 4. In the **Pricing and availability** module, select the **branch** you want to modify and then scroll down to the **Pricing** section of the configuration.
 5. In the **Pricing** section, update the **Suggested** price column for the **Base price** as needed.
 6. After your pricing has been updated, scroll to the bottom of the page and then select **Save draft**.
 7. When you're ready, select **Review and Publish** to publish the submission to your development sandbox or RETAIL.

## Scenario: Immediate pricing changes to market-specific prices

This scenario is for an immediate pricing change to market-specific prices. Use this guidance in cases where you've published incorrect pricing to a sandbox for a specific market and require a quick correction to the mistake. If you're correcting a mistake, inform your Microsoft representative.

 1. Go to **Partner Center**.
 2. Locate the **product** you want to configure.
 3. On the product page, select the **Pricing and availability** module from the page navigation.
 4. In the **Pricing and availability** module, select the **branch** you want to modify and then scroll down to the **Pricing** section of the configuration.
 5. In the **Pricing** section, locate the market that you need to update the price for.
    1. If you haven't configured market-specific pricing already, select **Select markets for base price override** and then select the markets you need to update the price for.
 6. Update the **Suggested** price column for each market as needed.
 7. After your pricing has been updated, scroll to the bottom of the page and then select **Save draft**.
 8. When you're ready, select **Review and Publish** to publish the submission to your development sandbox or RETAIL.

## Scenario: Scheduling a pricing change to the Base price or market-specific pricing

This scenario is for scheduling a price change to the base price or one or more of the market-specific overrides. Use this guidance in cases where you know about an intended price change in advance, or if you want to align the time of price changes across multiple products or platforms.

 1. Go to **Partner Center**.
 2. Locate the **product** you want to configure.
 3. On the product page, select the **Pricing and availability** module from the page navigation.
 4. In the **Pricing and availability** module, select the **branch** you want to modify and then scroll down to the **Pricing** section of the configuration.
 5. In the **Pricing** section, locate the **Base price** or market group that you need to update the price for and then select **Schedule a price change**.
    1. Select the new **Suggested** price.
    2. Select the **date and time** for the price change.
 7. After your pricing has been updated, scroll to the bottom of the page and then select **Save draft**.
 8. When you're ready, select **Review and Publish** to publish the submission to your development sandbox or RETAIL.

## See also

* [Availability - markets, pricing, release schedule](../concepts/availability/availability-overview.md)
* [Sale Pricing](../concepts/availability/sale-pricing.md)
