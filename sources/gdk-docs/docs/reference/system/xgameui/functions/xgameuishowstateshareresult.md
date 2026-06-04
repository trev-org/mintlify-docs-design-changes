---
author: mgudgin
title: "XGameUiShowStateShareResult"
description: "Get the results from a XGameUiShowStateShareAsync call."
kindex: XGameUiShowStateShareResult
ms.author: mgudgin
ms.topic: reference
edited: 00/00/0000
ms.date: '05/09/2024'
permissioned-type: public
---

# XGameUiShowStateShareResult  

*Note that this method is a preview in the June 2024 GDK.*  

Gets the results from a [XGameUiShowStateShareAsync](xgameuishowstateshareasync.md) call.

## Syntax  

```cpp
HRESULT XGameUiShowStateShareResult(
  XAsyncBlock * async
)
```

### Parameters  

*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock *  

A pointer to the [XAsyncBlock](../../xasync/structs/xasyncblock.md) that is passed to [XAsyncRun](../../xasync/functions/xasyncrun.md).  

## Remarks

Failures will likely will only happen during development and usually indicate an invalid user was passed in or that the provided parameters did not refer to an accessible state.

## Requirements  

**Header:** XGameUI.h  

**Library:** xgameruntime.lib  

**Supported platforms:** Windows, Steam Deck, Xbox One family consoles and Xbox Series consoles  

## See also  

[XGameUI members](../xgameui_members.md)  