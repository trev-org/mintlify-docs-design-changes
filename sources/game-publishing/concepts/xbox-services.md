---
title: Configuring Xbox services
description: Xbox service configuration guidance for managed creators.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 2/6/2025
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Configuring Xbox services

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

Xbox services enable you to configure required and optional features for your game, including Xbox sign-in, Achievements, Rich Presence, and Multiplayer services.

For more information about configuring Xbox services features for your product, see [Getting started with Xbox services](/gaming/gdk/_content/gc/live/test-release/portal-config/live-portal-config-nav) in the Game Development Kit (GDK) documentation.

## Enable Xbox services

When you create your game and select the Desktop or Xbox device families during game setup, you enable limited Xbox services. While limited Xbox services are enabled, you can't configure Xbox achievements. To request full Xbox services for your game, send the Store ID found in the **Identity details** section of the page to your Microsoft contacts and request product onboarding. For more information, see [Creating and onboarding products](../publishing-processes/managed-creators/publishing-processes-product-onboarding-and-configuration.md).

## Find Xbox services identifiers

Each product with Xbox services enabled has unique identifiers that you need during development, including your Title ID (hexadecimal), Microsoft account (MSA) App ID (MSAAppID), and Service Configuration ID (SCID). Go to **Xbox services - Xbox Settings** to find these identifiers.

## Modify Xbox services settings

After you enable Xbox services on your product, you can modify a few settings to meet your development needs. Select **Xbox settings** from the product page navigation to modify these settings.

### Title names

You can configure localized title names for your product. Players see the title names you configure in various locations, such as:

- Game invites
- Achievements
- Presence

> [!NOTE]
> These localized title names are different from your product's reserved names and the product name you display in the Store, which you configure in your **Store listings** module.

### Data platform setting: Event-based vs. title-managed stats and achievements

By default, all game products that you create in Partner Center use title-managed stats and achievements (formerly known as Stats and Achievements 2017). To use event-based stats and achievements, configure this setting in the **Xbox services - Xbox Settings** page of your product in Partner Center.

For more information, see [Player Data Overview](/gaming/gdk/_content/gc/live/features/player-data/live-playerdata-overview).

### Device families

Select the device families that match your supported platforms. By default, all device families are enabled. If you need to restrict the devices that are supported, select the checkbox for each supported device family.

### Embargo date

Use the Xbox services embargo date to define the date when your Xbox services configuration becomes visible within the Xbox ecosystem in the RETAIL sandbox. Before this date, your game can still access any published configuration in RETAIL, but service elements such as achievements and presence aren't visible within their respective UI components. For example, these elements don't appear in the Xbox app on PC or Xbox shell UI on consoles. Set an embargo date to prevent unintended exposure of your game's configuration before its release date. The embargo date shouldn't end later than the public release date and time of your game.

For more information, see [Configuring Xbox services setup in Partner Center](/gaming/gdk/_content/gc/live/test-release/portal-config/live-config-xbl-setup).

## Configure Xbox services gameplay settings

Work through each component of the **Xbox services - Gameplay settings** to configure elements such as Achievements, Presence, Stats, and Leaderboards for your game.

For more information, see [Xbox services features](/gaming/gdk/_content/gc/live/features/live-features-nav) and [Configuring Xbox services](/gaming/gdk/_content/gc/live/test-release/portal-config/live-portal-config-nav).

> [!Tip]
> When configuring Achievements for Console games, review the Xbox Requirements (XRs) relating to [Achievements and Awards](/gaming/gdk/_content/gc/policies/console/certification-requirements#achievements-and-awards). For PC games, see [Achievements and Awards](/gaming/gdk/_content/gc/policies/pc/live-policies-pc#achievements-and-awards).

## Copy Xbox services gameplay settings between sandboxes

If you're working with multiple development sandboxes, you might need to copy your current Xbox services gameplay settings. To copy your Xbox services gameplay settings to a new or existing sandbox, go to the Xbox Gameplay Settings page for your product, select **Copy gameplay settings**, and then select a source and destination. Copying the configuration makes it editable within the UI for only that specific sandbox. Copying doesn't automatically publish the gameplay settings to that sandbox. You must publish before the configuration is accessible by the game.

For more information, see the [Summary page for Xbox services configuration](/gaming/gdk/_content/gc/live/test-release/portal-config/live-portal-summary-tab).

## Validate and publish Xbox services gameplay settings

The **Xbox services - Gameplay settings** UI provides the options to validate or to publish your configuration. 
 - Select **Validate** to validate your Xbox services against the requirements for Xbox services without publishing. If you previously published your Xbox services to RETAIL, the validation process highlights any noncompliant changes.
 - Select **Publish** to publish your Xbox services to any sandbox destination, including RETAIL. The validation process checks your configuration against the requirements for Xbox services before publishing. If you previously published your Xbox services to RETAIL, the validation process highlights any noncompliant changes.

> [!NOTE]
> Nonblocking warnings are displayed with a yellow background. Blocking errors have a red background.

> [!IMPORTANT]
> When submitting a package to Certification, you must also publish your Xbox services configuration to the CERT and CERT.DEBUG sandboxes. Publishing to the CERT sandbox is automatic with your package, based on the source you select in the Certify or publishing workflow. However, you must use the publishing UI in the **Xbox services - Gameplay settings** page to publish the configuration to CERT.DEBUG.

For more information, see the [Summary page for Xbox services configuration](/gaming/gdk/_content/gc/live/test-release/portal-config/live-portal-summary-tab).

## Understand configuration variations

When you copy and publish Xbox services gameplay settings, you might see multiple configuration options with the following suffixes.

- *-Copy* is the version that represents the last time you copied or published a configuration to this sandbox from another sandbox. If the sandbox was last populated by copying from `XXXX.99`, for example, the *-Copy* version is the configuration with the state resulting from that copy.
- *-Draft* refers to the changes in the Partner Center UI in that sandbox, including unpublished changes. If you didn't make any changes, the *-Draft* version is likely similar to or the same as the latest copy or publish.
- *-Publish* is the version that represents the latest version of that configuration that you published to that sandbox. This version doesn't include any unpublished changes that are in that sandbox’s configuration.

## Next steps

After you configure your Xbox services, you can continue development by using the GDK, upload packages, or continue to configure your product's settings.

- [Get Started with the GDK](/gaming/gdk/_content/gc/getstarted/get-started-home)
