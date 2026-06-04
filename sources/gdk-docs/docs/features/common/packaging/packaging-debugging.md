---
author: M-Stahl
title: "Streaming installation: debugging"
description: "Describes how to pause streaming installation of a title until the debugger is connected to the title."
kindex: Streaming Installation- Debugging
ms.topic: article
edited: '08/07/2019'
ms.date: '08/01/2022'
permissioned-type: public
---

# Streaming installation: debugging

To assist with the debugging of your title, you can temporarily halt its streaming installation and connect the debugger. 

Use the following steps to pause the title's streaming installation until the debugger is connected to the title.

   1. In the application's **main** method, include the following code before any other code:<br/>

      ```cpp
      while ( !IsDebuggerPresent() )
      {
          Sleep(1000);
      }  
      ```

   1. Build the application package by using [makepkg](deployment/makepkg.md).<br/>  

   1. Register the application, and then install the titles's launch chunk by using [xbapp install (NDA topic)](../../../tools/tools-console/commandlinetools/xbapp.md#xbapp-install) (Xbox) or [wdapp install](../../../tools/tools-pc/commandlinetools/gr-wdapp.md) (PC):  
      * PC: `wdapp install /l <packagepath>`  
      * Xbox: `xbapp install /l <packagepath>`  
   1. Launch the application by using [xbapp launch (NDA topic)](../../../tools/tools-console/commandlinetools/xbapp.md) (Xbox) or [wdapp launch](../../../tools/tools-pc/commandlinetools/gr-wdapp.md) (PC):  
      * PC: `wdapp launch <appusermodelid>`  
      * Xbox: `xbapp launch <appusermodelid>`  
   1. Add a breakpoint in your Visual Studio project.  
   1. Attach the Visual Studio debugger. 
   1. Start the installation process by using [xbapp install (NDA topic)](../../../tools/tools-console/commandlinetools/xbapp.md) (Xbox) or [wdapp install](../../../tools/tools-pc/commandlinetools/gr-wdapp.md) (PC):  
      * PC: `wdapp install <packagepath>`  
      * Xbox: `xbapp install <packagepath>`  
