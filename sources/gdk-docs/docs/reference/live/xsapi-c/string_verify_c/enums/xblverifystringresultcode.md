---
author: joannaleecy
title: "XblVerifyStringResultCode"
description: "Enumeration values that indicate the result code from string verification."
kindex: XblVerifyStringResultCode
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblVerifyStringResultCode  

Enumeration values that indicate the result code from string verification.    

## Syntax  
  
```cpp
enum class XblVerifyStringResultCode    
{  
    Success,  
    Offensive,  
    TooLong,  
    UnknownError  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| Success | No issues were found with the string. |  
| Offensive | The string contains offensive content. |  
| TooLong | The string is too long to verify. |  
| UnknownError | An unknown error was encountered during string verification. |  
  
## Remarks  
  
These values are defined on the service side and should not be modified.
  
## Argument of
  
[XblVerifyStringResult](../structs/xblverifystringresult.md)
  
## Requirements  
  
**Header:** string_verify_c.h
  
## See also  
[string_verify_c](../string_verify_c_members.md)  
  
  
