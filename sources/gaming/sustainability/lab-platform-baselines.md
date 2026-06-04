---
title: Gaming Sustainability Lab Platform Baselines
description: Data insights into the power consumption averages relative to each in-game area for sustainability
author: danielmjacobs
ms.author: djacobs
ms.topic: article
ms.date: 03/15/2023
---

# Xbox Sustainability platform baselines

Developers who want to evaluate their own game’s energy efficiency may wish to compare their game’s power consumption against the platform baseline average, and relative to specific in-game areas. The following section profiles the baseline for a variety of in-game gameplay areas using the results obtained by PIX (available in the GDK) for average power usage. Our measurements for approx. wattage (W) is determined by a typical power watt meter as measured at the wall socket. If you’re seeing approximate power wattage or power consumption percentages above these values, it may prioritise these areas as places to investigate first.

We calculate averages using PIX (Performance Investigator for Xbox) by playing the game as described in the aforementioned How We Test section. For a detailed breakdown on how to use PIX, please see the relevant instructions. The following averages reflect a sample size of >200 titles tested since October 2022 to the time of writing (March 2023).

## How do we test?

To generate platform baselines for the existing energy efficiency of games on Xbox, we have leveraged Certification’s testing. Bear in mind this is not part of a mandatory requirement, this is entirely informational. During Certification’s sustainability testing, the title is tested on both Xbox Series S and Xbox Series X using the Performance Investigator for Xbox (PIX) tool in the GDK. **This is not part of your Xbox Requirement testing**. You can learn about how to use PIX, and the lab console setup to ensure consistency in testing results, from the [Gaming Sustainability Tools](developer-tools/developer-tool-pix-guide.md) page.

Data is captured by connecting each console to PIX, then progressing through gameplay in all available game modes and navigating to all relevant areas, then highlighting the timeline for the duration we were in that game area and noting the average percentage. When feasible, we take the same actions, follow the same routes, and progress in the same way on both Xbox Series S and Xbox Series X to maintain parity and offer comparable results between the two consoles.  Developers can use their Xbox Series X Development Kit.

After the data is captured, the results are analyzed and saved to our power averages database for publication in documentation such as the one you’re reading now. For more information on our lab and console configuration to ensure consistency between tests, please refer to the Appendix section for PIX Steps which explores more on how we test in a step-by-step manner.

## Average by in-game areas

As explained at the top of the page, these averages are split across nine in-game areas. These are currently:

* Main menu
* Loading screen
* In-engine cutscene
* Active gameplay
* Contextual menu (pause menu)
* Constrained state
* Multiplayer lobby
* Multiplayer active gameplay

#### In-engine cutscene

Console | Average Power Consumption | Approximate Wattage
---------|----------|---------
Xbox Series X | 59% | 150W
Xbox Series S | 53.2% | 71W

#### Loading screen

Console | Average Power Consumption | Approximate Wattage
---------|----------|---------
Xbox Series X | 36% | 105W
Xbox Series s | 35.2% | 60W

#### Active gameplay

Console | Average Power Consumption | Approximate Wattage
---------|----------|---------
Xbox Series X | 60.2% | 154W
Xbox Series s | 56.2% | 74W

#### Constrained state

Console | Average Power Consumption | Approximate Wattage
---------|----------|---------
Xbox Series X | 50.7% | 133W
Xbox Series S | 48.5% | 65W

#### Contextual menu (pause menu)

Console | Average Power Consumption | Approximate Wattage
---------|----------|---------
Xbox Series X | 52.5% | 140W
Xbox Series S | 51.6% | 70W

#### Main menu

Console | Average Power Consumption | Approximate Wattage
---------|----------|---------
Xbox Series X | 47% | 123W
Xbox Series S | 43% | 63W

#### Multiplayer active gameplay

Console | Average Power Consumption | Approximate Wattage
---------|----------|---------
Xbox Series X | 57.2% | 150W
Xbox Series S | 53.6% | 72W

#### Multiplayer lobby

Console | Average Power Consumption | Approximate Wattage
---------|----------|---------
Xbox Series X | 48.6% | 131W
Xbox Series S | 48% | 70W

## Averages by AV output

We acknowledge that power consumption is likely to vary based on variables related to title features, such as resolution and frame rate, for example. We appreciate that a variety of variables impact dependency on things like the GPU here, and graphics settings or modes like “performance"/"quality"/"resolution" play a major part in things like rendering the resolution, quality settings, and FPS. This should serve as a basic intro to the trend, though. The results in this section represent averages calculated from >100 separate test scenarios performed on multiple versions of various titles in the Xbox catalogue. These numbers will be updated periodically to keep values up to date.

### Xbox Series X results

Results captured when running titles on an Xbox Series X console. Please note that these results include an average of power usage and wattage in each of the most common in-game areas of a title. You can read definitions on what we mean by in-game area later in this document.

#### Xbox Series X: 4K @ 60FPS

Area | Average Power Usage | Approximate Wattage (W)
---------|----------|---------
 In-engine cutscene | 59.33% | 151W
 Loading screen | 37.6% | 107W
 Active gameplay | 60.5% | 154W
 Constrained state | 51.5% | 136W
 Contextual menu (pause menu) | 54.3% | 144W
 Main menu | 49.6% | 126W
 Multiplayer active gameplay | 57.5% | 150W
 Multiplayer lobby | 48.9% | 131W

#### Xbox Series X: 4K @ 30FPS

Area | Average Power Usage | Approximate Wattage (W)
---------|----------|---------
In-engine cutscene | 58.3% | 143W
Loading screen | 35.4% | 100W
Active gameplay | 57.9% | 150W
Constrained state | 51.2% | 131W
Contextual menu (pause menu) | 46.2% | 126W
Main menu | 41% | 108W
Multiplayer active gameplay | 56.2% | 149W
Multiplayer lobby | 49.6% | 135W

#### Xbox Series X: 1080p @ 60FPS

Area | Average Power Usage | Approximate Wattage (W)
---------|----------|---------
 In-engine cutscene | 58.5% | 151W
 Loading screen | 32.4% | 107W
 Active gameplay | 43.6% | 154W
 Constrained state | 39.6% | 107W
 Contextual menu (pause menu) | 45% | 136W
 Main menu | 49.1% | 144W
 Multiplayer active gameplay | 46% | 126W
 Multiplayer lobby | 38.9% | 150W

### Xbox Series S results

Results captured when running titles on an Xbox Series S console. Please note that these results include an average of power usage and wattage in each of the most common in-game areas of a title.

#### Xbox Series S: 1440p

Area | Average Power Usage | Approximate Wattage (W)
---------|----------|---------
 In-engine cutscene | 56% | 75W
 Loading screen | 32.5% | 58W
 Active gameplay | 58.6% | 77W
 Constrained state | 50.6% | 70W
 Contextual menu (pause menu) | 52.6% | 73W
 Main menu | 39.8% | 64W
 Multiplayer active gameplay | 56.7% | 73W
 Multiplayer lobby | 44.8% | 75W

#### Xbox Series S: 1080p

Area | Average Power Usage | Approximate Wattage (W)
---------|----------|---------
 In-engine cutscene | 46% | 66W
 Loading screen | 31.5% | 57W
 Active gameplay | 51.6% | 71W
 Constrained state | 44.7% | 61W
 Contextual menu (pause menu) | 46.2% | 65W
 Main menu | 41.4% | 60W
 Multiplayer active gameplay | 48.7% | 68W
 Multiplayer lobby | 47.1% | 63W

#### Xbox Series S: 60 FPS (all resolutions)

Area | Average Power Usage | Approximate Wattage (W)
---------|----------|---------
 In-engine cutscene | 54.2% | 71W
 Loading screen | 35.8% | 61W
 Active gameplay | 56.6% | 74W
 Constrained state | 50% | 65.4W
 Contextual menu (pause menu) | 54% | 71W
 Main menu | 47% | 65W
 Multiplayer active gameplay | 54.1% | 72W
 Multiplayer lobby | 50.7% | 71W

#### Xbox Series S: 30 FPS (all resolutions)

Area | Average Power Usage | Approximate Wattage (W)
---------|----------|---------
 In-engine cutscene | 51.5% | 71W
 Loading screen | 33.9% | 55W
 Active gameplay | 54.2% | 71W
 Constrained state | 45.3% | 65W
 Contextual menu (pause menu) | 45.2% | 66W
 Main menu | 33% | 57W
 Multiplayer active gameplay | 50.1% | 69W
 Multiplayer lobby | 38.1% | 67W

## Defining game modes

We understand that a game typically has more operations to perform during gameplay than when the user is outside of gameplay – in the menu, for example. To help separate power averages into buckets, we have taken averages for as many in-game areas as possible. This section will define what we mean for each area:

* Main menu: Typically, where the user will arrive after the initial interactive state. This is a menu that will offer the user the chance to start a new game, resume a game, or enter the options menu to make settings changes.

* Contextual menu: The menu invoked during active single player gameplay, usually when by pressing the Menu button. If the title does not support single player gameplay, then we use multiplayer gameplay.

* Loading screen: Typically displayed when transitioning into or out of active gameplay. During test we use the loading screen displayed when loading into active gameplay.

* Active gameplay: This refers to actively playing the game in a single player game mode. Arguably the most populated area of a single-player title, active gameplay usually presents great opportunities to introduce green code.

* In-engine cutscene: Refers to a cutscene that is rendered using the game engine. This is easily identifiable in a game that has both in-title and pre-rendered cutscenes, however when this is not the case observing texture quality and animations can help identify whether a cutscene is rendered by a game engine or is pre-rendered.

* Multiplayer lobby: The menu that allows the user to view, add and remove other users from a multiplayer session. Whilst this is typically presented to the user before reaching active gameplay a multiplayer lobby can sometimes be reached during active gameplay. During test, if a title supports multiplayer gameplay but does not present a lobby in any area, we usually use any comparable area as a substitute (Social menu, Friends list, Party menu).

* Multiplayer active gameplay: Refers to actively playing the game in a multiplayer session. During test we strive to capture data in every multiplayer game mode available to obtain data in as many relevant areas as possible. Results so far suggest that titles produce very similar results between multiplayer game modes.

* Constrained state: On an Xbox console, a title can be placed in a constrained state by pressing the Xbox button to invoke the guide and selecting ‘Home’. This minimises the title and displays the Xbox Home screen. A constrained state is a convenient way for the user to pause the game in any area when walking away from a title, thus represents an area worth investigating. For test we typically constrain the title during single player active gameplay and substitute with multiplayer active gameplay when necessary.

## Next steps

To learn more about platform baselines, please click the link below to read global platform averages as reported by console telemetry

* [Xbox Global Platform Baselines](global-platform-baselines.md)
