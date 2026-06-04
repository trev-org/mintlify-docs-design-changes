---
author: TBD
title: "XNetworkingStatisticsType"
description: "Statistics types for use with XNetworkingQueryStatistics."
kindex: XNetworkingStatisticsType
ms.author: TBD
ms.topic: reference
applies-to: pc-gdk
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# XNetworkingStatisticsType  

Statistics types for use with [XNetworkingQueryStatistics](../functions/xnetworkingquerystatistics.md).    

## Syntax  
  
```cpp
enum class XNetworkingStatisticsType  : uint32_t  
{  
    TitleTcpQueuedReceivedBufferUsage = 0,  
    SystemTcpQueuedReceivedBufferUsage = 1,  
    ToolsTcpQueuedReceivedBufferUsage = 2,  
}  
```  
  
## Constants  
  
| Constant | Buffer field written | Description |
| --- | --- | --- |
| TitleTcpQueuedReceivedBufferUsage | tcpQueuedReceiveBufferUsage ([XNetworkingTcpQueuedReceivedBufferUsageStatistics](../structs/xnetworkingtcpqueuedreceivedbufferusagestatistics.md)) | Statistics on the amount of memory currently and ever used by TCP sockets created by title processes for temporarily queuing payloads that have been received when no available user-mode buffers have been submitted (via [WSARecv](/windows/win32/api/winsock2/nf-winsock2-wsarecv), for example). Also reports the number of payload bytes that were dropped due to exceeding the previously configured maximum or other allocation failures. On PC, all statistics in the structure are always reported as 0.   |  
| SystemTcpQueuedReceivedBufferUsage | tcpQueuedReceiveBufferUsage  ([XNetworkingTcpQueuedReceivedBufferUsageStatistics](../structs/xnetworkingtcpqueuedreceivedbufferusagestatistics.md)) | Statistics on the amount of memory currently and ever used by TCP sockets created by the system for temporarily queuing payloads that have been received when no available socket buffers have been submitted. Also reports the number of payload bytes that were dropped due to exceeding the previously configured maximum or other allocation failures. On PC, all statistics in the structure are always reported as 0.   |  
| ToolsTcpQueuedReceivedBufferUsage | tcpQueuedReceiveBufferUsage  ([XNetworkingTcpQueuedReceivedBufferUsageStatistics](../structs/xnetworkingtcpqueuedreceivedbufferusagestatistics.md)) | Statistics on the amount of memory currently and ever used by TCP sockets created by development tools for temporarily queuing payloads that have been received when no available socket buffers have been submitted. Also reports the number of payload bytes that were dropped due to exceeding the previously configured maximum or other allocation failures. On PC, all statistics in the structure are always reported as 0.   |  
  
## Requirements  
  
**Header:** XNetworking.h
  
**Supported Platforms**: Windows, Xbox One family consoles and Xbox Series consoles
  
## See also  
[XNetworking](../xnetworking_members.md)  
[XNetworkingQueryStatistics](../functions/xnetworkingquerystatistics.md)  
[XNetworkingStatisticsBuffer](../structs/xnetworkingstatisticsbuffer.md)  
  
  