---
title: "XR045 Xbox network and Account Privileges"
kindex:
- XR045 Xbox network and Account Privileges
- Xbox network and Account Privileges FMA
- Xbox network and Account Privileges FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Xbox network and Account Privileges"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-045 : Xbox network and Account Privileges

***

## FMA scenario severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-28)*

<br/>

**Test cases**

<br />

**045-01 Respect User Privileges**

| Scenario                                                                                                                                                                                                                                                                                                                                                                                                      | Severity          | Platform                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| [UWP titles only] The title doesn't display a system UI error message when reacting to a privilege conflict and instead displays an in-title error message informing the user of the privilege conflict. UWP can't support the system messaging and must instead rely on in-title messaging. (Some UWP titles can allow for system messaging. When they do, they must follow general messaging guidelines.) | Not Relevant (-4) | Xbox One, Xbox Series          |
| The title allows a non-Game Pass Core Xbox profile to access multiplayer functionality after interrupting a split screen session by signing out of a Game Pass Core Xbox profile. | Not Relevant (-04) | Xbox One, Xbox Series |
| [You can see and upload community creations][Blocked]<br/>The title allows the user to upload user generated content.                                                                                                                                                                                                                                                                                         | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| No current scenario.                                                                                                                                                                                                                                                                                                                                                                                          | Very Minor (1)    |                                |
| No current scenario.                                                                                                                                                                                                                                                                                                                                                                                          | Minor (2)         |                                |
| [You can join multiplayer games][Block]<br/>When accepting a game invitation, an informative error message isn't displayed.                                                                                                                                                                                                                                                                                                  | Moderate (6)      | Windows                        |
| [You can see and upload community creations][Block]<br/>The title blocks entire game modes or experiences for users with restricted UGC privileges. | Moderate (6) | Xbox One, Xbox Series, Windows |
| [All Privileges]<br/>The title doesn't correctly reflect a user's privilege settings in the in-title settings, regardless of if the title correctly adheres to the privilege. | Critical (12) | Xbox One, Xbox Series, Windows |
| [All Privileges]<br/>The title persists a user's privilege settings and doesn't reflect the user's actual privileges after they have been changed.                                                                                                                                                                                                                                                           | Critical (12)     | Xbox One, Xbox Series, Windows |
| [All Privileges]<br/>The title treats a partial-allow privilege setting as if the privilege is set to its least restrictive setting (for example, when the user-generated content (UGC) privilege is set to 'Friends', the title behaves as if the privilege is set to 'Allow').                                                                                                                                   | Critical (12)     | Xbox One, Xbox Series, Windows |
| [All Privileges]<br/>The title provides a system level error message, but doesn't specify that there's a privilege conflict.                                                                                                                                                                                                                                                                                | Critical (12)     | Xbox One, Xbox Series          |
| [All Privileges]<br/>The title doesn't display the system UI to alert the user of any privilege conflicts.                                                                                                                                                                                                                                                                                                   | Critical (12)     | Xbox One, Xbox Series          |
| [All Privileges]<br/>The title uses in-game/custom generated messaging to alert the user of any privilege conflicts instead of system UI generated messaging.                                                                                                                                                                                                                                                 | Critical (12)     | Xbox One, Xbox Series          |
| [All privileges]<br/>No error message when trying to access content with the relevant option set to 'Block' (note that there's a moderate severity issue for specifically accepting invitations).                                                                                                                                                                                                               | Critical (12)     | Windows                        |
| [Game Pass Core/Non-Game Pass Core Xbox profiles]<br/>The title displays a Game Pass Core upsell message when attempting to access online areas of the title while using a Game Pass Core profile.                                                                                                                                                                                                                                       | Critical (12)     | Xbox One, Xbox Series |
| [Game Pass Core/Non-Game Pass Core Xbox profiles]<br/>The title blocks access to game areas when using a non-Game Pass Core profile and a system UI error message is displayed but a system UI Game Pass Core upsell message isn't displayed.                                                                                                                                                                                                       | Critical (12)     | Xbox One, Xbox Series |
| [Game Pass Core/Non-Game Pass Core Xbox profiles]<br/>The title blocks access to game areas when using a non-Game Pass Core profile but a system UI Game Pass Core upsell message isn't displayed.                                                                                                                                                                                                                                                  | Critical (12)     | Xbox One, Xbox Series |
| [Game Pass Core/Non-Game Pass Core Xbox profiles]<br/>The title displays a system UI error message indicating that the Game Pass Core upsell isn't available when signed into a non-Game Pass Core profile. For example, "Can't find this page" [Check this behavior on the CERT sandbox - this will only be an issue if it's also reproducible on the CERT sandbox]                                                                                      | Critical (12)     | Xbox One, Xbox Series |
| [Game Pass Core/Non-Game Pass Core Xbox profiles]<br/>The title displays a system UI Game Pass Core upsell message when attempting to access nononline areas (for example, offline modes) of the title while using a non-Game Pass Core profile.                                                                                                                                                                                                   | Critical (12)     | Xbox One, Xbox Series |
| [You can join multiplayer games][Block]<br/>The title blocks access to single player game modes (including local multiplayer).                                                                                                                                                                                                                                                                                                        | Critical (12)     | Xbox One, Xbox Series, Windows |
| [You can join multiplayer games][Block]<br/>The title allows the user to access multiplayer areas while the 'You can join multiplayer games' privilege is set to 'Block'.                                                                                                                                                                                                                                                                                          | Critical (12)     | Xbox One, Xbox Series, Windows |
| [You can join multiplayer games][Block]<br/>The title is UWP, doesn't use system UI messaging, and contains an in-title message that is less informative than "Sorry, you're currently prevented from playing online multiplayer games."                                                                                                                                                                     | Critical (12)     | Xbox One, Xbox Series          |
| [You can share outside of Xbox][Block]<br/>The user is able to post to a social media platform from within the title.                                                                                                                                                                                                                                                                                                         | Critical (12)     | Xbox One, Xbox Series, Windows |
| [You can see and share content][Block]<br/>The title allows the user to access another user's UGC, regardless of publisher/partner moderation.                                                                                                                                                                               | Critical (12)     | Xbox One, Xbox Series, Windows |
| [You can see and share content][Allow]<br/>The title doesn't allow the user to access another user’s UGC.                                                                                                                                                                                                                                           | Critical (12)     | Xbox One, Xbox Series, Windows |
| [You can see and share content][Block]<br/>The title allows the user to view UGC text strings and doesn't filter the banned terms. | Critical (12) | Xbox One, Xbox Series, Windows |
| 
| [You can see and share content][Allow]<br/>The title is UWP, doesn't use system UI messaging, and contains an in-title message that is less informative than "Sorry, you're currently prevented from seeing content other people make. "                                                                                                                                                                     | Critical (12)     | Xbox One, Xbox Series          |
| [You can join cross-network play][Block]<br/> The in-title cross-play setting can be toggled to allow access to cross platform multiplayer areas; regardless of if the title allows the user to access the area. | Critical (12) | Xbox One, Xbox Series, Windows |
| [You can join cross-network play][Block]<br/> The title doesn't display the expected system dialog when attempting to access an area that is cross-play enabled, or when attempting to enable the in-title cross-play setting; regardless of whether the title allows the user to access the area or not. | Critical (12) | Xbox One, Xbox Series |
| [Non-Game Pass Core profiles]<br/>The title allows non-Game Pass Core profiles to enter multiplayer gameplay.                                                                                                                                                                                                                                                                                                               | Catastrophic (22) | Xbox One, Xbox Series, Windows |


<br />


*Notes*
- These scenarios are laid out as the [name of the privilege] as shown in the Xbox settings, and the [privilege setting] tested. For example, [Others can communicate with voice, text, or invites][Block]
 

- [Windows] Titles aren't required to show system level error messaging, but must contain all the relevant information within their in-title messaging to highlight the privilege conflict.
- 'Cross-play' is defined to mean network to network (for example, Xbox network and Playstation) and not Platform to Platform (Xbox Series and Windows).
- At a high level, UGC can include (but isn't limited to):
    - Player-customizable text fields, for example: player nicknames and bio info, character names, weapon names, clan tags, and text posted on signs/boards
    - Player-created or uploaded images, videos, and GIFs
    - Player-created maps, terrains, worlds, player emblems, textures, models, assets, liveries, skins, drawings, sounds, and character behaviors: emotes, animated gestures or actions, body part physics
    - Player-created in-game photos, videos, and GIFs (excludes content uploaded to the Xbox Network, for example, Xbox Screenshots and Game clips)
    - Note - titles that implement in-game capture features with limited editing capabilities or player customization (for example, photo filters, cropping, resizing, and similar features) and are less likely to produce objectionable content might qualify for exemption.

- Examples of what isn't considered UGC:
    - Prefabricated in-game player responses governed by the developer (for example, "Hi" or "GG")
    - Player avatar emotes designed by the developer
    - Recordings or 'ghosts' of a player's game activity
    - Scenarios where players can minimally customize developer created and vetted content within strictly established parameters
        - For example, players changing the color or size of a player emblem isn't UGC. However, allowing players to layer multiple emblems could result in an unintended outcome and is considered UGC.
- Text-based UGC also needs to adhere to XR018 standards.
- In-title custom messaging can be implemented to invoke after, but not instead of, system UI messaging (for example, two messages might show - system UI and then in-title).
- System UI error messaging is required for all titles that didn't pass certification as of June 1, 2017. All new titles submitted after that date must adhere to this requirement. Titles certified before June 1, 2017, including new or derivative SKUs based on a parent title certified before that date, may continue to use in‑title custom messaging or no messaging unless otherwise specified in a certification scenario.
- The 'You can join cross-network play' privilege is overwritten by the setting enabled for the 'Others can communicate with voice, text, or invites' privilege.
- When the 'See content other people make' privilege is blocked, the title must not allow the user to access another user's UGC. Appropriate error messaging must be displayed as requirement for a pass.
- The user might be unable to access unrelated online areas (Leaderboards) when the 'You can join multiplayer games' privilege is blocked.
- [You can see and upload community creations]<br/>Custom usernames and clan/squad/guild names must adhere to XR18 however aren't required to be obfuscated with the privilege blocked.


<br />
<br />

**045-02 Respect User Privileges - Xbox Family**

| Scenario | Severity | Platform |
|----------|----------|----------|
| [All Privileges]<br/>The title gates access to multiplayer game modes by multiple privileges. For example, when trying to access multiplayer the user is prompted the system UI for multiplayer privileges (including the parental permission UI for children). After approving the multiplayer privileges by the parent, the title then checks the UGC privileges and shows the system UI when the user has the UGC privilege blocked. | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario | Very Minor (1) | |
| [All Privileges]<br/>The title requires the user to back out to previous menus and doesn't immediately allow a child account access to activities after granting permission to those activities via a parent account. | Minor (2) | Xbox One, Xbox Series |
| [All Privileges]<br/>The title requires the user to relaunch the title for an updated privilege to be respected. | Minor (2) | Xbox One, Xbox Series |
| No current scenario. | Moderate (06) | |
| [All Privileges]<br/>The title allows access to features and modes that are blocked by the privilege without receiving parental permission. | Critical (12) | Xbox One, Xbox Series |
| [You can join multiplayer games]<br/>The title doesn't allow a child account access to multiplayer features after granting permission to access multiplayer features via a parent account. | Critical (12) | Xbox One, Xbox Series |
| [You can join multiplayer games]<br/>The title doesn't display the system UI when a child account attempts to access multiplayer when the privilege is blocked. | Critical (12) | Xbox One, Xbox Series |
| [You can join multiplayer games]<br/>The title doesn't allow a child account access to multiplayer when the privilege is allowed. | Critical (12) | Xbox One, Xbox Series |
| [You can see and upload community creations]<br/>The title doesn't display the system UI when a child account attempts to access UGC when the privilege is blocked. | Critical (12) | Xbox One, Xbox Series |
| [You can see and upload community creations]<br/>The title allows a child account access to user generated content (UGC) when the privilege is blocked. | Critical (12) | Xbox One, Xbox Series |
| [You can see and upload community creations]<br/>The title doesn't allow a child account access to UGC when the privilege is allowed. | Critical (12) | Xbox One, Xbox Series |
| [You can join cross-network play]<br/>The title doesn't allow a child account access to cross network features after granting permission to access cross network features via a parent account. | Critical (12) | Xbox One, Xbox Series |
| [You can join cross-network play]<br/>The title doesn't allow a child account access to cross network play when the privilege is allowed. | Critical (12) | Xbox One, Xbox Series |
| [You can join cross-network play]<br/>The title doesn't display the system UI to grant parental permissions when a child account attempts to access cross network play when the privilege is blocked. | Critical (12) | Xbox One, Xbox Series |
| No current scenario | Catastrophic (22) | |


<br />

*Notes*
- No current FMA Notes to consider.