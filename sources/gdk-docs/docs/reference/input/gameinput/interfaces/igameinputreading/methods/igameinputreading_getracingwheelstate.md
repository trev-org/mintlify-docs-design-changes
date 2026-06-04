---
author: AlexYatskov
description: IGameInputReading GetRacingWheelState API reference.
edited: 03/06/2025
kindex: GetRacingWheelState
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetRacingWheelState
---

# IGameInputReading::GetRacingWheelState

Retrieve a view of the input reading that describes the state of a racing wheel.

## Syntax

```cpp
bool GetRacingWheelState(
    GameInputRacingWheelState* state
);
```

### Parameters

*state* &nbsp;&nbsp;\_Out\_\
Type: [GameInputRacingWheelState*](../../../structs/gameinputracingwheelstate.md)

Interpretation of the input as a racing wheel.

### Return value

Type: bool

Returns true on successful interpretation of a racing wheel input. Returns false when attempting to read an input that is not recognized as a racing wheel input.

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputReading](../igameinputreading.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |