---
author: JosephValverde
description: Creates a IGameInputMapper interface that provides the mapping information for a given input element in a input kind.
edited: 09/24/2025
kindex: CreateInputMapper
ms.author: josephva
ms.date: 09/24/2025
ms.topic: reference
permissioned-type: public
title: CreateInputMapper
---

# CreateInputMapper

Creates a IGameInputMapper interface that provides the mapping information for a given input element in a input kind.

## Syntax

```cpp
HRESULT CreateInputMapper(
    IGameInputMapper** inputMapper
)
```

### Parameters

*inputMapper* &nbsp;&nbsp;\_COM\_Outptr\_\
Type: IGameInputMapper**

The resulting [IGameInputMapper](../../igameinputmapper/igameinputmapper.md) interface that provides the mapping information for a given input element in a input kind.

### Return value

Type: HRESULT

This function returns an error result if there are insufficient hardware resources to create the mapper or if the device does not support an input kind that can be mapped.

## Remarks

The `CreateInputMapper` method creates a [IGameInputMapper](../../igameinputmapper/igameinputmapper.md) interface that provides the mapping information for a given input element in a input kind. The input kinds that generate mappings are [GameInputKindArcadeStick](../../../enums/gameinputkind.md), [GameInputKindFlightStick](../../../enums/gameinputkind.md), [GameInputKindGamepad](../../../enums/gameinputkind.md), and [GameInputKindRacingWheel](../../../enums/gameinputkind.md). If the device does not support one of these input kinds, the method returns an error result.
## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[GameInput](../../../gameinput_members.md)<br>
[IGameInputDevice](../igameinputdevice.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Introduced. |