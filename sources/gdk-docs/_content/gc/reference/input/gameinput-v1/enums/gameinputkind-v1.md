---
author: AlexYatskov
description: "Enumeration of valid GameInput device types (v1)."
edited: "03/03/2025"
kindex: "GameInputKind (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputKind (v1)"
---

# GameInputKind (v1)

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
    GameInputKindArcadeStick      = 0x00010000,
    GameInputKindFlightStick      = 0x00020000,
    GameInputKindGamepad          = 0x00040000,
    GameInputKindRacingWheel      = 0x00080000,
    GameInputKindUiNavigation     = 0x01000000
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
| GameInputKindArcadeStick      | Indicates arcade stick input.                               |
| GameInputKindFlightStick      | Indicates flight stick input.                               |
| GameInputKindGamepad          | Indicates gamepad input.                                    |
| GameInputKindRacingWheel      | Indicates racing wheel input.                               |
| GameInputKindUiNavigation     | Indicates UI navigation input.                              |

## Remarks

GameInputKind are flag values and can be combined to filter on multiple devices.
Parameter for [IGameInput_GetCurrentReading](../interfaces/igameinput/methods/igameinput_getcurrentreading-v1.md).
Returned by [IGameInputReading_GetInputKind](../interfaces/igameinputreading/methods/igameinputreading_getinputkind-v1.md).
Member of [GameInputControllerAxisInfo](../structs/gameinputcontrolleraxisinfo-v1.md).
Member of [GameInputControllerButtonInfo](../structs/gameinputcontrollerbuttoninfo-v1.md).
Member of [GameInputControllerSwitchInfo](../structs/gameinputcontrollerswitchinfo-v1.md).
Member of [GameInputDeviceInfo](../structs/gameinputdeviceinfo-v1.md).

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
[IGameInput_GetCurrentReading](../interfaces/igameinput/methods/igameinput_getcurrentreading-v1.md)
[IGameInputReading_GetInputKind](../interfaces/igameinputreading/methods/igameinputreading_getinputkind-v1.md)
[GameInputControllerAxisInfo](../structs/gameinputcontrolleraxisinfo-v1.md)
[GameInputControllerButtonInfo](../structs/gameinputcontrollerbuttoninfo-v1.md)
[GameInputControllerSwitchInfo](../structs/gameinputcontrollerswitchinfo-v1.md)
[GameInputDeviceInfo](../structs/gameinputdeviceinfo-v1.md)
