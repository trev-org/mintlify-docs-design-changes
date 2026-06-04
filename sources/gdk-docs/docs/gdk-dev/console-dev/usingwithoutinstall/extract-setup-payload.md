---
author: aaronste
title: "Extracting the Microsoft Game Development Kit (GDK) setup payload"
description: "Describes the process to obtain an extracted Microsoft Game Development Kit (GDK) setup payload."
kindex:
- Extracting the Microsoft Game Development Kit (GDK) setup payload
- "Microsoft Game Development Kit (GDK) manual setup extraction"
- Extract, Microsoft Game Development Kit (GDK), Win11SDK
- winsdksetup.exe, Windows Installer, msiexec.exe
- Windows 10 Software Development Kit, Windows 10 SDK
- Windows 11 Software Development Kit, Windows 11 SDK
- Customization, Without Install
- advanced
ms.author: aaronste
ms.topic: article
edited: 10/07/2019
ms.date: '08/01/2022'
permissioned-type: public
---

# Extracting the Microsoft Game Development Kit setup payload  
  
This document describes the process of obtaining an extracted Microsoft Game Development Kit (GDK) to be utilized without installation. This section provides instructions on how to do this for the GDK and the Windows SDK. This process is intended for advanced users.  

> [!NOTE]
> This process doesn't replace the need to install the Microsoft Game Development Kit (GDK) for most scenarios. The process enables the following scenarios:  
>  
> 1. Extract headers and libraries for use in your build process.  
> 1. Extract the Sideload folder so that [xbprovision (NDA topic)](../../../tools/tools-console/commandlinetools/xbprovision.md) can be run from a given Microsoft Game Development Kit (GDK) without installing that full Microsoft Game Development Kit (GDK).  
>  
>  
>  
> It's possible to run some of the Microsoft Game Development Kit (GDK) tools after extracting the setup payload in this way, however, doing so isn't officially supported and you may encounter issues.  
>  

## Downloading the extracted Microsoft Game Development Kit

The extracted Microsoft Game Development Kit (GDK), an option available to advanced users, allows specific files to be integrated into a build system without installing the full Microsoft Game Development Kit (GDK). The extracted Microsoft Game Development Kit (GDK) is available as a separate download option on the [Xbox Developer Downloads](https://aka.ms/gdkdl) site. The download option is listed with the word Extracted in the title to differentiate from the GDK installer download option.

> [!TIP]
> Using this download option will allow you to skip the manual extraction process for the Microsoft Game Development Kit. This is the recommended option.

## Manually extracting the Microsoft Game Development Kit

As an alternative to downloading the extracted Microsoft Game Development Kit (GDK), you can manually extract files from the regular Microsoft Game Development Kit (GDK) installer. After you download the regular Microsoft Game Development Kit (GDK), you can use Windows Installer (msiexec.exe) to extract each installer package to access its individual files.

> [!TIP]
> The following procedures show a specific use of Windows Installer (msiexec.exe). For more information about msiexec.exe, see [Windows Installer](/windows/desktop/Msi/windows-installer-portal).

### Extracting contents of all Microsoft Game Development Kit (GDK) MSIs (Using ExtractXboxOneDKs.ps1)

1. Download the Microsoft Game Development Kit installer on the [Xbox Developer Downloads](https://aka.ms/gdkdl) site. Or, download the public Microsoft Game Development Kit (GDK) installer from the [GitHub repo](https://github.com/microsoft/GDK) (supports PC development only).
The file you download will have a name such as *GDK_03_2022.zip*. Make note of its location on your computer. 
2. Extract the contents of the local .zip file.
3. Open a PowerShell prompt and navigate to the **SetupScripts** directory within the folder the contents were extracted to (such as C:\GDKDownload\SetupScripts)
   * The ExtractXboxOneDKs.ps1 script in this directory can be used to extract the GDK. Its usage is:
      * `.\ExtractXboxOneDKs.ps1 -SourcePath <MSI_Source_Folder> -TargetDirectory <Target_Directory>`
      * As an example, the SourcePath is where the .zip file was extracted to (such as C:\GDKDownload). The TargetDirectory is where the extracted contents will go (such as C:\ExtractedGDK\220300)
4. After running the ExtractXboxOneDKs.ps1 script, the extracted files will exist in the target directory (such as C:\ExtractedGDK\220300)
5. Navigate to the target directory, then copy the extracted GDK files to the location required by your build system.

> [!NOTE]
> The target directory includes a set of .msi files and a Windows Kits folder as part of the extraction. These should be ignored and can be deleted. The Microsoft GDK folder is the only folder in the Extraction target directory that's necessary to keep.

### Extracting contents of all Microsoft Game Development Kit (GDK) MSIs (Manual)

1. After you unzip the GDK (steps 1-2 in the above section), you can use Windows Installer (msiexec.exe) to extract each installer package to access its individual files.
1. In a command prompt window, navigate to the folder with the extracted files from the .zip file, then run the following command line:<br/>

   ```cmd
   for /F "delims=" %G in ('dir /b /s "installation_folder\*.msi"') DO (
   start /wait msiexec.exe /a "%G" TARGETDIR="msi_extraction_path" /qb
   )  
   ```

   where **installation_folder** is the path to the downloaded files of the GDK download, and **msi_extraction_path** specifies the folder where you want the files of the Windows Installer (.msi) files to be extracted. For example:<br/>

   ```cmd
   for /F "delims=" %G in ('dir /b /s "C:\GDKDownload\*.msi"') DO (
   start /wait msiexec.exe /a "%G" TARGETDIR="C:\ExtractedGDK\220300\" /qb
   )  
   ```

   > [!NOTE]
   > If this code example is used in a script instead of directly from the command line, the %G needs to be replaced with %%G.
1. Navigate to msi_extraction_path, then copy the extracted GDK files to the location required by your build system. 

## Extracting the Windows SDK

Manual extraction of the Windows SDK setup payload, an option available to advanced users, allows specific files to be integrated into a build system without installing the full Windows SDK. This step isn't required to use an extracted Microsoft Game Development Kit (GDK), as long as the Windows SDK is installed on the system.

### Extracting contents of all Windows SDK MSIs (Using ExtractXboxOneDKs.ps1)

> [!NOTE]
> As of the October 2023 GDK, the GDK requires the Windows 11 SDK (Version 10.0.22000.0) or later.

1. Download the Windows SDK Installer from [Windows Dev Center](https://developer.microsoft.com/windows/downloads/windows-sdk/). The file you download will have a name such as winsdksetup.exe. Make note of its location on your computer.
2. Open a command prompt and run **winsdksetup.exe /layout C:\WinSDKDownload** in the directory the exe was downloaded to (this will extract the msi files from the exe).
3. Step through the UI, leave all of the checkboxes checked, and let it download all of the files.
4. Navigate to the **C:\WinSDKDownload** to confirm the .msi files are present.

   > [!TIP]
   > Alternately, you can download the Windows SDK .ISO and mount it. It contains the same .msi files produced by steps 1-4.

5. Using the script noted in the **Extracting contents of all Microsoft Game Development Kit (GDK) MSIs (Using ExtractXboxOneDKs.ps1)** above, point to the msi folder (such as C:\WinSDKDownload) for the SourcePath and another folder (such as C:\ExtractedWinSDK) for the TargetDirectory where the extracted contents will go.

   > [!NOTE]
   > Due to long paths of included files, it's recommended to keep the source and target directories (for extraction only) limited to 45 characters (including drive letter). They can then be moved after the extraction is completed. **Exceeding 45 characters in the folder path will cause extraction failures** due to exceeding max file path length.

6. After running the ExtractXboxOneDKs.ps1 script, the extracted files will exist in the target directory (such as C:\ExtractedWinSDK)
7. Navigate to the target directory, then copy the extracted Windows SDK files to the location required by your build system.

   > [!NOTE]
   > Many files/folders will exist in the target directory after this extraction. The Windows Kits\10 folder is the folder utilized in this example for build system reference. Other folders may be required depending on the desired action.

### Extracting contents of all Windows SDK MSIs (Manual)

1. After you get a set of .msi files from the winsdksetup.exe (steps 1-4 in the above section), you can use Windows Installer (msiexec.exe) to extract each installer package to access its individual files.
1. In a command prompt window, navigate to the folder with the extracted files from the .zip file, then run the following command line:<br/>

   ```cmd
   for /F "delims=" %G in ('dir /b /s "installation_folder\*.msi"') DO (
   start /wait msiexec.exe /a "%G" TARGETDIR="msi_extraction_path" /qb
   )  
   ```

   where **installation_folder** is the path to the downloaded files of the Windows SDK download, and **msi_extraction_path** specifies the folder where you want the files of the Windows Installer (.msi) files to be extracted. For example:<br/>

   ```cmd
   for /F "delims=" %G in ('dir /b /s "C:\WinSDKDownload\*.msi"') DO (
   start /wait msiexec.exe /a "%G" TARGETDIR="C:\ExtractedWinSDK" /qb
   )  
   ```

   > [!NOTE]
   > If this code example is used in a script instead of directly from the command line, the %G needs to be replaced with %%G.
1. Navigate to msi_extraction_path, then copy the extracted Windows SDK files to the location required by your build system.  

## Recommended layout for supporting multiple extracted Microsoft Game Development Kit (GDK) versions

When extracting the Microsoft Game Development Kit, it's assumed this folder will live in a shared location or source control system to be accessed when building your title. There may be a scenario where multiple versions of the Microsoft Game Development Kit (GDK) are desired. In this scenario, our recommendation regarding the layout of multiple extracted Microsoft Game Development Kit (GDK) versions is as follows:

* ...\ExtractedGDK\211000\Microsoft GDK\...
* ...\ExtractedGDK\220300\Microsoft GDK\...

This allows for the full payload to be present for each version. We recommend you use a build environment variable to switch between versions to define what is used during your build compilation process.

## See also

[Configuring Build Environment without installing Microsoft Game Development Kit (GDK)](build-environment-withoutinstall.md)  

[Using the Microsoft Game Development Kit (GDK) without installation](gc-usingwithoutinstall-toc.md)