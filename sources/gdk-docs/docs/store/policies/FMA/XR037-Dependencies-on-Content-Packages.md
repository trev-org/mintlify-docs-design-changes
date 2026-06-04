---
title: "XR037 Dependencies on Content Packages"
kindex:
- XR037 Dependencies on Content Packages
- Dependencies on Content Packages FMA
- Dependencies on Content Packages FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Dependencies on Content Packages"
edited: 16/10/2025
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-037 : Dependencies on Content Packages

***

## FMA Scenario Severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-22)*

<br/>

**Test Cases**

<br />

**037-01 No Content Package Save-Game Dependencies for Base Title**

| Scenario                                                                                                                                                                                                                  | Severity          | Platform              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                                                                                                                                      | Not Relevant (-4) |                       |
| No current scenario.                                                                                                                                                                                                      | Very Minor (1)    |                       |
| No current scenario.                                                                                                                                                                                                      | Minor (2)         |                       |
| The title does not load a save that was created within a recently deleted downloadable content package. The title notifies that saved progress cannot be accessed due to missing DLC, but the specific DLC is not listed. | Moderate (6)      | Xbox One, Xbox Series |
| The title does not load a save that was created within a recently deleted downloadable content package. The title does not notify that saved progress cannot be accessed due to missing DLC.                              | Critical (12)     | Xbox One, Xbox Series |
| Aspects of the title not related to a content package cannot be played without issue after the user deletes that content package.                                                                                         | Critical (12)     | Xbox One, Xbox Series |
| The user is unable to complete all features and content included with the base title without needing to purchase add-on content.                                                                                          | Catastrophic (22) | Xbox One, Xbox Series |


<br />

*Notes*
- After creating a save within an area provided by the content package and then subsequently deleting the content package, the user might be able to continue to load and use the downloadable content. [Most commonly consumable or skin based content]. This is an acceptable scenario.
- After creating a save within an area provided by the content package and then subsequently deleting the content package, the user is provided with a message similar to: "This game save requires `<content package x>` to continue. Please redownload the item.". This is an acceptable scenario.
- Suggested probability of 2. Lower where it is felt appropriate to do so.


<br />
<br />


**037-02 No Dependencies on Other Content Packages**

| Scenario                                                                                                       | Severity          | Platform              |
|----------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                           | Not Relevant (-4) |                       |
| No current scenario.                                                                                           | Very Minor (1)    |                       |
| No current scenario.                                                                                           | Minor (2)         |                       |
| No current scenario.                                                                                           | Minor (2)         |                       |
| No current scenario.                                                                                           | Critical (12)     |                       |
| The title requires the user to download a content package to utilize content from a different content package. | Catastrophic (22) | Xbox One, Xbox Series |


<br />

*Notes*
- No current FMA Notes to consider.


<br />
<br />


**037-03 DLC Dependency**

| Scenario                                                                                                                                                                                                                            | Severity          | Platform              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| Save data created with DLC which enables a game area/mode cannot be accessed due to the game area/mode not being available without the DLC which enables it. The save game becomes usable again once the DLC has been reinstalled.  | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                                                                                | Very Minor (1)    |                       |
| Minor element of game non-functional after DLC removed.                                                                                                                                                                             | Minor (2)         | Xbox One, Xbox Series |
| The title displays a notification that DLC is missing, but the specific DLC is not listed. This does not prevent the user from loading the save data.                                                                               | Minor (2)         | Xbox One, Xbox Series |
| Moderate element of game non-functional after DLC removed.                                                                                                                                                                          | Moderate (6)      | Xbox One, Xbox Series |
| The title notifies that saved progress cannot be accessed due to missing DLC, but the specific DLC is not listed. The user is unable to access the saved data.                                                                                                                  | Moderate (6)      | Xbox One, Xbox Series |
| Critical element of game non-functional after DLC removed.                                                                                                                                                                          | Critical (12)     | Xbox One, Xbox Series |
| The title becomes unusable when the DLC is not present.                                                                                                                                                                                 | Catastrophic (22) | Xbox One, Xbox Series |
| Saved progress cannot be accessed when DLC is not present and no notification is displayed as to the reason why.                                                                                                                                            | Catastrophic (22) | Xbox One, Xbox Series |


<br />

*Notes*
- Suggested probability of at least 2.


<br />
<br />


**037-04 Multiplayer DLC**

| Scenario                                                                                                                                         | Severity          | Platform              |
|--------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                                                             | Not Relevant (-4) |                       |
| No current scenario.                                                                                                                             | Very Minor (1)    |                       |
| No current scenario.                                                                                                                             | Minor (2)         |                       |
| The title notifies the user that a multiplayer session cannot be accessed due to missing DLC, but the specific DLC is not listed.                                                                                                                          | Moderate (6)      |                       |
| Users who do not meet the DLC requirements of a multiplayer session are not given proper messaging of the DLC requirement and how to resolve it. | Critical (12)     | Xbox One, Xbox Series |
| Users who meet the DLC requirements for a multiplayer session are unable to join and play.                                                                     | Critical (12)     | Xbox One, Xbox Series |
| No current scenario.                                                                                                                             | Catastrophic (22) |


<br />

*Notes*
- No current FMA Notes to consider.