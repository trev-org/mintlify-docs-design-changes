---
title: "XR112 Establishing A User and Controller During Initial Activation and Resume"
kindex:
- XR112 Establishing A User and Controller During Initial Activation and Resume
- Establishing A User and Controller During Initial Activation and Resume FMA
- Establishing A User and Controller During Initial Activation and Resume FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Establishing A User and Controller During Initial Activation and Resume"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-112: Establishing a User and Controller During Initial Activation and Resume

***

## FMA scenario severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-26)*

<br/>

**Test cases**

<br />

**112-02 Initial User and Controller**

| Scenario                                                                                                                  | Severity          | Platform              |
|---------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| The title is launched with Profile A using controller 1, and can only be controlled with controller 1 thereafter          | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario.                                                                                                      | Very Minor (1)    |                       |
| No current scenario.                                                                                                      | Minor (2)         |                       |
| No current scenario.                                                                                                      | Moderate (6)      |                       |
| The title doesn't prompt the user to establish an active user when launched without a profile signed in.                 | Critical (12)     | Xbox One, Xbox Series |
| With the launching controller signed into Profile A (no other profiles or controllers), the user can't control the title | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                      | Catastrophic (22) |


<br />

*Notes*
- No current FMA notes to consider.

<br />
<br />


**112-03 No Signed-In User**

| Scenario                                                                                                                                                                                                  | Severity          | Platform              |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| UMP CISO title: The title doesn't allow the user to launch the title and displays an error message when no Xbox profile is signed in.                                                               | Not Relevant (-4) | Xbox One, Xbox Series |
| The user is returned to the IIS when closing the account picker, without displaying an error message. This condition is only relevant when the account picker is invoked immediately after proceeding past the IIS. | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                      | Very Minor (1)    |                       |
| The title fails to notify the user that their progress won't be saved when resuming the title from connected standby without signing into an Xbox profile.                                             | Minor (2)         | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                      | Moderate (6)      |                       |
| Title doesn't launch correctly with no signed-in user.                                                                                                                                                   | Critical (12)     | Xbox One, Xbox Series |
| Users are notified that they won't be able to save their progress after data loss has already occurred.                                                                                                | Critical (12)     | Xbox One, Xbox Series |
| While in a mode that normally saves user data or game state, users aren't notified that progress won't be saved if they continue in that mode without signing in.                                     | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                      | Catastrophic (22) | |


<br />

*Notes*
- Suggested probability of 2. Lower where it's felt appropriate to do so.

<br />
<br />


**112-04 Active User Notification**

| Scenario                                                                                                                                                                                                                                                            | Severity          | Platform              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| The title prompts the user to accept a license agreement before indicating the active user.                                                                                                                                                                         | Not Relevant (-4) | Xbox One, Xbox Series |
| For a given user, launching the title for the first time leads with minor options (such as language, screen safe zone, brightness - options which would unlikely change per user on the same console) before indicating the active user.                            | Not Relevant (-4) | Xbox One, Xbox Series |
| The title prompts the user to link to a publisher account before displaying the active user, but the account linking process happens separately, the process in which the active user is displayed before allowing account creation. (Known examples: Ubisoft Club) | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                | Very Minor (1)    |                       |
| The title displays the active user, however it's displayed too briefly. | Minor (2) | Xbox One, Xbox Series |
| It's technically possible for the user to find a user indication but this is indication isn't obvious and is unlikely to be considered by many users [Compliance meeting/2 July 2015] (See also FMA Notes below.)                                                 | Minor (2)         | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                | Moderate (6)      |                       |
| The title doesn't indicate the active user of the title before performing the first moderate or major profile-related action. Selecting the active user via the account picker isn't included as a method of indicating the active user.                        | Critical (12)     | Xbox One, Xbox Series |
| The title allows the user to link an Xbox profile to a partner account before displaying the active user.                                                                                                                                                           | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                | Catastrophic (22) | |


<br />

*Notes*
- Displaying the active user when they reach the main menu is fine. The spirit of the XR is "don't jump right into my game or start messing with a user's save data until I know who I'm playing as."
- A title can display multiple active users for game modes that support multiple users.
- If the user can press the **Menu** button to view their gamerpic or gamertag before taking profile-related actions, this behavior is an acceptable indicator of the active user.


<br />
<br />


**112-05 Access to Account Picker**

| Scenario                                                                                                                                                                                                                                                                     | Severity          | Platform              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| The title only allows access to the account picker at the initial interactive state. The title doesn't provide any other options to access the account picker on the main menu or within the pause menu. It's possible to return to the IIS from within the main menu.     | Not Relevant (-4) | Xbox One, Xbox Series |
| An in-game account picker option is displayed but the UI doesn't display an accurate button prompt. (Log under Title Integrity)                                                                                                                                                                         | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                         | Very Minor (1)    |                       |
| No current scenario.                                                                                                                                                                                                                                                         | Minor (2)         |                       |
| No current scenario.                                                                                                                                                                                                                                                         | Moderate (6)      |                       |
| The title doesn't provide access to a functioning account picker.                                                                                                                                                                                                           | Critical (12)     | Xbox One, Xbox Series |
| The title only allows access to the account picker at the initial interactive state. The title doesn't provide any other options to access the account picker on the main menu or within the pause menu. It's NOT possible to return to the IIS from within the main menu. | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                         | Catastrophic (22) |


<br />

*Notes*
- UWP Single User Apps (SUA) aren't expected to support access to the account picker, as they only support a single user.

<br />
<br />


**112-06 Handling Profile Change**

| Scenario                                                                                                                                                                                                                                                                                  | Severity          | Platform              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| After a second Xbox profile is signed in through the in‑title account picker—without signing out the first profile—the Microsoft Store doesn't recognize the newly signed‑in user when a purchase is attempted through the in‑title store. Instead, the purchase is registered to the first profile. | Not Relevant (-4) | Xbox One, Xbox Series |
| Following a profile change, a user with no existing save data has their option settings initialized with those of the previous user, rather than defaults.                                                                                                                                | Very Minor (1)    | Xbox One, Xbox Series |
| Following a profile change, a user with existing saved data has their core or non-core option settings initialized with those of a previous user rather than defaults.                                                                                                                    | Minor (2)         | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                                      | Moderate (6)      |                       |
| Following a profile change, a user with existing save data has their game state overwritten.                                                                                                                                                                                              | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, the title doesn't correctly load a user's game state.                                                                                                                                                                                                        | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, the title doesn't allow the user to progress.                                                                                                                                                                                                                | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, all areas of the title which identify the user aren't updated.                                                                                                                                                                                               | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                                      | Catastrophic (22) |


<br />

*Notes*
- User game state includes: user progress, saved state, preferences, achievements, or other awards.
- The title might only associate save progress, achievements, and preferences to the current active Xbox Profile.
- Suggested probability of 2. Increase or decrease where it's felt appropriate to do so.

<br />
<br />


**112-07 User Change During Constrain**

| Scenario                                                                                                                              | Severity          | Platform              |
|---------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                                                  | Not Relevant (-4) |                       |
| No current scenario.                                                                                                                  | Very Minor (1)    |                       |
| No current scenario.                                                                                                                  | Minor (2)         |                       |
| Following a profile change while constrained, the title doesn't reflect the change in user with moderate implications.                            | Moderate (6)      | Xbox One, Xbox Series |
| Following a profile change while constrained, a user with existing save data has their game state overwritten.                        | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change while constrained, the title doesn't correctly associate the active user and Xbox controller.                                                      | Critical (12)     | Xbox One, Xbox Series |
| The title informs the user that they aren't signed in when resuming the title following a constrained user change.                                  | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change while constrained, the title doesn't recognize a new active user. | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change while constrained, the title doesn't allow the user to progress. | Critical (12) | Xbox One, Xbox Series |
| Following a profile change while constrained, the title continues to use the original user's game state during active gameplay.                                      | Critical (12) | Xbox One, Xbox Series |
| The title displays or loops the account picker indefinitely.                                                                             | Catastrophic (22) | Xbox One, Xbox Series |


<br />


*Notes*
- UWP Single User Applications (SUA) don't support a constrained state, instead entering a suspended state.
- This is a passing scenario and expected behavior:
        1. User with Profile A signs in, boots the game, and goes to gameplay
    2. At any point during gameplay or while in menus, the user presses the **Home** button
    3. In the **Home** menu, the user signs in a second profile (Profile B) and chooses to use that profile. The **Home** menu then displays Profile B’s context, theme, and related settings.
    4. Profile A remains the active profile when the title is resumed
- Suggested probability of 3. Increase or decrease where it's felt appropriate to do so.


<br />
<br />


**112-08 User Change During Suspension**

| Scenario                                                                                                                              | Severity          | Platform              |
|---------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| The title doesn't update to reflect a user signing in during a suspended state if the title was launched with no user signed in.  | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                  | Very Minor (1)    |                       |
| No current scenario.                                                                                                                  | Minor (2)         |                       |
| Following a profile change while suspended, the title doesn't reflect the change in user with moderate implications.                                                  | Moderate (6)      | Xbox One, Xbox Series |
| Following a profile change while suspended, a user with existing save data has their game state overwritten.       | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change while suspended, the title doesn't correctly associate the active user and Xbox controller.                                                      | Critical (12)     | Xbox One, Xbox Series |
| The title doesn't correctly associate the active user and Xbox One controller after a user change.                                   | Critical (12)     | Xbox One, Xbox Series |
| The title informs the user that they aren't signed in when resuming the title following a suspended user change. | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change while suspended, the title doesn't recognize a new active user.                                        | Critical (12) | Xbox One, Xbox Series |
| Following a profile change while suspended, the title doesn't allow the user to progress. | Critical (12) | Xbox One, Xbox Series |
| Following a profile change while suspended, the title continues to use the original user's game state during active gameplay. | Critical (12) | Xbox One, Xbox Series |
| The title displays or loops the account picker indefinitely.                                                                             | Catastrophic (22) | Xbox One, Xbox Series |


<br />

*Notes*
- Suggested probability of 3. Increase or decrease where it's felt appropriate to do so.