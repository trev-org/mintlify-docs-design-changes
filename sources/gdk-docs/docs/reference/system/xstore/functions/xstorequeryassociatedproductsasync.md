---
author: M-Stahl
title: "XStoreQueryAssociatedProductsAsync"
description: "Gets store listing information for the products that can be purchased from within the current game."
kindex: XStoreQueryAssociatedProductsAsync
ms.author: anhillier
ms.topic: reference
edited: 04/03/26
quality: good
applies-to: pc-gdk
ms.date: '04/03/2026'
permissioned-type: public
---

# XStoreQueryAssociatedProductsAsync  
  
Gets store listing information for products that users can buy from within the current game.  

## Syntax  
  
```cpp
HRESULT XStoreQueryAssociatedProductsAsync(  
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
  
The type of products to return.
  
*maxItemsToRetrievePerPage* &nbsp;&nbsp;\_In\_  
Type: uint32_t  
  
The maximum number of items to retrieve per page.
The number of items returned per page can vary from 0 to `maxItemsToRetrievePerPage`.
For more information, see [Paging](#paging).
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
An [XAsyncBlock](../../xasync/structs/xasyncblock.md) defining the asynchronous work being done.
Use the [XAsyncBlock](../../xasync/structs/xasyncblock.md) to poll for the call's status and retrieve call results.
For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).  
  
### Return value
Type: HRESULT
  
HRESULT success or error code.

## Remarks  

To get the store listing information and the execution result for this function, call [XStoreQueryAssociatedProductsResult](xstorequeryassociatedproductsresult.md) after calling this function.
[XStoreQueryAssociatedProductsResult](xstorequeryassociatedproductsresult.md) contains an `XStoreProductQueryHandle` that you enumerate by calling [XStoreEnumerateProductsQuery](xstoreenumerateproductsquery.md).

You can't know the number of products that this query returns upfront.

This API only returns products that users can browse in the Microsoft Store or purchase within the game.
The results don't include any product that is hidden, expired, or removed from the store.
If you need details for such a product, use [XStoreQueryProductsAsync](xstorequeryproductsasync.md) and pass in the product's Store ID.
  
## Paging

This function returns products across multiple pages (up to `maxItemsToRetrievePerPage` items in a single page).
Use [XStoreProductsQueryHasMorePages](xstoreproductsqueryhasmorepages.md) and [XStoreProductsQueryNextPageAsync](xstoreproductsquerynextpageasync.md)/[XStoreProductsQueryNextPageResult](xstoreproductsquerynextpageresult.md) to process all paged results.
Paging isn't complete until `XStoreProductsQueryHasMorePages` returns false.

> [!NOTE]
> Paging can behave differently between sandboxes and RETAIL.
> In a sandbox, items accumulate up to `maxItemsToRetrievePerPage` before a page returns.
> In RETAIL, it's common to have 0-1 items return per page.
> 
> It's important for all games using this API to implement and test paging before release.
> 
> To test paging behavior in a sandbox, temporarily set `maxItemsToRetrievePerPage` to a value less than the number of products published to your sandbox.
> To test in RETAIL before your game's release, publish products using the **Enable Private Audience** option on the 'Pricing and availability' page in Partner Center.
> To test in RETAIL after your game's release, use a package flight.

The following code shows how to retrieve product query results across multiple pages.

Ensure the query handle is passed down through the paging recursion to avoid leaks.

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

void CALLBACK QueryAssociatedProductsCallback(XAsyncBlock* async)
{
    auto* ctx = static_cast<QueryContext*>(async->context);

    HRESULT hr = XStoreQueryAssociatedProductsResult(async, &ctx->handle);
    if (FAILED(hr)) { CleanupProductQuery(async); return; }

    hr = XStoreEnumerateProductsQuery(ctx->handle, ctx, ProductEnumerationCallback);
    if (FAILED(hr)) { CleanupProductQuery(async); return; }

    // Check if there are more pages to process
    if (XStoreProductsQueryHasMorePages(ctx->handle))
    {
        QueryNextPage(async);
        return;
    }

    printf("Enumeration complete, %u products found\n", ctx->count);
    CleanupProductQuery(async);
}

void QueryAssociatedProducts(XStoreContextHandle storeContextHandle, XTaskQueueHandle taskQueueHandle)
{
    auto async = new XAsyncBlock{};
    async->context = new QueryContext{ 0, nullptr };
    async->queue = taskQueueHandle;
    async->callback = QueryAssociatedProductsCallback;

    XStoreProductKind typeFilter =
        XStoreProductKind::Consumable |
        XStoreProductKind::Durable |
        XStoreProductKind::Game |
        XStoreProductKind::Pass |
        XStoreProductKind::UnmanagedConsumable;

    HRESULT hr = XStoreQueryAssociatedProductsAsync(
        storeContextHandle,
        typeFilter,
        25,          // Products per page (25 is a good default, can set lower to verify paging in sandbox)
        async);

    if (FAILED(hr))
    {
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

        // Check if there are more pages to process
        if (XStoreProductsQueryHasMorePages(ctx->handle))
        {
            QueryNextPage(async);
            return;
        }

        printf("Enumeration complete, %u products found\n", ctx->count);
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
[XStoreQueryAssociatedProductsResult](xstorequeryassociatedproductsresult.md)  
[XStoreEnumerateProductsQuery](xstoreenumerateproductsquery.md)  
[XStoreProductsQueryHasMorePages](xstoreproductsqueryhasmorepages.md)  
[XStoreProductsQueryNextPageAsync](xstoreproductsquerynextpageasync.md)  
[Basic store operations](../../../../store/commerce/fundamentals/xstore-basic-store-operations.md)  
[Granting players access to add-on content](../../../../store/commerce/fundamentals/xstore-granting-access-to-content.md)  
