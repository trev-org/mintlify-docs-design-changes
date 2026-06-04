---
title: "XR034 Streaming Install Initial Play Marker"
kindex:
- XR034 Streaming Install Initial Play Marker
- Streaming Install Initial Play Marker FMA
- Streaming Install Initial Play Marker FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Streaming Install Initial Play Marker"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-034 : Streaming Install Initial Play Marker

***

## FMA scenario severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-19)*

**Test cases**

<br />

**034-01 Streaming Installation**

| Scenario                                                                                                                                                                                                                                                                                                                                 | Severity               | Platform                   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| The title doesn't provide an interactive gameplay experience upon reaching the initial play marker on an Xbox profile with existing title related save data.                                                                                                                                                                                                                                                                                                                     | Not Relevant (-4) | Xbox One, Xbox Series |
| The title displays an inaccurate loading bar during streaming installation.                                                                                                                                                                                                                                                                                                                  | Very Minor (1)    | Xbox One, Xbox Series |
| Various game modes are unavailable during installation without informative messaging.                                                                                                                                                                                                                                                                      | Minor (2)         | Xbox One, Xbox Series |
| The title exhibits functionality issues when entering noninstalled areas during streaming installation.                                                                                                                                                                                                                                                                                      | Minor (2)         | Xbox One, Xbox Series |
| The title fails to properly render environments and textures when the user progresses through gameplay during streaming installation.                                                                                                                                                                                                    | Moderate (6)      | Xbox One, Xbox Series |
| During streaming installation, the user reaches a point in the game that prevents progress as data isn't yet available. After streaming installation is complete, in order to continue, the user must lose up to a moderate amount of progress without terminating the title.                                                               | Moderate (6)      | Xbox One, Xbox Series |
| The title doesn't provide an interactive gameplay experience upon reaching the initial play marker.                                                                                                                                                                                                                                     | Critical (12)     | Xbox One, Xbox Series |
| The title doesn't launch upon reaching the initial play marker.                                                                                                                                                                                                                                                                         | Critical (12)     | Xbox One, Xbox Series |
| During steaming installation, the user reaches a point in the game that prevents progress as data isn't yet available. After streaming installation is complete, in order to continue gameplay or access those menu options, the user must terminate the title or lose a significant amount of gameplay progress, regardless of messaging.  | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                                                                                     | Catastrophic (22) | Xbox One, Xbox Series |


<br />

*Notes*
- Log stability issues and similar problems under their own XR.
- Titles that include an initial launch chunk must include an interactive gameplay experience. This requirement includes, but isn't limited to, engaging in a tutorial, playing the first level, entering and progressing through general active gameplay, and similar experiences. Titles released before August 2020 are exempt from this requirement, and might include videos, loading bars, and generally launching to the main menu as the main launch experience. 
- Titles aren't required to implement an initial play marker, regardless of size. If a title chooses to include an initial launch chunk, it must be fully functional in accordance with current XR standards.
- When a user installs a CU at the same time as the game disc, the launch chunk might appear bigger. This appearance isn't an issue.
- The suggested probability is 4. Use a lower value for areas of the title where the opportunity for the issue to occur lessens.