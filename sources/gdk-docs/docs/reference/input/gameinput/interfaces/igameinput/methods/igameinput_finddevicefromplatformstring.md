---
author: AlexYatskov
description: Retrieves an IGameInputDevice interface based on a matching platform string.
edited: 03/06/2025
kindex: FindDeviceFromPlatformString
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInput::FindDeviceFromPlatformString
---

# IGameInput::FindDeviceFromPlatformString

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

Returned [IGameInputDevice](../../igameinputdevice/igameinputdevice.md) interface.

### Return value

Type: HRESULT

[Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md)  
[IOverview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInput](../igameinput.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |