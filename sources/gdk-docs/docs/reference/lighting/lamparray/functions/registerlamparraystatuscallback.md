---
author: tyduck
title: "RegisterLampArrayStatusCallback"
description: "RegisterLampArrayStatusCallback API reference"
kindex: RegisterLampArrayStatusCallback
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 03/07/2024
---

# RegisterLampArrayStatusCallback  

Registers a callback function to be invoked each time the LampArray status changes.

## Syntax  
  
```cpp
STDAPI RegisterLampArrayStatusCallback(
    _In_ LampArrayStatusCallback callbackFunc,
    LampArrayEnumerationKind enumerationKind,
    _In_opt_ void * context,
    _Out_ _Result_zeroonfailure_ LampArrayCallbackToken * callbackToken);
```  
  
### Parameters  
  
*callbackFunc* &nbsp;&nbsp;\_In\_
Type: [LampArrayStatusCallback](lamparraystatuscallback.md)  
  
A caller-defined function to register. It will be invoked when LampArray status changes.

*enumerationKind*  
Type: [LampArrayEnumerationKind](../enums/lamparrayenumerationkind.md)  

Specifies the desired device enumeration behavior of the [LampArrayStatusCallback](lamparraystatuscallback.md) function.  

*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*

A pointer to an object containing relevant information for the callback function. Typically, this is the calling object.

*callbackToken* &nbsp;&nbsp;\_Out\_ \_Result\_zeroonfailure\_
Type: LampArrayCallbackToken*

A token value that can be used to unregister the callback function at a later time.
  
### Return value

Type: HRESULT
  
Function result.  

## Remarks  

The LampArrayEnumerationKind parameter allows the caller to specify how it should receive callbacks for any LampArray devices that are attached at the time of this call. If [LampArrayEnumerationKind::Blocking](../enums/lamparrayenumerationkind.md) is selected, the [RegisterLampArrayStatusCallback](registerlamparraystatuscallback.md) function will block until that callback is invoked for each attached device (meaning the callback will be invoked on the calling thread).

When the first callback is registered, the LampArray API starts a worker thread to handle ILampArray device status notifications. These events are infrequent, and the worker thread otherwise remains in a wait state. After the registration call returns, all subsequent LampArrayStatusCallbacks will be invoked sequentially on this worker thread.

If [LampArrayEnumerationKind::Async](../enums/lamparrayenumerationkind.md) is specified, this call will return immediately, and any LampArrays connected at the time of the call will be enumerated on the aforementioned LampArray callback worker thread.

The following code is an example of registering and unregistering a [LampArrayStatusCallback](lamparraystatuscallback.md) function:

```c++
void MyLampArrayStatusCallback(
    _In_opt_ void* context,
    LampArrayStatus currentStatus,
    LampArrayStatus previousStatus,
    _In_ ILampArray* lampArray)
{
    // Application-specific code to handle LampArray status changes
}

void MonitorLampArrays(
    _In_ volatile bool & cancelMonitoring) noexcept
{
    LampArrayCallbackToken token = LAMPARRAY_INVALID_CALLBACK_TOKEN_VALUE;
    if (SUCCEEDED(RegisterLampArrayStatusCallback(
        MyLampArrayStatusCallback,
        LampArrayEnumerationKind::Async,
        nullptr /* context */,
        &token)))
    {
        while (!cancelMonitoring)
        {
            Sleep(100);
        }

        UnregisterLampArrayCallback(token, 5000);
    }
}
```

## Requirements  
  
**Header:** LampArray.h  
  
**Library:** xgameplatform.lib  
  
**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../features/common/lighting/gc-lighting-toc.md)  
[Lighting Basics](../../../../features/common/lighting/lighting-basics.md)  
[LampArrayStatusCallback](lamparraystatuscallback.md)  
[UnregisterLampArrayCallback](unregisterlamparraycallback.md)  
[LampArrayEnumerationKind](../enums/lamparrayenumerationkind.md)  