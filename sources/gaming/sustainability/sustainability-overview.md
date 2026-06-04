---
title: Gaming Sustainability
description: An introduction to the tools and research which can support gaming sustainability
author: danielmjacobs
ms.author: djacobs
ms.topic: overview 
ms.date: 03/23/2023
---

# Gaming Sustainability

![Xbox Sustainability banner image](images/xbox-sus-image-1200.png)

At Xbox, we are dedicated to minimizing the environmental impact of gaming, aligning with our core values and commitment to both our players and the broader industry. With an expansive global gaming community of over 3.1 billion, Microsoft and game developers are uniquely positioned to spearhead meaningful environmental progress. Our ongoing dialogue and research with developers have highlighted a shared ambition to enhance the video game industry’s ecological stewardship. Through innovative design and meticulous engineering, we are taking strides towards a future where gaming sustainability is paramount, all while maintaining the integrity and quality of the gaming experience.

Xbox has proudly become the inaugural console platform to introduce specialized tools for measuring energy consumption and carbon emissions. These tools, developed in collaboration with game creators, aim to demystify and diminish the energy costs for gamers, as well as to reduce the carbon footprint and overall energy usage associated with game development.

We’ve engaged with enthusiastic game creators and designers who, despite the novelty of sustainable gaming, recognize that their existing technical prowess and creativity can significantly contribute to energy conservation. Many are already adept at considering factors like thermal dynamics, frame rates, pixel density, latency, asset size, and update frequency—all of which influence a game’s energy demand. Developers are also mindful of battery life, extending the duration of immersive gaming experiences for players. Moreover, there’s a profound understanding among creators of what players desire: to indulge in top-tier games that also pave the way for carbon emission reductions, lower energy costs, cooler hardware, and enhanced energy efficiency.

Team Xbox is empowering developers with the necessary tools and insights to cultivate energy-smart game design. Evidence from case studies suggests that such refinements are not only cost-effective but also imperceptible, optimising energy consumption without detracting from gameplay. These energy-conservation strategies are crafted to be invisible to players, ensuring an uninterrupted and high-quality gaming experience

## Overview

Electricity generation worldwide, which fuels consumer electronics including gaming consoles and video games, relies on a mix of carbon-heavy fossil fuels and cleaner renewable sources. To illustrate, the fossil fuel energy utilized for powering Xbox consoles globally represents roughly 75% of the total energy and carbon footprint within Xbox’s comprehensive value chain. Of this segment, about 50% is attributed to actual gameplay. Consequently, identifying and implementing energy efficiency measures for gaming activities across various devices—regardless of the platform or producer and without degrading the gaming experience—is not only environmentally advantageous but also enhances consumer satisfaction by contributing to reduced energy costs, minimized energy waste, and a smaller carbon footprint.

> [!NOTE]
> **But I'm just one little game?** Not true! Let’s assume a game averages a modest 0.35 kW on a PC device, it’s played on average for 10 hours/week, and has 80,000 weekly active users.
>
>* 0.35 kW x 10 hours = 3.5 kWh per week, per user
>* (3.5 kWh x 80,000 WAU) x 52 weeks = 14,560,000 kWh per year
>
>Let's now assume the weighted average global emissions factor is 0.334 kg CO2e produced per kWh of energy generated from global energy grids.
>
>* 0.334 x 14,560,000 kWh = 4,863,040 kgCO2e, or 4,863 metric tonnes CO2e per year
>
>This is equivalent to emissions from approx. 12.5M car miles driven by a petrol/gas car, 5.4M pounds of coal burned, or equivalent to carbon sequestered by 5.7k acres of forest (per the United States Environmental Protection Agency online calculator). _Now_ that 10% improvement you introduce seems rather impactful!

## What do we want to achieve?

Some of the biggest names in the game industry have already committed to act on energy and environmental issues via their video games, and Xbox is passionate to support this growing movement. Gaming content creators can contribute a sizeable part and become influential leaders by investing in more sustainable coding solutions to lower the energy demand and the carbon footprint of titles,  So, what do we want to achieve in this Sustainability Toolkit?

* Highlight the potential opportunities for energy efficiencies which will lower the energy demand and carbon footprint of our customers
* Provide targeted data for the best areas to begin introducing energy efficiency improvements
* Provide developers with a way to see the baseline energy efficiency, or inefficiency, of their titles on Xbox Series X|S, with a particular focus on the gaming experience
* Provide detailed and actionable reports to demonstrate where inefficiency has been observed
* Partner and collaborate with our game developers and publishers to build a reliable testing process

## Introducing the Xbox Sustainability Toolkit

Our goal is to empower creators and developers by providing information and tools to better understand the energy and emissions intensity of their games, and to introduce energy efficiency strategies into game development. The Xbox Developer Sustainability Toolkit includes analytical and visual systems, measurement tools, and resources to help creators make informed decisions about energy consumption and carbon emissions, associated with their game designs. The toolkit helps developers to leverage precision engineering feedback to help identify and reduce energy consumption in scenarios when a player doesn’t need it, thus ensuring the player experience is not negatively impacted.

* **Game Developer Kit (GDK) and Power Monitor tools.** Through these tools, game creators can view real-time energy consumption feedback down to the nearest millisecond. This can enable game creators to establish their baseline, measure GPU usage with granularity, and directly pinpoint energy inefficiencies with which they can experiment. This also comes with an API designed to be used by games that have their own profiling needs. Lastly, this can also be paired with the Xbox Series X Devkit’s front panel, which has a Power Load % value for quick and easy reference during game development. Don't forget you could also use a power watt meter, too.

* **APIs to change GPU frequencies when appropriate** Dynamic Power States is a feature that allows the system to dynamically control the GPU's power level based on the rendering workload. Most of the time, the GPU is not 100% utilised, so we can save energy by scaling the GPU's frequency back. If enabled, the driver will automatically select the appropriate p-state for the current rendering conditions based on recent frame time history.

* **Certification reports.** With support from the Xbox Sustainability and Certification teams, game creators can identify game energy consumption averages specific to most common in-game areas, like static menus and loading screens. This can help game creators understand how their own games compare relative to the industry average – and use this information to create their own success metrics. Speak to your Microsoft point of contact to request a report.

* **Power, energy, and emissions dashboards.** With game telemetry in place, these dashboards can offer any studio a bird’s eye view of the global average of how much energy their games are using relative to the platform average. Specifically, they show the carbon footprint and total energy used by a game and its studio over time. Please navigate to the [Partner Center page](sustainability-overview.md) to learn more.

* **The Energy Efficiency Essentials and case studies via the pilot program and Xbox Game Dev Docs.** The path to a more sustainable gaming industry requires knowledge sharing and community. As game creators across Xbox Game Studios, Xbox Game Studios Publishing, and the broader Xbox ecosystem refine experimentation methods, identify best practices, and co-develop new tools via our pilot program. A curated selection of learnings are published in the [Energy Efficiency Essentials](xbox-game-energy-efficiency-essentials.md) guide today.

## Early use cases from game creators

At Xbox, we believe that to reduce gaming’s impact on the environment, we must work in collaboration with our fans, game creators, and the industry. By reading the Case Studies pages on this site, you will learn about how the toolkit supported their efforts to build more sustainable games.

> [!TIP]
> You can also learn more from like-minded developers and publishers as part of [the United Nations Playing for the Planet Alliance](https://playing4theplanet.org/) and the [IGDA Climate Special Interest Group](https://www.igdaclimatesig.org/), which contain vocal advocates for more environmentally conscious activations that map in-game behaviour to real-world environmental projects.

## Want to find out more?

If you are interested in learning more, or are excited to take on a more active role in helping us expand on our developer tools, methods, and best practices, please reach out to <XboxSustainability@Microsoft.com>, and Cc your Microsoft point of contact, where we would be delighted to share more details. Please also continue reading our documentation both here on Xbox Game Dev Docs and in the [Game Developer Kit](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/sustainability-overview).
