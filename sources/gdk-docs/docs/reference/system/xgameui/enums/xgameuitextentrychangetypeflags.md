---
author: jgup
title: "XGameUiTextEntryChangeTypeFlags"
description: "Flags indicating what has changed since the last call to XGameUiTextEntryGetState."
kindex: XGameUiTextEntryChangeTypeFlags
ms.author: jgup
ms.topic: reference
edited: 11/18/2022
applies-to: pc-gdk
ms.date: 11/18/2022
permissioned-type: public
---

# XGameUiTextEntryChangeTypeFlags  

Flags indicating what has changed since the last call to 
[XGameUiTextEntryGetState](../functions/xgameuitextentrygetstate.md).  

<a id="syntaxSection"></a>

## Syntax  

```cpp
enum class XGameUiTextEntryChangeTypeFlags : uint32_t  
{  
    None = 0x0,  
    TextChanged = 0x1,  
    Dismissed = 0x2
}  
```  

<a id="constantsSection"></a>

## Constants  

| Constant | Description |  
| --- | --- |  
| None | No text changes. |  
| TextChanged | Text has changed since the last call to [XGameUiTextEntryGetState](../functions/xgameuitextentrygetstate.md). |  
| Dismissed | The keyboard was dimissed. |  

<a id="remarksSection"></a>

## Remarks  

If the keyboard has been dismissed, the game should call 
[XGameUiTextEntryClose](../functions/xgameuitextentryclose.md) before trying to re-open the keyboard.

> [!NOTE]
> TextChange will not be set if cursorIndex, imeClauseStartIndex, or 
>imeClauseEndIndex values have changed. 

<a id="requirementsSection"></a>

## Requirements  

**Header:** XGameUI.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  

<a id="seealsoSection"></a>

## See also  

[XGameUI](../xgameui_members.md)  
  