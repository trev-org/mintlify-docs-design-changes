---
title: Xbox Game Energy Efficiency Essentials
description: This checklist presents a first-release collection of essential suggestions for game developers who wish to manage their game's power consumption more responsibly without sacrificing gameplay fidelity
author: danielmjacobs
ms.author: djacobs
ms.topic: overview 
ms.date: 07/25/2023
---

# Xbox Game Energy Efficiency Essentials

![Xbox Sustainability banner image](images/xbox-sus-image-1200.png)

## What are the Sustainability Energy Efficiency Essentials?

This checklist presents a first-release collection of essential suggestions for game developers who wish to manage their game's power consumption more responsibly without sacrificing gameplay fidelity. By implementing these recommendations, developers can significantly lower the energy usage of their games. This unlocks potential to effectively reduce the carbon footprint associated with millions of games and consoles worldwide. Not only does this foster a more sustainable gaming ecosystem, but it also translates into tangible benefits for players themselves, as lower power consumption directly contributes to reduced energy bills. Join us on this transformative journey towards greener gaming, where innovation meets environmental responsibility.

In close collaboration with Xbox Game Studios and Xbox Sustainability Toolkit pilot partners, this checklist contains game-level sustainability standards that our core sustainability team have authored to serve developers seeking energy savings and efficiency. This standard is:

* A solid foundation for sustainability in all titles
* A prioritization guidelines and checklist for sustainability planning
* A set of consistent standards so players understand the value and know what to expect

> [!NOTE]
> **Why the Essentials?**
> Internal and external research validates players are increasingly cost sensitive; expect companies to strengthen their climate commitments; and are supportive of energy efficiency feature as options. By meeting our players' needs, we can also:
>
> * Support the increasing number of studios and publishers who have ambitions of lowering their carbon footprints
> * Contribute to a global effort focused on reducing the video game industry's carbon footprint
> * Underpin Microsoft's ambition be an industry leader in sustainability
> * Keep ahead of potential international energy regulations
> * Ensure portfolio parity and player expectations
> * Support engineering interest, viability, and normalization of these practices at-scale
>

Studio-wide commitment to using the Energy Efficiency Checklist helps to ensure that players, investors, and energy regulators will be able to trust that the video game industry will meet a minimum expectation for sustainability features which have been prioritized based on user research data around player needs and impact. Responsible use of hardware power by games will deliver reductions to gamers' energy costs whilst simultaneously lowering the real-world environmental impact.

Additionally, we'll be able to ensure video games meets and exceeds the sustainability expectations being set by other publishers by having feature development completed in partnership with the platform's corporate sustainability ambitions. And finally, we'll be setting realistic goals by aiming for features accounting for the realities of implementation and feasibility.

> [!TIP]
> Please consult the _Further Reading_ section at the bottom of this document to discover developer guides, case studies, and learn about helpful GDK tooling.

## What type of feature(s) make sense for my game?

Inclusion of energy efficiency features in games is possible for any game providing the right planning and approach is taken. We believe it can take one of two approaches:

Passive Features | Opt-in/Opt-out Features
:--- | :---
Design choice. Passive features are design choices introduced to lower the game's power consumption at opportune moments when gamers would not even realize. These should ideally be imperceptible to the gamer and will require a degree of design foresight to ensure power saving measures activate. For example, capping loading screens or low animated lobbies @ 30 FPS. | Player choice. Opt-in/out features could be considered similar to accessibility design but to lower the power demand of the game. These are features the gamer can specifically opt-in or opt-out and the default experience can be up to the studio to set. For example, a dedicated eco-mode outputting lower resolution than what the user's set up is capable of providing.

## How to apply the ideas in this document

**Create a copy of this checklist** that your team can use to review opportunities, create notes, and mark what may be most useful and relevant for your title – whether it's already launched or in early development, there are many opportunities to discover energy savings in ways that make sense for your design goals!

Please pay attention to the expandable summaries underneath most suggestions because these remark on if it is a proven case study developed by studios in the Xbox Sustainability Toolkit Pilot Program, or are established practices in the broader market.

**Remember - there's no need to do this alone!** Connect with like-minded game developers and gaming sustainability subject matter experts who are ready to support you on your journey. If and when you're thinking about experimentation, have a case study you'd like broadcasted, or just want to chat about this ever evolving topic – reach out to the Xbox Sustainability working group via the contact info at the end of this document.

## The Essentials

### Preparation

* **Request a Certification Sustainability Power Report** to receive targeted insights into your title's current sustainability performance. This can support studio ROI decisions. Please contact your Microsoft point of contact to learn more and request a bespoke report for your title.

    Late stage unreleased or released games can get a report produced by the Certification team which report on your title's power consumption in specific in-game areas.

    <details>
    <summary>Additional information (expandable)</summary>

    > Validated? Yes
    >
    > Impact? N/A

    </details>

* **View sustainability telemetry on the history of your released title's performance** to understand your title's current baseline and identify opportunities for efficiency. This can also be used to monitor the improvements of a title's sustainability performance after a content update has released, for example (released titles only).

    Please navigate to the [Partner Center Data](partner-center-data.md) page to learn how you can see the average power consumption, global energy footprint, and global carbon/greenhouse gas emissions footprint for all your released games around the world.

    <details>
    <summary>Additional information (expandable)</summary>

    > Validated? Yes
    >
    > Impact? N/A

    </details>

* **Access developer tooling in the GDK and on Xbox Game Dev Docs** to add sustainability to your toolbox and prepare for experimentation. See the _Further Reading_ section at the bottom for more details.
  * Review case studies for experimentation practices and learnings
  * Step-by-step configuration instructions for testing
  * Use the Power Monitor UI in Xbox Manager from the GDK
  * Seek 1:1 training to get you up and running quickly and easily.
  * Reach out to your Xbox point of contact for support!

  Please note: Access to the GDK might require sign-in credentials provided by an NDA Xbox program.

  <details>
  <summary>Additional information (expandable)</summary>

  > Validated? Yes
  >
  > Impact? N/A

    </details>

### Graphics

* **Lower frame rate in most animated menus to buy back performance and introduce sizeable energy savings.**

  Recommendations:
  * 30 Hz: When interacting with customization elements that do not need to feel snappy to the gamer
  * 60 Hz: There are some menus that require a snappy input response time for gamers to have a smoother experience
  * 120 Hz: There is little necessity to deliver 120 FPS menu

  Other considerations:
  * Do you need max frame rates for twitch sensitive browsing for the user?
  * Consider that pause menus are unlikely to need >30 Hz
  * Heavily game engine dependent - there are some engines that won't run menus on 30 FPS
  * Requires local control per menu type – dependent upon game type

  <details>
  <summary>Additional information (expandable)</summary>

  > Validated? Yes
  >
  > Type: Passive
  >
  > Impact? High

    </details>

* **Lower the game's internal resolution across in-game menus, lobbies, and/or leaderboards**

  Recommendations:
  * Consider lowering from your title's max internal resolution.
  * The console upscaler can keep the menu output at 2160p if desired
  * Can you drop by 10, 15, 20% (prior to upscaling)
  * If opt-in/out, have the default experience be turned on. For more information, see Power Saving Mode
  * Make sure that the UI is always maintaining native resolution to ensure quality legibility and visual accessibility

  Other considerations:
  * The UI should not be affected by this downscale if the UI exists on its own buffer. However, if your title is being streamed, consider running tests to ensure latency optimization is unaffected.
  * Because most games use some kind of dynamic resolution, developers should have access to down sampling and upscaling.
  * Upscalers like AMD's FSR, NVIDIA's DLSS, TSR, TAAU, or Intel's XESS, should be used aggressively to lower your internal rendering resolution but still allow full-screen quality.

  <details>
  <summary>Additional information (expandable)</summary>

  > Validated? Yes
  >
  > Type: Passive or Opt-in/Opt-out
  >
  > Impact? High

    </details>

* **Lower resolution and/or frame rate combinations based on an idle timer (ex. 30 seconds, 1-minute)**

    Recommendations:
  * If the title detects inactivity or no input from the controller when the game is in an area that accepts player input/navigation, this is an excellent candidate to introduce energy saving measures.
  * If a player is in the front-end screens and hasn't touched an input device for an extended period of time, it's likely we can reduce the resolution and/or frame rate without it being noticeable.

  Other considerations:
  * Players spend a significant amount of time in the front-end screens. We see in our telemetry that players often leave the game running in these screens for extended periods between matches
  * The GPU load could be almost as high in the lobby as it is in gameplay. The front-end scenes are simpler and so require less GPU time at a given resolution. This is dependent on what's on the screen at the time.
  * Players may want to opt-in or out for a variety of reasons, so providing choice is useful. For instance, streamers may wish to maintain high resolution and/or frame rate when streaming – so this may be a feature they temporarily opt-out of when doing so.

  <details>
  <summary>Additional information (expandable)</summary>

  > Validated? Yes
  >
  > Type: Passive or Opt-in/Opt-out
  >
  > Impact? High

  </details>

* **Consider using 2.5D implementation, especially in menu screens and lobbies.**

  Recommendations:
  * Generally speaking, this uses a 2D plane mapped with a camera correct perspective image, coupled with a 3D avatar or model placed in the foreground.
  * Case studies demonstrate that 3D menus vs 2.5D menus can deliver ~30% power savings.
  * Load times should significantly improve.
  * Adding FX particles may deliver more ambience. Large Z depth space so FX and lighting can provide more depth.

  Other considerations:
  * Some game engines use dynamic resolution which would then increase the resolution as GPU usage eases. Consider locking resolution to extract the most power savings.
  * 2D background images can be created in any DCC tool, such as Unity, Faber, Unreal, Maya, etc.
  * 3D avatars or models need to be lit to match the new 2D backplate and the background cannot support motion

  <details>
  <summary>Additional information (expandable)</summary>

  > Validated? Yes
  >
  > Type: Passive
  >
  > Impact? High

  </details>

* **Detect controller disconnection events and introduce power saving measures**

  Recommendations:
  * If the primary active controller reports as disconnected for an extended period of time, it's likely we can reduce things like the resolution and/or frame rate without it being noticeable.

  Other considerations:
  * Titles have shared with us that on average, their games spend approximately 11% of the game's duration with a controller disconnected message.
  * Players may want to opt-in or out for a variety of reasons, so providing choice is useful. For instance, streamers may wish to maintain high resolution and/or frame rate when streaming – so this may be a feature they temporarily opt-out of when doing so.

  <details>
  <summary>Additional information (expandable)</summary>

  > Validated? Yes
  >
  > Type: Passive or Opt-in/Opt-out
  >
  > Impact? High

  </details>

* **Set minimally- or non-interactive loading screens to lower frame rates.**

  Recommendations:
  * If there is no interaction by the user, this is a small but helpful way to lower energy.

  <details>
  <summary>Additional information (expandable)</summary>

  > Validated? Yes
  >
  > Type: Passive
  >
  > Impact? Low

  </details>

* **Reduce the number of updates or calls executed for off-screen objects per frame.**

    Many existing techniques (ex. culling, LOD) that are used to hit performance targets can also be used to save energy. The amount of savings here will be specific to a game as most objects still need to be updated, even when not on the screen. Games might be able to save on animation calculations or VFX, but physics collision and audio (for example) will still need to be updated. There may be benefits from LOD'ing animation, based on the distance from the camera for small objects, or reducing the number of updates to every nth frame.

    <details>
    <summary>Additional information (expandable)</summary>

    > Validated? Yes
    >
    > Type: Passive
    >
    > Impact? Moderate

    </details>

### Design architecture

* **Adopt the Dynamic Power States API** Dynamic Power States is a feature that allows the system to dynamically control the GPU's power level based on the rendering workload. Most of the time, the GPU is not 100% utilised so we can save energy by scaling back the GPU's frequency. If enabled, the driver will automatically select the appropriate (power state) for the current rendering conditions based on recent frame time history

    The intention is to unlock sizeable power savings for games without the impacting gaming experience:
  * For titles who wish to enable DPS, please call **SetDriverHintX(DRIVER_HINT_SET_DYNAMIC_POWER, 1)** on the DirectX device
  * The GPU automatically changes speed to meet game demand
  * The GPU utilises normalised frame statistics to tune the power state
  * Consider using the Sustainability Toolkit to create more opportunities for power savings

  <details>
  <summary>Additional information (expandable)</summary>

  > Validated? Yes
  >
  > Type: Opt-in/Opt-out or Passive
  >
  > Impact? High

  </details>

* **Implement a visible, player-facing Power Saving Mode that is ON by default.** This can enable players to have an active choice for their energy efficiency adjustments while maintaining developer defined graphic fidelity targets.

    While passive savings can be beneficial to many players, there are a few use cases in which an explicit Power Saving Mode is useful:
  * It lets gamers feel in control about their experience and acclimates them to the concept
  * Content creators may want a higher performance experience when live-streaming a game
  * Developers want to explicitly signal sustainability as part of their company's core values, and reinforce opportunities for players to build and normalize sustainable gaming habits

  <details>
  <summary>Additional information (expandable)</summary>

  > Validated? No
  >
  > Type: Opt-in/Opt-out
  >
  > Impact? Moderate

  </details>

* **Design menus as 2D backplates (if there is no camera or 3D motion to capture).**

  Recommendations:
  * If menus can be collapsed into a 2D backplate rather than a 3D scene, you can save tonnes of CPU and GPU performance. As long as there is no 3D motion in the background

  <details>
  <summary>Additional information (expandable)</summary>

  > Validated? Yes
  >
  > Type: Passive
  >
  > Impact? Moderate

  </details>

* **Base game install is distinct from high-quality assets, therefore reducing installation time and future time downloading and installing updates.**

    Intelligent Delivery is a set of features whose purpose is to reduce the size of game installs on customer devices. This is accomplished by segmenting content into different logical chunks and applying specifiers to those chunks to set up rules for when those chunks will be installed.

  Recommendations:
  * Take advantage of Features & Recipes. Features represent independently addable and removable functionality within a base game. For example, a game can make its campaign and multiplayer functionality independently addable and removable to allow users to recover space for Features they don't want. A Recipe is a list of Features to be installed.
  * Given most players will not be able to use 8K assets, 4K and 8K assets can often be separate installs.

  <details>
  <summary>Additional information (expandable)</summary>

  > Validated? Yes
  >
  > Type: Passive
  >
  > Impact? Low

  </details>

### Process

* **Schedule and time shift job queues for operations to occur during off-peak hours.** Optimizing updates and downloads to run at a time when energy-intensive infrastructure can use the most renewable energy, often meaning cheaper energy.

  Recommendations:
  * There are non-profit organizations who offer technology solutions that make it easy for anyone to use an API to achieve emissions reductions without compromising cost, comfort, and function.
  * Energy grid emissions intensity on a scale of 1 - 100 relative to each location. Lower on scale is the cleanest this grid gets and higher on the scale is the dirtiest this grid gets.

  <details>
  <summary>Additional information (expandable)</summary>

  > Validated? Yes
  >
  > Type: Passive
  >
  > Impact? Low

  </details>

### Coming soon & opportunities to validate

* **Introduce energy savings during the constrained game life-cycle state.** When a game enters the Constrained execution state, it continues to execute, but with reduced resource availability. The game cannot receive user input in this state. This transition to a constrained state happens when: (1) a user opens the Guide, (2) Title-callable UI (TCUI) is presented (such as Account Picker), (3) a user returns to Home, or (4) the game loses focus.

  Recommendations:
  * During a constrained state, the title is able to make energy-saving decisions, like pausing gameplay and dropping computational demand. 
  * The title could remain paused until the user decides to resume their gameplay experience.

  Other considerations:
  * Data shows that games can spend ~15% of their life-cycle in a constrained state, and Certification data also demonstrates that titles in a constrained state can use as much power as gameplay.

  To learn more about constrained as a life-cycle state, please refer to the [GDK documentation here](https://developer.microsoft.com/games/xbox/docs/gdk/xbox-game-life-cycle) (this link requires sign-in credentials provided by an NDA Xbox program).

  <details>
  <summary>Additional information (expandable)</summary>

  > Validated? Yes
  >
  > Type: Passive
  >
  > Impact? Moderate

  </details>

## Questions and feedback?

Please send an email to the friendly people at [XboxSustainability@Microsoft.com](mailto:XboxSustainability@Microsoft.com) who will honestly be delighted to hear your thoughts and suggestions. You'll make our day!

> [!TIP]
> **"My team has been experimenting and we have some interesting insights to share! What should we do next?"** We're excited to spread the word and increase your impact industry-wide! Reach out to the Xbox Sustainability working group. We'd love to help broadcast your story and add your best practices to this checklist so that more game developers can benefit from your learnings. You will be credited in this doc to acknowledge your hard work and celebrate your sustainability leadership!

## Further Reading

* [A GDK developer introduction on how to identify areas for energy efficiency improvements.](developer-tools/developer-overview.md)
* The Xbox Sustainability Toolkit pilot program for developers is building new resources on an ongoing basis – from quickstart experimentation guides to workshops. Reach out via the contact info below for more information.
