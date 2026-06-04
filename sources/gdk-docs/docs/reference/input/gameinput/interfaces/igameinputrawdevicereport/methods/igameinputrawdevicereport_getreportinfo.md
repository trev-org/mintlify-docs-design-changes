---
author: M-Stahl
description: Returns a pointer to a raw device report.
edited: 00/00/0000
kindex: IGameInputRawDeviceReport::GetReportInfo
ms.author: alyatsko
ms.date: 08/01/2022
ms.topic: reference
permissioned-type: public
title: IGameInputRawDeviceReport::GetReportInfo
---

# IGameInputRawDeviceReport::GetReportInfo

Returns a pointer to a raw device report.

## Syntax

```cpp
void GetReportInfo(
    GameInputRawDeviceReportInfo* reportInfo
);
```

### Parameters

*bufferSize* &nbsp;&nbsp;\_In\_<br>
Type: GameInputRawDeviceReportInfo*

Returned information about the report instance.

### Return value

Type: void

## Remarks

The `IGameInputRawDeviceReport::GetReportInfo` method returns a value that defines a report for the input stream of a raw input device. 

## Requirements

**Header:** GameInput.h

**Library:** xgameruntime.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[GameInputRawDeviceReportInfo](../../../structs/gameinputrawdevicereportinfo.md)
[Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md)
[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)
[IGameInputRawDeviceReport](../igameinputrawdevicereport.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Re-introduced. |
| **v1** | Removed along with the IGameInputRawDeviceReport interface. |
| **v0** | Introduced. |