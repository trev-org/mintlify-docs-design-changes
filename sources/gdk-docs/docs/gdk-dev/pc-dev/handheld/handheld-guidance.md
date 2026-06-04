---
author: JerGup
title: "Guidelines for the Handheld Compatibility program, designed by Xbox "
description: "Provides the guidelines for developing games that will run on Windows handheld device and satisfy the Xbox handheld compatibility guidelines."
kindex: Handheld game development
ms.author: jgup
ms.topic: article
edited: 00/00/0000
ms.date: 05/30/2025
permissioned-type: public
---

# Guidelines for the Handheld Compatibility program, designed by Xbox 

The Handheld Compatibility program, designed by Xbox, helps to give players confidence that games will work well on a gaming handheld. Making games work great on a handheld requires a few extra considerations when comparing how that same game might behave in a PC desktop environment. While it's true that games on handhelds are just PC Games, to work well on a handheld the games need to consider what it means to ship on a small screen, held at 12 inches from the eyes, where the input comes from a gamepad and not a mouse and keyboard.

There are five main guidelines that developers should consider. This document covers what those five guidelines are at a high level and provides guidance on how the game developer can satisfy those guidelines.

## Guideline 1: Defaults just work

Gamers expect console-like experiences on handhelds. They shouldn't need to find a menu and tweak some setting to get the game into a handheld mode. Using just the controller, they should be able to navigate all elements of the game. While gamers may want customization and variety in rendering options (black levels, shadows, performance vs quality), they still expect to have a good default experience.

The key to having defaults just "work" is knowing you are on a gaming handheld. The following code can be used to determine if the game is on a gaming handheld or not.

```c
#ifndef DEVICEFAMILYDEVICEFORM_GAMING_HANDHELD
#define DEVICEFAMILYDEVICEFORM_GAMING_HANDHELD    0x0000002E 
#endif
  
DWORD DeviceForm; 
RtlGetDeviceFamilyInfoEnum(nullptr, nullptr, &DeviceForm); 
  
if (DeviceForm == DEVICEFAMILYDEVICEFORM_GAMING_HANDHELD) 
{ 
   // Do stuff for a handheld 
} 
```

When launching the game, the game can check if the device is a gaming handheld. If it is a gaming handheld, the game should choose the defaults that create a good experience:

* Choose a resolution and settings that are a good match for the typical handheld capabilities.
* Change default input to expect a gamepad and pop up a virtual keyboard when text input is expected.
* Make the fonts larger (more on this in the [Guideline 4: UI readability](#guideline-4-ui-readability) section below).

When developing for handheld devices, it's important to go beyond simply detecting that the game is running on one. Developers should also think about how relying on a gamepad — rather than a mouse and keyboard — affects the player experience. This impacts things like how users navigate the interface and how focus is managed.

You may also need to address input challenges, such as the reduced precision of a gamepad compared to a mouse. Features like aim assist can help compensate for this.

To get started with making sure "defaults just work" on a handheld, the following accessibility guides are excellent resources:

* [Xbox Accessibility Guideline 101: Text display](/gaming/accessibility/xbox-accessibility-guidelines/101)
* [Xbox Accessibility Guideline 107: Input](/gaming/accessibility/xbox-accessibility-guidelines/107)
* [Xbox Accessibility Guideline 112: UI navigation](/gaming/accessibility/xbox-accessibility-guidelines/112)
* [Xbox Accessibility Guideline 113: UI focus handling](/gaming/accessibility/xbox-accessibility-guidelines/113)

## Guideline 2: Iconography

On-screen hints such as the iconography help the gamer understand how to navigate and play the game. Make sure that there aren't indications suggesting input methods that aren't available natively on the handheld that will cause confusion.

## Guideline 3: Text input

Games written for PC typically assume the existence of a mouse and keyboard. On a gaming handheld, the default input is the gamepad. When entering text in the game, the developers must make sure that gamers can enter text by using just the gamepad with a virtual keyboard.

Virtual keyboards should be triggered whenever text input may need to be entered. Two typical approaches are to launch the virtual keyboard when either a "touch" is detected on the textbox or when the textbox has "input focus" and the "A" button is pressed.

Games are free to create their own virtual keyboards. They can also leverage the virtual keyboard that is part of Windows. The following code shows how a game can launch and then hide the Windows virtual keyboard in gamepad mode.

```C
#include <winrt/windows.ui.viewmanagement.core.h>
using namespace winrt::Windows::UI::ViewManagement::Core;
#pragma comment(lib,"windowsapp.lib")


// CoreInputViewKind::Gamepad enum requires headers from 26100.3624 Windows SDK or greater
// Otherwise, use static_cast<CoreInputViewKind>(7) for earlier SDKs

CoreInputView::GetForCurrentView().TryShow(CoreInputViewKind::Gamepad);

CoreInputView::GetForCurrentView().TryHide();
```

This code gets the appropriate `ICoreInputView3` interface and calls the `TryShow` method, passing in the identifier for the new Gamepad-enabled virtual keyboard. `TryHide` will hide the keyboard if it is currently displayed.

> [!NOTE]
> The `TryShow` method will only show the keyboard if Windows determines that showing the keyboard is appropriate. For example, calling this method on a device with a physical keyboard attached (and other distinctions) may not display the virtual keyboard.  On a handheld device with a touchscreen, this call works as expected.

> [!NOTE]
> This API above has no dependency on the GDK. It is a Windows API that was introduced to Windows 10 in version 10.0.17763.0, released October 2018, however, the `CoreInputViewKind::Gamepad` enumeration requires Windows SDK 10.0.26100.3624 or greater.

## Guideline 4: UI readability

Small screens that are 7" wide are common on gaming handhelds. These small screens can make it hard to read text UI in the game. The guidance to game developers for these small screens is:

* If the screen is 1280 x 720, the pixel height of the text should be at least 9 pixels – we recommend that the height is 12 pixels or greater.
* If the screen is 1920 x 1080, the pixel height of the text should be at least 14 pixels – we recommend that the height is 18 pixels or greater.

Text readability is a major source of accessibility issues. Many games recognize this and have an in-game setting for font sizes. An easy way to satisfy text readability is to automatically set one of these larger text sizes as the default when you detect that the game is running on a handheld device.

While most games are using bitmapped fonts, bitmapped fonts will not automatically scale based on screen size, DPI, or other Windows settings. Make sure that if you are using bitmapped fonts, you include choices for larger text sizes.

If developers are using a TrueType font in their game, they can use [DirectWrite](/windows/win32/directwrite/direct-write-portal) for text. `DirectWrite` can take advantage of key Windows features such as font scaling, DPI, and other windows settings.

## Guideline 5: Supported display

Games use the screen real estate to provide a great experience. Games shouldn't be substantially letter-boxed or rendered at aspect ratios that distort gameplay. With the small screens that are typical for gaming handhelds, substantial letter-boxing can make the make the small screens even smaller, affecting gameplay.

## Other considerations

In addition to the five guidelines listed, see [Additional considerations when developing GDK games for handheld Windows devices](handheld-considerations.md).