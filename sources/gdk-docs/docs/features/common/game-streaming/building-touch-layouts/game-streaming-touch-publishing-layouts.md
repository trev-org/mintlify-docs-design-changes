---
title: "Publishing touch layouts"
description: "Publishing touch layouts"
kindex:
- publishing touch layouts
- touch layouts, publishing
author: M-Stahl
ms.topic: article
ms.date: 01/12/2021
edited: 00/00/0000
permissioned-type: public
---

# Publishing Touch Layouts

When you have built and validating your layouts, you can publish your layouts so that players can access them during gameplay.

## Validating Your Layouts

When validating your layouts you will need to:

- [Deploy your touch control layouts](game-streaming-touch-deploying-touch-layout.md) and validate that the behavior is as desired for your game
- Pack your layouts using the [TAK Editor](../tak-editor/game-streaming-tak-editor-pack-bundles.md), or the [`pack` command](../tak-command-line-tool/game-streaming-tak-command-line-pack-command.md) of the Touch Adaptation Kit Command Line Tool (tak.exe), with a `version` that is newer than any you have previously published.

> [!WARNING]
> There must be no warnings or errors in the touch adaptation bundle that you submit for publishing.

## Publishing Your Layouts

Submit the touch adaptation bundle that you create to your Microsoft Program Representative to get the touch layouts published for your game. When publishing, also inform your Microsoft Program Representative if you would like your game to receive native touch events into your game when playing from the Project Xbox Game Streaming Servers.

They should first be published to your private offering to allow additional validation from the Project Xbox Game Streaming servers before making it available to all external players.
