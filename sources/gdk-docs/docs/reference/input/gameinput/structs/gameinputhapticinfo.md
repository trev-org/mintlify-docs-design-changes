---
author: AlexYatskov
description: Describes haptic capabilities and metadata.
edited: 05/27/2025
kindex: GameInputHapticInfo
ms.author: alyatsko
ms.date: 05/27/2025
ms.topic: reference
permissioned-type: public
title: GameInputHapticInfo
---

# GameInputHapticInfo

Describes haptic capabilities and metadata.

<a id="syntaxSection"></a>

## Syntax  
  
```cpp
constexpr uint32_t GAMEINPUT_HAPTIC_MAX_LOCATIONS              = 8;
constexpr uint32_t GAMEINPUT_HAPTIC_MAX_AUDIO_ENDPOINT_ID_SIZE = 256;

DEFINE_GUID(GAMEINPUT_HAPTIC_LOCATION_NONE,          0x00000000, 0x0000, 0x0000, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00);
DEFINE_GUID(GAMEINPUT_HAPTIC_LOCATION_GRIP_LEFT,     0x08c707c2, 0x66bb, 0x406c, 0xa8, 0x4a, 0xdf, 0xe0, 0x85, 0x12, 0x0a, 0x92);
DEFINE_GUID(GAMEINPUT_HAPTIC_LOCATION_GRIP_RIGHT,    0x155a0b77, 0x8bb2, 0x40db, 0x86, 0x90, 0xb6, 0xd4, 0x11, 0x26, 0xdf, 0xc1);
DEFINE_GUID(GAMEINPUT_HAPTIC_LOCATION_TRIGGER_LEFT,  0x8de4d896, 0x5559, 0x4081, 0x86, 0xe5, 0x17, 0x24, 0xcc, 0x07, 0xc6, 0xbc);
DEFINE_GUID(GAMEINPUT_HAPTIC_LOCATION_TRIGGER_RIGHT, 0xff0cb557, 0x3af5, 0x406b, 0x8b, 0x0f, 0x55, 0x5a, 0x2d, 0x92, 0xa2, 0x20);

struct GameInputHapticInfo
{
    wchar_t  audioEndpointId[GAMEINPUT_HAPTIC_MAX_AUDIO_ENDPOINT_ID_SIZE];
    uint32_t locationCount;
    GUID     locations[GAMEINPUT_HAPTIC_MAX_LOCATIONS];
};
```
  
<a id="membersSection"></a>

### Members  
  
*audioEndpointId*<br>
Type: wchar_t
  
The WASAPI haptic audio endpoint identifier.
  
*locationCount*<br>
Type: uint32_t
  
Number of haptic locations.
  
*locations*<br>
Type: GUID
  
List of haptic locations.
  
<a id="remarksSection"></a>

## Remarks

Haptics-enabled controllers closely resemble general-purpose audio devices such as headphones or desktop speakers; they are driven by the Windows audio system. The `GameInputHapticInfo` structure makes it possible to match up a haptic audio endpoint with a specific GameInput device. The [GetHapticInfo](../interfaces/igameinputdevice/methods/igameinputdevice_gethapticinfo.md) method can be used to query for this information once the device reports that it is ready.

The `audioEndpointId` is an [endpoint identifier string](/windows/win32/coreaudio/endpoint-id-strings) which can be used to access the haptic device through [WASAPI](/windows/win32/coreaudio/wasapi), or any one of several higher level audio APIs. Once the endpoint has been opened, you can simply stream your haptic waveform to the device.

Conventional audio devices have well-defined locations for speakers such as front-left, front-right, and center. The situation for haptic controllers is more nuanced as the device may support haptic feedback in physical locations which do not map well to the surround audio system metaphor. In order to adapt the existing audio channels indices to haptic locations, a device-specific mapping is provided. The number of haptic locations will always be greater than zero for controllers that support haptics. The location list will contain 1:1 mappings to audio channel indices. Repeated locations are not allowed with the exception of the `GAMEINPUT_HAPTIC_LOCATION_NONE`, which can be used as padding for endpoints that contain a mix of audio and haptic endpoints. To illustrate, let's consider the location list below:

```cpp
{ GAMEINPUT_HAPTIC_LOCATION_NONE, GAMEINPUT_HAPTIC_LOCATION_NONE, GAMEINPUT_HAPTIC_LOCATION_GRIP_LEFT, GAMEINPUT_HAPTIC_LOCATION_GRIP_RIGHT }
```

In this example, channels 0 and 1 are unused, and channels 2 and 3 are mapped to left grip and right grip respectively. The list of haptic locations may be expanded in future versions of GameInput.

<a id="requirementsSection"></a>

## Requirements  
  
**Header:** GameInput.h
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles
  
<a id="seealsoSection"></a>

## See also  

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)<br>
[GetHapticInfo](../interfaces/igameinputdevice/methods/igameinputdevice_gethapticinfo.md)<br>
[GameInput](../gameinput_members.md)<br>
[Endpoint ID Strings](/windows/win32/coreaudio/endpoint-id-strings)
## Version History

| Version | Changes |
| --- | --- |
| **v2** | **New struct** introduced in v2. |
| **v1** | Not present. |
| **v0** | Not present. |