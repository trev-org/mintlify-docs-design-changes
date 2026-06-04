---
author: AlexYatskov
description: Executes work in the dispatcher's queue.
edited: 03/06/2025
kindex: Dispatch
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: Dispatch
---

# IGameInputDispatcher::Dispatch

Executes work in the dispatcher's queue.

## Syntax

```cpp
bool Dispatch(
    uint64_t quotaInMicroseconds
);
```

### Parameters

*quotaInMicroseconds* &nbsp;&nbsp;\_In\_\
Type: uint64_t

The amount of time that the dispatcher has to execute tasks. The dispatcher will attempt to keep processing time within the provided duration, but this is not a guaranteed limit.

### Return value

Type: bool

Returns true if  work items are pending in the dispatcher's queue. Returns false if no work items remain. Returns at the time that the queue is flushed.

## Remarks

The `IGameInputDispatcher::Dispatch` executes work in the dispatcher's queue. This method flushes at least one item from the queue even if the `quotaInMicroseconds` parameter is set to zero. You can call with a quota time of zero to execute a single item and then decide whether to dispatch more items depending on the time elapsed. For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
  
[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)    
[IGameInputDispatcher](../igameinputdispatcher.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |