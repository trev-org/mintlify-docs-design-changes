---
author: sdgmiller
title: "Visual C++ compiler and linker switch recommendations"
description: "Describes the various Visual C++ compiler and linker switches that we recommend for Microsoft Game Development Kit on Xbox development."
kindex: Xbox Compiler Technology
ms.topic: article
edited: 05/12/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Visual C++ compiler and linker switch recommendations
This topic describes the various Visual C++ compiler and linker switches that we recommend for Microsoft Game Development Kit (GDK) on Xbox development.

> For clang/LLVM for Windows, the same switches are supported through the "MSVC-like" clang-cl front-end. A few specific switches for the clang toolset are noted below.


## C++ language standard (``/std``)
Visual C++ defaults to C++14 conformance mode. To enable C++17 conformance mode, use `/std:c++17`. Microsoft Game Development Kit (GDK) on Xbox APIs requires C++11 or later, and use of C++14 or later are fully supported for title development.

> [!NOTE] 
> `/std:c++latest` enables C++20 draft conformance for Visual Studio 2017 and Visual Studio 2019. Because the behavior of `/std:c++latest` continues to be changed with Visual C++ service updates, it should be used with some caution.

> VS 2019 (16.11) and VS 2022 support the `/std:c++20` switch. See [this blog post](https://devblogs.microsoft.com/cppblog/msvc-cpp20-and-the-std-cpp20-switch/).

> Starting with VS 2019 (16.8), the Visual C++ compiler supports ``/std:c11`` and ``/std::c17``. The GameRuntime and many other GDK headers, however, require C++11 or later.

For more information, see the following:

* [/std (Specify Language Standard Version](/cpp/build/reference/std-specify-language-standard-version) (Microsoft Docs)
* [Standards version switches in the compiler](https://devblogs.microsoft.com/cppblog/standards-version-switches-in-the-compiler/) (C++ Team Blog)
* [C11 and C17 Standard Support Arriving in MSVC](https://devblogs.microsoft.com/cppblog/c11-and-c17-standard-support-arriving-in-msvc/) (C++ Team Blog)

## Use ``/O1 /Oi`` for general optimization, ``/O2`` for "hot" modules
For the out-of-order execution CPU on Xbox One and Xbox Series X/S, fitting a code segment into the instruction cache is usually more important than the absolutely fastest version of the code, so *optimize for space* is preferred. Reserve the use of *optimize for time* only for specific modules or functions. Intrinsics generation is worth the additional code for games because it improves floating-point performance. You can also enable *optimize for time* on a specific function or set of functions by surrounding it with `#pragma optimize("t", on)` / `#pragma optimize("", on )`. Remember that *optimize for time* (`/O2` or `/Ox`) can result in a drastic increase in program size because of aggressive loop unrolling.

> [!NOTE]
> The Single Instruction Multiple Data (SIMD) auto-vectorizer optimizations are only enabled for `/O2` or `/Ox`. Profile guided optimization (PGO) can make better choices about where exactly to apply *optimize for time* versus *optimize for space*.
>
>For historic reasons, it's important to note that `/Ox` is almost the same as `O2` but is missing both `/GF` (Eliminate Duplicate Strings) and `/Gy` (Enable Function-Level Linking). Therefore, you should in general prefer to use `/O2` over `/Ox`. If you make use of `/Ox`, be sure to explicitly enable at least `/Gy`, which is important to enable linker optimization.

## ``/fp:fast`` compiler switch
The `/fp` flag that was introduced with Visual Studio 2005 controls the various floating-point models that are used by the compiler (fast, precise, strict, except). The fast floating-point model uses a number of optimizations that aren't part of the core "C" rules. The precise floating-point model disables these extra optimizations and is the default. We recommend using `/fp:fast` for games.

For more information, see the following:

* [/fp (Specify floating-point behavior)](/cpp/build/reference/fp-specify-floating-point-behavior) (Microsoft Docs)
* [Do You Prefer Fast or Precise? ](https://devblogs.microsoft.com/cppblog/do-you-prefer-fast-or-precise/) (C++ Team Blog)

Also see these additional floating-point related flags new for VS 2022:

* [/fpcvt](https://devblogs.microsoft.com/cppblog/microsoft-visual-studio-2022-and-floating-point-to-integer-conversions/)
* [/fpcontract](https://devblogs.microsoft.com/cppblog/the-fpcontract-flag-and-changes-to-fp-modes-in-vs2022/)

## ``/arch`` compiler switch
The implied default for x64 native platforms is `/arch:SSE2`. For the Xbox One consoles (AMD Jaguar CPU), you should make use of `/arch:AVX`. For Xbox Series X/S (AMD Hercules CPU), we recommend the use of `/arch:AVX2`.

The primary benefit of using `/arch:AVX` or `/arch:AVX2` is that this causes the compiler to generate VEX prefix versions of SSE instructions that use a non-destructive 3-operand encoding instead of the standard 2-operand encoding where one of the source operands is overwritten by the result. This affects both scalar floating-point for x64 native code using SSE instructions and explicit use of SSE intrinsics. This helps reduce register scheduling pressure and can eliminate some `movaps` instructions.

For more information, see the following:

* [/arch (x64)](/cpp/build/reference/arch-x64) (Microsoft Docs)
* [AVX2 floating point improvements in Visual Studio 2019 version 16.5](https://devblogs.microsoft.com/cppblog/avx2-floating-point-improvements-in-visual-studio-2019-version-16-5/) (C++ Team Blog)

For Xbox Series X\|S that's using Visual Studio 2019 (16.3) or later, you should also use `/d2vzeroupper` to optimize for the AMD Hercules CPU's preferred behavior for `vzeroupper` instruction usage. For Whole Program Optimization (`/LTCG`), the required linker equivalent is `/d2:-vzeroupper`. This is the default behavior for the VS 2022 compiler.

For Xbox One that's using Visual Studio 2022, you should also use `/d2vzeroupper-` to optimize for the AMD Jaguar CPU's preferred behavior for `vzeroupper` instruction usage. For Whole Program Optimization (`/LTCG`), the required linker equivalent is `/d2:-vzeroupper-`. This is the default behavior for the VS 2019 compiler.

> For clang/LLVM use ``-march=btver2`` for the Xbox One (AMD Jaguar CPU), ``-march=znver2`` for Xbox Series X/S (AMD Hercules CPU).

> For PC development, you can count on SSE and SSE2 to be supported by all x64 native CPUs as this is part of the architecture definition. You can also safely require SSE3 as this is supported by all modern Intel CPUs supported by Windows 10 or Windows 11. Be sure to do runtime CPU support checks for anything you use beyond SSE2 on PC such as AVX or AVX2.

## ``/favor`` compiler switch
The `/favor` switch controls the x64 compiler optimization choices for AMD64 versus Intel 64 processors. For Xbox development, use `/favor:AMD64`.

## Exception handling model (``/EHsc``)
For x64 native code, exception handling doesn't have any direct code affects on the function epilogue or prologue. While Windows x86 used a stack-based scheme that involved additional code injected into the modules, x64 native code generation uses a table-based scheme to ensure that the stack can be properly unwound during exception processing. The table-based scheme that's used by x64 native also has the advantage of being more secure because it's not subject to stack buffer overrun attacks. This design has a number of implications.

* Exception handling doesn't affect the number of instructions in the generated code. While stack-based schemes like those used for Windows x86 can induce a 5&ndash;10 percent code penalty, x64 native exception handling only generates table-based data that's associated with the executable and not more instructions. Even explicitly disabling exception handling for x64 native, which we don't recommend, only saves a small amount of auxiliary data for C++ handling and doesn't disable the generation of stack unwinding data.

* Try/catch blocks are inexpensive to use. A try/catch block in the stack-based scheme adds some additional code for tracking. On x64, this only adds some more entries in the unwinding table.

* Exception processing (that is, the actual throwing of an exception) requires some additional table lookups. The tradeoff made is that while stack-based schemes can throw exceptions more quickly, it does so with a penalty in all code paths. The table-based scheme is slower for "throwing" but doesn't affect other code paths. Because exceptions shouldn't be used as normal flow-control and should in fact only be triggered in exceptional circumstances, this additional performance cost for processing is negligible compared to the overall application performance.

Microsoft Game Development Kit (GDK) on Xbox APIs uses error codes or `HRESULT` rather than exception handling to return error results, so the level or adoption of C++ exception handling within a title code base is entirely up to you. Exceptions shouldn't be used for flow-control, so generally the best use is for "fail-fast" scenarios, which can simplify debugging and coding. Much of the Standard C++ Library assumes exception handling is enabled for proper error handling.

Explicitly disabling exception handling isn't recommended because this negatively affects post-crash analysis and doesn't improve code generation. We don't recommend the use of `/EHa` because this can inhibit the optimizer.

> [!NOTE]
> Operator `new` always throws a C++ exception on a failed allocation. If you want to use a non-throwing version of `new`, you must use `new (std::nothrow)`. For more information, see [std::nothrow](https://en.cppreference.com/w/cpp/memory/new/nothrow) (cppreference.com).

C++ provides numerous mechanisms for writing "exception-safe" code that works well both with and without explicit use of exception handling. For example, `std::unique_ptr`, `std::shared_ptr`, and `std::lock_guard`. Use of a COM smart-pointer like [Microsoft::WRL::ComPtr](/cpp/cppcx/wrl/comptr-class) to automatically handle COM reference-counting is "exception-safe" and less prone to error. In general, you should prefer the use of resource acquisition is initialization ([RAII](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization)) coding patterns.

> [!NOTE]
> By default x64 native code built with VS 2019 uses an improved exception handler implementation (` __CxxFrameHandler4`, `__GSHandlerCheck_EH4`). Static libraries built with VS 2019 are therefore not compatible with the VS 2017 C/C++ Runtime. VS 2017 built static libraries are compatible with VS 2019.

For more information, see the following:

* [/EH (Exception handling model)](/cpp/build/reference/eh-exception-handling-model) (Microsoft Docs)
* [x64 exception handling](/cpp/build/exception-handling-x64) (Microsoft Docs)
* [Making C++ Exception Handling Smaller On x64](https://devblogs.microsoft.com/cppblog/making-cpp-exception-handling-smaller-x64/) (C++ Team Blog)

## Run-Time Library (``/MD``, ``/MDd``)
The recommended choice is to use the *multithreaded DLL* version of the Visual C/C++ Runtime. This minimizes code-bloat, avoids potential problems with interactions between DLLs, simplifies servicing, and is the recommended option for all Microsoft platforms.

For Microsoft Game Development Kit (GDK) on Xbox, this means linking to ``ucrt.lib`` or ``ucrtd.lib``.

> [!NOTE]
> You can technically use static CRT linking via ``/MT``, ``/MTd`` using ``libucrt.lib`` or ``libucrtd.lib``. The GDK does not contain extension libraries compatible with the static CRT, so support for this scenario is limited.

## Calling convention (``/Gd``, ``/Gv``)
Native code generation for x64 uses a simple and standard `__fastcall` calling convention that can pass the first four parameters in-register.

* If the first parameter is an integer or a pointer equivalent, it's passed in RCX. If it's a `float` or `double`, it's passed in XMM0L. Otherwise, it's passed by the stack.
* If the second parameter is an integer or a pointer equivalent, it's passed in RDX. If it's a `float` or `double`, it's passed in XMM1L. Otherwise, it's passed by the stack.
* If the third parameter is an integer or a pointer equivalent, it's passed in R8. If it's a `float` or `double`, it's passed in XMM2L. Otherwise, it's passed by the stack.
* If the fourth parameter is an integer or a pointer equivalent, it's passed in R9. If it's a `float` or `double`, it's passed in XMM3L. Otherwise, it's passed by the stack.
* All other parameters are passed by the stack.
* A return value that fits in 64 bits is returned in RAX. XMM0 is used to return `float`, `double`, `__m128`, `__m128i`, and `__m128d` values. Otherwise, the caller passed in a pointer to the memory as a 0th argument in RCX, and RAX must be returned with the same pointer.

These points mean that shorter function signatures are better performing, and passing pointers (or references) to objects is faster than passing by value. The calling convention will automatically pass by reference objects larger than 8 bytes.

SIMD values are never passed in-register with the `__fastcall` scheme.

> [!NOTE] 
> `__cdecl`, `__stdcall`, and `__thiscall` are all aliases for `__fastcall` for x64 native code.

For more information, see [x64 calling convention](/cpp/build/x64-calling-convention) (Microsoft Docs).

### Vector call
Visual Studio supports an optional calling convention known as `__vectorcall` for x64 native code generation.

* If the first parameter is an integer or a pointer equivalent, it's passed in RCX. If it's a `float`, `double`, an `__m128`, `__m128i`, or `__m128d`, the parameter is passed in XMM0. If it's an `__m256`, `__m256i`, or `__m256d`, it's passed in YMM0. Otherwise, the first parameter is passed by the stack.
* If the second parameter is an integer or a pointer equivalent, it's passed in RDX. If it's a `float`, `double`, an `__m128`, `__m128i`, `__m128d`, `__m256`, `__m256i`, or `__m256d`, the parameter is passed in XMM1/YMM1. Otherwise, the second parameter is passed by the stack.
* If the third parameter is an integer or a pointer equivalent, it's passed in R8. If it's a `float`, `double`, an `__m128`, `__m128i`, `__m128d`, `__m256`, `__m256i`, or `__m256d`, the parameter is passed in XMM2/YMM2. Otherwise, the third parameter is passed by the stack.
* If the fourth parameter is an integer or a pointer equivalent, it's passed in R9. If it's a `float`, `double`, an `__m128`, `__m128i`, `__m128d`, `__m256`, `__m256i`, or `__m256d`, the parameter is passed in XMM3/YMM3. Otherwise, the fourth parameter is passed by the stack.
* If the fifth parameter is a `float`, `double`, an `__m128`, `__m128i`, `__m128d`, `__m256`, `__m256i`, or `__m256d`, the parameter is passed in XMM4/YMM4. Otherwise, the fifth parameter is passed by the stack.
* If the sixth parameter is a `float`, `double`, an `__m128`, `__m128i`, `__m128d`, `__m256`, `__m256i`, or `__m256d`, the parameter is passed in XMM5/YMM5. Otherwise, the sixth parameter is passed by the stack.
* All other parameters are passed by the stack.
* A return value that fits in 64 bits is returned in RAX. XMM0 is used to return `float`, `double`, `__m128`, `__m128i`, and `__m128d` values. YMM0 is used to return `__m256`, `__m256i`, or `__m256d` values. Otherwise, the caller is passed in a pointer to the memory as a 0th argument in RCX, and RAX must be returned with the same pointer.

The `__vectorcall` convention can also handle homogeneous vector aggregate (HVA) types, which consist of one or more of the same kind of vector or floating-point types&mdash;up to four members (that is, `struct * { __m128 v[4]; }` is an HVA).

As a by value parameter, an HVA will be passed in register if sufficient space is available in XMM0/YMM0 - XMM5/YMM5 after allocating other parameters. As a return value, an HVA is returned via XMM0/YMM0 - XMM3/YMM3.

> [!NOTE] 
> `__vectorcall` doesn't support `vararg` functions or a C++ constructor.

For more information, see the following:

* [__vectorcall](/cpp/cpp/vectorcall) (Microsoft Docs)
* [Introducing 'Vector Calling Convention'](https://devblogs.microsoft.com/cppblog/introducing-vector-calling-convention/) (C++ Team Blog)

## Whole program optimization (``/GL``, ``/Gw``, ``/LTCG``)
While traditional compiler optimization techniques can optimize functions and modules, *whole program optimization*, also known as *link-time code generation (LTCG)*, performs optimizations across modules. This includes improved register allocation and scheduling with better knowledge of side effects, interprocedural const/range propagation, partial inlining, and de-virtualizing function calls on objects where possible.

> [!NOTE]
> LTCG can also be used in an incremental mode to gain code performance benefits for development iteration. For more information, see [Speeding up the Incremental Developer Build Scenario](https://devblogs.microsoft.com/cppblog/speeding-up-the-incremental-developer-build-scenario/) (C++ Team Blog).

> For middleware vendors who ship prebuilt static C++ libraries, enabling WPO ties the library to a specific release of the compiler toolset. For this scenario you should ship libraries without WPO. This advice does not apply to DLLs or code built from source.

For more information, see [/GL (Whole Program Optimization)](/cpp/build/reference/gl-whole-program-optimization) (Microsoft Docs).

> Visual Studio 2022 (17.5) added a new conformance switch ``/Zc:checkGwOdr`` related to ``/Gw``. See [this blog post](https://devblogs.microsoft.com/cppblog/standards-conformance-improvements-to-gw-in-visual-studio-version-17-5-preview-2/).

### Profile guided optimization
Profile guided optimization (PGO) takes the LTCG process one step further where the whole program optimization is controlled by performance traces gathered in prior runs of the application. This improves the quality of the existing optimizations as well as optimizations for function layout, block layout, and code separation for improved working-set and branch prediction.

For more information, see [Profile-guided optimizations](/cpp/build/profile-guided-optimizations) (Microsoft Docs).



## ``/OPT:REF,ICF`` linker switch
These eliminate redundant content in the various object modules when linked into the final executable. Typically, these are disabled for debug builds but should be present for release builds.

> [!NOTE]
> For the best results, be sure you compile with the `/Gy` (Enable Function-Level Linking) option.

## ``/GS`` compiler switch
We recommend the use of the buffer check in release configurations for all code. For cases where there are specific buffers that are safe from security threats, but performance seems affected by the check, use `__declspec(safebuffers)` on the function rather than globally disabling `/GS`. For higher-risk code, use `#pragma strict_gs_check(on)`.

For more information, see [/GS (Buffer Security Check)](/cpp/build/reference/gs-buffer-security-check) (Microsoft Docs).

## ``/homeparams`` compiler switch
The use of this switch in optimized builds can greatly increase the ability to debug the release builds of your application. If used for production builds, it can simplify the process of analyzing and debugging crash dumps. This adds a small amount of overhead for storing additional parameters on the stack. In most cases, this doesn't have a noticeable affect on performance.

For more information, see [/homeparams (Copy Register Parameters to Stack)](/cpp/build/reference/homeparams-copy-register-parameters-to-stack) (Microsoft Docs).

## ``/Zc:inline`` compiler switch
This applies the more strict C++11 rules for inline function declaration, which requires that the body of all inline functions be present in the same compilation unit as the declaration and their use. Using this flag can improve build times and can significantly reduce the size of .obj files. If your inline functions fail to be C++11 conforming, you will get LNK2019 errors at link time. This switch is on by default when building with MSBuild, but must be explicitly added when building using the command-line, CMake, etc.

For more information, see [/Zc:inline (Remove unreferenced COMDAT)](/cpp/build/reference/zc-inline-remove-unreferenced-comdat) (Microsoft Docs).

## ``/Zc:throwingNew`` compiler switch
The C++ Standard and the Standard C++ Library templates require that operator `new` will throw an exception rather than return `nullptr` on a failed allocation&mdash;you can use `std::nothrow` with `new` to force the return `nullptr` behavior. The Visual C++ compiler has long generated a check for `null` after each call to `new`, which is unnecessary in the presence of exception handling. By using this switch, the extra checks are eliminated.

For more information, see the following:

* [/Zc:throwingNew (Assume operator new throws)](/cpp/build/reference/zc-throwingnew-assume-operator-new-throws) (Microsoft Docs)
* [New in VS 2015: /Zc:throwingNew](https://devblogs.microsoft.com/cppblog/new-in-vs-2015-zcthrowingnew/) (C++ Team Blog)

## ``/Zc:__cplusplus`` compiler switch
For historic reasons, the `__cplusplus` macro in Visual C++ has returned "199711" for a very long time. Starting with Visual Studio 2017 (15.7 update), this new switch causes the Visual C++ compiler to return the correct standard value. A future version of the compiler will do this by default, so it's worth turning this on sooner than later to resolve any lingering conformance issues.

For more information, see the following:

* [/Zc:__cplusplus (Enable updated __cplusplus macro)](/cpp/build/reference/zc-cplusplus) (Microsoft Docs)
* [MSVC now correctly reports __cplusplus](https://devblogs.microsoft.com/cppblog/msvc-now-correctly-reports-__cplusplus/) (C++ Team Blog)

## ``/volatile:iso`` compiler switch
The keyword `volatile` has a number of Microsoft-specific extended behaviors related to its behavior that aren't really portable, even between generations of Visual C++. You should consider turning on this switch and then ensuring that you aren't misusing `volatile` in your code.

For more information, see [/volatile (volatile Keyword Interpretation)](/cpp/build/reference/volatile-volatile-keyword-interpretation) (Microsoft Docs).

## ``/permissive-`` compiler switch
Visual Studio 2017 introduced a new standard conformance switch to replace the outdated `/Za` switch. This switch causes the compiler to emit errors and warnings when using Microsoft-specific extension behavior that could cause problems when porting to other compilers. Use of `/permissive-` can also improve compile times.

For more information, see the following:

* [/permissive- (Standards conformance)](/cpp/build/reference/permissive-standards-conformance) (Microsoft Docs)
* [Give Visual C++ a Switch to Standard Conformance](https://devblogs.microsoft.com/cppblog/permissive-switch/) (C++ Team Blog)

> [!NOTE]
> Starting with Visual Studio 2017 (15.3 update), the use of `/permissive-` also enables two-phase name lookup. Some C++ template code won't compile with the proper standard enforcement, so you can selectively disable just that portion by using `/Zc:twoPhase-` instead of entirely disabling `/permissive-`.
>
>For more information, see the following:
>
>* [/Zc:twoPhase- (disable two-phase name lookup)](/cpp/build/reference/zc-twophase) (Microsoft Docs)
>* [Two-phase name lookup support comes to MSVC](https://devblogs.microsoft.com/cppblog/two-phase-name-lookup-support-comes-to-msvc/) (C++ Team Blog)

Additional switches related to conformance enforcement include [/Zc:lambda](/cpp/build/reference/zc-lambda) and [/Zc:templateScope](/cpp/build/reference/zc-templatescope).

## ``/Zc:preprocessor`` compiler switch
Visual Studio 2019 (16.6) includes a new switch to enable the C99 conformant preprocessor. This switch is off-by-default, but if code portability is a concern you should consider enabling it. See [Announcing full support for a C/C++ conformant preprocessor in MSVC](https://devblogs.microsoft.com/cppblog/announcing-full-support-for-a-c-c-conformant-preprocessor-in-msvc/).

## ``/ZH:SHA_256`` compiler switch
 Debugging Symbols have traditionally used MD5 hashing. To improve supply-chain security, the recommendation is to use SHA-256 instead. Note that Visual Studio 2022 defaults to ``/ZH:SHA_256``.

> This switch is supported by clang/LLVM as of v16.

## ``/NXCOMPAT`` and ``/SAFESEH`` linker switches
These two switches are implicit when using x64 native targets. The no-execute (NX) protection is required for Xbox  titles, so you can't use `/NXCOMPAT:NO`.

## ``/DYNAMICBASE`` linker switch
This switch enables the use of address space layout randomization (ASLR) and is on by default. Note that this is required for Xbox titles, so you can't use `/DYNAMICBASE:NO`.

## ``/Debug:FASTLINK`` linker switch
*For Visual Studio 2019 (16.8) or later, significant performance improvements in the linker mean we no longer recommend using ``/Debug:FASTLINK``.*

~~For local builds, enabling this linker switch can greatly improve build iteration times.~~

> [!NOTE]
> Keep in mind that with `/Debug:FASTLINK` the primary `pdb` for your project only contains links to the `pdb` files that are scattered throughout your build. If you want to share or store the symbols from a `/Debug:FASTLINK` build, you can use the `mspdbcmf.exe` command-line tool to generate a full `pdb` file.
>
>For more information, see the following:
>
>* [/DEBUG (Generate Debug Info)](/cpp/build/reference/debug-generate-debug-info) (Microsoft Docs)
>* [Faster C++ build cycle in VS 2017 with /Debug:fastlink](https://devblogs.microsoft.com/cppblog/faster-c-build-cycle-in-vs-15-with-debugfastlink/) (C++ Team Blog)

## Libraries

For the *Gaming.Xbox.XboxOne.x64* and *Gaming.Xbox.Scarlett.x64* platforms, it is important to link against ``xgameplatform.lib``. This is an 'umbrella' library that includes all Win32 APIs supported on the console. Do **not** link with ``kernel32.lib``, ``onecore.lib``, ``onecoreuap.lib``, or ``WindowsApps.lib``. Mixing umbrella libs is not recommended and can lead to process startup failures.

See [Microsoft Docs](/windows/win32/apiindex/windows-umbrella-libraries) for more on 'umbrella' libraries.

### ``/NODEFAULTLIB:library`` linker switch
We recommend using the ``/NODEFAULTLIB`` linker switch with a specific list of common library names to ensure unsupported libraries are not used at link time via ``#pragma comment(lib,)``.

```
/NODEFAULTLIB:advapi32.lib /NODEFAULTLIB:comctl32.lib /NODEFAULTLIB:comsupp.lib
/NODEFAULTLIB:dbghelp.lib /NODEFAULTLIB:gdi32.lib /NODEFAULTLIB:gdiplus.lib
/NODEFAULTLIB:guardcfw.lib /NODEFAULTLIB:kernel32.lib /NODEFAULTLIB:mmc.lib
/NODEFAULTLIB:msimg32.lib /NODEFAULTLIB:msvcole.lib /NODEFAULTLIB:msvcoled.lib
/NODEFAULTLIB:mswsock.lib /NODEFAULTLIB:ntstrsafe.lib /NODEFAULTLIB:ole2.lib
/NODEFAULTLIB:ole2autd.lib /NODEFAULTLIB:ole2auto.lib /NODEFAULTLIB:ole2d.lib
/NODEFAULTLIB:ole2ui.lib /NODEFAULTLIB:ole2uid.lib /NODEFAULTLIB:ole32.lib
/NODEFAULTLIB:oleacc.lib /NODEFAULTLIB:oleaut32.lib /NODEFAULTLIB:oledlg.lib
/NODEFAULTLIB:oledlgd.lib /NODEFAULTLIB:oldnames.lib /NODEFAULTLIB:runtimeobject.lib
/NODEFAULTLIB:shell32.lib /NODEFAULTLIB:shlwapi.lib /NODEFAULTLIB:strsafe.lib
/NODEFAULTLIB:urlmon.lib /NODEFAULTLIB:user32.lib /NODEFAULTLIB:userenv.lib
/NODEFAULTLIB:wlmole.lib /NODEFAULTLIB:wlmoled.lib
/NODEFAULTLIB:onecore.lib
```

> [!NOTE]
> If a library is listed explicitly as a linking input, it will still be used even if it's listed as a ``/NODEFAULTLIB`` library. The switch only ignores the implicit references.

### Visual C++ Runtime Libraries
The **Visual Studio Developer Command Prompt** defines the environment variables needed to locate these paths.

The proper ``/LIBPATH`` for _Gaming.Xbox.*.x64_ to locate the Visual C++ Runtime import libraries is ``%VCToolsInstallDir%lib\onecore\x64``.

#### Dynamic Link Libraries (DLLs)
The Game OS for _Gaming.Xbox.*.x64_ does not include the Visual C++ Runtime DLL libraries. These are included in the title layout in order for the game to launch.

* For Release you'll need the contents of ``%VCToolsRedistDir%onecore\x64\Microsoft.VC14?.CRT``. If you have a mix of both Debug & Release binaries in the same layout, then you'll want to include these in all your layouts.

* For Debug, you'll need the contents of ``%VCToolsRedistDir%onecore\debug_nonredist\x64\Microsoft.VC14?.DebugCRT``.

* For Debug you will *also* need the debug version of ``ucrtbased.dll`` which is found in the Windows SDK: ``%WindowsSdkVerBinPath%x64\ucrt``. The Release version of ``ucrtbase.dll`` is included in the Game OS.

> [!NOTE]
> If you make use of OpenMP, you'll also need the contents of ``Microsoft.VC14?.OpenMP`` and/or ``Microsoft.VC14?.DebugOpenMP``

## See also

[CMakeExample](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Tools/) samples
