# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/services/storage/live-connected-storage-vs-title-storage?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/storage/live-connected-storage-vs-title-storage?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Connected Storage vs. Title Storage

Feedback

Summarize this article for me

This topic describes Xbox services Cloud Storage and compares Connected Storage to Title Storage. Xbox services provides a way for game developers to store both global title data and player-specific data in the cloud. Xbox services Cloud Storage includes Connected Storage for storing game state, and Title Storage for storing player statistics and assets.

## Connected Storage

Data stored by using the per-user Connected Storage API automatically roams for users across PC and multiple Xbox One family (or later) consoles. This data is also available for use offline. Use this service to provide smooth gameplay when restarting a title after switching devices.

You should use the Connected Storage service to frequently save progress data like inventory, game state, and in-game current location. The Connected Storage service is a fault-tolerant cloud storage service that's less susceptible to network and power failures.

For more information, see [Connected Storage](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/storage/connected-storage/live-connected-storage-nav?view=gdk-2604).

## Title Storage

The Xbox Title Storage service provides a way to store and share game data and title assets in the cloud. Games running on all platforms can use the Title Storage service. This service gives you more control over data visibility for the user, as well as global per-title data, and per-user data.

Note

Title Storage is especially well-suited for storing user statistics, user rankings, title assets such as unlockable artwork, and new maps.

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