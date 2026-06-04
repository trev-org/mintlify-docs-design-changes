---
author: lsalvadormsft
title: "GameInput Frequently Asked Questions"
description: "Answers to frequently asked questions about the GameInput API, including benefits, compatibility, installation, and usage scenarios."
kindex: GameInput FAQ, GameInput questions
ms.topic: article
edited: 02/23/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# GameInput frequently asked questions

### Why should I back my title's input code with GameInput?

GameInput is an updatable input platform. By using it, Windows can better abstract the variety of input devices available on the market and continue improving support for those devices over time through platform updates. By using GameInput, your title will be automatically updated to function with new devices through Windows and hardware releases.

Further, GameInput provides access to newer features not previously available on Windows, such as impulse triggers, and better support for features like haptics and sensors. By using GameInput, your title can take advantage of these features with minimal code changes.

### What platforms does GameInput support?

GameInput is available on:
* Xbox (V.1+ beginning with the 2510 GDK)
* Windows 10 (version 19H1/May 2019 update and later)
* Windows 11

While GameInput v.0 is part of the Windows SDK and the Microsoft Game Development Kit (GDK), compiling with newer versions requires use of the NuGet package, both for console and PC. The GameInput v.1+ runtime is available on console beginning with the 2510 GDK, but usage of this runtime requires building and linking against the header/lib in the latest GameInput NuGet package. The latest version of the API for PC and console is always available in the [Microsoft.GameInput](https://www.nuget.org/packages/Microsoft.GameInput) NuGet package.

### Do I need different versions for Xbox and PC?

No, the same GameInput API works across all platforms. Beginning with the 2510 GDK, the latest GameInput API is available on both Xbox and PC, with the same headers and binaries provided in the [Microsoft.GameInput](https://www.nuget.org/packages/Microsoft.GameInput) NuGet package. The GameInput installer is only required for PC, as the runtime is included with the GDK on Xbox.

### My application can't find GameInput - what should I check?

1. Verify the GameInput runtime is installed on the target machine. For versions v.1 and later, this requires a Microsoft.GameInput package, which the user can install from the MSI package in the Microsoft.GameInput NuGet package. To install the latest version of the package you can also run `winget install Microsoft.GameInput` from an elevated command prompt.
2. Ensure your application links against the correct GameInput library. The latest version in the NuGet package guarantees your project uses the right GameInput binary across the different endpoints/platforms.
3. Check that your Windows version supports GameInput (19H1 or later).

### How difficult is it to port from XInput to GameInput?

Many XInput functions map one-to-one to GameInput equivalents, simplifying the work to port from one to the other. The main difference is that GameInput uses C++ interfaces instead of flat C functions. GameInput also provides extra functionality not available in XInput, like access to the impulse trigger found in Xbox One controllers and other similar devices.

### How do I port from DirectInput or Raw Input?

GameInput provides an interface path as part of the GameInputDeviceInfo structure. This field is the same one used by the DirectInput API, allowing applications to continue using their existing DirectInput code for device enumeration and information retrieval while migrating input reading and other functionality to GameInput. For more details, see the [GameInput porting guide](../porting/input-porting.md).

### What does the GameInput service do?

The GameInput service is responsible for arbitrating access to input devices on the system, and for providing useful compatibility and abstraction layers for other applications. Among other things, the GameInput service:
* Handles input filtering and synchronization
* Delivers platform updates and device driver improvements
* Mediates access to input devices between GameInput client instances

The installer ensures the runtime is properly registered and the service is configured correctly for optimal performance.

### Can I call GameInput from my render thread?

Yes, almost all GameInput functions are safe for time-sensitive contexts like render threads. The main exception is `GameInputCreate`, which you should call during application initialization.

<a id="seeAlsoSection"></a>
## See also

[GameInput introduction](input-overview.md)

[GameInput API Versioning](input-versioning.md)

[Porting from XInput to GameInput](../porting/input-porting-xinput.md)
