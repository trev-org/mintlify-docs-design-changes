---
author: M-Stahl
title: "XStoreShowAssociatedProductsUIAsync"
description: "This will open up the Microsoft Store app and show the set of available add-ons associated with the game. This can be further filtered by product type."
kindex: XStoreShowAssociatedProductsUIAsync
ms.author: shanede
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XStoreShowAssociatedProductsUIAsync

This will open up the Microsoft Store app and show the set of available add-ons associated with the game. This can be further filtered by product type. This is an alternative to enumerating and presenting the available products within the game. 

> [!NOTE]
> Note, this API opens the store in a web browser and it is suggested to use XStoreShowProductPageUI or XStoreShowPurchaseUI if your games is appearing in the console, Xbox App on PC, or game streaming storefronts. 

![Add-ons for this game](../../../../../media/public-images/xstore/addonsforthisgame-small.png)

## Syntax  
  
```cpp
HRESULT XStoreShowAssociatedProductsUIAsync(  
         const XStoreContextHandle storeContextHandle,  
         const char* storeId,  
         XStoreProductKind productKinds,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*storeContextHandle* &nbsp;&nbsp;\_In\_  
Type: XStoreContextHandle  
  
The store context handle for the user returned by [XStoreCreateContext](xstorecreatecontext.md).
  
*storeId* &nbsp;&nbsp;\_In\_z\_  
Type: char*  
  
The ID of the product.
  
*productKinds* &nbsp;&nbsp;\_In\_  
Type: XStoreProductKind  
  
An enumeration indicating the kind of products to show.
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: XAsyncBlock*  
  
An [XAsyncBlock](../../xasync/structs/xasyncblock.md) defining the asynchronous work being done. The [XAsyncBlock](../../xasync/structs/xasyncblock.md) can be used to poll for the call's status and retrieve call results. See [XAsyncBlock](../../xasync/structs/xasyncblock.md) for more information.

### Return value

Type: HRESULT
  
HRESULT success or error code.
  
## Requirements  
  
**Header:** XStore.h
  
**Library:** ****.lib
**Supported Platforms**: Windows, Xbox One family consoles and Xbox Series consoles
  
## See also

[XStore](../xstore_members.md)  
