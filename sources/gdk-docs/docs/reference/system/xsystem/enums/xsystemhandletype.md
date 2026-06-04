---
author: TBD
title: "XSystemHandleType"
description: "Handle type that was created or destroyed."
kindex: XSystemHandleType
ms.author: TBD
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XSystemHandleType  

Handle type that was created or destroyed.  

## Syntax  

```cpp
enum XSystemHandleType
{
  AppCaptureScreenshotStream = 0x00,
  DisplayTimeoutDeferral = 0x01,
  GameSaveContainer = 0x02,
  GameSaveProvider = 0x03,
  GameSaveUpdate = 0x04,
  PackageInstallationMonitor = 0x05,
  PackageMount = 0x06,
  SpeechSynthesizer = 0x07,
  SpeechSynthesizerStream = 0x08,
  StoreContext = 0x09,
  StoreLicense = 0x0a,
  StoreProductQuery = 0x0b,
  TaskQueue = 0x0c,
  User = 0x0d,
  UserSignOutDeferral = 0x0e,
  GameUiTextEntry = 0x0f,
}
```

## Constants  

| Constant | Description |
| -------- | ----------- |
| AppCaptureScreenshotStream | Handle used by [XAppCapture](../../xappcapture/xappcapture_members.md)  |
| DisplayTimeoutDeferral | Handle used by [XDisplay](../../xdisplay/xdisplay_members.md) |
| GameSaveContainer | Handle used by [XGameSave containers](../../xgamesave/xgamesave_members.md) |
| GameSaveProvider | Handle used by [XGameSave provider](../../xgamesave/xgamesave_members.md) |
| GameSaveUpdate | Handle used by [XGameSave update](../../xgamesave/xgamesave_members.md)  |
| PackageInstallationMonitor | Handle used by [XPackage installation monitor](../../xpackage/xpackage_members.md)  |
| PackageMount | Handle used [to track mounted XPackages](../../xpackage/xpackage_members.md)  |
| SpeechSynthesizer | Handle used by [XSpeechSynthesis](../../xspeechsynthesizer/xspeechsynthesizer_members.md)  |
| SpeechSynthesizerStream | Handle used by [XSpeechSynthesis](../../xspeechsynthesizer/xspeechsynthesizer_members.md)  |
| StoreContext | Handle used by [XStore](../../xstore/xstore_members.md)  |
| StoreLicense | Handle used by [XStore](../../xstore/xstore_members.md)  |
| StoreProductQuery | Handle used by [XStore](../../xstore/xstore_members.md)  |
| TaskQueue | Handle used by [XTaskQueue](../../xtaskqueue/xtaskqueue_members.md)  |
| User | Handle used by [XUser](../../xuser/xuser_members.md)  |
| UserSignOutDeferral | Handle used by [XUserGetSignOutDeferral](../../xuser/functions/xusergetsignoutdeferral.md)  |
| GameUiTextEntry | Handle used by [XGameUiTextEntryOpen](../../xgameui/functions/xgameuitextentryopen.md) |


## Requirements

**Header:** XSystem.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also  

[XSystem members](../xsystem_members.md)  