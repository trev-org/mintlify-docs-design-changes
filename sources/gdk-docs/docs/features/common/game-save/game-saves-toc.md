---
author: anbanks
title: "Game saves (contents)"
description: "This section provides overviews, best practices, and the tools developers can use to save data to the cloud that will roam between different devices."
kindex:
- Save games
- Game saves
- Connected Storage
- Cloud saves
ms.author: anbanks
ms.topic: article
edited: 06/20/2025
ms.date: '06/20/2025'
permissioned-type: public
---

# Game Saves (contents)

This section provides overviews, best practices, and the tools for saving title data that can roam between different devices to the cloud.

## In this section

[Game Saves overview](game-saves-overview.md): An overview of the Game Saves system and  goals. Includes an appendix of all major articles of Game Saves.

[Game Saves developer guide](game-saves-developer-guide.md): An overview of the Game Saves ecosystem and key developer considerations like available APIs, user models, Process Lifetime Management (PLM), security and Personally Identifiable Information (PII) guidance, certification requirements, and storage-limit details.

[Game Saves debugging](game-saves-debugging.md): A guide to common error scenarios and troubleshooting techniques for Game Saves. Includes service configuration identifier (SCID) issues, handle-lifetime best practices, quota and memory limitations, and how to interpret Win32 NTSTATUS codes.

[Game Saves tools](game-saves-tools.md): Describes how to inspect Game Saves network traffic by using Fiddler and use the `xbstorage` and `gamesaveutil` command-line tools for exporting and importing local save data on console and PC.

[Game Saves walkthroughs and samples](game-saves-walkthroughs-and-samples.md): Provides step-by-step guides for Microsoft Partner Center setup, safe-write patterns, offline behavior, system dialog flows, device-based save-data management, testing sync scenarios, and migrating between titles/APIs.

[Understanding the Game Saves sync flow](game-saves-syncing.md): Explains atomicity at the container/folder level and the six-step synchronization flow (title start, connectivity, data ownership, data sync, gameplay loop, and session end), plus Offline mode behavior and machine-only provider usage.

[Game Saves dialogs](game-saves-dialogues.md): Contains the images and descriptions of system dialogs that users can get when they do Game Saves operations.

[Game Saves storage systems](game-saves-storage-systems.md): Outlines the various storage contexts: title storage (cloud), local save storage, and machine-provider storage, along with per-title quotas and console-specific local-storage details.

[XGameSaveFiles](xgamesavefiles.md): Covers the initialization flow of `XGameSaveFilesGetFolderWithUIAsync`, recommended Win32 automatic cloud sync semantics, debugging, quota/debug guidance, performance best practices, and FAQs.

[XGameSave](xgamesave.md): Explains the container‑and‑blob model and covers provider initialization, provider closure, and the update‑handle lifecycle. It also outlines atomic update behavior, sync‑flow diagrams, file‑size and quota constraints, along with best practices and FAQs.
