---
author: joannaleecy
title: "XblMultiplayerSessionReferenceToUriPath"
description: "Returns the URI path representation of a session reference."
kindex: XblMultiplayerSessionReferenceToUriPath
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionReferenceToUriPath  

Returns the URI path representation of a session reference.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSessionReferenceToUriPath(  
         const XblMultiplayerSessionReference* sessionReference,  
         XblMultiplayerSessionReferenceUri* sessionReferenceUri  
)  
```  
  
### Parameters  
  
*sessionReference* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionReference*](../structs/xblmultiplayersessionreference.md)  
  
A session reference.  
  
*sessionReferenceUri* &nbsp;&nbsp;\_Out\_  
Type: [XblMultiplayerSessionReferenceUri*](../structs/xblmultiplayersessionreferenceuri.md)  
  
Passes back the URI representation of the session reference.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
