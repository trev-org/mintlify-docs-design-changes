---
author: M-Stahl
title: "Submission Validator quality checks"
description: "Describes the quality checks that are performed by Submission Validator."
kindex:
- Submission Validator Quality Checks
- SubmissionValidator.dll, tests
ms.author: dmcmahon
ms.topic: article
edited: 04/02/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Submission Validator quality checks
   
  
The types of problems that Submission Validator identifies grow and evolve over time. The goal is to smooth the way from submission through certification, and to market.   
   
Submission Validator runs the following quality checks:  
   *  [Available version](#ID4EY)  
   *  [Approved GDK Version](#ID4AGDK)  
   *  [Approved Game OS](#ID4EKB)  
   *  [Launch marker in final chunk for content (downloadable content (DLC))](#ID4EHD)
   *  [Additional Resources.pri files](#ID4EDE)
   *  [Missing Resources.pri file](#ID4ERF)
   *  [One application per package](#ID4EBBAC)  
   *  [Maximum package size](#ID4E3BAC)  
   *  [Foreign File](#ID4EDCAC)  
   *  [Binary Scan](#ID4EEEAC)  
   *  [Microsoft (MS) Component Versions](#ID4ESFAC)
   *  [Missing Dependent Files](#ID4MDF)
   *  [ARM64 Binaries](#IDDKDF)

<a id="ID4EY"></a>

## Available version  
  
Submission Validator checks to ensure that the version you installed is the most current and correct version. If it isn't, the Submission Validator output log shows a failure. The failure message, shown in the following section, contains a link to download the correct version.   
   
```xml
<component>Available Version Check</component>
<failure>A required update to Submission Validator is available. The latest version can be downloaded from https://aka.ms/currentsubvalzip. Download and install the update, then rebuild the package. Contact your 
Developer Account Manager for assistance.</failure> 
```
  
<a id="ID4AGDK"></a>


## Approved GDK version
   
When you create a GDK package for PC (msixvc), Submission Validator checks that the GDK you used to package is from an approved GDK version. If the version isn't on the approved or deprecated list, the validator log shows a failure.
   
```xml
<failure>ILI_PcGdkUnsupportedThe GDK used to compile your binaries is not supported. Use only supported GDK versions according to the Approved Libraries page located at https://aka.ms/GdkApprovedLibs</failure>
```
If the version is on the deprecated list, the validator log shows an informational message. This message indicates that the version is only valid for content updates for titles originally released on that deprecated version.

```xml
<info>The GDK used to compile your binaries is not approved for new title submissions. This GDK version is allowed only for Content Updates where the original release used this GDK version. Use only supported GDK versions according to the Approved Libraries page located at  http://aka.ms/GdkApprovedLibs</info>
```


If Submission Validator can't determine the GDK version from the files included in the package—for example, because the files are encrypted—it displays the following message. 

```xml
<info>A GDK version was not able to be extracted from your game executable. The version of the tools used for packaging will be used as the GDK version for this submission. If this is not correct, ensure any executables listed in your MicrosoftGame.config include XGameRuntime.h or you include appropriate middleware which consumes this header. See https://aka.ms/EmbeddedGdkVersion for more information.</info>
```

<a id="EmbeddedGdkVersion"></a>

### How the GDK version is embedded in game executables

When you compile a game executable by using a GDK that includes `XGameRuntime.h`, the compiler embeds the GDK version into a custom PE section named `.xbld`. Submission Validator reads this section to determine which GDK version was used to build the title's binaries.

If the `.xbld` section is missing or unreadable, Submission Validator falls back to using the version of the packaging tools as the GDK version for the submission. This version might not accurately represent the GDK version used to compile your binaries.

**Common cause: Anti-tamper software**

Anti-tamper and data-encryption tools that process your executable might encrypt or remove the `.xbld` section. This action makes the section unreadable by Submission Validator. To resolve this problem, configure your anti-tamper tool to exclude the `.xbld` section from processing.

#### Themida

Add the following **Advanced Option** (comma-separated) to your Themida configuration file to exclude the `.xbld` section from protection:

```
OPTION_ADVANCED_DONT_PROCESS_SECTIONS=.xbld
```

#### GuardIT

To exclude the `.xbld` section from data encryption in GuardIT, add an `<exclude>` entry to your encryption guard configuration:

```xml
<guard_cmd name="EncryptionWrapper">
    <encryption_wrapper>
        <action>
            <fail />
        </action>
        <algorithm_decryption>
            <use>AES128</use>
        </algorithm_decryption>
        <algorithm_integrity>
            <use>fast</use>
        </algorithm_integrity>
        <protected_types>
            <custom>
                <data>true</data>
                <native_code>true</native_code>
                <unused_areas>true</unused_areas>
            </custom>
        </protected_types>
        <exclude>
            <range>
                <section matching="exact">.xbld</section>
            </range>
        </exclude>
        <debug>false</debug>
        <disable>false</disable>
    </encryption_wrapper>
</guard_cmd>
```

The `<exclude>` section prevents `.xbld` from being encrypted.

<a id="ID4EKB"></a>
  

## Approved game OS  
   
  
Submission Validator checks that the game OS and any optional components from the Microsoft Game Development Kit (GDK) are from the same release of the Microsoft Game Development Kit (GDK) and that they're an approved version for use in released titles. If the version isn't on the approved or deprecated list, the validator log includes a failure, as shown in the following section.
   
```xml
<failure>The GameOS included in this package is not an approved version. Use only 
supported GameOS versions according to the Approved Libraries page on the Developer 
Network Portal</failure>  
```
   
  
If the version is found on the deprecated list, the validator log includes an informational message. This message indicates that the version is only valid for content updates for titles originally released on that deprecated version, as shown in the following section.  
   
```xml
<info>The GameOS included in this package is not approved for new title submissions. 
This version is allowed only for Content Updates where the original release used this 
version. Use only supported GameOS versions according to the Approved Libraries page on 
the Developer Network Portal</info>  
```
   
  
If the versions of the components don't match each other or if the version isn't on the approved or deprecated lists, the validator log includes a failure, as shown in the following section.  
   
```xml
<failure>The GameOS version does not match the version of other Microsoft components 
included in this package. Use only components from the same Microsoft Game Development Kit (GDK)/Xbox One Software Development Kit release. Refer to the 
Approved Libraries page on the Developer Network Portal</failure>  
```
   
> [!NOTE]
> Submission Validator might not complete its validation checks if the development PC on which it's running can't access online information. For example, it has no internet access, is blocked by a firewall, or has no network connectivity.
  
<a id="ID4EHD"></a>

   

## Launch marker in final chunk for content (downloadable content (DLC))  
   
  
To ensure proper operation in all scenarios, content packages must mark the final chunk with the launch marker attribute. If the final chunk doesn't include the launch marker, it's possible that the package could be tested correctly but cause problems for end users in some cases. The failure message is shown as follows.  
   
```xml
<failure>Content Packages require final layout chunk to include attribute marker="Launch"</failure>  
```
  
<a id="ID4EWD"></a>

   


  
<a id="ID4EDE"></a>

   

## Additional Resources.pri files  
   
  
Submission Validator checks that no additional *Resources.pri* files exist in other directories of the layout. As with *MicrosoftGame.config*, only the one in the root is used. However, having multiple copies could lead to confusion about which one is correct and what the developers' intent is concerning these other files.  
   
  
This check parallels a similar check for additional copies of MicrosoftGame.config. In this case, additional copies result in a failure in the Foreign Files Check section of the log, shown as follows.    
   
```xml
<failure>D:\path\mytitle\mytitlesubdirectory\resources.pri</failure>  
```
  
<a id="ID4ERF"></a>

   

## Missing Resources.pri file  
   
  
Applications don't need to be localized. However, if an application doesn't include a *Resources.pri* file in the root (the same location as MicrosoftGame.config), the following warning appears in the Foreign Files Check section of the output log.    
   
```xml
<warning>Non-localized app: 'resources.pri' is missing</warning>  
```
  
<a id="ID4EBBAC"></a>


## One application per package  
   
  
Submission Validator now validates that packages contain only one non-DevOnly application per package.  

  
<a id="ID4E3BAC"></a>

   

## Maximum package size  
   
 
When you ship on disc, Submission Validator checks that the package size doesn't exceed 49,900,000,000 bytes. This check only provides an informational message, not an error.

When you don't ship on disc, Submission Validator checks that the package size doesn't exceed 500 GB. It also provides a warning message when the package size is above 450 GB. The messages are as follows: 

```xml
(WARNING) ILI_XvcPackageSizeApproached: "The size of this package is approaching the maximum allowed size for uploading to Partner Center. The maximum size of a package for uploading to Partner Center is {0} GB."
```

```xml
(FAILURE) ILI_XvcPackageSizeExceeded: "The size of this package exceeds the maximum allowed size for uploading to Partner Center. The maximum size of a package for uploading to Partner Center is {0} GB."
```

  
<a id="ID4EDCAC"></a>

   

## Foreign file 
   
  
One problem encountered when reviewing submissions for the Xbox&nbsp;360 program is the inclusion of various files with the submission, generally accidentally, that shouldn't be part of a retail title.   
   
  
The Foreign File Check uses the layout .xml file to check all files brought into the title package for particular file names and extensions that aren't allowed in the package. This check is based on only the file names, not on the contents of the files. The disallowed files include extensions that are related to source and debug files, Thumb.db, extraneous registration files other than the ones in the root, and the full list of Xbox operating system files that can't appear in title packages. This check validates the Xbox Requirement XR-003: Title Quality for Submission.      
   
  
The following table shows the file types and extensions that aren't allowed in the submitted title package.  
   

| File type| Extensions| 
| --- | --- | 
| Source-code&ndash;related files| .c .cpp, .cs, .lib, .h, .obj| 
| Debug/symbol information files| .pdb, .sym| 
| Legacy binary files| .xbe| 

   
  
A title can legitimately use almost any imaginable file extension, which can lead to potential conflicts with the extensions checks. If this situation affects your title, alert your Partner Development Manager (PDM).      
   
  
If you feel you have an exceptional case that requires a file to be included in your title package for which you're receiving a failure message in the Submission Validator log, consult with your PDM.      
   
  
The following example shows the log output that reports failures in the Foreign File Check.  
   
```xml
<component>Foreign File Check</component>
<failures>
  <failure>c:\MyTitle\loose\bar.cpp</failure>
  <failure>c:\MyTitle\loose\MySubDir\example.h</failure>
  <failure>c:\MyTitle\loose\MySubDir\PDBs\BlockedFiles\foo.pdb</failure>
</failures>
<filecount>3</filecount>  
```
  
<a id="ID4EEEAC"></a>

   

## Binary scan 
   
  
Xbox console binaries (.exe and .dll) files must be built for AMD64 and be only native code. Currently, the platform doesn't support managed code binaries. The Binary Scan Check examines each .exe and .dll file that you include in the title package and ensures that it meets these requirements. Use this check to validate XR-003: Title Quality for Submission.  
   
  
In the Binary Scan section, each .exe and .dll file is checked for dependencies that are blocked for security reasons on retail consoles. Generally, this block takes the form of linking to a debug version of a platform file, PIXEvt.dll, or Xbox Studio.    
   
  
The following example shows the log output that reports failures in the Binary Scan Check. The first two failures result from an .exe file linking to two files that aren't allowed for retail consoles. The third failure is a managed .exe file. The final failure is a non-AMD64 native code .dll file.  
   
```xml
<component>Binary Scan</component>
      <dumpbinlocation>C:\Program Files (x86)\Microsoft Visual Studio 10.0\VC\bin\amd64\dumpbin.exe</dumpbinlocation>
      <failures>
   <failure>Non-retail dependency in file c:\MyTitle\loose\ExeWithDebugDependencies.exe: MSVCR110D.dll</failure>
  <failure>Non-retail dependency in file c:\MyTitle\loose\ExeWithDebugDependencies.exe: PIXEvt.dll</failure>
  </failures>
  <failure>Managed: Not AMD64: c:\MyTitle\loose\MySubDir\ABC.exe</failure>
  <failure>Not AMD64: c:\MyTitle\loose\MySubDir\XYZ.dll</failure>
</failures>  
```
   
  
Developers should ensure that such debugging-focused dependencies are excluded from release builds of binaries to include in a submission package.  
  
<a id="ID4ESFAC"></a>

   

## Microsoft component versions  
   
  
The Game OS covers much of the platform surface area for Xbox. However, titles redistribute a set of Microsoft-supplied binaries. The [Approved Libraries](https://aka.ms/GdkApprovedLibs) page on the Xbox Developer Forums site lists these files and their approved versions.    
   
  
The Submission Validator checks the versions of these files to ensure that any optional DLL files are matching versions. It also captures the Version ID of the Game OS that the exclusive partition title packages into the XVC. Check the versions against the published approved library information before submitting.   
   
  
Submission Validator also extracts the version information for the optional Kinect and Xbox Services DLL files, if your title includes them.  
   
  
The following example shows the version information that appears in the Submission Validator log file.   
   
```xml
<component>MS Component Versions</component>
<component name="GameOS">60BBA05C-22F0-4452-84B6-DD278594716E</component>
<component name="Microsoft.Xbox.Services.dll">10.0.18362.7198</component>  
```
 
<a id="ID4MDF"></a>

## Missing dependent files

When you dynamically link against dependent libraries, if these libraries are missing, Submission Validator includes the following failure:

```xml
<failure>{0}: Binary file has a dependency on a file that is not included in the layout: {1}. This file must be included in the layout for your package.</failure>
```


<a id="IDDKDF"></a>

## ARM64 binaries

You can include ARM64 binaries in your game package for PC alongside your existing x64 compiled executables. Submission Validator checks to ensure the MicrosoftGame.config is correctly referencing the appropriate executable. 

```xml
<failure>Executable with the Architecture attribute set to ARM64 is not compiled for the ARM64 platform. Please ensure the attributes are set correctly for this executable in your MicrosoftGame.config file.</failure>
```
```xml
<failure>Executable is compiled for the ARM64 platform but does not have the Architecture attribute set to ARM64. Please ensure the attributes are set correctly for this executable in your MicrosoftGame.config file.</failure>
```


<a id="ID4E5OAC"></a>

   

## See also  
 [Submission Validator (SubmissionValidator.dll)](submissionvalidator.md)

 [Submission Validator Messages](submissionvalidator-messages.md) 

 [Make package (makepkg.exe)](../deployment/makepkg.md)

 [Title packaging, content updates, and streaming-installation testing](../title-packaging-streaming-install-testing.md)

 Xbox Requirements (XRs) [(Xbox Developer Downloads->Partner, Publishing, and Release Management Information->XGD Partner Documentation)](https://aka.ms/xgddl)

  
