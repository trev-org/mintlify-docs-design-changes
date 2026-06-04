---
author: M-Stahl
description: Retrieves the raw data from the device input.
edited: 01/06/2020
kindex: GetRawReport
ms.author: alyatsko
ms.date: 08/01/2022
ms.topic: reference
permissioned-type: public
title: GetRawReport
---

# IGameInputReading::GetRawReport

Retrieves the raw data from the device input.

## Syntax

```cpp
bool GetRawReport(
    IGameInputRawDeviceReport** report
)
```

### Parameters

*report* &nbsp;&nbsp;\_Outptr\_result\_maybenull\_<br>
Type: IGameInputRawDeviceReport**

Raw data device input.

### Return value

Type: bool

Returns true if raw data is retrieved successfully.

## Remarks

Input reports can only be retrieved from the `GetRawReport` method on the `IGameInputReading` interface. They are never directly created. These reports contain the raw data that is used to generate the rudimentary and fixed-format state available from the `IGameInputReading` interface. Applications can analyze the raw data in an input reading. They cannot modify the raw data. For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

Note that only Game Input Protocol (GIP) devices support raw reports.

[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)    
[IGameInputReading](../igameinputreading.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Re-introduced. |
| **v1** | Removed. |
| **v0** | Introduced. |