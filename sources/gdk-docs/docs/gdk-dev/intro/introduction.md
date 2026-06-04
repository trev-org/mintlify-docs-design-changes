---
author: M-Stahl
title: "What is the Microsoft Game Development Kit?"
description: "Describes the Microsoft Game Development Kit."
kindex:
- What is the Microsoft Game Development Kit?
- Xbox services, GDK
- Xbox services, Gaming Runtime
- Xbox services, Standard Game UI
ms.author: jgup
ms.topic: article
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# What is the Microsoft Game Development Kit? (The TL;DR)  

The Microsoft Game Development Kit (GDK) is:

* A set of common, classic Windows APIs that are currently used by game developers, are targeting today's PCs, and are available on all Microsoft Gaming endpoints, including the current generation of Xbox consoles

* A set of gaming services, tools, and extensions designed for integration through game developer&ndash;friendly programming models and designs, including:
  * Standard Win32-style C APIs or DX-style C++ APIs
  * APIs that return error codes and don't throw exceptions
  * APIs that use familiar asynchronous programming patterns  

On Xbox, this means:

* A small, fast, secure OS optimized for running games
* An OS that makes explicit guarantees about the CPU, GPU, memory resources, and I/O rates available to your game
* Xbox-specific extensions (such as DX12x) that are optimized for the hardware itself and that let you maximize the performance of your game on the Xbox platform of today and tomorrow
* A versioning model like the one that Xbox provides today, where the Game OS ships with the game
* A simpler memory model that helps you understand and track memory usage within your title
* Significant reliability improvements for "F5" deployment, installation, and testing iteration, as well as elimination of the activation failures seen in the Xbox One ERA model
* An easier way to bring existing Windows-based code to Xbox and to increase code reusability and maintainability  

On PC, this means:
* The ability to develop, test, and use&mdash;just as you would on Xbox&mdash;a variety of Microsoft gaming services, including Connected Storage, Xbox services, and a complete suite of accessibility features
* A way to use the previously Xbox-exclusive packaging and ingestion system, to easily ship your PC games into the Microsoft Store, and to participate in Microsoft gaming initiatives such as PC Game Pass  

<a id="api-programming-model"></a>

## The Microsoft Game Development Kit (GDK) programming model

![The Microsoft Game Development Kit (GDK) programming model](../../../media/private-images/gaming-sdk-programming-model.png)

* APIs are either
  * Flat C: classic Win32-style C APIs
  * Simple C++: D3D-style C++ APIs
* APIs don't throw exceptions; they return error codes.
* On Xbox, UTF-8 is the default for all APIs that take string values.
* On PC as well as Xbox, UTF-8 is the default for all APIs that take string values in the Gaming Runtime.
* On PC, the core Win32 Gaming APIs follow Windows API conventions for string values for all APIs related to gaming that are **not** specifically a part of the Gaming Runtime.

> **Important note: On Xbox, Microsoft Game Development Kit (GDK) supports only D3D12.x.**  
> D3D11.x is not supported. If you have a game that uses D3D11.x, you'll need to move to D3D12.x as part of moving to the Microsoft Game Development Kit (GDK). On Windows PC, both D3D11 and D3D12 are supported.

The Microsoft Game Development Kit (GDK) programming model consists of:

* **Core Win32 Gaming APIs:** This is the common subset of Win32 APIs for games that work across Windows PCs, Xbox, and Xbox Game Streaming (with some Windows version dependencies). Examples include the existing Win32 File I/O (CreateFile, OpenFile, ReadFile, and WriteFile), WinSock2, XInput, and D3D12 (or D3D12.x on Xbox) APIs. These APIs ship as part of the Windows OS on PC and as part of the Game OS on Xbox.

* **Gaming Runtime:** This set of components helps implement modern cross-device games on Microsoft platforms. The Gaming Runtime includes support for MSIXVC packaging, Installation Management, Connected Storage (Game Saves), Accessibility, and Store Commerce. Xbox services support relies on the components in the Gaming Runtime. On Windows PCs, the Gaming Runtime ships as a separate Microsoft Store&ndash;serviceable package, and this helps PC games take a dependency on it. On Xbox, the Gaming Runtime ships as part of the Game OS.  

  The Gaming Runtime has a dependency on the Windows 10 19H1 release on PC.



### Common Programming model by area

| Area | APIs |
| --- | --- |
| Application Model | WinMain & Win32 Message Loop<br/>Activation is N/A (Activation is not part of the programming model)<br/>RegisterAppStateChangeNotification API<br/> RegisterForGameInvites APIs |
| Networking | WinSock2, WinHTTP |
| File I/O | Win32 File I/O APIs |
| Memory | Win32 Memory APIs with extensions for Xbox ([XMemAlloc](../../reference/system/xmem/functions/xmemalloc.md)) |
| Graphics | D3D12 & D3D11 on PC<br/>[D3D12.x](/gaming/xbox-nda-docs/_content/gc/reference/graphics/d3d12_x/d3d12_x_members) on Xbox |
| Audio | [XAudio2](../../features/console/audio/overviews/xaudio2-overview.md) with extensions and XMA support on Xbox<br/>[WASAPI](../../features/console/audio/overviews/wasapi-overview.md)<br/>[ISpatialAudioClient](../../features/console/audio/overviews/spatial-audio-overview.md) |
| Video | Full support for ID3D11Video APIs and Media Foundation on PC<br/>MFSourceReader and related APIs on Xbox (same as Xbox One ERA)<br/>No encode support on Xbox |
| GameDVR/Broadcast | New flat C API: [XAppCapture](../../reference/system/xappcapture/xappcapture_members.md) |
| Input | XInput for GamePad or GameInput (New simple C++ [API](../../reference/input/gc-reference-input-toc.md)) for more advanced use cases |
| Connected Storage | New flat C API: [XGameSave](../../reference/system/xgamesave/xgamesave_members.md) |
| Standard UI (TCUI) | New flat C API: [XGameUI](../../reference/system/xgameui/xgameui_members.md) |
| Packaging & Streaming Install | New flat C API: [XPackage](../../reference/system/xpackage/xpackage_members.md) |
| Xbox Services API (XSAPI) | New flat C API: [XSAPI reference](../../reference/live/xsapi-c/atoc-xsapi-c.md) |
| Store | New flat C API: [XStore](../../reference/system/xstore/xstore_members.md) |

### A simple example of a Microsoft Game Development Kit (GDK) game

To illustrate that a Microsoft Game Development Kit (GDK) game is "just a Win32" game, we're including a code snippet from the default SDK project:

```cpp
. . . .
LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);

int WINAPI wWinMain(_In_ HINSTANCE hInstance, _In_opt_ HINSTANCE, _In_ LPWSTR lpCmdLine, _In_ int) {
. . . .
  if (FAILED(XGameRuntimeInitialize())) return 1;
. . . .
  // Register class
  WNDCLASSEXA wcex = {};
  wcex.cbSize = sizeof(WNDCLASSEXA);
. . . .
  wcex.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);
  if (!RegisterClassExA(&wcex)) return 1;

  // Create window
  HWND hwnd = CreateWindowExA(. . . .);
  if (!hwnd) return 1;

  ShowWindow(hwnd, nCmdShow);
  SetWindowLongPtr(hwnd, GWLP_USERDATA, reinterpret_cast<LONG_PTR>(g_game.get()));
. . . .
  // Main message loop
  MSG msg = {};
  while (WM_QUIT != msg.message) {
    if (PeekMessage(&msg, nullptr, 0, 0, PM_REMOVE)) {
      TranslateMessage(&msg);
      DispatchMessage(&msg);
    } else {
      g_game->Tick();
    }
  }
. . . .
  XGameRuntimeUninitialize();
  return (int) msg.wParam;
}
. . . .
// Windows procedure
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam) {
  auto game = reinterpret_cast<Game*>(GetWindowLongPtr(hWnd, GWLP_USERDATA));

  switch (message) {
    case WM_CREATE:
    break;
. . . .
  }

  return DefWindowProc(hWnd, message, wParam, lParam);
}

// Exit helper
void ExitGame() {
  PostQuitMessage(0);
}
```

As you can see, this looks just like a classic "Win32" game with a wWinMain, Message Loop, and WndProc. The only differences are these:

* If you're using the Gaming Runtime on PC or Xbox (a requirement on Xbox because Xbox services is dependent on it), then you must call [XGameRuntimeInitialize](../../reference/system/xgameruntimeinit/functions/xgameruntimeinitialize.md) and [XGameRuntimeUninitialize](../../reference/system/xgameruntimeinit/functions/xgameruntimeuninitialize.md).
* Xbox has callbacks for the Suspend, Constrain, and Resume PLM states.
* Xbox supports only the subset of WM_* messages that make sense on the console.

### SDKs

To build a Microsoft Game Development Kit (GDK) game, you need to install the following SDKs:

* **The Windows Software Development Kit (SDK)**  
  The standard, public 20H1 Windows 10 SDK. This can be downloaded from [here](https://aka.ms/GDK_WindowsSDK_19041).

> As of the October 2023 release, the Windows 11 SDK is now required instead. This can be downloaded from [here](https://aka.ms/GDK_WindowsSDK_22000).

* **The Microsoft Game Development Kit**

  * The Microsoft Game Development Kit (GDK) is our new "umbrella SDK". Today, it contains the **Gaming Runtime Development Kit** (GRDK) and **Gaming eXtensions Development Kit** (GXDK). In the future, it will contain additional gaming SDKs.

  * The **Gaming Runtime Development Kit** (GRDK) contains the headers, libs, and tools required to develop games for PC **and** Xbox that use Gaming Runtime features such as MSIXVC. GRDK also includes a developer version of the PC redist of the Gaming Runtime.

  * The **Gaming eXtensions Development Kit** (GXDK) is the Microsoft Game Development Kit (GDK) version of the Xbox Development Kit (XDK). GXDK contains the headers, libs, tooling, and Visual Studio integration required to build Microsoft Game Development Kit (GDK) games for Xbox. For example, the D3D12.x headers and the xb* remote management tools are part of the GXDK.

<a id="note-on-SDK-structure-for-prev-rel"></a>

> **Important note for the SDK structure for the Microsoft Game Development Kit (GDK)**  
> As of the May 2020 GDK, the updated Windows headers and libs included in the Microsoft Game Development Kit (GDK) have been removed as the functionality is now included in the 19041 version of the Windows SDK.
> To develop a title using the GDK, this will require installing the Windows 19041 SDK (which can be downloaded [here](https://aka.ms/GDK_WindowsSDK_19041).) **and** the Microsoft Game Development Kit (GDK).

#### Support for Visual Studio

The Microsoft Game Development Kit (GDK) supports [Visual Studio 2019](../../tools/tools-console/visualstudio/vs-2019-support-notes.md) or [Visual Studio 2022](../../tools/tools-console/visualstudio/vs-2022-support-notes.md).

#### Development OS Requirements

* **Development PC**: Windows 7 or later is supported as a development platform, although we recommend a recent version of Windows 10.

* **Testing games that use the Gaming Runtime on PC**: Windows 19H1 is the minimum Windows OS version for PC games that use Gaming Runtime features for both development and retail scenarios.

* **Testing games that use the Game OS and Gaming Runtime on Xbox**:  
  A preview Xbox recovery that supports Microsoft Game Development Kit (GDK) is included in the Microsoft Game Development Kit (GDK) preview release. Microsoft Game Development Kit (GDK) games are not supported on the current, generally available console release.



### Building a Microsoft Game Development Kit (GDK) game for Xbox

To build a game that targets only the core Win32 Gaming APIs within the Microsoft Game Development Kit (GDK), ensure the following:

1. You are compiling against the **WINAPI_FAMILY_GAMES** API partition in the Windows headers, and WINAPI_FAMILY_GAMES is "#defined". For example, build with `/D "WINAPI_FAMILY=WINAPI_FAMILY_GAMES"`.

2. You are linking against the **xgameplatform.lib** umbrella lib rather than against the standard Win32 desktop libs (kernel32, user32, gdi32, and so on), because xgameplatform.lib contains just the APIs supported by the Microsoft Game Development Kit (GDK).
   In addition, specify the `/NODEFAULTLIB` linker option, to remove all default libraries. For example, the default Xbox project template links against pixevt.lib, d3d12_x.lib, xgameplatform.lib and xgameruntime.lib, and it specifies `/NODEFAULTLIB`.

If you don't follow these steps, you risk using APIs that don't work in the Game OS on Xbox.

To understand more about when you'd build a game that targets only the Microsoft Game Development Kit (GDK), see [Shipping a game on PC](#shipping-a-game-on-Windows-PCs) and [Shipping a game on the Xbox console](#Shipping-a-game-on-Xbox-consoles) below.

For more detailed information, see [Developing a new title with the GDK](../get-started/overviews/developing-new-titles-on-gamecore.md).

<a id="The-Gaming-Runtime"></a>

## The Gaming Runtime

The Gaming Runtime is a set of components that help you implement a modern cross-device game on Microsoft platforms. The Gaming Runtime includes the following:

| Component | Role |
| --- | --- |
| MSIXVC | An update to the Xbox packaging system that supports both the Xbox console and PC; for details on MSIXVC, see [Packaging using MSIXVC](#Packaging-by-using-MSIXVC) |
| Installation Management | Streaming Install and Intelligent Delivery |
| Connected Storage | Cloud-based game saves, called "Game Saves" in the Microsoft Game Development Kit (GDK) |
| Store Commerce | In-app purchases and more |
| Accessibility | Closed Captions, Text to Speech, and Speech to Text |
| Game Invites | Enable gamers to join a multiplayer session that's already in progress |
| Standard Game UI | Standardized UI for common gaming workflows, including Xbox services |

On Windows PCs:

* Use of the Gaming Runtime is optional. Today, it's supported only for games that ship in the Microsoft Store.

* To ship your Win32 game in the Microsoft Store, you must package it by using MSIXVC, which requires taking a dependency on the Gaming Runtime.

* You decide whether to take advantage of the other components in the Gaming Runtime. For example, you can choose to use Connected Storage to store Game Saves in the cloud.

* The Gaming Runtime is released as a Microsoft Store&ndash;serviceable package. This lets a game take a dependency on the runtime without having to take a dependency on a new version of Windows. This also provides the assurance that critical updates such as security fixes can be delivered for the runtime without requiring a game content update.

* <i>The Gaming Runtime has a dependency on the Windows 10 19H1 release.</i> As a goal, when we add new features to the Gaming Runtime, we don't take a dependency on later releases of Windows.

On Xbox:

* You must use the Gaming Runtime - packaging as an MSIXVC, using Connected Storage, and support for Xbox services are requirements to release your game on Xbox.

* The Gaming Runtime is delivered as part of the Game OS.

### Gaming Runtime architecture on PC

![Gaming Runtime architecture on PC](../../../media/private-images/gaming-sdk-runtime-architecture.png)

**XGameRuntime.lib**: Compiled into the game. Versioning boundary for the gaming runtime.

**Gaming Runtime Client**: Loaded into the game process. Manages communication with the Gaming Runtime Services. On Windows PCs, delivered via the Microsoft Store. On Xbox, delivered as part of the Game OS.

**Gaming Runtime Services (GRTS)**: Runs in a separate process. On PC, delivered via the Microsoft Store. On Xbox, delivered as part of the Game OS.

**GameRuntime UI App**: invoked by the Gaming Runtime Client or GRTS to show UI on behalf of the game. On Windows PCs, delivered via the Microsoft Store. On Xbox, delivered as part of the recovery.

On Windows PCs, there's one installed version of the Gaming Runtime Client, the Gaming Runtime Services; there's also the GameRuntime UI App. They are updated independently of the game, and we maintain backward compatibility across different versions of the Gaming Runtime.

On Xbox, the Gaming Runtime Client and the Gaming Runtime Services ship as part of the Game OS and version with the Game OS. The GameRuntime UI App ships with the recovery and version with the recovery. For details on versioning and the Game OS on Xbox, see [Shipping a game on the Xbox console](#Shipping-a-game-on-Xbox-consoles).

<a id="shipping-a-game-on-Windows-PCs"></a>

## Shipping a game on Windows PCs

The Microsoft Game Development Kit (GDK) does provide the WINAPI_FAMILY_GAMES API subset and umbrella library (xgameplatform.lib) that game developers can target and link against to bootstrap development and maximize code reuse across PC and Xbox (for example, in middleware and libraries). However, we don't require any **PC** games to restrict themselves to the Microsoft Game Development Kit (GDK) API surface area.

PC game developers are free to continue using the full power of the PC; this includes all existing Win32 APIs and third-party extension libraries, as well as advanced services (such as anti-cheat) that rely on kernel mode drivers. <i>Restricting what games and game developers can do on PC is not and never will be a goal for the Microsoft Game Development Kit (GDK).</i> In other words, we expect you to continue to develop, build, and ship Win32 PC games just like you've always done.

We simply want to make it much easier for you to take your Win32 PC game and its middleware and dependencies, package it by using MSIXVC, and release it in the Microsoft Store. For details on packaging your game with MSIXVC, see [Packaging using MSIXVC](#Packaging-by-using-MSIXVC). Then, if you are shipping your PC game in the Microsoft Store, not only can you continue using the full power of the Desktop API surface area, but you can also take advantage of the features in the [Gaming Runtime](#The-Gaming-Runtime)&mdash;such as Streaming Install, Connected Storage, and support for building accessible games&mdash;and of the Xbox social network, by integrating support for Xbox services.

If you do decide to use other features of the [Gaming Runtime](#The-Gaming-Runtime), please refer to [Window Display Modes and Title-Callable User Interface Dialogs](../pc-dev/overviews/window-display-modes-and-tcui.md) to understand how the dialog experience may interact with your game.

![Windows PC game packaged as MSIXVC](../../../media/private-images/gaming-sdk-package.png)

<a id="Shipping-a-game-on-Xbox-consoles"></a>

## Shipping a game on Xbox consoles

On Xbox, game developers are required to build a version of their game that targets the Microsoft Game Development Kit (GDK) WINAPI_FAMILY_GAMES API subset. And just like Xbox One ERA today, you'll also need to target the Xbox extensions for Direct3D 12 (D3D12.x) and the Xbox Audio and Media extensions.

Also just like Xbox One ERA today, Microsoft Game Development Kit (GDK) games run on a separate "Game OS" optimized for games, and we make explicit guarantees about the GPU, CPU, and memory resources available to your game and, if you follow our best practice guidance, we guarantee I/O performance rates.

The versioning model for the Microsoft Game Development Kit (GDK) is similar to the Xbox One ERA model: Each game is tied to a particular version of the Game OS.

Microsoft Game Development Kit (GDK) games are supported across the current generation and future generations of Xbox consoles.

> **Important note: On Xbox, Microsoft Game Development Kit (GDK) supports only D3D12.x**  
> D3D11.x is not supported. If you have a game that uses D3D11.x, you'll need to move to D3D12.x as part of moving to the Microsoft Game Development Kit (GDK). On Windows PC, both D3D11 and D3D12 are supported.
>
> There are only minor differences in D3D12.x for Xbox One ERA and Microsoft Game Development Kit (GDK). This means that if you already have a D3D12.x game,  all your graphics code will move forward to the Microsoft Game Development Kit (GDK) without significant changes. This also means that the best way to get ready for the Microsoft Game Development Kit (GDK) is to move your Xbox One ERA game to D3D12.x.

![Xbox game packaged as MSIXVC](../../../media/private-images/gaming-sdk-package-xbox.png)

<a id="GDK-Async-Model"></a>

## Microsoft Game Development Kit (GDK) Async model

The Microsoft Game Development Kit (GDK) implements a new pattern for asynchronous APIs: one that addresses the feedback we've received from game developers about the async pattern implemented as part of the Xbox One ERA programming model. This new pattern is much easier to integrate into a game, and it gives you the high degree of control you've requested. It also includes support for the following:  

1. Async using completion callback functions (or lambdas)
2. Async using polling to determine when the async call is complete
3. Blocking on an async call until it's complete
4. Control over when and where the async work executes
5. Control over when and where a completion callback executes

Here's a very simple example of the new async pattern using a callback:

```cpp
  XAsyncBlock* b = new XAsyncBlock;
  ZeroMemory(b, sizeof(XAsyncBlock));
  b->context = this;
  b->queue = queue;
  b->callback = [](XAsyncBlock* async)
  {
    UpdateStatus status;
    if (SUCCEEDED(QueryUpdateStatusAsyncResult(async, &status)))
    {
      printf("Update Status : %d\r\n", status);
    }
    delete async;
  };
  QueryUpdateStatusAsync("foo", b);
```

Here's an equally simple example of making a blocking call using the new async pattern:

```cpp
  XAsyncBlock* b = new XAsyncBlock;
  ZeroMemory(b, sizeof(XAsyncBlock));

  if (SUCCEEDED(QueryUpdateStatusAsync("foo", b))) {

    //Block until the call returns
    if (SUCCEEDED(XAsyncGetStatus(b, true /*wait*/))) {

      UpdateStatus status;
      if (SUCCEEDED(QueryUpdateStatusAsyncResult(b, &status)))
      {
        printf("Update Status : %d\r\n", status);
      }
    }
  }

  delete b;
```

For details on the new Async pattern, see the following:  

* [Microsoft Game Development Kit (GDK) async programming model](../../features/common/async/async-programming-model.md)
* [XTaskQueue overview](../../features/common/async/async-task-queue-design.md)

## Microsoft Game Development Kit (GDK) memory model on Xbox

The current Xbox One ERA memory manager meets the performance needs of games, and the [XMemAlloc](../../reference/system/xmem/functions/xmemalloc.md) APIs allow you to track and control memory allocations. However, we want to make improvements that will help you optimize memory use in your games on Xbox.

Your feedback suggests you've experienced issues with understanding and predicting how much memory will be used by system processes that execute in the Game OS on behalf of the game. The amount of memory used is difficult to predict in advance, and it changes from version to version of the Xbox One Software Development Kit. The end result is that you have to spend development time modelling system process memory usage, and that you can't make full use of the memory available to your game in the Game OS.

We've not only addressed this problem but have done so without significantly changing the many parts of the Xbox One ERA memory model you're familiar with: [XMemAlloc](../../reference/system/xmem/functions/xmemalloc.md) and friends. Memory allocations on behalf of system processes are now isolated to a separate memory partition that has a fixed size and is not part of the memory given to your game.

You can now predict exactly how much memory is available to your game, and you can do this without having to reserve a memory buffer for system process use. This, in turn, will help you make full use of the memory available to your game in the Game OS.

For details of the new memory model, see [Memory Overview](../../features/console/memory/system-memory-overview.md).

<a id="Packaging-by-using-MSIXVC"></a>  
## Packaging by using MSIXVC

MSIXVC is an update to the packaging system we previously built for Xbox so that it can also be used for PC games on Windows 10. MSIXVC includes all the currently supported Xbox features such as Streaming Install, Intelligent Delivery, and differential Content Updates. This means that  

* For Xbox game developers, there are no required changes and that the technology and tools are the same. Keep doing what you're doing today!  
* For PC game developers, to the features we built for Xbox, we added new functionality in the Gaming Runtime, to let PC games install redistributable components such as C runtimes, the D3D redistributable, custom game launchers, game editor tools, and anti-cheat software.  

On PC, taking an existing Win32 game and packaging it by using MSIXVC is straightforward:

1. Get a product identity from Partner Center. See [Publish Windows apps and games](/windows/uwp/publish/) to get started.
2. Create a [MicrosoftGame.config](../../features/common/game-config/MicrosoftGameConfig-toc.md), and put it in the root folder alongside your game executable.
3. Identify your game's Visual C/C++ runtime dependencies, if there are any, and list them in [MicrosoftGame.config](../../features/common/game-config/MicrosoftGameConfig-toc.md).
4. Use the [makepkg](../../features/common/packaging/deployment/makepkg.md) tool in the Microsoft Game Development Kit (GDK) to create your MSIXVC package.
5. Use the [wdapp](../../tools/tools-pc/commandlinetools/gr-wdapp.md) tool in the Microsoft Game Development Kit (GDK) to deploy and test your package on a Windows 19H1 PC.
6. Submit your package to Partner Center.

For more details, see [Packaging](../../features/common/packaging/gc-packaging-toc.md).  

## Microsoft Game Development Kit (GDK) developer tools

For Xbox development, we support the same set of tools that we support today, including:

* The xb* remote management command line tools, Xbox Manager, [xbWatson](../../tools/tools-console/xbWatson/xbwatson.md), and more
* Visual Studio 2019 and Visual Studio 2022
* PIX for Xbox, for performance-tuning a game

Our focus has been on improving reliability; in particular, we have focused on reliability of game launch and speed and on reliability of "F5" in Visual Studio. We've also made significant feature improvements to PIX, including the new ability to take timing captures for arbitrarily long periods of time.

For PC game development, we expect that you'll use exactly the same tools and techniques you're using today:  

* There are "new to PC" tools ([makepkg](../../features/common/packaging/deployment/makepkg.md), [wdapp](../../tools/tools-pc/commandlinetools/gr-wdapp.md)) that support creation and testing of MSIXVC packages.

* We'll continue to release improvements to PIX for Windows, including improvements to the long-running timing capture.

* We'll still support Variable Rate Shading (VRS), hardware ray tracing, and other state-of-the-art D3D12 features.

Beyond that, however, we are relying on the existing vibrant ecosystem of Win32 game development tools.