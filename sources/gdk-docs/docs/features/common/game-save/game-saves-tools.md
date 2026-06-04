---
author: anbanks
title: "Game Saves tools"
description: "How to inspect Game Saves network traffic with Fiddler and use command-line utilities for manipulating local save data on console and PC."
kindex:
- Save games tools, network inspection
- Game Saves tools, network inspection
ms.author: anbanks
ms.topic: article
edited: 06/20/2025
ms.date: '06/20/2025'
permissioned-type: public
---
# Game Saves tools

This article describes using Fiddler for inspecting network traffic, the essential tools and techniques for debugging, and manipulating Game Saves.

## Inspecting Game Saves network traffic

Use Fiddler to inspect and debug network traffic coming to and from your title. For information about Fiddler setup, see the following articles:

- [Fiddler on Xbox devkits](../../console/networking/tools/fiddler-setup-networking.md)
- [Fiddler on Windows PC](../../console/networking/tools/fiddler-pc.md)

Fiddler confirms whether the title acquires or releases the title lock, which determines when data syncs to and from the cloud.

Here’s the `PUT` request when a title successfully obtains a lock.  
  
```
PUT /connectedstorage/users/xuid(<XUID>)/scids/<TITLE SCID>/lock HTTP/1.1  
```

Here’s the request when a title releases a lock.

```
DELETE /connectedstorage/users/xuid(<XUID>)/scids/<TITLE SCID>/lock HTTP/1.1
```

The title acquires and releases the lock at different points, depending on the Game Saves API in use.

| Game Saves API | Lock acquisition  | Lock release | Notes |
| -------------- | ----------------- | ------------ | ----- |
| XGameSaveFiles | [XGameSaveFilesGetFolderWithUiAsync](../../../reference/system/xgamesavefiles/functions/xgamesavefilesgetfolderwithuiasync.md) | Automatically releases the lock when the device finishes uploading pending changes. This process takes about 15 to 30 seconds after the title exits. | Reacquire the lock when the title resumes by calling [XGameSaveFilesGetFolderWithUiAsync](../../../reference/system/xgamesavefiles/functions/xgamesavefilesgetfolderwithuiasync.md). The folder path from the API call stays the same across sessions. The lock might no longer be active.|
| XGameSave      | [XGameSaveInitializeProvider](../../../reference/system/xgamesave/functions/xgamesaveinitializeprovider.md) or [XGameSaveInitializeProviderAsync](../../../reference/system/xgamesave/functions/xgamesaveinitializeproviderasync.md) | [XGameSaveCloseProvider](../../../reference/system/xgamesave/functions/xgamesavecloseprovider.md)            | The title calls [XGameSaveCloseProvider](../../../reference/system/xgamesave/functions/xgamesavecloseprovider.md) to release the provider’s resources. Not calling it causes a memory leak. |

For more information about the sync process, see [Understanding the Game Saves sync flow](game-saves-syncing.md)


## Manipulating Game Saves
Two tools are available for directly interacting with Game Saves.

- `xbstorage`: Used for local Game Saves on console. For more information, see [Manage Game Saves data on console (xbstorage.exe)](../../../tools/tools-console/commandlinetools/xbstorage.md).
- `xgamesaveutil`:  Used for local Game Saves on PC.  For more information, see [Manage Game Saves data on PC (xgamesaveutil.exe)](../../../tools/tools-pc/commandlinetools/gr-xgamesaveutil.md).

These tools enable you to import and export individual user or machine-provider storage spaces through .xml files.
For a list of all tool operations, see the respective tool's article.

> [!IMPORTANT]
> The import and export behavior differs between console and PC. See the details below and the respective tool pages for more information.

### Console (xbstorage)

On console, `xbstorage` operates through the console's Game Saves service. When the tool performs an operation, the system behaves as if the title performs the operation directly.

- **Importing** data causes the console to sync with the cloud first (acquiring a lock and downloading any remote changes), write the imported data locally, and then begin uploading the imported data to the cloud. The upload completes in the background before the lock is released.
- **Exporting** data causes the console to sync with the cloud first, then copy the local data to the output file.

### PC (xgamesaveutil)

On PC, `xgamesaveutil` writes data directly to local disk without going through the Game Saves service.

- **Importing** data writes the containers and blobs to the local disk. The tool doesn't sync with the cloud before or after the import, and it doesn't trigger an upload to the cloud. The imported data is uploaded to the cloud the next time the title launches and acquires the Game Saves provider.
- **Exporting** data reads containers directly from local disk. It doesn't sync with the cloud before reading.

If the device running one of these tools can’t acquire a lock or detects a conflict between the cloud and local containers, the system treats the situation as if the user isn't going to resolve the conflict. In this state, the device keeps one version of the container. The device behaves as if it's offline until the next time the title is launched.
