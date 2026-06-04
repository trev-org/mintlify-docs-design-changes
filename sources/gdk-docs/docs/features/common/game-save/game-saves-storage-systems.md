---
author: anbanks
title: "Game Saves storage systems"
description: "Outlines the different storage contexts: Title storage (cloud), local save storage, and machine-provider storage, along with per-title quotas and console-specific local-storage details."
kindex:
- Save games, storage, local
- Game saves, storage, local
ms.author: anbanks
ms.topic: article
edited: 06/20/2025
ms.date: '06/20/2025'
permissioned-type: public
---
# Game Saves storage systems

This article describes Game Saves storage systems and their limits and quotas.

| Name | Description |
| --------------------------------- | ----------------------------------------------------------------- |
| Connected Storage, XGameSaves<br> | Previous names of the Game Saves ecosystem.  |
| Title storage / cloud             | Title storage stores Game Save data in the cloud. This data is automatically synced from the cloud when the user initiates Game Saves.  | 
| Game Saves local storage          | When a title saves data with Game Saves, it saves the data to local storage first. The system syncs the data to the cloud when the device connects to the internet. |
| Machine provider storage          | Machine provider storage is a specialized form of Game Saves local storage that stays on the device and doesn’t sync to title storage. The system writes data to machine provider storage when a user saves game data by using a `null` user handle. This storage is limited to 256 MB. |

For more information about interacting with Game Saves storage systems, see the following articles.

- For debugging Game Saves and a deeper investigation of it, see: [Manipulating Game Saves](game-saves-tools.md#manipulating-game-saves).
- For Game Saves storage through the device UI/UX, see [Managing Game Saves through the device](game-saves-walkthroughs-and-samples.md#managing-game-saves-through-the-device).

## Console-specific local storage system

Persistent local storage (PLS) is a special local storage system available on the console. This storage system doesn’t map directly to Game Saves; however, consider PLS when designing content‑distribution solutions. For more information, see [Local storage on Xbox console](../../console/storage/local-storage.md).

## Limits and quotas

The maximum data that a user can save for each title is 256 MB. This limit also applies to machine provider storage. You can contact your Developer Partner Manager (DPM) to get a storage extension for their title. To find out how much storage remains in a title, call the appropriate "get quota" API, shown as follows.

- GameSaveFiles: [XGameSaveFilesGetRemainingQuota](../../../reference/system/xgamesavefiles/functions/xgamesavefilesgetremainingquota.md) 
- GameSaves:  [XGameSaveGetRemainingQuota](../../../reference/system/xgamesave/functions/xgamesavegetremainingquota.md)

For information about how Game Saves syncs data between cloud and local storage, see [Understanding the Game Saves sync flow](game-saves-syncing.md).
