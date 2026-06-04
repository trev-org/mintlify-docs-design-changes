# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/social-manager/live-social-manager-overview?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/social-manager/live-social-manager-overview?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Social Manager overview

Feedback

Summarize this article for me

This topic describes how the Xbox services Social Manager API simplifies keeping track of online friends and their gaming activity.

Xbox services provides a rich social graph that titles can use for various scenarios. Using the social APIs in the Xbox Services API (XSAPI) to get and maintain information about a social graph is complex. Keeping this information up to date can be complicated. Not doing this correctly can result in performance issues, stale data, or being throttled because the Xbox services social services are called more frequently than necessary.

Social Manager solves this problem by doing the following:

- Creating a simple API to call.
- Creating up-to-date information by using the Real-Time Activity (RTA) service in the background.
- Developers can call the Social Manager API synchronously without any extra strain on the service.

Social Manager masks the complexity of dealing with multiple RTA subscriptions, and refreshing data for users and allowing developers to easily get the up-to-date graph they want creates interesting scenarios.

For more information, see [Social Manager memory and performance](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/social-manager/concepts/live-socmgr-mem-perf?view=gdk-2604).

## Features

Social Manager provides the following features.

- Simplified social API
- Up-to-date social graph
- Control over the verbosity of information displayed
- Reduced number of calls to Xbox services
 - This directly correlates to overall latency reduction in data acquisition
- Thread-safe
- Efficiently keeps data up to date

## Core concepts

**Social graph**: A _social graph_ is created for a local user on the device. This creates a structure that keeps information about all of a user's friends up to date.

Note

On Windows, there can be only one local user.

**Xbox social user**: An _Xbox social user_ is a full set of social data associated with a user from a group.

**Xbox social user group**: A group is a collection of users that is used for things like populating UI. There are two types of groups:

- **Filter groups**: A _filter group_ takes a local (calling) user's _social graph_ and returns a consistently fresh set of users based on specified filter parameters.
 
- **List groups**: A _list group_ takes a list of users and returns a consistently fresh view of those users. These users can be outside a user's friends list.
 

To keep a _social user group_ up to date, the [XblSocialManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork?view=gdk-2604) function must be called every frame.

## API overview

You will most frequently use the following key APIs.

### Adding local users to Social Manager

- Flat C API function: [XblSocialManagerAddLocalUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanageraddlocaluser?view=gdk-2604)

Adding a local user to Social Manager causes a _social graph_ to be created for the user. After a local user is added, _social user groups_ can be created for that user.

The Social Manager will keep Xbox social user groups up to date and can filter user groups by presence or relationship to the user. For example, an Xbox social user group containing all the user's friends who are online and playing the current title could be created. This would be kept up to date as friends start or stop playing the title.

### Xbox social user group

- Flat C API function: [XblSocialManagerAddLocalUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanageraddlocaluser?view=gdk-2604)

An Xbox social user group is a group of users that meet certain criteria, as described previously described. Xbox social user groups expose what type of a group they are, which users are being tracked or what the filter set is on them, and the local user that the group belongs to.

You can find a complete description of the Social Manager APIs in the [Xbox Live API reference](https://aka.ms/xboxliveuwpdocs). You can also find the APIs in the `XblSocialManager` prefix documentation.

## Usage

### Creating a social user group from filters

In this scenario, you want a list of users from a filter, such as a list of a user's Friends or the subset of friends that a user has tagged as favorite.

**Flat C API**

```
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

- [XblPresenceFilter](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblpresencefilter?view=gdk-2604)
- [XblRelationshipFilter](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblrelationshipfilter?view=gdk-2604)
- [XblSocialManagerAddLocalUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanageraddlocaluser?view=gdk-2604)
- [XblSocialManagerCreateSocialUserGroupFromFilters](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagercreatesocialusergroupfromfilters?view=gdk-2604)
- [XblSocialManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork?view=gdk-2604)
- [XblSocialManagerEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent?view=gdk-2604)

#### Events returned

**Local user added**: Triggers when loading of a user's social graph is complete. Indicates if any errors occurred during initialization.

- Flat C API: [XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::LocalUserAdded`

**Social user group loaded**: Triggers when a social user group has been created.

- Flat C API: [XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::SocialUserGroupLoaded`

**Users added to social graph**: Triggers when users are loaded in.

- Flat C API: [XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::UsersAddedToSocialGraph`

For more information, see the following:

- [XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604) (flat C API)

#### Additional details

**Flat C API** The previous example shows how to initialize Social Manager for a user, create a social user group for that user, and keep it up to date.

The filtering options are the [XblPresenceFilter](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblpresencefilter?view=gdk-2604) and [XblRelationshipFilter](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblrelationshipfilter?view=gdk-2604) enums.

In the game loop, the [XblSocialManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork?view=gdk-2604) function updates all created views with the latest snapshot of the users in that group.

The users in the view can be obtained by calling the [XblSocialManagerUserGroupGetUsers](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerusergroupgetusers?view=gdk-2604) function. It returns an `XblSocialManagerUserPtrArray`, an array of [XblSocialManagerUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/structs/xblsocialmanageruser?view=gdk-2604) objects owned by XSAPI. [XblSocialManagerUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/structs/xblsocialmanageruser?view=gdk-2604) contains the social information such as gamertag, gamerpic, and URI.

### Create and update a social user group from list

In this scenario, you want the social information of a list of users such as users in a multiplayer session.

**Flat C API**

```
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

- [XblSocialManagerAddLocalUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanageraddlocaluser?view=gdk-2604)
- [XblSocialManagerCreateSocialUserGroupFromList](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagercreatesocialusergroupfromlist?view=gdk-2604)
- [XblSocialManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork?view=gdk-2604)
- [XblSocialManagerEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent?view=gdk-2604)

#### Events returned

[XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::LocalUserAdded`. Triggers when loading of user's social graph is complete. Indicates if any errors occurred during initialization.

[XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::SocialUserGroupLoaded`. Triggers when a social user group has been created, and the tracked users have been added to the social graph.

[XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::UsersAddedToSocialGraph`. Triggers when users are loaded in.

### Updating social user group from list

You can also change the list of tracked users in the social user group by calling [XblSocialManagerUpdateSocialUserGroup](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerupdatesocialusergroup?view=gdk-2604).

**Flat C API**

```
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

- [XblSocialManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork?view=gdk-2604)
- [XblSocialManagerEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent?view=gdk-2604)
- [XblSocialManagerUpdateSocialUserGroup](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerupdatesocialusergroup?view=gdk-2604)

#### Events returned

**Social user group updated**: Triggers when the social user group update is complete.

- C++: `social_user_group_updated`
- C: [XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)::SocialUserGroupUpdated

**Users added to social graph**: Triggers when users are loaded in. If users added via list are already in graph, this event doesn't trigger.

- C++: `users_added_to_social_graph`
- C: [XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)::UsersAddedToSocialGraph

**Users removed from social graph**: Triggers when the previous users are removed from the social graph.

- C: [XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)::UsersRemovedFromSocialGraph

### Using Social Manager events

Social Manager tells you what happened, in the form of events. You can use those events to update your UI or perform other logic.

**Flat C API**

```
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

- [XblSocialManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork?view=gdk-2604)
- [XblSocialManagerEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent?view=gdk-2604)

#### Events returned

[XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::LocalUserAdded`. Triggers when the loading of a user's social graph is complete. Indicates if any errors occurred during initialization.

[XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::SocialUserGroupLoaded`. Triggers when a social user group has been created.

[XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::UsersAddedToSocialGraph`. Triggers when users are loaded in.

[XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::UsersRemovedFromSocialGraph`. Triggers when a user is removed from the social graph.

[XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::PresenceChanged`. Triggers when the presence of a user in the social graph changes.

[XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::ProfilesChanged`. Triggers when the profile of a user in the social graph changes.

[XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::SocialRelationshipsChanged`. Triggers when the relationship between the local user and another user in the social graph changes.

[XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::SocialUserGroupUpdated`. Triggers when an update to a social user group is complete.

#### Additional details

This example shows some of the additional control that's offered by Social Manager.

Rather than relying on the social user group filters to provide a fresh user list during the game loop, the social graph is initialized outside the game loop. The title then relies on the _events_ that are returned by the [XblSocialManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork?view=gdk-2604) function.

_Events_ is a list of [XblSocialManagerEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent?view=gdk-2604). Each [XblSocialManagerEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent?view=gdk-2604) contains a change to the social graph that occurred during the last frame. For example, [XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::ProfilesChanged` and [XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)`::UsersAddedToSocialGraph`.

For more information, see the [XblSocialManagerEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent?view=gdk-2604) API documentation.

### Cleanup

#### Cleaning up social user groups

The following example cleans up the social user group that was created. The caller should also remove any references they have to any created social user group because it's now invalid.

**Flat C API**

```
HRESULT hr = XblSocialManagerDestroySocialUserGroup(groupHandle);
if (SUCCEEDED(hr))
{
    state.groups.erase(groupHandle);
}
```

For more information, see the following:

- [XblSocialManagerDestroySocialUserGroup](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdestroysocialusergroup?view=gdk-2604)

#### Cleaning up local users

As shown in the following example, removing a local user removes the loaded user's social graph and any social user groups that were created using that user.

With the flat C API, receive no further events for the removed user.

**Flat C API**

```
HRESULT hr = XblSocialManagerRemoveLocalUser(user);
```

For more information, see the following:

- [XblSocialManagerRemoveLocalUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerremovelocaluser?view=gdk-2604)

---

## Feedback

Was this page helpful?

Yes No No

Need help with this topic?

Want to try using Ask Learn to clarify or guide you through this topic?

Ask Learn Ask Learn

Suggest a fix?

---

## Additional resources

---

- Last updated on 11/06/2025