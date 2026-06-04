---
author: M-Stahl
title: "XUserGetMsaTokenSilentlyResult"
description: "This function is now deprecated."
kindex: XUserGetMsaTokenSilentlyResult
ms.author: chuyg
ms.topic: reference
edited: 02/28/2025
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# [DEPRECATED] XUserGetMsaTokenSilentlyResult

> [!NOTE]
> This function is now deprecated.

Gets the result of a call to [XUserGetMsaTokenSilentlyAsync](xusergetmsatokensilentlyasync.md).

## Syntax

```cpp
HRESULT XUserGetMsaTokenSilentlyResult(
         XAsyncBlock* async,
         size_t resultTokenSize,
         char* resultToken,
         size_t* resultTokenUsed
)
```

## Requirements

**Header:** XUser.h

**Library:** xgameruntime.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[XUser](../xuser_members.md)

[XUserGetMsaTokenSilentlyAsync](xusergetmsatokensilentlyasync.md)

[XUserGetMsaTokenSilentlyResultSize](xusergetmsatokensilentlyresultsize.md)