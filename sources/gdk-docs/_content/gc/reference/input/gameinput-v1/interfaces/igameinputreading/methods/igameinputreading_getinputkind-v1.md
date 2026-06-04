---
author: AlexYatskov
description: "IGameInputReading::GetInputKind API (v1)."
edited: "03/06/2025"
kindex: "IGameInputReading::GetInputKind (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetInputKind (v1)"
---

# IGameInputReading::GetInputKind (v1)

Retrieves the type of input associated with a reading.

## Syntax

```cpp
GameInputKind GetInputKind();
```

### Return value

Type: GameInputKind

Returns one of the enumerated types of [GameInputKind](../../../enums/gameinputkind-v1.md)

## Remarks

The returned value describes types of input like mouse, touch, keyboard, gamepad, or some other type of input. The [GameInputKind](../../../enums/gameinputkind-v1.md) returned is a combination of all of the types of input that can be retrieved from a device reading. This is possible due to the fact that a [GameInputKind](../../../enums/gameinputkind-v1.md) may have multiple flags set in a single instance. Each flag corresponds to a Get\*State method of [IGameInputReading](../igameinputreading-v1.md) which will return meaningful information. Calling one of the Get\*State methods when its corresponding [GameInputKind](../../../enums/gameinputkind-v1.md) flag is not set for the device causes it to fill the output arrays with "at rest" values like false or zero.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../../input/overviews/input-overview.md)
[IGameInputReading](../igameinputreading-v1.md)
[GameInputKind](../../../enums/gameinputkind-v1.md)
