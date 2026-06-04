---
author: JosephValverde
description: Gets the controller axis indexes of the extra axes on the device for a given input kind.
edited: 09/29/2025
kindex: GetExtraAxisIndexes
ms.author: josephva
ms.date: 09/29/2025
ms.topic: reference
permissioned-type: public
title: GetExtraAxisIndexes
---

# GetExtraAxisIndexes

Gets the controller axis indexes of the extra axes on the device for a given input kind.

## Syntax

```cpp
HRESULT GetExtraAxisIndexes(
    GameInputKind inputKind,
    uint32_t extraAxisCount,
    uint8_t* extraAxisIndexes
);
```

### Parameters

*inputKind* &nbsp;&nbsp;\_In\_\
Type: GameInputKind

The input kind whose extra axis indexes are being requested.

*extraAxisCount* &nbsp;&nbsp;\_In\_\
Type: uint32_t

Expected count of axis indexes for extra axes.
This number can be retrieved by calling  [GetExtraAxisCount](igameinputdevice_getextraaxiscount.md).

*extraAxisIndexes* &nbsp;&nbsp;\_Out\_writes\_(extraAxisCount)\_\
Type: uint8_t*

Pointer to the array of axis indexes.

### Return value

Type: HRESULT

Function result.

## Remarks

The `GetExtraAxisIndexes` method retrieves the controller axis indexes of the extra axes that are present on the device for a given input kind. Extra axes are controller axes that exist on the physical device but are not part of the standard mapping for the specified input kind.

Before calling this method, you should first call [GetExtraAxisCount](igameinputdevice_getextraaxiscount.md) to determine how many extra axes are available and pass that count as the extraAxisCount parameter.

The following code example demonstrates how to make use of a gamepad's extra axes:

```cpp
bool GetGamepadExtraAxisValues(
    std::vector<float>* extraAxes,
    IGameInputReading* reading) noexcept
{
    Mwrl::ComPtr<IGameInputDevice> device;
    reading->GetDevice(&device);

    uint32_t extraAxisCount = 0;
    if (FAILED(device->GetExtraAxisCount(GameInputKindGamepad, &extraAxisCount)))
    {
        return false;
    }

    std::vector<uint8_t> axisIndexes(extraAxisCount);
    extraAxes->resize(extraAxisCount);
    if (FAILED(device->GetExtraAxisIndexes(
        GameInputKindGamepad,
        extraAxisCount,
        axisIndexes.data())))
    {
        return false;
    }

    std::vector<float> axisStates(reading->GetControllerAxisCount());
    reading->GetControllerAxisState(static_cast<uint32_t>(axisStates.size()), axisStates.data());

    for (size_t i = 0; i < axisIndexes.size(); ++i)
    {
        if (axisIndexes[i] < axisStates.size())
        {
            (*extraAxes)[i] = axisStates[axisIndexes[i]];
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
[GetExtraAxisCount](igameinputdevice_getextraaxiscount.md)<br>
[GetExtraButtonIndexes](igameinputdevice_getextrabuttonindexes.md)<br>
[IGameInputDevice](../igameinputdevice.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Introduced. |