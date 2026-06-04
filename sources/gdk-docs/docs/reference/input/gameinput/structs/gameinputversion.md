---
author: AlexYatskov
description: Describes a four-part version number.
edited: 05/27/2025
kindex: GameInputVersion
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputVersion
---

# GameInputVersion

Describes a four-part version number.  

<a id="syntaxSection"></a>

## Syntax  
  
```cpp
struct GameInputVersion
{  
    uint16_t major;  
    uint16_t minor;  
    uint16_t build;  
    uint16_t revision;  
};
```
  
<a id="membersSection"></a>

### Members  
  
*major*<br>
Type: uint16_t
  
Major version number.  
  
*minor*<br>
Type: uint16_t
  
Minor version number.  
  
*build*<br>
Type: uint16_t
  
Build number.  
  
*revision*<br>
Type: uint16_t
  
Revision number.  

<a id="remarksSection"></a>

## Remarks

This structure is used in the [GameInputDeviceInfo](gameinputdeviceinfo.md) structure. `GameInputDeviceInfo` is used by the [IGameInputDevice::GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo.md) method. 

The structure can support versioning of hardware, firmware, or software. 
  
<a id="requirementsSection"></a>

## Requirements  
  
**Header:** GameInput.h
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles
  
<a id="seealsoSection"></a>

## See also  

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v2** | **Re-introduced** with same layout as v0: `major`, `minor`, `build`, `revision`. |
| **v1** | **Not present** (removed from v0). |
| **v0** | Introduced. |