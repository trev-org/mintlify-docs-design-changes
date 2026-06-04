---
author: joannaleecy
title: "XblPermissionDenyReasonDetails"
description: "This struct gives details about why permission is denied."
kindex: XblPermissionDenyReasonDetails
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPermissionDenyReasonDetails  

This struct gives details about why permission is denied.  

## Syntax  
  
```cpp
typedef struct XblPermissionDenyReasonDetails {  
    XblPermissionDenyReason reason;  
    XblPrivilege restrictedPrivilege;  
    XblPrivacySetting restrictedPrivacySetting;  
} XblPermissionDenyReasonDetails  
```
  
### Members  
  
*reason*  
Type: [XblPermissionDenyReason](../enums/xblpermissiondenyreason.md)  
  
Reason why permission was denied. Additional detail maybe found in restrictedPrivilege or restrictedPrivacySetting depending on what the reason is.
  
*restrictedPrivilege*  
Type: [XblPrivilege](../enums/xblprivilege.md)  
  
Active when the deny reason is either XblPermissionDenyReason::MissingPrivilege or XblPermissionDenyReason::PrivilegeRestrictsTarget. Unknown otherwise.
  
*restrictedPrivacySetting*  
Type: [XblPrivacySetting](../enums/xblprivacysetting.md)  
  
Active when the deny reason is XblPermissionDenyReason::PrivacySettingRestrictsTarget. Unknown otherwise.
  
## Member of
  
* [XblPermissionCheckResult](xblpermissioncheckresult.md)
  
## Requirements  
  
**Header:** privacy_c.h
  
## See also  
[privacy_c](../privacy_c_members.md)  
  
  
