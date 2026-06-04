---
author: AlexYatskov
description: "Title-defined callback for keyboard layout change events (v1)."
edited: "03/06/2025"
kindex: "GameInputKeyboardLayoutCallback (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputKeyboardLayoutCallback (v1)"
---

# GameInputKeyboardLayoutCallback (v1)

Title-defined callback for the guide-button (pressed or released) event.

## Syntax

```cpp
void GameInputKeyboardLayoutCallback(
    GameInputCallbackToken callbackToken,
    void * context,
    IGameInputDevice * device,
    uint64_t timestamp,
    uint32_t currentLayout,
    uint32_t previousLayout
);
```

### Parameters

*callbackToken* &nbsp;&nbsp;\_In\_\
Type: GameInputCallbackToken

The callback token returned by [IGameInput::RegisterKeyboardLayoutCallback](../interfaces/igameinput/methods/igameinput_registerkeyboardlayoutcallback-v1.md).

*context* &nbsp;&nbsp;\_In\_\
Type: void*

The title defined context passed to [IGameInput::RegisterKeyboardLayoutCallback](../interfaces/igameinput/methods/igameinput_registerkeyboardlayoutcallback-v1.md).

*device* &nbsp;&nbsp;\_In\_\
Type: IGameInputDevice*

The device that triggered the event.

*timestamp* &nbsp;&nbsp;\_In\_\
Type: uint64_t

The microsecond timestamp associated with the event.

*currentLayout* &nbsp;&nbsp;\_In\_\
Type: uint32_t

The new/current keyboard layout.

*previousLayout* &nbsp;&nbsp;\_In\_\
Type: uint32_t

The previous keyboard layout.

### Return value

Type: void

## Remarks

The `GameInputKeyboardLayoutCallback` function is used by the title-defined callback when the keyboard layout changes. It is registered with the [IGameInput::RegisterKeyboardLayoutCallback](../interfaces/igameinput/methods/igameinput_registerkeyboardlayoutcallback-v1.md) method. This function is triggered by the conditions set from the registration method. For more information, see [Advanced GameInput topics](../../../../input/advanced/input-advanced-topics.md).

The `currentLayout` and `previousLayout` parameters contain the Keyboard Layout ID values that are identical to those provided by the [GetKeyboardLayoutName](/windows/win32/api/winuser/nf-winuser-getkeyboardlayoutnamea) function, but expressed as a 32-bit integer instead of a string.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
