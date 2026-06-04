---
author: JosephValverde
description: Describes how a button maps to the controller.
edited: 09/18/2025
kindex: GameInputButtonMapping
ms.author: josephva
ms.date: 09/18/2025
ms.topic: reference
permissioned-type: public
title: GameInputButtonMapping
---

# GameInputButtonMapping

Describes how a button maps to the controller.

## Syntax

```cpp
struct GameInputButtonMapping {
    GameInputElementKind controllerElementKind;
    uint32_t             controllerIndex;

    // When the button is mapped from an axis
    bool isInverted;

    // Button mapped from button only needs the index

    // When the button is mapped from a switch
    GameInputSwitchPosition switchPosition;
};
```

### Members

*controllerElementKind*<br>
Type: [GameInputElementKind](../enums/gameinputelementkind.md)

The kind of controller element that the button is mapped from.

*controllerIndex*<br>
Type: uint32_t

The index of the controller element that the button is mapped from. The index is zero-based and is relative to other elements of the same kind. This index is relevant whether the button is mapped from an axis, another button, or a switch.

*isInverted*<br>
Type: bool

Indicates whether the axis value is inverted before being translated to a button value. For example if the range of values given by the axis is [0 - 1], where 0 is not pressed and 1 is pressed, then 1 is expected to stand for not pressed and 0 for pressed. This member is only valid when the button is mapped from an axis.

*switchPosition*<br>
Type: [GameInputSwitchPosition](../enums/gameinputswitchposition.md)

The position of the switch that the button is mapped from. When a given switch on this switch position is pressed, then the button is considered pressed. This member is only valid when the button is mapped from a switch.

## Remarks

This mapping information shares internal information provided by the device or protocol about how it expects to be interpreted for a given input. In some cases we do not share the totality of this information and instead share what is most relevant to generate a mapping for the given input.

For buttons we allow these to be mapped from an axis, another button, or a switch. Which input is the source is given by *controllerElementKind*. For all source element kinds the index of the source input is given by *controllerIndex*. This index can then be used with either controller axes, buttons, or switches according to the *controllerElementKind* value.

## See Also

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)<br>

[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Introduced. |