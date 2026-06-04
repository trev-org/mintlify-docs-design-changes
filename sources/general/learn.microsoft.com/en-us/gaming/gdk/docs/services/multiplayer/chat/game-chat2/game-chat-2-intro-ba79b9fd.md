# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/chat/game-chat2/game-chat-2-intro?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/chat/game-chat2/game-chat-2-intro?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Intro to Game Chat 2

Feedback

Summarize this article for me

Use Game Chat 2 to add voice and text chat communications to your app while respecting your users' privacy settings and fulfilling the Xbox console GDK title requirements relating to voice and text chat. Game Chat 2 relies on your GDK title to provide network transport. If you're looking for an all-in-one solution that includes both chat audio and transport, consider [Microsoft Azure PlayFab Party](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/console/networking/game-mesh/playfab-party-intro-networking?view=gdk-2604). For more information about API-specific references, see [API contents (Game Chat 2)](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/chat/gamechat2/gamechat2_members?view=gdk-2604).

Note

Game Chat 2 and PlayFab Party APIs use the same internal platform functionality and can't be used in parallel within a title.

Game Chat 2 provides the features shown in the following table for managing your game's communications.

Expand table

| Feature | Description |
| --- | --- |
| Communication relationships | Provides subtle control over how your users communicate with one another. Rather than specifying teams or channels, Game Chat 2 requires that explicit relationships between each pair of users is defined. Game Chat 2 communication relationships support unidirectional and bidirectional communication between any pair of users. Voice and text communication relationships can be set independently of each other. |
| Accessibility | Respects the "Game Chat Transcription" preference of your users and performs translations to create chat text messages that represent incoming speech audio and play synthesized speech audio for outgoing chat text messages, respectively. |
| Xbox services integration | Uses Xbox services to ensure that each user's preferences and privileges are respected. |
| Voice activity detection | Performs voice activity detection to determine when audio data includes voice activity. |
| Automatic gain control | Performs automatic gain control to minimize variation in a user's microphone output. |
| Codecs | Encodes audio data that's delivered to remote instances of the app. On Xbox One, this encoding (and decoding on the receiving end) is hardware accelerated. |
| `chat_manager::start`/`finish_processing_state_changes` | The pair of methods that are called by the app every UI frame to perform asynchronous operations to retrieve results that are handled in the form of [game\_chat\_state\_change](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/chat/gamechat2/structs/game_chat_state_change?view=gdk-2604) structures. The associated resources are freed when finished. |
| `chat_manager::start`/`finish_processing_data_frames` | The pair of methods that are used to add Game Chat 2 into the app's transport layer. These methods are called by the app every network frame to retrieve and distribute [game\_chat\_data\_frame](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/chat/gamechat2/structs/game_chat_data_frame?view=gdk-2604) objects to instances of the app on remote devices, and then to free the associated resources when finished. |
| `chat_manager::process_incoming_data` | The method used to give data to Game Chat 2 that's been delivered over the app's transport layer from a remote instance of Game Chat 2. |
| Real-time audio manipulation | Inserts the app in the chat audio pipeline to inspect or manipulate chat audio data. For more information, see [Real-time audio manipulation](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/chat/game-chat2/real-time-audio-manipulation?view=gdk-2604). |

The app informs the library of users on the local device and users on the remote devices that are expected to chat together. Then the app configures the relationships between each user.

Game Chat 2 polls audio from the local users' microphones, performs automatic gain control and voice activity detection, encodes the data, and then exposes the audio data to be delivered to remote instances of Game Chat 2 via `chat_manager::start`/`finish_processing_data_frames`.

The app delivers the data contained in the [game\_chat\_state\_change](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/chat/gamechat2/structs/game_chat_state_change?view=gdk-2604) object to the remote instances of Game Chat 2 that are specified in the same object.

Upon receiving the data, remote instances of the app submit the data to their own instance of Game Chat 2 via `chat_manager::process_incoming_data`. Game Chat 2 decodes the incoming data and then renders it to the local user's audio device.

## Communications privileges and privacy

Game Chat 2 enforces Xbox services privileges and privacy requirements. Audio data isn't generated by users who don't have communications privileges. Audio data isn't rendered from users who are blocked via privacy settings.

## Network initialization

You do not need to wait for network initialization before initializing the Game Chat 2 library. However, you will have to wait for network initialization before creating any sockets to send/receive Game Chat 2 packets. Game Chat 2 will not generate any packets to send until after the network is initialized. For more information on network initialization, see [Network initialization and connectivity](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/console/networking/initialization-connectivity-networking?view=gdk-2604#ID4ETA).

## Suspend/resume

You should register for suspend and resume events via `RegisterAppStateChangeNotification`. On suspend, you should cleanup Game Chat 2 by calling `chat_manager::cleanup()`. This call can take a couple hundred milliseconds to complete, so you should make it in parallel or asynchronously to your other suspend logic in order to avoid timing out your suspend handler. The `cleanup` call does not need to complete before your suspend handler returns.

On resume, once the `cleanup` call has completed you should call `chat_manager::singleton_instance().initialize(...)` to reinitialize Game Chat 2. Failing to call `cleanup` and `initialize` on a suspend/resume state change will result in title crashes if you continue to try to use Game Chat 2.

## API changes from the Universal Windows Platform (UWP) and Xbox One ERA to the GDK

The following changes were made to the API to support Game Chat 2.

- `game_chat_audio_encoding_type_and_bitrate` was updated to [game\_chat\_audio\_encoding\_bitrate](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/chat/gamechat2/enums/game_chat_audio_encoding_bitrate?view=gdk-2604).
- `set_audio_encoding_type_and_bitrate` was updated to `set_audio_encoding_bitrate`.
- `audio_encoding_type_and_bitrate` was updated to `audio_encoding_bitrate`.
- `game_chat_communication_relationship_adjuster::privilege` was updated to indicate privilege issues that are solvable by the title.
- `game_chat_communication_relationship_adjuster::privilege_check_failed` was added.
- The [chat\_manager::set\_legacy\_era\_uwp\_compat\_mode\_enabled()](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/chat/gamechat2/classes/chat_manager/methods/chat_manager_set_legacy_era_uwp_compat_mode_enabled?view=gdk-2604) API was added to the allowed GDK version of Game Chat 2 to interoperate with the UWP and ERA versions of Game Chat 2.

Note

- Game Chat 2 is only available if the `XGameRuntimeFeature::XNetworking` feature is available as indicated by [XGameRuntimeIsFeatureAvailable](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameruntimefeature/functions/xgameruntimeisfeatureavailable?view=gdk-2604).
- Users are added to Microsoft Game Development Kit with [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604) before being added to the Game Chat 2 instance.
- Audio focus detection support will be available in a future preview of the GDK.

## Functional changes from the UWP and ERA to the GDK

- Wait for [network initialization](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/console/networking/initialization-connectivity-networking?view=gdk-2604) upon title launch, and after resuming your title, before you send packets on behalf of Game Chat 2. Game Chat 2 initializes before the network is initialized.
- Register for suspend and resume events via `RegisterAppStateChangeNotification`. After suspension, clean up Game Chat 2 with [chat\_manager::cleanup()](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/chat/gamechat2/classes/chat_manager/methods/chat_manager_cleanup?view=gdk-2604). After resume, reinitialize Game Chat 2. It can crash if you use it across a suspend/resume cycle.

## See also

[API contents (GameChat2)](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/chat/gamechat2/gamechat2_members?view=gdk-2604)

[Using the Game Chat 2 C++ API](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/chat/game-chat2/using-game-chat-2?view=gdk-2604)

[Real-time audio manipulation](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/chat/game-chat2/real-time-audio-manipulation?view=gdk-2604)

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