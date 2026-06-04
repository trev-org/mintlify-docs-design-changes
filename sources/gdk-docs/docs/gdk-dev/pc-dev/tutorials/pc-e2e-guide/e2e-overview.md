---
author: sdgmiller
title: "PC E2E guide overview"
description: "Gives an overview of the PC end-to-end guide."
ms.topic: tutorial
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# PC end-to-end guide overview

The Microsoft Game Development Kit (GDK) can be used by itself with a C/C++ project or can be used with a game engine that supports integration with the GDK.  

The PC end-to-end guide gives an overview of the steps required to integrate the GDK with your game and publish your game to the Microsoft Store on the Xbox PC app.  The end-to-end guide is organized around these steps in the order you would typically perform them. The guide shows integration using the native GDK APIs and contains game engine specific guides that show how the GDK can be used in the Unity Engine and the Unreal Engine.

## Sections of the guide

The guide consists of the following sections.

### GDK & game engines  

The [GDK & game engines](e2e-gdk-and-engines.md) section of the guide gives a description of the GDK and contains guides for using the GDK with the Unity Engine and the Unreal Engine.  

### Steps for all games  

The "Steps for all games" section of the guide describes the steps all games will need to take to integrate with the GDK and publish in the Microsoft Store.  Where APIs are referenced, the steps cover using the native C/C++ GDK APIs. The individual game engine guides in the previous section cover engine specific steps required to use GDK functionality. For example, accessing C# wrappers in the Unity Engine and using the online-subsystem in the Unreal Engine.
This section includes the following steps.  

* [Joining ID@Xbox](e2e-register-id-at-xbox.md)
* [Creating a Partner Center account](e2e-creating-partnercenter-account.md)
* [Creating a project definition for your game](e2e-creating-partnercenter-product-definition.md)
* [Integrating the GDK with your game](e2e-integrating-gdk-in-your-game.md)
* [Publishing your game in Partner Center](e2e-publishing-your-game.md)

Most steps apply as is to games whether they are using a game engine or directly using the GDK APIs in C/C++. The [Integrate the GDK with your game](e2e-integrating-gdk-in-your-game.md) section covers initializing the GDK and Xbox/PlayFab services and implementing required features. Depending on the engine you are using you may need to reference one of the engine guides from the previous section for engine specific integration details.

### Steps that may apply to your game

The [Steps that may apply to your game](e2e-optional-services.md) section covers services or features that are not required, but that you may want your game to use.

## Next steps

If you are using the C/C++ GDK template project from scratch, go through the [Steps for all games](e2e-required-steps.md) section.  

If you are using a game engine, you will need to go through the guide specific to your game engine in the [GDK & game engines](e2e-gdk-and-engines.md) section and the steps in the [Steps for all games](e2e-required-steps.md) section. For the [Integrate the GDK with your game](e2e-integrating-gdk-in-your-game.md) section, some additional details will be provided in the engine specific guides.  

For both paths, you'll want to review the [Steps that may apply to your game](e2e-optional-services.md) section for services that are not required but that you may want your game to use.

