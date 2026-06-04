---
author: AlexYatskov
description: Accesses static information about the full properties and capabilities of an input device.
edited: 03/06/2025
kindex: GetDeviceInfo
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetDeviceInfo
---

# GetDeviceInfo

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

[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)  
[GameInputDeviceInfo](../../../structs/gameinputdeviceinfo.md)    
[IGameInputDevice](../igameinputdevice.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Signature unchanged. [GameInputDeviceInfo](../../../structs/gameinputdeviceinfo.md) extended: `controllerInfo` added (replacing separate axis/button/switch count+info fields and `uiNavigationInfo`); `inputReportCount`/`inputReportInfo` and `outputReportCount`/`outputReportInfo` added; `hapticFeedbackMotorInfo` removed. |
| **v2** | Signature unchanged. [GameInputDeviceInfo](../../../structs/gameinputdeviceinfo.md) extended with `revisionNumber`, `hardwareVersion`, `firmwareVersion`, `containerId`, and `sensorsInfo`. |
| **v1** | Signature unchanged. [GameInputDeviceInfo](../../../structs/gameinputdeviceinfo.md) was significantly simplified: `infoSize`, `interfaceNumber`, `collectionNumber`, `capabilities`, touch/haptic/string/descriptor fields removed; `supportedSystemButtons`, `displayName`, and `pnpPath` added. |
| **v0** | Introduced. |