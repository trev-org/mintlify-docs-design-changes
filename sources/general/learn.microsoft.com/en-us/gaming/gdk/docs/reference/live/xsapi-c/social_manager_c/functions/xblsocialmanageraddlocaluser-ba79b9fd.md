# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanageraddlocaluser?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanageraddlocaluser?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# XblSocialManagerAddLocalUser

Feedback

Summarize this article for me

Create a social graph for the specified local user.

## Syntax

```
HRESULT XblSocialManagerAddLocalUser(  
         XblUserHandle user,  
         XblSocialManagerExtraDetailLevel extraLevelDetail,  
         XTaskQueueHandle queue  
)  
```

### Parameters

_user_   \_In\_ 
Type: XblUserHandle

Xbox Live User to create a graph for.

_extraLevelDetail_   \_In\_ 
Type: [XblSocialManagerExtraDetailLevel](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagerextradetaillevel?view=gdk-2604)

The level of verbosity that should be in the service calls for this user.

_queue_   \_In\_opt\_ 
Type: XTaskQueueHandle

Queue to be used for background operation for this user (Optional). Note: Using XTaskQueueDispatchMode::Immediate for this queue may cause poor performance.

### Return value

Type: HRESULT

HRESULT return code for this API operation.

## Remarks

The result of a local user being added will be triggered through the [XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604)::LocalUserAdded event in [XblSocialManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork?view=gdk-2604). To remove the social graph for the specified local user, call [XblSocialManagerRemoveLocalUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerremovelocaluser?view=gdk-2604).

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