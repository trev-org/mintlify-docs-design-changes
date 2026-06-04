---
title: Visibility - Audiences
description: Explains the concepts about the audience visibility options in Partner Center. This page lets you determine which groups of customers can view your Store Product Details Page.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 8/15/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Visibility - Audiences

The Audience section of the **Pricing and availability** module in Partner Center lets you specify if you want to restrict the visibility of your Store Product Details Page (PDP) to a specific audience that you define.

## Public audience

By default, your product's **Visibility** will be configured for Public audience. This is appropriate if you don't need to limit visibility of your Microsoft Store PDP to specific Microsoft accounts. When your product is published with Public audience, it will be discoverable and purchasable based on the **Schedule** you define in the Pricing and Availability module.

> [!NOTE]
> The PDP for a product that is published with Public audience can always be viewed by using the direct link if this is known, even if the product isn't configured to be discoverable or purchasable in the Schedule.

You can also use the options in the **Discoverability** section to restrict discoverability; for example, by using **Disable Store Presence** to disable the PDP before the first date that is configured in the Schedule.

> [!NOTE]
> If you publish a product to the RETAIL sandbox with Public audience configured, you can no longer change the configuration to Private audience.

## Private audience

If you want your product’s PDP to be visible only to selected Microsoft accounts that you specify, choose Private audience. With this option, the PDP won't be discoverable or accessible to anyone other than the Microsoft accounts in the groups you specify. This option is often used for prerelease testing and preventing discovery before a product is announced. After you publish your product to the RETAIL sandbox, users specified in the groups you configure can view the PDP using the direct Store link, redeem a Promo Code for the product or acquire it via the Store if your configured **Schedule** enables this. Users who aren't in the groups you configure can't view the PDP, even if they have a direct link. They can't redeem a Promo Code or acquire the product via the Store.

You can publish updates to your product's configuration while Private audience is enabled; for example, to modify Store listings or pricing. All users in the groups that are configured for Private audience will be able to see the changes you publish.

> [!NOTE]
> Members of your Private Audience groups might need to use the direct Store link to access the product. Even if a **Discoverable in the Microsoft Store** date is configured in the **Schedule**, the Store PDP won't be discoverable via search, even to members of the Private Audience group.

> [!IMPORTANT]
> Private audience doesn't prevent users who have your product installed on their device from receiving updates to packages. Private audience also doesn't prevent discovery of your Xbox services configuration. For more information, see [Xbox Embargo](/gaming/gdk/_content/gc/live/test-release/portal-config/live-config-xbl-setup#embargo-date) and [Configure Xbox services for a game](../../tutorial-xbox-managed/how-to-configure-xbox-services.md) to prevent discovery of your Xbox services configuration.

### Configuring Private audience groups

When you choose Private audience, you’ll need to specify at least one group of users who have visibility to your product. These groups are called **Known User Groups**. You can't use a **Known Device Group** for Private audience. You can choose from existing Known User Groups, or you can select **Create a new group** to create a new group. You’ll need to enter the email addresses associated with the Microsoft account of each person you’d like to include in the group. For more information, see [Create known user groups](/windows/apps/publish/create-known-user-groups).

### Disabling Private audience

When you're ready to make your PDP visible to all users, disable Private audience.

- Manually disable Private audience and publish your updated *Pricing and availability* configuration to the RETAIL sandbox. Your product will use a Public audience configuration immediately.
- Configure a date and time for Private audience to be disabled by using the **End Private audience restrictions on** date and time picker, and then publish your updated *Pricing and availability* configuration to the RETAIL sandbox. Your product will use a Private audience configuration until the date and time specified and then transition to Public audience automatically.

Keep the following in mind.

- The date and time that you select will apply to all markets. You can't end Private audience restrictions at different times for different markets.
- After the date and time that you select has passed, all future updates will use Public audience.
- If you need to change the date and time that you have configured to end Private audience restrictions, you can do so as long as you complete a publish, including this change in your *Pricing and availability* configuration, before the previously configured date and time has passed. If this publish isn't completed before the previously configured date has passed, your product will move to a Public audience. You won't be able to enable Private audience. Keep in mind that your product might require Certification. Allow sufficient time for your changes to be published. Be prepared to address any new certification issues that might arise.

### Additional considerations when using Private audience

Here are some important things to keep in mind when choosing to distribute your product to a Private audience.

- Users in your Private audience groups will be able to view the Store PDP for your product by using the direct Store link. This link is available as a web URL and a direct Store protocol link in your product's setup page in Partner Center; for example, **Game setup** for Game products. 
- Regardless of what you select in **Discoverability**, members of your Private Audience groups will need to use the direct Store link to access the product. The Store PDP won't be discoverable via search, even to members of the Private Audience group.
- Options you select in your product's **Schedule** and **Pricing** in the **Pricing and availability** module will apply while your game is in Private audience or Public audience. For example, if you configure the product to be released and choose a price other than Free, users in your Private audience will have to pay that price in order to acquire the product.
- If you want to distribute different packages to different users in your Private audience, after your initial Packages publish, you can use Package Flights to distribute different package updates to members of a **Known Device Group** (Console product) or a **Known User Group** (PC Products). You can create additional Known Device Groups or Known User Groups to define who should get a specific package flight.
- You can edit the membership of the Known User Groups in your Private audience. However, keep in mind that if you remove someone who was in the group and previously downloaded your product, they will still be able to use the product.
- While the Store will ensure that your product is only visible to users signed in with a Microsoft account that you’ve added to your Private audience groups, we can’t prevent those users from sharing information or screenshots outside of your Private audience groups. Only include users who you trust not to share details about your product with others.
- If applicable, make sure to let your Private audience users know how to give you their feedback about your product. You probably won’t want them to leave feedback in Feedback Hub because any users outside your Private audience groups could see that feedback.
- Any reviews written by users in your Private audience will be available for you to view. However, these reviews won’t be published in your product’s Store PDP, even after your submission is moved to Public audience. You can read reviews written by your Private audience by viewing the Reviews report in Partner Center, but you can't download this data or use the Store analytics API to programmatically access these reviews.
- When you move a product from Private audience to Public audience, the Release date shown on the Store PDP will be the date you configured in the **Schedule** or **Display release date** in your **Pricing and availability** module.
- If you publish a product to the RETAIL sandbox without selecting the **End Private audience restrictions on** checkbox and specifying a date and time, the product won't generate any Certification reviews. After you manually disable Private audience or configure the date and time to end Private audience restrictions, any modules that are not Certified will generate any applicable reviews when you next publish to the RETAIL sandbox.

## Next steps

- [How to configure package flights for game packages](../../how-to/how-to-package-flights-for-xvc-packages.md)

## See also

- [Configure Xbox services for a game](../../tutorial-xbox-managed/how-to-configure-xbox-services.md)
- [Xbox Embargo](/gaming/gdk/_content/gc/live/test-release/portal-config/live-config-xbl-setup#embargo-date)
- [Create known user groups](/windows/apps/publish/create-known-user-groups)
