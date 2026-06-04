---
description: A string type used for device identification in GameInput (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputString (Deprecated)
---

# GameInputString

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v1 and is not available in the current API.

Represents a string value used for device identification fields in GameInput structures.

## Syntax

```cpp
typedef struct GameInputString {
    uint32_t sizeInBytes;
    uint32_t codePointCount;
    const char* data;
} GameInputString;
```

## Members

**sizeInBytes**\
Type: uint32_t

The size of the string data in bytes, not including a null terminator.

**codePointCount**\
Type: uint32_t

The number of Unicode code points in the string.

**data**\
Type: const char*

Pointer to the UTF-8 encoded string data. Not necessarily null-terminated.

## Remarks

This type was used for string fields in the v0 `GameInputDeviceInfo` structure (such as `displayName`, `deviceFamily`, and `hardwareVersion`). It was removed in v1 when those string fields were removed from [GameInputDeviceInfo](../../structs/gameinputdeviceinfo.md).

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
