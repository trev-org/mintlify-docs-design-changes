---
author: joannaleecy
title: "XblRemoveServiceCallRoutedHandler"
description: "Unregisters from all service call notifications."
kindex: XblRemoveServiceCallRoutedHandler
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblRemoveServiceCallRoutedHandler  

Unregisters from all service call notifications.  

## Syntax  
  
```cpp
void XblRemoveServiceCallRoutedHandler(  
         XblFunctionContext token  
)  
```  
  
### Parameters  
  
*token* &nbsp;&nbsp;\_In\_  
Type: XblFunctionContext  
  
The XblFunctionContext object that was returned when the event handler was registered.  
  
  
### Return value  
Type: void
  

  
## Requirements  
  
**Header:** xbox_live_global_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[xbox_live_global_c](../xbox_live_global_c_members.md)  
  
  
