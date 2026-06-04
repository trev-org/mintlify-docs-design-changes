---
title: "Social Manager memory and performance"
description: "Describes memory and performance considerations when you're using the Social Manager API."
kindex:
- Social Manager memory and performance
- memory and performance, Social Manager
author: joannaleecy
ms.topic: article
ms.assetid: 2540145e-b8e2-4ab5-9390-65e2c9b19792
ms.localizationpriority: medium
ms.date: 04/04/2017
edited: 00/00/0000
permissioned-type: public
---

# Social Manager memory and performance

This topic describes memory and performance considerations when you're using the Social Manager API.




## Additional user limits

Social Manager currently has a restriction of 100 added users to the social graph.
This is because of the following two constraints.
1. The maximum number of Real-Time Activity (RTA) service subscriptions that a user can have is 1,100. If a local user has 1,000 friends, that leaves only 100 for additional subscriptions.
2. The maximum batch size of users that can be sent to PeopleHub is currently about 100.

Social Manager communicates this by not allowing a social user group from a list to contain more than 100 users.
A global limit of 100 total additional users can be in the system at any time via [XblSocialManagerCreateSocialUserGroupFromList](../../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagercreatesocialusergroupfromlist.md).


## Processing time

Social Manager has at worst case 1,100 users.
The performance characteristics of Social Manager on an Xbox One has a worst case of 0.3 ms to 0.5 ms for [XblSocialManagerDoWork](../../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork.md). This depends on the number of social graphs that were created.

The typical case for Social Manager is 0.01 ms for with no groups created and up to 0.2 ms for a group with 1,000 users in it.
