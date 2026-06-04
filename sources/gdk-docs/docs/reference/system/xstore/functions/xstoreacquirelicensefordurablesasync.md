---
author: anhillier-xbox
title: "XStoreAcquireLicenseForDurablesAsync"
description: "Acquires a license for the specified durable."
kindex: XStoreAcquireLicenseForDurablesAsync
ms.author: shanede
ms.topic: reference
edited: 02/06/2026
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XStoreAcquireLicenseForDurablesAsync

Acquires a license for a DLC (Durable with a package), Durable without a package, or Durable add-on product.

<a id="syntaxSection"></a>

## Syntax

```cpp
HRESULT XStoreAcquireLicenseForDurablesAsync(
         const XStoreContextHandle storeContextHandle,
         const char* storeId,
         XAsyncBlock* async
)
```

<a id="parametersSection"></a>

### Parameters

*storeContextHandle* &nbsp;&nbsp;\_In\_  
Type: XStoreContextHandle

The store context handle for the user, returned by [XStoreCreateContext](xstorecreatecontext.md).

*storeId* &nbsp;&nbsp;\_In\_z\_  
Type: char\*

The store ID for the durable to acquire a license for.

*async* &nbsp;&nbsp;\_Inout\_  
Type: XAsyncBlock\*

An [XAsyncBlock](../../xasync/structs/xasyncblock.md) defining the asynchronous work.
Use the [XAsyncBlock](../../xasync/structs/xasyncblock.md) to check for the call's status and get call results.
For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).

<a id="retvalSection"></a>

### Return value

Type: HRESULT

Returns **S_OK** upon success, or an error code otherwise.

<a id="remarksSection"></a>

## Remarks

This API attempts to acquire a license for the requested durable.
If it's the first time the device is acquiring the license, a service call is made, therefore requiring an online connection.
Subsequent calls for the same license may be faster due to caching, but the license can be invalidated at any time.
On Console, offline access requires that 'Home Xbox' be enabled for the owning account and the license must first be obtained once while online.
For PC, offline access requires that 'Offline permissions' be set for the account that owns the license and the license must first be obtained once while online.

[XStoreRegisterPackageLicenseLost](xstoreregisterpackagelicenselost.md) can be used to monitor if the license obtained from this API is lost.

<a id="requirementsSection"></a>

## Requirements

**Header:** XStore.h

**Library:** xgameruntime.lib

**Supported Platforms**: Windows, Xbox One family consoles, and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[XStore](../xstore_members.md)  
[XAsyncBlock](../../xasync/structs/xasyncblock.md)  
[XStoreAcquireLicenseForDurablesResult](xstoreacquirelicensefordurablesresult.md)  
[How to use a durable without a package](../../../../store/commerce/fundamentals/xstore-dwobs.md)  
[Granting players access to add-on content](../../../../store/commerce/fundamentals/xstore-granting-access-to-content.md)  
