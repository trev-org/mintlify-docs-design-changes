---
author: annieabraham24
title: "XGameUiPlayerPickerInfo"
description: "Struct encapsulating user information to be used by the developer’s custom player picker UI."
kindex: XGameUiPlayerPickerInfo
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiPlayerPickerInfo  

Struct encapsulating user information to be used by the developer’s custom player picker UI.

## Syntax  
  
```cpp
struct XGameUiPlayerPickerInfo {
    XUserHandle requestingUser;
    const char* promptText;
    uint32_t selectFromPlayersCount;
    const uint64_t* selectFromPlayers;
    uint32_t preSelectedPlayersCount;
    const uint64_t* preSelectedPlayers;
    uint32_t minSelectionCount;
    uint32_t maxSelectionCount;
};
```

## Members

*requestingUser*  
Type: XUserHandle
  
Handle of the user that requested the UI.

*promptText*  
Type: const char*
  
The prompt display text.

*selectFromPlayersCount*  
Type: uint32_t
  
The number of players that the caller can select from.

*selectFromPlayers*  
Type: const uint64_t*
  
A pointer to a list of player IDs that the caller can select from.

*preSelectedPlayersCount*  
Type: uint32_t
  
The number of players that are pre-selected when the UI is presented.

*preSelectedPlayers*  
Type: const uint64_t*
  
A pointer to a list of player IDs that are pre-selected when the UI is presented.

*minSelectionCount*  
Type: uint32_t
  
The minimum number of people the caller must select.

*maxSelectionCount*  
Type: uint32_t
  
The maximum number of people the caller can select.

## Requirements  
  
**Header:** XGameUi.h
  
**Supported platforms:** Supported only on Steam Deck

## See also

[XGameUI](../xgameui_members.md)
[XGameUiShowPlayerPickerUiCallback](../functions/xgameuishowplayerpickeruicallback.md)
