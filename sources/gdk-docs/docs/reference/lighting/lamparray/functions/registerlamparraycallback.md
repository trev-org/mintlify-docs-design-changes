---
author: tyduck
title: "RegisterLampArrayCallback"
description: "RegisterLampArrayCallback API reference"
kindex: RegisterLampArrayCallback
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# RegisterLampArrayCallback  

Registers a callback function to be invoked each time a LampArray is connected or disconnected from the system.

## Syntax  
  
```cpp
HRESULT RegisterLampArrayCallback(
    LampArrayCallback lampArrayCallback,
    void* context,
    LampArrayCallbackToken* callbackToken);
```  
  
### Parameters  
  
*lampArrayCallback* &nbsp;&nbsp;\_In\_
Type: [LampArrayCallback](lamparraycallback.md)  
  
A caller-defined function to register. It will be invoked when LampArrays are connected or disconnected from the system.

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
  
If any LampArray devices are attached at the time a callback is registered, the RegisterLampArrayCallback function will block until that callback is invoked for each attached device (meaning the callback will be invoked on the calling thread).

When the first callback is registered, the LampArray API starts a worker thread to handle ILampArray device attach and removal notifications. These events are infrequent, and the worker thread otherwise remains in a wait state. After the registration call returns, all subsequent LampArrayCallbacks will be invoked sequentially on this worker thread.

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
[UnregisterLampArrayCallback](unregisterlamparraycallback.md)  