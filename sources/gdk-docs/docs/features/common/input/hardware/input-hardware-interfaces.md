---
author: lsalvadormsft
description: "Describes how device can target the different GameInput device types."
edited: 06/30/2025
kindex: "GameInput device types"
ms.author: lsalvador
ms.date: 06/30/2025
ms.topic: reference
permissioned-type: public
title: "Interfacing with the different GameInput device types"
---

# Interfacing with the different GameInput device types

> [!NOTE]
> The API separately defines `GameInput` mouse and keyboard devices. These devices have special meaning in Windows and are covered elsewhere. For more information, see [Developing keyboard and mouse HID client drivers](/windows-hardware/drivers/hid/keyboard-and-mouse-hid-client-drivers).

`GameInput` represents a wide variety of devices, including controllers, gamepads, flight sticks, arcade sticks, racing wheels, and UI navigation controllers. Each device type has its own interface that you can use to interact with the device. Whether a hardware device shows up under one of these interfaces depends on whether the device conforms to one of the existing Windows driver protocols for gaming input controllers, or is a generic HID device.

For XInput-compatible devices, the `GameInput` API enumerates these devices as a controller, a gamepad, and a UI navigation controller. The mapping of these devices is strictly dictated by the protocol, and the protocol doesn't support extra buttons. These devices also support dual or quad rumble effects. These effects correspond to the left and right motors, and the left and right triggers. Three main wire protocols exist for XInput: XUSB, XInputHID, and the Game Input Protocol (GIP). On console, the system supports only GIP devices. You can find more information about all of these protocols in the [XInput API Documentation for Hardware Devices](https://aka.ms/gipdocs). On PC, devices should interface with the XInputHID driver. For other Game Input Protocol (GIP) devices apart from gamepads, the `GameInput` API enumerates these devices as a flight stick, arcade stick, racing wheel, or UI navigation controller based on the metadata it presents at connection. This behavior is true for both console and PC. For more information, see the [Game Input Protocol (GIP) documentation](https://aka.ms/gipdocs).

For HID devices, `GameInput`provides more flexibility in how devices present themselves to the operating system. This flexibility means that HID devices can potentially expose a wide range of features and capabilities beyond what the standard game controller protocols define. A racing wheel device, for example,  could potentially present itself to `GameInput` as a gamepad and flight stick. The full list of buttons, switches, and axes available on the device is defined by the device's HID report descriptor and exposed through the `IGameInputReading` interface from the `GetControllerButtonState`, `GetControllerButtonCount`, and the homologous calls to get axis or switches. To map these features into other interfaces such as gamepad or racing wheel, `GameInput` uses a series of mappings in the Windows registry. The Windows.Gaming.Input (WGI) API shares these mappings. For more information, see [Registry Data for Game Controllers](/windows/uwp/gaming/registry-data-for-game-controllers). An independent hardware vendor (IHV) can add their registry mappings to the `HKLM\SYSTEM\CurrentControlSet\Control\GameInput\Devices` path as part of their driver installation. The `GameInput` API periodically adds default mappings for common devices in future releases of the API that it redistributes with games. IHV mappings take precedence over the default mappings. You can find the mappings packaged with the API in `HKLM\SOFTWARE\Microsoft\GameInputRedist`.

<a id="seealsoSection"></a>

## See also 

[Overview of GameInput](../overviews/input-overview.md)  
[XInput Game Controller APIs](/windows/win32/api/_xinput/)  
[Game Input Protocol (GIP) / XInputHID driver documentation (download)](https://aka.ms/gipdocs)  
[Registry Data for Game Controllers](/windows/uwp/gaming/registry-data-for-game-controllers)  

