---
author: AlexYatskov
description: "llows you to take manual control of scheduling the background work run by the GameInput API (v1)."
edited: "03/06/2025"
kindex: "IGameInputDispatcher (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: article
permissioned-type: public
title: "IGameInputDispatcher (Interface contents) (v1)"
---

# IGameInputDispatcher (v1)

Allows you to take manual control of scheduling the background work run by the GameInput API.

## Syntax

```cpp
class IGameInputDispatcher : public IUnknown
```

## Methods

| Method                                                              | Description                                                                             |
| ---                                                                 | ---                                                                                     |
| [Dispatch](methods/igameinputdispatcher_dispatch-v1.md)             | Processes tasks in the dispatcher's queue.                                              |
| [OpenWaitHandle](methods/igameinputdispatcher_openwaithandle-v1.md) | Provides a wait handle that indicates when tasks are available in the dispatcher queue. |

## Remarks

Making a reference to the `IGameInputDispatcher` switches GameInput to "manual dispatch" mode, and releasing all references to the `IGameInputDispatcher` object returns it to "automatic dispatch" mode.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../input/overviews/input-overview.md)
[GameInput](../../gameinput_members-v1.md)
