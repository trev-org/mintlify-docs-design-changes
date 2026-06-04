# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gdk-new-layout?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gdk-new-layout?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# A simplified GDK directory structure

Feedback

Summarize this article for me

Note

The new Microsoft Game Development Kit (GDK) layout for headers and libraries described in this article is expected to be released in the October 2025 GDK. Contact your Microsoft account manager if you're interested in preview builds of this GDK.

In current versions of the Microsoft Game Development Kit (GDK), the layout was optimized around code sharing and focused on specific platforms. Build integration for this layout relied heavily on hiding the complexity in MSBuild custom platforms. For the new layout, the focus is on simplifying the integration, supporting a growing list of target platforms, and improving support for both stock MSBuild platforms and non-Microsoft build systems.

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

The **Gaming.Desktop.x64** custom MSBuild platforms implement the logic for building the include/lib paths that combine all this content in various ways. If you used CMake or a custom make solution, this logic had to be implemented there as well. For a detailed example, see the April 2025 version of [CMakeExample](https://github.com/microsoft/Xbox-GDK-Samples/tree/apr2025/Samples/Tools/CMakeExample).

The old layout is still present in the October 2025 GDK to support both old and new styles. Both the new and old layouts are installed by default. The GDK setup now includes an option to install just the new layout. A future GDK will remove the old layout to reduce the hard drive footprint and overall download size. The current target date for removing the old layout will be one year from the time the October 2025 GDK is released.

## New headers and libraries layout

For the October 2025 GDK release, the new layout offers an alternative layout for the headers and libraries that make the platform integration easier and able to accommodate additional platforms over time.

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
```

## Using the new layout with MSBuild custom platforms

The existing **Gaming.\*.x64** MSBuild platforms use the old layout by default, but you can opt into the new layout by setting the **GDKCrossPlatform** property.

```
<PropertyGroup Label="Globals">
...
  <GDKCrossPlatform>true</GDKCrossPlatform>
</PropertyGroup>
```

This results in the appropriate include/lib paths being added to the project instead of the various complex paths were used by the old layout.

In this new simplified integration, the extension libraries mechanism is no longer used. All content is available at build-time by default in the include/lib paths.

The project then needs to link to the additional libraries it uses. Projects that are built on the older GDK project templates should contain statements like the following.

```
<AdditionalDependencies>uuid.lib;$(Console_Libs);%(XboxExtensionsDependencies);%(AdditionalDependencies)</AdditionalDependencies>
```

For the new layout, the **Console\_Libs** property lists the core required libraries.

Expand table

| Platform | Core libs |
| --- | --- |
| Gaming.\*.x64 | xgameruntime.lib d3d12.lib dxguid.lib dxgi.lib gameinput.lib |

The project needs to add to **AdditionalDependencies** the extension libraries it consumes because they're each 'opt-in'.

Expand table

| Platform | Core libs |
| --- | --- |
| Xbox.LibHttpClient | libHttpClient.lib |
| Xbox.XCurl.API | XCurl.lib |
| Xbox.Game.Chat.2.Cpp.API | GameChat2.lib |
| Xbox.Services.API.C (Debug) | Appnotify.lib winhttp.lib crypt32.lib Microsoft.Xbox.Services.142.C.Debug.lib |
| Xbox.Services.API.C (Release) | Appnotify.lib winhttp.lib crypt32.lib Microsoft.Xbox.Services.142.C.lib |
| PlayFab.Party.Cpp | Party.lib |
| PlayFab.PartyXboxLive.Cpp | PartyXboxLive.lib |
| PlayFab.Services.C | PlayFabCore.lib PlayFabGameSave.lib PlayFabServices.lib |
| PlayFab.Multiplayer.Cpp | PlayFabMultiplayer.lib |

The project also needs to copy the additional DLLs it uses into the layout. This can be done either via Custom Build steps that are typical of many DLL library integrations, or by editing the vcxproj or adding a props file to use the **ReferenceCopyLocalPaths** item group list. The MSBuild below lists all the possible DLLs but individual projects will only need some of these.

```
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
```

Note

`GameDKLatest` is only set by the Microsoft GDK with Xbox Extensions. As a result, we introduced new environment variables that fully support side-by-side installation of both versions of the Microsoft GDK: `GameDKCoreLatest` is set by the Microsoft GDK.

### Using a Directory.Build.props file

As a way to quickly validate existing GDK Gaming.\*.x64 projects by using the new layout, place the following content into a file named Directory.Build.props in your source tree. This opts in to the new layout and includes most or all extension libraries even if not used by the project.

Note

The **GDKExtLibNames** property isn't used by the MSBuild rules when building with **GDKCrossPlatform** set to true. Because it's already present for building with the older MSBuild rules, it's used in this props file as a way to opt in to some additional DLLs in the layout.

```
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

</Project>
```

## How to update an x64 game to add ARM64

To add ARM64 support to an existing x64 game project, follow these steps:

1. **Use Visual Studio 2022.** ARM64 support requires Visual Studio 2022. Visual Studio 2019 isn't supported for ARM64 builds.
 
2. **Enable the new layout.** Make sure your project uses the new layout by setting `GDKCrossPlatform` to `true` in your project file.
 
3. **Create ARM64 configurations.** Copy your existing x64 configurations (such as Debug and Release) to create corresponding ARM64 configurations.
 
4. **Update library paths.** Edit the VC++ Directories for your ARM64 configurations so the library path references `lib\arm64` instead of `lib\x64`.
 
5. **Update XSAPI library references.** Update the link statements for _all_ configurations (not just ARM64) to use `Microsoft.Xbox.Services.143.GDK.C.lib` instead of `Microsoft.Xbox.Services.142.GDK.C.lib`.
 
6. **Update ReferenceCopyLocalPaths.** Check for `ReferenceCopyLocalPaths` usage in your `.vcxproj` file that might need updating to reference the `arm64` bin folder instead of `x64`.
 

Note

If the startup of your title fails with error 0xc000007b, it means you have accidentally tried to load an x64 format DLL into your ARM64 process. Check your project system for `ReferenceCopyLocalPaths` items that might need updating.

## Using the new layout with the MSBuild x64 platform

Instead of using the **Gaming.Desktop.x64** platform, you can use the stock **x64** platform to build for PC. In the old layout, this required adding `<Import Project="...\ExtensionLibrary.props">` statements for the Extension Libraries as detailed in [Using the x64 platform with the Microsoft Game Development Kit (GDK)](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/visualstudio/gr-vs-templates?view=gdk-2604#using-the-x64-platform-with-the-microsoft-game-development-kit-gdk).

In the new layout, the integration instructions are streamlined.

```
  <PropertyGroup>
    <GDKCrossPlatformPath Condition="'$(GDKCrossPlatformPath)'==''">$(GameDKCoreLatest)</GDKCrossPlatformPath>
    <GDKCrossPlatformPath Condition="'$(GDKCrossPlatformPath)'==''">$(GameDKXboxLatest)</GDKCrossPlatformPath>
  </PropertyGroup>
```

```
<PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Debug|x64'">
  <ExecutablePath>$(GameDK)bin;$(GDKCrossPlatformPath)windows\bin\x64;$(ExecutablePath)</ExecutablePath>
  <IncludePath>$(GDKCrossPlatformPath)windows\Include;$(IncludePath);</IncludePath>
  <LibraryPath>$(GDKCrossPlatformPath)windows\lib\x64;$(LibraryPath)</LibraryPath>
</PropertyGroup>
```

```
<PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Release|x64'">
  <ExecutablePath>$(GameDK)bin;$(GDKCrossPlatformPath)windows\bin\x64;$(ExecutablePath)</ExecutablePath>
  <IncludePath>$(GDKCrossPlatformPath)windows\Include;$(IncludePath);</IncludePath>
  <LibraryPath>$(GDKCrossPlatformPath)windows\lib\x64;$(LibraryPath)</LibraryPath>
</PropertyGroup>
```

Add all required extension libraries to **AdditionalDependencies** along with the original list.

```
<AdditionalDependencies>xgameruntime.lib;gameinput.lib;d3d12.lib;dxgi.lib;dxguid.lib;uuid.lib;kernel32.lib;user32.lib;%(AdditionalDependencies)</AdditionalDependencies>
```

Opt-in extension library DLLs need to be copied into the binary directory as above by using a Custom Build action or by using the **ReferenceCopyLocalPaths** item group for the final layout.

The remaining instructions for **PreprocessorDefinitions** and handling the .mgc file with image assets remain unchanged.

## Using the new layout with CMake

When you use the Microsoft Visual Studio generators with CMake and use the **Gaming.\*.x64** custom MSBuild platforms, enable the new layout by using the following code.

```
set_property(TARGET ${PROJECT_NAME} PROPERTY VS_GLOBAL_GDKCrossPlatform "true")
```

In the [CMakeGDKExample](https://github.com/microsoft/Xbox-GDK-Samples/tree/apr2025/Samples/Tools/CMakeGDKExample), remove the use of `VS_GLOBAL_GDKExtLibNames` and replace it with the following code (assuming CMake 3.21 or later) to copy the used extension DLLs into the layout.

```
add_custom_command(TARGET ${PROJECT_NAME} POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E $<IF:$<BOOL:$<TARGET_RUNTIME_DLLS:${PROJECT_NAME}>>,copy,true>
    $<TARGET_RUNTIME_DLLS:${PROJECT_NAME}> $<TARGET_FILE_DIR:${PROJECT_NAME}>
    COMMAND_EXPAND_LISTS
    )
```

## Using the new layout with custom build systems

Building for Windows x64 by using the GDK requires the following.

```
set INCLUDE=%GameDKCoreLatest%windows\include;%INCLUDE%
set LIB=%GameDKCoreLatest%windows\lib\x64;%LIB%
set PATH=%GameDK%bin;%GameDKCoreLatest%windows\bin\x64;%PATH%
```

## Reading the build edition from an installed file

The new layout doesn't contain the `grdk.ini` file. To find the edition information by parsing a file, use `grdk.h`.

Here's an example in PowerShell that works with older GDK releases as well.

```
$result = Get-ChildItem -Path $env:GameDKCoreLatest -Filter "grdk.h" -Recurse
if ($result.Count -eq 0)
{
    $result = Get-ChildItem -Path $env:GRDKLatest -Filter "grdk.h" -Recurse
}
if ($result.Count -eq 0)
{
    Write-Error "##[error]Failed to find grdk.h in either GameDKCoreLatest or GRDKLatest" -ErrorAction Stop
}

$content = Get-Content -Path $result[0].FullName

if (-not ([string]$content -match '#define\s+_GRDK_EDITION\s+([0-9][0-9][0-9][0-9][0-9][0-9])')) {
    Write-Error "##[error]Failed to find edition define" -ErrorAction Stop
}

$xbld_edition = $Matches[1]

if (-not ([string]$content -match '#define\s+_GRDKVER_PRODUCTBUILDVER_FULL\s+([0-9]+\.[0-9]+\.([0-9]+)\.[0-9]+)')) {
    Write-Error "##[error]Failed to find full version define" -ErrorAction Stop
}

$xbld_full_productbuild = $Matches[1]
$xbld_build = $Matches[2]

if (-not ([string]$content -match '#define\s+_GRDK_MM_NUM\s+([0-9]{1,2})')) {
    Write-Error "##[error]Failed to find month define" -ErrorAction Stop
}

$month = $Matches[1]

if (-not ([string]$content -match '#define\s+_GRDK_FULLYY\s+([0-9]{4})')) {
    Write-Error "##[error]Failed to find full year define" -ErrorAction Stop
}

$year = $Matches[1]

Write-Output ("_xbld_name={0} {1} GRDK" -f (Get-Culture).DateTimeFormat.GetMonthName([int]$month), $year)
Write-Output ("_xbld_edition={0}" -f $xbld_edition)
Write-Output ("_xbld_full_productbuild={0}" -f $xbld_full_productbuild)
Write-Output ("_xbld_build={0}" -f $xbld_build)
```

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