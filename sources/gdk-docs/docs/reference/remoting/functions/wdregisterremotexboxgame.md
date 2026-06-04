---
author: Timberhofmandi
title: "WdRegisterRemoteXboxGame"
description: "Registers a game on a remote device."
kindex: WdRegisterRemoteXboxGame
ms.topic: reference
edited: 03/04/2026
applies-to: pc-gdk
ms.date: '03/04/2026'
permissioned-type: public
---

# WdRegisterRemoteXboxGame  

Registers a game on a remote device.

> [!IMPORTANT]  
> `WdRegisterRemoteXboxGame` Is currently not implemented and will return a S_OK when called. It will be added in a later version of the API.

## Syntax  
  
```cpp
HRESULT WdRegisterRemoteXboxGame(  
         _In_z_ const char* remoteDevice,  
         _In_z_ const char* remoteFolderPath,  
         _In_opt_z_ const char* commonRootAlias  
);  
```
  
### Parameters  
  
`_In_z_ remoteDevice`  
Type: **const char\***  

The hostname or IP address of the remote device (e.g., `"192.168.1.100"` or `"MyDevKit"`).  

`_In_z_ remoteFolderPath`  
Type: **const char\***  

The path on the remote device to the folder containing the game to register (e.g., `"D:\\Games\\MyGame"` or `"MyGame"` when using a common root). If `remoteFolderPath` is an absolute path, `commonRootAlias` will be ignored.

`_In_opt_z_ commonRootAlias`  
Type: **const char\***  

Optional. An alias for a common root directory on the remote device. Pass `nullptr` to use the default common root location.  

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
| E_ADMIN_REQUIRED | 0x8C114016 | Administrator privileges required. | Endpoint is not running with elevated privileges and the operation requires Administrator level permissions | Re-run the endpoint as Administrator |  

## Remarks  

`WdRegisterRemoteXboxGame` is intended to register a deployed game package on the remote device. The `remoteFolderPath` must point to a folder that contains a valid game package.  

> [!NOTE]  
> Registration is not currently required to launch a game with [WdLaunchRemoteGame](wdlaunchremotegame.md). When this function is fully implemented in a future version, registration will be required before launching games that use Xbox services or OGAT packaging.  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdLaunchRemoteGame](wdlaunchremotegame.md)  
- [WdRemoteCopy](wdremotecopy.md)  
- [Xbox PC Remote Iteration API Error Codes](../error-codes.md)
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)
