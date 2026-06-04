---
author: TBD
title: "XNetworkingStatisticsBuffer"
description: "A union declaring buffer space for holding all possible output structure types returned when querying networking statistics with XNetworkingQueryStatistics."
kindex: XNetworkingStatisticsBuffer
ms.author: TBD
ms.topic: reference
applies-to: pc-gdk
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# XNetworkingStatisticsBuffer  

A union declaring buffer space for holding all possible output structure types returned when querying networking statistics with [XNetworkingQueryStatistics](../functions/xnetworkingquerystatistics.md).     

## Syntax  
  
```cpp
union XNetworkingStatisticsBuffer {  
    XNetworkingTcpQueuedReceivedBufferUsageStatistics tcpQueuedReceiveBufferUsage;  
}
```
  
### Members  
  
*tcpQueuedReceiveBufferUsage*  
Type: [XNetworkingTcpQueuedReceivedBufferUsageStatistics](xnetworkingtcpqueuedreceivedbufferusagestatistics.md)  
  
The structure populated when querying the TitleTcpQueuedReceivedBufferUsage, SystemTcpQueuedReceivedBufferUsage, or ToolsTcpQueuedReceivedBufferUsage [XNetworkingStatisticsType](../enums/xnetworkingstatisticstype.md).  
  
## Remarks  

Only one substructure field within the union will be written by the [XNetworkingQueryStatistics](../functions/xnetworkingquerystatistics.md) function. That field is determined by the [XNetworkingStatisticsType](../enums/xnetworkingstatisticstype.md) passed to that function. Any additional memory defined by the union as a whole but that lies beyond the end of the reported substructure is not modified by the call to [XNetworkingQueryStatistics](../functions/xnetworkingquerystatistics.md).

## Requirements  
  
**Header:** XNetworking.h
  
**Supported Platforms**: Windows, Xbox One family consoles and Xbox Series consoles
  
## See also  
[XNetworking](../xnetworking_members.md)  
[XNetworkingQueryStatistics](../functions/xnetworkingquerystatistics.md)  
  
  