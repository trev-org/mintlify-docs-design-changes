---
author: AlexYatskov
description: Creates a new buffer represented by an IGameInputRawDeviceReport instance.
edited: 10/06/2025
kindex: CreateRawDeviceReport
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: CreateRawDeviceReport
---

# IGameInputDevice::CreateRawDeviceReport

Creates a new buffer represented by an [IGameInputRawDeviceReport](../../igameinputrawdevicereport/igameinputrawdevicereport.md) instance.

## Syntax

```cpp
HRESULT CreateRawDeviceReport(
    uint32_t reportId,
    GameInputRawDeviceReportKind reportKind,
    IGameInputRawDeviceReport** report
)
```

### Parameters

*reportId* &nbsp;&nbsp;\_In\_<br>
Type: uint32_t

Device-defined ID for the created [InputRawDeviceReport](../../igameinputrawdevicereport/igameinputrawdevicereport.md) interface.

*reportKind* &nbsp;&nbsp;\_In\_<br>
Type: [GameInputRawDeviceReportKind](../../../enums/gameinputrawdevicereportkind.md)

Defines the type of raw device report to create.
The `GameInputRawDeviceReportKind` enumeration only accepts the values of the `GameInputRawFeatureReport` and `GameInputRawOutputReport` constants.

*report* &nbsp;&nbsp;\_COM\_Outptr\_<br>
Type: IGameInputRawDeviceReport**

The resulting `IGameInputRawDeviceReport` instance.

### Return value

Type: HRESULT

Function result.

## Remarks

The `CreateRawDeviceReport` method creates a buffer that is used to send raw information to the device. It is represented by the `IGameInputRawDeviceReport` instance. For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Library:** xgameruntime.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputDevice](../igameinputdevice.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Re-introduced (simplified). |
| **v1** | Removed. |
| **v0** | Introduced. |