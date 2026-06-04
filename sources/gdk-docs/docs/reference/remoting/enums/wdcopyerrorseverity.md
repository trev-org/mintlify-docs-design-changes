---
author: Timberhofmandi
title: "WdCopyErrorSeverity"
description: "Specifies the severity of a copy error or warning message."
kindex: WdCopyErrorSeverity
ms.topic: reference
edited: 02/26/2026
applies-to: pc-gdk
ms.date: '02/26/2026'
permissioned-type: public
---

# WdCopyErrorSeverity  

Specifies the severity of a copy error or warning message.  

## Syntax  
  
```cpp
enum class WdCopyErrorSeverity : uint32_t
{ 
    Warning = 0, 
    Error = 1 
};
```  
  
### Constants  
  
| Constant | Value | Description |  
| --- | --- | --- |  
| Warning | 0 | A warning message that indicates a potential issue but does not prevent the copy operation from proceeding. |  
| Error | 1 | An error message that indicates a failure in the copy operation. Provides extra information from the returned HRESULT of WdRemoteCopy. |  

## Remarks  

This enumeration is used with the [WdCopyErrorCallback](../callbacks/wdcopyerrorcallback.md) to indicate the severity of a message reported during a [WdRemoteCopy](../functions/wdremotecopy.md) operation.  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdCopyErrorCallback](../callbacks/wdcopyerrorcallback.md)  
- [WdRemoteCopy](../functions/wdremotecopy.md)  
- [WdCopyStatusCallbacks](../structs/wdcopystatuscallbacks.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)  
