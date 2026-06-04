---
author: M-Stahl
title: "XTaskQueueUnregisterWaiter"
description: "Unregisters a previously registered task queue waiter."
kindex: XTaskQueueUnregisterWaiter
ms.topic: reference
edited: 06/04/2019
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XTaskQueueUnregisterWaiter
  
Unregisters a previously registered task queue waiter.  
  
## Syntax
  
```cpp
void XTaskQueueUnregisterWaiter(  
         XTaskQueueHandle queue,  
         XTaskQueueRegistrationToken token  
)  
```  
  
### Parameters
  
*queue* &nbsp;&nbsp;\_In\_  
Type: XTaskQueueHandle  
  
The queue to remove the waiter from.  
  
*token* &nbsp;&nbsp;\_In\_  
Type: [XTaskQueueRegistrationToken](../structs/xtaskqueueregistrationtoken.md)  
  
The registration token returned from [XTaskQueueRegisterWaiter](xtaskqueueregisterwaiter.md).  
  
### Return value
  
Type: void  
  
## Remarks
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
If [XTaskQueueRegisterWaiter](xtaskqueueregistermonitor.md) was previously invoked to register a waiter for a task queue, use `XTaskQueueUnregisterWaiter` to unregister the waiter identified by the `XTaskQueueRegistrationToken` specified in *token*. Once the specified waiter is unregistered, the Win32 handle is removed and the waiter callback is no longer invoked.  
  
## Requirements
  
**Header:** XTaskQueue.h  
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also
  
[XTaskQueueRegisterWaiter](xtaskqueueregisterwaiter.md)  
[XTaskQueue members](../xtaskqueue_members.md)  
[Asynchronous Programming Model](../../../../features/common/async/async-programming-model.md)  
[Async Task Queue design](../../../../features/common/async/async-task-queue-design.md)  
  
