---
author: arader
title: "XStoreShowGiftingUIAsync"
description: "Allows the game to request purchasing a particular store product as a gift for another user."
kindex: XStoreShowGiftingUIAsync
ms.author: arader
ms.topic: reference
edited: 09/24/2024
quality: good
applies-to: pc-gdk
ms.date: '09/18/2024'
permissioned-type: public
---

# XStoreShowGiftingUIAsync  

Begins the UI overlay for purchasing the specified product as a gift for another user. The current user will be prompted to enter information about the recipient of the gift and will be guided through the purchase flow.

## Syntax  
  
```cpp
HRESULT XStoreShowGiftingUIAsync(  
         const XStoreContextHandle storeContextHandle,  
         const char* storeId,  
         const char* name,  
         const char* extendedJsonData,  
         XAsyncBlock* async  
)  
```  

### Parameters  
  
*storeContextHandle* &nbsp;&nbsp;\_In\_  
Type: XStoreContextHandle  
  
The store context handle for the user returned by [XStoreCreateContext](xstorecreatecontext.md).    
  
*storeId* &nbsp;&nbsp;\_In\_z\_  
Type: char*  
  
ID for the product to purchase as a gift. **Note**: this product must configured to support gifting purchases.
  
*name* &nbsp;&nbsp;\_In\_opt\_z\_  
Type: char*  
  
Name of the product to purchase as a gift.
  
*extendedJsonData* &nbsp;&nbsp;\_In\_opt\_z\_  
Type: char*  
  
A json blob that is handed to the purchase gift flow. Allows for insertion of custom campaign IDs, so you can track how the purchase started.  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
An [XAsyncBlock](../../xasync/structs/xasyncblock.md) defining the asynchronous work being done. The [XAsyncBlock](../../xasync/structs/xasyncblock.md) can be used to poll for the call's status and retrieve call results. See [XAsyncBlock](../../xasync/structs/xasyncblock.md) for more information.  
  
### Return value
Type: HRESULT
  
HRESULT success or error code.    
  
## Remarks
The product to be purchased as a gift must be configured to support gifting purchases. To retrieve the list of products that support gifting call [XStoreQueryProductsAsync](xstorequeryproductsasync.md) with the `actionFilters` parameter set to `"Gift"`.

To retrieve the result of this function call [XStoreShowGiftingUIResult](xstoreshowgiftinguiresult.md) after calling this function. This function should only be called when the user has chosen to purchase something as a gift, and will cause the system to present a modal purchase dialog that handles payment information and user confirmation out-of-process.  

The following code snippet shows an example of requesting a gift purchase for a particular store product.  
  
```cpp
void CALLBACK ShowGiftingUICallback(XAsyncBlock* asyncBlock)
{
    HRESULT hr = XStoreShowGiftingUIResult(asyncBlock);

    if (FAILED(hr))
    {
        printf("Failed the gift purchase: 0x%x\r\n", hr);
        return;
    }
}

void ShowGiftingUI(XStoreContextHandle storeContextHandle, XTaskQueueHandle taskQueueHandle, const char* storeId)
{
    auto asyncBlock = std::make_unique<XAsyncBlock>();
    ZeroMemory(asyncBlock.get(), sizeof(*asyncBlock));
    asyncBlock->queue = taskQueueHandle;
    asyncBlock->callback = ShowGiftingUICallback;

    HRESULT hr = XStoreShowGiftingUIAsync(
        storeContextHandle,
        storeId,
        nullptr,    // Can be used to override the title bar text
        nullptr,    // Can be used to provide extra details to purchase
        asyncBlock.get());

    if (FAILED(hr))
    {
        printf("Failed to purchase: 0x%x\r\n", hr);
        return;
    }
}


```
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)  
[XStoreShowGiftingUIResult](xstoreshowgiftinguiresult.md)  
  
  