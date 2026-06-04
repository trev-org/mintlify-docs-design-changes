---
author: M-Stahl
title: "XUserGetMsaTokenSilentlyResultSize"
description: "This function is now deprecated."
kindex: XUserGetMsaTokenSilentlyResultSize
ms.author: chuyg
ms.topic: reference
edited: 02/28/2025
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# [DEPRECATED] XUserGetMsaTokenSilentlyResultSize

> [!NOTE]
> This function is now deprecated.

Gets the buffer size for holding the results of a call to
[XUserGetMsaTokenSilentlyAsync](xusergetmsatokensilentlyasync.md).

## Syntax

```cpp
HRESULT XUserGetMsaTokenSilentlyResultSize(
         XAsyncBlock* async,
         size_t* tokenSize
)
```

## Requirements

**Header:** XUser.h

**Library:** xgameruntime.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[XUser](../xuser_members.md)

[XUserGetMsaTokenSilentlyAsync](xusergetmsatokensilentlyasync.md)

[XUserGetMsaTokenSilentlyResult](xusergetmsatokensilentlyresult.md)