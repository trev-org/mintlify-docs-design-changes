---
description: Gets a reading interpolated to a specified timestamp (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInput::GetTemporalReading (Deprecated)
---

# IGameInput::GetTemporalReading

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API.

Gets an input reading interpolated to a specified point in time.

## Syntax

```cpp
HRESULT GetTemporalReading(
    uint64_t targetTime,
    uint64_t windowSize,
    GameInputKind inputKind,
    IGameInputDevice* device,
    IGameInputReading** reading
);
```


### Parameters

*targetTime* &nbsp;&nbsp;\_In\_\
Type: uint64_t

The target timestamp in microseconds. Use [IGameInput::GetCurrentTimestamp](../../../../interfaces/igameinput/methods/igameinput_getcurrenttimestamp.md) to get the current time.

*windowSize* &nbsp;&nbsp;\_In\_\
Type: uint64_t

The size of the interpolation window around `targetTime`, in microseconds.

*inputKind* &nbsp;&nbsp;\_In\_\
Type: [GameInputKind](../../../../enums/gameinputkind.md)

The type of input to retrieve.

*device* &nbsp;&nbsp;\_In\_opt\_\
Type: IGameInputDevice*

An optional filter that limits the result to a specific device.

*reading* &nbsp;&nbsp;\_COM\_Outptr\_\
Type: IGameInputReading**

The resulting interpolated reading.

### Return value

Type: HRESULT

Returns E_NOTIMPL, as this method was never implemented in v0.

## Remarks

This method was used to retrieve an input reading that had been interpolated to a specific point in time, useful for applications needing to correlate input with a specific frame timestamp. It was removed in v1 as part of simplification of the reading model. Applications should instead use [GetCurrentReading](../../../../interfaces/igameinput/methods/igameinput_getcurrentreading.md) or [GetNextReading](../../../../interfaces/igameinput/methods/igameinput_getnextreading.md) / [GetPreviousReading](../../../../interfaces/igameinput/methods/igameinput_getpreviousreading.md) to walk the input stream.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[IGameInput::GetCurrentReading](../../../../interfaces/igameinput/methods/igameinput_getcurrentreading.md)  
[IGameInput::GetCurrentTimestamp](../../../../interfaces/igameinput/methods/igameinput_getcurrenttimestamp.md)  
[IGameInput](../../../../interfaces/igameinput/igameinput.md)  
