# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/overviews/developing-new-titles-on-gamecore?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/overviews/developing-new-titles-on-gamecore?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Developing a new title with the Microsoft Game Development Kit in Visual Studio

Feedback

Summarize this article for me

This topic describes how to create a new Microsoft Game Development Kit (GDK) project in Visual Studio.

Gaming titles developed on Microsoft Game Development Kit (GDK) can target PCs, Xbox consoles, or both platforms (if a common codebase is used). These gaming titles can also have capabilities designed to take advantage of the features unique to each platform. You choose the target platform and whether (and how extensively) device extensions are used.

## Getting started with the project templates in Visual Studio for Microsoft Game Development Kit (GDK)

When you install the Gaming eXtensions Development Kit (GXDK) on a development computer with Visual Studio, the following templates are also installed.

- Five project templates for targeting the PC
- Four project templates for targeting the Xbox console

Expand table

| Target platform | Template | Description |
| --- | --- | --- |
| Desktop | Direct3D 12 Desktop Game (Classic) | In the Visual Studio project system, creates a project that builds a standalone PC game executable using the Gaming Runtime and stock x64 MSBuild platform. |
| | Direct3D 12 Desktop Game | In the Visual Studio project system, creates a project that builds a standalone PC game executable using the Gaming.Desktop.x64 custom MSBuild platform. |
| | Direct3D 12 Desktop Game Makefile | Creates a project that's suitable for building a PC game from a makefile by using a command prompt |
| | Desktop Static Library | In the Visual Studio project system, creates a project that builds a static library suitable for inclusion in a Microsoft Game Development Kit (GDK) game that targets PCs using the Gaming.Desktop.x64 custom MSBuild platform. |
| | Desktop DLL | In the Visual Studio project system, creates a project that builds a dynamic-link library suitable for inclusion in a Microsoft Game Development Kit (GDK) game that targets PCs using the Gaming.Desktop.x64 custom MSBuild platform. |
| Console | Direct3D 12 Xbox Game | In the Visual Studio project system, creates a project that builds a standalone game executable that targets the Xbox console. |
| | Direct3D 12 Xbox Game Makefile | Creates a project that's suitable for building an Xbox console game from a makefile by using a command prompt. |
| | Xbox Static Library | In the Visual Studio project system, creates a project that builds a static library suitable for inclusion in a Microsoft Game Development Kit (GDK) game that targets the Xbox console. |
| | Xbox DLL | In the Visual Studio project system, creates a project that builds a dynamic-link library suitable for inclusion in a Microsoft Game Development Kit (GDK) game that targets the Xbox console. |

To access these templates:

1. Open Visual Studio.
2. Choose **File -> New -> Project**. The New Project dialog appears.
3. In the **New Project** dialog, set the **All Languages** filter to **C++**, set the **All Platforms** filter to **Xbox** or **Windows**, and set **All Project Types** to **Games**. You can search for the project names above as well.
4. From the list of Microsoft Game Development Kit (GDK) project templates, select the project template you want.
5. Click **OK**.

## Choosing a template

If you're starting a new Microsoft Game Development Kit (GDK) project, one of the first things you need to do is decide which Microsoft Game Development Kit (GDK) template to use. The answer depends on whether your game is targeting PCs, Xbox, or both.

### Games for PCs only

The Direct3D 12 Desktop Game template is the common starting point. Here are some of the template's key features.

- Uses Windows API Family WINAPI\_FAMILY\_DESKTOP\_APP and links against typical PC libraries, including _kernel32.lib_, _user32.lib_, etc. The full set of PC APIs is available for use in the game.
 
- Includes the necessary headers and libraries. The template is ready for the addition of the Direct3D 12 graphics implementation that's compatible with the PC. The template provides a simple swapchain, Direct3D device, and basic game update & render loop.
 
- Includes XGameRuntime.h and links to XGameRuntime.lib. All the Microsoft Game Development Kit (GDK) Gaming Runtime capabilities are ready to use.
 
- The Xbox Live API (XSAPI) extension library is also available by default. Additional Microsoft Game Development Kit (GDK) extension libraries can be added as well.
 
- Declares a build configuration that's based on either the 'stock' x64 platform or the custom MSBuild platform Gaming.Desktop.x64, which builds an x64 target with the expectation that you're iterating on the game locally (on your development computer) by using the local debugger.
 
- Creates a _MicrosoftGameConfig.mgc_ file with placeholder information that you fill in with your title's information from Partner Center.
 

### Games for Xbox

The Direct3D 12 Xbox Game template is the common starting point. Here are some of the template's key features.

- Uses Windows API Family WINAPI\_FAMILY\_GAMES and links against XGamePlatform.lib, restricting the set of core platform APIs to those guaranteed to be supported on the Xbox Game OS.
 
- Includes the necessary headers and libraries. The template is ready for the addition of the D3D12 graphics implementation that takes full advantage of Xbox device-specific hardware extensions.
 
- Includes XGameRuntime.h and links to XGameRuntime.lib. All the Microsoft Game Development Kit (GDK) Gaming Runtime capabilities are ready to use.
 
- The Xbox Live API (XSAPI) extension library is also available by default. Additional Microsoft Game Development Kit (GDK) extension libraries can be added as well.
 
- Declares a build configuration that uses the MSBuild custom platform Gaming.Xbox.XboxOne.x64, which builds an x64 target with the expectation that you're iterating on the game by using an Xbox One ERA dev kit set for remote debugging.
 
- Creates a _MicrosoftGameConfig.mgc_ file with placeholder information that you fill in with your title's information from Partner Center.
 

### Games for PCs and Xbox

We recommend that you start with one of the two previously mentioned templates and add a second build configuration within your project. For example, if you start with a **Direct3D 12 Desktop Game** project, which automatically includes a build configuration for the **Gaming.Desktop.x64** platform, you can add a second build configuration which has the platform set to **Gaming.Xbox.XboxOne.x64**. When you build your project, Visual Studio then builds one version of your game for the PC and another for the Xbox console.

This recommended approach requires you to tailor your source code (either by using `#define/#ifdef` or by partitioning platform-specific code into separate DLLs) such that the PC configuration of your game uses "stock" Direct3D 12, and the Xbox configuration of your game uses the device-extension equivalent Direct3D 12.x. As you switch your active configuration between **Gaming.Desktop.x64** and **Gaming.Xbox.XboxOne.x64**, tooling settings change appropriately, such as which debugger to use and which libraries to link against.

## Next steps

After verifying your GDK installation by creating a new project, see [Getting started with the Microsoft Game Development Kit](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/get-started-home?view=gdk-2604) for your next steps.

## See also

[MicrosoftGameConfig Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604) 
[Getting started with the Microsoft Game Development Kit](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/get-started-home?view=gdk-2604)

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