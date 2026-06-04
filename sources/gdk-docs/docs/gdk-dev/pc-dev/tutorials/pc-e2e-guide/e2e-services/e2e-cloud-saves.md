---
author: sdgmiller
title: "Implement cloud saves in your game"
description: "Describes how to set up cloud saves."
kindex:
- User authentication and ownership
- Xbox services, Xbox account
- Xbox services, identity
- Xbox services, user authentication
ms.topic: article
edited: 06/03/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Implement cloud saves in your game

This article explains how to implement cloud storage by using [XGameSaveFiles Overview](../../../../../features/common/game-save/xgamesavefiles.md) and no-code cloud saves. The Microsoft Game Development Kit (GDK) includes storage features that enhance game development and provide efficient data management solutions.

## Implement cloud storage by using XGameSaveFiles

`XGameSaveFiles` enables cloud saves for sharing across consoles, PCs, and Xbox Game Streaming. Reading and writing data persists across game sessions. The data is seamlessly synced with the cloud. Using `XGameSaveFiles` enables games to use standard Win32 file I/O APIs to create their own save system. This solution is best for developers who already have this type of system on PC and want to minimize their porting costs to a solution that will work for PC Game Pass.

### To implement cloud saves by using XGameSaveFiles

1. Use [XGameSaveFilesGetFolderWithUiAsync](../../../../../reference/system/xgamesavefiles/functions/xgamesavefilesgetfolderwithuiasync.md) to manage game saves. Pass in the `XUser` handle for the user and the Xbox services SCID (service configuration ID) for the game.
1. Use [XGameSaveFilesGetFolderWithUiResult](../../../../../reference/system/xgamesavefiles/functions/xgamesavefilesgetfolderwithuiresult.md) to get the folder for game saves. Read and write to that folder by using standard Win32 file IO APIs.
1. Use [XGameSaveFilesGetRemainingQuota](../../../../../reference/system/xgamesavefiles/functions/xgamesavefilesgetremainingquota.md) to return the amount of available per-user quota for storing saved data.  
1. Use `XGameSaveFilesGetFolderWithUiAsync` when a game resumes to ensure that save data is complete and up-to-date.

File sizes are limited to 64 MB, or to 16 MB if there's a need to interoperate between [XGameSave](../../../../../reference/system/xgame/xgame_members.md) and [Connected Storage](../../../../../services/storage/connected-storage/live-connected-storage-nav.md). By default, per-user storage is limited to 256 MB. If your games need larger per-user storage limits, contact your Developer Program Manager (DPM) to request an exception.

## Implement cloud storage by using no-code cloud saves for PC

If your game requires a no-code cloud save option, use the [Porting previous titles to PC Game Saves with no-code cloud saves](../../../../../features/common/game-save/game-saves-walkthroughs-and-samples.md#porting-previous-titles-to-pc-game-saves-with-no-code-cloud-saves).  

Games that use no-code cloud saves access to their designated save directory by using standard Win32 file IO APIs. No special code is needed to manage the synchronization and upload&mdash;synchronization is handled automatically.  

The no-code cloud save solution is built on `XGameSaveFiles` and shares the same limitations for file sizes and per-user storage limits.  

No-code cloud saves are supported only on PC. No-code cloud saves requires that the game use the simplified user model to ensure that a player is always signed in before the game launches. To enable no-code cloud saves, modify your game's MicrosoftGame.config file. For more information, see [Porting previous titles to PC Game Saves with no-code cloud saves](../../../../../features/common/game-save/game-saves-walkthroughs-and-samples.md#porting-previous-titles-to-pc-game-saves-with-no-code-cloud-saves).  

## See also  

For more information, see the following articles and samples.

* [Win32 file IO with Game Saves (XGameSaveFiles)](../../../../../features/common/game-save/xgamesavefiles.md)

* [Porting previous titles to PC Game Saves with no-code cloud saves](../../../../../features/common/game-save/game-saves-walkthroughs-and-samples.md#porting-previous-titles-to-pc-game-saves-with-no-code-cloud-saves)

* [GameSaveFilesCombo Sample (PC, Xbox)](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/System/GameSaveFilesCombo)

   This is a simple sample that uses the `XGameSaveFiles` API functions. It also demonstrates how to use Win32 file IO API with `XGameSaveFiles`.

