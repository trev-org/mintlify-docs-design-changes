---
author: AlexYatskov
description: "IGameInputReading::GetGamepadState API (v1)."
edited: "03/06/2025"
kindex: "IGameInputReading::GetGamepadState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetGamepadState (v1)"
---

# IGameInputReading::GetGamepadState (v1)

Retrieve a view of the input reading that describes the state of a gamepad.

## Syntax

```cpp
bool GetGamepadState(
    GameInputGamepadState* state
);
```

### Parameters

*state* &nbsp;&nbsp;\_Out\_\
Type: [GameInputGamepadState*](../../../structs/gameinputgamepadstate-v1.md)

Interpretation of the input as a gamepad.

### Return value

Type: bool

Returns true on successful interpretation of a gamepad.
Returns false when attempting to read an input that is not recognized as a gamepad.

## Remarks

Call the [IGameInputReading::GetInputKind](igameinputreading_getinputkind-v1.md) method to see which Get\*State functions will return a valid interpretation for some [IGameInputReading](../igameinputreading-v1.md). Each Get\*State function has a corresponding entry in the [IGameInputReading::GetInputKind](igameinputreading_getinputkind-v1.md) enum. If you attempt to call a Get\*State function where the corresponding [IGameInputReading::GetInputKind](igameinputreading_getinputkind-v1.md) flag is not set the function will return with default at rest values as well as a false return value.

The following C++ sample demonstrates how to read the gamepad state.

```cpp
void PlayerCrouch();
void PlayerStand();
void PlayerReload();
void PlayerMove(float, float);
void SetCameraOrientation(float, float);

void ProcessGamepadState(
    _In_ IGameInputReading * prevReading,
    _In_ IGameInputReading * currentReading) noexcept
{
    GameInputGamepadState prevState, currentState;
    prevReading->GetGamepadState(&prevState);
    currentReading->GetGamepadState(&currentState);

    GameInputGamepadButtons changedButtons = prevState.buttons ^ currentState.buttons;
    GameInputGamepadButtons pressedButtons = changedButtons & currentState.buttons;
    GameInputGamepadButtons releasedButtons = changedButtons ^ pressedButtons;

    if (pressedButtons & GameInputGamepadRightShoulder)
    {
        PlayerCrouch();
    }
    else if (releasedButtons & GameInputGamepadRightShoulder)
    {
        PlayerStand();
    }

    if (pressedButtons & GameInputGamepadLeftShoulder)
    {
        PlayerReload();
    }

    PlayerMove(currentState.leftThumbstickX, currentState.leftThumbstickY);
    SetCameraOrientation(currentState.rightThumbstickX, currentState.rightThumbstickY);
}
```

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../../input/overviews/input-overview.md)
[IGameInputReading](../igameinputreading-v1.md)
[IGameInputReading::GetInputKind](igameinputreading_getinputkind-v1.md)
