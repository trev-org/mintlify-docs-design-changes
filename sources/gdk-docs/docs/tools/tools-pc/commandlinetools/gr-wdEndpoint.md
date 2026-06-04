---
author: stevenjpr
title: "Xbox PC Remote Listening Endpoint (wdEndpoint.exe)"
description: "An executable running on a remote Windows device that accepts commands from wdRemote.exe running on a development PC"
ms.assetid: 4b2a4ee4-b4f3-1eae-254a-97b0eda1edc5
kindex:
- Xbox PC Remote Listening Endpoint (wdEndpoint.exe)
- wdEndpoint.exe
- Xbox PC Remote
- remote iteration
- wdEndpoint.exe, createkeys
- wdEndpoint.exe, purgekeys
- wdEndpoint.exe, createpin
- wdEndpoint.exe, pair
- wdEndpoint.exe, noconsole
- pair
- PIN pairing
ms.topic: article
edited: 10/16/2025
applies-to: pc-gdk
ms.date: '10/16/2025'
permissioned-type: public
---

# Xbox PC Remote listening endpoint (wdEndpoint.exe)

> [!IMPORTANT]
> The Xbox PC Toolbox app is in preview. Download it from the [Microsoft Store](https://aka.ms/toolboxinstaller) on Windows.

Xbox PC Remote listening endpoint (wdEndpoint.exe) runs on a remote Windows device and accepts commands from the [wdRemote](gr-wdremote.md) command-line tool on a development PC. Together, these tools support two key workflows for building games on remote Windows devices:

* Establish a trusted, secure connection between a development PC and a remote device using PIN pairing.
* Deploy, launch, and terminate games on a remote Windows device.

For an overview of how `wdRemote` and `wdEndpoint` work in the Windows remote development toolset, see [Overview of Xbox PC Remote tools](../../../gdk-dev/pc-dev/overviews/remote-win-gamedev.md). 

## Install wdEndpoint.exe

You can install wdEndpoint.exe with either the [Xbox PC Toolbox](../xboxpctoolbox/xboxpctoolbox.md) or WinGet: 

```winget install Microsoft.Gaming.RemoteIterationEndpoint ```

When you install `wdEndpoint` with Xbox PC Toolbox, it starts automatically when a user signs in to the target device. If you install it using WinGet, start it manually. Run `wdEndpoint` as a nonadministrator to accept commands from `wdRemote`.

## wdEndpoint Commands

`wdEndpoint` provides the following commands. 

| Command | Description |
| --- | --- |
| [wdEndpoint /createkeys](#wdEndpoint_createKeys) | Creates the security keys required to enable encryption and device pairing. |
| [wdEndpoint /purgekeys](#wdEndpoint_purgekeys) | Removes all security keys and device pairings from the target device. |
| [wdEndpoint /createpin](#wdEndpoint_createPin) | Creates a PIN used for pairing. |
| [wdEndpoint /pair](#wdEndpoint_pair) | Pairs a remote Windows device with a development PC. |
| [wdEndpoint /noconsole](#wdEndpoint_noconsole) | Runs wdEndpoint without displaying a console window. |

<a id="wdEndpoint_createKeys"></a>

### wdEndpoint /createkeys

Communication between `wdRemote` and `wdEndpoint` is encrypted. Use the `wdEndpoint /createkeys` command to generate the security keys needed for encryption and pairing.

> [!NOTE]
> `wdEndpoint /createkeys` requires administrator permissions on the target device.

```wdEndpoint /createkeys```

 [Return to the top of this topic.](gr-wdEndpoint.md) 

<a id="wdEndpoint_purgekeys"></a>

### wdEndpoint /purgekeys 

Removes all security keys and device pairings from a target device.

> [!NOTE]
> wdEndpoint /purgekeys requires administrator permissions on the target device.

```wdEndpoint /purgekeys```
  
[Return to the top of this topic.](gr-wdEndpoint.md)
  
<a id="wdEndpoint_createPin"></a>

### wdEndpoint /createpin 

Creates a PIN used for pairing. Use this PIN as an argument with the `/pair` command.

```wdEndpoint /createpin```

[Return to the top of this topic.](gr-wdEndpoint.md)

<a id="wdEndpoint_pair"></a>

### wdEndpoint /pair 

Pairs a remote Windows device with a development PC. You can pair in two ways:

1. Run `wdEndpoint /pair` without a PIN. The command generates and displays a PIN, then waits for the PIN to be returned from the development PC. If the PIN isn't returned within two minutes, `wdEndpoint` ends the pairing process.
2. Run `wdEndpoint /pair` with a PIN. This mode doesn’t block or wait—it starts pairing immediately. Create the PIN for the `/pair` command by using the `/createPin` option.

> [!NOTE]
> `wdEndpoint /pair` requires administrator permissions on the target device.

```wdEndpoint /pair{:PIN}```

| Option | Description |
| --- | --- |
|/pair:{PIN} | The PIN to use when pairing in nonblocking mode.|

[Return to the top of this topic.](gr-wdEndpoint.md) 

<a id="wdEndpoint_noconsole"></a>

### wdEndpoint /noconsole

Runs `wdEndpoint` without displaying a console window. Display without a console window is useful when starting `wdEndpoint` in scenarios where a visible console window isn't needed.

```wdEndpoint /noconsole```

[Return to the top of this topic.](gr-wdEndpoint.md)

## See also

 [wdRemote](gr-wdRemote.md)  
 [Xbox PC Remote tools](../../../gdk-dev/pc-dev/overviews/remote-gamedev-tools.md) 
