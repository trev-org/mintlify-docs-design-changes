---
author: dmcmahon
title: "Getting started with MSIXVC2 for PC"
description: "Describes how to get started packaging PC games with the MSIXVC2 format using makepkg2."
kindex:
- MSIXVC2 getting started
- Packaging MSIXVC2 PC
- makepkg2 getting started
ms.author: dmcmahon
ms.topic: article
edited: 02/19/2026
ms.date: '02/19/2026'
permissioned-type: public
---

# Getting started with MSIXVC2 packaging for PC

Use the following steps to create an MSIXVC2 package that you can sideload for testing on your development PC and then upload to Partner Center for publishing.

For background on the format and its benefits, see [MSIXVC2 packaging overview](packaging-msixvc2-overview.md).

> [!IMPORTANT]
> MSIXVC2 is available as a preview starting with the April 2026 Microsoft Game Development Kit (GDK). During the preview, you can sideload and publish MSIXVC2 packages to your sandboxes for testing. Submission Validator prevents MSIXVC2 packages from being submitted to certification for public release. Contact your Microsoft representative if you need an exception to release an MSIXVC2 package to the public during preview.

> [!NOTE]
> Some MSIXVC2 features and improvements come through updates to the Gaming Runtime Services and don't require a GDK update. You automatically receive these enhancements as they become available. Of note, MSIXVC2 packages at the initial preview release don't support update. Install and uninstall are supported for the initial preview release.

> [!NOTE]
> If you're packaging for Xbox consoles, see [Getting started packaging for Xbox consoles](packaging-getting-started-for-console.md). Console games continue to use XVC. The `makepkg2` tool handles both formats.

## Prerequisites

- **Windows 10** version 18362 or later on your development PC.
- **April 2026 GDK or later** installed. The GDK includes `makepkg2.exe`.

> [!NOTE]
> During the preview, MSIXVC2 packaging uses `makepkg2.exe` as a separate tool. After the preview, `makepkg2.exe` is planned to replace `makepkg.exe`, so you won't need to update your build scripts.
- **Partner Center product** You need your publisher identity, package name, and Store ID.
- **Developer mode** enabled on your target test PC.
- **MSIXVC2 developer mode registry key** set on any device where you install or run MSIXVC2 packages. See [Step 7](#step-7-test-your-package-locally) for details.

## Step 1: Prepare your content

Place all source material for your title in a single directory. Remove any files that the packaging system can't use or that are unsuitable for shipping in retail packages.

Remove the following files if they're present:

- PDB files.
- Any references to other PC game stores, such as assets, binaries, and more.
- Universal Windows Platform (UWP) and Appx "footprint" files, including AppxSignature.p7x and AppxBlockMap.xml.

## Step 2: Create your MicrosoftGame.config

Create a MicrosoftGame.config file in the root directory of your game content. This configuration file works with MSIXVC. Your existing MicrosoftGame.config works unchanged with MSIXVC2.

You can create this file manually or by using the [MicrosoftGame.config Editor](../../game-config/MicrosoftGameConfig-Editor.md), which syncs identity and ID values directly from your Partner Center project.

For a sample MicrosoftGame.config file, see [Getting started with MSIXVC for PC](packaging-getting-started-for-PC.md#sample).

## Step 3: Identify Visual C/C++ runtime dependencies

Make sure your MicrosoftGame.config lists any Visual C/C++ runtime dependencies or you explicitly copy these dependencies into your package payload. For more information, see [Framework package dependencies](../packaging-framework-packages.md).

## Step 4: Create your icons

Place icon files in the root folder of your game content (or a subdirectory), scaled to the sizes specified in your MicrosoftGame.config `ShellVisuals` section. The [MicrosoftGame.config Editor](../../game-config/MicrosoftGameConfig-Editor.md) can generate these images from a single source image.

## Step 5: Generate a layout mapping file (optional)

This step is optional. By default, MSIXVC2 packages all content into a single chunk. You only need a layout mapping file if you want to split content into multiple chunks or add Intelligent Delivery tags.

To generate a layout mapping file, open a GDK command prompt and run the following command:

```
makepkg2 genmap /f layout.xml /d <your_game_folder>
```

This command creates a layout mapping file that defines how your content is organized into chunks. The generated file contains a single chunk. You can edit the file to split content into multiple chunks or add Intelligent Delivery tags as needed.

> [!TIP]
> With MSIXVC2, reordering chunks or moving files between chunks doesn't affect content update sizes. You can freely organize your layout without worrying about the update penalty that exists with MSIXVC.

For more information about layout files, see [Deployment Package Schema](../deployment/atoc-deployment-schema.md).

## Step 6: Create your MSIXVC2 package

Create the package:

```
makepkg2 pack /msixvc2 /f layout.xml /d <your_game_folder> /pc /pd <output_folder>
```

Key options:

| Option | Description |
|--------|-------------|
| `/msixvc2` | Generates an MSIXVC2 package. Without this flag, the command generates an MSIXVC package. At GA, `makepkg2` creates MSIXVC2 packages by default. |
| `/f <mapfile>` | Specifies the layout mapping file. If omitted, a default single-chunk layout is generated. |
| `/d <sourcedir>` | The directory containing your game content and MicrosoftGame.config. |
| `/pc` | Generates a package for use on PC. |
| `/pd <outputdir>` | The directory where the generated package is placed. |
| `/compress <method>` | Compress the output. Available methods: `Automatic` (default), `None`. `Automatic` uses Brotli for MSIXVC2 packages. |

## Step 7: Test your package locally

Enable developer mode on your target PC. Before installing an MSIXVC2 package, set the following registry key on the target device:

```
reg add HKLM\SOFTWARE\Microsoft\GamingServices /v Xvc2DeveloperMode /t REG_DWORD /d 1 /f
```

Alternatively, you can enable MSIXVC2 developer mode by using `packageutil2`:

```
packageutil2 set msixvc2 on
```

To disable MSIXVC2 developer mode:

```
packageutil2 set msixvc2 off
```

> [!NOTE]
> The `packageutil2 set` command requires the April 2026 GDK or later.

> [!IMPORTANT]
> This registry key is required during the preview. Without it, MSIXVC2 packages won't install. Run the command from an elevated (administrator) command prompt.

Then install your package:

```
wdapp install <your_package.msixvc>
```

MSIXVC2 packages install to the `[drive]:\XboxGames` folder. Files are installed in their original form and you can access them directly. This install location is the same location used by MSIXVC packages with [Flat File Install](../packaging-flatfileinstall.md).

You can upload the same package that you sideload locally to Partner Center&mdash;there's no separate submission package step.

## Step 8: Upload to Partner Center

> [!IMPORTANT]
> During the preview, publish MSIXVC2 packages to a **new branch** in Partner Center (for example, `msixvc2-preview`). Don't upload MSIXVC2 packages to the same branch as your existing MSIXVC packages. The two formats aren't interchangeable within a branch, and reverting a branch from MSIXVC2 back to MSIXVC requires a full upload and download of the package. For more information, see [Preview best practices](packaging-msixvc2-overview.md#preview-best-practices).

You have two options for uploading to Partner Center.

### Option A: Upload a pre-built package

If you already created a package in Step 6, upload it directly:

```
makepkg2 upload /pd <package_directory> /branch msixvc2-preview
```

### Option B: Upload from loose files (one-command workflow)

You can combine packaging and uploading into a single command. This command uploads directly from your build output without creating a local package file:

```
makepkg2 upload /d <your_game_folder> /msixvc2 /pc /branch msixvc2-preview
```

### Upload options

| Option | Description |
|--------|-------------|
| `/branch <branch>` | The branch to upload to. Defaults to `main`. During preview, use a dedicated MSIXVC2 branch. |
| `/flight <flight>` | The flight to upload to. Can't be used with `/branch`. |
| `/market <market>` | The market to upload to. Defaults to `default`. |
| `/storeid <storeId>` | The Store ID. Extracted from the package if not specified. |
| `/auth <method>` | Authentication method. Default is `CacheableBrowser`. See [Authentication methods](#authentication-methods) for CI/CD options. |

For the full list of upload options, see [Make package 2 (makepkg2.exe)](../deployment/makepkg2.md).

<a id="authentication-methods"></a>

## Authentication methods

The `upload` command supports multiple authentication methods for different environments.

| Method | Use case |
|--------|----------|
| `CacheableBrowser` | Default. Opens a browser for interactive sign-in. Caches credentials for subsequent uploads. |
| `Browser` | Opens a browser for interactive sign-in without caching. |
| `AzureCli` | Uses Azure CLI credentials. Useful when already authenticated via `az login`. |
| `AzurePipelines` | Uses the Azure Pipelines service connection. Ideal for Azure DevOps CI/CD pipelines. |
| `ManagedIdentity` | Uses an Azure Managed Identity. Requires `/clientid`. |
| `ManagedIdentityFederated` | Uses a federated Managed Identity. Requires `/clientid` and `/resourceid`. |
| `ClientSecret` | Uses a client ID and secret. Requires `/clientid` and `/clientsecret`. |
| `ClientCertificate` | Uses a client certificate. Requires `/clientid` and `/certthumbprint`. |
| `Environment` | Uses credentials from environment variables. |
| `Default` | Tries multiple methods in sequence. |

**Example: CI/CD pipeline upload**

```
makepkg2 upload /pd <package_directory> /auth AzurePipelines /branch <branch>
```

**Example: Service principal upload**

```
makepkg2 upload /pd <package_directory> /auth ClientSecret /clientid <appId> /clientsecret <secret> /branch <branch>
```

## Step 9: Validate and publish in Partner Center

After uploading, use Partner Center to validate and publish your package. The submission flow is unchanged from MSIXVC&mdash;select your package, configure availability, and submit.

During the preview, you can publish MSIXVC2 packages to your sandboxes for testing, but Submission Validator prevents them from being submitted to certification for public release. Contact your Microsoft representative if you need an exception.

> [!TIP]
> Keep your existing MSIXVC pipeline running for production releases. Use a separate Partner Center branch for MSIXVC2 evaluation so you can compare results side-by-side and migrate to MSIXVC2 at GA without disrupting your live game.

## Comparing update sizes

To evaluate the benefit of MSIXVC2 for your title, create packages from two sequential builds and compare:

```
makepkg2 pack /msixvc2 /f layout.xml /d <old_build> /pc /pd <output_old>
makepkg2 pack /msixvc2 /f layout.xml /d <new_build> /pc /pd <output_new> /priorpackage <output_old\package.msixvc>
```

Compare the resulting update size against an equivalent MSIXVC build to see the difference.

## Intelligent Delivery with MSIXVC2

Intelligent Delivery works the same way with MSIXVC2 as with MSIXVC. You define chunks in your layout mapping file and set language, device, or tag specifiers. The key difference is that reorganizing chunks or moving files between chunks has no impact on content update sizes.

For more information, see [Streaming Installation and Intelligent Delivery: an overview](streaming_install-intelligent_delivery.md).

## See also

[MSIXVC2 packaging overview](packaging-msixvc2-overview.md)  
[Make package 2 (makepkg2.exe)](../deployment/makepkg2.md)  
[Getting started with MSIXVC for PC](packaging-getting-started-for-PC.md)  
[Content updates with MSIXVC2](../packaging-updates-msixvc2.md)  
[MSIXVC2 encryption model](../packaging-encryption-msixvc2.md)  
[Xbox Game Package Manager](../xgpm.md)  
[Automating package uploading](../package-uploader.md)  
[Flat File Install overview](../packaging-flatfileinstall.md)  
[Deployment Package Schema](../deployment/atoc-deployment-schema.md)
