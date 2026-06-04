---
author: JerGup
title: "Game launchers and handhelds"
description: "Guidance for launchers on Windows gaming handheld devices."
kindex: Game launchers and handhelds
ms.author: jgup
ms.topic: article
edited: 00/00/0000
ms.date: 08/15/2025
permissioned-type: public
---

# Game launchers and handhelds

Game launchers can take many different forms. When a player starts a game, some games don’t start directly. Instead, 
they start a launcher. Many games and publishers rely on launchers as a way to help keep players engaged. Launchers can also 
be used to set options, visit the game’s website, or interact with other game functionality prior the game truly starting. These 
launchers need to work well on gaming handheld devices. Launchers, just like games, need to follow the guidance in these articles.

- [Guidelines for the Handheld Compatibility program, designed by Xbox](handheld-guidance.md)
- [Additional considerations for handheld devices](handheld-considerations.md)

While the guidance given to games to allow them to work on handheld devices applies equally to launchers, they have some 
additional considerations that developers need to keep in mind.

## Full screen experience

When gaming handhelds start, OEMs can configure them to launch a dedicated gaming app that operates full screen. For example, on the ASUS ROG Xbox Ally X, the device starts into a full-screen version of the Xbox app. Players can easily access their catalog of games and have the opportunity to engage and purchase new games.

OEMs can configure what is the default full-screen app. When this is configured:

- Many standard Windows experiences are suppressed, such as the taskbar, some startup apps, and other services. This suppression results in more memory being available to the games.
- The default app can ensure a policy of only one game running at a time.
- When resuming from sleep or hibernate, the player is returned to the game or app. If the games and apps are closed before sleep or hibernate, the player is returned to the default gaming app.
- The default app automatically launches when the device is powered on from a shutdown state.
- Games and applications automatically launch in full-screen mode.

Overall, Windows calls this the *full screen experience* (FSE).

To see if FSE is active on the gaming handheld, have your game call the `IsGamingFullScreenExperienceActive` function. The following code example shows how this function is used.

```cpp 
#include <gamingexperience.h>
#pragma comment(lib, "windowsapp.lib")

if (IsApiSetImplemented("api-ms-win-gaming-experience-l1-1-0"))
{
   if (IsGamingFullScreenExperienceActive())
   {
      // Full Screen Experiences (FSE) is active
   }
}
```

Players on the device can turn FSE on and off. Apps and games can be notified about these changes by registering for change notifications by using the **RegisterGamingFullScreenExperienceChangeNotification** function. To unregister for the change notifications, use the ***UnregisterGamingFullScreenExperienceChangeNotification** function. The following code example shows how to register for the change notification. When responding to the notification, be sure to then query for the current state of FSE.

```cpp
static GAMING_FULL_SCREEN_EXPERIENCE_REGISTRATION g_fseHandle = nullptr;

// ...

if (IsApiSetImplemented("api-ms-win-gaming-experience-l1-1-0"))
{
  RegisterGamingFullScreenExperienceChangeNotification([](PVOID)
  {
    // Full Screen Experience (FSE) changed, query if active
    if (IsGamingFullScreenExperienceActive())
    {
      // FSE has changed to active
    }
    else
    {
      // FSE has changed to inactive
    }
  }, nullptr, &g_fseHandle);
}

// ...

if (IsApiSetImplemented("api-ms-win-gaming-experience-l1-1-0"))
{
   UnregisterGamingFullScreenExperienceChangeNotification(g_fseHandle);
}
```

To get information about full screen experiences, use Windows SDK version 10.0.26100.3916 or later. It was released in April 2025.

## Resources

Game launchers frequently run in the background and consume resources such as memory. Gaming handhelds have limited memory and resources compared to typical PCs. As a result, game launchers need to follow best practices to deliver the best experience for players.

- Minimize resource usage by the launcher when it's not in the foreground.
- After the launcher successfully launches a game, consider terminating the launcher (or at least minimizing its resources) to give the game more resources.
- Avoid installing to the task tray because it isn't available to players in FSE.
- Ensure that players have an easy way to close the launcher.
- As with games, consider how launchers can minimize their [power usage](/gaming/gdk/docs/gdk-dev/pc-dev/handheld/handheld-considerations#power) and effect on battery life.

## Web technologies

Launchers frequently rely on HTML to deliver content. As with all the other parts of the launcher and the developer 
guidance to work well on gaming handhelds, ensure the following requirements:

- HTML content functions by default in a way that works well and is readable on a 7-inch (17.8 cm) screen held at 12 inches (30.5 cm) from the face.
- Any iconography is accurate for the device.
- Text input uses a virtual keyboard and doesn't require a physical keyboard.

Most importantly, users must be able to navigate any HTML content by using the gamepad. Ensure that all your web-delivered 
content is designed with a gamepad in mind by using the HTML Gamepad API. For more information, see 
[Using the Gamepad API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API).

## Game overlays and guide button

When FSE is active, Windows has exclusive access to the **Guide** button on controllers. When 
a player short-presses the **Guide** button in the Full Screen Experience, it brings up Xbox Game Bar. Players have quick access to system utilities and OEM widgets. Xbox Game Bar is extensible through the Game Bar Widget SDK. For more information, see the 
[Xbox Game Bar SDK](/gaming/game-bar/).  

To ensure compatibility with existing experiences that use the **Guide** button, a player can press **View+Menu** 
to send a **Guide**  button to the focused application. The controller driver sends both **View**, **Menu**, and 
**Guide** button presses as part of the input payload. A long press of the **Guide** button opens an optimized **Task Switcher** 
where players can press **View** on the selected app to send a **Guide** button press.

## Foreground and background management

Games and launchers don't need to do anything special for Windows foreground management with FSE. Ensure that their foreground window management works correctly on Windows (regardless of whether FSE is active). 

Windows is designed to keep players in control of the window they interact with. A foreground window can bring other apps to the foreground, but background apps can't take the foreground. Windows enforces foreground control as an operating system–level privilege.

Some scenarios common to games and launchers require an app to more explicitly control foreground management. As an example, some games might have a single instance where they redirect their activation of a new process back to one that's already running in the background. The new process needs to explicitly transfer the foreground privilege back to the process that's already running. Games handle these transfers by using [AllowSetForegroundWindow](/windows/win32/api/winuser/nf-winuser-allowsetforegroundwindow), [CoAllowSetForegroundWindow](/windows/win32/api/objbase/nf-objbase-coallowsetforegroundwindow), and [SetForegroundWindow](/windows/win32/api/winuser/nf-winuser-setforegroundwindow).

When FSE is inactive&mdash;the default state for games on Windows&mdash;incorrect foreground behavior has little effect on players. The app's icon flashes in the taskbar to get their attention, and when the player selects the icon, the app moves into the foreground.

When FSE is active, the taskbar is hidden. As a result, the player is unlikely to notice a background window and can't compensate for it.


