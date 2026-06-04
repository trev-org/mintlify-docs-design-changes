---
author: Timberhofmandi
title: "WdCopyFileProgressInfo"
description: "Contains progress information for an individual file during a copy operation."
kindex: WdCopyFileProgressInfo
ms.topic: reference
edited: 02/26/2026
applies-to: pc-gdk
ms.date: '02/26/2026'
permissioned-type: public
---

# WdCopyFileProgressInfo  

Contains progress information for an individual file during a copy operation.  

## Syntax  
  
```cpp
struct WdCopyFileProgressInfo 
{
    const char* relativeFilePath;
    const char* sourcePath;
    const char* destinationPath;
    uint64_t bytesTransferred;
    uint64_t fileSize;
};
```  
  
### Members  
  
`relativeFilePath`  
Type: **const char\***  

The file path being copied, relative to the root of the destination path (UTF-8).  

`sourcePath`  
Type: **const char\***  

The source path of the directory being copied (UTF-8).  

`destinationPath`  
Type: **const char\***  

The full destination path of the directory being copied (UTF-8).  

`bytesTransferred`  
Type: **uint64_t**  

The number of bytes transferred so far for this file.  

`fileSize`  
Type: **uint64_t**  

The total size of the file in bytes.  

## Remarks  

This structure is provided to the [WdCopyFilesStatusCallback](../callbacks/wdcopyfilesstatuscallback.md) during a [WdRemoteCopy](../functions/wdremotecopy.md) operation. Each instance represents the current status of a single file. The callback receives an array of these structures, one for each file that has progress updates since the last callback invocation. Overall operation-level progress (total file count, total bytes) is provided separately via the [WdCopyOperationSummary](wdcopyoperationsummary.md) structure.  

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
- [WdCopyOperationSummary](wdcopyoperationsummary.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)
