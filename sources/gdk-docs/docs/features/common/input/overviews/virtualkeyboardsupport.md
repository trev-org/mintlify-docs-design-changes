---
author: jgup
title: "Virtual keyboard support"
description: "Different solutions to handle text input using a virtual keyboard."
kindex: virtual keyboard support
ms.author: jgup
ms.topic: article
edited: 07/01/2025
ms.date: 11/20/2022
permissioned-type: public
---

# Virtual keyboard support

While a physically attached keyboard is a common assumption on PC, new input modalities like gamepads and touch challenge this assumption. This is especially important for handheld and console gamers. Depending on the platform, there are different solutions to bring up the virtual keyboard. While the title could implement and create its own virtual keyboard, the system provides its own virtual keyboard alternatives that are optimized for the platform and provide a consistent user experience across all games.

On Windows, the `TryShow` API can be leveraged with the new `CoreInputViewKind::Gamepad` option. The `TryHide` API can then be used to dismiss the keyboard when not needed. This is demonstrated in the following code sample:

```C
#include <winrt/windows.ui.viewmanagement.core.h>
using namespace winrt::Windows::UI::ViewManagement::Core;

// CoreInputViewKind::Gamepad enum requires headers from 26100.3624 Windows SDK or greater
// Otherwise, use static_cast<CoreInputViewKind>(7) for earlier SDKs

CoreInputView::GetForCurrentView().TryShow(CoreInputViewKind::Gamepad));

CoreInputView::GetForCurrentView().TryHide();
```

For console, the GDK provides two different solutions to handle text input using a virtual keyboard. For most games,
the best solutions is to rely on [XGameUiShowTextEntryAsync](../../../../reference/system/xgameui/functions/xgameuishowtextentryasync.md). For
games that need to render multi-line text or the input of more than 1024 characters, they can rely
on [XGameUiTextEntryOpen](../../../../reference/system/xgameui/functions/xgameuitextentryopen.md).

The following table provides a comparison between these two solutions.

| Description                  | XGameUiShowTextEntryAsync                   | XGameUiTextEntryOpen              |
|------------------------------|---------------------------------------------|-----------------------------------|
| Multi-line support           | No                                          | Yes                               |
| Maximum number of characters | 1024                                        | 1024 * 32                         |
| Input focus                  | Virtual keyboard gets input focus           | Virtual keyboard gets input focus |
| Positioning                  | Fixed position                              | Positional by the game            |
| Text rendering               | Handled by the virtual keyboard             | Handled by the game               |
| Cloud streaming behavior     | Leverage the virtual keyboard on the client | Rendered by streaming server      |

## See also

[Checklist for GDK games on Windows handheld devices - Check 3: Text Input](/gaming/gdk/docs/gdk-dev/pc-dev/handheld/handheld-guidance#check-3-text-input)
[XGameUiShowTextEntryAsync](../../../../reference/system/xgameui/functions/xgameuishowtextentryasync.md)  
[XGameUiTextEntryOpen](../../../../reference/system/xgameui/functions/xgameuitextentryopen.md)