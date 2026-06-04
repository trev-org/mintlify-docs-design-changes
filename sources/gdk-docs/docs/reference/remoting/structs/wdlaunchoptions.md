---
author: Timberhofmandi
title: "WdLaunchOptions"
description: "Specifies options for launching a game on a remote device."
kindex: WdLaunchOptions
ms.topic: reference
edited: 02/12/2026
applies-to: pc-gdk
ms.date: '02/12/2026'
permissioned-type: public
---

# WdLaunchOptions  

Specifies options for launching a game on a remote device.  

## Syntax  
  
```cpp
struct WdLaunchOptions
{
    WdLaunchMode launchMode;
    const char* commonRootAlias;
};
```  
  
### Members  
  
`launchMode`  
Type: **[WdLaunchMode](../enums/wdlaunchmode.md)**  

The launch mode for the game. Use `WdLaunchMode::Immediate` to start the game immediately, or `WdLaunchMod::Suspended` to start it in a suspended state (useful for attaching a debugger before execution begins).  

`commonRootAlias`  
Type: **const char\***  

An optional common root alias. Pass `nullptr` to use the default alias.  

## Remarks  

Pass this structure to [WdLaunchRemoteGame](../functions/wdlaunchremotegame.md) via the `launchOptions` parameter to control how the game is launched. If `nullptr` is passed for `launchOptions`, the game is launched immediately with no common root alias.  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdLaunchRemoteGame](../functions/wdlaunchremotegame.md)  
- [WdLaunchMode](../enums/wdlaunchmode.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)  
