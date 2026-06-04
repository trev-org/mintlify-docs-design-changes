---
author: M-Stahl
title: "XGameEventWrite"
description: "Write an in-game event that optionally includes \"dimensions\" and \"measurement\" data fields."
kindex: XGameEventWrite
ms.topic: reference
edited: 01/17/2024
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameEventWrite  

Write an in-game event that optionally includes "dimensions" and "measurement" data fields.   

## Syntax  
  
```cpp
HRESULT XGameEventWrite(  
         XUserHandle user,  
         const char *serviceConfigId,  
         const char *playSessionId,  
         const char* eventName,  
         const char* dimensionsJson,  
         const char* measurementsJson  
)  
```  
  
### Parameters  
  
*user* &nbsp;&nbsp;\_In\_  
Type: XUserHandle  
  
The User handle to send the event on behalf of.  
  
**serviceConfigId* &nbsp;&nbsp;\_In\_z\_  
Type: char  
  
The Xbox Live service config ID (SCID) for this title.    
  
**playSessionId* &nbsp;&nbsp;\_In\_z\_  
Type: char  
  
Play Session ID.  This is a unique GUID created by the game at the start of each game session to track the set of events sent in a single play session.    
  
*eventName* &nbsp;&nbsp;\_In\_z\_  
Type: char*  
  
Event name.  
  
*dimensionsJson* &nbsp;&nbsp;\_In\_opt\_z\_  
Type: char*  
  
Dimensions data fields in JSON format.  
  
*measurementsJson* &nbsp;&nbsp;\_In\_opt\_z\_  
Type: char*  
  
Measurement data fields in JSON format.  
  
  
### Return value
Type: HRESULT
  
Returns S_OK if successful; otherwise, returns an error code.  For a list of error codes, see [Error Codes](../../../errorcodes.md).    
  
## Remarks  
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
Dimensions include event fields with a finite number of defined numeric or string values. Examples of dimensions: map id, difficulty level, character or weapon class, game mode, boolean settings, etc. Measurements include event fields that represent scalar numeric metrics. Examples of measurements: score, time, counters, position, etc. Example: for an in-game event that tracks the highest match score for a difficulty level: The difficulty level should be included in dimensions, and the score should be included in measurements. The name of the event, and the names of the event fields in both dimensions and measurements, must match the names declared in the title's service configuration. The names are case insensitive. If the API writes an event with a name that does not match a name in the service configuration, the service drops the event with no notification.  
 
> [!NOTE]
> Measurements can only have numerical values, while Dimensions can have a wider variety of types. If preferred, the *dimensionsJson* field can be used exclusively for writing events. 
  
## Requirements  
  
**Header:** XGameEvent.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XGameEvent](../xgameevent_members.md)  

  
  
