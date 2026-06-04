---
author: dkushmerick
ms.author: dmcmahon
title: "What's new in the Microsoft Game Development Kit (GDK)"
description: "Describes changes to features, tools, and documentation in the latest release."
kindex:
- What's New
- Release notes
ms.topic: article
edited: '04/09/2026'
ms.date: '03/31/2026'
permissioned-type: public
monikerRange: '>=gdk-2510'
---

# What's new in the Microsoft Game Development Kit (GDK)

<!-- ========================================================= -->
<!-- GDK 2604 CONTENT                                          -->
<!-- Visible when view >= gdk-2604 (2604, 2610, etc.)           -->
<!-- ========================================================= -->

:::moniker range=">=gdk-2604" 

<!--- # What's new in the April 2026 Microsoft Game Development Kit  --->

## What's new in the April 2026 Microsoft Game Development Kit

The Microsoft Game Development Kit (GDK) is a complete set of tools, APIs, extensions, and programming models that can be used across current and future Microsoft Gaming platforms and initiatives. The GDK's design and features are driven by your feedback about how you like to develop games. For a complete introduction, see [Welcome to the Microsoft Game Development Kit](../intro/welcome.md).

In addition to many bug fixes, this release includes the following new features.    
  
## Table of contents  
  
[Developer tools](#developer-tools)  
[System](#system)  
[Samples](#samples)  

___

### Developer tools

#### Visual Studio 2026 GDK support

Beginning with the April 2026 GDK, Visual Studio 2026 is now supported for GDK development. Both the Professional edition and the Enterprise edition are supported.

Visual Studio project templates are available as follows.

* Console development templates are installed by the GDK.  
* PC development templates can be installed from [Microsoft GDK Templates](https://aka.ms/gdktemplates).

Visual Studio 2026 introduces a new servicing and support model based on yearly releases and a two-year servicing timeline. For more information, see [Visual Studio Product Lifecycle and Servicing](/visualstudio/releases/2026/servicing-vs).

For more information about Visual Studio 2026, see [Visual Studio 2026 is here: faster, smarter, and a hit with early adopters](https://devblogs.microsoft.com/visualstudio/visual-studio-2026-is-here-faster-smarter-and-a-hit-with-early-adopters/).

#### MSIXVC2 packaging format preview

MSIXVC2 is a new packaging format for PC games built with the GDK. It delivers significantly smaller base game packages and content updates, faster packaging, and a simplified upload workflow as compared to the original MSIXVC format. MSIXVC2 is available as a preview starting with the April 2026 GDK.

Key improvements include the following:

- **Smaller content updates**. Byte-level change tracking eliminates alignment padding and chunk-boundary constraints, reducing update sizes by 64–94% compared to MSIXVC.
- **Faster packaging**. makepkg2 pack delivers 2x–8x speedups, depending on title size.
- **Reduced package overhead**. Over 90% reduction in fixed hash-tree overhead; supports partial download instead of full re-download with every update.
- **Built-in compression**. Transparently compresses assets for transport and storage; installed uncompressed on the player's device.
- **Per-version encryption**. Each package version is encrypted with its own keys, keeping content secure until release.
- **One-command upload**. Combines packaging and uploading into a single step with makepkg2 upload.

For more information, see [MSIXVC2 packaging overview](../../features/common/packaging/overviews/packaging-msixvc2-overview.md).

> [!NOTE]
> We recommend not using this new packaging format in production. MSIXVC2 submissions to the public will be blocked by certification tests until the general availability (GA) release, which is currently targeted for the October 2026 GDK.

#### Submission Validator update

Submission Validator version 10.0.26100.7798 is now available. Download the latest version from [https://aka.ms/currentsubvalzip](https://aka.ms/currentsubvalzip).

> [!IMPORTANT]
> Starting with this release, the legacy download location at aka.ms/gdkdl has been retired. Submission Validator is now available exclusively from [https://aka.ms/currentsubvalzip](https://aka.ms/currentsubvalzip). The previous version (10.0.26100.6877) remains valid until April 30, 2026.

> [!NOTE]
> As announced in March 2025, updating Submission Validator is now simplified. Programmatic, unauthenticated updates are available directly in your pipeline. For download and update instructions, see [Updating Submission Validator](../../features/common/packaging/subval/submissionvalidator.md#ID4E4E).

This release includes the following changes.

- **MSIXVC2 developer preview packages now report a FAILURE.** Submitting MSIXVC2 packages to certification isn't supported during the preview period. This aligns with the certification test block that's described in the [MSIXVC2 packaging format preview](#msixvc2-packaging-format-preview) section above.
- `ILI_ArchitectureArm64Mismatch` no longer reports a FAILURE for Arm64EC (emulation compatible) binaries.
- The `ILI_ArchitectureAmd64Mismatch` and `ILI_ArchitectureX86Mismatch` warnings now only apply to executables that are listed in the MicrosoftGame.config file.
- If Submission Validator encounters a crash during symbol bundling, it now reports an `ILI_SymbolHandlingInitError` INFO message and continues validation instead of exiting early.

#### XblPcSandbox.exe command-line tool improvements

The `XblPcSandbox.exe` command-line tool now has quality-of-life improvements to enhance the sandbox-switching experience for PC game developers.

Key improvements include the following:

- **Clearer sandbox switch output**. `XblPcSandbox.exe` now displays the current sandbox value before and after a switch operation. This display makes it immediately obvious if the intended sandbox was applied. In addition, an indeterminate progress spinner is now available to show when the tool is actively working.
- **New /retail switch**. A dedicated `/retail` command-line option is now available to make it easier to switch your PC back to RETAIL mode. Previously, this was only documented as passing RETAIL as the sandbox name, which could be missed.
- **Automatic sandbox casing correction**. The sandbox switching logic now automatically corrects the casing of sandbox names (for example, retail to RETAIL). This logic reduces errors that are caused by case sensitivity. Most sandbox names are in all capital letters.
- **New /feedback switch**. A `/feedback` option is now available that deep links directly to the Feedback Hub, making it easier to report issues or provide feedback about the sandbox-switching experience.
- **Enhanced Help text with troubleshooting guidance**. The Help usage text now includes troubleshooting suggestions and a link to the troubleshooting documentation. Solutions to common sandbox issues are now available directly from the command line.

For more information, see [PC Sandbox Switcher (XblPCSandbox.exe)](../../tools/tools-services/live-pc-sandbox-switcher.md).

#### Xbox PIX support for file mapping in DirectStorage events

Xbox PIX now supports packaged file mapping in DirectStorage events. This matches the existing File IO event mapping behavior and properly indexes the list of files along with their offsets and descriptions.

#### Flexible MicrosoftGame.config Editor

MicrosoftGame.config Editor no longer enforces game configuration schema validation when opening files. If a file is valid XML, the editor attempts to load it by using the correct node structure, even if the configuration itself is invalid. This allows invalid configuration files to be opened and fixed in the editor instead of failing to load.
___

### System

#### Native ARM64 build GDK support preview

The GDK now supports a preview of native ARM64 build libraries for binaries that ship with the GDK. These binaries include the [PlayFab Unified SDK (v2)](/gaming/playfab/sdks/unified-sdk/overview), the Xbox Services API, the Xbox Authentication Library, Game Chat 2, and `xCurl`. This support enables you to produce fully native ARM64 game builds.

For more information see, [A simplified GDK directory structure](../pc-dev/overviews/gdk-new-layout.md).

> [!NOTE]
> This preview is intended for testing only. We recommend not using it in production.
___
  
### Samples  

For a complete list of samples included with the Microsoft Game Development Kit (GDK), see [Microsoft Game Development Kit samples](../development-downloads/gdk-samples-home.md).
:::moniker-end
<!-- ========================================================= -->
<!-- GDK 2510 CONTENT                                          -->
<!-- Visible only when view=gdk-2510                           -->
<!-- ========================================================= -->

:::moniker range="gdk-2510"

<!--
PASTE THE FULL CONTENT FROM:
gdk/docs/gdk-dev/whatsnew/2510/whats-new-2510.md

Keep:
- Original headings
- Original bullet ordering
- Original wording

Do NOT include front matter from the old file.
-->

## What's new in the October 2025 Microsoft Game Development Kit  
  
The Microsoft Game Development Kit (GDK) is a complete set of tools, APIs, extensions, and programming models that can be used across current and future Microsoft Gaming platforms and initiatives. The GDK's design and features are driven by your feedback about how you like to develop games. For a complete introduction, see [Welcome to the Microsoft Game Development Kit](../intro/welcome.md). 

Watch the following video for a quick look at what's new in the October 2025 GDK.

>[!VIDEO https://aka.ms/GDK-WhatsNewVideo]

Release notes for the current release of the GDK can be found in the [GDK/XDK Release notes space](https://aka.ms/gdkreleasenotes) on the Xbox Developer Forums.  

In addition to many bug fixes, this release includes the following new features.  

> [!IMPORTANT]  
> This article includes features that are public. For What's New information that requires NDA access, see [What's new in the October 2025 Microsoft Game Development Kit - NDA Features](2510/whats-new-nda-2510.md).  
  
## Table of contents  
  
[Developer tools](#developer-tools)  
[Input](#input)  
[System](#system)  
[Microsoft Azure PlayFab](#microsoft-azure-playfab)  
[Samples](#samples)  

___

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

[Visual Studio 2026 Insiders](https://devblogs.microsoft.com/visualstudio/visual-studio-2026-insiders-is-here/) is now available. The October 2025 GDK has a set of MSBuild files for building your game with the Visual Studio 2026 Insiders compiler and linker. These files are in the `<GDK edition>\xbox\build\vs2026` folder.

#### Visual Studio project templates

Visual Studio project templates have been removed from the GDK installer. Modern functional replacements can now be downloaded at [https://aka.ms/GDKVSExtensions](https://aka.ms/GDKVSExtensions).

___
  
### Input  

#### GameInput updated on console

`GameInput` has been updated on console to support the latest features that are available on PC. For more information, see [Overview of GameInput](https://aka.ms/gameinput).
___

### System

#### Cross-platform Gaming Runtime

The cross-platform gaming runtime allows games on different storefronts (for example, Steam) and devices
(for example, Steam Deck) to easily incorporate Microsoft Gaming Services into their game.
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

### Microsoft Azure PlayFab

#### PlayFab Unified SDK

The PlayFab Unified SDK is now included with the GDK. This SDK combines components from previously separate SDKs into a single, modernized package. It delivers consistent APIs, modern memory and thread handling, and automatic token refresh.

This SDK builds on improvements that were introduced in the 2023 PlayFab Services C/C++ SDK and extends them across all PlayFab components. The PlayFab Unified SDK uses a modular design. This enables you to integrate only the features that your project needs while providing a more streamlined and reliable development experience.

For more information, see [PlayFab Unified SDK](/gaming/playfab/sdks/unified-sdk/overview)

#### PlayFab Game Saves

PlayFab Game Saves is now available, starting with Xbox and Steam. This feature enables players to continue their game&mdash;with their progress intact&mdash;as they switch platforms, devices, and stores. 

Game Saves handles file synchronization and conflict resolution, helps players maintain a single point of progression, and fully supports offline play. To request Game Saves access, select your title in [PlayFab Game Manager](https://developer.playfab.com/), navigate to Progression &#124; Game Saves, and then join the waiting list. For more information, see the [Game Saves documentation](https://aka.ms/playfab-game-saves).

___
  
### Samples  
  
For a complete list of samples included with the GDK, see [Microsoft Game Development Kit samples](../development-downloads/gdk-samples-home.md).

:::moniker-end