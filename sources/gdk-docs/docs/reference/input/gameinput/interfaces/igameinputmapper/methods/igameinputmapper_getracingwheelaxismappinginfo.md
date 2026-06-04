---
author: JosephValverde
description: IGameInputMapper::GetRacingWheelAxisMappingInfo API.
edited: 9/17/2025
kindex: IGameInputMapper::GetRacingWheelAxisMappingInfo
ms.author: josephva
ms.date: 9/17/2025
ms.topic: reference
permissioned-type: public
title: GetRacingWheelAxisMappingInfo
---

# IGameInputMapper::GetRacingWheelAxisMappingInfo

## Syntax

```cpp
bool GetRacingWheelAxisMappingInfo(
    GameInputRacingWheelAxes axisElement,
    GameInputAxisMapping* mapping
);
```

### Parameters

*axisElement* &nbsp;&nbsp;\_In\_\
Type: [GameInputRacingWheelAxes](../../../enums/gameinputracingwheelaxes.md)

The specific racing wheel axis whose mapping is being queried.

*mapping* &nbsp;&nbsp;\_Out\_\
Type: [GameInputAxisMapping](../../../structs/gameinputaxismapping.md)

The mapping information of how the axis is mapped from the controller axes, buttons or switches.

### Return value

Type: bool

If the mapping was successfully retrieved. This value is false if the device does not support the [GameInputKindRacingWheel](../../../enums/gameinputkind.md) input kind or if the specified axis element is not supported by the device.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)<br>
[IGameInputMapper](../igameinputmapper.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Introduced. |