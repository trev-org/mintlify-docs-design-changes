---
author: JosephValverde
description: Describes the properties of a controller.
edited: 09/18/2025
kindex: GameInputControllerInfo
ms.author: josephva
ms.date: 09/18/2025
ms.topic: reference
permissioned-type: public
title: GameInputControllerInfo
---

# GameInputControllerInfo

Describes the properties of a controller.

## Syntax

```cpp
struct GameInputControllerInfo
{
    uint32_t                             controllerAxisCount;
    const GameInputLabel*                controllerAxisLabels;
    uint32_t                             controllerButtonCount;
    const GameInputLabel*                controllerButtonLabels;
    uint32_t                             controllerSwitchCount;
    const GameInputControllerSwitchInfo* controllerSwitchInfo;
};
```

### Members

*controllerAxisCount*<br>
Type: uint32_t

The number of axes on the controller.

*controllerAxisLabels*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md) const *

The labels for the axes on the controller.

*controllerButtonCount*<br>
Type: uint32_t

The number of buttons on the controller.

*controllerButtonLabels*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md) const *

The labels for the buttons on the controller.

*controllerSwitchCount*<br>
Type: uint32_t

The number of switches on the controller.

*controllerSwitchInfo*<br>
Type: [GameInputControllerSwitchInfo](gameinputcontrollerswitchinfo.md) const *

Information about the switches on the controller.


## Remarks

The fields in the `GameInputControllerInfo` structure that are pointers to variable-sized arrays of information about the controller. NULL pointers indicate that the corresponding feature is not available or supported by the controller. The number of elements in each array is indicated by a corresponding field in the structure (as noted in the SAL annotations).

TThis structure is used in the [GameInputDeviceInfo](gameinputdeviceinfo.md) structure. `GameInputDeviceInfo` is used by the [IGameInputDevice::GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo.md) method.

For more information, see [GameInput devices](../../../../features/common/input/overviews/input-devices.md).

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See Also

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)<br>

[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | **New struct** introduced in the current API. Replaces the separate `GameInputControllerAxisInfo` and `GameInputControllerButtonInfo` structs that existed in v0, v1, and v2. |