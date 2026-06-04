---
author: joannaleecy
title: "HCInitArgs data structure"
description: "Used to wrap the JavaVM and ApplicationContext on Android devices."
kindex: HCInitArgs
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# HCInitArgs data structure 

Used to wrap the JavaVM and ApplicationContext on Android devices.  

## Syntax  
  
```cpp
typedef struct HCInitArgs {  
    JavaVM *javaVM;  
    jobject applicationContext;  
} HCInitArgs  
```
  
### Members  
  
**javaVM*  
Type: JavaVM  
  
The Java Virtual machine.
  
*applicationContext*  
Type: jobject  
  
The Java Application Context.
  
## Requirements  
  
**Header:** httpClient.h
  
## See also  
[httpClient](../httpclient_members.md)  
  
  
