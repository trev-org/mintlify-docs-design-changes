---
author: M-Stahl
title: "XGameRuntimeOptions"
description: "Options structure which can modify how the runtime is initialized."
kindex: XGameRuntimeOptions
ms.author: ddobyns
ms.topic: reference
edited: 05/24/2024
quality: good
applies-to: pc-gdk
ms.date: '05/25/2024'
permissioned-type: public
---


# XGameRuntimeOptions  

Information about the XGameRuntimeOptions structure.

## Syntax  
  
```cpp
struct XGameRuntimeOptions 
{ 
    XGameRuntimeGameConfigSource gameConfigSource; 
    const char* gameConfig; 
}  
```  
  
### Members  
_gameConfigSource_  
Type: XGameRuntimeGameConfigSource

_gameConfig_  
Type: const char*

  
## Remarks
The gameConfig field allows an app to pass a game config to the runtime. The gameConfig can be specified in different ways, as dictated by the gameConfigSource field. It may be one of:  
| Game Config Type | Interpretation |  
| --- | --- |  
| Default | gameConfig must be null here. The default game config for the process will be used. |
| Inline | gameConfig is a UTF-8 string containing the entire game config contents.  |
| File | gameConfig is a path to a game config file. This can be an absolute path or a relative path relative to the current directory.  |
  
## Requirements
  
**Header:** XGameRuntimeInit.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XGameRuntimeInitializeWithOptions](../functions/xgameruntimeinitializewithoptions.md)  
[XGameRuntimeConfigSource](../Enumerations/xgameruntimegameconfigsource.md)  
[XGameRuntimeInit](../xgameruntimeinit_members.md)  
[Developing new titles using Gaming Runtime](../../../../gdk-dev/pc-dev/overviews/gr-developing-new-titles-on-gamecore.md)  
  