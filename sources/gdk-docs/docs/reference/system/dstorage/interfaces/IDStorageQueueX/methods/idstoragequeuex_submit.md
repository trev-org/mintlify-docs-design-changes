---
author: M-Stahl
title: "Submit"
description: "Submits enqueued requests to DirectStorage."
kindex: Submit
ms.topic: reference
edited: 05/02/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# IDStorageQueueX::Submit  

Submits enqueued requests to DirectStorage.  

## Syntax  
  
```cpp
void Submit(  
)  
```  
  
### Parameters  
  
This method has no parameters. 
  
### Return value  
Type: void

## Remarks

This method submits requests from the queue to the hardware. Using `Submit`
enables the title to control when the CPU cost occurs for transition between the
title and the kernal. 

For more information, see the "EnqueueRequest" and
"EnqueueStatus/EnqueueSignal/EnqueueSetEvent" sections of [DirectStorage
overview](../../../../../../features/console/storage/directstorage/directstorage-overview.md). 
  
## Requirements  
  
**Header:** dstorage_xs.h  
  
**Library:** dstorage_xs.lib  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[IDStorageQueueX](../idstoragequeuex.md)  
[DStorage](../../../dstorage_members.md)  
  
