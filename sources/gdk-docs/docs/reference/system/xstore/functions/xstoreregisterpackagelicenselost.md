---
author: M-Stahl
title: "XStoreRegisterPackageLicenseLost"
description: "Registers a callback for the license lost event."
kindex: XStoreRegisterPackageLicenseLost
ms.author: shanede
ms.topic: reference
edited: 02/06/2026
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XStoreRegisterPackageLicenseLost  

Registers a callback for the license lost event.
Use this API to register Durable licenses acquired through [XStoreAcquireLicenseForPackageAsync](xstoreacquirelicenseforpackageasync.md) and [XStoreAcquireLicenseForDurablesAsync](xstoreacquirelicensefordurablesasync.md).

## Syntax  
  
```cpp
HRESULT XStoreRegisterPackageLicenseLost(  
         XStoreLicenseHandle licenseHandle,  
         XTaskQueueHandle queue,  
         void* context,  
         XStorePackageLicenseLostCallback* callback,  
         XTaskQueueRegistrationToken* token  
)  
```  
  
### Parameters  
  
*licenseHandle* &nbsp;&nbsp;\_In\_  
Type: XStoreLicenseHandle  
  
The license handle to register the callback for.  
  
*queue* &nbsp;&nbsp;\_In\_  
Type: XTaskQueueHandle  
  
Async queue to handle asynchronous work.  
  
*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  
  
Title defined  context to pass to the callback.  
  
*callback* &nbsp;&nbsp;\_In\_  
Type: XStorePackageLicenseLostCallback*  
  
The callback to register.  
  
*token* &nbsp;&nbsp;\_Out\_  
Type: [XTaskQueueRegistrationToken*](../../xtaskqueue/structs/xtaskqueueregistrationtoken.md)  
  
On success contains a token used to identify the callback.  
  
### Return value
Type: HRESULT
  
HRESULT success or error code.    
  
## Remarks  
  
This function registers the callback function defined by [XStorePackageLicenseLostCallback](xstorepackagelicenselostcallback.md).
The registered callback function is called when the next Durable license lost event occurs.
The callback function isn't called during registration.
A license lost event often occurs when the purchasing account signs out of the device and their previously shared license isn't available to the current user.
To avoid a memory leak, you must call [XStoreUnregisterPackageLicenseLost](xstoreunregisterpackagelicenselost.md) when you're finished with the callback function.

A Durable license can be lost at any time due to a user change, network change, concurrency check, or the license expiring on the device.
A game should register for license lost events and attempt to reacquire the license for the Durable when the callback triggers.
License lost events can help detect when the system erroneously returns a cached license to the current player that belongs to another account.
In such cases, a license lost event immediately fires and when XStoreAcquireLicense* is called again, a fresh license is provided.

For a usage example, see [XStoreAcquireLicenseForPackageAsync](xstoreacquirelicenseforpackageasync.md).  
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles, and Xbox Series consoles  
  
## See also

[XStore](../xstore_members.md)  
[XStoreAcquireLicenseForPackageAsync](xstoreacquirelicenseforpackageasync.md)  
[XStoreAcquireLicenseForPackageResult](xstoreacquirelicenseforpackageresult.md)  
[XStoreIsLicenseValid](xstoreislicensevalid.md)  
[XStoreCloseLicenseHandle](xstorecloselicensehandle.md)  
[XStorePackageLicenseLostCallback](xstorepackagelicenselostcallback.md)  
[XStoreUnregisterPackageLicenseLost](xstoreunregisterpackagelicenselost.md)  
[Granting players access to add-on content](../../../../store/commerce/fundamentals/xstore-granting-access-to-content.md)
