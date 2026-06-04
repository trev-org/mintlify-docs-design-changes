---
author: aablackm
title: "Microsoft Game Development Kit on Xbox preprocessor definitions"
description: "This article lists the preprocessor definitions that are specific to the Microsoft Game Development Kit (GDK) on Xbox."
kindex:
- "Microsoft Game Development Kit (GDK) Preprocessor Definitions"
- preprocessor definitions
- _GAMING_XBOX
- _GAMING_XBOX_DESKTOP
- _GAMING_XBOX_XBOXONE
- _GAMING_XBOX_SCARLETT
- _M_X64
- _M_IX86
- _M_ARM
- _M_ARM64
- WINAPI_FAMILY
ms.author: mtoepke
ms.topic: article
edited: '08/22/2019'
ms.date: '08/01/2022'
permissioned-type: public
---

# Microsoft Game Development Kit on Xbox preprocessor definitions

This article lists the preprocessor definitions that are specific to the Microsoft Game Development Kit (GDK) on Xbox.

<table>
<tr> <th>

Preprocessor define</th> <th>

Description</th> </tr>

<tr> <td>_GAMING_XBOX</td> <td> The official define for Xbox One or Xbox Series X|S.  <pre>
#ifdef _GAMING_XBOX
          // Microsoft Game Development Kit (GDK) on Xbox.
          ...
        </pre>
 </td> </tr>

<tr> <td>_GAMING_XBOX_XBOXONE</td> <td> The define indicates building on the GDK on Xbox One.
</td> </tr>

<tr> <td>_GAMING_XBOX_SCARLETT</td> <td> The define indicates building on the GDK on Xbox Series X|S. </td> </tr>

<tr> <td>_GAMING_DESKTOP</td> <td> The define indicates building on PC with the GDK. </td> </tr>

<tr> <td>_M_X64, _M_IX86, _M_ARM64, and _M_ARM</td> <td> When writing code that's specific to the processor architecture rather than the platform, use these defines. For Xbox&nbsp;360, the equivalent define is _M_PPCBE. _M_AMD64 is an alias for _M_X64 and was the original name. It's being phased out in favor of _M_X64. Don't use the Windows legacy defines, such as _X86_ and _AMD64_.  </td> </tr>

<tr> <td>WINAPI_FAMILY</td> <td> The Microsoft platform headers make extensive use of the Windows family and partition macros that are defined in winapifamily.h. Remember that the partitions can (and in fact do between Windows 8.0 SDK and Windows 8.1 SDK) change. There are also new PARTITION and FAMILY values added over time. Client code should never make direct use of the PARTITION values, the WINAPI_FAMILY_PARTITION macro, or the WINAPI_FAMILY_ONE_PARTITION macro. It's reasonable for client code to look for specific values of WINAPI_FAMILY. The Windows 8.1 SDK version of winapifamily.h has an expanded comment block that covers this usage. </td> </tr>
</table>



Use the following preprocessor definitions for Microsoft Game Development Kit (GDK) on Xbox code.   

```cpp
#ifdef _GAMING_XBOX
// GDK on Xbox
```

```cpp
#ifdef _GAMING_XBOX_SCARLETT
// Xbox Series X|S hardware
#elif _GAMING_XBOX_ONE
// Xbox One hardware
```

When you build by using the Microsoft Game Development Kit (GDK), the Visual Studio integrated development environment (IDE) Microsoft Build rules automatically define ``_GAMING_XBOX`` and ``WINAPI_FAMILY=WINAPI_FAMILY_GAMES``. Developers who don't use the Visual Studio IDE to build against the Microsoft Game Development Kit (GDK) must supply these values on the compiler command-line.

## Gaming.Xbox.XboxOne.x64
```
/D_GAMING_XBOX /D_GAMING_XBOX_XBOXONE /DWINAPI_FAMILY=WINAPI_FAMILY_GAMES  
```

## Gaming.Xbox.Scarlett.x64
```
/D_GAMING_XBOX /D_GAMING_XBOX_SCARLETT /DWINAPI_FAMILY=WINAPI_FAMILY_GAMES  
```

## Gaming.Desktop.x64
```
/D_GAMING_DESKTOP /DWINAPI_FAMILY=WINAPI_FAMILY_DESKTOP_APP
```

> These defines also apply to 'classic' x64 platforms when you use the Microsoft Game Development Kit.

When you write Microsoft cross-platform code, you can use the following construction.

```cpp
    #if !defined(WINAPI_FAMILY) || (WINAPI_FAMILY == WINAPI_FAMILY_DESKTOP_APP)
    // This code is for Win32 desktop apps.
    #elif WINAPI_FAMILY == WINAPI_FAMILY_GAMES
    // This code is for the Microsoft Game Development Kit (GDK) (could also use _GAMING_XBOX if only targeting Xbox).
    #elif WINAPI_FAMILY == WINAPI_FAMILY_PHONE_APP
    // This code is for Windows phone 8.x.
    #elif WINAPI_FAMILY == WINAPI_FAMILY_APP
    // This code is for Microsoft Store apps for 8.x.
    #elif WINAPI_FAMILY == WINAPI_FAMILY_TV_TITLE
    // This code is for Xbox One Game OS/XDK.
    #elif WINAPI_FAMILY == WINAPI_FAMILY_TV_APP
    // This code is for Xbox One System OS/ADK.
    #else
    #error Unknown WINAPI_FAMILY value
    #endif  
```