---
author: A-Radu
title: "XStoreQueryAssociatedProductsForStoreIdResult"
description: "Gets the results for a call to XStoreQueryAssociatedProductsForStoreIdAsync."
kindex: XStoreQueryAssociatedProductsForStoreIdResult
ms.author: anhillier
ms.topic: reference
edited: '04/03/2026'
quality: good
applies-to: pc-gdk
ms.date: '04/03/2026'
permissioned-type: public
---

# XStoreQueryAssociatedProductsForStoreIdResult  
  
Gets the results for a call to [XStoreQueryAssociatedProductsForStoreIdAsync](xstorequeryassociatedproductsforstoreidasync.md).  

## Syntax  
  
```cpp
HRESULT XStoreQueryAssociatedProductsForStoreIdResult(  
         XAsyncBlock* async,  
         XStoreProductQueryHandle* productQueryHandle  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
The `XAsyncBlock` that you pass to [XStoreQueryAssociatedProductsForStoreIdAsync](xstorequeryassociatedproductsforstoreidasync.md). Use the [XAsyncBlock](../../xasync/structs/xasyncblock.md) to check the call's status and get the results.
For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).  

*productQueryHandle* &nbsp;&nbsp;\_Out\_  
Type: XStoreProductQueryHandle*  
  
On return, contains a `XStoreProductQueryHandle` representing the query. Pass the returned `XStoreProductQueryHandle` to [XStoreEnumerateProductsQuery](xstoreenumerateproductsquery.md) to list the products the query returned.    
  
### Return value
Type: HRESULT
  
S_OK on success; otherwise, returns an error code.  
  
## Remarks  
  
This result function retrieves the execution results of [XStoreQueryAssociatedProductsForStoreIdAsync](xstorequeryassociatedproductsforstoreidasync.md). If the result is successful, it includes a list of associated products that you can enumerate with [XStoreEnumerateProductsQuery](xstoreenumerateproductsquery.md). Call this function after [XStoreQueryAssociatedProductsForStoreIdAsync](xstorequeryassociatedproductsforstoreidasync.md), usually in the context of a callback function.
  
For a usage example, see [XStoreQueryAssociatedProductsForStoreIdAsync](xstorequeryassociatedproductsforstoreidasync.md).  
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles, and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)
[XStoreQueryAssociatedProductsForStoreIdAsync](xstorequeryassociatedproductsforstoreidasync.md)  
[XStoreQueryEntitledProductsAsync](xstorequeryentitledproductsasync.md)  
[XStoreQueryProductsAsync](xstorequeryproductsasync.md)  
[XStoreQueryProductForCurrentGameAsync](xstorequeryproductforcurrentgameasync.md)  
[XStoreQueryProductForPackageAsync](xstorequeryproductforpackageasync.md)  

  
