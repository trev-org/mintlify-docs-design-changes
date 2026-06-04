---
title: Create and upload a package for a game
description: Guidance for Managed Creators to create and upload a package for a game.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 5/1/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Create and upload a game package

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

This article describes how to create and upload a game package in Partner Center.

---

## Create a game package

When you prepare your game for release, combine the executable (.exe) and all required content into a single package.

Game packages must use the correct format:
 - Console games use the **XVC** format.
 - PC games use the **MSIXVC** format.
 - Other package types aren't supported.

For more information, see [Overview of packaging](/gaming/gdk/_content/gc/packaging/overviews/packaging).

> [!IMPORTANT]
> **Xbox Play Anywhere**
>
> If you're creating an Xbox Play Anywhere game, you need to create both an **XVC** package and an **MSIXVC** package.

### MakePkg

To create packages, use the [MakePkg](/gaming/gdk/_content/gc/packaging/deployment/makepkg) tool (MakePkg.exe) included in the Microsoft Game Development Kit (GDK).

If you don't have the GDK installed, see [Get started with the Microsoft Game Development Kit](/gaming/gdk/_content/gc/getstarted/get-started-home).

For packaging guidance, see:

* [Getting started with packaging for PC games](/gaming/gdk/_content/gc/packaging/overviews/packaging-getting-started-for-pc).
* [Getting started packaging titles for Xbox consoles](/gaming/gdk/_content/gc/packaging/overviews/packaging-getting-started-for-console).
* [GDK Development and Tools](/gaming/gdk/_content/gc/tools-console/gc-tools-toc).

### Packaging tools embedded in game engines

Some game engines, such as Unity and Unreal Engine, include built-in packaging tools. Implementation varies by engine, so refer to your engine's documentation for guidance.

---

## Upload a game package

### Prerequisites

Before you upload a package, make sure you have:

 - A valid package:
   - **MSIXVC** for Xbox on PC.
   - **XVC** for Xbox consoles.
   - Includes the executable (.exe) and all required content.ny other content that the game needs.
   - For **Xbox Play Anywhere**, prepare both package formats.
 - Enrollment in a Managed Creator program. If you're not enrolled, see [Onboarding as a new Creator](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md).
 - An active Partner Center account. If you don't have an account, contact your Xbox team.
 - An approved game concept. If you don't have concept approval, see [Game Concepts](../publishing-processes/managed-creators/publishing-processes-game-concepts.md).

### Package upload process

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard).
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select your game, or search for it.
1. Select **Packages**.
1. Make sure you're on the **Main** branch. For more information, see [Branches](../concepts/branches.md).
1. Select **Browse your files**, then select the package to upload.
1. When prompted, upload the **EKB (Escrow Key Blob)** file.
1. Upload the **Symbols** (.zip) file generated during packaging.
1. Upload the **Submission Validator** (.xml) log file generated during packaging. To learn more, see [Submission validator introduction](/gaming/gdk/_content/gc/packaging/subval/submissionvalidator).
1. Select **Save draft**.

---

## Next steps

* [Configure properties for a Game product](how-to-configure-properties.md)
