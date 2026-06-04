---
author: TBD
title: "XSystemHandleCallbackReason"
description: "Reason the handle tracking callback was called."
kindex: XSystemHandleCallbackReason
ms.author: TBD
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XSystemHandleCallbackReason  

Reason the handle tracking callback was called.  

## Syntax  

```cpp
enum XSystemHandleCallbackReason
{
  Created = 0x00,
  Destroyed = 0x01
}
```

## Constants  

| Constant | Description |
| -------- | ----------- |
| Created | The handle was created. |
| Destroyed | The handle was destroyed. |


## Requirements

**Header:** XSystem.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also  

[XSystem members](../xsystem_members.md)  