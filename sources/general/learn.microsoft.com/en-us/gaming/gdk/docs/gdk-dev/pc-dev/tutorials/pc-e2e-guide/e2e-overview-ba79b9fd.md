# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-overview?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-overview?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# PC end-to-end guide overview

Feedback

Summarize this article for me

The Microsoft Game Development Kit (GDK) can be used by itself with a C/C++ project or can be used with a game engine that supports integration with the GDK.

The PC end-to-end guide gives an overview of the steps required to integrate the GDK with your game and publish your game to the Microsoft Store on the Xbox PC app. The end-to-end guide is organized around these steps in the order you would typically perform them. The guide shows integration using the native GDK APIs and contains game engine specific guides that show how the GDK can be used in the Unity Engine and the Unreal Engine.

## Sections of the guide

The guide consists of the following sections.

### GDK & game engines

The [GDK & game engines](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-gdk-and-engines?view=gdk-2604) section of the guide gives a description of the GDK and contains guides for using the GDK with the Unity Engine and the Unreal Engine.

### Steps for all games

The "Steps for all games" section of the guide describes the steps all games will need to take to integrate with the GDK and publish in the Microsoft Store. Where APIs are referenced, the steps cover using the native C/C++ GDK APIs. The individual game engine guides in the previous section cover engine specific steps required to use GDK functionality. For example, accessing C# wrappers in the Unity Engine and using the online-subsystem in the Unreal Engine. This section includes the following steps.

- [Joining ID@Xbox](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-register-id-at-xbox?view=gdk-2604)
- [Creating a Partner Center account](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-creating-partnercenter-account?view=gdk-2604)
- [Creating a project definition for your game](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-creating-partnercenter-product-definition?view=gdk-2604)
- [Integrating the GDK with your game](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-integrating-gdk-in-your-game?view=gdk-2604)
- [Publishing your game in Partner Center](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-publishing-your-game?view=gdk-2604)

Most steps apply as is to games whether they are using a game engine or directly using the GDK APIs in C/C++. The [Integrate the GDK with your game](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-integrating-gdk-in-your-game?view=gdk-2604) section covers initializing the GDK and Xbox/PlayFab services and implementing required features. Depending on the engine you are using you may need to reference one of the engine guides from the previous section for engine specific integration details.

### Steps that may apply to your game

The [Steps that may apply to your game](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-optional-services?view=gdk-2604) section covers services or features that are not required, but that you may want your game to use.

## Next steps

If you are using the C/C++ GDK template project from scratch, go through the [Steps for all games](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-required-steps?view=gdk-2604) section.

If you are using a game engine, you will need to go through the guide specific to your game engine in the [GDK & game engines](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-gdk-and-engines?view=gdk-2604) section and the steps in the [Steps for all games](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-required-steps?view=gdk-2604) section. For the [Integrate the GDK with your game](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-integrating-gdk-in-your-game?view=gdk-2604) section, some additional details will be provided in the engine specific guides.

For both paths, you'll want to review the [Steps that may apply to your game](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-optional-services?view=gdk-2604) section for services that are not required but that you may want your game to use.

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