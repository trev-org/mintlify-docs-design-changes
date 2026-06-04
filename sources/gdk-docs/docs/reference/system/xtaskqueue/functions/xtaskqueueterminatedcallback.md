---
author: M-Stahl
title: "XTaskQueueTerminatedCallback"
description: "A callback that is invoked when a task queue is terminated."
kindex: XTaskQueueTerminatedCallback
ms.topic: reference
edited: 06/04/2019
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XTaskQueueTerminatedCallback
  
A callback that is invoked when a task queue is terminated.  
  
## Syntax
  
```cpp
void XTaskQueueTerminatedCallback(  
         void* context  
)  
```  
  
### Parameters
  
*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  
  
Optional. A context pointer that was passed during [XTaskQueueTerminate](xtaskqueueterminate.md).  
  
### Return value
  
Type: void  
  
## Remarks
  
`XTaskQueueTerminatedCallback` represents a callback intended for use with the [XTaskQueueTerminate](xtaskqueueterminate.md) function. If an `XTaskQueueTerminatedCallback` callback is specified while invoking `XTaskQueueTerminate`, this callback is invoked by the task queue after both the work port and completion port have been marked for termination, but before the ports and the task queue itself are released. The callback is queued to the completion port of the task queue, and dispatched even if no other tasks are currently queued by the task queue.  
  
## Requirements  
  
**Header:** XTaskQueue.h  
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XTaskQueueMonitorCallback](xtaskqueuemonitorcallback.md)  
[XTaskQueueTerminate](xtaskqueueterminate.md)  
[XTaskQueue members](../xtaskqueue_members.md)  
[Asynchronous Programming Model](../../../../features/common/async/async-programming-model.md)  
[Async Task Queue design](../../../../features/common/async/async-task-queue-design.md)  
  
