---
author: Timberhofmandi
title: "Xbox PC Remote Iteration API Error Codes"
description: "Lists all error codes returned by the Xbox PC Remote Iteration API, including descriptions, root causes, and troubleshooting guidance."
kindex: Xbox PC Remote Iteration API Error Codes
ms.topic: reference
edited: 03/05/2026
applies-to: pc-gdk
ms.date: '03/05/2026'
permissioned-type: public
---

# Xbox PC Remote Iteration API Error Codes  

The following table lists all error codes specific to the Xbox PC Remote Iteration API. These error codes are returned as `HRESULT` values from API functions. In addition to these API-specific codes, functions may also return standard `HRESULT` values such as `E_INVALIDARG` or `E_OUTOFMEMORY`.  

| Error Name | Hex Value | Description | Root Cause | Troubleshooting |  
| --- | --- | --- | --- | --- |  
| E_PROCESSNOTFOUND | 0x8C114002 | Process not found. | A process matching the process id provided does not exist | Verify the process id of the target process by checking the list of running processes; Provide a valid process id of an active process |  
| E_INVALIDPROCESSID | 0x8C114003 | Invalid process ID. | The process id provided does not follow the enforced format, it must be a numerical value | Provide a valid process id containing only numbers |  
| E_INVALIDPIN | 0x8C114004 | Pin is not in proper format. | The pin provided does not follow the enforced format, such as making it longer or shorter than 6 characters, or using unsupported unicode characters | Input the correct pin on the client device |  
| E_INVALIDSSHKEY | 0x8C114005 | SSH key is not in expected form. | The provided SSH Key field does not follow the expected format: key type - Base64 encoded public key - comment | Generate a valid SSH public key; Execute the pairing again providing the path to the valid key |  
| E_PAIRINGTIMEOUT | 0x8C114006 | Pair mode exceeded maximum time. | User will see this if taking more than 2 minutes to complete the pin pairing | Restart pin pairing process; Input pin on client device before timeout (2 min) |  
| E_TOOMANYFAILURES | 0x8C114007 | Too many failed PIN attempts. | User will see this if they have failed to input the correct pin 3 times or more | Restart pin pairing process; Input correct pin on client device |  
| E_CLIENTNOTAUTHORIZED | 0x8C114008 | Device rejected client. | The client is not on the list of trusted clients of the device. Connection attempt was started before completing the pairing process | Complete pin pairing process successfully; Execute the connection request again |  
| E_SERVERNOTAUTHORIZED | 0x8C114009 | Client rejected device. | The target device is not on the list of trusted endpoints of the client. Connection attempt was started before completing the pairing process | Complete pin pairing process successfully; Execute the connection request again |  
| E_SSHKEYTOOLARGE | 0x8C11400A | SSH key too large. | SSH key file provided exceeds endpoint-supported size of 16,384 bytes (commonly due to legacy RSA keys or malformed key blobs). | Generate a new SSH key using a supported algorithm and size (e.g., ED25519 or RSA‑2048); Ensure the correct key is specified for the RIT connection |  
| E_GAMENOTSUSPENDED | 0x8C11400B | Specified process cannot be resumed. | Attempt to resume a process that is not in a suspended state or whose suspend context is no longer valid. | Verify the process state before resuming; Ensure no other tool has already resumed or terminated the process | 
| E_GAMEOVERSUSPENDED | 0x8C11400D | The thread suspend count is not zero. | Thread has been suspended multiple times and has not been fully resumed. Windows thread suspend semantics require balanced resume calls. | Resume the thread repeatedly until suspend count reaches zero, or restart the process to reset thread state.; Alternatively restart the process to reset thread state |  
| E_GAMESTILLRUNNING | 0x8C11400E | Only one game may run at a time. | Attempt to launch a new process when a process registered as a game is already running. RIT enforces a single active game process to support one game at a time (OGAT) setting | Ensure there is no previous game process running; Terminate the currently running game (if any) before launching another; Retry launching the game process |  
| E_GAMEEXITABANDONED | 0x8C11400F | Abandoned wait for game to exit. | Game process termination hung and there was no exit code returned | Check if the game process is still running; Verify if the right process id and thread id were provided for termination; Retry to terminate the process |  
| E_GAMEFILEPATHNOTEXIST | 0x8C114010 | Game file path does not exist. | Provided game executable or package path is invalid or inaccessible on the remote machine. | Validate the path exists on the remote device; Confirm deployment succeeded |  
| E_SERVERTOOOLD | 0x8C114011 | The server version is too old for this client. | API version on the client side is newer than the endpoint version on the remote device | Update the wdEndpoint on the remote machine to the latest version |  
| E_NAMERESOLUTIONFAILED | 0x8C114012 | Could not resolve the remote machine name. | Hostname cannot be resolved via DNS or local name resolution. | Verify hostname spelling, DNS configuration, and network connectivity.; Use IP address to isolate name resolution issues. |  
| E_INVALIDADDRESS | 0x8C114013 | Invalid address. | Incorrect, malformed or unsupported network address supplied (e.g., bad IP format, wrong IP or unsupported protocol). | Confirm the right IP address; Correct the address format and ensure it uses a IPv4 protocol |  
| E_CONNECTIONERROR | 0x8C114014 | Connection error. | Generic failure when establishing the network connection (transport‑level failure), unrelated to ip address validity or remote machine name resolution | Check network connectivity, firewall rules, service availability on the remote machine; Check visibility between devices, they should be able to ping each other; Retry the connection with logging enabled. |  
| E_LISTENERALREADYRUNNING | 0x8C114015 | Another listener is active. | Another instance of the endpoint is already running on the remote device | - Stop the existing running instance of the endpoint before launching a new one; Alternatively, use the instance of the endpoint already running instead of launching a new one |  
| E_ADMIN_REQUIRED | 0x8C114016 | Administrator privileges required. | Endpoint is not running with elevated privileges and the operation requires Administrator level permissions | Re-run the endpoint as Administrator |  
| E_INVALIDTHREADID | 0x8C114017 | Invalid thread ID. | Thread ID provided does not follow the expected format, it must be a numerical value | Provide a valid thread id containing only numbers |  
| E_INVALIDPIDTID_PAIR | 0x8C114018 | Given process ID is not associated with given thread ID. | Thread ID exists, but it does not belong to the specified process. | Re‑query thread list from the process; Ensure IDs are not cached or stale.; Validate that the thread ID was obtained from the correct process context. |  
| E_THREADNOTFOUND | 0x8C114019 | Thread not found. | Provided thread ID does not correspond to any existing thread in the target process. Thread may have already exited or was never valid. | Re‑query thread list from the process; Ensure IDs are not cached or stale.; Validate that the thread ID was obtained from the correct process context. |  

## See also  

- [Xbox PC Remote Iteration API](remoteiteration_members.md)  
