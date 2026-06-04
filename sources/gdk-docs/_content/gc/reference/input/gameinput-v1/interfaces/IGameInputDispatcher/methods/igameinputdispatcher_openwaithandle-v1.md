---
author: AlexYatskov
description: "Returns a wait handle that signals when work is available in the dispatcher queue (v1)."
edited: "03/06/2025"
kindex: "OpenWaitHandle (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "OpenWaitHandle (v1)"
---

# IGameInputDispatcher::OpenWaitHandle (v1)

Returns a wait handle that signals when work is available in the dispatcher queue.

## Syntax

```cpp
HRESULT OpenWaitHandle(
    HANDLE* waitHandle
);
```

### Parameters

*waitHandle* &nbsp;&nbsp;\_Outptr\_result\_nullonfailure\_\
Type: HANDLE*

The wait handle that is returned.

### Return value

Type: HRESULT

Function result

### Remarks

The `IGameInputDispatcher::OpenWaitHandle` returns a wait handle. This method signals when work is available in the dispatcher queue. Call the  [CloseHandle](/windows/desktop/api/handleapi/nf-handleapi-closehandle) function on the handle when it is no longer needed. For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[IGameInputDispatcher](../igameinputdispatcher-v1.md)
