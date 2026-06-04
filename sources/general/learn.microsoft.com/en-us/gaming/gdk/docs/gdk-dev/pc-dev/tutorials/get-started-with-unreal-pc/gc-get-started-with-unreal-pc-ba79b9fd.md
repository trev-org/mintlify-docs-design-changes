# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/get-started-with-unreal-pc/gc-get-started-with-unreal-pc?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/get-started-with-unreal-pc/gc-get-started-with-unreal-pc?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Get started with Unreal Engine for PC development

Feedback

Summarize this article for me

## Overview

This article describes how to get started with [Unreal Engine](https://aka.ms/ue_download) as you integrate Microsoft Game Development Kit (GDK) components into your project. It covers the different types of [Unreal Engine plug-ins](https://aka.ms/ue_plugins) and platform extensions, how to set them up, and what functionality is included within the provided plug-ins and extensions.

Epic Games maintains and distributes the GDK Platform Extensions and associated plug-ins.

Important

Epic Games released the Microsoft GDK plug-ins for Unreal Engine with [Unreal Engine 5.7](https://aka.ms/ue_release_notes). The plug-ins let you build GDK games on the Win64 platform. This approach provides a unified platform for your Windows builds, which reduces cook time, enables single executable scenarios, and improves compatibility with Unreal Engine plug-ins that work with Win64. _WinGDK no longer receives feature updates and is considered a legacy platform_. Epic Games provides a migration tool to port existing projects from WinGDK to Win64. For more information, see the [GDK documentation](https://aka.ms/ue_gdk_docs_plugins) from Epic Games.

## Prerequisites

To use the GDK Platform Extensions and GDK plug-ins for Unreal Engine, you need the following prerequisites.

- [Unreal Engine 4.27 or later](https://aka.ms/ue_download) (some plug-ins require later versions)
- [Visual Studio 2019 (16.9) or later](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/overviews/sdk-and-tools?view=gdk-2604#install-visual-studio)
- [Windows SDK (22000 or later)](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/overviews/sdk-and-tools?view=gdk-2604#IDWSDK)
- [Windows 10 (1809 or later) or Windows 11](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/overviews/set-up-dev-pc?view=gdk-2604#software-requirements)
- [April 2021 GDK Update 2 or later](https://aka.ms/gdkdl)

## Microsoft GDK plug-ins for Unreal Engine

Each GDK plug-in provides different capabilities when you enable it for your project. The plug-ins in this section are part of the GDK platform extensions that Epic Games distributes.

To access the Microsoft GDK Plug-ins and GDK Platform Extensions for Unreal Engine, you must be a member of an Xbox Developer program, like ID@Xbox. Request access to Unreal Engine’s Developer Community GDK group by using [this access request form](https://aka.ms/ue_gdk_access). Upon approval, you gain access to Unreal Engine source that includes GDK Platform Extensions.

Note

Joining an [Xbox Developer Program](https://aka.ms/gdk_id) and requesting access to the GDK plug-ins and GDK Platform Extensions is currently required for PC, Xbox Series X|S, and Xbox One development. If you have any issues, contact your Microsoft representative for assistance.

The key GDK plug-ins to consider are as follows.

Expand table

| Plug-in name | Platform support | Minimum engine version |
| --- | --- | --- |
| Microsoft GDK Runtime Plug-in for Unreal Engine | Win64 | Unreal Engine 5.7 or later |
| Microsoft GDK Store Plug-in for Unreal Engine | Win64 | Unreal Engine 5.7 or later |
| Online Subsystem GDK | Win64, WinGDK, Xbox One, Xbox Series X|S | Unreal Engine 4.27 or later |

**Microsoft GDK Runtime Plug-in for Unreal Engine:** Provides access to the GDK runtime functionality, like Xbox-compatible game saves and Xbox user selection. This plug-in is present in the GDK Platform folder as `MSGamingRuntime`.

**Microsoft Xbox Series XGDK Store Plug-in for Unreal Engine:** Provides automatic generation of .msixvc packages for submission to the Xbox PC App. This plug-in is present in the GDK Platform folder as `MSGameStore`.

**Online Subsystem GDK:** Provides GDK integration with the [Online Subsystem](https://aka.ms/ue_oss) from Unreal. This plug-in is an engine abstraction layer that provides common interface calls for key features like achievements, friends, and matchmaking. This plug-in is in all platform folders, including the GDK folder for Win64 support, as `OnlineSubsystemGDK`.

Additional GDK plug-ins that provide further functionality are as follows.

Expand table

| Plug-in name | Platform support | Minimum engine version |
| --- | --- | --- |
| Game Input Base | Win64, WinGDK, Xbox One, Xbox Series X|S | Unreal Engine 5.4 or later |
| Game Input (Windows) | Win64, WinGDK | Unreal Engine 5.4 or later |
| Xbox Common Game Input | Xbox One, Xbox Series X|S | Unreal Engine 5.4 or later |
| GDK Package Chunk Installer | Win64, WinGDK, Xbox One, Xbox Series X|S | Unreal Engine 5.7 or later |
| GDK Virtual Keyboard | Win64, WinGDK, Xbox One, Xbox Series X|S | Unreal Engine 5.7 or later |
| Windows Virtual Keyboard | Win64 | Unreal Engine 5.7 or later |

The Game Input (Windows), Game Input Base, and Xbox Common Game Input plug-ins provide integration with `GameInput` functionality within Unreal Engine. These plug-ins are structured as follows.

- GameInput (friendly name: Game Input Base)
 - Contains the core functionality and an interface for plug-ins lower in this list to implement
 - Platform: Win64
 - GameInput\_WinGDK, GameInput\_XB1, and GameInput\_XSX extend the GameInput plug-in to add support for their respective platform support (no code difference from parent)
- GameInputWindows (friendly name: Game Input (Windows))
 - Depends on GameInput and implements the interface from the GameInput plug-in
 - Platform: Win64
 - GameInputWindows\_WinGDK extends GameInputWindows to add support for the WinGDK platform (no code difference from parent)
- XboxCommonGDKGameInput (friendly name: Xbox Common GameInput)
 - Depends on GameInput and implements an interface from the GameInput plug-in
 - Platform: None specified
 - Equivalent to GameInputWindows but for the two Xbox platforms and different interface implementation (because of GameInput differences between platforms)
 - XboxCommonGDKGameInput\_XB1 and XboxCommonGDKGameInput\_XSX extend XboxCommonGDKGameInput to add support for their respective platforms (no code difference from parent)

The GDK Package Chunk Installer plug-in provides additional functionality to apply Intelligent Delivery when building your GDK package. The Win64 compatible plug-in is in the `Engine\Platforms\GDK\Plugins` folder. Platform-specific plug-ins with the platform suffix for WinGDK, Xbox One, and Xbox Series X|S exist within their respective platform folders.

The GDK Virtual Keyboard plug-in and Windows Virtual Keyboard plug-in provide functionality to invoke a virtual keyboard as part of your game. This functionality is especially important when considering gamepad scenarios on handheld devices.

The GDK Virtual Keyboard plug-in uses a GDK-specific API to enable this functionality. The Win64 compatible plug-in is in the `Engine\Platforms\GDK\Plugins` folder. Platform-specific plug-ins with the platform suffix for WinGDK (\_WinGDK), Xbox One(\_XB1), and Xbox Series X|S (\_XSX) exist within their respective platform folders.

## Unreal Engine and GDK Platform Extensions

The GDK-specific code within Unreal Engine is part of the GDK Platform Extensions. These extensions add to the base engine source and enable you to build your game by using the GDK for PC, Xbox One, and Xbox Series X|S. The extensions include a set of GDK platforms and GDK plug-ins that work with the engine to extend necessary functionality.

You need these extensions to start building your game by using the GDK. The structure of the GDK Platform Extensions is a single interdependent download. This structure means you also need to use the GDK with Xbox Extensions (GDKx), regardless of your target platform. Using the GDK on GitHub with these extensions isn't supported.

The extensions include `Engine\Platforms` source code. The GDK-specific platforms are as follows:

- WinGDK
- Xbox One
- Xbox Series X|S

Important

Don't use the WinGDK platform. It's a legacy option. Use the Microsoft GDK Store and Runtime plug-ins for the Win64 platform for all new PC GDK projects.

The GDK and XboxCommon folders provide shared code between platforms. GDK code is shared across all platforms, and XboxCommon code is shared across Xbox One and Xbox Series X|S platforms. You can find the plug-ins for each platform in the `Plugins` folder within each platform in the GDK Platform Extensions download.

For more information about Xbox One and Xbox Series X|S configurations, see the [GDK documentation](https://aka.ms/ue_gdk_docs) from Epic Games.

Note

If you're using Unreal Engine 4, **XboxOneGDK** appears instead of **XB1**. Epic Games renamed this platform to **XB1** in Unreal Engine 5.

## GDK and engine compatibility

Each Unreal Engine release includes [release notes](https://aka.ms/ue_release_notes) that specify what main GDK version the Unreal Editor supports. The Unreal Engine team tests this version to validate compatibility with the engine. For example:

**Figure 1. Unreal Engine release notes.**

![Unreal Engine release notes.](https://learn.microsoft.com/../../../../../media/public-images/unreal-guide/ue-relnote.png?view=gdk-2604)

The configuration file that defines this compatibility and the range of supported GDK versions is the `GDK_SDK.json` file in the `Engine\Platforms\GDK\Config` folder. For example:

```
{
    "MainVersion": "250402",
    "MinVersion": "240604",
    "MaxVersion": "250499",
}
```

If you modify the GDK version in this file, you can use newer GDKs. This approach lets you adopt a newer GDK than an Unreal Engine release. Although the Unreal Engine team strives to avoid compatibility problems, some GDKs might require engine modification to work. There's no guaranteed compatibility when you modify your maximum version beyond what Epic Games defined in the released version of this file.

## Project updates to work with GDK Platform Extensions

After acquiring the GDK Platform Extensions source, update your project files to access the GDK-specific platforms in your IDE. For more information, see [Update project files](https://aka.ms/ue_ide). Run the GenerateProjectFiles.bat file at the root directory of your engine version.

When you finish this step, you see options to build for each platform in your **IDE Solution Platform** dropdown list.

**Figure 2. Unreal Engine GDK platforms in Visual Studio IDE.**

![Unreal Engine GDK platforms in Visual Studio IDE.](https://learn.microsoft.com/../../../../../media/public-images/unreal-guide/ue-vs-ide.png?view=gdk-2604)

After rebuilding your editor, you see these platform settings and options available in the Unreal Editor. To test this feature, select the **Platforms** dropdown list and then confirm that **WinGDK**, **XB1**, and **XSX** exist in the list.

**Figure 3. Unreal Engine GDK platforms in Unreal Editor.**

![Unreal Engine GDK platforms in Unreal Editor.](https://learn.microsoft.com/../../../../../media/public-images/unreal-guide/ue-platforms-devices.png?view=gdk-2604)

For more information, see [Building Unreal Engine from Source](https://aka.ms/ue_build_source).

Important

The Microsoft GDK plug-ins for Unreal Engine let you build GDK games directly in the Win64 platform. This approach creates a unified PC build path across multiple storefronts. It eliminates the extra cooking steps and plug‑in incompatibilities that occur with the legacy WinGDK platform. _The Microsoft GDK plug-ins for Unreal Engine are the future for PC GDK integration within Unreal Engine_. For more information about them, and how to migrate your existing WinGDK project to Win64 GDK plug-ins via a migration script provided by Epic Games, see the [GDK documentation](https://aka.ms/ue_gdk_docs_plugins) from Epic Games.

## Add GDK plug-ins to your project

Note

A subset of GDK plug-ins are automatically enabled by default for Xbox One and Xbox Series X|S. For more information, see `UEBuildXboxCommon.cs` in the Unreal Build Tool (UBT) source.

After you acquire and set up the GDK Platform Extensions, you can start to configure your project to get started with the GDK. Each plug-in is available in the [Plugins UI](https://aka.ms/ue_plugins) in Unreal Editor under the Edit Menu.

When selecting a plug-in, ensure that you select the checkbox to enable it. Restart your Editor after you enable the plug-ins to ensure that they work correctly.

**Figure 4. Example GDK Plug-in being enabled in Unreal Editor.**

![Example GDK Plug-in being enabled in Unreal Editor.](https://learn.microsoft.com/../../../../../media/public-images/unreal-guide/ue-plugin.png?view=gdk-2604)

In addition to enabling plug-ins within Unreal Editor, ensure any [build target](https://aka.ms/ue_ubt_ref) you define also enables these plug-ins for compilation. Consider the following example for your Windows build target.

```
EnablePlugins.AddRange([
    "MSGameStore",
    "MSGamingRuntime",
    "OnlineSubsystemGDK",
]);
```

For information about setting up build targets with the GDK plug-ins for Unreal Engine, see the [GDK documentation](https://aka.ms/ue_gdk_docs_plugins) from Epic Games.

## Configure your GDK plug-ins for title-specific data

After setting up your GDK plug-ins and GDK platform extensions, update the Platform and Plugin settings in the **Project Settings** menu.

You can find the Xbox One and Xbox Series X|S platforms in the **Platform Settings**. The Microsoft GDK plug-ins for Unreal Engine are in the **Plugin Settings**.

**Figure 5. Unreal Engine GDK Platform and Plugins settings.**

![Unreal Engine GDK Platform and Plugins settings.](https://learn.microsoft.com/../../../../../media/public-images/unreal-guide/ue-settings-platform-plugin.png?view=gdk-2604)

Each platform and plug-in contains a similar set of settings that help you configure your [MicrosoftGame.config](https://aka.ms/gdk_gameconfig) file and packaging configuration.

**Figure 6. GDK Plug-ins Project Settings part 1.**

![GDK Plug-ins Project Settings part 1.](https://learn.microsoft.com/../../../../../media/public-images/unreal-guide/ue-settings1.png?view=gdk-2604)

Your local MicrosoftGame.config needs your product information, such as `Title ID` and `Store ID`, to work properly with the GDK and Xbox Services. Use the **Associate with Partner Center** option to sign in to a Microsoft account that has [Microsoft Partner Center](https://aka.ms/gdk_partner_center) access. This option automatically adds your product details to your local MicrosoftGame.config file, so you don't need to enter them manually.

In addition to MicrosoftGame.config setup, configure the packaging and installation options.

**Figure 7. GDK Plug-ins Project Settings part 2.**

![GDK Plug-ins Project Settings part 2.](https://learn.microsoft.com/../../../../../media/public-images/unreal-guide/ue-settings2.png?view=gdk-2604)

Beyond Platform and Plugin settings, ensure your [DefaultEngine.ini](https://aka.ms/ue_configfiles) has the necessary information. The MS Gaming (PC GDK) Plugin Settings automatically write this information into the section. Here's an example of the DefaultEngine.ini using the GDK plug-ins for reference.

Note

To specify any overrides in your Platform Engine .ini file (for example, WindowsEngine.ini), manually modify that file.

```
[/Script/MSGamingSupport.MSGamingSettings]
TitleId=00000000
PrimaryServiceConfigId=00000000-0000-0000-0000-000000000000
ProductId=ProductValue
ContentId=ContentIDValue
PackageName=PackageName
StoreId=0000000000
DefaultDisplayName=Test Game
PublisherName=CN=PublisherValue
PublisherDisplayName=Test Company
EKBID=EKBIDValue
MSAAppId=MSAppIdValue
bRequireXboxLive=True 
bUseSimplifiedUserModel=True 
ManifestVersion=1
```

To use the GDK Package Chunk Install plug-in for Intelligent Delivery, ensure that you specify it in your .ini file.

```
[StreamingInstall]
DefaultProviderName=GDKPackageChunkInstall
```

## Use the Online Subsystem GDK

The Online Subsystem GDK plug-in provides engine abstraction of key Xbox Services APIs to simplify game code written to do similar actions across many stores and platforms (for example, sign-in, store purchases, achievements, friends, matchmaking). Use [Online Subsystem](https://aka.ms/ue_oss) if you're building a GDK game.

To configure the Online Subsystem GDK, edit your DefaultEngine.ini (or Platform Engine .ini file) with additional details to ensure that it works properly for your game. Here's an example for the WindowsEngine.ini.

```
[OnlineSubsystem]
DefaultPlatformService=GDK

[OnlineSubsystemGDK] 
eEnabled=True
AchievementMode=2017
; to specify using title-managed achievements, must match configuration in Partner Center
StatsMode=2013
; to specify using event-based stats, must match configuration in Partner Center
PrimaryServiceConfigId=00000000-0000-0000-0000-000000000000
```

Achievement names used in Unreal Engine need to be mapped to the achievement IDs used in Partner Center. To map achievement names used in Unreal Engine, create a file named `Achievements.json` in the platforms\\GDK\\Config\\OSS\\ directory of your project (note that the path might not exist and you might need to create it yourself). `Achievements.json` contains a mapping for achievement names to their Partner center IDs. For example, if your project has 10 achievements named achievement 1 through achievement 10, `Achievements.json` looks like this.

```
{
    "AchievementEventName" : "NotUsedInAchievement2017",
    "AchievementMap" :
    {
      "achievement 1" : 1,
      "achievement 2" : 2,
      "achievement 3" : 3,
      "achievement 4" : 4,
      "achievement 5" : 5,
      "achievement 6" : 6,
      "achievement 7" : 7,
      "achievement 8" : 8,
      "achievement 9" : 9,
      "achievement 10" : 10
    }
}
```

For more information, see [Configuring your title-managed achievements in Partner Center](https://aka.ms/gdk_tm_achievements).

In addition to configuring your DefaultEngine.ini and setting up your `Achievements.json` file, pass `GDK_SUBSYSTEM` in your calls to `Online::GetSubsystem()`.

Note

The Online Subsystem GDK uses Microsoft Azure PlayFab Party directly through GDK PlayFabParty plug-ins as a Socket Subsystem.

## Use Visual Studio and Unreal Engine

Visual Studio provides additional functionality, as part of the Visual Studio Installer, for better integration with Unreal Engine. This functionality is included in the Game development with C++ workload. Two optional installation components, called _Visual Studio Tools for Unreal Engine_ and _Visual Studio debugger tools for Unreal Engine_, provide native `uplugin` support and the capability to debug Blueprint logic from within Visual Studio.

**Figure 8. Visual Studio Tools for Unreal Engine in Visual Studio Installer.**

![Visual Studio Tools for Unreal Engine in Visual Studio Installer.](https://learn.microsoft.com/../../../../../media/public-images/unreal-guide/ue-vs-install.png?view=gdk-2604)

For more information about the Visual Studio Tools for Unreal Engine, see [Install Visual Studio Tools for Unreal Engine](https://aka.ms/vs_tools_ue).

## Build, cook, and package your project

Use the [Unreal Automation Tool](https://aka.ms/ue_uat) to automatically build, cook, and package your game for each GDK platform. This tool also creates a package for your GDK plug-in integration by using the Win64 platform. To use this tool, follow the provided syntax.

```
RunUAT BuildCookRun -project=TestGame -Platform=Win64 -build -cook -stage -pak -archive -archivedirectory=C:\TestGame\ -package
```

You can build, cook, and package your game through the Unreal Editor. For detailed stages about this process, see [Build Operations: Cook, Package, Deploy, and Run](https://aka.ms/ue_build_stages).

Each platform requires a unique cook of your content to ensure that it works properly for the target platform. Go to the **Platforms** dropdown menu in the Unreal Editor and select **Cook Content** for the desired platform.

**Figure 9. Cook option within Unreal Editor.**

![Cook option within Unreal Editor.](https://learn.microsoft.com/../../../../../media/public-images/unreal-guide/ue-cook-editor.png?view=gdk-2604)

To package your game in Unreal Editor, go to the **Platforms** dropdown menu, and then select **Package Project** for the platform you want. This action creates an XVC or an MSIXVC package in your build output directory.

**Figure 10. Package option within Unreal Editor.**

![Package option within Unreal Editor.](https://learn.microsoft.com/../../../../../media/public-images/unreal-guide/ue-package-editor.png?view=gdk-2604)

## Testing your project

You can also use the Unreal Automation Tool to deploy and launch your build. To do so, use these flags.

```
RunUAT BuildCookRun [...]] -package -deploy -run
```

To test your standalone build, use the built-in **Launch** settings as part of the [Project Launcher](https://aka.ms/ue_projectlauncher) in Unreal Editor.

**Figure 11. Example Project Launcher profile.**

![Example Project Launcher profile.](https://learn.microsoft.com/../../../../../media/public-images/unreal-guide/ue-projectlauncher.png?view=gdk-2604)

For packages that you generate through the Unreal Editor UI, you need to use GDK tools to install and launch them outside Unreal Editor. Currently, the Project Launcher doesn't support installing and launching these packages. For information about how to do this task for PC GDK titles, see [Utilizing Microsoft Game Development Kit tools to install and launch your PC title](https://aka.ms/gdk_pc_launch).

By using the Microsoft GDK Plug-ins for Unreal Engine, you can use [Play In Editor (PIE)](https://aka.ms/ue_pie) to test your game with Xbox Services directly from within the Editor on the Win64 platform.

Note

There are some known limitations with the WinGDK platform and PIE support. We recommend standalone and packaged build testing for this platform.

## Additional information

### Using Microsoft Azure PlayFab with Unreal Engine

For more information about working with PlayFab, which includes direct integration and plug-ins to work within Unreal Engine, including Online Subsystem support, see the [PlayFab Unreal Engine Quick Start](https://aka.ms/pf_ue_quickstart) page.

### Windows handheld device detection

Unreal Engine 5.7 supports detection of Windows handheld devices via `FPlatformMisc::IsDeviceHandheld()`. This function returns `true` or `false` depending on the device state.

### Getting help

For Unreal Engine-specific support or questions, including questions related to the Microsoft GDK Plug-ins for Unreal Engine or the GDK Platform Extensions, see the [Epic GDK support forum](https://aka.ms/ue_gdk_forums).

If you need help with GDK-specific articles that aren't related to Unreal Engine integrations, post your questions on the [Xbox GDK forums](https://aka.ms/gdk_xbox_forums).

### Using earlier versions of Unreal Engine

If you're using Unreal Engine 4.26 or earlier, follow different steps to target the GDK. Additionally, you need to do more custom integration of platform features and packaging than with later versions of the Unreal Engine. Upgrade to Unreal Engine 4.27 or later for the best experience.

For more information about using the GDK with Unreal Engine 4.26 or earlier, see [Building GDK games for earlier versions of Unreal](https://aka.ms/ue_gdk_legacy).

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