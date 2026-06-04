---
author: AlexYatskov
description: "CreateDispatcher API reference (v1)."
edited: "03/06/2025"
kindex: "CreateDispatcher (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInput::CreateDispatcher (v1)"
---

# IGameInput::CreateDispatcher (v1)

Creates a dispatcher for manually scheduling GameInput background work.

## Syntax

```cpp
HRESULT CreateDispatcher(
    IGameInputDispatcher** dispatcher
);
```

### Parameters

*dispatcher* &nbsp;&nbsp;\_COM\_Outptr\_\
Type: IGameInputDispatcher**

The created dispatcher which will be used to handle background work.

### Return value

Type: HRESULT

Function result.

## Remarks

Making a reference to the [IGameInputDispatcher](../../IGameInputDispatcher/igameinputdispatcher-v1.md) switches GameInput to "manual dispatch" mode. Releasing all references to the [IGameInputDispatcher](../../IGameInputDispatcher/igameinputdispatcher-v1.md) object returns GameInput to "automatic dispatch" mode. [IGameInputDispatcher](../../IGameInputDispatcher/igameinputdispatcher-v1.md) is its own interface which you can use to dispatch events and open wait handles.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../../input/overviews/input-overview.md)
[IGameInput](../igameinput-v1.md)
[IGameInputDispatcher](../../IGameInputDispatcher/igameinputdispatcher-v1.md)
[IGameInputDispatcher::Dispatch](../../IGameInputDispatcher/methods/igameinputdispatcher_dispatch-v1.md)
[IGameInputDispatcher::OpenWaitHandle](../../IGameInputDispatcher/methods/igameinputdispatcher_openwaithandle-v1.md)
