---
author: jgup
title: "Protocol Element (MicrosoftGame.config)"
description: "MicrosoftGame.config Reference for Protocol Element."
ms.author: jgup
ms.topic: article
edited: 01/06/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# MicrosoftGame.config Element - Protocol

Specifies a custom protocol that can be used to launch the game or bring the game into the 
foreground if it were already running.

## Parent
This element's parent is the ProtocolList element.

## Requirement
This element is optional and is not required to be set.

## Platform
This element pertains to PC and Console.

## Behavior
* Attributes are:
  * Name - Required and must satisfy the following:
      * Contains only lowercase alphanumeric characters and/or hyphens
	  * A minimum of at least 3 characters in length
	  * A maximum length of 39 characters
  * Executable - optional. If not specified, will default to the default executable in the 
           ExecutableList. If including a path, it should use a backward slash as the separator.

## See Also
[MicrosoftGame.config Reference - Table of Contents](gc-microsoftgameconfig-toc.md)  