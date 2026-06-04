---
author: AlexYatskov
description: Enumerates flight stick buttons.
edited: 03/03/2025
kindex: GameInputFlightStickButtons
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputFlightStickButtons
---

# GameInputFlightStickButtons

Enumerates flight stick buttons.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputFlightStickButtons
{
    GameInputFlightStickNone           = 0x00000000,
    GameInputFlightStickMenu           = 0x00000001,
    GameInputFlightStickView           = 0x00000002,
    GameInputFlightStickFirePrimary    = 0x00000004,
    GameInputFlightStickFireSecondary  = 0x00000008,
    GameInputFlightStickHatSwitchUp    = 0x00000010,
    GameInputFlightStickHatSwitchDown  = 0x00000020,
    GameInputFlightStickHatSwitchLeft  = 0x00000040,
    GameInputFlightStickHatSwitchRight = 0x00000080,
    GameInputFlightStickA              = 0x00000100,
    GameInputFlightStickB              = 0x00000200,
    GameInputFlightStickX              = 0x00000400,
    GameInputFlightStickY              = 0x00000800,
};
```

<a id="constantsSection"></a>

## Constants

| Constant                          | Description                                                     |
| ---                               | ---                                                             |
| GameInputFlightStickNone          | Indicates that no button is pressed.                            |
| GameInputFlightStickMenu          | Indicates that the menu button is pressed.                      |
| GameInputFlightStickView          | Indicates that the view button is pressed.                      |
| GameInputFlightStickFirePrimary   | Indicates that the primary fire button is pressed.              |
| GameInputFlightStickFireSecondary | Indicates that the secondary fire button is pressed.            |
| GameInputFlightStickHatSwitchUp   | Indicates that the top portion of the hat switch is pressed.    |
| GameInputFlightStickHatSwitchDown | Indicates that the bottom portion of the hat switch is pressed. |
| GameInputFlightStickHatSwitchLeft | Indicates that the left portion of the hat switch is pressed.   |
| GameInputFlightStickHatSwitchRight| Indicates that the right portion of the hat switch is pressed.  |
| GameInputFlightStickA             | Indicates that the gamepad A button is pressed.                 |
| GameInputFlightStickB             | Indicates that the gamepad B button is pressed.                 |
| GameInputFlightStickX             | Indicates that the gamepad X button is pressed.                 |
| GameInputFlightStickY             | Indicates that the gamepad Y button is pressed.                 |

<a id="remarksSection"></a>

## Remarks

This enumeration is used in the [GameInputFlightStickState](../structs/gameinputflightstickstate.md) structure. You can combine values to read multiple buttons simultaneously.

`GameInputFlightStickHatSwitchUp`, `GameInputFlightStickHatSwitchDown`, `GameInputFlightStickHatSwitchLeft`, and `GameInputFlightStickHatSwitchRight` are hat switch translations to button values. Diagonals are represented by presenting two buttons pressed simultaneously as is the case for the D-pad on a gamepad. Hat switch center is represented by having none of these buttons pressed. These buttons are also the only way to query mapping information for the hat switch using the [IGameInputMapper::GetFlightStickButtonMappingInfo](../interfaces/igameinputmapper/methods/igameinputmapper_getflightstickbuttonmappinginfo.md) method.

`GameInputFlightStickA`, `GameInputFlightStickB`, `GameInputFlightStickX`, and `GameInputFlightStickY` are not part of the flight stick mappings. These are instead values copied from the gamepad button report. If there is no gamepad mapped to the device, these values will always be 0.

For more information, see the [Getting data from readings](../../../../features/common/input/overviews/input-readings.md#gettingStateSection) section of [GameInput readings](../../../../features/common/input/overviews/input-readings.md).

This enumeration can additionally be used with the [IGameInputMapper::GetFlightStickButtonMappingInfo](../interfaces/igameinputmapper/methods/igameinputmapper_getflightstickbuttonmappinginfo.md) method to retrieve mapping information for a specific flight stick button.

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
| **v3** | **Added 8 constants**: `HatSwitchUp`, `HatSwitchDown`, `HatSwitchLeft`, `HatSwitchRight`, `A`, `B`, `X`, `Y` for gamepad-like buttons. |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

```cpp
enum GameInputFlightStickButtons
{
    GameInputFlightStickNone          = 0x00000000,
    GameInputFlightStickMenu          = 0x00000001,
    GameInputFlightStickView          = 0x00000002,
    GameInputFlightStickFirePrimary   = 0x00000004,
    GameInputFlightStickFireSecondary = 0x00000008,
};
```