---
author: anhillier-xbox
title: "XStoreQueryProductsAsync"
description: "Returns listing information for the specified products that are associated with the current game, regardless of whether the products are available for purchase within the current game."
kindex: XStoreQueryProductsAsync
ms.author: anhillier
ms.topic: reference
edited: 04/03/2026
quality: good
applies-to: pc-gdk
ms.date: '04/03/2026'
permissioned-type: public
---

# XStoreQueryProductsAsync  
  
Returns listing information for the specified products that are associated with the current game, regardless of whether the products are available for purchase within the game.  

## Syntax  
  
```cpp
HRESULT XStoreQueryProductsAsync(  
         const XStoreContextHandle storeContextHandle,  
         XStoreProductKind productKinds,  
         const char** storeIds,  
         size_t storeIdsCount,  
         const char** actionFilters,  
         size_t actionFiltersCount,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*storeContextHandle* &nbsp;&nbsp;\_In\_  
Type: XStoreContextHandle  
  
The store context handle for the user returned by [XStoreCreateContext](xstorecreatecontext.md).    
  
*productKinds* &nbsp;&nbsp;\_In\_  
Type: [XStoreProductKind](../enums/xstoreproductkind.md)  
  
The types of products to return.    
  
*storeIds* &nbsp;&nbsp;\_In\_z\_count\_(storeIdsCount)  
Type: char**  
  
The store identifiers for the products to retrieve.  
  
*storeIdsCount* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The number of products in the list of **storeIds**.
This number shouldn't exceed 100.
  
*actionFilters* &nbsp;&nbsp;\_In\_opt\_z\_count\_(actionFiltersCount)  
Type: char**  
  
Restricts the results by some action stored in the product document.
By default, this API returns all products, even if they aren't purchasable, but you can use action filters to restrict results.
For example, use "Purchase" if you only want purchasable products, or "License" if you only want licensable products.
Other action filters include "Fulfill", "Browse", "Curate", "Details", and "Redeem". 
  
*actionFiltersCount* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The number of filters in **actionFilters**.  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
An [XAsyncBlock](../../xasync/structs/xasyncblock.md) defining the asynchronous work being done.
Use the [XAsyncBlock](../../xasync/structs/xasyncblock.md) to check the call's status and get the results.
For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).  
  
### Return value
Type: HRESULT
  
HRESULT success or error code.    
  
## Remarks  
  
Call [XStoreQueryProductsResult](xstorequeryproductsresult.md) to retrieve the listing information and the execution result of this function.

This API fails if you provide more than 100 storeIDs in the request.
If you're working with a large catalog, limit each query to fewer than 100 products.
  
To get details for all products that players can purchase within the current game, use [XStoreQueryAssociatedProductsAsync](xstorequeryassociatedproductsasync.md) instead.  
  
The following code snippet shows an example of retrieving listing information for the specified products that are associated with the current game.  
  
```cpp

void ProcessResults(XStoreProductQueryHandle queryHandle)
{
    HRESULT hr = XStoreEnumerateProductsQuery(
        queryHandle,
        nullptr,
        EnumerateProductsQueryCallback);

    if (FAILED(hr))
    {
        printf("Failed enumerate the product query handle: 0x%x\r\n", hr);
        XStoreCloseProductsQueryHandle(queryHandle);
        return;
    }

    XStoreCloseProductsQueryHandle(queryHandle);
}

void CALLBACK QueryProductsCallback(XAsyncBlock* asyncBlock)
{
    XStoreProductQueryHandle queryHandle = nullptr;

    HRESULT hr = XStoreQueryProductsResult(
        asyncBlock,
        &queryHandle);

    if (FAILED(hr))
    {
        printf("Failed retrieve the product query handle: 0x%x\r\n", hr);
        return;
    }

     ProcessResults(queryHandle);
}

void QueryProducts(XStoreContextHandle storeContextHandle, XTaskQueueHandle taskQueueHandle)
{
    auto asyncBlock = std::make_unique<XAsyncBlock>();
    ZeroMemory(asyncBlock.get(), sizeof(*asyncBlock));
    asyncBlock->queue = taskQueueHandle;

    asyncBlock->callback = QueryProductsCallback;

    XStoreProductKind allProductKinds =
        XStoreProductKind::Consumable |
        XStoreProductKind::Durable |
        XStoreProductKind::Game |
        XStoreProductKind::Pass |
        XStoreProductKind::UnmanagedConsumable;

    const char* storeIds[] =
    {
        "9YYYYYYYYYYY",
        "9ZZZZZZZZZZZ",
    };

    // This is only needed if you want to restrict to items that are currently purchasable.
    // If you want items that have been sold in the past,
    // but are no longer available for purchase, then
    // pass in nullptr or an empty array for the actionFilters.
    const char* actionFilters[] =
    {
        "Purchase"
    };

    HRESULT hr = XStoreQueryProductsAsync(
        storeContextHandle,
        allProductKinds,
        storeIds,
        ARRAYSIZE(storeIds),
        actionFilters,
        ARRAYSIZE(actionFilters),
        asyncBlock.get());

    if (FAILED(hr))
    {
        printf("Failed to get products: 0x%x\r\n", hr);
        return;
    }
}

```
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles, and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)
[XStoreQueryProductsResult](xstorequeryproductsresult.md)  
[XStoreQueryAssociatedProductsAsync](xstorequeryassociatedproductsasync.md)  
[XStoreQueryEntitledProductsAsync](xstorequeryentitledproductsasync.md)  
[XStoreQueryProductsAsync](xstorequeryproductsasync.md)  
[XStoreQueryProductForCurrentGameAsync](xstorequeryproductforcurrentgameasync.md)  
[XStoreQueryProductForPackageAsync](xstorequeryproductforpackageasync.md)  
[Basic store operations](../../../../store/commerce/fundamentals/xstore-basic-store-operations.md)  
[Granting players access to add-on content](../../../../store/commerce/fundamentals/xstore-granting-access-to-content.md)   
