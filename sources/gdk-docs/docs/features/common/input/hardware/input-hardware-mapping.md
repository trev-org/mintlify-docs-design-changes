---
author: lsalvadormsft
description: "Describes how to use the GameInput Device Mapping Tool and test different GameInput device types."
edited: 06/30/2025
kindex: "GameInput Mapping Tool"
ms.author: lsalvador
ms.date: 06/30/2025
ms.topic: reference
permissioned-type: public
title: "GameInput Device Mapping Tool and Testing Guide"
---

# GameInput Device Mapping Tool and Testing Guide

The GameInput Device Mapping Tool, which can be found in the [GameInput GitHub project](https://github.com/microsoftconnect/GameInput), is a utility that hardware developers use to test how the GameInput API recognizes and maps their devices. The tool provides a visual interface for inspecting the device's input reports, and the resulting GameInput readings and device info that the API generates. This information is especially helpful for debugging and validating the behavior of new devices, or for understanding how existing devices are interpreted by GameInput.

Because generic HID devices can have multiple possible interpretations by target systems, GameInput depends on a series of device mapping extensions baked into the Windows registry. You can find them in `HKLM\SOFTWARE\Microsoft\GameInputRedist`. The Windows.Gaming.Input (WGI) API shares these mappings, with additional extensions for GameInput. For more information, see [Registry Data for Game Controllers](/windows/uwp/gaming/registry-data-for-game-controllers). The GameInput Device Mapping Tool enables hardware developers to generate these mappings for their devices and test them in real time.
 
When you start the tool, you can select one of your connected gamepad accessories. GameInput enumerates all XInput-enabled devices, and HID devices with usage page 0x0001 (Generic Desktop Controls) and usage 0x0005 (Game Pad) or 0x0004 (Joystick). When you select a device, the tool displays the resulting GameInput readings and device info by default.

By moving into the configuration flow, you can continue from whatever configuration (if any) is currently available on your Windows PC, from an existing registry file created by this tool, or from scratch. The tool guides you through the process of mapping your device's input reports into GameInput interfaces, such as gamepad, flight stick, racing wheel, and UI navigation controller. You can then reconcile these mappings with the labels specific to your device, or you could default these to the labels used for XInput devices. You can also add support for advanced features like haptics and gyro. Lastly, you can test the resulting mappings in real time before committing your changes.

The tool can export the mappings as a file. You can then manually submit the file to Microsoft for consideration (use the 'Contact Owners' link in the [GameInput NuGet page](https://www.nuget.org/packages/Microsoft.GameInput)), ship it with your driver, or include it in your application's installation package.

<a id="seealsoSection"></a>

## See also 

[Overview of GameInput](../overviews/input-overview.md)  
[XInput Game Controller APIs](/windows/win32/api/_xinput/)  
[Game Input Protocol (GIP) / XInputHID driver documentation (download)](https://aka.ms/gipdocs)  
[Registry Data for Game Controllers](/windows/uwp/gaming/registry-data-for-game-controllers)  

