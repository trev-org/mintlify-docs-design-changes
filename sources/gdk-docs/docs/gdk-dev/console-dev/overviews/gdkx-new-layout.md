---
author: chuckw
title: "GDKX header and library directory structure"
description: "Describes the new directory layout for GDKX headers and libraries."
kindex: GDKX header and library directory structure
ms.author: chuckw
ms.topic: article
edited: 07/01/2025
ms.date: '08/01/2022'
permissioned-type: public
---

# A simplified GDKX directory structure

> [!NOTE]
> The new Microsoft Game Development Kit (GDK) layout for headers and libraries described in this topic is expected to be released in the October 2025 GDK.  Contact your Microsoft account manager if you're interested in preview builds of this GDK.

In current versions of the Microsoft Game Development Kit (GDK), the layout was optimized around code-sharing and focused on specific platforms. Build integration for this layout relied heavily on hiding the complexity in MSBuild custom platforms. For the new layout, the focus is on simplifying the integration, supporting a growing list of target platforms, and improving support for both stock MSBuild platforms and non-Microsoft build systems.

## Old headers and libraries layout

The existing file layout for the Microsoft GDK is summarized as follows.

```
251000\
    GRDK\
        ExtensionLibraries\
            Xbox.Services.API.C\
                ExtensionLibrary.props
                DesignTime\CommonConfiguration\Neutral\
                    Include\
                    Lib\
                    Redist\
            ...
        GameKit\
            Include\
            Lib\
                amd64\
```

```
    GXDK\
        gameKit\
            Include\
                XboxOne\
                Scarlett\
            Lib\
                amd64\
                    XboxOne\
                    Scarlett\
        ToolKit\
            Include\
                    XboxOne\
                    Scarlett\
            Lib\
                amd64\
                    XboxOne\
                    Scarlett\
```

The **Gaming.Desktop.x64**, **Gaming.Xbox.Scarlett.x64**, and **Gaming.Xbox.XboxOne.x64** custom MSBuild platforms implement all the logic for building the include/lib paths that combine all this content in various ways. If you used CMake or a custom make solution, this logic had to be implemented there as well. For a detailed example, see the April 2025 version of [CMakeExample](https://github.com/microsoft/Xbox-GDK-Samples/tree/apr2025/Samples/Tools/CMakeExample).

The old layout is still present in the October 2025 GDK to support both old and new styles.  Both the new and old layouts will be installed by default.  The GDK setup now includes an option to install just the new layout. A future GDK will remove the old layout to reduce the hard drive footprint and overall download size.  The current target date for removing the old layout will be one year from the time the October 2025 GDK is released.

## New headers and libraries layout

For the October 2025 GDK release, it now offers an alteranative layout for the headers and libraries that make the platform integration much easier and able to accommodate additional platforms over time.

```
251000\
    windows\
        bin\
            arm64
            x64\
        include\
        lib\
            arm64
            x64\
        redist

    xbox\
        bin\
           gen8\
           gen9\
           devpctools\
              gen8\
              gen9\
              x64\
           x64\
        build\
        include\
        lib\
        redist\
        source\

```

## Using the new layout with MSBuild custom platforms

The existing **Gaming.*.x64** MSBuild platforms will use the old layout by default, but you can opt into the new layout by setting the **GDKCrossPlatform** property.

```xml
<PropertyGroup Label="Globals">
...
  <GDKCrossPlatform>true</GDKCrossPlatform>
</PropertyGroup>
```

This results in the appropriate include/lib paths being added to the project instead of the various complex paths were used by the old layout.

In this new simplified integration, the extension libraries mechanism is no longer used. All content is available at build-time by default in the include/lib paths.

The project then needs to link to the additional libraries it makes use of. Projects that are built on the older GDK project templates should contain statements like the following.

```xml
<AdditionalDependencies>uuid.lib;$(Console_Libs);%(XboxExtensionsDependencies);%(AdditionalDependencies)</AdditionalDependencies>
```

For the new layout the **Console_Libs** property will list the core required libraries.

|Platform|Core libs|
|---|---|
|Gaming.*.x64|xgameruntime.lib d3d12.lib dxguid.lib dxgi.lib gameinput.lib|
|Gaming.Xbox.Scarlett.x64|xgameruntime.lib xgameplatform.lib d3d12_xs.lib xg_xs.lib pixevt.lib xmem.lib|
|Gaming.Xbox.XboxOne.x64|xgameruntime.lib xgameplatform.lib d3d12_x.lib xg_x.lib pixevt.lib xmem.lib |

The project needs to add to **AdditionalDependencies** the extension libraries it consumes because they're each 'opt-in'.

|Platform|Core libs|
|---|---|
|Xbox.LibHttpClient|libHttpClient.lib|
|Xbox.XCurl.API|XCurl.lib|
|Xbox.Game.Chat.2.Cpp.API|GameChat2.lib|
|Xbox.Services.API.C (Debug)|Appnotify.lib winhttp.lib crypt32.lib Microsoft.Xbox.Services.142.C.Debug.lib|
|Xbox.Services.API.C (Release)|Appnotify.lib winhttp.lib crypt32.lib Microsoft.Xbox.Services.142.C.lib|
|PlayFab.Party.Cpp|Party.lib|
|PlayFab.PartyXboxLive.Cpp|PartyXboxLive.lib|
|PlayFab.Services.C|PlayFabCore.lib PlayFabGameSave.lib PlayFabServices.lib|
|PlayFab.Multiplayer.Cpp|PlayFabMultiplayer.lib|

The project also needs to copy the additional DLLs it uses into the layout. This can be done either via Custom Build steps that are typical of many DLL library integrations, or by editing the vcxproj or adding a props file to use the **ReferenceCopyLocalPaths** item group list. The MSBuild below lists all the possible DLLs but individual projects will only need some of these.

```xml
  <PropertyGroup>
    <GDKCrossPlatformPath Condition="'$(GDKCrossPlatformPath)'==''">$(GameDKCoreLatest)</GDKCrossPlatformPath>
    <GDKCrossPlatformPath Condition="'$(GDKCrossPlatformPath)'==''">$(GameDKXboxLatest)</GDKCrossPlatformPath>
  </PropertyGroup>

  <ItemGroup Condition="'$(Platform)'=='Gaming.Desktop.x64'">
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\libHttpClient.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\XCurl.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\GameChat2.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\Party.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\PartyXboxLive.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\PlayFabCore.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\PlayFabGameSave.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\PlayFabMultiplayer.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\PlayFabServices.dll" />
  </ItemGroup>

  <ItemGroup Condition="'$(Platform)'=='Gaming.Xbox.Scarlett.x64'">
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\libHttpClient.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\XCurl.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\GameChat2.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\Party.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PartyXboxLive.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PlayFabCore.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PlayFabGameSave.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PlayFabMultiplayer.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PlayFabServices.dll" />
  </ItemGroup>

  <ItemGroup Condition="'$(Platform)'=='Gaming.Xbox.XboxOne.x64'">
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\libHttpClient.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\XCurl.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\GameChat2.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\Party.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PartyXboxLive.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PlayFabCore.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PlayFabGameSave.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PlayFabMultiplayer.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PlayFabServices.dll" />
  </ItemGroup>
```

> [!NOTE]
> `GameDKLatest` is only set by the Microsoft GDK with Xbox Extensions. As a result, we introduced new environment variables that fully support side-by-side installation of both versions of the Microsoft GDK: `GameDKCoreLatest` is set by the Microsoft GDK. `GameDKXboxLatest` is set by the Microsoft GDK with Xbox Extensions.

### Using a Directory.Build.props

As a way to quickly validate existing GDK Gaming.*.x64 projects by using the new layout, place the following content into a file named Directory.Build.props in your source tree. This opts in to the new layout and includes most or all extension libraries even if not used by the project.

> [!NOTE]
> The **GDKExtLibNames** property isn't used by the MSBuild rules when building with **GDKCrossPlatform** set to true. Because it's already present for building with the older MSBuild rules, it is used in this props file as a way to opt in to some additional DLLs in the layout.

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">

  <PropertyGroup>
    <GDKCrossPlatform>true</GDKCrossPlatform>
    <GDKCrossPlatformPath Condition="'$(GDKCrossPlatformPath)'==''">$(GameDKCoreLatest)</GDKCrossPlatformPath>
    <GDKCrossPlatformPath Condition="'$(GDKCrossPlatformPath)'==''">$(GameDKXboxLatest)</GDKCrossPlatformPath>
    <AllExtensionLibs>Appnotify.lib;winhttp.lib;crypt32.lib;libHttpClient.lib;XCurl.lib;GameChat2.lib;PlayFabCore.lib;PlayFabServices.lib;PlayFabMultiplayer.lib;Party.lib;PartyXboxLive.lib;PlayFabGameSave.lib</AllExtensionLibs>
    <AllExtensionLibs Condition="'$(Configuration)'=='Debug'">Microsoft.Xbox.Services.142.C.Debug.lib;$(AllExtensionLibs)</AllExtensionLibs>
    <AllExtensionLibs Condition="'$(Configuration)'!='Debug'">Microsoft.Xbox.Services.142.C.lib;$(AllExtensionLibs)</AllExtensionLibs>
  </PropertyGroup>

  <ItemDefinitionGroup Condition="'$(Platform)'=='Gaming.Desktop.x64'">
    <Link>
      <AdditionalDependencies>$(AllExtensionLibs);%(AdditionalDependencies)</AdditionalDependencies>
    </Link>
  </ItemDefinitionGroup>

  <!--
    We use XboxExtensionsDependencies because of a hack in our Gaming.Xbox.*.x64 platforms which forces
    AdditionalDependencies to xgameplatform.lib, but means we can't use AdditionalDependencies this early.
  -->

  <ItemDefinitionGroup Condition="'$(Platform)'=='Gaming.Xbox.Scarlett.x64' OR '$(Platform)'=='Gaming.Xbox.XboxOne.x64'">
    <Link>
      <XboxExtensionsDependencies>$(AllExtensionLibs);%(XboxExtensionsDependencies)</XboxExtensionsDependencies>
    </Link>
  </ItemDefinitionGroup>

  <!--
    Makes sure we deploy all the libs we need. We use the 'old layout' GDKExtLibNames property as a way to test
    what is requested to try to reduce the over-inclusion of unused DLLs.
  -->

  <ItemGroup Condition="'$(Platform)'=='Gaming.Desktop.x64'">
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\libHttpClient.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\XCurl.dll" />
  </ItemGroup>

  <ItemGroup Condition="'$(Platform)'=='Gaming.Desktop.x64' AND $(GDKExtLibNames.Contains('Xbox.Game.Chat.2.Cpp.API'))">
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\GameChat2.dll" />
  </ItemGroup>

  <ItemGroup Condition="'$(Platform)'=='Gaming.Desktop.x64' AND $(GDKExtLibNames.Contains('PlayFab'))">
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\Party.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\PartyXboxLive.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\PlayFabCore.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\PlayFabGameSave.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\PlayFabMultiplayer.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)windows\bin\x64\PlayFabServices.dll" />
  </ItemGroup>

  <ItemGroup Condition="'$(Platform)'=='Gaming.Xbox.Scarlett.x64' OR '$(Platform)'=='Gaming.Xbox.XboxOne.x64'">
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\libHttpClient.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\XCurl.dll" />
  </ItemGroup>

  <ItemGroup Condition="('$(Platform)'=='Gaming.Xbox.Scarlett.x64' OR '$(Platform)'=='Gaming.Xbox.XboxOne.x64') AND $(GDKExtLibNames.Contains('Xbox.Game.Chat.2.Cpp.API'))">
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\GameChat2.dll" />
  </ItemGroup>

  <ItemGroup Condition="('$(Platform)'=='Gaming.Xbox.Scarlett.x64' OR '$(Platform)'=='Gaming.Xbox.XboxOne.x64') AND $(GDKExtLibNames.Contains('PlayFab'))">
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\Party.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PartyXboxLive.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PlayFabCore.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PlayFabGameSave.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PlayFabMultiplayer.dll" />
    <ReferenceCopyLocalPaths Include="$(GDKCrossPlatformPath)xbox\bin\x64\PlayFabServices.dll" />
  </ItemGroup>

</Project>
```
## Using the new layout with the MSBuild x64 platform

Instead of using the **Gaming.Desktop.x64** platform, you can use the stock **x64** platform to build for PC. In the old layout, this required adding ``<Import Project="...\ExtensionLibrary.props">`` statements for the Extension Libraries as detailed in the [Using the x64 platform with the Microsoft Game Development Kit (GDK)](../../../tools/tools-pc/visualstudio/gr-vs-templates.md#using-the-x64-platform-with-the-microsoft-game-development-kit-gdk).

In the new layout, the integration instructions are streamlined.

```xml
  <PropertyGroup>
    <GDKCrossPlatformPath Condition="'$(GDKCrossPlatformPath)'==''">$(GameDKCoreLatest)</GDKCrossPlatformPath>
    <GDKCrossPlatformPath Condition="'$(GDKCrossPlatformPath)'==''">$(GameDKXboxLatest)</GDKCrossPlatformPath>
  </PropertyGroup>
```

```xml
<PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Debug|x64'">
  <ExecutablePath>$(GameDK)bin;$(GDKCrossPlatformPath)windows\bin\x64;$(ExecutablePath)</ExecutablePath>
  <IncludePath>$(GDKCrossPlatformPath)windows\Include;$(IncludePath);</IncludePath>
  <LibraryPath>$(GDKCrossPlatformPath)windows\lib\x64;$(LibraryPath)</LibraryPath>
</PropertyGroup>
```

```xml
<PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Release|x64'">
  <ExecutablePath>$(GameDK)bin;$(GDKCrossPlatformPath)windows\bin\x64;$(ExecutablePath)</ExecutablePath>
  <IncludePath>$(GDKCrossPlatformPath)windows\Include;$(IncludePath);</IncludePath>
  <LibraryPath>$(GDKCrossPlatformPath)windows\lib\x64;$(LibraryPath)</LibraryPath>
</PropertyGroup>
```

Add all required extension libraires to **AdditionalDependencies** along with the original list.

```xml
<AdditionalDependencies>xgameruntime.lib;gameinput.lib;d3d12.lib;dxgi.lib;dxguid.lib;uuid.lib;kernel32.lib;user32.lib;%(AdditionalDependencies)</AdditionalDependencies>
```

Opt-in extension library DLLs need to be copied into the binary directory as above by using a Custom Build action or by using the **ReferenceCopyLocalPaths** item group for the final layout.

The remaining instructions for **PreprocessorDefinitions** and handling the .mgc file with image assets remain unchanged.

## Using the new layout with CMake

When using the Microsoft Visual Studio generators with CMake and using the **Gaming.\*.x64** custom MSBuild platforms, the new layout is enabled with the following.

```
set_property(TARGET ${PROJECT_NAME} PROPERTY VS_GLOBAL_GDKCrossPlatform "true")
```

In the [CMakeGDKExample](https://github.com/microsoft/Xbox-GDK-Samples/tree/apr2025/Samples/Tools/CMakeGDKExample), remove the use of `VS_GLOBAL_GDKExtLibNames` and replace it with the following (assuming CMake 3.21 or later) to copy the used extension DLLs into the layout.

```
add_custom_command(TARGET ${PROJECT_NAME} POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E $<IF:$<BOOL:$<TARGET_RUNTIME_DLLS:${PROJECT_NAME}>>,copy,true>
    $<TARGET_RUNTIME_DLLS:${PROJECT_NAME}> $<TARGET_FILE_DIR:${PROJECT_NAME}>
    COMMAND_EXPAND_LISTS
    )
```

## Using the new layout with custom build systems

Building for Windows x64 by using the GDK requires the following.

```cmd
set INCLUDE=%GameDKXboxLatest%windows\include;%INCLUDE%
set LIB=%GameDKXboxLatest%windows\lib\x64;%LIB%
set PATH=%GameDK%bin;%GameDKXboxLatest%windows\bin\x64;%PATH%
```

Building for Xbox Series X|S (a.k.a. *Gaming.Xbox.Scarlett.x64*) requires:

```cmd
set INCLUDE=%GameDKXboxLatest%xbox\include\gen9;%GameDKXboxLatest%xbox\include;%INCLUDE%
set LIB=%GameDKXboxLatest%xbox\lib\gen9;%GameDKXboxLatest%xbox\lib\x64;%LIB%
set PATH=%GameDK%bin;%GameDKXboxLatest%xbox\bin\gen9;%GameDKXboxLatest%xbox\bin\x64;%PATH%
```

Building for Xbox One (a.k.a. *Gaming.Xbox.XboxOne.x64*) requires:

```cmd
set INCLUDE=%GameDKXboxLatest%xbox\include\gen8;%GameDKXboxLatest%xbox\include;%INCLUDE%
set LIB=%GameDKXboxLatest%xbox\lib\gen8;%GameDKXboxLatest%xbox\lib\x64;%LIB%
set PATH=%GameDK%bin;%GameDKXboxLatest%xbox\bin\gen8;%GameDKXboxLatest%xbox\bin\x64;%PATH%
```


## Using the new layout for PC content tools

For console development, some kinds of content 'cooking' take place on the development PC using XTF APIs, the XMA2 encoding library, and/or custom Direct3D 12.X tooling. Accessing this content requires specific build setup:

Building PC tools that target both Xbox One and Xbox Series X|S requires:

```cmd
set INCLUDE=%GameDKXboxLatest%xbox\include\devpctools;%GameDK%\toolKit\include;%INCLUDE%
set LIB=%GameDKXboxLatest%xbox\lib\devpctools\x64;%GameDK%\toolKit\lib\amd64;%LIB%
set PATH=%GameDK%bin;%PATH%
```

Building PC tools that target Xbox Series X|S graphics requires:

```cmd
set INCLUDE=%GameDKXboxLatest%xbox\include\devpctools\gen9;%GameDKXboxLatest%xbox\include\devpctools;%GameDK%\toolKit\include;%INCLUDE%
set LIB=%GameDKXboxLatest%xbox\lib\devpctools\gen9;%GameDKXboxLatest%xbox\lib\devpctools\x64;%GameDK%\toolKit\lib\amd64;%LIB%
set PATH=%GameDKXboxLatest%xbox\devpctools\bin\gen9;%GameDK%bin;%PATH%
```

Building PC tools that target Xbox One graphics requires:

```cmd
set INCLUDE=%GameDKXboxLatest%xbox\include\devpctools\gen8;%GameDKXboxLatest%xbox\include\devpctools;%GameDK%\toolKit\include;%INCLUDE%
set LIB=%GameDKXboxLatest%xbox\lib\devpctools\gen8;%GameDKXboxLatest%xbox\lib\devpctools\x64;%GameDK%\toolKit\lib\amd64;%LIB%
set PATH=%GameDKXboxLatest%xbox\devpctools\bin\gen8;%GameDK%bin;%PATH%
```

## Reading build edition from an installed file

The new layout does not contain the `grdk.ini` or `gxdk.ini` files. To find the edition information by parsing a file, use `grdk.h` or `gxdk.h`.

Here is an example in PowerShell that works with older GDK releases as well.

```powershell
$result = Get-ChildItem -Path $env:GameDKXboxLatest -Filter "gxdk.h" -Recurse
if ($result.Count -eq 0)
{
    $result = Get-ChildItem -Path $env:GXDKLatest -Filter "gxdk.h" -Recurse
}
if ($result.Count -eq 0)
{
    Write-Error "##[error]Failed to find gxdk.h in either GameDKXboxLatest or GXDKLatest" -ErrorAction Stop
}

$content = Get-Content -Path $result[0].FullName

if (-not ([string]$content -match '#define\s+_GXDK_EDITION\s+([0-9][0-9][0-9][0-9][0-9][0-9])')) {
    Write-Error "##[error]Failed to find edition define" -ErrorAction Stop
}

$xbld_edition = $Matches[1]

if (-not ([string]$content -match '#define\s+_GXDKVER_PRODUCTBUILDVER_FULL\s+([0-9]+\.[0-9]+\.([0-9]+)\.[0-9]+)')) {
    Write-Error "##[error]Failed to find full version define" -ErrorAction Stop
}

$xbld_full_productbuild = $Matches[1]
$xbld_build = $Matches[2]

if (-not ([string]$content -match '#define\s+_GXDK_MM_NUM\s+([0-9]{1,2})')) {
    Write-Error "##[error]Failed to find month define" -ErrorAction Stop
}

$month = $Matches[1]

if (-not ([string]$content -match '#define\s+_GXDK_FULLYY\s+([0-9]{4})')) {
    Write-Error "##[error]Failed to find full year define" -ErrorAction Stop
}

$year = $Matches[1]

Write-Output ("_xbld_name={0} {1} GXDK" -f (Get-Culture).DateTimeFormat.GetMonthName([int]$month), $year)
Write-Output ("_xbld_edition={0}" -f $xbld_edition)
Write-Output ("_xbld_full_productbuild={0}" -f $xbld_full_productbuild)
Write-Output ("_xbld_build={0}" -f $xbld_build)
```

## Build without install (BWOI)

The MSBuild custom build platform files that were originally located under `<edition>\flatDeployment` in the old layout are now located under `<edition>\xbox\build` with shortened paths.

For example, to setup a BWOI MSBuild rule folder for VS 2022, use these commands.

```cmd
rd /q /s c:\temp\msbuildgdk
md c:\temp\msbuildgdk
xcopy "%VSInstallDir%\MSBuild\Microsoft\VC" /s c:\temp\msbuildgdk
xcopy "%GameDKXboxLatest%\xbox\build\VS2022\gen8" c:\temp\msbuildgdk /s
xcopy "%GameDKXboxLatest%\xbox\build\VS2022\gen9" c:\temp\msbuildgdk /s
xcopy "%GameDKXboxLatest%\xbox\build\VS2022\pc" c:\temp\msbuildgdk /s
```

Then in your Directory.Build.props used for BWOI set the properties to point to this combined folder.

```xml
<PropertyGroup Condition="'$([System.Text.RegularExpressions.Regex]::IsMatch('$(Platform)', 'Gaming\..+\.x64'))">
   <VCTargetsPath17>c:\temp\msbuildgdk\v170\</VCTargetsPath17>
   <VCTargetsPath16>c:\temp\msbuildgdk\v160\</VCTargetsPath16>
</PropertyGroup>
```
