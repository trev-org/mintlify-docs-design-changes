---
author: joannaleecy
title: "HCGetWebSocketSendMessageResult"
description: "Gets the result from HCWebSocketSendMessage."
kindex: HCGetWebSocketSendMessageResult
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# HCGetWebSocketSendMessageResult  

Gets the result from HCWebSocketSendMessage.  

## Syntax  
  
```cpp
HRESULT HCGetWebSocketSendMessageResult(  
         XAsyncBlock* asyncBlock,  
         WebSocketCompletionResult* result  
)  
```  
  
### Parameters  
  
*asyncBlock* &nbsp;&nbsp;\_Inout\_  
Type: XAsyncBlock*  
  
The XAsyncBlock that defines the async operation.  
  
*result* &nbsp;&nbsp;\_In\_  
Type: [WebSocketCompletionResult*](../structs/websocketcompletionresult.md)  
  
Pointer to the result payload.  
  
  
### Return value  
Type: HRESULT
  
Returns the duplicated handle.
  
## Requirements  
  
**Header:** httpClient.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpClient](../httpclient_members.md)  
  
  
