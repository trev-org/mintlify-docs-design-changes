---
author: M-Stahl
title: "XUserGetTokenAndSignatureUtf16Async"
description: "Asynchronously retrieves Unicode X-tokens and Signatures for web requests."
kindex: XUserGetTokenAndSignatureUtf16Async
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XUserGetTokenAndSignatureUtf16Async  

API that asynchronously retrieves the X-token and Signature required to authorize an HTTPS call to the target URL. This will return an X-token and Signature if there is a Relying Party tied to the target URL in the title’s [Single Sign-on page in Partner Center](../../../../services/fundamentals/s2s-auth-calls/custom-service-config/single-sign-on/live-single-sign-on.md). Add the X-token and Signature values from the [Results version of the API](../../../../reference/system/xuser/functions/xusergettokenandsignatureutf16result.md) to the Authorization and Signature headers of the HTTPS call before making the request.

## Syntax  
  
```cpp
HRESULT XUserGetTokenAndSignatureUtf16Async(  
         XUserHandle user,  
         XUserGetTokenAndSignatureOptions options,  
         const wchar_t* method,  
         const wchar_t* url,  
         size_t headerCount,  
         const XUserGetTokenAndSignatureUtf16HttpHeader* headers,  
         size_t bodySize,  
         const void* bodyBuffer,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*user* &nbsp;&nbsp;\_In\_  
Type: XUserHandle  
  
A handle to the user that the web request is for.  
  
*options* &nbsp;&nbsp;\_In\_  
Type: [XUserGetTokenAndSignatureOptions](../enums/xusergettokenandsignatureoptions.md)  
  
Options for retrieving the user token and signature.  
  
*method* &nbsp;&nbsp;\_In\_z\_  
Type: wchar_t*  
  
The method type for the web request, in Unicode.  
  
*url* &nbsp;&nbsp;\_In\_z\_  
Type: wchar_t*  
  
The target URL of your HTTPS request. Use the full URL string for the HTTPS request. Don't abbreviate the URL.
  
*headerCount* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The number of headers in the *headers* parameter.  
  
*headers* &nbsp;&nbsp;\_In\_reads\_opt\_(headerCount)  
Type: [XUserGetTokenAndSignatureUtf16HttpHeader*](../structs/xusergettokenandsignatureutf16httpheader.md)  
  
Headers for the web request.  
  
*bodySize* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The size of the buffer in the *bodyBuffer* parameter.  
  
*bodyBuffer* &nbsp;&nbsp;\_In\_reads\_bytes\_opt\_(bodySize)  
Type: void*  
  
A buffer that contains the body of the web request.  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: XAsyncBlock*  
  
An [XAsyncBlock](../../xasync/structs/xasyncblock.md) for polling the call's status and retrieving call results.  
  
### Return value

Type: HRESULT
  
Returns S_OK if successful; otherwise, returns an error code.
For a list of error codes, see [Error Codes](../../../errorcodes.md).  
  
## Remarks

The XUserGetTokenAndSignatureUtf16Async function uses an [XUserGetTokenAndSignatureOptions](../enums/xusergettokenandsignatureoptions.md) enumeration argument to asynchronously retrieve unicode X-tokens and Signatures for web requests.

To retrieve the result of calling XUserGetTokenAndSignatureUtf16Async, call [XUserGetTokenAndSignatureUtf16Result](xusergettokenandsignatureutf16result.md).

To retrieve the required buffer size to hold the results of calling XUserGetTokenAndSignatureUtf16Async, call [XUserGetTokenAndSignatureUtf16ResultSize](xusergettokenandsignatureutf16resultsize.md).

## Requirements  
  
**Header:** XUser.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Steam Deck, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XUser](../xuser_members.md)
  
[XUserGetTokenAndSignatureUtf16Result](xusergettokenandsignatureutf16result.md)

[XUserGetTokenAndSignatureUtf16ResultSize](xusergettokenandsignatureutf16resultsize.md)
