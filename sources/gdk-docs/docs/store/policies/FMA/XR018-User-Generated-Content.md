---
title: "XR018 User Generated Content"
kindex:
- XR018 User Generated Content
- User Generated Content FMA
- User Generated Content FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for User Generated Content"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-018 : User Generated Content

***

## FMA scenario severities
*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-17)*
<br/>

**Test cases**

<br />

**018-01 Reporting Inappropriate Content and UGC Text-String Verification**

| Scenario                                                                                                                                                      | Severity          | Platform              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| The title doesn't block text strings from an unsupported language (blocked strings only need to match the region of the console, as supported by the title). | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                           | Very Minor (1)    |                       |
| No current scenario.                                                                                                                                           | Minor (2)         |                       |
| No current scenario.                                                                                                                                           | Moderate (6)      |                       |
| No current scenario.                                                                                                                                           | Critical (12)     |                       |
| Words from the forbidden terms list aren't blocked and the title doesn't provide a way for users to report other users’ inappropriate content.                          | Catastrophic (22) | Xbox One, Xbox Series |


<br />

*Notes*
- Real-time text communication shouldn't be considered UGC and is exempt from text filtering. Instead, it should adhere to the relevant communication privileges.
- Creating banned terms out of in-title UGC (such as spelling out a word with materials or shapes) isn't required under this XR and is exempt from the requirements of XR-018 because it doesn't involve text strings. It should instead adhere to the relevant privilege.
- Titles must contain clear representation or descriptions to "Report a Player" when content isn't being filtered. That representation is a button to "Report Player." Selecting the in-title report feature can then invoke the game card that contains the **Report** option.
- If the UGC privilege is set to blocked, the user can still enter text-based input (such as guild names, player names, or chat messages) if the title passes that input through a verification service that filters unapproved words.