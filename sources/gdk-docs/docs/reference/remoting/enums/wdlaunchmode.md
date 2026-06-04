---
author: Timberhofmandi
title: "WdLaunchMode"
description: "Specifies the launch mode for a remote game."
kindex: WdLaunchMode
ms.topic: reference
edited: 02/26/2026
applies-to: pc-gdk
ms.date: '02/26/2026'
permissioned-type: public
---

# WdLaunchMode  

Specifies the launch mode for a remote game.  

## Syntax  
  
```cpp
enum class WdLaunchMode : uint32_t
{
    Immediate = 0,
    Suspended = 1
};
```  
  
### Constants  
  
| Constant | Value | Description |  
| --- | --- | --- |  
| Immediate | 0 | Launch the game immediately. This is the default mode. |  
| Suspended | 1 | Launch the game in a suspended state. The game process is created but does not begin executing until [WdResumeRemoteGame](../functions/wdresumeremotegame.md) is called. This is useful for attaching a debugger before execution begins. |

## Remarks  

This enumeration is used in the [WdLaunchOptions](../structs/wdlaunchoptions.md) structure to control how [WdLaunchRemoteGame](../functions/wdlaunchremotegame.md) starts a game on the remote device.  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdLaunchRemoteGame](../functions/wdlaunchremotegame.md)  
- [WdResumeRemoteGame](../functions/wdresumeremotegame.md)  
- [WdLaunchOptions](../structs/wdlaunchoptions.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)  
