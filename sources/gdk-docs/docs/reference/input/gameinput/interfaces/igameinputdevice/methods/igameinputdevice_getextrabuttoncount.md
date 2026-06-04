---
author: JosephValverde
description: Gets the number of extra buttons, or non-supported buttons, present in the device for a given input kind.
edited: 09/29/2025
kindex: GetExtraButtonCount
ms.author: josephva
ms.date: 09/29/2025
ms.topic: reference
permissioned-type: public
title: GetExtraButtonCount
---

# GetExtraButtonCount

Gets the number of extra buttons, or non-supported buttons, present in the device for a given input kind.

## Syntax

```cpp
HRESULT GetExtraButtonCount(
    GameInputKind inputKind,
    uint32_t* extraButtonCount
);
```

### Parameters

*inputKind* &nbsp;&nbsp;\_In\_\
Type: GameInputKind

The input kind whose extra button count is being requested.

*extraButtonCount* &nbsp;&nbsp;\_Out\_\
Type: uint32_t*

The number of extra buttons, or non-supported buttons, present in the device for the specified input kind.

### Return value

Type: HRESULT

Function result.

## Remarks

Extra buttons are controller buttons that exist on the physical device but are not part of the standard mapping for the specified input kind. This method is useful for applications that want to access device-specific buttons that go beyond the standard input mapping.

The obtained count is expected to be used with the [GetExtraButtonIndexes](igameinputdevice_getextrabuttonindexes.md) method to retrieve the specific indexes of these extra buttons and to buffer the correct space to store the button indexes provided by that method.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[GameInputKind](../../../enums/gameinputkind.md)<br>
[GetExtraButtonIndexes](igameinputdevice_getextrabuttonindexes.md)<br>
[GetExtraAxisCount](igameinputdevice_getextraaxiscount.md)<br>
[IGameInputDevice](../igameinputdevice.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Introduced. |