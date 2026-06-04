---
title: "Best practices and testing for modern gamertags"
description: "Describes best practices and instructions for testing modern gamertags support in titles."
kindex:
- Modern gamertags overview
- gamertags
author: joannaleecy
ms.author: rlehew
ms.topic: article
ms.localizationpriority: medium
edited: 01/06/2023
ms.date: '08/01/2022'
permissioned-type: public
---

# Best practices and testing for modern gamertags

This articles describes best practices and instructions for testing modern gamertags support in titles.

## Rendering modern gamertags
  
Throughout Xbox experiences, there's a conscious effort to universally show users as their unique modern gamertag, including any applicable suffix.

This is in large part due to user feedback of existing users who have had a meaningful gamertag for a long time and want to ensure that someone else who now claims the same gamertag isn't confused with the user who is "the original" of that gamertag.  
  
To respect this while ensuring that users with a modern gamertag receive a suffix, the modern gamertag string is separated from the suffix string upon rendering. This way the suffix is de-emphasized by showing it in a smaller and lighter-weight font.  
  
When you adopt modern gamertags for your title, follow this model to de-emphasize the suffix while keeping a clear differentiation between users with the same modern gamertag string. Where this isn't possible, use the unique modern gamertag to ensure that users who have the same name are differentiated from each other.
  
For more information, see [Examples of modern gamertags](live-modern-gamertags-overview.md#modgtexamples) in this topic.
  
## Testing with modern gamertags

### Test accounts

To change the gamertag for a test account, use the [Xbox Live Test Account tool](../../../../../tools/tools-services/live-xbox-live-account-tool.md).

### Retail accounts

To change the gamertag for a retail account, go to [social.xbox.com/changegamertag](https://social.xbox.com/changegamertag) and sign in with the account to change.

> [!NOTE]
> All accounts get one free change to set a modern gamertag.
  
## See also  
  
* [XUserGetGamertag](../../../../../reference/system/xuser/functions/xusergetgamertag.md)  
* [XUserGamertagComponent](../../../../../reference/system/xuser/enums/xusergamertagcomponent.md)  
* [XblUserProfile](../../../../../reference/live/xsapi-c/profile_c/structs/xbluserprofile.md)  
* [XblLeaderboardRow](../../../../../reference/live/xsapi-c/leaderboard_c/structs/xblleaderboardrow.md)