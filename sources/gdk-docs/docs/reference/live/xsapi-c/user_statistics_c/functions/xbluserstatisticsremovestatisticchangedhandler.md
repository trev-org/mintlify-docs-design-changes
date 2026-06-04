---
author: joannaleecy
title: "XblUserStatisticsRemoveStatisticChangedHandler"
description: "Unregisters an event handler for statistic change notifications."
kindex: XblUserStatisticsRemoveStatisticChangedHandler
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblUserStatisticsRemoveStatisticChangedHandler  

Unregisters an event handler for statistic change notifications.  

## Syntax  
  
```cpp
void XblUserStatisticsRemoveStatisticChangedHandler(  
         XblContextHandle xblContextHandle,  
         XblFunctionContext context  
)  
```  
  
### Parameters  
  
*xblContextHandle* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
*context* &nbsp;&nbsp;\_In\_  
Type: XblFunctionContext  
  
The function_context object that was returned when the event handler was registered.  
  
  
### Return value  
Type: void
  

  
## Requirements  
  
**Header:** user_statistics_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[user_statistics_c](../user_statistics_c_members.md)  
  
  
