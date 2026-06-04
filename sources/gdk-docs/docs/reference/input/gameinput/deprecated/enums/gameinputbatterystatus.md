---
description: Defines the possible battery status values for an input device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputBatteryStatus (Deprecated)
---

# GameInputBatteryStatus

> [!WARNING]
> **Deprecated.** This enumeration was removed in GameInput v1 and is not available in the current API.

Defines constants indicating the charging status of a device battery.

## Syntax

```cpp
enum GameInputBatteryStatus
{
    GameInputBatteryStatusUnknown       = -1,
    GameInputBatteryStatusNotPresent    = 0,
    GameInputBatteryStatusDischarging   = 1,
    GameInputBatteryStatusIdle          = 2,
    GameInputBatteryStatusCharging      = 3,
};
```

## Constants

| Constant | Value | Description |
| --- | --- | --- |
| GameInputBatteryStatusUnknown | -1 | Battery status cannot be determined. |
| GameInputBatteryStatusNotPresent | 0 | No battery is present (wired device). |
| GameInputBatteryStatusDischarging | 1 | Battery is discharging (in use on battery power). |
| GameInputBatteryStatusIdle | 2 | Battery is fully charged and idle. |
| GameInputBatteryStatusCharging | 3 | Battery is currently charging. |

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputBatteryState](../structs/gameinputbatterystate.md)
