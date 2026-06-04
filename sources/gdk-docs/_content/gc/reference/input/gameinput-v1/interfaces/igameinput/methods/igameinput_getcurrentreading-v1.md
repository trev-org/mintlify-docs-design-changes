---
author: AlexYatskov
description: "Retrieves the most recent reading from the input stream that matches a caller-supplied filter (v1)."
edited: "03/06/2025"
kindex: "IGameInput::GetCurrentReading (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInput::GetCurrentReading  (v1)"
---

# IGameInput::GetCurrentReading (v1)

Retrieves the most recent reading from the input stream that matches a caller-supplied filter.

## Syntax

```cpp
HRESULT GetCurrentReading(
    GameInputKind inputKind,
    IGameInputDevice* device,
    IGameInputReading** reading
);
```

### Parameters

*inputKind* &nbsp;&nbsp;\_In\_\
Type: [GameInputKind](../../../enums/gameinputkind-v1.md)

One of the enumeration values that designates the type of input device being used such as a controller, keyboard, mouse, or gamepad. Enumeration values can be combined to designate multiple types of input. When multiple input kinds are specified, any readings that contain at least one of the input kinds will be matched and returned.

*device* &nbsp;&nbsp;\_In\_opt\_\
Type: IGameInputDevice*

An optional filter that returns readings from a specific device.

*reading* &nbsp;&nbsp;\_COM\_Outptr\_\
Type: IGameInputReading**

The input reading to be returned. Returns `NULL` on failure.

### Return value

Type: HRESULT

Function result.

## Remarks

This function is used to initially access the input stream. You may use this function with the `GetNextReading` and `GetPreviousReading` methods to walk the input stream without missing inputs. Alternatively, you may continue to call `GetCurrentReading` to keep getting the most current reading if your game can permit some missing input.

The following code example demonstrates how to poll for the current gamepad state.

```cpp
Microsoft::WRL::ComPtr<IGameInput> gameInput;

void PollGamepadInput() noexcept
{
    Microsoft::WRL::ComPtr<IGameInputReading> reading;

    if (SUCCEEDED(gameInput->GetCurrentReading(
        GameInputKindGamepad,
        nullptr,
        &reading)))
    {
        // Application-specific code to process the reading.
    }
}
```

The following code example demonstrates how to poll for the current gamepad state from a specific device.

```cpp
Microsoft::WRL::ComPtr<IGameInput> gameInput;
Microsoft::WRL::ComPtr<IGameInputDevice> gamepad;

void PollGamepadInput() noexcept
{
    Microsoft::WRL::ComPtr<IGameInputReading> reading;

    if (SUCCEEDED(gameInput->GetCurrentReading(
        GameInputKindGamepad,
        gamepad.Get(),
        &reading)))
    {
        // Lock onto the first device we find input from, since this
        // must be the one the player is using (if it's generating input).
        if (!gamepad)
        {
            reading->GetDevice(&gamepad);
        }

        // Application-specific code to process the reading.
    }

    else
    {
        // Go back to looking for a device to lock onto, if the previous one is gone.
        gamepad = nullptr;
    }
}
```

The following code example demonstrates how to poll for all gamepad states from a specific device.

```cpp
Microsoft::WRL::ComPtr<IGameInput> gameInput;
Microsoft::WRL::ComPtr<IGameInputDevice> gamepad;
Microsoft::WRL::ComPtr<IGameInputReading> prevReading;

void PollGamepadInput() noexcept
{
    if (!prevReading)
    {
        if (SUCCEEDED(gameInput->GetCurrentReading(
            GameInputKindGamepad,
            nullptr,
            &prevReading)))
        {
            gamepad.Attach(prevReading->GetDevice());

            // Application-specific code to process the initial reading.
        }
    }

    else
    {
        Microsoft::WRL::ComPtr<IGameInputReading> nextReading;
        HRESULT hr = gameInput->GetNextReading(
            prevReading.Get(),
            GameInputKindGamepad,
            gamepad.Get(),
            &nextReading);

        if (SUCCEEDED(hr))
        {
            // Application-specific code to process the next reading.

            prevReading = nextReading;
        }

        else if (hr != GAMEINPUT_E_READING_NOT_FOUND)
        {
            gamepad = nullptr;
            prevReading = nullptr;
        }
    }
}
```

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../../input/overviews/input-overview.md)
[IGameInput_GetNextReading](igameinput_getnextreading-v1.md)
[IGameInput_GetPreviousReading](igameinput_getpreviousreading-v1.md)
[IGameInput](../igameinput-v1.md)
