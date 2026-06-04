---
author: tyduck
title: "UnregisterLampArrayCallback"
description: "UnregisterLampArrayCallback API reference"
kindex: UnregisterLampArrayCallback
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# UnregisterLampArrayCallback  

Unregisters a LampArray callback function.

## Syntax  
  
```cpp
bool UnregisterLampArrayCallback(
    LampArrayCallbackToken callbackToken,
    uint64_t timeoutInMicroseconds);
```  
  
### Parameters  
  
*callbackToken*  
Type: LampArrayCallbackToken
  
Token for the callback function to be unregistered. Generated when the function was initially registered with [RegisterLampArrayCallback](registerlamparraycallback.md).  

*timeoutInMicroseconds*  
Type: uint64_t

Amount of time to wait for a callback to finish so it may be unregistered.  
  
### Return value

Type: bool
  
True if callback was unregistered successfully. False indicates an invalid callback token value, or a timeout while waiting for an in progress callback to return. A false return will still ensure no new callback will be dispatched. Callbacks already in progress will still be executed.  

## Remarks  

It is not safe to free any resources associated with the callback (for example, unloading the DLL that hosts the callback function) until the UnregisterLampArrayCallback function successfully returns. Therefore, it is not possible to unregister a callback from within its registered callback function, and attempting to do so will terminate the process.  

The following code is an example of registering and unregistering a LampArray callback:  

```cpp
void MyLampArrayCallback(
    _In_opt_ void* context,
    bool isAttached,
    _In_ ILampArray* lampArray)
{
    if (isAttached)
    {
        // Application-specific code to handle LampArray connection
    }
    else
    {
        // Application-specific code to handle LampArray disconnection
    }
}

void MonitorLampArrays(
    _In_ volatile bool & cancelMonitoring) noexcept
{
    LampArrayCallbackToken token = LAMPARRAY_INVALID_CALLBACK_TOKEN_VALUE;
    if (SUCCEEDED(RegisterLampArrayCallback(
        MyLampArrayCallback,
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
[LampArrayCallback](lamparraycallback.md)  
[RegisterLampArrayCallback](registerlamparraycallback.md)  