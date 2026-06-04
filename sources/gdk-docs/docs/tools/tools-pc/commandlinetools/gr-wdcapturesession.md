---
ms.author: bunmiogidan
title: "Video Capture (wdcapturesession.exe)"
description: "Captures video on the local PC."
ms.date: '04/25/2026'
ms.topic: article
permissioned-type: public
---

# Video Capture (wdcapturesession.exe)

`wdcapturesession` is a PC command-line tool that records live video during game tests. It encodes in H.264 or HEVC at 30 frames per second and outputs to `.mp4` format.

## Prerequisites

- Windows 10 or later with support for Windows Graphics Capture.

## Usage

The `wdcapturesession` tool supports the following command-line arguments:

|Command | Description |
| --- | --- |
|[wdcapturesession start](#wdcapturesession-start)| Starts a video capture session. |
|[wdcapturesession stop](#wdcapturesession-stop)| Stops a video capture session. |
|[wdcapturesession status](#wdcapturesession-status)| Shows the current video capture state. |
|[wdcapturesession list-displays](#wdcapturesession-list-displays)| Lists all monitor indexes. |
|[wdcapturesession feedback](#wdcapturesession-feedback)| Opens the Feedback Hub app to report a bug or suggestion. |

## wdcapturesession start

Starts a video capture session.

```wdcapturesession start  [--filepath <filepath>] [--duration <max-duration>] [--monitor <monitor>]```

| Option | Description | 
| --- | --- |
|`--filepath`, `-f`, `/f`| Path to the output `.mp4` file. If not specified, a timestamped filename is generated automatically. |
|`--duration`, `-d`, `/d` | Maximum number of seconds to record. Minimum is 10 seconds. Default is 3600 seconds (1 hour). |
|`--monitor`, `-m`, `/m`| Monitor index to capture. Use `wdcapturesession list-displays` to see available monitors. If not specified, the primary monitor is used. |

## wdcapturesession stop

Stops the video capture session and finishes writing the output to the `.mp4` file. This operation fails if no capture session is in progress.

```wdcapturesession stop```

## wdcapturesession status

Shows the current video capture session state.

```wdcapturesession status```

## wdcapturesession list-displays

Lists all monitor indexes.

```wdcapturesession list-displays```

## wdcapturesession feedback

Opens the Feedback Hub app to report an Xbox game development bug or suggestion.

```wdcapturesession feedback```

[Return to the top of this article.](gr-wdcapturesession.md)

## Remarks  
   
  
For more information about installing and launching PC Microsoft Game Development Kit (GDK) titles, see [Using Microsoft Game Development Kit tools to install and launch your PC title](../launching-on-pc.md).
