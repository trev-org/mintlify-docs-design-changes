---
author: AlexYatskov
description: "Retrieves an IGameInputDevice interface based on a matching platform string (v1)."
edited: "03/06/2025"
kindex: "FindDeviceFromPlatformString (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInput::FindDeviceFromPlatformString (v1)"
---

# IGameInput::FindDeviceFromPlatformString (v1)

Retrieves an `IGameInputDevice` interface based on a matching platform string.

## Syntax

```cpp
HRESULT FindDeviceFromPlatformString(
    LPCWSTR value,
    IGameInputDevice** device
);
```

### Parameters

*value* &nbsp;&nbsp;\_In\_\
Type: LPCWSTR

Platform string to match.

*device* &nbsp;&nbsp;\_COM\_Outptr\_\
Type: IGameInputDevice**

Returned [IGameInputDevice](../../igameinputdevice/igameinputdevice-v1.md) interface.

### Return value

Type: HRESULT

Function result.

## Remarks

After it is obtained, the `IGameInputDevice` instance is used as a filter in the polling or event-based APIs (to retrieve input), or used directly to access device-specific information and features. If the specified platform string cannot be matched with any known GameInput device objects, this method returns a `NULL` pointer. The method queries the local state within the calling process and returns quickly, so it is safe to call from time-sensitive contexts.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md)
[IOverview of GameInput](../../../../../../input/overviews/input-overview.md)
[IGameInput](../igameinput-v1.md)
