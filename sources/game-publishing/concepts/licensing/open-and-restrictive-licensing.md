---
title: Open and restrictive licensing
description: Open and restrictive licensing.
services: gaming
author: joannaleecy
ms.author: bzamora
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: open and restrictive licensing
ms.localizationpriority: medium
permissioned-type: public
---

# Open and restrictive licensing

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

The Microsoft Store supports three licensing models: *default*, *open*, and *restrictive*. As its name implies, the default model (the only model supported by the Microsoft Store for Business) is set up by default. The open and restrictive models are set up by Microsoft.

Here are the key differences between the three models.

| Licensing type | Offline devices | Online devices | Typical usage | Devices supported |
|------|----|----|-----|----|
| Default | 10 | N/A | Most apps | All* |
| Open | Unlimited | Unlimited | Free apps that will never cost money | All* |
| Restrictive | 1** | Only 1 at a time | Games (Managed creators) | PC, Xbox, HoloLens |

>\* Windows 10 devices are PC, Xbox, Windows Phone, and HoloLens.

> \** [Xbox Play Anywhere](https://www.xbox.com/games/xbox-play-anywhere) titles can have two offline devices: one PC and one console.

If you want to use open or restrictive licensing for your app or game, speak to your Microsoft contacts.

Here's each model in more detail.

## Default licensing

Default licensing is what all apps get by default. It lets a customer install an app or a game on up to 10 devices with the same Microsoft account. This covers most customer scenarios, because very few customers have more than 10 Windows devices. Multiple users on the same device can use the app without having to buy it again.

## Open licensing

Open licensing lets any customer acquire an app or a game and not have it subjected to a purchase check. Customers can install the app on any number of devices. 

Use open licensing for apps that either don't need license enforcement or do their own enforcement, so open licensing isn't designed for paid apps. An app with open licensing won't check whether the customer has purchased it. This reduces friction during acquisition. However, the availability&mdash;for example, mobile operator exclusivity or [market availability](../availability/availability-overview.md) of the package&mdash;is still validated.

[Age ratings](../age-ratings.md) aren't enforced under open licensing because the age rating is validated by the Store at purchase time, and open licensing skips this step. Therefore, the app or game *must* be appropriate for all ages.

Open licensing skips the step for presenting legal information (such as an end-user license agreement, or EULA) to the user, so the app or game *must not* include any custom legal terms added through [Partner Center](https://partner.microsoft.com/dashboard), namely the [Additional license terms](/windows/apps/publish/publish-your-app/create-app-store-listing?pivots=store-installer-msix#additional-license-terms) field on the **Store listing** page of Partner Center

After open licensing is set, the device won't perform another check for changes in licensing. For this reason, if you change to a different licensing model, there's no guarantee that licensing will be updated for all customers. For licensing to be updated, customers would have to reimage their devices or get new ones.

## Restrictive licensing

Restrictive licensing lets customers install an app or a game on one offline device and one online device other than a Windows Phone, which doesn't support restrictive licensing. The app can be used at the same time by at most two devices. This model is typically used for Xbox games; for example, a player can run a game on the home console, even while offline, but can also play online after signing in on a friend's console.

The device where a customer first runs an app or a game with restrictive licensing will be the device where *all* apps and games with restrictive licensing must be installed for offline use. For example, a customer can't install an app with restrictive licensing on one PC and then install a different app with restrictive licensing on a different PC.

For apps and games available on both Xbox and PC through the use of the same **Store ID** ([Xbox Play Anywhere](https://www.xbox.com/games/xbox-play-anywhere) titles), a customer can set one console and one PC to run an app offline.

To set a single PC as the offline device, do the following:

1. Open the Store app.
2. Select **Settings** from the dropdown menu.
3. In **Offline Permissions**, under **Make this PC the one I use to run some games or apps that have limited licenses, even when I'm offline**, toggle the switch **On**.

**Important:** You can change this setting only three times per year, so do it only if you're certain.

To set a single Xbox console as the offline device, do the following:

1. On the Xbox One home page, open the **Settings** (left menu, gear icon, **All settings**).
2. Under **Personalization**, select **My home Xbox**.
3. Select **Make this my home Xbox**.
4. Select **Make this my home Xbox** again.

**Note:** HoloLens is treated as a Windows 10 PC. For this reason, if an app or a game with restrictive licensing is available for PC, Xbox One, and HoloLens, a customer can install and run it offline on one PC or HoloLens and on one Xbox One console.

If you change to a different licensing model after you've set restrictive licensing, then the change will be applied the next time the app or game is run online.

## Next steps

* [Pricing and availability&mdash;advanced settings](../availability/availability-overview.md)
* [Create a store listing for a games](../../tutorial-xbox-managed/how-to-create-a-store-listing.md)

## See also

* [Additional license terms](/windows/apps/publish/publish-your-app/create-app-store-listing?pivots=store-installer-msix#additional-license-terms)
