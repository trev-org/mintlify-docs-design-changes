---
author: AlexYatskov
description: "Enumerates types of behavior for enumerating input devices (v1)."
edited: "03/03/2025"
kindex: "GameInputEnumerationKind (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputEnumerationKind (v1)"
---

# GameInputEnumerationKind (v1)

Enumerates types of behavior for enumerating input devices.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputEnumerationKind
{
    GameInputNoEnumeration       = 0,
    GameInputAsyncEnumeration    = 1,
    GameInputBlockingEnumeration = 2
};
```

<a id="constantsSection"></a>

## Constants

| Constant                     | Description                              |
| --                           | ---                                      |
| GameInputNoEnumeration       | Disables enumeration of input devices.   |
| GameInputAsyncEnumeration    | Enumerates input devices asynchronously. |
| GameInputBlockingEnumeration | Enumerates input devices synchronously.  |

<a id="remarksSection"></a>

## Remarks

This enumeration is used by the [IGameInput::RegisterDeviceCallback](../interfaces/igameinput/methods/igameinput_registerdevicecallback-v1.md) method. Both `GameInputAsyncEnumeration` and `GameInputBlockingEnumeration` cause an initial round of callbacks to be generated. `GameInputBlockingEnumeration` causes `RegisterDeviceCallback` to block until all initial callbacks are called.

For more information, see [GameInput callbacks](../../../../input/advanced/input-callbacks.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[IGameInput::RegisterDeviceCallback](../interfaces/igameinput/methods/igameinput_registerdevicecallback-v1.md)
[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
