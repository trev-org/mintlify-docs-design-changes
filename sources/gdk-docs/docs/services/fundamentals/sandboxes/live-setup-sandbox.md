---
title: "Xbox services Sandboxes overview"
description: "You publish your game to a development sandbox, allowing you to work on changes to your title in an isolated environment."
kindex:
- Xbox services Sandboxes overview
- sandboxes
- Xbox services, Sandboxes overview
- Xbox services, Sandboxes
- Xbox services, Development sandbox
- Xbox services, Xbox services sandboxes overview
author: joannaleecy
ms.author: jeffshi, ricardopezo
ms.topic: article
ms.localizationpriority: medium
edited: '03/30/2026'
ms.date: '08/01/2022'
permissioned-type: public
---

# Xbox services sandboxes overview

## Setting up sandboxes for Xbox services development

Before using Xbox services from your game, you must configure information about your title online in [Partner Center](https://partner.microsoft.com/dashboard). This information includes features like the leaderboards your title wants to display, achievements that players can unlock, matchmaking configuration, etc.

When you make changes to your service configuration, you must publish those changes from Partner Center before they're picked up by Xbox services. You publish to a *development sandbox*—an isolated environment where you can work on your title without affecting the live version.

By default, Xbox One (or later) consoles and Windows 10 (and later) PCs are in the **RETAIL** sandbox.

See also [Advanced Xbox services sandboxes](live-advanced-sandboxes.md) for more information.



## In this article

- [Benefits of sandboxes](#benefits-of-sandboxes)
- [Sandbox IDs](#sandbox-ids)
- [What data is sandboxed?](#what-data-is-sandboxed)
- [Test accounts](#test-accounts)
- [Using multiple sandboxes](#using-multiple-sandboxes)
- [Set up your sandbox on PC](#set-up-your-sandbox-on-pc)
- [Set up your sandbox on console](#set-up-your-sandbox-on-console)

---

## Benefits of sandboxes

Development sandboxes offer several benefits:

- **Iterate safely.** You can make changes to your title's service configuration without affecting the currently available version.
- **Tool access.** Some tools only work in a development sandbox for security reasons.
- **Branch your configuration.** Developers on your team can test service config changes in separate sandboxes without affecting each other.
- **Privacy.** Other publishers can't see what you are working on without being granted access to your sandbox.


## Sandbox IDs

Each sandbox has a unique, **case-sensitive** identifier. Development sandboxes follow a naming convention based on your publisher moniker (for example, `XDKS.1` or `XLDP.5`).

These are referred to as the Sandbox ID and, in some cases, as Sandbox Name.

> [!IMPORTANT]
> Sandbox IDs are **case-sensitive**. `XDKS.1` isn't the same as `xdks.1` or `Xdks.1`. However, the **XblPCSandbox.exe** tool will automatically correct casing for you when switching sandboxes on PC. All sandbox IDs are uppercase. Always refer to Partner Center for the definitive sandbox ID.


## What data is sandboxed?

Not all Xbox services data is affected by sandboxes. **Sandboxed** data is isolated per sandbox—it exists only within the sandbox where it was created and isn't visible from other sandboxes. **Not sandboxed** data is shared globally across all sandboxes, including RETAIL.

| Feature | Sandboxed? |
|-----------|---------------|
| Achievements, Leaderboards, and Stats | Yes |
| Service configuration (achievements, leaderboards, session templates) | Yes |
| Social information (friends, followers) | No |

**Key implications:**
- Achievements earned in one sandbox don't carry over to another sandbox.
- Users in different sandboxes can't match or play multiplayer together.
- Service configuration published to one sandbox isn't visible in another.


## Test accounts

You can create [Test Accounts](../../develop/test-accounts/live-test-accounts.md) to use for development and testing instead of your personal Xbox account. 

This is the recommended option to work with sandboxes.

Test accounts:

- Can **only** sign in to development sandboxes (not RETAIL).
- Can be granted access to specific sandboxes.
- Can have an **expiration date** that you can check and manage in Partner Center.
- Can have **child accounts** that allow you to test scenarios like social interactions or multiplayer.

> [!TIP]
> If you're having trouble signing in with a test account, see the [Troubleshooting Sign-in and Sandbox Errors](../../develop/troubleshooting/live-troubleshoot-sandboxes.md) section for more details.

See also [Test Accounts](../../develop/test-accounts/live-test-accounts.md) for more information.


## Using multiple sandboxes

Multiple sandboxes are useful for more advanced scenarios:

- **Service config isolation.** Use a *Development* sandbox for active development and a *Testing* sandbox for your QA team. Changes you publish to *Development* won't affect what testers see.
- **Multiplayer isolation.** Keep developers and testers in separate sandboxes so matchmaking doesn't mix the two groups during testing.

> [!NOTE]
> If you are in the **Xbox Creators Program**, you can only have one sandbox. To create multiple sandboxes, you must be in the **Managed Partners Program**.

For more details about sandbox isolation, product instances, and multi-organization scenarios, see [Advanced Xbox services sandboxes](live-advanced-sandboxes.md).


## How sandboxes fit your workflow

Here's the typical workflow when using sandboxes:

1. **Switch your device** to your development sandbox. See [PC](#set-up-your-sandbox-on-pc) or [Console](#set-up-your-sandbox-on-console) instructions below, depending on the environment you're planning to configure.
2. **Publish changes** to your development sandbox as you iterate on service configuration.
3. **Share access** with team members who need to work in the same sandbox.
4. **Switch back to RETAIL** when you need to test in the retail environment, update system apps, or play other games.


---


## Set up your sandbox on PC

### Switch your sandbox using XblPCSandbox.exe (Recommended)

**XblPCSandbox.exe** is a command-line tool included with the GDK. It's the recommended way to switch sandboxes on PC.

For more detailed information on how to use the XblPCSandbox.exe and its respective arguments, see [Xbox Live PC Sandbox Switcher (XblPCSandbox.exe)](../../tools/tools-services/live-pc-sandbox-switcher.md)

---

## Set up your sandbox on console

This section explains how to switch your Xbox One (or later) console to a development sandbox so you can test your game with Xbox services.

### Using Xbox Device Portal
You can use the Xbox Device Portal to change the sandbox on your console. To do this, go to "Dev Home" on your console and enable it.

After that you can type in the IP address on the web browser on your PC to connect to your console. You can then select on **Xbox Live** and enter the sandbox in the text box there.

### Using Xbox Manager
Xbox Manager is for Xbox One or later consoles.

Xbox Manager lets you administer certain aspects of your console from your PC. This includes rebooting, managing installed apps, and changing your sandbox.

Right click on the console you want to change the sandbox for and go to **Settings...**

You can then enter a sandbox there.

### Using the Xbox console UI
If you want to change your development sandbox right from your Xbox One (or later) console, you can go to **Settings**. Then go to **Developer Settings** and you'll see an option to change your sandbox.


---


## What's next?

If you've encountered any issues while switching sandboxes, proceed to [Troubleshooting Sign-in and Sandbox Errors](../../develop/troubleshooting/live-troubleshoot-sandboxes.md) for a guided diagnostic process and error code reference.


## See also

- [Advanced sandboxes conceptual overview](live-advanced-sandboxes.md)
- [Test accounts](../../develop/test-accounts/live-test-accounts.md)
- [Troubleshooting Sign-in and Sandbox Errors](../../develop/troubleshooting/live-troubleshoot-sandboxes.md)
- [XblPCSandbox.exe reference](../../../tools/tools-services/live-pc-sandbox-switcher.md)
- [Xbox services configuration overview](../../fundamentals/portal-config/live-portal-config-overview.md)
- [MicrosoftGame.config overview](../../../features/common/game-config/microsoftgameconfig-overview.md)


