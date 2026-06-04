---
author: M-Stahl
title: "XPackageEnumeratePackages"
description: "Finds installed or installing packages related to the calling process."
kindex: XPackageEnumeratePackages
ms.author: brianpe
ms.topic: reference
edited: '09/25/2023'
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XPackageEnumeratePackages  

Finds packages that are already installed, or being installed, and are related to the calling process.  

## Syntax  
  
```cpp
HRESULT XPackageEnumeratePackages(  
         XPackageKind kind,  
         XPackageEnumerationScope scope,  
         void* context,  
         XPackageEnumerationCallback* callback  
)  
```  
  
### Parameters  
  
*kind* &nbsp;&nbsp;\_In\_  
Type: [XPackageKind](../enums/xpackagekind.md)  

  
The type of installation packages to be enumerated.  


*scope* &nbsp;&nbsp;\_In\_  
Type: [XPackageEnumerationScope](../enums/xpackageenumerationscope.md)  

  
The scope of the installation packages.  


*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  

  
Context to be passed to the callback specified in the *callback* parameter.  


*callback* &nbsp;&nbsp;\_In\_  
Type: XPackageEnumerationCallback*  

  
A callback to be called on completion.  


  
### Return value
Type: HRESULT
  
HRESULT success or error code.    
  
## Remarks
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
Use **XPackageEnumeratePackages** to find packages that are already installed, or being installed, and are related to the calling process. This function can find content packages as well as app packages. It provides details about an installation, through an XPackageDetails structure. 

If the package is still installing, the **installing** property is set to true and you can create an installation monitor to let the package's identifier monitor the progress of installation. 

There are no generic installation queue notifications; the intent is to use [XPackageEnumeratePackages](xpackageenumeratepackages.md) to show and track items in flight. Nor is there an API to stop, start, or cancel an installation. From a game's perspective, the installation should take care of itself. Errors are automatically retried and are invisible to the game. 

The output of the API, when called with value [XPackageKind::Game](../enums/xpackagekind.md) depending on the [XPackageEnumerationScope](../enums/xpackageenumerationscope.md) value will be:

| Scope | Franchise game hub | Hub-aware game | Hub-unaware game |
| --- | --- | --- | --- |
| ThisOnly | Only the franchise game hub | Only the hub-aware game | Only the hub-unaware game |
| ThisAndRelated | The franchise game hub, all the hub-aware games associated with it and all the RelatedProducts | The hub-aware game and all the RelatedProducts| The hub-unaware game and all the RelatedProducts |
| ThisPublisher | All the game products belonging to the same publisher as the current process | All the game products belonging to the same publisher as the current process | All the game products belonging to the same publisher as the current process |

The output of the API, when called with value [XPackageKind::Content](../enums/xpackagekind.md) depending on the [XPackageEnumerationScope](../enums/xpackageenumerationscope.md) value will be:

| Scope | Franchise game hub | Hub-aware game | Hub-unaware game |
| --- | --- | --- | --- |
| ThisOnly | The DLCs related to this franchise game hub | The DLCs related to this hub-aware game | The DLCs related to this hub-unaware game |
| ThisAndRelated | The DLCs related to this franchise game hub, to its hub-aware titles and to all its RelatedProducts | The DLCs related to this hub-aware game and to all its RelatedProducts | The DLCs related to this hub-unaware game and to all its RelatedProducts |
| ThisPublisher | All DLCs (from the same publisher or from other publishers) related to a base game from the same publisher as the current process | All DLCs (from the same publisher or from other publishers) related to a base game from the same publisher as the current process | All DLCs (from the same publisher or from other publishers) related to a base game from the same publisher as the current process |


Example:

```cpp
bool CALLBACK ListDlcCallback(
    void* /* context */,
    const XPackageDetails* details)
{
    printf("Found dlc: %s\n", details->displayName);
    return true; // continue enumerating
}

HRESULT ListDlc()
{
    HRESULT hr = XPackageEnumeratePackages(
        XPackageKind::Content,                      /* Looking for content packages (DLC) */
        XPackageEnumerationScope::ThisAndRelated,   /* For this game and related games*/
        nullptr, ListDlcCallback);
    return hr;
}
```
## Requirements  
  
**Header:** XPackage.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XPackage](../xpackage_members.md)  
[Franchise Game Hubs](../../../../store/franchise-game-hubs.md)  
[How to create and use Downloadable Content Packages (DLC) for PC and Xbox One](../../../../features/common/packaging/packaging-downloadable-content-dlc.md)  

  
  