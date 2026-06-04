---
title: "XR124 Game Invitations"
kindex:
- XR124 Game Invitations
- Game Invitations FMA
- Game Invitations FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Game Invitations"
edited: 17/10/2025
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-124 : Game Invitations

***

## FMA Scenario Severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-41)*

<br/>

**Test Cases**

<br />

**124-01 Game Invitations**

| Scenario                                                                                                                                                                                                                                                                            | Severity          | Platform              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                                                                                                                                                                                                | Not Relevant (-4) |                       |
| No current scenario.                                                                                                                                                                                                                                                                | Very Minor (1)    |                       |
| No current scenario.                                                                                                                                                                                                                                                                | Minor (2)         |                       |
| The title does not immediately transition the user into a game session, but does so when the user returns to the main menu/a previous menu and no messaging or notification is provided.                                  | Moderate (6)      | Xbox One, Xbox Series |
| The title does not inform the user that they must return to the main menu/a previous menu in order to enter the multiplayer session. | Moderate (6) |Xbox One, Xbox Series | 
| The title does not complete an invite sent via in-game. The invited user remains in the same game area and no clear error messaging is displayed.                                                                                                          | Critical (12)     | Xbox One, Xbox Series |
| The title takes the user to the main menu when accepting a game invitation sent via in-game and no messaging/notifications are displayed to help the user to join the game session.                                                                                                         | Critical (12)     | Xbox One, Xbox Series |
| The title does not display a system toast when a game invitation has been received. | Critical (12) | Xbox One, Xbox Series |
| A multiplayer game does not support the ability to send an invite via in-game functionality where expected (generally where the 'Join' option is available in the Friends list, see test case 064-1-2) | Catastrophic (22) | Xbox One, Xbox Series |


<br />


*Notes*
- This XR is for the implementation of in-game invites, not invites sent via the guide.
- Cross-platform PC <-> Xbox invitations may be optionally supported by the title.
- Timing: Wait until publisher/legal screens start appearing during the initial boot before accepting an invite. Accepting an invite is not expected to work before this point (during the splash screen).
- Game design may dictate that pre-conditions are met before allowing multiplayer (e.g. playing a tutorial first).
- Game design may allow in game server region switching. The invite must work regardless.
- If the title takes the user to the main menu when accepting a game invite, the title must provide sufficient messaging/notifications to help the user enter the game session. For example, the game boots to IIS where a 'Press A' prompt is displayed. This is only valid if there is an option to then proceed into the game session without requiring a new invite.
- Suggested probability of 4. Increase/decrease where it is felt appropriate to do so (e.g. depending on game area/mode)