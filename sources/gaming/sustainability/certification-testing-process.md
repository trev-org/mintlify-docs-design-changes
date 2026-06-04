---
title: Gaming Sustainability Certification Testing
description: How the Certification team approaches testing titles for energy efficiency opportunities
author: danielmjacobs
ms.author: djacobs
ms.topic: how-to
ms.date: 03/15/2023
---

# Certification Sustainability Testing and Analysis

At Xbox, we’re committed to making gaming more sustainable. Our Certification team now perform power consumption analysis on behalf of the Gaming Sustainability team to inform our research and help with studios collaboration. These tests are entirely free and currently available for any title upon request. This testing is not part of the Xbox Requirements and this is not a requirement to release content on the Xbox platform. However, Certification do perform this analysis to support game developers who wish to learn more about their title's performance, whilst also helping to inform our research and progress. This page explains the background preparation we use to guide console testing in the Certification labs, and potentially something a studio can borrow.

## What should I expect to read in my report?

As part of Certification, many titles now receive a free snapshot report measuring in-game power consumption and comparing it to industry averages. By identifying energy-saving opportunities, studios can reduce the environmental impact of gaming on high-powered devices like consoles, whilst also improving performance on battery-powered platforms. Many optimisations made in the Xbox version can be carried across platforms, extending hardware and battery life, and enhancing player experience. We’re doing all we can on Xbox, but sustainability is a shared effort, and every improvement helps. Explore the Xbox Sustainability Toolkit and learn more at our [Xbox Sustainability hub](https://www.xbox.com/sustainability)

These reports provides a snapshot of your game’s power usage across key gameplay areas, helping you identify where your title is already energy efficient and where there may be opportunities to improve.

Power data is captured using Performance Investigator for Xbox (PIX) with the Power Monitor event viewer, which estimates how much of the console’s maximum power load is being used at any given time. Instead of showing exact wattage (which can vary slightly between devices), we use a simplified metric called Power Load %. This lets you see how power usage changes depending on what’s happening on screen and how it responds to any optimisations you make. We test common areas like menus, lobbies, gameplay modes, and constrained states (when the game is out of focus, such as when the Guide is open). Each area is explored for a consistent amount of time, with longer sessions in gameplay to capture more variation, especially in graphically intense or open environments.

### Report Types
You may receive one of two report formats:

* Snapshot Report: A lighter version that includes measurements from the main menu, pause menu, and core gameplay.
* Full Report (available on request): A more in-depth analysis that includes everything in the snapshot report, plus multiplayer gameplay, multiplayer lobbies, constrained states, and other areas of interest such as places where your game already shows strong energy efficiency or where there’s room to improve.

This report is designed to help you benchmark your title, spot energy-saving opportunities, and consider how these improvements could benefit players, especially those on battery-powered devices. If you’re interested in going further, we recommend exploring the other pages here on Xbox Sustainability Toolkit. 

**Looking for the fastest and easiest win?** Try asking your team to try the [Dynamic Power States API](developer-tools/dynamic-power-states.md) which is a simple way to reduce energy use with just one line of code.

If you want to go even futuer, let us know if you’d like support or to be featured in a future case study published here on Microsoft Learn.

## Sustainability test case template

The following test case is not a platform requirement. This is simply a draft test case to help guide games testers towards identifying potential opportunities for energy efficiency improvements.

* **Requirement:** All game titles targeting Xbox Series X|S are encouraged to consider their contribution towards the Xbox sustainability charter. Games should consider introducing lower energy areas without impacting gameplay fidelity, and/or provide the user with an option to opt-in to using a low power mode when in areas outside active gameplay, such as menus, lobbies, leaderboards, cutscenes, or loading screens.
* **Remarks:** For help and information on optimising a title to support Xbox Series X|S, please consult more notes inside the GDK.
* **Intent:** Ensure that games and their developers have the tools and guidance to reduce energy wastage and to adopt lower energy modes for customers who wish to opt-in to these features

### Test case example

| Sustainability test case | Summary |
------ | --------
 Steps | <ul><li>Sign into an Xbox profile on an Xbox Series X Development Kit</li><li>Begin capturing the console output using PIX and Power Monitor instead</li><li>Launch the title and progress through each of the following gameplay areas:</li><ul><li>Main menu</li><li>A loading screen</li><li>Active gameplay</li><li>A pre-rendered cutscene</li><li>An in-engine cutscene</li><li>Multiplayer lobby</li><li>Multiplayer active gameplay</li><li>Constrained state</li></ul><li> Analyse the captures for each area to identify power usage averages for comparison</li><li>Repeat steps [1]-[4] for the other Xbox console profiling modes, such as Xbox Series S</li></ul>
 Result | Titles do not use more power outside of gameplay than they do in active gameplay
 Tooling | <ul><li>1x Xbox Series X Development Kit</li><li>PIX with Power Monitor</li><li>Optional: An AC wall plug power watt meter</li></ul>
 Possible pass scenarios | <ul><li>The title averages lower power consumption in its menus than it does during active gameplay</li><li>The title provides the user with a feature to use less average power under certain scenarios</li><li>The title averages lower power consumption compared to the global platform averages across many in-game areas</li></ul>
 Possible improvement opportunities | <ul><li>The title averages higher power consumption in its menus than it does during active gameplay</li><li>The title does not provide the user with a feature to use less average power under certain scenarios</li><li>The title averages more power consumption compared to the global platform averages across many in-game areas</li></ul>

## Certification's console configuration

For each title tested in the Certification lab, we want to do the best we can to retain the same setup to obtain comparable results between different titles. The more variables you can keep the same, the more confidence we can place in comparing results. The information below explains the set up we have used for all the results you see in the [Lab Platform Baselines](lab-platform-baselines.md) page.

### Input/output connections

- Power supply cable connected to an APC non-rewireable portable socket outlet.
  - Electrical Ratings: 250 V~, 50/60 Hz, 13A.
- HDMI Output through a High-Speed HDMI Cable (Supplied with every Gen9 console) connected to an AverMedia Live Gamer 4K GC573 capture card that is powered by a PC through USB 3.0.
  - Capture Card Settings: Resolution 4K, Framerate 60 fps.
- Video Output from capture card to an LG 43UJ670V, 4K HDR-enabled TV.
- Network Connection: Ethernet.
- Xbox Wireless controller.
- Audio Output: Headphones connected to Xbox controller/ TV speakers.

### General TV & display options

- Resolution: 4K
- Video modes
  - Allow 50 Hz: Disabled
  - Allow 24 Hz: Disabled
  - Allow auto-low latency mode: Disabled
  - Allow variable refresh rate: Disabled
  - Allow YCC 4:2:2: Disabled
  - Allow 4K: Enabled
  - Allow HDR10: Enabled
  - Auto HDR: Enabled
  - Allow Dolby Vision: Disabled
  - Dolby Vision for Gaming: Disabled
- Video fidelity & overscan
  - Overrides: Auto-detect
  - Colour depth: 24 bits per pixel (8-bit)
  - Colour Space: Standard
- Device Control
  - HDMI-CEC: Disabled
  - Night Mode: Disabled

### Console storage and test environment

- Both consoles are placed in a security cage with grates that allow for airflow.
  - Security cage dimensions: 100 x 50 x 25cm.
  - Xbox Series X – fan pointing towards the open front of the cage (over 2m of clearance).
  - Xbox Series S – fan pointing upwards (30 cm clearance).
- Room / cage temperature range: 21° – 22°C.

### Additional checks

- Ensure no USB devices (controller cables, external storage etc.) are connected to the console. 
- Ensure that the ‘Quick Resume’ queue is cleared before test, this should only contain the title in test.

## Next steps

* [Learn how to use PIX and Power Monitor for testing](developer-tools/developer-tool-pix-guide.md)
* [Learn how to get the most out of your devkit to test sustainability performance](developer-tools/developer-tool-devkit-guide.md)
