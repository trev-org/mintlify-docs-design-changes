---
author: M-Stahl
title: "XGameSaveCloseContainer"
description: "Closes the XGameSaveContainer."
kindex: XGameSaveCloseContainer
ms.author: kelcon
ms.topic: reference
edited: 02/10/2020
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameSaveCloseContainer  

Closes the XGameSaveContainer.  

## Syntax  
  
```cpp
void XGameSaveCloseContainer(  
         XGameSaveContainerHandle context  
)  
```  
  
### Parameters  
  
*context* &nbsp;&nbsp;\_In\_  
Type: XGameSaveContainerHandle  

  
Handle to the XGameSaveContainer to be closed.  

  
### Return value
Type: void
  
Function result. 
  
## Remarks  
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
Call this function when you have finished using the container. If you do not close the context handle for a container you will cause a memory leak. Every call made to [XGameSaveCreateContainer](xgamesavecreatecontainer.md) should have a matching call to **XGameSaveCloseContainer**.  
  
## Requirements  
  
**Header:** XGameSave.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XGameSave](../xgamesave_members.md)  
[XGameSaveCreateContainer](xgamesavecreatecontainer.md)  
[Debugging Game Saves](../../../../features/common/game-save/game-saves-debugging.md)
  