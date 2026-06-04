---
author: aablackm
title: "Visual Studio properties for PC game development"
description: "Describes the Microsoft Game Development Kit projects as having custom Visual Studio property pages that are used to configure Windows PC gaming projects."
kindex:
- Visual Studio Properties for PC Game Development
- Gaming Extension Libraries
- Package Localization Dir
ms.author: stevenpr
ms.topic: article
edited: 05/20/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Visual Studio properties for PC game development

The Microsoft Game Development Kit (GDK) has a custom Visual Studio property page that's used to configure Windows PC game projects.  


To access the Windows PC gaming property page

   1. In **Solution Explorer**, right-click the project name, and then select **Properties**.
   1. Expand **Configuration Properties**.
   1. Select **Gaming Desktop**.


The following Windows PC gaming property pages are available.

   *  [Gaming Extension Libraries](#gamingextensionlibraries)  
   *  [Package Localization Dir](#packagelocalizationdir)  

<a id="gamingextensionlibraries"></a>

## Gaming Extension Libraries  

The Gaming Extension Libraries property page is used to select the set of extension libraries that your project will reference as shown in the following screenshot.

![Screenshot of the Gaming Extension Libraries property page](../../../../media/public-images/vs_pc_extension_library_property.png)

<a id="packagelocalizationdir"></a>

## Package Localization Dir  

The Package Localization Dir property page specifies an optional directory relative to the project directory for use when creating localized shell resources. The Package Localization Dir property page is the equivalent of the `/resw` flag to [makepkg](../../../features/common/packaging/deployment/makepkg.md). For more information about adding localized resources to your project, see [MicrosoftGame.config localization](../../../features/common/game-config/MicrosoftGameConfig-Localization.md).

## See also
[Visual Studio (for PC game development)](gr-visualstudio-toc.md)