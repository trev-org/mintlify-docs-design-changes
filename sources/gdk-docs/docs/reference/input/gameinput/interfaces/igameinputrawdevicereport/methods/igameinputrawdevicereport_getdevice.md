---
author: M-Stahl
description: Retrieves the device associated with the raw device report.
edited: 01/06/2020
kindex: GetDevice
ms.author: alyatsko
ms.date: 08/01/2022
ms.topic: reference
permissioned-type: public
title: IGameInputRawDeviceReport::GetDevice
---

# IGameInputRawDeviceReport::GetDevice

Retrieves the device associated with the raw device report.

## Syntax

```cpp
void GetDevice(
    IGameInputDevice** device
);
```

### Parameters

*device* &nbsp;&nbsp;\_Outptr\_<br>
Type: IGameInputDevice**

The device associated with the raw device report.

### Return value

Type: void

## Remarks

The `IGameInputRawDeviceReport::GetDevice` method returns the device associated with the raw device report.

## Requirements

**Header:** GameInput.h

[Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md)  
[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)   
[IGameInputRawDeviceReport](../igameinputrawdevicereport.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Re-introduced. |
| **v1** | Removed along with the IGameInputRawDeviceReport interface. |
| **v0** | Introduced. |