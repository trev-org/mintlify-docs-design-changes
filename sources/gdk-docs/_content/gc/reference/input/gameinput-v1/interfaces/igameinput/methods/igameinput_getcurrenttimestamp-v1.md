---
author: AlexYatskov
description: "IGameInput::GetCurrentTimestamp API reference (v1)."
edited: "03/06/2025"
kindex: "IGameInput::GetCurrentTimestamp (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInput::GetCurrentTimestamp   (v1)"
---

# IGameInput::GetCurrentTimestamp (v1)

Returns a GameInput timestamp, taken at the moment the method is called.

## Syntax

```cpp
uint64_t GetCurrentTimestamp();
```

### Parameters  

None.

### Return value

Type: uint64_t

Timestamp measure in microseconds.

## Remarks

The GameInput API uses microseconds as the currency for its timestamps and other temporal functionality. Using a monotonically increasing counter instead of the system time ensures that no jitter is introduced as a result of system clock adjustments. Several methods within the GameInput API either return timestamp values or take timestamp values as an input. This method enables applications to reason about the values of other timestamps, relative to the present.

You can use GetCurrentTimeStamp to reason about readings and when they happened relative to now by comparing the results with the results of [IGameInputReading::GetTimeStamp](../../igameinputreading/methods/igameinputreading_gettimestamp-v1.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../../input/overviews/input-overview.md)
[IGameInput](../igameinput-v1.md)
[IGameInputReading::GetTimeStamp](../../igameinputreading/methods/igameinputreading_gettimestamp-v1.md)
[IGameInputDevice::SetRumbleState](../../igameinputdevice/methods/igameinputdevice_setrumblestate-v1.md)
