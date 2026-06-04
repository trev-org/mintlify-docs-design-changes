---
title: Accessibility metadata
description: Criteria for tagging accessibility features in games.
services: gaming
author: joannaleecy
ms.author: brannonz
ms.service: gaming
ms.topic: article
ms.date: 1/15/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Accessibility

Developers can identify accessibility features in their games by *tagging* the features by using the **Accessibility** feature in the **Gaming Metadata** module. Players can filter game catalogs to find games tagged with the specific accessibility features they need.

Specific criteria must be met before a feature can be tagged as having a certain accessibility feature. These criteria ensure that features are implemented in a useful and helpful way. For example, a game might include subtitles. If they're small and hard to distinguish from the game's background, they won't help a player who relies on subtitles to understand the game narrative.

The criteria, which are described in this article, are validated by Microsoft to ensure accuracy *after* a Catalog Listing is published for a product. This is why it's critical that developers or publishers fill out these fields accurately. *If your game is incorrectly tagged as meeting all of the criteria for a specific feature when it doesn't, your Microsoft Representative will contact you and ask you to update your Catalog Listing to remove the feature.*

If your game doesn't meet all of the criteria for one or more tags, we encourage you to consider adding accessibility features in a future update. Catalog Listings can be updated with newly supported accessibility features whenever they're added.

If you have any questions about whether your game meets specific criteria, or if you're looking for more guidance on how to implement accessibility features in your game, see the [Xbox Accessibility Guidelines (XAGs)](https://aka.ms/xags). If you still have questions, reach out to [Xbox Partner Accessibility Questions](mailto:xpaq@microsoft.com).

### Accessibility feature requirements

The following criteria must be met to "tag" a game as supporting its respective feature. **All of the criteria for an accessibility feature must be met for the feature to be tagged as supported.**

## Additional accessibility information

**Description**  
A page provides additional or detailed information about a game's accessibility features.

**Relevant XAG**  
[XAG 121](/gaming/accessibility/xbox-accessibility-guidelines/121)

Make sure the information page is accessible. To check if it's accessible, download [Accessibility Insights for Web](https://aka.ms/keros). This free tool makes it easy to test your game's accessibility information page.

**Criteria**

- The accessibility page must be specific to your game. It can't be a general accessibility page that covers multiple games.
- The URL must not contain locale or language identifiers.
- It's acceptable to provide a URL **without** locale or language identifiers that redirects (based on a client's settings) to a language or locale-specific URL.
- The game name doesn't need to appear in the URL.

**Fail example**  
https://www.xbox.com/en-US/games

**Success example**  
https://www.gears5.com/accessibility


## Gameplay: Accessibility on launch

**Description**  
When a player initially launches a game, accessibility settings are presented as the very first dialog before any game cinematic content, gameplay, or additional UI (such as a main menu) is presented.

**Relevant XAG**  
[XAG 112](/gaming/accessibility/xbox-accessibility-guidelines/112)

**Criteria**  
The game supports accessibility on launch.

- The game prompts players to configure accessibility settings on the first screen that appears when the game launches&mdash;before a main menu, any cinematic content, and gameplay.
- If a player has configured and saved their accessibility settings, any subsequent launches can use the stored settings.
- If the game supports menu narration, the game must narrate the navigation and configuration of the accessibility settings dialog.
- At a minimum, the game must support the following accessibility settings on this screen:
  - Custom volume controls: All individual volume levels
  - Narrated game menus: On/off
  - Adjustable text size: Text size or scale
  - Subtitle options: On/off, speaker identification, font size, mixed case, sans serif font, and solid background
  - Text contrast options: High contrast on/off
- If there are more accessibility settings, either include them on this screen or add a message that states that additional accessibility settings are available and where they are.

**Fail example**  
Upon the first launch of the game, the player is immediately taken to the main menu.

_OR_

Upon the first launch of the game, the player is shown introductory cinematic content. After the cinematic content plays, a menu appears that provides accessibility features for the player to configure. After they configure these settings, they're taken to the main menu. Subsequent game launches for that player profile take the player directly to main menu.

**Success example**  
Upon the first launch of the game, a menu appears that provides accessibility features for the player to configure. After they configure these settings, they're taken to the main menu, gameplay, or a cinematic. Subsequent games launches can take the user to the accessibility features, opening cinematic, or the main menu.  
&nbsp;
***

**Criteria**  
The game supports settings access before gameplay.

- The game provides the player with access to all game settings before gameplay starts or in the very first moments of gameplay.
- This ensures that players can change any settings that they need to before engaging in gameplay.

**Fail example**  
Upon launching the game, the player is taken immediately into a gameplay. The player is unable to access game settings until after playing through the initial tutorial level.

**Success example**  
Upon launching the game, the player is taken immediately into gameplay. The player can pause the game. From the pause menu, they can access all game settings before returning to gameplay and complete the initial tutorial level.


## Gameplay: Adjustable Difficulty

**Description**  
The game provides multiple ways to adjust the difficulty of in-game mechanics.

**Relevant XAG**  
[XAG 108](/gaming/accessibility/xbox-accessibility-guidelines/108)

**Criteria**

- The game includes four or more difficulty levels. Difficulty levels can directly affect all core game mechanics or be used as "presets" to adjust groups of individually configurable game mechanics all at once.
- The game provides the ability for players to individually adjust specific mechanics that affect the difficulty of the game. This can either be through explicit difficulty settings (like Puzzle Difficulty, Combat Difficulty) or through a set of "assists" (like Brake Assist or Auto-Aim).
- The game provides an ultra-low difficulty mode that enables a wide range of players to progress through the narrative.
  - Doesn't apply to competitive multiplayer modes.
  - For games without narrative, this mode should allow steady progression through the experience.
  - Difficulty names shouldn't insult the player. For example, avoid names like Baby Mode and Wimp Mode.


## Gameplay: On-demand tutorials

**Description**  
Indicates that tutorials are available when the player needs them that explain and demonstrate gameplay.

**Relevant XAG**  
[XAG 109](/gaming/accessibility/xbox-accessibility-guidelines/109)

**Criteria**

- The game provides one or more tutorials that explain the basic controls and core mechanics of the game.
  - Tutorials must either actively walk the player through the mechanics via simulated or real gameplay or be passive videos that demonstrate the mechanics and associated controls necessary to activate them.
  - A simple, static screen that displays the controls available to a player doesn't meet these criteria.
  - It's highly recommended that developers make these tutorials accessible by providing subtitles when narration is present and allowing players to remap buttons.
- The tutorial is available on demand and can be accessed without losing any game progress.



## Gameplay: Pausable

**Description**  
The player can pause or "freeze" the game state at will.

**Relevant XAG**  
[XAG 108](/gaming/accessibility/xbox-accessibility-guidelines/108)

**Criteria**  
The game must be able to be paused at any time.

- This tag applies only to games with single player, local multiplayer, and local split-screen gameplay.
- Both active gameplay and cinematic content (intros, video cut scenes, and scripted cut scenes) must be able to be paused.
- Loading and saving screens don't need to be able to be paused.
- If a game includes additional online multiplayer modes, it's not a requirement to pause those modes.


## Gameplay: Progress saving options

**Description**  
There are options to ensure that gameplay can be saved regularly enough to prevent significant loss of in-game progress.


**Relevant XAG**  
[XAG 108](/gaming/accessibility/xbox-accessibility-guidelines/108)

**Criteria**

- All game modes must support saving except competitive multiplayer modes, whether local or online.
- Both manual and auto-save options should be provided so that players can continue after failure without significant loss of progress.
- Players must be able to load at least three prior game states.
- Games must be able to be saved manually at any point other than loading screen and in-game cinematic content.
  - Checkpoint systems alone are insufficient to meet manual or auto-save criteria.
  - Saving state in real-time (such as often seen in MMOs) alone is insufficient to meet manual or auto-save criteria.
- Auto-saves must never overwrite manual saves, and manual saves must never overwrite auto-saves.
- Players must be able to adjust the time interval between autosaves such that autosaves can occur as frequently as every five minutes (barring time spent in cinematic content or pause menus). Lengthy single encounters (like boss fights) that might go longer than five minutes depending on user skill are encouraged to either include an ability to save and reload at any point of the encounter or an ability to save and reload to a prior major milestone in the encounter.
- Manually overwriting a save file must provide the player with a warning that the action can't be undone.


## Audio: Custom volume controls

**Description**  
The game provides discrete volume controls for different types of audio.

**Relevant XAG**  
[XAG 105](/gaming/accessibility/xbox-accessibility-guidelines/105)

**Criteria**  
Games must provide a method for players to adjust the volume of the audio, or mute different types of audio independently from each other, including the following:

- Background music
- Voice-overs or character dialogue
- Active sound effects (those critical to gameplay like engine noise, gunshots, footsteps)
- Background or ambient sound effects (sounds that aren't critical to gameplay)
- Menu or UI narration
- Multiplayer voice chat


## Audio: Narrated game menus

**Description**  
The game has an option to narrate menus or "voice" them through speech synthesis.

**Relevant XAG**  
[XAG 106](/gaming/accessibility/xbox-accessibility-guidelines/106)

**Criteria**

- All UI text must support the option to use screen readers that are available on the platform or voice out of the UI through a speech synthesizer. This requirement includes all menu UI text, such as the main menu, options, and players in lobbies. It also includes state changes while moving between menus, such as moving from menu into gameplay, moving from gameplay into menu, and switching between menus. The use of recorded audio files can also be a solution, although it isn't considered ideal.
- The game must support a focus order that's aligned with the meaning or operation of the UI. If the navigation sequence is independent of the meaning or operation, align the focus order with the flow of the visual design.
- When the context changes, the player should be notified via narration of the new context. This requirement includes moving between different menus, and moving between menus, loading screens, or gameplay.
- Context changes must be player initiated.
  - Context change that occurs due to matchmaking is exempt from this requirement. For example, it's acceptable to kick off loading when the final player joins a lobby.
  - Similarly, transitions from loading screens into gameplay or other menus are exempt from this requirement.
- Players must be notified via narration of events that are relevant to player interactions, such as changes in component states, value, or description. This requirement includes reoccurring or timed-based notifications such as indications of game state (loading screens, searching for player notifications, or countdown timers). These notifications must read out the state every 7-10 seconds so they don't interfere with other narration or notifications.


## Audio: Spatial audio

**Description**  
The game supports Spatial Sound enhanced audio experiences. *Spatial audio* is defined as audio technology that supports both surround and elevation (above or below the listener) audio cues.

**Relevant XAG**  
[XAG 105](/gaming/accessibility/xbox-accessibility-guidelines/105)

**Criteria**

- The game must provide an option to enable and disable spatial audio or use the platform-level settings to do so.
- Spatial audio must include sound effects, narration, and any other important game sounds that help the player determine the directionality of the audio.
  - Important game audio is defined as any audio that provides information to the player that's useful in completing in-game objectives. It includes sounds like footsteps from enemies, gunfire, or people talking.
  - When spatial audio is disabled, stereo or mono audio must be used.
  - Games in which objects that emit audio are never directly above or below the player are only required to support surround sound.
  - Additional information on Microsoft Spatial Audio, which can be used to satisfy these criteria, can be found [here](/gaming/gdk/docs/features/console/audio/overviews/spatial-audio-overview).

## Visual: Adjustable text size

**Description**  
The game can be adjusted to meet minimum font size requirements.

**Relevant XAG**  
[XAG 101](/gaming/accessibility/xbox-accessibility-guidelines/101)

**Criteria**

- All text, by default, must meet or exceed the following minimum guidelines:
  - Console: Font size should equal or exceed 26 pixels at 1080p, 52 pixels at 4K
  - PC/VR: Font size should equal or exceed 18 pixels at 1080p, 36 pixels at 4K
  - Mobile/Xbox Game Streaming: 18 pixels at 100 DPI, 36 pixels at 200 DPI, 72 pixels at 400 DPI. Scale linearly as the DPI increases.
- Players must be able to resize text up to 200 percent of the minimum font sizes (as previously listed), without the loss of content, functionality, or meaning. For example, console text at 1080p should be scalable from 26 pixels to 52 pixels at 1080p. It's acceptable for the player to choose to scale text down so it's smaller than the default minimum.
- Large header text must still be visually differentiated from the body when text is scaled.
- Text that scales beyond the visible screen must have a method to be read, such as scrolling text, text pop-up windows, or appropriate abbreviations.
- When text is scaled, the player isn't required to scroll both horizontally and vertically to read text within a single UI element. Scrolling in one direction is OK.


## Visual: Color options

**Description**  
The game doesn't use color alone to indicate important information or, if it does, provides options to adjust important colors.

**Relevant XAG**  
[XAG 103](/gaming/accessibility/xbox-accessibility-guidelines/103)

**Criteria**  
Any content that's critical to understanding gameplay or comprehending the narrative, and is expressed through color, also needs to be expressed by using at least one additional signifier such as shape, pattern, iconography, or text labels. Alternatively, players must be able to adjust the colors that are used.

- An option to turn on additional signifiers such as shape, pattern, iconography, or text labels to compensate for information expressed through color alone (by default) will satisfy the criteria for this tag.
- Acceptable options for configuring colors include (ideally) giving the player free choice of color or providing distinct palettes designed specifically for players with colorblindness, including separate palettes for:
  - Protanopia
  - Deuteranopia
  - Tritanopia
- Providing game-wide colorblindness filters alone doesn't meet the criteria for this accessibility feature.

## Visual: Steady camera

**Description**  
The game doesn't include any camera shaking or bobbing or, if it does, provides options to turn off such camera behavior.

**Relevant XAG**  
[XAG 117](/gaming/accessibility/xbox-accessibility-guidelines/117)

**Criteria**
- The game can't include camera shake or camera bobbing, or there must be an option to turn off these behaviors.
- If a game includes both camera shake and camera bobbing, it's acceptable to either provide a single option that turns off both behaviors or provide separate options to turn off each behavior independently.
- This requirement applies to both gameplay and cinematics.


## Visual: Subtitle options

**Description**  
The game contains subtitles that meet minimum requirements and options to adjust their display.

**Relevant XAG**  
[XAG 104](/gaming/accessibility/xbox-accessibility-guidelines/104)

**Criteria**

- Subtitles (text equivalents for speech) are provided for all spoken content.
- Subtitles and can be turned on or off at any time, and be configured easily through a discoverable setting.
- Players can adjust the subtitle option before starting gameplay or before any cinematic content is displayed. Subtitle options only need to be provided the first time a player launches the game, before introductory cinematic content that takes place before the main menu UI is displayed. Subsequent launches don't require offering subtitle options.
- Either the speaker is identified, or there's an option to identify the speaker.
  - Color can be used to distinguish who is speaking. However, color must be used together with another way of showing who is speaking, such as text.
  - If the speaker is an unidentified narrator and there aren't other speakers, the speaker's name doesn't need to be provided.
- All subtitle text, by default, must meet or exceed the following minimum guidelines:
  - Console: Font size should equal or exceed 26 pixels at 1080p, 52 pixels at 4K
  - PC/VR: Font size should equal or exceed 18 pixels at 1080p, 36 pixels at 4K
  - Mobile/Xbox Game Streaming: 18 pixels at 100 DPI, 36 pixels at 200 DPI, 72 pixels at 400 DPI. Scale linearly as the DPI increases.
- Players must be able to resize text up to 200 percent of the minimum font sizes (as previously listed), without the loss of content, functionality, or meaning. As an example, console text at 1080p should be scalable from 26 pixels to 52 pixels at 1080p.
- Subtitles must either show no more than two lines of subtitles onscreen at a time (three can be used in exceptional cases), or players must have an option to allow only two lines to be displayed at a time.
  - "Exceptional cases" would be cases where the majority of subtitles are shown on two lines.
  - Occasionally, three lines are required to present a large amount of text onscreen.
- Subtitle font must either be mixed case, or players must have an option to switch to mixed case.
- The subtitles must either be in a sans serif font, or players must have an option to use a sans serif font.
- Either a solid background must be behind all subtitle text, or players must be able to place a solid background behind subtitle text to ensure readability of that text.
- Subtitles must be designed such that they don't obscure, and aren't obscured by, important UI or gameplay elements when scaled to the largest size.


## Visual: Text contrast options

**Description**  
Text meets, or can be adjusted to meet, industry accessibility standards for text contrast and supports a high contrast option.

**Relevant XAG**  
[XAG 102](/gaming/accessibility/xbox-accessibility-guidelines/102)

**Criteria**

- When text is displayed over a non-solid color background, the text contrast ratio should be measured between the text and the lowest contrasting area of the background.
- When using a semi-opaque background to meet these criteria, verify that the contrast ratios can be met in a worst-case scenario. As an example, if you're using white text with a semi-opaque black background, test with as light of an image behind the background as might be experienced by the player, such as a snowy background. If the opaqueness of the text background can be adjusted, test with the most opaque setting.
- Text that provides important information or context for gameplay should either have a contrast ratio of at least 4.5:1 against the background, or have an option to adjust contrast to meet these requirements.
- Text on disabled elements should meet a minimum contrast ratio of 2.5:1 against its background, or have an option to adjust contrast to meet these requirements.
- A high contrast mode should be provided. When enabled, the contrast ratios should equal or exceed 7:1 for all UI text elements against their background.


## Input: Adjustable input sensitivity

**Description**  
Analog control input sensitivity can be adjusted.

**Relevant XAG**  
[XAG 107](/gaming/accessibility/xbox-accessibility-guidelines/107)

**Criteria**

- The sensitivity of each analog control used must be able to be adjusted individually, including analog sticks, analog triggers, race wheels, and mouse movement (as applicable). Platform-level adjustments to sensitivity of analog controls alone don't meet this criteria.
- Sensitivity must be able to be increased and reduced by at least 50% of the default sensitivity.

## Input: Full keyboard support

**Description**  
The game can be played with just a keyboard and no other additional input mechanisms such as a mouse or controller.

**Relevant XAG**  
[XAG 107](/gaming/accessibility/xbox-accessibility-guidelines/107)

**Criteria**

- The game must completely playable using only a keyboard as an input mechanism.
- The game can't have functionality that can't be used or experienced when using a keyboard alone.

## Input: Input remapping

**Description**  
The game provides players the ability to map performance of input options, keys, and buttons to in-game actions.

**Relevant XAG**  
[XAG 107](/gaming/accessibility/xbox-accessibility-guidelines/107)

**Criteria**

- UIs throughout the game must support both digital and analog navigation, including menu UI and in-game UI.
  - Remapping basic controls that change focus of UI elements (typically the d-pad or analog sticks) isn't required as long as both analog and digital inputs can be used.
  - Basic controls for activating a UI element (typically the "A" button on Xbox) and canceling or backing out of a UI (typically "B" on Xbox) aren't required to be remappable and don't require an analog alternative.
    - Additional keys to interact with menu UI must be remappable or that functionality must be accomplishable using basic navigation and selection keys. For instance, if a user can press "RT" to quickly move between menu tabs, as long as the user can also use the d-pad, analog sticks, and default activate or cancel buttons to move to those same menu tabs, "RT" doesn't need to be remappable.
- Game UI must be navigable by using single, nonsimultaneous key presses.
- Players must have the option to remap all of the controls within gameplay, including remapping analog and digital controls, and inverting both the x-axis and y-axis independently for each individual control stick.
- All gameplay interface components must be fully operable with digital input, even if the primary mode of input is intended to be analog. This requirement relates to the function and not the input technique. For example, if a player is using analog triggers for gas in a racing game, the game should work properly if the control is remapped to a digital control like the "A" button.
- When a player remaps a control within the game, the labeling of the new mapping is shown correctly in any hints, tips, tutorials, or controller map schemes.

## Input: No button holds

**Description**  
The game either doesn't require buttons to be held down to play the game, or there's an option to adjust gameplay that doesn't require holding down a button.

**Relevant XAG**  
[XAG 107](/gaming/accessibility/xbox-accessibility-guidelines/107)

**Criteria**

- Either there are no situations where a key or button must be held down for an extended period
  before the input is registered, or there are options to ensure a key or button doesn't need to
  be held down to complete all in-game experiences.
- Analog sticks and D-pad input related to character or camera movement are exempt from this requirement.


## Input: No quick-time events

**Description**  
Either the game doesn't require rapidly repeating button presses and execution of multiple button presses within a short time to activate a function or complete a game, or there's an option to adjust gameplay that doesn't require such button presses.

**Relevant XAG**  
[XAG 107](/gaming/accessibility/xbox-accessibility-guidelines/107)

**Criteria**

- The game has no mechanics where a player is required to repeat or execute multiple keystrokes or
  button presses within a short period of time to activate a function (like a combo in a fighting game)
  or complete a game mechanic (like quick-time events).
- Alternatively, the game has options that are less physically demanding (such as one button combos), so
  the player can adjust the amount of time allowed for button presses, or bypass game events that require
  using these mechanics.
- "A short period of time" between button presses is defined as less than one second. Any option that
  allows the player to increase the allowed time between button presses to at least one second or greater
  (up to and including no time limit) meets this requirement.
- A solution for rapid actions like firing can include toggles. For example: Press "**A**" once to begin
  firing automatically at regular intervals, press "**A**" again to stop firing.


## Input: Single stick gameplay

**Description**  
Indicates that the game can be completed by using only a single analog stick or D-pad, along with additional buttons, such as "**A**", "**B**", "**X**", "**Y**", or triggers.

**Relevant XAG**  
[XAG 107](/gaming/accessibility/xbox-accessibility-guidelines/107)

**Criteria**

- The game doesn't require the use of two analog sticks (or an analog stick and a D-pad) to complete any mechanics.
- Some games natively support a single stick due to the style or genre of game. However, even games that traditionally require two sticks (such as first person shooters) can include options for a single stick control (such as Gears 5) to meet this requirement.
- Some games recognize a press-in (or "click") of the stick as an input. Even if the game isn't using the second stick for directional input, if a click is required on that second stick, this tag can't be used unless the game supports remapping that second click to another _unused_ button.
- Some games use the D-pad for behaviors beyond character movement, such as weapon or item selection. If a game requires using a D-pad for such input, the tag can't be used unless each D-pad input ("up/down/left/right") can be remapped in-game to other _unused_ buttons or activated through other means other than analog sticks (such as from a menu).

**Success example**  
A game uses a D-pad for character movement, "**A**" for jump, and "**B**" for smash.

_OR_

A game uses an analog stick for character movement, "**A**" for jump, and "**B**" for smash.

**Fail example**  
A game uses a D-pad for character movement, "**A**" for jump, and "**B**" for smash, and requires using the analog stick to select items.

## Input: Text-to-speech/Speech-to-text communications

**Description**  
The game supports text-to-speech (TTS) and speech-to-text (STT) functions for player communications.

**Relevant XAG**  
[XAG 119](/gaming/accessibility/xbox-accessibility-guidelines/119)

**Notes**  
The following criteria must be met for at least one language the game UI is localized in. The criteria vary by the type of chat features a game supports. Important: This tag's criteria will likely be updated in the future to require that the following criteria be met for *all* languages the game UI is localized in. Developers are encouraged to plan accordingly.

- Games supporting voice chat
- Games supporting text chat
- Games supporting sending canned phrases, emojis, and emotes
- Games supporting player-initiated character voice

A game doesn't need to support all four of these types of chat to meet the criteria. However, any supported chat must meet the relevant criteria. Games without chat don't meet these criteria.

**Criteria**

- **Games supporting voice chat: Speech-to-text (incoming voice → text)**  
Players can enable speech-to-text chat to have all voice-based communication from other players transcribed into text in real-time.

- **Games supporting voice chat: Text-to-speech (outgoing text → synthesized voice)**  
Players can enable text-to-speech chat. When enabled, players are provided a text-entry box. All outgoing text that the player enters into the text-entry box is transformed into synthesized audio in real-time and broadcast on the voice channel to all other players. A text-entry box should be made available for players to enter text everywhere communication is available, except for short loading screens that last less than a minute.

- **Games supporting text chat: Text to voiced output (incoming text → local voice)**  
Players can enable all incoming text-based communications from other players to be voiced out in real-time locally, either discreetly or in conjunction with screen reading functionality in the game.

- **Games supporting sending canned phrases, emojis, and emotes: Voiced output (incoming → local voice).**  
All canned phrases, emojis, or emotes sent from other players are voiced out in real-time, locally either discreetly or in conjunction with screen reading functionality in the game. Emojis and emotes should be voiced using natural language. As an example, a "heart" emoji should be read out as "heart" or "love" instead of its Unicode character value.

- **Games supporting player-initiated character voice: Speech-to-text (incoming character VO → text).**  
All player-initiated character communication spoken aloud that conveys intent to another player, such as the audio voice-over of a predefined message from a chat wheel, should be transcribed into text in real-time and displayed locally to a player with speech-to-text chat enabled.


## Next steps

* [Add gaming metadata for a game](../tutorial-xbox-managed/how-to-add-metadata.md)

## See also

* [Gaming Metadata Overview](metadata-overview.md)
* [Supported Languages](metadata-supported-languages.md)
* [Xbox Accessibility Guidelines](https://aka.ms/xags)
* [Xbox Gaming and Disability Player Experience Guide](https://aka.ms/gadpeg)
