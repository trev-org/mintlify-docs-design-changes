---
author: M-Stahl
title: "Title packaging, content updates, and streaming-installation testing"
description: "Describes how to create packages for streaming installation for local iteration, performance validation, pre-submission testing, and final submission. It also describes the steps run by the MakePkg tool during the packaging process."
ms.assetid: 174e4132-5d01-0a6b-0a06-6b1987426c08
kindex:
- Title Packaging Content Updates and Streaming-Installation Testing
- packaging
- content updates
- updating
- streaming installation
- installation, streaming
- testing
- makepkg.exe
ms.topic: article
edited: 4/1/2026
ms.date: '08/01/2022'
permissioned-type: public
---

# Title packaging, content updates, and streaming-installation testing


This article explains how to create packages for streaming installation across the development lifecycle, including local iteration, performance validation, presubmission testing, and final submission. It describes the steps that the MakePkg tool runs during packaging and outlines recommended practices for packaging and testing streaming installation during development.  

## Introduction  

[MakePkg.exe](deployment/makepkg.md) is a tool that places content into a binary packaged file, referred to as an Xbox Virtual Container (XVC). Packages for console have the file name extension of .xvc and packages for PC have the file name extension of .msixvc. In addition to the extension difference, there's a suffix added to the package name to differentiate between Xbox One Family (_x) and Xbox Series X&#124;S Family (_xs) packages.


MakePkg.exe uses your title's content and a mapping file as input to produce packages that are encrypted by using either a well-known test key, a randomly generated key, or a stable-key safe for encryption. The key used for encryption depends on whether the package is for local testing or submission to Microsoft for publishing. The following sections detail the use cases.  


The XML in the [mapping file](deployment/atoc-deployment-schema.md) serves two purposes. First, it specifies the location of files that are available to the title at runtime. Second, it specifies the chunk file that each file belongs to. A set of chunks, known as the *launch set*, are always installed before a title is allowed to run. The remaining chunks are installed while the title is running. APIs are available to query the progress of chunk installation and to modify the installation order of chunks that aren't yet installed.  

In this article:  

   *  [Steps during packaging](#steps_during_packaging)  
   *  [Recommended steps for packaging during development](#recommended_steps_for_packaging_during_development)  
   *  [Testing of streaming installation packages](#testing_of_streaming_installation_packages)  
   *  [Best practices](#best_practices)  
   *  [Packaging failures caused by open data connections](#open-data-connections)  
   *  [Resources and guidance](#resources_and_guidance)  
   *  [See also](#see_also)

<a id="steps_during_packaging"></a>

## Steps during packaging  

The MakePkg packaging process includes several steps.  

### MicrosoftGame.config and file-existence validation  

The `makepkg` command checks that the [MicrosoftGame.config](../game-config/MicrosoftGameConfig-Overview.md) file in the content source directory is valid and can be installed.

When you run the `makepkg pack` command, it ensures that files referenced within the MicrosoftGame.config are in the source directory. It validates that these files are included in the package for the launch set. This validation includes binaries, image files, and any other resources.    

### Binary signing  

Xbox Code Integrity (XCI) scans and signs files in your title. As part of this process, it modifies PE headers detected in files before writing them to the package file. If signing fails, an error message is reported. The message includes a command to manually rerun xcihash.exe to gather more details about the signing failure.  

### Package creation  

As soon as MakePkg completes the prevalidation steps, it creates a package file. MakePkg then copies the source files, including the signed executables, into the package file in the chunks specified by the XML map file.  

> [!NOTE]
> Console only: The last step of package creation involves embedding a Game OS file (GameOs.xvd). This file is part of the Microsoft Game Development Kit (GDK) and must be in the layout directory next to the executable for your game. The `/gameos` flag specifies an alternate source location for the Game OS file.  

### Encryption  

|   Type                 | Test Signing (**/lt**) | Random Key (**/l**) | Stable Key (**/lk SECRET.LEKB**) |
| ---                    | ---                    | ---                 | ---                              |
| Delta Upload           | Yes                    | No                  | Yes                              |
| packageutil compare    | Yes                    | No                  | Yes                              |
| Secure Upload          | No                     | Yes                 | Yes                              |
| Package Secure At Rest | No                     | Yes                 | Yes                              |
| Sideload on Devkit     | Yes                    | No                  | Yes                              |
| Sideload on PC         | Yes                    | No                  | No                               |

#### Test Signing (default encryption)

The default MakePkg behavior is to create test-signed packages but is also denoted when using the  `/lt` switch when calling `makepkg pack`. Test-signing encrypts the generated package file by using a well-known test encryption key, intended for performance testing validation, for running on Xbox and PC. Although the effect of real-time package decryption is designed to be transparent to the title, this ensures that any possible performance issues resulting from encryption are discovered before certification and final publishing of titles. Test-signed packages aren't intended to be used for cryptographically securing content, because the encryption uses a fixed key. A test-signed package can be installed on a Development Kit by using **xbapp install** and on a development PC by using **wdapp install**.

#### Random Key Encryption (`/l` switch)

The MakePkg `/l` switch encrypts the package file with a randomly generated encryption key. In addition to your title package, MakePkg `/l` emits a file with a name in the format *PackageFullName_licenseName_GUID.EKB*. (Note the use of the underscore (_) character.) Packages created with the `/l` switch can't be installed on a Development Kit or development PC. You should test your title by using test-signed packages until the title passes all checks and presubmission tests. After reaching that state, run MakePkg with the `/l` switch before final submission to Microsoft.  

#### Recommended - Stable Key Encryption  (Genkey + /lk switch)

The Makepkg `/lk` switch encrypts the package with a stable (always the same) key made by the `makepkg genkey` command. In addition to your title package, `makepkg /lk` emits files named in the format *PackageFullName_licenseName_GUID.EKB* and *PackageFullName_licenseName_GUID.CEKB*. (Note the use of the underscore (_) character.) Packages created with the `/lk` switch can be installed on a Development Kit, but not on a development PC. For PCs, you should test your title by using test-signed packages until the title passes all checks and presubmission tests.

This is the recommended encryption mode for development kit testing and submission, due to these benefits: 
1. packageutil compare can generate correct update size estimates (unlike /l).
2. It enables secure delta upload to Partner Center using the same algorithm that consoles and PCs use to download content updates.
3. It can be installed onto devkits (unlike `/l`).
4. It uses secure encryption key material and can only be decrypted in specific environments (unlike `/lt`).

Unlike the `/lt` and `/l` encryption modes, the `/lk` mode requires an extra one time step to use it:
1. One time: Run `makepkg genkey /ekb SECRET_KEY.lekb` to create the SECRET_KEY.lekb file. This is the Local Escrowed Key Blob (LEKB) which
   stores the stable content key that encrypts your package. It should be stored in a secure location with need to know access. In an ideal
   setup only official build machines/accounts should have access to it.
2. Package creation: Run `makepkg pack /lk SECRET_KEY.lekb ...`. This creates a package encrypted using the key stored in the SECRET_KEY.lekb file.
3. Package upload: The XVC and EKB files are uploaded to Partner Center as normal. The LEKB and CEKB files aren't uploaded.

`xbapp install` automatically installs the CEKB file necessary to load the package onto an Xbox devkit. If you're testing an installation
scenario other than tool-based installation (game disc, external storage, console-to-console transfer), use the `xbapp installkey` command to
install only the CEKB file.

> [!WARNING]  
> The contents of the LEKB file are only lightly obfuscated. It's your responsibility to ensure the security of your content packages by securing access to the LEKB file. Anyone possessing the LEKB file and the content package file output by `makepkg pack`
can decrypt its contents.

> [!WARNING]  
> The contents of the CEKB file allow the package to be loaded on any active Xbox devkit. It's your responsibility to ensure the security of your content packages by securing access to the CEKB file. Anyone possessing the CEKB file, an active Xbox devkit, and the content package file output by `makepkg pack`
can install the package on their devkit, can start the package, and can xbcp the files out of the package.  

### Submission validation

MakePkg automatically runs [Submission Validator (SubmissionValidator.dll)](subval/submissionvalidator.md) against the title files after creating the package. The goal of the Submission Validator is to check for errors and issues that can cause problems for titles later in the ingestion, submission, or certification processes at Microsoft or in future content updates. You need to correct all detected problems before you can generate a signed package for upload to Partner Center.

The submission validation process generates an XML log file detailing the nature and location of any failures. The process writes this log file to the same location specified by the `/pd` parameter of MakePkg for output of the package file. This log can contain failures or warnings. You must address failures before you can submit a package to Microsoft. Consider remediating warnings to ensure that titles comply with policy and Xbox Requirements (XR) guidance.    

When you upload a package to Partner Center and submit it for the ingestion process, the validation checks run again. This process ensures that the title is checked by using the latest version of Submission Validator and that any problems are caught as early as possible.  

#### Submission validation tests

| Submission and validation tests | Description |
|---|---|
| **Foreign files** | Verify that the title contains no prohibited files. Prohibited files include source and debug files (for example, \*.c, \*.cpp, \*.obj, \*.lib, \*.cs, and \*.h) and any system files that are contained in the Game OS volume. |
| **MicrosoftGame.config** | Various config checks not performed by MakePkg: Resolution and bit depth of logo and startup-screen images. Checks packages for proper mod support (PC Desktop only). |
| **Binary scan** | All .exe and .dll files are scanned for any nonretail dependencies. Any managed-code binaries cause a failure (Console only). Other problems that are detected include non-Xbox executables (Console only) and 32-bit executables (Console only). |

The specific tests evolve over time as Microsoft identifies new issues. Passing the Submission Validator checks shouldn't be construed as an indication that other issues won't arise with the title submission during the ingestion and certification process. Rather, the intent is merely to reduce the time and cost of rejections resulting from foreseeable errors. In addition, although the Submission Validator can check for certain security-related issues, it shouldn't be viewed as a security test for a title.  

You can download the latest version of Submission Validator from the Xbox Game Developer (XGD) site. Because the tool can evolve at a different pace than the Xbox One Software Development Kit releases, be sure that you're using the latest version to avoid any validation-failure rejections in the submission process. To get the latest version, see [Xbox Developer Downloads->Xbox One->Submission Validator](https://aka.ms/gdkdl).  

For more information about Submission Validator, see [Submission Validator (SubmissionValidator.dll)](subval/submissionvalidator.md) in the GDK documentation.  

If you have questions about the validation process, contact your Microsoft Account Representative.  

<a id="recommended_steps_for_packaging_during_development"></a>

## Recommended steps for packaging during development  

To create packages during development, use the following steps. Use `wdapp` instead of `xbapp` when targeting PC.    
   1. Iterate locally by using test-signed packages and **xbapp install** from your development PC.

      **MakePkg.exe pack /f** *Mapfile* **/d** *LooseContentDir* **/pd** *OutputFolder*

      To get started, see [Xbox Developer Downloads](https://aka.ms/xgddl).

   1. Run your title by launching from the shell or by using **xbapp launch**.
      
      **xbapp install** *local-XVC-path* or **xbapp install** *http-URI*
      
      To test alternate options for streaming installation, see [Testing streaming installation packages](#testing-streaming-installation-packages-console) later in this article.

   1. Test title installation from the optical drive by using a test-signed package burned to a Blu-ray Disc in the root folder. After inserting the disc into the Xbox Development Kit, run the following command.
   
       **xbapp install** XO:\\*XVC-file-name*

   1. Prepare your final submission by using the same packaging command as your test-signed package, but add the `/l` flag.   

<a id="testing_of_streaming_installation_packages"></a>

## Testing streaming installation packages (PC)

Use the `wdapp` command to install packages on the test PC.  

> [!NOTE]
> Currently, the test MSIXVC package must exist on a physical drive on the test PC or a web server. In a future update, installation from Universal Naming Convention (UNC) shares will be added.

For more information, see [Getting started packaging for PC](overviews/packaging-getting-started-for-PC.md).

## Testing streaming installation packages (console) 

You can test the installation of test-signed streaming installation packages in four ways.  

### Stream from the development PC  

Streaming from the development PC doesn't support any throughput throttling. The speed of the installation depends on the processor and I/O characteristics of your development PC, as well as the bandwidth of the network connection between the development PC and the Development Kit. You can expect speeds of 300 Mbps (approximately 36 MiB/s) or higher over gigabit Ethernet connections from modern development PCs with mechanical hard drives.  

**xbapp install** *dev-pc-path-to-XVC*  

[Install via the command line](../../../tools/tools-console/commandlinetools/xbapp.md#xbapp-install)

[Install via Xbox Manager](../../../tools/tools-console/xbom/manager-tool-managing-applications.md#deploying-apps)

### Host the package on a web server  

If your web server supports configuration of bandwidth throttling, hosting the package on a web server allows simulation of different network delivery speeds. The Xbox One platform handles connection failures and retry logic. Your title should run the same when installing from an internet source as from an optical disc, aside from speed.  

**xbapp install** *http-URI-to-package*  

[Install via the command line](../../../tools/tools-console/commandlinetools/xbapp.md#xbapp-install)

[Install via Xbox Manager](../../../tools/tools-console/xbom/manager-tool-managing-applications.md#deploying-apps)

### Burn the package to a disc, and then install from a command line  

Burn an optical disc with your XVC in the root directory, and then install the package by using the following command.  

**xbapp install** XO:\\*XVC-file-name*  

### Burn the package to a disc, and then install through the shell  

Burn an optical disc with a folder named MSXC that contains your package.  

Insert the disc into a running Development Kit. The shell automatically starts installing your title, and the Development Kit displays a notification after the launch set is installed, and the title can be launched.  

<a id="best_practices"></a>

## Best practices

### Use subfile content updates

Use subfile content updates, which reduce the size of content updates. Author your package layout to ensure optimal content updates in the future.  
  
For more information about authoring packages for optimal update, see [Content update best practices](packaging-updates.md).  

### Xbox Requirement 034 (XR-034: Streaming Install Initial Play Marker)  
  
Including an initial player marker is optional, but highly recommended. It allows a user to run the title before it's completely installed, while installation continues in the background. Per [XR-034](../../../store/policies/Console/certification-requirements.md#content-packages-and-updates): Streaming Install Initial Player Marker, titles that include an Initial Play Marker must provide a gameplay experience when launched from the initial play marker.

### Test your title  
  
Test your title while it's being installed from various sources and at different speeds.  

### Use the latest Submission Validator  
  
Always use the most up-to-date version of Submission Validator.  

The latest version of Submission Validator is available from [Xbox Developer Downloads->Xbox One->Submission Validator](https://aka.ms/gdkdl).  

<a id="open-data-connections"></a>

### Packaging failures caused by open data connections

When you install a package by using `xbapp install /w`, or when **Xbox Manager** installs a package with the **Keep data connection open** option enabled (used for Intelligent Delivery and chunk-on-demand scenarios), the data pipe between the console and the package file on your PC stays open after the install finishes. This open connection locks the package file.

If you try to rebuild or repackage your title while this pipe is open, `makepkg` fails with a sharing violation because it can't write to the locked package file.

**To resolve this issue, close the open data connection before rebuilding:**

- **Xbox Manager**: In the Xbox Manager app, find the installed package and uncheck the **Keep data connection open** option, or uninstall and reinstall the package without that option enabled.
- **xbapp install**: Omit the `/w` flag when you don't need the pipe to stay open after install. Use `/w` only when your title needs to request extra chunks at runtime during development testing.
- **Close Xbox Manager**: Closing Xbox Manager entirely releases any open file handles it holds on package files.

> [!TIP]
> If you're using an engine integration (such as Unreal Engine's Xbox platform tooling) that outputs the package file to a fixed output directory, make sure Xbox Manager releases the file before triggering a new build. Moving the output directory between builds is another way to avoid conflicts.

<a id="resources_and_guidance"></a>

## Resources and guidance  

For more information, see the following articles:

* System > Overviews > [Streaming Installation and Intelligent Delivery: an overview](overviews/streaming_install-intelligent_delivery.md)  
* System > Overviews > Streaming Installation > [Dynamic reordering of chunks](packaging-chunkreordering.md)  
* System > Overviews > Streaming Installation > [Streaming Installation: status](packaging-installstatus.md)  
* Test, Automation, and Publishing > Tools > Streaming Installation > [Deployment Package Schema](deployment/atoc-deployment-schema.md)  
* Test, Automation, and Publishing > Tools > Streaming Installation > [Make Package (makepkg.exe)](deployment/makepkg.md)  

<a id="see_also"></a>

## See also

[MicrosoftGame.config](../game-config/MicrosoftGameConfig-toc.md)  
[Submission Validator (SubmissionValidator.dll)](subval/submissionvalidator.md)  
[Submission Validator Quality Tests](subval/submissionvalidator-tests.md)  
[Xbox Manager: managing apps and files](../../../tools/tools-console/xbom/manager-tool-managing-applications.md#deploying-apps)
