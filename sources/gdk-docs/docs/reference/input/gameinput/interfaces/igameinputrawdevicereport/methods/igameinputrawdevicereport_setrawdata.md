---
author: M-Stahl
description: Sets the contents of the report buffer.
edited: 07/02/2019
kindex: SetRawData
ms.author: alyatsko
ms.date: 08/01/2022
ms.topic: reference
permissioned-type: public
title: SetRawData
---

# IGameInputRawDeviceReport::SetRawData

Sets the contents of the report buffer.

## Syntax

```cpp
bool SetRawData(
    size_t bufferSize,
    const void* buffer
)
```

### Parameters

*bufferSize* &nbsp;&nbsp;\_In\_<br>
Type: size_t

Size of the raw data buffer to be set.

*buffer* &nbsp;&nbsp;\_In\_reads\_(bufferSize)<br>
Type: void*

Buffer to be written to.

### Return value

Type: bool

Returns true on success; returns false otherwise.

## Remarks

The `IGameInputRawDeviceReport::SetRawData` method allows applications to set the report buffer contents directly. The caller must pass a source buffer whose size matches the value returned from the [GetRawDataSize](igameinputrawdevicereport_getrawdatasize.md) method. Setting the report buffer contents is allowed only for output reports.

## Requirements

**Header:** GameInput.h

**Library:** xgameruntime.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

[Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md)  
[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputRawDeviceReport](../igameinputrawdevicereport.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Re-introduced. |
| **v1** | Removed along with the IGameInputRawDeviceReport interface. |
| **v0** | Introduced. |