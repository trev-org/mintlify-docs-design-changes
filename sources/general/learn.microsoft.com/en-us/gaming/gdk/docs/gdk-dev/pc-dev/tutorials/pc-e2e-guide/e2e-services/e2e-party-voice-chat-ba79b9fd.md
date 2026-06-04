# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-party-voice-chat?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-party-voice-chat?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Implement chat in your game

Feedback

Summarize this article for me

This article provides a summary of the steps involved in implementing chat in your game. For more information, be sure to review the pages in the [See also](https://learn.microsoft.com/#see-also) section at the end of the article.

## Implement chat features by using Microsoft Azure PlayFab Party

PlayFab Party, included in the Microsoft Game Development Kit (GDK), is the recommended solution for synchronous chat in the PC/Xbox ecosystems.

1. Set up the [PlayFab Party SDK](https://learn.microsoft.com/en-us/gaming/playfab/multiplayer/networking/party-sdks): PlayFab Party SDKs provide networking and voice/text chat communication for games. There are PlayFab Party SDKs for different platforms and game engines. Select and download the one that you need.
2. [Authenticate the player](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-user-sign-in?view=gdk-2604): if you're using PlayFab Party in Xbox and PC games, we recommend that you use the [Party Xbox Live Helper Library](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/party-xbox-live-guide) to ensure consistent functionality and behavior. This library helps your title meet Xbox services requirements.
3. Create a network: when using a PlayFab Party network with a game session, choose which client and player will create the network by using [PartyManager::CreateNewNetwork()](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/reference/classes/partymanager/methods/partymanager_createnewnetwork).
4. Create the [PartyLocalChatControl](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/reference/classes/partynetwork/partynetwork) object: this object acts as the management object for chat operations that are related to a specific local user. You can choose the input and output device, mute state, and accessibility preferences. Each local user can have no more than one chat control. For a local chat control to communicate with another chat control, the following requirements must be met.
 - The two chat controls must be in the same network.
5. Connect the chat control to the network: call [PartyNetwork::ConnectChatControl()](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/reference/classes/partynetwork/methods/partynetwork_connectchatcontrol). Upon connection, other devices in the network are notified that your chat control has joined the network with a [PartyChatControlJoinedNetworkStateChange](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/reference/structs/partychatcontroljoinednetworkstatechange) state change. You also receive a `PartyChatControlJoinedNetworkStateChange` for every other chat control already in the network and can immediately communicate with them.
6. Select audio inputs and outputs: use PlayFab Party to choose which audio devices are used by your chat control with the [PartyLocalChatControl::SetAudioInput()](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/reference/classes/partylocalchatcontrol/methods/partylocalchatcontrol_setaudioinput) and [PartyLocalChatControl::SetAudioOutput()](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/reference/classes/partylocalchatcontrol/methods/partylocalchatcontrol_setaudiooutput) methods. Use the [PartyAudioDeviceSelectionType](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/reference/enums/partyaudiodeviceselectiontype) enum to change the behavior of these methods:
 - `PartyAudioDeviceSelectionType::None`: This audio device selection type is the default.
 - `PartyAudioDeviceSelectionType::SystemDefault`: When this audio device selection type is chosen, the chat control attempts to use the system's default communication device.
 - `PartyAudioDeviceSelectionType::PlatformUserDefault`: When this audio device selection type is chosen, `PartyLocalChatControl::SetAudioInput()` and `PartyLocalChatControl::SetAudioOutput()` require that the `audioDeviceSelectionContext` parameter be set to a platform user ID. PlayFab Party then attempts to use the platform default communication device that's associated with that user.
 - `PartyAudioDeviceSelectionType::Manual`: When this audio device selection type is chosen, `PartyLocalChatControl::SetAudioInput()` and `PartyLocalChatControl::SetAudioOutput()` use the `audioDeviceSelectionContext` parameter as a valid audio device identifier and attempt to use any device that matches that identifier.
7. [Implement chat permissions and muting](https://learn.microsoft.com/en-us/gaming/playfab/community/voice-communications/concepts-chat-permissions-and-muting): PlayFab Party gives you fine-grained control over how your players can communicate with each other. Rather than specifying teams or channels, PlayFab Party requires explicitly defining the permissions between each pair of chat controls.
8. Implement text chat, translation, and moderation: PlayFab Party also enables you to send and receive text chat from other chat controls.
 - The [PartyLocalChatControl::SendText()](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/reference/classes/partylocalchatcontrol/methods/partylocalchatcontrol_sendtext) method enables you to send text messages to an arbitrary number of chat controls. You can be assured that only chat controls that have the appropriate `PartyChatPermissionOptions::ReceiveText` chat permission receive the messages.
 - Text chat translation can also be enabled by calling [PartyLocalChatControl::SetTextChatOptions()](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/reference/classes/partylocalchatcontrol/methods/partylocalchatcontrol_settextchatoptions).
 - Setting the [PartyTextChatOptions::TranslateToLocalLanguage](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/reference/enums/partytextchatoptions#constants) option causes PlayFab Party to translate incoming text messages to the local chat control's language.
9. Implement accessible chat: powered by Azure Speech Services, PlayFab Party can [transcribe player voice chat](https://learn.microsoft.com/en-us/gaming/playfab/community/voice-communications/party-speech-to-text-ux-guidelines) and [synthesize speech from text](https://learn.microsoft.com/en-us/gaming/playfab/community/voice-communications/party-text-to-speech-ux-guidelines).
10. [Implement audio input noise suppression](https://learn.microsoft.com/en-us/gaming/playfab/community/voice-communications/concepts-noise-suppression): PlayFab Party enables you to suppress background noise in captured microphone audio before it's transmitted to remote chat controls. This can significantly increase the quality of your players' voice audio.

## See also

[PlayFab documentation](https://learn.microsoft.com/en-us/gaming/playfab/) is the best source of up-to-date information. For details, see the following articles and sample.

- [Understanding how PlayFab Party chat works](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/concepts-chat)
 
- [Adding chat by using Microsoft Azure PlayFab Party](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/chat/playfab-party-intro-chat?view=gdk-2604)
 
- [NetRumble Demo Game](https://github.com/PlayFab/PlayFabNetRumble)
 
 This is a simple multiplayer game that shows how to use the Microsoft Azure PlayFab Party and Multiplayer C++ SDKs and APIs in games. This sample includes a voice chat feature.
 

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