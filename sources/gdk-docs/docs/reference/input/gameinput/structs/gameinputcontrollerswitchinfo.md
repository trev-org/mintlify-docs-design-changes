---
author: AlexYatskov
description: Describes a switch on an input device.
edited: 03/06/2025
kindex: GameInputControllerSwitchInfo
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputControllerSwitchInfo
---

# GameInputControllerSwitchInfo

Describes a switch on an input device.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputControllerSwitchInfo
{
    GameInputLabel      labels[GAMEINPUT_MAX_SWITCH_STATES];
    GameInputSwitchKind kind;
};
```

<a id="membersSection"></a>

### Members

*labels*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

The labels for the switch states.

*kind*<br>
Type: [GameInputSwitchKind](../enums/gameinputswitchkind.md)

The type of the switch.

<a id="remarksSection"></a>

## Remarks

This structure is used in the [GameInputControllerInfo](gameinputcontrollerinfo.md) structure. `GameInputControllerInfo` is used by the [GameInputDeviceInfo](gameinputdeviceinfo.md) structure to describe the properties of a controller input device.

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | **Removed** `mappedInputKinds`. Replaced singular `label` with array `labels[GAMEINPUT_MAX_SWITCH_STATES]`. |
| **v1** | **Removed** `positionLabels[9]`, all legacy/raw HID and DInput fields (`legacyDInputIndex`, `legacyHidIndex`, `rawReportIndex`, raw report pointers). |
| **v0** | Introduced. |

## Appendix: Previous versions

### v1, v2

```cpp
struct GameInputControllerSwitchInfo
{
    GameInputKind       mappedInputKinds;
    GameInputLabel      label;
    GameInputSwitchKind kind;
};
```

### v0

```cpp
struct GameInputControllerSwitchInfo
{
    GameInputKind       mappedInputKinds;
    GameInputLabel      label;
    GameInputLabel      positionLabels[9];
    GameInputSwitchKind kind;
    uint8_t             legacyDInputIndex;
    uint8_t             legacyHidIndex;
    uint16_t            rawReportIndex;
};
```