# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/game-saves-toc?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/game-saves-toc?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Game Saves (contents)

Feedback

Summarize this article for me

This section provides overviews, best practices, and the tools for saving title data that can roam between different devices to the cloud.

## In this section

[Game Saves overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/game-saves-overview?view=gdk-2604): An overview of the Game Saves system and goals. Includes an appendix of all major articles of Game Saves.

[Game Saves developer guide](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/game-saves-developer-guide?view=gdk-2604): An overview of the Game Saves ecosystem and key developer considerations like available APIs, user models, Process Lifetime Management (PLM), security and Personally Identifiable Information (PII) guidance, certification requirements, and storage-limit details.

[Game Saves debugging](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/game-saves-debugging?view=gdk-2604): A guide to common error scenarios and troubleshooting techniques for Game Saves. Includes service configuration identifier (SCID) issues, handle-lifetime best practices, quota and memory limitations, and how to interpret Win32 NTSTATUS codes.

[Game Saves tools](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/game-saves-tools?view=gdk-2604): Describes how to inspect Game Saves network traffic by using Fiddler and use the `xbstorage` and `gamesaveutil` command-line tools for exporting and importing local save data on console and PC.

[Game Saves walkthroughs and samples](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/game-saves-walkthroughs-and-samples?view=gdk-2604): Provides step-by-step guides for Microsoft Partner Center setup, safe-write patterns, offline behavior, system dialog flows, device-based save-data management, testing sync scenarios, and migrating between titles/APIs.

[Understanding the Game Saves sync flow](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/game-saves-syncing?view=gdk-2604): Explains atomicity at the container/folder level and the six-step synchronization flow (title start, connectivity, data ownership, data sync, gameplay loop, and session end), plus Offline mode behavior and machine-only provider usage.

[Game Saves dialogs](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/game-saves-dialogues?view=gdk-2604): Contains the images and descriptions of system dialogs that users can get when they do Game Saves operations.

[Game Saves storage systems](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/game-saves-storage-systems?view=gdk-2604): Outlines the various storage contexts: title storage (cloud), local save storage, and machine-provider storage, along with per-title quotas and console-specific local-storage details.

[XGameSaveFiles](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/xgamesavefiles?view=gdk-2604): Covers the initialization flow of `XGameSaveFilesGetFolderWithUIAsync`, recommended Win32 automatic cloud sync semantics, debugging, quota/debug guidance, performance best practices, and FAQs.

[XGameSave](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/xgamesave?view=gdk-2604): Explains the container‑and‑blob model and covers provider initialization, provider closure, and the update‑handle lifecycle. It also outlines atomic update behavior, sync‑flow diagrams, file‑size and quota constraints, along with best practices and FAQs.

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

- Last updated on 01/26/2026