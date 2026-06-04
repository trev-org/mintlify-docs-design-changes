---
title: "XR074 Loss of Connectivity to Xbox and Partner Services"
kindex:
- XR074 Loss of Connectivity to Xbox and Partner Services
- Loss of Connectivity to Xbox and Partner Services FMA
- Loss of Connectivity to Xbox and Partner Services FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Loss of Connectivity to Xbox and Partner Services"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-074: Loss of Connectivity to Xbox and Partner Services

***

## FMA scenario severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-9)*

<br/>

**Test cases**

<br />

**074-01 WAN disconnection to Xbox services**

| Scenario                                                                                                               | Severity          | Platform                       |
|------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| No current scenario.                                                                                                   | Not Relevant (-4) |                                |
| The title displays an incorrect error message when disconnecting from the Xbox network during any online game mode.                                                                                                   | Very Minor (1)    | Xbox One, Xbox Series, Windows                               |
| The title doesn't display an error message when disconnecting while viewing a leaderboard. | Minor (2) | Xbox One, Xbox Series, Windows |
| The title enters an unresponsive state for 10 seconds on disconnection before recovering. (Log under Title Stability)                           | Minor (2)         | Xbox One, Xbox Series, Windows |
| When playing offline, the user returns to the main menu without losing gameplay progress.| Moderate (6) | Xbox One, Xbox Series, Windows |
| The title doesn't display an error message indicating a loss in connection to the Xbox network during an online session. | Moderate (6)      | Xbox One, Xbox Series, Windows |
| When playing offline, the user returns to the main menu with loss of gameplay progress. | Critical (12) | Xbox One, Xbox Series, Windows |
| The title enters a long term or indefinite unresponsive state when disconnecting. (Log under Title Stability)                                                              | Critical (12)     | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                   | Catastrophic (22) | |


<br />


*Notes*
- Suggested probability of at least 2. Use -3 for areas of the title where the opportunity for the issue to occur is small.
- Expected connected storage system behavior: The title reports 'Package execution state: 0 (unknown)' following a further suspension within the main menu after reconnecting to the Xbox network.
- Log issues observed on reconnection under Title Integrity.

<br />
<br />


**074-02 direct disconnection**

| Scenario                                                                                                               | Severity          | Platform                       |
|------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| No current scenario.                                                                                                   | Not Relevant (-4) |                                |
| The title displays an incorrect error message when disconnecting from the Xbox network during any online game mode.    | Very Minor (1)    | Xbox One, Xbox Series, Windows |
| The title doesn't display an error message when disconnecting while viewing a leaderboard.                            | Minor (2)         | Xbox One, Xbox Series, Windows |
| When playing offline, the user returns to the main menu without losing gameplay progress.                            | Moderate (6)      | Xbox One, Xbox Series, Windows |
| The title doesn't display an error message indicating a loss in connection to the Xbox network during an online session. | Moderate (6)      | Xbox One, Xbox Series, Windows |
| When playing offline, the user returns to the main menu with loss of gameplay progress.                                  | Critical (12)     | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                   | Catastrophic (22) | |


<br />

*Notes*
- Log issues observed on reconnection under Title Integrity.
- Ensure to check a title's MicrosoftGame.config for `<RequiresXboxLive>true</RequiresXboxLive>` as this value causes the system to terminate the title. This condition often applies to Online Only titles.
- Suggested probability of at least 2. Use -3 for areas of the title where the opportunity for the issue to occur is small.

<br />
<br />


**074-03 suspended disconnection to Xbox services**

| Scenario                                                                                                                                                                           | Severity          | Platform              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                                                                                               | Not Relevant (-4) |                       |
| The title displays an incorrect error message when resuming from a suspended disconnection during any online game mode.                                                                                                                                                               | Very Minor (1)    | Xbox One, Xbox Series                      |
| The title doesn't display a message informing the user that they were disconnected from a multiplayer session after resuming from a suspended state. | Minor (2)         | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                               | Moderate (6)      |                       |
| The title doesn't allow the user to complete a non-online game session when resuming from a suspended disconnection. | Critical (12) | Xbox One, Xbox Series |
| The title crashes or resumes to a black screen when the title resumes after suspended disconnection while in online multiplayer. (Log under Stability.)                            | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                               | Catastrophic (22) |


<br />

*Notes*
- Suggested probability of at least 2. Use -3 for areas of the title where the opportunity for the issue to occur is small.
- Expected connected storage system behavior: The title reports 'Package execution state: 0 (unknown)' following a further suspension within the main menu after reconnecting to the Xbox Network service.
- Log issues observed on reconnection under Title Integrity.


<br />
<br />


**074-04 Xbox service reconnection after suspend**

| Scenario                                                                                                                                                                                         | Severity          | Platform              |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| The title displays a 'Joining Game' message for approximately 2 minutes before informing the user the session is no longer available.                                            | Not Relevant (-4) | Xbox One, Xbox Series |
| The title doesn't allow the user to transition into any multiplayer game sessions following an Xbox service reconnection during a suspended state. | Not Relevant (-4) | Xbox One, Xbox Series |
| The title doesn't allow users to join into a lobby created following a reconnection to the Xbox network during suspension. | Not Relevant (-4) | Xbox One, Xbox Series |
| After resuming from a suspended state, the title doesn't successfully place users into an online game session following an Xbox service reconnection. | Not Relevant (-4) | Xbox One, Xbox Series |
| The title fails to send a game invitation to a user after a loss of connection to the Xbox network and a subsequent suspension. | Not Relevant (-4) | Xbox One, Xbox Series |
| The title displays an incorrect error message following an Xbox service reconnection during a suspended state in any online game mode.                                                                                                                                                                             | Very Minor (1)    | Xbox One, Xbox Series                      |
| The title doesn't display a message notifying the user they've been disconnected from a multiplayer session following an Xbox reconnection during a suspended state in a multiplayer session.                                                                                                                                                                             | Minor (2)         | Xbox One, Xbox Series                      |
| No current scenario.                                                                                                                                                                             | Moderate (6)      |                       |
| The title doesn't allow the user to complete a non-online game session when resuming from a suspended disconnection. | Critical (12) | Xbox One, Xbox Series |
| The title crashes or resumes to a black screen when the title resumes after reconnection while in online multiplayer. (Log under Stability.)                                                     | Critical (12)     | Xbox One, Xbox Series |
| The title doesn't allow the user to view posted Leaderboard scores when reconnecting to the Xbox network during a suspended state. No messaging is displayed informing the user of the problem. | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                             | Catastrophic (22) |


<br />


*Notes*
- Suggested probability of at least 2. Use -3 for areas of the title where the opportunity for the issue to occur is small.
- Expected connected storage system behavior: The title reports 'Package execution state: 0 (unknown)' following a further suspension within the main menu after reconnecting to the Xbox Network service.
- Log issues observed on reconnection under Title Integrity.


<br />
<br />


**074-05 constant low bandwidth**

| Scenario | Severity | Platform |
| --- | --- | --- |
| No current scenario. | Not Relevant (-4) | |
| The title contains moderately increased loading screens when tested against current speed expectations. | Very Minor (1)    | Xbox One, Xbox Series |
| No current scenario.                                                                                    | Minor (2)         |                        |
| No current scenario.                                                                                    | Moderate (6)      |                        |
| The title exhibits stability issues or data loss when tested against current speed expectations. (Log under Title Stability)        | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                    | Catastrophic (22) |


<br />

*Notes*
- Log stability issues under XR-001: Title Stability.
- Suggested probability of 2. Increase or decrease this value where appropriate (for example, depending on game area or mode).


<br />
<br />


**074-06 variable low bandwidth**

| Scenario                                                                                                | Severity          | Platform               |
|---------------------------------------------------------------------------------------------------------|-------------------|------------------------|
| No current scenario.                                                                                    | Not Relevant (-4) |                        |
| The title contains moderately increased loading screens when tested against current speed expectations. | Very Minor (1)    | Xbox One, Xbox Series|
| No current scenario.                                                                                    | Minor (2)         |                        |
| No current scenario.                                                                                    | Moderate (6)      |                        |
| The title exhibits stability issues or data loss when tested against current speed expectations. (Log under Title Stability)       | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                    | Catastrophic (22) |


<br />

*Notes*
- Log stability issues under XR-001: Title Stability.
- Suggested probability of 2. Increase or decrease this value where appropriate (for example, depending on game area or mode).



<br />
<br />


**074-07 dynamic connectivity loss**

| Scenario                                                                                              | Severity          | Platform                       |
|-------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| The title doesn't provide any error messaging when the connection to partner-hosted services is lost.    | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                  | Very Minor (1)    |                                |
| No current scenario.                                                                                  | Minor (2)         |                                |
| The title displays an error message when the connection to partner-hosted services is lost, but the message doesn't give a reason.                           | Moderate (6)      | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                  | Critical (12)     |                                |
| The title displays an error message that implies issues with Microsoft services.                     | Catastrophic (22) | Xbox One, Xbox Series, Windows |


<br />

*Notes*
- This XR might expose stability issues. Ensure that you log them under XR-001.
- Suggested probability: -3. Increase this value if appropriate (for example, depending on the game area, mode, or opportunity to occur).

<br />
<br />


**074-08 pre-launch downtime**

| Scenario                                                                          | Severity          | Platform                       |
|-----------------------------------------------------------------------------------|-------------------|--------------------------------|
| The title doesn't provide any error messaging when the connection to partner-hosted services is lost.                               | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| No current scenario.                                                              | Very Minor (1)    |                                |
| No current scenario.                                                              | Minor (2)         |                                |
| The title displays an error message when the connection to partner-hosted services is lost but the message doesn't give a reason.     | Moderate (6)      | Xbox One, Xbox Series, Windows |
| No current scenario.                                                              | Critical (12)     |                                |
| The title displays an error message that implies issues with Microsoft services. | Catastrophic (22) | Xbox One, Xbox Series, Windows |


<br />

*Notes*
- This XR might expose stability issues. Ensure that you log them under XR-001.
- Suggested probability: -3. Increase this value if appropriate (for example, depending on the game area, mode, or opportunity to occur).
