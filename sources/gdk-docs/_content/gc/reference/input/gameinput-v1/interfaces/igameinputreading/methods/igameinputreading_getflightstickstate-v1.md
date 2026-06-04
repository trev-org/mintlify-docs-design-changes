---
author: AlexYatskov
description: "IGameInputReading GetFlightStickState API reference (v1)."
edited: "03/06/2025"
kindex: "GetFlightStickState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetFlightStickState (v1)"
---

# IGameInputReading::GetFlightStickState (v1)

Retrieve a view of the input reading that describes the state of a flight stick.

## Syntax

```cpp
bool GetFlightStickState(
    GameInputFlightStickState* state
);
```

### Parameters

*state* &nbsp;&nbsp;\_Out\_\
Type: [GameInputFlightStickState*](../../../structs/gameinputflightstickstate-v1.md)

Interpretation of the input as a flight stick input.

### Return value

Type: bool

Returns true on successful interpretation of a flight stick. Returns false when attempting to read an input that is not recognized as a flight stick.

## Remarks

Call the [IGameInputReading::GetInputKind](igameinputreading_getinputkind-v1.md) method to see which Get\*State functions will return a valid interpretation for some [IGameInputReading](../igameinputreading-v1.md). Each Get\*State function has a corresponding entry in the [IGameInputReading::GetInputKind](igameinputreading_getinputkind-v1.md) enum. If you attempt to call a Get\*State function where the corresponding [IGameInputReading::GetInputKind](igameinputreading_getinputkind-v1.md) flag is not set the function will return with default at rest values as well as a false return value.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../../input/overviews/input-overview.md)
[IGameInputReading](../igameinputreading-v1.md)
