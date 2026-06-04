---
author: AlexYatskov
description: Gets an instance of the IGameInput interface.
edited: 03/06/2025
kindex: GameInputCreate
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputCreate
---

# GameInputCreate

Gets an instance of the IGameInput interface.

## Syntax

```cpp
HRESULT GameInputCreate(
    IGameInput** gameInput
);
```

### Parameters

*gameInput* &nbsp;&nbsp;\_COM\_Outptr\_\
Type: IGameInput**

An instance of the underlying per-process singleton returned by the call.

### Return value

Type: HRESULT

Function result.

## Remarks

The `GameInputCreate` function is a Nano-COM factory for getting or creating instances of GameInput. The resulting interface is backed by a per-process singleton that is created the first time this function is called. Therefore, the first call to this function can take a short time to return — short enough that it is generally safe to call from a UI thread, but not from time-sensitive contexts such as a game loop. Subsequent calls to this function from the same process merely add another reference to the underlying singleton and return quickly.

As only one version of GameInput is available on the system at a time, the set of supported interfaces may vary depending on the version of GameInput installed. As GameInput is backwards-compatible, new releases will continue to support old interfaces even as new features are being added.

Applications should call the `GameInputCreate` function once during startup and retain the `IGameInput` object reference until the application is ready to shut down. This is true even for Universal Windows Platform (UWP) apps responding to process lifetime management (PLM) suspend events because the cost of reinitializing the `GameInput` singleton (when the app resumes) typically outweighs the benefits of freeing a small amount of memory in the application.

## Requirements

**Header:** GameInput.h

[Advanced GameInput topics](../../../../features/common/input/advanced/input-advanced-topics.md)  
[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |