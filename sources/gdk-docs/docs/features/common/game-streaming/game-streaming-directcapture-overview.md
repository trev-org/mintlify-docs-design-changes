---
title: "DirectCapture Overview"
description: "General information about game streaming DirectCapture."
author: jakeros
ms.author: jakeros
ms.topic: article
kindex: DirectCapture Overview
edited: 00/00/0000
ms.date: '09/13/2022'
permissioned-type: public
---

# DirectCapture Overview

## DirectCapture

DirectCapture is an Xbox Game Streaming platform feature that automatically minimizes server latency for compatible frames. The [XGameStreamingGetDisplayDetails](../../../reference/system/xgamestreaming/functions/xgamestreaminggetdisplaydetails.md) API allows you to query for compatible frame requirements so you can ensure your game can take advantage of DirectCapture. The requirements for a compatible frame are explained below.

Xbox Game Streaming streams games by capturing (copying) presented frames and then encoding the frames for streaming. Without DirectCapture, frames get converted from the input presentation parameters to a format for encoding using display hardware. The frame has 0-66ms of latency in a Present Queue and then the frame has 8.3ms more latency as it goes through Display Writeback (DWB) to capture the frame. The amount of time in the Present Queue depends on things like the game's framerate and whether double or triple buffering is used. The 8.3ms Display Writeback time is fixed at 8.3ms because it is tied to an HDMI clock.

There is no HDMI display connected to the Xbox Game Streaming servers though, so DirectCapture short-circuits this time with a software implementation instead of using the display hardware. DirectCapture captures frames for encoding in about 2-12ms by eliminating things like the wait for VSync and the wait for double or triple buffering to flip. This reduces latency by up to 72ms.

In order to get lower latency, a game must present with parameters that are compatible with DirectCapture.

* Supported Console Modes
  * Lockhart Profiling Mode
* Supported Game Render Resolutions  
  * Any, including [Custom Resolution](game-streaming-custom-resolution-overview.md)
* Supported swapchain formats
  * DXGI_FORMAT_R8G8B8A8_UNORM
  * DXGI_FORMAT_B8G8R8A8_UNORM
  * DXGI_FORMAT_R8G8B8A8_UNORM_SRGB
  * DXGI_FORMAT_B8G8R8A8_UNORM_SRGB
  * DXGI_FORMAT_R10G10B10A2_UNORM
  * DXGI_FORMAT_R9G9B9E5_SHAREDEXP
* Supported color spaces
  * DXGI_COLOR_SPACE_RGB_FULL_G22_NONE_P709

Presentation parameters not listed above are currently not supported by DirectCapture.  For example, the following are not supported:

* Game Render Resolution: 3840x2160 for XDK games
* HDR
* Multiple presentation planes

[XGameStreamingGetDisplayDetails](../../../reference/system/xgamestreaming/functions/xgamestreaminggetdisplaydetails.md) is available to help determine what to present to be compatible with DirectCapture and PIX support is planned to be released in the future.

## Validating that your title is streaming with DirectCapture

You can validate that your title is running with DirectCapture by checking streaming log files.

### Gathering log files

To gather streaming log files:

1. Begin running the game
1. Start streaming and connect with one of the Content Test Apps (CTA)
1. Play a short section of your game
1. Terminate the game
1. Disconnect the CTA
1. Wait 30 seconds for logs to finish writing
1. Copy the logs to a local directory such as C:\temp
   1. `xbcp xt:\XStreamLogs\XStreamManagementService.etl c:\temp`
   1. `xbcp xt:\XStreamLogs\nanotrace.etl c:\temp`

### Viewing transition messages

1. Open XStreamManagementService.etl with [Windows Performance Analyzer](https://apps.microsoft.com/store/detail/windows-performance-analyzer/9N0W1B2BXGNZ)
1. Right click System Activity in the left pane and choose "Add graph to Analysis View"
1. In the lower pane, expand Microsoft.Xbox.StreamManagementService
1. Look for the Microsoft.Xbox.HostStreamingAgent provider and expand it if necessary. If this is missing, repeat the Gathering log files steps above.
1. Select the DirectCaptureLog task and in necessary, expand the Unknown Process
1. Scroll to the right and look for columns named 0_Message, 1_Message etc. Each is a message from DirectCapture in sequence. If there are multiple rows, they are sorted by time.
1. See the table below for the meaning of each message. These messages will give you the sequence of DirectCapture transitions with reasons for any cases where DirectCapture is disabled.

| Message ID | Message |
|---|---|
| 1 | Switch to DirectCapture |
| 2 | Switch to DWB (DirectCapture is disabled) |
| 3 | Unsupported render plane configuration. This may either be due to in-game render planes or because the system renders an overlay over the title (e.g. system notification) |
| 4 | Unsupported pixel format. See the associated PixelFormat for the game's pixel format at the time |
| 5 | Unsupported tile mode. See the associated TileMode for the game's tile mode at the time |
| 6 | Unsupported game resolution. See the associated GameResolutionWidth and GameResolutionHeight to see what resolution the game was rendering at the time. |
| 8 | A non-game frame is on the screen |
| 12 | DirectCapture not enabled (likely due to an unsupported console mode) |
| 18 | Unsupported source rectangle size |
| 19 | Unsupported Present parameter flags |
| 21 | Unsupported destination rectangle size |

### Detailed frame information

1. Open nanotrace.etl with Windows Performance Analyzer
1. Navigate to the "Microsoft.Xbox.CloudStreaming" Provider and select the "VideoFrameCaptureSourceChanged" Task, then expand the Process "ApplicationClipService.exe" to see all the "VideoFrameCaptureSourceChanged" events.
1. Check the "NewCaptureSource" field
   * Your title is streaming with DirectCapture's lower latency starting when the value is "DCap"
   * Values of "DWB" mean that DirectCapture is not used and the default capture mechanism is used.  This will happen when:
     * The title outputs a frame that is incompatible with DirectCapture  
     * The system renders an overlay over the title (e.g. system notification)

## Notes

* nanotrace.etl has limited history, so if you don't see "VideoFrameCaptureSourceChanged", then your session may have been too long. To validate, run a shorter session and check the ETL.
* DirectCapture support on devkits is limited to Xbox Series X Dev Kit
* For more information, please watch [Xbox Game Streaming: Reducing Latency and Optimizing for the Best Mobile Experiences](https://www.youtube.com/watch?v=-WIXftoHCl4).

## See also

[Custom Resolution Overview](game-streaming-custom-resolution-overview.md)
