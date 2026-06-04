---
title: Packages (classic experience)
description: Manage game packages in Partner Center using the classic UI.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 3/26/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Packages (classic experience)

When you publish a game to the Microsoft Store, use the Partner Center package management experience to upload, validate, certify, test, publish, and roll back game packages.

By using Partner Center, you can:
 - Upload packages for Xbox consoles and PC
 - Review package validation problems
 - Submit packages for certification
 - Test packages with selected audiences (optional)
 - Publish packages to all players
 - Roll back instantly if something goes wrong

> [!IMPORTANT]
> This article focuses on the classic **Packages** experience in Partner Center. For detailed information about the latest **Packages** experience, see [Packages](game-package-management.md).

## Get started with game packages

You must package your game build in a format that your game's supported device families can recognize and use. To configure the supported device families for your game, select them in [Game setup](game-setup-overview.md).

Each device family requires different package formats. 

| Device family           | Customers on these devices can download and play your game | Upload package format | More information for packaging |
|-------------------------|----------------------|----------------|----------------|
| Xbox | Xbox One (including Xbox One S and Xbox One X), Xbox Series X\|S | XVC | [Get started with packaging for Xbox console games](/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-console) |
| Desktop | Windows 10 or Windows 11 device family devices | MSIXVC | [Get started with packaging for PC games](/gaming/gdk/_content/gc/packaging/overviews/packaging-getting-started-for-pc) |

> [!NOTE]
> For Windows apps, you can use MSIX, MSI, EXE, or PWA formats. These formats aren't supported for Xbox games on PC or consoles. For more information about app publishing, see [Get started with Windows apps](/windows/apps/publish/get-started).

### Package version numbers

When you create a package, specify the version number in the **Version** attribute of the **Identity** element within your MicrosoftGame.Config file. You can use the same version number for each platform you support, and increment the version number for each new package that you create. You must increment version numbers for each new submission to Certification.

### Validate packages with Submission Validator

Submission Validator is a component of the Microsoft Game Development Kit (GDK) that runs a series of basic quality checks on a game package. Submission Validator isn't used as a standalone tool. Instead, it runs automatically when you use the [makepkg pack](/gaming/gdk/_content/gc/packaging/deployment/makepkg) command to build a game package. Submission Validator is included with the GDK. Updated versions are available for download from [Microsoft Game Dev - Game Development Resources](https://developer.microsoft.com/en-us/games/resources/).

Submission Validator runs after the game package is created. Failures and warnings in the validation are recorded in the validation log, which is written to the output location that you specify on the `makepkg` command line. This location is the same output location where the finished game package is created. A localized version of the output is also available (in addition to the English output) at the same location if you set the `/validationlanguage` parameter on `makepkg`.

A subset of Submission Validator tests can run before title package creation by running the [makepkg validate](/gaming/gdk/_content/gc/packaging/deployment/makepkg) command line. Run it to catch issues before package creation.

If failures or warnings are listed in the validation log, resolve these issues before submitting your package for Certification. For more information, see [Submission Validator - Understanding the results log](/gaming/gdk/_content/gc/packaging/subval/submissionvalidator#understanding-the-results-log).

## Required package files for Game products

When you upload an Xbox console or PC game package in Partner Center, some files are required, while others are optional but recommended.

### Mandatory files

- **XVC (Xbox consoles)/MSIXVC (PC):** This file is your main package file containing the prepared game build.
- **Encryption Key Bundle (EKB):** This file ensures correct encryption for player distribution. XVC and MSIXVC uploads can't proceed until a valid EKB is uploaded.
- **Submission Validator Log (.xml):** Submission Validator is a component of the GDK that runs a series of quality checks on a game package. The output is an XML log file that you must upload to Partner Center. For packages intended for Certification or RETAIL publishing, the log must display an overall pass result, or you must have an approved exception for each issue tagged as *failure* in the log file. You should also check the log file for any issues tagged as *warning* and ensure that the warnings are expected. Use the latest version of Submission Validator. If the version is expired, the log displays an error with instructions to update.

### Optional files (recommended) 
- **Symbols (.zip):** This .zip folder, generated during package creation, contains the required symbol files for comprehensive crash dump reporting.
- **Disc layout file (.xml):** This file is only needed for disc-based or multi-disc releases to define structure and install order. Digital-only games don't need this file.

> [!NOTE]
> The disc layout file is different from the layout.xml file generated by **makepkg** that specifies your package's chunk layout. Don't upload this layout.xml file to the disc layout.

## Get started with branches for packages

Branches let you work on **multiple versions of your game build at the same time.** Each branch represents a separate workflow—for example preparing your live build, testing an internal build, or creating a hotfix—without interfering with one another.

### Why branches matter
Using branches effectively enables you to:
 - **Certify a stable build** while also uploading and testing a different build in your development or QA sandbox.
 - **Test risky changes** without touching the live build.
 - **Hotfix safely**, keeping urgent fixes isolated from ongoing development.

### Branch behavior in publishing
Branches have different restrictions depending on your publishing destination.
  - You can publish any branch to a development sandbox or submit it for certification.
 - You can only publish the **Main Branch** to the RETAIL sandbox.

You can import packages into the **Main Branch** from another branch when you're ready to publish to RETAIL.

### Create a new branch
To create a new branch:
 1. Select the **+ New Branch** button on the branch navigation.
 1. Enter a name for the branch. Use a name that describes the branch's purpose (for example, QA) or destination (for example, ABCDEF.1).
 1. Select **Continue**.

After creating a branch, you can use the **Import** functionality to copy a package between branches at any time. 

### Branch history
Each branch has a **History** button near the upper-right corner. Select **History** to view the user, date, time, and other details of the actions taken in the branch. 

## Upload packages

Drag and drop packages into the branch, or select **browse your files** to select packages from your file explorer. After uploading the XVC/MSIXVC package, you can upload other required and optional files.

### Configure market-specific packages

If your game supports separate packages for different release markets, use the **Add market-specific packages** UI to make these assignments. The UI guides you through creating and naming the market group. After creating the group, you can upload the package for each market group. 

### Specify availability and predownload dates

A **Base release** is a game's first published package. It's available for download in a sandbox immediately after it's published there. Whether the package can be launched depends on the product's **Pricing and availability** schedule.

For **Content Updates (CUs)**, also known as patches, two availability options exist for each XVC/MSIXVC package:
 - **Availability date (mandatory date):** Defines when the update becomes required. If the update isn't installed, the game can't be played while connected to the Xbox network.
 - **Pre-download date:** Defines when the update can be downloaded in the background on devices where this functionality is enabled. This option enables players to jump in immediately on the availability date.

Set the pre-download date to be **at least 48 hours** before the availability date to reduce launch-day wait times.

If both dates are the same, there's no pre-download. The CU only downloads after the availability date. If you don't configure an availability date, the CU publishes immediately after certification.

For **market‑specific packages**, set availability and pre‑download dates for each market package. Each package follows its own schedule.

## Certify packages

Xbox Certification verifies your build meets platform requirements. If your build doesn't pass Xbox Certification, fix the reported issues, create and upload a new build, and submit to Certification again. Certification always applies to the entire build, not individual files. Select the **Certify** button at the top of the branch containing the packages you want to submit to send your build to Certification.

For more information, see [Submitting to Certification](../publishing-processes/managed-creators/publishing-processes-submitting-to-certification.md).

> [!NOTE]
> Before submitting any packages to Certification, complete the [Certification questionnaire](certification/certification-supplemental-info.md) for the product by selecting **Certification** from the product's page navigation.

Use **Certify** in any branch of the **Packages** UI to submit your packages into the Xbox Certification workflow. The following options are available when you certify a package. They might apply, depending on your submission type.

## Manage flights

Use package **flights** to make packages available to specific audiences. The audience type for a package flight depends on the targeted platform.

 - Xbox console package flights use **Known Device Groups**.
 - PC package flights use **Known User Groups**.

For more information about creating new package flights and managing the packages flighted to specific audiences, see [How to configure package flights for game packages](../how-to/how-to-package-flights-for-xvc-packages.md).

## Roll back a published package
If a recently published package causes problems, roll back to the previously published package. Select **Configure rollback** and then select the package information in the **Rollback package** pane that opens. The older package goes live again with no re-upload or re-certification needed.

---

## See also

- [Create and upload a game package](../tutorial-xbox-managed/how-to-create-a-package.md)
- [Overview of packaging](/gaming/gdk/_content/gc/packaging/overviews/packaging)

