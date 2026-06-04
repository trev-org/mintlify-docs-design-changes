---
author: M-Stahl
title: "XStoreQueryEntitledProductsResult"
description: "Gets the results for a call to XStoreQueryEntitledProductsAsync."
kindex: XStoreQueryEntitledProductsResult
ms.author: shanede
ms.topic: reference
edited: 07/02/2019
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XStoreQueryEntitledProductsResult  
  
Gets the results for a call to [XStoreQueryEntitledProductsAsync](xstorequeryentitledproductsasync.md).  

## Syntax  
  
```cpp
HRESULT XStoreQueryEntitledProductsResult(  
         XAsyncBlock* async,  
         XStoreProductQueryHandle* productQueryHandle  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
The `XAsyncBlock` passed to [XStoreQueryEntitledProductsAsync](xstorequeryentitledproductsasync.md).
Use [XAsyncBlock](../../xasync/structs/xasyncblock.md) to poll the call's status and retrieve call results.
For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).  
  
*productQueryHandle* &nbsp;&nbsp;\_Out\_  
Type: XStoreProductQueryHandle*  
  
On return, contains a XStoreProductQueryHandle representing the query. The returned XStoreProductQueryHandle can be passed to [XStoreEnumerateProductsQuery](xstoreenumerateproductsquery.md) to enumerate the products the query returned.  
  
### Return value
Type: HRESULT
  
S_OK on success; otherwise, returns an error code.    
  
## Remarks  
  
This result function retrieves the execution results of [XStoreQueryEntitledProductsAsync](xstorequeryentitledproductsasync.md), and the product information if the execution was successful.
Call this function after [XStoreQueryEntitledProductsAsync](xstorequeryentitledproductsasync.md), usually in the context of a callback function.  
  
See [XStoreQueryEntitledProductsAsync](xstorequeryentitledproductsasync.md) for a usage example.
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles, and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)
[XStoreQueryAssociatedProductsAsync](xstorequeryassociatedproductsasync.md)  
[XStoreQueryEntitledProductsAsync](xstorequeryentitledproductsasync.md)  
[XStoreQueryProductsAsync](xstorequeryproductsasync.md)  
[XStoreQueryProductForCurrentGameAsync](xstorequeryproductforcurrentgameasync.md)  
[XStoreQueryProductForPackageAsync](xstorequeryproductforpackageasync.md)  
[Basic store operations](../../../../store/commerce/fundamentals/xstore-basic-store-operations.md)  
[Granting players access to add-on content](../../../../store/commerce/fundamentals/xstore-granting-access-to-content.md)  

  
  
