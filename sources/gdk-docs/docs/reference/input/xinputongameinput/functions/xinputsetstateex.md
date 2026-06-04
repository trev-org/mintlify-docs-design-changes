---
author: AlexYatskov
title: "XInputSetStateEx"
description: "Sends vibration data to the specified controller. Supports the four-motor vibration capability of newer controllers."
kindex: XInputSetStateEx
ms.topic: reference
edited: '08/08/2019'
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XInputSetStateEx  

Sends vibration data to the specified controller. Supports the four-motor vibration capability of newer controllers.

<a id="syntaxSection"></a> 

## Syntax  
  
```cpp
DWORD XInputSetStateEx(  
         DWORD dwUserIndex,  
         const XINPUT_VIBRATION_EX * pVibration  
)  
```  
  
<a id="parametersSection"></a> 

### Parameters  
  
*dwUserIndex* &nbsp;&nbsp;\_In\_  
Type: DWORD  
  
Index of the gamer associated with the device; a value in the range of 0 to `XUSER_MAX_COUNT - 1`.  
  
*pVibration* &nbsp;&nbsp;\_In\_  
Type: [XINPUT_VIBRATION_EX](../structs/xinput_vibration_ex.md)\*  
  
Pointer to an [XINPUT_VIBRATION_EX](../structs/xinput_vibration_ex.md) object that contains the vibration information to be sent to the controller.  
  
<a id="retvalSection"></a> 

### Return value  

Type: DWORD
  
If the function succeeds, it returns `ERROR_SUCCESS`.  

If the controller is not connected, the function returns `ERROR_DEVICE_NOT_CONNECTED`.  

If the function fails, it returns an error code defined in WinError.h.  
  
<a id="remarksSection"></a> 

## Remarks

Calling this function is safe even during an interaction with a two-motor controller. Any vibration setting sent to `XInputSetStateEx` for a two-motor controller will be adjusted to ensure that the controller still vibrates with its best approximation for the input sent. For this reason, we recommend that you call `XInputSetStateEx` in situations where you would call [XInputSetState](xinputsetstate.md). 

For more information, see [The XInputOnGameInput wrapper](../../../../features/common/input/porting/input-porting-xinput.md#xinputWrapperSection). 

<a id="requirementsSection"></a> 

## Requirements  
  
**Header:** XInputOnGameInput.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
<a id="seealsoSection"></a> 

## See also  

[Porting from XInput to GameInput](../../../../features/common/input/porting/input-porting-xinput.md)  
[XInputOnGameInput](../xinputongameinput_members.md)  
  
