---
author: anhillier-xbox
title: "XStoreQueryEntitledProductsAsync"
description: "Provides the Store product information for all add-ons of the current game the user has purchased."
kindex: XStoreQueryEntitledProductsAsync
ms.author: anhillier
ms.topic: reference
edited: '04/03/2026'
quality: good
applies-to: pc-gdk
ms.date: '04/03/2026'
permissioned-type: public
---

# XStoreQueryEntitledProductsAsync  
  
Returns store information for all products related to the current game that the user is entitled to.

## Syntax  
  
```cpp
HRESULT XStoreQueryEntitledProductsAsync(  
         const XStoreContextHandle storeContextHandle,  
         XStoreProductKind productKinds,  
         uint32_t maxItemsToRetrievePerPage,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*storeContextHandle* &nbsp;&nbsp;\_In\_  
Type: XStoreContextHandle  
  
The store context handle for the user returned by [XStoreCreateContext](xstorecreatecontext.md).    
  
*productKinds* &nbsp;&nbsp;\_In\_  
Type: [XStoreProductKind](../enums/xstoreproductkind.md)  
  
The kind of products to query.  
  
*maxItemsToRetrievePerPage* &nbsp;&nbsp;\_In\_  
Type: uint32_t  
  
Maximum number of items to retrieve per page.
The number of items returned per page can vary from 0 to `maxItemsToRetrievePerPage`.
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
An [XAsyncBlock](../../xasync/structs/xasyncblock.md) defining the asynchronous work being done.
The [XAsyncBlock](../../xasync/structs/xasyncblock.md) can be used to poll for the call's status and retrieve call results.
For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).  
  
### Return value
Type: HRESULT
  
S_OK on success; otherwise, returns an error code.  
  
## Remarks  

Call [XStoreQueryEntitledProductsResult](xstorequeryentitledproductsresult.md) to retrieve the store product information and the execution result of this function.
Execute [XStoreQueryEntitledProductsResult](xstorequeryentitledproductsresult.md) in the callback function for `XStoreQueryEntitledProductsAsync`.
The result contains an `XStoreProductQueryHandle` that you can enumerate by calling [XStoreEnumerateProductsQuery](xstoreenumerateproductsquery.md).

> [!NOTE]
> The more items a player is entitled to, the longer this API can take to return.
>  
> This API supports the same paging pattern described in [XStoreQueryAssociatedProductsAsync](xstorequeryassociatedproductsasync.md).
> 
> Paging can behave differently between sandboxes and RETAIL. Verify your paging implementation and be sure to test in RETAIL before release.
> 
> For more information, see [Paging](xstorequeryassociatedproductsasync.md#paging).

You can't know the number of products returned by this query upfront.

The following code snippet provides an example of querying for a user's entitlements to content related to the current game.
Results are processed across multiple pages.
  
```cpp
struct QueryContext
{
    uint32_t count = 0;  // used to accumulate count of products returned across pages
    XStoreProductQueryHandle handle = nullptr;  // handle to reuse for paged operations
};

void CleanupProductQuery(XAsyncBlock* async)
{
    if (!async) return;

    auto* ctx = static_cast<QueryContext*>(async->context);
    if (ctx)
    {
        if (ctx->handle)
        {
            XStoreCloseProductsQueryHandle(ctx->handle);
            ctx->handle = nullptr;
        }

        delete ctx;
        async->context = nullptr;
    }

    delete async;
}

bool CALLBACK ProductEnumerationCallback(const XStoreProduct* product, void* context)
{
    // Use result of query
    auto* ctx = static_cast<QueryContext*>(context);

    // Empty results are possible and should be skipped
    if (product)
    {
        printf("%s %s %u\n", product->title, product->storeId, product->productKind);
        ctx->count++;
    }

    return true;
}

void CALLBACK QueryEntitledProductsCallback(XAsyncBlock* async)
{
    auto* ctx = static_cast<QueryContext*>(async->context);

    HRESULT hr = XStoreQueryEntitledProductsResult(async, &ctx->handle);
    if (FAILED(hr)) { CleanupProductQuery(async); return; }

    hr = XStoreEnumerateProductsQuery(ctx->handle, ctx, ProductEnumerationCallback);
    if (FAILED(hr)) { CleanupProductQuery(async); return; }

    if (XStoreProductsQueryHasMorePages(ctx->handle))
    {
        QueryNextPage(async);
        return;
    }

    printf("Enumeration complete, %u entitled products found\n", ctx->count);
    CleanupProductQuery(async);
}

void QueryEntitledProducts(XStoreContextHandle storeContextHandle, XTaskQueueHandle taskQueueHandle)
{
    auto async = new XAsyncBlock{};
    async->context = new QueryContext{ 0, nullptr };
    async->queue = taskQueueHandle; 
    async->callback = QueryEntitledProductsCallback; 
 
    XStoreProductKind typeFilter = 
        XStoreProductKind::Consumable | 
        XStoreProductKind::Durable | 
        XStoreProductKind::Game |
        XStoreProductKind::Pass |
        XStoreProductKind::UnmanagedConsumable;
 
    HRESULT hr = XStoreQueryEntitledProductsAsync( 
        storeContextHandle, 
        typeFilter, 
        25,           // Products per page (25 is a good default, can set lower to verify paging in sandbox)
        async);

    if (FAILED(hr))
    {
        printf("Failed to get entitled products: 0x%x\r\n", hr); 
        CleanupProductQuery(async);
    }
}

// In RETAIL, content will be returned across multiple pages.
// Paging is not complete until XStoreProductsQueryHasMorePages returns false.
void QueryNextPage(XAsyncBlock *async)
{
    async->callback = [](XAsyncBlock* async)
    {
        auto* ctx = static_cast<QueryContext*>(async->context);

        XStoreProductQueryHandle next = nullptr;
        HRESULT hr = XStoreProductsQueryNextPageResult(async, &next);
        if (FAILED(hr)) { CleanupProductQuery(async); return; }

        // Safe swap: avoids leaks if 'next' is a new handle, avoids double-close if identical
        if (next && next != ctx->handle)
        {
            if (ctx->handle) XStoreCloseProductsQueryHandle(ctx->handle);
            ctx->handle = next;
        }
        else
        {
            ctx->handle = next; // covers null or same-handle cases
        }

        hr = XStoreEnumerateProductsQuery(ctx->handle, ctx, ProductEnumerationCallback);
        if (FAILED(hr)) { CleanupProductQuery(async); return; }

        if (XStoreProductsQueryHasMorePages(ctx->handle))
        {
            QueryNextPage(async);
            return;
        }

        printf("Enumeration complete, %u entitled products found\n", ctx->count);
        CleanupProductQuery(async);
    };

    auto* ctx = static_cast<QueryContext*>(async->context);
    HRESULT hr = XStoreProductsQueryNextPageAsync(ctx->handle, async);
    if (FAILED(hr))
    {
        CleanupProductQuery(async);
    }
}

``` 
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles, and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)  
[XStoreQueryEntitledProductsResult](xstorequeryentitledproductsresult.md)
[XStoreQueryAssociatedProductsAsync](xstorequeryassociatedproductsasync.md)  
[XStoreQueryEntitledProductsAsync](xstorequeryentitledproductsasync.md)  
[XStoreQueryProductsAsync](xstorequeryproductsasync.md)  
[XStoreQueryProductForCurrentGameAsync](xstorequeryproductforcurrentgameasync.md)  
[XStoreQueryProductForPackageAsync](xstorequeryproductforpackageasync.md)  
[Basic store operations](../../../../store/commerce/fundamentals/xstore-basic-store-operations.md)  
[Granting players access to add-on content](../../../../store/commerce/fundamentals/xstore-granting-access-to-content.md)  
