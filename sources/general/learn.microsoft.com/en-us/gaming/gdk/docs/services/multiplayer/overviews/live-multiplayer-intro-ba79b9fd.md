# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/live-multiplayer-intro?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/live-multiplayer-intro?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Xbox services multiplayer overview

Feedback

Summarize this article for me

This topic describes multiplayer features in Xbox services that include Multiplayer Session Directory (MPSD), matchmaking, networking, voice chat, and text chat. Xbox services multiplayer helps you create real-time multiplayer gameplay experiences in your title.

You can use these multiplayer features to create interactions such as chatting and playing together over the internet _for Xbox services gamers_. These interactions can help dramatically extend the life and use of your title beyond typical solo play.

You can also use these features with your custom solutions and Azure PlayFab multiplayer features. To mix and match these features when developing titles by using the Microsoft Game Development Kit (GDK), see the following:

- [Multiplayer overview (NDA topic)](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/multiplayer-intro?view=gdk-2604)
- [Xbox and PC multiplayer design guidance (NDA topic)](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/multiplayer-design-guidance-xbox-pc-gdk?view=gdk-2604)
- [Cross-platform multiplayer design guidance (NDA topic)Authorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/multiplayer-design-guidance-cross-platform?view=gdk-2604)

If your titles need server hosting, see [Multiplayer Servers](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/servers/).

By building a great multiplayer experience, your title can use the large social network of Xbox services gamers to help increase the gamer base for your game and promote a sustained community of dedicated fans—playing together.

## Xbox services multiplayer features

You can use Xbox services multiplayer APIs to enable features like sending and accepting invites, matchmaking, voice chat, and text chat for Xbox services gamers.

These features can be categorized into the following major subsystems.

- [Xbox services multiplayer overview](https://learn.microsoft.com/#xbox-services-multiplayer-overview)
 - [Xbox services multiplayer features](https://learn.microsoft.com/#xbox-services-multiplayer-features)
 - [Multiplayer session process lifetime management](https://learn.microsoft.com/#multiplayer-session-process-lifetime-management)
 - [Multiplayer Session Directory (MPSD)](https://learn.microsoft.com/#multiplayer-session-directory-mpsd)
 - [Multiplayer Manager (MPM)](https://learn.microsoft.com/#multiplayer-manager-mpm)
 - [Simple and advanced matchmaking](https://learn.microsoft.com/#simple-and-advanced-matchmaking)
 - [Xbox services social experiences for titles with custom session and matchmaking components](https://learn.microsoft.com/#xbox-services-social-experiences-for-titles-with-custom-session-and-matchmaking-components)
 - [Secure real-time voice and text chat communication](https://learn.microsoft.com/#secure-real-time-voice-and-text-chat-communication)
 - [Real-time networking and communication solution for client-host titles](https://learn.microsoft.com/#real-time-networking-and-communication-solution-for-client-host-titles)
 - [See also](https://learn.microsoft.com/#see-also)

### Multiplayer session process lifetime management

Multiplayer session process lifetime management shares and coordinates the information that's needed to connect a group of gamers. It can facilitate interactions between client/server, matchmaking logic and session creations, UI and multiplayer game experiences, and more.

There are several types of services available. For more information about the differences between these services, see [Multiplayer overview (NDA topic)](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/multiplayer-intro?view=gdk-2604).

#### Multiplayer Session Directory (MPSD)

Multiplayer Session Directory (MPSD) enables you to manage extensively customized multiplayer experiences. MPSD can be used for client/server and client-host designs. MPSD also integrates the UI (also known as the _shell_) experiences and the console OS to find and invite Xbox services gamers for play. For more details, see [Multiplayer Session Directory overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpsd/live-mpsd-overview?view=gdk-2604).

#### Multiplayer Manager (MPM)

For _client-host_ (peer-to-peer with relay) titles that require only simple multiplayer capabilities, you can instead use Multiplayer Manager (MPM). It's a client-side API that enables common multiplayer scenarios that follow best practices. MPM is best suited for game sessions that have no more than eight players. For more details, see [Multiplayer Manager overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpm/live-multiplayer-manager-overview?view=gdk-2604).

### Simple and advanced matchmaking

SmartMatch is a matchmaking service that provides traditional quick-match capabilities as well as session-browse and support for highly customized matchmaking scenarios.

You can also integrate the Xbox Looking for Group system in your title so that gamers can find other Xbox services gamers who share their interests and goals. For more details, see [Matchmaking overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/matchmaking/live-matchmaking-overview?view=gdk-2604).

### Xbox services social experiences for titles with custom session and matchmaking components

Xbox services social experiences around invites and joins are requirements for Xbox and Windows PC titles.

Multiplayer Activity (MPA) is designed to help titles that are using custom/studio-developed components, like matchmaking and lobby management functionalities, to enhance these social experiences. For more details, see [Multiplayer Activity feature overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpa/live-mpa-overview?view=gdk-2604).

### Secure real-time voice and text chat communication

Game Chat 2 facilitates secure in-game communication by using Xbox services social graph, media services, and specialized encoding hardware on Xbox One (or later) devices. For more details, see [Intro to Game Chat 2](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/chat/game-chat2/game-chat-2-intro?view=gdk-2604).

### Real-time networking and communication solution for client-host titles

If you need an integrated, real-time networking and communication solution, consider Azure PlayFab Party. Party is a cross-platform solution that's designed to quickly add multiplayer experiences in client-host (peer-to-peer with relay) titles. For more information, see [Party overview](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/).

Xbox Integrated Multiplayer (XIM), a similar solution that's provided by Xbox services, has been deprecated. XIM doesn't work for Microsoft Game Development Kit (GDK) titles. No new Xbox One Software Development Kit titles can adopt this technology. However, we will continue to support XIM for existing Xbox One Software Development Kit titles so that published titles will continue to work.

Note

For titles that are using client/server architecture, you can still use Party as a real-time voice and chat communication solution.

## See also

[Multiplayer overview (NDA topic)](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/multiplayer-intro?view=gdk-2604)

[Common multiplayer scenarios](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/live-common-multiplayer-scenarios?view=gdk-2604)

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