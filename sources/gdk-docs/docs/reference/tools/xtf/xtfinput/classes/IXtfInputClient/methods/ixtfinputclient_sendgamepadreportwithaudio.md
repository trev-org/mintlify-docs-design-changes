---
author: TBD
title: "SendGamepadReportWithAudio"
description: "Sends a controller state report to the console."
kindex:
- SendGamepadReportWithAudio
- IXtfInputClient::SendGamepadReportWithAudio
ms.author: TBD
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# IXtfInputClient::SendGamepadReportWithAudio  

Sends a controller state report to the console.    

## Syntax  
  
```cpp
HRESULT SendGamepadReportWithAudio(  
         UINT64 controllerId,  
         GAMEPAD_REPORT_EX report,  
         INT32 audioType,  
         SAFEARRAY* audioData  
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
  
*audioType* &nbsp;&nbsp;  
Type: INT32  
  
TBD    
  
*audioData* &nbsp;&nbsp;  
Type: SAFEARRAY*  
  
TBD    
  
  
### Return value  
Type: HRESULT
  
HRESULT success or error code.  
  
## Requirements  
  
**Header:** XtfInput.h
  
**Library:** xtfinput.lib  
  
**Supported platforms:** Windows (for Xbox console tools)    

## See also  
[XtfInput](../../../xtfinput-xbox-microsoft-n.md)  
  
  