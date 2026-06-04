---
author: Timberhofmandi
title: "WdCancelRemoteCopy"
description: "Cancels an in-progress copy operation."
kindex: WdCancelRemoteCopy
ms.topic: reference
edited: 03/04/2026
applies-to: pc-gdk
ms.date: '03/04/2026'
permissioned-type: public
---

# WdCancelRemoteCopy  

Cancels an in-progress copy operation.  

## Syntax  
  
```cpp
HRESULT WdCancelRemoteCopy(  
         _In_ WdCancellationHandle cancellationHandle  
);  
```  
  
### Parameters  
  
`_In_ cancellationHandle`  
Type: **[WdCancellationHandle](../structs/wdcancellationhandle.md)**  

The cancellation handlecreated by [WdCreateCancellationHandle](wdcreatecancellationhandle.md) and passed to [WdRemoteCopy](wdremotecopy.md). Signaling this handle causes the in-progress copy to be cancelled.  

### Return value  

Type: **HRESULT**  

Returns `S_OK` if successful; otherwise, returns an error code.  

## Remarks  

Call `WdCancelRemoteCopy` from a separate thread to cancel a blocking [WdRemoteCopy](wdremotecopy.md) call. `WdCancelRemoteCopy` is a non-blocking function. After cancellation is signaled, `WdRemoteCopy` will cancel the copy and return `S_OK`.  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdRemoteCopy](wdremotecopy.md)  
- [WdCancellationHandle](../structs/wdcancellationhandle.md)  
- [WdCreateCancellationHandle](wdcreatecancellationhandle.md)  
- [WdCloseCancellationHandle](wdclosecancellationhandle.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)  
