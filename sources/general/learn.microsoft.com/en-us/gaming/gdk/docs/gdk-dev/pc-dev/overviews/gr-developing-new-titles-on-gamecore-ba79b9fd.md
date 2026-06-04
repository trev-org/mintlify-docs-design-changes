# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-developing-new-titles-on-gamecore?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-developing-new-titles-on-gamecore?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Starting development of a new title using GDK project templates

Feedback

Summarize this article for me

This topic describes how to get started developing a new title by using the GDK project templates.

Note

For games targeting PC Desktop using the Gaming Runtime, you are free to use Direct3D 12, Direct3D 11, or even legacy Direct3D 9. Note there are some special considerations if making use of legacy DirectX SDK components such as D3DX9, D3DX10, D3DX11, etc. See the [DirectX Framework package](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-framework-packages?view=gdk-2604) documentation for more details.

## Getting started by using Visual Studio project templates for the Gaming Runtime

When the Microsoft Game Development Kit (GDK) is installed on a development PC with Visual Studio, it installs five project templates for targeting PC Desktop as shown in the following table.

Expand table

| Target platform | Template | Description |
| --- | --- | --- |
| Desktop | Direct3D 12 Desktop Game (Classic) | Creates a project in the Visual Studio project system that builds a standalone PC game executable using the Gaming Runtime and stock x64 MSBuild platform. |
| | Direct3D 12 Desktop Game | Creates a project in the Visual Studio project system that builds a standalone PC game executable. |
| | Direct3D 12 Desktop Game Makefile | Creates a project that's suitable for building a PC Desktop game from a `makefile` by using a command prompt. |
| | Desktop Static Library | Creates a project in the Visual Studio project system that builds a static library using the Gaming.Desktop.x64 custom MSBuild platform. It's suitable to include in a game that's targeting PC Desktop. |
| | Desktop DLL | Creates a project in the Visual Studio project system that builds a DLL using the Gaming.Desktop.x64 custom MSBuild platform. It's suitable to include in a game that's targeting PC Desktop. |

To access these templates:

1. Open Visual Studio.
2. Select **File** > **New** > **Project**. The **New Project** dialog box will appear.
3. In the **New Project** dialog, set the **All Languages** filter to **C++**, set the **All Platforms** filter to **Windows**, and set **All Project Types** to **Games**. You can search for the project names above as well.
4. From the list of Microsoft Game Development Kit project templates, select the project template that you want.
5. Select **OK**.

## Use the appropriate template

#### Game exclusively targeting PC Desktop

If you're developing a game that exclusively targets PC devices, the Direct3D 12 Desktop Game template is the common starting point. Some of the key aspects of this template include the following:

- Uses Windows API Family `WINAPI_FAMILY_DESKTOP_APP` and links against typical PC Desktop libraries, including _kernel32.lib_, _user32.lib_, etc. As a result, the full breadth of PC Desktop APIs are available for use in the game.
- Includes the necessary headers and libraries so that the template is ready for the addition of the Direct3D 12 graphics implementation that's compatible with PC Desktop. The template provides a simple swapchain, Direct3D device, and basic game update & render loop.
- Links against _XGameRuntime.lib_ and includes the necessary headers so that all of the Gaming Runtime capabilities are ready for use.
- The Xbox Live API (XSAPI) extension library is also available by default. Additional Microsoft Game Development Kit (GDK) extension libraries can be added as well.
- Declares a build configuration that's based on either the 'stock' x64 platform or the custom MSBuild platform Gaming.Desktop.x64, which builds an x64 target with the expectation that you're iterating on the game locally (on your development PC) by using the local debugger.
- Creates a _MicrosoftGameConfig.mgc_ file with placeholder information that you fill in with your title's information from Partner Center.

## See also

[MicrosoftGame.Config overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604) 
[Getting started with the Gaming Runtime](https://learn.microsoft.com/en-us/gaming/gdk/docs/archive/gr-get-started-with-pc-dev-toc?view=gdk-2604)

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