---
author: Timberhofmandi
title: "WdTerminateRemoteGame"
description: "Terminates a running game on a remote device."
kindex: WdTerminateRemoteGame
ms.topic: reference
edited: 03/04/2026
applies-to: pc-gdk
ms.date: '03/04/2026'
permissioned-type: public
---

# WdTerminateRemoteGame  

Terminates the last game launched using [WdLaunchRemoteGame](wdlaunchremotegame.md) on a remote device.  

## Syntax  
  
```cpp
HRESULT WdTerminateRemoteGame(  
         _In_z_ const char* remoteDevice  
);  
```
  
### Parameters  
  
`_In_z_ remoteDevice`  
Type: **const char\***  

The hostname or IP address of the remote device (e.g., `"192.168.1.100"` or `"MyDevKit"`).  

### Return value

Type: **HRESULT**  

Returns `S_OK` if successful; otherwise, returns an error code.  

#### Error codes  

| Code | Value | Description | Root Cause | Troubleshooting |  
| --- | --- | --- | --- | --- |  
| E_GAMENOTRUNNING | 0x8C11400C | No game process is running. | There is no game process currently executing that can be suspended or terminated | Verify processes currently running; Launch the game before exercising game-process dependent API |  
| E_CONNECTIONERROR | 0x8C114014 | Connection error. | Generic failure when establishing the network connection (transport‑level failure), unrelated to ip address validity or remote machine name resolution | Check network connectivity, firewall rules, service availability on the remote machine; Check visibility between devices, they should be able to ping each other; Retry the connection with logging enabled. |  

## Remarks  

Use this function to terminate the last game that was launched via [WdLaunchRemoteGame](wdlaunchremotegame.md). The function waits for the game process to exit.

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdLaunchRemoteGame](wdlaunchremotegame.md)  
- [WdResumeRemoteGame](wdresumeremotegame.md)  
- [Xbox PC Remote Iteration API Error Codes](../error-codes.md)
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)
