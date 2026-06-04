---
author: TBD
title: "XAppCaptureCloseLocalStream"
description: "Closes and deletes the specified recording stream."
kindex: XAppCaptureCloseLocalStream
ms.author: TBD
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XAppCaptureCloseLocalStream  

Closes and deletes the specified recording stream.

## Syntax  

```cpp
HRESULT XAppCaptureCloseLocalStream(
  XAppCaptureLocalStreamHandle handle
)
```

### Parameters  

*handle* \_In\_  
Type: XAppCaptureLocalStreamHandle  

Handle to the recording stream to close.  

### Return value  
Type: HRESULT  
  
Function result.  

## Remarks  

Only two recordings are allowed at any given time, and once two recordings are created any further recording will return a failure until **XAppCaptureCloseLocalStream** is called on one of the streams.

## Requirements  

**Header:** XAppCapture.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  

## See also  

[XAppCapture members](../xappcapture_members.md)  