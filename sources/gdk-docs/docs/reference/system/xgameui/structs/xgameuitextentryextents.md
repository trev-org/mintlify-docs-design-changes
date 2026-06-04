---
author: jgup
title: "XGameUiTextEntryExtents"
description: "Describes the relative positioning of the virtual keyboard."
kindex: XGameUiTextEntryExtents
ms.author: jgup
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: 11/18/2022
permissioned-type: public
---

# XGameUiTextEntryExtents  

Describes the relative positioning of the virtual keyboard.

## Syntax  
  
```cpp
struct XGameUiTextEntryExtents {  
    float left;  
    float top;
    float right;
    float bottom;
} 
```
  
### Members  
  
*left*
Type: float
  
Relative position of the left side of the virtual keyboard. The value will be between 0.0f and 1.0f,
representing the percentage of the screen.
  
*top*
Type: float
  
Relative position of the top side of the virtual keyboard. The value will be between 0.0f and 1.0f,
representing the percentage of the screen.
  
*right*
Type: float
  
Relative position of the right side of the virtual keyboard. The value will be between 0.0f and 1.0f,
representing the percentage of the screen.

*bottom*
Type: float
  
Relative position of the bottom side of the virtual keyboard. The value will be between 0.0f and 1.0f,
representing the percentage of the screen.

## Requirements  
  
**Header:** XGameUI.h
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameUI](../xgameui_members.md)  
[XGameUiTextEntryGetExtents](../functions/xgameuitextentrygetextents.md)
