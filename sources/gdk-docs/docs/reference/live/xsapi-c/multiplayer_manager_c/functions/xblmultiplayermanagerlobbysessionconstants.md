---
author: joannaleecy
title: "XblMultiplayerManagerLobbySessionConstants"
description: "Retrieves the session constants associated with the lobby session."
kindex: XblMultiplayerManagerLobbySessionConstants
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerManagerLobbySessionConstants  

Retrieves the session constants associated with the lobby session.  

## Syntax  
  
```cpp
const XblMultiplayerSessionConstants* XblMultiplayerManagerLobbySessionConstants(  
)  
```  
  
### Parameters  
  
  
### Return value  
Type: const XblMultiplayerSessionConstants*
  
A pointer to the session constants for the lobby session, or null if a lobby session doesn't exist. The memory for the returned pointer remains valid until the next call to [XblMultiplayerManagerDoWork](xblmultiplayermanagerdowork.md).
  
## Remarks  
  
This function retrieves a pointer to the session constants for a lobby session, if the lobby session exists in Multiplayer Manager. The session constants contain constants, such as session visibility and session capabilities, defined by the session template used for the lobby session. Unlike session properties, session constants can only be set through the session template, and are set at the time the lobby session is created. For more information about session constants, see [Multiplayer Session advanced topics](../../../../../services/multiplayer/mpsd/concepts/live-mpsd-details.md).
  
## Requirements  
  
**Header:** multiplayer_manager_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_manager_c](../multiplayer_manager_c_members.md)  
[XblMultiplayerManagerLobbySessionPropertiesJson](xblmultiplayermanagerlobbysessionpropertiesjson.md)  
[XblMultiplayerManagerLobbySessionSessionReference](xblmultiplayermanagerlobbysessionsessionreference.md)
  
  
