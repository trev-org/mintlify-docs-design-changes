---
author: jgup
title: "XSystemRuntimeInfo"
description: "Represents information about the gaming runtime service."
kindex: XSystemRuntimeInfo
ms.author: jgup
ms.topic: reference
edited: 07/02/2019
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XSystemRuntimeInfo  

Represents information about the gaming runtime service.

## Syntax  
  
```cpp
struct XSystemRuntimeInfo
{
    XVersion runtimeVersion;
    XVersion availableVersion;
};
```
  
### Members  
  
*runtimeVersion*  
Type: [XVersion](../../xgameruntimetypes/structs/xversion.md)  
  
The version of the gaming runtime service on which the game is running. If there are any errors, or
the gaming runtime service isn't installed, this version will be zeros.
  
*availableVersion*  
Type: [XVersion](../../xgameruntimetypes/structs/xversion.md)  
  
On PC, if availableVersion is different from the runtimeVersion, this means that a gaming runtime service 
is available and it has version of availableVersion. On console, this will be the same as runtimeVersion.
  
## Remarks  
  
This structure is returned when [XSystemGetRuntimeInfo](../functions/xsystemgetruntimeinfo.md) is called.
  
## Requirements  
  
**Header:** XSystem.h
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XSystem](../xsystem_members.md)  
[XSystemGetRuntimeInfo](../functions/xsystemgetruntimeinfo.md) 

  