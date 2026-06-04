---
author: anbanks
title: "XGameSaveFiles API overview"
description: "Covers the initialization flow of (`XGameSaveFilesGetFolderWithUIAsync`), recommended Win32 automatic cloud sync semantics, quota/debug guidance, performance best practices, and common FAQs."
kindex:
- Save games, overview, Win32
- Game saves, overview, Win32
- Connected Storage overview
- Cloud saves overview
- Xbox services, Save games overview
- Xbox services, Game saves overview
- Xbox services, Connected Storage overview
- Xbox services, Cloud saves overview
- XGameSaveFiles, overview
- Win32 game saves
ms.author: anbanks
ms.topic: article
edited: 06/20/2025
ms.date: '06/20/2025'
permissioned-type: public
---
# XGameSaveFiles API overview

This article explains how to initialize `XGameSaveFilesGetFolderWithUIAsync`. It also describes the recommended Win32 automatic cloud‑sync behavior, debugging steps, quota and diagnostic guidance, performance best practices, and answers to common questions.

`XGameSaveFiles` provides APIs that enables your title to read and write user data, persist it across sessions, and sync it seamlessly with the cloud so players can use their data on any device. We recommend `XGameSaveFiles` for Game Saves in Microsoft Game Development Kit (GDK) titles. Use `XGameSave` only when `XGameSaveFiles` isn’t available for your scenario.

For the system API reference for `XGameSaveFiles`, see [XGameSaveFiles (API contents)](../../../reference/system/xgamesavefiles/xgamesavefiles_members.md).

The following terms appear often in `XGameSaveFiles`.

- **Lock:** A mechanism that grants exclusive access to a title's Game Saves for a specific user on the device they're actively using. It ensures that no other device can modify the Game Saves for the user while the lock is held.
  - For example, if a user plays Title T on device A, it has a lock for Title  T for the user.
- **Provider:** The intermediary process that communicates with the Game Save system and is responsible for managing the title data. The provider also manages the lock for a user on a device.
- **Containers**: Analogous to folders.
- **Blobs**: Analogous to individual files.

## XGameSaveFiles path logic

`XGameSaveFiles` provides a file path that you can use to interact with the Game Saves system. The file path is integrated with cloud synchronization, ensuring that data saved to the path is automatically synced to the cloud. We recommend using Win32 `FileIO` APIs on the provided path and using `XGameSaveFiles` the Game Saves approach for Microsoft Game Development Kit (GDK) titles. `XGameSaveFiles` maps the concepts of containers to folder and blobs to files.

While `XGameSaveFiles` hides most of the cloud‑save system’s complexity, it still enforces directory and file‑name limits because the feature relies on Microsoft Azure Blob Storage. Consider the following example code of what a title might use for its save.

```
[ROOT]/Save1/WingtipToys/state001.dat
```

- The [ROOT] gets returned by `XGameSaveFilesGetFolderWithUiAsync`.
- Everything following [ROOT], up to and including the final slash, maps to a container.
  - Container names are limited to uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), underscores (\_), periods (\.), hyphens (\-), and slashes (\/)
  - Container names are limited to 256 characters.
  - Container names can't end in a period, contain two consecutive periods, or start with a period or hyphen.
- Everything following the final slash in the file name maps to a blob.
- File names are limited to 65 characters but can otherwise be Unicode characters that are supported in the New Technology File System (NTFS).
- The full resulting path, including the file name (but not the [ROOT]), must be less than MAX_PATH (260 characters).

For more information on Win32 and file management, see [File Management (Local File Systems)](/windows/win32/fileio/file-management).

## Implementation of XGameSaveFiles

The following steps show the general implementation of `XGameSaveFiles`.

1. On title launch or resume, call `XGameSaveFilesGetFolderWithUIAsync` to initialize the provider and get the file path.
2. Freely read and write to the file path during game play.

`XGameSaveFilesGetFolderWithUIAsync` automatically manages the lifetime of the Game Saves provider and sets up the Game Saves local storage space.

> [!IMPORTANT] 
> Call `XGameSaveFilesGetFolderWithUIAsync` when the title starts and when it resumes. This call initializes the Game Saves provider and keeps it active while the game session runs. If you skip this step, the system can behave unpredictably.

### Code sample

For a code sample that shows how to use the `XGameSaveFiles` APIs to access folders on Xbox, see [GameSaveFilesCombo](/samples/microsoft/xbox-gdk-samples/gamesavefilescombo/).

## Game Saves flow

Here’s a flowchart of the simplified Game Saves flow. It’s explained as follows.

![Flowchart of the simplified Game Saves sync process.](game-saves-sync-images/simple-sync-overview.png).

### Title start

Title start occurs when the user launches or resumes the title.

### User sign in

The title begins the user sign-in process. This operation is also where you call `XGameSaveFilesGetFolderWithUIAsync`. For more information about user setup, see [User Models](game-saves-developer-guide.md#user-models).

### Connection check

The title determines if it can connect to the Xbox network. If it can’t, it’s up to you to enable [offline mode](game-saves-syncing.md#connection-check) for their title.

### Data ownership check

The device checks if the user is currently playing on other devices. Only one device at a time can access the user's data for a specific title.

### Syncing data with the cloud

The device syncs the Game Saves local storage data with the cloud. If there's a conflict, the system prompts the user with a conflict resolution dialog.

Dialog: [Which one do you want to use?](game-saves-dialogues.md#which-one-do-you-want-to-use)

If the data on the device is newer than the cloud data, the title prompts the user to choose between using the local data or the cloud data.

### Gameplay loop

The title is freely able to read and write to the folder path provided by `XGameSaveFilesGetFolderWithUIAsync`.

### Game session end

When the game session ends, the system automatically attempts to upload the data to the cloud. This process occurs around 10&ndash;30 seconds after the title ends.

For detailed sync information, see [Understanding the Game Saves sync flow](game-saves-syncing.md).

## Limits and quotas

### Limits

The maximum file size that can be saved with `XGameSaveFiles` is 64 MB. This behavior differs from `XGameSave`, which limits each file to 16 MB.

### Quotas

The maximum data that a user can save per title is 256 MB. Use [XGameSaveFilesGetRemainingQuota](../../../reference/system/xgamesavefiles/functions/xgamesavefilesgetremainingquota.md) to get the remaining quota. To get a storage extension so that your title has a larger per-user storage limit, contact your Developer Program Manager (DPM).

## FAQs

### Can I use XGameSaveFiles with XGameSave?

Yes. However, it should only be done for migrations. For detailed information, see [Interoperability between XGameSave and XGameSaveFiles](game-saves-walkthroughs-and-samples.md#interop-between-xgamesave-and-xgamesavefiles).

### What file path does XGameSaveFiles save to?

**Console**: A temporary path is provided while the title is active. Console files can’t be accessed by using File Explorer.

**PC**: `%AppData%\Local\Packages\<PACKAGE_NAME>\SystemAppData\xgs\<HexXuid>_<SCID>\`

The PC path for `XGameSaveFiles` is different from `XGameSave`. It uses `wgs`.

### Can I specify the path where the data should be saved?

Yes, but only for PC. We recommend this approach is only if you’re porting your solution from another title. This solution uses [no code cloud saves](game-saves-walkthroughs-and-samples.md#porting-previous-titles-to-pc-game-saves-with-no-code-cloud-saves).
