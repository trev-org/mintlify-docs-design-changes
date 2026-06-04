---
author: Timberhofmandi
title: "WdCopyErrorCallback"
description: "Called to report error and warning messages during a copy operation."
kindex: WdCopyErrorCallback
ms.topic: reference
edited: 02/26/2026
applies-to: pc-gdk
ms.date: '02/26/2026'
permissioned-type: public
---

# WdCopyErrorCallback  

Called to report error and warning messages during a copy operation.  

## Syntax  
  
```cpp
typedef HRESULT (*WdCopyErrorCallback)( 
    _In_ WdCopyErrorSeverity severity,
    _In_z_ const char* message,
    _In_ HRESULT error,
    _In_opt_ void* context
);
```  
  
### Parameters  
  
`severity _In_`  
Type: **[WdCopyErrorSeverity](../enums/wdcopyerrorseverity.md)**  

The severity of the message (Warning or Error).  

`message _In_z_`  
Type: **const char\***  

A null-terminated string containing the diagnostic message.  

`error _In_`  
Type: **HRESULT**  

The HRESULT error code associated with the message. `S_OK` for warning messages.  

`context _In_opt_`  
Type: **void\***  

The user-defined context pointer that was specified in the [WdCopyStatusCallbacks](../structs/wdcopystatuscallbacks.md) structure.  

### Return value  

Type: **HRESULT**  

Return `S_OK` to continue the copy operation. Return a failure HRESULT to abort the copy.  

## Remarks  

This callback is invoked by [WdRemoteCopy](../functions/wdremotecopy.md) to report diagnostic messages during a copy operation, such as errors or warnings. The `error` parameter provides the HRESULT associated with error messages; for warning messages, `error` is `S_OK`.  

The callback is invoked on the same thread as the `WdRemoteCopy` call. The `message` string is only valid for the duration of the callback invocation.  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdRemoteCopy](../functions/wdremotecopy.md)  
- [WdCopyErrorSeverity](../enums/wdcopyerrorseverity.md)  
- [WdCopyStatusCallbacks](../structs/wdcopystatuscallbacks.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)  
