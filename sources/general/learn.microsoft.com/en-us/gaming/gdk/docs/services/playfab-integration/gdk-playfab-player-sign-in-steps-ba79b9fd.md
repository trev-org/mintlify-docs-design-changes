# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/services/playfab-integration/gdk-playfab-player-sign-in-steps?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/playfab-integration/gdk-playfab-player-sign-in-steps?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Implement player sign in

Feedback

Summarize this article for me

This section describes two approaches to implement player sign in for titles that use **both** Xbox services and PlayFab services.

**Important:** Before starting, make sure you understand [Xbox/PlayFab user accounts and sign in concepts](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/playfab-integration/gdk-playfab-player-sign-in-concepts?view=gdk-2604).

There are two ways to sign players in to their PlayFab accounts. The PlayFab Services SDK is the recommended route for all titles using any PlayFab services.

However, if PlayFab Party is the only PlayFab service your title uses and your title only uses Xbox services as an authentication provider, then use PlayFab Party's Xbox Live Helper Library.

- [PlayFab Services SDK](https://learn.microsoft.com/#playfab-services-sdk)
- [PlayFab Party Xbox Live Helper Library](https://learn.microsoft.com/#playfab-party-xbox-live-helper-library)

## PlayFab Services SDK

The PlayFab Services SDK is now part of the GDK. It includes the **PFAuthenticationLoginWithXUserAsync** function to authenticate Xbox players with PlayFab. The function has a **createAccount** parameter that enables you to automatically provision a PlayFab account for the player.

### Set up

- Download and install [GDK](https://aka.ms/gdkdl).
- Add the **PlayFab.Services.C** Gaming Extension Library to your game project.
 - Open your project in Visual Studio. Go to **Project** > **Properties** to open the project configuration window.
 - If you have the GDK properly installed, you'll see **Gaming Desktop** under **Configuration Properties** on the left.
 - Go to **Gaming Desktop** > **General**, select **Gaming Extension Libraries**. In the pop-up window, select **PlayFab.Services.C** to add it to your project.

### Recommended flow to use Xbox services as the authentication provider

This is the recommended flow for all titles using the PlayFab Services SDK to sign players into a PlayFab account.

- Sign players in to their Xbox accounts using [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604). For details, see [XUser](https://learn.microsoft.com/#xuser).
- Sign players in to PlayFab using the XUserHandle returned from **XUserAddAsync**. This is achieved using **PFAuthenticationLoginWithXUserAsync** in the PlayFab Services SDK.
 - Provide the **XUserHandle** in the **user** parameter.
 - Set the **createAccount** flag to **TRUE** to ensure a new PlayFab user account is provisioned if needed.

To learn more about how to get started with PlayFab in the GDK, please see the [PlayFab Services SDK Quickstart](https://learn.microsoft.com/en-us/gaming/playfab/sdks/gdk/quickstart)

## PlayFab Party Xbox Live Helper Library

**NOTE:** This approach is used if PlayFab Party is the only PlayFab service your title uses and your title only uses Xbox services as an authentication provider. Otherwise, follow the recommended flows under [PlayFab SDK approach](https://learn.microsoft.com/#playfab-services-sdk). The PlayFab SDK approach supports more authentication providers and a wider range of service calls to PlayFab.

The **PlayFab Party Xbox services Helper Library** retrieves the Xbox Services token (also known as Xbox services token) and use it to sign players in to their PlayFab accounts. It also automatically creates a PlayFab account if the player doesn't have one yet.

### Set up

- Download and install [GDK](https://aka.ms/gdkdl).
- Use the [PlayFab Party SDK and PlayFab Party Xbox Live Helper Library](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/party-sdks) included in the [GDK](https://aka.ms/gdkdl).
- For developers using Unreal and Unity game engines, go to [GDK Download Site](https://aka.ms/gdkdl) and select **Add-ins** to download the Microsoft GDK Unity plugin and PlayFab Party Online Subsystem.

### Flow

The flow below describes how to sign a player into their Xbox account and PlayFab account using PlayFab Party's Xbox Live Helper Library.

- Sign players in to their Xbox accounts using **XUserAddAsync**. For more details, see [XUser](https://learn.microsoft.com/#xuser).
- Then retrieve their Xbox User ID (XUID) using **XUserGetId** when chat is first initiated.
- Create a **PartyXblLocalChatUser** using [PartyXblManager::CreateLocalChatUser](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/xblreference/classes/partyxblmanager/methods/partyxblmanager_createlocalchatuser) with the XUID retrieved in the previous step.
- Pass this newly created user object to **PartyXblManager::LoginToPlayFab**.
 - For Xbox (XDK and GDK) and PC (GDK) titles, **PartyXblManager::LoginToPlayFab** kicks off other necessary requests in the background to fetch the Xbox services tokens and use them to sign in to the player's PlayFab account using their Xbox services credentials. If the player's Xbox account doesn't have an associated PlayFab account, the API will automatically create a new PlayFab account and associate it with their Xbox account. When PlayFab accounts are created in this manner, no email or username will be associated with it.
 - For non-Microsoft Game Development Kit (GDK) and non-XDK titles like PC (Win32), you'll receive [PartyXblTokenAndSignatureRequestedStateChange](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/xblreference/partyxboxlive_members) instead. This state change signals that you're required to fetch the Xbox Services token on your own. Once the token is fetched by the title, pass it to service using [PartyXblManager::CompleteGetTokenAndSignatureRequest](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/xblreference/classes/partyxblmanager/methods/partyxblmanager_completegettokenandsignaturerequest) which will complete the login request.
- If all goes well, the result is a [PartyXblLoginToPlayFabCompletedStateChange](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/xblreference/partyxboxlive_members) with your signed in PlayFab credentials (Entity ID and PlayFab token).

**Note:** For remote users, use [CreateRemoteChatUser](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/xblreference/classes/partyxblmanager/methods/partyxblmanager_createremotechatuser). There won't be any authentication or tokens involved in the remote user flow.

## XUser

The [XUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/xuser_members?view=gdk-2604) class, which is part of the system API, handles user identity and sign in for Microsoft Game Development Kit (GDK) titles.

- To sign users in, use [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604).
- To retrieve Xbox Services token (also known as Xbox services token), use [XUserGetTokenAndSignatureUtf16Async](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xusergettokenandsignatureutf16async?view=gdk-2604).

To learn more about XUser and sign in best practices, see the following resources.

- [User identity and XUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/user/player-identity-xuser?view=gdk-2604)
- [GDK user models (NDA topic)Authorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/user/gamecore-user-models?view=gdk-2604)
- [Sign-in best practices](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/user/xuser_howto_best_practice_signing_in?view=gdk-2604)
- [XUser API reference overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/xuser_members?view=gdk-2604)

## See also

- [PlayFab Services SDK Quickstart](https://learn.microsoft.com/en-us/gaming/playfab/sdks/gdk/quickstart)
- [Microsoft Store in-app purchase set up (NDA topic)Authorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/playfab-integration/gdk-playfab-microsoft-store?view=gdk-2604)
- [User identity and XUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/user/player-identity-xuser?view=gdk-2604)

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