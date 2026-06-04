---
author: AlexYatskov
description: IGameInputReading GetFlightStickState API reference.
edited: 03/06/2025
kindex: GetFlightStickState
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetFlightStickState
---

# IGameInputReading::GetFlightStickState

Retrieve a view of the input reading that describes the state of a flight stick.

## Syntax

```cpp
bool GetFlightStickState(
    GameInputFlightStickState* state
);
```

### Parameters

*state* &nbsp;&nbsp;\_Out\_\
Type: [GameInputFlightStickState*](../../../structs/gameinputflightstickstate.md)

Interpretation of the input as a flight stick input.

### Return value

Type: bool

Returns true on successful interpretation of a flight stick. Returns false when attempting to read an input that is not recognized as a flight stick.

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputReading](../igameinputreading.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |