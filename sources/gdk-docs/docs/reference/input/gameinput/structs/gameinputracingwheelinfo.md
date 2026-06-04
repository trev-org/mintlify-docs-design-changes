---
author: AlexYatskov
description: Describes the properties of a racing wheel.
edited: 03/06/2025
kindex: GameInputRacingWheelInfo
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputRacingWheelInfo
---

# GameInputRacingWheelInfo

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
    GameInputLabel aButtonLabel;
    GameInputLabel bButtonLabel;
    GameInputLabel xButtonLabel;
    GameInputLabel yButtonLabel;
    GameInputLabel leftShoulderButtonLabel;
    GameInputLabel rightShoulderButtonLabel;
    GameInputLabel leftThumbstickButtonLabel;
    GameInputLabel rightThumbstickButtonLabel;
    bool           hasClutch;
    bool           hasHandbrake;
    bool           hasPatternShifter;
    int32_t        minPatternShifterGear;
    int32_t        maxPatternShifterGear;
    float          maxWheelAngle;
    uint32_t       extraButtonCount;
    uint32_t       extraAxisCount;
};
```

<a id="membersSection"></a>

### Members

*menuButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for Menu button.

*viewButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for View button.

*previousGearButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for previous-gear selector (button).

*nextGearButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for next-gear selector (button).

*dpadUpLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for D-pad up.

*dpadDownLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for D-pad down.

*dpadLeftLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for D-pad left.

*dpadRightLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for D-pad right.

*aButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for **A** button.

*bButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for **B** button.

*xButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for **X** button.

*yButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for **Y** button.

*leftShoulderButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for left shoulder button.

*rightShoulderButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for right shoulder button.

*leftThumbstickButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for left thumbstick button.

*hasClutch*<br>
Type: bool

Indicates whether the racing wheel has a clutch input.

*hasHandbrake*<br>
Type: bool

Indicates whether the racing wheel has a handbrake input.

*hasPatternShifter*<br>
Type: bool

Indicates whether the racing wheel has a pattern shifter.

*minPatternShifterGear*<br>
Type: int32_t

The lowest gear of the pattern shifter.

*maxPatternShifterGear*<br>
Type: int32_t

The highest gear of the pattern shifter.

*maxWheelAngle*<br>
Type: float

The maximum angle of the racing wheel.

*extraButtonCount*<br>
Type: uint32_t

The number of device buttons that are not mapped to racing wheel buttons.

*extraAxisCount*<br>
Type: uint32_t

The number of device axes that are not mapped to racing wheel axes.

<a id="remarksSection"></a>

## Remarks

This structure is used in the [GameInputDeviceInfo](gameinputdeviceinfo.md) structure. `GameInputDeviceInfo` is used by the [IGameInputDevice::GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo.md) method.

For more information, see [GameInput devices](../../../../features/common/input/overviews/input-devices.md).

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
| **v3** | **Added** 8 button labels (`aButtonLabel`, `bButtonLabel`, `xButtonLabel`, `yButtonLabel`, `leftShoulderButtonLabel`, `rightShoulderButtonLabel`, `leftThumbstickButtonLabel`, `rightThumbstickButtonLabel`), `extraButtonCount`, `extraAxisCount`. |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0, v1, v2

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