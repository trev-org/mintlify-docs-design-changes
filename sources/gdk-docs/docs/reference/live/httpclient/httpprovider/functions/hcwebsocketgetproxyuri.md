---
author: joannaleecy
title: "HCWebSocketGetProxyUri"
description: "Get the proxy URI for the WebSocket."
kindex: HCWebSocketGetProxyUri
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCWebSocketGetProxyUri  

Get the proxy URI for the WebSocket.  

## Syntax  
  
```cpp
HRESULT HCWebSocketGetProxyUri(  
         HCWebsocketHandle websocket,  
         const char** proxyUri  
)  
```  
  
### Parameters  
  
*websocket* &nbsp;&nbsp;\_In\_  
Type: HCWebsocketHandle  
  
The handle of the WebSocket.  
  
*proxyUri* &nbsp;&nbsp;\_Out\_  
Type: char**  
  
The UTF-8 encoded proxy URI for the WebSocket.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, E_OUTOFMEMORY, or E_FAIL.
  
## Requirements  
  
**Header:** httpProvider.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpProvider](../httpprovider_members.md)  
  
  
