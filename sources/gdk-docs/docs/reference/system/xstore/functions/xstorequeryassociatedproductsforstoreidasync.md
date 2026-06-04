---
author: A-Radu
title: "XStoreQueryAssociatedProductsForStoreIdAsync"
description: "Gets store listing information for the products that can be purchased from the product specified by the Store ID."
kindex: XStoreQueryAssociatedProductsForStoreIdAsync
ms.author: anhillier
ms.topic: reference
edited: '04/03/2026'
quality: good
applies-to: pc-gdk
ms.date: '04/03/2026'
permissioned-type: public
---

# XStoreQueryAssociatedProductsForStoreIdAsync  
  
Gets store listing information for purchasable products related to a target product that's specified by its Store ID.   

## Syntax  
  
```cpp
HRESULT XStoreQueryAssociatedProductsForStoreIdAsync(   
         const XStoreContextHandle storeContextHandle,   
         const char* storeId, 
         XStoreProductKind productKinds,   
         uint32_t maxItemsToRetrievePerPage,   
         XAsyncBlock* async   
)   
```  
  
### Parameters  
  
*storeContextHandle* &nbsp;&nbsp;\_In\_  
Type: XStoreContextHandle  
  
The store context handle for the user returned by [XStoreCreateContext](xstorecreatecontext.md).

*storeId* &nbsp;&nbsp;\_In\_  
Type: const char* 
  
The Store ID for the product for which the associated products are retrieved.

*productKinds* &nbsp;&nbsp;\_In\_  
Type: [XStoreProductKind](../enums/xstoreproductkind.md)  
  
The type of products to return.
  
*maxItemsToRetrievePerPage* &nbsp;&nbsp;\_In\_  
Type: uint32_t  
  
The maximum number of items to retrieve per page.
The number of items returned per page can vary from 0 to `maxItemsToRetrievePerPage`.
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
An [XAsyncBlock](../../xasync/structs/xasyncblock.md) that defines the asynchronous work being done.
Use the [XAsyncBlock](../../xasync/structs/xasyncblock.md) to poll for the call's status and retrieve call results.
For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).  
  
### Return value
Type: HRESULT
  
HRESULT success or error code.
  
## Remarks  
  
To get the store listing information and execution result for this function, call [XStoreQueryAssociatedProductsForStoreIdResult](xstorequeryassociatedproductsforstoreidresult.md) after calling this function.
[XStoreQueryAssociatedProductsForStoreIdResult](xstorequeryassociatedproductsforstoreidresult.md) contains an `XStoreProductQueryHandle` that's enumerated by calling [XStoreEnumerateProductsQuery](xstoreenumerateproductsquery.md).

> [!NOTE] 
> This API supports the same paging pattern as described in [XStoreQueryAssociatedProductsAsync](xstorequeryassociatedproductsasync.md).
> 
> Paging can behave differently between sandboxes and RETAIL.
> Verify your paging implementation and be sure to test in RETAIL before release.
> 
> For more information, see [Paging](xstorequeryassociatedproductsasync.md#paging).

You can't know the number of products this query returns upfront.

Use the API to find add-ons that are associated with a target product by using its Store ID.
This ability is especially useful for franchise game hubs. A franchise game hub can enumerate add-ons for multiple games, but it can't tell which game these add-ons are associated with. 

Examples of usage scenarios: 

* Developers run `XPackageEnumeratePackages` to enumerate installed [XPackageKind::Game](../../xpackage/enums/xpackagekind.md) products, then for one of these games, they run `XStoreQueryAssociatedProductsForStoreIdAsync` using the storeId obtained from the `XPackageDetails`. Developers run `XPackageEnumeratePackages` for [XPackageKind::Content](../../xpackage/enums/xpackagekind.md) to enumerate installed DLC. Results from the content enumeration and product query are cross-referenced so developers can now identify which DLCs are installed for the specific game. 

* Developers run `XStoreQueryAssociatedProductsAsync` to get a list of purchasable products associated with the current game. Then, by using the storeId from the target game's `XStoreProduct`, developers run `XStoreQueryAssociatedProductsForStoreIdAsync` to find out which DLCs are associated with it. 
  
The following code snippet shows an example of querying for products associated with a target product by using its Store ID.
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

void CALLBACK QueryAssociatedProductsForStoreIdCallback(XAsyncBlock* async)
{
    auto* ctx = static_cast<QueryContext*>(async->context);

    HRESULT hr = XStoreQueryAssociatedProductsForStoreIdResult(async, &ctx->handle);
    if (FAILED(hr)) { CleanupProductQuery(async); return; }

    hr = XStoreEnumerateProductsQuery(ctx->handle, ctx, ProductEnumerationCallback);
    if (FAILED(hr)) { CleanupProductQuery(async); return; }

    if (XStoreProductsQueryHasMorePages(ctx->handle))
    {
        QueryNextPage(async);
        return;
    }

    printf("Enumeration complete, %u products found\n", ctx->count);
    CleanupProductQuery(async);
}

void QueryAssociatedProductsForStoreId(XStoreContextHandle storeContextHandle, XTaskQueueHandle taskQueueHandle, const char* storeId)
{
    auto async = new XAsyncBlock{};
    async->context = new QueryContext{ 0, nullptr };
    async->queue = taskQueueHandle; 
    async->callback = QueryAssociatedProductsForStoreIdCallback; 
 
    XStoreProductKind typeFilter = 
        XStoreProductKind::Consumable | 
        XStoreProductKind::Durable | 
        XStoreProductKind::Game |
        XStoreProductKind::Pass |
        XStoreProductKind::UnmanagedConsumable;
 
    HRESULT hr = XStoreQueryAssociatedProductsForStoreIdAsync( 
        storeContextHandle, 
        storeId, 
        typeFilter, 
        25,           // Products per page (25 is a good default, can set lower to verify paging in sandbox)
        async);

    if (FAILED(hr))
    {
        printf("Failed to get associated products for %s: 0x%x\r\n", storeId, hr); 
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
[XStoreQueryAssociatedProductsForStoreIdResult](xstorequeryassociatedproductsforstoreidresult.md)  
[XStoreQueryAssociatedProductsAsync](xstorequeryassociatedproductsasync.md)  
[XStoreEnumerateProductsQuery](xstoreenumerateproductsquery.md)  
[XStoreProductsQueryHasMorePages](xstoreproductsqueryhasmorepages.md)  
[XStoreProductsQueryNextPageAsync](xstoreproductsquerynextpageasync.md)  
  
