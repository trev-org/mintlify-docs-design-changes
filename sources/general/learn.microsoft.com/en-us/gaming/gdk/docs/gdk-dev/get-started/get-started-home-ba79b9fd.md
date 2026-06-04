# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/get-started-home?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/get-started-home?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Get started with the Microsoft Game Development Kit

Feedback

Summarize this article for me

This section describes the setup steps that are required for all Microsoft Game Development Kit (GDK) development and platform specific setup steps that are required to support developing Microsoft Game Development Kit (GDK) games for PC or Xbox. If you are developing for console, you'll need to install the Microsoft Game Development Kit with Xbox Extensions (GDKx).

To start using the Microsoft Game Development Kit (GDK) you should first go through the steps in [Set up your developer environment](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/dev-pc-setup?view=gdk-2604).

If you are developing for console, you should follow the steps in [Setting up your Xbox Development KitAuthorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/dev-kits/setup/setting-up-your-devkit?view=gdk-2604) after setting up your development environment. After your Xbox Development Kit is setup, optionally review [Running Xbox console samplesAuthorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/running-samples/running-samples?view=gdk-2604) and the [Microsoft Game Development Kit porting guide for Xbox OneAuthorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/porting/era/porting-guide-for-existing-era?view=gdk-2604).

If you are using a middleware engine, additional content to help you get started can be found in a set of [end-to-end guides](https://learn.microsoft.com/en-us/gaming/gdk/docs/tutorials/toc.json?view=gdk-2604). End-to-end guides are provided for Unity, Unreal, GameMaker and for custom game engines.

## Setting up your development environment

Set up your PC to prepare for development using the GDK or the GDK with Xbox Extensions by following the steps in [Setting up your development PC for Gaming Runtime title development](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/overviews/set-up-dev-pc?view=gdk-2604).

## Creating a new GDK project or integrating the GDK into an existing desktop project

The next step is to create a new GDK project if you are starting from scratch, or to integrate the GDK into an existing desktop project.

- To create a new project follow the instructions in [Starting development of a new title using GDK project templates](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-developing-new-titles-on-gamecore?view=gdk-2604)
- To integrate the GDK into an existing project follow the instructions in [Adding the GDK to an existing desktop project](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-add-to-existing-project?view=gdk-2604)

## Preparing to develop for Xbox services

In order to make use of features such as achievements and cloud saves, you'll need to integrate Xbox services functionality into your game.

For information about developing with Xbox services, see [Getting started with Xbox services](https://learn.microsoft.com/en-us/gaming/gdk/docs/archive/services-archive/live-getstarted-nav?view=gdk-2604).

We recommend installing the [Xbox app](https://www.xbox.com/apps/xbox-app-on-pc) to help manage Xbox services sign-in on your PC.

If your title supports Xbox services multiplayer functionality, Xbox Game Bar must be installed ([install from Microsoft Store](https://www.microsoft.com/p/xbox-game-bar/9nzkpstsnw4p)).

Note

Xbox Game Bar is automatically included in most Windows 10 versions. For testing, Xbox Game Bar should always be updated to the most recent version.

## Creating a Partner Center project and configuring your game to use it

You won't be able to test your Xbox services functionality until you have created a Partner Center project for your game and configured your game to use the values from your Partner Center project

### Creating a product in Partner Center

Before you can test Xbox services functionality or publish a game to the Microsoft Store, you need to create your Xbox services-enabled product in Partner Center. For more information about Partner Center, see [Setting up an app or game in Partner Center, for Managed Partners](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/portal-config/live-setup-partner-center-partners?view=gdk-2604).

### Updating MicrosoftGame.config

The MicrosoftGame.config file that was created when you created your project in the **Creating a new GDK project or integrating the GDK into an existing desktop project** section has default values that allow early development on PC and Xbox without the need for further configuration until you start to use features in the Gaming Runtime, Microsoft Store, and title identity. In order to use Xbox services functionality you need to update your project's MicrosoftGame.config with your Partner Center project identity details.

1. Go to the [Partner Center dashboard](https://partner.microsoft.com/dashboard/windows/overview).
2. Select your game from the list of products.
3. Select the **Game setup** tab, and then select **Identity details**.
4. Select **Show Details** to expand the **Identity details** section.
5. Use the following values from the table in the **Identity details** section, and then copy those values from Partner Center into the corresponding element and field in MicrosoftGame.config.

Expand table

| Name in Partner Center | MicrosoftGame.config |
| --- | --- |
| Xbox Title ID | TitleId |
| Package/Identity/Name | Identity->Name |
| Package/Identity/Publisher | Identity->Publisher |
| Xbox services -> Xbox Settings -> MSAAppId | MSAAppId |

For example, the following identity details in Partner Center would result in your MicrosoftGame.config looking like the sample bellow:

Expand table

| Name in Partner Center | Example value |
| --- | --- |
| Xbox Title ID | 64353034 |
| Package/Identity/Name | 41336MicrosoftATG.Achievements2017Redux |
| Package/Identity/Publisher | CN=A4954634-DF4B-47C7-AB70-D3215D246AF1 |
| Xbox services -> Xbox Settings -> MSAAppId | 0000000000000000 |

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

See [MicrosoftGame.config overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604) for additional information on the values in MicrosoftGame.config.

## Testing Xbox services features

In order to test Xbox services features used by your game, you'll need to create one or more test accounts and switch to a development sandbox.

### Creating a test account

You'll need to create a test account with access to your development sandbox to be able to test Xbox services functionality. For more information about creating test accounts, see [Creating test accounts](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/develop/test-accounts/live-setup-testaccounts?view=gdk-2604).

### Switching your development sandbox

After you've created a test account, use the account to access your development sandbox by using the following steps.

1. To find your sandbox ID, go to [Partner Center](https://partner.microsoft.com/dashboard/windows/overview).
2. Navigate to your game.
3. Select **Xbox services** > **Gameplay settings** in the left navigation pane.

Note

Your sandbox ID is on the first tab in the upper-left corner of the **Gameplay Setting** page. It's named something like "ABCDEF.0".

1. Open the **Start** menu.
2. Enter **Microsoft GDK Command Prompts**, and then select **Enter** on your keyboard.
3. Open the first command prompt.
4. In the command prompt, enter **XblPCSandbox.exe \[your sandbox ID\]**.
5. After the command prompt launches several apps, sign in with your test account to the Xbox App.

If you're able to sign in successfully, you've created a test account and changed to your sandbox to begin testing. If you have trouble signing in, refer to the [Troubleshooting sign-in and sandboxes](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/develop/troubleshooting/live-troubleshoot-sandboxes?view=gdk-2604) for help.

### Remote PC testing

You may also find it helpful for testing to set up a remote test PC and configure remote debugging. For more information, see the [Set up a remote test PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/overviews/gr-configure-test-pc?view=gdk-2604) and [Remote Debugging a C++ project in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/debugger/remote-debugging-cpp?view=vs-2019) topics.

## Packaging your game

In order to publish your game you need to package it first. MSIXVC is the packaging format that's required by Microsoft Store. A packaged game requires a _MicrosoftGame.config_ file, which enables the title's identity and title-specific shell visuals in Microsoft Store. For more information, see [MicrosoftGame.config overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604).

To get started packaging your PC game, see [Getting started with packaging for PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-pc?view=gdk-2604).

To get started packaging your console game, see [Getting started with packaging for Console](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-console?view=gdk-2604).

Note

As of the March 2022 Gaming Services release, improvements have been made to how files are laid out on disc as a result of installing an MSIXVC package. These improvements make game files more discoverable and simplify management of installed MSIXVC games. For more information, see [Flat File Install overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-flatfileinstall?view=gdk-2604).

## Publishing

Once you're ready to publish, you'll need to submit your game in Partner Center. To submit your game, go to [Partner Center](https://partner.microsoft.com/dashboard/windows/overview) and follow the instructions in the UI.

## Helpful links

[Utilizing Microsoft Game Development Kit tools to install and launch your PC title](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/launching-on-pc?view=gdk-2604)

[Xbox Development and Test Kit OverviewAuthorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/dev-kits/devkit-contents?view=gdk-2604) 
Describes the Xbox development and test kits.

[Xbox Retail and Development Kit Hardware SpecificationsAuthorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/hardware/console-comparison?view=gdk-2604) 
Provides Xbox Series X, Xbox Series X Dev Kit, and Xbox Series S hardware specifications.

## In this section

[Set up your developer environment](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/dev-pc-setup?view=gdk-2604) 
Describes required setup steps common to developing games for both the Xbox console and the PC.

[Get started for GDK titles using PlayFab](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/playfab-integration/gc-gdk-playfab-toc?view=gdk-2604) 
Describes how to get started using PlayFab for Microsoft Game Development Kit (GDK) titles.

[Xbox ATG Engagement (NDA topic)Authorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/atg-engagement/atg-systems-engagement?view=gdk-2604) 
Describes how to engage with the Xbox Advanced Technology Group.

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

- Last updated on 03/10/2026