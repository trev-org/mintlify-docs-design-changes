---
author: Timberhofmandi
title: "Xbox PC Remote Tools overview"
description: "General overview of the Xbox PC Remote Tools and how they work"
kindex: 
- Xbox PC Remote
- Remote development
- Remote iteration
- Remote debugging
- Xbox Device Manager
- Xbox PC Toolbox app
- wdRemote
- wdEndpoint
ms.author: femontoya
ms.topic: article
edited: 10/27/2025
ms.date: '08/27/2025'
permissioned-type: public
---

# Xbox PC Remote Tools overview

> [!IMPORTANT]
> The Xbox PC Toolbox app is in preview. Download it from the [Microsoft Store](https://aka.ms/toolboxinstaller) on Windows.

## Overview

The Xbox PC Remote Tools streamline game development workflows on remote Windows devices, including handhelds, desktops, and test machines. These tools support secure provisioning, acquisition, iteration, and debugging over a local area network (LAN). They reduce friction during remote iteration, improve setup consistency, and support scalable workflows for studios of all sizes.

## Core components

### Xbox PC Toolbox

Xbox PC Toolbox is a graphical tool that simplifies provisioning and acquisition. It reduces setup complexity by integrating with WinGet, Desired State Configuration (DSC), and other system components. The app automates configuration and streamlines workflows.

### Xbox Device Management PowerShell Module (XDM)

XDM is a PowerShell module that establishes secure, encrypted communication between development PCs and remote devices. XDM manages device acquisition, OpenSSH configuration, and trust relationships.

### Remote iteration command-line tools: wdRemote.exe and wdEndpoint.exe

The pairing process is now handled by `wdRemote` and `wdEndpoint`. XDM applies the process to establish secure transport. They use XDM’s secure infrastructure to set up secure transport that supports fast iteration cycles without requiring full reinstalls.

* **wdRemote.exe**: Runs on the development PC. Sends deployment, launch, and terminate commands.
* **wdEndpoint.exe**: Runs on the target device to receive and execute commands.

## Key capabilities

### Secure communication

Only the portion of the connection intended for remote command execution through PowerShell remoting uses OpenSSH. The remote iteration connection for deploy, launch, and terminate operations is HTTPS-based. Both methods are encrypted and secure. OpenSSH-based connections ensure safe data transfer between your development PC and target devices. This protection keeps sensitive game builds and telemetry data from interception or tampering during remote sessions.

### Incremental deployment

Deploy only the changed portions of a game instead of reinstalling the entire build. This approach reduces iteration time, especially during frequent testing cycles.

### Remote execution

Launch and test games directly on remote target devices from your local development environment. This approach eliminates the need for physical access to the device, streamlining debugging and validation. The remote execution functionality supports the one game at a time guarantee (OGAT) and automatically terminates games previously running before launching a new one.

### Device management

Track, monitor, and manage multiple target devices from the device workspace, including status and connectivity. You can also unpair devices, edit device names, and update IP addresses or connection settings directly from the app.

### Automated setup

Simplify the initial configuration of remote development environments with minimal manual steps. Automated setup includes provisioning dependencies, environment variables, and secure access credentials. This process reduces setup errors and saves time.

## Limitations and dependencies

* Both devices must have internet access during setup.
* Devices must share the same local network and be able to ping each other.
* Acquire the Xbox PC Toolbox app from the RETAIL sandbox. After setup, you can switch to any developer sandbox.
* Only devices running Windows 10 or Windows 11 (Home or Pro editions) are supported.
* You need physical access to both devices during setup.
* You need administrator-level access on both devices to complete setup.

## High-level remote iteration workflow

### Initial setup (one-time)

1. Download Xbox PC Toolbox to the development PC from the Microsoft Store.
2. Launch the app on the development PC and complete the setup flow for development device.
3. Launch the app on the remote target device and complete the setup flow for remote iteration device.
4. Complete the pairing flow in the app on both devices and test the connection.
5. Install remote iteration tools on both devices by using the app.

### Development workflow (ongoing)

1. Use `wdRemote` from the development PC to:

   * Deploy game builds incrementally.
   * Launch games for testing.
   * Terminate games when needed.
   * Repeat as needed during development.

## Best practices

* Avoid reimaging target devices to Windows Pro, especially on handheld devices, as it might introduce unnecessary processes and reduce available resources.
* Use the Xbox PC Toolbox app for remote provisioning and acquisition, including secure channel setup, dependency installation, and device configuration.
* Test connectivity by using the Xbox PC Toolbox app before deploying games.
* Use XDM-enabled remote sessions and PowerShell Remoting to execute commands on the target device.
* Use `wdRemote` and `wdEndpoint` for game deployment, launching, and termination.
* Ensure adequate disk space on the target device for game deployments.
* Use the game termination feature for clean testing cycles.

## Getting started

To start provisioning and iterating on remote Windows devices, see the [Xbox PC Remote Tools how-to guide](../tutorials/get-started-with-remote-devices/remote-win-gamedev-how-to-use-tools.md).

For the latest features and updates, see the [Xbox PC Remote Tools Release Notes](../tutorials/get-started-with-remote-devices/release-notes/rwd-release-notes-2603.md).
