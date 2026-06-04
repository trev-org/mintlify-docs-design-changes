# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/services/player-data/stats-leaderboards/live-stats-eb-vs-tm?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/player-data/stats-leaderboards/live-stats-eb-vs-tm?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Event-based Stats vs. title-managed Stats

Feedback

Summarize this article for me

As described in [Player Data Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/player-data/live-playerdata-overview?view=gdk-2604), stats are key pieces of information that are used to track a player's performance, such as Head Shots or Fastest Lap Time. Stats are used to generate leaderboards in scenarios that allow players to compare their effort and skills with their friends and every other player in a title's community.

Xbox services owns and maintains the stats. They're updated based on your game sending user-action events to Xbox services.

_Configured stats_ show up in a title's leaderboard, where a player sees how they rank against their friends who have also played the title. For more information about GameHub leaderboards, see [Designing Xbox services Experiences](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/player-data/live-designing-experiences?view=gdk-2604).

There are two available implementations of user stats for Xbox services:

- Title-managed Stats (formerly named _Stats 2017_)
- Event-based Stats (formerly named _Stats 2013_)

Note

We recommend that you use title-managed Stats when configuring new titles. However, Rich Presence variables _only_ work with event-based Stats.

Title-managed Stats and event-based Stats operate on fundamentally different principles.

## Title-managed Stats

When using title-managed Stats, you send up the actual stat value itself for the server to use.

In title-managed Stats, the server does little to no validation on the value sent to it. It's up to your title to keep track of the correct stat values. Your title is the source of truth for statistic values. When using title-managed Stats, we recommend that you track and store your stats in the cloud with [Cloud Storage](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/storage/live-cloud-storage-nav?view=gdk-2604).

Title-managed Stats is like a reporting service. You send the correct stat for your game to the server. Your stat then sits on the server and waits to be displayed upon request or is updated.

## Event-based Stats

When using event-based Stats, the game sends events to Xbox services. The events include specific details about the actions taken by a player.

The information in these events is used to update stats accordingly. In event-based Stats, the service keeps track of and updates all your stat's values. The service is the source of truth for statistic values for a player or group of players.

## History

With the launch of Xbox One, Xbox services introduced event-based Stats. This offered a multitude of benefits. For example, a single game event can update data for multiple Xbox features such as leaderboards and achievements, Xbox services configuration is managed on the server rather than the client, among other capabilities.

In the years following the Xbox One launch, developers requested a more streamlined stats service for bypassing the complexity that comes with an event-based system. They could then use any stats-tracking methods they were already practicing.

Based on developer feedback, a new, simplified version of stats was created that would put control of stats logic back into the hands of the developer. That system is title-managed Stats. It's a service that simply takes the value passed to it by the title, giving developers control of the logic of how a stat value is determined.

## How stats are handled in event-based Stats and title-managed Stats

Let's look at configuring and updating stats for event-based Stats versus title-managed Stats. For example, we're going to make stats from some generic RPG and want to keep track of monsters killed.

### Event-based Stats

With event-based Stats, your title would send an _event_ that contains information about an action performed by a player.

In this event, the action is slaying an orc while the player had a sword. Some of the information contained in this event might be that a slay action was taken, the thing slayed was an orc, the combat type was melee, and the weapon used was a sword.

Event-based stats runs this information through a number of rules that are configured by you, the developer, at [Partner Center](https://partner.microsoft.com/dashboard), and update stats, also configured by you, based on the event.

In event-based Stats, the service keeps track of what the value for your slaying statistics should be. The "slay orc with sword" event could update multiple statistics such as number of kills, number of orcs slain, and number of sword kills.

### Title-managed Stats

In title-managed Stats, you'll send the actual values for your statistics.

For the "slay orc with sword" example, your title keeps track of the number of overall kills, sword kills, and orcs slain individually, and sends the service the updated number for each statistic. The service has minimal validation checks to make sure that you're sending a number that makes sense, so it's essential for your title to send up the correct statistic.

Although you might use the title-managed Stats service to recall the values of stats at the beginning of a game session, don't use the title-managed Stats service to confirm the value of a stat while the session is ongoing.

The following diagram shows how the two flavors of Stats operate.

- Event-based Stats on the left
- Title-managed Stats on the right

![Event-based Stats vs. title-managed Stats](https://learn.microsoft.com/../../../../media/public-images/live/stats/stats2013-7diagramcolored-1000w.png?view=gdk-2604)

## Other differences between the two approaches

For Managed Partners, there are a few more differences to be aware of when deciding between event-based Stats and title-managed Stats for your title.

With event-based Stats, you can:

- Get more leaderboard views.
- More easily analyze the meta-data of your statistics. In our "orc slay" example, the overall statistic was keeping track of the number of kills.
- Get detailed statistics on what was killed, with what weapon, and any other kill-defining information you might configure.

Event-based Stats has a native "minutes played" stat. Use event-based Stats to access a player's play time in a game without configuring the statistic. In title-managed Stats, any playtime statistics would have to be tracked by your title.

### Update frequency

For event-based Stats, events are locally written to the device, even if the device is offline and not connected to the internet. When the device is online and connected, a service running on the device batches and uploads events to the Xbox player data platform. Typically, updating event-based Stats takes from 5 to 20 seconds if the device is online and connected, from the time when the event is locally written to the device to the time when the updated information for the event is reflected on Xbox services.

For title-managed Stats, the actual values for your stats are updated, then periodically flushed from the system directly to the Xbox player data platform if the device is online and connected to the internet. Updated stats are automatically flushed from the system in 5-minute intervals. You can manually flush stats from the system to Xbox services, but manual flushing is throttled to a minimum interval of 30 seconds between flushes. Typically, updating title-managed Stats takes from 2 to 10 seconds if the device is online and connected, from the time when the updated values are flushed from the system to the time when the updated values are reflected on Xbox services.

Event-based Stats can support other Xbox services. With event-based Stats, you can use stats to unlock achievements and make matchmaking decisions. Title-managed Stats can only be used to produce Featured Stats and leaderboards.

## Using title-managed Achievements with event-based Stats

It's very common for titles to use title-managed Achievements side-by-side with event-based Stats. There are no compatibility issues with this combination. We recommend this approach.

## See also

[Event-based Stats overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/player-data/stats-leaderboards/event-based/live-stats-eb-overview?view=gdk-2604)

[Title-managed Stats overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/player-data/stats-leaderboards/title-managed/live-stats-tm-overview?view=gdk-2604)

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