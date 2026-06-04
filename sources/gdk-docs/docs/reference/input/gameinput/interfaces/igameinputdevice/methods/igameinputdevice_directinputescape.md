---
author: AlexYatskov
description: Sends a hardware-specific command to the force-feedback driver from a device.
edited: 05/27/2025
kindex: DirectInputEscape
ms.author: alyatsko
ms.date: 05/27/2025
ms.topic: reference
permissioned-type: public
title: DirectInputEscape
---

# DirectInputEscape

Sends a hardware-specific command to the force-feedback driver. (v3)

<a id="syntaxSection"></a>

## Syntax

```cpp
HRESULT DirectInputEscape(
    uint32_t command,
    const void* bufferIn,
    size_t bufferInSize,
    void* bufferOut,
    size_t bufferOutSize,
    size_t* bufferOutSizeWritten);
```

### Parameters

*command* &nbsp;&nbsp;\_In\_\
Type: uint32_t

Driver-specific command number. Consult the driver documentation for a list of valid commands.

*bufferIn* &nbsp;&nbsp;\_In\_reads\_bytes\_(bufferInSize)\
Type: const void*

Buffer containing the data required to perform the operation.

*bufferInSize* &nbsp;&nbsp;\_In\_\
Type: size_t

Size, in bytes, of the `bufferIn` buffer.

*bufferOut* &nbsp;&nbsp;\_Out\_writes\_bytes\_(bufferOutSize)\
Type: void*

Buffer containing the data returned from the operation.

*bufferOutSize* &nbsp;&nbsp;\_In\_\
Type: size_t

Size, in bytes, of the `bufferOut` buffer.

*bufferOutSizeWritten* &nbsp;&nbsp;\_Out\_Opt\_\
Type: size_t*

Size, in bytes, written to the `bufferOut` buffer.

### Return value

Type: HRESULT

Function result.

<a id="remarksSection"></a>

## Remarks

Many force feedback devices on PC (most commonly steering wheels) are based on a DirectInput user-mode driver, which is provided by the hardware manufacturer. In addition to supporting common features like force feedback effects, the driver also provides a mechanism for doing opaque IOCTL-like communication, called Escape. GameInput makes no attempt to parse or modify the data being exchanged between the game and DirectInput, it is a straight pass-through. 

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)<br>
[IDirectInputDevice8::Escape](/previous-versions/windows/desktop/ee417891(v=vs.85))<br>
[IGameInputDevice](../igameinputdevice.md)

## Version History

| Version | Changes |
| --- | --- |
| **v2** | Introduced. |