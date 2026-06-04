---
author: anhillier-xbox
title: "XStoreCanAcquireLicenseForPackageResult"
description: "Gets the results for a call to XStoreCanAcquireLicenseForPackageAsync."
kindex: XStoreCanAcquireLicenseForPackageResult
ms.author: anhillier
ms.topic: reference
edited: 04/03/2026
quality: good
applies-to: pc-gdk
ms.date: '04/03/2026'
permissioned-type: public
---

# XStoreCanAcquireLicenseForPackageResult  
  
Gets the results for a call to [XStoreCanAcquireLicenseForPackageAsync](xstorecanacquirelicenseforpackageasync.md).  
  
## Syntax  
  
```cpp
HRESULT XStoreCanAcquireLicenseForPackageResult(  
         XAsyncBlock* async,  
         XStoreCanAcquireLicenseResult* storeCanAcquireLicense  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
The XAsyncBlock passed to [XStoreCanAcquireLicenseForPackageAsync](xstorecanacquirelicenseforpackageasync.md).
Use the [XAsyncBlock](../../xasync/structs/xasyncblock.md) to check the call's status and get the results. For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).
  
*storeCanAcquireLicense* &nbsp;&nbsp;\_Out\_  
Type: [XStoreCanAcquireLicenseResult*](../structs/xstorecanacquirelicenseresult.md)  
  
Structure that shows if a license can be acquired and what SKU the user can license.
  
### Return value

Type: HRESULT
  
S_OK on success; otherwise, returns an error code.
  
The **XStoreCanAcquireLicenseForPackageResult** function might return the following error codes:

| Error code| Meaning|
| --- | --- |
| 0x87E10BC6 `LM_E_CONTENT_NOT_IN_CATALOG` | The product wasn't found in the catalog. |
| 0x803F8001 `LM_E_CONTENT_NOT_OWNED` | The product isn't owned. |
| 0x803F8008 `LM_E_PREDOWNLOAD_LICENSE_NOT_YET_AVAILABLE` | The product is owned but can't be licensed because it isn't released yet. |
| 0x803F9006 `LM_E_ENTITLED_USER_SIGNED_OUT` | Owner of the product isn't signed in. |
| 0x89245305 `E_GAMESTORE_LICENSE_ACTION_THROTTLED` | The game excessively queried a license for the product and is now throttled. Limit is 30 licensing attempts within 10 minutes for the same product. |

## Remarks  
  
This result function retrieves the execution results of [XStoreCanAcquireLicenseForPackageAsync](xstorecanacquirelicenseforpackageasync.md), and the preview license if the execution was successful.
Call this function after [XStoreCanAcquireLicenseForPackageAsync](xstorecanacquirelicenseforpackageasync.md) usually in the context of a callback function.
For more information, see [XStoreCanAcquireLicenseForPackageAsync](xstorecanacquirelicenseforpackageasync.md).  
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles, and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)  
[XStoreCanAcquireLicenseForPackageAsync](xstorecanacquirelicenseforpackageasync.md)  
[Manage and license downloadable content (DLC)](../../../../store/commerce/fundamentals/xstore-manage-and-license-optional-packages.md)
