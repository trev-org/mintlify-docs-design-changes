---
author: sdgmiller
title: "GDK features not in Steamworks"
description: "Describes the features in the GDK that don't have a Steamworks equivalent."
kindex:
- GDK features not in Steamworks
- Xbox services, GDK features not in Steamworks
- Xbox services, Steamworks
ms.topic: article
edited: 05/05/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Microsoft Game Development Kit features not in Steamworks

## Sandboxes

Sandboxes are helpful, isolated environments for testing various features during game development. This can be done without exposing these features to any other environment, including the retail environment that users see. You can create sandboxes in Partner Center, and then change which sandbox you're currently in on your development PC by using the 
[Xbox services PC Sandbox Switcher (XblPCSandbox.exe)](../../../../../tools/tools-services/live-pc-sandbox-switcher.md). 
Each sandbox can have different achievements, stats, leaderboards, and other information assigned to it that won't affect other sandboxes. For more information, see [Xbox services Sandboxes overview](../../../../../services/fundamentals/sandboxes/live-setup-sandbox.md).

## Xbox Play Anywhere

Games with Xbox Play Anywhere can be accessed by the same user on both console and PC, with their data shared and saved across the two platforms. 
Because the GDK is used across console and PC games, integrating features on both platforms can enable the Xbox Play Anywhere capability for your game. 
