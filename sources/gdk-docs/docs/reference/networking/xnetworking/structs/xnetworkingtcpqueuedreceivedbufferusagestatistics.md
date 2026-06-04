---
author: TBD
title: "XNetworkingTcpQueuedReceivedBufferUsageStatistics"
description: "The output structure returned when querying networking statistics with XNetworkingQueryStatistics and the TitleTcpQueuedReceivedBufferUsage, SystemTcpQueuedReceivedBufferUsage, or ToolsTcpQueuedReceivedBufferUsage XNetworkingStatisticsType values are specified."
kindex: XNetworkingTcpQueuedReceivedBufferUsageStatistics
ms.author: TBD
ms.topic: reference
applies-to: pc-gdk
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# XNetworkingTcpQueuedReceivedBufferUsageStatistics  

The output structure returned when querying networking statistics with [XNetworkingQueryStatistics](../functions/xnetworkingquerystatistics.md) and the TitleTcpQueuedReceivedBufferUsage, SystemTcpQueuedReceivedBufferUsage, or ToolsTcpQueuedReceivedBufferUsage [XNetworkingStatisticsType](../enums/xnetworkingstatisticstype.md) values are specified.     

## Syntax  
  
```cpp
typedef struct XNetworkingTcpQueuedReceivedBufferUsageStatistics {  
    uint64_t numBytesCurrentlyQueued;  
    uint64_t peakNumBytesEverQueued;  
    uint64_t totalNumBytesQueued;  
    uint64_t numBytesDroppedForExceedingConfiguredMax;  
    uint64_t numBytesDroppedDueToAnyFailure;  
} XNetworkingTcpQueuedReceivedBufferUsageStatistics  
```
  
### Members  
  
*numBytesCurrentlyQueued*  
Type: uint64_t  
  
The size, in bytes, of all kernel mode buffers currently allocated for holding received payloads that have not yet been read from their corresponding TCP sockets. Titles can reduce the queue size by calling [WSARecv](/windows/win32/api/winsock2/nf-winsock2-wsarecv) or similar functions on their TCP sockets to consume existing allocations, and can prevent them from occurring by ensuring sufficient receive operations (and their buffers) have already been submitted in advance.   
  
*peakNumBytesEverQueued*  
Type: uint64_t  
  
The highest size, in bytes, of all kernel mode buffers that have ever been allocated at one time for holding received payloads that have not yet been read from their corresponding TCP sockets.  
  
*totalNumBytesQueued*  
Type: uint64_t  
  
The total number of bytes in all kernel mode buffers that have ever been allocated for holding received payloads that have not yet been read from their corresponding TCP sockets.   
  
*numBytesDroppedForExceedingConfiguredMax*  
Type: uint64_t  
  
The number of TCP payload bytes that had arrived but were discarded because they would have exceeded the maximum allowed for the memory partition (see [XNetworkingConfigurationSetting](../enums/xnetworkingconfigurationsetting.md)::MaxTitleTcpQueuedReceiveBufferSize, [XNetworkingConfigurationSetting](../enums/xnetworkingconfigurationsetting.md)::MaxSystemTcpQueuedReceiveBufferSize, or [XNetworkingConfigurationSetting](../enums/xnetworkingconfigurationsetting.md)::MaxToolsTcpQueuedReceiveBufferSize) if they were to be combined with the number of bytes already allocated (*numBytesCurrentlyQueued*).
  
*numBytesDroppedDueToAnyFailure*  
Type: uint64_t  
  
The number of TCP payload bytes that had arrived but were discarded because allocating the queued receive buffer failed for any reason (includes *numBytesDroppedForExceedingConfiguredMax*, as well as allocation attempts that would be under the maximum but had insufficient actual available memory in the memory partition at the time).   
  
## Requirements  
  
**Header:** XNetworking.h
  
**Supported Platforms**: Windows, Xbox One family consoles and Xbox Series consoles
  
## See also  
[XNetworking](../xnetworking_members.md)  
[XNetworkingQueryStatistics](../functions/xnetworkingquerystatistics.md)  
[XNetworkingStatisticsBuffer](xnetworkingstatisticsbuffer.md)  
  
  