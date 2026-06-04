---
title: "Client-side use of Xbox services user privileges"
description: "Describes how to check and resolve Xbox services user privileges concerns for your title."
kindex:
- Client-side use of Xbox services User Privileges
- Xbox services, Client-side use of Xbox services user privileges
- Xbox services, upsell
- Xbox services, privilege-based access control
- Xbox services, privilege IDs
- Xbox services, authentication
author: joannaleecy
ms.author: jeffshi
ms.topic: article
ms.date: 03/12/2020
edited: 05/02/2022
permissioned-type: public
---

# Client-side use of Xbox services user privileges

Use this topic to check and resolve user privileges that are available on Xbox services,
and to determine the upsell system on an Xbox console or Windows PC.

## Table of contents

* [Prerequisites](#ID4ETB)
* [Client-side handling and the player experience for privileges and upsell](#ID4EQBAC)
* [Best practices for app-side privilege handling](#ID4E6HAC)
* [Testing privilege-based access control in your games](#ID4EDMAC)
* [Privilege IDs to check](#ID4EUOAC)

<a name="ID4ETB"></a>

## Prerequisites

To handle user privileges in your Xbox services client app, configure your game for authentication with Xbox services.
For more information, see [Authentication and sign-in overview](../../auth/live-authentication-overview.md) and [Xbox services user privileges overview](../live-user-privileges-overview.md).

<a name="ID4EQBAC"></a>

## Client-side handling and the player experience for privileges and upsell

Client apps are subject to Xbox Requirements (XR) that require privileges to control a
portion of the game, such as XR-045: Xbox services and Account Privileges.
For more information, see [Policies and Xbox Requirements](../../../../../store/policies/GC-policies-nav.md).

For games that are controlled by privileges, you can use APIs. [XUserCheckPrivilege](../../../../../reference/system/xuser/functions/xusercheckprivilege.md)
determines whether a player has a specific privilege. [XUserResolvePrivilegeWithUiAsync](../../../../../reference/system/xuser/functions/xuserresolveprivilegewithuiasync.md) displays a user interface (UI) that helps players resolve issues related to the specified privilege.
The UI explains why the player doesn't have a privilege.

As an example, a game that's subject to the `XPRIVILEGE_MULTIPLAYER_SESSIONS` privilege has the following flow.

1. The player sees an option to start a multiplayer session and attempts to start a match
by selecting the appropriate option in the UI.
1. The game checks the "hint" by using the `XUserCheckPrivilege` API.
   * If it's there, assume the player has the privilege and proceed.
   * If it's not there, go to the next step.
   > [!NOTE] 
   > Xbox services APIs return a status code of 403 (`HTTP_E_STATUS_FORBIDDEN`) when access is denied to a feature because of a missing privilege in the XToken.
   All endpoints of Xbox services enforce privilege-based access control as appropriate.
1. In response to the failure code, the game then calls `XUserResolvePrivilegeWithUiAsync` with the appropriate
privilege ID for the one that you're trying to resolve. This function calls Xbox services to see if the player has the privilege,
and then it tells the player why the action failed or show the
player the UI to resolve it. The following might result from this API call.
   * Show the UI that's related to the player's enforcement status that was
   issued by Xbox services policy and enforcement moderators.
   * Show the UI that's related to their parental controls.
   * Promote an applicable subscription service such as an Xbox Game Pass Essential subscription.
   * Return the result to the game (either a success or a failure, with a reason).
   > [!NOTE] 
   > If Xbox services or the network are unreachable, `XUserResolvePrivilegeWithUiAsync` fails.
   This failure must be treated as if the player didn't possess the privilege.
1. On return from `XUserResolvePrivilegeWithUiAsync`:
   1. If failure is returned, the game must allow the player to keep selecting the button,
   because (for example) the player's bans might lapse, or parental controls might change.
   1. If success is returned, then the player has been remediated, and your game might attempt the action again.
   The player's token will contain the needed privileges as part of the remediation performed by `XUserResolvePrivilegeWithUiAsync`.

> [!NOTE]
> Privileges are macro-level checks that answer the question, "Can I?"
For example, "Can this player access multiplayer features?"
However, privileges aren't the only permission your game must check.
>
>For more information about what privileges are applicable to your title, see
[XR-015 in the topic Policies and Xbox Requirements](../../../../../store/policies/GC-policies-nav.md).

### Example code

Use the following code example to ensure that you're checking for a player's multiplayer privileges before accessing multiplayer functionality in your title.

```cpp
XUserPrivilegeDenyReason reason;
bool hasPrivilege = false;

// check the Multiplayer (254) privilege
HRESULT hr = XUserCheckPrivilege(userHandle, XUserPrivilegeOptions::None, XUserPrivilege::Multiplayer, &hasPrivilege, &reason);

// error with the user such that we can't yet check privileges
if(E_GAMEUSER_RESOLVE_USER_ISSUE_REQUIRED == hr)
{
      asyncBlock.callback = [](XAsyncBlock *async)
      {
         HRESULT hr = XUserResolveIssueWithUiResult(async);
         // if SUCCEEDED(hr), the issue is resolved, try the privilege check again
         // if FAILED(hr), the issue is not resolved, the title should deny access to the user, and perhaps try again later
      };

      hr = XUserResolveIssueWithUiAsync(userHandle, nullptr, &asyncBlock);
}

// user doesn't have the requested privilege, try to resolve the issue
else if(!hasPrivilege)
{
      asyncBlock.callback = [](XAsyncBlock *async)
      {
         HRESULT hr = XUserResolvePrivilegeWithUiResult(async);
         // if SUCCEEDED(hr), all privilege issues are now resolved, the user has the privilege,
         //    and the title should continue. It is not necessary to call XUserCheckPrivilege again.
         // if FAILED(hr), the user did not resolve all privileges, the title should deny access to the user and perhaps try again later
      };

      hr = XUserResolvePrivilegeWithUiAsync(userHandle, XUserPrivilegeOptions::None, XUserPrivilege::Multiplayer, &asyncBlock);
}
else if(hasPrivilege)
{
      // the user has the privilege, continue!
}
```

<a name="ID4E6HAC"></a>

## Best practices for app-side privilege handling

When handling user privileges in your title, ensure that you're employing the following best practices.

<a name="ID4EDIAC"></a>

### Frequency for resolving privileges in app

For privilege checks, the requirement is to ensure once per launch that the player has the appropriate privileges and resolve them.
We recommend checking every logical session and discrete action.

Your definition of a session might vary widely depending on the usage of your app.

The following are examples of best practices.

* For media streaming apps, such as video players, resolve privilege checks once per selection of the **Play** button (stream start), or at the start of a playlist (for multiple streams, such as a music playlist).
* For messaging apps, check privileges once for the first message that's sent.
* For multiplayer games that are using third-party match services, resolve privilege checks every session (match) start.

<a name="ID4EYIAC"></a>

### Never assume the subscription tier of a user

Historically, claims from Xbox 360 provided information about the subscription tier of the player (such as Xbox Game Pass Essential status).
This claim was deprecated with the introduction of the Xbox One family and later.
Ensure that you're making your decisions by using privileges. The user's tier, or how they acquired a privilege, must be opaque to the app.

<a name="ID4EGJAC"></a>

### Offline mode

If `XUserCheckPrivilege` returns that the service is down or unreachable, then treat this result as if the privilege check returned a failure.
By doing so, your game has a fail-safe to keep it XR-compliant.

<a name="ID4ERJAC"></a>

### Targeting the correct player

We recommend always referencing the acting player if another player isn't specified for the privilege check.
If your game supports designating a user, use the currently designated user.

For example, there are three players logged in: Bill, Bob, and Beth.
Your game supports switching between "active players" to designate whose recommendations, history, and settings to use.
Beth launched your app.
When your game is running, the active player switched Bob.
Bob has a separate profile, set of recommendations, and history.
Call to `XUserCheckPrivilege` to initiate a privilege check for Bob.

<a name="ID4EQKAC"></a>

### Checking without UI, or with the UI out of focus

There are cases when your game can't present a modal, so the UX for a privilege check is blocked.
For example, when the game is playing music in the background, or during
incoming calls while the Skype app is running in the background.
However, your game must still check for a privilege. We recommended calling `XUserCheckPrivilege`.
`XUserCheckPrivilege` returns the current permission state of the user, or returns an applicable failure, rather than presenting the UI.
Your game can affect the player, as defined by their privileges, and inform the player of the privilege
check when your game regains focus.

Conversely, your title can show the player non-modal error information, or another UX, as desired.
When it's appropriate to show the player a blocking UX, call to `XUserResolvePrivilegeWithUiAsync` again to show the proper UX&mdash;such as upsell or enforcement status.

<a name="ID4EDMAC"></a>

## Testing privilege-based access control in your games

Privileges are computed based on the following inputs.

* Effective subscription entitlements of the player
* Effective privilege entitlements of the device
* Effective privilege entitlements of the client platform
* Effective privilege entitlements of the current game
  * It's possible to package a game with a collection of privileges so that all players of the games automatically get these privileges for use in the running game. If your game requires this feature, contact your Microsoft account manager.
* Parental controls for parents to decide what privileges to add or remove for the children in their family
* Xbox moderators might ban privileges for players or devices that have been identified for abuse of the service

<a name="ID4E3MAC"></a>

### Managing and checking player privileges and permissions

Player privacy settings can be accessed in two ways.

* On PC: Go to https://aka.ms/XboxPrivSettings.
* On Xbox: Go to Settings -> General -> Online safety & family -> Privacy & online safety -> Xbox privacy

#### Privileges checked with XUserCheckPrivilege

##### XUserPrivilege::CrossPlay

* Description: Allows a player to participate in a gameplay session with other real-world players who aren't signed into Xbox services in scenarios such as: Synchronous player-vs-player gameplay in the same session, asynchronous turn-based gameplay, Team-based gameplay, User-initiated matchmaking, Sending or accepting invitations, Join-in-progress sessions.
* Requirement: XR-045 - Xbox services and Account Privileges
* Privilege ID: 185
* Setting on PC: You can play with people outside of Xbox services
* Setting on Xbox: You can join cross-network play

##### XUserPrivilege::Sessions

* Description: Allows a player to participate in connected single-player experiences in shared environments or in scenarios where a title is a hybrid free to play and paid multiplayer title and uses this privilege to gate those experiences Xbox consoles. Single player experiences must not have any features covered under privilege 252 or 254 (Communications and Multiplayer, respectively). Use of this privilege is a title capability that requires platform approval.
* Requirement: XR-045 - Xbox services and Account Privileges
* Privilege ID: 189
* Setting on PC: You can join multiplayer games
* Setting on Xbox: You can join multiplayer games

##### XUserPrivilege::Multiplayer

* Description: Allows a player to join online multiplayer gameplay sessions with real-world users (not bots) in scenarios such as: Synchronous player-vs-player gameplay in the same session, asynchronous turn-based gameplay, Team-based gameplay, User-initiated matchmaking, Sending or accepting invitations, Join-in-progress sessions. Note this privilege doesn't pertain to local multiplayer games run on the same device.
* Requirement: XR-045 - Xbox services and Account Privileges
* Privilege ID: 254
* Setting on PC: You can join multiplayer games
* Setting on Xbox: You can join multiplayer games

##### XUserPrivilege::UserGeneratedContent

* Description: Allows a player to see other users' UGC online, download other users' UGC, or share their own UGC online. This doesn't restrict usage of previously downloaded UGC.
* Requirement: XR-045 - Xbox services and Account Privileges
* Privilege ID: 247
* Setting on PC: You can see and upload community creations
* Setting on Xbox: You can see and upload community creations

##### XUserPrivilege::SocialNetworkSharing

* Description: Xbox consoles Only: Allows a player to share information, including game progress, Kinect-generated content, game clips, and so on outside of the Xbox network.
* Requirement: XR-045 - Xbox services and Account Privileges
* Privilege ID: 220
* Setting on Xbox: You can share outside of Xbox

##### XUserPrivilege::Communications

* Description: Allows a player to communicate with any other Xbox services users through voice or text.
* Requirement: XR-045 - Xbox services and Account Privileges
* Privilege ID: 252
* Setting on PC: Others can communicate with voice, text or invites
* Setting on Xbox: Others can communicate with voice, text or invites

#### Permissions checked with XblPrivacyCheckPermissionAsync

Titles might also use XblPrivacyBatchCheckPermissionAsync when permissions need to be checked against multiple users and XblPrivacyCheckPermissionForAnonymousUserAsync when checking permissions against a non-Xbox services user.

##### XblPermission::CommunicateUsingText

* Description: Check whether or not the player can send a message with text content to the target user. This value doesn't change if the player has muted the target user. Use CommunicateUsingVoice instead. This value will be false if for example you have set your comms to friends only and the target isn't a friend. This value will be false if for example if the target player has blocked you. This value will be false if for example you have set your comms settings to Blocked.
* Requirement: XR-015 - Managing Player Communication
  * When checking another Xbox services user
    * Setting on PC: Others can communicate with voice, text or invites
    * Setting on Xbox: Others can communicate with voice, text or invites
  * When checking an anonymous user
    * Setting on PC: You can communicate outside of Xbox services with voice & text
    * Setting on Xbox: You can communicate outside of Xbox with voice & text

##### XblPermission::CommunicateUsingVoice

* Description: Check whether or not the player can communicate by using voice with the target user. This will be false if the player has muted the target user.
* Requirement: XR-015 - Managing Player Communication
  * When checking another Xbox services user
    * Setting on PC: Others can communicate with voice, text or invites
    * Setting on Xbox: Others can communicate with voice, text or invites
  * When checking an anonymous user
    * Setting on PC: You can communicate outside of Xbox services with voice & text
    * Setting on Xbox: You can communicate outside of Xbox with voice & text

### Testing privileges that are provided by subscriptions

You can create [test accounts](../../../../develop/test-accounts/live-setup-testaccounts.md) with an Xbox Game Pass Essential subscription by using [Partner Center](https://partner.microsoft.com/dashboard/).
Use these accounts to test your privilege logic for privileges that are offered through an Xbox Game Pass Essential subscription.

You can purchase other subscriptions by using your [test account](../../../../develop/test-accounts/live-setup-testaccounts.md) on a development client.

> [!NOTE]
> The subscription must be published to a development sandbox where your account or device is authorized, and the account on the development client must be active on the same sandbox.

You can't directly purchase retail Xbox Game Pass Essential subscriptions by using a [test account](../../../../develop/test-accounts/live-setup-testaccounts.md) that's created through [Partner Center](https://partner.microsoft.com/dashboard/).
Instead, you can purchase a developer-specific version of Xbox Game Pass Essential that only applies to development scenarios.

<a name="ID4EZNAC"></a>

### Testing privileges that are provided by the running game

If you want to set up a game to automatically issue privileges when players are in the game, contact your Microsoft account manager.
Testing this scenario requires configuring your game for Xbox services authentication and running the game with players signed in.

<a name="ID4EEOAC"></a>

### Testing privileges that are removed by parental control

To test your privilege logic with privileges that can be removed by using parental controls (such as `XPRIVILEGE_COMMUNICATIONS`), set up family accounts on the client device. 
Parents or guardians might use the device to restrict privileges of the children in their family.

It's also possible for a player to restrict privileges on their own account.
We recommend using this method to test scenarios that require that a user's privileges be restricted.

> [!NOTE] 
> [Partner Center](https://partner.microsoft.com/dashboard/) doesn't currently provide a way to create families of [test accounts](../../../../develop/test-accounts/live-setup-testaccounts.md).

<a name="ID4EUOAC"></a>

## Privilege IDs to check

Your title must check the following privilege IDs. For more information, see [XR-045: Xbox services and Account Privileges](../../../../../store/policies/XR/XR045.md).

| Privilege ID | Privilege name | Enum constant | Description |
| --- | --- | --- | --- |
| 254 | `XPRIVILEGE_MULTIPLAYER_SESSIONS` | `XUserPrivilege::Multiplayer` | The player can join multiplayer sessions for a game when this privilege is present. |
| 185 | `XPRIVILEGE_CROSS_PLAY` | `XUserPrivilege::CrossPlay` | The player can participate in a gameplay session with other real-world users who aren't signed into Xbox services. Example scenarios include synchronous user-versus-user gameplay in the same session, asynchronous turn-based gameplay, team-based gameplay, user-initiated matchmaking, sending or accepting invitations, and join-in-progress sessions. |
| 252 | `XPRIVILEGE_COMMUNICATIONS` | `XUserPrivilege::Communications` | The player can use voice chat or text messaging with anyone when this privilege is present. Extra privacy permission checks are required to determine who the player is authorized to communicate with. |
| 189 | `XPRIVILEGE_SESSIONS` | `XUserPrivilege::Sessions` | The player can participate in connected single-player experiences in shared environments. These experiences can't have any features that are covered under privilege 252 (`XPRIVILEGE_COMMUNICATIONS`) or 254 (`XPRIVILEGE_MULTIPLAYER_SESSIONS`). Use of this privilege is a title capability that requires platform approval. |
| 247 | `XPRIVILEGE_USER_CREATED_CONTENT` | `XUserPrivilege::UserGeneratedContent` | The player can download and view online user-created content when this privilege is present. |
| 220 | `XPRIVILEGE_SOCIAL_NETWORK_SHARING` | `XUserPrivilege::SocialNetworkSharing` | The player can share progress information on social networks when this privilege is present. |

For more information about available privileges, see [XUserPrivilege](../../../../../reference/system/xuser/enums/xuserprivilege.md).

<a name="ID4EJGAE"></a>

### Privilege computation logic

Privileges are computed independently for each player that's simultaneously signed in on a console or other device.
Privileges are added from the effective entitlements of the user, the device, the title that's currently running, and the platform.
Then privileges are removed for each player based on parental controls, Xbox services policy and enforcement status, and the guest status of each user.

Effective entitlements might result from subscriptions that are purchased by the user, purchased by other users logged in at the same time, or subscriptions that are directly associated to a device.
Effective entitlements might also result from promotional offers, such as "Free multiplayer weekend" events.

<a name="ID4EYGAE"></a>

#### Privilege entitlements that result from the device type

Certain types of devices (such as Xbox One family consoles and Xbox Series consoles, Windows PC, or mobile) automatically grant a collection of privileges to any player that connects to Xbox services from the platform.

<a name="ID4EGHAE"></a>

#### Effective privilege entitlements that result from subscriptions

Subscription products might provide a collection of privileges to applicable users.
The following scenarios are ways a player is effectively granted subscription-based privileges.

* The player has purchased the subscription product.
* Another active player on the same device has purchased the subscription product.
* The subscription product is associated to the device that the player is currently using.

Starting with Xbox One, the Xbox Game Pass Essential subscription follows this logic.
It's possible to associate a Xbox Game Pass Essential subscription to a device, and all users on the device are effectively entitled
to privileges that are associated to the Xbox Game Pass Essential subscription tier.
Any user, including sponsored guests, that are simultaneously active on a device with a player who purchased a
Xbox Game Pass Essential subscription are effectively entitled to the privileges that are associated with the Xbox Game Pass Essential subscription.

Partner subscriptions might also be used to issue privileges to an active user.
In addition, privileges that are associated to a partner subscription might be issued only when a specific participating title is running.

<a name="ID4EBIAE"></a>

#### Promotional entitlements

Promotional entitlements add privileges for a limited period to users who meet certain dynamic criteria.
For example, a promotion might offer the multiplayer privilege to certain users for the duration of a weekend.
Historical promotions such as a "Free Xbox Game Pass Essential Weekend" follow the model of promotional entitlements.

> [!NOTE]
> Your services and titles don't need to be directly aware of promotions such as these.
Privileges from promotional entitlements are dynamically computed when Xbox Security Token Service (XSTS) tokens are issued to users who connect to the service.

<a name="ID4ELIAE"></a>

#### Privileges that are removed for sponsored guest accounts

Sponsored guests are guest accounts who are signed in with Xbox services.
Sponsored guests only exist in the presence of at least one other active player on the client device,
such as a split-screen multiplayer game with only one player signed in.
These accounts are authenticated users and get a token like any other authenticated user.
Sponsored guests do have privileges, but some privileges are withheld for guest players, regardless of the sponsored guest's effective entitlements or the game that's currently running.

To check privileges for sponsored guests, call `XUserCheckPrivilege`. This doesn't attempt resolution.
You don't need to display a resolution UI, and you don't need to call `XUserResolvePrivilegeWithUiAsync`, because sponsored guests can't be "resolved". Unlike active Xbox accounts, sponsored guests don't have any path to make purchases, incur enforcement action, or have an otherwise unique set of privileges or restrictions.

If a player isn't currently signed in (which is the case with a "pure guest"), no token is issued for the user.
This means that no effective privileges are computed for any player on the device.

XR-045 requires that your title check the privilege 220 by using `XPRIVILEGE_SOCIAL_NETWORK_SHARING`, or `XUserPrivilege::SocialNetworkSharing`. This is one of the privileges that are removed for guests.

<a name="ID4EMLAE"></a>

#### Online safety and Microsoft enforcement

Xbox services policy and enforcement moderators might remove privileges from abusive users or devices.

<a name="ID4EXLAE"></a>

#### Parental controls

Parents can remove privileges from child accounts that are in their family, regardless of the child's subscription or the current running title.
This is managed through the Xbox console or the Xbox.com [Xbox Family Settings app](https://www.xbox.com/en-US/apps/family-settings-app).

<a name="ID4EFMAE"></a>

#### Privileges for Xbox Game Pass Essential subscribers

Policies for privilege entitlements for a particular subscription are dynamic and will change over time.
Keep in mind that even if a subscriber is entitled to a privilege, that subscriber might lose that privilege because of parental control changes or enforcement policies.

> [!NOTE]
> Privileges aren't an accurate reflection of the current subscription of a user.

XR-045 requires that your title check for privilege 254 by using `XPRIVILEGE_MULTIPLAYER_SESSIONS`, or `XUserPrivilege::Multiplayer`. This is one of the privileges that Xbox Game Pass Essential subscribers are entitled to.

<a name="ID4EYPAE"></a>

#### Partner subscriptions and privileges

It's possible to configure partner subscriptions to provide a collection of Xbox services privileges.
Partner subscriptions are only used to compute the privileges of a player when the player is logged in to games that have been explicitly associated to the subscription.

To set up partner subscriptions, contact your Microsoft account manager.

Partner subscriptions can be tested in development sandboxes before they're released.
Only users and devices that are authorized to use these development sandboxes can purchase these subscriptions.

#### Free-to-play titles and multiplayer privileges

For titles that are specifically configured to operate in a free-to-play (F2P) model, the `XPRIVILEGE_MULTIPLAYER_SESSIONS` / `XUserPrivilege::Multiplayer` privilege must be checked, as usual.  However, with this setup, users will have multiplayer privilege whether they have an Xbox Game Pass Essential subscription or not.  This privilege will only be denied if a player is banned/blocked, or age-restricted in some way.  Use of this privilege is a title capability that requires platform approval.  Please work with your Microsoft manager or Developer Partner Manager(DPM) to enable this functionality for your title.

#### Hybrid titles and multiplayer privileges

For titles that are specifically configured to operate in a hybrid model -- that is, titles which contain multiplayer scenarios that require a paid subscription but also contain scenarios that can be played for free -- the privilege check process is slightly different.

For content that requires a paid subscription, the `XPRIVILEGE_MULTIPLAYER_SESSIONS` / `XUserPrivilege::Multiplayer` privilege must be checked.  However, for free multiplayer scenarios, the `XPRIVILEGE_SESSIONS` / `XUserPrivilege::Sessions` privilege is checked instead.  This privilege will only be denied if a player is banned/blocked, or age-restricted in some way.  The Multiplayer privilege will deny for these reasons as well, but also requires a paid subscription to be granted.  Use of this privilege is a title capability that requires platform approval.  Please work with your Microsoft manager or DPM to enable this functionality for your title.

## See also

[Policies and Xbox Requirements](../../../../../store/policies/GC-policies-nav.md)

[XUserCheckPrivilege](../../../../../reference/system/xuser/functions/xusercheckprivilege.md)

[XUserPrivilege](../../../../../reference/system/xuser/enums/xuserprivilege.md)

[XUserPrivilegeDenyReason](../../../../../reference/system/xuser/enums/xuserprivilegedenyreason.md)

[XUserPrivilegeOptions](../../../../../reference/system/xuser/enums/xuserprivilegeoptions.md)