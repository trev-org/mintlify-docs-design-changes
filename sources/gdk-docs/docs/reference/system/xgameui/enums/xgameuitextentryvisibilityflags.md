---
author: jgup
title: "XGameUiTextEntryVisibilityFlags"
description: "Flags indicating the visibility state of the virtual keyboard."
kindex: XGameUiTextEntryVisibilityFlags
ms.author: jgup
ms.topic: reference
edited: 11/18/2022
applies-to: pc-gdk
ms.date: 11/18/2022
permissioned-type: public
---

# XGameUiTextEntryVisibilityFlags  

Flags indicating the visibility state of the virtual keyboard. 

<a id="syntaxSection"></a>

## Syntax  

```cpp
enum class XGameUiTextEntryVisibilityFlags : uint32_t  
{  
    Default = 0x0,  
    OnlyShowCandidates = 0x1
}  
```  

<a id="constantsSection"></a>

## Constants  

| Constant | Description |  
| --- | --- |  
| Default | Full virtual keyboard is visible, including the candidate list. |  
| OnlyShowCandidates | Only the candidate list is visible. |  


<a id="requirementsSection"></a>

## Requirements  

**Header:** XGameUI.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  

<a id="seealsoSection"></a>

## See also  

[XGameUI](../xgameui_members.md)  
  