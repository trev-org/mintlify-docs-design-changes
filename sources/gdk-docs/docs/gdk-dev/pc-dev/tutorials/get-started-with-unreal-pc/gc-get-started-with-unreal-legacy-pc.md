---
author: jeffshi
title: "Unreal development for PC: get started (earlier versions)"
description: "Describes how to get started with Unreal (Legacy) for PC development."
kindex:
- Getting started with Unreal for PC development (earlier versions)
- Unreal, getting started for PC development (earlier versions)
- Xbox services, Unreal (earlier version)
- Xbox services, Unreal for PC development (earlier version)
- Xbox services, Unreal development for PC (earlier version)
- 'Xbox services, Unreal development for PC: get started (earlier version)'
ms.author: jeffshi
ms.topic: article
edited: '09/13/2021'
ms.date: '08/01/2022'
permissioned-type: public
---

# Unreal development for PC: get started (prior to version 4.26)

Use this topic if you are preparing your game for publishing to the Microsoft Store on PC, and your game uses a version of Unreal Engine earlier than 4.26.

## Using an earlier version of Unreal Engine (prior to version 4.26)

If you are using Unreal Engine version 4.26 or later, please refer to [Get started with Unreal on PC](gc-get-started-with-unreal-pc.md)

If you are using Unreal Engine version 4.25 or earlier, and you cannot upgrade to version 4.26 or later, you can still integrate with key Xbox ecosystem experiences using the import libraries of the Gaming Runtime and the Xbox Services API (XSAPI).

These import libraries allow games to call into Gaming Runtime APIs and XSAPI directly, without having to add a GDK platform target to the game project.

### Add headers and import libraries for Gaming Runtime and XSAPI

1. Find the build file for your Unreal project: /Source/(ProjectName)/(ProjectName).Build.cs

1. Add the line below to define the **_GAMING_DESKTOP** macro

    ```csharp
        PublicDefinitions.Add("_GAMING_DESKTOP");  // For Unreal 4.12 or earlier, use "Definitions.Add()" instead
    ```

1. Add the following include paths

    ```csharp
        // Add the include path for Gaming Runtime
        PublicIncludePaths.Add(@"C:\Program Files (x86)\Microsoft GDK\241000\GRDK\GameKit\Include");
        // Add the include path for XSAPI
        PublicIncludePaths.Add(@"C:\Program Files (x86)\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\Include");
    ```

> For Microsoft GDK (June 2024) or earlier use: *C:\Program Files (x86)\Microsoft GDK\230300\GRDK\ExtensionLibraries\Xbox.Services.API.C\DesignTime\CommonConfiguration\Neutral\Include*

1. Add the following library paths for the import libraries

    ```csharp
        // Add the import library for Gaming Runtime
        PublicAdditionalLibraries.Add(@"C:\Program Files (x86)\Microsoft GDK\241000\GRDK\GameKit\Lib\amd64\xgameruntime.lib");
        // Add the import library for XSAPI
        PublicAdditionalLibraries.Add(@"C:\Program Files (x86)\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\Lib\Release\Microsoft.Xbox.Services.142.GDK.C.Thunks.lib");
    ```

> For Microsoft GDK (June 2024) or earlier use: *C:\Program Files (x86)\Microsoft GDK\230300\GRDK\ExtensionLibraries\Xbox.Services.API.C\DesignTime\CommonConfiguration\Neutral\Lib\Release\Microsoft.Xbox.Services.141.GDK.C.Thunks.lib*

> [!NOTE]
> Include paths and library paths might be different on your machine depending on GDK version and install location.

### Access Gaming Runtime and XSAPI from C++ code files

1. Determine where you would like to add the integration for things like sign-in and unlocking achievements

1. Add headers for Gaming Runtime and XSAPI

    ```cpp
        // When using Unreal Engine 4.15 or later
        THIRD_PARTY_INCLUDES_START
        
        #include "XGameRuntimeInit.h" // For Gaming Runtime 
        #include "xsapi-c\services_c.h"  // For XSAPI

        // When using Unreal Engine 4.15 or later
        THIRD_PARTY_INCLUDES_END
    ```

1. Integrate with service calls.  See examples below:

* [How to: best practice to sign in a user](../../../../features/common/user/xuser_howto_best_practice_signing_in.md)
* [Updating title-managed Achievements](../../../../services/player-data/achievements/title-managed/how-to/live-how-to-update-achievements.md)


### Creating a product in Partner Center  

Before you can test Xbox services functionality or publish a game to the Microsoft Store, you need to create your Xbox services-enabled product in Partner Center. For more information about Partner Center, see [Setting up an app or game in Partner Center, for Managed Partners](../../../../services/fundamentals/portal-config/live-setup-partner-center-partners.md).


### Create a MicrosoftGame.config file for your game

For the game to sign-in to Xbox services, you need to include a **MicrosoftGame.config** file in the game package and fill in the "MSAAppId" and "TitleId" fields with the values for the Partner Center project you created in the last step.
The easiest way to create the config file is to use the [MicrosoftGame.config Editor](../../../../features/common/game-config/MicrosoftGameConfig-Editor.md)\
For more information about the MicrosoftGame.config file, please refer to [MicrosoftGame.config overview](../../../../features/common/game-config/MicrosoftGameConfig-Overview.md)

> [!NOTE]
> Make sure that the MicrosoftGame.config file is placed in the same directory containing your game's primary executable file.

### Create and register your game package

To sign-in to Xbox services from your game and test the service integration, you need to create a package and register it.

1. Access the packaging dialog box by selecting **File** > **Package Project** > **Windows** > **Windows (64-bit)**.

1. Choose a folder for the build output from the **File Explorer** dialog box, and then select **Select Folder**.

1. Launch your game with wdapp.

    ```cpp
        wdapp launch {full path to the game's executable in the same directory containing the MicrosoftGame.Config file}
    ```

1. Alternatively, you can register the package with wdapp and then launch the game from Start menu.

    ```cpp
        wdapp register {full path to the directory containing the MicrosoftGame.Config file}
    ```

> [!NOTE]
> Double clicking the executable directly will not work for the purpose of signing into Xbox services.

## See also

[Unreal development forums](https://forums.unrealengine.com/development-discussion/xbox-one-development)\
[Troubleshooting sign-in and sandboxes](../../../../services/develop/troubleshooting/live-troubleshoot-sandboxes.md)