# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-console?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-console?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Getting started with packaging titles for Xbox consoles

Feedback

Summarize this article for me

Use the following steps to create an XVC package that you can sideload for testing on your Microsoft Game Development Kit, and then submit to Partner Center for publishing.

## Get your product identity information from Partner Center

Work with your Microsoft representative to create your product in Partner Center. This is a prerequisite for the next step, which requires that you know your publisher identity and your package name. Details for this step are covered outside this article and might require assistance from your Microsoft representative.

## Create your MicrosoftGame.config file in the root folder along with the rest of your game content

A sample MicrosoftGame.config XML file is included [later in this article](https://learn.microsoft.com/#sample). Use this sample as a reference alongside the [MicrosoftGame.config Editor](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-editor?view=gdk-2604), which can streamline creation of your .config file and automatically sync down ID and name values from your Partner Center project.

## Create your icons for display in the shell and Microsoft Store packages

For each image listed in the following MicrosoftGame.config sample, place a corresponding file in the root folder of your game, scaled to the size specified. Alternately, you can place image assets in a subdirectory, and adjust the `ShellVisuals` icon paths to match. The [MicrosoftGame.config Editor](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-editor?view=gdk-2604) provides the ability to generate these images for you with a single source image as input.

## Install the Microsoft Game Development Kit (GDK) (includes makepkg.exe packaging tool)

By default, the Microsoft Game Development Kit (GDK) command prompts are in this folder: 
`C:\Program Files (x86)\Microsoft GDK\Command Prompts`

## Create your packaging layout mapping file

Open a Microsoft Game Development Kit (GDK) command prompt in the folder that contains a single folder with all your game content, and then run the following command:

`makepkg genmap /f layout.xml /d <Your_Game_Folder>`

This command creates a file named layout.xml, which you use during the packaging step.

Note

For information on how to customize your layout.xml to organize your game content into features or chunks with specifiers, see the Intelligent Delivery guide. By using this guide, you can customize which content installs on different devices and by different languages. It also helps users choose which parts of your game they want to install. For more information, see [Overview of Intelligent Delivery](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/intelligentdelivery?view=gdk-2604).

## Create your package

### How to create your package

Follow these steps to create an `/lk` encrypted package:

1. One time: Run `makepkg genkey /ekb SECRET_KEY.lekb` to create the `SECRET_KEY.lekb` file. This file is the Local Escrowed Key Blob (LEKB) that stores the stable content key that encrypts your package. Store it in a secure location with need-to-know access. In an ideal setup, only official build machines and accounts should have access to it.
2. Package creation: Run `makepkg pack /lk SECRET_KEY.lekb /f layout.xml /d <Your_Game_Folder_Name> /pd <Output_Folder_Name>`. This command creates a package encrypted using the key stored in the SECRET\_KEY.lekb file.

### Important notes on package encryption

The `makepkg` `/lk` switch encrypts the package by using a stable (always the same) key that the `makepkg genkey` command creates. In addition to your title package, `makepkg /lk` generates files named in the format _PackageFullName\_licenseName\_GUID.EKB_ and _PackageFullName\_licenseName\_GUID.CEKB_. (Note the use of the underscore (\_) character.)

Use `/lk` encryption for development kit testing and submission on console. It offers these benefits when compared to test encryption (`/lt`) and submission encryption (`/l`):

1. `packageutil compare` can generate correct update size estimates (unlike `/l`).
2. It enables secure delta upload to Partner Center by using the same algorithm that consoles and PCs use to download content updates.
3. You can install it onto devkits (unlike `/l`).
4. It uses secure encryption key material and you can only decrypt it in specific environments (unlike `/lt`).

## Test your package installation

Use the following command to test your package installation:

`xbapp install <Your_Package>`

If your package uses Intelligent Delivery Features, use the `/i` option to invoke the interactive shell UI for picking which package features to install for testing the retail end user experience.

`xbapp install /i <Your_Package>`

### Important notes on package installation

`xbapp install` will automatically install the CEKB file necessary to load the package onto an Xbox devkit. If you're testing an install scenario other than tool-based install (game disc, external storage, console-to-console transfer) then the `xbapp installkey` command can be used to install only the CEKB file. See [xbapp.exeAuthorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-console/commandlinetools/xbapp?view=gdk-2604) for more details.

Warning

The contents of the LEKB file is only lightly obfuscated. It is your responsibility to ensure the security of your content packages by securing access to the LEKB file. Anyone possessing the LEKB file and the content package file output by `makepkg pack` can decrypt its contents.

Warning

The contents of the CEKB file allows the package to be loaded on any active Xbox devkit. It is your responsibility to ensure the security of your content packages by securing access to the CEKB file. Anyone possessing the CEKB file, an active Xbox devkit, and the content package file output by `makepkg pack` can install the package on their devkit, can start the package, and can xbcp the files out of the package.

Important

LEKB files generated before the April 2021 GDK won't create a CEKB file. To use the new devkit sideloading feature, the LEKB file must be re-created with April 2021 or later GDK tools.

### If you plan to create discs for your package see the following articles

[Creating test compilation discs](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/creating-test-compilation-discs?view=gdk-2604) 
[Creating cross-generation test discs](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/creating-cross-gen-test-discs?view=gdk-2604)

## Submit your package to Microsoft Partner Center

The package you created by using the previous makepkg.exe command can be used for both testing and submission since the `/lk` flag was used to encrypt the package. You'll also benefit from delta upload when uploading this package. The XVC and EKB files are uploaded to Partner Center as normal. The LEKB and CEKB files won't be uploaded.

## Sample MicrosoftGame.config

Create a file named MicrosoftGame.config. Use the following content in the root directory of your game content, and then remove any comments for items you don't need. For more information, see the [MicrosoftGame.config reference page](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604).

While you can manually create the MicrosoftGame.config, the best way to create this file is by using the [MicrosoftGame.config Editor](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-editor?view=gdk-2604).

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

     <!-- Use OverrideDisplayName if you want to display a different title in the shell than the DefaultDisplayName from the ShellVisuals section, or if you need to localize it. 
          Use TargetDeviceFamily to specify what platform your executable is built for (NOTE: Packaging will only allow one TargetDeviceFamily type to be specified to properly build a package. For more information, see the above reference page.) -->
    <ExecutableList>
      <Executable Name="**REPLACE**"
                  Id="Game"
                  OverrideDisplayName="**REPLACE**"
                  TargetDeviceFamily="XboxOne"
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
</Game>
```

## See also

[Getting started with packaging titles for a PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-pc?view=gdk-2604) 
[MicrosoftGame.Config](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-toc?view=gdk-2604) 
[Deploying your title to your Xbox dev kitAuthorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/dev-kits/concepts/deployment?view=gdk-2604)

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