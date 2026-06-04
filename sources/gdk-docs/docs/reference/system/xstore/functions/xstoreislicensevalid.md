---
author: anhillier-xbox
title: "XStoreIsLicenseValid"
description: "Checks if the specified license is valid."
kindex: XStoreIsLicenseValid
ms.author: shanede
ms.topic: reference
edited: 02/06/2026
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XStoreIsLicenseValid  

Checks if the specified license is valid.  

## Syntax  
  
```cpp
bool XStoreIsLicenseValid(  
         const XStoreLicenseHandle storeLicenseHandle  
)  
```  
  
### Parameters  
  
*storeLicenseHandle* &nbsp;&nbsp;\_In\_  
Type: XStoreLicenseHandle  
  
A handle to the license.  
  
  
### Return value
Type: bool
  
Returns true if the license is valid; returns false otherwise.  
  
## Remarks  

This API is safe to call on time-sensitive threads.

For a usage example, see [XStoreAcquireLicenseForPackageAsync](xstoreacquirelicenseforpackageasync.md).
Use **XStoreIsLicenseValid** to check if a valid license was returned by [XStoreAcquireLicenseForPackageResult](xstoreacquirelicenseforpackageresult.md) or [XStoreAcquireLicenseForDurablesResult](xstoreacquirelicensefordurablesresult.md).
If the license is valid, you can proceed with further setup, like registering license activity based callback functions.  

> [!NOTE]
> This function only checks the static license state when it was originally obtained from the XStoreAcquireLicense* APIs.
> If you register with [XStoreRegisterPackageLicenseLost](xstoreregisterpackagelicenselost.md) and the license becomes invalid, you should reacquire a new license to get the correct state before calling this API again.  
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles, and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)  
[XStoreAcquireLicenseForPackageAsync](xstoreacquirelicenseforpackageasync.md)  
[XStoreAcquireLicenseForPackageResult](xstoreacquirelicenseforpackageresult.md)  
[XStoreIsLicenseValid](xstoreislicensevalid.md)  
[XStoreCloseLicenseHandle](xstorecloselicensehandle.md)  
[XStoreRegisterPackageLicenseLost](xstoreregisterpackagelicenselost.md)  
[XStoreUnregisterPackageLicenseLost](xstoreunregisterpackagelicenselost.md)  
[Granting players access to add-on content](../../../../store/commerce/fundamentals/xstore-granting-access-to-content.md)  
