---
author: jgup
title: "XGameUiTextEntryClose"
description: "Closes the virtual keyboard and frees up the corresponding resources."
kindex: XGameUiTextEntryClose
ms.author: jgup
ms.topic: reference
edited: 11/18/2022
applies-to: pc-gdk
ms.date: 11/18/2022
permissioned-type: public
---

# XGameUiTextEntryClose  

Closes the virtual keyboard and frees up the corresponding resources. 

## Syntax  

```cpp
HRESULT XGameUiTextEntryClose(  
         XGameUiTextEntryHandle handle  
)  
```  

### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: XGameUiTextEntryHandle  

Handle to the currently open virtual keyboard.

### Return value

Type: HRESULT

HRESULT success or error code. For a list of error codes, see [Error Codes](../../../errorcodes.md).
  
## Remarks  
  
Games should call *XGameUiTextEntryClose* when they are done with collecting input or in response to
the keyboard having been dismissed. 
  
## Requirements  
  
**Header:** XGameUI.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameUI](../xgameui_members.md)  
[XGameUiTextEntryOpen](xgameuitextentryopen.md)  
  