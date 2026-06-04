---
author: JosephValverde
description: Gets the controller button indexes of the extra buttons on the device for a given input kind.
edited: 09/29/2025
kindex: GetExtraButtonIndexes
ms.author: josephva
ms.date: 09/29/2025
ms.topic: reference
permissioned-type: public
title: GetExtraButtonIndexes
---

# GetExtraButtonIndexes

Gets the controller button indexes of the extra buttons on the device for a given input kind.

## Syntax

```cpp
HRESULT GetExtraButtonIndexes(
    GameInputKind inputKind,
    uint32_t extraButtonCount,
    uint8_t* extraButtonIndexes
);
```

### Parameters

*inputKind* &nbsp;&nbsp;\_In\_\
Type: GameInputKind

The input kind whose extra button indexes are being requested.

*extraButtonCount* &nbsp;&nbsp;\_In\_\
Type: uint32_t

Expected count of button indexes for extra buttons.
This number can be retrieved by calling  [GetExtraButtonCount](igameinputdevice_getextrabuttoncount.md).

*extraButtonIndexes* &nbsp;&nbsp;\_Out\_writes\_(extraButtonCount)\_\
Type: uint8_t*

Pointer to the array of button indexes.

### Return value

Type: HRESULT

Function result.

## Remarks

Extra buttons are controller buttons that exist on the physical device but are not part of the standard mapping for the specified input kind.

Before calling this method, you should first call [GetExtraButtonCount](igameinputdevice_getextrabuttoncount.md) to determine how many extra buttons are available and pass that count as the extraButtonCount parameter.

The next code snippet demonstrates how to make use of a gamepad's extra buttons:

```cpp
bool GetGamepadExtraButtonValues(
    std::vector<bool>* extraButtons,
    IGameInputReading* reading) noexcept
{
    Mwrl::ComPtr<IGameInputDevice> device;
    reading->GetDevice(&device);

    uint32_t extraButtonCount = 0;
    if (FAILED(device->GetExtraButtonCount(GameInputKindGamepad, &extraButtonCount)))
    {
        return false;
    }

    std::vector<uint8_t> buttonIndexes(extraButtonCount);
    extraButtons->resize(extraButtonCount);
    if (FAILED(device->GetExtraButtonIndexes(
        GameInputKindGamepad,
        extraButtonCount,
        buttonIndexes.data())))
    {
        return false;
    }

    std::vector<bool> buttonStates(reading->GetControllerButtonCount());
    reading->GetControllerButtonState(static_cast<uint32_t>(buttonStates.size()), buttonStates.data());

    for (size_t i = 0; i < buttonIndexes.size(); ++i)
    {
        if (buttonIndexes[i] < buttonStates.size())
        {
            (*extraButtons)[i] = buttonStates[buttonIndexes[i]];
        }
    }

    return true;
}
```

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[GameInputKind](../../../enums/gameinputkind.md)<br>
[GetExtraButtonCount](igameinputdevice_getextrabuttoncount.md)<br>
[GetExtraAxisIndexes](igameinputdevice_getextraaxisindexes.md)<br>
[IGameInputDevice](../igameinputdevice.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Introduced. |