---
author: KevinAsgari
title: "Additional considerations for handheld devices"
description: "Additional considerations when developing GDK games that run on handheld Windows devices."
kindex: Handheld game development considerations
ms.author: jgup
ms.topic: article
edited: 00/00/0000
ms.date: 06/02/2025
permissioned-type: public
---

# Additional considerations for handheld devices

This article covers other things that you need to keep in mind when developing games to run effectively on handheld devices. These considerations complement the checks in [Optimize GDK games for handheld Windows devices](handheld-guidance.md).

## Docked behavior of a handheld

Some handhelds are played when docked. While there isn't an API to check if the handheld is docked, a docked device might have an external display attached. You can check for an external display by using the [EnumDisplayDevices](/windows/win32/api/winuser/nf-winuser-enumdisplaydevicesa) and [EnumDisplaySettings](/windows/win32/api/winuser/nf-winuser-enumdisplaysettingsa) APIs.

When a handheld device is docked, use these methods to check for attached external displays:

* Check for additional gamepads. The handheld’s built‑in gamepad is always available, but the user might also connect additional gamepads.
* Check the screen sizes of attached displays.
* Virtual keyboard recommendations remain because the gamepad is still the primary input mechanism.
* Some players might connect a mouse and keyboard, just like they do on consoles.

## Guaranteed input

While various gaming handhelds might have additional input options, handheld devices have the following inputs.

* A, B, X, and Y buttons
* Left bumper and right bumper
* Left trigger and right trigger
* Left thumbstick and right thumbstick
* D-pad
* Menu button
* View button

Always check for all attached gamepads and input devices, whether the device is docked or not. When docked, also check for the View button.

## Power

To check if the handheld device uses AC power instead of the battery, call the [GetSystemPowerStatus](/windows/win32/api/winbase/nf-winbase-getsystempowerstatus) function. It shows whether the device uses AC power and provides a summary of the battery charge state (high, low, critical, or charging).

Consider how your game affects the device’s battery life, because the power your game requires isn't always obvious. Possible power savings recommendations in the [Xbox Sustainability Toolkit](https://aka.ms/SustainabilityToolkit) can also apply to handhelds.

Maximize power savings by:

* Enabling VSync to give the GPU more idle time and reduce power use.
* Lowering the internal rendering resolution and applying an upscale pass.
* Reducing the frame rate to save power. Note: A lower frame rate can affect gameplay.
* Stopping world rendering when full-screen menus or UI elements appear, or when the game is paused.
* Pausing the game when input idle is detected and the player is inactive.

## Screen dimensions

While different gaming handhelds have varying screen resolutions, you can rely on the following standards:

* The diagonal screen size is at least 7 inches (17.8 cm).
* The screen has an aspect ratio of either 16:9 or 16:10.

Call the [GetIntegratedDisplaySize](/windows/win32/api/sysinfoapi/nf-sysinfoapi-getintegrateddisplaysize) function to get the diagonal size of the display integrated into the handheld.

## Handheld experience best practices samples

For more insights about building and optimizing your game for handheld devices, Microsoft released two samples: a native C++ sample and a Unity managed C# sample. Both provide a similar set of best practices for how to use APIs to easily manage your game's handheld experience.

* Determine if a device is a handheld.
* Determine if a device is running on battery power, charging, or using external power.
* Look up device-specific properties, including integrated display properties.
* Handle DPI changes and scale UI accordingly.
* Use virtual keyboards for text entry.
* Look up network devices and types.
* Determine network and Bluetooth&#174; connectivity.
* Handle input from the gamepad, keyboard, and mouse.
* Determine the input modality. For example, identifying the most recently used input device.

Microsoft updates these samples as Windows adds enhancements that benefit handheld gaming scenarios and as feedback is gathered from game developers who build games for these devices.

To get these samples, see the following resources:

* Native C++ Sample: [C++ Sample on GitHub](https://aka.ms/hhexpsample).
* Unity Managed C# Sample: [Unity Managed C# Sample on GitHub](https://aka.ms/hhexpsample_unity).