---
author: anbanks
title: "Game Saves developer guide"
description: "An overview of the Game Saves ecosystem and key developer considerations: available APIs, user models, security/PII guidance, certification requirements, and storage-limit details."
kindex:
- Save games implementation
- Game saves implementation
- Connected Storage implementation
- Cloud saves implementation
ms.author: anbanks
ms.topic: article
edited: 06/20/2025
ms.date: '06/20/2025'
permissioned-type: public
---
# Game Saves developer guide

This guide provides a starting point for integrating Game Saves features into a title. An overview of essential terminology, an outline of available APIs, and important considerations are covered, such as user models, security, and certification requirements.

## Overview

The following terms appear across the Game Saves ecosystem.

- **Game Saves ecosystem**: Previously called *Connected Storage* or `XGameSave`, this ecosystem manages how games save data on the device and synchronize that data with the cloud. The ecosystem organizes saved data into containers and blobs. This organization help titles store, update, and retrieve player progress across devices.
- **Title**: The game that you're developing.
- **Sandbox**: The environment where your title runs.
- **Microsoft Partner Center**: The Microsoft web portal that manages your title's configuration and sandbox.
- **Service configuration identifier (SCID):** A unique identifier for the service configuration of your title within Xbox services.
- **Microsoft account (MSA) App ID (MSAAppID)**: A required identifier that links a game to its Microsoft account identity. This value is generated in Partner Center and is placed in MicrosoftGame.config so that Xbox services—including sign-in, achievements, cloud saves, and user data—can authenticate the title correctly.

The following common service terms appear in Game Saves APIs.

- **Local storage**: Data saved during gameplay that's saved to a device.
- **Title storage/cloud:** Storage is automatically synchronized with title storage on the cloud when the device is connected to the internet.
- **Lock:** A mechanism that grants exclusive access to a title's Game Saves for a specific user on the device that they're actively using. A lock ensures that no other device can modify the Game Saves for the user while the lock is held.
  - For example, if a user plays Title T on device A, it has a lock for Title  T for the user.
- **Provider:** The intermediary mechanism that communicates with the Game Save system, and is responsible for managing game data. The provider also manages the lock for a user on a device.
- **Containers**: Analogous to folders.
- **Blobs**: Analogous to individual files.

## New titles

Before using Game Saves, your title must have Xbox services enabled in Partner Center. This service provides a SCID and a MSAAppID for your title. For more information, see [Enabling Xbox services and Game Saves for your title](game-saves-walkthroughs-and-samples.md#enabling-xbox-services-and-game-saves-for-your-title)

After Partner Center is set up, we recommend using [XGameSaveFiles](xgamesavefiles.md) for Game Saves implementation.

## Game Saves APIs

| API | Description | Platforms | Use case | Sample |
| --- | --- | --- | --- | --- |
| [XGameSaveFiles](xgamesavefiles.md) | Provides a file path for Game Saves local storage that automatically syncs to the cloud. | PC, Xbox  | We recommend this API for most scenarios. Provides a file path for you to read/write to and sync automatically to the cloud. | [GameSaveFilesCombo](/samples/microsoft/xbox-gdk-samples/gamesavefilescombo/) |
| [No-code cloud saves](game-saves-walkthroughs-and-samples.md#porting-previous-titles-to-pc-game-saves-with-no-code-cloud-saves)  | You provide a file path that's automatically synced to the cloud. | PC | Ideal for PC games that can't directly use the GDK or are porting to PC Game Pass. Provides the read/write path in the game .config file. | None |
| [XGameSave](xgamesave.md)| Data is saved locally and synced to the cloud. | PC, Xbox  | Supports titles that need larger or more complex per‑user storage. Offers detailed control of file management. | [GameSaveCombo](/samples/microsoft/xbox-gdk-samples/gamesavecombo/) |

## User models

Two types of user models are supported for games. We recommend using the Simple User Model.

| Method |  Description| Sample link | Retail platform differences|
| ---| --- | --- | --- |
| Simple User Model | A default user is required. They control the lifetime of the game instance. The OS ensures that a user signs in when the game launches. | [SimpleUserModel](/samples/microsoft/xbox-gdk-samples/simpleusermodel/) | PC: The game terminates when the default user signs out.<br><br> Console: The game suspends when the default user signs out. |
| Advanced User Model | No default user. No guarantee that a user is signed when the game launches. |None | None  |

For more information about user models, see [GDK User Models](../user/gamecore-user-models.md).

For information about best practices for signing users in, see [How to: best practice to sign in a user](../user/xuser_howto_best_practice_signing_in.md).

## Security

### Personal data

Microsoft doesn’t offer an API or a tool that allows you to access a specific user’s Game Saves data. If you need this information to troubleshoot an issue, contact the user directly and ask them to share it.

### Saving securely

Game Saves aren’t secure when PC accessibility is enabled. With PC accessibility, users can open the file path directly, which exposes the saved data. We recommend that you have your own server-side checks to confirm the appropriate state of a game save.

## Certification requirements

### XR-052

[XR-052 User State and Title-Save Location, Roaming, and Dependencies](../../../store/policies/XR/XR052.md)
