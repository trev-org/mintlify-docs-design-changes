---
author: AlexYatskov
title: "GameInput for PC and console with NuGet"
description: "GameInput for PC and console with NuGet"
kindex: GameInput NuGet
ms.author: alyatsko
ms.topic: article
edited: 02/02/2024
ms.date: 02/02/2024
permissioned-type: public
---

# GameInput for PC and console with NuGet

<a id="introductionSection"></a>

To use the latest capabilities in GameInput (v.1+), use the [Microsoft.GameInput](https://www.nuget.org/packages/Microsoft.GameInput) NuGet package to prepare Visual Studio for development. Although modern versions of Windows support GameInput out of the box, it's important to install the GameInput redistributable included in the NuGet package for both development and release to take advantage of the latest GameInput features and updates on PC.

For console, the GameInput installer isn't required as it's part of the Microsoft Game Development Kit (GDK). However, the package is still required to obtain the latest GameInput headers, and the latest static library. The new static library has the right logic to target the correct version of the GameInput runtime on console, which contains access to v.1+ features.

## GameInput redistributable for PC

<a id="redistributableSection"></a>

> [!NOTE]
> The NuGet package includes the GameInput redistributable but doesn't automatically install it.

Although modern versions of Windows support GameInput out of the box, PC games must incorporate the GameInput redistributable into their respective installers. When you install the GameInput NuGet package, it places the `GameInputRedist.msi` installer into the `packages\Microsoft.GameInput.<version>\redist` directory, which is usually found in your project's root directory.

If you're working with a GDK PC title, see the documentation regarding [Custom installation actions](../../packaging/packaging-custom-install-actions.md) for more information on how to include this package with your title upon release. If you're working with a non-GDK PC title, ensure that this redistributable is installed as part of your normal game installation.

The GameInput redistributable verifies that it doesn't result in a GameInput downgrade on the target system. While this check means that your game can run on a PC with a newer version of GameInput installed than was used for development, the GameInput APIs remain backward compatible, ensuring consistent behavior going forward.

## Provision latest GameInput in your system via WinGet

For development scenarios, the Windows Package Manager (WinGet) also makes available the GameInput redistributable, which is the same as in the [Microsoft.GameInput](https://www.nuget.org/packages/Microsoft.GameInput) NuGet package. This availability allows you to quickly provision the latest GameInput redistributable on your development machine. You can easily install the latest GameInput redistributable by running the following command in an elevated command prompt:

```powershell
winget install Microsoft.GameInput
```
