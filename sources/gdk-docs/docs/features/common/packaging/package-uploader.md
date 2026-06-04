---
title: "Automating package uploading"
description: "Describes how to automate uploading of packages to Partner Center."
kindex: Automating package uploading
author: dmcmahon
ms.author: dmcmahon
ms.topic: article
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# Package Uploader

Package Uploader is an open source .NET based cross-platform application and library that enables game developers to interact programmatically with Partner Center. 

Package Uploader has a command-line tool and a dynamic linked library (DLL) that you can integrate into your build pipelines or other development workflows and provides the following functionality: 

* Retrieves metadata about a particular product
* Uploads a new Xbox .xvc, .appx, or .msixvc package
* Removes previously uploaded packages
* Imports packages from one branch to another
* Publishes packages to a sandbox

> [!TIP]
> For MSIXVC2 packages, you can also use the built-in `makepkg2 upload` command, which combines packaging and uploading in a single step with support for multiple authentication methods. See [Make package (makepkg2.exe)](deployment/makepkg2.md).

Download the latest version of the Package Uploader tool from GitHub at [https://github.com/microsoft/PackageUploader](https://github.com/microsoft/PackageUploader). 
