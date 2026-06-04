---
author: XBL
title: "XblSocialManagerUser"
description: "Xbox Social User that contains profile, presence, preferred color, and title history data."
kindex: XblSocialManagerUser
ms.author: tculotta
ms.topic: reference
security: public
edited: 00/00/0000
applies-to: pc-gdk
---

# XblSocialManagerUser  

Xbox Social User that contains profile, presence, preferred color, and title history data.  

## Syntax  
  
```cpp
typedef struct XblSocialManagerUser {  
    uint64_t xboxUserId;  
    bool isFavorite;  
    bool isFriend;  
    bool isFollowingUser;  
    bool isFollowedByCaller;  
    char displayName[XBL_DISPLAY_NAME_CHAR_SIZE];  
    char realName[XBL_REAL_NAME_CHAR_SIZE];  
    char displayPicUrlRaw[XBL_DISPLAY_PIC_URL_RAW_CHAR_SIZE];  
    bool useAvatar;  
    char gamerscore[XBL_GAMERSCORE_CHAR_SIZE];  
    char gamertag[XBL_GAMERTAG_CHAR_SIZE];  
    char modernGamertag[XBL_MODERN_GAMERTAG_CHAR_SIZE];  
    char modernGamertagSuffix[XBL_MODERN_GAMERTAG_SUFFIX_CHAR_SIZE];  
    char uniqueModernGamertag[XBL_UNIQUE_MODERN_GAMERTAG_CHAR_SIZE];  
    XblSocialManagerPresenceRecord presenceRecord;  
    XblTitleHistory titleHistory;  
    XblPreferredColor preferredColor;  
} XblSocialManagerUser  
```
  
### Members  
  
*xboxUserId*  
Type: uint64_t  
  
The xbox user id.
  
*isFavorite*  
Type: bool  
  
Whether they are a favorite.
  
*isFriend*  
Type: bool  
  
Indicates whether there exists a mutual follower/following relation between a user and another user
  
*isFollowingUser*  
Type: bool  
  
No longer indicates whether a calling user is following a given user. Kept for backwards compatibility purposes. The value of this field is determined by the value of 'isFriend'
  
*isFollowedByCaller*  
Type: bool  
  
No longer indicates whether a calling user is followed by given user. Kept for backwards compatibility purposes. The value of this field is determined by the value of 'isFriend'
  
*displayName*  
Type: char[XBL_DISPLAY_NAME_CHAR_SIZE]  
  
The UTF-8 encoded display name. Many batch operations performed by XblSocialManager will not return a displayName for players. Use gamerTag or modernGamerTag instead
  
*realName*  
Type: char[XBL_REAL_NAME_CHAR_SIZE]  
  
The UTF-8 encoded real name.
  
*displayPicUrlRaw*  
Type: char[XBL_DISPLAY_PIC_URL_RAW_CHAR_SIZE]  
  
The UTF-8 encoded display picture uri.
  
*useAvatar*  
Type: bool  
  
Whether to use the players avatar.
  
*gamerscore*  
Type: char[XBL_GAMERSCORE_CHAR_SIZE]  
  
UTF-8 encoded player's gamerscore.
  
*gamertag*  
Type: char[XBL_GAMERTAG_CHAR_SIZE]  
  
UTF-8 encoded player's gamertag.
  
*modernGamertag*  
Type: char[XBL_MODERN_GAMERTAG_CHAR_SIZE]  
  
Modern gamertag for the player. Not guaranteed to be unique.
  
*modernGamertagSuffix*  
Type: char[XBL_MODERN_GAMERTAG_SUFFIX_CHAR_SIZE]  
  
Suffix appended to modern gamertag to ensure uniqueness. May be empty in some cases.
  
*uniqueModernGamertag*  
Type: char[XBL_UNIQUE_MODERN_GAMERTAG_CHAR_SIZE]  
  
Combined modern gamertag and suffix. Format will be "MGT#suffix". Guaranteed to be no more than 16 rendered characters.
  
*presenceRecord*  
Type: [XblSocialManagerPresenceRecord](xblsocialmanagerpresencerecord.md)  
  
Users presence record.
  
*titleHistory*  
Type: [XblTitleHistory](xbltitlehistory.md)  
  
Title history for the user.
  
*preferredColor*  
Type: [XblPreferredColor](xblpreferredcolor.md)  
  
Preferred color for the user.
  
## Member of
  
[XblSocialManagerEvent](xblsocialmanagerevent.md)
  
## Requirements  
  
**Header:** social_manager_c.h
  
## See also  
[social_manager_c](../social_manager_c_members.md)  
  
  
