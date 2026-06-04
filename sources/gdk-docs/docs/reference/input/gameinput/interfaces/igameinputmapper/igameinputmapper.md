---
author: JosephValverde
description: Provides information on how GameInput maps a device.
edited: 09/17/2025
kindex: IGameInputMapper
ms.author: josephva
ms.date: 09/17/2025
ms.topic: article
permissioned-type: public
title: IGameInputMapper (Interface contents)
---

# IGameInputMapper

Provides information on how GameInput maps a device. The methods in this interface query a specific axis or button for a given input kind (e.g. Flight Stick or Gamepad) and then provide information on how we map it from the controller axes, buttons and switches.

## Syntax
```cpp
class IGameInputMapper : public IUnknown
```

## Methods
| Method                                                                                      | Description                                                                              |
| ---                                                                                         | ---                                                                                      |
| [GetArcadeStickButtonMappingInfo](methods/igameinputmapper_getarcadestickbuttonmappinginfo.md) | Gets the mapping information of a given button of the arcade stick on a game controller. |
| [GetFlightStickAxisMappingInfo](methods/igameinputmapper_getflightstickaxismappinginfo.md)     | Gets the mapping information of a given axis of the flight stick on a game controller.   |
| [GetFlightStickButtonMappingInfo](methods/igameinputmapper_getflightstickbuttonmappinginfo.md) | Gets the mapping information of a given button of the flight stick on a game controller. |
| [GetGamepadAxisMappingInfo](methods/igameinputmapper_getgamepadaxismappinginfo.md)             | Gets the mapping information of a given axis of the gamepad on a game controller.        |
| [GetGamepadButtonMappingInfo](methods/igameinputmapper_getgamepadbuttonmappinginfo.md)         | Gets the mapping information of a given button of the gamepad on a game controller.      |
| [GetRacingWheelAxisMappingInfo](methods/igameinputmapper_getracingwheelaxismappinginfo.md)     | Gets the mapping information of a given axis of the racing wheel on a game controller.   |
| [GetRacingWheelButtonMappingInfo](methods/igameinputmapper_getracingwheelbuttonmappinginfo.md) | Gets the mapping information of a given button of the racing wheel on a game controller. |


## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles


## See also

[Input API Overview](../../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Introduced. |