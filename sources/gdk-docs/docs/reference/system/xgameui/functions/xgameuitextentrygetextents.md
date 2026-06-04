---
author: jgup
title: "XGameUiTextEntryGetExtents"
description: "Gets the screen extents of the virtual keyboard."
kindex: XGameUiTextEntryGetExtents
ms.author: jgup
ms.topic: reference
edited: 11/18/2022
applies-to: pc-gdk
ms.date: 11/18/2022
permissioned-type: public
---

# XGameUiTextEntryGetExtents  

Gets the screen extents of the virtual keyboard so that callers know where it is safe to render
text.

## Syntax  

```cpp
HRESULT XGameUiTextEntryGetExtents(  
         XGameUiTextEntryHandle handle,
         XGameUiTextEntryExtents* extents
)  
```  

### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: XGameUiTextEntryHandle  

Handle to the currently open virtual keyboard. 

*handle* &nbsp;&nbsp;\_Out\_  
Type: [XGameUiTextEntryExtents](../structs/xgameuitextentryextents.md)  

Describe the screen extents of the virtual keyboard.

### Return value

Type: HRESULT

HRESULT success or error code. For a list of error codes, see [Error Codes](../../../errorcodes.md).
  
## Remarks  
  
This function will always return the extents of the large accessibility keyboard if the full 
keyboard is visible. Otherwise, it will return the extents of the candidate list.
  
## Requirements  
  
**Header:** XGameUI.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameUI](../xgameui_members.md)  
  