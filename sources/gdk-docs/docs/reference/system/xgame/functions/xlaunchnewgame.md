---
author: M-Stahl
title: "XLaunchNewGame"
description: "Ends the current game, freeing any allocated resources, and launches a new game."
kindex: XLaunchNewGame
ms.topic: reference
edited: '08/01/2019'
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XLaunchNewGame  

Ends the current game, frees any allocated resources, and launches a new game.  
  
## Syntax  
  
```cpp
void XLaunchNewGame(  
         const char* exePath,  
         const char* args,  
         XUserHandle defaultUser  
)  
```  
  
### Parameters  
  
*exePath* &nbsp;&nbsp;\_In\_z\_  
Type: char*  
  
The path and file name of the new game to launch. This path can be either relative to the current directory or an absolute path. Games that need to know the path to the calling executable can call [GetModuleFileNameA](/windows/win32/api/libloaderapi/nf-libloaderapi-getmodulefilenamea) with a nullptr for the module handle.
  
*args* &nbsp;&nbsp;\_In\_opt\_z\_  
Type: char*  
  
Any applicable, game-specific arguments with which to launch the new game.  
  
*defaultUser* &nbsp;&nbsp;\_In\_opt\_  
Type: XUserHandle  
  
The handle of the user launching the new game. If a value isn't specified, the current user is 
specified.  
  
### Return value
Type: void
  
This function does not return a value or raise exceptions, even if it's unable to restart the game.  
  
## Remarks  
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more 
information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
This function restarts the game, ends the game's current process, and restarts the game by using a 
new process. The game is restarted without restarting the virtual machine on which the game is 
running. You have the option to specify a different default user and game-specific arguments with 
which the game is to be restarted; for details on specifying a different default user, see [User 
identity and XUser](../../../../features/common/user/player-identity-xuser.md).  
  
The current process is always terminated, even if the function encounters an error while launching a
new game. For example, if any value specified for *exePath*, *args*, or *defaultUser* is not valid,
the function does not return a value or raise an exception.

> [!NOTE]
> When this function is called, all previously mounted DLC will get 
unmounted with the exception being the DLC hosting the target of **XLaunchNewGame**. The **G:**
drive will continue to point at the root of the base package and not the newly launched EXE.

> [!NOTE]
> If a game is suspended after **XLaunchNewGame** is called but prior to
 the newly launched game setting up its suspend handler, the game will get terminated. This is a 
very narrow window of time and in practice should be a very unlikely occurrence.

> [!NOTE]
> Memory transferred to the system using [XMemTransferMemory (NDA topic)](../../xmem/functions/xmemtransfermemory.md) is persisted. 
  
## Requirements  
  
**Header:** XGame.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XGame](../xgame_members.md)  
[User identity and XUser](../../../../features/common/user/player-identity-xuser.md)  
[XLaunchUri](../../xlauncher/functions/xlaunchuri.md)  
  
