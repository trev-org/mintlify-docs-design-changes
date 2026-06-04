---
author: M-Stahl
description: IGameInputReading GetSequenceNumber API reference
edited: 01/06/2020
kindex: GetSequenceNumber
ms.date: 08/01/2022
ms.topic: reference
permissioned-type: public
title: GetSequenceNumber
---

# IGameInputReading::GetSequenceNumber

Retrieve the sequence number for the input reading.  

## Syntax  
  
```cpp
uint64_t GetSequenceNumber(  
         GameInputKind inputKind  
)  
```  
  
### Parameters  
  
*inputKind* &nbsp;&nbsp;\_In\_  
Type: [GameInputKind](../../../enums/gameinputkind.md)  

  
The [GameInputKind](../../../enums/gameinputkind.md) to retrieve the sequence number for.  
While [GameInputKind](../../../enums/gameinputkind.md) is normally a flag type enum, you may only use one value for this parameter.  


  
### Return value  
Type: uint64_t

This function is not yet implemented
Currently returns 0.

Once implemented, returns the sequence number of the input reading. 
  
## Remarks  
  
Each kind of input represented by [GameInputKind](../../../enums/gameinputkind.md) maintains its own sequence number which is only updated when that inputkind's state changes. This is important because one device may have multiple input kinds which it supports and therefore also has multiple input kind views which can be interpreted from its raw input. Two sequential readings from the same device may have the same sequence number on one input kind view of the raw data, and different sequence numbers for a different input kind's interpretation of the raw data. This would indicate that the game controller gave input of some particular kind and so only that sequence number was incremented.
This function can be used to tell whether or not a particular kind of input has changed from reading to reading. The sequence number can also be used to order and differentiate between readings in the event that two readings have the same timestamp.
  
## Requirements  
  
**Header:** GameInput.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputReading](../igameinputreading.md)  
[GameInputKind](../../../enums/gameinputkind.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Re-introduced. |
| **v1** | Removed. |
| **v0** | Introduced. |