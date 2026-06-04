---
title: "Beta/Game Preview Notification"
kindex:
- XR117 Beta/Game Preview Notification
- Beta/Game Preview Notification FMA
- Beta/Game Preview Notification FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Beta/Game Preview Notification"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-117 : Beta/Game Preview Notification

***

## FMA scenario severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-43)*

<br/>

**Test cases**

<br />

**117-01 Beta/Game Preview Notification to Users**

| Scenario                                                                                                                                                                                                                                                                                                                                              | Severity          | Platform                       |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| A CU is submitted for a title with the only intention being to shut down access (for example, the beta finishes) and the only message displayed refers to closure with no beta notification or splash screen.                                                                                                                                               | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The beta or game preview notification wording meets the requirements but the notification is only displayed on first boot and not on subsequent boots.                                                                                                                                                                                                   | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                                                                                                                                                                                                  | Very Minor (1)    |                                |
| During the launch experience, the title displays a splash screen or message indicating that it's a beta or Game Preview title. However, it provides only one additional detail about what this status entails (for example, that some features might not function correctly, that the title might be unstable, or that support is limited).  | Minor (2)         | Xbox One, Xbox Series, Windows |
| The title contains in‑title text that incorrectly identifies the title as a Game Preview when it's actually a beta, or vice versa. The title is correctly identified as a beta or Game Preview in the Guide and in the Microsoft Store.                                                                                                         | Minor (2)         | Xbox One, Xbox Series, Windows |
| The title contains in‑title text that incorrectly identifies the title as a Game Preview when it's actually a beta, or vice versa. The same incorrect identification also appears in the Guide and the Microsoft Store.                                                                                                                                       | Moderate (6)      | Xbox One, Xbox Series, Windows |
| The title displays an appropriate pre-release notification, but the message is displayed too briefly (for example, three seconds or less on screen).                                                                                                                                                                                                          | Moderate (6)      | Xbox One, Xbox Series, Windows |
| The title doesn't display a splash screen or message during the launch experience that informs the user that the title is a beta or game preview.                                                                                                                                                                                                       | Critical (12)     | Xbox One, Xbox Series, Windows |
| During the launch experience, the title displays a splash screen or message that identifies the title as a beta or Game Preview. However, the message provides no additional information about what this status entails, such as potential instability, incomplete features, performance issues, or support boundaries. | Critical (12)     | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                                                                                                                                                                                                  | Catastrophic (22) | |


<br />

*Notes*
- The title name in the system can include the words "beta" or "game preview" however a splash screen or message during launch is still required.