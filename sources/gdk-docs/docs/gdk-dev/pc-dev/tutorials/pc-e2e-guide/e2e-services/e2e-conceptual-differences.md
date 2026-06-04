---
author: sdgmiller
title: "Conceptual differences between the GDK and Steamworks"
description: "Describes the overarching differences between how the two SDKs structure code, call functions, and expect your game to run."
kindex:
- Conceptual differences between the GDK and Steamworks
- Xbox services, Conceptual differences between the Microsoft Game Development Kit and Steamworks
- Xbox services, asynchronous functions
- Xbox services, callbacks
- Xbox services, Steam
- Xbox services, Steamworks API
- Xbox services, Unity
- Xbox services, MicrosoftGame.config
ms.topic: article
edited: 05/05/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Conceptual differences between the Microsoft Game Development Kit and Steamworks  

Steamworks and the Microsoft Game Development Kit (GDK) have some differences in structure, patterns in their APIs, and purpose. They’re outlined in this article.  

## No API singleton in the GDK  

Steamworks follows a pattern where each API feature set is defined as an interface (for example, all the user statistics functions are in the `ISteamUserStats` interface and remote storage is in `ISteamRemoteStorage`). Their instances are made available as soon as the API is initialized by the game in code. The Steamworks API singleton that gets initialized when the game is launched provides these functions and keeps track of state throughout the lifetime of the game.  

This isn't the case with the GDK APIs. They have a C API where much of the context and current state of the API data must be kept by the game itself and passed into the various API functions. For instance, after authenticating a user with Xbox services, the game must keep the Xbox services context handle and a user handle. The APIs that are used to get this information don't retain them throughout the lifetime of your games like Steamworks does. You need to add member variables to your game class or otherwise keep track of these handles in your game.  

## Asynchronous functions and callbacks  

Asynchronous functions in Steamworks trigger events that you can subscribe to with the `STEAM_CALLBACK` macro or a `CCallResult` variable. When an event that corresponds to the specified event struct type is fired, the specified method is called and is provided an event struct as its sole argument. This struct contains the result that’s returned by the API and previously available contextual information that might be needed to handle the results of the call. For example, for calling `ISteamUserStats::DownloadLeaderboardEntries`, you need a `SteamLeaderboard_t` handle in the callback function to pass to `ISteamUserStats::DownloadLeaderboardEntries`. You can get it as a member of the `LeaderboardScoresDownloaded_t` struct passed as a parameter to the callback method that you defined.  

In the GDK, all asynchronous actions follow a different pattern: you create an [`XAsyncBlock`](../../../../../reference/system/xasync/structs/xasyncblock.md) struct, optionally assign it to a task queue, and then call the async API method. After that API call is done, it fires the callback function that's defined as a member of the [`XAsyncBlock`](../../../../../reference/system/xasync/structs/xasyncblock.md) and provides a pointer to the async block as the sole argument. If you need to access information inside the callback function, you can use the context pointer member of the async block. Unlike Steam, the information in this context struct isn't provided automatically&mdash;you need to build it yourself. Using the previous example, if you needed access to a set of data in your callback function, you could do the following as shown in this code example.  

```cpp
MyClass::SimpleContextExample()
{
    // ...
    struct MyContext 
    {
        MyHandle_t handle;
        std::shared_ptr<MyClass> instance;
    }

    // Assume myHandle is a variable containing the handle you'll need in your call function.
    auto contextPtr = std::unique_ptr<MyContext>(new MyContext{ myHandle, shared_from_this() });
    XAsyncBlock async = std::make_unique<XAsyncBlock>();
    async->context = contextPtr.get(); 
    async->callback = [](XAsyncBlock *async)
    {
        std::unique_ptr<XAsyncBlock> asyncBlockPtr{ asyncBlock }; // Take over ownership of the XAsyncBlock*.        
        std::unique_ptr<MyContext> contextPtr{ static_cast<MyContext*>(asyncBlock->context) }; // Take over ownership of the context.        

        auto handle = contextPtr->handle;
        // You can now use your handle for other API calls.
    };

    HRESULT hr = SomeAsyncFunction(arg1, arg2, asyncBlock.get());
    if (SUCCEEDED(hr))
    {
        // The call succeeded, so release the std::unique_ptr ownership of XAsyncBlock* and context* 
        // because the callback will take over ownership.
        // If the call fails, the std::unique_ptr will keep ownership and delete the XAsyncBlock* and context block.
        asyncBlock.release();
        contextPtr.release();
    }
}
```

> [!NOTE]  
> The previous example also includes a pointer to `this` via `shared_from_this()` so that the callback function can call instance methods or access member variables if needed. Be careful when passing raw pointers due to lifetime issues. Also note that if you need access to only one variable in your callback, you can set the value of your async block's `context` pointer to be a pointer to that value, and then cast to that value's type in your callback instead of needing to define a struct.  

Steamworks also requires the game's code to fire callbacks on some interval by using the `SteamAPI_RunCallbacks` function. This isn't necessary in the GDK. Callbacks are triggered after the asynchronous task that's dispatched by its task queue is done if you’re using a thread pool task queue, which is the default.  

For more control, you can dispatch the asynchronous task manually to a specific thread by calling `XTaskQueueDispatch` when you’re using a manual task queue. This is more complex. Details about how this is done are outside the scope of this guide. For more information about how the GDK handles asynchronous API operations, including a code sample, see [Asynchronous Programming Model](../../../../../features/common/async/async-programming-model.md).

## Source of truth for title-managed APIs  

With Steamworks, the API is the single source of truth for nearly every value that touches it. For example, user stats are fetched from the API and calculated based on the values from `ISteamUserStats::GetStat`/`ISteamUserStats::SetStat`. You aren't required to store these values elsewhere.  

The achievements and stats/leaderboards APIs in the GDK have an option to be title-managed for developers who want more flexibility and simplicity in the calls that they need to make. Title-managed API's values are, as the name suggests, managed by your title. The single source of truth for these values is your game, which can store the values anywhere. For example, a save file, cloud storage, or a third-party back-end server. The value stored on the Xbox network (formerly known as Xbox Live) servers can be used as a snapshot that you occasionally make updates to, but it shouldn't be your single source of truth at runtime.  

## How games are launched  

Games that use the Steamworks APIs can assume that they're always launched through Steam. The API can inject some context at initialization about who is playing the game. The GDK can be used by games that run on an Xbox console, on a PC by using the Xbox Gaming App, or on any number of devices and launchers.

Some context that’s automatically available with Steam might need to be manually initialized with the GDK, such as the user's identity. For access to this information, use the steps in the [Initializing the Microsoft Game Development Kit](e2e-initialize-gdk.md) article. It has instructions for authenticating a user with their Microsoft account/gamertag. 
Some paradigms in the GDK's functions are tailored to console scenarios, like multiple user sign-in support for the `XUser` APIs, don't have an analog on the PC.  

## Packaging  

Most games on Steam can use the Steamworks API functions by setting up the game information in the Steamworks admin portal, downloading the SDK, importing the required files, and initializing the API in code. Your game then integrates with the Steamworks API from anywhere it's launched, such as a game engine editor. Packaging isn’t necessary.  

For the GDK’s APIs to work, your game must first be packaged. This allows some of the GDK functionality to work in a game engine editor or other development-time environments. To correctly package your game, edit its `MicrosoftGame.config` file and use the `MakePkg` GDK tool to create the MSIXVC package for your game. You can then sideload this package as a Microsoft Store app on a PC that has Developer Mode enabled.  

For more information about packaging, see the following articles.  

* [Getting started with packaging for PC](../../../../../features/common/packaging/overviews/packaging-getting-started-for-PC.md)
* [MicrosoftGame.config](../../../../../features/common/game-config/MicrosoftGameConfig-toc.md)

## Sandboxes

GDK games use sandboxes for pre-release testing. Sandboxes are helpful, isolated environments for testing various features during game development. This can be done without exposing these features to any other environment, including the retail environment that users see. You can create sandboxes in Partner Center, and then change which sandbox you're currently in on your development PC by using the 
[Xbox services PC Sandbox Switcher (XblPCSandbox.exe)](../../../../../tools/tools-services/live-pc-sandbox-switcher.md). 
Each sandbox can have different achievements, stats, leaderboards, and other information assigned to it that won't affect other sandboxes. For more information, see [Xbox services Sandboxes overview](../../../../../services/fundamentals/sandboxes/live-setup-sandbox.md).
