---
title: "XR064 Joinable Game Sessions and Online Play"
kindex:
- XR064 Joinable Game Sessions and Online Play
- Joinable Game Sessions and Online Play FMA
- Joinable Game Sessions and Online Play FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Joinable Game Sessions and Online Play"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-064 : Joinable Game Sessions and Online Play

***

## FMA scenario severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-38)*

<br/>

**Test cases**

<br />

**064-01 Joining a Game Session from Outside the Game**

| Scenario                                                                                                                                                                         | Severity          | Platform                       |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| The user is flagged as "Joinable" within the Friends list for a short duration, such as during matchmaking (likely due to 2014 Multiplayer APIs and isn't considered an issue)  | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| A private session can be joined by a user's friends (for example, without requiring an invite), likely as this is intended to mean 'Friends only'.                                       | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The title doesn't remove an Xbox profile from the game party when exiting the lobby/game session.                                                                               | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The title supports the ability to send a game invitation via the guide to a session that's full that can't be joined via in-title functionality. | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                             | Very Minor (1)    |                                |
| No current scenario.                                                                                                                                                             | Minor (2)         |                                |
| The title doesn't transition into an online session when joining/accepting a game invitation while the title is terminated, but transitions when launching the title without the need to join again or receive a second game invitation. | Moderate (06) | Xbox One, Xbox Series, Windows |
| The title doesn't inform the user that they must return to the main menu/a previous menu in order to enter the multiplayer session. | Moderate (6)      | Xbox One, Xbox Series, Windows |
| The title doesn't place a user into a joinable game session when joining through the guide and no clear error messaging is displayed.                                                                             | Critical (12)     | Xbox One, Xbox Series, Windows |
| Where an in-game joinable session exists, a user can't join that same session via the guide.                                                      | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title doesn't allow a user to join an open multiplayer session after accepting a game invitation sent via the guide and no clear error messaging is displayed.                                                 | Critical (12)     | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                             | Catastrophic (22) |


<br />


*Notes*
- Suggested probability of 4. Increase or decrease this value where you feel it's appropriate (for example, depending on game area or mode).
- A session is considered "Joinable" if it's listed as joinable in the Friends list, or if it can be joined within the title via a title feature. Examples of a "Joinable" session include direct user-to-user parties, password protected experiences, and private lobbies. Being able to invite a user doesn't necessarily mean a session is joinable. Matchmaking sessions aren't necessarily joinable either.
- The title can optionally support cross-platform PC<->Xbox sessions.
- Titles aren't required to have users appear as joinable through the guide when in a defined private session (for example, a session that can only be joined by another user via game invitation). However, the title must allow users to send and receive a game invitation to a private session via the guide in all scenarios.
- [Windows] As of May 2020, this test case is only applicable when a title supports cross play and shares a titleID with an Xbox variant.


<br />
<br />


**064-02 Joining a Game Session from the Same Game**

| Scenario                                                                                                                                                                        | Severity          | Platform                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| The user is flagged as "Joinable" within the Friends list for a short duration, such as during matchmaking (likely due to 2014 Multiplayer APIs and isn't considered an issue) | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| A private session can be joined by a user's friends (for example, without requiring an invite), likely as this is intended to mean 'Friends only'.                                      | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The title supports the ability to send a game invitation via the guide to a session that's full that can't be joined via in-title functionality. | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                            | Very Minor (1)    | |
| The title prevents the user from rejoining a user's game session after leaving the session.                                                                                    | Minor (2)         | Xbox One, Xbox Series, Windows |
| The title doesn't inform the user that they must return to the main menu/a previous menu in order to enter the multiplayer session.                                                                                                                                                            | Moderate (6)      | Xbox One, Xbox Series, Windows                               |
| The title doesn't place a user into a joinable game session when joining through the guide and no clear error messaging is displayed.                                                                             | Critical (12)     | Xbox One, Xbox Series, Windows |
| Where an in-game joinable session exists, a user can't join that same session via the guide.                                                     | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title doesn't allow the user to send a game invitation through the guide wherever an in-title game invitation can be sent.                                          | Critical (12)     | Xbox One, Xbox Series, Windows |
| The title doesn't allow the user to join an open multiplayer session after accepting a game invitation sent through the guide and no clear error messaging is displayed.                                              | Critical (12)     | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                            | Catastrophic (22) |


<br />


*Notes*
- Suggested probability of 4. Increase or decrease this value where you feel it's appropriate (for example, depending on game area or mode).
- A session is considered "Joinable" if it's listed as joinable in the Friends list, or if it can be joined within the title via a title feature. Examples of a "Joinable" session include: direct user to user parties, password protected experiences and/or private lobbies. Being able to invite a user doesn't necessarily mean a session is joinable. Matchmaking sessions aren't necessarily joinable either.
- The title can optionally support cross-platform PC<->Xbox sessions.
- Titles aren't required to have users appear as joinable through the guide when in a defined private session (for example, a session that can only be joined by another user with a game invitation). However, the title must allow users to send and receive a game invitation to a private session via the guide in all scenarios.
- [Windows] As of May 2020, this test case is only applicable when a title supports cross play and shares a titleID with an Xbox variant.


<br />
<br />

**064-05 Non-Joinable Game**

| Scenario                                                                                                                                                                        | Severity          | Platform                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| No current scenario | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                            | Very Minor (1)    |                                |
| The title displays an appropriate message informing the user the game can't be joined but the message is displayed too briefly (for example, one second or less on screen).            | Minor (2)         | Xbox One, Xbox Series, Windows |
| When a user attempts to join a multiplayer session that's full, a message is displayed informing the user that the session can't be joined but no reason is given.            | Moderate (6)      | Xbox One, Xbox Series, Windows |
| When a user attempts to join a multiplayer session that's full, a message isn't displayed or an incorrect/misleading message or reason is displayed.                          | Critical (12)     | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                            | Catastrophic (22) |


<br />

*Notes*
- Suggested probability of 4. Increase or decrease this value where you feel it's appropriate (for example, depending on game area or mode).
- The title can optionally support cross-platform PC<->Xbox sessions.
- [Windows] As of May 2020, this test case is only applicable when a title supports cross play and shares a titleID with an Xbox variant.