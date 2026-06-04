---
author: lsalvadormsft
title: "GameInput introduction"
description: "Overview of GameInput"
kindex: GameInput Overview
ms.author: lsalvador
ms.topic: article
edited: 02/19/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# Overview of GameInput


<a id="introductionSection"></a>

GameInput is a next-generation input API that exposes input devices of all kinds through a single consistent interface. It's designed with a simple programming model that makes it easy to use. GameInput is built from the ground up for the best possible performance. Key features of the GameInput API are as follows.

*  __Availability__

    GameInput is available on Xbox via the Microsoft Game Development Kit (GDK) and PC via NuGet. Older versions of Windows going back to Windows 10 19H1 (May 2019 update) are supported.

*  __Consistency__

    GameInput exposes input from keyboards, mice, gamepads, and other game controllers through a single unified input model, synchronized to a common time base. The code for handling input from these devices is nearly identical, using many of the same functions but with different filters applied. This consistency makes it easy to add support for additional input devices without major changes to input code.

*  __Functionality__

    GameInput is a functional superset of all legacy input APIs&mdash;XInput, DirectInput, Raw Input, Human Interface Device (HID), and WinRT APIs&mdash;in addition to adding new features of its own. GameInput's functionality ranges from simple fixed-format gamepad state to detailed low-level raw device access. You can obtain input via polling or callbacks in an event-driven way. Haptics, sensors, and force feedback are fully supported. Developers can easily write third-party device SDKs on top of GameInput to provide access to custom device features.

*  __Performance__

    GameInput is built directly on top of the Windows hardware interfaces for the lowest possible input latency and resource usage. Nearly all API functions are lock-free with strict performance guarantees, while still being 100% thread-safe. This design makes them safe to call from time-sensitive contexts such as render threads (the largest exception is the GameInputCreate call). Advanced applications can take direct control of scheduling GameInput's internal asynchronous work queues, controlling which thread does the work and how often.

*  __Serviceability__

    New versions of the GameInput runtime support all versions of the API from v.0 to current, and games can specify which version of the API they were developed with. This versioning means that games continue to work as expected even as new versions of GameInput are released with new features and improvements. Further, older titles enjoy quality of life improvements as the Windows platform develops, including support for newly released HW devices and platform-side fixes.

*  __Usability__

    GameInput was designed with ease of use as a top priority. Most common input tasks can be implemented with just a few lines of code.


<a id="gettingStartedSection"></a>
## Getting started

Use the GameInput API for all new code, regardless of the target platform. It provides support across all Microsoft platforms, including earlier versions of Windows, and offers superior performance compared to legacy APIs.

> [!NOTE]
> For games developed on the GDK for Xbox One, GameInput is the only input API available.

If you're developing a game that targets the PC, install GameInput from the [Microsoft.GameInput](https://www.nuget.org/packages/Microsoft.GameInput) NuGet package.

To learn more about the GameInput API, start with [GameInput fundamentals](input-fundamentals.md).

If you're porting input code from an existing codebase, or if you plan to apply some of GameInput's extended capabilities side-by-side, see the [GameInput porting guide](../porting/input-porting.md) for API-specific guidance.


<a id="seeAlsoSection"></a>
## See also

[GameInput fundamentals](input-fundamentals.md)

[GameInput for PC with NuGet](input-nuget.md)

[GameInput porting guide](../porting/input-porting.md)

[GameInput API reference](../../../../reference/input/gc-reference-input-toc.md)

[Microsoft Game Development Kit](/gaming/gdk)
