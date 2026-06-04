---
title: "XR048 Profile Settings Usage"
kindex:
- XR048 Profile Settings Usage
- Profile Settings Usage FMA
- Profile Settings Usage FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Profile Settings Usage"
edited: 17/10/2025
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-048 : Profile Settings Usage

***

## FMA Scenario Severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-31)*

<br/>

**Test Cases**

<br />

**048-01 Profile Settings Usage**

| Scenario                                                                                                                                                                                                                       | Severity          | Platform                       |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| The title contains a non-dynamic video or screenshot which contains another user's non-updated gamertag.<br/>A gamertag is not updated when shown as part of metadata for that user's associated UGC (e.g. the listed creator) | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The title does not display an updated gamertag when viewing a previously recorded replay after performing a gamertag change.                                                                                                   | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                                                                           | Very Minor (1)    |                                |
| No current scenario.                                                                                                                                                                                                           | Minor (2)      |                                |
| No current scenario.                                                                                                                                                                                                           | Moderate (6)         |                                |
| A user's change in gamertag, which occurred before the title was booted by any given user, is not reflected in the title.                                                                                                       | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title does not allow the user to continue to load all previously created save data when a change to the user's gamertag/gamerpic has been made.                                                                            | Catastrophic (22) | Xbox One, Xbox Series, Windows |


<br />

*Notes*
- Note that the change made in user data happens before the title is booted.
- This XR is for storage rather than transmission (now under XR-14) of data.
- Suggested probability of 4 for modifying a gamertag.