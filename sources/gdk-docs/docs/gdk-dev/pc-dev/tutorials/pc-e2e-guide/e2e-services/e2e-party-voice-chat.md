---
author: sdgmiller
title: "Implement chat in your game"
description: "Describes how to implement chat in your game."
kindex:
- User authentication and ownership
- Xbox services, Xbox account
- Xbox services, identity
- Xbox services, user authentication
ms.topic: article
edited: 06/03/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Implement chat in your game

This article provides a summary of the steps involved in implementing chat in your game. For more information, be sure to review the pages in the [See also](#see-also) section at the end of the article.

## Implement chat features by using Microsoft Azure PlayFab Party

PlayFab Party, included in the Microsoft Game Development Kit (GDK), is the recommended solution for synchronous chat in the PC/Xbox ecosystems.

1. Set up the [PlayFab Party SDK](/gaming/playfab/multiplayer/networking/party-sdks): PlayFab Party SDKs provide networking and voice/text chat communication for games. There are PlayFab Party SDKs for different platforms and game engines. Select and download the one that you need. 
1. [Authenticate the player](e2e-user-sign-in.md): if you're using PlayFab Party in Xbox and PC games, we recommend that you use the [Party Xbox Live Helper Library](/gaming/playfab/features/multiplayer/networking/party-xbox-live-guide) to ensure consistent functionality and behavior. This library helps your title meet Xbox services requirements.  
1. Create a network: when using a PlayFab Party network with a game session, choose which client and player will create the network by using [PartyManager::CreateNewNetwork()](/gaming/playfab/features/multiplayer/networking/reference/classes/partymanager/methods/partymanager_createnewnetwork).
1. Create the [PartyLocalChatControl](/gaming/playfab/features/multiplayer/networking/reference/classes/partynetwork/partynetwork) object: this object acts as the management object for chat operations that are related to a specific local user. You can choose the input and output device, mute state, and accessibility preferences. Each local user can have no more than one chat control. For a local chat control to communicate with another chat control, the following requirements must be met.
   * The two chat controls must be in the same network.
1. Connect the chat control to the network: call [PartyNetwork::ConnectChatControl()](/gaming/playfab/features/multiplayer/networking/reference/classes/partynetwork/methods/partynetwork_connectchatcontrol). Upon connection, other devices in the network are notified that your chat control has joined the network with a [PartyChatControlJoinedNetworkStateChange](/gaming/playfab/features/multiplayer/networking/reference/structs/partychatcontroljoinednetworkstatechange) state change. You also receive a `PartyChatControlJoinedNetworkStateChange` for every other chat control already in the network and can immediately communicate with them.
1. Select audio inputs and outputs: use PlayFab Party to choose which audio devices are used by your chat control with the [PartyLocalChatControl::SetAudioInput()](/gaming/playfab/features/multiplayer/networking/reference/classes/partylocalchatcontrol/methods/partylocalchatcontrol_setaudioinput) and [PartyLocalChatControl::SetAudioOutput()](/gaming/playfab/features/multiplayer/networking/reference/classes/partylocalchatcontrol/methods/partylocalchatcontrol_setaudiooutput) methods. Use the [PartyAudioDeviceSelectionType](/gaming/playfab/features/multiplayer/networking/reference/enums/partyaudiodeviceselectiontype) enum to change the behavior of these methods:
   * `PartyAudioDeviceSelectionType::None`: This audio device selection type is the default.
   * `PartyAudioDeviceSelectionType::SystemDefault`: When this audio device selection type is chosen, the chat control attempts to use the system's default communication device. 
   * `PartyAudioDeviceSelectionType::PlatformUserDefault`: When this audio device selection type is chosen, `PartyLocalChatControl::SetAudioInput()` and `PartyLocalChatControl::SetAudioOutput()` require that the `audioDeviceSelectionContext` parameter be set to a platform user ID. PlayFab Party then attempts to use the platform default communication device that's associated with that user.
   * `PartyAudioDeviceSelectionType::Manual`: When this audio device selection type is chosen, `PartyLocalChatControl::SetAudioInput()` and `PartyLocalChatControl::SetAudioOutput()` use the `audioDeviceSelectionContext` parameter as a valid audio device identifier and attempt to use any device that matches that identifier.
1. [Implement chat permissions and muting](/gaming/playfab/community/voice-communications/concepts-chat-permissions-and-muting): PlayFab Party gives you fine-grained control over how your players can communicate with each other. Rather than specifying teams or channels, PlayFab Party requires explicitly defining the permissions between each pair of chat controls.
1. Implement text chat, translation, and moderation: PlayFab Party also enables you to send and receive text chat from other chat controls.
   * The [PartyLocalChatControl::SendText()](/gaming/playfab/features/multiplayer/networking/reference/classes/partylocalchatcontrol/methods/partylocalchatcontrol_sendtext) method enables you to send text messages to an arbitrary number of chat controls. You can be assured that only chat controls that have the appropriate `PartyChatPermissionOptions::ReceiveText` chat permission receive the messages.
   * Text chat translation can also be enabled by calling [PartyLocalChatControl::SetTextChatOptions()](/gaming/playfab/features/multiplayer/networking/reference/classes/partylocalchatcontrol/methods/partylocalchatcontrol_settextchatoptions).
   * Setting the [PartyTextChatOptions::TranslateToLocalLanguage](/gaming/playfab/features/multiplayer/networking/reference/enums/partytextchatoptions#constants) option causes PlayFab Party to translate incoming text messages to the local chat control's language. 
1. Implement accessible chat: powered by Azure Speech Services, PlayFab Party can [transcribe player voice chat](/gaming/playfab/community/voice-communications/party-speech-to-text-ux-guidelines) and [synthesize speech from text](/gaming/playfab/community/voice-communications/party-text-to-speech-ux-guidelines).
1. [Implement audio input noise suppression](/gaming/playfab/community/voice-communications/concepts-noise-suppression): PlayFab Party enables you to suppress background noise in captured microphone audio before it's transmitted to remote chat controls. This can significantly increase the quality of your players' voice audio. 

## See also 

[PlayFab documentation](/gaming/playfab/) is the best source of up-to-date information. For details, see the following articles and sample.

* [Understanding how PlayFab Party chat works](/gaming/playfab/features/multiplayer/networking/concepts-chat)

* [Adding chat by using Microsoft Azure PlayFab Party](../../../../../services/multiplayer/chat/playfab-party-intro-chat.md)

* [NetRumble Demo Game](https://github.com/PlayFab/PlayFabNetRumble)

   This is a simple multiplayer game that shows how to use the Microsoft Azure PlayFab Party and Multiplayer C++ SDKs and APIs in games. This sample includes a voice chat feature.
