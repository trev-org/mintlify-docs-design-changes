---
author: elroyc
title: "File type activation"
description: "Games can register file type associations in their MicrosoftGame.Config that allow the game to be launched or brought to the foreground when a user opens a file with a registered extension."
kindex: File type activation
ms.author: elroyc
ms.topic: article
edited: 03/30/2026
ms.date: 03/30/2026
permissioned-type: public
---

# File type activation

Games can register file type associations so that when a user opens a file with a registered 
extension, the game is launched if it isn't already running or brought to the foreground if it is.

### Registering file type associations

To register file type associations, the game must add a `FileTypeAssociation` element within the 
`DesktopRegistration` section of its MicrosoftGame.Config. Games can register multiple file 
extensions under a single association, as shown in the example below.

```xml
<Game configVersion="1">
   <Identity Name="ExampleGame" Publisher="CN=NoPub" Version="1.6.0.0"/>
   <ExecutableList>
      <Executable Name="mygame.exe" TargetDeviceFamily="PC" Id="Game"/>
   </ExecutableList>
   <DesktopRegistration>
      <FileTypeAssociation Name="gameAssociatedFiles" Executable="mygame.exe">
         <DisplayName>Game Supported Files</DisplayName>
         <SupportedFileTypes>
            <FileType>.awesomemapextension</FileType>
            <FileType>.mygameiscoolext</FileType>
         </SupportedFileTypes>
      </FileTypeAssociation>
   </DesktopRegistration>
   <!-- Lots of stuff excluded -->
</Game>
```

This example registers two file extensions (`.awesomemapextension` and `.mygameiscoolext`) with the 
executable `mygame.exe`. When a user opens a file with either of these extensions, the game is 
launched or brought to the foreground.

### Handling file activations

Games should register for an [XGameActivationCallback](../../reference/system/xgameactivation/functions/xgameactivationcallback.md) using [XGameActivationRegisterForEvent](../../reference/system/xgameactivation/functions/xgameactivationregisterforevent.md). 
When a file activation occurs, the callback receives an [XGameActivationInfo](../../reference/system/xgameactivation/structs/xgameactivationinfo.md) 
structure with the `type` field set to `XGameActivationType::File` and the `file` field containing the path to the file that was opened.

```cpp
#include <XTaskQueue.h>
#include <XGameActivation.h>

XTaskQueueHandle g_taskQueue;
XTaskQueueRegistrationToken g_activationToken;

void CALLBACK OnActivation(void* context, const XGameActivationInfo* activationInfo)
{
    switch (activationInfo->type)
    {
    case XGameActivationType::File:
        // activationInfo->file contains the path to the opened file.
        // e.g. Load a custom map, replay, or mod file.
        HandleFileActivation(activationInfo->file);
        break;

    case XGameActivationType::Protocol:
        HandleProtocolActivation(activationInfo->protocolUri);
        break;

    // Handle other activation types as needed...
    default:
        break;
    }
}

void InitializeGame()
{
    XGameActivationRegisterForEvent(g_taskQueue, nullptr, OnActivation, &g_activationToken);
}

void ShutdownGame()
{
    XGameActivationUnregisterForEvent(g_activationToken, true);
}
```

> [!NOTE]
> File type activation is supported on PC only. The `FileTypeAssociation` element is part of the 
`DesktopRegistration` section of MicrosoftGame.Config and does not apply to console targets.

> [!NOTE]
> The [XGameActivation](../../reference/system/xgameactivation/xgameactivation_members.md) APIs 
handle all activation types — protocol, file, and game invite — through a single callback. Games 
only need to register once with 
[XGameActivationRegisterForEvent](../../reference/system/xgameactivation/functions/xgameactivationregisterforevent.md) and check the 
[XGameActivationType](../../reference/system/xgameactivation/enums/xgameactivationtype.md) in 
the callback to determine which kind of activation occurred.


## See also

[XGameActivationRegisterForEvent](../../reference/system/xgameactivation/functions/xgameactivationregisterforevent.md)  
[XGameActivationUnregisterForEvent](../../reference/system/xgameactivation/functions/xgameactivationunregisterforevent.md)  
[XGameActivationCallback](../../reference/system/xgameactivation/functions/xgameactivationcallback.md)  
[Protocol activation](protocolactivation.md)  
[MicrosoftGame.config - FileTypeAssociation](../../reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-filetypeassociation.md)
