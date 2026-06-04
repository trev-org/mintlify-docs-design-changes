---
author: bunmiogidan
title: "Release notes - Xbox PC Remote Tools (March 2026)"
description: "Describes new features, improvements, and known issues in the March 2026 release of the Xbox PC Remote Tools."
kindex:
- Release notes
- Xbox PC Remote Tools
ms.topic: article
edited: 03/26/2026
ms.date: 03/26/2026
permissioned-type: public
---

# Xbox PC Remote Tools—March 2026 (2603) Release notes

***Release date: March 30, 2026***

By using the Xbox PC Remote Tools, game developers can remotely provision, deploy, launch, debug, and iterate on Windows-based devices. The toolset includes the **Xbox PC Toolbox** app, the **wdRemote** and **wdEndpoint** command-line tools, the **Xbox PC Remote Iteration API**, and the **Xbox PC Remote Debugger** Visual Studio extension.

In addition to many bug fixes, this release includes the following new features and improvements:

* [Xbox PC Toolbox app](#xbox-pc-toolbox-app)
* [Command-line tools (wdRemote and wdEndpoint)](#command-line-tools)
* [Xbox PC Remote Iteration API](#remote-iteration-api)
* [Xbox PC Remote Debugger Visual Studio extension](#xbox-pc-remote-debugger)

---

<a id="xbox-pc-toolbox-app"></a>

## Xbox PC Toolbox app

### Secure device provisioning and pairing

Xbox PC Toolbox provisions development PCs and remote target devices by using WinGet and DSCv3. Devices pair securely by using a time-limited PIN, which establishes authorization and authentication between devices through certificate exchange.

Communication is encrypted across all channels:

- **PowerShell remoting** is encrypted by using OpenSSH and certificates trusted during setup.
- **Remote Iteration tooling and API** communication is always encrypted by using HTTPS/TLS and certificates trusted through PIN pairing.

### Lightweight provisioning without SSH

For Microsoft Entra-joined and Windows Pro devices, Xbox PC Toolbox supports a lightweight provisioning mode that doesn't require SSH. This feature enables remote iteration scenarios (deploy, launch, and terminate) without the overhead of SSH key management. Communication remains secure via HTTPS/TLS.

### Device workspace

The device workspace lets you discover, pair, and manage multiple remote target devices from a single development PC. You can view connection status, install tools, and initiate remote sessions from the workspace.

### Device management

You can manage paired devices directly from the Xbox PC Toolbox app. Use the gear icon on each device card to unpair a device, edit the device name, or update the IP address and connection details.

### Gamepad support

Xbox PC Toolbox supports gamepad navigation throughout the app. Gamepad input follows the same logical navigation as keyboard tab and arrow key patterns, with proper focus management during error and success states.

### Resetup flow

If the configuration between the Xbox PC Toolbox app and a remote target device becomes out of sync, the app detects the divergence and presents a resetup flow to re-establish a working connection.

### UX improvements

The app navigation and settings layout have been updated for a more streamlined experience. `wdEndpoint` now runs in the background automatically after device setup. A console window is no longer required to remain open on the remote target device.

### Unicode input support

Xbox PC Toolbox supports Unicode character input, including double-byte character sets such as Japanese. This support ensures that device names, user accounts, and file paths containing non-ASCII characters are handled correctly throughout the app, including during device pairing and tool installation.

### Feedback Hub integration

Select **Send Feedback** in the app to report problems or suggest features directly through the Feedback Hub.

---

<a id="command-line-tools"></a>

## Command-line tools (wdRemote and wdEndpoint)

### Incremental game deployment

`wdRemote` incrementally deploys game builds from the development PC to the remote target device. It transfers only changed files, which reduces deployment time for large projects.

### Remote launch and terminate

After deployment, use `wdRemote` to launch a game on the remote target device and terminate it by process ID. The tools enforce a one-game-at-a-time (OGAT) guarantee for games you launch by using the tools. Games you launch from other contexts aren't affected.

### Suspended launch and resume

`wdRemote` now supports launching a game in a suspended state by using the `/suspend` option with `wdRemote /action:launch`, and resuming that game later by using the new `wdRemote /action:resume` command.

### Absolute path support

The tools now support absolute paths for deploy and launch scenarios, in addition to paths relative to the common root. When you specify an absolute path, the configured common root is ignored.

---

<a id="remote-iteration-api"></a>

## Xbox PC Remote Iteration API

The Xbox PC Remote Iteration API provides programmatic access to deploy, launch, and terminate workflows on remote Windows devices. The API is available as a [NuGet package](https://aka.ms/GameDevRemoteAPI) and is designed for integration into custom tooling, game engines, and third-party middleware. For the full list of functions and usage details, see the [Xbox PC Remote Iteration API reference](../../../../../reference/remoting/remoteiteration_members.md).

---

<a id="xbox-pc-remote-debugger"></a>

## Xbox PC Remote Debugger Visual Studio extension

The Xbox PC Remote Debugger is a Visual Studio extension (VS 2022 and VS 2026) that you use to attach the debugger to a game running on a remote Windows device. After you provision and pair through Xbox PC Toolbox, you can start a remote debugging session directly from Visual Studio.

### F5 deploy-and-debug

This update adds F5 deploy-and-debug support to the Xbox PC Remote Debugger Visual Studio extension for remote Windows devices. In addition to attaching the debugger to a running game, you can now deploy, launch, and debug a game remotely from Visual Studio. This support is available for Visual Studio 2022 and Visual Studio 2026.

---

## Known problems

For a list of known problems and workarounds, see the [Xbox PC Remote Tools FAQ and Troubleshooting Guide](../remote-win-gamedev-tools-faq.md).

## See also

- [Xbox PC Remote Tools overview](../../../overviews/remote-win-gamedev.md)
- [How to use the Xbox PC Remote Tools](../remote-win-gamedev-how-to-use-tools.md)
- [Xbox PC Remote Tools quickstart guide](../remote-win-gamedev-quickstart.md)
- To suggest features or report problems, select **Send Feedback** in the Xbox PC Toolbox app.
