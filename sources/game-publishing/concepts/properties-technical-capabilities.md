---
title: Technical capabilities
description: The Technical Capabilities section in the properties page lets you indicate hardware preferences or other declarations.
services: gaming
author: FLY1NGSQU1RR3L
ms.author: clintw
ms.service: gaming
ms.topic: article
ms.date: 1/27/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Technical capabilities

[!INCLUDE [reminder](../includes/select-msix-tab.md)]

Use the **Technical capabilities** page to specify delivery options, audio and visual settings, inputs, and other properties

## Product page highlights

Product highlights are featured as tags displayed at the top of your game's store listing. Optimized for Xbox Series X&#124;S and High-resolution (4K Ultra HD) are two of the most applied filters by customers searching for a new game.

Check the box for each of these highlighted features that your game supports.

**Optimized for Xbox Series X&#124;S:** Games earning the Optimized for Xbox Series X&#124;S tag feature unparalleled load-times, heightened visuals, and steadier framerates at up to 120 frames per second (FPS). Qualifying titles include new titles built natively using the Xbox Series X&#124;S development environment and previously released titles that have been rebuilt specifically for Xbox Series X&#124;S. For more information, see Optimized for Series X&#124;S | Xbox

**Available in 4K:** Check this box if your game can render native 4K visuals during gameplay. Games described as featuring 4K offer a resolution of 3840 × 2160 pixels, which is a substantially higher resolution than 1080p HD. Check this box if a reasonable amount of gameplay is rendered in 4K. Don't check it if only your game menu or cutscenes are rendered in 4K.

**Smart Delivery:** Smart Delivery is a player-facing feature that allows players to purchase a game once and receive the best available version on both Xbox One and Xbox Series X&#124;S consoles without requiring the player to take additional action or pay more money. It's mostly seamless from a player’s point of view. For more information, see Smart Delivery.

**Xbox Play Anywhere:** Games categorized as Xbox Play Anywhere support:
 - **Unified Xbox Entitlements** for the Xbox console and Windows versions of the game and any associated digital content (such as downloadable content, expansions, season passes, in-game items, and consumables). Unified Xbox Entitlements are automatically enabled for a product if both the **Desktop** and **Xbox** device families are selected in [Game Setup](game-setup-overview.md) and, if applicable to the product type, valid [Packages](packages-overview.md) are published for each device family.
 - **Xbox Cross-Progression** between the Xbox console and Windows versions of the game, including game save data, in-game statistics, progress, and meta-game progression such as Xbox Achievements. Xbox Cross-Progression can be supported using [Xbox cloud storage](/gaming/gdk/docs/services/storage/live-cloud-storage-nav) or a third-party or proprietary system.
 - For more information, review the Xbox Play Anywhere Policy in the [Xbox Publisher Guide](https://aka.ms/xboxpublisherguide).

## Functionality

This property indicates whether your game can be installed on alternative drives or removable storage. It's checked by default, allowing your game to be installed on removable or external storage and internal storage. We recommend leaving it unchecked unless you want to prevent your game to be installable on removable storage or be installable only on internal storage. There's no option to restrict installation so that a game can only be installed to removable storage media.

Indicate whether your game can be installed to alternative drives or removable storage.

### Audio/visual functionality

Check the appropriate device platform where the functionality is available.

**Designed to run at 60+ FPS:** Select this console visual functionality if your game renders steady visual frames at the rate of 60 FPS or higher. Your game should maintain a steady frame rate at 1080p or higher resolution to qualify as designed to run at 60+ FPS. This setting applies only to console titles.

**Designed to run at 120 FPS:** Select this console visual functionality if your game renders steady visual frames at the rate of 120 FPS or higher. Your game should maintain a steady frame rate at 1080p or higher resolution to qualify as designed to run at 120+ FPS. This setting applies only to console titles.

**High-dynamic range (HDR) video output:** Select this functionality if your game supports HDR output. HDR on Xbox has a 10-bit color range, or a wide color gamut which uses more colors for a richer, more detailed image. On Xbox, this feature also goes by the name Dolby Vision, which is used by some video apps.

**Raytracing:** Select this functionality if your game produces graphical lighting effects (such as shadows, reflections, refraction, and global illumination) through the simulation of light by tracing rays through the environment.

**Variable refresh rate:** Select this functionality if your game can adjust display refresh rate on the fly to deliver a smooth and glitch free visual experience. This setting applies only to PC titles.

**Dolby Atmos:** Select this functionality if your game supports the proprietary Dolby Atmos spatial audio output that delivers an immersive surround sound experience. Your game must be developed using tools that integrate with Dolby Atmos audio output.

**DTS:X:** Select this functionality if your game supports the proprietary DTS:X spatial audio output that delivers an immersive surround sound experience. Your game must be developed using tools that integrate with DTS:X audio output.

**Spatial Sound:** Select this functionality if your game supports 3D spatial audio output like Windows Sonic.

**Broadcasting:** Select this functionality if your game can broadcast to live streaming services.

## Inputs

Select supported input hardware that players can use to interact with your game. Currently, only keyboard and mouse are available as additional input options on the Xbox console. Controller input is supported by default.

PC input options let you specify input devices as either required or recommended. If you specify an input device as required, then the Windows client will display warnings or prevent the game from installing or run when the required input device isn't connected to the PC. If you specify an input as recommended, then the player can use the device to interact with your game and the Windows client doesn't have any restrictions to enforce.

### PC advanced specifications

In this section, you define your game’s specifications, like minimum and recommended memory, video memory, processor, and graphics. Enter Processor and Graphics specifications in text format. Your entries are shown on your game's store listing as guidance to advise customers, but they aren't enforced by the installer. For information about how minimum and recommended hardware is displayed on various versions of Windows, see Windows App system requirements.

In the Capability guidance section, you can select NFC HCE and NFC Proximity if your game supports the use of these hardware options.

In the Other section, specify if Windows can automatically backup your player’s data to OneDrive, or let them record and broadcast clips of your game. These capabilities are enabled by default. Clear these boxes if you don't want Windows to support these features for your game. This action prevents players from taking advantage of Windows client capabilities to perform automatic backup, and record and broadcast.

## Other platform and services

**Supports Cortana:** Select this option if your game integrates with Cortana and supports Cortana digital assistance. This option is applicable for Windows apps. You can leave this box unchecked if your game doesn't support Cortana.

**Sends Kinect data to external services:** Select this option if your game uses Kinect data and sends it to any external service.

**Allows players to make purchases but does not use the Microsoft Store commerce system:** Leave this box unchecked. All purchases made on our platform require that you use the Microsoft Store in-app purchase API, which falls under Microsoft Store commerce system. This is a legacy field that was used by Apps submitted before June 29, 2015, which could still be listed on the store. For more information about Microsoft Store guidance, see App Purchase without Microsoft Store commerce system.

**Service guidance and Mixed Reality setup:** This option is applicable if your game is designed to run on immersive displays on Windows Mixed Reality for PC and HoloLens devices. For more information, see [Designing for Mixed Reality](/windows/apps/design/devices/designing-for-mr) guidance.

## Next steps

* [Configure properties for a Game product](../tutorial-xbox-managed/how-to-configure-properties.md)

## See also

* [Designing for Mixed Reality](/windows/apps/design/devices/designing-for-mr)
