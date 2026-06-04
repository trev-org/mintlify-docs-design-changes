---
author: zachhooper
ms.author: zachhooper
title: "Get started with Godot for XBOX development"
description: "Describes how to get started using the XBOX Godot Sample to build Godot games for XBOX on PC with the Microsoft Game Development Kit (GDK)."
kindex:
- Getting started with Godot for XBOX development
- Godot, getting started for XBOX development
- Godot XBOX sample
- XBOX services, Godot
- XBOX services, Godot for XBOX development
- 'XBOX services, Godot development for XBOX: get started'
ms.topic: how-to
edited: 06/02/2026
ms.date: '06/02/2026'
permissioned-type: public
---

# Getting started with Godot

This article describes how to get started using Godot to build XBOX games for PC with the Microsoft Game Development Kit (GDK). It points you to the **XBOX Godot sample**, which shows how to integrate the GDK, XBOX services, and PlayFab into a Godot project, and explains where to find guidance for shipping a Godot game to XBOX Series X|S or XBOX One.

## XBOX Godot Sample

The [XBOX Godot sample](https://aka.ms/XBOXGodotSample) is a public, source-only reference on GitHub. It is a working example of how a developer can build a Godot extension that integrates the Microsoft GDK, XBOX services, and PlayFab, so you can build your title for XBOX on PC, without leaving the engine you already love. This sample provides a modular reference that includes how to integrate the Microsoft GDK and PlayFab SDK together, or on their own.

### What's included

The XBOX Godot sample covers a substantial portion of what a Godot game developer needs to build for XBOX on PC, with key features demonstrated in:

* Microsoft GDK platform services
* XBOX services
* PlayFab Core + Services
* PlayFab Multiplayer (Lobby, Matchmaking, Party)
* PlayFab Game Saves
* GameInput (including bridging to Godot's Input / InputMap)

From XBOX services to GameInput, this sample shows you how to bring sign-in, gamepad controller support capabilities and more into your game with Godot. It includes insights, re-usable integration code, and is currently compatible with the April 2026 GDK out of the box.

### What this is and what it isn't

* This is a source-only sample, not a product. It's MIT-licensed at the wrapper layer; the GDK and PlayFab dependencies still require their own installs and license acceptance, consistent with our other XBOX samples.

* There is no set update cadence for support or maintenance. We'll watch the repo, monitor issues, and iterate where it makes sense, but this isn't a commercial release. That said, we're excited to hear your feedback, and see any community PRs, as we evolve this together.

* This is the first step in bringing Godot for XBOX on PC. We plan to evolve it over time based on what the community tells us is most valuable.

* This sample is built specifically for XBOX on PC. It doesn't include support for XBOX Series X|S or XBOX One. For information about console support, see the XBOX Series X|S and XBOX One support section below.

### Get started

Use these resources to clone the repository, build the extension, and start integrating with your Godot project:

* **XBOX Godot Sample:** [XBOX Godot Sample](https://aka.ms/XBOXGodotSample) - An example implementation binding the Microsoft GDK, PlayFab, and GameInput to Godot.
* **Microsoft GDK:** [microsoft/GDK](https://github.com/microsoft/GDK) - Microsoft Public GDK.
* **PlayFab SDK:** [PlayFab Unified SDK](https://aka.ms/PlayFabUnifiedSDK) - PlayFab Unified SDK.
* **GameInput:** [GameInput](https://aka.ms/GameInput) - A next-generation input API that exposes input devices of all kinds through a single consistent interface.
* **Documentation:** [XBOX Godot Docs](https://aka.ms/XBOXGodotDocs) - Documentation for the Godot XBOX sample.
* **Issues:** [XBOX Godot Issues](https://aka.ms/XBOXGodotIssues) - Report bugs, request features, or contribute back.

After you have integrated the Microsoft GDK with your Godot project, follow the rest of the [PC end-to-end guide](../pc-e2e-guide/e2e-overview.md) to register your title, set up your product in Partner Center, and publish your game to the Microsoft Store.

## Support for XBOX Series X|S and XBOX One

The XBOX Godot sample is built specifically for XBOX on PC and does not include support for XBOX Series X|S or XBOX One.

Because Godot is open source and MIT-licensed, the Godot Foundation does not officially maintain console export templates: console SDKs are distributed under NDA and require legal contracts and closed access that are incompatible with the engine's open development model.

For current details on the console porting process, the list of middleware providers, and links to additional Godot Foundation guidance, see [Godot and console porting](https://godotengine.org/consoles/) on the official Godot Engine website.

If you are already building for XBOX Series X|S or XBOX One, contact your XBOX representative. If you are not yet registered, see [Register for the ID@Xbox program](../pc-e2e-guide/e2e-register-id-at-xbox.md) to get started.

## Related topics

* [Microsoft Game Development Kit and game engines](../pc-e2e-guide/e2e-gdk-and-engines.md)
* [PC end-to-end guide overview](../pc-e2e-guide/e2e-overview.md)
