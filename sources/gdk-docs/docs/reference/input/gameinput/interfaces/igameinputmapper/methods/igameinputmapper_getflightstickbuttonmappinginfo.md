---
author: JosephValverde
description: IGameInputMapper::GetFlightStickButtonMappingInfo API.
edited: 9/25/2025
kindex: IGameInputMapper::GetFlightStickButtonMappingInfo
ms.author: josephva
ms.date: 9/25/2025
ms.topic: reference
permissioned-type: public
title: GetFlightStickButtonMappingInfo
---

# IGameInputMapper::GetFlightStickButtonMappingInfo

## Syntax

```cpp
bool GetFlightStickButtonMappingInfo(
    GameInputFlightStickButtons buttonElement,
    GameInputButtonMapping* mapping
);
```

### Parameters
*buttonElement* &nbsp;&nbsp;\_In\_\
Type: [GameInputFlightStickButtons](../../../enums/gameinputflightstickbuttons.md)

The specific flight stick button whose mapping is being queried.

*mapping* &nbsp;&nbsp;\_Out\_\
type: [GameInputButtonMapping](../../../structs/gameinputbuttonmapping.md)

The mapping information of how the button is mapped from the controller axes, buttons or switches.

### Return value

Type: bool

If the mapping was successfully retrieved. This value is false if the device does not support the [GameInputKindFlightStick](../../../enums/gameinputkind.md) input kind or if the specified button element is not supported by the device.

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