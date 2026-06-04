---
author: M-Stahl
ms.author: elomdumenyo
title: "XGameStreaming (API contents)"
description: "Game streaming APIs."
kindex: xgamestreaming, API contents
ms.topic: article
edited: 03/25/2026
applies-to: pc-gdk
ms.date: '03/25/2026'
permissioned-type: public
---

# XGameStreaming  

## Initialization

APIs needed to initialize the game streaming capabilities.

| Function | Description |
| :--- | :--- |
| [XGameStreamingInitialize](functions/xgamestreaminginitialize.md) | Initalizes the Game Streaming APIs. |
| [XGameStreamingUninitialize](functions/xgamestreaminguninitialize.md) | Uninitializes the Game Streaming APIs. |



<a id="ClientProperties"></a>  

## Client Properties

APIs to get properties of the streaming devices or their game stream

### Functions

| Function | Description |
| :--- | :--- |
| [XGameStreamingClientPropertiesChangedCallback](functions/xgamestreamingclientpropertieschangedcallback.md) | Notification when a streaming device's properties have changed. |
| [XGameStreamingGetClientIPAddress](functions/xgamestreaminggetclientipaddress.md) | **Deprecated.** Gets the IP address of the streaming client. Use XSTS token claims instead.  |
| [XGameStreamingGetDisplayDetails](functions/xgamestreaminggetdisplaydetails.md) | Gets the display details of the streaming client. |
| [XGameStreamingGetSessionId](functions/xgamestreaminggetsessionid.md) | Gets the session id of the streaming client. |
| [XGameStreamingGetStreamPhysicalDimensions](functions/xgamestreaminggetstreamphysicaldimensions.md) | Gets the physical size of the video stream as it is currently being rendered on the streaming client.  |
| [XGameStreamingGetTouchBundleVersion](functions/xgamestreaminggettouchbundleversion.md) | Gets the version of the touch adaptation bundle that is currently being utilized on the specified device.    |
| [XGameStreamingGetTouchBundleVersionNameSize](functions/xgamestreaminggettouchbundleversionnamesize.md) | Gets the size of the version name specified in the touch adaptation bundle on the specfied device.  |
| [XGameStreamingIsTouchInputEnabled](functions/xgamestreamingistouchinputenabled.md) | Check if a client will send touch inputs to the game. |
| [XGameStreamingRegisterClientPropertiesChanged](functions/xgamestreamingregisterclientpropertieschanged.md) | Registers a callback to be invoked when any of the streaming client device's properties change. |
| [XGameStreamingUnregisterClientPropertiesChanged](functions/xgamestreamingunregisterclientpropertieschanged.md) | Unregisters a previously registered XGameStreamingClientPropertiesChangedCallback. |

### Enumerations

| Enumeration | Description |
| :--- | :--- |
| [XGameStreamingClientProperty](enums/xgamestreamingclientproperty.md) | Properties that can be queried for about the client streaming device. |
| [XGameStreamingVideoFlags](enums/xgamestreamingvideoflags.md) | Available video features that may be supported by the client streaming device. |

### Structures

| Structures | Description |
| :--- | :--- |
| [XGameStreamingDisplayDetails](structs/xgamestreamingdisplaydetails.md) | Details about the display of the streaming client device. |

<a id="ConnectionState"></a>

## Connection State

APIs needed to manage the connection state of streaming client devices.

### Functions

| Function | Description |
| :--- | :--- |
| [XGameStreamingConnectionStateChangedCallback](functions/xgamestreamingconnectionstatechangedcallback.md) | A callback function to be invoked whenever the state of a connected streaming client changes. |
| [XGameStreamingGetClientCount](functions/xgamestreaminggetclientcount.md) | Number of streaming devices currently connected. |
| [XGameStreamingGetClients](functions/xgamestreaminggetclients.md) | Gets the identifiers of each currently connected client. |
| [XGameStreamingGetConnectionState](functions/xgamestreaminggetconnectionstate.md) | Gets the current connection state for specified device. |
| [XGameStreamingIsStreaming](functions/xgamestreamingisstreaming.md) | Determine if the game is currently being streamed. |
| [XGameStreamingRegisterConnectionStateChanged](functions/xgamestreamingregisterconnectionstatechanged.md) | Registers a callback to be invoked when a streaming client device's connection state changes. |
| [XGameStreamingUnregisterConnectionStateChanged](functions/xgamestreamingunregisterconnectionstatechanged.md) | Unregisters a previously registered XGameStreamingConnectionStateChangedCallback. |

### Enumerations

| Enumeration | Description |
| :--- | :--- |
| [XGameStreamingConnectionState](enums/xgamestreamingconnectionstate.md) | Connection states for a streaming client device. |

<a id="Latency"></a>

## Latency  

APIs for adapting gameplay for streaming latency.

### Functions

| Function | Description|
| :--- | :--- |
| [XGameStreamingGetStreamAddedLatency](functions/xgamestreaminggetstreamaddedlatency.md) | Gets the recent average of the streaming related latency. |
| [XGameStreamingGetLastFrameDisplayed](functions/xgamestreaminggetlastframedisplayed.md) | **Deprecated.** Gets the frame pipeline token for the frame that was most recently displayed on the streaming client's screen. |
| [XGameStreamingGetAssociatedFrame](functions/xgamestreaminggetassociatedframe.md) | **Deprecated.** Gets the frame pipeline token from a specific input reading. |


## Server Location  

APIs to access the location that the game is being streamed from.

### Functions

| Function | Description|
| :--- | :--- |
| [XGameStreamingGetServerLocationName](functions/xgamestreaminggetserverlocationname.md) | Gets the streaming server's data center location. |
| [XGameStreamingGetServerLocationNameSize](functions/xgamestreaminggetserverlocationnamesize.md) | Gets the size of the name of the location of the streaming server's data center |

<a id="TouchAdaptation"></a>

## Touch Adaptation  

APIs to manage the touch controller layouts that will be exposed to appropriate streaming clients.

### Functions

| Function | Description|
| :--- | :--- |
| [XGameStreamingGetGamepadPhysicality](functions/xgamestreaminggetgamepadphysicality.md) | Gets the input physicality mapping from a specific gamepad reading.   |
| [XGameStreamingHideTouchControls](functions/xgamestreaminghidetouchcontrols.md) | Request that all connected streaming client devices hide the touch layout if they are visible. |
| [XGameStreamingHideTouchControlsOnClient](functions/xgamestreaminghidetouchcontrolsonclient.md) | Request that a specified streaming client device hide the touch layout if it is visible. |
| [XGameStreamingShowTouchControlLayout](functions/xgamestreamingshowtouchcontrollayout.md) | Request that all connected streaming client devices show a specified touch layout. |
| [XGameStreamingShowTouchControlLayoutOnClient](functions/xgamestreamingshowtouchcontrollayoutonclient.md) | Request a specified connected streaming client device to show a specified touch layout. |
| [XGameStreamingShowTouchControlsWithStateUpdate](functions/xgamestreamingshowtouchcontrolswithstateupdate.md) | Request that all connected streaming client devices update their touch control state and then show a specified touch layout. |
| [XGameStreamingShowTouchControlsWithStateUpdateOnClient](functions/xgamestreamingshowtouchcontrolswithstateupdateonclient.md) | Request that a specified streaming client devices update their touch control state and then show a specified touch layout. |
| [XGameStreamingUpdateTouchControlsState](functions/xgamestreamingupdatetouchcontrolsstate.md) | Update touch controls state on all connected streaming client devices. |
| [XGameStreamingUpdateTouchControlsStateOnClient](functions/xgamestreamingupdatetouchcontrolsstateonclient.md) | Update touch controls state on a specified streaming client device. |

### Enumerations

| Enumeration | Description |
| :--- | :--- |
| [XGameStreamingGamepadPhysicality](enums/xgamestreaminggamepadphysicality.md) | Physicality mapping for all the buttons, sticks, and triggers on a standard Xbox Wireless Controller.  For any given button/stick/trigger, physicality can be unknown, physical, virtual, or both. |
| [XGameStreamingTouchControlsStateOperationKind](enums/xgamestreamingtouchcontrolsstateoperationkind.md)   | Operations that can be taken when updating touch control layout state. |
| [XGameStreamingTouchControlsStateValueKind](enums/xgamestreamingtouchcontrolsstatevaluekind.md) | Specifies the type of the state that is associated with the touch layouts. |

### Structures

| Structures | Description |
| :--- | :--- |
| [XGameStreamingTouchControlsStateOperation](structs/xgamestreamingtouchcontrolsstateoperation.md) | Specifies the operation, path to the specific variable and value to be applied. |
| [XGameStreamingTouchControlsStateValue](structs/xgamestreamingtouchcontrolsstatevalue.md) | Provides the type and value of a specific element of touch control state. |

## Resolution

APIs to manage the stream's resolution.

### Functions

| Function | Description|
| :--- | :--- |
| [XGameStreamingSetResolution](functions/xgamestreamingsetresolution.md) | Sets the resolution of the video stream.   |