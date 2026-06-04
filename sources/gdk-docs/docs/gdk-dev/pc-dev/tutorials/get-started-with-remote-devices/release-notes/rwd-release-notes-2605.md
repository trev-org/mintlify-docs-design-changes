---
author: mkmsft1
title: "Xbox PC Remote Tools: May 2026 (2605) release notes"
description: "Describes new features, improvements, and known issues in the May 2026 release of the Xbox PC Remote Tools."
kindex:
- Release notes
- Xbox PC Remote Tools
ms.topic: article
edited: 05/20/2026
ms.date: 05/20/2026
permissioned-type: public
---

# Xbox PC Remote Tools: May 2026 (2605) release notes

***Release date: May 27, 2026***

By using the Xbox PC Remote Tools, game developers can remotely provision, deploy, launch, debug, and iterate on Windows-based devices. The toolset includes the **Xbox PC Toolbox** app, the **wdRemote** and **wdEndpoint** command-line tools, the **Xbox PC Remote Iteration API**, and the **Xbox PC Remote Debugger** Visual Studio extension.

In addition to many bug fixes, this release includes the following new features and improvements:

* [Xbox PC Toolbox app](#xbox-pc-toolbox-app)

---

<a id="xbox-pc-toolbox-app"></a>

## Xbox PC Toolbox app

### Enable Windows Graphics Tools via Xbox PC Toolbox

The Xbox PC Toolbox now includes an add-ons workspace, where you can enable or disable optional development capabilities on your device. The first add-on available is the Windows Graphics Tools, which enables the D3D debug layer and GPU-based validation on your device. This feature is useful for GPU captures in PIX and specifically for surfacing D3D API validation errors.

---
 