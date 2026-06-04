---
author: M-Stahl
title: "PersistentLocalStorage Element (MicrosoftGame.config)"
description: "MicrosoftGame.config Reference for PersistentLocalStorage Element."
kindex: PersistentLocalStorage
ms.author: dmcmahon
ms.topic: article
edited: 01/06/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# MicrosoftGame.config Element - PersistentLocalStorage

Specifies the desired size of the titles Persistent Local Storage. Persistent local storage requires title identity to be configured to work properly.

## Parent
This element's parent is the Game element.

## Requirement
This element is optional and is not required to be set. 

## Platform
This element only pertains to Console devices.

## Behavior
* No attributes.
* No default value.
* Allowed values are child elements of SizeMB and GrowableToMB.

## Remarks
We recommend using a Persistent Local Storage (PLS) as small as possible. PLS sizes greater than 4GB will increase launch times for games running in Xbox Game Streaming.

## See Also
[MicrosoftGame.config Reference - Table of Contents](gc-microsoftgameconfig-toc.md)  