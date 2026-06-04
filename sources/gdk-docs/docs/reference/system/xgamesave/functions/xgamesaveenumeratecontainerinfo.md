---
author: M-Stahl
title: "XGameSaveEnumerateContainerInfo"
description: "Retrieves the container info for a XGameSaveProvider."
kindex: XGameSaveEnumerateContainerInfo
ms.author: kelcon
ms.topic: reference
edited: 07/02/2019
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameSaveEnumerateContainerInfo  

Retrieves the container info for an **XGameSaveProvider**.  

## Syntax  
  
```cpp
HRESULT XGameSaveEnumerateContainerInfo(  
         XGameSaveProviderHandle provider,  
         void* context,  
         XGameSaveContainerInfoCallback* callback  
)  
```  
  
### Parameters  
  
*provider* &nbsp;&nbsp;\_In\_  
Type: XGameSaveProviderHandle  

  
Handle to the **XGameSaveProvider** containing the [XGameSaveContainerInfo](../structs/xgamesavecontainerinfo.md).


*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  

  
Pointer that will be passed into the callback function. 


*callback* &nbsp;&nbsp;\_In\_  
Type: XGameSaveContainerInfoCallback*  

The callback function to run for every container, return false to stop the enumeration. Use this function to collect the XGameSaveContainerInfo.

  
### Return value
Type: HRESULT
  
Function Result  
  
## Remarks  
 
Use this function to inspect what containers are available for a user. This may include data that is needed to show in UX. Enumerating this set will not cause a sync for a SyncOnDemand provider and will allow the caller to actually inspect the sync status via the needsSync field of [XGameSaveContainerInfo](../structs/xgamesavecontainerinfo.md). Any read of blob data or usage of an update context on a container that has *needsSync* set to true will force a sync and could potentially return various sync errors. 
You can use the [XGameSaveEnumerateContainerInfoByName](xgamesaveenumeratecontainerinfo.md) to perform a filter for containers by specifying a prefix that must be matched before a container's information is returned.
  
## Requirements  
  
**Header:** XGameSave.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XGameSave](../xgamesave_members.md)  
[XGameSaveEnumerateContainerInfoByName](xgamesaveenumeratecontainerinfo.md)  
[XGameSaveContainerInfo](../structs/xgamesavecontainerinfo.md)  
[Debugging Game Saves](../../../../features/common/game-save/game-saves-debugging.md)