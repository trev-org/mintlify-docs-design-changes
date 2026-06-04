---
author: M-Stahl
title: "XTaskQueueCloseHandle"
description: "Closes the task queue."
kindex: XTaskQueueCloseHandle
ms.topic: reference
edited: 06/04/2019
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XTaskQueueCloseHandle  

Closes the task queue.  

## Syntax  
  
```cpp
void XTaskQueueCloseHandle(  
         XTaskQueueHandle queue  
)  
```  
  
### Parameters  
  
*queue* &nbsp;&nbsp;\_In\_  
Type: XTaskQueueHandle  

  
The queue to close.  


  
### Return value
Type: void
  
  
## Remarks  
  
**XTaskQueueCloseHandle** simply decrements an internal reference count on the task queue object. If there are callbacks still in the queue, those callbacks hold a reference on the queue object and they may still be called. This can pose a problem for app shutdown. When an app shuts down it will need to ensure no spurious callbacks execute after cleanup. XTaskQueue provides the [XTaskQueueTerminate](xtaskqueueterminate.md) API to perform a controlled termination of a queue.  

 
## Requirements  
  
**Header:** XTaskQueue.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XTaskQueue members](../xtaskqueue_members.md)  
[Asynchronous Programming Model](../../../../features/common/async/async-programming-model.md)  
[Async Task Queue Design](../../../../features/common/async/async-task-queue-design.md)   
  
  
