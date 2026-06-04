---
author: M-Stahl
description: Represents a raw byte buffer passed to or from an input device.
edited: 06/05/2019
kindex: IGameInputRawDeviceReport
ms.author: alyatsko
ms.date: 08/01/2022
ms.topic: article
permissioned-type: public
title: IGameInputRawDeviceReport (Interface contents)
---

# IGameInputRawDeviceReport

Represents a raw byte buffer passed to or from an input device, encapsulating input and output reports. This allows the GameInput implementation to control ownership of the memory buffers, track which device the raw report is associated with, and account for any differences in headers/formatting between the various supported device protocols.

## Syntax

```cpp
class IGameInputRawDeviceReport : public IUnknown
```

## Methods

| Method                                                                | Description                                                 |
| ---                                                                   | ---                                                         |
| [GetDevice](methods/igameinputrawdevicereport_getdevice.md)           | Retrieves the device associated with the raw device report. |
| [GetReportInfo](methods/igameinputrawdevicereport_getreportinfo.md)   | Returns a pointer to a raw device report info.              |
| [GetRawDataSize](methods/igameinputrawdevicereport_getrawdatasize.md) | Returns the size of the raw report buffer in bytes.         |
| [GetRawData](methods/igameinputrawdevicereport_getrawdata.md)         | Retrieves the report buffer contents in raw byte form.      |
| [SetRawData](methods/igameinputrawdevicereport_setrawdata.md)         | Sets the contents of the report buffer.                     |

## Remarks

This is used for "raw" devices. Generally meant for OEMs that want to publish SDKs for their raw devices or to expose some additional functionality beyond what the GameInput API allows.

The `IGameInputRawDeviceReport` interface encapsulates the raw byte buffers for device input, output, and feature reports. This allows the GameInput implementation to control ownership of the memory buffers, track which device the raw report is associated with, and account for any differences in headers and formatting between the various supported device protocols. The process to acquire a raw device report depends on the type of report.

Input reports can only be retrieved from the [GetRawReport](../igameinputreading/methods/igameinputreading_getrawreport.md) method on the `IGameInputReading` interface (never directly created). These reports contain the raw data that is used to generate the rudimentary and fixed-format state available from the `IGameInputReading` interface. Applications can examine the raw data in an input reading, but they may not modify the raw data.

Output and feature reports are created using the [CreateRawDeviceReport](../igameinputdevice/methods/igameinputdevice_createrawdevicereport.md) method or are received from a successful call to the `GetRawDeviceFeature` method that are both on the `IGameInputDevice` interface. Applications are free to read or modify the contents of output and feature reports. Both types of reports can be passed as many times as desired into the [SendRawDeviceOutput](../igameinputdevice/methods/igameinputdevice_sendrawdeviceoutput.md) method of the `IGameInputDevice` interface. This allows applications to prepare a template report once, and send it to the device repeatedly (possibly modifying certain data items each time).

When a new output or feature report is created using the `CreateRawDeviceReport` method, the report's buffer contents are initialized such that all of the data elements are set to neutral or "rest" values.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[Input API Overview](../../../../../features/common/input/overviews/input-overview.md)
[GameInput](../../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Re-introduced (simplified). |
| **v1** | Removed along with raw device report support. |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

Present with the same methods as the current version. Removed in v1 along with raw device report support.