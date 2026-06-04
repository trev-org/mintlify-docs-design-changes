---
author: tyduck
title: "TrySetLampArrayWorkerThreadAffinityMask"
description: "TrySetLampArrayWorkerThreadAffinityMask API reference"
kindex: TrySetLampArrayWorkerThreadAffinityMask
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# TrySetLampArrayWorkerThreadAffinityMask  

Sets a processor affinity mask for the LampArray worker thread.

## Syntax  
  
```cpp
HRESULT TrySetLampArrayWorkerThreadAffinityMask(
    uint64_t threadAffinityMask);
```  

### Parameters  
  
*threadAffinityMask*
Type: uint64_t  
  
The desired affinity mask for the LampArray worker thread.

### Return value

Type: HRESULT

Function result.

## Remarks  

This function will succeed and take effect no more than once per process. Calling this function multiple times within the same process is not supported.

## Requirements  
  
**Header:** LampArray.h  
  
**Library:** xgameplatform.lib  
  
**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../features/common/lighting/gc-lighting-toc.md)  
[LampArray Basics](../../../../features/common/lighting/lighting-basics.md)  
[SetThreadAffinityMask](/windows/win32/api/winbase/nf-winbase-setthreadaffinitymask)  