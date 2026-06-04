---
title: "Setting up your Xbox Development Kit for streaming"
description: "Describes how to setup your Xbox Development Kit with streaming support."
author: miniwangdali
ms.author: xiaoyanwang
ms.topic: article
edited: 05/15/2024
kindex: Setting up your Xbox Developer Kit for streaming
ms.date: '08/01/2022'
permissioned-type: public
---

# Setting up your Xbox Development Kit for streaming

Use this topic to setup your Xbox Development Kit to create and validate titles while streaming.

With streaming, you can support direct local streaming to a special streaming client by using the [Android Content test application](game-streaming-android-content-test-application.md) or [Windows PC Content test application](game-streaming-windows-pc-content-test-application.md).

You can also use Cloud Aware development to support and validate your title by using [Cloud Aware APIs](../../../reference/system/xgamestreaming/xgamestreaming_members.md). These APIs behave on an Xbox Development Kit, with streaming support, similarly to a Xbox Game Streaming server.

## Prerequisites

To setup your dev kit for streaming, ensure that it's running an OS of November 2019 or later and connected to the network.

> [!NOTE] 
> Xbox Game Streaming isn't available on Xbox One S Dev Kit dev kits. The Xbox Series X Dev Kit hardware isn't equivalent to the hardware that's running the Xbox Game Streaming server, but it provides the best approximation for CPU performance when accessing Xbox Game Streaming servers. 

### Enable Developer Mode

Enable **Developer Mode** on your Xbox Development Kit with the following steps.

1.  Open **Settings** and select **System** > **Console Info** > **Developer Settings**.
1.  Enable **Developer Mode**.
1.  Restart the Xbox Development Kit.

> [!NOTE]
> If **Developer Settings** isn't available, with your controller quickly select **LB** > **RB** > **LT** > **RT** to enable **Developer Settings** in the UI.

### Enable the streaming service

You can control the streaming service from the **Streaming** tab of Dev Home, or via the [xbgamestream (NDA topic)](../../../tools/tools-console/commandlinetools/xbgamestream.md) command line tool.

> [!NOTE]
> Only one remote stream is allowed at a time from the development console. In other words, you can't utilize the remote view capabilities of [Xbox Manager (NDA topic)](../../../tools/tools-console/xbom/xbom.md) while also using a [game streaming client](game-streaming-windows-pc-content-test-application.md). Whichever client connects most recently will be the one that receives audio and video.

By default, the streaming service doesn't listen for local connections. To start it, go to the **Streaming** tab. Find "Direct Connect" toggle and turn it on. The service starts after a few seconds.

> [!NOTE]
> After each restart of the Xbox Development Kit, return to the **Streaming** tab of Dev Home to connect to the streaming service again as shown in the following screenshot.

![Screenshot of the Streaming tab in Dev Home](../../../../media/public-images/game-streaming/game-streaming-console-streaming-off.png)

After a short startup delay, the Cloud Streaming service runs with a status change of the toggle that's visible in the **Streaming** tab of Dev Home as shown in the following screenshot.

You can perform a direct connect by using the Content test application (CTA) client and providing the main console IP address that's used to connect to the client.

![Screenshot of the Cloud Streaming status changed in Dev Home](../../../../media/public-images/game-streaming/game-streaming-console-streaming-on.png)

> [!NOTE]
> It isn't necessary to stop and restart this service unless there are connectivity problems.

### Stream Configuration

The streaming configuration controls various aspects of the stream such as the resolution or bitrate. The streaming configuration for direct connect can be modified via the **Streaming Configuration** dropdown menu which contains a couple base configurations.

#### Overrides

In more advanced scenarios, you can override specific settings of the base stream configuration for both direct connect and remote connect.

> [!NOTE]
> Overrides do not perist between reboots so they must be reset if desired.

> [!NOTE]
> Overrides are only applied to direct connect when it restarts "listening for connections" and on new connections for remote connect.

Overrides can be viewed and configured in the **Streaming** tab using the **Stream Configuration Overrides** panel in the bottom right (or by the xbgamestream tool).

![Screenshot of the config override panel](../../../../media/public-images/game-streaming/game-streaming-dev-home-streaming-config-override.png)

New overrides can be added with the **Add** button in the top left of the panel which will open up a window where the key and value can be specified. Existing overrides can be edited from the **Edit** option in the context menu which opens a similar window. Specific overrides can be deleted by the **Clear** option in the context menu and all overrides can be deleted by the **Clear All** button at the top of panel. The current set of configurable settings are as follows.

| Key                | Description                                                                                      |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| allowDirectCapture | Boolean for enabling and disabling direct capture. Default value: <i>true</i>                    |
| maxBitrate         | Maximum bitrate of the video stream. Example value: <i>12000000</i>                              |
| minBitrate         | Minimum bitrate of the video stream. Example value: <i>5000000</i>                               |
| maxResolution      | The suggested maximum resolution of the video stream. Example values: <i>720p</i>, <i>1080p</i>. |
| minResolution      | The suggested minimum resolution of the video stream. Example values: <i>720p</i>, <i>1080p</i>. |

![Screenshot of the add override window](../../../../media/public-images/game-streaming/game-streaming-dev-home-streaming-config-override-add.png)

## Troubleshooting

Use the following sections to resolve issues you experience while setting up your Xbox Development Kit for Xbox Game Streaming.

### Network configuration to allow access to Xbox Development Kit streaming

To connect by using the CTA, enable UDP Port 9002 for communication and streaming between the CTA and the Xbox Development Kit.

### CTA can't connect to Xbox Development Kit

Use the following steps to resolve connectivity issues between the CTA and dev kit.

1.  Ensure that the IP address of the console that's used by the client is correct.
1.  Ensure that the streaming service is running by checking the **Streaming** tab of Dev Home.
1.  Stop and start the streaming service on the **Streaming** tab of Dev Home.
1.  Ensure that the streaming protocol version that's used by the client matches the selected streaming protocol version on the Xbox Development Kit.

### Managing different communication protocol versions

There are different communication protocol versions needed for streaming. The game streaming service will switch protocol automatically based on the request from the client which triggers a connection.