# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-localization?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-localization?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# MicrosoftGame.config localization

Feedback

Summarize this article for me

This topic describes how to localize display strings for packaged games so that the appropriate localized versions of your strings are displayed in the shell. These steps relate to the [Use the Windows 10 Resource Management System in a legacy app or game](https://learn.microsoft.com/en-us/windows/uwp/app-resources/using-mrt-for-converted-desktop-apps-and-games) article on Microsoft Docs. You might want to refer to it for further details or scenarios if they aren't covered in this topic.

Note

There's one bug described in the [previously mentioned article](https://learn.microsoft.com/en-us/windows/uwp/app-resources/using-mrt-for-converted-desktop-apps-and-games) where string assets are referenced within a manifest file like this:

```
    ms-resource:Resources/ApplicationDisplayName  
```

Note

The actual reference works like this (note the omission of `Resources/`):

```
    ms-resource:ApplicationDisplayName  
```

## Including localized shell visuals in your game

When starting to package, you'll have a _MicrosoftGame.config_ file with sections like the following, which specify the text content to be displayed that are contained in attributes: `OverrideDisplayName="My Game's Display Name"`.

```

  <ExecutableList>
    <Executable Name="MyGame.exe"
                OverrideDisplayName="My Game's Display Name"
                Id="Game"/>
  </ExecutableList>

  <ShellVisuals DefaultDisplayName="PackageName"
                PublisherDisplayName="Publisher Display name"
                StoreLogo="Storelogo.png"
                Square150x150Logo="Logo.png"
                Square44x44Logo="SmallLogo.png"
                Description="My App Description"
                BackgroundColor="#000040"
                SplashScreenImage="SplashScreen.png"/>  
```

If you want to allow different localized versions of these strings, you can do so by creating .resw files in individual subfolders of your application that's associated with the languages you want to support.

1. Create an XML file named _resources.resw_ and place it in the _Strings_ subfolder of your project. This will be the language-neutral fallback for your project.
2. For each language, create a new _Strings_ subfolder for your project. For example, _Strings\\en-us_ for English or _Strings\\es-mx_ for Spanish as spoken in Mexico. Make sure to use the appropriate [BCP-47](https://tools.ietf.org/html/bcp47) code per language.
3. In each XML file, add the following content, where the highlighted text is replaced with the appropriate text for your app, in the appropriate language. The following example illustrates using `(English)` as a simple suffix.

```
    <?xml version="1.0" encoding="utf-8"?>
    <root>
        <data name="ApplicationDescription">
            <value>Contoso Demo app with localized resources (English)</value>
        </data>
        <data name="ApplicationDisplayName">
            <value>Contoso Demo Sample (English)</value>
        </data>
    </root>
```

Next, you should update your _MicrosoftGame.config_ file to reference these resource strings by using the `ms-resource:ResourceStringName` syntax illustrated as follows in the `OverrideDisplayName` and `Description` properties.

```
<ExecutableList>
    <Executable Name="MyGame.exe"
              OverrideDisplayName="ms-resource:ApplicationDisplayName"
              Id="Game"/>
</ExecutableList>

<ShellVisuals DefaultDisplayName="PackageName"
              PublisherDisplayName="Publisher Display name"
              StoreLogo="Storelogo.png"
              Square150x150Logo="Logo.png"
              Square44x44Logo="SmallLogo.png"
              Description="ms-resource:ApplicationDescription"
              BackgroundColor="#000040"
              SplashScreenImage="SplashScreen.png"/>
```

Next, ensure that your _MicrosoftGame.config_ file contains the list of localization targets that your application supports. If, for example, your app supports US English and Mexico Spanish, your .config file would have the following as a child element of `Game`.

```
<Resources>
    <Resource Language="en-US" />
    <Resource Language="es-MX" />
</Resources>
```

Next, use the [makepkg localize](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604) command to generate a _Resource.pri_ file, which will contain these localized asset strings. Place the resulting _Resources.pri_ file in your game's root content directory.

1. Open a Microsoft Game Development Kit (GDK) gaming command prompt in your game's root content directory.
2. Run the following:

```
    makepkg localize /d . /resw Strings
```

You can run `makepkg localize` with additional parameters if your directory structure doesn't match this example or additional verification is needed.

- Use `/resw` to specify a relative path to the root to find .resw files.
- Use `/pd` with a directory to store the resulting _Resources.pri_ file in a location other than the default root directory. The target directory must already exist.
- Use `/t` with a directory name to specify a location for exporting the resources to an XML file, which can be manually verified to ensure that it contains the appropriate resources.

For example:

```
    makepkg localize /d . /resw Resources /pd ..\FinalLooseFolder /t ..\TempOutput
```

Now that you have a _resources.pri_ file in your game's root content directory, you can create your package as you usually would.

Finally, verify that when installing with the system set to English or Mexico Spanish that your localized strings display in the Start menu and other system pages that display your app's strings. Note that icons within the Microsoft Store app are sourced from data that's been uploaded to Partner Center, not the information in your app package.

## See also

[MicrosoftGame.config](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-toc?view=gdk-2604) 
[MicrosoftGame.config overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604) 
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

- Last updated on 04/28/2025