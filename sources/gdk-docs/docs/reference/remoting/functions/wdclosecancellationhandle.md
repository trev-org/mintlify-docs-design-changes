---
author: Timberhofmandi
title: "WdCloseCancellationHandle"
description: "Closes a cancellation handle created by WdCreateCancellationHandle."
kindex: WdCloseCancellationHandle
ms.topic: reference
edited: 03/04/2026
applies-to: pc-gdk
ms.date: '03/04/2026'
permissioned-type: public
---

# WdCloseCancellationHandle  

Closes a cancellation handle created by [WdCreateCancellationHandle](wdcreatecancellationhandle.md).  

## Syntax  
  
```cpp
void WdCloseCancellationHandle(  
         _In_ WdCancellationHandle cancellationHandle  
);  
```  
  
### Parameters  
  
`_In_ cancellationHandle`  
Type: **[WdCancellationHandle](../structs/wdcancellationhandle.md)**

The cancellation handle to close. After this call, the handle is no longer valid and must not be used.  

### Return value  

This function does not return a value.  

## Remarks  

Every handle created by [WdCreateCancellationHandle](wdcreatecancellationhandle.md) or duplicated by [WdDuplicateCancellationHandle](wdduplicatecancellationhandle.md) must be closed independently with `WdCloseCancellationHandle`. Close the handle after [WdRemoteCopy](wdremotecopy.md) has returned and the handle is no longer needed.  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdCreateCancellationHandle](wdcreatecancellationhandle.md)  
- [WdDuplicateCancellationHandle](wdduplicatecancellationhandle.md)  
- [WdCancellationHandle](../structs/wdcancellationhandle.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)  
