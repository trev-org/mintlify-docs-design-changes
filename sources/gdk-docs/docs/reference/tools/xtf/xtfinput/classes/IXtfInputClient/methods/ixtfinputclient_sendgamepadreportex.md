---
author: aablackm
title: "SendGamepadReportEx"
description: "Sends a controller state report to the console."
kindex: IXtfInputClient::SendGamepadReportEx
ms.author: stevenpr
ms.topic: reference
edited: 00/00/0000
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# IXtfInputClient::SendGamepadReportEx  

Sends a controller state report to the console.    

## Syntax  
  
```cpp
HRESULT SendGamepadReportEx(  
         UINT64 controllerId,  
         GAMEPAD_REPORT_EX report  
)  
```  
  
### Parameters  
  
*controllerId* &nbsp;&nbsp;  
Type: UINT64  
  
The device identifier of this [IXtfInputClient](../ixtfinputclient-xtfinput-xbox-windows-t.md).  
The controller ID is the controller ID returned by [IXtfInputClient::ConnectGamepad](connectgamepad-ixtfinputclient-xtfinput-xbox-windows-m.md).
  
*report* &nbsp;&nbsp;  
Type: [GAMEPAD_REPORT_EX](../../../structures/gamepad_report_ex.md)  
  
The controller state to report.
  
  
### Return value  
Type: HRESULT
  
HRESULT success or error code.

## Remarks  

The **SendGameReportEx** method sends a controller state represented by a [GAMEPAD_REPORT_EX](../../../structures/gamepad_report_ex.md) to a virtual controller created by [IXtfInputClient::ConnectGamepad](connectgamepad-ixtfinputclient-xtfinput-xbox-windows-m.md). You will need to send multiple states to simulate a single button press and release. To simulate a button press, call **SendGamepadReportEx** with the appropriate flag set in [GAMEPAD_REPORT_EX.Buttons](../../../structures/gamepad_report_ex.md), and then call **SendGamepadReportEx** again, with [GAMEPAD_REPORT_EX.Buttons](../../../structures/gamepad_report_ex.md) set to [GAMEPAD_BUTTONS::NONE](../../../enumerations/GAMEPAD_BUTTONS-typedef-xtfinput-xbox-windows-t.md).  

**SendGamepadReportEx** can be called at 60Hz to mimic data coming from a physical controller.
  
## Requirements  
  
**Header:** XtfInput.h
  
**Library:** xtfinput.lib  
  
**Supported platforms:** Windows (for Xbox console tools)  
  
## See also  
[XtfInput](../../../xtfinput-xbox-microsoft-n.md)  
[GAMEPAD_REPORT_EX](../../../structures/gamepad_report_ex.md)  
[IXtfInputClient::ConnectGamepad](connectgamepad-ixtfinputclient-xtfinput-xbox-windows-m.md)  
  