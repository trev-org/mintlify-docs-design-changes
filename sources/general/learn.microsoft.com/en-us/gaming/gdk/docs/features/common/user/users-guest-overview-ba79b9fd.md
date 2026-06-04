# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/user/users-guest-overview?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/user/users-guest-overview?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Guest users overview

Feedback

Summarize this article for me

Guest Users, also known as _**Sponsored Guests**_ or _**Guest Accounts**_, allow players to interact with many Xbox services without needing to create a full Xbox account. When a title allows guest accounts to participate, it is using Sponsored Guests to facilitate this.

Note

There exists another type of guest account known as a _**Pure Guest**_. This is the type of account which exists in the absence of a signed in account. It cannot make authenticated Xbox service calls, nor can it play any games which require an Xbox user to be signed in.

Guest users are single-session accounts that are sponsored by another Xbox user already signed in to the device. It allows a player to interact with many Xbox services without needing to create a full Xbox account, and lasts until one of the following conditions is met:

- The guest account signs out
- The sponsoring user signs out
- The device is shut down

From the end user's perspective, Guest accounts allow a player to more easily join a local or online multiplayer game from the same console as their sponsor by lowering the barrier to entry. For a single gaming session, that guest enjoys many of the same benefits as the sponsor account, including voice communication.

## Supporting Guest Accounts in your title

Supporting guest users in your title is not required, but it is a great way to allow players without an Xbox account to experience your content on the sponsored device without requiring substantial changes to user handling. Similar to full Xbox users, Guest users can be signed in by calling [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604) with the `XUserAddOptions::AllowGuests` option. On signing in, the guest is assigned an `XUserHandle` which works with all API's that take an `XUserHandle` as a parameter.

Note

A key difference between an Xbox users and a guest user is the ability to deterministically identify a user. When a guest is signed in, they don't have control over which account is chosen to sponsor it. If a guest signs out and then a guest signs in, you have no way of determining if it is the same user as before. Keep this in mind if you are considering storing player preferences or cached data with a specific user.

## Xbox Users vs Guest Users when interacting with Xbox services

[XblContextCreateHandle](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/xbox_live_context_c/functions/xblcontextcreatehandle?view=gdk-2604) can then be called on that user in order to communicate with Xbox services. You can check if a user is a guest by calling [XUserGetIsGuest](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xusergetisguest?view=gdk-2604) with a user handle.

Xbox user and Guest user differences are dependent on the API's being consumed. For services that fully support guest accounts, such as querying for another player's public profile information, both types of users behave identically using the privileges of the sponsor account.

Xbox services which do not support guest users are typically ones that store or manage long-term data associated with a particular user (e.g. Statistics, Achievements, Social Relationships, etc.). Calls to those services will return an error (typically a `HTTP_E_STATUS_BAD_REQUEST`) when invoked with a guest user.

Note

It is the responsibility of the developer to avoid using guest accounts with API's that do not support them. A list of services and their level of support can be found below.

### Xbox user account subscription status and parental controls

Since Guest accounts inherit the capabilities of the sponsor account, any limitations imposed by the type of subscription (Gold vs Silver) and any parental controls enabled for that account are also inherited. For example, if the sponsor account has any privileges revoked by Xbox Community Policy & Enforcement, those privileges will be removed for the Guest user as well.

## Support for Guest Accounts with Xbox services

### Xbox services API support for Guest Users

- Cloud Storage
 
 - Not Supported
- General
 
 - Real-Time Activity (RTA) support is determined by the services being subscribed to
- Identity
 
 - Authentication
 - Inherited from sponsor account
 - Privacy
 - Permission Checking / Mute / Avoid lists
 - Inherited from sponsor account
 - Privileges
 - Parental Controls
 - Inherited from sponsor account
 - Privacy Settings
 - Inherited from sponsor account
 - Privileges removed for sponsored guest accounts
 - XPRIVILEGE\_BROADCAST
 - XPRIVILEGE\_MANAGE\_PROFILE\_PRIVACY\_SETTING
 - XPRIVILEGE\_GAME\_DVR
 - XPRIVILEGE\_SOCIAL\_NETWORK\_SHARING
 - XPRIVILEGE\_ADD\_FRIEND
 - User Profile - Partial Support
 - Guests can view public Xbox profile data
- Multiplayer
 
 - Inherited from sponsor account
- Player-Data
 
 - Achievements - Not Supported
 - Stats - Not Supported
- Authenticated Custom Web Service and Service to Service Calls
 
 - Guest accounts can make authenticated calls to custom web services
 - Guest accounts can be used in service to service calls
- Social
 
 - Localized Strings - Not Supported
 - People-System - Not Supported
 - Presence - Not Supported
 - Reputation - Not Supported
 - Social Manager - Not Supported

### PlayFab

- PlayFab Party Chat
 - Guests inherit the permissions of the sponsored user and can participate if the sponsored account has multiplayer and communication privileges

## Frequently Asked Questions

### Can multiple guest accounts be signed in at the same time?

Multiple guest accounts can have the same sponsor and may be logged in simultaneously.

### Do guest accounts have access to device entitlements?

Device entitlements are propagated to the guest accounts the same way they are to Xbox users.

Guest accounts also have the same access to installed content as the sponsor account

### How do guest accounts interact with platforms that don't support guest accounts (e.g. PC, mobile)?

Guest accounts appear as normal accounts with the same permissions of the sponsor account and do not require additional code.

### How are guest accounts tested in certification?

Guest account functionality are not specifically tested in the certification process. Additionally, whether a title chooses to support guest accounts is up to the developer.

## See Also

[User identity and XUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/user/player-identity-xuser?view=gdk-2604)

[Xbox services user privileges overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/identity/privileges/live-user-privileges-overview?view=gdk-2604)

[Client-side use of Xbox services user privileges](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/identity/privileges/concepts/live-user-privileges-client?view=gdk-2604)

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