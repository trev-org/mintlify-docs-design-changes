---
author: M-Stahl
title: "XPackageKind"
description: "Indicates the type of the installation package."
kindex: XPackageKind
ms.author: brianpe
ms.topic: reference
edited: 05/18/2019
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XPackageKind
  
Indicates the type of the installation package.  
  
<a id="syntaxSection"></a>
  
## Syntax
  
```cpp
enum class XPackageKind  : uint32_t  
{  
    Game,  
    Content  
}  
```  
  
<a id="constantsSection"></a>
  
## Constants
  
| Constant | Description |  
| --- | --- |  
| Game | The installation package contains a game. |  
| Content | The installation package contains downloadable content. |  
  
<a id="remarksSection"></a>
  
## Remarks
  
The constants in this enumeration indicate the type of installation package used for a game and content. For information about the packaging technology used with Xbox One titles, see [Overview of Packaging](../../../../features/common/packaging/overviews/packaging.md). For information about the steps to create an XVC package, see [Getting started packaging titles for Xbox consoles](../../../../features/common/packaging/overviews/packaging-getting-started-for-console.md).  
  
<a id="requirementsSection"></a>
  
## Requirements
  
**Header:** XPackage.h  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
<a id="seealsoSection"></a>
  
## See also
  
[How to create and use Downloadable Content Packages (DLC) for PC and Xbox One](../../../../features/common/packaging/packaging-downloadable-content-dlc.md)  
[XPackage](../xpackage_members.md)  
  