---
author: TBD
title: "XNetworkingQueryStatistics"
description: "Retrieves the specified networking statistics into a caller provided buffer. "
kindex: XNetworkingQueryStatistics
ms.author: TBD
ms.topic: reference
applies-to: pc-gdk
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# XNetworkingQueryStatistics  

Retrieves the specified networking statistics into a caller provided buffer.     

## Syntax  
  
```cpp
HRESULT XNetworkingQueryStatistics(  
         XNetworkingStatisticsType statisticsType,  
         XNetworkingStatisticsBuffer* statisticsBuffer
)  
```  
  
### Parameters  
  
*statisticsType* &nbsp;&nbsp;\_In\_  
Type: [XNetworkingStatisticsType](../enums/xnetworkingstatisticstype.md)  
  
The enumerated value identifying the particular statistics to be retrieved.    
  
*statisticsBuffer*  &nbsp;&nbsp;\_Out\_  
Type: [XNetworkingStatisticsBuffer](../structs/xnetworkingstatisticsbuffer.md)  

A pointer to a caller-provided structure into which the requested statistics will be written. The exact sub-structure field within the union buffer that is written depends on the requested type of statistics.
  
### Return value  
Type: HRESULT
  
S_OK if retrieving the statistics was successful. E_NOTIMPL if retrieving the specified statistics type isn't supported on the current platform. E_INVALIDARG if the specified statistics type isn't recognized by the Gaming Runtime.   
  
## Remarks  

This function retrieves a snapshot of the specified networking-related statistics into the caller-provided buffer. Note that most statistics are not guaranteed to report the same value across multiple calls to this function.  

Only the statistics-specific substructure field within the output buffer union will be written. Any additional memory in the caller's output buffer that is defined by the union as a whole but that lies beyond the end of the substructure is not modified in any way by this function.  

## Requirements

**Header:** XNetworking.h

**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  

  
## See also  
[XNetworking](../xnetworking_members.md)  
  
  