---
author: Timberhofmandi
title: "Xbox PC Remote Iteration API"
description: "Provides functions for copying files, launching, resuming, and terminating games on remote Windows devices."
kindex: Xbox PC Remote Iteration API
ms.topic: article
edited: 03/04/2026
applies-to: pc-gdk
ms.date: '03/04/2026'
permissioned-type: public
---

# Xbox PC Remote Iteration API  

Provides functions for copying files, launching, resuming, and terminating games on remote Windows-based devices.  

## Overview  

The Xbox PC Remote Iteration API enables PC-based development workflows that target remote Windows devices. It provides a set of C functions for transferring game files between a local PC and a remote device, launching and managing game processes on the remote device, and registering games for remote execution. The API is designed for tight iteration loops during game development, allowing developers to build locally and deploy and test on remote hardware without manual file management.  

## When to use  

- Deploying game builds from a local PC to a remote Windows device during development.  
- Copying updated files (delta copy) to a remote device to minimize transfer times during iterative builds.  
- Launching, suspending, resuming, and terminating game processes on a remote device from your development PC.
- Automating build-deploy-test workflows in continuous integration pipelines targeting remote Windows devices.
- Building or integrating into custom studio tooling for deployment to remote Windows devices locally or in test labs. 

## When NOT to use  

- Do not use this API for retail or production deployment of games to end-user consoles.  
- Do not use this API to transfer files between two remote devices; one endpoint must be the local PC.  
- Do not use this API if the remote device has not been paired and configured for remote development.

## Prerequisites  

- **NuGet Package:** [Microsoft.GDK.RemoteIterationClientApi](https://aka.ms/GameDevRemoteAPI) version 0.1.0-preview.26.3.6001 or later.  
- **Device Pairing:** The local PC and the remote device must be paired and mutually trusted by using the [Xbox PC Toolbox](../../tools/tools-pc/xboxpctoolbox/xboxpctoolbox.md) app to provision them.  
- **wdEndpoint:** `wdEndpoint` must be installed and running on the remote device. The [Xbox PC Toolbox](../../tools/tools-pc/xboxpctoolbox/xboxpctoolbox.md) setup installs and configures `wdEndpoint` by default.  
- **Header and Library:** Include `WdRemoteIteration.h` and link against `wdremoteapi.lib`.

## Functions

| Function | Description |  
| --- | --- |  
| [WdRemoteCopy](functions/wdremotecopy.md) | Copies files between a local PC and a remote device. |  
| [WdCancelRemoteCopy](functions/wdcancelremotecopy.md) | Cancels an in-progress copy operation. |  
| [WdCreateCancellationHandle](functions/wdcreatecancellationhandle.md) | Creates a cancellation handle for cancelling a copy operation. |  
| [WdCloseCancellationHandle](functions/wdclosecancellationhandle.md) | Closes a cancellation handle. |  
| [WdDuplicateCancellationHandle](functions/wdduplicatecancellationhandle.md) | Duplicates an existing cancellation handle. |  
| [WdLaunchRemoteGame](functions/wdlaunchremotegame.md) | Launches a game on a remote device. |  
| [WdResumeRemoteGame](functions/wdresumeremotegame.md) | Resumes the last game launched in suspended mode on a remote device. |  
| [WdTerminateRemoteGame](functions/wdterminateremotegame.md) | Terminates the last game launched on a remote device. |  
| [WdRegisterRemoteXboxGame](functions/wdregisterremotexboxgame.md) | Registers a game on a remote device. |

## Structures  

| Structure | Description |  
| --- | --- |  
| [WdCopyFileProgressInfo](structs/wdcopyfileprogressinfo.md) | Contains progress information for an individual file during a copy operation. |  
| [WdCopyOperationSummary](structs/wdcopyoperationsummary.md) | Contains summary progress information for the overall copy operation. |  
| [WdCopyOptions](structs/wdcopyoptions.md) | Specifies the direction and mode for a copy operation. |  
| [WdCopyStatusCallbacks](structs/wdcopystatuscallbacks.md) | Contains callback function pointers and settings for receiving copy status updates. |  
| [WdCopySearchOptions](structs/wdcopysearchoptions.md) | Specifies file and directory filter patterns for a copy operation. |  
| [WdCancellationHandle](structs/wdcancellationhandle.md) | An opaque handle used to cancel an in-progress copy operation. |  
| [WdLaunchOptions](structs/wdlaunchoptions.md) | Specifies options for launching a game on a remote device. |

## Enumerations  

| Enumeration | Description |  
| --- | --- |  
| [WdCopyDirection](enums/wdcopydirection.md) | Specifies the direction of a copy operation. |  
| [WdLaunchMode](enums/wdlaunchmode.md) | Specifies the launch mode for a remote game. |  
| [WdCopyErrorSeverity](enums/wdcopyerrorseverity.md) | Specifies the severity of a copy error or warning message. |

## Callbacks  

| Callback | Description |  
| --- | --- |  
| [WdCopyFilesStatusCallback](callbacks/wdcopyfilesstatuscallback.md) | Called to report file copy progress during a copy operation. |  
| [WdCopyErrorCallback](callbacks/wdcopyerrorcallback.md) | Called to report error and warning messages during a copy operation. |

## Threading Model  

The Xbox PC Remote Iteration API is designed for single-threaded copy operations. The following rules apply:  

- **One copy at a time.** Only one [WdRemoteCopy](functions/wdremotecopy.md) call may be active at any given time, regardless of target device or destination path. Calling `WdRemoteCopy` while another copy is already in progress results in **undefined behavior**.  
- **Other functions are safe during a copy.** Functions such as [WdLaunchRemoteGame](functions/wdlaunchremotegame.md), [WdTerminateRemoteGame](functions/wdterminateremotegame.md), [WdResumeRemoteGame](functions/wdresumeremotegame.md), and [WdRegisterRemoteXboxGame](functions/wdregisterremotexboxgame.md) can be called from separate threads while a copy is in progress.  
- **All functions are blocking.** Every function in the API blocks the calling thread until the operation completes or fails. `WdRemoteCopy` in particular can block for an extended period depending on transfer size and network conditions.  
- **Cancellation is thread-safe.** [WdCancelRemoteCopy](functions/wdcancelremotecopy.md) can be called from any thread. If multiple threads attempt to cancel the same operation simultaneously, the calls are serialized internally — the first succeeds and subsequent calls return an error because there is nothing left to cancel.  
- **No connection state between calls.** Each API call establishes its own connection to the remote device. There is no persistent session — for example, if the connection drops after [WdLaunchRemoteGame](functions/wdlaunchremotegame.md) completes, you can still call [WdTerminateRemoteGame](functions/wdterminateremotegame.md) once connectivity is restored.  

## Retry Behavior  

The Xbox PC Remote Iteration API does **not** automatically retry failed operations at the API level. If an operation fails due to a network interruption or other transient error, the caller is responsible for retrying.  

- **No automatic retry.** If a copy operation fails (for example, due to loss of network connectivity), `WdRemoteCopy` returns an error. The caller must re-invoke the function to retry.  
- **No configurable timeout.** `WdRemoteCopy` does not impose a timeout on the copy operation. It continues transferring until complete, an error occurs, or it is cancelled via [WdCancelRemoteCopy](functions/wdcancelremotecopy.md). Under degraded network conditions, transfers may proceed very slowly rather than failing.  
- **Progress is preserved on failure.** Files that were successfully copied before a failure remain on the destination. When the caller retries the copy, the delta copy behavior ensures that only incomplete or missing files are transferred — previously copied files are not re-transferred.  
- **Disk space errors are reported.** If the destination device runs out of disk space during a copy, the operation fails with an error rather than hanging.  
- **Transport-level resilience.** The underlying transport layer handles low-level packet retransmission transparently. Minor network glitches (such as a single dropped packet) do not cause the operation to fail. However, sustained connectivity loss will eventually cause an error.  
- **Recommended retry pattern.** After a `WdRemoteCopy` failure, simply re-call `WdRemoteCopy` with the same parameters. Delta copy behavior minimizes redundant work by only transferring files that are missing or incomplete on the destination.  

## Cancellation

The Xbox PC Remote Iteration API provides a handle-based cancellation model for long-running copy operations. The caller is responsible for the handle lifecycle:  

1. Create a handle by calling [WdCreateCancellationHandle](functions/wdcreatecancellationhandle.md).  
2. Pass the handle to [WdRemoteCopy](functions/wdremotecopy.md) via the `cancellationHandle` parameter.  
3. From a separate thread, call [WdCancelRemoteCopy](functions/wdcancelremotecopy.md) with the handle to cancel the in-progress copy. `WdCancelRemoteCopy` is non-blocking. After cancellation is signaled, `WdRemoteCopy` completes the cancellation and returns `S_OK`.  
4. After `WdRemoteCopy` returns, close the handle by calling [WdCloseCancellationHandle](functions/wdclosecancellationhandle.md).

If multiple components need to reference the same cancellation handle, use [WdDuplicateCancellationHandle](functions/wdduplicatecancellationhandle.md) to duplicate it. Each copy must be closed independently.  

## Common Roots  

Common roots are pre-configured known locations on the remote device where games are typically copied to or launched from. Instead of specifying a full absolute path, callers can refer to these locations by alias using the `commonRootAlias` field in [WdCopyOptions](structs/wdcopyoptions.md) or [WdLaunchOptions](structs/wdlaunchoptions.md).  

If `destinationPath` is an absolute path, the `commonRootAlias` is ignored. When `destinationPath` is a relative path, it is resolved against the common root identified by the alias. If no alias is specified, the default common root location is used.  

## Error codes

For a complete list of API-specific error codes, including descriptions, root causes, and troubleshooting guidance, see [Xbox PC Remote Iteration API Error Codes](error-codes.md).  

## Versioning, Servicing, and Distribution

The Remote Iteration Tools (RIT) API follows **Semantic Versioning 2.0.0** (`MAJOR.MINOR.PATCH`) to provide clear expectations around compatibility, upgrades, and long-term support. All public RIT API libraries are distributed via **NuGet**, enabling standard dependency management and update workflows.

### Versioning Model

#### PATCH Releases 
`PATCH` updates deliver bug fixes and reliability improvements. These updates do **not** change API contracts or runtime behavior and are safe drop-in updates. Updating to a newer `PATCH` version does not require code changes.

#### MINOR Releases
`MINOR` updates introduce new APIs or evolve existing functionality in a backward-compatible manner. When APIs are planned for future change or removal, they are clearly marked as deprecated, giving developers time to migrate. Dependency updates are reviewed to ensure compatibility within the same `MAJOR` version.

#### MAJOR Releases
`MAJOR` updates represent intentional breaking changes. These releases may require code changes or dependency updates and are accompanied by clear migration guidance. Upgrading to a new `MAJOR` version is treated as an explicit, opt-in decision aligned with normal validation and release cycles.

### Servicing and Support Model
Once a `MAJOR` or `MINOR` version of the RIT API is publicly released, it enters an active servicing period with a target support window of approximately **18 months**. During this time:

- `PATCH` releases are greenlit to fix bugs and improve reliability for supported versions.
- As new versions are released, and patches and minor changes improve existing versions and fix bugs, multiple `MAJOR` and `MINOR` versions may be serviced concurrently.
- `PATCH` releases do **not** extend the servicing lifetime of a `MAJOR` or `MINOR` version.
- New features are introduced only in newer `MINOR` or `MAJOR` releases and are not backported.

After the servicing window ends, the version is retired and developers are expected to migrate to a newer supported `MAJOR` or `MINOR` release.

### Upgrade Expectations
Developers are encouraged to stay current within a `MAJOR` version by adopting `PATCH` and `MINOR` updates. `MAJOR` version upgrades should be planned and validated explicitly to ensure compatibility with production workflows.

### API and wdEndpoint Version Compatibility  
The RIT API client library and the `wdEndpoint` running on the remote device should always be kept at compatible versions. Using a newer API version with an older `wdEndpoint` may result in `E_SERVERTOOOLD` errors or unexpected behavior. To guarantee correct behavior, full backward compatibility, and support for the latest API features, it is recommended to update `wdEndpoint` on all remote devices whenever the API client library is updated. Refer to the NuGet package release notes for minimum `wdEndpoint` version requirements.

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **NuGet Package** | [Microsoft.GDK.RemoteIterationClientApi](https://aka.ms/GameDevRemoteAPI) |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |

## See also  

- [WdRemoteCopy](functions/wdremotecopy.md)  
- [WdCancelRemoteCopy](functions/wdcancelremotecopy.md)  
- [WdCreateCancellationHandle](functions/wdcreatecancellationhandle.md)  
- [WdLaunchRemoteGame](functions/wdlaunchremotegame.md)  
- [WdRegisterRemoteXboxGame](functions/wdregisterremotexboxgame.md)  
