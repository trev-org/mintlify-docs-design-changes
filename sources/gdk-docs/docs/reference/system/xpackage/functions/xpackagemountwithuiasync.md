---
author: anhillier-xbox
title: "XPackageMountWithUiAsync"
description: "Asynchronously mounts the installation of specified content, and returns a mount handle to it."
kindex: XPackageMountWithUiAsync
ms.author: anhillier
ms.topic: reference
edited: 02/06/2026
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XPackageMountWithUiAsync  

Asynchronously mounts the installation of specified content, and returns a mount handle to it.
Shows user parental consent UI if content is age-restricted based on the parental settings of all signed in users.

## Syntax  

```cpp
HRESULT XPackageMountWithUiAsync(
  const char * packageIdentifier,
  XAsyncBlock * async
) noexcept;
```

### Parameters  

*packageIdentifier*&nbsp;&nbsp;\_In\_z\_  
Type: const char *  

A string that uniquely identifies the installed package on the disk.
Pass in the packageIdentifier field from the [XPackageDetails](../structs/xpackagedetails.md) struct returned from  [XPackageEnumerationCallback](xpackageenumerationcallback.md).
For more information about package identifiers, see [Manage and license downloadable content (DLC)](../../../../store/commerce/fundamentals/xstore-manage-and-license-optional-packages.md).

*async*&nbsp;&nbsp;\_Inout\_  
Type: XAsyncBlock *  

An **XAsyncBlock** for monitoring the status of the asynchronous call.

### Return value  

Type: HRESULT  
  
HRESULT success or error code.

## Remarks

This API shows a parental consent prompt to the user if the API mounts content that isn't age-appropriate for all signed in users.
If an adult user approves parental consent in the prompt, the API attempts to mount the package.
If an adult user denies parental consent in the prompt, the API fails to mount the package.

This API automatically calls [XStoreAcquireLicenseForPackageAsync](../../xstore/functions/xstoreacquirelicenseforpackageasync.md) / [Result](../../xstore/functions/xstoreacquirelicenseforpackageresult.md) and [XStoreIsLicenseValid](../../xstore/functions/xstoreislicensevalid.md).
If the API can't acquire a valid license for the DLC, the mount fails.

In this code example, a game renders DLC in black and white if the content is age-restricted.
External code in the game calls `MountDlc` when the user selects a piece of DLC to use.

```cpp
extern void RenderDlc(const char* packageId, const char* displayName, bool monochrome); 

void ShowDlc() 
{ 
// Enumerate all DLC for the game and render it to the user 
XPackageEnumeratePackages(XPackageKind::Content, XPackageEnumerationScope::ThisAndRelated, nullptr,
 [](void*, const XPackageDetails* details) 
  {     
        RenderDlc(details->packageIdentifier,
                  details->displayName, 
                  details->ageRestricted);
  }); 
} 

 HRESULT MountDlc(const char* packageId, XPackageMountHandle* handle)
 {  
    XAsync async{};  
    RETURN_IF_FAILED(XPackageMountWithUiAsync(packageId, &async));
    RETURN_IF_FAILED(XAsyncGetStatus(&async, true));
    RETURN_IF_FAILED(XPackageMountWithUiResult(&async, handle));  
    return S_OK; 
} 
 ```

## Requirements  

**Header:** XPackage.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Xbox One family consoles, and Xbox Series consoles  

## See also  
[XPackageMountWithUiResult](xpackagemountwithuiresult.md)
[XPackage](../xpackage_members.md)  
[XPackageEnumeratePackages](xpackageenumeratepackages.md)  
[XPackageEnumerationCallback](xpackageenumerationcallback.md)  
[XPackageDetails](../structs/xpackagedetails.md)  
[XPackageGetMountPath](xpackagegetmountpath.md)  
[XPackageGetMountPathSize](xpackagegetmountpathsize.md)  
[How to create and use Downloadable Content Packages (DLC) for PC and Xbox One](../../../../features/common/packaging/packaging-downloadable-content-dlc.md)  
