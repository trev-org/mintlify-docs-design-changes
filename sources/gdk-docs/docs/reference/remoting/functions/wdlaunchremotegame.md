---
author: Timberhofmandi
title: "WdLaunchRemoteGame"
description: "Launches a game on a remote device."
kindex: WdLaunchRemoteGame
ms.topic: reference
edited: 03/04/2026
applies-to: pc-gdk
ms.date: '03/04/2026'
permissioned-type: public
---

# WdLaunchRemoteGame  

Launches a game on a remote device.  

## Syntax  
  
```cpp
HRESULT WdLaunchRemoteGame(  
         _In_z_ const char* remoteDevice,  
         _In_z_ const char* remotePath,  
         _In_opt_z_ const char* args,  
         _In_opt_ const WdLaunchOptions* launchOptions,  
         _Out_opt_ uint32_t* processId,  
         _Out_opt_ uint32_t* threadId  
);  
```
  
### Parameters  
  
`_In_z_ remoteDevice`  
Type: **const char\***  

The hostname or IP address of the remote device (e.g., `"192.168.1.100"` or `"MyDevKit"`).  

`_In_z_ remotePath`  
Type: **const char\***  

The path to the game executable on the remote device. Can be an absolute path (e.g., `"D:\\Games\\MyGame\\game.exe"`) or a relative path that resolves against the common root (e.g., `"MyGame\\game.exe"`).  

`_In_opt_z_ args`  
Type: **const char\***  

Optional. Command-line arguments to pass to the game executable (e.g., `"-windowed -debug"`). Pass `nullptr` if no arguments are needed.  

`_In_opt_ launchOptions`  
Type: **[WdLaunchOptions](../structs/wdlaunchoptions.md)\***  

Optional. Specifies launch mode and common root alias. Pass `nullptr` to use default settings (`Immediate` launch, default common root).

`_Out_opt_ processId`  
Type: **uint32_t\***  

Optional. Receives the process ID of the launched game. Pass `nullptr` if the process ID is not needed.  

`_Out_opt_ threadId`  
Type: **uint32_t\***  

Optional. Receives the thread ID of the launched game's main thread. Pass `nullptr` if the thread ID is not needed.  

### Return value  

Type: **HRESULT**  

Returns `S_OK` if successful; otherwise, returns an error code.  

#### Error codes  

| Code | Value | Description | Root Cause | Troubleshooting |  
| --- | --- | --- | --- | --- |  
| E_GAMEFILEPATHNOTEXIST | 0x8C114010 | Game file path does not exist. | Provided game executable or package path is invalid or inaccessible on the remote machine. | Validate the path exists on the remote device; Confirm the copy operation succeeded |    
| E_CONNECTIONERROR | 0x8C114014 | Connection error. | Generic failure when establishing the network connection (transport‑level failure), unrelated to IP address validity or remote machine name resolution | Check network connectivity, firewall rules, service availability on the remote machine; Check visibility between devices, they should be able to ping each other; Retry the connection with logging enabled. |  
| E_NAMERESOLUTIONFAILED | 0x8C114012 | Could not resolve the remote machine name. | Hostname cannot be resolved via DNS or local name resolution. | Verify hostname spelling, DNS configuration, and network connectivity.; Use IP address to isolate name resolution issues. |  
| E_INVALIDADDRESS | 0x8C114013 | Invalid address. | Incorrect, malformed or unsupported network address supplied (e.g., bad IP format, wrong IP or unsupported protocol). | Confirm the right IP address; Correct the address format and ensure it uses a IPv4 protocol |  
| E_CLIENTNOTAUTHORIZED | 0x8C114008 | Device rejected client. | The client is not on the list of trusted clients of the device. Connection attempt was started before completing the pairing process | Complete pin pairing process successfully; Execute the connection request again |  
| E_SERVERNOTAUTHORIZED | 0x8C114009 | Client rejected device. | The target device is not on the list of trusted endpoints of the client. Connection attempt was started before completing the pairing process | Complete pin pairing process successfully; Execute the connection request again |  
| E_SERVERTOOOLD | 0x8C114011 | The server version is too old for this client. | API version on the client side is newer than the endpoint version on the remote device | Update the wdEndpoint on the remote machine to a compatible version |  
| E_ADMIN_REQUIRED | 0x8C114016 | Administrator privileges required. | Endpoint is not running with elevated privileges and the operation requires Administrator level permissions | Re-run the endpoint as Administrator |  

## Remarks  

Only one game process may be running on the remote device at a time. If a game is already running, this function will automatically terminate it and launch it again. The existing game can be terminated using [WdTerminateRemoteGame](wdterminateremotegame.md) before launching a new one.  

When launched with [WdLaunchMode::Suspended](../enums/wdlaunchmode.md), the game process starts in a suspended state. Use [WdResumeRemoteGame](wdresumeremotegame.md) to resume execution. This is useful for attaching a debugger before the game begins executing.  

## Examples  

### Example 1: Launch a game on a remote device  

Launches a previously copied game executable using default settings (immediate execution, default common root).  

```cpp
// LaunchGame.cpp
// Launches a game executable on a remote device.
// Build: Link against wdremoteapi.lib

#include <windows.h>
#include <stdio.h>
#include "WdRemoteIteration.h"

int main()
{
    // TODO: Replace with your remote device IP address or hostname
    const char* remoteDevice = "192.168.1.100";

    // TODO: Replace with the path to your game executable on the remote device.
    // Relative paths resolve against the default common root.
    const char* remotePath = "MyGame\\Binaries\\MyGame.exe";

    uint32_t processId = 0;
    uint32_t threadId  = 0;

    HRESULT hr = WdLaunchRemoteGame(
        remoteDevice,
        remotePath,
        nullptr,       // args — no command-line arguments
        nullptr,       // launchOptions — defaults to Immediate mode, default common root
        &processId,
        &threadId);

    if (SUCCEEDED(hr))
    {
        printf("Game launched — PID: %u, TID: %u\n", processId, threadId);
    }
    else
    {
        printf("Launch failed: HRESULT 0x%08X\n", hr);
    }

    return hr;
}
```

### Example 2: Launch in suspended mode for debugging  

Launches the game in a suspended state so a debugger can be attached before execution begins. After the debugger is connected, the user presses Enter to resume the process.  

```cpp
// LaunchSuspended.cpp
// Launches a game in suspended mode, waits for debugger attach, then resumes.
// Build: Link against wdremoteapi.lib

#include <windows.h>
#include <stdio.h>
#include "WdRemoteIteration.h"

int main()
{
    const char* remoteDevice = "192.168.1.100";
    const char* remotePath   = "MyGame\\Binaries\\MyGame.exe";

    WdLaunchOptions launchOptions = {};
    launchOptions.launchMode     = WdLaunchMode::Suspended;
    launchOptions.commonRootAlias = nullptr;  // Use default common root

    uint32_t processId = 0;
    uint32_t threadId  = 0;

    HRESULT hr = WdLaunchRemoteGame(
        remoteDevice,
        remotePath,
        "-debug -log",    // Command-line arguments passed to the executable
        &launchOptions,
        &processId,
        &threadId);

    if (FAILED(hr))
    {
        printf("Launch failed: HRESULT 0x%08X\n", hr);
        return hr;
    }

    printf("Game suspended — PID: %u\n", processId);
    printf("Attach your debugger to the remote process, then press Enter to resume...\n");
    getchar();

    hr = WdResumeRemoteGame(remoteDevice);
    if (SUCCEEDED(hr))
    {
        printf("Game resumed.\n");
    }
    else
    {
        printf("Resume failed: HRESULT 0x%08X\n", hr);
    }

    return hr;
}
```

### Example 3: Copy and launch workflow  

Demonstrates the typical iteration cycle: copy game files to the remote device, then launch the executable. This is the most common end-to-end workflow for the Xbox PC Remote Iteration API.  

```cpp
// CopyAndLaunch.cpp
// Copies game files to a remote device, then launches the game.
// Build: Link against wdremoteapi.lib

#include <windows.h>
#include <stdio.h>
#include "WdRemoteIteration.h"

int main()
{
    // TODO: Replace these values with your own
    const char* remoteDevice   = "192.168.1.100";
    const char* localBuildPath = "C:\\builds\\MyGame";
    const char* gameFolderName = "MyGame";
    const char* gameExePath    = "MyGame\\Binaries\\MyGame.exe";

    // Step 1: Copy game files to the remote device
    printf("Copying files...\n");
    HRESULT hr = WdRemoteCopy(
        remoteDevice,
        localBuildPath,
        gameFolderName,
        nullptr, nullptr, nullptr, nullptr);

    if (FAILED(hr))
    {
        printf("Copy failed: HRESULT 0x%08X\n", hr);
        return hr;
    }

    // Step 2: Launch the game
    printf("Launching game...\n");
    hr = WdLaunchRemoteGame(
        remoteDevice,
        gameExePath,
        nullptr, nullptr, nullptr, nullptr);

    if (FAILED(hr))
    {
        printf("Launch failed: HRESULT 0x%08X\n", hr);
        return hr;
    }

    printf("Game files copied and launched successfully.\n");
    return 0;
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

- [WdResumeRemoteGame](wdresumeremotegame.md)  
- [WdTerminateRemoteGame](wdterminateremotegame.md)  
- [WdLaunchOptions](../structs/wdlaunchoptions.md)  
- [WdLaunchMode](../enums/wdlaunchmode.md)  
- [Xbox PC Remote Iteration API Error Codes](../error-codes.md)
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)
