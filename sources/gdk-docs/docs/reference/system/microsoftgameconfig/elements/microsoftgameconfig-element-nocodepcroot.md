---
author: dkushmerick
title: "NoCodePCRoot Element (MicrosoftGame.config)"
description: "MicrosoftGame.config Reference for NoCodePCRoot Element."
kindex: NoCodePCRoot
ms.author: dmcmahon
ms.topic: article
edited: 10/11/2021
ms.date: '04/09/2026'
permissioned-type: public
---

# MicrosoftGame.config Element - NoCodePCRoot

Specifies the local folder where Save Games are stored when using the
[Porting previous titles to PC Game Saves with no-code cloud saves](../../../../features/common/game-save/game-saves-walkthroughs-and-samples.md#porting-previous-titles-to-pc-game-saves-with-no-code-cloud-saves)

## Parent

This element's parent is the SaveGameStorage element.

## Requirement

This element is optional and is not required to be set.

## Platform

This element only pertains to PC devices.

## Behavior

* Attribute of RelativeTo.
* Attribute values for RelativeTo are AppData, Public, LocalAppData, LocalAppDataLow, ProgramData, 
  SavedGames or UserProfile.
* Allowed value is a relative file path.

## Remarks

* To use this element, a valid TitleId and MSAAppId element must be specified in your 
  MicrosoftGame.config.
* We recommend using `SavedGames` as the `RelativeTo` value. The *Saved Games* folder 
  (`%USERPROFILE%\Saved Games`) is not synced by OneDrive by default, which avoids 
  conflicts with cloud save synchronization. Other locations such as `AppData` may be 
  affected by OneDrive's auto-syncing behavior.

## See Also

[MicrosoftGame.config Reference - Table of Contents](gc-microsoftgameconfig-toc.md)  

[Porting previous titles to PC Game Saves with no-code cloud saves](../../../../features/common/game-save/game-saves-walkthroughs-and-samples.md#porting-previous-titles-to-pc-game-saves-with-no-code-cloud-saves)