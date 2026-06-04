---
author: M-Stahl
description: Retrieves the report buffer contents in raw byte form.
edited: 07/02/2019
kindex: GetRawData
ms.author: alyatsko
ms.date: 08/01/2022
ms.topic: reference
permissioned-type: public
title: GetRawData
---

# IGameInputRawDeviceReport::GetRawData

Retrieves the report buffer contents in raw byte form.

## Syntax

```cpp
size_t GetRawData(
    size_t bufferSize,
    void* buffer
)
```

### Parameters

*bufferSize* &nbsp;&nbsp;\_In\_<br>
Type: size_t

Size of the buffer passed into `GetRawData`.

*buffer* &nbsp;&nbsp;\_Out\_writes\_(bufferSize)<br>
Type: void*

User-created buffer returned with raw data.

### Return value

Type: size_t

Returns the number of bytes written to the caller's buffer for Game Input Protocol (GIP) devices.

## Remarks

The `IGameInputRawDeviceReport::GetRawData` method allows applications to read the report buffer contents in raw byte form. The caller typically passes in a buffer whose size matches the value returned from the [GetRawDataSize](igameinputrawdevicereport_getrawdatasize.md) method. However, the `GetRawData` method accepts any size buffer. If the buffer is too small, the output is simply truncated. The return value from the `GetRawData` method indicates how many bytes were written to the caller's buffer. This differs only from the value of the `bufferSize` parameter when a buffer is provided that is larger than required.

## Requirements

**Header:** GameInput.h

**Library:** xgameruntime.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also
  
[Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md)  
[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)    
[IGameInputRawDeviceReport](../igameinputrawdevicereport.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Re-introduced. |
| **v1** | Removed along with the IGameInputRawDeviceReport interface. |
| **v0** | Introduced. |