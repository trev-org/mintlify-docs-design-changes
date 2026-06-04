# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-editor?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-editor?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# MicrosoftGame.config Editor

Feedback

Summarize this article for me

MicrosoftGame.config Editor is a UI tool that allows for creating and editing your MicrosoftGame.config file. The editor is provided both as a standalone tool, and as an component integrated into the Visual Studio IDE.

The editor has the following features currently.

- **Platform Tabs**: Outside of the General tab, there are platform-specific tabs which allow for editing features unique to that platform. All features that are shared across all platforms live in the General tab.
- **Executable**: This section allows for specification of the executable associated with your title.
- **Target Device Family (Platform)**: This section allows for specification of the target device your title is intended to run on.
- **Store Information**: This section allows for associating your local MicrosoftGame.config with existing Store data in your Partner Center instance.
- **Tile Image**: This section allows for providing a source input tile image of your product which will then be generated into all other required images at their proper resolutions automatically.

## Launching the standalone version of the MicrosoftGame.config Editor

To launch the standalone MicrosoftGame.config Editor, you can do the following:

- Navigate to the GDK bin folder (i.e. C:\\Program Files (x86)\\Microsoft GDK\\bin) and double click the GameConfigEditor.exe.

![Executable launch](https://learn.microsoft.com/../../../../media/public-images/gameconfig_exelaunch.png?view=gdk-2604)

- In the Microsoft GDK folder in the Start Menu, select the MicrosoftGame.config Editor icon.

![Start Menu launch](https://learn.microsoft.com/../../../../media/public-images/gameconfig_startmenu.png?view=gdk-2604)

- In the Microsoft GDK folder in the Start Menu, open any Gaming Command Prompt and enter GameConfigEditor.exe.

![Tools List Launch](https://learn.microsoft.com/../../../../media/public-images/gameconfig_minilauncher.png?view=gdk-2604)

- In any GDK UX tool, expand the Tools dropdown and select MicrosoftGame.config Editor. The MicrosoftGame.config Editor also has the Tools dropdown integrated in it for quick navigation to other tools.

![Command-line launch](https://learn.microsoft.com/../../../../media/public-images/gameconfig_cmdline.png?view=gdk-2604)

- In the Microsoft GDK folder in the Start Menu, open any Gaming Command Prompt and enter GameConfigEditor.exe with the path to an existing MicrosoftGame.config or intended folder to generate one as a parameter.

![Command-line launch 2](https://learn.microsoft.com/../../../../media/public-images/gameconfig_cmdline2.png?view=gdk-2604)

The Create or Edit MicrosoftGame.config window that appears upon launching the editor will prompt for an existing MicrosoftGame.config file or creating a new MicrosoftGame.config file that will then be opened in the editor.

![Initial window in MicrosoftGame.config Editor](https://learn.microsoft.com/../../../../media/public-images/gameconfig_editor1.png?view=gdk-2604)

## Launching the MicrosoftGame.config Editor from with Visual Studio

The MicrosoftGame.config editor is registered as the editor for .mgc files in Visual Studio. To launch the MicrosoftGame.config Editor from within Visual Studio, double click on a game config file in the **Solution Explorer**.

Note

If your configuration file has an extension other than .mgc, such as .config, it must be renamed before it can be opened with the MicrosoftGame.config editor.

## Creating a new MicrosoftGame.config file

To create a new MicrosoftGame.config file, browse to the root folder of your title in the initial window and then select **Create** to generate the new file in that folder and open it in the editor.

![Inputting a new config file](https://learn.microsoft.com/../../../../media/public-images/gameconfig_newconfig1.png?view=gdk-2604)

## Editing an existing MicrosoftGame.config file

If a MicrosoftGame.config file already exists, browse to the file in the initial window and then select **Edit** to open the existing file in the editor.

![Inputting an existing config file](https://learn.microsoft.com/../../../../media/public-images/gameconfig_existingconfig1.png?view=gdk-2604)

## Specifying your title executable and Target Device Family in the MicrosoftGame.config file

In the MicrosoftGame.config Editor window, the first input that is necessary is specifying where your title executable lives. This can be set by browsing to and selecting your title executable in the Executable section of the editor. In addition to specifying the title executable, it is important to specify which platform the executable is intended to run on. For more information on Target Device Family specifications, please refer to the [MicrosoftGame.config overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604) section.

![Editor with executable specified](https://learn.microsoft.com/../../../../media/public-images/gameconfig_editor2.png?view=gdk-2604)

Without an executable being specified, the MicrosoftGame.config file can still be generated and edited but the editor will warn that the title can not be deployed or launched until the executable is set.

![Missing Executable](https://learn.microsoft.com/../../../../media/public-images/gameconfig_missingexe.png?view=gdk-2604)

![Missing Executable](https://learn.microsoft.com/../../../../media/public-images/gameconfig_missingexe2.png?view=gdk-2604)

## Associating with the Microsoft Store

Your title must be configured with Xbox services enabled in [Partner Center](https://partner.microsoft.com/dashboard) to utilize the Store Association Wizard. In addition, the associated [Partner Center](https://partner.microsoft.com/dashboard) account must be assigned one of the following roles:

- Manager (Windows)
- Developer
- Business Contributor
- Finance Contributor
- Marketer

If your account is not assigned to one of those roles, custom permissions can be assigned. The Sandboxes Account-level permission and one of the following three Product-level permissions must be assigned to your account to use the Store Association Wizard:

- Product-level permissions: Disc
- Product-level permissions: Publishing
- Product-level permissions: Xbox Live

After ensuring you have the correct permissions, select the **Associate with the Microsoft Store** button to walk through the Store Association Wizard and pull down associated title information and save it to your local MicrosoftGame.config file.

![Store Association Wizard](https://learn.microsoft.com/../../../../media/public-images/gameconfig_saw1.png?view=gdk-2604)

Note

After completing the Store Association Wizard, select **Save** in the MicrosoftGame.config Editor to write the changes to your MicrosoftGame.config for your project.

## Generating Tile Images

To generate your titles images to be used by the Microsoft Store, select the Tile image and then browse to and provide a 480x480 .PNG file to be used as the input. Upon selecting the file, all other images will be updated automatically with it as the source input and properly resized to match their required resolutions.

![Tile Images](https://learn.microsoft.com/../../../../media/public-images/gameconfig_images.png?view=gdk-2604)

## Adding Platform-specific features

With the April 2021 GDK, the capability to add and remove platform-specific features is now present in the MicrosoftGame.config Editor, within the Xbox and PC tabs.

The Features menu allows for adding new features, removing existing features and selecting and configuring existing feature values.

![Add Features](https://learn.microsoft.com/../../../../media/public-images/gameconfig_elements.png?view=gdk-2604)

To add a feature, select the **Add new** button. A list of available features for that platform will be presented. Selecting the checkbox and selecting Add will add the feature(s) entry to the feature list for further property configuration.

![Add Features List](https://learn.microsoft.com/../../../../media/public-images/gameconfig_elements_2.png?view=gdk-2604)

Features that have already been added will be displayed at the bottom of the **Add new** list with yellow text indicating that the feature is already present and can only be specified once. For features that can be added multiple times, selecting the feature again from the **Add new** menu and selecting Add will add an additional feature entry of that type to the feature list.

![Add Features List](https://learn.microsoft.com/../../../../media/public-images/gameconfig_elements_3.png?view=gdk-2604)

To remove a feature, navigate to the **Remove** button in the feature list and, when prompted, select Yes to confirm you intend to remove the feature from the feature list.

![Add Features List](https://learn.microsoft.com/../../../../media/public-images/gameconfig_elements_4.png?view=gdk-2604)

Most features need to have their properties configured ahead of saving them to the MicrosoftGame.config file. In some cases, a feature may be considered invalid due to missing information and will be removed upon save with details indicating what missing value caused the removal. Please re-add and reconfigure the feature properties appropriately to ensure it can be retained when saved in the MicrosoftGame.config Editor.

![Add Features List](https://learn.microsoft.com/../../../../media/public-images/gameconfig_error.png?view=gdk-2604)

## Providing feedback

The MicrosoftGame.config Editor is available for use as of the February 2021 GDK. Please use the suggestion menu item to provide feedback on the existing features or request additional functionality.

![Send Feedback](https://learn.microsoft.com/../../../../media/public-images/gameconfig_feedback.png?view=gdk-2604)

## Documentation Link

For more information on the MicrosoftGame.config Editor and associated elements, click on the Documentation link in the MicrosoftGame.config Editor.

![Documentation](https://learn.microsoft.com/../../../../media/public-images/gameconfig_documentation.png?view=gdk-2604)

## See also

[MicrosoftGame.config](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-toc?view=gdk-2604) 
[MicrosoftGame.config overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604) 
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