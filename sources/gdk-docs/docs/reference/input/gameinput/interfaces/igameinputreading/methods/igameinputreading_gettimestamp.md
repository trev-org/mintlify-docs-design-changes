---
author: AlexYatskov
description: IGameInputReading::GetTimestamp API.
edited: 03/06/2025
kindex: IGameInputReading::GetTimestamp
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetTimestamp
---

# IGameInputReading::GetTimestamp

Retrieves the microsecond timestamp associated with the `IGameInputReading`.

## Syntax

```cpp
uint64_t GetTimestamp();
```

### Return value

Type: uint64_t

The microsecond timestamp describing when the input was made.

## Remarks

There are cases where a time stamp is not sufficient to differentiate between two separate readings. You can compare the results of this function with the current time by comparing the results from [IGameInput::GetCurrentTimeStamp](../../igameinput/methods/igameinput_getcurrenttimestamp.md).

## Requirements

**Header:** GameInput.h

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputReading](../igameinputreading.md)  
[IGameInput::GetCurrentTimeStamp.md](../../igameinput/methods/igameinput_getcurrenttimestamp.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |