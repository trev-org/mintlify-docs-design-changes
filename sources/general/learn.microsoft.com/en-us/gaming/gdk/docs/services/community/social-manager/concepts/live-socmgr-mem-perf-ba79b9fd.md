# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/social-manager/concepts/live-socmgr-mem-perf?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/social-manager/concepts/live-socmgr-mem-perf?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Social Manager memory and performance

Feedback

Summarize this article for me

This topic describes memory and performance considerations when you're using the Social Manager API.

## Additional user limits

Social Manager currently has a restriction of 100 added users to the social graph. This is because of the following two constraints.

1. The maximum number of Real-Time Activity (RTA) service subscriptions that a user can have is 1,100. If a local user has 1,000 friends, that leaves only 100 for additional subscriptions.
2. The maximum batch size of users that can be sent to PeopleHub is currently about 100.

Social Manager communicates this by not allowing a social user group from a list to contain more than 100 users. A global limit of 100 total additional users can be in the system at any time via [XblSocialManagerCreateSocialUserGroupFromList](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagercreatesocialusergroupfromlist?view=gdk-2604).

## Processing time

Social Manager has at worst case 1,100 users. The performance characteristics of Social Manager on an Xbox One has a worst case of 0.3 ms to 0.5 ms for [XblSocialManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/functions/xblsocialmanagerdowork?view=gdk-2604). This depends on the number of social graphs that were created.

The typical case for Social Manager is 0.01 ms for with no groups created and up to 0.2 ms for a group with 1,000 users in it.

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