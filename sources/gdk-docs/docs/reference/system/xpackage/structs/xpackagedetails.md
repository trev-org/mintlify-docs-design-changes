---
author: M-Stahl
title: "XPackageDetails"
description: "Contains details about an installation."
kindex: XPackageDetails
ms.author: brianpe
ms.topic: reference
edited: 25/25/2023
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XPackageDetails
  
Contains details about an installation.  
  
<a id="syntaxSection"></a>
  
## Syntax
  
```cpp
typedef struct XPackageDetails {  
    const char* packageIdentifier;  
    XVersion version;  
    XPackageKind kind;  
    const char* displayName;  
    const char* description;  
    const char* publisher;  
    const char* storeId;  
    bool installing;  
    uint32_t index;  
    uint32_t count;
    bool ageRestricted;  
    const char* titleID;  
} XPackageDetails  
```
  
<a id="membersSection"></a>
  
### Members
  
*packageIdentifier*  
Type: const char\*  
  
A string that uniquely identifies the installed package on the disk. For more information about package identifiers, see [Manage and license downloadable content (DLC)](../../../../store/commerce/fundamentals/xstore-manage-and-license-optional-packages.md). 
  
  
*version*  
Type: [XVersion](../../xgameruntimetypes/structs/xversion.md)  
  
The version of the package being installed.  
  
*kind*  
Type: [XPackageKind](../enums/xpackagekind.md)  
  
The value that indicates whether the package is an app package or a content package.  
  
*displayName*  
Type: const char\*  
  
The display name.  
  
*description*  
Type: const char\*  
  
The description of the package.  
  
*publisher*  
Type: const char\*  
  
The publisher of the package.  
  
*storeId*  
Type: const char\*  
  
The unique ID of the product.  
  
*installing*  
Type: bool  
  
The Boolean that indicates whether the package is currently installing.  
  
*index*  
Type: uint32_t  
  
Value incremented for each package enumerated. On package installation, *index* is 0.  
  
*count*  
Type: uint32_t
  
Total number of packages that can be enumerated. On package installation, *count* is 1.  

*ageRestricted*  
Type: bool

The Boolean that indicates whether package is age restricted for the current union of all signed in users. Mounting an age restricted package will trigger a parental consent prompt for user.

*titleID*  
Type: const char\* 

The TitleID of the game. For DLCs, it will be empty. Format: hexadecimal, exactly 8 digits, uppercase, no "0x" in front.
  
<a id="remarksSection"></a>
  
## Remarks
  
The `XPackageDetails` structure provides details about a package's installation to the [XPackageEnumeratePackages](../functions/xpackageenumeratepackages.md) and [XPackageInstalledCallback](../functions/xpackageinstalledcallback.md) functions.  
  
`XPackageDetails` is valid only in the scope of the callback. If you need to retain any of the data, copy it before returning from the callback.  
  
For information about the packaging technology used with Xbox One titles, see [Overview of Packaging](../../../../features/common/packaging/overviews/packaging.md). For information about the steps to create an XVC package, see [Getting started packaging titles for Xbox consoles](../../../../features/common/packaging/overviews/packaging-getting-started-for-console.md).  
  
<a id="requirementsSection"></a>
  
## Requirements
  
**Header:** XPackage.h  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
<a id="seealsoSection"></a>
  
## See also
  
[Overview of downloadable content (DLC) packages](../../../../features/common/packaging/packaging-downloadable-content-dlc.md)  
[XPackageEnumeratePackages](../functions/xpackageenumeratepackages.md)  
[XPackageInstalledCallback](../functions/xpackageinstalledcallback.md)  
[XPackage](../xpackage_members.md)  
  