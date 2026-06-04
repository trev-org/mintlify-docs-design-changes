---
title: "Action"
description: "Physical controller actions that can be referenced"
author: M-Stahl
kindex: Touch Adaptation Kit types, Action
edited: 00/00/0000
ms.date: 12/20/2020
ms.topic: reference
permissioned-type: public
---

# Action

Physical controller actions that can be referenced.

## Action Values

| Action                 | Description                                       |
| :--------------------- | :------------------------------------------------ |
| **gamepadA**           | Press of the A button                             |
| **gamepadB**           | Press of the B button                             |
| **gamepadX**           | Press of the X button                             |
| **gamepadY**           | Press of the Y button                             |
| **view**               | Press of the view button                          |
| **menu**               | Press of the menu button                          |
| **leftBumper**         | Press of the left bumper button                   |
| **rightBumper**        | Press of the right bumper button                  |
| **dPadLeft**           | Press in the left direction of the direction pad  |
| **dPadRight**          | Press in the right direction of the direction pad |
| **dPadUp**             | Press in the up direction of the direction pad    |
| **dPadDown**           | Press in the down direction of the direction pad  |
| **leftThumb**          | Press the thumbstick of the left joystick         |
| **rightThumb**         | Press the thumbstick of the right joystick        |
| **leftTrigger**        | Press the left trigger fully                      |
| **rightTrigger**       | Press the right trigger fully                     |
| **leftJoystickRight**  | Left joystick pushed all the way right            |
| **leftJoystickLeft**   | Left joystick pushed all the way left             |
| **leftJoystickUp**     | Left joystick pushed all the way up               |
| **leftJoystickDown**   | Left joystick pushed all the way down             |
| **rightJoystickRight** | Right joystick pushed all the way right           |
| **rightJoystickLeft**  | Right joystick pushed all the way left            |
| **rightJoystickUp**    | Right joystick pushed all the way up              |
| **rightJoystickDown**  | Right joystick pushed all the way down            |

## Remarks

An `action` can be any of the buttons on a controller, the left bumper, the right bumper, the trigger, or a thumbstick click. It can also be mapped to a polar joystick action, such as a joystick being pushed all the way in a particular direction.

Controls can accept either a single `action` or an `array` of actions to represent multiple actions being take at the same time.

## Sample

#### Example 1: Action is pressing the A button

```JSON
"action": "gamepadA"
```

#### Example 2: Action is pressing the left bumper and the right bumper buttons simultaneously

```JSON
"action": [ "leftBumper", "rightBumper" ]
```

## See Also

[Touch Adaptation Kit Reference](../../../../features/common/game-streaming/game-streaming-touch-touch-adaptation-kit-overview.md)  
[Layer action](../layout/game-streaming-touch-layer-action.md)
