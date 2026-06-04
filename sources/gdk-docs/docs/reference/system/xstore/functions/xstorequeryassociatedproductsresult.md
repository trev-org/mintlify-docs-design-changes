---
author: M-Stahl
title: "XStoreQueryAssociatedProductsResult"
description: "Gets the results for a call to XStoreQueryAssociatedProductsAsync."
kindex: XStoreQueryAssociatedProductsResult
ms.author: shanede
ms.topic: reference
edited: 07/02/2019
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XStoreQueryAssociatedProductsResult  
  
Gets the results for a call to [XStoreQueryAssociatedProductsAsync](xstorequeryassociatedproductsasync.md).  

## Syntax  
  
```cpp
HRESULT XStoreQueryAssociatedProductsResult(  
         XAsyncBlock* async,  
         XStoreProductQueryHandle* productQueryHandle  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
The `XAsyncBlock` that you pass to [XStoreQueryAssociatedProductsAsync](xstorequeryassociatedproductsasync.md).
Use the [XAsyncBlock](../../xasync/structs/xasyncblock.md) to check the call's status and get the results.
For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).  

*productQueryHandle* &nbsp;&nbsp;\_Out\_  
Type: XStoreProductQueryHandle*  
  
On return, contains a XStoreProductQueryHandle representing the query.
Pass the returned XStoreProductQueryHandle to [XStoreEnumerateProductsQuery](xstoreenumerateproductsquery.md) to list the products the query returned.  
  
### Return value
Type: HRESULT
  
S_OK on success; otherwise, returns an error code.  
  
## Remarks  
  
This result function retrieves the execution results of [XStoreQueryAssociatedProductsAsync](xstorequeryassociatedproductsasync.md). If the execution was successful, it returns a list of associated products.
Call this function after [XStoreQueryAssociatedProductsAsync](xstorequeryassociatedproductsasync.md), usually in the context of a callback function.  
  
For a usage example, see [XStoreQueryAssociatedProductsAsync](xstorequeryassociatedproductsasync.md).  
  
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
