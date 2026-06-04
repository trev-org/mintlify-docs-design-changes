---
author: joannaleecy
title: "HCWebSocketSetProxyDecryptsHttps"
description: "Allows proxy server to decrypt and inspect traffic; should be used only for debugging purposes This must be called after calling HCWebSocketSetProxyUri. Only applies to Win32 non-GDK builds"
kindex: HCWebSocketSetProxyDecryptsHttps
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCWebSocketSetProxyDecryptsHttps  

Allows proxy server to decrypt and inspect traffic; should be used only for debugging purposes This must be called after calling HCWebSocketSetProxyUri. Only applies to Win32 non-GDK builds  

## Syntax  
  
```cpp
HRESULT HCWebSocketSetProxyDecryptsHttps(  
         HCWebsocketHandle websocket,  
         bool allowProxyToDecryptHttps  
)  
```  
  
### Parameters  
  
*websocket* &nbsp;&nbsp;\_In\_  
Type: HCWebsocketHandle  
  
The handle of the WebSocket  
  
*allowProxyToDecryptHttps* &nbsp;&nbsp;\_In\_z\_  
Type: bool  
  
true is proxy can decrypt, false is not allowed to decrypt  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, E_OUTOFMEMORY, or E_FAIL.
  
## Requirements  
  
**Header:** httpClient.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpClient](../httpclient_members.md)  
  
  
