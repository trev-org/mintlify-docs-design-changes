---
author: M-Stahl
title: "XUserGetTokenAndSignatureUtf16Result"
description: "Gets the result of a call to XUserGetTokenAndSignatureUtf16Async."
kindex: XUserGetTokenAndSignatureUtf16Result
ms.topic: reference
edited: 01/02/2026
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XUserGetTokenAndSignatureUtf16Result

Gets the result of a call to [XUserGetTokenAndSignatureUtf16Async](xusergettokenandsignatureutf16async.md).

## Syntax  
  
```cpp
HRESULT XUserGetTokenAndSignatureUtf16Result(  
         XAsyncBlock* async,  
         size_t bufferSize,  
         void* buffer,  
         XUserGetTokenAndSignatureUtf16Data** ptrToBuffer,  
         size_t* bufferUsed  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: XAsyncBlock*  
  
An [XAsyncBlock](../../xasync/structs/xasyncblock.md) for polling the call's status and retrieving call results.  
  
*bufferSize* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The size of the buffer in the *buffer* parameter.  
  
*buffer* &nbsp;&nbsp;\_Out\_writes\_bytes\_to\_(bufferSize,*bufferUsed)  
Type: void*  
  
Contains the results of the call to [XUserGetTokenAndSignatureUtf16Async](xusergettokenandsignatureutf16async.md).  
  
*ptrToBuffer* &nbsp;&nbsp;\_Outptr\_  
Type: [XUserGetTokenAndSignatureUtf16Data**](../structs/xusergettokenandsignatureutf16data.md)  
  
On return, *prtToBuffer* points to the buffer you specify in the *buffer* parameter. The parameter provides a typed pointer to *buffer* and doesn't need to be freed independently.  
  
*bufferUsed* &nbsp;&nbsp;\_Out\_opt\_  
Type: size_t*  
  
The number of bytes written in the *buffer* parameter.  
  
### Return value

### Return value

Type: HRESULT
  
Returns S_OK if successful; otherwise, returns an error code.

| HRESULT | Message ID | Description |
| ---------- | --- | --- |
| 0x80072EE7 | WININET_E_NAME_NOT_RESOLVED | The server name or address couldn't be resolved. |
| 0x80072EFD | WININET_E_CANNOT_CONNECT | A connection with the server couldn't be established. |
| 0x80072EFE | WININET_E_CONNECTION_ABORTED | The connection with the server was terminated abnormally. |
| 0x80072F8F | WININET_E_DECODING_FAILED | Content decoding failed. |
| 0x8015DC01 | XO_E_SYSTEM_UPDATE_REQUIRED | System must be updated before being allowed to grant X-tokens. |
| 0x8015DC0B | XO_E_ACCOUNT_COUNTRY_NOT_AUTHORIZED | Title trying to be used in a country/region it isn't authorized for. |
| 0x8015DBFF | XO_E_GAME_USAGE_BY_USER_EXCEEDED | User exceeded their allotted time allowed to play the game (parental controls). |
| 0x80860006 | ONL_E_FORCESIGNIN | To help protect your Online ID account, you must sign in again. |
| 0x87DD0006 | AM_E_XSTS_UNEXPECTED | Unknown error occurred. |
| 0x87DD0013 | AM_E_USER_NOT_FOUND | User object is no longer signed in or is unknown. |
| 0x87DD0019 | AM_E_XSTS_TIMEOUT | Timeout limit hit when trying to retrieve the X-token. |
| 0x87DD0022 | AM_E_XTITLE_TIMEOUT | |
| 0x87DD0033 | AM_E_XSTS_SERVICE_UNAVAILABLE | The X token service is unable to be reached. |

For a list of other error codes, see [Error Codes](../../../errorcodes.md).  
  
## Remarks

The XUserGetTokenAndSignatureUtf16Async function uses an [XUserGetTokenAndSignatureOptions](../enums/xusergettokenandsignatureoptions.md) enumeration argument to asynchronously retrieve unicode X-tokens and signatures for web requests.

To asynchronously retrieve Unicode X-tokens and signatures for web requests, call
[XUserGetTokenAndSignatureUtf16Async](xusergettokenandsignatureutf16async.md).

To retrieve the required buffer size to hold the results of calling [XUserGetTokenAndSignatureUtf16Async](xusergettokenandsignatureutf16async.md), call [XUserGetTokenAndSignatureUtf16ResultSize](xusergettokenandsignatureutf16resultsize.md).

## Requirements  
  
**Header:** XUser.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Steam Deck, Xbox One family consoles, and Xbox Series consoles  
  
## See also

[XUser](../xuser_members.md)
  
[XUserGetTokenAndSignatureUtf16Async](xusergettokenandsignatureutf16async.md)

[XUserGetTokenAndSignatureUtf16ResultSize](xusergettokenandsignatureutf16resultsize.md)
