# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagercreatesocialusergroupfromfilters?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagercreatesocialusergroupfromfilters?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# XblSocialManagerCreateSocialUserGroupFromFilters

Feedback

Summarize this article for me

Constructs a XblSocialManagerUserGroup, which is a collection of users with social information.

## Syntax

```
HRESULT XblSocialManagerCreateSocialUserGroupFromFilters(  
         XblUserHandle user,  
         XblPresenceFilter presenceFilter,  
         XblRelationshipFilter relationshipFilter,  
         XblSocialManagerUserGroupHandle* group  
)  
```

### Parameters

_user_   \_In\_ 
Type: XblUserHandle

Xbox Live User the group is associated with.

_presenceFilter_   \_In\_ 
Type: [XblPresenceFilter](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblpresencefilter?view=gdk-2604)

The restriction of users based on their presence and title activity.

_relationshipFilter_   \_In\_ 
Type: [XblRelationshipFilter](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblrelationshipfilter?view=gdk-2604)

The restriction of users based on their relationship to the calling user.

_group_   \_Outptr\_result\_maybenull\_ 
Type: [XblSocialManagerUserGroupHandle\*](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/handles/xblsocialmanagerusergrouphandle?view=gdk-2604)

Passes back a handle to the created group. This group can be later be cleaned up with XblSocialManagerDestroySocialUserGroup. The group will also be cleaned up (invalidating the returned handle) if the associated user is removed from Social Manager.

### Return value

Type: HRESULT

HRESULT return code for this API operation.

## Remarks

The result of a user group being loaded will be triggered through the [XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)::SocialUserGroupLoaded event in [XblSocialManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork?view=gdk-2604).

## Requirements

**Header:** social\_manager\_c.h

**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib

## See also

[social\_manager\_c](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/social_manager_c_members?view=gdk-2604)

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