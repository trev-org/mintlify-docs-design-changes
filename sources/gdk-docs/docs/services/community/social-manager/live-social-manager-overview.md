---
title: "Social Manager overview"
description: "Describes how the Xbox services Social Manager API simplifies keeping track of online friends and their gaming activity."
kindex:
- Social Manager overview
- Xbox services, Social Manager overview
- Xbox services, Social Manager API
author: joannaleecy
ms.topic: article
ms.assetid: d4c6d5aa-e18c-4d59-91f8-63077116eda3
ms.date: 03/26/2018
ms.localizationpriority: medium
edited: 00/00/0000
permissioned-type: public
---

# Social Manager overview

This topic describes how the Xbox services Social Manager API simplifies keeping track of online friends and their gaming activity.

Xbox services provides a rich social graph that titles can use for various scenarios.
Using the social APIs in the Xbox Services API (XSAPI) to get and maintain information about a social graph is complex. Keeping this information up to date can be complicated.
Not doing this correctly can result in performance issues, stale data, or being throttled because the Xbox services social services are called more frequently than necessary.

Social Manager solves this problem by doing the following:

* Creating a simple API to call.
* Creating up-to-date information by using the Real-Time Activity (RTA) service in the background.
* Developers can call the Social Manager API synchronously without any extra strain on the service.

Social Manager masks the complexity of dealing with multiple RTA subscriptions, and refreshing data for users and allowing developers to easily get the up-to-date graph they want creates interesting scenarios.

For more information, see [Social Manager memory and performance](concepts/live-socmgr-mem-perf.md).


## Features

Social Manager provides the following features.

* Simplified social API
* Up-to-date social graph
* Control over the verbosity of information displayed
* Reduced number of calls to Xbox services
  * This directly correlates to overall latency reduction in data acquisition
* Thread-safe
* Efficiently keeps data up to date


## Core concepts


**Social graph**: A *social graph* is created for a local user on the device.
This creates a structure that keeps information about all of a user's friends up to date.

> [!NOTE]
> On Windows, there can be only one local user.


**Xbox social user**: An *Xbox social user* is a full set of social data associated with a user from a group.


**Xbox social user group**: A group is a collection of users that is used for things like populating UI.
There are two types of groups:

* **Filter groups**: A *filter group* takes a local (calling) user's *social graph* and returns a consistently fresh set of users based on specified filter parameters.

* **List groups**: A *list group* takes a list of users and returns a consistently fresh view of those users. These users can be outside a user's friends list.

To keep a *social user group* up to date, the [XblSocialManagerDoWork](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork.md) function must be called every frame.

## API overview

You will most frequently use the following key APIs.


### Adding local users to Social Manager

* Flat C API function: [XblSocialManagerAddLocalUser](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanageraddlocaluser.md)

Adding a local user to Social Manager causes a *social graph* to be created for the user.
After a local user is added, *social user groups* can be created for that user.

The Social Manager will keep Xbox social user groups up to date and can filter user groups by presence or relationship to the user.
For example, an Xbox social user group containing all the user's friends who are online and playing the current title could be created.
This would be kept up to date as friends start or stop playing the title.


### Xbox social user group

* Flat C API function: [XblSocialManagerAddLocalUser](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanageraddlocaluser.md)

An Xbox social user group is a group of users that meet certain criteria, as described previously described.
Xbox social user groups expose what type of a group they are, which users are being tracked or what the filter set is on them, and the local user that the group belongs to.

You can find a complete description of the Social Manager APIs in the [Xbox Live API reference](https://aka.ms/xboxliveuwpdocs).
You can also find the APIs in the `XblSocialManager` prefix documentation.


## Usage


### Creating a social user group from filters

In this scenario, you want a list of users from a filter, such as a list of a user's Friends or the subset of friends that a user has tagged as favorite.


**Flat C API**
```cpp
HRESULT hr = XblSocialManagerAddLocalUser(user, extraLevelDetail, nullptr);

XblPresenceFilter presenceFilter{ XblPresenceFilter::All };
XblRelationshipFilter relationshipFilter{ XblRelationshipFilter::Friends };

XblSocialManagerUserGroupHandle groupHandle{ nullptr };
HRESULT hr = XblSocialManagerCreateSocialUserGroupFromFilters(user, presenceFilter, relationshipFilter, &groupHandle);

if (SUCCEEDED(hr))
{
    state.groups.insert(groupHandle);
}

// Some update loop in the game.
while (true)
{
    const XblSocialManagerEvent* events{ nullptr };
    size_t eventCount{ 0 };
    HRESULT hr = XblSocialManagerDoWork(&events, &eventCount);
    if (SUCCEEDED(hr))
    {
        for (size_t i = 0; i < eventCount; i++)
        {
            // Act on the event.
        }
    }
}
```

For more information, see the following:
* [XblPresenceFilter](../../../reference/live/xsapi-c/social_manager_c/enums/xblpresencefilter.md)
* [XblRelationshipFilter](../../../reference/live/xsapi-c/social_manager_c/enums/xblrelationshipfilter.md)
* [XblSocialManagerAddLocalUser](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanageraddlocaluser.md)
* [XblSocialManagerCreateSocialUserGroupFromFilters](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagercreatesocialusergroupfromfilters.md)
* [XblSocialManagerDoWork](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork.md)
* [XblSocialManagerEvent](../../../reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent.md)






#### Events returned

**Local user added**: Triggers when loading of a user's social graph is complete. Indicates if any errors occurred during initialization.
* Flat C API: [XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::LocalUserAdded`

**Social user group loaded**: Triggers when a social user group has been created.
* Flat C API: [XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::SocialUserGroupLoaded`

**Users added to social graph**: Triggers when users are loaded in.
* Flat C API: [XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::UsersAddedToSocialGraph`

For more information, see the following:
* [XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md) (flat C API)


#### Additional details


**Flat C API**
The previous example shows how to initialize Social Manager for a user, create a social user group for that user, and keep it up to date.

The filtering options are the [XblPresenceFilter](../../../reference/live/xsapi-c/social_manager_c/enums/xblpresencefilter.md) and [XblRelationshipFilter](../../../reference/live/xsapi-c/social_manager_c/enums/xblrelationshipfilter.md) enums.

In the game loop, the [XblSocialManagerDoWork](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork.md) function updates all created views with the latest snapshot of the users in that group.

The users in the view can be obtained by calling the [XblSocialManagerUserGroupGetUsers](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerusergroupgetusers.md) function. It returns an `XblSocialManagerUserPtrArray`, an array of [XblSocialManagerUser](../../../reference/live/xsapi-c/social_manager_c/structs/xblsocialmanageruser.md) objects owned by XSAPI.
[XblSocialManagerUser](../../../reference/live/xsapi-c/social_manager_c/structs/xblsocialmanageruser.md) contains the social information such as gamertag, gamerpic, and URI.





### Create and update a social user group from list

In this scenario, you want the social information of a list of users such as users in a multiplayer session.


**Flat C API**
```cpp
HRESULT hr = XblSocialManagerAddLocalUser(user, extraLevelDetail, nullptr);

// List of xuids to track.
std::vector<uint64_t> xuids
{
    listXuids.begin() + static_cast<int>(offset),
    listXuids.begin() + static_cast<int>(offset + count) 
}; 

XblSocialManagerUserGroupHandle groupHandle{ nullptr };
HRESULT hr = XblSocialManagerCreateSocialUserGroupFromList(user, xuids.data(), xuids.size(), &groupHandle);

if (SUCCEEDED(hr))
{
    state.groups.insert(groupHandle);
}

// Some update loop in the game.
while (true)
{
    const XblSocialManagerEvent* events{ nullptr };
    size_t eventCount{ 0 };
    HRESULT hr = XblSocialManagerDoWork(&events, &eventCount);
    if (SUCCEEDED(hr))
    {
        for (size_t i = 0; i < eventCount; i++)
        {
            // Act on the event
        }
    }
}
```

For more information, see the following:
* [XblSocialManagerAddLocalUser](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanageraddlocaluser.md)
* [XblSocialManagerCreateSocialUserGroupFromList](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagercreatesocialusergroupfromlist.md)
* [XblSocialManagerDoWork](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork.md)
* [XblSocialManagerEvent](../../../reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent.md)







#### Events returned

[XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::LocalUserAdded`. Triggers when loading of user's social graph is complete. Indicates if any errors occurred during initialization.

[XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::SocialUserGroupLoaded`. Triggers when a social user group has been created, and the tracked users have been added to the social graph.

[XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::UsersAddedToSocialGraph`. Triggers when users are loaded in.


### Updating social user group from list

You can also change the list of tracked users in the social user group by calling [XblSocialManagerUpdateSocialUserGroup](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerupdatesocialusergroup.md).


**Flat C API**
```cpp
// New list of xuids to track.
std::vector<uint64_t> xuids
{ 
    listXuids.begin() + static_cast<int>(offset),
    listXuids.begin() + static_cast<int>(offset + count)
};

HRESULT hr = XblSocialManagerUpdateSocialUserGroup(group, xuids.data(), xuids.size());

// Some update loop in the game.
while (true)
{
    const XblSocialManagerEvent* events{ nullptr };
    size_t eventCount{ 0 };
    HRESULT hr = XblSocialManagerDoWork(&events, &eventCount);
    if (SUCCEEDED(hr))
    {
        for (size_t i = 0; i < eventCount; i++)
        {
            // Act on the event.
        }
    }
}
```

For more information, see the following:
* [XblSocialManagerDoWork](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork.md)
* [XblSocialManagerEvent](../../../reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent.md)
* [XblSocialManagerUpdateSocialUserGroup](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerupdatesocialusergroup.md)





#### Events returned

**Social user group updated**: Triggers when the social user group update is complete.
* C++: `social_user_group_updated`
* C: [XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)::SocialUserGroupUpdated

**Users added to social graph**: Triggers when users are loaded in. If users added via list are already in graph, this event doesn't trigger.
* C++: `users_added_to_social_graph`
* C: [XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)::UsersAddedToSocialGraph

**Users removed from social graph**: Triggers when the previous users are removed from the social graph.
* C: [XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)::UsersRemovedFromSocialGraph


### Using Social Manager events

Social Manager tells you what happened, in the form of events.
You can use those events to update your UI or perform other logic.


**Flat C API**
```cpp
// Some update loop in the game.
while (true)
{
    const XblSocialManagerEvent* events{ nullptr };
    size_t eventCount{ 0 };
    HRESULT hr = XblSocialManagerDoWork(&events, &eventCount);
    if (SUCCEEDED(hr))
    {
        for (size_t i = 0; i < eventCount; i++)
        {
            // Act on the event.
            auto& socialEvent = events[i];
            std::stringstream ss;
            ss << "XblSocialManagerDoWork: Event of type " << eventTypesMap[socialEvent.eventType] << std::endl;
            for (uint32_t i = 0; i < XBL_SOCIAL_MANAGER_MAX_AFFECTED_USERS_PER_EVENT; i++)
            {
                if (socialEvent.usersAffected[i] != nullptr)
                {
                    if (i == 0)
                    {
                        ss << "Users affected: " << std::endl;
                    }
                    ss << "\t" << socialEvent.usersAffected[i]->gamertag << std::endl;
                }
            }
            LogToFile(ss.str().c_str());
        }
    }
}
```

For more information, see the following:
* [XblSocialManagerDoWork](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork.md)
* [XblSocialManagerEvent](../../../reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent.md)






#### Events returned

[XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::LocalUserAdded`. Triggers when the loading of a user's social graph is complete. Indicates if any errors occurred during initialization.

[XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::SocialUserGroupLoaded`. Triggers when a social user group has been created.

[XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::UsersAddedToSocialGraph`. Triggers when users are loaded in.

[XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::UsersRemovedFromSocialGraph`. Triggers when a user is removed from the social graph.

[XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::PresenceChanged`. Triggers when the presence of a user in the social graph changes.

[XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::ProfilesChanged`. Triggers when the profile of a user in the social graph changes.

[XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::SocialRelationshipsChanged`. Triggers when the relationship between the local user and another user in the social graph changes.

[XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::SocialUserGroupUpdated`. Triggers when an update to a social user group is complete.


#### Additional details

This example shows some of the additional control that's offered by Social Manager.

Rather than relying on the social user group filters to provide a fresh user list during the game loop, the social graph is initialized outside the game loop.
The title then relies on the *events* that are returned by the [XblSocialManagerDoWork](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork.md) function.

*Events* is a list of [XblSocialManagerEvent](../../../reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent.md). Each [XblSocialManagerEvent](../../../reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent.md) contains a change to the social graph that occurred during the last frame.
For example, [XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::ProfilesChanged` and [XblSocialManagerEventType](../../../reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype.md)`::UsersAddedToSocialGraph`.

For more information, see the [XblSocialManagerEvent](../../../reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent.md) API documentation.


### Cleanup


#### Cleaning up social user groups

The following example cleans up the social user group that was created.
The caller should also remove any references they have to any created social user group because it's now invalid.


**Flat C API**
```cpp
HRESULT hr = XblSocialManagerDestroySocialUserGroup(groupHandle);
if (SUCCEEDED(hr))
{
    state.groups.erase(groupHandle);
}
```

For more information, see the following:
* [XblSocialManagerDestroySocialUserGroup](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdestroysocialusergroup.md)





#### Cleaning up local users

As shown in the following example, removing a local user removes the loaded user's social graph and any social user groups that were created using that user.

With the flat C API, receive no further events for the removed user.


**Flat C API**
```cpp
HRESULT hr = XblSocialManagerRemoveLocalUser(user);
```

For more information, see the following:  
* [XblSocialManagerRemoveLocalUser](../../../reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerremovelocaluser.md)





