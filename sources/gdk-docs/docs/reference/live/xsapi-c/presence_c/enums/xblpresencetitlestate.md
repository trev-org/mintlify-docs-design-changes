---
author: joannaleecy
title: "XblPresenceTitleState"
description: "Defines values used to indicate the title presence state for a user."
kindex: XblPresenceTitleState
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPresenceTitleState  

Defines values used to indicate the title presence state for a user.    

## Syntax  
  
```cpp
enum class XblPresenceTitleState  : uint32_t  
{  
    Unknown,  
    Started,  
    Ended  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| Unknown | Indicates this is a Unknown state. |  
| Started | Indicates the user started playing the title. |  
| Ended | Indicates the user ended playing the title. |  
  
## Argument of
  
[XblPresenceTitlePresenceChangedHandler](../functions/xblpresencetitlepresencechangedhandler.md)
  
## Requirements  
  
**Header:** presence_c.h
  
## See also  
[presence_c](../presence_c_members.md)  
  
  
