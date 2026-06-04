---
author: TBD
title: "XSystemHandleTrack"
description: "Registers a callback to track handle lifetime events in the Gaming Runtime."
kindex: XSystemHandleTrack
ms.author: TBD
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XSystemHandleTrack  

Registers a callback to track handle lifetime events in the Gaming Runtime.  

## Syntax  

```cpp
HRESULT XSystemHandleTrack(
  XSystemHandleCallback callback,
  void * context
)
```

### Parameters  

*callback* &nbsp;&nbsp; \_In\_  
Type: [XSystemHandleCallback](xsystemhandlecallback.md)

A user defined callback that will be called on handle creation and destruction. To disable handle 
tracking pass in NULL for the callback.

*context* &nbsp;&nbsp; \_In\_opt\_  
Type: void *  

User define context to be passed to the callback.  

### Return value  
Type:  [HRESULT](/openspecs/windows_protocols/ms-erref/0642cb2f-2075-4469-918c-4441e69c548a)  
  
Returns **S_OK** if successful; otherwise, returns an error code. For a list of error codes, see 
[Error Codes](../../../errorcodes.md). 


## Remarks  

Game developers need to have the ability to troubleshoot bugs involving incorrect handle usage. 
Most of the GRTS APIs utilize handles which correspond to the lifetime of internal objects in our 
platform implementation. Games often encounter problems caused by developers accidentally 
providing invalid (NULL, previously freed, etc.) handles into these APIs leading to title crashes. 
Developers may also inadvertently leak handles leading to excessive resource usage. The goal of 
the handle tracking API is to empower developers to diagnose and fix these issues.

The API has two components: active and passive. All handles created by GRTS are continuously 
tracked for both debug and retail scenarios. Whenever handles are passed into our APIs, the 
platform performs validation to ensure that these handles correspond to valid internal objects. If 
an invalid handle is detected, the platform logs the error and invokes 
[XErrorReport](../../xerror/functions/xerrorsetoptions.md) to notify the developer of the problem. The platform does not 
make any additional effort to suppress the invalid handle usage and allow the application to crash 
as it would have prior to this feature. Finally, any handle leaks at the time of 
[XGameRuntimeUninitialize](../../xgameruntimeinit/functions/xgameruntimeuninitialize.md) will also be reported via 
[XErrorReport](../../xerror/functions/xerrorsetoptions.md). At present, the handle tracking system does not enable the 
tracking of handles which are external to GRTS.

## Requirements  
  
**Header:** XSystem.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  

## See also  

[XSystem members](../xsystem_members.md)  

[XSystemHandleCallback](xsystemhandlecallback.md)