---
title: "XR046 Display Name and Gamerpic"
kindex:
- XR046 Display Name and Gamerpic
- Display Name and Gamerpic FMA
- Display Name and Gamerpic FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Display Name and Gamerpic"
edited: 16/10/2025
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-046 : Display Name and Gamerpic

***

## FMA Scenario Severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-29)*

<br/>

**Test Cases**

<br />

**046-01 Display Name and Gamerpic**

| Scenario | Severity | Platform |
| --- | --- | --- |
| A gamertag is not updated when shown as part of metadata for that user's associated UGC (e.g. the listed creator). | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| No current scenario. | Very Minor (1)    | |
| The title displays the user's gamerpic, but the gamerpic is displayed incorrectly in low visibility areas. The gamerpic is accompanied by the gamertag which is both clearly visible and accurate.  | Minor (2)         | Xbox One, Xbox Series, Windows |
| The title correctly displays a user's gamertag but is split between two lines. | Minor (2) | Xbox One, Xbox Series, Windows |
| In a non-core or low visibility area of the title, the title does not correctly display all 15 characters of any gamertag. | Moderate (6) | Xbox One, Xbox Series, Windows |
| The gamertag does not show some of the Unicode characters correctly (including the auto-generated suffix) when using a modern gamertag. (Log as an ION) | Moderate (6)      | Xbox One, Xbox Series, Windows |
| The title displays the user's gamerpic, but the gamerpic is displayed incorrectly in high visibility areas. The gamerpic is accompanied by the gamertag which is both clearly visible and accurate. | Moderate (6)      | Xbox One, Xbox Series, Windows |
| In core high visibility areas of the title, the title does not correctly display all 15 characters of any gamertag. | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title displays the user's gamerpic, but the gamerpic is displayed incorrectly throughout the title. The gamertag does not accompany the gamerpic. | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title displays a gamertag or gamerpic different from that of the selected Xbox network user. | Critical (12) | Xbox One, Xbox Series, Windows |
| The title does not display any of the required characters of a user's modern gamertag correctly. | Critical (12) | Xbox One, Xbox Series, Windows |
| No current scenario. | Catastrophic (22) | |

<br />


*Notes*
- In betas, the gamertag is not required to be displayed (e.g active user indication), but if the title does implement it then it needs to adhere to this XR.