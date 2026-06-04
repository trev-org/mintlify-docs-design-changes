---
author: M-Stahl
title: "XGameStreamingUnregisterClientPropertiesChanged"
description: "Unregisters a previously registered XGameStreamingClientPropertiesChangedCallback."
kindex: XGameStreamingUnregisterClientPropertiesChanged
ms.topic: reference
edited: 02/10/2020
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameStreamingUnregisterClientPropertiesChanged  

Unregisters a previously registered [XGameStreamingClientPropertiesChangedCallback](xgamestreamingclientpropertieschangedcallback.md).

## Syntax  
  
```cpp
bool XGameStreamingUnregisterClientPropertiesChanged(
         XGameStreamingClientId client,
         XTaskQueueRegistrationToken token,
         bool wait
)
```

### Parameters

*client* &nbsp;&nbsp;\_In\_  
Type: XGameStreamingClientId  

The streaming client to unsubscribe to property change notifications from. This ID is typically obtained as a parameter to the [XGameStreamingConnectionStateChangedCallback](xgamestreamingconnectionstatechangedcallback.md).

*token* &nbsp;&nbsp;\_In\  
Type: XTaskQueueRegistrationToken  

The registration token provided by [XGameStreamingRegisterClientPropertiesChanged](xgamestreamingregisterclientpropertieschanged.md) for the callback which should no longer be fired.

*wait* &nbsp;&nbsp;\_In\_  
Type: bool  

If `wait` is set to true, `XGameStreamingUnregisterClientPropertiesChanged` will not return until both the registration has been revoked and any outstanding callbacks have completed.

If `wait` is set to false, `XGameStreamingUnregisterClientPropertiesChanged` will return as soon as the registration has been revoked. Although no new callbacks will be delivered, an in progress callback may still be executing when the function returns.

### Return value  
Type: bool  

Returns true if the unregistration was successful, false if it did not succeed.

## Remarks

> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  

This API allows the game to stop receiving their `XGameStreamingClientPropertiesChangedCallback` whenever a [XGameStreamingClientProperty](../enums/xgamestreamingclientproperty.md), like stream physical dimensions, changes.

## Example

```cpp
    // On client disconnection remove from list of client and do per client cleanup
    void OnClientDisconnected(XGameStreamingClientId client)
    {
        StreamingClient connectedClient;
        GetConnectedClient(client, &connectedClient);

        // unregister the client property changed handler
        XGameStreamingUnregisterClientPropertiesChanged(client, connectedClient.propertyChangeToken, true);
        std::erase(std::remove(m_streamingClients.begin(), m_streamingClients.end(), connectedClient), m_streamingClients.end());
    }

```

## Requirements  

**Header:** xgamestreaming.h

**Library:** xgameruntime.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  

## See also
[XGameStreamingClientProperty](../enums/xgamestreamingclientproperty.md)
[XGameStreamingClientPropertiesChangedCallback](xgamestreamingclientpropertieschangedcallback.md)
[XGameStreamingRegisterClientPropertiesChanged](xgamestreamingregisterclientpropertieschanged.md)
[XGameStreaming](../xgamestreaming_members.md)
