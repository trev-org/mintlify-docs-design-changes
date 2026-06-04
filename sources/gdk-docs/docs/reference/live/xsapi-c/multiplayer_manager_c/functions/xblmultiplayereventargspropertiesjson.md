---
author: joannaleecy
title: "XblMultiplayerEventArgsPropertiesJson"
description: "Retrieves additional information for `XblMultiplayerEventType::MemberPropertyChanged` and `XblMultiplayerEventType::SessionPropertyChanged` events."
kindex: XblMultiplayerEventArgsPropertiesJson
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerEventArgsPropertiesJson  

Retrieves additional information for `XblMultiplayerEventType::MemberPropertyChanged` and `XblMultiplayerEventType::SessionPropertyChanged` events.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerEventArgsPropertiesJson(  
         XblMultiplayerEventArgsHandle argsHandle,  
         const char** properties  
)  
```  
  
### Parameters  
  
*argsHandle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerEventArgsHandle](../handles/xblmultiplayereventargshandle.md)  
  
The event arguments handle for the multiplayer event.  
  
*properties* &nbsp;&nbsp;\_Out\_  
Type: char**  
  
A pointer to a JSON string, depending on the multiplayer event: <br />`XblMultiplayerEventType::MemberPropertyChanged` - The JSON string of the member property that changed.  <br />`XblMultiplayerEventType::SessionPropertyChanged` - The JSON string of the session property that changed.  <br />The memory for the pointer remains valid for the life of the `XblMultiplayerEventArgsHandle` object, until the handle is closed.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
Call this function to get more information about multiplayer events returned by [xblMultiplayerManagerDoWork](xblmultiplayermanagerdowork.md) for which the `EventType` member of the [XblMultiplayerEvent](../structs/xblmultiplayerevent.md) for a multiplayer event is set to either `XblMultiplayerEventType::MemberPropertyChanged` or `XblMultiplayerEventType::SessionPropertyChanged`. <br />The event arguments handle for a multiplayer event can be retrieved from the `EventArgsHandle` member of the [XblMultiplayerEvent](../structs/xblmultiplayerevent.md) structure for that multiplayer event.  <br />For more information about multiplayer events, see [Multiplayer Manager API overview](../../../../../services/multiplayer/mpm/concepts/live-multiplayer-manager-api-overview.md).
  
## Requirements  
  
**Header:** multiplayer_manager_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_manager_c](../multiplayer_manager_c_members.md)  
[XblMultiplayerEventArgsFindMatchCompleted](xblmultiplayereventargsfindmatchcompleted.md)  
[XblMultiplayerEventArgsMember](xblmultiplayereventargsmember.md)  
[XblMultiplayerEventArgsMembers](xblmultiplayereventargsmembers.md)  
[XblMultiplayerEventArgsMembersCount](xblmultiplayereventargsmemberscount.md)  
[XblMultiplayerEventArgsPerformQosMeasurements](xblmultiplayereventargsperformqosmeasurements.md)  
[XblMultiplayerEventArgsXuid](xblmultiplayereventargsxuid.md)  
[XblMultiplayerEventType](../enums/xblmultiplayereventtype.md)
  
  
