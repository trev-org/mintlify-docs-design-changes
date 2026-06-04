# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/console/storage/local-storage?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/console/storage/local-storage?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Local storage

Feedback

Summarize this article for me

Four types of local storage are accessible on the Xbox One console:

- Temporary local storage
- Installed game data
- Developer scratch partition
- Persistent local storage

Expand table

| Storage Type | Location |
| --- | --- |
| Installed Game Data | G:\\ |
| Temporary Local Storage | T:\\ |
| Developer Scratch Partition | D:\\ |
| Persistent Local Storage | Call [XPersistentLocalStorageGetPathSize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpersistentlocalstorage/functions/xpersistentlocalstoragegetpathsize?view=gdk-2604) and [XPersistentLocalStorageGetPath](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpersistentlocalstorage/functions/xpersistentlocalstoragegetpath?view=gdk-2604) to obtain the path size and data. |
| Downloadable Content | Call [XPackageMount](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagemount?view=gdk-2604) to mount DLC and [XPackageGetMountPath](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagegetmountpath?view=gdk-2604) to obtain the path. |

**XR-133: Local Storage Write Limitations**

Note

Titles running on Xbox Series S, Xbox Series X, or any other consoles in the same console family must not write more than 1 GiB of data to either Persistent Local Storage (PLS) or Temporary Local Storage over a rolling 5 minute window. Titles that exceed 1GiB of writes will not successfully pass certification testing. Developers can look at PIX timing captures for warnings as to when the write limit is exceeded. Additionally, titles can monitor their write statistics at runtime by calling [XPackageGetWriteStats](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagegetwritestats?view=gdk-2604).

**Temporary local storage** 
Temporary local storage is exposed to titles as _drive T_. Temp storage can be accessed while the title is running by using the _/x:/title_ to any [XtfFileIO](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/tools/xtf/xtffileio/xtffileio-xbox-microsoft-n?view=gdk-2604) commands. Temporary local storage allows storage and remote retrieval of temporary files, such as log files. Files written to temporary local storage are guaranteed to be available only while a title is running. There are no guarantees that data written to the T: drive will be persisted from game launch to game launch. Temporary storage may get deleted at some point in time after the title is terminated.

Temporary local storage also has the following features:

- 2 GB of dedicated storage
- Content is deleted after the title has been terminated.
- Content persists when suspending and resuming, including quick resume.

**Installed game data** 
The location of the installed game data of the currently running title is mapped to _drive G_. This volume is read only within the running Game's view when using packaged builds.

**Developer scratch partition** 
The developer scratch partition is exposed as _drive D_. The developer scratch partition is local storage for use during development only. You should compile out all references to it in retail mode to avoid any potential issues.

**Persistent Local Storage** 
Titles can request access to Persistent Local Storage (PLS) as part of their manifest.

This storage space is intended to be used as a long-term cache for storing non-game-save data, such as replays and custom rendered recordings of gameplay. PLS isn't designed to be a primary data storage space. It's never to be used for game saves, content updates, or any other data that must exist for the title to run. Instead, store game saves using the Connected Storage API, or, optionally for online-only titles, using Xbox services Title Storage or a publisher-hosted cloud storage service.

PLS has the following characteristics:

- Title specific: This storage space can be accessed by the title that requested it only.
- Console-specific: This storage space is always created in an XVD which is specific to the console (even if the title is installed on an external drive) and cannot be used on another console.
- Guaranteed allocation: The system ensures that the space is allocated prior to the title being allowed to launch. If insufficient hard drive space is available, the user is prompted to free up space to allow the title to run.
- User-controlled: The storage space can be deleted by users from the system shell. The system never automatically deletes any items in the space.
- Tied to title install lifetime: When a title is uninstalled, the associated local storage space is removed too. If the title is re-installed, none of the previous existing data is restored.
- Resilient and tamper resistant: The storage space is encrypted and integrity checked so that the data saved by the title cannot be tampered with.

To request PLS, add the following markup to the MicrosoftGame.config as a child of <Game>.

```
<?xml version="1.0" encoding="utf-8"?>
<Game configVersion="1">
    <!-- snip -->
    <PersistentLocalStorage><SizeMB>1024</SizeMB></PersistentLocalStorage>
</Game>
```

To acquire local persistent storage space, call [XPersistentLocalStorageGetPathSize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpersistentlocalstorage/functions/xpersistentlocalstoragegetpathsize?view=gdk-2604) and [XPersistentLocalStorageGetPath](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpersistentlocalstorage/functions/xpersistentlocalstoragegetpath?view=gdk-2604) to obtain the path size and data, which returns the path of the persistent storage for the title. The total amount of space available is determined by what the title requested in the MicrosoftGame.config declaration for local storage.

If the title uses a content update to increases the size of their requested persistent local storage space, the previous storage space will be deleted and its content will be lost during the upgrade.

**Shareable Persistent Local Storage**

Titles can opt into sharing their Persistent Local Storage as read-only with other titles. The relationships that allow a title to read the PLS of another title are described below:

Expand table

| Product Sharing the PLS | Products Reading the Shareable PLS |
| --- | --- |
| Franchise game hub | All hub-aware games dependent on this franchise game hub and all games that have [RelatedProduct](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-relatedproduct?view=gdk-2604) relationships to this franchise game hub. |
| Hub-aware game | The associated franchise game hub and all games that have [RelatedProduct](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-relatedproduct?view=gdk-2604) relationships to this game. |
| Hub-unaware game | All games that have [RelatedProduct](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-relatedproduct?view=gdk-2604) relationships to this game. |

To make the PLS shareable, add the markup <Shareable> to the MicrosoftGame.config as a child of <PersistentLocalStorage>.

```
<?xml version="1.0" encoding="utf-8"?>
<Game configVersion="1">
    <!-- snip -->
    <PersistentLocalStorage>
        <Shareable>true</Shareable> <!--This is optional, and the default value is false -->
    </PersistentLocalStorage>
</Game>
```

Note

If a title marks its PLS as shareable, then it should make sure that before suspending the game, it closes all the handles to its PLS, otherwise the game suspend will fail and the game will be terminated.

**Growable Persistent Local Storage** 
Growable Persistent Local Storage is an extension of PLS, which allows titles to request access to a much larger amount of local storage space, without permanently reserving that space up front. It is suitable for use by titles that have some scenarios which require additional space, for example User Generated Content (UGC) downloads, or large local replay files, which not all users may utilize.

To request Growable PLS, add the following markup to the MicrosoftGame.config as a child of <Game>.

```
<?xml version="1.0" encoding="utf-8"?>
<Game configVersion="1">
    <!-- snip -->
    <PersistentLocalStorage>
        <!-- <SizeMB>1024</SizeMB>   --Optional.  To be used if your title always wants 1024 MBs pre-allocated even before launch -->
        <GrowableToMB>20480</GrowableToMB> <!-- This is not a static reservation, but the largest size your title PLS can grow to -->
    </PersistentLocalStorage>
</Game>
```

Before writing to Growable PLS, your title must check for available space using the [XPersistentLocalStorageGetSpaceInfo](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpersistentlocalstorage/functions/xpersistentlocalstoragegetspaceinfo?view=gdk-2604) API. Note that calling [GetDiskFreeSpaceExW](https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-getdiskfreespaceexw) will only tell titles the maximum amount of free space left in PLS - this is not guaranteed to be available. [XPersistentLocalStorageGetSpaceInfo](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpersistentlocalstorage/functions/xpersistentlocalstoragegetspaceinfo?view=gdk-2604) will also return the total free space as well as the available free space (the minimum of what is free and the actual space on the underlying drive.

If your title needs more space than is available, has not filled its Growable PLS allocation, but there is insufficient underlying space on the drive for the PLS XVD to be increased, you will need to prompt the end user to free up the requested additional space your title needs by using the [XPersistentLocalStoragePromptUserForSpaceAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpersistentlocalstorage/functions/xpersistentlocalstoragepromptuserforspaceasync?view=gdk-2604) function.

If the title uses a content update to change from using a non-growable persistent local storage to a growable storage space, the previous storage space will be deleted and its content will be lost during the upgrade.

**Downloadable content**

Downloadable content, after it's installed, can be mounted and unmounted on demand. Call [XPackageMount](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagemount?view=gdk-2604) to mount DLC and [XPackageGetMountPath](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagegetmountpath?view=gdk-2604) to obtain the path.

Note

**Never** hardcode returned path values because they might vary over time and are valid only after a package is mounted.

## Accessing game data with the remote console tools

The remote console tools can use the same mapping as running titles by specifying **/title** with the **/X** switch. Then, the remote console tools can access data written to the scratch volume and the installed game data for the current title.

To copy scratch volume files to your development PC, use **xbcp** in the following way:

**xbcp /x:/title xd:\\**_file-name_ **c:\\**_local-path_

To copy files from your development PC to the title volume, use **xbcp** in the following way:

**xbcp /x:/title c:\\**_file-name_ **xg:\\**_dest-path_

You can access PLS from a development PC when the title is running only. Files can be copied to and from this location using the xb commands. For example:

**xbcp /x:/title c:\\**_file-name_ **xr:\\**_dest-path_

For more information about the syntax to use remote console tools to work with files on the console, see [File copy (xbcp.exe) (NDA topic)Authorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-console/commandlinetools/xbcp?view=gdk-2604).

## See also

[Game Saves Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/game-saves-overview?view=gdk-2604) [Franchise Game Hubs](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/franchise-game-hubs?view=gdk-2604)

---

## Feedback

Was this page helpful?

Yes No No

Need help with this topic?

Want to try using Ask Learn to clarify or guide you through this topic?

Ask Learn Ask Learn

Suggest a fix?

---

## Additional resources

---

- Last updated on 01/26/2026