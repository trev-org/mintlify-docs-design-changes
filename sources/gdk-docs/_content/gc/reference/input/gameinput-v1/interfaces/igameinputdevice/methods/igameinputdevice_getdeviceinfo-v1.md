---
author: AlexYatskov
description: "Accesses static information about the full properties and capabilities of an input device (v1)."
edited: "03/06/2025"
kindex: "GetDeviceInfo (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetDeviceInfo (v1)"
---

# GetDeviceInfo (v1)

Accesses static information about the full properties and capabilities of an input device.

## Syntax

```cpp
HRESULT GetDeviceInfo(
    const GameInputDeviceInfo** info
);
```

### Parameters

*info* &nbsp;&nbsp;\_Outptr\_\
Type: GameInputDeviceInfo**

The device info associated with the IGameInputDevice.

### Return value

Type: HRESULT

Function result.

## Remarks

The `GetDeviceInfo` method memory is not owned by the application. The memory will remain accessible if the `IGameInput` instance is kept alive by the application. Once the reference to the `IGameInput` object is released, the memory goes away.

The following code example demonstrates how to identify extra buttons on a gamepad.

```cpp
bool IsGamepadButton(IGameInputDevice* gamepad, uint32_t buttonIndex) noexcept
{
    const GameInputDeviceInfo* gamepadInfo = nullptr;
    const bool succeeded = gamepad->GetDeviceInfo(&gamepadInfo);
    assert(succeeded);
    assert(buttonIndex < gamepadInfo->controllerButtonCount);

    const auto buttonInfo = &gamepadInfo->controllerButtonInfo[buttonIndex];
    const bool isGamepadButton = (buttonInfo->mappedInput & GameInputKindGamepad);

    return isGamepadButton;
}
```

The following code example demonstrates how to determine whether a racing wheel has a clutch.

```cpp
bool HasClutch(IGameInputDevice* wheel) noexcept
{
    const GameInputDeviceInfo* wheelInfo = nullptr;
    const bool succeeded = wheel->GetDeviceInfo(&wheelInfo);
    assert(succeeded);
    assert(wheelInfo->racingWheelInfo);

    const bool hasClutch = wheelInfo->racingWheelInfo->hasClutch;

    return hasClutch;
}
```

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[GameInputDeviceInfo](../../../structs/gameinputdeviceinfo-v1.md)
[IGameInputDevice](../igameinputdevice-v1.md)
