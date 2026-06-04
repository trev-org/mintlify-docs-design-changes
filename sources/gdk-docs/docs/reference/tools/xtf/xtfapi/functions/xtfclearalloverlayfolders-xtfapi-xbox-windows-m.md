---
author: aablackm
title: "XtfClearAllOverlayFolders"
description: "Clears the Overlay Folder paths for all packages installed/registered on the console."
kindex: XtfClearAllOverlayFolders
ms.author: douglau
ms.topic: reference
edited: 06/10/2019
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XtfClearAllOverlayFolders
Clears the Overlay Folder paths for all packages installed/registered on the console.


## Syntax  

```cpp
HRESULT XtfClearAllOverlayFolders(
        PCWSTR address
)   
```

### Parameters  

*address*  
Type: PCWSTR 

[in] Pointer to the address of the console.

### Return value  
Type: HRESULT 

A return value of S_OK indicates the function succeeded. Any other value indicates an unexpected error occurred.

## Remarks  

Resets the current overlay folder for all PFNs on the devkit. This creates the appearance that no overlay folder has ever been set for any of the PFNs.

Calling **XtfClearAllOverlayFolders** has the same effect as issuing the command line [xbapp overlayfolder /R (NDA topic)](../../../../../tools/tools-console/commandlinetools/xbapp.md).

Use [XTFSetOverlayFolder](xtfsetoverlayfolder-xtfapi-xbox-windows-m.md) to set or clear an overlay folder. Use [XtfGetOverlayFolder](xtfgetoverlayfolder-xtfapi-xbox-windows-m.md) to retrieve the overlay folder path currently set for a package. Use [XtfClearAllOverlayFolders](xtfclearalloverlayfolders-xtfapi-xbox-windows-m.md) to clear all overlay folder that were previously set on the console. Use [IXtfApplicationClient::GetInstalled](../../xtfapplication/classes/IXtfApplicationClient/methods/getinstalled-ixtfapplicationclient-xtfapplication-xbox-microsoft-m.md) to enumerate all packages currently installed on the console.  


## Requirements  

**Header:** xtfapi.h  

**Library:** XtfApi.lib 
  
**Supported platforms:** Windows (for Xbox console tools)  
  
## See also  

[Debugging with Overlay Folders (NDA topic)](../../../../../gdk-dev/console-dev/debug/overviews/debugging-with-overlay-folders.md)  
Command line tool [xbapp overlayfolder (NDA topic)](../../../../../tools/tools-console/commandlinetools/xbapp.md)  
[XTF Transport Errors (NDA topic)](../../../../../tools/tools-console/commandlinetools/xtf-transport-errors.md) 
[Additional Xtf APIs](../atoc-xtfapi.md)  