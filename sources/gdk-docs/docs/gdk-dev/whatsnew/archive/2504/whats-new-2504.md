---
author: M-Stahl
title: "What's new in the April 2025 Microsoft Game Development Kit (GDK)"
description: "Describes changes to features, tools, and documentation in the latest release."
kindex:
- Latest What's New
- What's New
- Release notes
ms.topic: article
edited: '08/13/2019'
ms.date: '08/01/2022'
permissioned-type: public
---
  
# What's new in the April 2025 Microsoft Game Development Kit  
  
The Microsoft Game Development Kit (GDK) is a complete set of tools, APIs, extensions, and programming models that can be used across current and future Microsoft Gaming platforms and initiatives. Microsoft Game Development Kit (GDK) design and features are driven by your feedback about how you like to develop games. For a complete introduction, see [Welcome to the Microsoft Game Development Kit](../../../intro/welcome.md). 

Watch the following video for a quick look at what's new in the April 2025 GDK:

>[!VIDEO https://www.youtube.com/embed/Mlca0cKIqQc]

The [GDKX &#124; Roadmap](https://aka.ms/gdkroadmap) for this and future releases of the Microsoft Game Development Kit (GDK) can be found on the Xbox Developer Forums. Release notes for the current release of the Microsoft Game Development Kit (GDK) can also be found in the [GDK/XDK Release notes space](https://aka.ms/gdkreleasenotes) on the Xbox Developer Forums.  
  
In addition to many bug fixes, this release includes the following new features.  

<!--  
> [!IMPORTANT]  
> This topic includes features that are public. For What's New information that requires NDA access, see [What's new in the October 2024 Microsoft Game Development Kit - NDA Features](whats-new-nda.md).  
-->
  
## Table of Contents  
  
  
[Developer tools](#ID_TOOLS)  
[PIX](#ID_PIX)  
[Samples](#ID_SAMPLES)  
  
___
<a id="ID_TOOLS"></a>  
### Developer tools  
  
**Submission Validator**  
Submission Validator now enforces approved GDK versions for PC titles for more information go to https://aka.ms/EmbeddedGDKVersion. 
Submission Validator now checks your package size. We will issue a WARNING at 450GB and an ERROR at 500GB.  

**WdCapture(Screenshot) CLI support**  
This feature is a PC Command Line Interface( CLI ) tool designed to capture screenshots on PC using windows graphics APIs. It supports both SDR AND HDR format and saves file captures in PNG or JXR format. Users can specify file paths to save screenshots and specify the display for capture.  

**Visual Studio 2022 C++ Dynamic Debugging Support**  
C++ Dynamic Debugging offers a full debugging experience for optimized code without compromising performance. Place deoptimized breakpoints and step in anywhere with on-demand function deoptimization. To activate C++ Dynamic Debugging: Right-click on your project, Properties > Configuration Properties > Advanced > Advanced Properties > **Use C++ Dynamic Debugging (preview)**. Version 17.14 Preview 2 or newer of Visual Studio 2022 is required to use the dynamic debugging feature. Goto https://aka.ms/dynamicdebugging to learn more.  
Please note that as of the April 2025 GDK release, the aforementioned version of Visual Studio has not yet been released. This will be available when the updated version of Visual Studio is available.  

___
<a id="ID_PIX"></a>  
### PIX  
  
**Changes to PIX events that include a Direct3D context**  
Prior to the April 2504 GDKx, calls to PIXBeginEvent and PIXEndEvent that include a Direct3D context were required to be called from the same CPU thread. Starting with the April 2025 GDKx, PIXBeginEvent and PIXEndEvent calls that include a context may now be made on different CPU threads. With this change, the starting and ending times for the corresponding CPU work will be rendered differently on the CPU threads in the timeline. Rather than denoting the start and ends times of the CPU work with a PIX event, the start and end times are now shown as PIX markers.  

___
<a id="ID_SAMPLES"></a>  
### Samples  
  
For a complete list of samples included with the Microsoft Game Development Kit (GDK), see [Microsoft Game Development Kit samples](../../../development-downloads/gdk-samples-home.md).  
