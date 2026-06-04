---
author: XBL
title: "XblPrivacyBlockListChangeEventArgs"
description: "Event arguments for a block list change."
kindex: XblPrivacyBlockListChangeEventArgs
ms.author: migreen
ms.topic: reference
security: public
edited: 00/00/0000
applies-to: pc-gdk
---

# XblPrivacyBlockListChangeEventArgs  

Event arguments for a block list change.  

## Syntax  
  
```cpp
typedef struct XblPrivacyBlockListChangeEventArgs {  
    XblPrivacyListChangeType changeType;  
    uint64_t* xuids;  
    size_t xuidsCount;  
} XblPrivacyBlockListChangeEventArgs  
```
  
### Members  
  
*changeType*  
Type: [XblPrivacyListChangeType](../enums/xblprivacylistchangetype.md)  
  
The type of change (Added or Removed).
  
*xuids*  
Type: uint64_t*  
  
The Xbox user IDs affected by the change.
  
*xuidsCount*  
Type: size_t  
  
The number of entries in the xuids array.
  
## Requirements  
  
**Header:** privacy_c.h
  
## See also  
[privacy_c](../privacy_c_members.md)  
  
  
