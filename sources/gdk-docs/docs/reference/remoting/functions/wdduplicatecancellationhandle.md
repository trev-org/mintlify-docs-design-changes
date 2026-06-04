---
author: Timberhofmandi
title: "WdDuplicateCancellationHandle"
description: "Duplicates an existing cancellation handle."
kindex: WdDuplicateCancellationHandle
ms.topic: reference
edited: 03/04/2026
applies-to: pc-gdk
ms.date: '03/04/2026'
permissioned-type: public
---

# WdDuplicateCancellationHandle  

Duplicates an existing [WdCancellationHandle](../structs/wdcancellationhandle.md).  

## Syntax  
  
```cpp
HRESULT WdDuplicateCancellationHandle(  
         _In_ WdCancellationHandle cancellationHandle,  
         _Out_ WdCancellationHandle* duplicatedHandle  
);  
```
  
### Parameters  
  
`_In_ cancellationHandle`  
Type: **[WdCancellationHandle](../structs/wdcancellationhandle.md)**  

The cancellation handle to duplicate.  

`_Out_ duplicatedHandle`  
Type: **[WdCancellationHandle](../structs/wdcancellationhandle.md)\***  

Receives the duplicated cancellation handle. The caller is responsible for closing this handle independently by calling [WdCloseCancellationHandle](wdclosecancellationhandle.md).  

### Return value  

Type: **HRESULT**  

Returns `S_OK` if successful; otherwise, returns an error code.  

## Remarks  

Use `WdDuplicateCancellationHandle` when multiple components need to reference the same cancellation handle. Both the original and duplicated handles refer to the same cancellation state — signaling cancellation via [WdCancelRemoteCopy](wdcancelremotecopy.md) on either handle cancels the associated [WdRemoteCopy](wdremotecopy.md) operation. Each handle must be closed independently with [WdCloseCancellationHandle](wdclosecancellationhandle.md).  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdCreateCancellationHandle](wdcreatecancellationhandle.md)  
- [WdCloseCancellationHandle](wdclosecancellationhandle.md)  
- [WdCancellationHandle](../structs/wdcancellationhandle.md)  
- [WdRemoteCopy](wdremotecopy.md)  
- [WdCancelRemoteCopy](wdcancelremotecopy.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)  
