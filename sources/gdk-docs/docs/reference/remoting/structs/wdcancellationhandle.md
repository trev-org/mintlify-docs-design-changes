---
author: Timberhofmandi
title: "WdCancellationHandle"
description: "An opaque handle used to cancel an in-progress copy operation."
kindex: WdCancellationHandle
ms.topic: reference
edited: 03/04/2026
applies-to: pc-gdk
ms.date: '03/04/2026'
permissioned-type: public
---

# WdCancellationHandle  

An opaque handle used to cancel an in-progress copy operation.  

## Syntax  
  
```cpp
typedef struct WdCancellationHandleImpl* WdCancellationHandle;
```  
  
## Remarks  

`WdCancellationHandle` is a typedef pointer to an opaque internal structure. The caller is responsible for managing the handle lifecycle:  

1. Create a handle by calling [WdCreateCancellationHandle](../functions/wdcreatecancellationhandle.md).  
2. Pass the handle to [WdRemoteCopy](../functions/wdremotecopy.md) via the `cancellationHandle` parameter.  
3. To cancel the in-progress copy, call [WdCancelRemoteCopy](../functions/wdcancelremotecopy.md) with the handle from a separate thread.  
4. After `WdRemoteCopy` returns, close the handle by calling [WdCloseCancellationHandle](../functions/wdclosecancellationhandle.md).  

A handle can be duplicated using [WdDuplicateCancellationHandle](../functions/wdduplicatecancellationhandle.md). Each copy of the handle must be closed independently with `WdCloseCancellationHandle`.  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdCreateCancellationHandle](../functions/wdcreatecancellationhandle.md)  
- [WdCloseCancellationHandle](../functions/wdclosecancellationhandle.md)  
- [WdDuplicateCancellationHandle](../functions/wdduplicatecancellationhandle.md)  
- [WdRemoteCopy](../functions/wdremotecopy.md)  
- [WdCancelRemoteCopy](../functions/wdcancelremotecopy.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)  
