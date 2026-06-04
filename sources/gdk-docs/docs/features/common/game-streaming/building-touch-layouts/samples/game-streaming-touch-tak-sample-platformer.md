---
title: "2D Platformer Touch Control Layout"
description: "A sample touch control layout for a platformer"
kindex: sample touch control layout, platformer
author: M-Stahl
ms.topic: reference
ms.date: 01/05/2021
edited: 00/00/0000
permissioned-type: public
---

# 2D Platformer Touch Control Layout

Two sample touch control layouts for platformer games.

**Simple platformer layout**
![Simple layout for 2D platformer game](../../../../../../media/public-images/game-streaming/game-streaming-sample-layouts-platformer-simple.png)

**Platformer layout with more player actions**
![Advanced layout for 2D platformer game](../../../../../../media/public-images/game-streaming/game-streaming-sample-layouts-platformer.png)

## Remarks

The _simple platformer_ layout shows how a basic 2D platformer can provide a very streamlined touch experience.

Key elements include:

- Joystick for movement available for left hand. Can also consider a directional pad if the game is more optimized for that input.
- The three key actions (fire, jump, interact) placed in an arc on the right hand based on the expected priority of interaction by the player.

The _platformer_ layout builds on the base of the simple platform and showcases where to add additional controls for the player.

Key additional elements:

- Inventory management is placed in the upper right
- Optimized placement for key actions (sword, jump, bow), with the other, less frequently used actions placed around them.

## Availability

1. Part of the TAK [sample-layouts](https://github.com/microsoft/xbox-game-streaming-tools/tree/main/touch-adaptation-kit/samples/sample-layouts) sample.
2. TAK command line tool [create command](../../tak-command-line-tool/game-streaming-tak-command-line-create-command.md)
