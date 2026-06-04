---
author: jgup
title: "XGameUiTextEntryUpdatePositionHint"
description: "Updates the preferred positionining of the virtual keyboard."
kindex: XGameUiTextEntryUpdatePositionHint
ms.author: jgup
ms.topic: reference
edited: 11/20/2022
applies-to: pc-gdk
ms.date: 11/20/2022
permissioned-type: public
---

# XGameUiTextEntryUpdatePositionHint  

Updates the preferred positionining of the virtual keyboard.

## Syntax  

```cpp
HRESULT XGameUiTextEntryUpdatePositionHint(  
         XGameUiTextEntryHandle handle,
         XGameUiTextEntryPositionHint positionHint 
)  
```  

### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: XGameUiTextEntryHandle

Handle to the opened virtual keyboard. 

*positionHint* &nbsp;&nbsp;\_In\_  
Type: [XGameUiTextEntryPositionHint](../enums/xgameuitextentrypositionhint.md)  

Updates the preferred position to place the virtual keyboard.

### Return value

Type: HRESULT

HRESULT success or error code. For a list of error codes, see [Error Codes](../../../errorcodes.md).
 
## Requirements  
  
**Header:** XGameUI.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameUI](../xgameui_members.md)  
  