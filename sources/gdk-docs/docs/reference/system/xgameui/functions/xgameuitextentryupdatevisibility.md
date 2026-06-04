---
author: jgup
title: "XGameUiTextEntryUpdateVisibility"
description: "Updates whether to show the full virtual keyboard or only the candidate list."
kindex: XGameUiTextEntryUpdateVisibility
ms.author: jgup
ms.topic: reference
edited: 11/20/2022
applies-to: pc-gdk
ms.date: 11/20/2022
permissioned-type: public
---

# XGameUiTextEntryUpdateVisibility  

Updates whether to show the full virtual keyboard or only the candidate list.

## Syntax  

```cpp
HRESULT XGameUiTextEntryUpdateVisibility(  
         XGameUiTextEntryHandle handle,
         XGameUiTextEntryVisibilityFlags visibilityFlags, 
)  
```  

### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: XGameUiTextEntryHandle

Handle to the opened virtual keyboard. 

*visibilityFlags* &nbsp;&nbsp;\_In\_  
Type: [XGameUiTextEntryVisibilityFlags](../enums/xgameuitextentryvisibilityflags.md)  

Flags indicating whether to show the full virtual keyboard or only the candidate list.

### Return value

Type: HRESULT

HRESULT success or error code. For a list of error codes, see [Error Codes](../../../errorcodes.md).
  
## Remarks  
  
Generally, the game should only use this function to toggle the candidate-only view if there is a
physical keyboard is being used by the game.
  
## Requirements  
  
**Header:** XGameUI.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameUI](../xgameui_members.md)   
  