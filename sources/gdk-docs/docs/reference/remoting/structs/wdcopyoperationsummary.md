---
author: Timberhofmandi
title: "WdCopyOperationSummary"
description: "Contains summary progress information for the overall copy operation."
kindex: WdCopyOperationSummary
ms.topic: reference
edited: 02/26/2026
applies-to: pc-gdk
ms.date: '02/26/2026'
permissioned-type: public
---

# WdCopyOperationSummary  

Contains summary progress information for the overall copy operation.  

## Syntax  
  
```cpp
struct WdCopyOperationSummary
{
    uint64_t filesCompletedCount;
    uint64_t bytesTransferredCount;
    uint64_t totalFileCount;
    uint64_t totalByteCount;
};
```  
  
### Members  
  
`filesCompletedCount`  
Type: **uint64_t**  

The number of files that have completed copying.  

`bytesTransferredCount`  
Type: **uint64_t**  

The total number of bytes transferred so far in the entire copy operation.  

`totalFileCount`  
Type: **uint64_t**  

The total number of files to copy in the entire copy operation.  

`totalByteCount`  
Type: **uint64_t**  

The total number of bytes to copy in the entire copy operation.  

## Remarks  

This structure is provided to the [WdCopyFilesStatusCallback](../callbacks/wdcopyfilesstatuscallback.md) during a [WdRemoteCopy](../functions/wdremotecopy.md) operation. It provides an overall summary of the copy operation progress, complementing the per-file progress information in [WdCopyFileProgressInfo](wdcopyfileprogressinfo.md).  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdRemoteCopy](../functions/wdremotecopy.md)  
- [WdCopyFilesStatusCallback](../callbacks/wdcopyfilesstatuscallback.md)  
- [WdCopyFileProgressInfo](wdcopyfileprogressinfo.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)  
