---
author: AlexYatskov
description: CreateDispatcher API reference.
edited: 03/06/2025
kindex: CreateDispatcher
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInput::CreateDispatcher
---

# IGameInput::CreateDispatcher

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

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInput](../igameinput.md)  
[IGameInputDispatcher](../../IGameInputDispatcher/igameinputdispatcher.md)  
[IGameInputDispatcher::Dispatch](../../IGameInputDispatcher/methods/igameinputdispatcher_dispatch.md)  
[IGameInputDispatcher::OpenWaitHandle](../../IGameInputDispatcher/methods/igameinputdispatcher_openwaithandle.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |