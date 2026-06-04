---
title: Recommendations for testing in RETAIL
description: Recommendations for Managed Creators needing to test content in the RETAIL sandbox.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 6/26/2025
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Recommendations for testing in RETAIL

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

We recommend that you test your products in the RETAIL sandbox before they're released to players. Use the guidance in this topic to learn more about configuring your device for testing, and for suggestions about how to test different types of product.

## Configuring your device for the RETAIL sandbox

To test your products, you'll need a device that's connected to the Xbox network and configured for the RETAIL sandbox. 

 - For Console products, you can access the RETAIL sandbox using either a shop-bought Xbox console, or an Xbox Development Kit that is not currently configured for Developer mode. For more information about how to switch to and from Developer and Retail mode, see [Changing your Development Kit from Retail Mode to Developer Mode](/gaming/gdk/docs/gdk-dev/console-dev/dev-kits/settings/change-dev-kit-mode).
 - For PC products, you can switch the sandbox to RETAIL using the [Xbox Live PC Sandbox Switcher](/gaming/gdk/_content/gc/live/test-release/tools/live-pc-sandbox-switcher).

After configuring your device to access the RETAIL sandbox, redeem a Promo Code (for Console or PC) or insert a test disc into your console to begin the installation of your game (Console only).

> [!NOTE]
> Order Promotional Codes at this stage if you haven't already done so. For more information, see [Ordering promotional codes](publishing-processes-promo-codes.md).

## Testing disc and digital base games

We recommend that all base game products are tested in the RETAIL sandbox before they're released, both for physical disc releases and digital downloads. This list shows the basic things that we recommend you check for. This list isn't exhaustive, and there could be other things you should be checking. You're best suited to know how your game behaves.

- Ensure that you're testing the correct package. For information about how to check this, see [How to check you have downloaded the correct package](#how-to-check-that-you-have-downloaded-the-correct-package) later in this article. These instructions apply to installing from a disc or installing from the Microsoft Store via a Promo Code or purchase.

- While you're connected to the Xbox network, launch the game. Ensure that you don't see the *We couldn't get your latest save data.* error message. If you see this message, check that the correct Xbox services Gameplay Settings were published to the RETAIL sandbox. If you continue to experience issues, contact your Microsoft contacts.

- If you have your own publisher services, ensure that you can connect to these in-game.

- Ensure that Achievements unlock as expected when the criteria have been met. If you have Embargo configured in the product's Partner Center **Xbox settings**, you won't be able to see Achievements in the Xbox shell UI or Xbox Game Bar on PC. For more information, see [RETAIL embargo](#retail-embargo) later in this topic.

- If your game supports multiplayer, confirm that you can access the services, join sessions and send and receive invites as expected. If you have Embargo enabled and didn't configure this to allow game invites, these might not work as expected. For more information, see [Configuring Xbox services setup in Partner Center](/gaming/gdk/_content/gc/live/test-release/portal-config/live-config-xbl-setup).

- Check that you can access any leaderboards, and that they populate correctly.

- Create save data and make sure that it loads as expected after terminating and relaunching the game. If possible, sign in to your account on another device and ensure that the save data syncs correctly from the Xbox network.

- Check different languages and locales by changing the language/region settings on your device.

- Validate the behavior of your game on all platforms and console devices that are supported. Do so to ensure that no unexpected performance or compatibility issues are present that weren't seen in your development environment.
  
- View the game's Product Details Page (PDP) in the Microsoft Store app on your device, and then check that all images, marketing text, capabilities, and gaming metadata display as expected. Repeat this step with different language and region settings on your device.
  - If you haven't configured the game to be *Discoverable* in the **Schedule** section of your **Pricing and Availability** page in Partner Center, use a direct link to access the PDP. The direct link is available in the **Game Setup** page of your product in Partner Center. Enter the Microsoft Store app URI into a browser on your PC or console.

- If your game is being distributed on physical discs and you've placed a disc order, the designated recipients will receive a quantity of test discs. For more recommended test cases for disc products, see [Media Validation Test Steps](../../concepts/certification/certification-media-validation-test-steps.md).

  - You might receive your test discs before you have published your product to RETAIL. If you do, you won't be able to use them while your console is connected to the Xbox network, but you'll be able to install the disc package and access offline game features if you disconnect your console from the Xbox network.
  - Ensure that your console is oriented correctly. Incorrect orientation of the console might cause a disc-read error.

### Sending release approval

After you have completed your checks, confirm with your Microsoft contacts that everything works as expected. Provide your confirmation of release approval.

**Digital games**

- Send confirmation of your completed checks in an email to your Microsoft contacts.

**Disc-based games**

- Send confirmation of your approval to Release to Manufacture (RTM) your disc binary in an email to your Microsoft contacts. This approval is used to confirm that you've tested your discs and that you approve them for release to your selected Authorized Replication (AR) sites for manufacture. Review the steps in the [Approve discs for manufacture](publishing-processes-rtm.md) when you're ready to RTM. 

## Testing add-on and bundle products

Add-on products, including Durables and Consumables, and bundles, including Game Bundles and Season Passes, can be tested in RETAIL using Promo Codes in the same way as Game product can.

- Ensure that all add-on products function with the game as expected.
- View the PDP for all add-on products, and then check that all images and marketing text is displayed as expected. Do this with different language and region settings.
- If you have pre-order and launch bundles that include add-on products, redeem a Promo Code for these bundles and validate that the correct products are granted. Redeem the Promo Code for each Bundle on a new account and install the products on a device with none of these products installed previously, to ensure that you can test the experience that players will have.

## Testing Content Updates (CUs)

After your Content Update (CU) passes Certification, publish it to RETAIL via a [Package Flight](../../how-to/how-to-package-flights-for-xvc-packages.md) before you publish it to General Availability (GA) via the *Main* branch. This process is sometimes called *Selective Publishing*. Package Flights for Xbox console products will require a *Known Device Group* to be configured. PC Package Flights will require a *Known User Group*. Each of these groups can be created and modified via the **Engage** - **Customer Groups** area of your Partner Center account.

> [!NOTE]
> Updates to Xbox services Gameplay Settings can't be selectively published, nor can they be scheduled to release at a specific date and time. Ensure you publish updates to your Xbox services at the date and time you want them to be released.

After your CU has been published to a Package Flight, verify that the user experience is as expected. Tests you should complete include, but are not be limited to, the following.

- Ensure that the updated package has been installed.

- Check that the update's download and install size is as expected.

  - To ensure that you're able to check the update size, you should clear the **"Keep my games &amp; apps up to date** checkbox in **System settings**. Alternatively, customize your console's power option to prevent updates from installing automatically during specific hours.

  - If you see an unexpectedly large download size, contact your Microsoft contacts.

- Ensure that save data from the previous version of your game works with the new version.

- Validate any changes or fixes in the CU function as expected.

- Ensure that basic game functions such as multiplayer and matchmaking work as expected.

- If your CU adds support for DLC, ensure that the add-on product is published. Use Promo Codes to acquire and install the DLC for testing alongside your CU. Ensure that any existing DLC still works as expected.

## Additional recommendations

- Have specific Microsoft accounts (MSAs) for testing before the game has officially released.

- Ensure that the account you use for testing has restricted privacy and security settings. This ensures that information such as Achievements aren't exposed via your account's Xbox profile. This is especially important if you don't use Xbox services Embargo.

- For CU testing, consider excluding at least one console from your Known Device Group so that you can always easily install the currently available package in RETAIL.

## Appendices

### How to check that you have downloaded the correct package

#### Console

 1.	Go to **My Games and Apps.**
 2.	If you're checking a Game, go to **Games.** If you're checking an App, go to **Apps.**
 3.	Select the product that you want to check.
 4.	To go to the **Manage** UI, press the **View** button (overlapping rectangles) on the controller.
 5.	The version number appears alongside the base game information.

#### PC

 1. Open the **Start** menu.
 2. Find the installed game. Right-click it and select **App Settings.**
 3. The package version number appears in the **Apps and Features** UI.

> [!NOTE]
> If you have market-specific packages, download the game in one country/region for each of the market-specific packages that you have. 

### Ensure that you're checking the correct discs

When you receive your test discs, make note of the Binary ID. This identifier is printed on the label of each test disc and is also printed near the center of the underside of the disc (it might only be seen in certain light conditions). After your discs have completed Certification and a report has been issued, check that the Binary ID on your discs matches the Binary ID listed at the top of the Certification report.

It is recommended that you review the [Media Validation Test Steps](../../concepts/certification/certification-media-validation-test-steps.md).

### How to view the Product Details Page (PDP) of your game in the Microsoft Store if it is not Discoverable

 1. After you've downloaded the game, go to **My Games and apps** and then select it.
 2. To go to the **Manage** UI, press the **View** button on the controller.
 3. Select **See in Microsoft Store.**

Alternatively, use the direct link to the Store page. The direct link can be found in the **Game Setup** page of your product in Partner Center.

### RETAIL Embargo

For details about Embargo, see [Configuring Xbox services](../../concepts/xbox-services.md).

If you're testing the game in RETAIL while Embargo is enabled, note the following.

 - You won't be able to see information about Achievements that you've unlocked in the **Achievements** element of the Xbox UI, or in your Xbox profile. However, you'll see notifications as you unlock Achievements. Stats and Rich Presence won't be visible on your profile.

 - Screenshots, Game DVR, and broadcasting won't work. You can capture screenshots and game clips locally but you can't share them.

 - You won't see other players' scores in any leaderboards.

 - Game invites work only via the Xbox shell. They won't work if they're not enabled in the Embargo configuration for your game.

## Next steps

With your game published to RETAIL and tested, you are ready for release! You might want to support your game with new content, submit updates for your game to Certification or prepare to release a new product.

 - [Supporting released games](publishing-processes-post-release-lifecycle.md)
 - [Submitting to Xbox Certification in Partner Center](publishing-processes-submitting-to-certification.md)
 - [Submit a Game Concept](publishing-processes-game-concepts.md)



