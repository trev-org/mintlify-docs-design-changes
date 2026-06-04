---
author: Timberhofmandi
title: "WdRemoteCopy"
description: "Copies files between a local PC and a remote device."
kindex: WdRemoteCopy
ms.topic: reference
edited: 03/04/2026
applies-to: pc-gdk
ms.date: '03/04/2026'
permissioned-type: public
---

# WdRemoteCopy  

Copies files between a local PC and a remote device.  

## Syntax  
  
```cpp
HRESULT WdRemoteCopy(  
         _In_z_ const char* remoteDevice,  
         _In_z_ const char* sourcePath,  
         _In_z_ const char* destinationPath,  
         _In_opt_ const WdCopyOptions* copyOptions,  
         _In_opt_ const WdCopySearchOptions* searchOptions,  
         _In_opt_ const WdCopyStatusCallbacks* statusCallbacks,  
         _In_opt_ WdCancellationHandle cancellationHandle  
);  
```
  
### Parameters  
  
`_In_z_ remoteDevice`  
Type: **const char\***  

The hostname or IP address of the remote device (e.g., `"192.168.1.100"` or `"MyDevKit"`).  

`_In_z_ sourcePath`  
Type: **const char\***  

The source path to copy from (e.g., `"C:\\builds\\MyGame"` when copying to a remote device).  

`_In_z_ destinationPath`  
Type: **const char\***  

The destination path to copy to. Can be an absolute path (e.g., `"D:\\Games\\MyGame"`) or a relative path that resolves against the common root (e.g., `"MyGame"`).  

`_In_opt_ copyOptions`  
Type: **const [WdCopyOptions](../structs/wdcopyoptions.md)\***  

Optional. Specifies the copy direction and common root alias. Pass `nullptr` to use default settings (`CopyTo`, default common root location if `destinationPath` is a relative path).  

`_In_opt_ searchOptions`  
Type: **const [WdCopySearchOptions](../structs/wdcopysearchoptions.md)\***  

Optional. Specifies file include/exclude patterns and attribute filters (e.g., `"*.exe;*.dll"` to copy only executables). Pass `nullptr` to copy all files.  

`_In_opt_ statusCallbacks`  
Type: **const [WdCopyStatusCallbacks](../structs/wdcopystatuscallbacks.md)\***  

Optional. Specifies callback functions for receiving progress updates and diagnostic messages during the copy operation. Pass `nullptr` to receive no callbacks.  

`_In_opt_ cancellationHandle`  
Type: **[WdCancellationHandle](../structs/wdcancellationhandle.md)**  

Optional. A cancellation handle created by [WdCreateCancellationHandle](wdcreatecancellationhandle.md) that can be passed to [WdCancelRemoteCopy](wdcancelremotecopy.md) from a separate thread to cancel the copy operation. Pass `nullptr` if cancellation is not needed.

### Return value  

Type: **HRESULT**  

Returns `S_OK` if successful; otherwise, returns an error code.  

#### Error codes  

| Code | Value | Description | Root Cause | Troubleshooting |  
| --- | --- | --- | --- | --- |  
| E_CONNECTIONERROR | 0x8C114014 | Connection error. | Generic failure when establishing the network connection (transport‑level failure), unrelated to ip address validity or remote machine name resolution | Check network connectivity, firewall rules, service availability on the remote machine; Check visibility between devices, they should be able to ping each other; Retry the connection with logging enabled. |  
| E_NAMERESOLUTIONFAILED | 0x8C114012 | Could not resolve the remote machine name. | Hostname cannot be resolved via DNS or local name resolution. | Verify hostname spelling, DNS configuration, and network connectivity.; Use IP address to isolate name resolution issues. |  
| E_INVALIDADDRESS | 0x8C114013 | Invalid address. | Incorrect, malformed or unsupported network address supplied (e.g., bad IP format, wrong IP or unsupported protocol). | Confirm the right IP address; Correct the address format and ensure it uses a IPv4 protocol |  
| E_CLIENTNOTAUTHORIZED | 0x8C114008 | Device rejected client. | The client is not on the list of trusted clients of the device. Connection attempt was started before completing the pairing process | Complete pin pairing process successfully; Execute the connection request again |  
| E_SERVERNOTAUTHORIZED | 0x8C114009 | Client rejected device. | The target device is not on the list of trusted endpoints of the client. Connection attempt was started before completing the pairing process | Complete pin pairing process successfully; Execute the connection request again |  
| E_SERVERTOOOLD | 0x8C114011 | The server version is too old for this client. | API version on the client side is newer than the endpoint version on the remote device | Update the wdEndpoint on the remote machine to a compatible version |  
| E_ADMIN_REQUIRED | 0x8C114016 | Administrator privileges required. | Endpoint is not running with elevated privileges and the operation requires Administrator level permissions | Re-run the endpoint as Administrator |  

## Remarks  

`WdRemoteCopy` is a synchronous, blocking call. It does not return until all files have been copied, the operation is cancelled via [WdCancelRemoteCopy](wdcancelremotecopy.md), or an error occurs.  

To enable cancellation, create a [WdCancellationHandle](../structs/wdcancellationhandle.md) using [WdCreateCancellationHandle](wdcreatecancellationhandle.md) before calling `WdRemoteCopy`, then pass it to [WdCancelRemoteCopy](wdcancelremotecopy.md) from a separate thread. After `WdRemoteCopy` returns, close the handle with [WdCloseCancellationHandle](wdclosecancellationhandle.md).  

The function will support bidirectional copy, however CopyFrom is currently not implemented and will return E_NOTIMPL if used. Use [WdCopyDirection::CopyTo](../enums/wdcopydirection.md) to push files from the local PC to the remote device. The default direction is `CopyTo`.

If `destinationPath` is an absolute path, the `commonRootAlias` in [WdCopyOptions](../structs/wdcopyoptions.md) is ignored. If `destinationPath` is a relative path, the default common root location is used unless a `commonRootAlias` is specified.  

To receive progress updates during the copy, provide a [WdCopyStatusCallbacks](../structs/wdcopystatuscallbacks.md) structure with callback function pointers.  

> [!IMPORTANT]  
> Only one `WdRemoteCopy` call may be active at a time, regardless of target device or destination path. Calling `WdRemoteCopy` while another copy is already in progress results in undefined behavior.  

`WdRemoteCopy` does not automatically retry on failure. If the operation fails due to a network interruption, the caller must re-invoke `WdRemoteCopy`. Files that were successfully copied before the failure remain on the destination — delta copy behavior ensures that only incomplete or missing files are re-transferred on retry. There is no timeout; the copy continues until completion, an error occurs, or it is cancelled.  

## Examples  

### Example 1: Basic file copy  

Copies a local build folder to a remote device using default settings. All files are copied with no filtering, progress reporting, or cancellation support.  

```cpp
// BasicCopy.cpp
// Copies a local build folder to a remote device.
// Build: Link against wdremoteapi.lib

#include <windows.h>
#include <stdio.h>
#include "WdRemoteIteration.h"

int main()
{
    // TODO: Replace with your remote device IP address or hostname
    const char* remoteDevice = "192.168.1.100";

    // TODO: Replace with the path to your local build output
    const char* sourcePath = "C:\\builds\\MyGame";

    // TODO: Replace with the desired folder name on the remote device.
    // Relative paths resolve against the default common root.
    const char* destinationPath = "MyGame";

    HRESULT hr = WdRemoteCopy(
        remoteDevice,
        sourcePath,
        destinationPath,
        nullptr,    // copyOptions — defaults to CopyTo direction, default common root
        nullptr,    // searchOptions — copies all files
        nullptr,    // statusCallbacks — no progress reporting
        nullptr);   // cancellationHandle — no cancellation support

    if (SUCCEEDED(hr))
    {
        printf("Copy completed successfully.\n");
    }
    else
    {
        printf("Copy failed: HRESULT 0x%08X\n", hr);
    }

    return hr;
}
```

### Example 2: Filtered copy with progress reporting  

Copies only specific file types while skipping debug artifacts and intermediate directories. A progress callback prints live transfer status to the console.  

```cpp
// FilteredCopyWithProgress.cpp
// Copies selected file types with live progress output.
// Build: Link against wdremoteapi.lib

#include <windows.h>
#include <stdio.h>
#include "WdRemoteIteration.h"

HRESULT OnProgress(
    size_t fileProgressCount,
    const WdCopyFileProgressInfo* fileUpdates,
    const WdCopyOperationSummary* summary,
    void* context)
{
    if (summary->totalByteCount > 0)
    {
        double pct = (double)summary->bytesTransferredCount
                   / summary->totalByteCount * 100.0;
        printf("\rProgress: %.1f%% (%llu/%llu files)",
               pct, summary->filesCompletedCount, summary->totalFileCount);
    }
    return S_OK;  // Return S_OK to continue; a failure code aborts the copy
}

int main()
{
    const char* remoteDevice = "192.168.1.100";
    const char* sourcePath   = "C:\\builds\\MyGame";
    const char* destPath     = "MyGame";

    // Only copy executables and data; skip debug symbols and temp files
    WdCopySearchOptions searchOptions = {};
    searchOptions.includeFilePattern   = "*.exe;*.dll;*.ini;*.pak";
    searchOptions.excludeFilePattern   = "*.pdb;*.log;*.tmp";
    searchOptions.excludeDirPattern    = ".vs;obj;Temp;Intermediate";
    searchOptions.includeFileAttributes = 0;  // No attribute-based include filter
    searchOptions.excludeFileAttributes = 0;  // No attribute-based exclude filter

    // Receive progress updates every 500 ms
    WdCopyStatusCallbacks callbacks = {};
    callbacks.copyFilesStatusCallback = OnProgress;
    callbacks.refreshRateMs           = 500;
    callbacks.copyErrorCallback       = nullptr;
    callbacks.context                 = nullptr;

    HRESULT hr = WdRemoteCopy(
        remoteDevice,
        sourcePath,
        destPath,
        nullptr,          // copyOptions — defaults
        &searchOptions,
        &callbacks,
        nullptr);         // cancellationHandle — no cancellation support

    printf("\n");  // Newline after carriage-return progress output

    if (SUCCEEDED(hr))
    {
        printf("Copy completed successfully.\n");
    }
    else
    {
        printf("Copy failed: HRESULT 0x%08X\n", hr);
    }

    return hr;
}
```

## Requirements

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdCancelRemoteCopy](wdcancelremotecopy.md)  
- [WdCancellationHandle](../structs/wdcancellationhandle.md)  
- [WdCreateCancellationHandle](wdcreatecancellationhandle.md)  
- [WdCloseCancellationHandle](wdclosecancellationhandle.md)  
- [WdCopyOptions](../structs/wdcopyoptions.md)  
- [WdCopySearchOptions](../structs/wdcopysearchoptions.md)  
- [WdCopyStatusCallbacks](../structs/wdcopystatuscallbacks.md)  
- [WdCopyDirection](../enums/wdcopydirection.md)  
- [Xbox PC Remote Iteration API Error Codes](../error-codes.md)
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)
