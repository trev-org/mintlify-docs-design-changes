---
author: AlexYatskov
description: IGameInputReading::GetDevice API.
edited: 03/06/2025
kindex: IGameInputReading::GetDevice
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetDevice
---

# IGameInputReading::GetDevice

Gets the device associated with an IGameInputReading.

## Syntax

```cpp
void GetDevice(
    IGameInputDevice** device
);
```

### Parameters

*device* &nbsp;&nbsp;\_Outptr\_\
Type: IGameInputDevice**

The device associated with the IGameInputReading

### Return value

Type: void

## Remarks

Use this method to gain information about the makes of a device and its capabilities. For example you may need to know the number of buttons, arrays, and axis on the device. This will be important when you need to pass in buffers of an appropriate size for the many Get\*State functions like [IGameInputReading::GetGamepadState](igameinputreading_getgamepadstate.md) which require a developer created buffer.

## Requirements

**Header:** GameInput.h

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputReading](../igameinputreading.md)  
[IGameInputReading::GetGamepadState](igameinputreading_getgamepadstate.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |