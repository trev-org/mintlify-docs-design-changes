# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# MicrosoftGame.config overview

Feedback

Summarize this article for me

_MicrosoftGame.config_ is a manifest file that's used to store game-specific configuration information. It's used during the packaging of your game for ingestion and publishing through Microsoft Store, as well as for registering information about the game during local iteration on loose-file builds during game development.

This topic explains the purpose and use of _MicrosoftGame.config_, as well as its relationship to _AppXManifest.xml_. It also explains some caveats that are related to the use of _MicrosoftGame.config_ in this release of the Microsoft Game Development Kit (GDK).

## What is MicrosoftGame.config?

Each game that's distributed through Microsoft Store must include a manifest that declares at a minimum the title's identity, the publisher name, and a set of title-specific shell visuals (strings, icons, and images) that are used to display the game's name and graphical representation in Microsoft Store and shell (for console) and Start menu, taskbar, and other places in the Windows Shell (for PC). Additionally, a game can implement optional features such as downloadable content (DLC), which rely on configuration values that are also stored in the game's manifest. The name of the manifest file is _MicrosoftGame.config_.

## Why create a new manifest schema?

Each package in Microsoft Store contains a manifest called _AppXManifest.xml_. Its schema has evolved over many years to accommodate a broad range of application features and scenarios.

With _MicrosoftGame.config_, game developers interact with a simpler, [gaming-centric manifest schema](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604) that is more accessible, less error-prone, and more productive. When the developer packages or registers a game, tools perform validation on the contents of the _MicrosoftGame.config_ and generate a well-formed _AppXManifest.xml_ on behalf of the game developer. The generated `AppXManifest` is included in the resulting package.

Note

As of the March 2022 Microsoft Game Development Kit (GDK), the Game configVersion has been updated from 0 to 1 for new titles created with this Microsoft Game Development Kit (GDK) and future releases. Existing titles may opt into this version update to take advantage of these improvements. For more information, please see [MicrosoftGame.config Reference (sample MicrosoftGame.config and schema)](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604).

## Available documentation

In the offline documentation file for the Microsoft Game Development Kit (GDK) (GDK.chm), you can find documentation about _MicrosoftGame.config_ in the locations that are shown in the following table.

Expand table

| Topic location | What's covered |
| --- | --- |
| [MicrosoftGame.config](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-toc?view=gdk-2604) | Provides overview information about _MicrosoftGame.config_ and its role in game registration and packaging |
| [MicrosoftGame.config Editor](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-editor?view=gdk-2604) | Provides an overview of the UI tool that allows for easier editing of the _MicrosoftGame.config_ file, in addition to automatically syncing title Ids, names and key values from its associated Partner Center project |
| [Development environment and tools](https://learn.microsoft.com/en-us/gaming/gdk/docs/archive/gc-tools-toc?view=gdk-2604) | Discusses the use of [wdapp.exe](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604) and [xbapp.exe (NDA topic)Authorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-console/commandlinetools/xbapp?view=gdk-2604) to register loose-file builds and to launch your game |
| [Reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/gc-reference-toc?view=gdk-2604) | Provides [Reference details](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604) about the sample .config and schema for _MicrosoftGame.config_ |
| [Packaging](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging?view=gdk-2604) | Discusses the use of makepkg.exe to generate a package by using your _MicrosoftGame.config_ for [Console](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-console?view=gdk-2604) and [PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-pc?view=gdk-2604) |

## MicrosoftGame.config creation

When creating a new project for the Gaming.Desktop.x64, Gaming.Xbox.XboxOne.x64, or Gaming.Xbox.Scarlett.x64 platform, a _MicrosoftGameConfig.mgc_ is associated with your project in Visual Studio. It has default values that allow early development on PC and Xbox without the need for further configuration until you start to use features in the Gaming Runtime, Microsoft Store, and title identity.

When your project is built, the _MicrosoftGameConfig.mgc_ is renamed to _MicrosoftGame.config_ when copied to your project's output directory.

An example of this default _MicrosoftGameConfig.mgc_, for Xbox, is as follows.

```
<?xml version="1.0" encoding="utf-8"?>
<Game configVersion="1">

  <Identity Name="41336PublisherName.ExampleGame"
            Publisher="CN=A4954634-DF4B-47C7-AB70-D3215D246AF1"
            Version="1.6.0.0"/>

  <ExecutableList>
    <Executable Name="ExampleGame.exe"
                  Id="Game"/>
    <!--        TargetDeviceFamily="XboxOne" Or "Scarlett" | TargetDeviceFamily specifies what device the executable was built for.
                IsDevOnly="false" | IsDevOnly specifies if is a Development only executable.
                OverrideDisplayName="Xbox Game Override"
                OverrideLogo="GraphicsLogoOverride.png"
                OverrideSquare44x44Logo="SmallLogoOverride.png"
                OverrideSplashScreenImage="SplashScreenOverride.png" -->
  </ExecutableList>

  <ShellVisuals DefaultDisplayName="Example Game"
                PublisherDisplayName="Example Publisher"
                Square150x150Logo="GraphicsLogo.png"
                Square44x44Logo="SmallLogo.png"
                Description="Example Game"
                ForegroundText="light"
                BackgroundColor="#000040"
                SplashScreenImage="SplashScreen.png"
                StoreLogo="StoreLogo.png"/>

  <!-- <MSAAppId>0000000000000000</MSAAppId> | Required if TitleId is specified and Game configVersion = 1 is specified in the MicrosoftGame.config -->
  <!-- <TitleId>FFFFFFFF</TitleId> | Required if MSAAppId is specified and Game configVersion = 1 is specified in the MicrosoftGame.config -->

  <!-- <StoreId>9NTL0QDWZ4FS</StoreId> | StoreID specifies the store identity of this title.  Required in development so that commerce related APIs will function. -->

  <!-- <Resources> | Resources is a list of Language Locale pairs used to localize Shell Visuals.
        <Resource Language="en-us"/>
        <Resource Language="de-de"/>
        <Resource Language="es-mx"/>
    </Resources> -->

  <!-- <DevelopmentOnly> | DevelopmentOnly is a list of development-only properties.
      <DebugNetworkPortList>
        <DebugNetworkPort>4600</DebugNetworkPort> | DebugNetworkPort specifies an additional port to open for development on a Development Kit.
      </DebugNetworkPortList>
   </DevelopmentOnly> -->

  <!-- <PersistentLocalStorage>
        <SizeMB>322</SizeMB> | SizeMB specifies the size in MB of Persistent Local Storage.
    </PersistentLocalStorage> -->

</Game>
```

For more information on MicrosoftGame.config elements, please refer to online GDK documentation found at [MicrosoftGame.config](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-toc?view=gdk-2604) or you can find the MicrosoftGame.config topic in the System section of the offline GDK documentation.

Note

If you manually add a _Microsoftgame.config_ file to your project, you must make sure to change the file properties to be a `copy` file type.

### Manually adding a MicrosoftGame.config file

One or more MicrosoftGame.config files can also be added to your project manually. Adding a file manually can be done in two ways:

- By setting the appropriate properties on an existing file such that Visual Studio recognizes it as a MicrosoftGame.config file.
- By using an Item Template provided with the Microsoft Game Development Kit (GDK) C++ project system.

To use an existing file as a MicrosoftGame.config file:

- Set your configuration to the "Gaming.Xbox.XboxOne.x64", "Gaming.Xbox.Scarlett.x64" or "Gaming.Desktop.x64" platform.
- Add the _MicrosoftGame.config_ file for your game as a file in your Visual Studio project.
- In the properties for the _MicrosoftGame.config_ file, set Item Type to **Microsoft Game Config**, shown as follows.

![Adding MGCCompile Item Type to project](https://learn.microsoft.com/../../../../media/public-images/mgccompile.png?view=gdk-2604)

To add a new _MicrosoftGameConfig.mgc_ file using the Item Template:

- Right click on a project and select Add->New Item.
- The MicrosoftGameConfig.mgc template can be found in the Visual C++->Gaming->Microsoft Game Development Kit->Edition node of the tree, shown as follows.

![MicrosoftGame.config Item Template](https://learn.microsoft.com/../../../../media/public-images/gameconfig_itemtemplate.png?view=gdk-2604)

### Visual Studio project property for MicrosoftGame.config

Whenever a _MicrosoftGameConfig.mgc_ file is added to a project, either automatically when the project is created, or manually, a property (`MGCCompile`) is added to your Visual Studio project. The `MGCCompile` property is used by the project system to automate the following:

- Generation of a .pri file if you have localized string resources
- Renaming the _MicrosoftGameConfig.mgc_ file to _MicrosoftGame.config_ if necessary
- Copying your _MicrosoftGame.config_ to your output folder
- Registration of your _MicrosoftGame.config_ after the build
- Launching of your game with identity in the debugger

After this property is added, it should be included in your Visual Studio project file and can be seen as the following item group when inspecting the file directly.

```
  <ItemGroup>
    <MGCCompile Include="MicrosoftGame.Config" />
  </ItemGroup>
```

### Managing multiple MicrosoftGameConfig.mgc files in Visual Studio and MSBuild

A Microsoft Game Development Kit (GDK) Visual Studio project may have several MicrosoftGameConfig.mgc files associated with it. It's common to use different MicrosoftGameConfig.mgc files for different build configurations, or for Xbox and PC builds, for example. If you had previously used custom-build logic to manage multiple MicrosoftGameConfig.mgc files, this scenario is now directly supported by the project system.

A MicrosoftGameConfig.mgc file can be assigned to individual build configurations in two ways. First, the **Xbox Gaming Project Control tool window** includes support for [managing multiple MicrosoftGameConfig.mgc files (NDA topic)Authorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-console/visualstudio/xbox-gaming-project-control?view=gdk-2604#multiple_game_configs), shown as follows.

![Managing multiple MicrosoftGameConfig.mgc files in the Xbox Project Gaming Control](https://learn.microsoft.com/../../../../media/public-images/vs_pgc_mgc_default.png?view=gdk-2604)

Alternatively, MicrosoftGameConfig.mgc files can be assigned to configurations by editing the project file directly. Use the `DefaultApplyTo` element of the `MGCCompile` property to specify a default MicrosoftGameConfig.mgc file. This default file will be used for all configurations unless explicitly overridden. Use the `ApplyTo` element of the `MGCCompile` property to assign a configuration file to a particular build configuration.

The following snippet from a project file specifies MicrosoftGameConfig\_dev.mgc as the default configuration file. MicrosoftGameConfig\_dev.mgc will be used for all build configurations other than _Release_, for which an override (MicrosoftGameConfig\_release.mgc) has been specified.

```
<ItemGroup>
   <MGCCompile Include="MicrosoftGameConfig_release.mgc">
     <ApplyTo Condition="'$(Configuration)|$(Platform)'=='Release|Gaming.Xbox.XboxOne.x64'">True</ApplyTo>
   </MGCCompile>
   <MGCCompile Include="MicrosoftGameConfig_dev.mgc">
     <DefaultApplyTo">True</DefaultApplyTo>
   </MGCCompile>
</ItemGroup>
```

### IntelliSense support for MicrosoftGame.config

Modification of a _MicrosoftGame.config_ within Visual Studio now supports [IntelliSense](https://learn.microsoft.com/en-us/visualstudio/ide/using-intellisense) features. This allows for additional insights as shown in the following two screenshots.

Valid element names are automatically listed when an element is being authored. 
![Example of IntelliSense with MicrosoftGame.config: Valid element names are automatically listed when an element is being authored](https://learn.microsoft.com/../../../../media/public-images/gameconfig_intellisense.png?view=gdk-2604)

Warnings are present when an invalid element or invalid element value is present. 
![Example of IntelliSense with MicrosoftGame.config: Warnings are present when an invalid element or invalid element value is present](https://learn.microsoft.com/../../../../media/public-images/gameconfig_intellisense2.png?view=gdk-2604)

### Platform requirements for MicrosoftGame.config

When creating a _MicrosoftGame.config_ file for your title, you'll need to create one for each Microsoft Game Development Kit (GDK) platform (Gaming.Xbox.XboxOne.x64, Gaming.Xbox.Scarlett.x64, and Gaming.Desktop.x64). This is required to ensure that the element values being stored in the _MicrosoftGame.config_ have a one-to-one mapping with the platform that your executable is built against. This is primarily specified by the `TargetDeviceFamily` attribute in the `Executable` element within the _MicrosoftGame.config_ file. For more information, see the [Additional Element Details](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604) section in the reference topic.

When launching your title, it behaves differently based on the platform requirements, the device the title is being launched on, and the executable type, as seen in the following table.

Expand table

| MicrosoftGame.config presence | TargetDeviceFamily setting | Launch device | Action | Notes |
| --- | --- | --- | --- | --- |
| Yes | Xbox Series X|S | Xbox Series X|S | Launch natively on the Xbox Series X Dev Kit | |
| Yes | Xbox Series X|S | Xbox One | Returns an error (0x887e0002), indicating that the incorrect platform was launched on the launch device | |
| Yes | XboxOne | Xbox Series X|S | Launch with Microsoft Game Development Kit (GDK) back-compat VM on the Xbox Series X Dev Kit | |
| Yes | XboxOne | Xbox One | Launch natively on the Xbox One Development Kit | |
| Yes | Not defined | Xbox Series X|S | Launch natively on the Xbox Series X Dev Kit | |
| Yes | Not defined | Xbox One | Launch natively on the Xbox One dev kit | |
| No | N/A | Xbox Series X|S | Launch natively on the Xbox Series X Dev Kit | |
| No | N/A | XboxOne | Launch natively on the Xbox One dev kit | |
| Yes | PC | PC | Launch as a Win32 x64 with identity on PC | |
| Yes | Not defined | PC | Launch as a Win32 x64 with identity on PC | |
| No | N/A | PC | Launch as a Win32 x64 without identity on PC | |

Note

In the scenario where a Xbox Series X|S title launches on a Xbox Series X Dev Kit without a MicrosoftGame.config, it will re-use existing Microsoft Game Development Kit (GDK) VM state if applicable. As an example, if a back-compat Microsoft Game Development Kit (GDK) title (Xbox One on Xbox Series X|S) had launched prior to attempting to launch a Xbox Series X|S native title, it will run it using that same back-compat Microsoft Game Development Kit (GDK) VM. We recommended using a MicrosoftGame.config with TargetDeviceFamily configured to indicate the proper intent if you run into this scenario. ERA titles will run in a separate VM state and as such will not influence the Microsoft Game Development Kit (GDK) VM behavior in this scenario.

### Creating and editing a MicrosoftGame.config outside of Visual Studio

As noted above, Visual Studio provides many ways to create and manage your title's MicrosoftGame.config file. In addition to creating and editing within Visual Studio, there is a stand-alone tool that provides creation and authoring of the MicrosoftGame.config directly.

The [MicrosoftGame.config Editor](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-editor?view=gdk-2604) is a UI tool that enables easier authoring and editing of .config files. This editor also includes hooks into your title information in Partner Center to automatically pull down and sync information, such as your TitleId, MSAAppId and StoreId, by way of a Store Association Wizard. Feedback is welcome so please use the suggestion tool within the editor to let us know your thoughts.

## Launching a game without MicrosoftGame.config

In the Microsoft Game Development Kit (GDK), you can launch a PC game or an Xbox game without having a _MicrosoftGame.config_ present. This is allowed for early development ahead of creating a _MicrosoftGame.config_ and is intended to provide flexibility for when you want to opt in to features within the Gaming Runtime, Microsoft Store, and title identity. To ship a title with the Microsoft Game Development Kit (GDK), a _MicrosoftGame.config_ is required to create your title package ahead of submission to Microsoft Store. It is recommended to adopt and configure your title's _MicrosoftGame.config_ as soon as you start developing features that require the Gaming Runtime, Xbox services, Microsoft Store or title identity.

PC games that do not have a _MicrosoftGame.config_ can be built and launched by double clicking the built executable. They will run with no integration of Gaming Runtime features. For support of Gaming Runtime features, Title Identity, MSIXVC Packaging support and the capability to submit to the Microsoft Store - a _MicrosoftGame.config_ is required.

Xbox games that do not have a _MicrosoftGame.config_ will be able to utilize GDK tooling to deploy loose file builds, launch, debug and utilize a sub-set of Microsoft Game Development Kit (GDK) functionality out of the box. For supporting full Microsoft Game Development Kit (GDK) features, Title Identity, XVC Packaging support and the capability to submit to the Microsoft store - a _MicrosoftGame.config_ is required.

To launch your title, on Xbox, without a _MicrosoftGame.config_, you can:

- [xbapp.exe (NDA topic)Authorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-console/commandlinetools/xbapp?view=gdk-2604) launch.
- Use the Xbox Manager deploy/launch functionality.
- Launch the title from Developer Home (Dev Home) on your Xbox.

For more information about launching a Win32 PC game, see the following section.

## Launching a Win32 game

A Win32 PC game that uses no Gaming Runtime or gaming cloud services can be launched and/or debugged just like any other Windows executable. Simply click the game executable with your mouse or run the executable directly in a command-prompt window, and the game process is created.

Gaming services perform work on a game's behalf. To use Gaming Runtime or gaming cloud services, a game must provide contextual data. For example, a game can pass Xbox services a unique identifier called title identity, which allows the service to identify which game is granting achievements to players. Contextual information like title identity can be persistently stored in the Windows App Repository through a process called registration. It's through registration that a game also specifies which strings and logos the Windows Shell should use to represent the game in the application list of the Start menu.

Through an action called app-launch, a game process is created and the game is provided with access to its persistent contextual information from the app repository. If you don't app-launch the game, a process is created to run the game, but its context will be unavailable. This prevents the game from properly using Gaming Runtime and gaming cloud services.

You can app-launch your game in any of the following ways.

- Start menu (app list, app tile)
- Taskbar search (search results list/detail panel)
- [wdapp.exe](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604) launch
- Windows Device Portal (WDP): **Installed Apps** > **Start**

## Debugging a Win32 game

In the Microsoft Game Development Kit (GDK), Win32 PC games go through the registration and app-launch paths when selecting F5 to build and run. This brings this workflow up to the same standard that exists on Xbox.

With regards to Debug Installed App Package on Win32 PC, the Debug Installed App Package in Visual Studio doesn't add your game to its list of packages that can be debugged if the manifest with your game is called _MicrosoftGame.config_. Debug Installed App Package only recognizes your game as a package if a file named _AppXManifest.xml_ is present in the folder with your executable. To work around this, you can create a simple `AppXManifest` that contains valid values for your game and manually save it in the folder with your executable and _MicrosoftGame.config_.

## See also

[MicrosoftGame.config](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-toc?view=gdk-2604) 
[MicrosoftGame.config localization](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-localization?view=gdk-2604) 
[MicrosoftGame.config Editor](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-editor?view=gdk-2604) 
[MicrosoftGame.config Reference (sample MicrosoftGame.config and schema)](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604) 
[Overview of packaging](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging?view=gdk-2604)

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

- Last updated on 12/10/2025