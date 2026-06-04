---
title: "PC Sandbox Switcher (XblPCSandbox.exe)"
description: "Command-line tool that helps manage the Xbox Live sandbox on PC."
kindex:
- PC Sandbox Switcher (XblPCSandbox.exe)
- sandbox switcher
ms.topic: article
ms.localizationpriority: medium
author: ricardopezo
ms.date: 03/12/2020
edited: 03/30/2026
permissioned-type: public
---

# PC Sandbox Switcher (XblPCSandbox.exe)

XblPCSandbox.exe is a command-line tool that manages the Xbox services sandbox on PC. Use it to:

- Show the current sandbox.
- Switch to a development sandbox or back to RETAIL.
- Relaunch system apps (Microsoft Store and Xbox App) in sandbox mode.

## Getting started

After installing the Microsoft Game Development Kit (GDK), open a GDK command prompt and run the tool from there. You can find the GDK command prompts performing the following actions:

1. Open the **Start** menu and search for **Microsoft GDK Command Prompts**.
2. Open the shortcut from the **Microsoft GDK Command Prompts** folder (select the latest GDK version installed)

This tool is also provided as part of the GDK and `XboxLiveTools.zip`; see [Development tools for Xbox services](live-tools.md).

> [!IMPORTANT]
> Setting the sandbox requires **elevated privileges** (Run as administrator). If you run the tool without elevated privileges, it will attempt to rerun in an elevated state. Reading the sandbox (`/get`) and showing help (`/?`) don't require elevation.

## Command and options reference

```cmd
Usage: XblPCSandbox [command] [options]
```

| Command | Description |
|---------|-------------|
| `/get` | Display the current sandbox. If no sandbox is set, the device is in RETAIL. |
| `/set <sandbox ID>` | Set the sandbox (for example, `XDKS.1`). Restarts the Xbox Live Auth Manager and relaunches any **open** system apps in sandbox mode. If you want to switch the sandbox back to RETAIL, use 'RETAIL' as the sandbox name, or the equivalent /retail option described below. Supports /noApps. |
| `/launchApps` | Relaunch the Microsoft Store and Xbox App in sandbox mode—but only if they're already open. Useful after a `/noApps` switch. |
| `/retail` | Equivalent to `XblPCSandbox RETAIL`. A convenience switch that resets the device to the default consumer sandbox. |
| `/feedback` | Opens the Feedback Hub so you can report issues or provide feedback about the sandbox switching experience. |


| Options | Description |
|---------|-------------|
| `/?` | Show help information for all available commands and options, including troubleshooting tips and a link to the troubleshooting documentation. |
| `/help` | Same as `/?`. |
| `/noApps` | Set the sandbox **without** relaunching system apps. Use `xblPCSandbox /launchApps` afterward to relaunch them in sandbox mode when ready. |
| `/version` | Shows the version information for the xblPCSandbox command line tool. |


## Getting the current sandbox

```cmd
XblPCSandbox /get
```

Displays the current Xbox services sandbox. If no sandbox is set, the device is in **RETAIL**.

## Setting the sandbox

```cmd
XblPCSandbox /set <sandbox ID>
```

Sets the Xbox services sandbox for the device. For example: `XblPCSandbox /set XDKS.1`

When setting the sandbox, the tool:

1. Displays the **current sandbox** before the switch.
2. Shows a **progress spinner** while the switch is in progress.
3. Restarts the **Xbox Live Auth Manager** service.
4. Relaunches the following **system apps** in sandbox mode—but only if they're already open:
   - Microsoft Store
   - Xbox App
5. Displays the **new sandbox** after the switch, so you can immediately confirm it was applied.

If a system app is **not open** at the time of the switch, it is **not launched** automatically.

> [!NOTE]
> The tool automatically corrects the casing of sandbox names. For example, typing `xdks.1` will be corrected to `XDKS.1`.
> This reduces errors caused by case sensitivity, since sandbox names are in uppercase.


### Setting the sandbox without relaunching apps

```cmd
XblPCSandbox /set <sandbox ID> /noApps
```

Sets the sandbox without relaunching system apps. You can later relaunch them using:

```cmd
XblPCSandbox /apps
```

## Switching back to RETAIL

```cmd
XblPCSandbox /retail
```

or

```cmd
XblPCSandbox /set RETAIL
```

Resets the device to the default consumer sandbox. Restarts the Xbox Live Auth Manager and relaunches any open system apps (Microsoft Store and Xbox App) back to normal mode.

> [!TIP]
> You need to switch back to RETAIL to update the Xbox App or Gaming Services from the Microsoft Store. These apps can't receive updates while in a development sandbox.

## Launching system apps in sandbox mode

```cmd
XblPCSandbox /apps
```

Relaunches the Microsoft Store and Xbox App in sandbox mode—but only if they're already open. This is useful after switching sandboxes with the `/noApps` option.

## Showing help

```cmd
XblPCSandbox /?
```

Shows help information for all available commands and options. The help text also includes troubleshooting suggestions and a link to the [Troubleshooting sign-in and sandbox errors](../../services/develop/troubleshooting/live-troubleshoot-sandboxes.md) documentation.

## Providing feedback

```cmd
XblPCSandbox /feedback
```

Opens the Feedback Hub directly so you can report issues or provide feedback about the sandbox switching experience.

## See also

- [Sandboxes overview](../../services/fundamentals/sandboxes/live-setup-sandbox.md)
- [Advanced sandboxes overview](../../services/fundamentals/sandboxes/live-advanced-sandboxes.md)
- [Troubleshooting sign-in and sandbox errors](../../services/develop/troubleshooting/live-troubleshoot-sandboxes.md)
- [Test accounts](../../services/develop/test-accounts/live-test-accounts.md)
- [Development tools for Xbox services](live-tools.md)

