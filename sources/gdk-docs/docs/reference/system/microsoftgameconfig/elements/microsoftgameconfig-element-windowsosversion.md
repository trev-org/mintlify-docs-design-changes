---
author: dmcmahon
title: "WindowsOsVersion Element (MicrosoftGame.config)"
description: "MicrosoftGame.config Reference for WindowsOsVersion Element."
kindex: WinodwsOsVersion
ms.author: dmcmahon
ms.topic: article
edited: 01/16/2024
ms.date: '01/16/2024'
permissioned-type: public
---

# MicrosoftGame.config Element - WindowsOsVersion

Specifies the SuggestedMinimum, Recommended, and RequiredMinimum versions of Windows that this title requires to run.

**SuggestedMinimum**

The minimum Windows OS version that the game will be supporting for players. Will update the "Minium Requirements OS" on all the Microsoft Store fronts (Microsoft Store, Microsoft.com, Xbox.com and the Xbox App). Removing the value on this field will default the game to supporting Windows 10, Version 1903 "10.0.18362.0".

* It is recommended to set SuggestedMinimum to "10.0.19045.3570" as that is where the bulk of the player base is and is the latest officially supported Windows 10 OS version.

**Recommended**

The Recommended Windows OS version that the game is optimized or best to run on. Will update the "Recommended Requirements OS" on all the Microsoft Store fronts (Microsoft Store, Microsoft.com, Xbox.com and the Xbox App)

 **_NOTE_**  if this field is left blank it will default to the SuggestedMinimum value. Enabling Recommended will pop a warning to players when they try to install or launch the game on a Windows OS version lower than the suggested minimum.

**RequiredMinimum**

The RequiredMinimum value does not affect the various store fronts and is only used by the Gaming Run Time Services (GRTS). Setting this value will BLOCK the game from installing or launching on a Windows OS Version lower than the RequiredMinimum.  If no element is provided here, the default value is "10.0.18362.0".

If your title makes use of the [DirectX 12 Agility SDK](https://aka.ms/directx12agility) then you should set the RequiredMinimum to "10.0.18363.1350".

### Recent Windows Releases

| Windows Release  | Version #  | Release |
|------------------|------------|---------|
| 10 | 10.0.18362.1256 | 19H1 |
| 10 | 10.0.18363.2274 | 19H2 |
| 10 | 10.0.19041.1415 | 20H1 |
| 10 | 10.0.19042.2965 | 20H2 |
| 10 | 10.0.19043.2364 | 21H1 |
| 10 | 10.0.19044.4291 | 21H2 |
| 10 | 10.0.19045.4355 | 22H2 |
| 11 | 10.0.22000.2899 | 21H2 |
| 11 | 10.0.22621.3527 | 22H2 |
| 11 | 10.0.22631.3527 | 23H2 |

## Parent
This element's parent is the DesktopRegistration element.

## Requirement
This element is optional and is not required to be set. 

## Platform
This element only pertains to PC devices.

## Behavior
* Optional attributes are RequiredMinimum="#.#.#.#", SuggestedMinimum="#.#.#.#" Recommended="#.#.#.#"
* Allowed value is a four part version number (i.e. 10.0.19045.3570)
* The suggested minimum element will default to 10.0.19045.3570

## Remarks
* none

## See Also
[MicrosoftGame.config Reference - Table of Contents](gc-microsoftgameconfig-toc.md) 
[Story Policy 10.4.1](/windows/apps/publish/store-policies#104-usability)
