---
author: M-Stahl
title: "Application packaging during development"
description: "Describes application packaging as having three stages during the development process: unencrypted packaging, test encryption packaging, and production encryption packaging."
ms.assetid: a2c7a431-3279-dfaa-576b-de41d9782193
kindex: Application packaging during development
ms.topic: article
edited: '08/09/2019'
ms.date: '08/01/2022'
permissioned-type: public
---

# Application packaging during development
   
Application packaging is performed in three stages during the development process: unencrypted packaging, test encryption packaging, and production encryption packaging. In addition, you can split a package into multiple subset packages, which can then be burned to multiple discs.

> [!TIP]
> **MSIXVC2** introduces a simplified development workflow for PC titles. By using `makepkg2 upload /d <folder>`, you can package and upload your build to Partner Center in a single command directly from loose files. For more information, see [Getting started with MSIXVC2 for PC](overviews/packaging-getting-started-for-PC-msixvc2.md).
   
  


This article describes the following sections:
   *  [Test encrypted packaging](#ID4EXB)  
   *  [Creating encrypted packaging for production](#ID4EVC)  
   *  [Splitting a package](#ID4EKD)  
 
  
<a id="ID4EXB"></a>

   

## Test encrypted packaging  
   
  
By default, `makepkg pack` creates a package with test encryption. This encryption method allows testing for performance. We recommend that you deploy and test packaging by using test encryption.  
   
  
To create a package with test encryption, call `makepkg pack` as follows.  
   
```
MakePkg.exe pack /f <Mapfile> /d <LooseContentDir> /pd <OutputFolder>  
```
  
<a id="ID4EVC"></a>

   

## Creating encrypted packaging for production
   
  
To create a package for your final submission, use the same packaging command as the one used to create a test package, but with the **/l** flag.  
   
```
MakePkg.exe pack /f <Mapfile> /d <LooseContentDir> /pd <OutputFolder> /l  
```

Tip: For Xbox console packages: Use **makepkg /lk** to test and submit the same package! See [the encryption section](title-packaging-streaming-install-testing.md#encryption) for more information on the available package encryption methods offered by makepkg.  

  
<a id="ID4EKD"></a>

   

## Splitting a package  
   
  
The **splitpkg.exe** tool allows you to split a package into one or more subset packages, according to a subset XML file. You can then burn these subset packages onto separate discs. This feature is especially useful if your game is very large and can't fit onto a single disc.   
   
```
splitpkg split /f <SubsetFile> /p <SourcePackage> /pd <OutputFolder>  
```
   
  
  
<a id="ID4EJE"></a>

   

## See also  

 

 [White Paper: Title Packaging and Streaming Installation Testing (Developer Education Materials > All NDA Whitepapers)](https://aka.ms/xgddl)

 

  
