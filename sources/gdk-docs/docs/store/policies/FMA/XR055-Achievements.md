---
title: "XR055 Achievements and Gamerscore"
kindex:
- XR055 Achievements and Gamerscore
- Achievements and Gamerscore FMA
- Achievements and Gamerscore FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Achievements and Gamerscore"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-055 : Achievements and Gamerscore

***

## FMA scenario severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-35)*

<br/>

**Test cases**

<br />

**055-01 Achievements**

| Scenario                                                                                                                                                                                                                                                                               | Severity          | Platform                       |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| The title shares a title ID across generations (for example, Gen8 and Gen9), and has over 1,000 gamerscore on the later generation.                                                                                                                                                                      | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The achievement doesn't unlock immediately when the criteria are met, but unlocks later during testing without any additional player progress. | Very Minor (1)    | Xbox One, Xbox Series, Windows |
| An achievement's description doesn't specify a game mode, or level difficulty, required to unlock, and isn't awarded when the criteria is met during Tutorial, Training, or Practice gameplay. The achievement is awarded when meeting the criteria in a core game mode.      | Very Minor (1)    | Xbox One, Xbox Series, Windows |
| Achievements, if gained while not connected to the Xbox network, don't unlock after reconnecting to Xbox network services; that is, the user must meet the unlock criteria again while connected to Xbox network services to be awarded the achievement. (Log with an ION severity)          | Very Minor (1)    | Xbox One, Xbox Series, Windows |
| An achievement is unlocked before the criteria to unlock it's met. This condition covers achievements that are likely to unlock during a standard playthrough.                                                                                              | Minor (2)         | Xbox One, Xbox Series, Windows |
| Achievements don't unlock after resuming from a suspended state, but is awarded to the user after terminating and relaunching the title.                                                                                                                                            | Minor (2)         | Xbox One, Xbox Series          |
| A difficult to obtain achievement is unlocked far before the criteria to unlock it's met. The intent is to not cause frustration for users through unfairness - for example, completing the game on 'Easy' difficulty unlocks the achievement for completing 'Hard' difficulty. | Moderate (6)      | Xbox One, Xbox Series, Windows |
| The title allows the user to unlock all achievements  after less than half of the game content has been explored. For example, a title contains 10 levels of gameplay and all achievements can be obtained after completing four (4). | Critical (12) | Xbox One, Xbox Series, Windows |
| Upon meeting the unlocked criteria for an achievement, a different and unrelated achievement is awarded. | Critical (12) | Xbox One, Xbox Series, Windows |
| An achievement isn't unlocked when the criteria to unlock it's met per the achievement description. However, the achievement is unlockable within reason - the intent of this condition is to not significantly deviate from the criteria so as not to cause frustration.                | Moderate (6)      | Xbox One, Xbox Series, Windows |
| An achievement doesn't unlock when the criteria are met and doesn't unlock at any point during testing.                                                                                                  | Critical (12)     | Xbox One, Xbox Series, Windows |
| Achievements don't unlock after resuming from a suspended state, and is still not awarded after terminating and relaunching the title.                                                                                                                                                | Critical (12)     | Xbox One, Xbox Series, Windows |
| An achievement is unlocked when the criteria to unlock are met, but it's awarded to a profile other than the one that met the unlock criteria.                                                                                                                                    | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title contains a vast number of achievements that don't represent thorough exploration, or require adequate engagement, with the main content. | Critical (12) | Xbox One, Xbox Series, Windows |
| The title contains multiple achievements that can be obtained with little to no user input outside of a core gameplay loop. | Critical (12) | Xbox One, Xbox Series, Windows |
| The title’s achievements can all be obtained within the first few minutes of launch or starting active gameplay. | Critical (12) | Xbox One, Xbox Series, Windows |
| A game doesn't support the minimum 10 achievements and 1,000 gamerscore.                                                                                                                                                                                                              | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title contains more than 1,000 gamerscore configured as base achievements. |  Critical (12) | Xbox One, Xbox Series, Windows |
| The title exceeded the semi-annual allowance of an additional 100 achievements and 1,000 gamerscore. | Xbox One, Xbox Series, Windows |
| A single achievement exceeds 200 gamerscore.                                                                                                                                                                                                                                           | Critical (12)     | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                                                                                                                                   | Catastrophic (22) |


<br />

*Notes*
- Titles are allowed to exceed the 1,000 gamerscore limit if an iteration of it was previously released on either console or Windows and contains the same score. For example, a title is releasing on Windows well after it was already released on console.