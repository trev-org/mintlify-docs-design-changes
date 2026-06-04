---
author: M-Stahl
title: "XSystem (API contents)"
description: "Reference material for XSystem APIs."
kindex: XSystem
ms.topic: article
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XSystem
  
Reference material for XSystem APIs.  
  
  
## Functions  
  
| Function | Description |  
| --- | --- |  
| [XSystemAllowFullDownloadBandwidth](functions/xsystemallowfulldownloadbandwidth.md) | Controls the bandwidth used by a package download while the game is running. |  
| [XSystemGetAnalyticsInfo](functions/xsystemgetanalyticsinfo.md) | Provides information about the device for profiling purposes. |  
| [XSystemGetAppSpecificDeviceId](functions/xsystemgetappspecificdeviceid.md) | Returns a unique value from the console that is specific to caller's title ID. |  
| [XSystemGetConsoleId](functions/xsystemgetconsoleid.md) | Returns the ID of the current console. |  
| [XSystemGetDeviceType](functions/xsystemgetdevicetype.md) | Returns an [XSystemDeviceType](enums/xsystemdevicetype.md) value corresponding to the device currently being used. |  
| [XSystemGetRuntimeInfo](functions/xsystemgetruntimeinfo.md) | Provides information about the current and available versions of the gaming runtime service. |  
| [XSystemGetXboxLiveSandboxId](functions/xsystemgetxboxlivesandboxid.md) | Retrieves the Xbox Live sandbox ID. |  
| [XSystemHandleCallback](functions/xsystemhandlecallback.md) | Callback that is invoked when a GRTS handle is created or destroyed. |  
| [XSystemHandleTrack](functions/xsystemhandletrack.md) | Registers a callback to track handle lifetime events in the Gaming Runtime. |  
| [XSystemIsHandleValid](functions/xsystemishandlevalid.md) | Checks if a handle is valid in the Gaming Runtime. |  
  
## Structures  
  
| Structure | Description |  
| --- | --- |  
| [XSystemAnalyticsInfo](structs/xsystemanalyticsinfo.md) | Represents information about the device. |  
| [XSystemRuntimeInfo](structs/xsystemruntimeinfo.md) | Represents information about the gaming runtime service. |  
  
## Enumerations  
  
| Enumeration | Description |  
| --- | --- |  
| [XSystemDeviceType](enums/xsystemdevicetype.md) | Indicates the system device type returned by calling [XSystemGetDeviceType](functions/xsystemgetdevicetype.md). |  
| [XSystemHandleCallbackReason](enums/xsystemhandlecallbackreason.md) | Reason the handle tracking callback was called. |  
| [XSystemHandleType](enums/xsystemhandletype.md) | Handle type that was created or destroyed. |  
  
  
## See also  

[System API reference](../gc-reference-system-toc.md)  
