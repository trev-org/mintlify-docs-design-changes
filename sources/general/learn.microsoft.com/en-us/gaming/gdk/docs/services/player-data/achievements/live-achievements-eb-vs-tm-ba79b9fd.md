# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/services/player-data/achievements/live-achievements-eb-vs-tm?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/player-data/achievements/live-achievements-eb-vs-tm?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Event-based vs. title-managed Achievements

Feedback

Summarize this article for me

This topic describes the differences between event-based and title-managed Achievements.

_Event-based Achievements_ was previously called "cloud-powered Achievements" or "Achievements 2013."

_Title-managed Achievements_ was previously called "Achievements 2017."

Title-managed Achievements is more straightforward than event-based Achievements, using direct calling, simple configuration, and local troubleshooting. The title-managed Achievements service uses a direct-calling model to unlock achievements for new Xbox services games on Xbox, Windows 10, Android, and iOS.

Note

We recommend using title-managed Achievements to configure new titles.

## Introduction

Event-based Achievements empower you to drive the data for your Xbox services capabilities, such as user stats, achievements, rich presence, and multiplayer, by simply sending in-game telemetry events. This provides many benefits. For example, a single event can update data for multiple Xbox services features, Xbox services configuration lives on the server instead of in the client, and many other benefits.

In the years following the release of event-based Achievements, developers have consistently shared the following feedback.

1. **Unlocking achievements with a direct calling pattern would be easier.** Many developers build games for multiple platforms and generations, and a direct calling pattern makes supporting multiple platforms easier. Supporting direct unlock calls would ease their cross-platform game development needs and reduce development time.
 
2. **Configuring event-based achievements is too complex.** With the event-based Achievements service, an achievement's unlock logic must be configured in Xbox services so that the services know how to interpret the title's stats data and when to unlock the achievement for a user. This was done by using a new "Achievement Rules" section of an achievement's configuration. While having unlock logic in the cloud can be powerful, the additional configuration requirement adds complexity into the design and creation of a title's achievements.
 
3. **The cloud-based unlock mechanism is difficult to troubleshoot.** Although the event-based Achievements service introduces helpful capabilities, it can also be more difficult for game developers to validate and troubleshoot issues with their achievements. This is because achievement unlocks are triggered indirectly by rules that live on the service instead of being directly controlled by the game itself.
 

Game developers have also shared feedback that they value some of the features that were introduced by event-based Achievements, such as the following:

1. User experience features such as achievement progression, real-time updates, concept art rewards, and posting unlocks into an activity feed.
 
2. Configuration improvements such as a service config instead of a local config that must be included in the game package (such as gameconfig, XLAST, and SPA).
 
3. The ability to easily edit achievement strings and images after the game has shipped.
 

Title-managed Achievements is a replacement for the event-based Achievements service that makes it even easier to configure achievements, integrate unlocks and updates into game code, and validate that the achievements are working as expected.

## What's different with title-managed Achievements

Expand table

| Feature | Title-managed Achievements service | Event-based Achievements service |
| --- | --- | --- |
| Unlock trigger | Directly via API call | Indirectly via telemetry events |
| Unlock owner | The title | Xbox service |
| Configuration | Strings, images, rewards | Strings, images, rewards, unlock rules \[+ stats, +events\] |
| Progression | Supported 
_directly via API call_ | Supported 
_indirectly via telemetry events_ |
| Real-Time Activity (RTA) | Supported | Supported |
| Challenges | Not supported | Supported |

## Title requirements

The following are the requirements of any title that will use the title-managed Achievements service.

1. **Must not have released with event-based Achievements.** Titles that have already been released and are using the event-based Achievements service are ineligible. For more information, see [Why can't existing titles "migrate" onto the title-managed Achievements service?](https://learn.microsoft.com/#_Why_cant_existing)
 
2. **Must use August 2016 Xbox One Software Development Kit or later.**
 
3. **Must be part of a managed developer program such as ID@Xbox.** The title-managed Achievements service isn't available for the Creators Program or legacy platforms, including Xbox 360, Windows 8.x or earlier, or Windows Phone 8 or earlier.
 

## Frequently asked questions

### If my title uses event-based Stats, do I also have to use event-based Achievements?

No. We recommended using title-managed Achievements side-by-side with event-based Stats.

### Why aren't challenges supported in the title-managed Achievements service?

Usage data across Xbox games has shown that the current implementation and presentation of challenges doesn't fulfill a need for most game developers. We will continue gathering developer input and feedback so we can deliver future features that match developer needs.

### Can I still add new achievements with content updates if my title is using the title-managed Achievements service?

Yes. The achievements policy is the same for all services. For more information, see [Xbox Live Policies for Achievements and awards](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-policies-pc?view=gdk-2604#achievements-and-awards).

### Why can't existing titles "migrate" onto the title-managed Achievements service?

For the vast majority of existing titles, a "migration" to the title-managed Achievements service would require more than simply updating their service configurations and swapping out event writes for achievement unlock calls. These changes alone would be very costly and carry significant risk of error and unintended behavior that could result in the achievements being irreparably broken. Furthermore, most existing titles also have users with existing data.

Attempting to convert a live game that's already using the event-based Achievements service would be a very costly effort, for both the developer and Xbox, and would significantly jeopardize existing users' profiles and game experiences.

### If my title was released by using the event-based Achievements service, can any future downloadable content (DLC) for the title switch to title-managed Achievements?

All achievements for a title must use the same Achievements service. The Achievements service that's used by the base game must be used for all future achievements for the title.

### While testing achievements in my developer sandbox, can I mix and match by using the title-managed Achievements service and the event-based Achievements service?

No. All achievements for a title must use the same Achievements service.

### Does the title-managed Achievements service support offline achievement unlocks?

If the title unlocks an achievement while the device is offline, the API automatically queues the offline unlock requests. Unlock requests auto-sync to Xbox services when the device reestablishes network connectivity, similar to the event-based Achievements service's offline experience. Achievements unlocks don't occur while the user is offline.

### I see a new `AchievementUpdate` event in Partner Center. If my title uses that event, does that mean it has title-managed Achievements?

The `AchievementUpdate` base event is required by Xbox services for backend purposes. You can safely ignore this base event.

If your title configures an event by using this base event type, those event writes are ignored by Xbox services. Titles that are built on the event-based Achievements service should continue to configure their events by using the other base event types. Titles that are built on the title-managed Achievements service don't need to configure _any_ events for achievement purposes.

### How can I reset a test user's Achievement data?

The `XblPlayerDataReset` tool can be used to reset a test user's Xbox player data, including achievements. Please see the [XblPlayerDataReset documentation](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-player-data-reset?view=gdk-2604) for details on how to use the tool.

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