---
author: dkushmerick
title: "October 2025 Microsoft Game Development Kit (GDK) release notes"
description: "Describes breaking changes, notifications, bug fixes, and known issue for the October 2025 Microsoft Game Development Kit (GDK)."
kindex:
- Release notes
ms.topic: article
edited: '04/09/2026'
ms.date: '04/09/2026'
permissioned-type: public
---

# October 2025 Microsoft Game Development Kit (GDK) release notes

## Introduction

Welcome to the October 2025 Microsoft Game Development Kit release. You can use the GDK to develop games that can be certified and approved for release on Windows 11 PCs and Windows 10 PCs.

### About this document

We have organized this document into the following sections.

- [What's new](#whats-new-in-the-october-2025-microsoft-game-development-kit)
- **Release notes:**  
  - [October 2025 GDK Update 2](#october-2025-gdk-update-2)
  - [October 2025 GDK Update 1](#october-2025-gdk-update-1)
  - [October 2025 GDK](#october-2025-gdk)
- [Known issues](#known-issues)
- [Documentation](#documentation)

### What's new in the October 2025 Microsoft Game Development Kit

>   - The GDK is released in two types: Major (focused on features, two times a year) and Updates (focused on fixes, as often as needed).
>   - To view the full What's New section, see the online version of [What's New](https://learn.microsoft.com/gaming/gdk/_content/gc/intro/whatsnew/whats-new).

## October 2025 GDK Update 2  

### Notifications

#### Microsoft Azure PlayFab Party to v2.2.7 updates

> - Changed the `PartyNetwork::CreateEndpoint` `PartyStatusChangeResult` behavior to return `PartyServiceError` for transient errors that occur before the token expires, and to return `UserNotAuthorized` only when the token has actually expired.  
> - Added audio device selection support for XUser-less or in-proc Gaming Runtime Services (GRTS) environments.  
> - Fixed a potential crash during multinetwork transition scenarios.  

#### PlayFab Party to v1.10.16 updates

> - The `PartyNetwork::CreateEndpoint` `PartyStatusChangeResult` behavior has been changed to return `PartyServiceError` for transient errors that occur before the token expires, and to return `UserNotAuthorized` only when the token has actually expired.  
> - Audio device selection support has been added for XUser-less or in-proc Gaming Runtime Services (GRTS) environments.  
> - A potential crash during multinetwork transition scenarios has been fixed.  

#### Xbox services

> Added support for enabling trace output to the debugger in the in-proc `xgamingruntime`, matching existing Gaming Runtime Services (GRTS) functionality.  
> 
> To enable HTTP/WebSocket trace messages in the Visual Studio Output window, set the `HKEY_LOCAL_MACHINE\Software\Microsoft\GamingServices\Auth\TraceToDebugger` (`REG_DWORD`) registry key to `1`. This setting is useful for debugging network issues, proxy configuration, and authentication problems. The feature is opt-in and has no impact when disabled.  

#### Networking

> `XCurl` has been updated to allow multiple calls to `xcurl_global_init_mem()` or `curl_global_init_mem()` between calls to `curl_global_cleanup()`. This new behavior matches the `LibCurl` behavior for `curl_global_init_mem()`, bringing the `XCurl` API in sync with `LibCurl` expectations. Additionally, `curl_global_init()`, `curl_global_init_mem()`, `xcurl_global_init_mem()`, and `curl_global_cleanup()` have been made thread safe.  

#### packageutil compare Intelligent Delivery tag simulation fix

> A logic error in `packageutil compare` caused Intelligent Delivery simulations to exclude required non‑OnDemand tags whenever any tag-based simulation was run. This produced inaccurate size and update predictions for titles using OnDemand or Feature-based packaging.  
>
> The fix ensures that:  
>
> - **Non-OnDemand tags are always included** in simulations for non-Feature packages.  
> - **Feature-based packages are fully supported**, including segmented tags and both full-feature and single-feature simulations.  
>
>This fix restores accurate size reporting and enables partners to correctly evaluate ID configurations.  
>
> Affected binary: `PackageUtil.exe`  

### Issue fixes

#### GDK tools

> Fixed an issue that caused the GDK Command Prompts that are included in the GDK Tools installer to not properly include the GDK `bin` directory where the tools are located.  

> Fixed an issue that caused the `XblTestAccountGui` tool to fail to sign in with the following error message.  
>
> Live auth error: Login Error: The remote server returned an error: (400) Bad Request.  

> Fixed an issue that caused silent installations of the GDK that used the `/features` command-line switch to skip installing legacy layout components.  

#### Microsoft Azure PlayFab Game Saves

> Fixed an issue for `FAIL_FAST` on resume when a game uses PlayFab Game Saves.  

> Fixed an issue when using inproc PlayFab Games Saves where the device-contention callback could be incorrectly invoked when no actual device conflict occurred. Previously, the PlayFab SDK treated the absence of a pending manifest as proof that another device had taken over. However, this could also happen in normal scenarios (for example, when no sync was in progress or the local device completed its own upload). The SDK now correctly verifies whether the finalized manifest was actually created by a different device before triggering the contention callback, preventing false positive notifications to the game.  

> Fixed an issue where PlayFab Game Saves initialization failed on Gaming Runtime Services (GRTS) if the specified save folder directory didn't already exist, or if the provided path was missing a trailing backslash. The PlayFab SDK now automatically creates the directory if it's needed and ensures proper path formatting before initialization.  

> Fixed a synchronization issue where the inproc version of PlayFab Game Saves could incorrectly reuse an outdated pending manifest after the finalized cloud manifest version had already advanced past it. The pending manifest is now only reused when it both belongs to the current device *and* has a version greater than the finalized cloud version. This change prevents potential data inconsistencies during multi-device sync scenarios.  

> Fixed an issue where file modification time stamps were incorrect when synchronizing game saves between devices by using different storage providers (in-process versus Gaming Runtime Services (GRTS)). File time stamps are now properly preserved and converted to UTC when creating compressed archives, ensuring consistent time-stamp behavior across all platforms.  

> Fixed an issue where a Game Save description returned malformed/corrupted data on Steam Deck. Save descriptions are now properly Base64-decoded when they're retrieved from the manifest, ensuring that you get the correct human-readable description text that was originally set.  

> Fixed an issue when using inproc PlayFab Game Saves where canceling a sync operation from the progress dialog might cause an assert failure and unstable behavior. The cancellation mechanism has been redesigned to use a thread-safe atomic flag approach.  
>
> This change allows users to safely cancel ongoing upload or download operations from the progress UI without triggering race conditions or assertion failures. The SDK now properly checks for cancel requests during key stages of the sync operation and cleanly terminates with a user-canceled error code.  

> Fixed an issue when using inproc PlayFab Game Saves where downloading a large number of small files (for example, 1,000 or more small text files) would fail. The progress tracking was incorrectly using uncompressed file sizes for transfer progress reporting, which caused mismatches when dealing with many small, compressed files. Progress reporting now correctly tracks compressed byte sizes to accurately reflect actual network transfer progress.  

> Fixed a crash while using inproc PlayFab Game Saves that occurred when calling the `PFGameSaveFilesSetSaveDescriptionAsync` API while disconnected from the cloud. This API now returns an appropriate error code instead of crashing.  

> Fixed an issue in `PFUninitializeAsync()` where it would stop responding when using inproc `PFGameSaveFiles` when a sync failure callback was pending response during shutdown. The SDK now automatically cancels pending UI callbacks when uninitializing, ensuring clean shutdown even if the game doesn't respond to `syncFailedCallback`.  

> Fixed an issue where a game could crash when the active device was changed by using PlayFab Game Saves.  

> Fixed an issue where conflict callbacks displayed incorrect time stamps when using inproc PlayFab Game Saves.  

> Fixed an issue where `PFGameSaveFilesSetSaveDescriptionAsync` returned `E_FAIL` and subsequent calls stopped responding when called offline on Steam Deck.  

> Fixed an issue where canceling a failed upload on Steam Deck caused all subsequent uploads to permanently fail with `E_PF_GAME_SAVE_MANIFEST_UPDATES_NOT_ALLOWED`.  

> Fixed an issue where `PFGameSaveFilesUploadWithUiAsync` could hang indefinitely if a previous upload was canceled during a service error. The sync-failed UI callback is now correctly surfaced on retry, allowing the user to cancel or retry the operation.  

#### Networking

> Fixed an issue where 24 hours after the first lobby or matchmaking attempt, if the library hasn't been cleaned up, it might fail to create subsequent lobbies, join subsequent lobbies, subscribe to lobby invitations, or create subsequent matchmaking tickets.  

#### Xbox services

> Fixed an issue that caused game invite callbacks to not be fired on Steam Deck in the following two particular cases.
>
> - When no Multiplayer Activity Connection String was provided with the invite
> - When the invite handler was added by the title after the `XUser` had already been added  


> Fixed an issue where the in-proc gaming runtime didn't use WinHTTP proxy settings, causing `E_XAL_NETWORK` errors when a proxy (for example, Fiddler) was configured via `netsh winhttp set proxy`.  

## October 2025 GDK Update 1  

### Notifications

#### Cross-platform functionality

> `XUserSignOutAsync` and `XUserSignOutResult` have been added to support player sign-out on Steam Deck. `XUserIsSignOutPresent` can be used to determine whether the current device supports sign-out via API.  

#### Xbox services

> Three new APIs&mdash;`XGameInviteRegisterForPendingEvent`, `XGameInviteUnregisterForPendingEvent`, and `XGameInviteAcceptPendingInvite`&mdash;have been added to restore consistency for `XGameInvite` callbacks, which previously behaved inconsistently across in-proc and out-of-proc scenarios. The new pending-invite handler is called only in in-proc flows. After the title handles invite acceptance, `XGameInviteAcceptPendingInvite` is called. This triggers the invite-accepted callback.  
>
> On Windows and Xbox console (where Gaming Runtime Services (GRTS) is available), shell UI was responsible for the invite acceptance flow. The title was notified only when the invite was accepted. For in-proc scenarios, such as Steam Deck, titles handle invite acceptance. The `XGameInvite` callback fires when an invite is received so that titles can manage the acceptance flow.  

#### Microsoft Azure PlayFab Game Saves

> Upload progress tracking now reports compressed byte counts. This change keeps progress callbacks and telemetry aligned with the actual data streamed and prevents premature "completed" percentages when large saves compress poorly.  

> The previously dormant `PFGameSaveFilesAddUserOptions::RollbackToLastKnownGood` and `RollbackToLastConflict` flags have been enabled. They now honor rollback requests during `PFGameSaveFilesAddUserWithUiAsync`. Titles get the expected selection instead of always syncing to the latest save.  

> Initialization now cleans up correctly after `E_INVALIDARG` failures (such as a missing Steam Deck save path). This change ensures that subsequent calls no longer report "already initialized."  

> Logging was added to improve diagnostics when running out-of-process.  

### Issue fixes

#### Microsoft Azure PlayFab Party

> Fixed an issue where PlayFab Party voice chat couldn't be established when no `XUser` was signed in, including on Steam games played on Windows without an Xbox network user and on Steam Deck.  

#### Xbox services

> Fixed an issue where the URI received by the game from `XGameInvite` callbacks on Steam Deck didn't match the URI received on Windows. The Steam Deck URI only included the connection string but was missing the sender information and invited user XUID.  

## October 2025 GDK

### Notifications

#### GDK tools

> The `/updatesubval` flag has been added to MakePkg for checking for a newer version of SubmissionValidator.dll. If this flag is used and a newer version of the SubmissionValidator.dll is available, MakePkg downloads and places the .dll file in the path for MakePkg.  

> The Touch Adaptation Kit Command Line Tool (TAK CLI) (tak.exe) has been removed from the GDK setup. For instructions about how to download this tool, go to [TAK CLI on GitHub](https://aka.ms/get-takcli).  

## Known issues

### XUserResolveIssueWithUiAsync flow

> **Issue:**  
> The `XUserResolveIssueWithUiAsync` API is intended to resolve user account issues such as token or consent problems, not to change the signed-in identity. However, it's possible for a user who originally signed in with Account A to complete this flow and sign in with Account B, resulting in a different XUID.  
>
>**Impact:**  
> When the account changes during this flow, the API detects the mismatch and automatically fails the operation.  
>
> **Applies to:**  
> - October 2025 GDK  
> - October 2025 GDK Update 1  
> - October 2025 GDK Update 2  
>
> **Guidance:**  
> If the operation fails because of an account change, remove the user and re-add the user to ensure proper sign-in.  

#### RESOLVED: Downloading compressed save data

> **Issue:**  
> PlayFab Game Saves might encounter issues when downloading compressed save data that's larger than its uncompressed size. This is most commonly encountered when a game is using its own file compression in addition to PlayFab Game Saves.  
>
> **Applies to:**  
> - October 2025 GDK  
> - October 2025 GDK Update 1  
>
> **Resolved:**  
> This issue is resolved in the October 2025 GDK Update 2.  
>
> **Guidance:**  
> Consider disabling additional file compression, if possible.  

### RESOLVED: XGameInviteRegisterForPendingEvent must be called before adding XUsers

> **Issue:**  
> On Steam Deck, `XGameInviteRegisterForPendingEvent` must be called before adding `XUsers`, or they won't be properly registered for invite notifications. This sequencing requirement was unintentional.  
>
> **Applies to:**  
> October 2025 GDK Update 1  
>
> **Resolved:**  
> This issue is resolved in the October 2025 GDK Update 2.  

### RESOLVED: XGameInviteRegisterForPendingEvent requires connectionString to be set

> **Issue:**  
> On Steam Deck, `XGameInviteRegisterForPendingEvent` won't invoke title callbacks for invites that are missing the Xbox Multiplayer Activity (MPA) `connectionString`. Although it's an optional field when sending the invite, `XGameRuntime` drops invite payloads without it.  
> 
> **Applies to:**  
> October 2025 GDK Update 1  
>
> **Resolved:**  
> This issue is resolved in the October 2025 GDK Update 2.  
> 
> **Workaround:**  
Provide a non-empty connection string when sending the invite. Ignore it on the receiving end if it isn't needed.  

## Documentation

> Offline documentation for the October 2025 release of the GDKX is installed on your development PC by the GDKX Setup program. After running Setup, the Help file for the GDKX (gdk.chm) is in C:\Program Files (x86)\Microsoft GDK\Documentation.

> - The online GDKX documentation is at [https://aka.ms/gdkonline](https://aka.ms/gdkonline).  

