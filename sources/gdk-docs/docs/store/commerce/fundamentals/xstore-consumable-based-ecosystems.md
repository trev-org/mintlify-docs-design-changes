---
title: "Consumable-based ecosystems"
description: "Describes configuring and implementing consumable products for your title."
kindex: Consumable-based ecosystems
author: CameronGoodwin
ms.author: cagood
ms.topic: article
edited: '02/24/2026'
ms.date: '08/01/2022'
permissioned-type: public
---


# Consumable-based ecosystems

Consumable products are useful for implementing an in-game economy for cosmetic items, power ups, or other limited use items within a game.
The Microsoft Store supports two types of consumable products:

* Microsoft Store-managed consumables
* Developer-managed consumables

The main difference between the consumable types is the fact that Developer-managed consumables must be reported as fulfilled to the Microsoft Store before the user is able to purchase that consumable again.
Store-managed consumables are able to be purchased and redeemed as many times as the user desires without the consumable being reported as fulfilled.
The recommended and most commonly used type for game products is Store-managed consumables where each tier or quantity offering of the consumable is configured as a separate product in the store.
This configuration enables the consumable products to be more flexible and manageable than if each tier or quantity were a separate SKU under a single productId.
For more information on specific scenarios and choosing between these two product types, see [Choosing the right product type](../getting-started/xstore-choosing-the-right-product-type.md).

The most common use of consumable products is to implement a premium in-game currency.
The user purchases these products with real money in exchange for an allotment of the in-game currency.
This currency is then exchanged in-game for temporary power-ups, cosmetic items, upgrades, or other items related to a single user's account.
Consumables aren't appropriate for implementing access to expansions, map packs, or other items that are expected to follow the [Product sharing model for games](xstore-product-sharing-model-for-games.md).

## Best practices for offering in-game currency

When you offer an in-game currency ecosystem backed by consumable products, provide 3 to 6 or more offer tiers that increase in value.
To be most effective, the value of each tier and especially the added value of the higher tiers must be clear and understandable to the end-user.
The base tier should be inexpensive and set the base real world currency to in-game currency value.
Your higher product tiers should have the base value of in-game currency (relative to their price) and a bonus percentage amount that increases each subsequent tier.

Each tier should be configured as a separate consumable product in Partner Center to allow the different tiers to be granted from 5x5 redeem tokens, promotional pricing, and sales.
This configuration also makes it easier to manage and track refunded purchases by using the [Clawback service](#managing-returns-and-refunds-of-consumables)).
Each consumable product should grant a quantity of `1` to the user's balance, and then when consumed, your service translates that quantity to the equivalent amount of in-game currency for the productId.

Example consumable tier configuration for base value and higher tier bonus amounts:

| Price | Base Currency | Bonus % | Bonus Currency | Product Name for visible value | ProductId |
| ----- | ------------- | ------- | -------------- | ------------------------------ | --------- |
| $0.99 | 100 | | 0 | 100 Coins | 9NKR4W7BX2LP |
| $4.99 | 500 | 10% | 50 | 500 (+50 bonus) Coins | 9NAF83QHT6MJ |
| $9.99 | 1000 | 20% | 200 | 1000 (+200 bonus) Coins | 9N2VD5YRC8G1 |
| $19.99 | 2000 | 30% | 600 | 2000 (+600 bonus) Coins | 9NHX7L4EWK9Q |
| $39.99 | 4000 | 40% | 1600 | 4000 (+1600 bonus) Coins | 9NB3TM6FJ8ZA |
| $79.99 | 8000 | 50% | 4000 | 8000 (+4000 bonus) Coins | 9NRW52CYP4DH |

It's also a good practice to include a small allotment of your in-game currency to season pass owners, deluxe edition game bundles, and monthly subscriptions if supported by your title.
If participating in Game Pass, your title can provide a monthly allotment of consumable currency to active subscribers as a perk.
These recommendations help users become familiar with the value and benefit of your consumable economy and the value associated with it.

## Sales and promotions of consumable in-game currency

If you plan to run a promotion or sale involving your in-game currency, the following methods are proven to be effective at engaging with customers, providing them increased value, and increasing revenue during the promotion.

You can provide a static percentage discount on the pricing of all tiers, but offering your higher tiered content at a higher discount percentage generates higher incremental revenue over the promotional timeline than static discount pricing.
For example, offering a 10% discount on the lowest tier, but increasing to 30% discount on the top tier provides great value to users who purchase the higher tiered option in greater numbers.
Sales also drive better game usage post-sale as the users have a vested interest in the game by using the consumable currency that they purchased in high quantity.

Using discounted pricing on the consumable products also allows visibility of the promotion from the Store app and helps drive user engagement.
To schedule a promotion and discount of your consumable products, contact your Microsoft representative for additional information.

Alternatively, you can also discount the in-game items that the user purchases with your consumable currency.
The benefit of being able to configure the promotion through your own services and doesn't require coordination or scheduling with the Store or Microsoft representatives.
However, visibility would be more limited to draw in new users depending on advertising and outward communication.

## Configuring a consumable product in Partner Center

When creating a new consumable for your title in Partner Center:

* To allow users to see and browse to the product in the Store app and on Xbox.com, set the consumable to *Has its own store listing* under Consumable Setup.
 Otherwise, users can only access the consumable from within your game's UI.
* For Microsoft Store-managed consumables, set the *Quantity* field in Properties to be the value added to the user's balance each time the product is purchased.
 If implementing your own service to track and manage consumables, we recommend a default quantity of `1`.
 Then translating the equivalent in-game currency amount for the product multiplied by the quantity consumed.
 For more information, see (see [Managing the user balance on your service vs. the Microsoft Store](../service-to-service/xstore-managing-consumables-and-refunds.md#managing-the-user-balance-on-your-service-vs-the-microsoft-store)).
 Otherwise you should set the total in-game currency amount the user gets such as '600' for the $4.99 tier product in the example under [Best practices for offering in-game currency](#best-practices-for-offering-in-game-currency).
* List the base and bonus currency of the product in the product's title (Ex: 500 (+100 bonus) Coins)
* Store images should include a graphic of the currency that grows larger or denotes a larger amount for the higher tiers (Example: a pile of coins that gets larger the higher the tier or increasing size of treasure chests with coins).
 Alternatively (or additionally), store images could include text that indicates how many currency the product grants on purchase (Example: "600 Coins," or "500 (+100 bonus)")

## Managing consumables

The recommended way to manage consumables is through your own custom game service or a middleware provider that supports the Microsoft Store Service APIs.
This method provides a more secure and flexible implementation of your consumable economy.
For more information, see [Managing consumable products from your service](../service-to-service/xstore-managing-consumables-and-refunds.md).

Alternatively you can report a consumable fulfilled or consume a specific quantity of the user's balance on the game client by using the [XStoreReportConsumableFulfillmentAsync](../../../reference/system/xstore/functions/xstorereportconsumablefulfillmentasync.md) API.
If calling from the client, we recommend using the trackingId to ensure the request is properly handled in the Microsoft Store services before granting benefits in-game.
A description of how TrackingIds work is covered in [Use TrackingIds as a redundant system for consume validation](../service-to-service/xstore-managing-consumables-and-refunds.md#use-trackingids-as-a-redundant-system-for-consume-validation).

### Managing returns and refunds of consumables

To help prevent abuse and fraudulent returns / refunds of consumable products, we recommend your service integrates with the Clawback event service.
Allowing your service to receive events when a consumable product is returned or refunded to the user and your service should remove the added value of the consumable from your service side.

For more information, see [Managing refunds and chargebacks from your service](../service-to-service/xstore-managing-refunds-and-chargebacks.md).

## See also

[Commerce Overview](../commerce-nav.md)

[Managing consumable products from your service](../service-to-service/xstore-managing-consumables-and-refunds.md)

[Managing refunds and chargebacks from your service](../service-to-service/xstore-managing-refunds-and-chargebacks.md)

[XStore API reference](../../../reference/system/xstore/xstore_members.md)
