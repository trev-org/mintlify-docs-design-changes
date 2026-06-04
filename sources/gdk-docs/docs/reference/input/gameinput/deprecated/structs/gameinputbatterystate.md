---
description: Describes the current battery state of an input device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputBatteryState (Deprecated)
---

# GameInputBatteryState

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v1 and is not available in the current API.

Describes the current battery state of an input device.

## Syntax

```cpp
typedef struct GameInputBatteryState {
    GameInputBatteryStatus status;
    float chargeRate;
    float remainingCapacity;
    float fullChargeCapacity;
} GameInputBatteryState;
```

## Members

**status**\
Type: [GameInputBatteryStatus](../enums/gameinputbatterystatus.md)

The current status of the battery (e.g., charging, discharging, full).

**chargeRate**\
Type: float

The current charge rate of the battery, in Wh. A negative value indicates discharging.

**remainingCapacity**\
Type: float

The remaining battery capacity, in Wh.

**fullChargeCapacity**\
Type: float

The full charge capacity of the battery, in Wh.

## Remarks

This structure was used with the deprecated [IGameInputDevice::GetBatteryState](../interfaces/igameinputdevice/methods/igameinputdevice_getbatterystate.md) method, which was removed in v1. No direct battery state query exists in the current API.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputBatteryStatus](../enums/gameinputbatterystatus.md)
[IGameInputDevice::GetBatteryState](../interfaces/igameinputdevice/methods/igameinputdevice_getbatterystate.md)
