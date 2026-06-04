---
author: M-Stahl
title: "XStoreCanAcquireLicenseResult"
description: "Gets the result of a call to XStoreCanAcquireLicenseForPackageAsync or XStoreCanAcquireLicenseForStoreIdAsync."
kindex: XStoreCanAcquireLicenseResult
ms.author: shanede
ms.topic: reference
edited: '09/25/2023'
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XStoreCanAcquireLicenseResult  

Gets the result of a call to [XStoreCanAcquireLicenseForPackageAsync](../functions/xstorecanacquirelicenseforpackageasync.md) or [XStoreCanAcquireLicenseForStoreIdAsync](../functions/xstorecanacquirelicenseforstoreidasync.md).  

## Syntax  
  
```cpp
typedef struct XStoreCanAcquireLicenseResult {  
    char licensableSku[SKU_ID_SIZE];  
    XStoreCanLicenseStatus status;  
} XStoreCanAcquireLicenseResult  
```
  
### Members  
  
*licensableSku*  
Type: char[SKU_ID_SIZE]  
  
The SKU the user would be able to license.
Returns "DISC" if licensed from disc.
  
*status*  
Type: [XStoreCanLicenseStatus](../enums/xstorecanlicensestatus.md)  
  
Indicates if a user would be able to license a package.  
  
## Remarks
  
While this struct contains the results of [XStoreCanAcquireLicenseForPackageAsync](../functions/xstorecanacquirelicenseforpackageasync.md) or [XStoreCanAcquireLicenseForStoreIdAsync](../functions/xstorecanacquirelicenseforstoreidasync.md) the struct is actually populated in their results functions which are [XStoreCanAcquireLicenseForPackageResult](../functions/xstorecanacquirelicenseforpackageresult.md) and [XStoreCanAcquireLicenseForStoreIdResult](../functions/xstorecanacquirelicenseforstoreidresult.md) respectively. **XStoreCanAcquireLicenseResult** is retrieved from [XStoreCanAcquireLicenseForPackageResult](../functions/xstorecanacquirelicenseforpackageresult.md). **XStoreCanAcquireLicenseResult** is retrieved from [XStoreCanAcquireLicenseForStoreIdResult](../functions/xstorecanacquirelicenseforstoreidresult.md).
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)  
[XStoreCanAcquireLicenseForStoreIdAsync](../functions/xstorecanacquirelicenseforstoreidasync.md)  
[XStoreCanAcquireLicenseForPackageAsync](../functions/xstorecanacquirelicenseforpackageasync.md)  
[XStoreCanAcquireLicenseForPackageResult](../functions/xstorecanacquirelicenseforpackageresult.md)  
[XStoreCanAcquireLicenseForStoreIdResult](../functions/xstorecanacquirelicenseforstoreidresult.md)  
  