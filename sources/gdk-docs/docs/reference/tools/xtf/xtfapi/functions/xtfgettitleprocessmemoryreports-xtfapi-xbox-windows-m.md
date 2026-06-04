---
author: aablackm
title: "XtfGetTitleProcessMemoryReports"
description: "Reserved for internal use."
kindex: XtfGetTitleProcessMemoryReports
ms.author: dmcmahon
ms.topic: reference
edited: 04/15/2020
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XtfGetTitleProcessMemoryReports
  
Reserved for internal use.  
  
<a id="syntaxSection"></a>
  
## Syntax
  
```cpp
HRESULT XtfGetTitleProcessMemoryReports(
         PCWSTR connectionString,
         UINT32 processId,
         XtfPartitionMemoryReport** partitionReport,
         XtfProcessMemoryReport** processesReport
)
```
  
<a id="parametersSection"></a>
  
### Parameters
  
*connectionString*  
Type: PCWSTR  
  
Reserved for internal use.  
  
*processId*  
Type: UINT32\*  
  
Reserved for internal use.  
  
*partitionReport*  
Type: XtfPartitionMemoryReport\*\*  
  
Reserved for internal use.
  
*processReport*  
Type: XtfProcessMemoryReport\*\*  
  
Reserved for internal use.  
  
<a id="retvalSection"></a>
  
### Return value
  
Reserved for internal use.  
  
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
  