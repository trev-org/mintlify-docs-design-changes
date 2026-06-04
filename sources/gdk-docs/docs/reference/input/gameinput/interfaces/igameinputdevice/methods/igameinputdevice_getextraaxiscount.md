---
author: JosephValverde
description: Gets the number of extra axes, or non-mapped axes, present in the device for a given input kind.
edited: 09/29/2025
kindex: GetExtraAxisCount
ms.author: josephva
ms.date: 09/29/2025
ms.topic: reference
permissioned-type: public
title: GetExtraAxisCount
---

# GetExtraAxisCount

Gets the number of extra axes, or non-mapped axes, present in the device for a given input kind.

## Syntax

```cpp
HRESULT GetExtraAxisCount(
    GameInputKind inputKind,
    uint32_t* extraAxisCount
);
```

### Parameters

*inputKind* &nbsp;&nbsp;\_In\_\
Type: GameInputKind

The input kind whose extra axis count is being requested.

*extraAxisCount* &nbsp;&nbsp;\_Out\_\
Type: uint32_t*

The number of extra axes, or non-mapped axes, present in the device for the specified input kind.

### Return value
Type: HRESULT

Function result.

## Remarks

Extra axes are controller axes that exist on the physical device but are not part of the standard mapping for the specified input kind. This method is useful for applications that want to access device-specific axes that go beyond the standard input mapping.

The obtained count is expected to be used with the [GetExtraAxisIndexes](igameinputdevice_getextraaxisindexes.md) method to retrieve the specific indexes of these extra axes and to buffer the correct space to store the axis indexes provided by that method.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[GameInputKind](../../../enums/gameinputkind.md)<br>
[GetExtraAxisIndexes](igameinputdevice_getextraaxisindexes.md)<br>
[GetExtraButtonCount](igameinputdevice_getextrabuttoncount.md)<br>
[IGameInputDevice](../igameinputdevice.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Introduced. |