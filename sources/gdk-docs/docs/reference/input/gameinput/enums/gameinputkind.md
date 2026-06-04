---
author: AlexYatskov
description: Enumeration of valid GameInput device types.
edited: 05/27/2025
kindex: GameInputKind
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputKind
---

# GameInputKind

Enumeration of valid GameInput device types.

## Syntax

```cpp
enum GameInputKind
{
    GameInputKindUnknown          = 0x00000000,
    GameInputKindControllerAxis   = 0x00000002,
    GameInputKindControllerButton = 0x00000004,
    GameInputKindControllerSwitch = 0x00000008,
    GameInputKindController       = 0x0000000E,
    GameInputKindKeyboard         = 0x00000010,
    GameInputKindMouse            = 0x00000020,
    GameInputKindSensors          = 0x00000040,
    GameInputKindArcadeStick      = 0x00010000,
    GameInputKindFlightStick      = 0x00020000,
    GameInputKindGamepad          = 0x00040000,
    GameInputKindRacingWheel      = 0x00080000,
};
```

## Constants

| Constant                      | Description                                                 |
| ---                           | ---                                                         |
| GameInputKindUnknown          | Indicates an unknown input type.                            |
| GameInputKindControllerAxis   | Indicates controller input from sticks.                     |
| GameInputKindControllerButton | Indicates controller input from buttons.                    |
| GameInputKindControllerSwitch | Indicates controller input from switches.                   |
| GameInputKindController       | Indicates a combination of axis, button, and switch inputs. |
| GameInputKindKeyboard         | Indicates keyboard input.                                   |
| GameInputKindMouse            | Indicates mouse input.                                      |
| GameInputKindSensors          | Indicates sensor input.                                     |
| GameInputKindArcadeStick      | Indicates arcade stick input.                               |
| GameInputKindFlightStick      | Indicates flight stick input.                               |
| GameInputKindGamepad          | Indicates gamepad input.                                    |
| GameInputKindRacingWheel      | Indicates racing wheel input.                               |

## Remarks

GameInputKind are flag values and can be combined to filter on multiple devices.
Parameter for [IGameInput_GetCurrentReading](../interfaces/igameinput/methods/igameinput_getcurrentreading.md).
Returned by [IGameInputReading_GetInputKind](../interfaces/igameinputreading/methods/igameinputreading_getinputkind.md).
Member of [GameInputDeviceInfo](../structs/gameinputdeviceinfo.md).

## Requirements

**Header:** GameInput.h

[Input API Overview](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)  
[IGameInput_GetCurrentReading](../interfaces/igameinput/methods/igameinput_getcurrentreading.md)  
[IGameInputReading_GetInputKind](../interfaces/igameinputreading/methods/igameinputreading_getinputkind.md)  
[GameInputDeviceInfo](../structs/gameinputdeviceinfo.md)  

## Version History

| Version | Changes |
| --- | --- |
| **v3** | **Removed** `GameInputKindUiNavigation` (0x01000000) and `GameInputKindRawDeviceReport` (0x00000001). |
| **v2** | **Added** `GameInputKindSensors` (0x00000040). |
| **v1** | **Removed** `GameInputKindRawDeviceReport` (0x00000001), `GameInputKindTouch` (0x00000100), and `GameInputKindMotion` (0x00001000). |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

```cpp
enum GameInputKind
{
    GameInputKindUnknown          = 0x00000000,
    GameInputKindRawDeviceReport  = 0x00000001,
    GameInputKindControllerAxis   = 0x00000002,
    GameInputKindControllerButton = 0x00000004,
    GameInputKindControllerSwitch = 0x00000008,
    GameInputKindController       = 0x0000000E,
    GameInputKindKeyboard         = 0x00000010,
    GameInputKindMouse            = 0x00000020,
    GameInputKindTouch            = 0x00000100,
    GameInputKindMotion           = 0x00001000,
    GameInputKindArcadeStick      = 0x00010000,
    GameInputKindFlightStick      = 0x00020000,
    GameInputKindGamepad          = 0x00040000,
    GameInputKindRacingWheel      = 0x00080000,
    GameInputKindUiNavigation     = 0x01000000,
};
```

### v1

```cpp
enum GameInputKind
{
    GameInputKindUnknown          = 0x00000000,
    GameInputKindControllerAxis   = 0x00000002,
    GameInputKindControllerButton = 0x00000004,
    GameInputKindControllerSwitch = 0x00000008,
    GameInputKindController       = 0x0000000E,
    GameInputKindKeyboard         = 0x00000010,
    GameInputKindMouse            = 0x00000020,
    GameInputKindArcadeStick      = 0x00010000,
    GameInputKindFlightStick      = 0x00020000,
    GameInputKindGamepad          = 0x00040000,
    GameInputKindRacingWheel      = 0x00080000,
    GameInputKindUiNavigation     = 0x01000000,
};
```

### v2

```cpp
enum GameInputKind
{
    GameInputKindUnknown          = 0x00000000,
    GameInputKindControllerAxis   = 0x00000002,
    GameInputKindControllerButton = 0x00000004,
    GameInputKindControllerSwitch = 0x00000008,
    GameInputKindController       = 0x0000000E,
    GameInputKindKeyboard         = 0x00000010,
    GameInputKindMouse            = 0x00000020,
    GameInputKindSensors          = 0x00000040,
    GameInputKindArcadeStick      = 0x00010000,
    GameInputKindFlightStick      = 0x00020000,
    GameInputKindGamepad          = 0x00040000,
    GameInputKindRacingWheel      = 0x00080000,
    GameInputKindUiNavigation     = 0x01000000,
};
```
