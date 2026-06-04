---
author: AlexYatskov
description: Defines the force-feedback motor information.
edited: 03/06/2025
kindex: GameInputForceFeedbackMotorInfo
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputForceFeedbackMotorInfo
---

# GameInputForceFeedbackMotorInfo

Defines the force-feedback motor information.

## Syntax

```cpp
struct GameInputForceFeedbackMotorInfo
{
    GameInputFeedbackAxes supportedAxes;
    bool                  isConstantEffectSupported;
    bool                  isRampEffectSupported;
    bool                  isSineWaveEffectSupported;
    bool                  isSquareWaveEffectSupported;
    bool                  isTriangleWaveEffectSupported;
    bool                  isSawtoothUpWaveEffectSupported;
    bool                  isSawtoothDownWaveEffectSupported;
    bool                  isSpringEffectSupported;
    bool                  isFrictionEffectSupported;
    bool                  isDamperEffectSupported;
    bool                  isInertiaEffectSupported;
};
```

### Members

*supportedAxes*<br>
Type: [GameInputFeedbackAxes](../enums/gameinputfeedbackaxes.md)

Supported axes that the force-feedback motor can apply force.

*isConstantEffectSupported*<br>
Type: bool

Denotes whether a constant force-feedback effect is supported.

*isRampEffectSupported*<br>
Type: bool

Denotes whether a ramp force-feedback effect is supported.

*isSineWaveEffectSupported*<br>
Type: bool

Denotes whether a sine wave force-feedback effect is supported.

*isSquareWaveEffectSupported*<br>
Type: bool

Denotes whether a square wave force-feedback effect is supported.

*isTriangleWaveEffectSupported*<br>
Type: bool

Denotes whether a triangle wave force feedback-effect is supported.

*isSawtoothUpWaveEffectSupported*<br>
Type: bool

Denotes whether a sawtooth up wave force-feedback effect is supported.

*isSawtoothDownWaveEffectSupported*<br>
Type: bool

Denotes whether a sawtooth down wave force-feedback effect is supported.

*isSpringEffectSupported*<br>
Type: bool

Denotes whether a spring force-feedback effect is supported.

*isFrictionEffectSupported*<br>
Type: bool

Denotes whether a friction force-feedback effect is supported.

*isDamperEffectSupported*<br>
Type: bool

Denotes whether a damper force feedback-effect is supported.

*isInertiaEffectSupported*<br>
Type: bool

Denotes whether an inertia force-feedback effect is supported.

## Remarks

The `GameInputForceFeedbackMotorInfo` structure is a member of [GameInputDeviceInfo](gameinputdeviceinfo.md). It defines the information about a force-feedback motor and uses a pointer to the [GameInputFeedbackAxes](../enums/gameinputfeedbackaxes.md) enumeration.

On modern devices, force feedback is typically used on racing wheels with one single-axis motor connected to the steering wheel itself. However, the GameInput API supports devices with any number of force-feedback motors and assigns a unique index number to each motor on a device. The "normal" axis is used for special cases where the applied force is dimensionless, such as a pressure suit for a flight simulator.

## Requirements

**Header:** GameInput.h
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also 
 
[Advanced GameInput topics](../../../../features/common/input/advanced/input-advanced-topics.md)  
[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInputDeviceInfo](gameinputdeviceinfo.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v1** | **Removed** `location` (GameInputLocation), `locationId` (uint32_t), and `maxSimultaneousEffects` (uint32_t). |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

```cpp
struct GameInputForceFeedbackMotorInfo
{
    GameInputFeedbackAxes supportedAxes;
    GameInputLocation     location;
    uint32_t              locationId;
    uint32_t              maxSimultaneousEffects;
    bool                  isConstantEffectSupported;
    bool                  isRampEffectSupported;
    bool                  isSineWaveEffectSupported;
    bool                  isSquareWaveEffectSupported;
    bool                  isTriangleWaveEffectSupported;
    bool                  isSawtoothUpWaveEffectSupported;
    bool                  isSawtoothDownWaveEffectSupported;
    bool                  isSpringEffectSupported;
    bool                  isFrictionEffectSupported;
    bool                  isDamperEffectSupported;
    bool                  isInertiaEffectSupported;
};
```