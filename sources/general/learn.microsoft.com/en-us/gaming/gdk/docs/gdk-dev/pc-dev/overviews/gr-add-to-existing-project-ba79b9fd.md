# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-add-to-existing-project?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-add-to-existing-project?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Adding the Microsoft Game Development Kit to an existing desktop project

Feedback

Summarize this article for me

Note

For games targeting PC Desktop using the Gaming Runtime, you are free to use Direct3D 12, Direct3D 11, or even legacy Direct3D 9. Note there are some special considerations if making use of legacy DirectX SDK components such as D3DX9, D3DX10, D3DX11, etc. See the [DirectX Framework package](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-framework-packages?view=gdk-2604) documentation for more details.

Note

The following information assumes that you have an existing x64 desktop (Windows PC) project, a custom engine, and have installed the Microsoft Game Development Kit (GDK). If you aren't installing the GDK, see [Configuring projects without installing the Microsoft Game Development Kit](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604).

The following steps will result in your project:

- Using the Windows API family `WINAPI_FAMILY_DESKTOP_APP` and linking against typical PC libraries, including `kernel32.lib`, `user32.lib`, etc.
- Including the necessary headers and libraries.
- Including `XGameRuntime.h` and linking to `XGameRuntime.lib`. All the Gaming Runtime capabilities are ready to use, along with the Xbox Live API (XSAPI) extension library.
- Having the ability to debug your game by using F5 with full package identity based on your _MicrosoftGameConfig.mgc_ file.

#### To add the GDK to an existing desktop project

1. If desired, create a new copy of the Debug and Release configurations using the **Configuration Manager** or modify the existing ones.
 
2. Close the project and open it in a text editor. Use the detailed instructions in [Using the x64 platform with the Microsoft Game Development Kit (GDK)](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/visualstudio/gr-vs-templates?view=gdk-2604) to modify the project **Globals**, **ExtensionSettings**, **VC++ Directories**, and **ItemDefinitionGroups**.
 
3. Close the text editor and open the project in Visual Studio.
 
4. Set up the _MicrosoftGameConfig.mgc_: The GDK includes a Visual Studio Item Template for adding MicrosoftGameConfig.mgc files to a project. To add a file using the Item Template:
 

- Right click on a project and select Add->New Item.
- The MicrosoftGameConfig template can be found in the Visual C++->Gaming->Microsoft Game Development Kit->Edition node of the tree, shown as follows.

![MicrosoftGame.config Item Template](https://learn.microsoft.com/../../../../media/public-images/gameconfig_itemtemplate.png?view=gdk-2604)

- Right click on the _MicrosoftGameConfig.mgc_ file and set it to **Custom Build Tool**, hit **OK**.
- In the command line, click <Edit...> and paste:

```
copy %(Identity) "$(OutDir)MicrosoftGame.config"
makepkg.exe localize /d "$(OutDir)" /pd "$(OutDir)" /gc "%(Identity)"
```

- For the outputs, set

```
$(OutDir)MicrosoftGame.config
```

![MicrosoftGame.config Custom Build](https://learn.microsoft.com/../../../../media/public-images/gameconfig_custombuild.png?view=gdk-2604)

For more information, see [MicrosoftGame.config overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604).

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

- Last updated on 11/06/2025