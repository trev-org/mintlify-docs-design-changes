---
title: "XR013 Linking Microsoft Accounts with Publisher Accounts"
kindex:
- XR013 Linking Microsoft Accounts with Publisher Accounts
- Account Linking FMA
- Account Linking FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Linking Microsoft Accounts with Publisher Accounts"
edited: 16/10/2025
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-013 : Linking Microsoft Accounts with Publisher Accounts

***

## FMA Scenario Severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-13)*

<br/>

**Test Cases**

<br />

**013-01 Linking Microsoft Accounts with Publisher Accounts**

| Scenario                                                                                                                                                                                                                                                                                                                                      | Severity          | Platform                       |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| No current scenario.                                                                                                                                                                                                                                                                                                                            | Not Relevant (-4) |                                |
| No current scenario.                                                                                                                                                                                                                                                                                                                            | Very Minor (1)    |                                |
| The title asks the user to re-enter their publisher account details when the title is launched without a connection to the non-Microsoft servers.                                                                                                                                                                                             | Minor (2)         | Xbox One, Xbox Series, Windows |
| The title allows the user to unlink a publisher account outside the title, but does not provide an indication on how to unlink within the title itself. | Minor (2) | Xbox One, Xbox Series, Windows |
| The title contains symbols or QR code blocks that redirects the user to an external website to find and view the Terms of Service, but does not provide a clear indication that the QR code or symbol is meant for this purpose.                                                                                                              | Moderate (6)      | Xbox One, Xbox Series, Windows |
| The title does not notify the user of the Terms of Service prior to the account linking process. See FMA Notes.                                                                                                                                                                                                                               | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title does not allow the user to unlink a publisher account anywhere. Examples: via the title, via the web, via a third-party experience. If via the web, a relevant website must be indicated but this does not need to be a direct link to the unlinking process, nor do we need to find the unlinking process guidance on the website. | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title does not recognize that a publisher account has already been assigned to an Xbox profile when signing into another device.                                                                                                                                                                                                | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title asks the user to re-enter their publisher account credentials after linking a publisher account with an Xbox profile and then signing in on an additional device, or the same device again, or after restarting the title.                                                                                                    | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title links publisher accounts to the device rather than the Xbox profile.                                                                                                                                                                                                                                                 | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title links publisher accounts to multiple Xbox profiles.                                                                                                                                                                                                                                                                                 | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title associates the linking or unlinking of a publisher account across all Xbox profiles on a device.                                                                                                                                                                                                                                   | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title does not allow publisher accounts to be created, when required to access core areas, on a Child Xbox profile. | Critical (12) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                                                                                                                           | Catastrophic (22) |


<br />

*Notes*

- Terms of Service can be provided in-title or via direction to an external resource such as a website where a user can find the information. An external link does not need to be direct to the ToS, nor under a specific game - the ToS simply needs to be available for the user to find.
- Suggested unlinking probability of 4. Linking probability will vary with titles - for some it will be mandatory for any functionality, others optional.