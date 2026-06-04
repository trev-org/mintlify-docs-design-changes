---
author: XBL
title: "real_time_activity_c (contents)"
description: Real Time Activity C API
kindex: real_time_activity_c
ms.author: tculotta
ms.topic: navigation
security: public
edited: 00/00/0000
applies-to: pc-gdk
---

# real_time_activity_c  

  
## Functions  

| Function | Description |  
| --- | --- |  
| [XblRealTimeActivityAddConnectionStateChangeHandler](functions/xblrealtimeactivityaddconnectionstatechangehandler.md) | Registers a handler function to receive a notification that is sent when the client service loses or gains connectivity to the real time activity service. |  
| [XblRealTimeActivityAddResyncHandler](functions/xblrealtimeactivityaddresynchandler.md) | Registers a handler function to receive a notification that is sent when there is a resync message from the real time activity service. |  
| [XblRealTimeActivityConnectionStateChangeHandler](functions/xblrealtimeactivityconnectionstatechangehandler.md) | Handler function for when the client service loses or gains connectivity to the real time activity service. |  
| [XblRealTimeActivityRemoveConnectionStateChangeHandler](functions/xblrealtimeactivityremoveconnectionstatechangehandler.md) | Unregisters an event handler for real time activity connectivity state changes. |  
| [XblRealTimeActivityRemoveResyncHandler](functions/xblrealtimeactivityremoveresynchandler.md) | Unregisters an event handler for real time activity resync notifications. |  
| [XblRealTimeActivityResyncHandler](functions/xblrealtimeactivityresynchandler.md) | Handler function for when there is a resync message from the real time activity service. |  
| [XblRealTimeActivitySubscriptionErrorHandler](functions/xblrealtimeactivitysubscriptionerrorhandler.md) | Handler function for when there is an error in the real time activity service. |  
  
## Handles  

| Handle | Description |  
| --- | --- |  
| [XblRealTimeActivitySubscriptionHandle](handles/xblrealtimeactivitysubscriptionhandle.md) | Subscription handle.|  
  
## Enumerations  

| Enumeration | Description |  
| --- | --- |  
| [XblRealTimeActivityConnectionState](enums/xblrealtimeactivityconnectionstate.md) | Enumeration for the possible connection states of the connection to the real-time activity service.|  
| [XblRealTimeActivitySubscriptionState](enums/xblrealtimeactivitysubscriptionstate.md) | Enumeration for the possible states of a statistic subscription request to the real-time activity service.|  
