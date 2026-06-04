---
author: AlexYatskov
description: "IGameInputReading GetUiNavigationState API reference (v1)."
edited: "03/06/2025"
kindex: "GetUiNavigationState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetUiNavigationState (v1)"
---

# IGameInputReading::GetUiNavigationState (v1)

Retrieve a view of the input reading that describes the state of a UI navigation.

## Syntax

```cpp
bool GetUiNavigationState(
    GameInputUiNavigationState* state
);
```

### Parameters

*state* &nbsp;&nbsp;\_Out\_\
Type: [GameInputUiNavigationState*](../../../structs/gameinputuinavigationstate-v1.md)

Interpretation of the input as UI navigation.

### Return value

Type: bool

Returns true on successful interpretation of a UI Navigation input. Returns false when attempting to read an input that is not recognized as a UI Navigation input.

## Remarks

Call the [IGameInputReading::GetInputKind](igameinputreading_getinputkind-v1.md) method to see which Get\*State functions will return a valid interpretation for some [IGameInputReading](../igameinputreading-v1.md). Each Get\*State function has a corresponding entry in the [IGameInputReading::GetInputKind](igameinputreading_getinputkind-v1.md) enum. If you attempt to call a Get\*State function where the corresponding [IGameInputReading::GetInputKind](igameinputreading_getinputkind-v1.md) flag is not set the function will return with default at rest values as well as a false return value.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../../input/overviews/input-overview.md)
[IGameInputReading](../igameinputreading-v1.md)
