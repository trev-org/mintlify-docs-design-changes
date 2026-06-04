---
author: M-Stahl
title: "BlobData"
description: "Basic unit (file or blob) that can written to or read by the XGameSave wrappers."
kindex: BlobData
ms.author: jgup
ms.topic: reference
ms.date: 02/23/2020
edited: 00/00/0000
applies-to: pc-gdk
quality: good
permissioned-type: public
---

# Microsoft.Xbox.Wrappers.XGameSave.BlobData  

Basic unit (file or blob) that can written to or read by the XGameSave wrappers.

## Syntax  
  
```cpp
typedef std::vector<uint8_t> BlobData;
```

## Remarks
The BlobData (blob) is the data saved by the game. It is always associated to a container that can hold multiple
blobs.
  
  
## Requirements  
  
**Header:** xgamesavewrappers.hpp
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[Provider::Load](../classes/provider/methods/xgamesave_wrapper_provider_load.md)

  