---
author: A-Radu
title: "Franchise Game Hubs"
description: "Describes franchise game hubs."
kindex: Franchise game hubs
ms.author: alvieru
ms.topic: article
edited: '09/14/2023'
ms.date: '09/14/2023'
permissioned-type: public
---

# Franchise Game Hubs

## Glossary

| Term | Definition |
| --- | --- |
| Franchise game hub | A base game that plays the role of a launcher for other base games. |
| Hub-aware game | A base game that requires a franchise game hub to be launched. |
| Hub-unaware game | A base game that can be launched by itself, and it is not a franchise game hub either. |
| FranchiseGameHubId | A GUID that identifies the franchise game hub. |

## Overview

**Franchise Game Hubs** is a new approach that games can take when they want to incorporate a launcher/menu in their game.

Over time, games have tried various solution for incorporating a launcher/menu:
* Monolithic game with menu system that lets you choose to play campaign or various multiplayer modes;
* Monolithic game leveraging the Microsoft Store to unlock various new modes accessed from the menu system​;
* Base game using DLCs to encapsulate the various game modes accessed from the menu system​;

The DLC route is a solution that works well on console generations and it is an existing technology, but it has some disadvantages:
* The base game and all DLCs need to share the same GDK/game OS;
* If a new DLC picks a new GDK, then all the previously published content need to be updated to pick up the same GDK;
* Store upsell, recommendations, and merchandising are not great for a DLC like this​;
* Reduction in presence granularity;

The **Franchise Game Hubs** solution is similar to the DLC route, but it addresses the disadvantages that the DLC route has. Therefore, the franchise game hub and the hub-aware games dependent on it do not have to use the same GDK/game OS. The hub-aware game will be published in the Microsoft Store as a bundle together with the corresponding franchise game hub. This solution is intended only for Xbox Series consoles, which can offer the best experience to gamers.

## Declaring a Franchise Game Hub
To declare a franchise game hub, add the following section in MicrosoftGame.config.

```xml
<?xml version="1.0" encoding="utf-8"?>
<Game configVersion="1">
    <!-- snip -->

    <!--The FranchiseGameHubId should be populated with a non-empty GUID, obtained from Partner Center.-->
    <FranchiseGameHubId>00000000-0000-0000-0000-000000000000</FranchiseGameHubId> 
</Game>
```

The FranchiseGameHubId should be obtained from Partner Center and will uniquely identify a franchise game hub. To obtain a FranchiseGameHubId for a new product, please contact your Microsoft Account Representative.

## Declaring a Hub-aware Game
To declare a hub-aware game, add the following section in MicrosoftGame.config.

```xml
<?xml version="1.0" encoding="utf-8"?>
<Game configVersion="1">
    <!-- snip -->
    <!--The AssociatedFranchiseGameHubId should be populated with a non-empty GUID.-->
    <AssociatedFranchiseGameHubId>00000000-0000-0000-0000-000000000000</AssociatedFranchiseGameHubId>
</Game>
```

The value of AssociatedFranchiseGameHubId is populated with the FranchiseGameHubId of the corresponding franchise game hub.

If the franchise game hub and the hub-aware game are published on disc, they have to be published on the same disc, and catalog.js needs to include the FranchiseGameHubId and the AssociatedFranchiseGameHubId as shown in the catalog.js example from [Creating test discs](../features/common/packaging/creating-test-compilation-discs.md).  