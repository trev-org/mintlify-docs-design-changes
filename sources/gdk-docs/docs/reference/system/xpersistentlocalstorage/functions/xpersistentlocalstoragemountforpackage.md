---
author: A-Radu
title: "XPersistentLocalStorageMountForPackage"
description: "Mounts the persistent local storage (PLS) of the specified package as a read-only disc."
kindex: XPersistentLocalStorageMountForPackage
ms.author: alvieru
ms.topic: reference
edited: '09/13/2023'
quality: good
applies-to: pc-gdk
ms.date: '09/13/2023'
permissioned-type: public
---

# XPersistentLocalStorageMountForPackage  

Mounts the persistent local storage (PLS) of the specified package as a read-only disc.  

## Syntax  
  
```cpp
HRESULT XPersistentLocalStorageMountForPackage (   
         const char* packageIdentifier,   
         XPackageMountHandle* mountHandle 
) 
```  
  
### Parameters  
  
*packageIdentifier* &nbsp;&nbsp;\_In\_  
Type: char*  
  
A string that uniquely identifies the store package to which the PLS belongs. For more information about package identifiers, see [Manage and license downloadable content (DLC)](../../../../store/commerce/fundamentals/xstore-manage-and-license-optional-packages.md).  
  
*mountHandle* &nbsp;&nbsp;\_Out\_writes\_to\_(pathSize,*pathUsed)  
Type: XPackageMountHandle*  
  
The mount handle for the disc where the PLS was mounted.  
  


### Return value
Type: [HRESULT](/openspecs/windows_protocols/ms-erref/0642cb2f-2075-4469-918c-4441e69c548a)  
  
Returns **S_OK** if successful; otherwise, returns an error code. For a list of error codes, see [Error Codes](../../../errorcodes.md). If the function fails because the PLS for the specified title does not exist, it will be set to **FILE_NOT_FOUND**. If the function fails because it tries to access the PLS of a title that has not enabled shareable persistent local storage, then it will get **ACCESS_DENIED**.
  
## Remarks
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
For a title to support shareable PLS, it needs to declare as such in MicrosoftGame.config. More details about Shareable Persistent Local Storage are found in [Local Storage](../../../../features/console/storage/local-storage.md) 

> [!NOTE]
> If a title marks the PLS as shareable, then it should make sure that before suspending the game, it closes all the handles to its PLS, otherwise the game suspend will fail and the game will be terminated.  

The following code snippet shows an example of accessing the Shareable PLS of another title.  
  
```cpp

HRESULT MountPersistentLocalStorageForPackage(char* packageIdentifier) 
{      
    XPackageMountHandle* mountHandle; 
    HRESULT hr = XPersistentLocalStorageMountForPackage (packageIdentifier, &mountHandle); 

    if (FAILED(hr)) return hr; 
    size_t pathSize; 
    hr = XGetMountPathSize(mountHandle, &pathSize); 
    if (FAILED(hr)) 
    { 
        XPackageCloseMountHandle(mountHandle); 
        return hr; 
    } 
 
    char* path = new (std::nothrow) char[pathSize]; 
    if (path == nullptr) 
    { 
        XPackageCloseMountHandle (mountHandle); 
        return E_OUTOFMEMORY; 
    } 
 
    hr = XPackageGetMountPath (mountHandle, pathSize, path); 
    if (FAILED(hr)) 
    { 
        XPackageCloseMountHandle(mountHandle); 
        delete[] path; 
        return hr; 
    } 
 
    printf("PLS %s mounted at path %s\n", packageIdentifier, path); 
    delete[] path; 
 
    // Unmounts PLS path if this is the last handle 
    // to it. 
    XPackageCloseMountHandle(mountHandle); 
    return S_OK; 
} 

```
  
## Requirements  
  
**Header:** XPersistentLocalStorage.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XPersistentLocalStorage](../xpersistentlocalstorage_members.md)  
[How to use the new MicrosoftGame.config file](../../../../features/common/game-config/MicrosoftGameConfig-toc.md)  
[Local Storage](../../../../features/console/storage/local-storage.md)  
  