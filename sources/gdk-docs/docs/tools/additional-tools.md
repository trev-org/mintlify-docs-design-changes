---
title: "Additional standalone tools"
description: "Provide a list of useful tools for game development"
author: miniwangdali
ms.author: xiaoyanwang
ms.topic: overview
ms.date: 02/26/2024
permissioned-type: public
---

# Additional standalone tools

A variety of tools are not bundled with the Game Development Kit (GDK) and can be obtained via other mechanisms. These tools are valuable for multiple kinds of tasks when creating and testing games to ensure optimal player experience. This article provides a summary of these tools with an overview of information on how to acquire them.

## Package Uploader

Package Uploader is an open source .NET based cross-platform application and library that enables game developers to interact programmatically with Partner Center. 

Package Uploader has a command-line tool and a dynamic linked library (DLL) that you can integrate into your build pipelines or other development workflows and provides the following functionality: 

* Retrieves metadata about a particular product
* Uploads a new Xbox .xvc, .appx, or .msixvc package
* Removes previously uploaded packages
* Imports packages from one branch to another
* Publishes packages to a sandbox

Download the latest version of the Package Uploader tool on GitHub at [https://github.com/microsoft/PackageUploader](https://github.com/microsoft/PackageUploader). 

## Touch Adaptation Kit (TAK)

### [Touch Adapation Kit (TAK) Editor extension for Visual Studio Code](../features/common/game-streaming/tak-editor/game-streaming-tak-editor.md)

This extension enables you to create, preview, verify, and package Touch Adaptation Bundles (TABs) for your games on Xbox Game Streaming in Visual Studio Code.

[Download](https://aka.ms/get-takeditor)

### [Touch Adaptation Kit Command Line Tool (tak.exe)](../features/common/game-streaming/tak-command-line-tool/game-streaming-tak-command-line.md)

This command line tool allows you to create and validate control layouts by using the Touch Adaptation Kit (TAK).

## Streaming and Remote Connect

The streaming and remote connect tools allow for easy development in situations where the content is being run on a device other than the one currently being interacted with. Additonally, these tools allow testing on mobile devices, PC, and web to validate Xbox Game Streaming behaviors.

### [Web Content Test App (CTA)](../features/common/game-streaming/game-streaming-web-content-test-application.md)

This web app allows you to connect to a **private offering** on Xbox Game Streaming or connect to an Xbox Development Kit in **a sandbox environment**.

[Launch](https://www.xbox.com/play/dev-tools)

### [Windows Content Test App (CTA) (Deprecated)](../features/common/game-streaming/game-streaming-windows-pc-content-test-application.md)

This Windows app allows you to connect to a **private offering** on Xbox Game Streaming or connect to your Xbox Development Kit in **a local network** or **registered with your account**.

### [Android Content Test Application (CTA) (Deprecated)](../features/common/game-streaming/game-streaming-android-content-test-application.md)

This Android app simulates the user experience of game streaming and allows you to connect to a **private offering** on Xbox Game Streaming or connect to your Xbox Development Kit in **a local network** or **registered with your account**.

[Download](https://aka.ms/GetAndroidContentTestApplication)

## Samples

### [Game Development Kit (GDK) samples](../gdk-dev/development-downloads/gdk-samples-home.md)

This page provides samples to demonstrate the popular features of the Microsoft Game Development Kit (GDK).
