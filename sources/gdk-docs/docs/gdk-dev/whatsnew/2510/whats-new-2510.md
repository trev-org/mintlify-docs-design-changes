---
author: dkushmerick
title: "What's new in the October 2025 Microsoft Game Development Kit (GDK)"
description: "Describes changes to features, tools, and documentation in the latest release."
kindex:
- Latest What's New
- What's New
- Release notes
ms.topic: article
edited: '09/03/2025'
ms.date: '09/03/2025'
permissioned-type: public
---
  
# What's new in the October 2025 Microsoft Game Development Kit  
  
The Microsoft Game Development Kit (GDK) is a complete set of tools, APIs, extensions, and programming models that can be used across current and future Microsoft Gaming platforms and initiatives. The GDK's design and features are driven by your feedback about how you like to develop games. For a complete introduction, see [Welcome to the Microsoft Game Development Kit](../../intro/welcome.md). 

Watch the following video for a quick look at what's new in the October 2025 GDK.

>[!VIDEO https://aka.ms/GDK-WhatsNewVideo]

Release notes for the current release of the GDK can be found in the [GDK/XDK Release notes space](https://aka.ms/gdkreleasenotes) on the Xbox Developer Forums.  

In addition to many bug fixes, this release includes the following new features.  

> [!IMPORTANT]  
> This article includes features that are public. For What's New information that requires NDA access, see [What's new in the October 2025 Microsoft Game Development Kit - NDA Features](whats-new-nda-2510.md).  
  
## Table of contents  
  
[Developer tools](#ID_TOOLS)  
[Input](#ID_INPUT)  
[System](#ID_SYSTEM)  
[Microsoft Azure PlayFab](#ID_PLAYFAB)  
[Samples](#ID_SAMPLES)  

___
<a id="ID_TOOLS"></a>

### Developer tools

#### Submission Validator automatic updates

Use the `/updatesubval` flag on `MakePkg` to check for a new version of Submission Validator. If it's available, the .zip file is downloaded and extracted, and the new version of SubmissionValidator.dll is copied to the `bin` directory (or to an alternate location if `/subvalpath` is specified).

#### Xbox Game Package Manager

Xbox Game Package Manager (XGPM) is a new desktop app that streamlines packaging Xbox games (in both XVC and MSIXVC) and uploading them to Microsoft Partner Center. 

**Features**

- **Unified tooling:** Combines the functionality of `MakePkg` and `PackageUploader` into a single, intuitive UI.
- **Smart packaging:** Automatically builds packages from loose files by using your installed GDK, creates default layouts for packaging, and supports custom overrides.
- **Simplified uploads:** Select your package, branch, and market group, and then upload them by using browser-based authentication&mdash;no client secrets or certificates are required.
- **Multi-tenant support:** Ideal for scenarios where Xbox games are codeveloped.
- **Accessibility and localization:** Fully supports narrator, high contrast, and tab-index navigation. Has a localized UI in en-US, ja-JP, zh-CN, and ko-KR.

#### wdcapturesession PC command-line tool

`wdcapturesession` is a new PC command-line tool for recording live video captures during game tests. This tool uses H264/High Efficiency Video Coding (HEVC) encoding at 30 frames per second (fps) to start and stop game captures on PC.  

#### MicrosoftGame.config schema updates

The schema for the MicrosoftGame.config file has been updated to support the specification of an ARM64 binary alongside the x64 binary in a game's package. 

A new `architecture` attribute has been added to the `Executable` element to specify whether the executable is an ARM64 binary or an x64 binary. The Microsoft Game Config Editor has been updated to support this new attribute.

#### Visual Studio 2026 Insiders compiler and linker

[Visual Studio 2026 Insiders]( https://devblogs.microsoft.com/visualstudio/visual-studio-2026-insiders-is-here/) is now available. The October 2025 GDK has a set of MSBuild files for building your game with the Visual Studio 2026 Insiders compiler and linker. These files are in the `<GDK edition>\xbox\build\vs2026` folder.

#### Visual Studio project templates

Visual Studio project templates have been removed from the GDK installer. Modern functional replacements can now be downloaded at [https://aka.ms/GDKVSExtensions](https://aka.ms/GDKVSExtensions).

___
<a id="ID_INPUT"></a>
  
### Input  

#### GameInput updated on console

`GameInput` has been updated on console to support the latest features that are available on PC. For more information, see [Overview of GameInput](https://aka.ms/gameinput).
___

<a id="ID_SYSTEM"></a>

### System

#### Cross-platform Gaming Runtime

The cross-platform gaming runtime allows games on different storefronts (e.g. Steam) and devices
(e.g. Steam Deck) to easily incorporate Microsoft Gaming Services into their game.
The cross-platform gaming runtime allows developers to link a module into their game that enables:

- Xbox sign-in
- Xbox profile information
- Xbox friends list
- Xbox presence
- Xbox game invites

The cross-platform gaming runtime also supports cross-progression using
**PlayFab Game Saves**. On Windows devices, game saves are seamlessly uploaded
outside of the game’s lifetime. On other devices, such as Steam Deck, that don’t support
out-of-game lifetime upload, upload happens within the game, using the same API calls.
PlayFab Game Saves supports Xbox, Steam, and publisher-based player identities.

> [!NOTE]
> The use of Xbox cross-platform services in non-Microsoft storefronts may require the game to seek permission from the storefront owner.

#### GDK installer directory structure layout UX 

This release of the GDK contains a new directory structure layout UX of the GDK installer to simplify the developer experience and enable future extensibility. It simplifies integration, supports a growing list of target platforms, and improves the support for both stock MSBuild platforms and non-Microsoft build systems.

You can still install the previous layout by using an option in the GDK setup. This layout will be removed in a future GDK to reduce its hard-drive footprint and overall download size. The current estimate for removal is one year from when the October 2025 GDK is released.
___
<a id="ID_PLAYFAB"></a>

### Microsoft Azure PlayFab

#### PlayFab Unified SDK

The PlayFab Unified SDK is now included with the GDK. This SDK combines components from previously separate SDKs into a single, modernized package. It delivers consistent APIs, modern memory and thread handling, and automatic token refresh.

This SDK builds on improvements that were introduced in the 2023 PlayFab Services C/C++ SDK and extends them across all PlayFab components. The PlayFab Unified SDK uses a modular design. This enables you to integrate only the features that your project needs while providing a more streamlined and reliable development experience.

#### PlayFab Game Saves

PlayFab Game Saves is now available, starting with Xbox and Steam. This feature enables players to continue their game&mdash;with their progress intact&mdash;as they switch platforms, devices, and stores. 

Game Saves handles file synchronization and conflict resolution, helps players maintain a single point of progression, and fully supports offline play. To request Game Saves access, select your title in [PlayFab Game Manager](https://developer.playfab.com/), navigate to Progression &#124; Game Saves, and then join the waiting list. For more information, see the [Game Saves documentation](https://aka.ms/playfab-game-saves).

___
<a id="ID_SAMPLES"></a>
  
### Samples  
  
For a complete list of samples included with the GDK, see [Microsoft Game Development Kit samples](../../development-downloads/gdk-samples-home.md).

