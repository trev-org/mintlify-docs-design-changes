---
author: M-Stahl
title: "DSTORAGE_SWIZZLE_MODE"
description: "Types of texture swizzling to perform."
kindex: DSTORAGE_SWIZZLE_MODE
ms.topic: reference
edited: 04/28/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# DSTORAGE_SWIZZLE_MODE  

Types of texture swizzling to perform.  

## Syntax  
  
```cpp
enum DSTORAGE_SWIZZLE_MODE  : UINT64  
{  
    DSTORAGE_SWIZZLE_MODE_NONE = 0,  
    DSTORAGE_SWIZZLE_MODE_4K_4K_8K = 1,
    DSTORAGE_SWIZZLE_MODE_4K_4K_24K = 2,
    DSTORAGE_SWIZZLE_MODE_4K_12K_4K_4K_8K = 3,
    DSTORAGE_SWIZZLE_MODE_4K_12K_4K_12K = 4
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| DSTORAGE_SWIZZLE_MODE_NONE | No swizzling. | 
| DSTORAGE_SWIZZLE_MODE_4K_4K_8K | |
| DSTORAGE_SWIZZLE_MODE_4K_4K_24K | |
| DSTORAGE_SWIZZLE_MODE_4K_12K_4K_4K_8K | |
| DSTORAGE_SWIZZLE_MODE_4K_12K_4K_12K | |
  
## Remarks

This enumeration is used in the [DSTORAGE_REQUEST_OPTIONS](../structs/dstorage_request_options.md) structure.

For more information on the individual Swizzle modes then please see [Shuffle Formats Overview](../../../../features/console/storage/directstorage/directstorage-shuffles.md).
  
## Requirements  
  
**Header:** dstorage_xs.h  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[DStorage](../dstorage_members.md)  
  
