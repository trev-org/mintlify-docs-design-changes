---
author: AlexYatskov
description: "IGameInputReading::GetTimestamp API (v1)."
edited: "03/06/2025"
kindex: "IGameInputReading::GetTimestamp (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetTimestamp (v1)"
---

# IGameInputReading::GetTimestamp (v1)

Retrieves the microsecond timestamp associated with the `IGameInputReading`.

## Syntax

```cpp
uint64_t GetTimestamp();
```

### Return value

Type: uint64_t

The microsecond timestamp describing when the input was made.

## Remarks

There are cases where a time stamp is not sufficient to differentiate between two separate readings. You can compare the results of this function with the current time by comparing the results from [IGameInput::GetCurrentTimeStamp.md](../../igameinput/methods/igameinput_getcurrenttimestamp-v1.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../../input/overviews/input-overview.md)
[IGameInputReading](../igameinputreading-v1.md)
[IGameInput::GetCurrentTimeStamp.md](../../igameinput/methods/igameinput_getcurrenttimestamp-v1.md)
