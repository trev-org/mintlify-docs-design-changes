---
author: aablackm
title: "IXtfEnumerateConsolesCallback Interface (Interface contents)"
description: "Provides callbacks that are used when a development console is found during an IXtfConsoleManager::EnumerateConsoles operation."
ms.assetid: T:Windows.Xbox.xtfconsolemanager.IXtfEnumerateConsolesCallback
kindex: IXtfEnumerateConsolesCallback interface, about
ms.author: stevenpr
ms.topic: article
edited: '08/24/2020'
ms.date: '08/01/2022'
permissioned-type: public
---

# IXtfEnumerateConsolesCallback Interface
  
Provides callbacks that are used when a development console is found during an [IXtfConsoleManager::EnumerateConsoles](../IXtfConsoleManager/methods/enumerateconsoles-ixtfconsolemanager-xtfconsolemanager-xbox-microsoft-m.md) operation.  
  
<a id="syntaxSection"></a>
  
## Syntax
  
```cpp
interface IXtfEnumerateConsolesCallback : public IUnknown  
```
  
  
## Methods  
  
| Method | Description |  
| --- | --- |  
| [OnConsoleFound](methods/onconsolefound-ixtfenumerateconsolescallback-xtfconsolemanager-xbox-mi.md) | Called when a development console is found during an [IXtfConsoleManager::EnumerateConsoles](../IXtfConsoleManager/methods/enumerateconsoles-ixtfconsolemanager-xtfconsolemanager-xbox-microsoft-m.md) operation. |  

  
<a id="requirementsSection"></a>
  
## Requirements
  
**Header:** xtfconsolemanager.h  
  
**Library:** xtfconsolemanager.lib  
  
**Supported platforms:** Windows (for Xbox console tools)  
  
<a id="seealsoSection"></a>
  
## See also
  
[IXtfConsoleManager Interface](../IXtfConsoleManager/ixtfconsolemanager-xtfconsolemanager-xbox-microsoft-t.md)  
[XtfConsoleManager](../../xtfconsolemanager-xbox-microsoft-n.md)  
  