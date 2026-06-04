---
title: "XR070 Friends List"
kindex:
- XR070 Friends List
- Friends List FMA
- Friends List FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Friends List"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-070 : Friends Lists

***

## FMA scenario severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-40)*

<br/>

**Test cases**

<br />

**070-01 Xbox Friends List**

| Scenario                                                                                                                                                                                     | Severity          | Platform              |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                                                                                                         | Not Relevant (-4) |                       |
| No current scenario.                                                                                                                                                                         | Very Minor (1)    |                       |
| No current scenario.                                                                                                                                                                         | Minor (2)         |                       |
| No current scenario.                                                                                                                                                                         | Moderate (6)      |                       |
| The title contains a contacts list that positions itself as the user's core list. It duplicates the Xbox Friends service with only one core list containing non-Xbox network friends only. | Critical (12)     | Xbox One, Xbox Series |
| The title doesn't use Xbox APIs to display a list of friends.                                                                                                                               | Critical (12)     | Xbox One, Xbox Series |
| The title stores a user's Friends list in a permanent nature on game servers.                                                                                                                | Critical (12)     | Xbox One, Xbox Series |
| The title displays a blended friends list containing both Xbox network and publisher account friends and doesn't disambiguate them.                                                         | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                         | Catastrophic (22) |


<br />

*Notes*
- This test case focuses on duplication of lists, as opposed to other functionality of the Friends list such as blocking, muting, or reporting. Other XRs cover these functionalities.