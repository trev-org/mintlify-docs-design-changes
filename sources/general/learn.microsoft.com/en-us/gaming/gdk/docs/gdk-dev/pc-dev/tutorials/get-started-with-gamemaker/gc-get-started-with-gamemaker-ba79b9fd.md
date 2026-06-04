# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/get-started-with-gamemaker/gc-get-started-with-gamemaker?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/get-started-with-gamemaker/gc-get-started-with-gamemaker?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Get started with GameMaker development for PC

Feedback

Summarize this article for me

This article describes how to prepare your GameMaker game to be published to the Microsoft Store.

- [Install the required software](https://learn.microsoft.com/#RequiredSoftware)
- [Download and install GameMaker Studio 2](https://learn.microsoft.com/#GameMakerStudio2)
- [GameMaker Studio 2 - Microsoft Game Development Kit (GDK) Extension](https://learn.microsoft.com/#GDKExtension)
- [Build the GDK Extension](https://learn.microsoft.com/#BuildingTheExtension)
- [Create a product in Microsoft Partner Center](https://learn.microsoft.com/#CreatingAProductInPartnerCenter)
- [Test the GDK Extension](https://learn.microsoft.com/#TestingTheGDKExtension)
- [Update MicrosoftGame.config](https://learn.microsoft.com/#UpdatingTheConfig)
- [Integrate the GDK extension into your own project](https://learn.microsoft.com/#IntegratingTheGDKInYourProject)
- [Test Xbox services in your game](https://learn.microsoft.com/#TestingXboxServices)
- [Publish](https://learn.microsoft.com/#Publishing)

## Install the required software

To use GameMaker Studio 2 with the Microsoft Game Development Kit (GDK), download the following software:

- [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/)
- [June 2024 GDK](https://github.com/microsoft/GDK/releases/tag/June_2024_Update_2) or later
- [CMake](https://cmake.org/download/)
 - Ensure the CMake installer updates the system paths. Otherwise, the extension project can't find CMake.

## Update Gaming Runtime Services (GRTS) and PC Bootstrapper

PC Bootstrapper is part of the PC game launch experience and was introduced in the May 2022 GRTS release. PC Bootstrapper depends on GRTS and relies on GRTS to function correctly. If GRTS is out of date on your development PC, sign-in attempts can fail and return an `E_FAIL` error.

For detailed guidance on PC Bootstrapper, including its role in the game launch process and how it interacts with GRTS, see [PC Bootstrapper overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-pc-bootstrapper?view=gdk-2604).

## Download and install GameMaker Studio 2

If you don't have GameMaker Studio 2 installed, download it from [https://www.yoyogames.com](https://www.yoyogames.com/) and then install it.

## Set up GameMaker Studio 2 GDK Extension

GameMaker Studio 2 GDK Extension is required to use the GDK with GameMaker Studio 2. For source code for the extension and setup instructions, see [https://github.com/YoYoGames/GMEXT-GDK](https://github.com/YoYoGames/GMEXT-GDK).

Use the steps in the README file at the root of the repo. These steps let you set up and build the GameMaker Studio 2 GDK Extension, enabling integration of Xbox services and features into GameMaker projects.

When you clone the GDKExtension repo, use the `--recurse-submodules` switch to include the submodules. Otherwise, required files are missing when you build the solution.

For information about the extension, see [https://github.com/YoYoGames/GMEXT-GDK/wiki](https://github.com/YoYoGames/GMEXT-GDK/wiki).

## Build the GDK Extension

Build the extension in Visual Studio 2022 by using the instructions in the README file at the root of the repo. The GDKExtension.sln file is required (<project\_root>/source/GDKExtension\_gml/extensions/GDKExtension/gdkextension\_windows/GDKExtension.sln). For detailed building instructions, see the building steps in the README file at the root of the repo.

## Create a product in Microsoft Partner Center

To create your Xbox services-enabled product in Partner Center, see [Setting up an app or game in Partner Center, for Managed Partners](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/portal-config/live-setup-partner-center-partners?view=gdk-2604). After you’ve created your product, you can either test Xbox services or publish a game to the Microsoft Store.

## Test the GDK Extension

The GDK Extension repo includes a sample project that demonstrates how to integrate the GDK plug-in with a GameMaker Studio 2 project. The sample project file is located at `source/GDKExtension_gml/GDKExtension.yyp`.

When you build the sample project in GameMaker (**Build**\>**Create Executable**), select **Package as Zip** to generate the MSIXVC package that's required to install the app. If you select **Package as Installer**, the build doesn't produce an MSIXVC package. The app can't access Xbox services.

When the build finishes, it opens a File Explorer window that shows the created .zip file and its subdirectory. The subdirectory has the same name as the package and contains the MSIXVC file.

In addition, the GameMaker Studio 2 output window displays a line of code with the full output path for the MSIXVC package, as shown in the following example.

`C:\Users\your-user-name\XboxDeveloperExperienceTe.GamePassSampleGame_1.0.0.0_x64__pmsd8ndztetqc-pkg`

To run the sample project so that it has access to Xbox services, install the package by using `wdapp install` with the name of your package as shown in the following example.

`wdapp install XboxDeveloperExperienceTe.GamePassSampleGame_1.0.0.0_x64__pmsd8ndztetqc.msixvc`

After the package installs, launch it by using the **Start** button.

## Update MicrosoftGame.config

The sample project uses a default MicrosoftGame.config file. To test the sample or your own GameMaker Studio 2 project with your project's Partner Center configuration information, update the MicrosoftGame.config file.

The sample's .config file is in source/GDKExtension\_gml/datafiles/MicrosoftGame.config.

To use Xbox services functionality, update your project's MicrosoftGame.config with your Partner Center project identity details by using the following steps.

1. Go to the [Partner Center dashboard](https://partner.microsoft.com/dashboard/windows/overview).
2. Select your game from the list of products.
3. Select the **Game setup** tab, and then select **Identity details**.
4. Select **Show Details** to expand the **Identity details** section.
5. Use the following values from the table in the **Identity details** section. Copy those values from Partner Center into the corresponding element and field in MicrosoftGame.config.

Expand table

| Name in Partner Center | MicrosoftGame.config |
| --- | --- |
| Xbox Title ID | TitleId |
| Package/Identity/Name | Identity->Name |
| Package/Identity/Publisher | Identity->Publisher |
| Xbox services > Xbox Settings > MSAAppId | MSAAppId |

Partner Center identity details determine the contents of your MicrosoftGame.config file, as shown in the following example.

Expand table

| Name in Partner Center | Example value |
| --- | --- |
| Xbox Title ID | 64353034 |
| Package/Identity/Name | 41336MicrosoftATG.Achievements2017Redux |
| Package/Identity/Publisher | CN=A4954634-DF4B-47C7-AB70-D3215D246AF1 |
| Xbox services > Xbox Settings > MSAAppId | 0000000000000000 |

### Example MicrosoftGame.config file excerpt

```
<?xml version="1.0" encoding="utf-8"?>
<Game configVersion="1">

  <Identity Name='41336MicrosoftATG.Achievements2017Redux' Version="1.1.0.0" Publisher='CN=A4954634-DF4B-47C7-AB70-D3215D246AF1' />

  <TitleId>64353034</TitleId>
  <MSAAppId>0000000000000000</MSAAppId>
  
  <ExecutableList>
    <Executable Name="Achievements2017_desktop.exe"
                TargetDeviceFamily="PC"
                Id="Game"/>
  </ExecutableList>
  
  <ShellVisuals DefaultDisplayName="Achievements2017 Desktop Sample"
                PublisherDisplayName="Xbox Advanced Technology Group"
                StoreLogo="Assets\StoreLogo.png"
                Square150x150Logo="Assets\Logo.png"
                Square44x44Logo="Assets\SmallLogo.png"
                Square480x480Logo="Assets\LargeLogo.png"
                Description="Achievements2017"
                ForegroundText="dark"
                BackgroundColor="#000000"
                SplashScreenImage="Assets\SplashScreen.png"/>
</Game>

```

For an overview of MicrosoftGame.config and information about its values, see [MicrosoftGame.config overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604).

## Integrate the GDK extension into your project

At a minimum, your project needs to call the following functions to integrate with the GDK.

- Call `gdk_init` to initialize the GDK. You must call `gdk_init` before you use any other GDK functionality.
- Call `gdk_update` once per frame while the GDK is active.
- Call `gdk_quit` to clean up the GDK when your project finishes and you no longer need any GDK functionality.

In addition, the GDK extension has the following modules that provide access to GDK functionality.

- **Base Module:** Provides a set of functions that control user/account selection for the player
- **Storage Module:** Provides a set of functions that control loading and saving data that's associated with a user.
- **Xbox services Module:** Provides functions to use features from Xbox services including stats, leaderboards, achievements, and rich presence.
- **In-App Purchases Module:** Provides functions that integrate GameMaker projects with Microsoft Store commerce systems through the GDK.

The guide included in the GDKExtension repo provides documentation for the GDK functions in the GDK Extension APIs section. The guide, as a .pdf file, is source/GDKExtension\_gml/datafiles/GDK\_Extension\_Documentation.pdf.

## Test Xbox services in your game

To test Xbox services functionality (for example, achievements) in your game, use a sandbox and test accounts that have access to that sandbox.

### Create a test account

To test any Xbox services features in your game, create test accounts that have access to your development sandbox. For instructions, see [Creating test accounts](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/develop/test-accounts/live-setup-testaccounts?view=gdk-2604).

### Switch your sandbox

1. Go to [Partner Center](https://partner.microsoft.com/dashboard/windows/overview).
2. To find your sandbox ID, select **Xbox services** and then select **Gameplay settings**.
 
 Note
 
 Your sandbox ID appears on the first tab of the **Gameplay settings** page. It uses a name like "ABCDEF.0".
 
3. Select the **Start** button.
4. Enter **Microsoft GDK Command Prompts**, and then select **Enter**.
5. Open the first command prompt, and then enter **XblPCSandbox.exe <your sandbox ID>**.
6. 6. After the command prompt launches several apps, sign in to the Xbox App by using your test account.

If you can sign in successfully, you can begin testing in your sandbox.

For more information about sandboxes, see [Xbox services Sandboxes overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/sandboxes/live-setup-sandbox?view=gdk-2604).

## Publish your game

To get ready to publish your game, ensure that you:

- Create an MSIXVC package by using **Package as Zip** in GameMaker Studio 2.
- Update your MicrosoftGame.config file with the correct values from the project you created in Partner Center.
- Integrate the GDK extension into your game.

After you complete the steps in this article, you're ready to publish your game. To submit it, go to [Partner Center](https://partner.microsoft.com/dashboard/windows/overview) and follow the instructions in the UI.

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