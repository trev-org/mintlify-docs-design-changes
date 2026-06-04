---
author: jgup
title: "Protocol activation"
description: "Games can register a custom URI protocol that can be used launch their game if it isn't running and will bring the game to the foreground if the game is already running."
kindex: Protocol activation
ms.author: jgup
ms.topic: article
edited: 03/30/2026
ms.date: 11/20/2022
permissioned-type: public
---

# Protocol activation

Games can register a custom URI protocol that can be used launch their game if it isn't running 
and will bring the game to the foreground if the game is already running. 

### Registering the protocol
In order to register a custom protocol, the game must first modify their MicrosoftGame.Config. 
Games can register multiple protocols by adding them to the \<ProtocolList\> as shown in the 
example below.

```xml
<Game configVersion="1">
   <Identity Name="ExampleGame" Publisher="CN=NoPub" Version="1.6.0.0"/>
   <ProtocolList>
      <Protocol Name="awesome-custom-debug-protocol"
                Executable="SubDirectory\Test\MyExecutable_profile.exe"/>
      <Protocol Name="awesome-custom-protocol2"
                Executable="MyExecutable.exe"/>

   </ProtocolList>
   <!-- Lots of stuff excluded -->
</Game>
```
This example above registers two custom protocols. Games can then be launched using a URI such as 
the following:

```
awesome-custom-debug-protocol://Parameter1=xyz&Parameter2=abc
```

Games can then register for an [XGameActivationCallback](../../reference/system/xgameactivation/functions/xgameactivationcallback.md) callback 
that would be invoked when they are protocol activated using
[XGameActivationRegisterForEvent](../../reference/system/xgameactivation/functions/xgameactivationregisterforevent.md). Games can then parse the 
URI to read any additional parameters passed to the game.

> [!NOTE]
> While it is true that games could use 
[GetCommandLine](/windows/win32/api/processenv/nf-processenv-getcommandlinea) 
to get the same parameters, this would only work for the initial launch of the game. If the game was already 
running, the commandline arguments passed to the game will not get updated. All games wanting to leverage 
custom protocol activation should register a callback using 
[XGameActivationRegisterForEvent](../../reference/system/xgameactivation/functions/xgameactivationregisterforevent.md) and rely on that callback to 
respond to the activation.

> [!NOTE]
> All games with a title ID will always have a default protocol registered of 
the form ms-xbl-XXXXXXXX:// where XXXXXXXX is the hexadecimal form of the title ID without the leading "0x". 
This protocol is reserved for game invites. Games activated using this protocol will trigger the 
[XGameActivationCallback](../../reference/system/xgameactivation/functions/xgameactivationcallback.md) with an activation type of `AcceptedGameInvite`.


## See also

[XGameActivationRegisterForEvent](../../reference/system/xgameactivation/functions/xgameactivationregisterforevent.md)  
[XGameActivationUnregisterForEvent](../../reference/system/xgameactivation/functions/xgameactivationunregisterforevent.md)  
[XGameActivationCallback](../../reference/system/xgameactivation/functions/xgameactivationcallback.md)  
[File type activation](filetypeactivation.md)  