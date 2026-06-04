---
author: kevincog
title: "Visual Studio toolset setup"
description: "Lists the required Visual Studio and Visual Studio Build Tools components for building without installing the Microsoft Game Development Kit."
kindex:
- Workloads for building without installing the Microsoft Game Development Kit
- Component IDs for building without installing the Microsoft Game Development Kit
- Visual Studio workloads and component IDs for building without installing the Microsoft Game Development Kit
ms.author: kevincog
ms.topic: article
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# Visual Studio toolset setup for building without installing the Microsoft Game Development Kit

For building Microsoft GDK projects, you can set up [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) (which can build v142, v143 and Clang platform toolset VC++ projects) or [Visual Studio 2019 (16.11)](https://visualstudio.microsoft.com/vs/older-downloads/) (which can build v142 and Clang platform toolset VC++ projects). You can also use either a full Visual Studio install or Build Tools for Visual Studio. Be sure to install the following components.

## Visual Studio 2022

### Full Visual Studio Install for VS 2022

| Workload | Component ID (for command line install) |   
| --- | --- |  
| Game Development with C++ | Microsoft.VisualStudio.Workload.NativeGame |
| Required Component: Windows 11 SDK (10.0.22000.0) or later | Microsoft.VisualStudio.Component.Windows11SDK.22000 |
| Optional Component: MSVC v142 - VS 2019 C++ x64/x86 build tools | Microsoft.VisualStudio.ComponentGroup.VC.Tools.142.x86.x64 |
| Optional Component: C++ Clang tools for Windows | Microsoft.VisualStudio.ComponentGroup.NativeDesktop.Llvm.Clang |
| Optional: Desktop development with C++ | Microsoft.VisualStudio.Workload.NativeDesktop |

### Build Tools Visual Studio for VS 2022

| Workload | Component ID (for command line install) |   
| --- | --- |  
| Desktop development with C++ | Microsoft.VisualStudio.Workload.NativeDesktop |
| Required Component: Windows 11 SDK (10.0.22000.0) or later | Microsoft.VisualStudio.Component.Windows11SDK.22000 |
| Required Component: MSVC v143 - VS 2022 C++ x64/x86 build tools | Microsoft.VisualStudio.Component.VC.Tools.x86.x64 |
| Optional Component: MSVC v142 - VS 2019 C++ x64/x86 build tools | Microsoft.VisualStudio.ComponentGroup.VC.Tools.142.x86.x64 |
| Optional Component: C++ Clang tools for Windows | Microsoft.VisualStudio.ComponentGroup.NativeDesktop.Llvm.Clang |


## Visual Studio 2019

### Full Visual Studio Install for VS 2019

| Workload | Component ID (for command line install) |   
| --- | --- |  
| Game Development with C++ | Microsoft.VisualStudio.Workload.NativeGame |
| Required Component: Windows 11 SDK (10.0.22000.0) or later | Microsoft.VisualStudio.Component.Windows11SDK.22000 |
| Optional Component: C++ Clang-cl for Windows<br />C++ Clang-cl for v142 build tools (x64/x86) | Microsoft.VisualStudio.ComponentGroup.NativeDesktop.Llvm.Clang |
| Optional: Desktop development with C++ | Microsoft.VisualStudio.Workload.NativeDesktop |



### Build Tools Visual Studio for VS 2019

| Workload | Component ID (for command line install) |   
| --- | --- |  
| Desktop development with C++ | Microsoft.VisualStudio.Workload.NativeDesktop |
| Required Component: Windows 11 SDK (10.0.22000.0) or later | Microsoft.VisualStudio.Component.Windows11SDK.22000 |
| Required Component: MSVC v142 - VS 2019 C++ x64/x86 build tools (Latest) | Microsoft.VisualStudio.Component.VC.Tools.x86.x64 |
| Optional Component: C++ Clang-cl for Windows<br />C++ Clang-cl for v142 build tools (x64/x86) | Microsoft.VisualStudio.ComponentGroup.NativeDesktop.Llvm.Clang |
