---
author: AlexYatskov
description: FindDeviceFromId API reference.
edited: 03/06/2025
kindex: FindDeviceFromId
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInput::FindDeviceFromId
---

# IGameInput::FindDeviceFromId

Retrieves a device based on its identifier.

## Syntax

```cpp
HRESULT FindDeviceFromId(
    const APP_LOCAL_DEVICE_ID* value,
    IGameInputDevice** device
);
```

### Parameters

*value* &nbsp;&nbsp;\_In\_\
Type: APP_LOCAL_DEVICE_ID*

System generated ID for the device.

*device* &nbsp;&nbsp;\_COM\_Outptr\_\
Type: IGameInputDevice**

The returned device.

### Return value

Type: HRESULT

Function result.

## Remarks

Once obtained, the [IGameInputDevice](../../igameinputdevice/igameinputdevice.md) instance can be used as a filter in the polling APIs like [IGameInput::GetCurrentReading](igameinput_getcurrentreading.md), or event-based APIs like [IGameInput::RegisterReadingCallback](igameinput_registerreadingcallback.md) (to retrieve input), or used directly to access device-specific information and features. If the provided identifier cannot be matched with any known GameInput device objects, the GetDeviceFrom* methods return a `NULL` pointer. These methods interrogate local state within the calling process and return quickly, so they are safe to call from time sensitive contexts.

## Requirements

**Header:** GameInput.h

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInput](../igameinput.md)  
[IGameInputDevice](../../igameinputdevice/igameinputdevice.md)  
[IGameInput::GetCurrentReading](igameinput_getcurrentreading.md)  
[IGameInput::RegisterReadingCallback](igameinput_registerreadingcallback.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |