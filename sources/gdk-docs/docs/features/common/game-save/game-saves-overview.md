---
author: anbanks
title: "Game Saves overview"
description: "An introduction to the Game Saves APIs, which enable games to save data locally that is then synchronized with the cloud."
kindex:
- Save games overview
- Game saves overview
- Connected Storage overview
- Cloud saves overview
- Xbox services, Save games overview
- Xbox services, Game saves overview
- Xbox services, Connected Storage overview
- Xbox services, Cloud saves overview
ms.author: anbanks
ms.topic: article
edited: 06/20/2025
ms.date: '06/20/2025'
permissioned-type: public
---
# Game Saves overview

## Introduction

Game Saves enable users to move seamlessly across devices by keeping their progress available whenever they sign in. The system saves data locally and then synchronizes it to the cloud when the device connects to the internet. After the sync is completed, users can access their saved data on any supported device.

## Xbox Play Anywhere and Game Saves

Xbox Play Anywhere uses Game Saves to enable users to share game progression seamlessly across Windows devices, Xbox consoles, PCs, and handheld devices. Xbox Play Anywhere relies on consistent save‑data synchronization. Users can pick up where they left off on any supported device. For more information, see [Xbox Play Anywhere](https://www.xbox.com/games/xbox-play-anywhere).

## Game Saves development lifecycle

The Game Saves development lifecycle article gives you a structured path to build, validate, and maintain reliable cloud‑connected save systems. It walks you through how to introduce Game Saves to a new title and continues through debugging, testing, certification, and post‑publishing support. Each stage highlights the requirements, tools, and best practices you need to ensure that your title saves data consistently, syncs it safely, and delivers a seamless user experience across devices. 

This lifecycle helps your Game Saves implementation behave predictably from first prototype through publication and beyond.

The lifecycle article describes the end‑to‑end flow when you plan, implement, validate, publish, and maintain Game Saves. This lifecycle is described as follows.

1. **Get started with Game Saves:** Initial onboarding with Game Saves concepts, APIs, storage models, and platform requirements.
1. **New title setup:** Integrate Game Saves early in development. For example:
   - Add user‑sign‑in–dependent initialization.
   - Configure identifiers like the service configuration identifier (SCID) and Microsoft account (MSA) App ID (MSAAppID).
   - Establish your storage design and container structure.
1. **Debugging issues during development:** Troubleshoot early implementation problems. You might encounter the following issues:
   - SCID configuration issues
   - Handle-lifetime issues
   - Quota/memory problems
   - NTSTATUS error interpretation
1. **Test planning:** Define structured test plans. For example, test the following areas:
   - Data read/write correctness
   - Offline behavior
   - Sync logic
   - System dialog flows
   - Multi‑device scenarios
1. **Testing scenarios:** Perform detailed functional and stress testing. For example, test how your title behaves in the following situations.
   - Connectivity changes
   - Conflict states
   - User switching
   - Corruption handling
   - Storage‑limit edge cases
1. **Prepare your title for publishing:** Finalize your Game Saves configuration before you publish. This work typically includes the following tasks:
   - Validating your Microsoft Partner Center setup
   - Confirming that your title uses the correct quotas
   - Ensuring that system dialogs function as expected
   - Verifying that your title uses safe‑write patterns
1. **Certification requirements:** Meet Xbox certification requirements. This includes, for example:
   - Proper sync behavior.
   - Managing connectivity changes.
   - Compliance with user data and personally identifiable information (PII) rules.
1. **Manage issues after publishing:** Monitor and resolve live‑site issues. You might encounter situations like:
   - Sync failures.
   - User data‑loss reports.
   - Storage‑limit problems.
1. **Migration scenarios:** Scenarios include the following items:
   - Updating the storage layout
   - Moving between Game Saves APIs
   - Transitioning between title versions

## Game Saves documentation set

This documentation set helps you understand and implement the full Game Saves ecosystem. This set explains how the APIs work, how user models and Process Lifetime Management (PLM) shape your save‑data flow, and how storage systems, quotas, and offline behavior affect your design. It also provides guidance for testing and debugging, describes the system dialogs that users might encounter, and outlines the certification requirements you need to meet before publishing.

### Game Saves developer guide  

This article provides an overview of the Game Saves ecosystem and key developer considerations, like available APIs, user models, PLM, security/PII guidance, certification requirements, and storage-limit details.

- [Overview](game-saves-developer-guide.md#overview)  
- [New titles](game-saves-developer-guide.md#new-titles)  
- [Game Saves APIs](game-saves-developer-guide.md#game-saves-apis)  
- [User models](game-saves-developer-guide.md#user-models)  
- [Security](game-saves-developer-guide.md#security)  
- [Certification requirements](game-saves-developer-guide.md#certification-requirements)  

### Understanding the Game Saves sync flow

This article explains atomicity at the container/folder level and a six-step synchronization flow, plus offline-mode behavior and machine-only provider usage.

- [Title start](game-saves-syncing.md#title-start)  
- [Connection check](game-saves-syncing.md#connection-check)  
- [Data ownership check](game-saves-syncing.md#data-ownership-check)  
- [Syncing data with the cloud](game-saves-syncing.md#syncing-data-with-the-cloud)  
- [Gameplay loop](game-saves-syncing.md#gameplay-loop)  
- [Session end](game-saves-syncing.md#session-end)  
- [Connection loss and lock scenarios](game-saves-syncing.md#connection-loss-and-lock-scenarios)  
- [Power loss](game-saves-syncing.md#power-loss)

### Game Saves storage systems

This article outlines various storage contexts. It covers title storage (cloud), local save storage, and machine-provider storage, along with per-title quotas and console-specific local-storage details.

- [Game Saves storage systems](game-saves-storage-systems.md#game-saves-storage-systems)  
- [Limits and quotas](game-saves-storage-systems.md#limits-and-quotas)  
- [Console specific local storages](game-saves-storage-systems.md#console-specific-local-storage-system)

### Game Saves system dialogs

This article describes the system dialogs that users can encounter when they do Game Saves operations.

- [System dialogs at a glance](game-saves-dialogues.md#system-dialogs-at-a-glance)
- [Game Saves dialogs](game-saves-dialogues.md#game-saves-dialogs)

### Game Saves walkthroughs and samples  

This article describes how to set up Partner Center and how to use safe‑write patterns, like writing to a temporary file and replacing it atomically. It also describes how to manage offline and off‑network scenarios and how to use system dialog flows. In addition, it explains how to manage Game Saves data on the devices in use, test cloud‑sync behavior, and migrate between titles or APIs.

- [Partner Center configurations](game-saves-walkthroughs-and-samples.md#partner-center-configurations)  
- [Development scenarios](game-saves-walkthroughs-and-samples.md#development-scenarios)  
- [Testing scenarios](game-saves-walkthroughs-and-samples.md#testing-scenarios)  
- [Migration scenarios](game-saves-walkthroughs-and-samples.md#migration-scenarios)  
- [Code samples](game-saves-walkthroughs-and-samples.md#code-samples)

### Game Saves debugging  

This article explains common Game Save errors and troubleshooting steps, including SCID issues, handle‑lifetime best practices, quota and memory limitations, and how to interpret Win32 `NTSTATUS` codes.

- [Common error scenarios](game-saves-debugging.md#common-game-saves-error-scenarios)
- [Common errors table](game-saves-debugging.md#common-errors)

### Game Saves tools  

The article explains how to use Fiddler to inspect Game Saves network traffic. It also shows how to use the `xbstorage` and `gamesaveutil` command-line tools to export or import local save data on console and PC.

- [Inspecting Game Saves network traffic](game-saves-tools.md#inspecting-game-saves-network-traffic)  
- [Game Saves tools](game-saves-tools.md#game-saves-tools)

### XGameSaveFiles API overview

This article describes the initialization flow of `XGameSaveFilesGetFolderWithUIAsync`, recommended Win32 automatic cloud sync semantics, quota/debug guidance, performance best practices, and FAQs.

- [Implementation](XGameSaveFiles.md#implementation-of-xgamesavefiles)  
- [Game Saves flow](XGameSaveFiles.md#game-saves-flow)  
- [Limits and quotas](XGameSaveFiles.md#limits-and-quotas)  
- [FAQs](XGameSaveFiles.md#faqs)

### XGameSave API overview

This article explains the container‑and‑blob storage model, how to initialize and close providers, and how update handles move through their lifecycle. It also covers atomic update behavior, sync‑flow diagrams, file‑size and quota limits, recommended best practices, and FAQs.

- [Implementation](XGameSave.md#implementation)
- [Game Saves flow](XGameSave.md#game-saves-flow)  
- [Limits and quotas](XGameSaveFiles.md#limits-and-quotas)
- [Best practices](XGameSave.md#best-practices)  
- [FAQs](XGameSave.md#faqs)
