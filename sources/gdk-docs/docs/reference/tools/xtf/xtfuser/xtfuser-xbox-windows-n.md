---
author: aablackm
title: "XtfUser (API contents)"
description: "The XTF API that is used to manage users on a development console."
ms.assetid: N:Windows.Xbox.xtfuser
kindex: XtfUser
ms.author: stevenpr
ms.topic: article
edited: 01/06/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# XtfUser


The Xbox Tools Framework (XTF) API that is used to manage users on a development console.   

<a id="interfacesSection"></a>



  
## Interfaces  
  
| Interface | Description |  
| --- | --- |  
| [IXtfUserClient](classes/IXtfUserClient/ixtfuserclient-xtfuser-xbox-windows-t.md) | Represents an Xbox Tools Framework (XTF) user client. |  
  
## Functions  
  
| Function | Description |  
| --- | --- |  
| [XtfCreateUserClient](methods/xtfcreateuserclient-xtfuser-xbox-windows-m.md) | Initializes a new instance of the IXtfUserClient interface with the specified address. |  
  
## Structures  
  
| Structure | Description |  
| --- | --- |  
| [XTF_USER_DATA](structures/XTF_USER_DATA-xtfuser-xbox-windows-t.md) | Describes a simulated user. |  
| [XTF_USER_DATA_V2](structures/xtf_user_data_v2.md) | Describes a simulated user and the user's age. |  
  
## Enumerations  
  
| Enumeration | Description |  
| --- | --- |  
| [XTF_USER_AGE_GROUP](enumerations/xtf_user_age_group.md) | Specifies the age group of a simulated user. |  
  


To create an object that implements the IXtfUserClient interface, call [XtfCreateUserClient](methods/xtfcreateuserclient-xtfuser-xbox-windows-m.md).   