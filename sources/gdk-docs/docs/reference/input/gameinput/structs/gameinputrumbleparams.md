---
author: AlexYatskov
description: Describes a rumble effect produced by a standard controller.
edited: 03/06/2025
kindex: GameInputRumbleParams
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputRumbleParams
---

# GameInputRumbleParams

Describes a rumble effect produced by a standard controller.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputRumbleParams
{
    float lowFrequency;
    float highFrequency;
    float leftTrigger;
    float rightTrigger;
};
```

<a id="membersSection"></a>

### Members

*lowFrequency*<br>
Type: float

Intensity of the low-frequency rumble motor as a normalized value in the range of [0.0, 1.0].

*highFrequency*<br>
Type: float

Intensity of the high-frequency rumble motor as a normalized value in the range of [0.0, 1.0].

*leftTrigger*<br>
Type: float

Intensity of the left trigger rumble motor as a normalized value in the range of [0.0, 1.0].

*rightTrigger*<br>
Type: float

Intensity of the right trigger rumble motor as a normalized value in the range of [0.0, 1.0].

<a id="remarksSection"></a>

## Remarks

This structure is used by the [SetRumbleState](../interfaces/igameinputdevice/methods/igameinputdevice_setrumblestate.md) method. The structure is modeled on four-motor controllers. However, the structure is also usable on controllers that don't have all four motors, such as controllers used for PC gaming.

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |