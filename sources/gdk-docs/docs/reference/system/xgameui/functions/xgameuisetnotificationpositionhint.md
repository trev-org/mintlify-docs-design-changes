---
author: M-Stahl
title: "XGameUiSetNotificationPositionHint"
description: "Sets the preferred position for toast notifications to be shown on the current title."
kindex: XGameUiSetNotificationPositionHint
ms.author: aarocar
ms.topic: reference
edited: 03/24/2022
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameUiSetNotificationPositionHint  

Sets the preferred position for toast notifications to be shown on the current title.

## Syntax  

```cpp
HRESULT XGameUiSetNotificationPositionHint(  
         XGameUiNotificationPositionHint position  
)  
```  

### Parameters  
  
*position* &nbsp;&nbsp;\_In\_  
Type: [XGameUiNotificationPositionHint](../enums/xgameuinotificationpositionhint.md)  

Indicates the preferred position to display toast notifications on the current title.  

### Return value

Type: HRESULT
  
## Remarks  
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
The notification position is a hint to the operating system on where to display toast notifications. In some cases, the system may choose to ignore the setting if the current UI cannot support displaying notifications in that location. By default on Xbox, toast notifications are shown at the bottom center of the screen.

This API exists on Windows, however it currently has no effect on achievement and other toast notifications.
  
## Requirements  
  
**Header:** XGameUI.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameUI](../xgameui_members.md)  
[XGameUiNotificationPositionHint](../enums/xgameuinotificationpositionhint.md)  
  