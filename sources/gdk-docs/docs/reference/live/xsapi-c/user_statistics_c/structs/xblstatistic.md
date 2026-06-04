---
author: joannaleecy
title: "XblStatistic"
description: "Contains information about a user statistic."
kindex: XblStatistic
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblStatistic  

Contains information about a user statistic.  

## Syntax  
  
```cpp
typedef struct XblStatistic {  
    const char* statisticName;  
    const char* statisticType;  
    const char* value;  
} XblStatistic  
```
  
### Members  
  
*statisticName*  
Type: const char*  
  
The name of the statistic.
  
*statisticType*  
Type: const char*  
  
The type of the statistic.
  
*value*  
Type: const char*  
  
The value of the statistic.
  
## Member of
  
[XblServiceConfigurationStatistic](xblserviceconfigurationstatistic.md)  
[XblStatisticChangeEventArgs](xblstatisticchangeeventargs.md)
  
## Requirements  
  
**Header:** user_statistics_c.h
  
## See also  
[user_statistics_c](../user_statistics_c_members.md)  
  
  
