---
author: M-Stahl
title: "Tools for streaming installation (contents)"
description: "This section presents the tools and schemas that are related to the streaming installation of titles."
kindex: Tools for Streaming Installation
ms.topic: article
edited: 10/29/2019
ms.date: '08/01/2022'
permissioned-type: public
---

# Tools for streaming installation

This section presents the tools and schemas that are related to the streaming installation of titles. 
<a id="ID4ES"></a>

   

## In this section  
  
[Deployment package schema](atoc-deployment-schema.md)  
  
Describes the mapping file used as input for the makepkg tool. The file has three allowed elements that describe the contents of a package: Package, Chunk, and File. These elements describe the overall package, individual streamable segments of a package (chunks), and the files in each of those chunks.  

  
[Make package resource index (makepri.exe)](makepri.md)  
Creates, dumps, and performs utility functions on package resource index (PRI) files.
  
  
[Make package (makepkg.exe)](makepkg.md)  
Creates application packages and application package metadata.
  
  
[Make package (makepkg2.exe)](makepkg2.md)  
Creates application packages in MSIXVC, MSIXVC2, and XVC formats. The tool includes built-in Partner Center uploads and validation-only mode. MSIXVC2 packaging requires `makepkg2`.
  
  
[Split package (splitpkg.exe)](splitpkg.md)
Splits existing application packages into smaller components.
  
  
[packageutil.exe](packageutil.md)  
Retrieves the signing-key information for a package file, or compares a base package file with an updated package file.

  
[packageutil2.exe](packageutil2.md)  
Inspects, compares, and extracts content from both MSIXVC and MSIXVC2 package files. The tool provides chunk information, file information, and file extraction commands. MSIXVC2 packages require `packageutil2`.
  
 
<a id="ID4ENB"></a>

   
