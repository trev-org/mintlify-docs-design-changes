---
title: "XR015 Managing Player Communication"
kindex:
- XR015 Managing Player Communication
- Managing Player Communication FMA
- Managing Player Communication FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Managing Player Communication"
edited: 16/10/2025
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-015 : Managing Player Communication

***

## FMA Scenario Severities  

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-15)*

<br/>

**Test Cases**

<br />

**015-01 User Communication**

| Scenario                                                                                                                                                                        | Severity          | Platform                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| No current scenario.                                                                                                                                                             | Not Relevant (-4) |                                |
| No current scenario.                                                                                                                                                             | Very Minor (1)    |                                |
| The title displays an incorrect error message but functionality works as expected.                                                                                                                  | Minor (2)         | Xbox One, Xbox Series, Windows |
| The title blocks access to modes when the user has the 'Communicate with voice, text or invites ' privilege set to 'Block' and does not display an informative error message.                                                                                                                                                           | Moderate (6)      | Xbox One, Xbox Series, Windows                               |
| The title blocks access to modes when the user has the 'Communicate with voice, text or invites ' privilege set to Block.                                                       | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title allows users to receive a text chat message when the voice and chat communications privilege are set to blocked. (Pre-set messages included in the title are exempt.) | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title displays an incorrect error message coupled with incorrect functionality.                                                                                                                 | Critical (12)     | Xbox One, Xbox Series, Windows |
| Allowing or blocking a specific method of communication does not correctly allow or block the use of that method.                                                               | Critical (12)     | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                             | Catastrophic (22) |


<br />

*Notes*
- In-title friend requests/clan invites do not count as communication and are not required to be blocked by the privilege.


<br />
<br />


**015-02 Muting Support**

| Scenario                                                                                     | Severity          | Platform                       |
|----------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| No current scenario.                                                                          | Not Relevant (-4) |                                |
| No current scenario.                                                                         | Very Minor (1)    |                                |
| No current scenario.                                                                         | Minor (2)         |                                |
| No current scenario.                          | Moderate (6)      |  |
| The title unmutes an Xbox network user that was muted after proceeding into active gameplay. | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title does not mute voice communication from a muted Xbox network user.                  | Critical (12)     | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                          | Catastrophic (22) |


<br />

*Notes*
- Applies only to users within the Xbox network.
- The title does not need to offer an in-game method of muting a user. This XR is to test the system implementation (Friends list/gamercard/Gamebar). If the in-title mute button does not function, this is logged under XR003 Title Integrity and does not fall under the scope of this test case.
- Muting or unmuting a user may not be instantaneous. Muting or unmuting a user may take up to 4 hours to come into effect. If communications relating to a muted user do not behave as expected, please ensure that at least 4 hours have passed and that the title has been restarted.
- Permissions checks are generally performed upon entering a lobby, so muting while in a lobby is not expected to have any immediate effect, regardless of waiting 4 hours.
- Suggested probability of 4. Increase/decrease where it is felt appropriate to do so (e.g. depending on game area/mode)

<br />
<br />


**015-03 Blocked Users**

| Scenario                                                                                                                    | Severity          | Platform                       |
|-----------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| No current scenario.                                                                                                         | Not Relevant (-4) |                                |
| No current scenario.                                                                                                         | Very Minor (1)    |                                |
| No current scenario.                                                                                                         | Minor (2)         |                                |
| No current scenario.                                                                                                         | Moderate (6)      |                                |
| The title allows a user to receive voice and/or text communication from an Xbox network user that has been blocked.   | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title continues to block communication between two Xbox network profiles after a communications block has been removed. | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title allows a user to receive game invitations from a user who has been blocked.                                       | Critical (12)     | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                         | Catastrophic (22) |


<br />

*Notes*
- Applies only to users within the Xbox network.
- The title does not need to offer an in-game method of blocking a user. This XR is to test the system implementation (Friends list/gamercard/Gamebar). If the in-title block button does not function, this is logged under XR003 Title Integrity and does not fall under the scope of this test case.
- Blocking or unblocking a user may not be instantaneous. Blocking or unblocking a user may take up to 4 hours to come into effect. If communications relating to a blocked user do not behave as expected, please ensure that at least 4 hours have passed and that the title has been restarted.
- Permissions checks are generally performed upon entering a lobby, so blocking while in a lobby is not expected to have any immediate effect, regardless of waiting 4 hours.
- Suggested probability of 4. Increase/decrease where it is felt appropriate to do so (e.g. depending on game area/mode)