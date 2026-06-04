---
author: M-Stahl
title: "Starting development of a new title using GDK project templates"
description: "Describes the project templates that are available with the GDK."
kindex: Starting development of a new title using GDK project templates
ms.author: douglau
ms.topic: article
edited: 07/21/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Starting development of a new title using GDK project templates

This topic describes how to get started developing a new title by using the GDK project templates.

> [!NOTE]
> For games targeting PC Desktop using the Gaming Runtime, you are free to use Direct3D 12, Direct3D 11, or even legacy Direct3D 9. Note there are some special considerations if making use of legacy DirectX SDK components such as D3DX9, D3DX10, D3DX11, etc. See the [DirectX Framework package](../../../features/common/packaging/packaging-framework-packages.md) documentation for more details.


## Getting started by using Visual Studio project templates for the Gaming Runtime
 
When the Microsoft Game Development Kit (GDK) is installed on a development PC with Visual Studio, it installs five project templates for targeting PC Desktop as shown in the following table.
  
| Target platform | Template | Description |
| --- | --- | --- |
| Desktop | Direct3D 12 Desktop Game (Classic) | Creates a project in the Visual Studio project system that builds a standalone PC game executable using the Gaming Runtime and stock x64 MSBuild platform. |
| | Direct3D 12 Desktop Game | Creates a project in the Visual Studio project system that builds a standalone PC game executable. |
| | Direct3D 12 Desktop Game Makefile | Creates a project that's suitable for building a PC Desktop game from a `makefile` by using a command prompt. |
| | Desktop Static Library | Creates a project in the Visual Studio project system that builds a static library using the Gaming.Desktop.x64 custom MSBuild platform. It's suitable to include in a game that's targeting PC Desktop. |
| | Desktop DLL | Creates a project in the Visual Studio project system that builds a DLL using the Gaming.Desktop.x64 custom MSBuild platform. It's suitable to include in a game that's targeting PC Desktop. |
    

To access these templates:  

1. Open Visual Studio.
1. Select **File** > **New** > **Project**. The **New Project** dialog box will appear.
1. In the **New Project** dialog, set the **All Languages** filter to **C++**, set the **All Platforms** filter to **Windows**, and set **All Project Types** to **Games**. You can search for the project names above as well.
1. From the list of Microsoft Game Development Kit project templates, select the project template that you want.
1. Select **OK**.
  
## Use the appropriate template

#### Game exclusively targeting PC Desktop 

If you're developing a game that exclusively targets PC devices, the Direct3D 12 Desktop Game template is the common starting point. Some of the key aspects of this template include the following:

* Uses Windows API Family `WINAPI_FAMILY_DESKTOP_APP` and links against typical PC Desktop libraries, including *kernel32.lib*, *user32.lib*, etc. As a result, the full breadth of PC Desktop APIs are available for use in the game.
* Includes the necessary headers and libraries so that the template is ready for the addition of the Direct3D 12 graphics implementation that's compatible with PC Desktop. The template provides a simple swapchain, Direct3D device, and basic game update & render loop.
* Links against *XGameRuntime.lib* and includes the necessary headers so that all of the Gaming Runtime capabilities are ready for use. 
* The Xbox Live API (XSAPI) extension library is also available by default. Additional Microsoft Game Development Kit (GDK) extension libraries can be added as well.
* Declares a build configuration that's based on either the 'stock' x64 platform or the custom MSBuild platform Gaming.Desktop.x64, which builds an x64 target with the expectation that you're iterating on the game locally (on your development PC) by using the local debugger.
* Creates a *MicrosoftGameConfig.mgc* file with placeholder information that you fill in with your title's information from Partner Center.

## See also

[MicrosoftGame.Config overview](../../../features/common/game-config/MicrosoftGameConfig-Overview.md)   
[Getting started with the Gaming Runtime](../../../archive/gr-get-started-with-pc-dev-toc.md)