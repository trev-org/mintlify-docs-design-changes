---
author: Timberhofmandi
title: "WdResumeRemoteGame"
description: "Resumes a suspended game on a remote device."
kindex: WdResumeRemoteGame
ms.topic: reference
edited: 03/04/2026
applies-to: pc-gdk
ms.date: '03/04/2026'
permissioned-type: public
---

# WdResumeRemoteGame  

Resumes the last game launched in suspended mode with [WdLaunchRemoteGame](wdlaunchremotegame.md) on a remote device.  

## Syntax  
  
```cpp
HRESULT WdResumeRemoteGame(  
         _In_z_ const char* remoteDevice  
);  
```  
  
### Parameters  
  
`_In_z_ remoteDevice`  
Type: **const char\***  

The hostname or IP address of the remote deviceto resume the game on (e.g., `"192.168.1.100"` or `"MyDevKit"`).  

### Return value

Type: **HRESULT**  

Returns `S_OK` if successful; otherwise, returns an error code.  

#### Error codes  

| Code | Value | Description | Root Cause | Troubleshooting |  
| --- | --- | --- | --- | --- |  
| E_GAMENOTSUSPENDED | 0x8C11400B | Specified process cannot be resumed. | Attempt to resume a process that is not in a suspended state or whose suspend context is no longer valid. | Verify the process state before resuming; Ensure no other tool has already resumed or terminated the process |  
| E_GAMENOTRUNNING | 0x8C11400C | No game process is running. | There is no game process currently executing that can be suspended or terminated | Verify processes currently running; Launch the game before exercising game-process dependent API |  
| E_CONNECTIONERROR | 0x8C114014 | Connection error. | Generic failure when establishing the network connection (transport‑level failure), unrelated to ip address validity or remote machine name resolution | Check network connectivity, firewall rules, service availability on the remote machine; Check visibility between devices, they should be able to ping each other; Retry the connection with logging enabled. |  

## Remarks  

Use this function to resume the last game that was launched in suspended mode via [WdLaunchRemoteGame](wdlaunchremotegame.md) with [WdLaunchMode::Suspended](../enums/wdlaunchmode.md). This is typically done after attaching a debugger to the suspended process.

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdLaunchRemoteGame](wdlaunchremotegame.md)  
- [WdTerminateRemoteGame](wdterminateremotegame.md)  
- [WdLaunchMode](../enums/wdlaunchmode.md)  
- [Xbox PC Remote Iteration API Error Codes](../error-codes.md)
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)
