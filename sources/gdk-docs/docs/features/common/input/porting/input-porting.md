---
author: M-Stahl
title: "Combining GameInput with existing input stacks"
description: "Provides a porting guide for `GameInput`."
kindex: Combining GameInput with existing input stacks
ms.author: alyatsko
ms.topic: article
edited: 06/30/2025
ms.date: '08/01/2022'
permissioned-type: public
---

# Combining GameInput with existing input stacks


<a id="introductionSection"></a>

Because functionality from GameInput is guaranteed to be extensible to future devices and abstracted to applciations, we still recommend applications shift as much of their input code as possible to `GameInput`. The functionality of `GameInput` is a superset of all previous input APIs. As a result, porting from a previous input API is, in most cases, a straightforward process. The biggest changes usually derive from `GameInput` being input-centric rather than device-centric. Code that uses previous APIs typically enumerates input devices before reading their input. In `GameInput`, however, this isn't necessary. Adapting to the input-centric model of `GameInput` usually makes up most of any structural changes to previous code that will be ported.

The following topics provide details about the differences between `GameInput` and the previous input APIs. These topics also include code examples that highlight the biggest differences among the APIs.

[Porting from Windows.Xbox.Input to GameInput](input-porting-wxi.md)

Describes porting from `Windows.Xbox.Input` in the original Xbox One Software Development Kit.

[Porting from XInput to GameInput](input-porting-xinput.md)

Describes porting from `XInput`.

<a id="sideBySideSection"></a>

## Using GameInput side-by-side with older APIs

For applications that would like to use GameInput code side-by-side with older interfaces and APIs, the API is flexible enough to allow this use case as well. This allows applications to easily leverage new capabilities like sensors and haptics support without replacing their entire input stacks. Beginning with version 1 (v1), `GameInputDeviceInfo` contains a `pnppath` field that represents a path to the underlying device. This field is the same as the path in `DIPROPGUIDANDPATH` provided by DirectInput. It can also be used for applications to interface with the device directly by calling `CreateFile`. Note that non-gamepad Game Input Protocol (GIP) devices might not have this property as they cannot be opened directly.

<a id="seeAlsoSection"></a>

## See also

[GameInput introduction](../overviews/input-overview.md)

[Input API reference](../../../../reference/input/gc-reference-input-toc.md)

[Microsoft Game Development Kit](/gaming/gdk)
