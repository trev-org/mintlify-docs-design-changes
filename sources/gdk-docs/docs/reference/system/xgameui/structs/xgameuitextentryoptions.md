---
author: jgup
title: "XGameUiTextEntryOptions"
description: "Initial set of options for the virtual keyboard used by XGameUiTextEntryOpen."
kindex: XGameUiTextEntryOptions
ms.author: jgup
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: 11/18/2022
permissioned-type: public
---

# XGameUiTextEntryOptions  

Initial set of options for the virtual keyboard used by 
[XGameUiTextEntryOpen](../functions/xgameuitextentryopen.md).

## Syntax  
  
```cpp
struct XGameUiTextEntryOptions {  
    XGameUiTextEntryInputScope inputScope ;  
    XGameUiTextEntryPositionHint positionHint;  
    XGameUiTextEntryVisibilityFlags visibilityflags;  
}
```
  
### Members  
  
*inputScope*
Type: [XGameUiTextEntryInputScope](../enums/xgameuitextentryinputscope.md) 
  
Describes the expected layout of the virtual keyboard.
  
*positionHint*  
Type: [XGameUiTextEntryPositionHint](../enums/xgameuitextentrypositionhint.md)
  
Where to position the virtual keyboard.
  
*visibilityflags*  
Type: [XGameUiTextEntryVisibilityFlags](../enums/xgameuitextentryvisibilityflags.md)
  
Flags describing whether to show the full keyboard or only the candidate list.
   
## Requirements  
  
**Header:** XGameUI.h
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameUI](../xgameui_members.md)  
[XGameUiTextEntryOpen](../functions/xgameuitextentryopen.md) 