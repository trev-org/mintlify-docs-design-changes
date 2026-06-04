---
author: M-Stahl
title: "xcurl_global_suspend"
description: "Terminates active web requests, and prevents new requests from being sent."
kindex: xcurl_global_suspend
ms.author: jameslen
ms.topic: reference
edited: 06/17/2022
ms.date: '08/01/2022'
permissioned-type: public
---

# xcurl_global_suspend

Terminates active web requests, and prevents new requests from being sent.

<a id="syntaxSection"></a>

## Syntax

```cpp
void xcurl_global_suspend(
)
```

<a id="parametersSection"></a>

### Parameters

None.

<a id="retvalSection"></a>

### Return value

None.

<a id="remarksSection"></a>

## Remarks

> [!CAUTION]  
> As of the April 2021 GDK, suspend and resume is now automatically handled internally within XCurl. This 
> function is still safe to call, but it is a no-op. The below remarks apply only to versions of the GDK before the
> April 2021 GDK.

This function aborts all HTTP requests from easy handles, and it prevents you from sending new HTTP requests.

To resume sending HTTP requests once again, call the function [xcurl_global_resume](xcurl_global_resume.md).

Just as with WinHttp, you must clean up networking and HTTP handles upon receiving a suspend event.

<a id="requirementsSection"></a>

## Requirements

**Header:** XCurl.h

**Library:** xcurl.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  

<a id="seealsoSection"></a>

## See also

[XCurl Overview](../../../../features/console/networking/web-requests/intro-xcurl.md)  
[HTTP and Web Sockets](../../../../features/console/networking/web-requests/http-networking.md)  
[curl](https://curl.se/)  
[xcurl_global_resume](xcurl_global_resume.md)  