---
title: Price adjustment preference
description: Price adjustment preference.
services: gaming
author: joannaleecy
ms.author: karrao
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: price adjustment preference, tax, vat, tax change
ms.localizationpriority: medium
permissioned-type: public
---

# Price adjustment preference

The **Price adjustment preference** page in Partner Center enables you to batch-update your products’ pricing, according to tax changes announced by governments on goods and services, such as value-added tax (VAT) and goods and services tax (GST). This functionality is a hassle-free way to do price adjustments for all your products.

Some time soon, prices for your products in the Microsoft Store will adjust automatically, according to your saved preference. This preference will be applied to all products within a single seller ID, removing the need to manually update individual product pricing.

If you're a managed Creator, you can choose whether to adjust the suggested retail price or the wholesale price during the preference submission cycle (see [Terms used](#terms-used)). Simply indicate how you would like pricing adjustments to be done across all your products, and we'll schedule the necessary price adjustments for you. Although we're implementing batch price updates in response to tax changes on your behalf, you can manually override these scheduled price changes from the individual product's **Pricing and availability** page at any time.

The default option is to keep the suggested retail price the same and adjust the wholesale price for the products if you don't take any action. This will allow customers to purchase your product at the same price as before, while your wholesale price will be adjusted according to the tax change. On the contrary, if you choose to adjust the suggested retail price, the wholesale price will remain the same, but customers might be presented with a different price than before the change. It's important to note that if you've made a selection in the previous cycle and missed the current preference submission deadline, we'll use your last saved preference.

## Applicable products

The price adjustments apply to products subject to a Publisher Licensing Agreement or Title Licensing Agreement.

> [!NOTE]
> You can always make a price change using the Pricing and availability page of the product at any time if you don't agree with the adjustment made by Microsoft on your behalf. During review, you can also make final edits to the price before publishing. This feature is meant to simplify price adjustments across your products every time a government makes a tax change.

### Timeline

Currently, there are no plans to implement price adjustments. 

#### Terms used

* **Go live / Price adjustment publish date**: Price adjustments are reflected in the Store; your customers will see them.
* **Upcoming VAT rate changes available**: You can review the VAT rate changes that Microsoft will implement at the current round on the [**Price adjustment preference** page](https://go.microsoft.com/fwlink/?linkid=2212302) in Partner Center.
* **Preference submission deadline**: Last date for you to choose how you'd like Microsoft to implement the price adjustments. Keep suggested retail price or change suggested retail price.
* **Review adjusted prices start date**: You can review the scheduled adjusted product prices from the **Pricing and availability** page. At any time, you can update product prices using the usual update price workflow on the **Pricing and availability** page.

## How to submit price adjustment preference

### Prerequisites

Sign in using an account with **Tax profile** or **Payout account permissions**. If you're using Microsoft Azure Active Directory (Azure AD), you must either be an Account owner or have the Finance Contributor built-in role.

### Steps

1. Go to [Partner Center](https://partner.microsoft.com/dashboard/home).
1. Select **Apps and games**.
1. Select **Price adjustment preference** from the left navigation menu.
1. Review your current price adjustment preference.
1. Go to **Upcoming tax rate per market** section, review upcoming tax changes.
1. Select **Edit** to change the Price adjustment preference for your studio.
1. Select **Keep suggested retail price** or **Change suggested retail price**.
1. Select **Save changes**.
1. Select **Confirm**.

## Frequently asked questions

**Q:** Can I choose a preference per country/region?

**A:** No. Your preference selection applies to a single seller ID rather than by countries/regions.  

**Q:** I missed my deadline. Can Microsoft extend my deadline?

**A:** No. We're not able to accommodate any changes after the deadline.  

**Q:** Do I have to choose a preference every time Microsoft implements a price adjustment?

**A:** No. We'll record your preference and apply it for all future price adjustments.  

**Q:** Do I have to publish all my products, so the changes are live?

**A:** No. We publish price adjustments for all your products approximately a month after the review period. The price adjustments are scheduled on your behalf.  

**Q:** Are there any other changes that could cause Microsoft to update the price table?

**A:** Yes. We also review the exchange rates used to convert base prices (in US dollars) to local prices (in foreign currencies). New conversion rates are automatically applied when price adjustments are made in applicable markets. Select **Review price per market** to view the exact local prices.

**Q:** I don’t like the preference choice, but it’s already past the deadline. What should I do?

**A:** Feel free to schedule a new price on the individual product's **Pricing and availability** page.  

## Next steps

* [Tax details for commercial marketplace publishers](/partner-center/tax-details-marketplace)

## See also

* [Account level custom permission](/windows/apps/publish/partner-center/assign-account-level-custom-permissions-to-account-users)
* [Assign roles to account users](/windows/apps/publish/partner-center/assign-roles-to-account-users)
