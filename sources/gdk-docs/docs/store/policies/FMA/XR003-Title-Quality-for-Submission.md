---
title: "XR003 Title Quality for Submission"
kindex:
- XR003 Title Quality for Submission
- Title Quality for Submission FMA
- Title Quality for Submission FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Title Quality for Submission"
edited: 03/17/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-003 : Title Quality for Submission

***

## FMA scenario severities 


*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-5)*

<br/>

**Test cases**

<br />

**003-02 Title Integrity**

| Scenario                                                                                                                                                                                                                                                                                                              | Severity          | Platform                       |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| The title is UWP and doesn't allow the user to launch or resume from the Official Club.                                                                                                                                                                                                                                   | Not Relevant (-4) | Xbox One, Xbox Series          |
| The title exhibits slowdown that doesn't prevent gameplay progression and doesn't affect the gameplay experience.                                                                                                                                                                                                   | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The title exhibits minor visual and/or audio corruption which doesn't affect gameplay progression.                                                                                                                                                                                                                   | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The title displays null characters within a user-generated string of text when customized to contain special characters. (for example, Subscript and superscript characters.) *Note* Use XR-046 for Display Name issues.                                                                                                        | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| Incorrect art assets, characters, strings, or spoken language which affect understanding of the title in a nonprominent area (for example, **Submenu**). Incorrect includes null, missing, clipped, overlapping, or placeholder content.                                                                                                                    | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The title links to a blank Microsoft Store page when attempting to purchase DLC from the in-title store.                                                                                                                                                                                                                   | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The title displays a Beta/Game Preview/Trial watermark though it isn't a Beta/Game Preview/ Trial release. | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| [Save Files]<br/>After creating a save with the console localized to a given language, the title displays null characters within the user's save file name when accessed while the console is localized to a different language and location. When switching the language back, the file name is displayed correctly. | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The title displays a small amount of debug text in the corner of the screen on the main menu and/or throughout the title. | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The title is launched with the console set to a supported language but the expected language isn't displayed in-title. The title’s text is fully localized into an appropriate default language (for example, English, or the language of a country/region specific app) instead of what the console is set to. | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| Incorrect art assets, characters, strings, or spoken language which don't affect understanding of the title, in a prominent area (for example, the Title screen). Incorrect includes null, missing, clipped, overlapping, or placeholder content.                                                                                                                 | Very Minor (1)    | Xbox One, Xbox Series, Windows |
| The title only outputs audio in Stereo.                                                                                                                                                                                                                                                                               | Very Minor (1)    | Xbox One, Xbox Series, Windows |
| One or more options act slightly different than intended, but with minimal impact on the end user. | Very Minor (1) | Xbox One, Xbox Series, Windows |
| An in-game feature doesn't function as expected, with minor impact to usability / playability. | Minor (2) | Xbox One, Xbox Series, Windows |
| The title exhibits visual and/or audio corruption or slowdown that doesn't prevent gameplay progression but distracts from the gameplay experience.                                                                                                                                                                  | Minor (2)         | Xbox One, Xbox Series, Windows |
| Incorrect art assets, characters, strings, or spoken language which have a minor impact in game critical areas. Incorrect includes null, incorrectly localized, missing, clipped, overlapping, or placeholder content.                                                                                                                                       | Minor (2)         | Xbox One, Xbox Series, Windows |
| Debug output is displayed which has no effect on usability / playability.                                                                                                                                                                                                                                             | Minor (2)         | Xbox One, Xbox Series, Windows |
| The title links to an unexpected Microsoft Store page when attempting to purchase DLC from the in-title store.                                                                                                                                                                                                             | Minor (2)         | Xbox One, Xbox Series, Windows |
| With all audio sliders set to 0, the title still provides audio in certain locations. | Minor (2) | Xbox One, Xbox Series, Windows |
| An option works in a way significantly different than what the user would expect, affecting the user experience. | Minor (2) | Xbox One, Xbox Series, Windows |
| Options reset between game sessions. | Minor (2) | Xbox One, Xbox Series, Windows |
| The title is launched with the console set to a supported language but the expected language isn't displayed in-title. The text is NOT fully localized into an appropriate default language (for example, English, or the language of a country/region specific app). | Minor (2) | Xbox One, Xbox Series, Windows |
| The title doesn't correctly play noncritical audio or display noncritical text when the console language is set to certain languages. | Minor (2) | Xbox One, Xbox Series, Windows |
| Inability to navigate fully with controller, if supported, to a degree where the user can't access a noncore area (for example, credits) | Minor (2) | Xbox One, Xbox Series, Windows |
| Incorrect button imagery/written command which has a different action than expected, no action where expected, or is widespread through navigation with minor impact to the user. | Minor (2) | Xbox One, Xbox Series, Windows |
| A small element of a single leaderboard doesn't work as expected with limited end-user impact. | Minor (2) | Xbox One, Xbox Series, Windows |
| An in-game feature doesn't function as expected, with moderate impact to usability / playability. | Moderate (6) | Xbox One, Xbox Series, Windows |
| The title exhibits moderate visual and/or audio corruption or slowdown which makes gameplay progress difficult for the average user. | Moderate (6) | Xbox One, Xbox Series, Windows |
| Incorrect art assets, characters, strings, or spoken language which has a moderate impact in game critical areas. Incorrect includes null, missing, clipped, overlapping, or placeholder art assets.                                                                                                                                                            | Moderate (6)      | Xbox One, Xbox Series, Windows |
| The title is a full release but displays the words Beta/Game Preview/Trial in the title's name or within a notification on launch.                                                                                                                                                                                                                      | Moderate (6)      | Xbox One, Xbox Series, Windows |
| [DLC]<br/>A specific piece of DLC doesn't work in-title as expected, however other examples of that type of DLC do work as expected; for example, one skin pack doesn't work, at least one other does.                                                                                                                        | Moderate (6)      | Xbox One, Xbox Series, Windows |
| Progression of core gameplay is prevented for the average user but can be resolved without termination or loss of save data (for example, the title supports regular autosaves and checkpoints, and includes an 'unstuck' button and similar safeguards). | Moderate (6) | Xbox One, Xbox Series, Windows |
| Incorrect button imagery/written command which has a different action than expected, no action where expected, or is widespread through navigation with severe impact to the user. | Moderate (6) | Xbox One, Xbox Series, Windows |
| One or more minor leaderboard(s) can't be accessed. | Moderate (6) | Xbox One, Xbox Series, Windows |
| One or more leaderboard(s) can't be sorted correctly. | Moderate (6) | Xbox One, Xbox Series, Windows |
| A moderate element of a single leaderboard doesn't work as expected with limited end-user impact. | Moderate (6) | Xbox One, Xbox Series, Windows |
| An in-game feature doesn't function as expected, with severe impact to usability / playability. | Critical (12) | Xbox One, Xbox Series, Windows |
| The title emulates a proprietary Xbox network system, such as achievement toasts, which will cause confusion to the end user.                                                                                                                                                                                         | Critical (12)     | Xbox One, Xbox Series, Windows |
| Progression of core gameplay is prevented for the average user, which can only be resolved by overwriting/deleting a significant amount of save data.                                                                                                                                                                                             | Critical (12)     | Xbox One, Xbox Series, Windows |
| Severe visual and/or audio corruption is exhibited which might also prevent gameplay progress.                                                                                                                                                                                                                          | Critical (12)     | Xbox One, Xbox Series, Windows |
| Significant number of incorrect art assets, characters, strings, spoken language in game critical areas that strongly affect the core experience. Incorrect includes null, missing, clipped, overlapping, or placeholder content.                                                                                                                         | Critical (12)     | Xbox One, Xbox Series, Windows |
| Slowdown is exhibited that prevents gameplay progression.                                                                                                                                                                                                                                                             | Critical (12)     | Xbox One, Xbox Series, Windows |
| User generated content becomes, or appears to become, inaccessible.                                                                                                                                                                                                                                                   | Critical (12)     | Xbox One, Xbox Series, Windows |
| A debug feature allows game/system breaking interaction or has a severe impact to usability / playability.                                                                                                                                                                                                            | Critical (12)     | Xbox One, Xbox Series, Windows |
|  Launching the title with the console set to one or more supported languages prevents the user from accessing one or more critical title areas.                                                                                                                                                                       | Critical (12)     | Xbox One, Xbox Series, Windows |
| [DLC]<br/>A particular type of DLC as a whole doesn't work in-title as expected; for example, all consumables or all skin packs.                                                                                                                                                                                              | Critical (12)     | Xbox One, Xbox Series, Windows |
| [Cross Region (Multiplayer)]<br/>The title supports cross-region multiplayer gameplay over the Xbox network but users on different SKUs can't enter gameplay sessions together.                                                                                                                                      | Critical (12)     | Xbox One, Xbox Series, Windows |
| An option, when changed, makes the game unplayable. | Critical (12) | Xbox One, Xbox Series, Windows |
| Launching the title with the console set to an unsupported language results in no text or null characters being displayed that makes the game unplayable to a significant degree to the average user. | Critical (12) | Xbox One, Xbox Series, Windows |
| Inability to navigate fully with controller, if supported, to a degree where user can't access a core area. | Critical (12) | Xbox One, Xbox Series, Windows |
| Most key leaderboard(s) can't be accessed. | Critical (12) | Xbox One, Xbox Series, Windows |
| Significant elements of one or more leaderboards don't update/work correctly. | Critical (12) | Xbox One, Xbox Series, Windows |
| Written or spoken language content so incorrect that it makes the game unplayable for the average user. Incorrect includes null, missing, clipped, overlapping, or placeholder strings. An appropriate default language is acceptable (for example, English, or the language of a country/region specific app).                                                                                                                                                                                                                                                                                                   | Catastrophic (22) | Xbox One, Xbox Series, Windows |
| Progression of core gameplay is prevented for the average user that can't be resolved (for example, the user can never progress further) or requires all save data to be overwritten/deleted. | Catastrophic (22) | Xbox One, Xbox Series, Windows |

<br />

*Notes*
- Notify the Microsoft representative for Microsoft Store related issues (for example, placeholder content displayed, English description for non-English locales).
- In general, if a partner wishes to use English text with the console set to other languages, this text is acceptable. If a language is supported but not implemented when expected, query with the Microsoft representative as to the partner's intention.


<br />
<br />


**003-16 Save-Game Compatibility**

| Scenario                                                                                                                                                                                                                                                                                                                                                                      | Severity          | Platform                       |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------|
| Titles utilize Persistent Local Storage (PLS) (see FMA notes for more info) as a long-term cache to store non-game-save data such as replays. If PLS is used to store replays, there's no expectation that replays will be available on another console or after the title has been uninstalled and reinstalled. PLS shouldn't be used for storing other game-save data. | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| Saves made on the updated version can't be used on the base version, but saves aren't lost or corrupted.                                                                                                                                                                                                                                                                    | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| The base version of the title crashes when loading a save made with the content-updated version of the title, but proper incompatibility messaging is displayed on the content-updated version of the title.                                                                                                                                                                  | Not Relevant (-4) | Xbox One, Xbox Series, Windows |
| No current scenario                                                                                                                                                                                                                                                                                                                                                           | Very Minor (1)    | Xbox One, Xbox Series, Windows |
| Loss of gameplay progress when loading a save which doesn't require a significant amount of time to recover.                                                                                                                                                                                                                                                                 | Minor (2)         | Xbox One, Xbox Series, Windows |
| A misleading incompatibility message is shown when accessing a CU-made save game on the base, but no save data is lost.                                                                                                                                                                                                                                                       | Minor (2)         | Xbox One, Xbox Series, Windows |
| The base version of the title crashes when loading a save made with the content-updated version of the title, and no incompatibility messaging is displayed on the content-updated version of the title. [Log under Title Stability]                                                                                                                                          | Minor (2)         | Xbox One, Xbox Series, Windows |
| A save made on the CU version of the title can be accessed on the base version, but a form of corruption occurs (for example, loss of gameplay progress).                                                                                                                                                                                                                              | Minor (2)         | Xbox One, Xbox Series, Windows |
| Core or noncore option settings generated on a Content Updated version of the title reset when accessed on the base version, or vice versa.                                                                                                                                                                                                                                  | Minor (2)         | Xbox One, Xbox Series, Windows |
| No current scenario                                                                                                                                                                                                                                                                                                                                                           | Moderate (6)      |                                |
| No current scenario                                                                                                                                                                                                                                                                                                                                                           | Critical (12)     |                                |
| A save made on the base version or previous CU version of the title can't be accessed on the most recent CU version.                                                                                                                                                                                                                                                                                           | Catastrophic (22) | Xbox One, Xbox Series, Windows |


<br />

*Notes*
- For digital only titles, users can't experience the scenario of trying to load content-updated save on a previous version of the title as they can never revert back to it.
- PLS - Check that AppXManifest to verify that PLS is being allocated for the submission. What they use it for isn't as important as long as other game-save data is saved using connected storage and is available on another console.
Example pulled from AppxManifest.xml:         
    ```
    <mx:PackageExtension Category=""xbox.storage"">
      <mx:Storage>
        <mx:PersistentLocalStorage SizeInMegabytes=""1024"" />
      </mx:Storage>
    </mx:PackageExtension>
    ```

<br />
<br />


**003-17 Headset State Change**

| Scenario                                                                                                                                                                                                                                          | Severity          | Platform              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario                                                                                                                                                                                                                               | Not Relevant (-4) |                       |
| No current scenario                                                                                                                                                                                                                                | Very Minor (1)    |                       |
| The title exhibits minor audio corruption or distortion following a change in headset state. This issue mildly detracts from the user experience but either resolves itself in a short amount of time or with little user interaction without termination. | Minor (2)         | Xbox One, Xbox Series |
| The title exhibits moderate audio corruption or distortion following a change in headset state that detracts from the user experience.                                                                                                               | Moderate (6)      | Xbox One, Xbox Series |
| The title ceases to output audio through either the TV or headphones following a change in headset state.                                                                                                                                         | Critical (12)     | Xbox One, Xbox Series |
| The title exhibits severe audio corruption or distortion when a change in headset state occurs.                                                                                                                                                      | Critical (12)     | Xbox One, Xbox Series |
| No current scenario                                                                                                                                                                                                                               | Catastrophic (22) |


<br />

*Notes*
- No current FMA Notes to consider.


<br />
<br />


**003-18 Headset State Change after Suspend**

| Scenario                                                                                                                                                                                                                                          | Severity          | Platform              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario                                                                                                                                                                                                                               | Not Relevant (-4) |                       |
| No current scenario                                                                                                                                                                                                                                | Very Minor (1)    |                       |
| The title exhibits minor audio corruption or distortion following a change in headset state. This issue mildly detracts from the user experience but either resolves itself in a short amount of time or with little user interaction without termination. | Minor (2)         | Xbox One, Xbox Series |
| The title exhibits moderate audio corruption or distortion following a change in headset state that detracts from the user experience.                                                                                                               | Moderate (6)      | Xbox One, Xbox Series |
| The title ceases to output audio through either the TV or headphones following a change in headset state.                                                                                                                                         | Critical (12)     | Xbox One, Xbox Series |
| The title exhibits severe audio corruption or distortion when a change in headset state occurs.                                                                                                                                                      | Critical (12)     | Xbox One, Xbox Series |
| No current scenario                                                                                                                                                                                                                               | Catastrophic (22) |


<br />

*Notes*
- No current FMA Notes to consider.
