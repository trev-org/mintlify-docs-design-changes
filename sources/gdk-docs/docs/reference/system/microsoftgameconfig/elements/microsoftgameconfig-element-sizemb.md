---
author: M-Stahl
title: "SizeMB Element (MicrosoftGame.config)"
description: "MicrosoftGame.config Reference for SizeMB Element."
kindex: SizeMB
ms.author: dmcmahon
ms.topic: article
edited: 01/06/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# MicrosoftGame.config Element - SizeMB

Specifies the minimum size in MB of Persistent Local Storage. Persistent local storage requires title identity to be configured to work properly.

## Parent
This element's parent is the PersistentLocalStorage element.

## Requirement
This element is optional and is not required to be set. 

## Platform
This element only pertains to Console devices.

## Behavior
* No attributes.
* No default value.
* Allowed value is 10 to 1,000,000.

## Remarks
Actual maximum size is determined by policy. See the [GrowableToMB](microsoftgameconfig-element-growabletomb.md) element for more details.

## See Also
[MicrosoftGame.config Reference - Table of Contents](gc-microsoftgameconfig-toc.md)  