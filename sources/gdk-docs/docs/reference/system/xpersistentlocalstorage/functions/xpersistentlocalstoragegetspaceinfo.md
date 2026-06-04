---
author: M-Stahl
title: "XPersistentLocalStorageGetSpaceInfo"
description: "Returns an XPersistentLocalStorageSpaceInfo struct with storage space details, such as space available."
kindex:
- XPersistentLocalStorageGetSpaceInfo
- Growable Persistent Local Storage, determining free space
- GetDiskFreeSpaceExW, limitations with PLS
ms.topic: reference
edited: 02/02/2021
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XPersistentLocalStorageGetSpaceInfo

Returns an [XPersistentLocalStorageSpaceInfo](../structs/xpersistentlocalstoragespaceinfo.md) struct with storage space details, such as 
space available.

<a id="syntaxSection"></a>

## Syntax

```cpp
HRESULT XPersistentLocalStorageGetSpaceInfo(
         XPersistentLocalStorageSpaceInfo* info
)
```

<a id="parametersSection"></a>

### Parameters

*info* &nbsp;&nbsp;\_Out\_  
Type: [XPersistentLocalStorageSpaceInfo*](../structs/xpersistentlocalstoragespaceinfo.md)

The `XPersistentLocalStorageSpaceInfo` structure, used for storing storage space details.

<a id="retvalSection"></a>

### Return value

Type: [HRESULT](/openspecs/windows_protocols/ms-erref/0642cb2f-2075-4469-918c-4441e69c548a)

Returns **S_OK** if successful; otherwise, returns an error code. For a list of error codes, see [Error Codes](../../../errorcodes.md).

<a id="remarksSection"></a>

## Remarks

Use this function to determine how much storage space is available if your title uses Growable Persistent Local Storage (GPLS).

The storage details are contained in the [XPersistentLocalStorageSpaceInfo](../structs/xpersistentlocalstoragespaceinfo.md) structure.

Storage details include the amount of space in use, how much is available to the title, and whether the user should be prompted 
to free up space.

Note that calling 
[GetDiskFreeSpaceExW ](/windows/win32/api/fileapi/nf-fileapi-getdiskfreespaceexw) 
will only tell titles the maximum amount of free space left in PLS - this is not guaranteed to be 
available. 
[XPersistentLocalStorageGetSpaceInfo](xpersistentlocalstoragegetspaceinfo.md) will also return the
total free space as well as the available free space (the minimum of what is free and the actual 
space on the underlying drive.)


<a id="requirementsSection"></a>

## Requirements

**Header:** XPersistentLocalStorage.h

**Library:** xgameruntime.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles 

<a id="seealsoSection"></a>

## See also

[XPersistentLocalStorage](../xpersistentlocalstorage_members.md)  
[XPersistentLocalStorageSpaceInfo](../structs/xpersistentlocalstoragespaceinfo.md)  
