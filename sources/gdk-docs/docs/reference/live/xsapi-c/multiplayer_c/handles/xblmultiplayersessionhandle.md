---
author: joannaleecy
title: "XblMultiplayerSessionHandle"
description: "Handle to a local multiplayer session. This handle will be used to query and change the local session object. Anytime the changes made to the local session object will not be reflected in the multiplayer service until a subsequent call to XblMultiplayerWriteSessionAsync."
kindex: XblMultiplayerSessionHandle
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionHandle  

Handle to a local multiplayer session. This handle will be used to query and change the local session object. Anytime the changes made to the local session object will not be reflected in the multiplayer service until a subsequent call to [XblMultiplayerWriteSessionAsync](../functions/xblmultiplayerwritesessionasync.md).    

## Syntax  
  
```cpp
typedef struct XblMultiplayerSession * XblMultiplayerSessionHandle;  
```  

## Requirements  
  
**Header:** multiplayer_c.h
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
