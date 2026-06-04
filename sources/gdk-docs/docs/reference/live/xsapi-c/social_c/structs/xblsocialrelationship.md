---
author: XBL
title: "XblSocialRelationship"
description: "Represents the relationship between the user and another Xbox user."
kindex: XblSocialRelationship
ms.author: tculotta
ms.topic: reference
security: public
edited: 00/00/0000
applies-to: pc-gdk
---

# XblSocialRelationship  

Represents the relationship between the user and another Xbox user.  

## Syntax  
  
```cpp
typedef struct XblSocialRelationship {  
    uint64_t xboxUserId;  
    bool isFavorite;  
    bool isFriend;  
    bool isFollowingCaller;  
    const char** socialNetworks;  
    size_t socialNetworksCount;  
} XblSocialRelationship  
```
  
### Members  
  
*xboxUserId*  
Type: uint64_t  
  
The person's Xbox user identifier.
  
*isFavorite*  
Type: bool  
  
Indicates whether the person is one that the user cares about more. Since users can have a very large number of people in their people list, favorite people should be prioritized first in experiences and shown before others that are not favorites.
  
*isFriend*  
Type: bool  
  
Indicates whether there exists a mutual follower/following relation between a user and another Xbox User
  
*isFollowingCaller*  
Type: bool  
  
Does not reflect a follower/following relationship, is currently kept for backwards compatibility purposes. The value of this field is determined by the value of 'isFriend' within a XblSocialRelationship
  
*socialNetworks*  
Type: const char**  
  
A UTF-8 encoded collection of strings indicating which social networks this person has a relationship with.
  
*socialNetworksCount*  
Type: size_t  
  
The count of social networks strings in the socialNetworks array.
  
## Argument of
  
[XblSocialRelationshipResultGetRelationships](../functions/xblsocialrelationshipresultgetrelationships.md)
  
## Requirements  
  
**Header:** social_c.h
  
## See also  
[social_c](../social_c_members.md)  
  
  
