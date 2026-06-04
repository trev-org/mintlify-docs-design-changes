---
author: joannaleecy
title: "HCRemoveWebSocketRoutedHandler"
description: "Removes a previously added HCWebSocketRoutedHandler."
kindex: HCRemoveWebSocketRoutedHandler
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# HCRemoveWebSocketRoutedHandler  

Removes a previously added HCWebSocketRoutedHandler.  

## Syntax  
  
```cpp
void HCRemoveWebSocketRoutedHandler(  
         int32_t handlerId  
)  
```  
  
### Parameters  
  
*handlerId* &nbsp;&nbsp;\_In\_  
Type: int32_t  
  
Id returned from the HCAddWebSocketRoutedHandler call.  
  
  
### Return value  
Type: void
  

  
## Requirements  
  
**Header:** httpClient.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpClient](../httpclient_members.md)  
  
  
