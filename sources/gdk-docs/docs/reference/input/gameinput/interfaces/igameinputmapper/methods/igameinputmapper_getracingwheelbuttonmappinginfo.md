---
author: JosephValverde
description: IGameInputMapper::GetRacingWheelButtonMappingInfo API.
edited: 9/17/2025
kindex: IGameInputMapper::GetRacingWheelButtonMappingInfo
ms.author: josephva
ms.date: 9/17/2025
ms.topic: reference
permissioned-type: public
title: GetRacingWheelButtonMappingInfo
---

# IGameInputMapper::GetRacingWheelButtonMappingInfo

## Syntax

```cpp
bool GetRacingWheelButtonMappingInfo(
    GameInputRacingWheelButtons buttonElement,
    GameInputButtonMapping* mapping
);
```

### Parameters

*buttonElement* &nbsp;&nbsp;\_In\_\
Type: [GameInputRacingWheelButtons](../../../enums/gameinputracingwheelbuttons.md)

The specific racing wheel button whose mapping is being queried.

*mapping* &nbsp;&nbsp;\_Out\_\
Type: [GameInputButtonMapping](../../../structs/gameinputbuttonmapping.md)

The mapping information of how the button is mapped from the controller buttons.

### Return value

Type: bool

If the mapping was successfully retrieved. This value is false if the device does not support the [GameInputKindRacingWheel](../../../enums/gameinputkind.md) input kind or if the specified button element is not supported by the device.

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