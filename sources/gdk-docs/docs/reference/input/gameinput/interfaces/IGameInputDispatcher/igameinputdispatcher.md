---
author: AlexYatskov
description: llows you to take manual control of scheduling the background work run by the GameInput API.
edited: 03/06/2025
kindex: IGameInputDispatcher
ms.date: 10/21/2025
ms.topic: article
permissioned-type: public
title: IGameInputDispatcher (Interface contents)
---

# IGameInputDispatcher

Allows you to take manual control of scheduling the background work run by the GameInput API.

## Syntax

```cpp
class IGameInputDispatcher : public IUnknown
```

## Methods

| Method                                                              | Description                                                                             |
| ---                                                                 | ---                                                                                     |
| [Dispatch](methods/igameinputdispatcher_dispatch.md)             | Processes tasks in the dispatcher's queue.                                              |
| [OpenWaitHandle](methods/igameinputdispatcher_openwaithandle.md) | Provides a wait handle that indicates when tasks are available in the dispatcher queue. |

## Remarks

Making a reference to the `IGameInputDispatcher` switches GameInput to "manual dispatch" mode, and releasing all references to the `IGameInputDispatcher` object returns it to "automatic dispatch" mode.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[Input API Overview](../../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |