---
title: "XR115 Addition and Removal of Users or Controllers During Gameplay"
kindex:
- XR115 Addition and Removal of Users or Controllers During Gameplay
- Addition and Removal of Users or Controllers During Gameplay FMA
- Addition and Removal of Users or Controllers During Gameplay FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Addition and Removal of Users or Controllers During Gameplay"
edited: 17/10/2025
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-115 : Addition and Removal of Users or Controllers During Gameplay

***

## FMA Scenario Severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-27)*

<br/>

**Test Cases**

<br />

**115-01 Addition of Users**

| Scenario                                                                                                                             | Severity          | Platform              |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                                                 | Not Relevant (-4) |                       |
| No current scenario.                                                                                                                 | Very Minor (1)    |                       |
| No current scenario.                                                                                                                 | Minor (2)         |                       |
| No current scenario.                                                                                                                 | Moderate (6)      |                       |
| The title automatically interrupts the active user's gameplay when a second controller is powered on and signs into an Xbox profile. | Critical (12)     | Xbox One, Xbox Series |
| The title transitions the user to the title screen without messaging upon establishment of a new user.                               | Catastrophic (22) | Xbox One, Xbox Series |


<br />

*Notes*
- No current FMA Notes to consider.

<br />
<br />


**115-02 Removal of Controllers**

| Scenario                                                                                                                                                                                                                                              | Severity          | Platform              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| Disconnecting the active Xbox controller and then connecting another to continue requires that user to find the in-title account picker in order to assign themselves to the controller, without having to exit an in-progress gameplay session.      | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                  | Very Minor (1)    |                       |
| No current scenario.                                                                                                                                                                                                                                  | Minor (2)         |                       |
| The title returns the user to the initial interactive state after the Xbox Controller is powered off in an area where no game progress is lost (e.g. during the title's menus before entering gameplay).                   | Moderate (6)      | Xbox One, Xbox Series |
| The title removes users from online game sessions if they disconnect the Xbox controller.                                                                                                                                                 | Critical (12)     | Xbox One, Xbox Series |
| The title does not accept input from a second controller which is connected after removing the batteries from the primary controller.                                                                                                                 | Critical (12)     | Xbox One, Xbox Series |
| The title returns the user to the main menu after powering off the Xbox controller during active gameplay.                                                                                                               | Critical (12)     | Xbox One, Xbox Series |
| The title does not allow the user to resume active gameplay after powering off the Xbox controller and syncing a new one.                                                                                                         | Critical (12)     | Xbox One, Xbox Series |
| Disconnecting the active Xbox controller and then connecting another to continue requires that user to find the in-title account picker in order to assign themselves to the controller, resulting in having to exit an in-progress gameplay session. | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                  | Catastrophic (22) |


<br />

*Notes*
- Stability issues to be logged under XR-001 - Title Stability.
- Suggested probability of 3 for two controllers. Suggested probability of 2 for three or more controllers. Increase/decrease where it is felt appropriate to do so (e.g. depending on game area/mode/opportunity to occur)


<br />
<br />


**115-03 Removal of Users**

| Scenario                                                                                                                                                | Severity          | Platform              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                                                                    | Not Relevant (-4) |                       |
| No current scenario.                                                                                                                                    | Very Minor (1)    |                       |
| No current scenario.                                                                                                                                    | Minor (2)         |                       |
| No current scenario.                                                                                                                                    | Moderate (6)      |                       |
| The title does not update to the relevant user context when the active user changes. | Critical (12)     | Xbox One, Xbox Series |
| The title does not prompt the user with an account picker or return to the front end after signing out of the active profile. | Critical (12) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                    | Catastrophic (22) | |


<br />

*Notes*
- No current FMA Notes to consider.