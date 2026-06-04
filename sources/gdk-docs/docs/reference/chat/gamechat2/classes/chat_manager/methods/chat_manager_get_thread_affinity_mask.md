---
author: jkepner
title: "get_thread_affinity_mask"
description: "Retrieves the current affinity mask representing the processor(s) on which internal Game Chat threads will run or are running."
kindex: get_thread_affinity_mask
ms.author: jkepner
ms.topic: reference
ms.date: 9/27/2022
edited: 00/00/0000
quality: good
applies-to: pc-gdk
permissioned-type: public
---

# chat_manager::get_thread_affinity_mask 

Retrieves the current affinity mask representing the processor(s) on which internal Game Chat threads will run or are running.  

## Syntax  
  
```cpp
void get_thread_affinity_mask(  
    game_chat_thread_id threadId,  
    uint64_t* affinityMask  
)  
```  
  
### Parameters  
  
*threadId* &nbsp;&nbsp;\_In\_  
Type: [game_chat_thread_id](../../../enums/game_chat_thread_id.md)  
  
The type of internal Game Chat thread for which processor affinity should be retrieved.  
The internal thread to retrieve the processor mask for.
  
*affinityMask* &nbsp;&nbsp;\_Out\_  
Type: uint64_t  
  
A place to store the affinity mask representing the processor(s) on which the internal Game Chat threads will run or are running.  
  
  
### Return value  
Type: void
  
  
## Remarks  
  
This retrieves the current processor affinity for internal Game Chat threads of a given type.

This method does not require chat_manager::initialize() to have been called first. 

A reported value of ```c_anyProcessor``` written to *affinityMask* indicates that the thread is free to run on any processor.  

> [!NOTE] 
> ```c_anyProcessor``` is a ```constexpr uint64_t``` with a value of 0xFFFFFFFFFFFFFFFF.
  
## Requirements  
  
**Header:** GameChat2.h
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[chat_manager](../chat_manager.md)  
[game_chat_thread_id](../../../enums/game_chat_thread_id.md)  
[chat_manager::set_thread_affinity_mask](chat_manager_set_thread_affinity_mask.md)
  
  