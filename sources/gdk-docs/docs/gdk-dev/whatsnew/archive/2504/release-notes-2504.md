---
author: dkushmerick
title: "April 2025 Microsoft Game Development Kit (GDK) release notes"
description: "Describes breaking changes, notifications, bug fixes, and known issue for the April 2025 Microsoft Game Development Kit (GDK)."
kindex:
- Release notes
ms.topic: article
edited: '05/07/2026'
ms.date: '05/07/2026'
permissioned-type: public
---
# April 2025 Microsoft Game Development Kit (GDK) release notes

## Introduction

Welcome to the April 2025 Microsoft Game Development Kit release. You can use the GDK to develop games that can be certified and approved for release on Windows 11 PCs and Windows 10 PCs.

### About this document

We have organized this document into the following sections.

- [What's new](#whats-new-in-the-april-2025-microsoft-game-development-kit)
- **Release notes:**  
  - [April 2025 GDK Update 6](#april-2025-gdk-update-6)
  - [April 2025 GDK Update 5](#april-2025-gdk-update-5)
  - [April 2025 GDK Update 4](#april-2025-gdk-update-4)
  - [April 2025 GDK Update 3](#april-2025-gdk-update-3)
  - [April 2025 GDK Update 2](#april-2025-gdk-update-2)
  - [April 2025 GDK Update 1](#april-2025-gdk-update-1)
  - [April 2025 GDK](#april-2025-gdk)
- [Known issues](#known-issues)
- [Documentation](#documentation)

### What's new in the April 2025 Microsoft Game Development Kit

> - The GDK is released in two types: Major (focused on features, twice a year) and Updates (focused on fixes, as often as needed).
> - To view the full What's New section, see the online version of [What's New](https://learn.microsoft.com/gaming/gdk/_content/gc/intro/whatsnew/whats-new).

## April 2025 GDK Update 6

### Notifications

#### Registration of file type associations

> PC games can now register file type associations in MicrosoftGame.Config. When a user opens a file with a registered extension, the game will either be launched or be brought to the foreground. This behavior is enabled through the `XGameActivation*` APIs (for example, `XGameActivationRegisterForEvent()`).

### Issue fixes

#### Networking

> Fixed an issue where, if the library hasn't been cleaned up, then 24 hours after the first lobby or matchmaking attempt, the library can fail to:  
>
> - Create subsequent lobbies.  
> - Join subsequent lobbies.  
> - Subscribe to lobby invitations.  
> - Create subsequent matchmaking tickets.  

> Fixed an issue where the library might stop responding if its WebSocket connection was lost while a game was paused in a debugger.  

## April 2025 GDK Update 5

### Notifications

#### Microsoft Azure PlayFab Party to v1.10.16 updates

> - The `PartyNetwork::CreateEndpoint` `PartyStatusChangeResult` behavior has been changed to return `PartyServiceError` for transient errors that occur before the token expires, and to return `UserNotAuthorized` only when the token has actually expired.
>
> - Audio device selection support has been added for XUser-less or in-proc Gaming Runtime Services (GRTS) environments.
>
> - A potential crash during multinetwork transition scenarios has been fixed.  

#### Networking

> `XCurl` has been updated to allow multiple calls to `xcurl_global_init_mem()` or `curl_global_init_mem()` between calls to `curl_global_cleanup()`. This new behavior matches the `LibCurl` behavior for `curl_global_init_mem()`, bringing the `XCurl` API in sync with `LibCurl` expectations. Additionally, `curl_global_init()`, `curl_global_init_mem()`, `xcurl_global_init_mem()`, and `curl_global_cleanup()` have been made thread safe.  

#### packageutil compare Intelligent Delivery tag simulation fix

> A logic error in `packageutil compare` caused Intelligent Delivery simulations to exclude required non‑OnDemand tags whenever any tag‑based simulation was run. This produced inaccurate size and update predictions for titles using OnDemand or Feature-based packaging.
>
> This fix ensures that:
>
> - **Non‑OnDemand tags are always included** in simulations for non‑Feature packages.
>
> - **Feature-based packages are fully supported**, including segmented tags and both full‑feature and single‑feature simulations.
>
> This fix restores accurate size reporting and enables partners to correctly evaluate ID configurations.
>
> **Affected binary:** `PackageUtil.exe`

### Issue fixes

#### GDK tools

> Fixed an issue that caused the `XblTestAccountGui` tool to fail to sign in with the following error message.
>
> "Live auth error: Login Error: The remote server returned an error: (400) Bad Request."

## April 2025 GDK Update 4

### Issue fixes

#### Xbox services

> Fixed an issue where a crash was caused by a rare race condition during Real-Time Activity (RTA) disconnect and/or unsubscribe.  

## April 2025 GDK Update 3

### Notifications

#### Networking

> The `XCurl` default receive buffer size has been increased from 8 KB to 16 KB and improves the download speed of large requests. This new buffer size now matches that of `LibCurl`.  

#### GDK tools

> The build ID and content ID are both now available in the output data when running `wdapp.exe /list /d` and `wdapp.exe /listdlc /d` on a PC.  

## April 2025 GDK Update 2

### Notifications

#### GDK tools

> The `/updatesubval` flag has been added to MakePkg for checking for a newer version of SubmissionValidator.dll. If this flag is used and a newer version of SubmissionValidator.dll is available, MakePkg downloads and places the .dll file in the path for MakePkg.  

### Issue fixes

#### System

> Fixed an issue that affected Unity where `XStoreQueryGameLicenseAsync` failed and returned the `E_INVALIDARG` error when the Xbox console language was set to one that used a comma (,) for decimals.  

## April 2025 GDK Update 1

### Notifications

#### GDK tools

> Display IDs are now available by running the `list-displays` command in `wdCapture` to specify which display to capture.  

#### Media

> The `XAppCaptureCancelUserRecord` API has been added. It allows recordings that were started by `XAppCaptureStartUserRecord` to be stopped without the recording being saved.  

### Issue fixes

#### GDK tools

> Fixed an issue that caused heap dumps to be only partially written when using Visual Studio or when calling `MiniDumpWriteDump` from within the title. The following error was previously displayed.
>
> "Failed with error (0x8007012B): Only part of a `ReadProcessMemory` or `WriteProcessMemory` request was completed."

> Fixed an issue in makepkg.exe that will, in the future, allow developers to upload packages with localized display names.  

#### Xbox services

> Fixed an issue that could cause high service loads because of Real-Time Activity resyncs.  

## April 2025 GDK

### Known issues

#### Heap dumps aren't written completely

> **Resolved:** This issue is resolved in the April 2025 GDK Update 1.
>
> Heap dumps are only partially written when using Visual Studio or when calling `MiniDumpWriteDump` from within the title. The following error is displayed.
>
> "Failed with error (0x8007012B): Only part of a `ReadProcessMemory` or `WriteProcessMemory` request was completed."
>
> **Applies to the following:**
>
> - April 2025 GDK
> - October 2024 GDK Update 1 and October 2024 GDK Update 2
>
> **Workaround**
>
> You can use one of the following workarounds:
>
> - When calling `MiniDumpWriteDump` directly, add the `MiniDumpIgnoreInaccessibleMemory` flag to the `DumpType` parameter.
> - Heap dumps can also be successfully taken by using the version of xbWatson in either Update 1 of the October 2024 GDK or the April 2025 GDK.

## Documentation

> Offline documentation for the April 2025 release of the GDKX is installed on your development PC by the GDKX Setup program. After running Setup, the Help file for the GDKX (gdk.chm) is in C:\Program Files (x86)\Microsoft GDK\Documentation.

<p></p>

> - The online GDKX documentation is at [https://aka.ms/gdkonline](https://aka.ms/gdkonline).  

<p></p>  
