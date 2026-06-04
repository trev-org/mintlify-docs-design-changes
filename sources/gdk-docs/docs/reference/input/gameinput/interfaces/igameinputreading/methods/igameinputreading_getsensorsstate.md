---
author: pablo-msft
description: IGameInputReading GetSensorsState API reference.
edited: 05/27/2025
kindex: GetSensorsState
ms.author: pablo
ms.date: 05/27/2025
ms.topic: reference
permissioned-type: public
title: GetSensorsState
---

# IGameInputReading::GetSensorsState

Retrieve a view of the input reading that describes the state of sensors on the device.

## Syntax

```cpp
bool GetSensorsState(
    GameInputSensorsState* state
);
```

### Parameters

*state* &nbsp;&nbsp;\_Out\_\
Type: [GameInputSensorsState*](../../../structs/gameinputsensorsstate.md)

Interpretation of the input as a set of sensors.

### Return value

Type: bool

Returns true on successful interpretation of sensor input. Returns false when attempting to read an input that is not recognized as sensor input.

## Remarks

Call the [IGameInputReading::GetInputKind](igameinputreading_getinputkind.md) method to see which Get\*State functions will return a valid interpretation for some [IGameInputReading](../igameinputreading.md). Each Get\*State function has a corresponding entry in the [IGameInputReading::GetInputKind](igameinputreading_getinputkind.md) enum. If you attempt to call a Get\*State function where the corresponding [IGameInputReading::GetInputKind](igameinputreading_getinputkind.md) flag is not set, the function will return with default at rest values as well as a false return value.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)<br>
[IGameInputReading](../igameinputreading.md)<br>
[GameInputSensorsState](../../../structs/gameinputsensorsstate.md)<br>
[GameInputSensorsInfo](../../../structs/gameinputsensorsinfo.md)<br>
[GameInputSensorsKind](../../../enums/gameinputsensorskind.md)

## Version History

| Version | Changes |
| --- | --- |
| **v2** | Introduced. |