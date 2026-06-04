# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-pc?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-pc?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Getting started with packaging titles for a PC by using the MSIXVC packaging tools

Feedback

Summarize this article for me

Tip

**MSIXVC2 is now available as a preview in the April 2026 GDK.** MSIXVC2 is a next-generation PC packaging format that delivers dramatically smaller updates, faster packaging, and a simplified upload workflow. If you're starting a new PC title or evaluating packaging options, see [MSIXVC2 packaging overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-msixvc2-overview?view=gdk-2604) and [Getting started with MSIXVC2 for PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-pc-msixvc2?view=gdk-2604). The steps on this page apply to the original MSIXVC format, which continues to be fully supported.

Use the following steps to create an MSIXVC package that you can sideload for testing on your target test development PC and then submit to Partner Center for publishing.

## Check the minimum requirements for the Windows 10 version

Windows 10 version 18362 or later is required for deployment testing of MSIXVC-based packages.

## Evaluate your packaging needs

If your package has any of the following properties or needs any of the following features, see the [Other packaging considerations and advanced features](https://learn.microsoft.com/#msixvc_advanced_features) section later in this article.

- **Framework package dependencies** 
 If your app relies on redistributable software, you can use prepackaged versions of many of these prerequisites from Microsoft, which you can declare as dependencies and install automatically.
 
- **Custom installation actions** 
 If your app relies on redistributable software that doesn't have a framework package available, you can chain-install these dependencies.
 

## Prepare your content

Place all source material for your title in a single directory. Remove any files that the MSIXVC packaging system doesn't support or that are unsuitable for shipping in retail packages.

- Program database (PDB) files.
 
- Universal Windows Platform (UWP) and APPX footprint files, including AppxSignature.p7x and AppxBlockMap.xml. 
 If you previously shipped as a UWP in Microsoft Store, you might have some of these files associated with your APPX or MSIX package. Remove these files.
 
- Any references to other PC game stores: assets, binaries, and more.
 

## Get your product's identity info from Partner Center

Work with your Microsoft representative to create your product in Partner Center. This prerequisite requires that you know your publisher identity and your package name. Details for this step are covered outside this article and might require assistance from your Microsoft representative.

## Create your MicrosoftGame.config XML file in the root folder, and then create the rest of your game content

A sample MicrosoftGame.config xml file is included [later in this article](https://learn.microsoft.com/#sample). Use this sample as a reference alongside the [MicrosoftGame.config Editor](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-editor?view=gdk-2604), which streamlines creation of your .config file and automatically syncs down ID and name values from your Partner Center project.

## Identify any Visual C/C++ runtime dependencies

Identify any Visual C/C++ runtime dependencies of your package. Ensure they're listed as dependencies in your MicrosoftGame.config or are explicitly copied into your package payload. For more information, see [Framework package dependencies](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-framework-packages?view=gdk-2604).

## Create your icons for display in the shell and store packages

For each image listed in the following MicrosoftGame.config sample, place a corresponding file in the root folder of your game, scaled to the size specified. Alternatively, place image assets in a subdirectory, and adjust the ShellVisuals icon paths to match. The [MicrosoftGame.config Editor](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-editor?view=gdk-2604) provides the ability to generate these images for you with a single source image as input.

## Install the Microsoft Game Development Kit, which includes the MakePkg.exe packaging tool

By default, the Microsoft Game Development Kit (GDK) command prompts are in this folder: 
C:\\Program Files (x86)\\Microsoft GDK\\Command Prompts

## Create your packaging layout mapping file

Open a Microsoft Game Development Kit (GDK) command prompt in the folder that contains a single folder with all your game content, and then run the following command:

`MakePkg genmap /f layout.xml /d <Your_game_folder>`

This command creates a file called `layout.xml` (this file name is the suggested name, but you can use any other name). Use this file during the packaging step. For more information on packaging tools, see [Make package (makepkg.exe)](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604).

## Use Intelligent Delivery to determine how to reduce installation sizes

To learn how to reduce installation sizes by tagging content in your layout.xml file, see [Overview of Intelligent Delivery](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/intelligentdelivery?view=gdk-2604). Consider using Intelligent Delivery if you have sizable localized assets or content that shouldn't be installed by default but should be available for download when triggered by your game.

## Create your package

Create the package by using the following command:

`MakePkg pack /f layout.xml /lt /d <Your_game_folder_name> /nogameos /pc /pd <Output_Folder_Name>`

For licensing dependent scenarios, such as the in-game store and trial, use `makepkg` with the actual content ID. Partner Center generates this real content ID the first time it ingests the package. You can find it in the details of the submitted package on the **Packages** page.

## Enable developer mode on your target PC

1. Open **Settings**.
 
2. Enter **Developer** in the search field. From the options displayed, select **Use developer features**.
 
3. Select **Developer mode**. A dialog box appears, saying that the system is adding some features. Before moving beyond this step, wait for this process to finish.
 

## Test your app installation

Run the following command: 
`Wdapp install <Your_Package.msixvc>`

The package must exist on a local drive on your development PC, or on a network location mapped to a drive letter. Installation from Universal Naming Convention (UNC) shares isn't yet supported. If you don't see progress, you can open the Microsoft Store app and view the progress under the **Downloads and updates** section indicated by a downward-pointing arrow in the upper-right corner of the app, if present. You can also select the ellipsis (...), and then select **Downloads and updates**.

As of the March 2022 Microsoft Game Development Kit (GDK), MSIXVC packages install to the `[drive]:\XboxGames` folder laid out as flat files that you can modify and access directly. You can configure this drive location by using [Application Management (wdapp.exe)](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604). For more information on Flat File Install features, see [Flat File Install Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-flatfileinstall?view=gdk-2604).

## Prepare your final package, and then submit it to Partner Center

The package you created by using the previous [MakePkg.exe](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604) command used the **/LT** parameter, which encrypts by using a test or development key. For maximum security, run the MakePkg.exe command again with the `/LK` flag to encrypt it by using a stable key or with the `/L` flag to encrypt it by using a unique key. Use `/LK` rather than `/L` because packages created with `/LK` can be used for local size delta comparisons and benefit from delta upload optimizations when submitting to Partner Center.

## Sample MicrosoftGame.config

Create a file named MicrosoftGame.config. Use the following content in the root directory of your game content, and then remove any comments for items that you don't need.

While you can manually create the MicrosoftGame.config, the best way to create this file is by using the [MicrosoftGame.config Editor](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-editor?view=gdk-2604). This tool also makes it easy to sync Identity and ID values directly from your Partner Center project.

```
<?xml version="1.0" encoding="utf-8"?>
<Game configVersion="1">
    <!-- Publisher should match the exact value provided in the "Package/Identity/Publisher" field of the Game setup -> Identity section of your product's configuration area in Partner Center.
         Name should match the exact value provided in the "Package/Identity/Name" field of the Game setup -> Identity section of your product's configuration area in Partner Center. -->
    <Identity Name="**REPLACE**"
        Publisher="**REPLACE**"
        Version="1.0.1.0"/>
        <!-- For MSIXVC/MSIXVC2 the fourth digit of the version number is reserved for Microsoft Store use -->

    <!-- These values are found in the Game Setup -> Identity section in your product's configuration area in Partner Center. -->
    <StoreId>**REPLACE WITH STOREID**</StoreId>
    <MSAAppId>**REPLACE WITH MSAAPPID**</MSAAppId>
    <TitleId>**REPLACE WITH TITLEID**</TitleId>

    <!--  Include any additional languages your title supports as appropriate -->
    <Resources>
      <Resource Language="en-US" />
    </Resources>

     <!-- Use override display name if you want to display a different title in the shell than the DefaultDisplayName from the ShellVisuals section, or if you need to localize it. -->

     <!-- Configuring the Alias attribute will allow you to take advantage of Execution Alias functionality when launching your executable. For more information, please see the MicrosoftGame.config reference documentation. -->

    <ExecutableList>
      <Executable Name="**REPLACE**"
                  Id="Game"
                  Alias="**REPLACE**"
                  OverrideDisplayName="**REPLACE**"
                  />
    </ExecutableList>

    <!-- DefaultDisplayName should match the exact value provided in the "Package/Identity/Name" field of the Game setup -> Identity section of your product's configuration area in Partner Center.
         PublisherDisplayName should use the exact value provided in the "Package/Properties/PublisherDisplayName" field of the Game setup -> Identity section of your product's configuration area in Partner Center.-->
    
    <!-- The following asset sizes apply
         StoreLogo - 100x100
         Square150x150Logo - 150x150
         Square44x44Logo - 44x44
         SplashScreenImage - 1920x1080
    -->
    <ShellVisuals DefaultDisplayName="**REPLACE**" 
                  PublisherDisplayName="**REPLACE**"
                  StoreLogo="StoreLogo.png"
                  Square150x150Logo="Logo.png"
                  Square44x44Logo="SmallLogo.png"
                  Description="**REPLACE**"
                  BackgroundColor="#000040"
                  SplashScreenImage="SplashScreen.png"/>
    
    <DesktopRegistration>
      <!-- Include this section if you need to run a custom installer action with Administrator privileges the first time that your game runs.
           Any executable you specify must be located under the "Installers" folder in the base folder of your game. Don't include any other files in the
           Installers folder.
      <CustomInstallActions>
        <Folder>Installers</Folder>
        <InstallActionList>
          <InstallAction File="CustomInstaller.exe" Name="UniqueInstallTaskName" Arguments="/silent /example" />
        </InstallActionList>
      </CustomInstallActions>
      -->
      <DependencyList>
        <!-- Omit the Dependency items if your game doesn't need them, or the entire DependencyList element. Note that your version of VCLibs may be different. See the Framework package dependencies topic of the documentation for details and guidance. -->
        <KnownDependency Name="VC11"/>
      </DependencyList>
        <!-- Select the ProcessorArchitecture that matches your game executables. -->
      <ProcessorArchitecture>x64</ProcessorArchitecture>
      <!--<ProcessorArchitecture>x86</ProcessorArchitecture>-->

      <!-- Include this section if your game uses Xbox services Multiplayer invites.
      <MultiplayerProtocol>true</MultiplayerProtocol>
      -->
    </DesktopRegistration>

    <!-- Include this section if your game writes files to its installation directory, and you're unable to change this by altering your source code and recompiling your game.
    <ExtendedAttributeList>
      <ExtendedAttribute Name="RestrictedCapability" Value="packageWriteRedirectionCompatibilityShim"/>
    </ExtendedAttributeList>
    -->
</Game>

```

## Other packaging considerations and advanced features

### Framework packages for common software dependencies

If your app relies on some redistributable software and that software is available in the Microsoft Store as a framework package, declare a dependency on the framework package instead of chain-installing the redistributable.

For example, if your app uses the legacy DirectX runtime which historically was satisfied by using the dxsetup.exe [redistibuted from the Microsoft downloads site](https://www.microsoft.com/download/details.aspx?id=35), declare a dependency on the framework package alongside the standard dependencies on Windows.Universal and Windows.Desktop as follows. This approach is preferred over installing the redist directly by using a custom install action, because the framework packages can automatically be updated via the Microsoft Store, and custom install actions require administrator approval and generate acknowledgment prompts as part of the install process.

```
<DependencyList>
  <KnownDependency Name="DX11"/>
</DependencyList>
```

For a full list of known dependencies, refer to documentation for [MicrosoftGame.config Element - KnownDependency](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-knowndependency?view=gdk-2604).

At installation time, the operating system and Microsoft Store ensure that this package dependency is installed along with your app. For more information, including information about DirectX and Visual Studio C/C++ runtime framework package dependencies, see [Framework package dependencies](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-framework-packages?view=gdk-2604).

### Mods support

Starting with the March 2022 Microsoft Game Development Kit (GDK), mods are supported by default. For more information, see [Mods](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-mods?view=gdk-2604).

### Custom installation actions

If your app relies on other installers (.exe or .msi files) that must be chain-installed when your app is installed, use the CustomInstallActions element to configure this step.

For redistributables, check whether a framework package is available and contains the prerequisites you need before deciding to use a custom installer for things like VC runtime or DirectX redistributable .exe or .msi files. For detailed instructions about custom installation actions, see [Custom installation actions](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-custom-install-actions?view=gdk-2604).

### Restricted capability permissions

In addition to configuring your MicrosoftGame.config file to include the correct elements, email your Account Manager to enable permissions to be set for your title to use the following features.

- Custom installation actions (CustomInstallActions element).

## See also

[MSIXVC2 packaging overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-msixvc2-overview?view=gdk-2604) 
[Getting started with MSIXVC2 for PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-pc-msixvc2?view=gdk-2604) 
[Getting started packaging titles for Xbox consoles](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-console?view=gdk-2604) 
[MicrosoftGame.Config](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-toc?view=gdk-2604) 
[Utilizing Microsoft Game Development Kit tools to install and launch your PC title](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/launching-on-pc?view=gdk-2604) 
[PC Bootstrapper](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-pc-bootstrapper?view=gdk-2604)

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

- Last updated on 04/22/2026