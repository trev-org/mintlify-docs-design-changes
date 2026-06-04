---
title: "XR052 User State and Title-Save Location, Roaming, and Dependencies"
kindex:
- XR052 User State and Title-Save Location, Roaming and Dependencies
- User State and Title-Save Location, Roaming and Dependencies FMA
- User State and Title-Save Location, Roaming and Dependencies FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for User State and Title-Save Location, Roaming, and Dependencies"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-052 : User State and Title-Save Location, Roaming, and Dependencies

## FMA Scenario Severities
*View [XR-052](https://aka.ms/xr052)*

### Test cases

#### 052-01 User Sign-in and Sign-out

| Scenario                                                                                                                                                              | Severity          | Platform              |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                                                                                  | Not Relevant (-4) |                       |
| Following a profile change, a user with no existing save data has their option settings initialized with those of the previous user, rather than defaults.            | Very Minor (1)    | Xbox One, Xbox Series |
| Following a profile change, a user with existing saved data has their core or noncore option settings initialized with those of a previous user.               | Minor (2)         | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                  | Moderate (6)      |                       |
| Following a profile change, a user with existing save data has their game state overwritten.                                                                          | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, the title doesn't correctly load a user's game state.                                                                                    | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, the title doesn't allow the user to progress.                                                                                            | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, all areas of the title that identify the user aren't updated.                                                                           | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, the title continues to award save data to the first user without seeking confirmation.                                                    | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, the title allows the newly signed in Xbox profile to create save files and unlock achievements using the progress of the signed out user. | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, the new user can alter a prior user's save data, state, or profile after they have signed out.                                                 | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                  | Catastrophic (22) |


*Notes*
- User state includes: user progress, saved state, preferences, achievements, or other awards.
- The title might only associate save progress, achievements, and preferences to the current active Xbox Profile.

#### 052-02 User change during suspended

| Scenario                                                                                                                                                               | Severity          | Platform              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                                                                                   | Not Relevant (-4) |                       |
| Following a profile change, a user with no existing save data has their option settings initialized with those of the previous user, rather than defaults.       | Very Minor (1)    | Xbox One, Xbox Series |
| Following a profile change, a user with existing saved data has their core or noncore option settings initialized with those of a previous user rather than defaults. | Minor (2)         | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                   | Moderate (6)      |                       |
| Following a profile change, a user with existing save data has their game state overwritten.                                                                           | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, the title doesn't correctly load a user's game state.                                                                                     | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, the title doesn't allow the user to progress.                                                                                             | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, all areas of the title that identify the user aren't updated.                                                                            | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, the title continues to award save data to the first user without seeking confirmation.                                                     | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, the title allows the newly signed in Xbox profile to create save files and unlock achievements using the progress of the signed out user.  | Critical (12)     | Xbox One, Xbox Series |
| Following a profile change, the new user can alter a prior user's save data, state, or profile after they have signed out.                                                  | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                   | Catastrophic (22) |


<br />

*Notes*
- User state includes: user progress, saved state, preferences, achievements, or other awards.
- The title might only associate save progress, achievements, and preferences to the current active Xbox Profile.

#### 052-05 Correct user association

| Scenario                                                                                                                                           | Severity          | Platform              |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                                                               | Not Relevant (-4) |                       |
| No current scenario.                                                                                                                               | Very Minor (1)    |                       |
| Saved data with minor gameplay implications (for example, screen boundary setting) is carried across from one user to another.                             | Minor (2)         | Xbox One, Xbox Series, Windows |
| Saved data with moderate gameplay implications (for example, HUD layout) is carried across from one user to another.                                       | Moderate (6)      | Xbox One, Xbox Series, Windows |
| Saved data with privacy (for example, recent searches) or major gameplay implications (for example, gameplay progress) is carried across from one user to another. | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title doesn't reflect any change in active user.                                                                                              | Critical (12)     | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                               | Catastrophic (22) |


<br />

*Notes*
- Use the `ConnectedStorage` classes for titles only if they save data locally. It's fine for a title to save data only online and not use `ConnectedStorage`.
- If you can find the save data in the **Manage Game** area of Xbox Home, the save was created by using `ConnectedStorage`. 

#### 052-06 Cloud Storage: Roaming

Scenario | Severity | Platform|
---------|----------|---------|
| No current scenario. | Not Relevant (-4) | |
| No current scenario. | Very Minor (1)    | |
| Options reset when booting the title on a second console, without any user interaction. | Minor (2) | Xbox One, Xbox Series, Windows |
| Option settings don't roam between Xbox and Windows devices. On Windows, in-title video settings are exempt.| Minor (2) | Xbox One, Xbox Series, Windows |
| No current scenario. | Moderate (6) | |
| The title doesn't roam save data between the same platform generation (for example, Xbox One to Xbox One S), Windows device, or between a console and Windows device (when supported) but saved data isn't lost. | Critical (12) | Xbox One, Xbox Series, Windows |
| Roamed save data as a whole is overwritten by the title when booting on a second console or device, without any user interaction, such that data is lost/reset. | Catastrophic (22) | Xbox One, Xbox Series, Windows |
| When the title uses `ConnectedStorage`:<br/>-The title doesn't synchronize to the cloud, or displays an error message<br/> -The title fails to synchronize cloud save data back onto the device where the saved data was originally created, after the profile roams to another device. | Catastrophic (22) | Xbox One, Xbox Series, Windows |


<br />

*Notes*
- Titles that share a TitleID across devices (for example, PC and console) aren't required to roam saved data, but it's highly recommended.
- Due to the variation of graphics cards across PCs, any in-title video settings aren't expected to roam. Generally, they're expected to change to safe or default settings when roaming to a new PC for the first time and these settings are likely only stored locally.
- Use the `ConnectedStorage` classes for titles only if they save data locally. It's fine for a title to save data only online and not use `ConnectedStorage`.
- If you can find the saved data in the **Manage Game** area of Xbox Home, the save was created by using `ConnectedStorage`.
- Suggested probability of 2.