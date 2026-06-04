---
author: anhillier-xbox
title: "XStoreAcquireLicenseForDurablesResult"
description: "Retrieves the result of a call to XStoreAcquireLicenseForDurablesAsync."
kindex: XStoreAcquireLicenseForDurablesResult
ms.author: anhillier
ms.topic: reference
edited: 04/03/2026
applies-to: pc-gdk
ms.date: '04/03/2026'
permissioned-type: public
---

# XStoreAcquireLicenseForDurablesResult

Retrieves the result of a call to [XStoreAcquireLicenseForDurablesAsync](xstoreacquirelicensefordurablesasync.md).

<a id="syntaxSection"></a>

## Syntax

```cpp
HRESULT XStoreAcquireLicenseForDurablesResult(
         XAsyncBlock* async,
         XStoreLicenseHandle* storeLicenseHandle
)
```

<a id="parametersSection"></a>

### Parameters

*async* &nbsp;&nbsp;\_Inout\_  
Type: XAsyncBlock*

The `XAsyncBlock` object passed to [XStoreAcquireLicenseForDurablesAsync](xstoreacquirelicensefordurablesasync.md).

*storeLicenseHandle* &nbsp;&nbsp;\_Out\_  
Type: XStoreLicenseHandle\*

On success, contains the handle to the store license.
Pass the acquired license handle into [XStoreIsLicenseValid](xstoreislicensevalid.md) to check if the license is valid.

<a id="retvalSection"></a>

### Return value

Type: HRESULT

Returns **S_OK** if successful, or an error code otherwise.

`XStoreAcquireLicenseForDurablesResult` can return the following error codes:

| Error code| Description |
| --- | --- |
| 0x87E10BC6 `LM_E_CONTENT_NOT_IN_CATALOG` | The product wasn't found in the catalog. |
| 0x803F8001 `LM_E_CONTENT_NOT_OWNED` | The product isn't owned. |
| 0x803F8008 `LM_E_PREDOWNLOAD_LICENSE_NOT_YET_AVAILABLE` | The product is owned but can't be licensed because it isn't released yet. |
| 0x803F9006 `LM_E_ENTITLED_USER_SIGNED_OUT` | Owner of the product isn't signed in. |
| 0x89245305 `E_GAMESTORE_LICENSE_ACTION_THROTTLED` | The game excessively queried a license for the product and is now throttled. Limit is 30 licensing attempts within 10 minutes for the same product. |

<a id="remarksSection"></a>

## Remarks

Call this function on a time-sensitive thread.

The [XAsyncBlock](../../xasync/structs/xasyncblock.md) structure contains the result of the call.
Use the [XAsyncBlock](../../xasync/structs/xasyncblock.md) object to poll for the function call status and to retrieve the result.
To acquire a license for the specified Durable, call [XStoreAcquireLicenseForDurablesAsync](xstoreacquirelicensefordurablesasync.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** XStore.h

**Library:** xgameruntime.lib

**Supported Platforms**: Windows, Xbox One family consoles, and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[XStore](../xstore_members.md)  
[XAsyncBlock](../../xasync/structs/xasyncblock.md)  
[XStoreAcquireLicenseForDurablesAsync](xstoreacquirelicensefordurablesasync.md)  
[How to use a durable without a package](../../../../store/commerce/fundamentals/xstore-dwobs.md)  
[Granting players access to add-on content](../../../../store/commerce/fundamentals/xstore-granting-access-to-content.md)  
