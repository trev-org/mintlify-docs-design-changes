---
author: sdgmiller
title: "Implement Rich Presence in your game"
description: "Describes how to implement Rich Presence in your game."
kindex:
- User authentication and ownership
- Xbox services, Xbox account
- Xbox services, identity
- Xbox services, user authentication
ms.topic: article
edited: 06/03/2020
ms.date: '08/01/2022'
permissioned-type: public
---
# Implement Rich Presence in your game

This article describes how to use Rich Presence. It shows what a player is doing and where they are in the game.  

## Implement Rich Presence by using the Microsoft Game Development Kit 

1. Define enumerations:  
   Create an enumeration that defines the structure of your game's Rich Presence data. This enumeration specifies the fields and data types for the information that you want to display. For example, map name, game mode, or player count. The enumerations are defined through the events from Xbox services player data.  
1. Configure Rich Presence in [Microsoft Partner Center](https://partner.microsoft.com/dashboard/home):  
   Set up and configure Rich Presence strings in Partner Center. This involves defining locale-string pairs and string-sets to ensure that presence information is accurately localized for various countries/regions. For more information, see [Configuring Rich Presence strings in Partner Center](../../../../../services/community/presence/config/live-presence-config2.md).
1. Set the activity state:  
   When a player's activity changes, update their activity state by using [XblPresenceSetPresenceAsync](../../../../../reference/live/xsapi-c/presence_c/functions/xblpresencesetpresenceasync.md). For example, the player enters a new level or they join a match. This involves populating the fields that are defined in your activity schema with the current player's data. This is done by calling the MPA APIs so you can set the current activity and its related data. For more information, see [Updating a user's presence via XSAPI C](../../../../../services/community/presence/how-to/live-updating-user-presence.md).
1. Get the activity state of other players:  
   Get the activity state of other players that another player is interested in by using [XblPresenceGetPresenceAsync](../../../../../reference/live/xsapi-c/presence_c/functions/xblpresencegetpresenceasync.md) or [XblPresenceGetPresenceForMultipleUsersAsync](../../../../../reference/live/xsapi-c/presence_c/functions/xblpresencegetpresenceformultipleusersasync.md). For more information, see [Getting a user's presence](../../../../../services/community/presence/how-to/live-getting-a-users-presence.md).

## See also  

The Microsoft Game Development Kit (GDK) documentation is the best source of up-to-date information. For more details see the following articles.

* [Best practices for Rich Presence](../../../../../services/community/presence/concepts/live-presence-best-practices.md)

* [Policies and limits for Rich Presence strings](../../../../../services/community/presence/concepts/live-presence-limits.md)

* [Configuring Rich Presence strings](../../../../../services/community/presence/config/live-presence-config.md)

* [Configuring Rich Presence strings in Partner Center](../../../../../services/community/presence/config/live-presence-config2.md)

* [Rich Presence example code](../../../../../services/community/presence/how-to/live-presence-howto-nav.md)

