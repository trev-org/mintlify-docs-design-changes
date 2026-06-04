---
title: "XR123 Installation and unlock of game add-ons or consumables during gameplay"
kindex:
- XR123 Installation/Unlock of Game Add-Ons or Consumables During Gameplay
- Installation/Unlock of Game Add-Ons or Consumables During Gameplay FMA
- Installation/Unlock of Game Add-Ons or Consumables During Gameplay FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Installation and unlock of game add-ons or consumables during gameplay"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-123 : Installation/Unlock of Game Add-Ons or Consumables During Gameplay

***

## FMA scenario severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-21)*

<br/>

**Test cases**

<br />

**123-01 Installation or unlock of game add-ons or consumables during gameplay**

| Scenario                                                                                                                                                                                                                                                                                                   | Severity          | Platform              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| DLC that was downloaded during a session doesn't appear in the title until the user returns to the IIS. The user isn't informed that they need to do this.                                                                                                                                         | Not Relevant (-4) | Xbox One, Xbox Series |
| When a DLC finishes downloading, the user sees a reboot prompt. <br/>>Selecting **Yes** auto-reboots the title and returns the user to the main menu, then the user can immediately use the DLC. Selecting **No** allows the user to continue playing without immediate access to the DLC. | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                                                       | Very Minor (1)    |                       |
| No current scenario.                                                                                                                                                                                                                                                                                       | Minor (2)         |                       |
| No current scenario.                                                                                                                                                                                                                                                                                       | Moderate (6)      |                       |
| DLC that a user downloads during a session isn't populated until the title is restarted.                                                                                                                                                                                                                     | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                                                       | Catastrophic (22) |


<br />

*Notes*
- A session includes during gameplay, suspend, constrain, and other states. It covers the period from start until termination of the title.
- Suggested probability of 4. Lower for areas of the title where the opportunity for the issue to occur lessens.


<br />
<br />


**123-02 Installation or unlock of game add-ons or consumables as part of main game package during streaming install**

| Scenario                                                                                                                                                                                                                                                                                                   | Severity          | Platform              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| When a DLC finishes downloading, the user sees a reboot prompt. <br/>>Selecting **Yes** auto-reboots the title and returns the user to the main menu, then the user can immediately use the DLC. Selecting **No** allows the user to continue playing without immediate access to the DLC. | Not Relevant (-4) | Xbox One, Xbox Series |
| A user can't download DLC during streaming installation and it stays in the installation queue. A user can successfully download the DLC once the main title finishes full installation.                                                                                                                  | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                                                       | Very Minor (1)    |                       |
| No current scenario.                                                                                                                                                                                                                                                                                       | Minor (2)         |                       |
| No current scenario.                                                                                                                                                                                                                                                                                       | Moderate (6)      |                       |
| DLC that a user downloads while the title is installing isn't visible in any area of the title.                                                                                                                                                                                                                                                                                    | Critical (12)     | Xbox One, Xbox Series |
| DLC that a user downloads while the title is installing is visible, but not accessible. No reason is given when the user tries to play the content.                                                                                                                                                                                                    | Critical (12)     | Xbox One, Xbox Series |
| DLC that a user downloads while the title is installing can't be accessed upon full installation. | Critical (12) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                                                       | Catastrophic (22) | |


<br />

*Notes*
- Suggested probability of 2. Lower where it's felt appropriate to do so.