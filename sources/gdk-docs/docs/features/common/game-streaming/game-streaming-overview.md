---
title: "Introduction to game streaming"
description: "Provides and overview of the game streaming functionality."
author: M-Stahl
ms.topic: article
kindex: Game Streaming overview
edited: 01/09/2021
ms.date: '08/01/2022'
permissioned-type: public
---

# Introduction to game streaming

Use this topic to get started setting up your title for Xbox Game Streaming and Xbox Remote Play. 

## What is game streaming?

Today, there are more games, more devices, and more users playing games in new and interesting ways. With Xbox Game Streaming and Xbox Remote Play, you can bring the Xbox gaming experience to users wherever they are. 

With Xbox Game Streaming, your game runs on an Xbox server in an Azure datacenter. The user is connected to the closest datacenter, and then the game plays on their client device. With Xbox Remote Play, your game runs on the user's Xbox console. The user connects directly to their home Xbox console, and then the game plays on their Windows PC or mobile client device. 

While your game can be streamed with no changes, you might decide to make your game Cloud Aware. By using the [Cloud Aware APIs](../../../reference/system/xgamestreaming/xgamestreaming_members.md), you can make your game optimize the user's experience for their chosen streaming environment.

## What are private offerings?

In order to test and validate games in the Azure datacenters ahead of becoming publicly available as part of Xbox Game Streaming, a concept called "Offerings" is used. An offering is a private test environment in the datacenter that includes one or more games available to be streamed. By default, the offering will use the RETAIL sandbox version of a game with no customizations, like touch controls or mouse & keyboard support. However, each game in an offering is able to be flighted with custom metadata and game packages. Please contact your Microsoft account representative for details on how to customize your game metadata for streaming and how to set up a package flight or private audience build of the game.

## See also

[Game streaming test prerequisites](game-streaming-stream-your-game.md)  
[Optimizing your game](game-streaming-optimizing-your-game.md)
[Game Streaming](game-streaming-overview.md)
