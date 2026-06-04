---
author: annieabraham24
title: "XGameUiUiCallbacks"
description: " Struct containing pointers to dev-defined UI callbacks."
kindex: XGameUiUiCallbacks
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiUiCallbacks  

 Struct containing pointers to dev-defined UI callbacks.

## Syntax  
  
```cpp
struct XGameUiUiCallbacks {
    void* context;
    XGameUiShowPlayerProfileCardUiCallback* showPlayerProfileCardCallback;
    XGameUiShowPlayerPickerUiCallback* showPlayerPickerCallback;
    XGameUiShowSendGameInviteUiCallback* showSendGameInviteCallback;
    XGameUiShowAchievementsUiCallback* showAchievementsCallback;
    XGameUiShowMultiplayerActivityGameInviteUiCallback* showMultiplayerActivityGameInviteCallback;
    XGameUiShowMessageDialogUiCallback* showMessageDialogCallback;
    XGameUiShowErrorDialogUiCallback* showErrorDialogCallback;
    XGameUiShowTextEntryUiCallback* showTextEntryCallback;
};
```

### Parameters

*showPlayerProfileCardCallback*  
Type: XGameUiShowPlayerProfileCardUiCallback*
  
Handler for XGameUiShowPlayerProfileCardAsync, or null for system UI.

*showPlayerPickerCallback*  
Type: XGameUiShowPlayerPickerUiCallback*
  
Handler for XGameUiShowPlayerPickerAsync, or null for system UI.

*showSendGameInviteCallback*  
Type: XGameUiShowSendGameInviteUiCallback*
  
Handler for XGameUiShowSendGameInviteAsync, or null for system UI.

*showAchievementsCallback*  
Type: XGameUiShowAchievementsUiCallback*
  
Handler for XGameUiShowAchievementsAsync, or null for system UI.

*showMultiplayerActivityGameInviteCallback*  
Type: XGameUiShowMultiplayerActivityGameInviteUiCallback*
  
Handler for XGameUiShowMultiplayerActivityGameInviteAsync, or null for system UI.

*showMessageDialogCallback*  
Type: XGameUiShowMessageDialogUiCallback*
  
Handler for XGameUiShowMessageDialogAsync, or null for system UI.

*showErrorDialogCallback*  
Type: XGameUiShowErrorDialogUiCallback*
  
Handler for XGameUiShowErrorDialogAsync, or null for system UI.

*showTextEntryCallback*  
Type: XGameUiShowTextEntryUiCallback*
  
Handler for XGameUiShowTextEntryAsync, or null for system UI.

## Remarks

This struct is passed to XGameUiSetUiCallbacks. Any callback fields that are non-zero will be used in place of the existing system UI for the corresponding XGameUi API. The developer can include a context pointer for each callback that will be passed into the callback.

## Requirements  
  
**Header:** XGameUi.h
  
**Supported platforms:** Supported only on Steam Deck

## See also

[XGameUI](../xgameui_members.md)
[XGameUiSetUiCallbacks](../functions/xgameuisetuicallbacks.md)
