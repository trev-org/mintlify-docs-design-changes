---
author: M-Stahl
title: "XPackageEnumerationScope"
description: "Indicates the scope of packages to be returned when installation packages are being enumerated."
kindex: XPackageEnumerationScope
ms.author: brianpe
ms.topic: reference
edited: '09/25/2023'
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XPackageEnumerationScope
  
Indicates the scope of packages to be returned when installation packages are being enumerated.  
  
<a id="syntaxSection"></a>
  
## Syntax
  
```cpp
enum class XPackageEnumerationScope  : uint32_t  
{  
    ThisOnly,  
    ThisAndRelated,  
    ThisPublisher  
}  
```  
  
<a id="constantsSection"></a>
  
## Constants
  
| Constant | Description |  
| --- | --- |  
| ThisOnly | Scope is limited to just apps or content associated with the calling process. |  
| ThisAndRelated | Scope includes apps or content associated with the calling process and also includes apps or content that are associated with any package the calling process has added to its RelatedProducts section of its game config file. |  
| ThisPublisher | Scope includes apps having the same publisher as the calling process or content related to apps that have the same publisher as the current process. |  

<a id="remarksSection"></a>
  
## Remarks
  
The constants in this enumeration are used by packages, apps, and content associated with the calling process. These constants are specified in the *RelatedProducts* section of the **Game config** file. For information about the packaging technology used with Xbox One titles, see [Overview of Packaging](../../../../features/common/packaging/overviews/packaging.md). For information about the steps to create an XVC package, see [Getting started packaging titles for Xbox consoles](../../../../features/common/packaging/overviews/packaging-getting-started-for-console.md).  
  
<a id="requirementsSection"></a>
  
## Requirements
  
**Header:** XPackage.h  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also
  
[How to create and use Downloadable Content Packages (DLC) for PC and Xbox One](../../../../features/common/packaging/packaging-downloadable-content-dlc.md)  
[XPackage](../xpackage_members.md)  
[Franchise Game Hubs](../../../../store/franchise-game-hubs.md)  
  