---
author: M-Stahl
title: "XAsyncProvider (API contents)"
description: "Reference material for XAsyncProvider APIs."
kindex: XAsyncProvider
ms.topic: article
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XAsyncProvider  
  
Reference material for XAsyncProvider APIs.  
  
  
## Functions  
  
| Function | Description |  
| --- | --- |  
| [XAsyncBegin](functions/xasyncbegin.md) | Initializes an [XAsyncBlock](../xasync/structs/xasyncblock.md) and begins asynchronous work by an asynchronous provider. |  
| [XAsyncComplete](functions/xasynccomplete.md) | Indicates that the callback function an asynchronous provider has completed work and the results can be returned. |  
| [XAsyncGetResult](functions/xasyncgetresult.md) | Returns the results of an asynchronous call from an asynchronous provider. |  
| [XAsyncProvider](functions/xasyncprovider.md) | A callback function that implements the async call. |  
| [XAsyncSchedule](functions/xasyncschedule.md) | Schedules work for the callback function of an asynchronous provider. |  
  
## Structures  
  
| Structure | Description |  
| --- | --- |  
| [XAsyncProviderData](structs/xasyncproviderdata.md) | Represents data passed to the callback function of an asynchronous provider. |  
  
## Enumerations  
  
| Enumeration | Description |  
| --- | --- |  
| [XAsyncOp](enums/xasyncop.md) | Represents an operation code for an asynchronous provider. |  
  
  
## See also  

[System API reference](../gc-reference-system-toc.md)  
[Asynchronous Programming Design Goals and Improvements](../../../features/common/async/async-whitepaper.md)  
[Asynchronous Programming Model](../../../features/common/async/async-programming-model.md)  
