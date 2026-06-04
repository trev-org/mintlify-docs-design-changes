---
author: M-Stahl
title: "XGameRuntimeIsFeatureAvailable"
description: "Indicates whether a Gaming Runtime feature is available."
kindex: XGameRuntimeIsFeatureAvailable
ms.topic: reference
edited: 06/10/2019
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameRuntimeIsFeatureAvailable  

Indicates whether a Gaming Runtime feature is available.  

## Syntax  
  
```cpp
bool XGameRuntimeIsFeatureAvailable(  
         XGameRuntimeFeature feature  
)  
```  
  
### Parameters  
  
*feature* &nbsp;&nbsp;  
Type: [XGameRuntimeFeature](../enums/xgameruntimefeature.md)  
  
The Gaming Runtime feature to query.  
  
### Return value
Type: bool
  
Returns **true** if the Gaming Runtime feature is available; **false** otherwise.  
  
## Remarks
After the Gaming Runtime is initialized with [XGameRuntimeInitialize](../../xgameruntimeinit/functions/xgameruntimeinitialize.md), use this function to check whether specific Gaming Runtime features are available to your game.  
  
The following example uses the **XGameRuntimeIsFeatureAvailable** function to check whether the Async, AsyncProvider, and TaskQueue features are available. All three features are necessary for using task queues to run asynchronous tasks.  
  
```cpp
// Confirm that all of the features needed to run asynchronous tasks on 
// task queues are available.
bool Game::CheckAsyncTaskQueueFeatures()
{
    
    return (XGameRuntimeIsFeatureAvailable(XGameRuntimeFeature::XTaskQueue) &&
        XGameRuntimeIsFeatureAvailable(XGameRuntimeFeature::XAsyncProvider) &&
        XGameRuntimeIsFeatureAvailable(XGameRuntimeFeature::XAsync));

}
```

  
## Requirements  
  
**Header:** XGameRuntimeFeature.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[Gaming Runtime Glossary](../../../../gdk-dev/intro/gaming-runtime-glossary.md)  
[XGameRuntimeFeature class](../xgameruntimefeature_members.md)  
[XGameRuntimeFeature enum](../enums/xgameruntimefeature.md)  
  
