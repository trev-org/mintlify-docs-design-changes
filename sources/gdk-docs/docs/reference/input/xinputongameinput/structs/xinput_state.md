---
author: AlexYatskov
title: "XINPUT_STATE"
description: "Describes the state of a controller."
kindex: XINPUT_STATE
ms.topic: reference
edited: '08/08/2019'
ms.date: '08/01/2022'
permissioned-type: public
---

# XINPUT_STATE  

Describes the state of a controller.  

<a id="syntaxSection"></a> 

## Syntax  
  
```cpp
typedef struct XINPUT_STATE {  
    DWORD dwPacketNumber;  
    XINPUT_GAMEPAD Gamepad;  
} XINPUT_STATE  
```
  
<a id="membersSection"></a>

### Members  
  
*dwPacketNumber*  
Type: DWORD  
  
State packet number. The packet number indicates whether the state of the controller has changed. If the value is the same in sequentially returned `XINPUT_STATE` objects, the controller state has not changed.  
  
*Gamepad*  
Type: [XINPUT_GAMEPAD](xinput_gamepad.md)  
  
[XINPUT_GAMEPAD](xinput_gamepad.md) object that contains the current state of a controller.  
  
<a id="remarksSection"></a> 

## Remarks

The value of *dwPacketNumber* is incremented only if the state of the controller changed since the controller was last polled. 

This structure is used by the [XInputGetState](../functions/xinputgetstate.md) and [XInputGetStateWithToken](../functions/xinputgetstatewithtoken.md) functions. 

For more information, see [The XInputOnGameInput wrapper](../../../../features/common/input/porting/input-porting-xinput.md#xinputWrapperSection). 

<a id="requirementsSection"></a> 

## Requirements  
  
**Header:** XInputOnGameInput.h
  
**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
<a id="seealsoSection"></a> 

## See also  

[Porting from XInput to GameInput](../../../../features/common/input/porting/input-porting-xinput.md)  
[XInputOnGameInput](../xinputongameinput_members.md)  
  
