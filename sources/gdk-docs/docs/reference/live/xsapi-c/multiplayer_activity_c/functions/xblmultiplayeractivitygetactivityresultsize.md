---
author: joannaleecy
title: "XblMultiplayerActivityGetActivityResultSize"
description: "Gets the buffer size needed to store the results of a get activity call."
kindex: XblMultiplayerActivityGetActivityResultSize
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerActivityGetActivityResultSize  

Gets the buffer size needed to store the results of a get activity call.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerActivityGetActivityResultSize(  
         XAsyncBlock* async,  
         size_t* resultSizeInBytes  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The `XAsyncBlock` for this operation.  
  
*resultSizeInBytes* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
The size in bytes for the result buffer.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
To see how this function is used, see "Getting activities" in the [Activities](../../../../../services/multiplayer/mpa/how-to/live-mpa-client-how-to.md#activities) section of [Example code for Multiplayer Activity](../../../../../services/multiplayer/mpa/how-to/live-mpa-client-how-to.md). <br /><br /> For more information about multiplayer activities, see [Activities](../../../../../services/multiplayer/mpa/concepts/live-mpa-activities.md).
  
## Requirements  
  
**Header:** multiplayer_activity_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_activity_c](../multiplayer_activity_c_members.md)  
[XblMultiplayerActivityGetActivityAsync](xblmultiplayeractivitygetactivityasync.md)  
[XblMultiplayerActivityGetActivityResult](xblmultiplayeractivitygetactivityresult.md)
  
  
