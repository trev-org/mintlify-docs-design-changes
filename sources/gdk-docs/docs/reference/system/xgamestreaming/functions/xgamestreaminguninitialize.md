---
author: M-Stahl
title: "XGameStreamingUninitialize"
description: "Uninitializes the Game Streaming APIs."
kindex: XGameStreamingUninitialize
ms.topic: reference
edited: 02/10/2020
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameStreamingUninitialize  

Uninitializes the Game Streaming APIs.    

## Syntax  
  
```cpp
void XGameStreamingUninitialize(  
)  
```  
  
### Parameters  
None  
  
### Return value  
Type: void  
  
## Remarks
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
After calling this API, it will not be possible to use other XGameStreaming APIs. They will return an error of `E_GAMESTREAMING_NOT_INITIALIZED`.


## Requirements  
  
**Header:** XGameStreaming.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XGameStreamingInitialize](xgamestreaminginitialize.md)  
[XGameStreaming](../xgamestreaming_members.md)  

  
  
