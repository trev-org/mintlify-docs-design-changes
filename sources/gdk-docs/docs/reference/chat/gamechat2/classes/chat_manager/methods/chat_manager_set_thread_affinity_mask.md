---
author: jkepner
title: "set_thread_affinity_mask"
description: "Optionally configures the processor on which internal Game Chat threads will run."
kindex: set_thread_affinity_mask
ms.author: jkepner
ms.topic: reference
ms.date: 9/27/2022
edited: 00/00/0000
quality: good
applies-to: pc-gdk
permissioned-type: public
---

# chat_manager::set_thread_affinity_mask 

Optionally configures the processor on which internal Game Chat threads will run.  

## Syntax  
  
```cpp
void set_thread_affinity_mask(  
    game_chat_thread_id threadId,  
    uint64_t affinityMask  
)  
```  
  
### Parameters  
  
*threadId* &nbsp;&nbsp;\_In\_  
Type: [game_chat_thread_id](../../../enums/game_chat_thread_id.md)  
  
The type of internal Game Chat thread to configure processor affinity.  
  
*affinityMask* &nbsp;&nbsp;\_In\_  
Type: uint64_t  
  
The affinity mask representing on which processor(s) the internal Game Chat threads should run.  
  
  
### Return value  
Type: void
  
  
## Remarks  
  
This method enables the application to configure the processor affinity for internal Game Chat threads of a given type.

For exclusive resource applications, the threads are guaranteed to run on the specified processors, of which multiple may be enabled. 

This method may be called at any time before or after chat_manager::initialize() and will take effect immediately. Thread processor settings are persisted across calls to chat_manager::cleanup() and chat_manager::initialize(). When there are more than 64 cores present, this method always applies to processor group 0.

In order to specify any processor, pass `c_anyProcessor` as the *affinityMask* parameter. This is also the default value Game Chat will use if this method is never called.  
> [!NOTE] 
> `c_anyProcessor` is a `constexpr uint64_t` with a value of 0xFFFFFFFFFFFFFFFF.
  
## Requirements  
  
**Header:** GameChat2.h
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[chat_manager](../chat_manager.md)  
[game_chat_thread_id](../../../enums/game_chat_thread_id.md)  
[chat_manager::get_thread_affinity_mask](chat_manager_get_thread_affinity_mask.md)
  
  