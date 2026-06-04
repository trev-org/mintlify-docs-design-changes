---
ms.author: bunmiogidan
title: "Screen Capture (wdcapture.exe)"
description: "Captures screenshots on the local PC."
ms.date: '04/25/2026'
ms.topic: article
permissioned-type: public
---


# Screen Capture (wdcapture.exe)

`wdcapture` is a PC command-line tool that captures screenshots in Standard Dynamic Range (SDR) and High Dynamic Range (HDR) formats by using Windows Graphics Capture APIs.

## Prerequisites
- Windows 10 or later with support for Windows Graphics Capture.

## Usage
The `wdcapture` tool supports the following command-line arguments:

| Command | Description |
| --- | --- |
| [wdcapture screenshot](#wdcapture-screenshot) | Captures a screenshot and saves it as a `.png` (SDR) or `.jxr` (HDR) file. |
| [wdcapture list-displays](#wdcapture-list-displays) | Lists all available display IDs. |
| [wdcapture feedback](#wdcapture-feedback) | Opens the Feedback Hub app to report an Xbox game development bug or suggestion. |

## wdcapture screenshot

Captures a screenshot and saves it as a `.png` (SDR) or `.jxr` (HDR) file.

```wdcapture screenshot [--filepath <filepath>] [--hdr] [--display <display-id>]```


| Option | Description | 
| --- | --- |
| `--filepath`, `-f`, `/filepath` | Path to the output file. If not specified, a timestamped filename is generated automatically. |
| `--hdr`, `/hdr` | Saves the screenshot in HDR format (`.jxr`). Requires a `.jxr` file extension if a filepath is specified. |
| `--display`, `/display` | Display to capture. Use `wdcapture list-displays` to see available identifiers. If not specified, the primary display is used. |


## wdcapture list-displays

Lists all available display IDs.

```wdcapture list-displays```

This command takes no arguments. It displays a table of connected displays with their identifiers, names, and resolutions.

## wdcapture feedback

Opens the Feedback Hub app to report an Xbox game development bug or suggestion.

```wdcapture feedback```


[Return to the top of this article.](gr-wdCapture.md)

## Remarks
   
  
For more information about installing and launching PC Microsoft Game Development Kit (GDK) titles, see [Using Microsoft Game Development Kit tools to install and launch your PC title](../launching-on-pc.md).
