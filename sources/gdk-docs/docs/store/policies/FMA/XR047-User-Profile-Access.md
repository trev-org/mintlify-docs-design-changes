---
title: "XR047 User-Profile Access"
kindex:
- XR047 User-Profile Access
- User-Profile Access FMA
- User-Profile Access FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for User-Profile Access"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-047 : User-Profile Access

***

## FMA scenario severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-30)*

<br/>

**Test cases**

<br />

**047-01 User-Profile Access**

| Scenario                                                                                                                                                                                                                                                      | Severity          | Platform              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                                                                                                                                                                          | Not Relevant (-4) |                       |
| No current scenario.                                                                                                                                                                                                                                          | Very Minor (1)    |                       |
| The title doesn't allow access to the Xbox network user's gamercard on leaderboards and screens that are XLSP controlled when the publisher servers are unavailable.                                                                                             | Minor (2)         | Xbox One, Xbox Series |
| The title doesn't allow the user to access another Xbox network user's gamercard in a single noncore area where gamertags and display names are displayed. The user can access the gamercard from a different location without requiring the user to end the session. | Minor (2)         | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                          | Moderate (6)      |                       |
| An Xbox network user can't access another Xbox network user’s gamercard in any location where gamertags and display names are displayed.                                                                                                                                | Critical (12)     | Xbox One, Xbox Series |
| When accessing a given Xbox network user's gamercard, a different Xbox network user's gamercard is displayed.                                                                                                                                                 | Critical (12)     | Xbox One, Xbox Series |
| The title doesn't allow the user to access another Xbox network user’s gamercard in a single core area (for example, leaderboards, server host menu) where gamertags/display names are displayed.                                                                                | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                          | Catastrophic (22) |


<br />

*Notes*
- Applies only to users within the Xbox network.
- This requirement doesn't apply when displaying gamertags in areas where UI navigation isn't feasible. Examples include:<br/>- Static loading screens that lack any interactivity or user input<br/>- Heads-up displays during active gameplay<br/>This exemption doesn't extend to leaderboards and menus, including leaderboards and menus surfaced as navigable overlays during active gameplay.<br/>XR-047 requirements aren't nullified by selectively disabling/not enabling navigation in locations where navigable UI is otherwise reasonably expected.