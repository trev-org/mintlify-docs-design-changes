# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/lighting/gc-lighting-toc?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/lighting/gc-lighting-toc?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Lighting API Overview

Feedback

Summarize this article for me

## Introduction

The Microsoft Game Development Kit (GDK) provides lightweight APIs to control RGB lighting on a variety of peripheral devices, including keyboards, mice, headsets, and more.

Compatible devices implement or adapt to the [HID standard for Lighting and Illumination](https://www.usb.org/sites/default/files/hutrr84_-_lighting_and_illumination_page.pdf). In this specification:

- A _Lamp_ is a single LED, bulb or other light source that can be manipulated in terms of on/off state, brightness and/or RGB color value.
 
- A device containing one or more Lamps and conforming to the aforementioned HID lighting standard is called a _LampArray_.
 

The lighting APIs included in the GDK also carry the name LampArray.

> **Please note:** As of the March 2023 recovery, the GDK Lighting API only supports the following devices on console. Support for additional devices will be added in future recovery releases.
> 
> - Razer Turret for Xbox One (keyboard and mouse)
> - Razer BlackWidow Tournament Edition Chroma V2

## Topics

[LampArray Basics](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/lighting/lighting-basics?view=gdk-2604) 
Describes how to obtain and inspect the basic objects that comprise the LampArray API.

[Setting Colors on a LampArray](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/lighting/lighting-colors?view=gdk-2604) 
Describes how to perform basic color operations with the LampArray API.

[LampArray Effects](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/lighting/lighting-effects?view=gdk-2604) 
Provides tips on creating more complex LampArray lighting effects.

## See also

[LampArray API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/lighting/gc-reference-lighting-toc?view=gdk-2604)

[Microsoft Game Development Kit](https://learn.microsoft.com/en-us/gaming/gdk)

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

- Last updated on 04/28/2025