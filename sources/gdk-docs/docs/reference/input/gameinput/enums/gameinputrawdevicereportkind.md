---
author: AlexYatskov
description: Enumerates types of raw device reports.
edited: 08/07/2020
kindex: GameInputRawDeviceReportKind
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputRawDeviceReportKind
---

# GameInputRawDeviceReportKind

Enumerates types of raw device reports.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputRawDeviceReportKind
{
    GameInputRawInputReport = 0,
    GameInputRawOutputReport = 1,
};
```

<a id="constantsSection"></a>

## Constants

| Constant                 | Description    |
| ---                      | ---            |
| GameInputRawInputReport  | Input report.  |
| GameInputRawOutputReport | Output report. |

<a id="remarksSection"></a>

## Remarks

This enumeration is used in the [GameInputRawDeviceReportInfo](../structs/gameinputrawdevicereportinfo.md) structure. It is also used by the [IGameInputDevice::CreateRawDeviceReport](../interfaces/igameinputdevice/methods/igameinputdevice_createrawdevicereport.md) method.

For intermediate and advanced use cases of the GameInput API, see [Advanced GameInput](../../../../features/common/input/advanced/input-advanced-topics.md) topics.

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | **Re-introduced** (was present in v0, absent in v1 and v2). `GameInputRawFeatureReport` (value 2) removed; only `InputReport` and `OutputReport` remain. |
| **v1** | Not present (removed from v0 along with `IGameInputRawDeviceReport`). |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

```cpp
enum GameInputRawDeviceReportKind
{
    GameInputRawInputReport   = 0,
    GameInputRawOutputReport  = 1,
    GameInputRawFeatureReport = 2,
};
```