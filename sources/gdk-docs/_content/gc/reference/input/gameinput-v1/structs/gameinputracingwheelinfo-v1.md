---
author: AlexYatskov
description: "Describes the properties of a racing wheel (v1)."
edited: "03/06/2025"
kindex: "GameInputRacingWheelInfo (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputRacingWheelInfo (v1)"
---

# GameInputRacingWheelInfo (v1)

Describes the properties of a racing wheel.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputRacingWheelInfo
{
    GameInputLabel menuButtonLabel;
    GameInputLabel viewButtonLabel;
    GameInputLabel previousGearButtonLabel;
    GameInputLabel nextGearButtonLabel;
    GameInputLabel dpadUpLabel;
    GameInputLabel dpadDownLabel;
    GameInputLabel dpadLeftLabel;
    GameInputLabel dpadRightLabel;
    bool           hasClutch;
    bool           hasHandbrake;
    bool           hasPatternShifter;
    int32_t        minPatternShifterGear;
    int32_t        maxPatternShifterGear;
    float          maxWheelAngle;
};
```

<a id="membersSection"></a>

### Members

*menuButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for Menu button.

*viewButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for View button.

*previousGearButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for previous-gear selector (button).

*nextGearButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for next-gear selector (button).

*dpadUpLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for D-pad up.

*dpadDownLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for D-pad down.

*dpadLeftLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for D-pad left.

*dpadRightLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for D-pad right.

*hasClutch*
Type: bool

Indicates whether the racing wheel has a clutch input.

*hasHandbrake*
Type: bool

Indicates whether the racing wheel has a handbrake input.

*hasPatternShifter*
Type: bool

Indicates whether the racing wheel has a pattern shifter.

*minPatternShifterGear*
Type: int32_t

The lowest gear of the pattern shifter.

*maxPatternShifterGear*
Type: int32_t

The highest gear of the pattern shifter.

*maxWheelAngle*
Type: float

The maximum angle of the racing wheel.

<a id="remarksSection"></a>

## Remarks

This structure is used in the [GameInputDeviceInfo](gameinputdeviceinfo-v1.md) structure. `GameInputDeviceInfo` is used by the [IGameInputDevice::GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo-v1.md) method.

For more information, see [GameInput devices](../../../../input/overviews/input-devices.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
