---
author: dkushmerick
title: "Release notes for the Microsoft Game Development Kit (GDK)"
description: "Describes breaking changes, notifications, bug fixes, and known issues for the Microsoft Game Development Kit (GDK)."
kindex:
- Release notes
ms.topic: article
edited: '04/09/2026'
ms.date: '04/09/2026'
permissioned-type: public
---

# Release notes for the Microsoft Game Development Kit (GDK)

<!-- ========================================================= -->
<!-- GDK 2604 CONTENT                                          -->
<!-- Visible when view >= gdk-2604 (2604, 2610, etc.)           -->
<!-- ========================================================= -->

:::moniker range=">=gdk-2604" 

<!--- # Release notes in the April 2026 Microsoft Game Development Kit  --->

## April 2026 Microsoft Game Development Kit (GDK) release notes

## Introduction

Welcome to the April 2026 Microsoft Game Development Kit with Xbox Extensions (GDKX) and the public GDK release. You can use the GDKX to develop games that can be certified and approved for release on Windows 11 PCs, Windows 10 PCs, Xbox One, and Xbox Series X|S consoles *by using a shared codebase*. For the GDK, you can develop games that can be certified and approved for release on Windows 11 PCs and Windows 10 PCs.

## GDKX

> - The April 2026 GDKX can be installed side-by-side with GDKXs from November 2019 and later.  
> - You can download GDKX releases from [https://aka.ms/gdkdl](https://aka.ms/gdkdl).  
> - The release notes for all GDKX releases are at [https://aka.ms/gdkreleasenotes](https://aka.ms/gdkreleasenotes). 

## GDK

> - You can download GDK releases and view their release notes at https://aka.ms/gdk-winget.

### About this document

We have organized this document into the following sections.  

- [What's new](#whats-new-in-the-april-2026-microsoft-game-development-kit)  
- **Release notes:**  
  - [April 2026 GDK Update 1](#april-2026-gdk-update-1)
  - [April 2026 GDK](#april-2026-gdk)  
- [Known issues](#known-issues)  
- [Documentation](#documentation)  

> **NOTE**: Release notes have a number after their descriptions, such as [12345678]. For GDKX users, this number represents an internal ID that Microsoft uses to track the work and history relating to the item. This number can be useful to your developer account manager if you have questions about a particular release note.  

---

### What's new in the April 2026 Microsoft Game Development Kit

> - The GDKX and the GDK are released in two types: Major (focused on features, twice a year) and Updates (focused on fixes, as often as needed by partners).  
> - To view the full What's new section, see the online version of [What's new](whats-new.md).  
> - To view release notes for previous versions, for the GDKX, see [release notes posts](https://aka.ms/gdkreleasenotes) on the GDK forums. For the GDKX and the GDK, you can view the release notes in the online documentation at [GDK release notes](https://learn.microsoft.com/gaming/gdk/_content/gc/intro/release-notes/release-notes).  

---

## April 2026 GDK Update 1  

### Notifications

#### XBOX Game Package Manager

> Use the latest XBOX Game Package Manager (XGPM) UI release from GitHub when creating and uploading MSIXVC2 packages. This release includes multiple fixes. To download it, go to [releases - Microsoft/PackageUploader](https://github.com/microsoft/PackageUploader/releases).

### Issue fixes

#### System

> Fixed a memory leak in the `XGameActivationAcceptPendingInvite` API. [61953160]

> Fixed an issue where `XLaunchUri` failed with URIs longer than 21 characters. [62181431]

> Fixed an issue in the `XGameInvite.h` and `XGameProtocol.h` GDK header files that could cause a C4768 compiler error. [62181564]

#### MSIXVC2

> Fixed various component reliability and performance issues in the preview version of MSIXVC2. [62225080]

#### Developer tools

> Fixed an issue where the MicrosoftGame.config Editor silently failed to save or create new files while reporting success. [62226865]

---

## April 2026 GDK  

### Notifications

#### API deprecations

> The `XGameActivation` API has replaced the `XGameProtocol` and `XGameInvite` APIs, providing a single API surface for all game activation scenarios. As a result, `XGameProtocol` and `XGameInvite` are now deprecated. Existing implementations will continue to function, but we recommend migrating to `XGameActivation` for new development and future compatibility. 
>
> The following APIs have been deprecated.  
>
> - `XGameProtocolRegisterForActivation`  
> - `XGameProtocolUnregisterForActivation`  
> - `XGameInviteRegisterForEvent`  
> - `XGameInviteUnregisterForEvent`  
> - `XGameInviteRegisterForPendingEvent`  
> - `XGameInviteUnregisterForPendingEvent`  
> - `XGameInviteAcceptPendingInvite`  
>  
> For more information, see [XGameActivation](https://learn.microsoft.com/gaming/gdk/docs/reference/system/xgameactivation/xgameactivation_members?view=gdk-2604).
>
> [61232139]  

#### Developer tools

> Mainstream support for Visual Studio 2019 has expired. Extended support continues until April 2029. For more information about Visual Studio 2019 product lifecycle and servicing, see [Visual Studio 2019 Product Lifecycle and Servicing](https://learn.microsoft.com/visualstudio/releases/2019/servicing-vs2019).
>
> Visual Studio 2019 and the v142 toolset compiler are out of mainstream support as of April 2024 and are only getting security servicing. Support for Visual Studio 2019 integration and use of the v142 platform toolset via Visual Studio 2022/Visual Studio 2026 will be removed in a future release of the GDK. This process will include the removal of the `Microsoft.Xbox.Services.142.GDK.C.lib` library. For Visual Studio 2022 and Visual Studio 2026, we recommend moving to `Microsoft.Xbox.Services.143.GDK.C.lib`, which was added in the April 2026 GDK.   
>
> [61594513]  

> Address Sanitizer (ASAN) for Xbox is no longer supported on Visual Studio 2019. [60868415]  

> Screen captures can now be copied to the clipboard from the Xbox Manager Media Capture tab. [41667882]  

> PC command-line tools such as `wdcapture`, `wdcapturesession`, and `xblpcsandbox` now support direct bug feedback submission through the Feedback Hub app. [60250549]  

> Package Uploader now supports federated credentials. [60771527]  

#### Microsoft Azure PlayFab

> PlayFab Multiplayer has been updated to v1.9.0. For details, see [PlayFab Multiplayer C++ SDK Release Notes - PlayFab | Microsoft Learn](/gaming/playfab/multiplayer/lobby/lobby-matchmaking-sdks/lobby-and-matchmaking-release-notes#190). [61288995]  

#### Microsoft Azure PlayFab Party

> PlayFab Party has been updated to v1.10.18. For details, see [PlayFab Party Release Notes - PlayFab | Microsoft Learn](/gaming/playfab/multiplayer/networking/release-notes#11018). [61288995]  

#### Issue Fixes

> Fixed an issue that caused the language setting in a non-English command prompt to change to English after running GDK Xbox command-line tools such as xbapp.exe or xbconnect.exe. [59688191]  

> Fixed an issue where Xbox Game Package Manager didn't populate the UI with the last selected branch. [60771527]  

---

## Known issues

### makepkg2: /priorpackage doesn't generate a compare report for MSIXVC2 packages  

> **Issue:**  
> In `makepkg2`, using the `/priorpackage` flag when packing MSIXVC2 packages doesn't generate a compare report. Compare report generation isn't supported for MSIXVC2 packages in this release.  
>
> **Applies to:**  
> - April 2026 GDK  
>
> **Workaround:**  
> None at this time.  
>
> **Status:**  
> This issue will be fixed in a future GDK update.  
>
> [61771743]  

### makepkg2: layout.xml requires DisplayName on all features

> **Issue:**  
> In `makepkg2`, the `layout.xml` parser requires the `DisplayName` attribute on all features, including hidden features where a display name isn't meaningful.  
> 
> **Applies to:**   
> - April 2026 GDK  
> 
> **Workaround:**  
> Add a placeholder `DisplayName` attribute to any hidden features in `layout.xml`.  
>
> **Status:**  
> This issue will be fixed in a future GDK update.  
>
> [61767246]  

### makepkg2: /contentid flag fails when ContentId is absent from MicrosoftGame.config
 
> **Issue:**  
> In `makepkg2`, using the `/contentid` flag when no `ContentId` is specified in `MicrosoftGame.config` results in the following error.  
>
> *`/contentid specified on the command line does not match the ContentId derived from the MicrosoftGame.config file.`*  
>
> This behavior differs from `makepkg`, which accepted the `/contentid` value directly in this scenario.  
>
> **Applies to:**  
> - April 2026 GDK  
>  
> **Workaround:**  
> Use `/contentidoverride` instead of `/contentid`.  
>
> **Status:**  
> This issue will be fixed in a future GDK update.  
> 
> [61767256]   

### MSIXVC2 packages can't be uploaded to Microsoft Partner Center via its web UI

> **Issue:**  
> The upload of an `.msixvc` package to Partner Center fails if it was built by using the new `makepkg2` tools.
>
> **Applies to:**  
> - Partner Center web UI
>
> **Workaround:**  
> Use one of the following tools to upload MSIXVC2 packages to Partner Center.
>
>- `makepkg2` upload command: `makepkg2 upload /d <content_directory> /branch "<BranchName>" /msixvc2`
>
> - **Xbox Game Package Manager**: Download the latest version from [https://github.com/microsoft/PackageUploader](https://github.com/microsoft/PackageUploader).
>
> **Status:**  
> Partner Center will be updated in the coming months to add support for web uploads of MSIXVC2 packages.

### XboxPcTray.exe might block MSIXVC2 package uninstall or update  

> **Issue:**  
> `XboxPcTray.exe` sometimes retains a handle to the game's Content folder, which can prevent uninstall or update operations from completing.  
> 
> **Applies to:**  
> - April 2026 GDK  
>
> **Workaround:**  
> Close the Xbox PC Tray app before attempting to uninstall or update. To close it, right-click the `XboxPcTray` icon in the system tray, and then select **Quit**. You can also end the `XboxPcTray.exe` process in Task Manager.
> 
> **Status:**  
> This issue will be fixed in a future GDK update.  
> 
> [61618609]  

### MSIXVC2 packages can't be uploaded via Package Uploader
 
> **Issue:**  
> Uploading an `.msixvc` package to Partner Center via the Package Uploader command-line tool fails with a 400 (Bad Request) error if the package was built by using the `makepkg2` tool with the `/msixvc2` flag. Although MSIXVC and MSIXVC2 packages share the same `.msixvc` file extension, MSIXVC2 packages use a different internal format that Package Uploader doesn't currently support.
>  
> **Applies to:**  
>  
> - Package Uploader CLI (PackageUploader.exe)
>  
> **Workaround:**  
> Use one of the following tools to upload MSIXVC2 packages.
>
> - makepkg2 upload command: `makepkg2 upload /d <content_directory> /branch "<BranchName>" /msixvc2>` 
> - **Xbox Game Package Manager:** Download the latest version from [https://github.com/microsoft/PackageUploader](https://github.com/microsoft/PackageUploader).
>
> **Status:**  
> This issue will be addressed in a future release of Package Uploader.

### MSIXVC2 packages in Partner Center appear as 1 byte in size in its UI 

> **Issue:**  
> Partner Center shows an incorrect size for uploaded MSIXVC2 packages. It shows 1 byte, regardless of the package's size.
> 
> **Applies to:**  
>
> - Partner Center
>
> **Workaround:**  
> None at this time.
> 
> **Status:**  
> This issue will be fixed in a future GDK tools update.

### Build With/Out Install (BWOI) MSBuild integration for Visual Studio 2026

> **Issue:**  
> The Build With/Out Install (BWOI) MSBuild integration for Visual Studio 2026 differs slightly from previous releases. In the current releases of Visual Studio 2026, the BWOI implementation must "lock" to a specific `VCTargetsPath`. The result is that all projects are built with v145 or clang-cl, even if the `PlatformToolset` values are set to v142 or v143. These older toolsets usually build correctly in standard Visual Studio scenarios.  
> 
> **Applies to:**  
> - April 2026 GDK  
>
> **Workaround:**  
> For details about a workaround, see [BWOIExample](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Tools/BWOIExample/readme_en-us.md). 
> 
> **Status:**  
> The GDK team and the Visual Studio team are working to resolve this issue in a future Visual Studio release. 
> 
> [61855642]  

---

## Documentation

> Offline documentation for the April 2026 release of the GDKX is installed on your development PC by the GDKX Setup program. After running Setup, the Help file for the GDKX (gdk.chm) is in C:\Program Files (x86)\Microsoft GDK\Documentation.  

> - The online GDKX and GDK documentation is at [Game Development Kit (GDK) documentation](https://aka.ms/gdkonline).

---

:::moniker-end
<!-- ========================================================= -->
<!-- GDK 2510 CONTENT                                          -->
<!-- Visible only when view=gdk-2510                           -->
<!-- ========================================================= -->

:::moniker range="gdk-2510"

<!--
PASTE THE FULL CONTENT FROM:
gdk/docs/gdk-dev/whatsnew/2510/whats-new-2510.md

Keep:
- Original headings
- Original bullet ordering
- Original wording

Do NOT include front matter from the old file.
-->

## October 2025 Microsoft Game Development Kit (GDK) release notes

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

---
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

---

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

---

## October 2025 GDK Update 1

### Notifications

#### API deprecations

> The `XGameActivation` API has replaced the `XGameProtocol` and `XGameInvite` APIs, providing a single API surface for all game activation  scenarios. As a result, `XGameProtocol` and `XGameInvite` are now deprecated. Existing implementations will continue to function, but we recommend migrating to `XGameActivation` for new development and future compatibility. 
>
> The following APIs have been deprecated.  
>
> - `XGameProtocolRegisterForActivation`  
> - `XGameProtocolUnregisterForActivation`  
> - `XGameInviteRegisterForEvent`  
> - `XGameInviteUnregisterForEvent`  
> - `XGameInviteRegisterForPendingEvent`  
> - `XGameInviteUnregisterForPendingEvent`  
> - `XGameInviteAcceptPendingInvite`  
>  
> For more information, see [XGameActivation](https://learn.microsoft.com/gaming/gdk/docs/reference/system/xgameactivation/xgameactivation_members?view=gdk-2604).
>
> [61232139] 

#### Cross-platform functionality

> `XUserSignOutAsync` and `XUserSignOutResult` have been added to support player sign-out on Steam Deck. `XUserIsSignOutPresent` can be used to determine whether the current device supports sign-out via API. [59457172]  

#### Xbox services

> Three new APIs&mdash;`XGameInviteRegisterForPendingEvent`, `XGameInviteUnregisterForPendingEvent`, and `XGameInviteAcceptPendingInvite`&mdash;have been added to restore consistency for `XGameInvite` callbacks, which previously behaved inconsistently across in-proc and out-of-proc scenarios. The new pending-invite handler is called only in in-proc flows. After the title handles invite acceptance, `XGameInviteAcceptPendingInvite` is called. This triggers the invite-accepted callback.  
>
> On Windows and Xbox console (where Gaming Runtime Services (GRTS) is available), shell UI was responsible for the invite acceptance flow. The title was notified only when the invite was accepted. For in-proc scenarios, such as Steam Deck, titles handle invite acceptance. The `XGameInvite` callback fires when an invite is received so that titles can manage the acceptance flow.  
>
> [59693389]  

#### Graphics

> For the Xbox One family, a new `D3D12XBOX_PIPELINE_STATE_FLAG_VS_EXPORT_VIEWPORT_INDEX_REUSE` flag was added to prevent de-duplication issues when using index reuse and vertex shaders that are exporting `SV_ViewportArrayIndex`. [59989696]  

#### System

> Reducing the size of the `StagingBuffer` can now be done when initializing `DirectStorage` on Xbox, freeing up title memory.  
>
> Enum values are now available for a buffer savings of up to 16 MB over the default staging size of 32 MB. However, file performance slightly degrades when using a smaller buffer. For more information, see [DirectStorage](../../reference/system/dstorage/enums/dstorage_staging_buffer_size.md).  
>
> [60006847]  

> A new interface, `IDStorageFactoryX2`, is now available. It exposes a new API, `CreateQueue1`, for creating `DirectStorage` queues. This API takes a new queue definition structure, allowing control over whether auto-submits occur within the newly created `DirectStorage` queue. For more information, see [DirectStorage](../../reference/system/dstorage/dstorage_members.md). [60039148]  

> The October 2025 GDK introduced `XGameUi` callbacks. They allow developers to implement their own UX on the Steam Deck platform. Several of these callbacks&mdash;particularly the ones for UI components that don't have any user interaction&mdash;didn't have associated `SetResponse` APIs. They're responsible for completing the async UI calls. These APIs have now been introduced to allow developers to complete all `XGameUi` calls on Steam Deck. [60149696]  

#### Microsoft Azure PlayFab Game Saves

> Upload progress tracking now reports compressed byte counts. This change keeps progress callbacks and telemetry aligned with the actual data streamed and prevents premature "completed" percentages when large saves compress poorly. [60147964]  

> The previously dormant `PFGameSaveFilesAddUserOptions::RollbackToLastKnownGood` and `RollbackToLastConflict` flags have been enabled. They now honor rollback requests during `PFGameSaveFilesAddUserWithUiAsync`. Titles get the expected selection instead of always syncing to the latest save. [60147982]  

> Initialization now cleans up correctly after `E_INVALIDARG` failures (such as a missing Steam Deck save path). This change ensures that subsequent calls no longer report "already initialized." [60148008]  

> Logging was added to improve diagnostics when running out-of-process. [60148021]  

#### PIX

> When converting programmatic timing captures, the **GPU Only Events** settings in the UI were ignored. These settings are now applied to the converted capture. [60294683]  

### Issue fixes

#### Microsoft Azure PlayFab Party

> Fixed an issue where PlayFab Party voice chat couldn't be established when no `XUser` was signed in, including on Steam games played on Windows without an Xbox network user and on Steam Deck. [59804895]  

#### Xbox services

> Fixed an issue where the URI received by the game from `XGameInvite` callbacks on Steam Deck didn't match the URI received on Windows. The Steam Deck URI only included the connection string but was missing the sender information and invited user XUID. [59990660]  

#### System

> Fixed an issue for in-proc `XGameRuntime` where `XGameGetXboxTitleId` failed with `E_GAMERUNTIME_SERVICE_NOT_AVAILABLE`. This failure had a ripple effect that caused other Xbox APIs to fail, including `XblMultiplayerActivitySendInvitesAsync`. [60043213]  

> Fixed an issue where the Break On Suspend Timeout configuration in Visual Studio didn't take effect after a title called `XLaunchNewGame`. [60063672]  

#### Graphics

> Fixed an issue where the `D3D12XBOX_RESOURCE_FLAG_FORCE_TEXTURE_COMPATIBILITY` flag wasn't respected for present buffers using delta color compression (DCC). [60237976]  

#### GDK tools

> Fixed an issue that caused the wrong version of dxc.exe to be executed from an Xbox One GDK command prompt or a Scarlett GDK command prompt. The Windows version was being executed instead of the Xbox version. [60265047]  

#### PIX

> Fixed an issue where Mesh Shader Output displayed an error for the case where `ExecuteIndirect` was used with Simple `DispatchMesh` commands. [60270639]  

---

## October 2025 GDK  

### Notifications

#### GDK tools

> The `/updatesubval` flag has been added to MakePkg for checking for a newer version of SubmissionValidator.dll. If this flag is used and a newer version of the SubmissionValidator.dll is available, MakePkg downloads and places the .dll file in the path for MakePkg. [56987338]  

> The Touch Adaptation Kit Command Line Tool (TAK CLI) (tak.exe) has been removed from the GDK setup. For instructions about how to download this tool, go to [TAK CLI on GitHub](https://aka.ms/get-takcli). [57605599]  

### Issue fixes

#### Graphics

> Fixed an issue in the Direct3D 12 driver on Xbox Series X|S consoles that caused non&ndash;block-compressed views (Shader Resource View (SRV) and Unordered Access View (UAV)) of block-compressed resources to be created with the wrong sizes. [57051436]  

---

## Known issues

### Offline Markdown .zip files

> **Issue:**  
> Offline Markdown .zip files aren't currently available.  
>
> **Applies to:**  
> - October 2025 GDK  
> - October 2025 GDK Update 1  
>
> **Guidance:**  
> You can still download offline documentation as a Compiled HTML Help (.chm) file from [https://aka.ms/gdkdl](https://aka.ms/gdkdl).
>
> [60279334]  

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
>
> **Guidance:**  
> If the operation fails because of an account change, remove the user and re-add the user to ensure proper sign-in.  
>
> [59960311]  

### Downloading compressed save data

> **Issue:**  
> PlayFab Game Saves might encounter issues when downloading compressed save data that's larger than its uncompressed size. This is most commonly encountered when a game is using its own file compression in addition to PlayFab Game Saves.  
>
> **Applies to:**  
> - October 2025 GDK  
> - October 2025 GDK Update 1  
>
> **Guidance:**  
> Consider disabling additional file compression, if possible.  
>
> **Status:**  
> This will be fixed in a future GDK update.  
>
> [60348127]  

### XblTestAccountGui tool test account error

> **Issue:**  
> The `XblTestAccountGui` tool might fail to sign in test accounts. If so, the following error message appears.  
>
> *Live auth error: Login Error: The remote server returned an error: (400) Bad Request.*  
>
> **Applies to:**  
> - October 2025 GDK  
> - October 2025 GDK Update 1  
>
> **Status:**  
> This issue is corrected in the latest GitHub release of the Xbox Live developer tools. They're available at [https://aka.ms/xbltools](https://aka.ms/xbltools). This fix will be included in a future GDK release.  
>
> [60428977]  

### XGameInviteRegisterForPendingEvent must be called before adding XUsers

> **Issue:**  
> On Steam Deck, `XGameInviteRegisterForPendingEvent` must be called before adding `XUsers`, or they won't be properly registered for invite notifications. This sequencing requirement was unintentional.  
>
> **Applies to:**  
> October 2025 GDK Update 1  
>
> **Status:**  
> This issue will be fixed in a future GDK release.  
>
> [60470935]  

### XGameInviteRegisterForPendingEvent requires connectionString to be set

> **Issue:**  
> On Steam Deck, `XGameInviteRegisterForPendingEvent` won't invoke title callbacks for invites that are missing the Xbox Multiplayer Activity (MPA) `connectionString`. Although it's an optional field when sending the invite, `XGameRuntime` drops invite payloads without it.  

> **Applies to:**  
> October 2025 GDK Update 1  
>
> **Workaround:**  
Provide a non-empty connection string when sending the invite. Ignore it on the receiving end if it isn't needed.  
>
> **Status:**  
> This issue will be fixed in a future GDK release.  
>
> [60470935]  

---
:::moniker-end
