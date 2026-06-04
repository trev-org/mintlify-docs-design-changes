---
title: "How to use Xbox services APIs"
description: "Describes how to initialize Gaming Runtime Services (GRTS), create `XTaskQueue`, set up `HttpClient` trace, initialize Xbox Services API (XSAPI), and clean up XSAPI."
kindex:
- Getting started with Xbox services APIs
- XSAPIs
- xbox live, getting started
- Xbox services, Getting started with Xbox services APIs
- Xbox services, Xbox services APIs
- Xbox services, XSAPIs
- Xbox services, Gaming Runtime Services
- Xbox services, Gaming Runtime Services (GRTS)
- Xbox services, GRTS
- Xbox services, XTaskQueue
- Xbox services, HttpClient
- Xbox services, XSAPI clean up
ms.topic: article
author: joannaleecy
ms.localizationpriority: medium
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# How to use Xbox Services APIs (XSAPIs)

## Initialize Gaming Runtime Services

XSAPIs depend on Gaming Runtime Services (GRTS). Before calling any XSAPIs, initialize GRTS, shown as follows.


```cpp
#include <XGameRuntimeInit.h>
...
HRESULT hr = XGameRuntimeInitialize();
```

## Create XTaskQueue (optional)

Most of the XSAPIs are asynchronous APIs and require the use of a task queue. It's an API for queuing work and for completion task callbacks. To learn more about `XTaskQueue` and different dispatch modes, see [Async task queue design](../../../features/common/async/async-task-queue-design.md).

For example, the following code creates a task queue by using a system thread pool.
```cpp
#include <XTaskQueue.h>
...
XTaskQueueHandle queue = nullptr;

HRESULT hr = XTaskQueueCreate(
    XTaskQueueDispatchMode::ThreadPool,
    XTaskQueueDispatchMode::ThreadPool,
    &queue)
```
Ensure that you release your acquired task queue handle back to the system when it's no longer needed.
```cpp
XTaskQueueCloseHandle(queue);
queue = nullptr;
```

If you choose not to create your own task queue, ensure that you pass in `nullptr` when a queue handle is needed. When `nullptr` is used, the task system uses `ThreadPool` by default. It can be overridden by calling [XTaskQueueSetCurrentProcessTaskQueue](../../../reference/system/xtaskqueue/functions/xtaskqueuesetcurrentprocesstaskqueue.md).

## Set up HttpClient trace (optional)

To view additional runtime debug information, ensure that you set up the trace functionality of `HttpClient`.

The following code sets the `HttpClient` trace level and enables output for debugger information.

```cpp
HCSettingsSetTraceLevel(HCTraceLevel::Verbose);
HCTraceSetTraceToDebugger(true);
```

## Initialize XSAPI

*Initialize XSAPI* before calling any XSAPIs.

```cpp
#include <xsapi-c/services-c.h>
...
XblInitArgs xblArgs = {};
xblArgs.queue = queue; // TODO: Only include this line if you've chosen to create your own XTaskQueue. Otherwise, by default, this line isn't needed.
xblArgs.scid = "00000000-0000-0000-0000-000000000000"; // TODO: Add your scid here.

HRESULT hr = XblInitialize(&xblArgs);
if (FAILED(hr))
{
    // TODO: Handle failure.
}
```

## Sign the user in to the Xbox network

Most of the XSAPIs require the user to first sign in to the Xbox network (also known as Xbox Live).  
To sign a user in to the Xbox network, see the code example of the [XUserAddAsync API](../../../features/common/user/xuser_howto_best_practice_signing_in.md).

## Create an XboxLiveContext object

An `XboxLiveContext` object represents the service context that is associated to a particular user.

Most XSAPIs require you to pass in an `XboxLiveContextHandle` that represents the context of the calling user.  
To create an Xbox Live (network) context, use the [XblContextCreateHandle API](../../../reference/live/xsapi-c/xbox_live_context_c/functions/xblcontextcreatehandle.md) and pass in the `XUserHandle` object that was acquired from the previous step.

## Make a service call to Xbox services

Now that you have an `XboxLiveContext` object associated with the `XUserHandle` object for the user who has signed in, you can make service calls to Xbox services.
  
For example, to retrieve the user's friends list, you can do the following:  

```cpp
#include <xsapi-c/services-c.h>
...
auto asyncBlock = std::make_unique<XAsyncBlock>(); 
asyncBlock->callback = [](XAsyncBlock* asyncBlock)
{
    std::unique_ptr<XAsyncBlock> asyncBlockPtr{ asyncBlock }; // Take over ownership of the XAsyncBlock*.

    XblSocialRelationshipResultHandle relationshipResult{ nullptr };
    HRESULT hr = XblSocialGetSocialRelationshipsResult(asyncBlock, &state.socialResultHandle);

    // Use the result in the game.

    XblSocialRelationshipResultCloseHandle(relationshipResult);
};

HRESULT hr = XblSocialGetSocialRelationshipsAsync(
    xboxLiveContext,
    xboxUserId,
    socialRelationshipFilter,
    0,
    0,
    asyncBlock.get()
);

if (SUCCEEDED(hr))
{
    // The call succeeded. Release the std::unique_ptr ownership of XAsyncBlock* because the callback will take over ownership.
    // If the call fails, the std::unique_ptr will keep ownership and delete the XAsyncBlock*.
    asyncBlock.release();
}
// End of code example.
```

## Cleaning up XSAPI

It is not neccessary to call `XblCleanupAsync()` in any scenario.

In an app termination scenario, there is currently no synchronous `XblCleanup()` API that you can call. App termination, by its life-cycle nature, needs to be handled synchronously and immediately. As a result, normal OS-level cleanup&mdash;that happens with process termination of the app&mdash;is relied upon and is sufficient for this situation.

In a scenario where the app is suspended, XSAPI handles releasing and then restoring the system resources required for operation in order to maintain functionality after resume.

`XblCleanupAsync()` can still be used in cases where your game chooses to deliberately release the resources allocated to XSAPI.
