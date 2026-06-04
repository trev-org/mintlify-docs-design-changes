---
author: LukeCraw
title: "Handheld Compatibility program guidelines and test cases"
description: "Provides the guidelines and test cases for Xbox handheld compatibility program."
kindex: Handheld game development
ms.author: lukecr
ms.topic: article
edited: 00/00/0000
ms.date: 08/20/2025
permissioned-type: public
---

# Handheld Compatibility program guidelines and test cases

The Handheld Compatibility program, designed by Xbox, is a promise to gamers playing games coming from the Xbox store. Making games work great on handhelds requires a few extra considerations when comparing how that same game might behave in a PC desktop environment. There are five guidelines that developers should consider satisfying to ensure that their game is best configured for play on a handheld.

Games that meet all these guidelines are marked as Handheld Optimized. Others may be labeled:

* Mostly Compatible: Your game works but may need some manual tweaks
* Unsupported: Your game does not meet some or all of the handheld guidelines
* Unknown: Not yet tested

## Guideline 1: Defaults Just Work

Default setup on a handheld device must enable full gameplay access without requiring players to modify any in-game settings for display, performance, or input to run well on the handheld using only the controller.

**Gamer expectation**  
Games must just work when installed on the handheld device. Gamers shouldn’t need to find a menu and tweak some in-game settings to get the game into handheld mode. Using just the controller, they can navigate all elements of the game.

**Test steps**  
1.	Launch the game.
2.	Using the embedded controller, navigate and play through all areas of the game, including but not limited to: 
    * Game launcher if supported 
    * All game modes
    * All menus, sub-menus and features 
    * Downloadable content 
3.	Verify display, performance or input in-game settings do not need to be modified to play the game, and the game is fully navigable using just the controller. 

**Expected result**  
Display, performance, or input in-game settings do not need to be modified to play the game. The embedded controller is fully supported in all areas of the game, including the game launcher if supported, all game modes, menus, and downloadable content.
 
## Guideline 2: Iconography

Gameplay iconography and in-game warnings should be accurate for the device and not misleading for players. Mouse and keyboard icons must be hidden unless they are the current input method. The game should not present inaccurate information warning users that the gaming device is unsupported.

**Gamer expectation**  
On-screen hints such as iconography help the gamer understand how to navigate and do gameplay. There are no indications suggesting input methods that are not available natively on the handheld that will cause confusion.

**Test steps**  
1.	Launch the game.
2.	Navigate all areas of the game, including but not limited to:
    * Game launcher if supported
    * All game modes
    * All menus, sub-menus and features
    * Downloadable content
3.	Identify all areas where controller iconography is displayed.

**Expected result**  
On-screen hints are clear, understandable, and accurately represent the input method required for the game.

## Guideline 3: Text Input

When text input is needed, games must automatically provide an on-screen keyboard or a controller-friendly custom text entry method.

**Gamer expectation**  
Input is natural and there is no friction using just the controller.

**Test steps**  
1.	Launch the game.
2.	Navigate all areas of the game, including but not limited to:
    * Game launcher if supported
    * All game modes
    * All menus, sub-menus and features
    * Downloadable content
3.	Identify all areas where text input is needed

**Expected results**  
Wherever text input is needed, the game provides an on-screen keyboard or a controller-friendly custom text entry method.

## Guideline 4: UI Legibility

Essential in-game text and user-actionable symbols must be legible from 12 inches away. Differently sized screens have varying requirements: 

* If the screen resolution is 1280x720 (720p), the smallest font size should not drop below 9 pixels in height. It is recommended that games use a font size of at least 12 pixels in height. 
* If the screen resolution is 1920x1080 (1080p), the smallest font size should not drop below 14 pixels in height. It is recommended that games use a font size of at least 18 pixels in height.

**Gamer expectation**  
Essential in-game text and user-actionable symbols are readable on small screens when held at a gaming distance.

**Essential in-game UI elements**  
The following in-game elements are required for legibility optimization and will affect the handheld compatibility rating:

* All menu options and descriptions
* HUD (Heads-Up Display) indicators
* In-game help and on-screen tutorial text
* Items & inventory labels
* Quest and mission descriptions
* Dialogue and subtitle text
* Settings and configuration menus

**Optional In-Game UI Elements**  
The following in-game elements are recommended for legibility optimization but are considered optional and will not affect the handheld compatibility rating:

* Flavor text and optional lore entries
* Overview list text where a detailed drill-down is available with greater legibility
* UI-text that is not in-focus and not selected but can be brought into focus and then has increased legibility
* Credits and acknowledgments
* Non-critical tooltips
* Text that supplements an existing UI element (e.g., health bar text, radar blip captions, etc.)
* Decorative UI elements
* Background text in non-interactive scenes
* Cosmetic text appearing on object textures (e.g., sign posts, object brands, posters, billboards, etc.)
* In-game chat (for multiplayer games)

**Measuring text size**  
One way to measure font size is using Microsoft Paint. Capture an image of the text you’d like to measure and import the image into Microsoft Paint.  

The following image displays what is measured:

![Measuring Font Size](../../../../media/public-images/handheld/measured-font-size.png)

**Measuring text size**  
One way to measure font size is using Microsoft Paint. Capture an image of the text you’d like to measure and import the image into Microsoft Paint.  

The following image displays what is measured:

![Measuring Font Size](../../../../media/public-images/handheld/measured-font-size.png)

**Test Steps**  
1.	Launch the title.
2.	Navigate all areas of the game, including but not limited to:
    * Game launcher, if supported
    * All game modes
    * All menus, sub-menus and features
    * Downloadable content
3.	Capture images at various locations in the game.
4.	Import the images into the Microsoft Paint application and measure the smallest font sizes.
5.	Verify text is readable 12 inches away.
6.	If the default screen resolution is 1280x720 (720p), verify the smallest font size does not drop below 9 pixels in height.
7.	If the default screen resolution is 1980x1080 (1080p), verify the smallest font size does not drop below 14 pixels in height.

**Expected results**  
Essential in-game text is readable 12 inches away, and the smallest font size does not drop below 9 pixels in height at a resolution of 1280x720 or below 14 pixels at 1920x1080.

## Guideline 5: Supported Display

Games must launch in full-screen mode and run at a resolution that is supported by the handheld. It is recommended that games run at the native resolution for the handheld.

**Gamer expectation**  
Games use the screen real estate to provide a great experience. Games are not substantially letterboxed or rendered at aspect ratios that distort gameplay.

**Test steps**  
1.	Identify all resolutions supported by the handheld device.
2.	Launch the title.
3.	Navigate all areas of the game, including but not limited to:
    * Game launcher if supported
    * All game modes
    * All menus, sub-menus and features
    * Downloadable content
4.	Verify the game launches in full-screen mode and runs at a resolution supported by the handheld. 

**Expected results**  
Games must launch in full-screen mode and run at a resolution supported by the handheld.

## Other considerations

See [Handheld developer guidance](handheld-guidance.md) for detailed technical guidance.