---
title: What's new in the March 2024 Microsoft Game Development Kit video script
author: joannaleecy
description: Video script for What's new in the March 2024 Microsoft GDK
ms.date: 09/11/2024
ms.topic: article
---
# What's new in the March 2024 Microsoft Game Development Kit video script

Hello and welcome to What’s new in the March 2024 Microsoft Game Development Kit.

The GDK is a complete set of tools, APIs, extensions, and programming models that can be used across current and future Microsoft Gaming platforms and initiatives.
The design and features of the GDK are driven by your feedback about how you like to develop games.

We’re on a journey that goes back decades.
With every release of the GDK, we take a step closer to a world where developing games for Xbox, Windows, and PC Game Pass is faster and easier, no matter where you started your development.
The key features and fixes that are highlighted in this video are just a handful out of dozens - a mix of improvements for PC and Xbox development - that speed up iteration times or give developers more powerful tools to optimize their game experiences.
Most importantly, many of these features are the direct result of developer requests.
In addition to many stability and performance improvements, this release includes the following new features.

## Introducing the Rasterizer Ordered View

ROV is a specialized resource type that’s exclusive to pixel shaders, serving as the basis for enabling Order Independent Transparency (OIT) algorithms for transparent effects.
With ROV, developers can create even more realistic looking objects like wire fences, smoke, fire, foliage, and colored glass.
ROV facilitates using OIT algorithms, enabling easy compositing of many textures with transparent effects.
This addresses the visual effects challenges that might occur in traditional rendering pipelines.
For more information, see the GDK documentation and DirectX-Specs engineering specifications for DirectX features that are available at microsoft.github.io.

## Added XAppCapture “Record this” feature to the User Library API

The **Record this** feature in XAppCapture is now integrated into the User Library API.
You can use this feature to record application-capture data as if users did the recording themselves, and multiple can be started at the same time.
Using `localIdBuffer` that’s provided by `XAppCaptureStartUserRecord`, developers can also use `XAppCaptureStopUserRecord` to stop individual recordings.
Recordings are automatically saved in the user’s partition, adhering to Game DVR settings such as resolution, save location, automatic upload to OneDrive and the Xbox network, and permissions for capturing (user and game, user only, or no captures allowed).
This feature creates exciting opportunities for users to capture and share gameplay moments directly from the console.
This functionality helps get your game noticed and played by more users because of seamless sharing on social media platforms.

## Azure PlayFab Telemetry Buffering for Delayed Transmission is now available

We’re excited to introduce PlayFab Telemetry Buffering for delayed transmission.
This feature makes it possible to buffer telemetry events for later transmission when a user is offline or if their game has network disruptions.
This reduces the likelihood that data is lost during intermittent network connectivity disruptions or service interruptions.
The buffer size is configurable to balance memory consumption with the duration of offline buffering time.
This provides developers and data scientists with more continuity in analyzing data streams sent from these users.

## Introducing the Touch Adaptation Kit Editor Visual Studio Code Extension

With this release, the Xbox team has launched the Touch Adaptation Kit Editor Visual Studio Code Extension.
This inaugural preview version is a significant step forward in empowering creators to enhance touch layouts for Xbox Game Streaming.
This extension is available to the public and provides a robust toolkit for directly previewing and customizing touch layouts within Visual Studio Code.
With intuitive tools and functionalities, creators can seamlessly customize touch experiences, optimizing gameplay for Xbox Game Streaming.

## GDK tool enhancements

Several key GDK tool enhancements are now available to help streamline the development experience, providing greater control and flexibility.

### xbCopy

This new tool enables filtered file-copy functionality.
With support for wildcards and regular expressions, developers can precisely include or exclude files and folders, providing efficient management of project assets.

### Minimum Windows Version setting

Developers can now define a Minimum Windows Version in MicrosoftGame.config.
The new WindowsOSVersion element in this .config file allows developers to specify required, suggested, and recommended versions of Windows for MSIXVC packages, ensuring compatibility and optimization across various Windows environments.

### Store Development Entitlements Tool

This PC command-line tool empowers users to easily manage entitlements for products purchased and owned by Xbox test accounts.
From adding and removing entitlements to listing owned products, this tool simplifies programmatic acquisition and facilitates re-testing.

Note that this tool is currently in Preview and might have incompatibilities with certain product types.
We look forward to your feedback about this tool in the forums or through your Microsoft representative.

## PIX Timing Capture Metrics View improvements

We’re introducing PIX Timing Capture Metrics View improvements that make it easier for developers to analyze and optimize game performance through the following feature enhancements.

### Consolidated Events with GPU PIX Support

The Timing Capture Metrics View now supports consolidated events with GPU PIX events, providing a comprehensive overview of GPU performance alongside CPU events.
This integration gives developers a holistic view of performance bottlenecks and optimizations.

### Expanded Metrics Details tab

The tab now displays an expanded set of statistics, including detailed insights into event trees.
This enriched data provides deeper analysis and fine-tuning of performance parameters.

### Unified Budget Viewing

All budgets that are defined in the capture can now be conveniently viewed together, streamlining the process of monitoring performance thresholds, and ensuring adherence to predefined targets.

## Thread and Core Usage Data in PIX Timing Capture Summary View improvements

Developers now have a comprehensive table in the Summary View that showcases CPU use for all cores and threads that are used in a game.
This valuable information helps developers easily track the percentage of time that each CPU core and thread remained active during gameplay sessions.
This feature provides nuanced performance analysis with details about thread and core use.
Developers can find potential bottlenecks, optimize resource allocation, and ensure efficient use of hardware resources.
These changes give developers a much simpler way to monitor and optimize performance, ultimately helping them create smoother and more responsive gaming experiences.

Thanks for watching!

We hope that you’ve enjoyed learning about some of the new features in the March 2024 GDK.
This video has just a few of the many investments that we make in every GDK release to help our development partners succeed.
To learn more, take a look at our public GDK documentation at aka.ms/gamedevdocs experiment with our public version of the GDK at aka.ms/gdk or if you’re ready, join the ID@Xbox program at xbox.com/developers/id today.
