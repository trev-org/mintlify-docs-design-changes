---
author: M-Stahl
title: "XPackageGetCurrentProcessPackageIdentifier"
description: "Returns an installation identity string that identifies the installation for this process."
kindex: XPackageGetCurrentProcessPackageIdentifier
ms.author: brianpe
ms.topic: reference
edited: 05/18/2019
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XPackageGetCurrentProcessPackageIdentifier  

Returns an installation identity string that identifies the installation for this process.  

## Syntax  
  
```cpp
HRESULT XPackageGetCurrentProcessPackageIdentifier(  
         size_t bufferSize,  
         char* buffer  
)  
```  
  
### Parameters  
  
*bufferSize* &nbsp;&nbsp;\_In\_  
Type: size_t  

  
The size of the buffer in the *buffer* parameter.  


*buffer* &nbsp;&nbsp;\_Out\_writes\_(bufferSize)  
Type: char*  

  
On return, contains an installation identity string that identifies the installation for this process.  


  
### Return value
Type: HRESULT
  
HRESULT success or error code.    
  
## Remarks  
  
The ``XPackageGetCurrentProcessPackageIdentifier`` function returns a package identifier string that is used to query this process's installation. The string's length must not be greater than the ``XPACKAGE_IDENTIFIER_MAX_LENGTH`` object. For more information about package identifiers, see [Manage and license downloadable content (DLC)](../../../../store/commerce/fundamentals/xstore-manage-and-license-optional-packages.md). 

Refer to the following code example:

```cpp
char id[XPACKAGE_IDENTIFIER_MAX_LENGTH];

HRESULT hr = XPackageGetCurrentProcessPackageIdentifier(_countof(id), id);
```

For information about the packaging technology used with Xbox One titles, see [Overview of Packaging](../../../../features/common/packaging/overviews/packaging.md). For information about the steps to create an XVC package, see [Getting started packaging titles for Xbox consoles](../../../../features/common/packaging/overviews/packaging-getting-started-for-console.md).  
 
## Requirements  
  
**Header:** XPackage.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Streaming Installation and Intelligent Delivery](../../../../features/common/packaging/overviews/streaming_install-intelligent_delivery.md)  
[XPackage](../xpackage_members.md)  

  
  
  