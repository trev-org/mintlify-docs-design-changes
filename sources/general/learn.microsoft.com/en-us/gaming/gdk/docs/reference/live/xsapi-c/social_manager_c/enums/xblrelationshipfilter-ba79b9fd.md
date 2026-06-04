# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblrelationshipfilter?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblrelationshipfilter?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# XblRelationshipFilter

Feedback

Summarize this article for me

Possible relationship types to filter by.

## Syntax

```
enum class XblRelationshipFilter  : uint32_t  
{  
    Unknown,  
    Friends,  
    Favorite  
}  
```

## Constants

Expand table

| Constant | Description |
| --- | --- |
| Unknown | Unknown. |
| Friends | Friends of the user (user is following). |
| Favorite | Favorites of the user. |

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