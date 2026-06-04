---
author: M-Stahl
title: "XStoreQueryProductsResult"
description: "Gets the results for a call to XStoreQueryProductsAsync."
kindex: XStoreQueryProductsResult
ms.author: shanede
ms.topic: reference
edited: 07/02/2019
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XStoreQueryProductsResult  
  
Gets the results for a call to [XStoreQueryProductsAsync](xstorequeryproductsasync.md).  

## Syntax  
  
```cpp
HRESULT XStoreQueryProductsResult(  
         XAsyncBlock* async,  
         XStoreProductQueryHandle* productQueryHandle  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
The `XAsyncBlock` passed to [XStoreQueryProductsAsync](xstorequeryproductsasync.md).
Use the [XAsyncBlock](../../xasync/structs/xasyncblock.md) to check the call's status and get the results.
For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).     
  
*productQueryHandle* &nbsp;&nbsp;\_Out\_  
Type: XStoreProductQueryHandle*  
  
On return, contains a XStoreProductQueryHandle representing the query. The returned XStoreProductQueryHandle can be passed to [XStoreEnumerateProductsQuery](xstoreenumerateproductsquery.md) to enumerate the products the query returned.  
  
### Return value
Type: HRESULT
  
S_OK on success; otherwise, returns an error code.    

## Remarks  
  
Use this result function to get the execution results of [XStoreQueryProductsAsync](xstorequeryproductsasync.md). If the execution succeeds, it returns the listing information.
Call this function after [XStoreQueryProductsAsync](xstorequeryproductsasync.md), usually in the context of a callback function.  
  
For a usage example, see [XStoreQueryProductsAsync](xstorequeryproductsasync.md).  
  
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
