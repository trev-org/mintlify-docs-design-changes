---
author: M-Stahl
title: "XGameStreamingUnregisterConnectionStateChanged"
description: "Unregisters a previously registered XGameStreamingConnectionStateChangedCallback."
kindex: XGameStreamingUnregisterConnectionStateChanged
ms.topic: reference
edited: 02/10/2020
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameStreamingUnregisterConnectionStateChanged

Unregisters a previously registered [XGameStreamingConnectionStateChangedCallback](xgamestreamingconnectionstatechangedcallback.md).


## Syntax

```cpp
bool XGameStreamingUnregisterConnectionStateChanged(
         XTaskQueueRegistrationToken token,
         bool wait
)
```

### Parameters

*token* &nbsp;&nbsp;\_In\_
Type: XTaskQueueRegistrationToken

Token that corresponded to the callback registration done via [XGameStreamingRegisterConnectionStateChanged](xgamestreamingregisterconnectionstatechanged.md).

*wait* &nbsp;&nbsp;  
Type: bool  

If `wait` is set to true, `XGameStreamingUnregisterConnectionStateChanged` will not return until both the registration has been revoked and any outstanding callbacks have completed.

If `wait` is set to false, `XGameStreamingUnregisterConnectionStateChanged` will return as soon as the registration has been revoked. Although no new callbacks will be delivered, an in progress callback may still be executing when the function returns.

### Return value
Type: bool

Returns true if the unregistration was successful, false if it did not succeed.

## Remarks

> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).

This API can be used to stop listening to streaming client device's connection changes.  

This should be done when the game is either going to only do a broad check of whether any clients are streaming by utilizing [XGameStreamingIsStreaming](xgamestreamingisstreaming.md), or is no longer going to do any optimizing of the experience due to streaming clients.

## Requirements

**Header:** xgamestreaming.h

**Library:** xgameruntime.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also  
[XGameStreamingConnectionStateChangedCallback](xgamestreamingconnectionstatechangedcallback.md)  
[XGameStreamingRegisterConnectionStateChanged](xgamestreamingregisterconnectionstatechanged.md)  
[XGameStreaming](../xgamestreaming_members.md)
