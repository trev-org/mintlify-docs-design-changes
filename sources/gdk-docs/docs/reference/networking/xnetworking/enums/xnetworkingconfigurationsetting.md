---
author: TBD
title: "XNetworkingConfigurationSetting"
description: "Setting types for use with XNetworkingSetConfigurationSetting or XNetworkingQueryConfigurationSetting."
kindex: XNetworkingConfigurationSetting
ms.author: TBD
ms.topic: reference
applies-to: pc-gdk
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# XNetworkingConfigurationSetting  

Setting types for use with [XNetworkingSetConfigurationSetting](../functions/xnetworkingsetconfigurationsetting.md) or [XNetworkingQueryConfigurationSetting](../functions/xnetworkingqueryconfigurationsetting.md).  
  
## Syntax  
  
```cpp
enum class XNetworkingConfigurationSetting  : uint32_t  
{  
    MaxTitleTcpQueuedReceiveBufferSize = 0,  
    MaxSystemTcpQueuedReceiveBufferSize = 1,  
    MaxToolsTcpQueuedReceiveBufferSize = 2,  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| MaxTitleTcpQueuedReceiveBufferSize | The maximum amount of memory, in bytes, that all TCP sockets created by title processes can allocate for temporarily queuing payloads that have been received when no available user-mode buffers have been submitted (via [WSARecv](/windows/win32/api/winsock2/nf-winsock2-wsarecv), for example). Any arriving payloads that would exceed this limit will be discarded, appearing to the sender as packet loss that must be retried, with potential delay and throughput implications. <br/>The value setting may be modified at any time; if the new value is lower than the currently allocated amount, then future allocations will be prevented until existing queued receive buffers are read by the title to bring the total below the new value. The amount currently allocated can be determined using [XNetworkingQueryStatistics](../functions/xnetworkingquerystatistics.md) and specifying [XNetworkingStatisticsType](xnetworkingstatisticstype.md)::TitleTcpQueuedReceivedBufferUsage.<br/>The minimum value is 0, which prevents any queued TCP receive buffer allocations. The maximum value is UINT64_MAX, which doesn't artificially limit allocations (though allocations may still fail if there is insufficient actual memory available to the title partition). The default value on Xbox is 33,554,432 (32 megabytes). The default value on PC is 0.<br/> Attempting to configure this parameter setting on PC will fail with the E_NOTIMPL error code. Retrieving this setting on PC will always report the value 0.   |  
| MaxSystemTcpQueuedReceiveBufferSize | The maximum amount of memory, in bytes, that all TCP sockets created by the system can allocate for temporarily queuing payloads that have been received when no socket buffers have been submitted yet. Any arriving payloads that would exceed this limit will be discarded, appearing to the sender as packet loss that must be retried, with potential delay and throughput implications.<br/> The value setting may be modified at any time; if the new value is lower than the currently allocated amount, then future allocations will be prevented until existing queued receive buffers are read by the system to bring the total below the new value. The amount currently allocated can be determined using [XNetworkingQueryStatistics](../functions/xnetworkingquerystatistics.md) and specifying [XNetworkingStatisticsType](xnetworkingstatisticstype.md)::SystemTcpQueuedReceivedBufferUsage.<br/> The minimum value is 0, which prevents any queued TCP receive buffer allocations. The maximum value is UINT64_MAX, which doesn't artificially limit allocations (though allocations may still fail if there is insufficient actual memory available to the system partition). The default value on Xbox is 4,194,304 (4 megabytes). The default value on PC is the maximum.<br/> Attempting to configure this parameter setting on PC will fail with the E_NOTIMPL error code. Retrieving this setting on PC will always report the value 0.   |  
| MaxToolsTcpQueuedReceiveBufferSize | The maximum amount of memory, in bytes, that all TCP sockets created by development tools can allocate for temporarily queuing payloads that have been received when no socket buffers have been submitted yet. Any arriving payloads that would exceed this limit will be discarded, appearing to the sender as packet loss that must be retried, with potential delay and throughput implications.<br/> The value setting may be modified at any time; if the new value is lower than the currently allocated amount, then future allocations will be prevented until existing queued receive buffers are read by the development tools to bring the total below the new value. The amount currently allocated can be determined using [XNetworkingQueryStatistics](../functions/xnetworkingquerystatistics.md) and specifying [XNetworkingStatisticsType](xnetworkingstatisticstype.md)::ToolsTcpQueuedReceivedBufferUsage.<br/> The minimum value is 0, which prevents any queued TCP receive buffer allocations. The maximum value is UINT64_MAX, which doesn't artificially limit allocations (though allocations may still fail if there is insufficient actual memory available to the tools partition). The default value on Xbox is the maximum value. The default value on PC is 0.<br/> Attempting to configure this parameter setting on PC will fail with the E_NOTIMPL error code. Retrieving this value on PC will always report the value 0.   |  
  
## Requirements  
  
**Header:** XNetworking.h
  
**Supported Platforms**: Windows, Xbox One family consoles and Xbox Series consoles
  
## See also  
[XNetworking](../xnetworking_members.md)  
[XNetworkingSetConfigurationSetting](../functions/xnetworkingsetconfigurationsetting.md)  
[XNetworkingQueryConfigurationSetting](../functions/xnetworkingqueryconfigurationsetting.md)  
  
  