---
title: "Xbox Requirements for Xbox Console Games"
kindex:
- Xbox requirements for Xbox console games
- Requirements for Xbox console games
- Console games, Xbox requirements
author: LukeCraw
ms.author: lukecr
ms.topic: article
description: "Xbox Requirements (XRs) consist of the policies, technical requirements, and product component-related requirements to which all developers and publishers of Xbox console titles must conform."
ms.date: 04/01/2025
edited: 06/01/2026
permissioned-type: public
---

# Xbox Requirements for Xbox Console Games

Version 16.2 - 06/01/2026

## Introduction

Xbox Requirements (XRs) consist of the policies, technical requirements, and product component-related requirements to which all developers and publishers of Xbox console titles must conform. XRs ensure that products created for Xbox consoles are not only stable and reliable but also provide a user experience that is consistent, safe, secure, and enjoyable.

Unless specifically noted, all Xbox Requirements apply to both the Xbox One and Xbox Series X\|S console generations.

* XRs that are tested in Certification are identified with an asterisk (**\***).
* For XRs tested in Certification, view the test cases here: [Xbox Requirements and Test Cases](console-certification-requirements-and-tests.md).
* For a summary of the changes in this release, see [changes in this release](#changes) at the bottom of this page.
* To review the historical change log of XRs and test cases, see [Change History for Xbox Requirements and Test Cases](../console-XR-change-history.md).

## Base requirements

The requirements in this category apply to the general rules for the standards of coding, behavior of titles, and submission of titles.

### [XR-001: Title Stability](../XR/XR001.md) \*

Titles must be compliant with Microsoft Store policies regarding title stability. The following policy applies to this requirement:

[10.4.2](/windows/apps/publish/store-policies#104-usability.md)  
Products must start up promptly, continue to run and remain responsive to user input. Products must shut down gracefully and not close unexpectedly. The product must handle exceptions raised by any of the managed or native system APIs and remain responsive to user input after the exception is handled.

### [XR-003: Title Quality for Submission](../XR/XR003.md) \*

Xbox games must meet Xbox quality standards and be fully functional and testable.

#### Functionally complete and testable

Titles must be fully functional and testable when submitted for certification. This includes all client code, submission artifacts, and downloadable content. Titles must be packaged cleanly with no failures using the current version of [Submission Validator](../../../features/common/packaging/subval/submissionvalidator.md). Submission Validator logs must be included with the submission.

#### Xbox quality standards

Xbox games must function correctly across all game modes and scenarios to meet player expectations. 

##### Title integrity

Titles must be free from severe issues such as crashes, freezes, unplayable frame rates, bugs causing major progression hindrances, or graphical corruption. Game settings, options, and controls must be applied correctly and respect default settings where appropriate. Navigation and content availability should be seamless, with no dead ends or inaccessible menus. Multiplayer functionality must be stable and functional, regardless of the number of players. 

##### Save game compatibility

Game saves and player progress must continue to function following content updates. Additionally, permanent data loss must not occur when loading an updated save with the base disc version.

### [XR-130: Xbox Console Families and Generations](../XR/XR130.md) \*

All game titles targeting a console generation must support the entire family of devices for that generation.

Xbox One games not using Smart Delivery function by default on Xbox Series X|S in compatibility mode. Games using Smart Delivery must work properly when running in compatibility mode on Xbox Series X|S.  

To maintain consistency across console generations, games must:

* Support navigation via gamepad input.  Titles may require additional peripherals for use with prior approval.
* Ensure that saved games work across console types within the generation.
* Ensure that online players are not segmented based on console type within the generation.
* Ensure that identical game modes are offered across console types within the generation.
* Between generations (Xbox One and Xbox Series X\|S), games which share the same TitleID must:
  * Support game save roaming for content available on both generations ([XR-052: User State and Title-Save Location, Roaming and Dependencies](../XR/XR052.md)).
  * Though not required, it is recommended that scenarios in which multiplayer, cooperative or competitive, experiences are supported offer at least one shared matchmaking hopper and allow for cross generation invite/join for shared content experiences.

### [XR-006: Title Assets and Metadata](../XR/XR006.md)

Titles must be compliant with Microsoft Store policy regarding Store metadata and assets.  Titles submitted to the Microsoft Store must have the metadata localized. The following Windows policies apply to this Xbox Requirement:

**10.1 Distinct Function & Value; Accurate Representation**

Your app and its associated metadata must accurately and clearly reflect the source, functionality, and features of your app.

**10.1.1**

All aspects of your app should accurately describe the functions, features and any important limitations of your app, including required or supported input devices. Your app may not use a name or icon similar to that of other apps, and may not claim to be from a company, government body, or other entity if you do not have permission to make that representation.

**10.1.3**

Keywords may not exceed seven unique terms and should be relevant to your app.

**10.1.4**

Your app must have distinct and informative metadata and must provide a valuable and quality user experience.

### [XR-007: Cross-Network Play, Data Usage, and Companion App Interactions](../XR/XR007.md)

Publishers are permitted to use user-specific data from Xbox services, Xbox consoles and other platforms on the Xbox network with the following limitations:

**Game progress, in-game items, and statistics**  
Titles can sync game progress, virtual currency (VC) wallets, and in-game items (including those unlocked with VC) across gaming platforms and networks. As part of user progress, a title can provide holistic statistic values, including the unlock of achievements, as long as those achievements don't require play using another platform.

**Microsoft Store Managed Entitlements**  
Digital Content or PDLC (such as map packs or content that provides additional gameplay) sold in the Microsoft Store or other platform stores must not be shared or roamed across gaming networks.

At the title’s discretion, bundles of in-game items (such as VC or items unlocked with VC) that are sold through the Microsoft Store and managed by the title may be shared or roamed across gaming networks.

If you offer content for purchase on another platform, network, or store, the following conditions apply:

Titles must:

  * offer the same or better for-sale content offers in the Microsoft Store to ensure that Xbox users aren't disadvantaged (including but not limited to release timing, market coverage, features, content such as bonus VC or bonus in-game benefits, language and localization, and physical token card offerings); and
  * include a corresponding offer in Microsoft's Digital Content at Retail program (Code to Content) if digital codes are sold direct to consumers.

Titles must not:

  * intentionally direct content purchases away from the Microsoft Store, or discourage purchases from the Microsoft Store (for example, through marketing, advertising, in-store products, or affinity programs).
  * offer such content for purchase in connection with products or experiences that don't have the same features and capabilities as the game for Xbox consoles. Player progression and game data can be shared with such products or experiences (for example, "companion experiences").

Failure to comply with any of the conditions of this policy may result in consequences, including but not limited to rendering your product(s) ineligible for editorial placement, store marketing and promotions.

**Cross-platform play**  
Titles can, at their discretion, enable synchronous or asynchronous cross-platform gameplay among Xbox network users on Xbox network enabled platforms.

**Cross-network and companion application play**  
Titles can, at their discretion, enable synchronous or asynchronous cross-network gameplay among Xbox network users and users of non-Xbox gaming networks subject to the following restrictions:

  * Titles must visually identify Xbox network users when they are playing with players from non-Xbox gaming networks.
  * Titles must restrict cross-network communication based on Xbox network safety settings, as detailed in [XR-015: Managing Player Communication](../XR/XR015.md) and [XR-045: Xbox network and Account Privileges](../XR/XR045.md).
  * Titles that require cross-network play must disclose this requirement in the title’s Products Detail Page (PDP) in the store.

**User-generated content**  
Beyond [XR-018: User-Generated Content](../XR/XR018.md), content from non-Xbox network users must be one of the following:

* Anonymous and curated by the publisher.
* Displayed using the publisher's central account name when the content is created by a non-Xbox network user on a platform other than Xbox. To avoid confusion, ensure that this account name is clearly distinguishable from the user’s Xbox network account name. If the publisher account is linked to an Xbox network account, the title must display the Xbox network account together with the publisher account, even if the content is created on another platform.

### [XR-083: XDK / GDK Versions](../XR/XR083.md)

The Microsoft Xbox One Software Development Kit (XDK) and Microsoft Game Development Kit (GDK) game OS that is packaged with a title must be from an approved development kit release.

### [XR-109: Linking Between Apps ](../XR/XR109.md)

Titles must include the target user when linking to another app on the console.

### [XR-131: Display Mode Support for Game DVR and Screenshots \*](../XR/XR131.md) 

Titles must ensure that Game DVR and screenshots work properly across display modes and types. Titles that display in HDR do this by rendering both the SDR and HDR swap chains, because the SDR swap chain is used for SDR screenshots, broadcasting, and Game DVR.

### XR-022: Official Naming Standards \*

Titles must use the naming standards defined in the latest release of the [Terminology List](console-certification-terminology.md) for Xbox console and/or Xbox network features.

On Xbox consoles, titles must not display images or refer to components of the console system or components of peripherals using terms that are not specifically included in the terminology list.

### [XR-074: Loss of Connectivity to Xbox and Partner Services ](../XR/XR074.md) \*

Titles must gracefully handle errors with Xbox and partner services connectivity. Titles must honor the retry policies set by Xbox when attempting to retry a request to the Xbox service after a failure has occurred. Titles must appropriately manage messaging the user when services are unavailable. If a partner service is not available, the game must not indicate that there is an issue with the Xbox network. Titles must not crash or hang if network services are slowed or intermittently available.

### [XR-132: Service Access Limitations](../XR/XR132.md) \*

Titles which exceed [title and user based limits](../../../services/develop/best-practices/live-fine-grained-rate-limiting.md) when calling Xbox network services or do not adhere to Xbox network service retry policies may be subjected to rate limiting, which may result in service interruption or deprecation. Failure to adhere to the specified limits may block a title from release, and in-production issues with released titles may result in Xbox network services suspension up to and including title removal.

### XR-133: Local Storage Write Limitations \*

Titles which use local storage must not exceed 1 GiB of total writes to persistent local storage or temporary storage in a 5 minute increment of time.

For more information on local storage on Xbox consoles with the GDK, read the [Local Storage section](../../../features/console/storage/local-storage.md)

## Security

The requirements in this category pertain to the security of the platform and customers.

### XR-009: Secure Title Development

Titles must be compliant with Windows Store policy regarding App Security. Xbox also recommends that exclusive OS games use the **/GS** flag, but this practice is not enforced due to performance implications with some design patterns.

The following Windows policies apply to this Xbox Requirement:

**10.2**

Your app must not jeopardize or compromise user security, or the security or functionality of the device, system, or related systems, and must not have the potential to cause harm to users or any other person.

**10.2.2**

Your app must not attempt to change or extend the described functionality through any form of dynamic inclusion of code that is in violation of Store Policies. Your app should not, for example, download a remote script and subsequently execute that script in a manner that is not consistent with the described functionality.

**10.2.3**

Your app must not contain or enable malware as defined by the Microsoft criteria for [Unwanted and Malicious Software](https://go.microsoft.com/fwlink/?LinkId=821298).

**10.2.4**

Your app may contain fully integrated middleware (such as third-party cross-platform engines and third-party analytics services), but must not deliver or install non-integrated third-party owned or branded apps or modules unless they are delivered as in-app products.

All of your apps, modules and in-app products must be installed, serviced, and updated only through the Store.

## Online Safety and Privacy

The requirements in this category pertain to the online safety and privacy of Xbox users.

### [XR-013: Linking Microsoft Accounts with Publisher Accounts *](../XR/XR013.md)

On Xbox, titles that use partner-hosted services or accounts that require credentials must support all Xbox users and offer to link that account with the user's Microsoft account. Outside of Xbox consoles, titles can choose to allow account linking to support their game experience.  

If publisher account sign in is enabled within the title, the following rules apply:  

**Publisher Account Sign In**  

* **Accommodate All Users**  
  If a publisher account sign in is required for game features (single player, multiplayer, cross network gameplay, leader boards), sign in and sign up must support all user types, ages, and regions where the game title is offered and where those features are allowed by local/regional laws irrespective of age rating.
    * A game publisher may choose not to support a particular region, age, etc. for their publisher account. If a region, age group, or other group of players cannot create or sign into an account the title cannot require those users to sign in with an account for game features.  
    * If a particular account setting is not supported in a title-based sign-up experience (e.g., age or region) the title must gracefully handle by providing messaging to sign up on an external site or mobile optimized experience where that user is supported.  

* **Gain Consent and Provide Terms for Account Information Usage**  
  Titles must request to use and gain consent to use information from the player's Microsoft account to auto populate sign up/account creation experiences. Users must be provided with all applicable terms of use, privacy and other policies within the title (or a notice with a link to such information) during a publisher account creation process.  

* **Disclose Requirements**  
  If a publisher account is required for gameplay or additional features, it must be disclosed in the title's product description and any physical packaging including any restrictions such as age. In title, the game must define the reason and use of the publisher account. If a publisher account limits or restricts the experience for child accounts, it is suggested to add this text to the store details page for buyer awareness:

> _Certain features of the game, including online multiplayer, communication and other online features, may not be accessible by Xbox child accounts. At Xbox, a child means players under the age of 13, unless local laws specify differently._

**Publisher Account/Microsoft Account Linking**  

* **Authentication using the Xbox Secure Token Service (XSTS)**  
  XSTS tokens must be used to provide identity information for authentication when linking the user's publisher account to the user's Microsoft account. For more information about XSTS token authentication see [Xbox services authentication for title services](../../../services/fundamentals/s2s-auth-calls/service-authentication/live-title-service-authentication.md).
  
* **Gain Consent and Provide Choice**  
  Users must be notified of the account linking of the user's publisher account to the user's Microsoft account.  The user must be given the choice to opt-out if linking their accounts. Users must have the ability to de-link accounts.  
  
* **Accommodate All Users**  
  If a publisher account sign in is required for game features (Single player, multiplayer, cross network gameplay, leader boards), sign in and sign up must support all user types, ages, and regions where the game title is offered and where those features are allowed by local/regional laws irrespective of age rating.  

> [!Note]
> Publishers may implement additional fraud prevention mechanisms such as two-factor authentication interrupts when a linked account signs in from a new device for the first time. This behavior is not a violation of this XR.  

### [XR-014: Player Data and Personal Information](../XR/XR014.md) \*

Game publishers are solely responsible for collecting and processing end user data in accordance with applicable law especially when the user is a child.

Additionally, when a title has information about a player either acquired from Xbox or from their relationship with the player directly (such as a website or mobile app), titles must not display to other players:

* Information that could be used to cause financial damage to a user (such as Social Security or credit card numbers).
* Information that divulges a user's address beyond country/region.
* Information that would allow a user to impersonate another user online, such as account credentials.

**Handling Child Data**  
When collecting data from accounts in the Child or Teen Age Group, titles may only request personal data necessary to verify age, obtain parental consent or complete publisher account linking.

>[!Important]
>The request for data must state what the data will be used for. For example, if a title asks for a user's birthdate it must state what the birthdate will be used for:
>
>**Good Examples**:
>* _Please provide your birthdate so we can verify your age_
>* _Please provide your birthdate so we can personalize your experience_
>* _We need your birthdate to offer age-appropriate content_
>* _We need your birthdate to comply with legal age restrictions_
>
>**Bad Examples**:
>* _Please provide your birthdate_
>* _Enter your birthdate_
>* _We need your birthdate_
>* _Birthdate required_

**Definitions**  
Address is any information that can identify a user's location to the level of city or town. This includes, but is not limited to, the following: 

* Physical address 
* Mailing address 
* Billing address 
* ZIP code 
* IP address or related information 
* Geographical location information

### [XR-015: Managing Player Communication](../XR/XR015.md) \*

Titles must not allow communication over the Xbox network when the user's privacy settings do not allow it. 

Titles meet this XR by retrieving data from Xbox network services. If the title uses its own services, it must check the user's privacy permissions at the beginning of a session or when a new user joins the session. For user-initiated scenarios outside of sessions, titles meet this requirement by checking privacy prior to displaying the user's data and before performing the action. The following permissions are available for titles to check: 

| Permission name |Description |
|-------------------|----------|
|CommunicateUsingText | Check whether the user can send text communications (e.g., text chat, message, etc.) or an invite to the target user.
|CommunicateUsingVoice | Check whether the user can communicate using voice with the target user.

During the gameplay session, titles which offer communication between Xbox network and non-Xbox network players must offer the ability to mute any non-Xbox network players for the duration of the session.

> [!Note]
> Refer to [Privacy and permissions overview](../../../services/fundamentals/identity/privacy/live-privacy-overview.md) for details on how to check and resolve privacy and permissions issues in your title.

### [XR-017: Title Ratings](../XR/XR017.md) \*

**Title Ratings for Xbox**  

This [white paper](../XR/XR017.md) focuses on two essential concepts as they pertain to content classifications and restrictions on Xbox consoles:

* **Rating:** Specifies the age level for which different types of content are deemed appropriate by different regions' ratings boards.
* **Parental controls:** A profile setting on Xbox consoles that defines the highest rating level of content that a user can play or view within an application.

### [XR-018: User-Generated Content](../XR/XR018.md) \*

User generated content (UGC) refers to any in-game digital content produced by a player and made visible or accessible to one or more other people in an online state.  

If your product contains UGC, you must:

* Provide an in-product means for users to report inappropriate or harmful UGC to the developer for review and removal/disablement (if in violation of content guidelines) and/or implement a method for proactive detection of inappropriate or harmful UGC (for example, text filtering).
* Publish content guidelines for user generated content (such as a terms of use or code of conduct), available to users either in-product or on the title's website.
* Be prepared to remove/disable high-risk illegal content at the request of Microsoft in the unlikely event that Microsoft becomes aware of illegal material on the Xbox network that has not been addressed via standard action mechanisms or processes.
* Respect player UGC settings and gracefully handle scenarios in which a user does not have access to UGC in-game due to restricted privileges.  

Additionally, if your product is integrated with a third-party game mod platform, you must:  

* Integrate with the platform's report/complaint API (if available) and moderate content if required by contractual agreement with the third party.
* Present a disclaimer, dialog, or visual indicator to users when content is not sourced from the developer.

## Content packages and updates

The requirements in this category specify how Xbox console game titles must be packaged and how they must interact with add-on content packages.

### XR-034: Streaming Install Initial Play Marker \*

Titles which include an initial play marker must provide a gameplay experience when launched from the initial play marker.

For more information on Streaming Install or Intelligent Delivery with the GDK, read the [Streaming Install and Intelligent Delivery overview](../../../features/common/packaging/overviews/streaming_install-intelligent_delivery.md)

### [XR-129: Intelligent Delivery Content Management](../XR/XR129.md) \*

Titles that support intelligent delivery must handle scenarios gracefully when content that is not currently installed is needed. Titles can accomplish this by calling **PackageInstallChunksAsync** in the GDK or **AddChunkSpecifiersAsync** in the XDK when additional content needs to be installed from disc or the Xbox network.

For more information on Streaming Install or Intelligent Delivery with the GDK, read the [Streaming Install and Intelligent Delivery overview](../../../features/common/packaging/overviews/streaming_install-intelligent_delivery.md)

### [XR-123: Installation/Unlock of Game Add-Ons or Consumables During Gameplay](../XR/XR123.md)\*

Titles that offer downloadable content (DLC) must allow users to download/unlock and use the content without having to terminate and relaunch the game.

For more information on accessing and enumerating DLC in game, read the [Downloadable content (DLC) packages section](../../../features/common/packaging/packaging-downloadable-content-dlc.md)

### [XR-037: Dependencies on Content Packages](../XR/XR037.md) \*

Purchase of add-on content (durable or consumable) must not be required for users to complete any of the main features or content of the base game. Optional content packages must not have dependencies on other optional content packages. That is, a user must not be required to download additional content packages in order to use a content package. Game saves with unique content tied to add-on content must still load on the base game or provide clear messaging explaining why it cannot be loaded.

## Purchasing from in-game stores and from the Microsoft Store

The requirements in this category specify how purchases are to be made from in-game stores and the Microsoft Store. For policies on pricing, metadata, and offers, see the [Xbox Game Store Policy](https://www.microsoft.com/en-us/software-download/xboxpublisherguide)(1. Xbox Store and Digital Distribution, 2. Xbox Store Policy).

### [XR-036: In-Title Pricing Information](../XR/XR036.md) \*

Any real-world currency prices displayed within a title, including but not limited to any promotional or subscription-based discounts, must be sourced from the Xbox catalog.

For more information on in game commerce with the GDK, read the [Commerce section](../../commerce/commerce-nav.md)

### XR-039: Common Purchase UI

For all transactions made using real-world currency initiated on the console for digital content, titles must use the Xbox commerce platform. All purchases must use the Xbox console common purchase UI.

For more information on in game commerce with the GDK, read the [Commerce section](../../commerce/commerce-nav.md)

## User profiles

The requirements in this category apply to how a game interacts with the Xbox user models, profiles, and saving user data.

### [XR-112: Establishing a User and Controller During Initial Activation and Resume ](../XR/XR112.md) \*

Titles must establish one or more active users to function as the primary user or users in the title, and handle the user or users when resuming from suspended and constrained modes.  Titles do this with the GDK by using either the Simplified or Advanced User Model.

**GDK Simplified User Model Titles**

The Simplified User Model in the GDK handles default user acquisition on behalf of the title.  The title is still responsible to ensure that a controller is assigned to the user and use that controller for game input.  If no controller is assigned to the default user, the title should use XUserFindControllerForUserWithUiAsync to engage the system dialog to select a controller and begin accepting input from the player.

**GDK Advanced User Model, ERA, and UWP Multiple User Applications**

On initial activation games can choose to determine the initial user based on their game design and preference using either the user who launched the title or by explicitly prompting for a user.

The title must indicate the active user(s) before the first profile-related action (such as saving progress or settings) is taken on that user's profile.

All Microsoft Game Development Kit (GDK) titles using the advanced user model, ERA, and UWP Multiple User Application (MUA) titles must provide an entry point to the account picker to change the active user.

When a title is resumed from suspension or constrained mode, the title must validate the user/controller pairing and react accordingly by resuming the prior user's session or acquiring a new user or users.

### [XR-115: Addition and Removal of Users or Controllers During Gameplay](../XR/XR115.md) \*

Titles which support multiple users must respond to the addition and removal of users or scenarios in which an active player has no controller assigned or a controller loss during gameplay as follows:

**Controller Addition:**  After titles have selected or have been provided the initial user and controller, titles can optionally accept input from other controllers. Titles which support multiplayer experiences should consider how an additional player or controller is added into game play and is bound to a user with XUserAddAsync. For example, 'Press A to join' or illustrating a controller silhouette on a player select screen.

**Controller Removal:** If the player's controller that is driving gameplay is removed during gameplay, titles must allow reestablishment of a new active controller (for example, "Press A to continue" or receiving a ControllerPairingChanged in ERA or XUserDeviceAssociationChangedCallback event in the GDK for the active user with a valid controller).  Titles can also invoke system UX using XUserFindControllerForUserWithUiAsync to prompt the user to pair a controller to their user and return to gameplay.

**User Addition:** When using ERA or UWP, if a new user signs in, the title can add the user to the title if the title supports a multiuser experience, but the title must not automatically switch active users to the new user or interrupt the active users' experience based on a new signed-in user event. 

When using the GDK (using either Simplified or Advanced User Models), users are only added when the title calls XUserAddAsync.

**Primary User Removal:** For titles using ERA or the GDK advanced user model, if the primary user is signed out (via the guide, SPOP or other means), the title must either remove the player from the game or reestablish a user and active controller.

For titles using the GDK Simplified User Model, the primary player being removed will result in the title being suspended at the system level.  

In all scenarios, titles handle removal/closure by placing their game in a good state. This includes writing to connected storage, notifying any relevant MPSD sessions that the user has left, and bringing the user to an appropriate place for sign-in if a new user has also not been added.

**Additional/Secondary User Removal:** Titles can handle this event in their discretion, usually by removing the player from game play immediately or prompting the player to rejoin in the context of the multiplayer experience being used.

### [XR-045: Xbox network and Account Privileges ](../XR/XR045.md) \*

Xbox network provides users with an expected level of privacy and online safety for themselves and their children. In order to deliver on that promise, titles must check the Xbox network service for privileges to complete certain actions on the Xbox network service or in a title experience.

While privilege checking and adherence applies to all accounts, it's important to note the experience and expectations for child accounts specifically. For child accounts, restrictions on certain activities may be blocked due to age-based defaults and/or configurations by the child's family organizer (parent or guardian). Children cannot make changes themselves, however, with certain activities it is possible and expected the title invokes the necessary system UI to allow young players to request an exception via an approval flow for that associated activity. In such circumstances, for instance, a young player may be blocked from multiplayer globally, but the family parent or guardian could approve multiplayer for the specific title via the system UI; then the child would and should be able to access this game mode for that specific title.

| **Activity**|**ID**|**Privilege Name**|**Notes**|
|-|--|--- |---|
|Playing in a multiplayer game session|254|XPRIVILEGE_MULTIPLAYER_SESSIONS|Allows a user to join online multiplayer gameplay sessions with real-world users (not bots) in scenarios such as: Synchronous player-vs-player gameplay in the same session, asynchronous turn-based gameplay, Team-based gameplay, User-initiated matchmaking, Sending or accepting invitations, Join-in-progress sessions. Note this privilege does not pertain to local multiplayer games run on the same device.|
|Playing in a cross-network game play session|185|AuthPrivileges.CrossNetworkPlay|Allows a user to participate in a gameplay session with other real-world players who are not signed into Xbox services in scenarios such as: Synchronous player-vs-player gameplay in the same session, asynchronous turn-based gameplay, Team-based gameplay, User-initiated matchmaking, Sending or accepting invitations, Join-in-progress sessions.|
|Communication with anyone |252|XPRIVILEGE_COMMUNICATIONS|Allows a user to communicate with any other Xbox network users through voice or text. |
|Shared gaming sessions|189|XPRIVILEGE_SESSIONS|Allows a user to participate in connected single-player experiences in shared environments or in scenarios where a title is a hybrid free to play and paid multiplayer title and uses this privilege to gate those experiences Xbox consoles. Single player experiences must not have any features covered under privilege 252 or 254 (Communications and Multiplayer, respectively). Use of this privilege is a title capability that requires platform approval.|
|User-generated content (UGC)|247|XPRIVILEGE_USER_CREATED_CONTENT|Allows a user to see other users' UGC online, download other users' UGC, or share their own UGC online. This does not restrict usage of previously downloaded UGC. |
|Sharing to a social network|220|XPRIVILEGE_SOCIAL_NETWORK_SHARING|Xbox consoles Only: Allows a user to share information, including game progress, Kinect-generated content, game clips, and so on outside of the Xbox network.|

Free to play titles, demos, or betas can be configured to allow multiplayer gameplay (ID 254) for players who are not Xbox Game Pass subscribers. This is done via a service side configuration and can be initiated by contacting your Microsoft representative. These titles must continue to check for the multiplayer game privilege to ensure that parental controls and player choices are respected.

### [XR-046: Display Name and Gamerpic](../XR/XR046.md) \*

On Xbox consoles, titles must use the gamertag as their primary display name.

Based on design choice titles can choose between the player's modern gamertag or their classic gamertag. Modern gamertag is available in the GDK and classic gamertag is available in both ERA and the GDK.

On non-console platforms, while not required, we recommend you use the Xbox network player's gamertag in the appropriate locations within the game title's experience.

The gamertag must be displayed correctly in the title based on the gamertag type used:

**Modern Gamertag**  
Display all 16 characters of the unique modern gamertag, which includes up to 12 characters of the modern gamertag, followed by # and the suffix number (if present). For example: Major Nelson (no suffix present) or Major Nelson#881. If modern gamertags are used, all Unicode character ranges available for modern gamertags must be supported. For more modern gamertag information and best practices visit the GDK development documentation article 'Overview of modern gamertags'.  

**Classic Gamertag**  
Correctly display all 15 characters of the classic gamertag. Classic gamertags include only ASCII characters a-z, A-Z, 0-9, comma (,), and space (ASCII character 0x20). For example: Major Nelson

In the GDK these items are returned using the [XUserGetGamertag](../../../reference/system/xuser/functions/xusergetgamertag.md) API. In ERA the gamertag is obtained using the `GetUserProfileAsync` API.

### [XR-047: User-Profile Access](../XR/XR047.md) \*

Titles must give users the option to access other Xbox network users' gamercards (user profiles) wherever users' display names are enumerated.

### [XR-048: Profile Settings Usage](../XR/XR048.md) \*

The Xbox network is the source of truth for Xbox user profile information. To support this, titles must not store users' information sourced from the Xbox network, such as profile data, preferences, or gamertags, beyond a locally stored cache intended to support scenarios of network disconnection. Any offline caches must be updated upon the next available connection to the service. 

### [XR-052: User State and Title-Save Location, Roaming and Dependencies](../XR/XR052.md) \*

Titles must associate progress, saved state, preferences, achievements, and other rewards with the user(s) who have recorded that progress, chosen the preferences, or earned the rewards. Titles accomplish this by properly handling user-change notifications. Titles must avoid saving state for users who are no longer signed in. Game save data must not have any dependencies on shared content or local storage.

For games that use the same TitleID across platforms, devices and/or console generations, game save progress must roam when the user is signed into the Xbox network as follows:

* Within the same platform (Xbox consoles).
* Within devices on the same platform (e.g., Xbox One and Xbox One S).
* Across generations in the device platform (e.g., Xbox One and Xbox Series X\|S).
* Across PCs in the Windows platform (e.g., between two different PCs).
* Across PCs in the Windows platform and Xbox console platforms, (e.g., Windows and Xbox Series X\|S) game save roaming is not required but is recommended to support the player's experience.
* For non-Microsoft platforms (e.g., iOS, Android, Switch, PlayStation&reg;) game save roaming is not required but is recommended to support the player's experience.

## Achievements and Awards

The following requirements apply to titles that offer achievements on the Xbox network.  All games targeting Xbox consoles are required to have Achievements and meet the following requirements. Demos are not allowed to have achievements; however, they have the option of supporting Hero Stats.

### XR-055: Achievements and Gamerscore \*

Titles must provide the required number (minimum and maximum) of achievements and their associated gamerscore at launch. Titles are permitted to add achievements or gamerscore at any time after launch, with or without corresponding new content, but they cannot exceed title-based or calendar-based limits.

A single achievement cannot exceed 200 gamerscore and all achievements in the title must be achievable.

Unlocking achievements in the base game or a content update must represent a thorough exploration of or engagement with game content.

Item | Launch |Semi-annual additions| Lifetime limit
-----|----|-----|-----
Minimum achievements | 10 | 0 | 10
Maximum achievements | 100 | 100 | 500
Gamerscore | 1000 | 1000 | 5000

Note: "Semi-annual" means January-June, July-December. Base game achievements and Gamerscore do not count towards the semi-annual limits.

### [XR-057: Unlocking Achievements](../XR/XR057.md) \*

Titles must provide a way for a user to earn all achievements defined by the base title without being required to purchase additional in-title content.

Achievements must be unlocked through in-game actions, gameplay, and/or experiences.

Titles must not provide players alternative options that unlock achievements directly without corresponding gameplay activity. A non-exhaustive list of disallowed options:

* A real-money purchase

* In-game cheat codes, consoles, or menu options

These options may be used to reduce the difficulty of the gameplay required to unlock achievements.

### XR-058: Achievements Across Multiple Titles or Platforms

Achievements must not be shared across titles. When a single title is supported across different platforms by using the same title ID, a title must share the same set of achievements and can, at their discretion, have platform-specific achievements.

### XR-060: Modifying Active Achievements

After an achievement has been published to users, it cannot be removed, nor can its unlock rules or rewards be changed. Achievement text strings (name, description) or art (icons/background) can be modified.

### [XR-062: Achievement Names and Descriptions](../XR/XR062.md)

Achievement names and descriptions may contain only content that would merit a rating of PEGI 12, ESRB EVERYONE 10+, or lower.

Achievement names and descriptions may not contain what is commonly considered profanity in a clear text or redacted form.

## Multiplayer sessions

The requirements in this category pertain to game titles that provide multiplayer sessions on Xbox. Xbox offers a consistent and simple way to find multiplayer sessions and to fine-tune the parameters used to find those sessions.

### [XR-064: Joinable Game Sessions and Online Play](../XR/XR064.md) \*

On Xbox consoles, titles that offer joinable game sessions must enable joinability through the Xbox shell interface. 

Titles that offer cross platform multiplayer with Xbox consoles from PC devices using Xbox sign in must also enable joins through the Game Bar experience.

### [XR-067: Maintaining Multiplayer Session State](../XR/XR067.md) \*

On Xbox consoles, titles with online multiplayer functionality must maintain session-state information on the Xbox network.  Titles do this through the Xbox Multiplayer Session Directory (MPSD) or if a title has their own multiplayer session state functionality, they may choose to instead record player interactions using the Multiplayer Activity Recent Player feature.

On devices other than Xbox consoles, titles which offer cross platform multiplayer with Xbox consoles must maintain session-state information in the Xbox Multiplayer Session Directory (MPSD).   If they have their own session state functionality,  they may choose to instead record player interactions using the Multiplayer Activity Recent Player feature.

### XR-070: Friends Lists \*

Titles must use the Xbox network Friends list as the primary list of friends.  Titles must obtain the friends list from Xbox APIs and must not store the friends list in a permanent nature on game servers.

Titles can display a secondary list of friends from a central title account for players not on the Xbox network or not on the user's Xbox network friends list. Based on design, titles may create a blended friends list experience containing both Xbox network and publisher account friends in a central location; iconography or other clarifying marks must be used to disambiguate Xbox friends from those on other networks.

For information on using the friends list using the GDK, read the [People System (Friends List) overview](../../../services/community/people-system/live-people-system-nav.md)

### XR-124: Game Invitations \*

Games that support joinable multiplayer experiences must allow players to send game invitations using the Xbox network platform from within the game to other Xbox network users, including scenarios where cross network players are present.

For information on game invites using the GDK, read the [Invites overview](../../../services/multiplayer/invites/live-multiplayer-invites-overview.md)

## Betas and Game Previews

The requirements in this category apply only to titles classified as betas or Game Previews. For other store policies and for program-specific definitions of open and closed betas, size limitations, duration, pricing, metadata, and offers, see the [Xbox Game Store Policy](https://www.microsoft.com/en-us/software-download/xboxpublisherguide)(1. Xbox Store and Digital Distribution, 2. Xbox Store Policy).

Beta and Game Preview titles are subject to a subset of the XRs presented in this document. The scope of this subset is detailed in the [Xbox Requirements for Game Previews and Betas page](../certification-Requirements-Beta-Game-Preview.md).

### XR-117: Beta/Game Preview Notification \*

Titles that are in beta stage must have a splash screen or message that is displayed within the experience, after it is launched but before gameplay or application usage, communicating that:

* The title is beta/pre-release software.
* Some platform features might not work correctly.
* Some game features might not work correctly and might crash.

The notification must also outline the support boundaries for the title.

<a id="changes"></a>

## Changes in this Release

Date | Document version | Change description
-----|------------------|-------------------
June 1, 2026 | Console: 16.2 | **Console only:**<br>[XR-007: Cross-Network Play, Data Usage, and Companion App Interactions](../XR/XR007.md) has been updated to focus solely on business policy, with the technical requirements removed.