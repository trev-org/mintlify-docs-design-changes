---
author: M-Stahl
title: "XStoreCanAcquireLicenseForStoreIdResult"
description: "Gets the results for a call to XStoreCanAcquireLicenseForStoreIdAsync."
kindex: XStoreCanAcquireLicenseForStoreIdResult
ms.author: anhillier
ms.topic: reference
edited: 04/03/2026
quality: good
applies-to: pc-gdk
ms.date: '04/03/2026'
permissioned-type: public
---

# XStoreCanAcquireLicenseForStoreIdResult


Gets the results for a call to [XStoreCanAcquireLicenseForStoreIdAsync](xstorecanacquirelicenseforstoreidasync.md).  

## Syntax  
  
```cpp
HRESULT XStoreCanAcquireLicenseForStoreIdResult(  
         XAsyncBlock* async,  
         XStoreCanAcquireLicenseResult* storeCanAcquireLicense  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
The `XAsyncBlock` that you pass to [XStoreCanAcquireLicenseForStoreIdAsync](xstorecanacquirelicenseforstoreidasync.md).
Use the [XAsyncBlock](../../xasync/structs/xasyncblock.md) to poll for the call's status and retrieve call results.
For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).
  
*storeCanAcquireLicense* &nbsp;&nbsp;\_Out\_  
Type: [XStoreCanAcquireLicenseResult*](../structs/xstorecanacquirelicenseresult.md)  
  
On return, check the result's status to see if the user can license the product.
Call this API for games and durables (with or without packages).
It also returns a result if the product can be licensed by using an inserted disc.
The result includes which SKU the user can license.
For content that users can license by using a disc, the SKU is 'DISC'.
  
### Return value

Type: HRESULT
  
S_OK on success; otherwise, returns an error code.
  
The `XStoreCanAcquireLicenseForStoreIdResult` function returns the following error codes:

| Error code| Meaning|
| --- | --- |
| 0x87E10BC6 `LM_E_CONTENT_NOT_IN_CATALOG` | The product isn't found in the catalog. |
| 0x803F8001 `LM_E_CONTENT_NOT_OWNED` | The product isn't owned. |
| 0x803F8008 `LM_E_PREDOWNLOAD_LICENSE_NOT_YET_AVAILABLE` | The product is owned but can't be licensed because it isn't released yet. |
| 0x803F9006 `LM_E_ENTITLED_USER_SIGNED_OUT` | The owner of the product isn't signed in. |
| 0x89245305 `E_GAMESTORE_LICENSE_ACTION_THROTTLED` | The game excessively queried a license for the product and is now throttled. Limit is 30 licensing attempts within 10 minutes for the same product. |

## Remarks  

This function retrieves the execution results of [XStoreCanAcquireLicenseForStoreIdAsync](xstorecanacquirelicenseforstoreidasync.md), and the preview license that the function calls for if the execution is successful.
Call this function after [XStoreCanAcquireLicenseForStoreIdAsync](xstorecanacquirelicenseforstoreidasync.md), usually in the context of a callback function.
For a usage example, see [XStoreCanAcquireLicenseForStoreIdAsync](xstorecanacquirelicenseforstoreidasync.md).
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles, and Xbox Series consoles  
  
## See also

[XStore](../xstore_members.md)  
[XStoreCanAcquireLicenseForStoreIdAsync](xstorecanacquirelicenseforstoreidasync.md)  
[How to use a durable without a package](../../../../store/commerce/fundamentals/xstore-dwobs.md)  
[Granting players access to add-on content](../../../../store/commerce/fundamentals/xstore-granting-access-to-content.md)  
  
