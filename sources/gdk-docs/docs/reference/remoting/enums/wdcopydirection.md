---
author: Timberhofmandi
title: "WdCopyDirection"
description: "Specifies the direction of a copy operation."
kindex: WdCopyDirection
ms.topic: reference
edited: 02/26/2026
applies-to: pc-gdk
ms.date: '02/26/2026'
permissioned-type: public
---

# WdCopyDirection  

Specifies the direction of a copy operation.  

## Syntax  
  
```cpp
enum class WdCopyDirection : uint32_t 
{ 
    CopyTo = 0, 
    CopyFrom = 1 
};
```  
  
### Constants  
  
| Constant | Value | Description |  
| --- | --- | --- |  
| CopyTo | 0 | Copy files to the remote device. This is the default direction. |  
| CopyFrom | 1 | Copy files from the remote device. |  

## Remarks  

This enumeration is used in the [WdCopyOptions](../structs/wdcopyoptions.md) structure to specify the direction of a [WdRemoteCopy](../functions/wdremotecopy.md) operation.

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdRemoteCopy](../functions/wdremotecopy.md)  
- [WdCopyOptions](../structs/wdcopyoptions.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)  
