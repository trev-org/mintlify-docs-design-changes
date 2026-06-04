---
title: "Xbox Game Package Manager"
description: "Thew Xbox Game Package Manager is a tool to manage packaging and upload of games to Partner Center."
kindex: Xbox Game Package Manager
author: dmcmahon
ms.author: dmcmahon
ms.topic: article
edited: 09/25/2025
ms.date: '09/25/2025'
permissioned-type: public
---

# Xbox Game Package Manager

Xbox Game Package Manager (XGPM) is an open-source Windows desktop app that provides a user-friendly graphical user interface for Package Uploader and MakePkg. This app simplifies both package creation and upload operations with the following key features.

## Package creation

- **GDK integration**: Uses your installed Microsoft Game Development Kit (GDK) to create game packages directly from loose game files
- **Simple configuration**: Point to the folder that contains your MicrosoftGame.config file
- **Custom layout support**: An option to specify a custom layout XML file for advanced packaging scenarios
- **Output directory selection**: Choose where the packaged files are saved

## Package upload

- **Streamlined workflow**: Select your package, branch, and market group in a simple interface
- **Status monitoring**: Track upload progress in real time with visual indicators
- **Browser-based authentication**: Authenticate seamlessly by using your default browser
- **Multi-tenant support**: An advanced option to specify a tenant ID if your account has access to multiple tenants

## Benefits

- **Smart packaging**: Automatically analyzes your .config and loose files to optimize packaging and has manual override options when needed.
- **No JSON configuration files**: Create and upload packages without writing JSON configuration files
- **Visual progress**: Monitor packaging and upload progress through a visual interface
- **Simplified authentication**: Uses browser-based authentication to eliminate the need for client secrets or certificates
- **Error handling**: Provides clear error messages and troubleshooting guidance through the UI

To use Xbox Game Package Manager, download the latest version from the [Releases page](https://github.com/microsoft/PackageUploader/releases/latest) and run `XboxGamePackageManager.exe`.

## MSIXVC2 support

Xbox Game Package Manager supports MSIXVC2 packaging and uploading. When you use it with the April 2026 GDK or later, XGPM can create MSIXVC2 packages from loose files and upload them to Partner Center. For more information about MSIXVC2, see [MSIXVC2 packaging overview](overviews/packaging-msixvc2-overview.md).

> [!NOTE]
> Support for uploading loose files by using the MSIXVC2 format is planned for a future release of Xbox Game Package Manager. This capability allows direct uploads from your build output without a separate packaging step, similar to the `makepkg2 upload /d` workflow.