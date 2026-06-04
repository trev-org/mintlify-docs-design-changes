---
author: sdgmiller
title: "Xbox Compiler Technology"
description: "The compiler for Xbox is the Visual C++ x64 complier that ships Visual Studio 2019 or later. We strongly recommend using the latest Visual Studio update."
kindex: Xbox Compiler Technology
ms.topic: article
edited: '08/22/2019'
ms.date: '08/01/2022'
permissioned-type: public
---

# Xbox compiler technology

The compiler for Xbox is the Visual C++ x64 compiler that ships with Visual Studio. Use Visual Studio 2022 (17.12 or 17.14) or the latest Visual Studio 2026 update.

Xbox development also supports clang/LLVM for Windows v11 or later. This toolset uses the Visual C/C++ Runtime. If you use MSBuild, use the Visual Studio 2019 or Visual Studio 2022 clang/LLVM integration.

Other toolset and runtime combinations might not run or pass certification.

For details about upgrading Visual C++ code, see [Visual C++ Porting and Upgrading Guide](/cpp/porting/visual-cpp-porting-and-upgrading-guide).

> [!NOTE]
> The Xbox tooling only works with Microsoft Program Database (PDB) files for debugging symbols. It doesn't support the CodeView or DWARF debugging information that LLVM `.ld` files emit.

<a id="ID4EP"></a>




## C++14, C++17, and C++20 language versions and features

Visual Studio 2019, Visual Studio 2022, and Visual Studio 2026 support C++11, C++14, and C++17. Visual Studio 2022 and Visual Studio 2026 also support C++20.

| Compiler version | Version macro | Release | Notes |
| -- | -- | -- | -- |
| 19.20 | _MSC_VER == 1920 | Visual Studio 2019 (version 16.0) | [C++17/20 Features and Fixes in Visual Studio 2019](https://devblogs.microsoft.com/cppblog/cpp17-20-features-and-fixes-in-vs-2019/)
| 19.21 | _MSC_VER == 1921 | Visual Studio 2019 (version 16.1) |
| 19.22 | _MSC_VER == 1922 | Visual Studio 2019 (version 16.2) |
| 19.23 | _MSC_VER == 1923 | Visual Studio 2019 (version 16.3) |
| 19.24 | _MSC_VER == 1924 | Visual Studio 2019 (version 16.4) |
| 19.25 | _MSC_VER == 1925 | Visual Studio 2019 (version 16.5) | [C++20 Modules](https://devblogs.microsoft.com/cppblog/c-modules-conformance-improvements-with-msvc-in-visual-studio-2019-16-5/)
| 19.26 | _MSC_VER == 1926 | Visual Studio 2019 (version 16.6) | [C++20 Features and Fixes in VS 2019 16.1 through 16.6](https://devblogs.microsoft.com/cppblog/c20-features-and-fixes-in-vs-2019-16-1-through-16-6/)
| 19.27 | _MSC_VER == 1927 | Visual Studio 2019 (version 16.7) | [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2019-Changelog#vs-2019-167)
| 19.28 | _MSC_VER == 1928 | Visual Studio 2019 (version 16.8) | [C++20 Modules](https://devblogs.microsoft.com/cppblog/standard-c20-modules-support-with-msvc-in-visual-studio-2019-version-16-8/) <br /> [C++20 Coroutines](https://devblogs.microsoft.com/cppblog/c-coroutines-in-visual-studio-2019-version-16-8/) <br /> [C++20 Language Features](https://devblogs.microsoft.com/cppblog/c20-features-in-visual-studio-2019-versions-16-7-and-16-8/) <br /> [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2019-Changelog#vs-2019-168)
| 19.28.29910 or later | | Visual Studio 2019 (version 16.9) | [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2019-Changelog#vs-2019-169)
| 19.29 | _MSC_VER = 1929 | Visual Studio 2019 (version 16.10) | [C++20 Ranges](https://devblogs.microsoft.com/cppblog/c20-ranges-are-complete-in-visual-studio-2019-version-16-10/) <br /> [\<format\>](https://devblogs.microsoft.com/cppblog/format-in-visual-studio-2019-version-16-10/) <br /> [extensions to \<chrono\>](https://devblogs.microsoft.com/cppblog/cpp20s-extensions-to-chrono-available-in-visual-studio-2019-version-16-10/) <br /> [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2019-Changelog#vs-2019-1610)
| 19.29.30133.0 or later | | Visual Studio 2019 (version 16.11) | [C++20 Coroutines](https://devblogs.microsoft.com/cppblog/cpp20-coroutine-improvements-in-visual-studio-2019-version-16-11/) <br /> [STL Change Notes](https://github.com/microsoft/STL/wiki/VS-2019-Changelog#vs-2019-161114) <br /> [/std:c++20 switch](https://devblogs.microsoft.com/cppblog/msvc-cpp20-and-the-std-cpp20-switch/)
| 19.30 | _MSC_VER == 1930 | Visual Studio 2022 (17.0) | [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2022-Changelog#vs-2022-170)
| 19.31 | _MSC_VER == 1931 | Visual Studio 2022 (17.1) | [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2022-Changelog#vs-2022-171)
| 19.32 | _MSC_VER == 1932 | Visual Studio 2022 (17.2) | [MSVC's STL Completes /std:c++20](https://devblogs.microsoft.com/cppblog/msvcs-stl-completes-stdc20/) <br /> [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2022-Changelog#vs-2022-172)
| 19.33 | _MSC_VER = 1933 | Visual Studio 2022 (17.3) | [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2022-Changelog#vs-2022-173)
| 19.34 | _MSC_VER = 1934 | Visual Studio 2022 (17.4) | [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2022-Changelog#vs-2022-174)
| 19.35 | _MSC_VER = 1935 | Visual Studio 2022 (17.5) | [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2022-Changelog#vs-2022-175)
| 19.36 | _MSC_VER = 1936 | Visual Studio 2022 (17.6) | [vcpkg](https://devblogs.microsoft.com/cppblog/visual-studio-17-6-for-cpp-devs/) <br /> [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2022-Changelog#vs-2022-176)
| 19.37 | _MSC_VER = 1937 | Visual Studio 2022 (17.7) | [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2022-Changelog#vs-2022-177)
| 19.38 | _MSC_VER = 1938 | Visual Studio 2022 (17.8) | [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2022-Changelog#vs-2022-178)
| 19.39 | _MSC_VER = 1939 | Visual Studio 2022 (17.9) | [MSVC Backend Updates](https://devblogs.microsoft.com/cppblog/msvc-backend-updates-since-visual-studio-2022-version-17-3/) <br /> [STL Features and Fixes](https://github.com/microsoft/STL/wiki/VS-2022-Changelog#vs-2022-179)
| 19.40 | _MSC_VER = 1940 | Visual Studio 2022 (17.10) | [MSVC Toolset Minor Version](https://devblogs.microsoft.com/cppblog/msvc-toolset-minor-version-number-14-40-in-vs-2022-v17-10/) <br /> [STL Features and Fixes](https://github.com/microsoft/STL/wiki/Changelog#vs-2022-1710)
| 19.41 | _MSC_VER = 1941 | Visual Studio 2022 (17.11) | [Diagnostics changes](https://devblogs.microsoft.com/cppblog/whats-new-for-cpp-developers-in-visual-studio-2022-17-11/) <br /> [STL Features and Fixes](https://github.com/microsoft/STL/wiki/Changelog#vs-2022-1711)
| 19.42 | _MSC_VER = 1942 | Visual Studio 2022 (17.12) | [STL Features and Fixes](https://github.com/microsoft/STL/wiki/Changelog#vs-2022-1712)
| 19.43 | _MSC_VER = 1943 | Visual Studio 2022 (17.13) | [C++ Language Updates](https://devblogs.microsoft.com/cppblog/msvc-compiler-updates-in-visual-studio-2022-version-17-13/) <br /> [STL Features and Fixes](https://github.com/microsoft/STL/wiki/Changelog#vs-2022-1713)
| 19.44 | _MSV_VER = 1944 | Visual Studio 2022 (17.14) | [C++ Language Updates](https://devblogs.microsoft.com/cppblog/c-language-updates-in-msvc-in-visual-studio-2022-17-14/) <br /> [STL Features and Fixes](https://github.com/microsoft/STL/wiki/Changelog#vs-2022-1714)
| 19.50 | _MSC_VER = 1950 | Visual Studio 2026 | [C++ Language Updates](https://devblogs.microsoft.com/cppblog/c-language-updates-in-msvc-build-tools-v14-50/) <br /> [STL Features and Fixes](https://github.com/microsoft/STL/wiki/Changelog#msvc-build-tools-1450)

<a id="ID4ECOAC"></a>

## Intrinsics

The Visual C++ compiler doesn't support x64 inline assembly but does support a wide variety of intrinsics to support inclusion of specialized instruction sets for Xbox development.

> [!NOTE]
> Any use of intrinsics assumes that you already verified that the target platform supports the instructions. If you don't verify support, the app throws runtime `invalid instruction` exceptions. Pay particular attention to the fact that Xbox One (AMD Jaguar CPU) supports AVX and F16C, and Xbox Series X|S (AMD Hercules CPU) also supports AVX2 and FMA3. Neither platform supports AVX-512 or later instructions.


| Header | Description |
| -- | -- |
| intrin.h | General intrinsics, notably `__cpuid` and, various intrinsics forms of the CRT routines. Includes ammintrin.h and immintrin.h |
| ammintrin.h | AMD instruction sets: SSE5, FMA4, and XOP intrinsics. <br> <br> *FMA4 and XOP aren't supported by Xbox One (AMD Jaguar CPU) or Xbox Series X\|S (AMD Hercules CPU)*. |
| immintrin.h | Intel instruction sets: [AVX](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions), AVX2, [BMI, BMI2](https://en.wikipedia.org/wiki/Bit_manipulation_instruction_set), [FMA3](https://en.wikipedia.org/wiki/FMA_instruction_set), and [F16C/CVT16](https://en.wikipedia.org/wiki/F16C) intrinsics. <br> <br> *AVX2, BMI2, and FMA3 are supported by Xbox Series X\|S (AMD Hercules CPU), but not on Xbox One (AMD Jaguar CPU)*. |
| xmmintrin.h | [SSE](https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions) intrinsics and the `__m128` type (single-precision float SIMD). |
| emmintrin.h | [SSE2](https://en.wikipedia.org/wiki/SSE2) intrinsics and the `__m128i` / `__m128d` types (double-precision float and integer SIMD). |
| pmmintrin.h | [SSE3](https://en.wikipedia.org/wiki/SSE3) intrinsics (horizontal adds and subtracts float/double operations, specific "dup" operations). |
| tmmintrin.h | [SSSE3](https://en.wikipedia.org/wiki/SSSE3) intrinsics (more horizontal ops, integer abs, "byte" shuffle to augment SSE2). |
| smmintrin.h | [SSE4.1](https://en.wikipedia.org/wiki/SSE4) intrinsics (dot-product, rounding, augmented min/max support for SSE2). |
| nmmintrin.h | SSE4.2 intrinsics. |
| wmmintrin.h | AES intrinsics. |
| zmmintrin.h | AVX-512 intrinsics. <br> <br> *AVX-512 intrinsics aren't supported by Xbox One (AMD Jaguar CPU) or Xbox Series X\|S (AMD Hercules CPU)*. |
| mmintrin.h | Intel MMX intrinsics (including the `__m64` type), which aren't supported for x64 native applications. |
| mm3dnow.h | AMD 3DNow! Intrinsics, which aren't supported for x64 native applications. *`_mm_prefetch` / `_m_prefetchw` are supported for x64 native and are also defined in intrin.h.* |

> [!NOTE]
> Visual Studio supports the **/arch:AVX** and **/arch:AVX2** switches, which enable the use of the [VEX prefix](https://en.wikipedia.org/wiki/VEX_prefix) that's part of the AVX instruction set standard. Use this switch for all Xbox applications. For more information, see the following articles.

* [Microsoft Docs: x64 Intrinsics](/cpp/intrinsics/x64-amd64-intrinsics-list)

* [Intel: AVX](https://go.microsoft.com/fwlink/p/?LinkId=251202)

* [Games for Windows and the DirectX SDK blog: DirectXMath series](https://walbourn.github.io/directxmath-sse-sse2-and-arm-neon/)

### clang/LLVM intrinsics

The clang/LLVM for Windows toolset implements many of the same intrinsics as MSVC, but some key differences exist:

* clang/LLVM and GNUC treat SSE SIMD types differently than Visual C++ and the Intel Compiler. Specifically, the `__m128`, `__m128i`, and `__m128d` types are opaque types rather than structs, so you can't create C++ overloaded functions that use those types. This difference also means direct element access through `__m128.m128_f32[0]` doesn't compile on clang/LLVM.

> For this reason, DirectXMath defines `_XM_NO_XMVECTOR_OVERLOADS_` when building by using clang/LLVM. For better portability, you can explicitly define this macro in your code to enforce it for MSVC as well.

* The *cpuid* intrinsics for clang/LLVM use a special header `#include <cpuid.h>`. The `__cpuid` intrinsic takes a different parameter list, and `__cpuid_count` is the equivalent of the MSVC `__cpuidex` but again with a different parameter list.

```
#if (defined(__clang__) || defined(__GNUC__)) && (__x86_64__ || __i386__)
#include <cpuid.h>
#else
#include <intrin.h>
#endif
```

```
int CPUInfo[4] = { -1 };
#if defined(__clang__) || defined(__GNUC__)
__cpuid(0, CPUInfo[0], CPUInfo[1], CPUInfo[2], CPUInfo[3]);
#else
__cpuid(CPUInfo, 0);
#endif
```

```
#if defined(__clang__) || defined(__GNUC__)
__cpuid_count(7, 0, CPUInfo[0], CPUInfo[1], CPUInfo[2], CPUInfo[3]);
#else
__cpuidex(CPUInfo, 7, 0);
#endif
```

<a id="ID4EGCAE"></a>


## Calling conventions

The default calling convention for x64 native code is `__fastcall`, detailed on [Microsoft Docs](/cpp/build/x64-calling-convention). The `__cdecl` and `__stdcall` calling conventions are just aliases for `__fastcall` on x64.

The MSVC and clang/LLVM compilers include support for the `__vectorcall` calling convention for x86 and x64 code. For more information, see
[Visual C++ Team Blog: Introducing 'Vector Calling Convention'](https://devblogs.microsoft.com/cppblog/introducing-vector-calling-convention/) and [Microsoft Docs](/cpp/cpp/vectorcall).

<a id="ID4ESCAE"></a>


## Autovectorizer and autoparallelizer

The Visual C++ optimizer can change scalar integer or floating-point computations into SIMD instructions through the autovectorizer. The autovectorizer is automatically enabled with `/O2` or `/Ox`. You can disable it for specific loops by using `#pragma loop(no_vector)`.

These compiler toolsets also support autoparallelization for loops by using threads. Enable autoparallelization by using `/Qpar`. You can provide a hint for a specific loop by using `#pragma (loop(hint_parallel(n)))`. For more information, see the following article.

* [Auto-Parallelization and Auto-Vectorization](/cpp/parallel/auto-parallelization-and-auto-vectorization)


<a id="ID4EIEAE"></a>


## Reporting bugs

Report bugs for the **Visual C++ compiler** (if possible) through Visual Studio _Report a Problem..._. See [Microsoft Docs](/visualstudio/ide/how-to-report-a-problem-with-visual-studio) and the [Developer Community](https://aka.ms/feedback/report?space=62) website. For details on creating a good bug report for the compiler, see [this page](https://aka.ms/compilerbug).

> [!NOTE]
> If more NDA information is required to reproduce the issue, you can add a comment to a public report issue marked as "Microsoft only."

For bug reporting for the **clang/LLVM for Windows compiler**, use https://bugs.llvm.org/

For bug reports for the **Microsoft Standard C++ Library** (also known as STL), use https://github.com/microsoft/STL/issues

As always, feel free to reach out to your *Account Manager* for critical issues that need escalation.


## Resources

* [AMD Developer Guides & Manuals](https://developer.amd.com/resources/developer-guides-manuals/)

* [Intel 64 and IA-32 Architectures Software Developer Manuals](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html)

* [What's New for Visual C++ in Visual Studio](/cpp/what-s-new-for-visual-cpp-in-visual-studio)
