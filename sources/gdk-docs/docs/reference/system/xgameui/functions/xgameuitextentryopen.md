---
author: jgup
title: "XGameUiTextEntryOpen"
description: "Opens up a virtual keyboard where the title is responsible for rendering the text."
kindex: XGameUiTextEntryOpen
ms.author: jgup
ms.topic: reference
edited: 11/20/2022
applies-to: pc-gdk
ms.date: 11/20/2022
permissioned-type: public
---

# XGameUiTextEntryOpen  

Opens up a virtual keyboard where the title is responsible for rendering the text. Currently 
unimplemented on desktop.

## Syntax  

```cpp
HRESULT XGameUiTextEntryOpen(  
         const XGameUiTextEntryOption* options,
         uint32_t maxLength,
         const char* initialText,
         uint32_t initialCursorIndex,
         XGameUiTextEntryHandle* handle 
)  
```  

### Parameters  
  
*options* &nbsp;&nbsp;\_In\_  
Type: [XGameUiTextEntryOptions](../structs/xgameuitextentryoptions.md)  

Indicates the initial set of options to apply to the keyboard when it is opened such as placement
and the keyboard configuration.

*maxLength* &nbsp;&nbsp;\_In\_  
Type: uint32_t

Maximum number of characters that the user can enter in the virtual keyboard. This number must not
be greater than 32K.

*initialText* &nbsp;&nbsp;\_In\_\_opt\_z\_  
Type: const char*  

Null-terminated character string that is initially populated in the virtual keyboard. 

*initialCursorIndex* &nbsp;&nbsp;\_In\_  
Type: uint32_t

Initial byte index of the cursor relative to the starting character. 

*handle* &nbsp;&nbsp;\_Out\_  
Type: XGameUiTextEntryHandle  

Handle to the newly opened virtual keyboard.

### Return value

Type: HRESULT

HRESULT success or error code. For a list of error codes, see [Error Codes](../../../errorcodes.md).

| Return Code    | Description                       |
|----------------|-----------------------------------|
| S_OK           | The operation succeeded.          |
| E_ACCESSDENIED | A dialog is already getting shown.|
  
## Remarks  
  
This function will return as soon as it can get the handle, even if the virtual keyboard is not yet
visible. All other **XGameUiTextEntry** functions are safe to call as soon as the handle is 
returned.

The following example demonstrates the basics of how to use the **XGameUiTextEntry** functions.

```cpp
// Somewhere in the main game loop
// ...
bool someSignal;
bool showingKeyboard;
uint32_t KEYBOARD_MAX_CHARACTERS = 256; 
uint32_t KEYBOARD_BUFFER_SIZE = KEYBOARD_MAX_CHARACTERS * 4;

XGameUiTextEntryHandle keyboardInstance;

if (someSignal)
{
    XGameUiTextEntryOptions options;
    options.inputScope = XGameUiTextEntryInputScope::Default;
    options.positionHint = XGameUiTextEntryPositionHint::Bottom;
    options.flags = XGameUiTextEntryVisibilityFlags::Default;

    if (SUCCEEDED(XGameUiTextEntryOpen(&options, 
                                       nullptr, 
                                       0, 
                                       KEYBOARD_MAX_CHARACTERS, 
                                       &keyboardInstance)))
    {
        showingKeyboard = true;
    }
}

if (showingKeyboard)
{
    char* buffer[KEYBOARD_BUFFER_SIZE];
    uint32_t cursorPosition;
    XGameUiTextEntryChangeTypeFlags changeType;

    if (SUCCEEDED(XGameUiTextEntryGetState(
        keyboardInstance,
        &changeType,
        &cursorPosition,
        nullptr,
        nullptr,
        KEYBOARD_BUFFER_SIZE,
        buffer)))
    {
        if (changeType & XGameUiTextEntryChangeTypeFlags::TextChanged)
        {
            // Copy text for in-game rendering
            RenderTextInGame(buffer, cursorPosition);

            // Assuming the game doesn't want multi-line input
            if (strstr(buffer, "\n")
            {
                XGameUiTextEntryClose(keyboardInstance);
                showingKeyboard = false;
            }
        }

        if (showingKeyboard && (changeType & XGameUiTextEntryChangeTypeFlags::KeyboardDismissed))
        {
            XGameUiTextEntryClose(keyboardInstance);
            showingKeyboard = false;
        }    
    }
}
```
  
## Requirements  
  
**Header:** XGameUI.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameUI](../xgameui_members.md)  
[Virtual keyboard support](../../../../features/common/input/overviews/virtualkeyboardsupport.md)