---
title: What's new in the June 2024 Microsoft Game Development Kit video script
author: joannaleecy
description: Video script for Connecting your Microsoft Azure PlayFab data to Microsoft Fabric
ms.author: joanlee
ms.date: 09/11/2024
ms.topic: article
---
# What's new in the June 2024 Microsoft Game Development Kit video script

Hello and welcome to What’s new in the June 2024 Microsoft Game Development Kit.

The GDK is a complete set of tools, APIs, extensions, and programming models that can be used across current and future Microsoft Gaming platforms and initiatives.
The design and features of the GDK are driven by your feedback about how you like to develop games.

We’re on a journey that goes back decades.
With every release of the GDK, we take a step closer to a world where developing games for Xbox, Windows, and PC Game Pass is faster and easier, no matter where you started your development.
The key features and fixes that are highlighted in this video are just a handful out of dozens—a mix of improvements for PC and Xbox development—that speed up iteration times or give developers more powerful tools to optimize their game experiences.
Most importantly, many of these features are the direct result of developer requests.
In addition to many stability and performance improvements, this release includes the following new features.

## Xbox GPU Auto-Vectorizer feature for 16-bit workloads

The Xbox GPU Auto-Vectorizer optimizes 16-bit workloads by leveraging Xbox hardware instructions to improve runtime performance.
The performance gains will vary based on the specific workload and shaders.
This feature is automatically enabled for 16-bit workloads but can be disabled.

## Console Developer Home update

Console Developer Home has been updated.
The streaming tab has removed the drop-down box to select the streaming protocol and simplified the UX.
The protocol is now automatically configured by client applications, and it is now possible to simultaneously listen for remote connect and direct connect requests.
The system disconnects any active streams when a new client connects.

## GDK installer update

The GDK installer now provides links to additional tools upon installation.
These tools, which are web-based or available through other channels, support various game development tasks.
Additionally, Xbox Manager and the GDK Visual Studio extension now offer extra options for the content test app.

## TAK command-line tool (tak.exe) and TAK telemetry improvements

The Touch Adaptation Kit Command Line Tool (tak.exe) now monitors changes to the takxconfig.json file when using the serve command.
This allows for easy switching of asset directories and languages, with live updates to the bundle.
The TAK tool also includes telemetry to help Microsoft improve the tool.
For more information, use the tak.exe help command-line parameter.

## New language code flag added to Xbox command-line tools

A new language code flag has been added to Xbox command-line tools.
This GDK release introduces the /LC (language code) flag which allows developers to override the language code of the response.

## PIX Timing Capture annotations

Developers can now add annotations to the Timeline in Timing Captures.
These annotations facilitate collaboration by enabling one developer to highlight significant time periods for others to investigate.

## PIX New Timing Capture Comparison Layout

The Timing Capture comparison features have been moved from the Metrics view to a new dedicated Comparison Layout.
This layout enhances comparison workflows, including the ability to compare multiple captures simultaneously.

Thanks for watching!

We hope that you’ve enjoyed learning about some of the new features in the June 2024 GDK.
This video has just a few of the many investments that we make in every GDK release to help our development partners succeed.

To learn more, take a look at our public GDK documentation at aka.ms/gamedevdocs, experiment with our public version of the GDK at aka.ms/gdk, or if you’re ready, join the ID@Xbox program at xbox.com/developers/id today.
