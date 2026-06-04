---
author: dacolina
title: "XPackageUninstallPackage"
description: "Uninstalls a given package."
kindex: XPackageUninstallPackage
ms.author: brianpe
ms.topic: reference
edited: 05/05/2022
applies-to: console-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XPackageUninstallPackage

Uninstalls a given package.

## Syntax  
  
```cpp

bool XPackageUninstallPackage(
    const char* packageIdentifier) 
noexcept;
```  
  
### Parameters  

*packageIdentifier* &nbsp;&nbsp;\_In\_z\_  
Type: char*  

A string that uniquely identifies the installed package on the disk. For more information about package identifiers, see [Manage and license downloadable content (DLC)](../../../../store/commerce/fundamentals/xstore-manage-and-license-optional-packages.md).

### Return value

Type: bool
  
Bool tells whether package was uninstalled successfully or not.
  
## Remarks  
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
**XPackageUninstallPackage** uninstalls the given package.  The package identifier provided will have been returned from **XPackageEnumeratePackages** or another API that returns a package identifier. **XPackageUninstallPackage** returns true if the package was uninstalled or false if the package could not be uninstalled.

Reasons for a package failing to uninstall include:

- The package is in use. For example, it is a DLC package the game currently has mounted.
- The game is running on an xCloud server.  Package installation and removal is the responsibility of the server environment.

In the following example, **XPackageUninstallPackage** is used to uninstall a package to free up space on disk for user.

```cpp
bool UninstallDlcToReclaimDiskSpace(const char_t* packageIdentifier) 
{
return XPackageUninstallPackage(packageIdentifier);
} 
```
  
## Requirements  
  
**Header:** XPackage.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XPackage](../xpackage_members.md)  
[Streaming Installation and Intelligent Delivery](../../../../features/common/packaging/overviews/streaming_install-intelligent_delivery.md) 
  