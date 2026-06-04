# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# XblSocialManagerDoWork

Feedback

Summarize this article for me

Called whenever the title wants to update the social graph and get list of change events.

## Syntax

```
HRESULT XblSocialManagerDoWork(  
         const XblSocialManagerEvent** socialEvents,  
         size_t* socialEventsCount  
)  
```

### Parameters

_socialEvents_   \_Outptr\_result\_maybenull\_ 
Type: [XblSocialManagerEvent\*\*](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent?view=gdk-2604)

Passes back a pointer to the array of social events that have occurred since the last call to XblSocialManagerDoWork. This array is only valid until the next call to XblSocialManagerDoWork. The internal array will automatically be cleaned up when XblCleanup is called.

_socialEventsCount_   \_Out\_ 
Type: size\_t\*

Passes back the number of events in the social events array.

### Return value

Type: HRESULT

HRESULT return code for this API operation.

## Remarks

Must be called every frame for data to be up to date. The array of social events that is sent back is only valid until the next call to [XblSocialManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork?view=gdk-2604). Make sure to check if there were social events sent back. If the social events array is null, no results. If the social events count is 0, no results. If there were social events sent back then handle each [XblSocialManagerEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/structs/xblsocialmanagerevent?view=gdk-2604) by their respective [XblSocialManagerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/enums/xblsocialmanagereventtype?view=gdk-2604).

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