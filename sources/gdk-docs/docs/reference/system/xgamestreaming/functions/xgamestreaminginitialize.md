---
author: M-Stahl
title: "XGameStreamingInitialize"
description: "Initalizes the Game Streaming APIs."
kindex: XGameStreamingInitialize
ms.topic: reference
edited: 02/10/2020
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameStreamingInitialize  

Initalizes the Game Streaming APIs.

## Syntax  
  
```cpp
HRESULT XGameStreamingInitialize(  
)  
```  
  
### Parameters  

None
  
### Return value
Type: HRESULT
  
Returns S_OK if successful; otherwise, returns an error code.  For a list of error codes, see [Error Codes](../../../errorcodes.md).    
  
## Remarks
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
This API must be called before calling most of the other XGameStreaming APIs.  Other APIs will return `E_GAMESTREAMING_NOT_INITIALIZED` if this API has not been called.



## Requirements  
  
**Header:** XGameStreaming.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XGameStreamingUninitialize](xgamestreaminguninitialize.md)  
[XGameStreaming](../xgamestreaming_members.md)  

  
  
