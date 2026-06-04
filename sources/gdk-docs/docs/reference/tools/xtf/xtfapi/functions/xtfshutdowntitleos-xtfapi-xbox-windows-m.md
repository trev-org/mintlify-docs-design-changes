---
author: aablackm
title: "XtfShutdownTitleOS"
description: "Shuts down the active title and Game OS."
kindex: XtfShutdownTitleOS
ms.author: dmcmahon
ms.topic: reference
edited: 04/15/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# XtfShutdownTitleOS
  
Shuts down the active title and Game OS.  
  
<a id="syntaxSection"></a>
  
## Syntax
  
```cpp
HRESULT XXtfShutdownTitleOS(
         PCWSTR address
)  
```
  
<a id="parametersSection"></a>
  
### Parameters
  
*address*  
Type: PCWSTR  
  
\[in\] The address of the console.  
  
<a id="retvalSection"></a>
  
### Return value
  
Type: HRESULT  
  
Returns `S_OK` if successful; otherwise, returns an HRESULT error code.  
  
<a id="remarksSection"></a>
  
## Remarks
  
This function shuts down both the active title and the Game OS. Unlike the [IXtfApplicationClient::Terminate](../../xtfapplication/classes/IXtfApplicationClient/methods/terminate-ixtfapplicationclient-xtfapplication-xbox-microsoft-m.md) method, this function ignores Fast Iteration Mode and fully terminates both the active title and the Game OS. For more information about Fast Iteration Mode, see [Application Management (xbapp.exe) (NDA topic)](../../../../../tools/tools-console/commandlinetools/xbapp.md) and [Managing applications and files (NDA topic)](../../../../../tools/tools-console/xbom/manager-tool-managing-applications.md).  
  
<a id="requirementsSection"></a>
  
## Requirements
  
**Header:** xtfapi.h  
  
**Library:** XtfApi.lib  
  
**Supported platforms:** Windows (for Xbox console tools)  
  
<a id="seealsoSection"></a>
  
## See also  
  
[Run from PC Deployment (NDA topic)](../../../../../gdk-dev/console-dev/dev-kits/concepts/deployment.md)  
[XTF Transport Errors (NDA topic)](../../../../../tools/tools-console/commandlinetools/xtf-transport-errors.md)  
[Additional Xtf APIs](../atoc-xtfapi.md)  
  