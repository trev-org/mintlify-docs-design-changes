---
author: anhillier-xbox
title: "XStoreAcquireLicenseForPackageResult"
description: "Retrieves the results of a call to XStoreAcquireLicenseForPackageAsync."
kindex: XStoreAcquireLicenseForPackageResult
ms.author: anhillier
ms.topic: reference
edited: 04/03/2026
quality: good
applies-to: pc-gdk
ms.date: '04/03/2026'
permissioned-type: public
---

# XStoreAcquireLicenseForPackageResult


Retrieves the results of a call to [XStoreAcquireLicenseForPackageAsync](xstoreacquirelicenseforpackageasync.md).  

## Syntax  
  
```cpp
HRESULT XStoreAcquireLicenseForPackageResult(  
         XAsyncBlock* async,  
         XStoreLicenseHandle* storeLicenseHandle  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  

The XAsyncBlock passed to [XStoreAcquireLicenseForPackageAsync](xstoreacquirelicenseforpackageasync.md).
Use the [XAsyncBlock](../../xasync/structs/xasyncblock.md) to check the call's status and get the results.
For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).  

*storeLicenseHandle* &nbsp;&nbsp;\_Out\_  
Type: XStoreLicenseHandle*  

If the call succeeds, this value is the handle to the store license.  

### Return value

Type: HRESULT

Returns **S_OK** if successful, or an error code otherwise.

`XStoreAcquireLicenseForPackageResult` can return the following error codes:

| Error code| Description |
| --- | --- |
| 0x87E10BC6 `LM_E_CONTENT_NOT_IN_CATALOG` | The product wasn't found in the catalog. |
| 0x803F8001 `LM_E_CONTENT_NOT_OWNED` | The product isn't owned. |
| 0x803F8008 `LM_E_PREDOWNLOAD_LICENSE_NOT_YET_AVAILABLE` | The product is owned but can't be licensed because it isn't released yet. |
| 0x803F9006 `LM_E_ENTITLED_USER_SIGNED_OUT` | Owner of the product isn't signed in. |
| 0x89245305 `E_GAMESTORE_LICENSE_ACTION_THROTTLED` | The game excessively queried a license for the product and is now throttled. Limit is 30 licensing attempts within 10 minutes for the same product. |
  
## Remarks  

You can safely call this function on a time-sensitive thread.

This result function retrieves the execution results of [XStoreAcquireLicenseForPackageAsync](xstoreacquirelicenseforpackageasync.md), and the license that the function requests if the execution is successful.
As such, this function should be called after [XStoreAcquireLicenseForPackageAsync](xstoreacquirelicenseforpackageasync.md), usually in the context of a callback function.
If a license is returned, call [XStoreIsLicenseValid](xstoreislicensevalid.md) to verify the license is valid.

For a usage example, see [XStoreAcquireLicenseForPackageAsync](xstoreacquirelicenseforpackageasync.md).  
  
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
[Manage and license downloadable content (DLC)](../../../../store/commerce/fundamentals/xstore-manage-and-license-optional-packages.md)
