---
author: M-Stahl
title: "XGameSaveSubmitUpdateResult"
description: "Retrieves the result of the XGameSaveSubmitUpdateAsync call."
kindex: XGameSaveSubmitUpdateResult
ms.author: kelcon
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameSaveSubmitUpdateResult  

Retrieves the result of the [XGameSaveSubmitUpdateAsync](xgamesavesubmitupdateasync.md) call.  

## Syntax  
  
```cpp
HRESULT XGameSaveSubmitUpdateResult(  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  

  
AsyncBlock passed from the [XGameSaveSubmitUpdateAsync](xgamesavesubmitupdateasync.md) call.  


  
### Return value
Type: HRESULT
  
Function result. 

Common Errors
- E_GS_INVALID_CONTAINER_NAME
- E_GS_OUT_OF_LOCAL_STORAGE
- E_GS_UPDATE_TOO_BIG
- E_GS_QUOTA_EXCEEDED
- E_GS_CONTAINER_NOT_IN_SYNC
- E_GS_CONTAINER_SYNC_FAILED
- E_GS_HANDLE_EXPIRED
  
## Remarks  
  
This function will retrieve the result for the [XGameSaveSubmitUpdateAsync](xgamesavesubmitupdateasync.md) method. Call this function as a part of the async block for [XGameSaveSubmitUpdateAsync](xgamesavesubmitupdateasync.md). Result methods are commonly written in line with the asynchronous call which will call them later, but can also be written as separate functions.
  
## Requirements  
  
**Header:** XGameSave.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XGameSave](../xgamesave_members.md)  
[Debugging Game Saves](../../../../features/common/game-save/game-saves-debugging.md)
  