---
author: M-Stahl
title: "XGameRuntimeInitialize"
description: "Initializes the Gaming Runtime."
kindex: XGameRuntimeInitialize
ms.topic: reference
edited: 06/10/2019
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameRuntimeInitialize  

Initializes the Gaming Runtime.  

## Syntax  
  
```cpp
HRESULT XGameRuntimeInitialize(  
)  
```  
  
### Parameters  
None.
  
### Return value
Type: [HRESULT](/openspecs/windows_protocols/ms-erref/0642cb2f-2075-4469-918c-4441e69c548a)  
  
Returns **S_OK** if successful; otherwise, returns an error code. For a list of error codes, see [Error Codes](../../../errorcodes.md). If the function fails because the Gaming Runtime library (xgameruntime.dll) wasn't found, the return value is set to **E_GAMERUNTIME_DLL_NOT_FOUND**.  
  
## Remarks
  
To use the Gaming Runtime features in your game, first initialize the Gaming Runtime by invoking the **XGameRuntimeInitialize** function. Invoke the **XGameRuntimeInitialize** function as early as possible, typically within the entry-point function for your game. Similarly, uninitialize the Gaming Runtime as late as possible but before your game exits, by invoking the [XGameRuntimeUninitialize](xgameruntimeuninitialize.md) function.
  
Each binary compiling and linking to the game runtime should call **XGameRuntimeInitialize** early in start up.  This includes the game binary and any middleware in dll form that uses Gaming Runtime features.  Internal to the **XGameRuntimeInitialize** function, versions of all interfaces the title compiled against are checked and used for initializing matching runtime services.  Between two different versions of the Gaming Runtime, functions may be added, removed, or in rare cases have breaking behavior changes.  Calling **XGameRuntimeInitialize** from each component will help detect build configuration issues such as compiling against two different and incompatible versions of the game runtime by two different binaries that will load within the same process.  Such breaking configurations result in an **E_GAMERUNTIME_VERSION_MISMATCH** error.
  
The following example demonstrates how to use the **XGameRuntimeInitialize** and [XGameRuntimeUninitialize](xgameruntimeuninitialize.md) functions within the entry-point function of a game that is based on the **Direct3D 12 Desktop Game** template in Visual Studio. The **XGameRuntimeInitialize** function is invoked before the **Game** object is instantiated and registered, and the **XGameRuntimeUninitialize** function is invoked after the **Game** object is reset but before the entry-point function returns.
  
```cpp
// Entry point
int WINAPI wWinMain(_In_ HINSTANCE hInstance, _In_opt_ HINSTANCE hPrevInstance, _In_ LPWSTR lpCmdLine, _In_ int nCmdShow)
{
    UNREFERENCED_PARAMETER(hPrevInstance);
    UNREFERENCED_PARAMETER(lpCmdLine);

    // Initialize the Gaming Runtime before
    // performing any other activity.
    if (FAILED(XGameRuntimeInitialize()))
        return 1;

    if (!XMVerifyCPUSupport())
        return 1;

    g_game = std::make_unique<Game>();

    // Register class and create window
    {
        // Code omitted for brevity.
        ...
    }

    // Main message loop
    MSG msg = {};
    while (WM_QUIT != msg.message)
    {
        // Code omitted for brevity.
        ...
    }

    g_game.reset();

    // Uninitialize the Gaming Runtime after
    // all other activity has been completed.
    XGameRuntimeUninitialize();

    return (int) msg.wParam;
}
```

  
## Requirements
  
**Header:** XGameRuntimeInit.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XGameRuntimeUninitialize](xgameruntimeuninitialize.md)  
[XGameRuntimeInitializeWithOptions](xgameruntimeinitializewithoptions.md)  
[XGameRuntimeInit](../xgameruntimeinit_members.md)  
[XGameRuntime Structures](../Structures/xgameruntimeoptions.md)  
[XGameRuntime Enumerations](../Enumerations/xgameruntimegameconfigsource.md)  
[Developing new titles using Gaming Runtime](../../../../gdk-dev/pc-dev/overviews/gr-developing-new-titles-on-gamecore.md)  
  
