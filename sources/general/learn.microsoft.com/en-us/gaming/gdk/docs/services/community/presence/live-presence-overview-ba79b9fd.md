# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/presence/live-presence-overview?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/community/presence/live-presence-overview?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Rich Presence overview

Feedback

Summarize this article for me

This topic provides an overview of Rich Presence. It shows what a player is doing and where they are in the game.

By default, games have _Basic Presence_. This indicates to other players which game a player is playing. If you write code to use _Rich Presence_, the Rich Presence string ideally also indicates what a player is doing and where they are in the game. Rich Presence information is visible to players who are connected to Xbox Live.

By using Rich Presence, your game can advertise the activity and location of a player. For example, your game can use these strings to show all players the status (like Away) of your game's players.

Note

The game’s title in the Rich Presence strings feature for Xbox services is controlled by the Microsoft Store listing for the game. Currently, the title’s name for Rich Presence comes from the RETAIL catalog, regardless of which sandbox you're currently testing in. If your title’s information isn't yet published to the RETAIL store, your title’s name might show as 'Home' in the Rich Presence strings in the Xbox UI.

The topics in this section describe how to do the following:

- Configure your Rich Presence strings.
- Set the string for a player who is playing your game.

## Definitions

Here are some terms that are used in this section.

- **Enumeration:** An enumeration is a list of some in-game dimension. For example, weapons, character classes, and maps. For these examples, you can show a list of the possible weapons in your game and a list of all the possible character classes or maps.
 
- **Locale-string pair:** A locale-string pair specifies the locales in which the string can or should be used. Every possible Rich Presence string must have a locale associated with it. Each enumeration also has a set of locale-string pairs.
 
- **String-set:** A string-set is made up of a group of locale-string pairs. This set defines the possible values of a Rich Presence string for all possible locales or the possible values for an enumeration for all possible locales.
 
- **Friendly name:** There are two types of friendly names.
 
 - **Rich Presence string:** The friendly name for a string-set is a unique identifier in the form of a string that's used to reference a string-set.
 - **Enumeration:** These friendly names are used to uniquely identify a particular enumeration like the weapons enumeration or the character class enumeration.

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