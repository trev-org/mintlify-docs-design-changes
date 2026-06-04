---
author: joannaleecy
title: "XblUserStatisticsGetSingleUserStatisticAsync"
description: "Get a specified statistic for a specified user."
kindex: XblUserStatisticsGetSingleUserStatisticAsync
ms.topic: reference
edited: 03/27/2023
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblUserStatisticsGetSingleUserStatisticAsync  

Get a specified statistic for a specified user.  

## Syntax  
  
```cpp
HRESULT XblUserStatisticsGetSingleUserStatisticAsync(  
         XblContextHandle xblContextHandle,  
         uint64_t xboxUserId,  
         const char* serviceConfigurationId,  
         const char* statisticName,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*xblContextHandle* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
*xboxUserId* &nbsp;&nbsp;\_In\_  
Type: uint64_t  
  
The Xbox User ID of the player to get statistics for.  
  
*serviceConfigurationId* &nbsp;&nbsp;\_In\_z\_  
Type: char*  
  
The Service Configuration ID (SCID) for the title. The SCID is considered case sensitive so paste it directly from the Partner Center.  
  
*statisticName* &nbsp;&nbsp;\_In\_z\_  
Type: char*  
  
The name of the statistic to return.  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
Call [XblUserStatisticsGetSingleUserStatisticResultSize](xbluserstatisticsgetsingleuserstatisticresultsize.md) and [XblUserStatisticsGetSingleUserStatisticResult](xbluserstatisticsgetsingleuserstatisticresult.md) upon completion to get the result.

If using [event-based Stats](../../../../../services/player-data/stats-leaderboards/event-based/live-stats-eb-overview.md), statistic names will coincide with each stat's [stat instance](../../../../../services/player-data/stats-leaderboards/event-based/live-stats-eb-overview.md#defining-stat-instances). If using [title-managed Stats](../../../../../services/player-data/stats-leaderboards/title-managed/live-stats-tm-overview.md), statistic names will coincide with each stat's ID.  
  
## REST Call  
  
V1 GET /users/xuid({xuid})/scids/{scid}/stats/{statname1}
  
## Requirements  
  
**Header:** user_statistics_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[user_statistics_c](../user_statistics_c_members.md)  
  
  
