---
author: M-Stahl
title: "XUserGetMsaTokenSilentlyAsync"
description: "This function is now deprecated."
kindex: XUserGetMsaTokenSilentlyAsync
ms.author: chuyg
ms.topic: reference
edited: 02/28/2025
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# [DEPRECATED] XUserGetMsaTokenSilentlyAsync

> [!NOTE]
> This function is now deprecated.

Asynchronously retrieves the users MSA token.

## Syntax

```cpp
HRESULT XUserGetMsaTokenSilentlyAsync(
         XUserHandle user,
		 XUserGetMsaTokenSilentlyOptions options,
         const char* scope,
         XAsyncBlock* async
)
```

## Requirements

**Header:** XUser.h

**Library:** xgameruntime.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[XUser](../xuser_members.md)

[XUserGetMsaTokenSilentlyResult](xusergetmsatokensilentlyresult.md)

[XUserGetMsaTokenSilentlyOptions](../enums/xusergetmsatokensilentlyoptions.md)