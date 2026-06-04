---
author: AlexYatskov
description: IGameInputReading GetArcadeStickState API reference.
edited: 03/06/2025
kindex: GetArcadeStickState
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetArcadeStickState
---

# IGameInputReading::GetArcadeStickState

Retrieve a view of the input reading that describes the state of an arcade stick.

## Syntax

```cpp
bool GetArcadeStickState(
    GameInputArcadeStickState* state
)
```

### Parameters

*state* &nbsp;&nbsp;\_Out\_\
Type: [GameInputArcadeStickState*](../../../structs/gameinputarcadestickstate.md)

Interpretation of the input as an arcade stick input.

### Return value

Type: bool

Returns true on successful interpretation of an arcade stick. Returns false when attempting to read an input that is not recognized as an arcade stick.

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputReading](../igameinputreading.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |