---
author: jgup
title: "Overview of packaging"
description: "Provides an overview of packaging."
kindex: Packaging Overview
ms.author: jgup
ms.topic: article
edited: 10/04/2019
ms.date: '08/01/2022'
permissioned-type: public
---

# Overview of packaging

## Packaging for Xbox and PC

The packaging technology used with Xbox One titles can also be used with Microsoft Game Development Kit (GDK) titles that target consoles and Windows 10 PCs. The packaging system makes use of Streaming Install, Intelligent Delivery, differential Content Updates, and other features. Functionality added with the Microsoft Game Development Kit (GDK) allows titles targeting PCs to install redistributable components such as custom game launchers, game editor tools, and anti-cheat software.

## Getting started

The following articles get you started creating sideloadable packages for testing installations on both PC and Xbox consoles.

[Getting started packaging for PC](packaging-getting-started-for-PC.md)

[Getting started packaging for Xbox consoles](packaging-getting-started-for-console.md)

## Encryption

An app is a package of executable code and other resources, including a manifest that lists all package components. App packages are encrypted in the following contexts:   

*  On optical disc media

*  While stored on and transmitted from the package's content distribution network, if the package is downloadable

*  While installed on a console

*  While installed on an external hard drive that is formatted for games and apps and that is connected to a console

It's important to note that when installed on a PC and licensed (that is, during game execution), users can access the contents of your package unencrypted. This packaging system by itself doesn't constitute a digital rights management (DRM) solution for games on PC.

> [!NOTE]
> Certain parts of an app package are always stored unencrypted&mdash;even on the content distribution network. This rule includes the app's MicrosoftGame.config and any icons, images, and strings referenced by that MicrosoftGame.config. Tags used in the layout.xml for the purpose of Intelligent Delivery are also stored unencrypted in the package.  

App contents might span multiple packages. This organization supports downloadable content and cross-title sharing. Packages can specify a set of files that must be installed for the app to run. These packages can also specify additional files that are loaded on demand, and files in additional packages that can be downloaded after the purchase.

## Advantages of an app package's organization

### Time to begin playing after install is reduced

Because apps start as soon as the minimum required set of code and resources have been loaded, time to begin playing the game following install is reduced. Additional resources will continue to load in the background, though when the game is running, the downstream bandwidth will be throttled. User can begin playing the game as soon as their first playable chunk is installed. 


### Chunks can be tagged as language-specific or hardware-specific

Games that have large amounts of localized content can tag it such that only the necessary localized content is installed, according to the language configuration of the system. Games can also tag content needed only on certain hardware configurations, such as 4K textures for supporting highest-fidelity rendering on Xbox One X and Xbox Series consoles.


### The title can dynamically change the chunk installation order

The order in which chunks are installed can be changed dynamically in response to user selection while playing the game, for example, selecting a particular mode or map.


### Order of loading can change dynamically

The order in which app packages are installed can be changed dynamically. As a result, installation can be adjusted to provide the content and features that a user is engaging. 


### Apps targeting PCs can declare dependencies on common redistributable frameworks

Apps that need frameworks like C runtimes or DX redistributables can reference them statically; from within their package manifests. Windows 10 automatically ensures that the frameworks are installed as part of the acquisition and installation of the app. Updates to these frameworks for bug and security fixes are also handled automatically.


### Apps targeting PCs can include their own setup packages that are triggered as part of the app installation

If custom software must be installed alongside the app, the necessary setup package can be included within the app package. In addition, the app can declare an action that occurs upon installation and invokes the custom software setup. Any update to this software must be handled by including an updated version of the custom software setup package in an updated version of the app package. The setup package is again invoked as part of the main app package's update to ensure the new custom software is updated. App uninstall won't automatically uninstall accompanying custom software since it can't be guaranteed that other installed apps happen to be dependent on this.


### Package uploading and publishing

Package uploading and publishing can be automated by using the Package Uploader open-source tool. Package Uploader is a .NET 5.0-based cross-platform application and library that enables game developers to interact programmatically with Partner Center. For more information, see [Automating package uploading](../package-uploader.md).

For more information about installing apps, see [Streaming Installation and Intelligent Delivery: an overview](streaming_install-intelligent_delivery.md).  

## MSIXVC2 for PC

Starting with the April 2026 GDK, a next-generation packaging format called MSIXVC2 is available as a preview for PC games. MSIXVC2 delivers dramatically smaller content updates (64&ndash;94% reduction), faster packaging (up to 7.6x), and a simplified workflow that can combine packaging and uploading into a single command.

MSIXVC2 is PC-only. Console games continue to use XVC. The `makepkg2` tool supports both formats.

For details, see [MSIXVC2 packaging overview](packaging-msixvc2-overview.md).

## See also

[Packaging](../gc-packaging-toc.md)  
[MSIXVC2 packaging overview](packaging-msixvc2-overview.md)  
[Getting started with MSIXVC2 for PC](packaging-getting-started-for-PC-msixvc2.md)  
[Getting started packaging for PC](packaging-getting-started-for-PC.md)  
[Getting started packaging for Xbox consoles](packaging-getting-started-for-console.md)  
[MicrosoftGame.config](../../game-config/MicrosoftGameConfig-toc.md)  
[Deploying your title to your Xbox dev kit (NDA topic)](../../../../gdk-dev/console-dev/dev-kits/concepts/deployment.md)  
[Automating package uploading](../package-uploader.md)