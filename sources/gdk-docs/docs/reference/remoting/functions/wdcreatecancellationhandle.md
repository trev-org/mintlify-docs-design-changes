---
author: Timberhofmandi
title: "WdCreateCancellationHandle"
description: "Creates a cancellation handle for cancelling a copy operation."
kindex: WdCreateCancellationHandle
ms.topic: reference
edited: 03/04/2026
applies-to: pc-gdk
ms.date: '03/04/2026'
permissioned-type: public
---

# WdCreateCancellationHandle  

Creates a cancellation handle that can be used to cancel a copy operation started by [WdRemoteCopy](wdremotecopy.md).  

## Syntax  
  
```cpp
HRESULT WdCreateCancellationHandle(  
         _Out_ WdCancellationHandle* cancellationHandle  
);  
```
  
### Parameters  
  
`_Out_ cancellationHandle`  
Type: **[WdCancellationHandle](../structs/wdcancellationhandle.md)\***  

Receives the newly created cancellation handle. The caller is responsible for freeing this handle by calling [WdCloseCancellationHandle](wdclosecancellationhandle.md) when it is no longer needed.  

### Return value  

Type: **HRESULT**  

Returns `S_OK` if successful; otherwise, returns an error code.  

## Remarks  

Call `WdCreateCancellationHandle` before starting a copy operation to obtain a handle that enables cancellation. Pass the handle to [WdRemoteCopy](wdremotecopy.md) via the `cancellationHandle` parameter, and then pass it to [WdCancelRemoteCopy](wdcancelremotecopy.md) from a separate thread to cancel the operation.  

After `WdRemoteCopy` returns, close the handle by calling [WdCloseCancellationHandle](wdclosecancellationhandle.md). The handle can be reused across multiple `WdRemoteCopy` calls, but each handle must eventually be closed.  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdCloseCancellationHandle](wdclosecancellationhandle.md)  
- [WdDuplicateCancellationHandle](wdduplicatecancellationhandle.md)  
- [WdCancellationHandle](../structs/wdcancellationhandle.md)  
- [WdRemoteCopy](wdremotecopy.md)  
- [WdCancelRemoteCopy](wdcancelremotecopy.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)  
