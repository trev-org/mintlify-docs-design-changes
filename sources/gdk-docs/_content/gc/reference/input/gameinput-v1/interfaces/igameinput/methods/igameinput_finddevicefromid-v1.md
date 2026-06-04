---
author: AlexYatskov
description: "FindDeviceFromId API reference (v1)."
edited: "03/06/2025"
kindex: "FindDeviceFromId (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInput::FindDeviceFromId (v1)"
---

# IGameInput::FindDeviceFromId (v1)

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

Once obtained, the [IGameInputDevice](../../igameinputdevice/igameinputdevice-v1.md) instance can be used as a filter in the polling APIs like [IGameInput::GetCurrentReading](igameinput_getcurrentreading-v1.md), or event-based APIs like [IGameInput::RegisterReadingCallback](igameinput_registerreadingcallback-v1.md) (to retrieve input), or used directly to access device-specific information and features. If the provided identifier cannot be matched with any known GameInput device objects, the GetDeviceFrom* methods return a `NULL` pointer. These methods interrogate local state within the calling process and return quickly, so they are safe to call from time sensitive contexts.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../../input/overviews/input-overview.md)
[IGameInput](../igameinput-v1.md)
[IGameInputDevice](../../igameinputdevice/igameinputdevice-v1.md)
[IGameInput::GetCurrentReading](igameinput_getcurrentreading-v1.md)
[IGameInput::RegisterReadingCallback](igameinput_registerreadingcallback-v1.md)
