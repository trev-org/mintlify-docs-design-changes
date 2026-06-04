---
author: mgudgin
title: "XGameUiShowStateShareAsync"
description: "Shows UI for sharing a game state with other players"
kindex: XGameUiShowStateShareAsync
ms.author: mgudgin
ms.topic: reference
edited: 00/00/0000
ms.date: '05/09/2024'
permissioned-type: public
---

# XGameUiShowStateShareAsync  

*Note that this method is a preview in the June 2024 GDK.*  

This method shows a UI populated with metadata related to the state being shared and UX affordances for sharing the state either as a web link or a direct invite. 

## Syntax  

```cpp
HRESULT XGameUiShowStateShareAsync(
  XAsyncBlock * async,
  XUserHandle requestingUser,
  const char * linkToken
)
```

### Parameters  

*async* &nbsp;&nbsp;\_In\_ 
Type: XAsyncBlock *  

A pointer to the [XAsyncBlock](../../xasync/structs/xasyncblock.md) that is passed to [XAsyncRun](../../xasync/functions/xasyncrun.md).  

*requestingUser* &nbsp;&nbsp;\_In\_  
Type: XUserHandle  

A handle to the user that is sending the invites.

*linkToken* &nbsp;&nbsp;\_In\_z\_  
Type: const char *

A linkToken that references the state to be shared.

## Remarks

To share a state with UI, after creating a state and a corresponding link, the title should call the [XGameUiShowStateShareAsync](xgameuishowstateshareasync.md) API passing along the requesting user and the link token acquired as part of creating the link for the state. Using PlayFab is one way to create states and links, reach out to your Microsoft Representative for details.

## Requirements  

**Header:** XGameUI.h  

**Library:** xgameruntime.lib  

**Supported platforms:** Windows, Steam Deck, Xbox One family consoles and Xbox Series consoles  

## See also  

[XGameUI members](../xgameui_members.md)  
