---
author: M-Stahl
description: Returns the size of the raw report buffer in bytes.
edited: 01/06/2020
kindex: GetRawDataSize
ms.author: alyatsko
ms.date: 08/01/2022
ms.topic: reference
permissioned-type: public
title: GetRawDataSize
---

# IGameInputRawDeviceReport::GetRawDataSize

Returns the size of the raw report buffer in bytes.

## Syntax

```cpp
size_t GetRawDataSize();
```

### Parameters

This method has no parameters.

### Return value

Type: size_t

Returns the size of the raw data buffer in bytes for Game Input Protocol (GIP) devices. This function is unimplemented for other devices and returns 0.

## Remarks

The `IGameInputRawDeviceReport::GetRawDataSize` method returns the size of the raw report buffer in bytes.

For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

## Requirements

[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)    
[IGameInputRawDeviceReport](../igameinputrawdevicereport.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Re-introduced. |
| **v1** | Removed along with the IGameInputRawDeviceReport interface. |
| **v0** | Introduced. |