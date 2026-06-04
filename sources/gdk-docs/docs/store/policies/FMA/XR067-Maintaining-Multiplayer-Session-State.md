---
title: "XR067 Maintaining Multiplayer Session State"
kindex:
- XR067 Maintaining Multiplayer Session State
- Maintaining Multiplayer Session State FMA
- Maintaining Multiplayer Session State FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Maintaining Multiplayer Session State"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-067: Maintaining Multiplayer Session State

***

## FMA scenario severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-39)*

<br/>

**Test cases**

<br />

**067-01 Maintaining Session State**

| Scenario                                                                                                                                                                       | Severity          | Platform                       |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| The title uses asynchronous multiplayer and doesn't display all the players from the 'Recently played with' list.                                                             | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The title is an MMO and doesn't populate the 'Recently played with' list with users who participate in Global text communication.                                            | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| An MMO doesn't support proximity voice communication and doesn't populate the 'Recently played with' list with users who are in the same area (outside of a limited session). | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                           | Very Minor (1)    |                                |
| No current scenario.                                                                                                                                                           | Minor (2)         |                                |
| No current scenario.                                                                                                                                                           | Moderate (6)      |                                |
| The title uses synchronous multiplayer and doesn't display all the players from the 'Recently played with' list.                                                              | Critical (12)     | Xbox One, Xbox Series, Windows |
| Users who quit during multiplayer gameplay don't appear in the 'Recently played with' list for a synchronous multiplayer title.                                               | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title is an MMO that supports proximity voice communication but doesn't populate the 'Recently played with' list with users who come in range.                            | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title is an MMO and doesn't populate the 'Recently played with' list with users who sent or received direct text communication.                                           | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title is an MMO and doesn't populate the 'Recently played with' list with users who have directly interacted with one another.                                            | Critical (12)     | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                           | Catastrophic (22) |


<br />

*Notes*  
- Some MMOs support limited sessions within the MMO universe. For example, Raid Dungeons or head to head races. Titles are required to populate the 'Recently played with' list with everyone within that session.
- MMOs are required to populate the 'Recently played with' list under the following circumstances:
    - A user is added to an active in-title party
    - A user joins a limited session within the MMO universe. For example, Raid Dungeon or a multiplayer race
    - A user receives a private message from a user not part of the same clan or group (text based requirement)
    - Users engage in real-time exchanges. For example, trades and barter, where they assume the same screen or confirmation prompts (Dropping an item and picking it up after verbal agreements for example isn't interaction)
    - The title supports proximity voice communication and a user is in range.
- [Windows] As of May 2020, this test case is only applicable when a title supports cross play and shares a titleID with an Xbox variant.