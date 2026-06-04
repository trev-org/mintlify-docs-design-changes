---
author: Timberhofmandi
title: "WdCopySearchOptions"
description: "Specifies file and directory filter patterns for a copy operation."
kindex: WdCopySearchOptions
ms.topic: reference
edited: 03/04/2026
applies-to: pc-gdk
ms.date: '03/04/2026'
permissioned-type: public
---

# WdCopySearchOptions  

Specifies file and directory filter patterns for a copy operation.  

## Syntax  
  
```cpp
struct WdCopySearchOptions 
{ 
    const char* includeFilePattern;
    const char* excludeFilePattern;
    const char* excludeDirPattern;
    uint64_t includeFileAttributes;
    uint64_t excludeFileAttributes;
};
```  
  
### Members  
  
`_In_z_ includeFilePattern`  
Type: **const char\***  

A glob pattern specifying which files to include in the copy operation (for example, `"*"` to include all files, or `"*.exe;*.dll"` to include only executables and DLLs).  

`_In_z_ excludeFilePattern`  
Type: **const char\***  

A glob pattern specifying which files to exclude from the copy operation (for example, `"*.pdb"` to exclude debug symbols).  

`_In_z_ excludeDirPattern`  
Type: **const char\***

A glob pattern specifying which directories to exclude from the copy operation (for example, `".vs;obj"` to exclude Visual Studio and build output directories).  

`includeFileAttributes`  
Type: **uint64_t**  

A bitmask of file attributes that files must have to be included in the copy. Set to `0` to not filter by attributes. For additional information on file attributes check [File Attribute Constants](/windows/win32/fileio/file-attribute-constants).

`excludeFileAttributes`  
Type: **uint64_t**  

A bitmask of file attributes that cause files to be excluded from the copy. Set to `0` to not filter by attributes. For additional information on file attributes check [File Attribute Constants](/windows/win32/fileio/file-attribute-constants).  

## Examples  

**Copy only `.exe` and `.dll` files:**  

```cpp
WdCopySearchOptions searchOptions = {
    .includeFilePattern = "*.exe;*.dll",
    .excludeFilePattern = nullptr,
    .excludeDirPattern = nullptr,
    .includeFileAttributes = 0,
    .excludeFileAttributes = 0
};
```

**Exclude directories named `temp` from the copy:**  

```cpp
WdCopySearchOptions searchOptions = {
    .includeFilePattern = nullptr,
    .excludeFilePattern = nullptr,
    .excludeDirPattern = "temp",
    .includeFileAttributes = 0,
    .excludeFileAttributes = 0
};
```

**Only copy read-only or system files, and exclude hidden files:**  

```cpp
WdCopySearchOptions searchOptions = {
    .includeFilePattern = nullptr,
    .excludeFilePattern = nullptr,
    .excludeDirPattern = nullptr,
    .includeFileAttributes = FILE_ATTRIBUTE_READONLY | FILE_ATTRIBUTE_SYSTEM,
    .excludeFileAttributes = FILE_ATTRIBUTE_HIDDEN
};
```

> [!NOTE]  
> When there is a conflict between include and exclude patterns, the exclude pattern takes precedence and the file will not be copied.  

## Remarks

Pass this structure to [WdRemoteCopy](../functions/wdremotecopy.md) via the `searchOptions` parameter to filter which files and directories are included in the copy operation. If `nullptr` is passed for `searchOptions`, all files are copied with no filtering.  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdRemoteCopy](../functions/wdremotecopy.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)  
