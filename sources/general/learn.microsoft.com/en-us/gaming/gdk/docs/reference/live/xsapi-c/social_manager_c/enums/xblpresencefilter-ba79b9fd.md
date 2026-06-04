# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblpresencefilter?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblpresencefilter?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# XblPresenceFilter

Feedback

Summarize this article for me

The filter level of information. Title will only show users associated with a particular title.

## Syntax

```
enum class XblPresenceFilter  : uint32_t  
{  
    Unknown,  
    TitleOnline,  
    TitleOffline,  
    TitleOnlineOutsideTitle,  
    AllOnline,  
    AllOffline,  
    AllTitle,  
    All  
}  
```

## Constants

Expand table

| Constant | Description |
| --- | --- |
| Unknown | Unknown. |
| TitleOnline | Is currently playing current title and is online. |
| TitleOffline | Has played this title and is offline. This filter option requires [XblSocialManagerExtraDetailLevel](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagerextradetaillevel?view=gdk-2604)::TitleHistoryLevel to be set in [XblSocialManagerAddLocalUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanageraddlocaluser?view=gdk-2604) |
| TitleOnlineOutsideTitle | Has played this title, is online but not currently playing this title. This filter option requires [XblSocialManagerExtraDetailLevel](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagerextradetaillevel?view=gdk-2604)::TitleHistoryLevel to be set in [XblSocialManagerAddLocalUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanageraddlocaluser?view=gdk-2604) |
| AllOnline | Everyone currently online. |
| AllOffline | Everyone currently offline. |
| AllTitle | Everyone who has played or is playing the title. This filter option requires [XblSocialManagerExtraDetailLevel](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagerextradetaillevel?view=gdk-2604)::TitleHistoryLevel to be set in [XblSocialManagerAddLocalUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanageraddlocaluser?view=gdk-2604) |
| All | Everyone. |

## Argument of

[XblSocialManagerUserGroupGetFilters](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerusergroupgetfilters?view=gdk-2604) 
[XblSocialManagerCreateSocialUserGroupFromFilters](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagercreatesocialusergroupfromfilters?view=gdk-2604)

## Requirements

**Header:** social\_manager\_c.h

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