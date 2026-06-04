---
author: M-Stahl
title: "XGameRuntimeGameConfigSource"
description: "Dictates how the gameConfig will be provided."
kindex: XGameRuntimeGameConfigSource
ms.author: ddobyns
ms.topic: reference
edited: 05/24/2024
quality: good
applies-to: pc-gdk
ms.date: '05/25/2024'
permissioned-type: public
---


# XGameRuntimeGameConfigSource  

This enumeration defines ways that a game config can be passed when initializing the XGameConfigRuntime. 

## Syntax  
  
```cpp
enum class XGameRuntimeGameConfigSource : uint32_t 
{ 
    Default, 
    Inline, 
    File 
}  
```  
  
### Constants

| Constant | Description |  
| --- | --- |  
| Default | The default game config for the process will be used. |
| Inline | A UTF-8 string containing the entire game config contents will be used. |
| File | A path to a game config file will be used. This can be an absolute path or a relative path relative to the current directory. |

  
## Requirements
  
**Header:** XGameRuntimeInit.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XGameRuntimeInitializeWithOptions](../functions/xgameruntimeinitializewithoptions.md)  
[XGameRuntimeOptions](../Structures/xgameruntimeoptions.md)  
[XGameRuntimeInit](../xgameruntimeinit_members.md)  
[Developing new titles using Gaming Runtime](../../../../gdk-dev/pc-dev/overviews/gr-developing-new-titles-on-gamecore.md)  
  