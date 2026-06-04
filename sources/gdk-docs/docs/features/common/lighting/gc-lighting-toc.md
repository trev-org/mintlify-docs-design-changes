---
author: tyduck
title: "Lighting overview"
description: "Describes lighting features of the Microsoft Game Development Kit (GDK)."
kindex: Lighting
ms.author: tyduck
ms.topic: article
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# Lighting API Overview

<a id="introductionSection"></a>

## Introduction

The Microsoft Game Development Kit (GDK) provides lightweight APIs to control RGB lighting on a variety of peripheral devices, including keyboards, mice, headsets, and more.

Compatible devices implement or adapt to the [HID standard for Lighting and Illumination](https://www.usb.org/sites/default/files/hutrr84_-_lighting_and_illumination_page.pdf). In this specification:  

* A *Lamp* is a single LED, bulb or other light source that can be manipulated in terms of on/off state, brightness and/or RGB color value.

* A device containing one or more Lamps and conforming to the aforementioned HID lighting standard is called a *LampArray*.

The lighting APIs included in the GDK also carry the name LampArray.

> **Please note:** As of the March 2023 recovery, the GDK Lighting API only supports the following devices on console. Support for additional devices will be added in future recovery releases.
> - Razer Turret for Xbox One (keyboard and mouse)
> - Razer BlackWidow Tournament Edition Chroma V2

## Topics

[LampArray Basics](lighting-basics.md)  
Describes how to obtain and inspect the basic objects that comprise the LampArray API.

[Setting Colors on a LampArray](lighting-colors.md)  
Describes how to perform basic color operations with the LampArray API.

[LampArray Effects](lighting-effects.md)  
Provides tips on creating more complex LampArray lighting effects.

<a id="seeAlsoSection"></a>

## See also

[LampArray API reference](../../../reference/lighting/gc-reference-lighting-toc.md)  

[Microsoft Game Development Kit](/gaming/gdk)  