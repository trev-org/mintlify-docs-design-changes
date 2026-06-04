---
author: joannaleecy
title: "XblAddServiceCallRoutedHandler"
description: "Registers for all service call notifications."
kindex: XblAddServiceCallRoutedHandler
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAddServiceCallRoutedHandler  

Registers for all service call notifications.  

## Syntax  
  
```cpp
XblFunctionContext XblAddServiceCallRoutedHandler(  
         XblCallRoutedHandler handler,  
         void* context  
)  
```  
  
### Parameters  
  
*handler* &nbsp;&nbsp;\_In\_  
Type: XblCallRoutedHandler  
  
The event handler function to call.  
  
*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  
  
Caller context to be passed back to the handler.  
  
  
### Return value  
Type: XblFunctionContext
  
A XblFunctionContext that can be used to unregister the event handler.
  
## Requirements  
  
**Header:** xbox_live_global_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[xbox_live_global_c](../xbox_live_global_c_members.md)  
  
  
