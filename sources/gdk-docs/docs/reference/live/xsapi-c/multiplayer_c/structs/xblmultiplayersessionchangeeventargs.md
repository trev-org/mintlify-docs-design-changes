---
author: joannaleecy
title: "XblMultiplayerSessionChangeEventArgs"
description: "Arguments passed to the event handler when a session change occurs."
kindex: XblMultiplayerSessionChangeEventArgs
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionChangeEventArgs  

Arguments passed to the event handler when a session change occurs.  

## Syntax  
  
```cpp
typedef struct XblMultiplayerSessionChangeEventArgs {  
    XblMultiplayerSessionReference SessionReference;  
    char Branch[XBL_GUID_LENGTH];  
    uint64_t ChangeNumber;  
} XblMultiplayerSessionChangeEventArgs  
```
  
### Members  
  
*SessionReference*  
Type: [XblMultiplayerSessionReference](xblmultiplayersessionreference.md)  
  
The session that triggered this event.
  
*Branch*  
Type: char[XBL_GUID_LENGTH]  
  
The branch of the session used to scope change numbers.
  
*ChangeNumber*  
Type: uint64_t  
  
The change number of the session.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
