---
author: aablackm
title: "DebugQuery"
description: "Queries whether debugging is enabled for the app package with the specified package moniker."
kindex:
- DebugQuery method
- IXtfApplicationClient::DebugQuery method
ms.author: stevenpr
ms.topic: reference
edited: 06/05/2019
ms.date: '08/01/2022'
permissioned-type: public
---

# IXtfApplicationClient::DebugQuery
  
Queries whether debugging is enabled for the app package with the specified package moniker.  
  
<a id="syntaxSection"></a>
  
## Syntax
  
```cpp
public:
HRESULT DebugQuery( 
    LPCWSTR pszPackageMoniker,
    BOOL *pfEnabled
)

```
  
<a id="parametersSection"></a>
  
### Parameters
  
*pszPackageMoniker*  
Type: LPCWSTR  
  
A pointer to the package moniker for the app.    
  
*pfEnabled*  
Type: BOOL\*  
  
On successful completion, contains a value indicating whether debugging is enabled for the app package with the specified package moniker.  
  
<a id="retvalSection"></a>
  
### Return value
  
Type: HRESULT  
  
Returns `S_OK` if successful; otherwise, returns an HRESULT error code.  
  
<a id="requirementsSection"></a>
  
## Requirements
  
**Header:** xtfapplication.h  
  
**Library:** xtfapplication.lib  
  
**Supported platforms:** Windows (for Xbox console tools)  
  
<a id="seealsoSection"></a>
  
## See also
  
[IXtfApplicationClient](../ixtfapplicationclient-xtfapplication-xbox-microsoft-t.md)  
[XtfApplication](../../../xtfapplication-xbox-microsoft-n.md)  
  