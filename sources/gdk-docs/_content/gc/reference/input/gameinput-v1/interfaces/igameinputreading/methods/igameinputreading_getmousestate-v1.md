---
author: AlexYatskov
description: "IGameInputReading GetMouseState API reference (v1)."
edited: "03/06/2025"
kindex: "GetMouseState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetMouseState (v1)"
---

# IGameInputReading::GetMouseState (v1)

Retrieve a view of the input reading that describes the state of a mouse.

## Syntax

```cpp
bool GetMouseState(
    GameInputMouseState* state
);
```

### Parameters

*state* &nbsp;&nbsp;\_Out\_\
Type: [GameInputMouseState*](../../../structs/gameinputmousestate-v1.md)

Interpretation of the input as a mouse.

### Return value

Type: bool

Returns true on successful interpretation of a mouse input. Returns false when attempting to read an input that is not recognized as a mouse input.

## Remarks

Call the [IGameInputReading::GetInputKind](igameinputreading_getinputkind-v1.md) method to see which Get\*State functions will return a valid interpretation for some [IGameInputReading](../igameinputreading-v1.md). Each Get\*State function has a corresponding entry in the [IGameInputReading::GetInputKind](igameinputreading_getinputkind-v1.md) enum. If you attempt to call a Get\*State function where the corresponding [IGameInputReading::GetInputKind](igameinputreading_getinputkind-v1.md) flag is not set the function will return with default at rest values as well as a false return value.

Mouse movement is reported natively from the device as relative delta values and/or absolute values, depending on device capabilities. Relative positions are not very compatible with a polling API, because periodically asking for the current mouse reading is likely to miss several intermediate deltas. Rather than forcing apps that use the polling APIs to walk through potentially dozens of historical mouse readings and adding up the deltas, the GameInput API exposes relative mouse movement by continuously accumulating deltas into a virtual "position" value. Applications then compute their own deltas by subtracting the "position" value from the previous reading they obtained. This allows access to individual deltas when calculated for consecutive readings, or accumulated deltas when intermediate readings have been intentionally skipped. It should be stressed that the mouse "position" value is merely the sum of all movement deltas, and does not correlate with screen-space coordinates in any way.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../../input/overviews/input-overview.md)
[IGameInputReading](../igameinputreading-v1.md)
[GameInputMouseState](../../../structs/gameinputmousestate-v1.md)
[GameInputMousePositions](../../../enums/gameinputmousepositions-v1.md)
