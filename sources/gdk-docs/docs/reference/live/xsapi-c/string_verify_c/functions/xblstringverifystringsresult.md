---
author: joannaleecy
title: "XblStringVerifyStringsResult"
description: "Get the result for an XblStringVerifyStringsAsync call."
kindex: XblStringVerifyStringsResult
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblStringVerifyStringsResult  

Get the result for an XblStringVerifyStringsAsync call.  

## Syntax  
  
```cpp
HRESULT XblStringVerifyStringsResult(  
         XAsyncBlock* asyncBlock,  
         size_t bufferSize,  
         void* buffer,  
         XblVerifyStringResult** ptrToBufferStrings,  
         size_t* stringsCount,  
         size_t* bufferUsed  
)  
```  
  
### Parameters  
  
*asyncBlock* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
*bufferSize* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The size of the provided buffer. Call [XblStringVerifyStringsResultSize](xblstringverifystringsresultsize.md) to get the size required.  
  
*buffer* &nbsp;&nbsp;\_Out\_writes\_bytes\_to\_(bufferSize,*bufferUsed)  
Type: void*  
  
A caller allocated byte buffer that passes back the verify strings result.  
  
*ptrToBufferStrings* &nbsp;&nbsp;\_Outptr\_  
Type: [XblVerifyStringResult**](../structs/xblverifystringresult.md)  
  
Passes back a strongly typed array of XblVerifyStringResult that points into buffer. Do not free this as its lifecycle is tied to buffer.  
  
*stringsCount* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
Passes back the number of XblVerifyStringResult results.  
  
*bufferUsed* &nbsp;&nbsp;\_Out\_opt\_  
Type: size_t*  
  
Passes back the number of bytes written to the buffer.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** string_verify_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[string_verify_c](../string_verify_c_members.md)  
  
  
