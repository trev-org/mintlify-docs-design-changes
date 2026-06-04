---
author: JosephValverde
description: Describes how an axis maps to the controller.
edited: 09/18/2025
kindex: GameInputAxisMapping
ms.author: josephva
ms.date: 09/18/2025
ms.topic: reference
permissioned-type: public
title: GameInputAxisMapping
---

# GameInputAxisMapping

Describes how an axis maps to the controller.

## Syntax

```cpp
struct GameInputAxisMapping {
    GameInputElementKind controllerElementKind;
    uint32_t             controllerIndex;

    // When axis is mapped from a axis
    bool isInverted;

    // When the axis is mapped from a button
    bool     fromTwoButtons;
    uint32_t buttonMinIndexValue;

    // When the axis is mapped from a switch
    GameInputSwitchPosition referenceDirection;
};
```

### Members

*controllerElementKind*<br>
Type: [GameInputElementKind](../enums/gameinputelementkind.md)

The kind of controller element that the axis is mapped from.

*controllerIndex*<br>
Type: uint32_t

The index of the controller element that the axis is mapped from. The index is zero-based and is relative to other elements of the same kind. This index is relevant whether the axis is mapped from another axis, buttons, or a switch.

*isInverted*<br>
Type: bool
Indicates whether the axis is inverted. For example if the range of values given is [0 - 1], where 0 is neutral and 1 is full displacement, then 1 is expected to stand for neutral position, 0 for full displacement and values in between inverted. This member is only valid when the axis is mapped from another axis.

*fromTwoButtons*<br>
Type: bool

Indicates whether the axis is mapped from two buttons. This member is only valid when the axis is mapped from buttons. If this is true, then the index field is the button max value and the buttonMinIndexValue field is the button min value.

*buttonMinIndexValue*<br>
Type: uint32_t

The index of the button that represents the minimum value of the axis. The index is zero-based. This member is only valid when the axis is mapped from two buttons.

*referenceDirection*<br>
Type: [GameInputSwitchPosition](../enums/gameinputswitchposition.md)

The switch position that represents the positive direction of the axis. The reference position is expected to map to axis value `1.0` and the opposite direction to axis value `0.0`. In between values can differ. If adjacents are considered, then immediate adjacents are also expected to be mapped to `1.0`, and following value to `0.5`, if these are not considered, then all non-reference positions except the opposite direction are mapped to `0.5`. This member is only valid when the axis is mapped from a switch.

## Remarks

This mapping information shares internal information provided by the device or protocol about how it expects to be interpreted for a given input. In some cases we do not share the totality of this information and instead share what is most relevant to generate a mapping for the given input.

For axes we allow these to be mapped from an axis, buttons or a switch. Which input is the source is given by *controllerElementKind*. For all source element kinds the index of the source input is given by *controllerIndex*. This index can then be used with either controller axes, buttons, or switches according to the *controllerElementKind* value.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See Also

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)<br>

[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | **New struct** introduced in the current API. Not present in v0, v1, or v2. |