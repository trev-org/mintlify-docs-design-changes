---
author: M-Stahl
title: "XGameRuntimeInitializeWithOptions"
description: "Initializes the Gaming Runtime with Options."
kindex: XGameRuntimeInitializeWithOptions
ms.author: ddobyns
ms.topic: reference
edited: 05/24/2024
quality: good
applies-to: pc-gdk
ms.date: '05/25/2024'
permissioned-type: public
---


# XGameRuntimeInitializeWithOptions  

This API initializes the game runtime, taking a pointer to an options structure which can modify how the runtime is initialized. While games should typically continue leveraging the existing [XGameRuntimeInitialize](xgameruntimeinitialize.md) method, some game engines or middleware may have need for more configurable initialization.

## Syntax  
  
```cpp
HRESULT XGameRuntimeInitializeWithOptions(
    _In_ const XGameRuntimeOptions* options
)  
```  
  
### Parameters  
_options_ \_In\_  
Type: XGameRuntimeOptions*

Pointer to an options structure which can modify how the runtime is initialized.
  
### Return value
Type: [HRESULT](/openspecs/windows_protocols/ms-erref/0642cb2f-2075-4469-918c-4441e69c548a)  
  
Returns **S_OK** if successful; otherwise, returns an error code. For a list of error codes, see [Error Codes](../../../errorcodes.md). If the function fails because the Gaming Runtime library (xgameruntime.dll) wasn't found, the return value is set to **E_GAMERUNTIME_DLL_NOT_FOUND**.  
  
## Remarks
The following example demonstrates how a game editor or other middleware can be used to load and run multiple games in the same process. It assumes the following external code: 
* A class called “GameEngine” that takes the path to the game files and starts the game.  This is the same engine used at runtime by the game engine “player”. 
* An instance of this is stored as a global in the editor and represents the current game.  

The runtime can be initialized with a different game config as shown below.  It can also be re-initialized with a different game config after uninitializing. 

```cpp
void StartGame(const char* gamePath) 
{ 
    // If there is an existing game running, shut it down 
    if (g_game.IsRunning()) 
    { 
        g_game.Stop() 
    } 
 
    // Initialize the runtime in this process for this path 
    std::string gameConfig(gamePath); 
    gameConfig.append(“\\MicrosoftGame.config”); 
    XGameRuntimeOptions options{}; 
    options.gameConfigSource = XGameRuntimeGameConfigSource::File; 
    options.gameConfig = gameConfig.c_str(); 
    THROW_IF_FAILED(XGameRuntimeInitializeWithOptions(&options)); 
 
    // Now launch the game normally. 
    GameEngine game; 
    game.Launch(gamePath); 
    g_game = std::move(game); 
} 
 

// Examples of Launch / Stop behavior in GameEngine 
void GameEngine::Stop() 
{ 
    // Disconnect all globals from the runtime, closing handles and removing event 
    // handlers 

    // Handle game shut down before uninitializing the runtime

    XGameRuntimeUninitialize(); 
} 

void GameEngine::Launch(const char* gamePath) 
{ 
    // Standard XGameRuntimeInitialize here is fine to call – it will adopt the 
    // GameConfig settings from the earlier XGameRuntimeInitializeWithOptions call. 

    XGameRuntimeInitialize(); 
    RunGame(gamePath); 
}
```

**Initialization**  
The runtime has two layers of initialization: XGameRuntime.lib, which a component links to, and XGameRuntime.dll, which is the actual runtime implementation.  When XGameRuntime.lib is initialized, it loads XGameRuntime.dll and initializes it. The DLL’s initialization is ref-counted, allowing multiple libraries to connect. The library’s initialization is not ref-counted – multiple calls to initialize it are ignored (although if XGameRuntimeInitializeWithOptions is called the provided options are compared against the currently initialized options and E_GAMERUNTIME_OPTIONS_MISMATCH is returned if they differ).  

Each initialization API has the following behavior:   
* **XGameRuntimeInitialize**: If the runtime DLL has already been initialized by another call, this API “floats” to whatever initialization options were provided in the other call. If this is the first time the runtime has been initialized, default values will be used for initialization options. Games should always initialize the runtime using this API.   
* **XGameRuntimeInitializeWithOptions**: All components initializing the runtime must pass the same options if using this method. If the runtime was previously initialized with another set of options this call will fail with E_GAMERUNTIME_OPTIONS_MISMATCH. Middleware components like a Unity game editor can use this API to initialize the runtime with a custom GameConfig before starting the game. 
The runtime can be re-initialized with different options if it is fully uninitialized first. This requires that all modules that called one of the XGameRuntimeInitialize* methods call XGameRuntimeUninitialize.  

If the game is packaged into an XVC or MSIXVC any custom options provided must match the settings in the package game config. If they don’t, the initialize call will fail with E_GAMERUNTIME_OPTIONS_NOT_SUPPORTED.  

Note that ERROR_NOT_FOUND of game config does not count as a failure because there are scenarios today where the runtime is initialized outside of games. File IO errors such as FILE_NOT_FOUND are not transformed to E_GAMERUNTIME_GAMECONFIG_BAD_FORMAT to help with diagnosis.

**Uninitialization**  
There are two layers here as well. Uninitializing XgameRuntime.lib will uninitialize the library and the release its reference on the DLL. Further uninitialize calls to the library are ignored until the library is re-initialized.

Uninitializing the DLL decrements the ref count.  When it is zero the DLL is uninitialized. This behavior remains the same.  

Unitializing the DLL can fail if there are still active runtime objects when the DLL refcount reaches zero. If this happens the runtime will: 
* Not unload the runtime DLL since this can cause a crash. 
* Store the error to later return it in a future call to XGameRuntimeInitialize* 
* An XErrorReport is emitted.  

Note that due to this behavior an uninitialization failure is terminal: the runtime is no longer initialized and attempts to initialize it will always fail.  

When the game runtime is uninitialized, all handles should be closed by the game. Any handles left open are considered memory leaks. Attempting to use any handle leaked from a prior initialization of the runtime will return E_GAMERUNTIME_INVALID_HANDLE. 


## Requirements
  
**Header:** XGameRuntimeInit.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XGameRuntimeUninitialize](xgameruntimeuninitialize.md)  
[XGameRuntimeInitialize](xgameruntimeinitialize.md)  
[XGameRuntimeInit](../xgameruntimeinit_members.md)  
[Developing new titles using Gaming Runtime](../../../../gdk-dev/pc-dev/overviews/gr-developing-new-titles-on-gamecore.md)  
  