---
author: AlexYatskov
description: "GameInput API Versioning"
edited: "03/03/2023"
kindex: GameInput NuGet
ms.author: alyatsko
ms.date: "03/03/2023"
ms.topic: article
permissioned-type: public
title: "GameInput API Versioning"
---

# GameInput API versioning

<a id="introductionSection"></a>

> [!NOTE]
> If you're developing for Xbox, version v.0 is the default version available in the GDK beginning with the 2510 GDK. Titles leveraging the v1.0+ APIs can do so for both PC (v1.0+) and console (v2.2+) by integrating with the [Microsoft.GameInput](https://www.nuget.org/packages/Microsoft.GameInput) NuGet package. GDK 2510 or newer is required to use this NuGet package with console. PC apps require the latest GameInput redistributable, which is included in the NuGet package, to be installed on the target machine. Console apps must compile and link against the latest GameInput header and library in the NuGet package, but do not require the redistributable as the latest GameInput runtime is included with the GDK image on Xbox.

GameInput is a living API that continues to evolve over time as new features are added and unneeded or outdated ones are removed. You can find the most recent version of GameInput in the official [NuGet package](input-nuget.md). This package also includes the latest, up-to-date [Version History](https://www.nuget.org/packages/Microsoft.GameInput). The package always contains the latest GameInput header, binaries, and redistributable to include with your title.

Upgrading to a newer version of GameInput is quick and painless. Furthermore, regardless of the API described in the latest GameInput header, binary and functional compatibility is maintained for applications compiled against earlier versions of GameInput. In this model, shipped games can enjoy improvements in GameInput and can be transitioned to the latest version of GameInput, if necessary, to take advantage of new features.

## Upgrading runtime and API version

<a id="upgradingRuntimeAndApiVersionSection"></a>

Different versions of GameInput have similar-looking names and methods but are distinctly versioned with different UUIDs. Starting with GameInput API v.1, each version is defined in a unique namespace (for example, `GameInput::v1`). The same underlying objects in GameInput implement these interfaces. You can [QueryInterface](/cpp/atl/queryinterface) to switch between versions, which means you can mix API usage in your game if you want.

If you're upgrading from GameInput v.0 where the API was defined in the global namespace, you might find that adding a `using namespace GameInput::v1` statement helps reduce the number of GameInput call sites that you need to update for adoption of the v.1 and subsequent revisions of the API.

In addition to the runtime version checks, you can use conditional compilation by checking for the `GAMEINPUT_API_VERSION` processor define. This define corresponds to the GameInput API version currently in use as well as the GameInput major version. The v.0 API didn't feature this definition, so if you want to conditionally test for this version, you can add the following snippet after your GameInput header include.

```cpp
#ifndef GAMEINPUT_API_VERSION
#define GAMEINPUT_API_VERSION 0
#endif
```

## Upgrading runtime only

<a id="upgradingRuntimeSection"></a>

GameInput allows you to get the latest bug fixes without forcing you to update your API usage. To get these bug fixes, install the GameInput redistributable bundled in the latest [Microsoft.GameInput](https://www.nuget.org/packages/Microsoft.GameInput) NuGet package. Because GameInput remains binary compatible with older versions of the API, you can continue using your existing header with the new runtime. Remember to redistribute the latest GameInput binaries with your titles to ensure functionality in your testing environment is consistent with production.

## GameInput v.1 changes

If you're using a previous version of GameInput, note that many unimplemented
functions and corresponding enums and constants are removed from the v.1 API onwards.
Additionally, the API is placed in the `GameInput::v1` namespace
to facilitate versioning. Due to these changes, you might experience
compilation errors when building that code by using this (and future)
versions. Notable changes include:

1. `IGameInputDevice::GetDeviceInfo` previously returned the resulting
    `IGameInputDeviceInfo` struct as the function's return value. This
    struct is now returned as an out parameter on the function, and the
    function's return value is now an `HRESULT`.

2. `IGameInput::UnregisterCallback` previously took a timeout value as
    its second parameter, but this parameter is removed.

3. `IGameInputReading::GetSequenceNumber` is removed. Use
   `IGameInputReading::GetTimestamp` instead.

## Versioning tips

- The change in the usable API surface between v.0 and v.1 is minimal, with the removal of functionality that was never implemented, along with the function signature changes described earlier.
- The original v.0 API from the original `GameInput.h` header is still supported, but that API remains static. In this case, you would continue to use the header as-is from the GDK, older NuGet package, or the Windows SDK.
- No matter which version of the API you use, you must install the latest redistributable from the [NuGet package](input-nuget.md) during development, and include that redistributable (or newer) as part of your game's installation process to end users. This redistributable is where the newer GameInput runtime implementation exists, and it enhances all versions of the API with things like expanded controller support, trackpad support, remote desktop support, and various other bug fixes.

## See also

<a id="seeAlsoSection"></a>

[GameInput NuGet package](input-nuget.md)
