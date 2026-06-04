---
author: XBL
title: "XblPrivacyListChangeType"
description: "Defines the type of change that occurred on a privacy list."
kindex: XblPrivacyListChangeType
ms.author: migreen
ms.topic: reference
security: public
edited: 00/00/0000
applies-to: pc-gdk
---

# XblPrivacyListChangeType  

Defines the type of change that occurred on a privacy list.    

## Syntax  
  
```cpp
enum class XblPrivacyListChangeType  : uint32_t  
{  
    Added,  
    Removed  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| Added | One or more users were added to the list. |  
| Removed | One or more users were removed from the list. |  
  
## Member of
  
[XblPrivacyMuteListChangeEventArgs](../structs/xblprivacymutelistchangeeventargs.md)  
[XblPrivacyBlockListChangeEventArgs](../structs/xblprivacyblocklistchangeeventargs.md)
  
## Requirements  
  
**Header:** privacy_c.h
  
## See also  
[privacy_c](../privacy_c_members.md)  
  
  
