---
author: M-Stahl
description: Sends raw data to the device.
edited: 07/02/2019
kindex: SendRawDeviceOutput
ms.author: alyatsko
ms.date: 08/01/2022
ms.topic: reference
permissioned-type: public
title: SendRawDeviceOutput
---

# IGameInputDevice::SendRawDeviceOutput

Sends raw data to the device.

## Syntax

```cpp
HRESULT SendRawDeviceOutput(
    IGameInputRawDeviceReport* report
)
```

### Parameters

*report* &nbsp;&nbsp;\_In\_<br>
Type: IGameInputRawDeviceReport*

Report sent to the device.

### Return value

Type: HRESULT

Function result.

## Remarks

The `SendRawDeviceOutput` method sends data to the device. For Xbox One devices, this takes the form of a GIP message. For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
 
[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)   
[IGameInputDevice](../igameinputdevice.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Re-introduced. |
| **v1** | Removed. |
| **v0** | Introduced. |