---
author: tyduck
title: "LampArray Basics"
description: "Describes how to register LampArray callbacks and interact with ILampArray and ILampInfo instances."
kindex: LampArray Basics
ms.author: tyduck
ms.topic: article
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# LampArray Basics

This page describes how to register `LampArray` callbacks and interact with `ILampArray` and `ILampInfo` instances.

> [!NOTE]
>As of the March 2023 recovery, the GDK Lighting API only supports the following devices on console. Support for additional devices will be added in future recovery releases.
>
> - Razer Turret for Xbox One (keyboard and mouse)
> - Razer BlackWidow Tournament Edition Chroma V2

## ILampArray and ILampInfo

Each compatible lighting device connected to the system is represented by an [ILampArray](../../../reference/lighting/lamparray/interfaces/ilamparray/ilamparray.md) instance. `ILampArray` provides information about the device, such as its dimensions, device type, manufacturer, and number of Lamps. It also exposes methods to change the brightness and color values of its Lamps.

An [ILampInfo](../../../reference/lighting/lamparray/interfaces/ilampinfo/ilampinfo.md) object encapsulates properties of an individual Lamp in the `LampArray`, including the Lamp's relative position, color support and intended purposes. `ILampInfo` instances can be retrieved using [ILampArray::GetLampInfo](../../../reference/lighting/lamparray/interfaces/ilamparray/methods/ilamparray_getlampinfo.md).

Like the graphics, audio, and GameInput APIs, `ILampArray` and `ILampInfo` aren't true COM APIs, even though they expose interfaces that derive from `IUnknown`. This style of API is sometimes referred to as "COM lite" or "nano-COM." While `IUnknown` is used for reference counting and reflection, the COM runtime infrastructure isn't used by `ILampArray` or `ILampInfo`. Specifically, this means the following:  

- Applications call neither `CoInitialize` nor  `CoCreateInstance` to obtain object instances.
- COM features such as aggregation and caller-provided interface implementations aren't supported.
- There's no cross-process marshaling support, and no apartment/threading model. All objects are agile.
- Interface pointers can be compared directly for object identity, without going through `IUnknown`.
- Methods aren't required to return `HRESULT` codes, which often leads to simpler function signatures.

## LampArray callbacks

`LampArray` callbacks are the mechanism for obtaining `ILampArray` instances and for being notified when `LampArrays` are attached or removed from the system.

[RegisterLampArrayStatusCallback](../../../reference/lighting/lamparray/functions/registerlamparraystatuscallback.md)

> [!NOTE]
> Use the `RegisterLampArrayStatusCallback` function instead of `RegisterLampArrayCallback` for `LampArray` callbacks.

```cpp
enum class LampArrayEnumerationKind : uint32_t
{
    Async       = 1,
    Blocking    = 2
};

enum class LampArrayStatus : uint32_t
{
    None            = 0x00000000,
    Connected       = 0x00000001,
    Available       = 0x00000002
};

DEFINE_ENUM_FLAG_OPERATORS(LampArrayStatus);

typedef interface ILampArray ILampArray;

typedef uint64_t LampArrayCallbackToken;

typedef void (CALLBACK * LampArrayStatusCallback)(
    _In_opt_ void * context,
    LampArrayStatus currentStatus,
    LampArrayStatus previousStatus,
    _In_ ILampArray * lampArray);

STDAPI RegisterLampArrayStatusCallback(
    _In_ LampArrayStatusCallback callbackFunc,
    LampArrayEnumerationKind enumerationKind,
    _In_opt_ void * context,
    _Out_ _Result_zeroonfailure_ LampArrayCallbackToken * callbackToken);

```

## Callback threading

If any `LampArray` devices are attached at the time a `LampArrayStatusCallback` is registered with `LampArrayEnumerationKind::Blocking`, the `RegisterLampArrayStatusCallback` function will block until that callback is invoked for each attached device (meaning the callback will be invoked on the calling thread).

When the first callback is registered, the `LampArray` API starts a worker thread to handle `ILampArray` device attach and removal notifications. These events are infrequent, and the worker thread otherwise remains in a wait state. After the registration call returns, all subsequent `LampArrayStatusCallbacks` will be invoked sequentially on this worker thread. Devices connected at the time a `LampArrayStatusCallback` is registered with `LampArrayEnumerationKind::Async` will also be handled on the worker thread.

Processor affinity for the `LampArray` worker thread can be controlled using [TrySetLampArrayWorkerThreadAffinityMask](../../../reference/lighting/lamparray/functions/trysetlamparrayworkerthreadaffinitymask.md). This API can be called at most once per process. Any subsequent calls to the API will not take effect.

```cpp
HRESULT TrySetLampArrayWorkerThreadAffinityMask(
    uint64_t threadAffinityMask);
```

## Unregistering callbacks

After a callback is successfully registered, the application must guarantee that any resources that are required to execute the callback remain valid. This includes both resources that are consumed by the callback's code, as well as the callback function itself, for example, if the callback function is hosted in a DLL that the application loads and unloads on demand.

To safely reclaim these resources, an application must first unregister the callback by passing the token that was received from the [RegisterLampArrayStatusCallback](../../../reference/lighting/lamparray/functions/registerlamparraystatuscallback.md) method into the [UnregisterLampArrayCallback](../../../reference/lighting/lamparray/functions/unregisterlamparraycallback.md) method. Unregistering a `LampArray` callback from inside a registered `LampArray` callback is not supported, and attempting to do so will terminate the process.

```cpp
bool UnregisterLampArrayCallback(
    LampArrayCallbackToken callbackToken,
    uint64_t timeoutInMicroseconds);
```

## See also

[Lighting API Overview](gc-lighting-toc.md)  
[ILampArray Reference](../../../reference/lighting/lamparray/interfaces/ilamparray/ilamparray.md)  
[ILampInfo Reference](../../../reference/lighting/lamparray/interfaces/ilampinfo/ilampinfo.md)  