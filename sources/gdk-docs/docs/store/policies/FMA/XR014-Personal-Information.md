---
title: "XR014 Player Data and Personal Information"
kindex:
- XR014 Player Data and Personal Information
- Player Data and Personal Information FMA
- Player Data and Personal Information FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Player Data and Personal Information"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-014 : Player Data and Personal Information

***

## FMA scenario severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-14)*

<br/>

**Test cases**

<br />

**014-01 Personal Information**

| Scenario                                                                                                                                    | Severity          | Platform                       |
|---------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| No current scenario.                                                                                                                        | Not Relevant (-4) |                                |
| No current scenario.                                                                                                                       | Very Minor (1)    |                                |
| No current scenario.                                                                                                                       | Minor (2)         |                                |
| No current scenario.                                                                                                                        | Moderate (6)      |                                |
| No current scenario.                                                                                                                        | Critical (12)     |                                |
| The title shares personal information with other users and/or consoles.              | Catastrophic (22) | Xbox One, Xbox Series |
| The title accesses or transmits sensitive personal information or presents that information on the screen (same device or remote device). | Catastrophic (22) | Xbox One, Xbox Series |


<br />

*Notes*

- Examples of personal information: email address, real name, age, date of birth, place of birth, profile passcode, secret question, passwords, credit card details, phone number.
- Examples of sensitive personal information: location (anything more specific than country/region), profile passcode, secret question, passwords, credit card details.
- The title might access a user's IP address to determine their location.
- If a user has to specifically perform an action that results in the user showing their IP address, it's not an issue as it's on the user. If it's displayed by default, then it's a concern for us.


<br />
<br />

**014-02 Data Collection**

| Scenario | Severity | Platform |
|----------|----------|----------|
| No current scenario. | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario. | Very Minor (1) | Xbox One, Xbox Series |
| No current scenario. | Minor (2) | Xbox One, Xbox Series |
| No current scenario. | Moderate (6) | Xbox One, Xbox Series |
| No current scenario. | Critical (12) | Xbox One, Xbox Series |
| The title requests personal information from a Child Xbox profile beyond the scope of verifying age, acquiring parental consent, or publisher account linking. | Catastrophic(22) | Xbox One, Xbox Series |
| The title requests information from a Child Xbox profile required for verifying age, acquiring parental consent, or publisher account linking (birth date, parent/child email address) and doesn't state what the data will be used for. | Catastrophic (22) | Xbox One, Xbox Series |


<br />

*Notes*

- Examples of personal information: email address, real name, age, date of birth, place of birth, profile passcode, secret question, passwords, credit card details, phone number.
- Examples of sensitive personal information: location (anything more specific than country/region), profile passcode, secret question, passwords, credit card details.
- Note the XR only applies in cases where the data is being entered by the user manually.
- The title might access a user's IP address to determine their location.
- If a user has to specifically perform an action that results in the user showing their IP address, it's not an issue as it's on the user. If it's displayed by default, then it's a concern for us.