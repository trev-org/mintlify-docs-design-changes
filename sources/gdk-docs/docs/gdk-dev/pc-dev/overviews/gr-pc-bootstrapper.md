---
author: dkushmerick
title: "PC Bootstrapper"
description: "Describes how the PC Bootstrapper improves pre-launch scenarios for MSIXVC packaged games for PC."
kindex:
- PC Bootstrapper
- Bootstrapper
- GamingServicesUI.exe
- GamingServicesUI
- MSIXVC
- PC Packaging
- GRTS
- SplashScreenImage
- splash screen
- E_FAIL error when attempting to sign in on PC
- sign in, E_FAIL error on PC
- configuring your title to run as a single instance
- single instance, configuring your title to run as
ms.author: dmcmahon
ms.topic: article
edited: 05/13/2022
ms.date: '08/01/2022'
permissioned-type: public
---

# PC Bootstrapper  

The PC Bootstrapper improves the launch experience for [MSIXVC packaged](../../../features/common/packaging/overviews/packaging-getting-started-for-PC.md) PC games by providing consistency, communicating launch status, ensuring the installed game is up to date, syncing cloud saves, and preventing multiple instances of the game from running. It is presented during side-loaded development workflows and when an installed MSIXVC packaged title is launched in Retail scenarios.

Prior to the May 2022 [Gaming Runtime Services (GRTS)](../../intro/gaming-runtime-glossary.md) release, the following issues impact the PC game launch experience:
* End users are not informed of game launch status until the game window becomes visible.
* Developers need to ensure that the installed game is up to date.
* Cloud saves are not synced until the game process launches.
* Developers need to prevent multiple instances of their game from launching.

Starting with the May 2202 GRTS release, the PC Bootstrapper addresses the above launch issues by:
* Showing a splash screen immediately after the user tries to launch the game to communicate that the process has started.
* Ensuring the installed game is updated to the latest version available in Partner Center before the game process starts.  You can optionally check for and apply updates manually by following the steps in [checking for updates](../../../store/commerce/fundamentals/xstore-checking-for-updates.md).
* Syncing cloud saves automatically before the game process starts.
* Preventing multiple launches of an installed game by automatically restricting it to a single instance.

For developers using Simplified User Mode (available starting with the June 2022 GDK), the runtime will do the appropriate enforcement even in loose deploy scenarios where the main PC Bootdeveloper flow is not invoked.

## What it is

The PC Bootstrapper is a Gaming Runtime utility (**GamingServicesUI.exe**) that helps ensure an MSIXVC packaged PC game is in a healthy state before the game process starts.

Whenever an installed MSIXVC packaged PC game is launched (via the Xbox app, Start menu, Desktop shortcut, or command line tools), the [Gaming Runtime Services (GRTS)](../../intro/gaming-runtime-glossary.md) first invokes the PC Bootstrapper. Once the PC Bootstrapper has ensured pre-launch requirements are met, the PC Bootstrapper process launches the game.

The PC Bootstrapper is part of the game launch flow for all MSIXVC packaged PC games acquired via the Xbox App or Microsoft Store starting with the May 2202 GRTS release.

For developer packages sideloaded with [wdapp.exe install](../../../tools/tools-pc/commandlinetools/gr-wdapp.md#wdapp_install), the /bootstrapper flag must be included.

Note that when debugging an MSIXVC packaged title with the PC Bootstrapper enabled, the game process will be a child of another helper process.

## How it works  

Below is a summary of how the PC Bootstrapper works:
* When an MSIXVC packaged PC game is launched, the PC Bootstrapper first checks to see if the game is already running. If the game is running, the PC Bootstrapper attempts to bring the game window to the foreground and then exit the PC Bootstrapper process. (Note: A new instance of the game will not be started in this case.)
* If no other instances of the game are running, then the PC Bootstrapper shows the SplashScreenImage (specified in [MicrosoftGame.config](../../../reference/system/microsoftgameconfig/microsoftgameconfig-schema.md) file) immediately on launch to give feedback that the game is trying to start. 
* Once the splash screen is visible, it starts the game process. The PC Bootstrapper continues to run until the game window is visible.
* Once the game window is visible, the PC Bootstrapper's job is complete and the PC Bootstrapper process exits.

## Benefits  

Below is a summary of benefits of the PC Bootstrapper:
* Sets the current working directory for the game process to be the root of the game's install location.
  * Ensures only one executable process in the installed game directory is running at a time.
* If an instance is already running, it brings that executable's window to the foreground.
* Adds a launch experience, so there is more clarity that progress is being made between launching the game and the game's primary window being visible.

## Gaming Runtime Services (GRTS) dependency

The PC Bootstrapper has a dependency on the Gaming RunTime Service (GRTS) that is distributed automatically to all Windows 10/11 PCs. If GRTS is out of date on your development PC, it can generate an error (E_FAIL) when attempting to sign in.

To make sure you have the latest version of Gaming Services on your PC:  

1. Verify your Windows 10/11 developer environment is set to [RETAIL mode and not in a developer sandbox](/windows/apps/get-started/developer-mode-features-and-debugging).  
2. Close all other games and apps.  
3. Use this link to go to the Microsoft Store page for Microsoft Gaming Services (and select "More details" to expand the Store page if needed): https://www.microsoft.com/store/productId/9MWPM2CQNLHN  
4. Ensure it is current and does not tell you it needs updating.  
5. Also, go to the Library view in the Microsoft Store app to update all apps and components.  



## Questions or concerns  

If you have questions or concerns about the PC Bootstrapper, please post on the [Xbox Developer Forums](https://forums.xboxlive.com/index.html) or reach out to your Account Manager.

## See also  

[MicrosoftGame.config Reference (sample MicrosoftGame.config and schema)](../../../reference/system/microsoftgameconfig/microsoftgameconfig-schema.md)  
[Utilizing Microsoft Gaming Development Kit tools to install and launch your PC title](../../../tools/tools-pc/launching-on-pc.md)  