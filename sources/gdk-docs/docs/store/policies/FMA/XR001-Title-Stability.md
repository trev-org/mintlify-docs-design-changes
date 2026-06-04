---
title: "XR001 Title Stability"
kindex:
- XR001 Title Stability
- Title Stability FMA
- Title Stability FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Title Stability Scenarios"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-001 : Title Stability

***

## FMA scenario severities 

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-4)*



**Test cases**

<br />

 **001-01 Title Stability**

| Scenario                                                                                                                                                                                                                                                                                       | Severity          | Platform              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| The title is a UWP SUA submission and doesn't support a constrained state and instead enters a suspended state.                                                                                                                                                                               | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The title is a SUA UWP and crashes to the Xbox Home screen when signing into a profile while offline.                                                                                                                                                                                          | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The title is constrained at the account picker and enters an unresponsive state when resumed.                                                                                                                                                                                                  | Not Relevant (-4) | Xbox One, Xbox Series |
| The title offers the ability to quit/exit to Xbox Home, with no loss of save data and no unexpected loss of progress.                                                                                                                                                                          | Not Relevant (-4) | Xbox One, Xbox Series |
| The title crashes to Xbox Home when launched by a user whose age restrictions are set below the title's age requirements.                                                                                                                                                                      | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                                           | Very Minor (1)    |                       |
| A non-interactive pause is presented typically lasting between 10-20 seconds.                                                                                                                                                                                                                  | Minor (2)         | Xbox One, Xbox Series, Windows |
| The title enters a non-interactive pause exceeding 20 seconds which only occurs on the Xbox One console type. | Minor (2) | Xbox One |
| A moderate/minor amount of saved data becomes corrupted, unintentionally deleted, or inaccessible which doesn't require a large amount of time to reobtain.                                                                                                                                                                                                                                                                          | Moderate (6)      |    Xbox One, Xbox Series, Windows                   |
| The title enters a recoverable partially unresponsive state that can be resolved without termination. | Moderate (6) | Xbox One, Xbox Series, Windows |
| A non-interactive pause is presented typically lasting over 20 seconds.                                                                                                                                                                                                                        | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title contains a loading screen which is either more than 2 minutes with no indication of progress, or more than 3 minutes with a progress indicator.                                                                                                                                      | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title causes a console reboot, crashes, becomes indefinitely unresponsive, or unexpectedly resets to title screen.                                                                                                                                                                          | Critical (12)     | Xbox One, Xbox Series, Windows |
| A significant amount of saved data becomes corrupted, unintentionally deleted, or inaccessible which requires a large amount of time for the user to reobtain (for example, a save made during the current game, a missing checkpoint save).                                                        | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title enters an unrecoverable partially unresponsive state which requires termination to resolve.                                                                                                                                            | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title crashes after granting parental permission via the system UI for any privilege. | Critical (12) | Xbox One, Xbox Series, Windows |
| The title enters an indefinite unresponsive state after a parent grants permission to a child account for an activity. | Critical (12) | Xbox One, Xbox Series, Windows |
| The title doesn't boot.                                                                                                                                                                                                                                                                       | Catastrophic (22) | Xbox One, Xbox Series, Windows |
| All saved data becomes corrupted, unintentionally deleted, or inaccessible.                                                                                                                                                                                                                     | Catastrophic (22) | Xbox One, Xbox Series, Windows |
                                    

<br />


*Notes*

- Be aware of issues that are inconsistent between CERT and CERT.DEBUG sandboxes.
- Loading times are about setting user expectations and creating an experience that works in the game.  For example, if all load times are always about 1 minute with an animated spinner, then suddenly a level takes 10 minutes, the user perceives something is wrong with the game or console.
- "Partially unresponsive state" means that the title remains unresponsive to the majority of user input, but does respond to minimal controller input (such as A button input, left or right stick input, and so on).
- Titles under 3 GB in size with an initial play marker greater than 65% can use the reduced Probability -03 for occurrence when stability issues are encountered during streaming install.  Titles outside of this threshold should start with a Probability 02 and increase as needed.

<br />
<br />

**001-02 Title Stability After Suspending**

| Scenario                                                                                                                                                                     | Severity          | Platform              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| The title returns the user to the IIS or previous menu upon resuming from a suspended state, but save data to the user's last saved location can be loaded without issue.    | Not Relevant (-4) | Xbox One, Xbox Series |
| The title is UWP and boots from a terminated state. | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                          | Very Minor (1)    |                       |
| No current scenario.                                                                                                                                                          | Minor (2)         |                       |
| During a loading screen, the title is suspended. When it resumes, the title restarts from the initial boot sequence (pre‑IIS).                | Moderate (6)      | Xbox One, Xbox Series |
| The title only supports manual saves and returns the user to the IIS or a previous menu following a suspension; progress generated after the last known manual save is lost. | Moderate (6)      | Xbox One, Xbox Series |
| The title reports 'Package execution state: 0 (unknown)' as a result of either returning from suspended state, or failure to suspend.                                        | Critical (12)     | Xbox One, Xbox Series |
| The title is suspended outside of a loading screen, and when returning from that suspended state it then reboots back to the initial boot sequence (pre-IIS).            | Critical (12)     | Xbox One, Xbox Series |
| The user can't reestablish a connection with the partner-hosted service when resuming from a suspended state.                                                                                             | Critical (12)     | Xbox One, Xbox Series |
| After resuming from a suspension, the title no longer saves data when expected.                                                                                              | Critical (12)     | Xbox One, Xbox Series |
| The user can't reestablish a connection with the online multiplayer services after resuming the title from a suspended state. | Critical (12) | Xbox One, Xbox Series |
| Upon returning from a suspended state, the user can't view or post to leaderboards. This issue persists through termination [See FMA Notes]. | Critical (12) | Xbox One, Xbox Series |
| The title launches from a terminated state when resuming from a suspended state. | Critical (12) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                          | Catastrophic (22) |

<br />

*Notes*
- Known system issue: Disconnect the LAN cable from the console, boot the title, reconnect the LAN cable and wait for connectivity, and then suspend the title. The title reports `Package execution state: 0 (unknown)`.
- When returning from a suspended state, a title is expected to regain full functionality, which includes reestablishing a connection to online or partner services. If a user returns from a suspended state and can't view an online service, such as leaderboards, but scores are still tracked and verified that they post to the leaderboards following a termination, the title reestablished the connection to online or partner services, but the feature isn't functioning as expected (log under Title Integrity [Moderate in most cases]).
- Suggested probability of 6 for core or likely areas of the title (for example, main menu). Probability of -3 for suspending during a loading screen. Increase or decrease where it's felt appropriate to do so.

<br />