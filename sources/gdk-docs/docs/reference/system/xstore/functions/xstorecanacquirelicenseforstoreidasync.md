---
author: anhillier-xbox
title: "XStoreCanAcquireLicenseForStoreIdAsync"
description: "Retrieves a preview license for content."
kindex: XStoreCanAcquireLicenseForStoreIdAsync
ms.author: shanede
ms.topic: reference
edited: 02/06/2026
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XStoreCanAcquireLicenseForStoreIdAsync

Retrieves a preview license for licensable content, including Durables with or without packages, and content on a disc that is currently inserted.
This API allows the game to see if the product is licensable, but without actually acquiring the license.

## Syntax  
  
```cpp
HRESULT XStoreCanAcquireLicenseForStoreIdAsync(  
         const XStoreContextHandle storeContextHandle,  
         const char* storeProductId,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*storeContextHandle* &nbsp;&nbsp;\_In\_  
Type: XStoreContextHandle  
  
The store context handle for the user returned by [XStoreCreateContext](xstorecreatecontext.md).
  
*storeProductId* &nbsp;&nbsp;\_In\_z\_  
Type: char*  
  
StoreID for the product to check
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
An [XAsyncBlock](../../xasync/structs/xasyncblock.md) defining the asynchronous work being done.
The [XAsyncBlock](../../xasync/structs/xasyncblock.md) can be used to poll for the call's status and retrieve call results.
For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).  
  
### Return value
Type: HRESULT
  
HRESULT success or error code.
  
## Remarks  
  
**XStoreCanAcquireLicenseForStoreIdAsync** provides the ability for a game to determine if the user could acquire a license for a particular piece of content without actually acquiring that license and using up that user's concurrency slot.
This function doesn't need to be used for the currently running game, since it has a license already, but it can determine if the user owns other games or content from the same publisher.
For example, a game can use this API to determine whether to reward users who own prior versions of the game (either digitally or from an inserted disc) or to up-sell products to the user.
  
To retrieve the preview license and the execution result of this function call [XStoreCanAcquireLicenseForStoreIdResult](xstorecanacquirelicenseforstoreidresult.md) after calling this function.  

This code snippet shows an example of using the following APIs:  
  
* **XStoreCanAcquireLicenseForStoreIdAsync**
* [XStoreCanAcquireLicenseForStoreIdResult](xstorecanacquirelicenseforstoreidresult.md)  
  
```cpp  
void CALLBACK CanAcquireLicenseForStoreIdCallback(XAsyncBlock* asyncBlock)
{
    XStoreCanAcquireLicenseResult canAcquireLicenseResult{};

    HRESULT hr = XStoreCanAcquireLicenseForStoreIdResult(
        asyncBlock,
        &canAcquireLicenseResult);

    if (FAILED(hr))
    {
        printf("Failed retrieve the license result: 0x%x\r\n", hr);
        return;
    }

    printf("status       : %d\r\n", canAcquireLicenseResult.status);
    printf("licensableSku: %s\r\n", canAcquireLicenseResult.licensableSku);
}

void CanAcquireLicenseForStoreId(XStoreContextHandle storeContextHandle, XTaskQueueHandle taskQueueHandle, const char* storeId)
{
    auto asyncBlock = std::make_unique<XAsyncBlock>();
    ZeroMemory(asyncBlock.get(), sizeof(*asyncBlock));
    asyncBlock->queue = taskQueueHandle;
    asyncBlock->callback = CanAcquireLicenseForStoreIdCallback;

    HRESULT hr = XStoreCanAcquireLicenseForStoreIdAsync(
        storeContextHandle,
        storeId,
        asyncBlock.get());

    if (FAILED(hr))
    {
        printf("Failed to get preview license for store ID: 0x%x\r\n", hr);
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
[XStoreCanAcquireLicenseForStoreIdResult](xstorecanacquirelicenseforstoreidresult.md)  
[How to use a durable without a package](../../../../store/commerce/fundamentals/xstore-dwobs.md)  
[Granting players access to add-on content](../../../../store/commerce/fundamentals/xstore-granting-access-to-content.md)
