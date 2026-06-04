---
author: AlexYatskov
title: "XInputOnGameInput (API contents)"
description: "XInputOnGameInput API member reference"
kindex: XInputOnGameInput
ms.topic: article
edited: '08/08/2019'
ms.date: '08/01/2022'
permissioned-type: public
---

# XInputOnGameInput  

The Microsoft Game Development Kit (GDK) ships with the header file XInputOnGameInput.h, which contains an implementation of the XInput API on top of GameInput. We recommend porting directly to GameInput, especially if a keyboard and mouse or other input devices are desired. However, the XInputOnGameInput wrapper can be used to help bootstrap an initial porting effort without requiring any changes to existing XInput code.  

  
## Functions  
  
| Function | Description |  
| --- | --- |  
| [XInputEnable](functions/xinputenable.md) | XInputEnable API reference |  
| [XInputGetAudioDeviceIds](functions/xinputgetaudiodeviceids.md) | Retrieves the IDs of the audio render and capture devices of the headset connected to the specified controller. |  
| [XInputGetBatteryInformation](functions/xinputgetbatteryinformation.md) | Retrieves the battery type and charge status of a wireless controller. |  
| [XInputGetCapabilities](functions/xinputgetcapabilities.md) | Retrieves the capabilities and features of a connected controller. |  
| [XInputGetDeviceId](functions/xinputgetdeviceid.md) | Retrieves the device ID for the specified controller. |  
| [XInputGetKeystroke](functions/xinputgetkeystroke.md) | XInputGetKeystroke API reference |  
| [XInputGetState](functions/xinputgetstate.md) | Retrieves the current state of the specified controller. |  
| [XInputGetStateWithToken](functions/xinputgetstatewithtoken.md) | Retrieves the current state of the specified controller and associates it with a D3DX frame pipeline token. |  
| [XInputOnGameInputInitialize](functions/xinputongameinputinitialize.md) | XInputOnGameInputInitialize API reference |  
| [XInputOnGameInputUninitialize](functions/xinputongameinputuninitialize.md) | XInputOnGameInputUninitialize API reference |  
| [XInputSetState](functions/xinputsetstate.md) | Sends vibration data to the specified two-motor controller. |  
| [XInputSetStateEx](functions/xinputsetstateex.md) | Sends vibration data to the specified controller. Supports the four-motor vibration capability of newer controllers. |  
  
## Structures  
  
| Structure | Description |  
| --- | --- |  
| [XINPUT_BATTERY_INFORMATION](structs/xinput_battery_information.md) | Describes the type and charge state of a battery. |  
| [XINPUT_CAPABILITIES](structs/xinput_capabilities.md) | XINPUT_CAPABILITIES API reference |  
| [XINPUT_GAMEPAD](structs/xinput_gamepad.md) | XINPUT_GAMEPAD API reference |  
| [XINPUT_KEYSTROKE](structs/xinput_keystroke.md) | Describes keystroke data returned by the XInputGetKeystroke function. |  
| [XINPUT_STATE](structs/xinput_state.md) | Describes the state of a controller. |  
| [XINPUT_VIBRATION](structs/xinput_vibration.md) | Describes motor speeds for the vibration capability of a two-motor controller. |  
| [XINPUT_VIBRATION_EX](structs/xinput_vibration_ex.md) | Describes motor speeds for the vibration capability of a four-motor controller. |  
