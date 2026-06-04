---
author: Timberhofmandi
title: "WdCopyFilesStatusCallback"
description: "Called to report file copy progress during a copy operation."
kindex: WdCopyFilesStatusCallback
ms.topic: reference
edited: 02/26/2026
applies-to: pc-gdk
ms.date: '02/26/2026'
permissioned-type: public
---

# WdCopyFilesStatusCallback  

Called to report file copy progress during a copy operation.  

## Syntax  
  
```cpp
typedef HRESULT (*WdCopyFilesStatusCallback)(
    _In_ size_t fileProgressCount,
    _In_reads_opt_(fileProgressCount) const WdCopyFileProgressInfo* fileUpdates,
    _In_ const WdCopyOperationSummary* copyUpdates,
    _In_opt_ void* context
);
```  
  
### Parameters  
  
`fileProgressCount _In_`  
Type: **size_t**  

The number of files that have progress updates since the last callback invocation.  

`fileUpdates _In_reads_opt_(fileProgressCount)`  
Type: **const [WdCopyFileProgressInfo](../structs/wdcopyfileprogressinfo.md)\***  

A pointer to an array of [WdCopyFileProgressInfo](../structs/wdcopyfileprogressinfo.md) structures, each containing progress information for an individual file. May be `nullptr` if `fileProgressCount` is 0.  

`copyUpdates _In_`  
Type: **const [WdCopyOperationSummary](../structs/wdcopyoperationsummary.md)\***  

A pointer to a [WdCopyOperationSummary](../structs/wdcopyoperationsummary.md) structure containing a summary of the overall copy operation progress.  

`context _In_opt_`
Type: **void\***  

The user-defined context pointer that was specified in the [WdCopyStatusCallbacks](../structs/wdcopystatuscallbacks.md) structure.  

### Return value  

Type: **HRESULT**  

Return `S_OK` to continue the copy operation. Return a failure HRESULT to abort the copy.  

## Remarks  

This callback is invoked by [WdRemoteCopy](../functions/wdremotecopy.md) to report progress on individual files during a copy operation. The frequency of invocations is controlled by the `refreshRateMs` member of [WdCopyStatusCallbacks](../structs/wdcopystatuscallbacks.md).  

Returning a failed HRESULT from this callback will abort the copy operation and return that error from `WdRemoteCopy`.  

The callback is invoked on the same thread as the `WdRemoteCopy` call. The `fileUpdates` array, `copyUpdates` structure, and their contents are only valid for the duration of the callback invocation.

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdRemoteCopy](../functions/wdremotecopy.md)  
- [WdCopyFileProgressInfo](../structs/wdcopyfileprogressinfo.md)  
- [WdCopyOperationSummary](../structs/wdcopyoperationsummary.md)  
- [WdCopyStatusCallbacks](../structs/wdcopystatuscallbacks.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)  
