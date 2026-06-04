---
author: M-Stahl
title: "XVersion"
description: "Represents a four-part version number."
kindex: XVersion
ms.topic: reference
edited: 06/10/2019
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XVersion  

Represents a four-part version number.  

## Syntax  
  
```cpp
typedef struct XVersion {  
    union
    {
        struct
        {
            uint16_t major;  
            uint16_t minor;  
            uint16_t build;  
            uint16_t revision;
        };
        uint64_t Value;
    };
} XVersion  
```
  
### Members  
  
*major*  
Type: uint16_t  
  
The major version number.  
  
*minor*  
Type: uint16_t  
  
The minor version number.  
  
*build*  
Type: uint16_t  
  
The build number.  
  
*revision*  
Type: uint16_t  
  
The revision number.  

*Value*
Type: uint64_t

64-bit packed integer that represents the 4-part version.
  
## Remarks  
  
Gaming Runtime features use the **XVersion** structure to represent the version information. The [XSystemAnalyticsInfo](../../xsystem/structs/xsystemanalyticsinfo.md) and [XSystemRuntimeInfo](../../xsystem/structs/xsystemruntimeinfo.md) 
structures use **XVersion** to represent versions for operating system and the gaming runtime. In 
addition, the [XPackageDetails](../../xpackage/structs/xpackagedetails.md) structure uses **XVersion** to represent a 
package's version.  
  
## Requirements  
  
**Header:** XGameRuntimeTypes.h
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XPackageDetails](../../xpackage/structs/xpackagedetails.md)  
[XSystemAnalyticsInfo](../../xsystem/structs/xsystemanalyticsinfo.md)  
[XSystemRuntimeInfo](../../xsystem/structs/xsystemruntimeinfo.md) 
[XGameRuntimeTypes](../xgameruntimetypes_members.md)  
  
