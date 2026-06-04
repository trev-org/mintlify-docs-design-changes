---
author: Timberhofmandi
title: "Xbox PC Remote Tools quickstart guide"
description: "Xbox PC Remote Tools Quickstart Guide"
ms.author: bunmiogidan
ms.topic: article
edited: 10/17/2025
ms.date: '10/17/2025'
permissioned-type: public
---

# Xbox PC Remote Tools quickstart guide

> [!IMPORTANT]
> The Xbox PC Toolbox app is in preview. Download it from the [Microsoft Store](https://aka.ms/toolboxinstaller) on Windows.

## Cleanup previous preview versions

<a id="CLEANUP"></a>

> [!NOTE]
> Skip this section if you didn't participate in earlier previews. Otherwise, follow these cleanup steps.


### Use a PowerShell script

1. Download the [Cleanup Script](https://aka.ms/CleanupScript) to both devices.

1. On the development PC:
     * Open PowerShell or PowerShell 7 as an administrator
     * Go to the downloaded location (for example: `cd downloads`)
     * Run this command:

```powershell
      pwsh Remove-XboxPCDeviceArtifacts.ps1 -Target devpc
```

1. On the target device: 
    * Copy the script to the target device by using a USB stick or nearby sharing
    * Open PowerShell or PowerShell 7 as an administrator
    * Go to the downloaded location (for example: `cd downloads`)
    * Run this command:

```powershell
pwsh Remove-XboxPCDeviceArtifacts.ps1 -Target targetdevice
```

## Install and set up

### Prerequisites

* Both devices need internet access during setup.
* Install the Xbox PC Toolbox app from the Microsoft Store on both devices.
* Devices must share the same local network and be able to ping each other.
* Get the Xbox PC Toolbox application from the RETAIL sandbox. After setup, you can switch to any developer sandbox. 
* Only Windows 10 or Windows 11 Home or Pro editions are supported.
* You need physical access to both devices during setup.
* Target devices joined to Microsoft Entra ID are supported via Lightweight provisioning only. Fully Managed isn't available for Entra-joined devices. The app automatically detects this condition and disables the Fully Managed option during setup.
* Administrator access is required on both devices.

### Changes made by Xbox PC Toolbox setup

#### Development PC configuration changes

* Enables Developer Mode.  
* Installs PowerShell modules in your Documents folder.
* Sets the network adapter's profile to private.  
* Enables file and printer sharing and network discovery on private networks. 
* Enables Windows Remote Management (WinRM). 
* Installs OpenSSH Client and configures `ssh-agent` to start automatically. 
* Creates SSH keys for use.

#### Target device configuration changes applied during setup

* Enables Developer Mode.
* Installs PowerShell modules in your Documents folder.
* Sets the network adapter's profile to private.
* Enables file and printer sharing and network discovery on private networks.
* Enables WinRM.
* Installs OpenSSH Server and configures `sshd` to start automatically.
* Adds a firewall rule for SSH server on port 22.
* Removes sleep and display timeouts.
* Configures SSH for PowerShell subsystem and key-based authentication.
* Installs Visual C++ Runtime Redistributable.
* Sets a netsh HTTPS rule on port 4275 for `wdEndpoint` to listen for incoming connections.

For known issues and frequently asked questions, see the [Xbox PC Remote Tools FAQ guide](../get-started-with-remote-devices/remote-win-gamedev-tools-faq.md).
