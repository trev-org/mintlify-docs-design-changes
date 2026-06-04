# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/get-started-with-unity-pc/gdk-unity-end-to-end-guide?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/get-started-with-unity-pc/gdk-unity-end-to-end-guide?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Getting started with Unity

Feedback

Summarize this article for me

## Overview

This article explains how to get started with Unity as you integrate Microsoft Game Development Kit (GDK) components into your project. It outlines the different types of Unity packages, shows you how to set them up, and describes the functionality included in each package.

The latest [Microsoft GDK packages for Unity](https://aka.ms/unity_gdk_announce), codeveloped by Microsoft and Unity, provide the capability to target Windows x64, Xbox Series X|S, and Xbox One console devices with the same configuration and code base.

## Prerequisites

Important

Unity provided an important security update advisory that affects specific versions of the Unity Engine. For more information, see [Unity Security Update Advisory](https://aka.ms/unity_security).

To use the GDK packages for Unity, you need the following prerequisites:

- [Unity Editor Version 2021.3 or later](https://aka.ms/unity_gdk_engine)
- [Visual Studio 2019 (16.9) or later](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/overviews/sdk-and-tools?view=gdk-2604#install-visual-studio)
- [Windows SDK (22000 or later)](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/overviews/sdk-and-tools?view=gdk-2604#IDWSDK)
- [Windows 10 (1809 or later) or Windows 11](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/overviews/set-up-dev-pc?view=gdk-2604#software-requirements)
- [October 2023 GDK Update 4 or later](https://aka.ms/gdkdl)
- [Valid Unity license if targeting Xbox consoles](https://aka.ms/unity_gdk_license)

For more information about package requirements, see the Unity [requirements and installation document](https://aka.ms/unity_gdk_requirements).

## GDK packages for Unity

Unity distributes several GDK packages. Each package adds specific capabilities to your project and to the Unity Editor. You can find the GDK Unity packages and more details on the Unity [download portal](https://aka.ms/unity_gdk_downloads).

You must belong to an Xbox Developer program, like ID@Xbox, and request access to the Unity Xbox Discussions site from your Microsoft representative before you can access the GDK Xbox console packages. The packages necessary to start PC development are available publicly and are found at [Microsoft GDK Package Releases](https://aka.ms/unity_gdk_packages).

The full list of packages is as follows.

- Microsoft GDK API package for Unity (PC and console)
- Microsoft GDK Tools package for Unity (PC and console)
- Microsoft GDK Tools for Xbox package for Unity (Console only)
- GXDK Input System package for Unity (Console only)
- Game Core Render Pipeline package for Unity (Console only)

The [Microsoft GDK API package for Unity](https://aka.ms/unity_gdk_api) provides C# wrappers for native APIs that run on PC, Xbox Series X|S, and Xbox One. The package provides access to Xbox network services, including achievements, cloud saves, and leaderboards.

The [Microsoft GDK Tools package for Unity](https://aka.ms/unity_gdk_tools) provides the necessary integration for development workflows within Unity to create a Microsoft Game Configuration file and package your PC game with the GDK for submission to the Microsoft Store.

The **Microsoft GDK Tools for Xbox package for Unity** extends the GDK Tools package with integration for developer workflows for Xbox Series X|S and Xbox One consoles, including packaging your console GDK game for submission to the Microsoft Store.

The **GXDK Input System package for Unity** provides console-specific functionality to the Unity Input System when targeting Xbox Series X|S or Xbox One consoles.

The **Game Core Render Pipeline package for Unity** provides console-specific functionality to use the Unity Scriptable Render Pipelines (SRP) such as the Universal Render Pipeline (URP) or the High Definition Render Pipeline (HDRP) on Xbox Series X|S or Xbox One consoles.

## Unity Editor add-ons for console

Install the Unity‑provided **Editor Add-ons provided by Unity**. It enables the build profiles and project settings that are required to configure, build, deploy, and launch your game on Xbox Series X|S and Xbox One consoles directly in the Unity Editor.

These add-ons are .exe installers that provide additional functionality to each editor. You must install them on each machine using the Unity Editor to unlock these capabilities. After you install the add-ons, the associated Unity Editor version in the Installs tab of the Unity Hub lists them as supported capabilities. Any projects using that version of the Unity Editor can now enable Xbox Series X|S and Xbox One GDK project settings and build profiles.

The following screenshot shows the Unity 6 version of the Unity Editor with both add-ons installed.

**Figure 1. Unity 6 version of the Unity Editor with both add-ons installed.**

![Unity 6 version of the Unity Editor with both add-ons installed.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-both-add-ons.png?view=gdk-2604)

## Package, add-on, GDK, and engine compatibility

Get the **Microsoft GDK API and Tools packages for Unity** from the Unity Registry through the Package Manager in the Unity Editor. The version that appears aligns with the active Unity Editor version when you use Unity 2021.3.47f1, 2022.3.55f1, 6000.0.31f1, or a later release.

For details about GDK and engine‑version compatibility for each release of the GDK API package for Unity, see the documentation at [Microsoft GDK Package Releases](https://aka.ms/unity_gdk_packages_1.30). These packages support the GDK obtained from [GitHub](https://github.com/microsoft/GDK) and the GDK obtained from the [Xbox Developer Downloads portal](https://aka.ms/gdkdl).

Get the **Microsoft GDK Tools for Xbox package for Unity** from a direct download link from the Unity Xbox Discussions site. This package is compatible with Unity Editor versions 2021.3.45f1, 2022.3.49f1, 6000.0.22f1 or later. For more information about requirements for this package, see this [Unity Xbox forum post](https://aka.ms/unity_gdk_tools_console). This package is only supported with the GDK that's downloaded from the [Xbox Developer Downloads portal](https://aka.ms/gdkdl). This package appears in the Unity Editor only when you install the **Xbox Series X|S and Xbox One Add-ons for Unity Editor**.

Get the **GXDK Input System package for Unity** from a direct download link from the Unity Xbox Discussions site. For more information about requirements for this package, see this [Unity Xbox Discussions post](https://aka.ms/unity_gdk_input_console). This package is only supported with the GDK downloaded from the [Xbox Developer Downloads portal](https://aka.ms/gdkdl). This package requires the **Xbox Series X|S and Xbox One Add-ons for Unity Editor** to be installed before it appears in the Unity Editor.

Get the **Game Core Render Pipeline Package for Unity** from a direct download link from the Unity Xbox Discussions site. For more information about requirements for this package, see this [Unity Xbox Discussions post](https://aka.ms/unity_gdk_render_console). This package is only supported with the GDK downloaded from the [Xbox Developer Downloads portal](https://aka.ms/gdkdl). This package requires the **Xbox Series X|S and Xbox One Add-ons for Unity Editor** to be installed before it appears in the Unity Editor.

Get the **Xbox Series X|S and Xbox One Add-ons for Unity Editor** from a direct download link from the Unity Xbox Discussions site. For more information about requirements for these add-ons, see this [Unity Xbox Discussions post](https://aka.ms/unity_gdk_downloads) These add-ons are only supported with the GDK downloaded from the [Xbox Developer Downloads portal](https://aka.ms/gdkdl).

## Integrate packages into your project

To get started with the Microsoft GDK API and Tools packages for Unity, follow these steps.

1. Select the **Start** button, and then select **Package Manager**.
2. Select the **Unity Registry** option from the right column.
3. In the **Search** box, enter **gdk**, and then wait for the list to refresh.
4. Select the **Microsoft GDK API** package, and then select **Install**.
5. After the installation is finished, select the **Microsoft GDK Tools** package and then select **Install**.
6. Close the Package Manager after both packages are installed.

Here's an overview of searching for the packages in the Unity registry in Unity 6.

**Figure 2. Overview of searching for the packages in the Unity registry in Unity 6.**

![Overview of searching for the packages in the Unity registry in Unity 6.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-searching-for-packages.png?view=gdk-2604)

For the Xbox console-specific packages, get them from the Unity Xbox Discussions download portal. Add these packages locally to the project.

1. Select the **Start** button, and then select **Package Manager**.
2. Select **+**, and then select **Add package from tarball**.
3. Go to your .tgz extension downloaded package.
4. Select it, and then install it to your project.

**Figure 3. Packages locally installed in a project in Unity 6.**

![Packages locally installed in a project in Unity 6.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-packages-locally-installed.png?view=gdk-2604)

The Unity packages are associated with your Unity project. When you create a new Unity project, you must reacquire and reinstall these packages for that project. Users who open a Unity project that already includes these packages don't need to download them again from the registry to use the functionality.

Note

You need to install the Xbox Series X|S and Xbox One add-ons for each Unity Editor installation. These add-ons unlock the capabilities to configure, build, deploy, and launch on these devices.

## Configure your project to be GDK aware

This section covers the initial integration of your project to be GDK aware.

### Create GDK settings asset

After you install the Microsoft GDK API and Tools packages for Unity in your project, you get additional menu options. One of these options is a GDK-specific set of assets, which you use to generate a GDK Settings Asset. This step adds GDK-specific settings to your Project Settings that you use to configure your GDK product directly within Unity. For more information about managing your GDK Settings in Unity, see [GDK Settings](https://aka.ms/unity_gdk_settings).

Example of GDK Settings Asset being created in Unity 6.

**Figure 4. GDK Settings Asset being created in Unity 6.**

![GDK Settings Asset being created in Unity 6.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-creating-gdk-settings-asset.gif?view=gdk-2604)

If you install the GDK Tools for Xbox package and the Xbox add-ons, the GDK Settings have multiple tabs for each platform. You can create platform-specific settings and .config files from them. Your project might contain more than one GDK Settings Asset, but only one asset can be active at a time.

The following shows an example of GDK Settings being created for Xbox Series X|S and Xbox One in Unity 6.

**Figure 5. GDK Settings being created for Xbox Series X|S and Xbox One in Unity 6.**

![GDK Settings being created for Xbox Series X|S and Xbox One in Unity 6.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-creating-gdk-settings-asset-xs-one.gif?view=gdk-2604)

### Create a Microsoft Game Config Asset

After you create your GDK Settings Asset, add a Microsoft Game Config Asset to your project. This step generates the necessary files to configure your project to work with GDK-specific features and capabilities. For more information about managing your Microsoft Game Configuration file in Unity, see [Microsoft Game Configuration file](https://aka.ms/unity_gdk_gameconfig).

The following shows an example of a Microsoft Game Config Asset being created in Unity 6.

**Figure 6. Microsoft Game Config Asset being created in Unity 6.**

![Microsoft Game Config Asset being created in Unity 6.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-creating-game-config-asset.gif?view=gdk-2604)

### Associate your Microsoft Game Config with your GDK Asset

After you create your Microsoft Game Config, open the **GDK Project Settings** and associate your Microsoft Game Config with the project. This step ensures that the .config file is used for that platform as part of the build and packaging steps.

The following example shows associating your Microsoft Game Config in Unity 6.

**Figure 7. Associating your Microsoft Game Config in Unity 6.**

![Associating your Microsoft Game Config in Unity 6.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-associating-game-config.gif?view=gdk-2604)

### Edit your Microsoft Game Config Asset

The GDK Tools package integrates with the Unity Editor, allowing you to view and update the Microsoft Game Config asset directly in Unity. When you select this asset in the Project window, its configurable GDK settings appear in the Inspector. For more information about managing your Microsoft Game Config file in Unity, see [Microsoft Game Configuration file](https://aka.ms/unity_gdk_gameconfig).

The following example shows editing your Microsoft Game Config file in Unity 6:

**Figure 8. Editing your Microsoft Game Config in Unity 6.**

![Editing your Microsoft Game Config in Unity 6.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-editing-game-config.gif?view=gdk-2604)

### Associate your GDK game with your Microsoft Partner Center product

As part of the GDK Tools package integration, the Microsoft Game Config Editor enables you to use a built-in wizard to easily associate your GDK game with your Partner Center product. Sign in by using a Microsoft account that has permission to access the Partner Center product you want to associate your GDK game with.

After your project successfully associates with Partner Center, the wizard shows which values it automatically maps from Partner Center to your project’s Microsoft Game Config Asset. For more information about creating your product in Partner Center and accessing Xbox service capabilities, see [Setting up an app or game at Partner Center, for Managed Partners](https://aka.ms/gdk_partnercenter).

Note

For more information about necessary permissions for each user to properly associate with the Microsoft Store, see [Associating with the Microsoft Store](https://aka.ms/unity_gdk_storewizard).

The following example shows starting the Store Association wizard within Unity 6.

**Figure 9. Starting the Store Association wizard within Unity 6.**

![Starting the Store Association wizard within Unity 6.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-store-association-wizard.png?view=gdk-2604)

Note

To properly use the Store Association wizard, get the Publisher information from the **Package/Identity/Publisher** row in Partner Center, and then enter it in the **Publisher** field in the Microsoft Game Config Editor.

## Use C# wrappers for access APIs

The Microsoft GDK API package for Unity provides a set of C# wrappers for native GDK APIs. Use these wrappers to directly access GDK APIs in your Unity project. For more information about accessing GDK APIs, see [Using C# wrappers for GDK APIs in your Unity project](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/get-started-with-unity-pc/features/gdk-unity-api-wrappers?view=gdk-2604).

The following example shows the C# wrappers within the Microsoft GDK API package for Unity in the Packages window.

**Figure 10. C# wrappers within the Microsoft GDK API package for Unity in the Packages window.**

![C# wrappers within the Microsoft GDK API package for Unity in the Packages window.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-csharp-wrappers-packages-window.png?view=gdk-2604)

## Using Visual Studio and Unity

Visual Studio provides a Gaming Workload, as part of the Visual Studio Installer, for direct integration with Unity. For more information about the Visual Studio Tools for Unity extension, see [Quickstart: Configure Visual Studio for cross-platform development with Unity](https://aka.ms/unity_visualstudio).

## Using samples

Three sets of Unity samples are available for referencing code when you’re building your project.

### Unity registry samples

The first set of samples comes with the Microsoft GDK API package for Unity. After you download the package, these samples are in the **Samples** tab of the Microsoft GDK API entry in the Unity Registry. This image shows where the samples appear in the Unity Editor.

**Figure 11. Samples tab within the Microsoft GDK API entry in the Unity registry after being downloaded.**

![Samples tab within the Microsoft GDK API entry in the Unity registry after being downloaded.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-registry-samples.png?view=gdk-2604)

These samples demonstrate basic interactions with systems like Achievements, Cloud Saves, Game Saves, In-Game Store behavior, Leaderboards, Sign-In, Speech Synthesizer, and User behavior. For more information about these samples, see [Samples overview](https://aka.ms/unity_gdk_samples).

Note

These samples have dependencies on the Unity Input System package. For more information about the Unity Input System and how to install the package, see [Input System](https://aka.ms/unity_gdk_input).

### Unity GDK samples

In addition to the samples provided from the Unity registry, the GDK download includes a set of samples. They demonstrate more advanced use of APIs and are as follows.

- **UnityAchievements:** Demonstrates usage of `XblAchievement` APIs to query and update achievement progress.
- **UnityInGameStore:** A complete in-game store experience that you can configure to run as any game. It demonstrates most `XStore` APIs to query catalog offerings, user entitlements, and license products.
- **UnityLeaderboardsTitleManaged:** Demonstrates the use of title-managed leaderboards to update and query user statistics, and to query social and global leaderboards.
- **UnitySimpleMPSD:** A basic multiplayer session sample that uses Multiplayer Session Directory (MPSD) and SmartMatch APIs for session management and matchmaking.
- **UnityRumble:** A simple multiplayer game that uses Multiplayer Manager (MPM) and Microsoft Azure PlayFab Party to create, join, matchmake, and leave multiplayer sessions. It updates session state, shares gameplay data, and communicates over chat.
- **UnityRumblePlayFabMultiplayer:** Similar to UnityRumble but uses Microsoft Azure PlayFab Multiplayer for session management and matchmaking instead of MPM.
- **UnitySimpleHttpCall:** Demonstrates the use of Xbox networking HTTP calls to send and receive messages as a string or byte array.
- **UnitySimpleWebSockets:** Demonstrates use of HTTP Client Web Sockets to send and receive binary or string messages to a preconfigured web socket end point.
- **UnitySimplePLM:** A basic sample that shows how to detect and respond to process lifetime management (PLM) events.
- **UnityAssetWorkflow (Xbox only):** Demonstrates the use of Xbox console resources and tooling APIs to facilitate quick iteration of game assets.

You can view and get these samples from the [Xbox GDK Samples GitHub](https://aka.ms/gdk_unity_samples). In addition to these samples, three private samples (UnityRumble, UnityRumblePlayFabMultiplayer, and UnityAssetWorkflow) are available from the [Xbox Developer Downloads portal](https://aka.ms/gdkdl).

Here's an example of the sample name in the list of builds under the GDK file type in the download portal.

**Figure 12. Sample name in the list of builds under the GDK file type in the download portal.**

![Sample name in the list of builds under the GDK file type in the download portal.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-sample-name-in-download-portal.png?view=gdk-2604)

### Unity HandheldBestPractices sample

The **Unity HandheldBestPractices sample** provides best practices and managed C# code examples that you can integrate into your Unity games when you build for Windows handheld devices, like ROG Xbox Ally.

You can get this sample from the [Unity Handheld Best Practices Sample](https://aka.ms/hhexpsample_unity) GitHub site.

Note

The Unity Handheld Best Practices sample doesn't use the GDK directly. Instead, it shows how to use Windows APIs effectively when you build for Windows handheld gaming scenarios.

## Build and package your project

This section describes how to build and package your project in Unity.

### Localization and packaging settings

As part of your GDK settings for the Windows platform, specify whether Unity builds shell visuals, includes localized assets, and creates a package during the build process. You don't need to configure specific **Build Profiles** settings for Windows packaging. For more information about packaging settings, see [Package creation settings and encryption methods](https://aka.ms/unity_gdk_msixvc).

The following image shows an example of setting those GDK Settings values in Unity 6.

**Figure 13. Setting the GDK Settings values in Unity 6.**

![Setting the GDK Settings values in Unity 6.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-setting-gdk-settings.png?view=gdk-2604)

For console, your project includes the [Microsoft GDK Tools for Xbox](https://aka.ms/unity_gdk_tools_console) package. Set **Shell Visuals Mode** to **Copy Only**. This setting ensures that the Microsoft Store images copy into the build folder before packaging, so you don't need to copy them yourself.

To set the package encryption method for console, select **Project Settings** > **Player** > **Publisher Settings**. The Xbox targets include a **Package Encryption** setting. Use the **Development** option when building a package that you want to sideload for local testing (when using **Build and Deploy** or `xbapp install`). Use **Submission** for packages that you upload to Partner Center and then install from the Microsoft Store.

Unity configures console package generation on the **Build Profiles** page. Change the target platform to **Xbox One** or **Xbox Series**, depending on the device you plan to build for. To create a local package that you can side‑load, set **Build Type** to **Development player**. To produce a package for uploading to Partner Center, set **Build Type** to **Master player**. Then set **Deploy Method** to **Package**.

For a console sideloadable package built with **Development** encryption, you can use the **Build and Run** option to deploy to your console. This option creates a loose folder build, runs makepkg.exe with test signing, and installs and launches the package on your default Development Kit.

A package built with the **Submission** encryption can't be sideloaded. It must be uploaded to Partner Center, and then installed from the Microsoft Store.

### Build profiles

Each target platform has its own build profile. Windows reads the GDK Settings file and generates an MSIXVC package in the MSIXVC folder when the build is finished, if the Windows GDK settings specify a package. For more information about build profiles, see [Build an application with the Microsoft GDK API package](https://aka.ms/unity_gdk_build).

For console platforms, you specify the deployment settings, including packaging, in the platform-specific build settings. These settings also include additional build, deployment, and debugging options. After the build is finished, the output directory contains an XVC package in an XVC folder.

This example shows the build profiles for each platform in Unity 6.

**Figure 14. Viewing each platform's build profiles in Unity 6.**

![Viewing each platform's build profiles in Unity 6.](https://learn.microsoft.com/../../../../../media/public-images/unity-guide/unity-viewing-platform-build-profiles.gif?view=gdk-2604)

### Test your project in Play Mode

To ensure GDK-based projects work properly in Play Mode, you need to follow additional steps and considerations. For more information about the steps that are required to properly use Play Mode, see [Test your project in Play mode](https://aka.ms/unity_gdk_pie).

## Additional information

### Using PlayFab with Unity

For more information about working with PlayFab, which includes direct integration and packages to work within Unity, see the [Unity3D (C#) SDK for PlayFab](https://aka.ms/unity_playfab).

### Windows handheld device detection

As of July 2025, Unity provides support for detecting if a device is a Windows handheld device. This capability was added to SystemInfo.deviceType within the Unity Engine and was included as part of the following releases.

- Unity 6000.2.0b10
- Unity 6000.1.12f1
- Unity 6000.0.54f1

### Getting help

For help with any issues, see the [Unity Xbox Discussions](https://aka.ms/unity_gdk_forums). If you're not part of the Xbox Developers program and are using the public packages for Windows development, use the [Unity Windows Discussions](https://aka.ms/unity_windows_forums).

If you need help related to GDK-specific articles that aren't specific to Unity integration, post your request on the [Xbox GDK forums](https://aka.ms/gdk_xbox_forums).

### Known issues

For a list of known issues related to the GDK API package for Unity, see [GDK API package for Unity: Issues and limitations](https://aka.ms/unity_gdk_knownissues).

For a list of known issues related to the GDK Tools package for Unity, see [Microsoft GDK Tools package: Issues and limitations](https://aka.ms/unity_gdk_tools_knownissues).

### Using earlier versions of Unity

The Microsoft GDK API and Tools Packages support Unity 2021.3 and later versions of the Unity Editor. Use a supported version of it to get integrated tools, full feature support, and reliable build and run capabilities across all platforms.

If you're using an earlier version of Unity, you can reference the C# wrappers that are provided in the GDK API package to provide your own project-specific interfaces with GDK native APIs. You can also use the Unity Editor to create the MicrosoftGame.config file, set up localization, configure shell visuals, and package your game.

These processes are manual and don't provide direct Unity Editor integration. If you're unable to upgrade your Unity Editor version and need more guidance about options, contact your Microsoft representative.

### Deprecated packages

Microsoft no longer distributes the [GDK Unity Package (PC Only)](https://github.com/microsoft/gdk-unity-package) on GitHub. This package is deprecated. Unity developers now use the Microsoft GDK API and Tools packages for Unity. If you have any questions about the GDK Unity Package (PC Only), reach out to your Microsoft representative.

If you're using the previous GDK Unity Package (PC Only) and need steps for how to migrate, see the [Upgrade guide](https://aka.ms/unity_gdk_upgrade).

For more information about Unity-provided packages that are now deprecated, see the [Unity Xbox forums](https://aka.ms/unity_gdk_downloads).

---

## Feedback

Was this page helpful?

Yes No No

Need help with this topic?

Want to try using Ask Learn to clarify or guide you through this topic?

Ask Learn Ask Learn

Suggest a fix?

---

## Additional resources

---

- Last updated on 03/07/2026