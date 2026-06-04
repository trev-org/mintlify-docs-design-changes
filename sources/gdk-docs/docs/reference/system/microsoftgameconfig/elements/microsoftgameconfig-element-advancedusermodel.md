---
author: M-Stahl
title: "AdvancedUserModel Element (MicrosoftGame.config)"
description: "MicrosoftGame.config Reference for AdvancedUserModel Element."
kindex: AdvancedUserModel
ms.author: dmcmahon
ms.topic: article
edited: 01/06/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# MicrosoftGame.config Element - AdvancedUserModel

Specifies if Advanced User Model should be used for your title. This means your title supports the 
active user changing without requiring a restart. If disabled, then the simplified user model is 
used which guarantees your title will always keep the active user that it was launched with. See 
[GDK User Models (NDA topic)](../../../../features/common/user/gamecore-user-models.md) for more information.

Most titles will find using the Simplfied User Model easier to develope against and should set this
element to false.

## Parent
This element's parent is the Game element.

## Requirement
This element is required to be set.

## Platform
This element only pertains to Console devices.

## Behavior
* No attributes.
* Default value is true.
* Allowed values are true or false.

## Remarks
* To use this element with the value of false, a valid TitleId and MSAAppId element must be 
specified in your MicrosoftGame.config.

## See Also
[MicrosoftGame.config Reference - Table of Contents](gc-microsoftgameconfig-toc.md)  

[GDK User Models (NDA topic)](../../../../features/common/user/gamecore-user-models.md)

[Opting into Default User Required (NDA topic)](../../../../features/common/user/users-opting-into-simplified-model.md)