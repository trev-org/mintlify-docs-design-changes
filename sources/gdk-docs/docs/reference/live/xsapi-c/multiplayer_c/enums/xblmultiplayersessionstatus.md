---
author: joannaleecy
title: "XblMultiplayerSessionStatus"
description: "Defines values that indicate the current status of a session."
kindex: XblMultiplayerSessionStatus
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionStatus  

Defines values that indicate the current status of a session.    

## Syntax  
  
```cpp
enum class XblMultiplayerSessionStatus  : uint32_t  
{  
    Unknown,  
    Active,  
    Inactive,  
    Reserved  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| Unknown | The server returned an unrecognized response. |  
| Active | At least one player is active in the session. |  
| Inactive | No players are active in the session or all players left the session. |  
| Reserved | One or more players have not accepted the session invite. |  
  
## Remarks  
  
For more information, see the [Session user states](../../../../../services/multiplayer/mpsd/concepts/live-mpsd-details.md#session-user-states) section of [Multiplayer Session advanced topics](../../../../../services/multiplayer/mpsd/concepts/live-mpsd-details.md).
  
## Member of
  
[XblMultiplayerSessionQueryResult](../structs/xblmultiplayersessionqueryresult.md)
  
## Requirements  
  
**Header:** multiplayer_c.h
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
