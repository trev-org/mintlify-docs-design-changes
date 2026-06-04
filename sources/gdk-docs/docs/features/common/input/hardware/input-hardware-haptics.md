---
author: AlexYatskov
description: "GameInput haptic requirements"
edited: "05/28/2025"
kindex: "GameInput haptic requirements"
ms.author: alyatsko
ms.date: "05/28/2025"
ms.topic: reference
permissioned-type: public
title: "GameInput haptic requirements"
---

# Haptics in GameInput

The haptic capabilities exposed by GameInput are integrated with the Windows audio system to ensure performant and robust streaming of waveform data to compatible devices. The audio requirements for haptic-enabled devices are very similar to an ordinary set of desktop speakers or headphones. GameInput uses a combination of conventions and manufacturer-specified metadata to link up input devices with an audio endpoint to use for haptic playback.

<a id="requirementsSection"></a>

## Requirements

1.  The device must be recognized as an audio source in Windows. The connection medium (USB, Bluetooth&#174;, etc.) does not matter.
2.  The device must expose no more than one haptic endpoint.
3.  The device must expose no more than eight haptic locations.
4.  The device must not modify its haptics capabilities after being connected.
5.  The device must not have multiple audio endpoints with identical formats (bits per sample and samples per second).
6.  The device must present the same [container ID](/windows-hardware/drivers/install/container-ids) for its audio endpoint as the rest of the device.
7.  The device must have a registry entry in to explicitly identify the haptic endpoint. The format is as follows:

    *   Haptic devices are enumerated in the registry in `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\GameInput\Devices`.
    *   The specific device key is a combination of the vendor ID, product ID, usage page, and usage ID formatted as a hexadecimal string.
    *   The `HapticSamplesPerSecond` is a DWORD value identifying the number of samples per second (Hz) of the haptic endpoint format.
    *   The `HapticsBitsPerSample` is a DWORD value identifying the number of sample bits (sample size) of the haptic endpoint format.
    *   The `HapticLocations` is a BYTE array of haptic location GUIDs. This array must contain between one and eight GUIDs, corresponding to the haptic channel mapping.

    To better illustrate this, consider the following sample device:

    | Field            | Value                                                                     |
    | ---              | ---                                                                       |
    | Vendor ID        | 0x045e                                                                    |
    | Product ID       | 0x1234                                                                    |
    | Usage page       | 0x0001                                                                    |
    | Usage ID         | 0x0005                                                                    |
    | Sample frequency | 0x0fa0                                                                    |
    | Sample size      | 0x0010                                                                    |
    | Haptic locations | GAMEINPUT_HAPTIC_LOCATION_GRIP_LEFT, GAMEINPUT_HAPTIC_LOCATION_GRIP_RIGHT |

    The associated haptic registry entry would look as follows:

    ```
    Windows Registry Editor Version 5.00

    [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\GameInput\Devices\045E123400010005]
    "HapticSamplesPerSecond"=dword:00000fa0
    "HapticBitsPerSample"=dword:00000010
    "HapticLocations"=hex:c2,07,c7,08,bb,66,6c,40,a8,4a,df,e0,85,12,0a,92,77,0b,5a,\
    15,b2,8b,db,40,86,90,b6,d4,11,26,df,c1
    ```

### Haptic locations

Currently, the following haptic location GUIDs are defined for general use:

```cpp
// { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 }
DEFINE_GUID(GAMEINPUT_HAPTIC_LOCATION_NONE, 0x00000000, 0x0000, 0x0000, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00);

// { 0xc2, 0x07, 0xc7, 0x08, 0xbb, 0x66, 0x6c, 0x40, 0xa8, 0x4a, 0xdf, 0xe0, 0x85, 0x12, 0x0a, 0x92 }
DEFINE_GUID(GAMEINPUT_HAPTIC_LOCATION_GRIP_LEFT, 0x08c707c2, 0x66bb, 0x406c, 0xa8, 0x4a, 0xdf, 0xe0, 0x85, 0x12, 0x0a, 0x92);

// { 0x77, 0x0b, 0x5a, 0x15, 0xb2, 0x8b, 0xdb, 0x40, 0x86, 0x90, 0xb6, 0xd4, 0x11, 0x26, 0xdf, 0xc1 }
DEFINE_GUID(GAMEINPUT_HAPTIC_LOCATION_GRIP_RIGHT, 0x155a0b77, 0x8bb2, 0x40db, 0x86, 0x90, 0xb6, 0xd4, 0x11, 0x26, 0xdf, 0xc1);

// { 0x96, 0xd8, 0xe4, 0x8d, 0x59, 0x55, 0x81, 0x40, 0x86, 0xe5, 0x17, 0x24, 0xcc, 0x07, 0xc6, 0xbc }
DEFINE_GUID(GAMEINPUT_HAPTIC_LOCATION_TRIGGER_LEFT, 0x8de4d896, 0x5559, 0x4081, 0x86, 0xe5, 0x17, 0x24, 0xcc, 0x07, 0xc6, 0xbc);

// { 0x57, 0xb5, 0x0c, 0xff, 0xf5, 0x3a, 0x6b, 0x40, 0x8b, 0x0f, 0x55, 0x5a, 0x2d, 0x92, 0xa2, 0x20 }
DEFINE_GUID(GAMEINPUT_HAPTIC_LOCATION_TRIGGER_RIGHT, 0xff0cb557, 0x3af5, 0x406b, 0x8b, 0x0f, 0x55, 0x5a, 0x2d, 0x92, 0xa2, 0x20);
```

Note that in the example above, the GUIDs are serialized to the registry using their in-memory little endian representation.

<a id="seealsoSection"></a>

## See also 

[GetHapticInfo](../../../../reference/input/gameinput/interfaces/igameinputdevice/methods/igameinputdevice_gethapticinfo.md)

[GameInputHapticInfo](../../../../reference/input/gameinput/structs/gameinputhapticinfo.md)

[Overview of GameInput](../overviews/input-overview.md)

[Windows Audio](/windows-hardware/design/component-guidelines/audio)
