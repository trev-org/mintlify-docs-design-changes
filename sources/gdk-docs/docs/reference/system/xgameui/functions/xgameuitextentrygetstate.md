---
author: jgup
title: "XGameUiTextEntryGetState"
description: "Gets the current state of the open virtual keyboard."
kindex: XGameUiTextEntryGetState
ms.author: jgup
ms.topic: reference
edited: 11/20/2022
applies-to: pc-gdk
ms.date: 11/20/2022
permissioned-type: public
---

# XGameUiTextEntryGetState  

Gets the current state of the open virtual keyboard.

## Syntax  

```cpp
HRESULT XGameUiTextEntryGetState(  
         XGameUiTextEntryHandle handle,
         XGameUiTextEntryChangeTypeFlags* changeType,
         uint32_t* cursorIndex,
         uint32_t* imeClauseStartIndex,
         uint32_t* imeClauseEndIndex,
         uint32_t bufferSize,
         char* buffer
)  
```  

### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: XGameUiTextEntryHandle  

Handle to the opened virtual keyboard. 

*changeType* &nbsp;&nbsp;\_Out\_  
Type: [XGameUiTextEntryChangeTypeFlags*](../enums/xgameuitextentrychangetypeflags.md)  

Describes if the text has changed or the virtual keyboard has been dismissed since the last time 
that the game called *XGameUiTextEntryGetState*. If the change type indicates that the virtual 
keyboard has been dismissed, the game must call [XGameUiTextEntryClose](xgameuitextentryclose.md)
once it is done handling the text changes.

*cursorIndex* &nbsp;&nbsp;\_Out\_opt\_  
Type: uint32_t*  

Byte index of the cursor relative to the starting character. 

*imeClauseStartIndex* &nbsp;&nbsp;\_Out\_opt\_  
Type: uint32_t*   

Starting byte index of the IME clause that might get replaced by an IME candidate. This will 
be prior to the cursor index. If IME isn't in use, this value will be zero. 

*imeClauseEndIndex* &nbsp;&nbsp;\_Out\_opt\_  
Type: uint32_t*  

Ending byte index of the IME clause that might get replaced by an IME candidate. This will 
be after the cursor index. If IME isn't in use, this value will be zero.  

*bufferSize* &nbsp;&nbsp;\_In\_  
Type: uint32_t 

Size in bytes of the game-provided buffer that will get the text from the virtual keyboard.

*buffer* &nbsp;&nbsp;\_Out\_  
Type: char* 

Complete text entered into the virtual keyboard as a null-terminated character string. Newline will 
get represented as '\\n'.

### Return value

Type: HRESULT

HRESULT success or error code. For a list of error codes, see [Error Codes](../../../errorcodes.md).

| Return Code    | Description                       |
|----------------|-----------------------------------|
| S_OK           | The operation succeeded.          |
| E_GAMEUI_TEXTENTRY_NOT_SHOWN | The XGameUiTextEntryHandle is not valid, likely because you need to call XGameUiTextEntryOpen. |
  
## Remarks  
  
This function needs to be called at least once per frame to get the latest virtual keyboard changes.
If the keyboard is later dismissed, the function will return successfully; however, the change type
will include KeyboardDismissed.
  
## Requirements  
  
**Header:** XGameUI.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameUI](../xgameui_members.md)  
[XGameUiTextEntryOpen](xgameuitextentryopen.md)
[XGameUiTextEntryClose](xgameuitextentryclose.md)
  