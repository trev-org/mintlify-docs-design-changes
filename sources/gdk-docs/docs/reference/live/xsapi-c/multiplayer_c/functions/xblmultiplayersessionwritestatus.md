---
author: joannaleecy
title: "XblMultiplayerSessionWriteStatus"
description: "After call XblMultiplayerWriteSessionAsync, the status of the write."
kindex: XblMultiplayerSessionWriteStatus
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionWriteStatus  

After call XblMultiplayerWriteSessionAsync, the status of the write.  

## Syntax  
  
```cpp
XblWriteSessionStatus XblMultiplayerSessionWriteStatus(  
         XblMultiplayerSessionHandle handle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
  
### Return value  
Type: XblWriteSessionStatus
  
The write status of the Multiplayer session.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
