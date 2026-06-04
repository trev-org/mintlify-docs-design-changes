# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Configuring projects without installing the Microsoft Game Development Kit

Feedback

Summarize this article for me

This topic covers configuring projects to build with MSBuild while referencing extracted Microsoft Game Development Kit (GDK) files. To download example projects that use MSBuild and CMake, see the [Project configuration samples](https://learn.microsoft.com/#BWOI-Samples) section.

Expand table

| Section | What's covered |
| --- | --- |
| [Platform property and target files](https://learn.microsoft.com/#BWOI-PlatformsAndTargets) | Types and location of property and target files that are a part of the GDK |
| [Overriding MSBuild properties](https://learn.microsoft.com/#BWOI-OverridingProperties) | How to override properties to work with a flat-deployed GDK |
| [Gaming.Xbox.XboxOne.x64 and Gaming.Xbox.Scarlett.x64 project customization](https://learn.microsoft.com/#BWOI-XboxProjects) | Steps to configure your Xbox project to work with a flat-deployed GDK |
| [Gaming.Xbox.XboxOne.x64 and Gaming.Xbox.Scarlett.x64 property overrides for the GDK](https://learn.microsoft.com/#BWOI-XboxGDKOverrides) | Xbox properties overrides to work with a flat-deployed GDK |
| [Gaming.Xbox.XboxOne.x64 and Gaming.Xbox.Scarlett.x64 property overrides for Windows 10 SDK](https://learn.microsoft.com/#BWOI-XboxSDKOverrides) | Xbox properties overrides to work with a flat-deployed Windows 10 SDK |
| [Gaming.Xbox.XboxOne.x64 library and include references](https://learn.microsoft.com/#BWOI-XboxOneReferences) | Library and include reference paths for Xbox One projects |
| [Gaming.Xbox.Scarlett.x64 library and include references](https://learn.microsoft.com/#BWOI-ScarlettReferences) | Library and include reference paths for Xbox Series X|S projects |
| [Gaming.Xbox.XboxOne.x64 and Gaming.Xbox.Scarlett.x64 extension libraries](https://learn.microsoft.com/#BWOI-XboxExtensions) | Xbox property files for the extension libraries (that is, Xbox.Game.Chat) |
| [Gaming.Desktop.x64 project customization](https://learn.microsoft.com/#BWOI-DesktopProjects) | Steps to configure your PC desktop project to work with a flat-deployed GDK |
| [Gaming.Desktop.x64 property overrides for the GDK](https://learn.microsoft.com/#BWOI-DesktopGDKOverrides) | PC desktop properties overrides to work with a flat-deployed GDK |
| [Gaming.Desktop.x64 property overrides for Windows 10 SDK](https://learn.microsoft.com/#BWOI-DesktopSDKOverrides) | PC desktop properties overrides to work with a flat-deployed Windows 10 SDK |
| [Gaming.Desktop.x64 library and include references](https://learn.microsoft.com/#BWOI-DesktopReferences) | Library and include reference paths for PC desktop projects |
| [Gaming.Desktop.x64 extension libraries](https://learn.microsoft.com/#BWOI-DesktopExtensions) | PC desktop property files for the extension libraries (that is, Xbox.Game.Chat) |
| [Property configuration for PC-side tools](https://learn.microsoft.com/#BWOI-PCTools) | Property overrides to properly use PC-side tools |
| [Visual Studio version-specific overrides](https://learn.microsoft.com/#BWOI-VSOverrides) | Property overrides required for versions of Visual Studio |
| [Visual Studio 2019 platform overrides](https://learn.microsoft.com/#BWOI-VS2019Overrides) | Property overrides of the _Platform_ folder location in Visual Studio 2019 |
| [Visual Studio 2022 platform overrides](https://learn.microsoft.com/#BWOI-VS2022Overrides) | Property overrides of the _Platform_ folder location in Visual Studio 2022 |
| [Project configuration samples](https://learn.microsoft.com/#BWOI-Samples) | Samples to get up and running with a flat-deployed GDK |
| [CMake sample](https://learn.microsoft.com/#BWOI-CMakeSample) | CMake sample to integrate a project with a flat-deployed GDK |
| [MSBuild sample](https://learn.microsoft.com/#BWOI-MSBuildSample) | MSBuild sample to integrate a project with a flat-deployed GDK |

## Platform property and target files

Included in the GDK extracted files is a set of property and target files that are used as part of building the Gaming.Xbox.XboxOne.x64, Gaming.Xbox.Scarlett.x64, or Gaming.Desktop.x64 platforms. These platforms are imported from the _Microsoft.Cpp.Default.props_ lookup when building with our platform defined. Inspecting these files will help you better understand how the platform MSBuild components work and how best they can be integrated into your build system.

Sixteen instances of these files exist, based on the version of Visual Studio, the Platform Toolset version, and platform target. The example paths from an extracted _GDK_ folder are as follows.

- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GXDK\\VS2019\\flatDeployment\\MSBuild\\Microsoft\\VC\\v160\\Platforms\\Gaming.Xbox.XboxOne.x64_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GXDK\\VS2019\\flatDeployment\\MSBuild\\Microsoft\\VC\\v160\\Platforms\\Gaming.Xbox.Scarlett.x64_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GXDK\\VS2022\\flatDeployment\\MSBuild\\Microsoft\\VC\\v160\\Platforms\\Gaming.Xbox.XboxOne.x64_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GXDK\\VS2022\\flatDeployment\\MSBuild\\Microsoft\\VC\\v160\\Platforms\\Gaming.Xbox.Scarlett.x64_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GXDK\\VS2022\\flatDeployment\\MSBuild\\Microsoft\\VC\\v170\\Platforms\\Gaming.Xbox.XboxOne.x64_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GXDK\\VS2022\\flatDeployment\\MSBuild\\Microsoft\\VC\\v170\\Platforms\\Gaming.Xbox.Scarlett.x64_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\VS2019\\flatDeployment\\MSBuild\\Microsoft\\VC\\v160\\Platforms\\gaming.desktop.x64_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\VS2022\\flatDeployment\\MSBuild\\Microsoft\\VC\\v160\\Platforms\\gaming.desktop.x64_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\VS2022\\flatDeployment\\MSBuild\\Microsoft\\VC\\v170\\Platforms\\gaming.desktop.x64_

The difference between the v160 and v170 folders for Visual Studio 2019 and Visual Studio 2022 is the use of the v142 (v160) or v143 (v170) Platform Toolset version (which is defined in the $(PlatformToolset) property).

Note

For the [GDK New Layout](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/overviews/gdkx-new-layout?view=gdk-2604), the location of these files is in `C:\ExtractedGDK\251000\Microsoft GDK\251000\xbox\build` with shortened paths. The INCLUDE/LIB paths listed below also assume you are using the old layouts instead of the new simplified integration.

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

## Overriding MSBuild properties

There are multiple ways to override MSBuild properties in your projects. One convenient method is to create a [Directory.Build.props](https://learn.microsoft.com/en-us/visualstudio/msbuild/customize-your-build#directorybuildprops-and-directorybuildtargets) file in the same directory as the project file. Properties defined in this file will be automatically applied when building the project. If the file is not present, the overrides will not be applied. This means you can use the same project file whether or not the Microsoft Game Development Kit (GDK) is installed. If the Microsoft Game Development Kit (GDK) is installed, remove or rename the Directory.Build.props to use the normal build process.

The [MSBuild sample](https://learn.microsoft.com/#BWOI-MSBuildSample) demonstrates the use of a Directory.Build.props file.

The following sections describe the properties we recommend that you override to point to your extracted Microsoft Game Development Kit (GDK) and where to find more details on lib and include paths.

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

## Gaming.Xbox.XboxOne.x64 and Gaming.Xbox.Scarlett.x64 project customization

Project customization is required to build a Gaming.Xbox.XboxOne.x64 and Gaming.Xbox.Scarlett.x64 project with MSBuild from an extracted GDK. For properties that require overriding, the most important difference between Gaming.Xbox.XboxOne.x64 and Gaming.Xbox.Scarlett.x64 is the `Platform` property definition.

### Gaming.Xbox.XboxOne.x64 and Gaming.Xbox.Scarlett.x64 property overrides for the GDK

The following properties need to be set to enable a successful build of a project that's configured for the Gaming.Xbox.XboxOne.x64 and Gaming.Xbox.Scarlett.x64 platforms. They should be imported before the import of _Microsoft.Cpp.Default.props_ that's defined within your project file.

#### Descriptions of properties being overridden

- `BWOI_GDK_Path:` A user property that isn't required, but we recommend that you set it to use the property in future property values to reduce hard-coded paths.
- `Platform`: Specifies the platform that will be used to compile the project. The Xbox console family options in the GDK are Gaming.Xbox.XboxOne.x64 and Gaming.Xbox.Scarlett.x64. The property is set as part of the new project template.
- `XdkEditionTarget`: Overrides which GDK version is used for build compilation. It's defined in _Platform.default.props_ and is derived from `XdkEdition`, an internal property that's set in _xdk.props_.
- `DurangoXdkInstallPath`: Overrides the _Microsoft Microsoft Game Development Kit (GDK)_ folder location of the extracted GDK. It's defined in _Platform.Edition.default.props_.
- `DefaultXdkEditionRootVS2019`: Overrides the default location of the Visual Studio 2019-compatible `Platform` property and target files. It's defined in _Platform.default.props_. This property should only be defined when using a project with Visual Studio 2019.
- `XdkEditionRootVS2019`: Overrides the location of the Visual Studio 2019-compatible `Platform` property and target files. It's defined in _Platform.props_. This property should only be defined when using a project with Visual Studio 2019.
- `DefaultXdkEditionRootVS2022`: Overrides the default location of the Visual Studio 2022-compatible `Platform` property and target files. It's defined in _Platform.default.props_. This property should only be defined when using a project with Visual Studio 2022.
- `XdkEditionRootVS2022`: Overrides the location of the Visual Studio 2022-compatible `Platform` property and target files. It's defined in _Platform.props_. This property should only be defined when using a project with Visual Studio 2022.
- `PlatformToolset`: Overrides the specific version of the build tools to be used for building. v142 is supported in Visual Studio 2019. v142 and v143 are supported in Visual Studio 2022 (v143 is defined by default). This is defined in _Microsoft.Cpp.Defaults.props_.

Example Gaming.Xbox.Scarlett.x64 property values, based on the previous extracted folder example, for reference:

```
<BWOI_GDK_Path>C:\ExtractedGDK\241000\</BWOI_GDK_Path>
<Platform>Gaming.Xbox.Scarlett.x64</Platform>
<XdkEditionTarget>241000</XdkEditionTarget>
<DurangoXdkInstallPath>$(BWOI_GDK_Path)Microsoft GDK\</DurangoXdkInstallPath>
<DefaultXdkEditionRootVS2019>$(XdkEditionTarget)\GXDK\VS2019\flatDeployment\MSBuild\Microsoft\VC\v160\Platforms\$(Platform)\</DefaultXdkEditionRootVS2019>
<XdkEditionRootVS2019>$(DurangoXdkInstallPath)$(XdkEditionTarget)\GXDK\VS2019\flatDeployment\MSBuild\Microsoft\VC\v160\Platforms\$(Platform)\</XdkEditionRootVS2019>
<DefaultXdkEditionRootVS2022>$(XdkEditionTarget)\GXDK\VS2022\flatDeployment\MSBuild\Microsoft\VC\v170\Platforms\$(Platform)\</DefaultXdkEditionRootVS2022>
<XdkEditionRootVS2022>$(DurangoXdkInstallPath)$(XdkEditionTarget)\GXDK\VS2022\flatDeployment\MSBuild\Microsoft\VC\v170\Platforms\$(Platform)\</XdkEditionRootVS2022>
<PlatformToolset>$(PlatformToolset)</PlatformToolset>
```

To override the _Platform_ folder to detect Gaming.Xbox.XboxOne.x64-specific and Gaming.Xbox.Scarlett.x64-specific .props and targets, see the following section about Visual Studio platform overrides.

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

### Gaming.Xbox.XboxOne.x64 and Gaming.Xbox.Scarlett.x64 property overrides for Windows 10 SDK

The following properties need to be set only when using an extracted Windows 10 SDK. If you're using an installed Windows 10 SDK, this section can be skipped.

- `BWOI_Win10SDK_Path`: A user property that isn't required, but we recommend that you set it to use the property in future property values to reduce hard-coded paths.
- `WindowsSdkDir`: Overrides the location of the Windows 10 SDK.
- `WindowsSdkDir_10:` Overrides the location of the Windows 10 SDK (Windows 10). This is checked via a registry key in_Microsoft.Cpp.WindowsSDK.props_, which is imported during build compilation.
- `UCRTContentRoot`: Overrides the location of the Universal C Runtime Library Content Root. This is defined in _uCRT.props_.
- `UniversalCRTSdkDir`: Overrides the location of the Universal C Runtime Library SDK (Visual C++ C Runtime). This property is checked via a registry key in _Microsoft.Cpp.WindowsSDK.props_, which is imported during build compilation.
- `UniversalCRTSdkDir_10`: Overrides the location of the Universal C Runtime Library SDK (Visual C++ C Runtime for Windows 10). This property is checked via a registry key in _Microsoft.Cpp.WindowsSDK.props_, which is imported during build compilation.
- `WindowsSDK_ExecutablePath_x86`: Overrides the location of the x86 tools that are included in the Windows 10 SDK. Tools such as `rc.exe` reside in this location. This property is defined in _Microsoft.Cpp.WindowsSDK.props_.
- `WindowsSDK_ExecutablePath_x64`: Overrides the location of the x64 tools that are included in the Windows 10 SDK. Tools such as `rc.exe` reside in this location. This property is defined in _Microsoft.Cpp.WindowsSDK.props_.
- `WindowsTargetPlatformVersion`: Overrides the version of the Windows 10 SDK that's being used. This property is defined in the _Platform.Edition.default.props_ file (walks a local path if it's not defined).
- `TargetPlatformVersion`: Overrides the version of the Windows 10 SDK that's being used. This property is defined in _Microsoft.Cpp.WindowsSDK.props_.

Example property values, based on the previous extracted folder example, for reference:

```
<BWOI_Win10SDK_Path>C:\ExtractedWin10SDK\</BWOI_Win10SDK_Path>
<WindowsSdkDir>$(BWOI_Win10SDK_Path)Windows Kits\10\</WindowsSdkDir>
<WindowsSdkDir_10>$(WindowsSdkDir)</WindowsSdkDir_10>
<UCRTContentRoot>$(WindowsSdkDir)</UCRTContentRoot>
<UniversalCRTSdkDir>$(WindowsSdkDir)</UniversalCRTSdkDir>
<UniversalCRTSdkDir_10>$(WindowsSdkDir)</UniversalCRTSdkDir_10>
<WindowsSDK_ExecutablePath_x86>$(WindowsSdkDir)bin\$(WindowsTargetPlatformVersion)\x86</WindowsSDK_ExecutablePath_x86>
<WindowsSDK_ExecutablePath_x64>$(WindowsSdkDir)bin\$(WindowsTargetPlatformVersion)\x64</WindowsSDK_ExecutablePath_x64>
<WindowsTargetPlatformVersion>10.0.19041.0</WindowsTargetPlatformVersion>
<TargetPlatformVersion>$(WindowsTargetPlatformVersion)</TargetPlatformVersion>
```

> The Microsoft GDK requires Windows 10 SDK (19041) or later. You can make use of the Windows SDK (20348, 22000, or 22621) if you want, but it's not required.

> As of the October 2023 release, Windows 11 SDK (22000) or later is required. You can make use of Windows 11 SDK, Version 22H2 (22621) if you want, but it's not required. Replace all instances of "10.0.19041.0" with "10.0.22000.0".

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

### Gaming.Xbox.XboxOne.x64 library and include references

Library and include references do _not_ need to be directly overridden, because they derive from the previously mentioned overridden paths. This section is for reference only.

These references are defined in _Platform.Edition.props_ within the Gaming.Xbox.XboxOne.x64 _Platform_ folder. The properties are constructed as follows.

```
<Console_LibRoot>$(WindowsSDKDir)Lib\$(TargetPlatformVersion)\</Console_LibRoot>
<Console_EndpointLibRoot>$(DurangoXdkInstallPath)GXDK\gameKit\Lib\amd64;$(DurangoXdkInstallPath)GXDK\gameKit\Lib\amd64\XboxOne;$(DurangoXdkInstallPath)GRDK\gameKit\Lib\amd64</Console_EndpointLibRoot>
<Console_EndpointIncludeRoot>$(DurangoXdkInstallPath)GXDK\gameKit\Include\;$(DurangoXdkInstallPath)GXDK\gameKit\Include\XboxOne\;$(DurangoXdkInstallPath)GRDK\gameKit\Include\</Console_EndpointIncludeRoot>
<Console_WindowsIncludeRoot>$(WindowsSDKDir)Include\$(TargetPlatformVersion)\</Console_WindowsIncludeRoot>
<Console_Libs Condition="'$(Console_Libs)'==''">pixevt.lib;d3d12_x.lib;xgameplatform.lib;xgameruntime.lib;xmem.lib;xg_x.lib</Console_Libs>
<Console_UCRTRedistDebug>$(WindowsSDKDir)bin\$(TargetPlatformVersion)\x64\ucrt\</Console_UCRTRedistDebug>
<Console_SdkRoot>$(DurangoXdkInstallRoot)</Console_SdkRoot>
<Console_SdkIncludeRoot>$(Console_EndpointIncludeRoot);$(WindowsSDK_IncludePath);$(UniversalCRT_IncludePath);$(VC_VC_IncludePath);</Console_SdkIncludeRoot>
<Console_SdkLibPath>$(Console_EndpointLibRoot);$(WindowsSDK_LibraryPath_x64);$(UniversalCRT_LibraryPath_x64);$(VC_LibraryPath_VC_x64_OneCore)</Console_SdkLibPath>
```

Example defines of library and include properties in MSBuild logs:

```
Console_EndpointIncludeRoot = C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Include\;C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Include\XboxOne\;C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\gameKit\Include\
Console_EndpointLibRoot = C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Lib\amd64;C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Lib\amd64\XboxOne;C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\gameKit\Lib\amd64
Console_ExtLibPaths = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\ExtensionLibrary.props
Console_ExtLibPathsString = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\ExtensionLibrary.props
Console_GRDKExtLibNamesString = PlayFab.Party.Cpp|PlayFab.PartyXboxLive.Cpp|Xbox.Game.Chat.2.Cpp.API|Xbox.Services.API.C
Console_GRDKExtLibRoot = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\
Console_LibRoot = C:\Program Files (x86)\Windows Kits\10\Lib\10.0.19041.0\
Console_Libs = pixevt.lib;d3d12_x.lib;xgameplatform.lib;xgameruntime.lib;xmem.lib;xg_x.lib
Console_SdkIncludeRoot = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\Include;C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Include\;C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Include\XboxOne\;C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\gameKit\Include\;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\um;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\shared;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\winrt;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\cppwinrt;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\ucrt;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\ucrt;;C:\Program Files\Microsoft Visual Studio\2022\Enterprise\VC\Tools\MSVC\14.30.30705\include;;
Console_SdkLibPath = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\Lib\x64\Release\v143;C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Lib\amd64;C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Lib\amd64\XboxOne;C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\gameKit\Lib\amd64;C:\Program Files (x86)\Windows Kits\10\Lib\10.0.19041.0\ucrt\x64;C:\Program Files (x86)\Windows Kits\10\Lib\10.0.19041.0\um\x64;C:\Program Files (x86)\Windows Kits\10\lib\10.0.19041.0\ucrt\x64;;C:\Program Files\Microsoft Visual Studio\2022\Enterprise\VC\Tools\MSVC\14.30.30705\lib\onecore\x64
Console_SdkRoot = C:\ExtractedGDK\241000\Microsoft GDK\
Console_SdkToolPath = C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\bin\XboxOne\
Console_UCRTRedistDebug = C:\Program Files (x86)\Windows Kits\10\bin\10.0.19041.0\x64\ucrt\
Console_WindowsIncludeRoot = C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\
```

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

### Gaming.Xbox.Scarlett.x64 library and include references

Library and include references do _not_ need to be directly overridden, because they derive from the previously mentioned overridden paths. This section is for reference only.

These references are defined in _Platform.Edition.props_ within the Gaming.Xbox.Scarlett.x64 _Platform_ folder. The properties are constructed as follows.

```
<Console_LibRoot>$(WindowsSDKDir)Lib\$(TargetPlatformVersion)\</Console_LibRoot>
<Console_EndpointLibRoot>$(DurangoXdkInstallPath)GXDK\gameKit\Lib\amd64;$(DurangoXdkInstallPath)GXDK\gameKit\Lib\amd64\Scarlett;$(DurangoXdkInstallPath)GRDK\gameKit\Lib\amd64</Console_EndpointLibRoot>
<Console_EndpointIncludeRoot>$(DurangoXdkInstallPath)GXDK\gameKit\Include\;$(DurangoXdkInstallPath)GXDK\gameKit\Include\Scarlett\;$(DurangoXdkInstallPath)GRDK\gameKit\Include\</Console_EndpointIncludeRoot>
<Console_WindowsIncludeRoot>$(WindowsSDKDir)Include\$(TargetPlatformVersion)\</Console_WindowsIncludeRoot>
<Console_Libs Condition="'$(Console_Libs)'==''">pixevt.lib;d3d12_xs.lib;xgameplatform.lib;xgameruntime.lib;xmem.lib;xg_xs.lib</Console_Libs>
<Console_UCRTRedistDebug>$(WindowsSDKDir)bin\$(TargetPlatformVersion)\x64\ucrt\</Console_UCRTRedistDebug>
<Console_SdkRoot>$(DurangoXdkInstallRoot)</Console_SdkRoot>
<Console_SdkIncludeRoot>$(Console_EndpointIncludeRoot);$(WindowsSDK_IncludePath);$(UniversalCRT_IncludePath);$(VC_VC_IncludePath);</Console_SdkIncludeRoot>
<Console_SdkLibPath>$(Console_EndpointLibRoot);$(WindowsSDK_LibraryPath_x64);$(UniversalCRT_LibraryPath_x64);$(VC_LibraryPath_VC_x64_OneCore)</Console_SdkLibPath>
```

Example defines of library and include properties in MSBuild logs:

```
Console_EndpointIncludeRoot = C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Include\;C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Include\Scarlett\;C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\gameKit\Include\
Console_EndpointLibRoot = C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Lib\amd64;C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Lib\amd64\Scarlett;C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\gameKit\Lib\amd64
Console_ExtLibPaths = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\ExtensionLibrary.props
Console_ExtLibPathsString = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\ExtensionLibrary.props
Console_GRDKExtLibNamesString = PlayFab.Party.Cpp|PlayFab.PartyXboxLive.Cpp|Xbox.Game.Chat.2.Cpp.API|Xbox.Services.API.C
Console_GRDKExtLibRoot = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\
Console_LibRoot = C:\Program Files (x86)\Windows Kits\10\Lib\10.0.19041.0\
Console_Libs = pixevt.lib;d3d12_xs.lib;xgameplatform.lib;xgameruntime.lib;xmem.lib;xg_xs.lib
Console_SdkIncludeRoot = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\Include;C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Include\;C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Include\Scarlett\;C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\gameKit\Include\;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\um;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\shared;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\winrt;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\cppwinrt;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\ucrt;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\ucrt;;C:\Program Files\Microsoft Visual Studio\2022\Enterprise\VC\Tools\MSVC\14.30.30705\include;;
Console_SdkLibPath = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\Lib\x64\Release\v143;C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Lib\amd64;C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\gameKit\Lib\amd64\Scarlett;C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\gameKit\Lib\amd64;C:\Program Files (x86)\Windows Kits\10\Lib\10.0.19041.0\ucrt\x64;C:\Program Files (x86)\Windows Kits\10\Lib\10.0.19041.0\um\x64;C:\Program Files (x86)\Windows Kits\10\lib\10.0.19041.0\ucrt\x64;;C:\Program Files\Microsoft Visual Studio\2022\Enterprise\VC\Tools\MSVC\14.30.30705\lib\onecore\x64
Console_SdkRoot = C:\ExtractedGDK\241000\Microsoft GDK\
Console_SdkToolPath = C:\ExtractedGDK\241000\Microsoft GDK\241000\GXDK\bin\Scarlett\
Console_UCRTRedistDebug = C:\Program Files (x86)\Windows Kits\10\bin\10.0.19041.0\x64\ucrt\
Console_WindowsIncludeRoot = C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\
```

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

### Gaming.Xbox.XboxOne.x64 and Gaming.Xbox.Scarlett.x64 extension libraries

Extension libraries exist for Xbox.Services.API.C, Xbox.Game.Chat.2.Cpp.API, Xbox.XCurl.API, Xbox.LibHttpClient, PlayFab.Party.Cpp, and PlayFab.PartyXboxLive.Cpp. If you're using these features, they should be imported into your project and the associated properties overridden, based on what's defined in the following .props files.

**Microsoft GDK (October 2024) or later:**

- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\ExtensionLibraries\\Xbox.Services.API.C\\ExtensionLibrary.props_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\ExtensionLibraries\\Xbox.Game.Chat.2.Cpp.API\\ExtensionLibrary.props_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\ExtensionLibraries\\PlayFab.Party.Cpp\\ExtensionLibrary.props_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\ExtensionLibraries\\PlayFab.PartyXboxLive.Cpp\\ExtensionLibrary.props_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\220600\\GRDK\\ExtensionLibraries\\PlayFab.Services.C\\ExtensionLibrary.props_

**Microsoft GDK (June 2024) or earlier:**

- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\230600\\GRDK\\ExtensionLibraries\\Xbox.Services.API.C\\DesignTime\\CommonConfiguration\\Neutral\\ExtensionLibrary.props_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\230600\\GRDK\\ExtensionLibraries\\Xbox.Game.Chat.2.Cpp.API\\DesignTime\\CommonConfiguration\\neutral\\ExtensionLibrary.props_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\230600\\GRDK\\ExtensionLibraries\\PlayFab.Party.Cpp\\DesignTime\\CommonConfiguration\\neutral\\ExtensionLibrary.props_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\230600\\GRDK\\ExtensionLibraries\\PlayFab.PartyXboxLive.Cpp\\DesignTime\\CommonConfiguration\\neutral\\ExtensionLibrary.props_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\230600\\GRDK\\ExtensionLibraries\\PlayFab.Services.C\\DesignTime\\CommonConfiguration\\neutral\\ExtensionLibrary.props_

> Note: The .props file for Xbox.Services.API.C has added Appnotify.lib, crypt32.lib, and winhttp.lib as additional dependencies.

Extension library properties are defined in _Platform.Edition.props_ within the target platform folder. An example of how these properties are constructed is as follows.

```
<GDKExtLibNames Condition="'$(GDKExtLibNames)'==''">Xbox.Services.API.C</GDKExtLibNames>
<Console_GRDKExtLibRoot>$(DurangoXdkInstallPath)GRDK\ExtensionLibraries\</Console_GRDKExtLibRoot>
<Console_GRDKExtLibNamesString>$([System.String]::Join('|', $([System.IO.Directory]::GetDirectories(&quot;$(Console_GRDKExtLibRoot)&quot;))).Replace('$(Console_GRDKExtLibRoot)',''))</Console_GRDKExtLibNamesString>
<Console_ExtLibPathsString>$([System.Text.RegularExpressions.Regex]::Replace($(GDKExtLibNames), '($(Console_GRDKExtLibNamesString))','$(Console_GRDKExtLibRoot)%24%26\ExtensionLibrary.props'))</Console_ExtLibPathsString>
<Console_ExtLibPaths>$([MSBuild]::Unescape($(Console_ExtLibPathsString)))</Console_ExtLibPaths>
```

`GDKExtLibNames` allows up to five libraries to be defined. If the property isn't defined, it defaults to Xbox.Services.API.C.

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

## Gaming.Desktop.x64 project customization

Project customization is required to build a Gaming.Desktop.x64 project with MSBuild from an extracted Microsoft Game Development Kit (GDK).

Note

The primary differences between the Gaming.Desktop.x64, Gaming.Xbox.Scarlett.x64, and Gaming.Xbox.XboxOne.x64 property overrides are minimal. The most important thing to note is that the Gaming.Desktop.x64 files are in the _GRDK_ path. The Gaming.Xbox.Scarlett.x64 and Gaming.Xbox.XboxOne.x64 files are in the _GXDK_ path (excluding extension libraries).

### Gaming.Desktop.x64 property overrides for the GDK

The following properties need to be set to enable a successful build of a project that's configured for the Gaming.Desktop.x64 platform. These properties should be imported before you import _Microsoft.Cpp.Default.props_ as defined within your project file.

#### Descriptions of properties being overridden

- `BWOI_GDK_Path`: A user property that isn't required, but we recommend that you set it to use the property in future property values to reduce hard-coded paths.
- `Platform`: Specifies the platform that will be used to compile the project. The platform in the Microsoft Game Development Kit (GDK) is Gaming.Desktop.x64.
- `XdkEditionTarget`: Overrides which GDK version is used for build compilation. This property is defined in _Platform.default.props_ and is derived from `XdkEdition`, an internal property that's set in _xdk.props_.
- `DurangoXdkInstallPath`: Overrides the _Microsoft Microsoft Game Development Kit (GDK)_ folder location of the extracted GDK. It's defined in _Platform.Edition.default.props_.
- `DefaultXdkEditionRootVS2019`: Overrides the default location of the Visual Studio 2019-compatible `Platform` property and target files. It's defined in _Platform.default.props_. `DefaultXdkEditionRootVS2019` should only be defined when using a project with Visual Studio 2019.
- `XdkEditionRootVS2019`: Overrides the location of the Visual Studio 2019-compatible `Platform` property and target files. It's defined in _Platform.default.props_. `XdkEditionRootVS2019` should only be defined when using a project with Visual Studio 2019.
- `DefaultXdkEditionRootVS2022`: Overrides the default location of the Visual Studio 2022-compatible `Platform` property and target files. It's defined in _Platform.default.props_. `DefaultXdkEditionRootVS2022` should only be defined when using a project with Visual Studio 2022.
- `XdkEditionRootVS2022`: Overrides the location of the Visual Studio 2022-compatible `Platform` property and target files. It's defined in _Platform.default.props_. `XdkEditionRootVS2022` should only be defined when using a project with Visual Studio 2022.
- `PlatformToolset`: Overrides the specific version of the build tools to be used for building. v142 is supported in Visual Studio 2019. v142 and v143 are supported in Visual Studio 2022 (v143 is defined by default). This is defined in _Microsoft.Cpp.Defaults.props_.

Example Gaming.Desktop.x64 property values, based on the previous extracted folder example, for reference:

```
<BWOI_GDK_Path>C:\ExtractedGDK\241000\</BWOI_GDK_Path>
<Platform>Gaming.Desktop.x64</Platform>
<XdkEditionTarget>241000</XdkEditionTarget>
<DurangoXdkInstallPath>$(BWOI_GDK_Path)Microsoft GDK\</DurangoXdkInstallPath>
<DefaultXdkEditionRootVS2019>$(XdkEditionTarget)\GRDK\VS2019\flatDeployment\MSBuild\Microsoft\VC\v160\Platforms\$(Platform)\</DefaultXdkEditionRootVS2019>
<XdkEditionRootVS2019>$(DurangoXdkInstallPath)$(XdkEditionTarget)\GRDK\VS2019\flatDeployment\MSBuild\Microsoft\VC\v160\Platforms\$(Platform)\</XdkEditionRootVS2019>
<DefaultXdkEditionRootVS2022>$(XdkEditionTarget)\GRDK\VS2022\flatDeployment\MSBuild\Microsoft\VC\v170\Platforms\$(Platform)\</DefaultXdkEditionRootVS2022>
<XdkEditionRootVS2022>$(DurangoXdkInstallPath)$(XdkEditionTarget)\GRDK\VS2022\flatDeployment\MSBuild\Microsoft\VC\v170\Platforms\$(Platform)\</XdkEditionRootVS2022>
<PlatformToolset>$(PlatformToolset)</PlatformToolset>
```

To override the _Platform_ folder to detect Gaming.Desktop.x64-specific .props and targets, see the following section on Visual Studio platform overrides.

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

### Gaming.Desktop.x64 property overrides for Windows 10 SDK

The following properties need to be set only when using an extracted Windows 10 SDK. If you're using an installed Windows 10 SDK, this section can be skipped.

- `BWOI_Win10SDK_Path`: A user property that isn't required, but we recommend that you set it to use the property in future property values to reduce hard-coded paths.
- `WindowsSdkDir`: Overrides the location of the Windows 10 SDK.
- `WindowsSdkDir_10`: Overrides the location of the Windows 10 SDK (Windows 10). This property is checked via a registry key in _Microsoft.Cpp.WindowsSDK.props_, which is imported during build compilation.
- `UCRTContentRoot`: Overrides the location of the Universal CRT Content Root. This property is defined in _uCRT.props_.
- `UniversalCRTSdkDir`: Overrides the location of the Universal CRT SDK (Visual C++ C Runtime). It's checked via a registry key in _Microsoft.Cpp.WindowsSDK.props_, which is imported during build compilation.
- `UniversalCRTSdkDir_10`: Overrides the location of the Universal CRT SDK (Visual C++ C Runtime for Windows 10). It's checked via a registry key in _Microsoft.Cpp.WindowsSDK.props_, which is imported during build compilation.
- `WindowsSDK_ExecutablePath_x86`: Overrides the location of the x86 tools that are included in the Windows 10 SDK. Tools such as `rc.exe` reside in this location. It's defined in _Microsoft.Cpp.WindowsSDK.props_.
- `WindowsSDK_ExecutablePath_x64`: Overrides the location of the x64 tools that are included in the Windows 10 SDK. Tools such as `rc.exe` reside in this location. It's defined in _Microsoft.Cpp.WindowsSDK.props_.
- `WindowsTargetPlatformVersion`: Overrides the version of the Windows 10 SDK that's being used. It's defined in the _Platform.Edition.default.props_ folder (walks a local path if it's not defined).
- `TargetPlatformVersion`: Overrides the version of the Windows 10 SDK that's being used. It's defined in _Microsoft.Cpp.WindowsSDK.props_.

Example property values, based on the previous extracted folder example, for reference:

```
<BWOI_Win10SDK_Path>C:\ExtractedWin10SDK\</BWOI_Win10SDK_Path>
<WindowsSdkDir>$(BWOI_Win10SDK_Path)Windows Kits\10\</WindowsSdkDir>
<WindowsSdkDir_10>$(WindowsSdkDir)</WindowsSdkDir_10>
<UCRTContentRoot>$(WindowsSdkDir)</UCRTContentRoot>
<UniversalCRTSdkDir>$(WindowsSdkDir)</UniversalCRTSdkDir>
<UniversalCRTSdkDir_10>$(WindowsSdkDir)</UniversalCRTSdkDir_10>
<WindowsSDK_ExecutablePath_x86>$(WindowsSdkDir)bin\$(WindowsTargetPlatformVersion)\x86</WindowsSDK_ExecutablePath_x86>
<WindowsSDK_ExecutablePath_x64>$(WindowsSdkDir)bin\$(WindowsTargetPlatformVersion)\x64</WindowsSDK_ExecutablePath_x64>
<WindowsTargetPlatformVersion>10.0.19041.0</WindowsTargetPlatformVersion>
<TargetPlatformVersion>$(WindowsTargetPlatformVersion)</TargetPlatformVersion>
```

> The Microsoft GDK requires Windows 10 SDK (19041) or later. You can make use of Windows 10 SDK (20348) if you want, but it's not required.

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

### Gaming.Desktop.x64 library and include references

Library and include references do _not_ need to be directly overridden, because they derive from the previously mentioned overridden paths. This section is for reference only.

These references are defined in _Platform.Edition.props_ within the Gaming.Desktop.x64 _Platform_ folder. The properties are constructed as follows.

```
<Console_LibRoot>$(WindowsSDKDir)Lib\$(TargetPlatformVersion)\</Console_LibRoot>
<Console_EndpointLibRoot>$(DurangoXdkInstallPath)GRDK\gameKit\Lib\amd64</Console_EndpointLibRoot>
<Console_EndpointIncludeRoot>$(DurangoXdkInstallPath)GRDK\gameKit\Include\</Console_EndpointIncludeRoot>
<Console_WindowsIncludeRoot>$(WindowsSDKDir)Include\$(TargetPlatformVersion)\</Console_WindowsIncludeRoot>
<Console_Libs>dxguid.lib;D3D12.lib;dxgi.lib;runtimeobject.lib;xGameRuntime.lib;</Console_Libs>
<Console_UCRTRedistDebug>$(WindowsSDKDir)bin\$(TargetPlatformVersion)\x64\ucrt\</Console_UCRTRedistDebug>
<Console_SdkRoot>$(DurangoXdkInstallRoot)</Console_SdkRoot>
<Console_SdkIncludeRoot>$(Console_EndpointIncludeRoot);$(WindowsSDK_IncludePath);$(UniversalCRT_IncludePath);$(VC_VC_IncludePath);</Console_SdkIncludeRoot>
<Console_SdkLibPath>$(Console_EndpointLibRoot);$(Console_LibRoot)um\x64;$(Console_LibRoot)ucrt\x64</Console_SdkLibPath>
```

Example defines of library and include properties in MSBuild logs:

```
Console_EndpointIncludeRoot = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\gameKit\Include\
Console_EndpointLibRoot = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\gameKit\Lib\amd64
Console_ExtLibPaths = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\ExtensionLibrary.props
Console_ExtLibPathsString = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\ExtensionLibrary.props
Console_GRDKExtLibNamesString = PlayFab.Party.Cpp|PlayFab.PartyXboxLive.Cpp|Xbox.Game.Chat.2.Cpp.API|Xbox.Services.API.C
Console_GRDKExtLibRoot = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\
Console_LibRoot = C:\Program Files (x86)\Windows Kits\10\Lib\10.0.19041.0\
Console_Libs = dxguid.lib;D3D12.lib;dxgi.lib;runtimeobject.lib;xGameRuntime.lib;
Console_SdkIncludeRoot = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\Include;C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\gameKit\Include\;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\um;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\shared;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\winrt;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\cppwinrt;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\ucrt;C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\ucrt;;C:\Program Files (x86)\Microsoft Visual Studio\2022\Enterprise\VC\Tools\MSVC\14.30.30705\include;;
Console_SdkLibPath = C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\ExtensionLibraries\Xbox.Services.API.C\Lib\x64\Release\v143;C:\ExtractedGDK\241000\Microsoft GDK\241000\GRDK\gameKit\Lib\amd64;C:\Program Files (x86)\Windows Kits\10\Lib\10.0.19041.0\um\x64;C:\Program Files (x86)\Windows Kits\10\Lib\10.0.19041.0\ucrt\x64
Console_SdkRoot = C:\ExtractedGDK\241000\Microsoft GDK\
Console_WindowsIncludeRoot = C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\
```

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

### Gaming.Desktop.x64 extension libraries

Extension libraries exist for Xbox.Services.API.C, Xbox.Game.Chat.2.Cpp.API, Xbox.XCurl.API, PlayFab.Party.Cpp, and PlayFab.PartyXboxLive.Cpp. If you're using these features, they should be imported into your project and the proper properties overridden, based on what's defined in the following .props files.

- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\ExtensionLibraries\\Xbox.Services.API.C\\ExtensionLibrary.props_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\ExtensionLibraries\\Xbox.Game.Chat.2.Cpp.API\\ExtensionLibrary.props_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\ExtensionLibraries\\PlayFab.Party.Cpp\\ExtensionLibrary.props_
- _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\ExtensionLibraries\\PlayFab.PartyXboxLive.Cpp\\ExtensionLibrary.props_

> Note: The .props file for Xbox.Services.API.C has added Appnotify.lib as an additional dependency and you will need to import that library into your project.

Extension library properties are defined in _Platform.Edition.props_ within the target platform folder. An example of the how these properties are constructed is as follows.

```
<GDKExtLibNames Condition="'$(GDKExtLibNames)'==''">Xbox.Services.API.C</GDKExtLibNames>
<Console_GRDKExtLibRoot>$(DurangoXdkInstallPath)GRDK\ExtensionLibraries\</Console_GRDKExtLibRoot>
<Console_GRDKExtLibNamesString>$([System.String]::Join('|', $([System.IO.Directory]::GetDirectories(&quot;$(Console_GRDKExtLibRoot)&quot;))).Replace('$(Console_GRDKExtLibRoot)',''))</Console_GRDKExtLibNamesString>
<Console_ExtLibPathsString>$([System.Text.RegularExpressions.Regex]::Replace($(GDKExtLibNames), '($(Console_GRDKExtLibNamesString))','$(Console_GRDKExtLibRoot)%24%26\ExtensionLibrary.props'))</Console_ExtLibPathsString>
<Console_ExtLibPaths>$([MSBuild]::Unescape($(Console_ExtLibPathsString)))</Console_ExtLibPaths>
```

`GDKExtLibNames` allows up to five libraries to be defined. If it isn't defined, it defaults to Xbox.Services.API.C.

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

## Property overrides for PC-side tools

When using the Microsoft Game Development Kit (GDK) as an extracted flat deployment, we recommend that you define these properties if you're also using PC-side tooling.

```
<GameDK>$(BWOI_Win10SDK_Path)</GameDK>
<GameDKLatest>$(BWOI_Win10SDK_Path)$(XDKEditionTarget)\</GameDKLatest>
<GRDKLatest>$(GameDKLatest)GRDK\</GRDKLatest>
<GXDKLatest>$(GameDKLatest)GXDK\</GXDKLatest>
```

## Visual Studio version-specific overrides

This section details version-specific Visual Studio properties that are required to be overridden to properly work with build without installation.

### Visual Studio 2019 platform overrides

Starting with Visual Studio 2019, the `_PlatformFolder` property was deprecated. The solution for supporting a project configuration without installation requires additional steps in Visual Studio 2019.

To do this, copy the required files from an installed version of Visual Studio 2019 to your extracted GDK path. For example:

- For v142 Platform Toolset: _C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Enterprise\\MSBuild\\Microsoft\\VC\\v160_

These should be copied to match the folder structure of the following paths.

- For v142 Platform Toolset: _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\VS2019\\flatDeployment\\MSBuild\\Microsoft\\VC\\v160\\Platforms_

Note

The previous example involves copying files directly into your _ExtractedGDK_ folder. If you would prefer to keep the extracted GDK and Visual Studio VC Targets files separate for reference/maintainability, you can copy both the _ExtractedGDK_ and VC Targets into a new combined folder path, as previously mentioned, for referencing by your build system.

An example of this would be as follows.

- Copy all the files from _C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Enterprise\\MSBuild\\Microsoft\\VC\\v160_ root (\*.\*) to a similar path within the _C:\\ExtractedGDK\\241000\_CombinedGDK\\_ folder.
- Copy all the files from \*C:\\ExtractedGDK\\241000\\Microsoft GDK\* into a similar path within the _C:\\ExtractedGDK\\241000\_CombinedGDK\\_ folder.
- Change _references/paths/properties_ to point to _C:\\ExtractedGDK\\241000\_CombinedGDK\\_ equivalent paths.

After this is completed, the following properties need to be overridden when invoking the build in Visual Studio 2019 to properly find the `Platform` properties and target file location.

- Set `DisableInstalledVCTargetsUse` to `true`
- `VCTargetsPath16`: Overrides the Visual Studio path for determining where the Visual Studio 2019 Build Tools (v160) property and target files are located.

Note

Because the VC Targets Path property is part of defining the `XdkEditionRootVS2019` property, you can opt to avoid setting `XdkEditionRootVS2019` in this case.

An example property value, based on the previous extracted folder example, for reference:

```
<DisableInstalledVCTargetsUse>true</DisableInstalledVCTargetsUse>
<VCTargetsPath16>$(DurangoXdkInstallPath)$(XdkEditionTarget)\GXDK\VS2019\flatDeployment\MSBuild\Microsoft\VC\v160\</VCTargetsPath16>
```

Note

In the scenario where you would like to keep the _ExtractedGDK_ and VC Targets separate for reference/maintainability, you can specify the `VCTargetsPath` properties as such (where _$(CombinedGDK)_ is the new location that you've created).

- Set `VCTargetsPath16` to _$(CombinedGDK)\\v160\\_

### Visual Studio 2019 (16.5) property to respect Windows 10 SDK overrides

When using Visual Studio 2019 version 16.5 or later, another property needs to be set to ensure that the Windows 10 SDK property overrides are properly respected, shown as follows.

```
<ClearDevCommandPromptEnvVars>false</ClearDevCommandPromptEnvVars>
<VCToolsVersion />
```

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

### Visual Studio 2022 platform overrides

Starting with Visual Studio 2019, the `_PlatformFolder` property was deprecated. The solution for supporting a project configuration without installation requires additional steps in Visual Studio 2022.

To do this, copy the required files from an installed version of Visual Studio 2022 to your extracted GDK path. For example:

- For v142 Platform Toolset: _C:\\Program Files\\Microsoft Visual Studio\\2022\\Enterprise\\MSBuild\\Microsoft\\VC\\v160_
- For v143 Platform Toolset: _C:\\Program Files\\Microsoft Visual Studio\\2022\\Enterprise\\MSBuild\\Microsoft\\VC\\v170_

These should be copied to match the folder structure of the following paths.

- For v142 Platform Toolset: _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\VS2022\\flatDeployment\\MSBuild\\Microsoft\\VC\\v160\\Platforms_
- For v143 Platform Toolset: _C:\\ExtractedGDK\\241000\\Microsoft GDK\\241000\\GRDK\\VS2022\\flatDeployment\\MSBuild\\Microsoft\\VC\\v170\\Platforms_

Note

The previous example involves copying files directly into your _ExtractedGDK_ folder. If you would prefer to keep the extracted GDK and Visual Studio VC Targets files separate for reference/maintainability, you can copy both the _ExtractedGDK_ and VC Targets into a new combined folder path, as previously mentioned, for referencing by your build system.

An example of this would be as follows.

- Copy all the files from _C:\\Program Files\\Microsoft Visual Studio\\2022\\Enterprise\\MSBuild\\Microsoft\\VC\\v170_ root (\*.\*) to a similar path within the _C:\\ExtractedGDK\\241000\_CombinedGDK\\_ folder.
- Copy all the files from \*C:\\ExtractedGDK\\241000\\Microsoft GDK\* into a similar path within the _C:\\ExtractedGDK\\241000\_CombinedGDK\\_ folder.
- Change _references/paths/properties_ to point to _C:\\ExtractedGDK\\241000\_CombinedGDK\\_ equivalent paths.

After this is completed, the following properties need to be overridden when invoking the build in Visual Studio 2022 to properly find the `Platform` properties and target file location.

- Set `DisableInstalledVCTargetsUse` to `true`
- `VCTargetsPath16`: Overrides the Visual Studio path for determining where the Visual Studio 2019 Build Tools (v160) property and target files are located.
- `VCTargetsPath17`: Overrides the Visual Studio path for determining where the Visual Studio 2022 Build Tools (v170) property and target files are located.

Note

Because the VC Targets Path property is part of defining the `XdkEditionRootVS2022` property, you can opt to avoid setting `XdkEditionRootVS2022` in this case.

An example property value, based on the previous extracted folder example, for reference:

```
<DisableInstalledVCTargetsUse>true</DisableInstalledVCTargetsUse>
<VCTargetsPath16>$(DurangoXdkInstallPath)$(XdkEditionTarget)\GXDK\VS2022\flatDeployment\MSBuild\Microsoft\VC\v160\</VCTargetsPath16>
<VCTargetsPath17>$(DurangoXdkInstallPath)$(XdkEditionTarget)\GXDK\VS2022\flatDeployment\MSBuild\Microsoft\VC\v170\</VCTargetsPath17>
```

Note

In the scenario where you would like to keep the _ExtractedGDK_ and VC Targets separate for reference/maintainability, you can specify the `VCTargetsPath` properties as such (where _$(CombinedGDK)_ is the new location that you've created).

- Set `VCTargetsPath16` to _$(CombinedGDK)\\v160\\_
- Set `VCTargetsPath17` to _$(CombinedGDK)\\v170\\_

### Visual Studio 2022 property to respect Windows 10 SDK overrides

Additionally, another property needs to be set to ensure that the Windows 10 SDK property overrides are properly respected, shown as follows.

```
<ClearDevCommandPromptEnvVars>false</ClearDevCommandPromptEnvVars>
```

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

## Project configuration samples

This section describes how to get code samples for scenarios without installation.

### CMake sample

The **CMakeExample** Sample, including instructions to get up and running, can be downloaded for reference from the [Xbox Developer Downloads](https://aka.ms/gdkdl) page. Under "Select file type," choose "GDK," and under "Select build/version number," choose the latest "Samples only" item.

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

### MSBuild sample

The **BWOIExample** Sample, including instructions to get up and running, can be downloaded for reference from the [Xbox Developer Downloads](https://aka.ms/gdkdl) page. Under "Select file type," choose "GDK," and under "Select build/version number," choose the latest "Samples only" item.

[Return to the top of this topic.](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/project-configuration-withoutinstall?view=gdk-2604)

## See also

[Using tools without installing the Microsoft Game Development Kit](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/tools-usage-withoutinstall?view=gdk-2604)

[Using the Microsoft Game Development Kit without installation](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/usingwithoutinstall/gc-usingwithoutinstall-toc?view=gdk-2604)

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