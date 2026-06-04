---
title: "XR130 Xbox Console Families and Generations"
kindex:
- XR130 Xbox Console Families and Generations
- Xbox Console Families and Generations FMA
- Xbox Console Families and Generations FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Xbox Console Families and Generations"
edited: 17/10/2025
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-130 : Xbox Console Families and Generations

***

## FMA Scenario Severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-6)*

<br/>

**Test Cases**

<br />

**130-01 Controller Input**

| Scenario                                                                                 | Severity          | Platform              |
|------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                     | Not Relevant (-4) |                       |
| No current scenario.                                                                     | Very Minor (1)    |                       |
| No current scenario.                                                                     | Minor (2)         |                       |
| No current scenario.                                                                     | Moderate (6)      |                       |
| The title accepts input from only a keyboard and/or mouse in certain areas of the title. | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                     | Catastrophic (22) |


<br />

*Notes*
- No current FMA Notes to consider.

<br />
<br />


**130-02 Save Game Roaming**

| Scenario                                                                                                                                               | Severity          | Platform               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|------------------------|
| No current scenario.                                                                                                                                   | Not Relevant (-4) |                        |
| No current scenario.                                                                                                                                   | Very Minor (1)    |                        |
| No current scenario.                                                                                                                                   | Minor (2)         |                        |
| No current scenario.                                                                                                                                   | Moderate (6)      |                        |
| A game save does not fully load for games that share the same TitleID across generations (Xbox One and Xbox Series X) for content available on both generations. | Critical (12)     | Xbox One, Xbox Series |
| A game save made in one generation (Xbox One or Xbox Series X) does not fully load across all device types in that generation. | Critical (12) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                   | Catastrophic (22) |


<br />

*Notes*
- No current FMA Notes to consider.

<br />
<br />


**130-03 Online Segmentation**

| Scenario                                                                        | Severity          | Platform               |
|---------------------------------------------------------------------------------|-------------------|------------------------|
| No current scenario.                                                            | Not Relevant (-4) |                        |
| No current scenario.                                                            | Very Minor (1)    |                        |
| No current scenario.                                                            | Minor (2)         |                        |
| No current scenario.                                                            | Moderate (6)      |                        |
| Xbox network online players are segmented based on their console type. | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                            | Catastrophic (22) |


<br />

*Notes*
- No current FMA Notes to consider.

<br />
<br />


**130-04 Featured Game Modes**

| Scenario                                                                                                                     | Severity          | Platform               |
|------------------------------------------------------------------------------------------------------------------------------|-------------------|------------------------|
| No current scenario.                                                                                                         | Not Relevant (-4) |                        |
| No current scenario.                                                                                                         | Very Minor (1)    |                        |
| No current scenario.                                                                                                         | Minor (2)         |                        |
| No current scenario.                                                                                                         | Moderate (6)      |                        |
| One or more consoles from the same generation of devices provides different game modes based on their same generation console type. | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                         | Catastrophic (22) |


<br />

*Notes*
- No current FMA Notes to consider.

<br />
<br />


**130-05 Compatibility Mode**

| Scenario | Severity | Platform   |
| --- | --- | --- |
| No current scenario. | Not Relevant (-4) | |
| No current scenario. | Very Minor (1)    | |
| No current scenario. | Minor (2)         | |
| No current scenario. | Moderate (6)      | |
| The title does not allow users to  enter, play, or complete a multiplayer session between the same console generation or cross generation when supported. | Critical (12)     | Xbox One, Xbox Series |
| The title is built on GDK and does not function as expected when quick resumed on an Xbox Series X&vert;S.  | Critical (12)     | Xbox One, Xbox Series |
| The title does not retain a user's saved data after a full title reboot on an Xbox Series X&vert;S. | Critical (12)     | Xbox One, Xbox Series |
| The title does not roam a user's saved data generated on a console from the Xbox One family of devices to an Xbox Series X&vert;S (and back) without a loss in data.  | Critical (12) | Xbox One, Xbox Series |
| The title does not suspend or resume as expected on an Xbox Series X&vert;S | Critical (12)     | Xbox One, Xbox Series |
| No current scenario. | Catastrophic (22) | |


<br />

*Notes*
- Titles which support multiplayer functionality are expected to, and MUST, work within the same console generation (i.e. Series X|S must work together and consoles from the Xbox One family of devices must work together).  Cross generational functionality is OPTIONAL.
- By design, all ERA titles are capped at 60fps on Gen9 devices.  ERA+ titles may request to go to 120hz within the manifest to increase this limit.