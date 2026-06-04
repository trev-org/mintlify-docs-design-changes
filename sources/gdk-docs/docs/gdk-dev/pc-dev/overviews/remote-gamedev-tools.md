---
author: stevenjpr
title: "Xbox PC Remote Tools"
description: "Describes the set of developer tools used to build games on remote Windows device"
kindex: 
- Xbox PC Remote
- Remote development
- Remote iteration
- Remote debugging
- Xbox Device Manager
- Xbox PC Toolbox app
- wdRemote
- wdEndpoint
ms.author: stevenpr
ms.topic: article
edited: 10/28/2025
ms.date: '10/21/2025'
permissioned-type: public
---

# Xbox PC Remote Tools

> [!IMPORTANT]
> The Xbox PC Toolbox app is in preview. Download it from the [Microsoft Store](https://aka.ms/toolboxinstaller) on Windows.


The Xbox PC Remote Tools help you streamline game development workflows on remote Windows devices, including handhelds, desktops, and test machines. The tools support secure provisioning, PIN pairing, acquisition, incremental game deployment, and game launch across a local area network (LAN). They reduce friction during remote iteration, improve setup consistency, and scale to meet the needs of studios of all sizes.

## Supported workflows

The Xbox PC Remote Tools support these workflows:

* **Provision devices**: Prepare a development PC and a target device for remote iteration.
* **Pair devices**: Establish a secure, encrypted, and authorized connection between the development PC and the target device.
* **Manage devices**: Unpair devices, edit device names, and update IP addresses or connection settings from the device workspace.
* **Deploy and manage games**: Incrementally deploy games, launch them, and terminate sessions by using the command-line tool.
* **Attach the Visual Studio debugger**: Use the Visual Studio 2022 debugger to attach to a game running on a remote Windows device.
* **Fully Managed**: Enables remote iteration workflows and device management capabilities by using PowerShell remoting over SSH.
* **Lightweight**: Enables remote iteration workflows (deploy, launch, and terminate) over HTTPS/TLS with a faster setup that doesn't require SSH configuration.

For prerequisites and installation steps, see the [Xbox PC Remote Tools quickstart guide](../tutorials/get-started-with-remote-devices/remote-win-gamedev-quickstart.md).

## Learn more

For detailed guidance, see the following articles:

[Overview of the Xbox PC Remote Tools](remote-win-gamedev.md)  
Provides an overview of the suite of development tools available to build games on remote Windows devices. The supported workflows are also described.

[How-To guide](../tutorials/get-started-with-remote-devices/remote-win-gamedev-how-to-use-tools.md)  
Step-by-step instructions for provisioning a development PC and a remote Windows device for game development.

[FAQ and Known Issues](../tutorials/get-started-with-remote-devices/remote-win-gamedev-tools-faq.md)  
Provides answers to common questions and a list of known issues when using the Xbox PC Remote Tools.

[Xbox PC Toolbox app](../../../tools/tools-pc/xboxpctoolbox/xboxpctoolbox.md)  
Describes how to provision and iterate on remote Windows devices by using the Xbox PC Toolbox graphical interface installed on the development PC and target device.

[Xbox PC Remote Iteration Command Line Tools (wdRemote.exe)](../../../tools/tools-pc/commandlinetools/gr-wdRemote.md)  
Use `wdRemote` to deploy games, launch them, and terminate sessions from a development PC to a remote Windows device. The tool sends commands to an instance of [wdEndpoint](../../../tools/tools-pc/commandlinetools/gr-wdEndpoint.md) running on the remote device.

[Xbox PC Remote listening endpoint (wdEndpoint.exe)](../../../tools/tools-pc/commandlinetools/gr-wdEndpoint.md)  
`wdEndpoint` runs on a remote Windows device and accepts commands from the [wdRemote](../../../tools/tools-pc/commandlinetools/gr-wdRemote.md) command-line tool running on a development PC.

[Debugging PC projects on remote Windows devices using Visual Studio](../../../tools/tools-pc/visualstudio/gr-vs-debugging-with-visualstudio-remote-windows.md)  
Use the Visual Studio 2022 debugger to attach to a game running on a remote Windows device over a secure channel.

[Release Notes - March 2026 (2603)](../tutorials/get-started-with-remote-devices/release-notes/rwd-release-notes-2603.md)  
Describes new features, improvements, and known issues in the latest release of the Xbox PC Remote Tools.

