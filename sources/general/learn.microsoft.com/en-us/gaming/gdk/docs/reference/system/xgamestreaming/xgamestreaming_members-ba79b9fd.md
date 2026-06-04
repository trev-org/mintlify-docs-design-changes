# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/xgamestreaming_members?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/xgamestreaming_members?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# XGameStreaming

Feedback

Summarize this article for me

## Initialization

APIs needed to initialize the game streaming capabilities.

Expand table

| Function | Description |
| --- | --- |
| [XGameStreamingInitialize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminginitialize?view=gdk-2604) | Initalizes the Game Streaming APIs. |
| [XGameStreamingUninitialize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminguninitialize?view=gdk-2604) | Uninitializes the Game Streaming APIs. |

## Client Properties

APIs to get properties of the streaming devices or their game stream

### Functions

Expand table

| Function | Description |
| --- | --- |
| [XGameStreamingClientPropertiesChangedCallback](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingclientpropertieschangedcallback?view=gdk-2604) | Notification when a streaming device's properties have changed. |
| [XGameStreamingGetClientIPAddress](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetclientipaddress?view=gdk-2604) | **Deprecated.** Gets the IP address of the streaming client. Use XSTS token claims instead. |
| [XGameStreamingGetDisplayDetails](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetdisplaydetails?view=gdk-2604) | Gets the display details of the streaming client. |
| [XGameStreamingGetSessionId](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetsessionid?view=gdk-2604) | Gets the session id of the streaming client. |
| [XGameStreamingGetStreamPhysicalDimensions](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetstreamphysicaldimensions?view=gdk-2604) | Gets the physical size of the video stream as it is currently being rendered on the streaming client. |
| [XGameStreamingGetTouchBundleVersion](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggettouchbundleversion?view=gdk-2604) | Gets the version of the touch adaptation bundle that is currently being utilized on the specified device. |
| [XGameStreamingGetTouchBundleVersionNameSize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggettouchbundleversionnamesize?view=gdk-2604) | Gets the size of the version name specified in the touch adaptation bundle on the specfied device. |
| [XGameStreamingIsTouchInputEnabled](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingistouchinputenabled?view=gdk-2604) | Check if a client will send touch inputs to the game. |
| [XGameStreamingRegisterClientPropertiesChanged](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingregisterclientpropertieschanged?view=gdk-2604) | Registers a callback to be invoked when any of the streaming client device's properties change. |
| [XGameStreamingUnregisterClientPropertiesChanged](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingunregisterclientpropertieschanged?view=gdk-2604) | Unregisters a previously registered XGameStreamingClientPropertiesChangedCallback. |

### Enumerations

Expand table

| Enumeration | Description |
| --- | --- |
| [XGameStreamingClientProperty](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/enums/xgamestreamingclientproperty?view=gdk-2604) | Properties that can be queried for about the client streaming device. |
| [XGameStreamingVideoFlags](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/enums/xgamestreamingvideoflags?view=gdk-2604) | Available video features that may be supported by the client streaming device. |

### Structures

Expand table

| Structures | Description |
| --- | --- |
| [XGameStreamingDisplayDetails](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/structs/xgamestreamingdisplaydetails?view=gdk-2604) | Details about the display of the streaming client device. |

## Connection State

APIs needed to manage the connection state of streaming client devices.

### Functions

Expand table

| Function | Description |
| --- | --- |
| [XGameStreamingConnectionStateChangedCallback](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingconnectionstatechangedcallback?view=gdk-2604) | A callback function to be invoked whenever the state of a connected streaming client changes. |
| [XGameStreamingGetClientCount](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetclientcount?view=gdk-2604) | Number of streaming devices currently connected. |
| [XGameStreamingGetClients](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetclients?view=gdk-2604) | Gets the identifiers of each currently connected client. |
| [XGameStreamingGetConnectionState](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetconnectionstate?view=gdk-2604) | Gets the current connection state for specified device. |
| [XGameStreamingIsStreaming](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingisstreaming?view=gdk-2604) | Determine if the game is currently being streamed. |
| [XGameStreamingRegisterConnectionStateChanged](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingregisterconnectionstatechanged?view=gdk-2604) | Registers a callback to be invoked when a streaming client device's connection state changes. |
| [XGameStreamingUnregisterConnectionStateChanged](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingunregisterconnectionstatechanged?view=gdk-2604) | Unregisters a previously registered XGameStreamingConnectionStateChangedCallback. |

### Enumerations

Expand table

| Enumeration | Description |
| --- | --- |
| [XGameStreamingConnectionState](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/enums/xgamestreamingconnectionstate?view=gdk-2604) | Connection states for a streaming client device. |

## Latency

APIs for adapting gameplay for streaming latency.

### Functions

Expand table

| Function | Description |
| --- | --- |
| [XGameStreamingGetStreamAddedLatency](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetstreamaddedlatency?view=gdk-2604) | Gets the recent average of the streaming related latency. |
| [XGameStreamingGetLastFrameDisplayed](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetlastframedisplayed?view=gdk-2604) | **Deprecated.** Gets the frame pipeline token for the frame that was most recently displayed on the streaming client's screen. |
| [XGameStreamingGetAssociatedFrame](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetassociatedframe?view=gdk-2604) | **Deprecated.** Gets the frame pipeline token from a specific input reading. |

## Server Location

APIs to access the location that the game is being streamed from.

### Functions

Expand table

| Function | Description |
| --- | --- |
| [XGameStreamingGetServerLocationName](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetserverlocationname?view=gdk-2604) | Gets the streaming server's data center location. |
| [XGameStreamingGetServerLocationNameSize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetserverlocationnamesize?view=gdk-2604) | Gets the size of the name of the location of the streaming server's data center |

## Touch Adaptation

APIs to manage the touch controller layouts that will be exposed to appropriate streaming clients.

### Functions

Expand table

| Function | Description |
| --- | --- |
| [XGameStreamingGetGamepadPhysicality](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetgamepadphysicality?view=gdk-2604) | Gets the input physicality mapping from a specific gamepad reading. |
| [XGameStreamingHideTouchControls](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminghidetouchcontrols?view=gdk-2604) | Request that all connected streaming client devices hide the touch layout if they are visible. |
| [XGameStreamingHideTouchControlsOnClient](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminghidetouchcontrolsonclient?view=gdk-2604) | Request that a specified streaming client device hide the touch layout if it is visible. |
| [XGameStreamingShowTouchControlLayout](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingshowtouchcontrollayout?view=gdk-2604) | Request that all connected streaming client devices show a specified touch layout. |
| [XGameStreamingShowTouchControlLayoutOnClient](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingshowtouchcontrollayoutonclient?view=gdk-2604) | Request a specified connected streaming client device to show a specified touch layout. |
| [XGameStreamingShowTouchControlsWithStateUpdate](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingshowtouchcontrolswithstateupdate?view=gdk-2604) | Request that all connected streaming client devices update their touch control state and then show a specified touch layout. |
| [XGameStreamingShowTouchControlsWithStateUpdateOnClient](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingshowtouchcontrolswithstateupdateonclient?view=gdk-2604) | Request that a specified streaming client devices update their touch control state and then show a specified touch layout. |
| [XGameStreamingUpdateTouchControlsState](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingupdatetouchcontrolsstate?view=gdk-2604) | Update touch controls state on all connected streaming client devices. |
| [XGameStreamingUpdateTouchControlsStateOnClient](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingupdatetouchcontrolsstateonclient?view=gdk-2604) | Update touch controls state on a specified streaming client device. |

### Enumerations

Expand table

| Enumeration | Description |
| --- | --- |
| [XGameStreamingGamepadPhysicality](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/enums/xgamestreaminggamepadphysicality?view=gdk-2604) | Physicality mapping for all the buttons, sticks, and triggers on a standard Xbox Wireless Controller. For any given button/stick/trigger, physicality can be unknown, physical, virtual, or both. |
| [XGameStreamingTouchControlsStateOperationKind](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/enums/xgamestreamingtouchcontrolsstateoperationkind?view=gdk-2604) | Operations that can be taken when updating touch control layout state. |
| [XGameStreamingTouchControlsStateValueKind](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/enums/xgamestreamingtouchcontrolsstatevaluekind?view=gdk-2604) | Specifies the type of the state that is associated with the touch layouts. |

### Structures

Expand table

| Structures | Description |
| --- | --- |
| [XGameStreamingTouchControlsStateOperation](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/structs/xgamestreamingtouchcontrolsstateoperation?view=gdk-2604) | Specifies the operation, path to the specific variable and value to be applied. |
| [XGameStreamingTouchControlsStateValue](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/structs/xgamestreamingtouchcontrolsstatevalue?view=gdk-2604) | Provides the type and value of a specific element of touch control state. |

## Resolution

APIs to manage the stream's resolution.

### Functions

Expand table

| Function | Description |
| --- | --- |
| [XGameStreamingSetResolution](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreamingsetresolution?view=gdk-2604) | Sets the resolution of the video stream. |

---

## Feedback

Was this page helpful?

Yes No No

Need help with this topic?

Want to try using Ask Learn to clarify or guide you through this topic?

Ask Learn Ask Learn

Suggest a fix?

---

## Additional resources

---

- Last updated on 03/25/2026