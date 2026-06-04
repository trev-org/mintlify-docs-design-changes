# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-rich-presence?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-rich-presence?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Implement Rich Presence in your game

Feedback

Summarize this article for me

This article describes how to use Rich Presence. It shows what a player is doing and where they are in the game.

## Implement Rich Presence by using the Microsoft Game Development Kit

1. Define enumerations: 
 Create an enumeration that defines the structure of your game's Rich Presence data. This enumeration specifies the fields and data types for the information that you want to display. For example, map name, game mode, or player count. The enumerations are defined through the events from Xbox services player data.
2. Configure Rich Presence in [Microsoft Partner Center](https://partner.microsoft.com/dashboard/home): 
 Set up and configure Rich Presence strings in Partner Center. This involves defining locale-string pairs and string-sets to ensure that presence information is accurately localized for various countries/regions. For more information, see [Configuring Rich Presence strings in Partner Center](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/presence/config/live-presence-config2?view=gdk-2604).
3. Set the activity state: 
 When a player's activity changes, update their activity state by using [XblPresenceSetPresenceAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/presence_c/functions/xblpresencesetpresenceasync?view=gdk-2604). For example, the player enters a new level or they join a match. This involves populating the fields that are defined in your activity schema with the current player's data. This is done by calling the MPA APIs so you can set the current activity and its related data. For more information, see [Updating a user's presence via XSAPI C](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/presence/how-to/live-updating-user-presence?view=gdk-2604).
4. Get the activity state of other players: 
 Get the activity state of other players that another player is interested in by using [XblPresenceGetPresenceAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/presence_c/functions/xblpresencegetpresenceasync?view=gdk-2604) or [XblPresenceGetPresenceForMultipleUsersAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/presence_c/functions/xblpresencegetpresenceformultipleusersasync?view=gdk-2604). For more information, see [Getting a user's presence](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/presence/how-to/live-getting-a-users-presence?view=gdk-2604).

## See also

The Microsoft Game Development Kit (GDK) documentation is the best source of up-to-date information. For more details see the following articles.

- [Best practices for Rich Presence](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/presence/concepts/live-presence-best-practices?view=gdk-2604)
 
- [Policies and limits for Rich Presence strings](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/presence/concepts/live-presence-limits?view=gdk-2604)
 
- [Configuring Rich Presence strings](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/presence/config/live-presence-config?view=gdk-2604)
 
- [Configuring Rich Presence strings in Partner Center](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/presence/config/live-presence-config2?view=gdk-2604)
 
- [Rich Presence example code](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/presence/how-to/live-presence-howto-nav?view=gdk-2604)
 

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