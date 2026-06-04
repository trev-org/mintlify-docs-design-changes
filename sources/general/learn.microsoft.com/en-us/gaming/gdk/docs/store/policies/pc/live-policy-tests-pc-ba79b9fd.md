# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-policy-tests-pc?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-policy-tests-pc?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Certification Tested Xbox Requirements for Xbox PC, Mobile, and Creators Program Games

Feedback

Summarize this article for me

Version 6.0 - 11/01/2025

## Introduction

The following test cases are the recommended steps to validate a title when Xbox network services are integrated into a PC, mobile, or console other than Xbox.

- For a summary of changes in this release, see [changes in this release](https://learn.microsoft.com/#changes) at the bottom of this page.
- To review the historical change log of XRs and test cases, see [Change History for Xbox Requirements and Test Cases](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/console-xr-change-history?view=gdk-2604).
- View the [top failing test cases](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-topfailingtestcases-pc?view=gdk-2604) on PC.

## Base Requirements

The requirements in this category apply to the general rules for the standards of coding, behavior of titles, and submission of titles.

### [XR-001: Title Stability](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr001?view=gdk-2604) \*

Titles must be compliant with Microsoft Store policies regarding title stability. The following policy applies to this requirement:

[10.4.2](https://learn.microsoft.com/en-us/windows/apps/publish/store-policies#104-usability.md) 
Products must start up promptly, continue to run and remain responsive to user input. Products must shut down gracefully and not close unexpectedly. The product must handle exceptions raised by any of the managed or native system APIs and remain responsive to user input after the exception is handled.

### 001-01 Title Stability

**Test Steps**

1. Sign in to an Xbox profile and launch the title.
2. Navigate all areas of the title, including but not limited to:
 - Gameplay
 - Menus and features
 - Downloadable content (DLC)
3. Using a new Xbox profile with no previous save data, repeat steps 1-3 while disconnected from the Xbox network.

**Expected Result** 
Title instability refers to any state where user input is not recognized, or the user is blocked from progressing due to a software crash without any user notification.

**Pass Examples**

1. The title is stable.
2. The title does not cause unintended loss of user data.

**Fail Examples**

1. The title crashes, becomes unresponsive, or causes a console reboot.
2. The title causes the loss of user data.
3. A non-interactive pause or static screen is presented lasting over twenty seconds.
4. The title contains a loading screen which is more than two minutes with no indication of progress.
5. The title contains a loading screen which is more than three minutes with a progress indicator.

### [XR-003: Title Quality for Submission](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr003?view=gdk-2604) \*

Xbox games must meet Xbox quality standards and be fully functional and testable.

#### Functionally complete and testable

Titles must be fully functional and testable when submitted for certification. This includes all client code, submission artifacts, and downloadable content. Titles must be packaged cleanly with no failures using the current version of [Submission Validator](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/subval/submissionvalidator?view=gdk-2604). Submission Validator logs must be included with the submission.

#### Xbox quality standards

Xbox games must function correctly across all game modes and scenarios to meet player expectations.

##### Title integrity

Titles must be free from severe issues such as crashes, freezes, unplayable frame rates, bugs causing major progression hindrances, or graphical corruption. Game settings, options, and controls must be applied correctly and respect default settings where appropriate. Navigation and content availability should be seamless, with no dead ends or inaccessible menus. Multiplayer functionality must be stable and functional, regardless of the number of players.

##### Save game compatibility

Game saves and player progress must continue to function following content updates. Additionally, permanent data loss must not occur when loading an updated save with the base disc version.

#### 003-02 Title Integrity

**Configuration**

Refer to the [PC test bench guide](https://learn.microsoft.com/#PCBENCH) at the bottom of this page to set up your PCs.

**Test Steps**

1. Sign into an Xbox profile and launch the title.
2. Navigate through all menus, sub-menus, review all features, and complete all game modes.

- Interact with and complete all menu UI, extra content, single player and multiplayer game modes, including any additional features in all supported languages. \* Test offline, online, and split screen if applicable. \* Test multiplayer game modes with the maximum number of players. \* Post statistics to all supported leaderboards.

**Expected Result** 
All titles must provide users with a reliable, fair, consistent, and complete Xbox entertainment experience.

**Pass Examples**

1. The title can be completed in all game modes.
2. Options set during gameplay are saved after terminating and re-launching the title.
3. All areas of the title can be navigated as expected.
4. Localized text displays correctly in all areas where supported.
5. Users are able to post to leaderboards as expected.

**Fail Examples**

1. The title crashes at the end of a level or the user is blocked from progressing in any area of the game.
2. Areas of the title cannot be navigated as expected.
3. If the user inverts the horizontal or vertical camera controls with the pause menu, the camera controls do not change in-game.
4. Users are not able to post to leaderboards as expected.
5. A particular game mode cannot be completed if the user has already completed a different mode.
6. Options set during gameplay are reset to default after terminating and re-launching the title.
7. The title is unplayable due to frame rate issues.

#### 003-16 Save-Game Compatibility

**Test Steps**

1. Sign in to an Xbox profile and launch the game without connecting to Xbox.
2. Play the game and save your progress and settings.
3. Reboot the game and verify that you can load and resume the saved progress from step 2.
4. Connect to Xbox and install the content update for the base title.
5. Verify you can still load and continue your saved progress after the update.
6. Reboot the title, start a new game, and save your progress again.
7. Exit and uninstall the game.
8. Re-install and launch the base game without a connection to the Xbox network.
9. Verify that one of the following occurs:

- You can load and continue your saved progress \* The game displays a message indicating the save requires a content update to be installed \* The game does not display the save made in step 6

10. Reboot the title and install the content update.
11. Verify you can still load and continue from your saved progress after the update.

**Expected Result** 
A content-updated version of a game must be able to successfully load a save created using the non-content-updated version of the game.

**Pass Examples**

1. All saves can be loaded successfully by a content-updated version of a title.
2. When launching the base version to load an updated save, the user is notified of missing content and given a reason why the save file could not be loaded, or the saves made in the content-updated version are not visible in the base version.

**Fail Examples**

1. The content-updated version of the game is unable to load a game save created with a previous version of the title.
2. The base version of the game crashes when loading a save made with the content-updated version of the game.

### XR-022: Official Naming Standards \*

Titles must use the naming standards defined in the latest release of the terminology list for their target device platforms:

- [Xbox network terminology for PC and Mobile](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-terminology-pc?view=gdk-2604)

#### 022-01 Official Naming Standards

**Test Steps**

1. Launch the title.
2. Visit all areas of the title.
3. Navigate all menus and sub-menus.
4. Change all available settings and options.
5. If the title supports saves, save and load all possible game types.
6. Watch all cinematics.
7. Note all text shown.

**Expected Result** 
All text adheres to the most recent terminology list.

**Pass Examples** 
None

**Fail Examples**

1. The title uses a proprietary term or image from a competitive platform.
2. Title refers to a component of the device or component of a peripheral using any term that is not included in the terminology list.

### [XR-074: Loss of Connectivity to Xbox and Partner Services](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr074?view=gdk-2604) \*

Titles must resolve errors with Xbox network and partner services connectivity. Titles must honor the retry policies set by Xbox network when attempting to retry a request to the Xbox service after a failure has occurred. Titles must appropriately manage messaging the user when services are unavailable. For example, if a partner service other than the Xbox network is not available, the game should not indicate that there is an issue with the Xbox network.

#### 074-01 WAN Disconnection to Xbox Services

**Test Steps**

1. Sign in to an Xbox profile.
2. While performing the following actions, disconnect the WAN network. If you are using an Ethernet switch/hub disconnect the uplink cable from the network device. If the device is connected via Wifi, disconnect the uplink cable from the wireless access point connection:
 - Creating a new save point
 - Loading a save point
 - Reaching an auto-save point
 - Enumerating a list of saved games
 - Searching for and joining an online session
 - Attempting to create an online session
 - Viewing a leaderboard (if applicable)
 - Playing offline

**Expected Result** 
In the event that the console is unable to reach Xbox services, the title should respond with a user-friendly error message.

**Pass Examples**

1. The title displays an error message indicating loss of network connection to Xbox services.
2. The title does not display an error message while playing a local game mode that does not require Xbox services.
3. A title with `RequireXboxLive` in AppX manifest suspends and then terminates when connectivity is lost.

**Fail Examples**

1. The user is unable to complete a non-online Xbox game session.
2. Title goes into an unresponsive or unstable state.

#### 074-02 Direct Disconnection

**Test Steps**

1. Launch the title and sign in to an Xbox profile.
2. While performing the following actions in the title, pull the network cable from the device, or power off the WAP or wireless router:
 - Creating a new save point.
 - Loading a save point.
 - Reaching an auto-save point.
 - Enumerating a list of saved games.
 - Searching for and joining an online session.
 - Attempting to create an online session.
 - Viewing a leaderboard (if applicable).
 - Playing offline.

**Expected Result** 
In the event the device loses connection to Xbox services, the title should respond with a user-friendly error message.

**Pass Examples**

1. The title displays a user-friendly message while in online game mode.
2. The title does not interrupt gameplay during offline game mode.
3. A title with `RequireXboxLive` in AppX manifest suspends and then terminates when connectivity is lost.

**Fail Examples**

1. An error message is displayed during offline game mode.
2. The title goes into an unresponsive or unstable state.
3. The user is able to view online menus or view buffered media after the network goes offline.

#### 074-07 Dynamic Connectivity Loss

**Tools Needed:**

- Fiddler Classic with the [Content Blocking](https://www.telerik.com/fiddler/add-ons) Add-on

**Configure Fiddler Classic to block Partner Services using the Content Blocking add-on**

- On Console, [setup Fiddler](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/console/networking/tools/fiddler-setup-networking?view=gdk-2604) to debug web service calls
- On PC, [setup Fiddler](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/console/networking/tools/fiddler-pc?view=gdk-2604) to debug web service calls
- Install the [Content Blocking](https://www.telerik.com/fiddler/add-ons) add-on for Fiddler
- In Fiddler, select the menu ContentBlock and "Enabled"

Tip

**Steps to configure the block list:**

1. With Fiddler running, launch the title and navigate all menus, complete a multiplayer session, load into every game mode, and navigate all areas of the title including, but not limited to:
 - menus
 - leaderboards
 - servers (create one and join someone else's)
 - friends lists
 - in-title store
 - limited time events

This ensures the title connects to all hosts during normal gameplay.

2. In Fiddler, identify which hosts are non-Microsoft services:
 
 - Sort the list of sessions by Host and find hosts that DO NOT contain any of the following:
 - `microsoft, msft, xboxlive, xboxservices, live, PlayFabApi, msn, bing`
3. In Fiddler, add the Non Microsoft hosts to the block list:
 
 - Right-click a Non Microsoft host and select 'Block this Host'
 - Repeat for all other Non Microsoft hosts

You don't have to block the same host multiple times.

To edit the Block List, select the ContentBlock menu and "Edit Blocked Hosts..."

Now that all Non Microsoft hosts have been added to the block list, proceed to running the test case.

**Test Steps**

1. Sign in to an Xbox profile and launch the title.
2. Complete a multiplayer session, load into every game mode and navigate all areas of the title including, but not limited to:
 - Menus
 - Leaderboards
 - Servers (create one and join someone else's)
 - Friends List
 - In-title Store
 - Limited time events
3. Verify the title does not display an error message indicating an issue with the Xbox network.

**Expected Result** 
The title gracefully handles disconnections to non-Microsoft services.

**Pass Examples**

1. Title does not hang or crash upon loss of connectivity to partner-hosted services.

**Fail Examples**

1. Message displayed implies issues with Microsoft services.
2. Non-descriptive error message is displayed.
3. Title crashes, becomes unstable, or causes console reboot.

#### 074-08 Pre-Launch Downtime

**Tools Needed:**

- _xbstress.exe_ from the GDK/XDK
- For Windows 10, Fiddler Classic

**Test Steps**

1. On consoles, create a broken network channel with _xbstress.exe_ for non-Microsoft traffic using the command:

`xbstress set channel=0 network=broken addresses=[semicolon delimited list of addresses]`

2. Start the network simulation with the command: `xbstress simulate network=channels`.
3. If testing on Windows 10, use fiddler to emulate downtime.
4. Sign in to an Xbox profile.
5. Launch the title.
6. Access non-Microsoft online feature.

**Expected Result** 
Titles should provide a user-friendly error message indicating that there is a problem reaching the non-Microsoft service and should allow an opportunity to retry connection.

**Pass Examples**

1. Title does not hang or crash upon loss of connectivity to the partner-hosted service.

**Fail Examples**

1. Error displayed implies issues with Microsoft service.
2. Non-descriptive error message is displayed.
3. Title crashes, becomes unstable, or causes console reboot.

### [XR-132: Service Access Limitations](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr132?view=gdk-2604) \*

Titles which exceed [title and user based limits](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/develop/best-practices/live-fine-grained-rate-limiting?view=gdk-2604) when calling Xbox network services or do not adhere to Xbox network service retry policies may be subjected to rate limiting, which may result in service interruption or deprecation. Failure to adhere to the specified limits may block a title from release, and in-production issues with released titles may result in Xbox network services suspension up to and including title removal.

#### 132-01 Service Access Limitations

**Tools Needed**

- [Fiddler on PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/console/networking/tools/fiddler-pc?view=gdk-2604)
- [Xbox services Trace Analyzer](https://aka.ms/xboxlivetoolspackage) from the GDK development tools download package. It is used to review service calls made by a title and to find any violations in calling patterns.

**Test Steps**

1. With the title running, start a fiddler trace and proceed to move through all areas of the title, including (if supported), but not limited to, the following:

- Create a game save, reboot the device and load the game save.
- Change rich presence states in quick succession (if possible).
- Unlock and view achievements.
- Post to all leaderboards and view all leaderboards using all filters.
- View in-game Friends List (including a friend with presence blocked) and move between pages rapidly.
- Match-make into all online modes, including being unable to find an available session (if possible) and generate voice traffic.
- Create, save and share a game clip.
- Access the in-game store (if applicable).

2. Once testing has concluded, save the Fiddler capture to a local directory.
3. In the GDK command prompt, run `xbltraceAnalyzer -data filepath -outputdir filepath`.
4. Open the output directory from step 3 and open the 'index' file (select 'Allow blocked content' if prompted).

**Expected Result** 
Titles must ensure they keep their service calls to Xbox endpoints below the specified burst and sustain limits and not have any red results in their Xbox services Trace Analyzer report.

The Xbox services Trace Analyzer tool generates a _report.txt_ file which indicates the rule(s) that found violations, along with the details of those violations.

Tip

**Interpreting the Xbox services Trace Analyzer report**

- Red - Indicates an issue that is exceeding the point at which fine grained rate limiting takes effect by 10x. This is a serious issue in Certification.
- Yellow - Indicates that the service is being rate limited because the title exceeds the frequency with which calls are allowed to the service but does not exceed the threshold that would be a serious issue in Certification. These are something titles should look to resolve.
- Green - Indicates that the title is making calls to Xbox services below the frequency at which rate limiting would take effect.

**Pass Examples**

1. The title does not exceed the sustain limit when calling Xbox services.
2. The Xbox services Trace Analyzer report only contains yellow and/or green results.

**Fail Examples**

1. The title exceeds the sustain limit (limit at which rate limiting takes effect) by 10x. For example, if the sustained limit at which Fine Grain Rate Limiting takes effect is set to 300 calls in 300 seconds, titles at or above 3000 calls in 300 seconds will fail.
2. The Xbox services Trace Analyzer report contains one or more red result.

## User profiles

The requirements in this category apply to how a game interacts with the Xbox user models, profiles, and saving user data.

### [XR-045: Xbox network and Account Privileges](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr045?view=gdk-2604)\*

The Xbox network provides users with an expected level of privacy and online safety for themselves and their children. In order to deliver on that promise, titles must check the Xbox network service for privileges to complete certain actions on the Xbox network service or in a title experience.

Expand table

| **Activity** | **ID** | **Privilege Name** | **Notes** |
| --- | --- | --- | --- |
| Playing in a multiplayer game session | 254 | XPRIVILEGE\_MULTIPLAYER\_SESSIONS | Allows a user to join online multiplayer gameplay sessions with real-world users (not bots) in scenarios such as: Synchronous player-vs-player gameplay in the same session, asynchronous turn-based gameplay, Team-based gameplay, User-initiated matchmaking, Sending or accepting invitations, Join-in-progress sessions. Note this privilege does not pertain to local multiplayer games run on the same device. |
| Playing in a cross network game play session | 185 | AuthPrivileges.CrossNetworkPlay | Allows a user to participate in a gameplay session with other real-world players who are not signed into Xbox services in scenarios such as: Synchronous player-vs-player gameplay in the same session, asynchronous turn-based gameplay, Team-based gameplay, User-initiated matchmaking, Sending or accepting invitations, Join-in-progress sessions. |
| Communication with anyone | 252 | XPRIVILEGE\_COMMUNICATIONS | Allows a user to communicate with any other Xbox network users through voice or text. |
| Shared gaming sessions | 189 | XPRIVILEGE\_SESSIONS | Allows a user to participate in connected single-player experiences in shared environments or in scenarios where a title is a hybrid free to play and paid multiplayer title and uses this privilege to gate those experiences Xbox consoles. Single player experiences must not have any features covered under privilege 252 or 254 (Communications and Multiplayer, respectively). Use of this privilege is a title capability that requires platform approval. |
| User-generated content (UGC) | 247 | XPRIVILEGE\_USER\_CREATED\_CONTENT | Allows a user to see other users' UGC online, download other users' UGC, or share their own UGC online. This does not restrict usage of previously downloaded UGC. |
| Sharing to a social network | 220 | XPRIVILEGE\_SOCIAL\_NETWORK\_SHARING | Xbox consoles Only: Allows a user to share information, including game progress, Kinect-generated content, game clips, and so on outside of the Xbox network. |

Free to play titles, demos, or betas can be configured to allow multiplayer gameplay (ID 254) for players who are not Xbox Game Pass subscribers. This is done via a service side configuration and can be initiated by contacting your Microsoft representative. These titles must continue to check for the multiplayer game privilege to ensure that parental controls and player choices are respected.

#### 045-01 Respect User Privileges

**Test Steps**

1. Sign in to a Xbox profile and launch the title.
2. For each of the privileges identified in the XR, identify if the title supports the associated activity.
3. For each possible setting of each applicable privilege identified in step \[2\], perform the following:

- Exit the title and change the user's settings for the privilege.
- Restart the device.
- Sign into the same profile and launch the title.
- Visit all relevant areas of the title, use all title features relevant to the privilege and verify that the title respects the user's current privilege setting.

**Expected Result** 
Titles must honor the user's privilege settings.

**Pass Examples**

1. The title respects the user's privilege settings.
2. The title treats a partial-allow privilege setting as if the privilege is disabled / disallowed (e.g. when the User-generated content (UGC) privilege is set to Friends Only, the title behaves as if the privilege is set to Blocked).
3. For titles using the Xbox One XDK, the title invokes the system UI to alert the user of any privilege conflicts (titles must use the Store::Product::CheckPrivilegeAsync API).
4. For titles using XSAPI, the title shows an informative message to let the user know they cannot participate.

**Fail Examples**

1. The title persists a user's privilege settings and does not reflect the user's actual privileges after they have been changed.
2. The title treats a partial-allow privilege setting as if the privilege is set to its least restrictive setting (e.g. when the User-generated content (UGC) privilege is set to Friends Only, the title behaves as if the privilege is set to Allowed).
3. For titles using the Xbox One XDK, the title uses in-game messaging to alert the user of any privilege conflicts and does not display the System UI.
4. For titles using XSAPI, the title does not show an informative message to let the user know they cannot participate.

### [XR-046: Display Name and Gamerpic](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr046?view=gdk-2604) \*

On Xbox consoles, titles must use the gamertag as their primary display name.

Based on design choice titles can choose between the player's modern gamertag or their classic gamertag. Modern gamertag is available in the GDK and classic gamertag is available in both ERA and the GDK.

On non-console platforms, while not required, we recommend you use the Xbox network player's gamertag in the appropriate locations within the game title's experience.

The gamertag must be displayed correctly in the title based on the gamertag type used:

**Modern Gamertag** 
Display all 16 characters of the unique modern gamertag, which includes up to 12 characters of the modern gamertag, followed by # and the suffix number (if present). For example: Major Nelson (no suffix present) or Major Nelson#881. If modern gamertags are used, all Unicode character ranges available for modern gamertags must be supported. For more modern gamertag information and best practices visit the GDK development documentation article 'Overview of modern gamertags'.

**Classic Gamertag** 
Correctly display all 15 characters of the classic gamertag. Classic gamertags include only ASCII characters a-z, A-Z, 0-9, comma (,), and space (ASCII character 0x20). For example: Major Nelson

In the GDK these items are returned using the [XUserGetGamertag](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xusergetgamertag?view=gdk-2604) API. In ERA the gamertag is obtained using the `GetUserProfileAsync` API.

#### 046-01 Display Name and Gamerpic

**Tools Needed**

- _XblTestAccountGui.exe_ from the GDK

**Preparation** 
Create four test accounts for each of the following names and change the gamertag using _XblTestAccountGui.exe_ for each test account to the following:

- **สฐ众нь컴퓨퓨**
- **आथाώঙぁヺ**
- **øÜêþЯЂў**
- **gttest1**

**Test Steps**

1. Locate and view where gamertags are displayed within the title.
2. Check to see how the users' gamertag is displayed in all areas identified in Step \[1\].
3. If the title displays users' pictures, verify that the correct Microsoft account picture or gamerpic appears for each account.

**Expected Result** 
The user's gamertag must be displayed correctly.

**Pass Examples**

1. The gamertag correctly shows the Unicode characters (including the auto-generated suffix) when using Modern Gamertag.
2. The gamertag is correctly shown when using Classic Gamertag.

**Fail Examples**

1. The gamertag is not rendered at all because the Unicode characters are shown as blank characters.
2. The gamertag is not correctly shown when using Classic Gamertag.

### [XR-048: Profile Settings Usage](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr048?view=gdk-2604) \*

The Xbox network is the source of truth for Xbox user profile information. To support this, titles must not store users' information sourced from the Xbox network, such as profile data, preferences, or gamertags, beyond a locally stored cache intended to support scenarios of network disconnection. Any offline caches must be updated upon the next available connection to the service.

#### 048-01 Profile Settings Usage

**Configuration**

- 2 Xbox devices

**Test Steps**

1. Select a profile and create a save.
2. Change user profile data, including updating a gamertag or account name.
3. Boot the title and load the save made in Step \[2\].
4. Verify that the user-profile data visible during gameplay have changed and are not stored in the save game.
5. Verify that any reference to the gamertag (created automatically by the title) has been updated. This includes any reference on server-hosted functionality as well as any reference within the title.
6. Boot the title on a second device and verify the updated gamertag is displayed correctly.

**Expected Result** 
User-profile data must not be stored. For instance, if the title uses the gamertag in-game (like in a welcome message) or on a non-Xbox server (such as naming uploaded data), it must not persist if the user changes their gamertag. This does not apply if the user has manually entered the gamertag.

**Pass Examples**

1. User-profile data and preference settings are updated in all displays after they have been changed.

**Fail Examples**

1. The title does not display the user's updated gamertag or Microsoft account name either within the title or on Xbox Home for locally stored save data such as replays, saves, options, maps, and teams.
2. The title does not update a user's gamertag for persistent posts, such as game clips, replays, leaderboards, or other custom posts, such as messages, bulletin posts, user challenges, costumes, themes, livery, tournaments, and league. Note: This applies to both new and previously created posts.
3. The title stores the user's gamertag for the user's saved data, such as replays, saves, options, maps, and teams, resulting in the save data becoming unusable if the user changes their gamertag or account name.

### [XR-052: User State and Title-Save Location, Roaming and Dependencies](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr052?view=gdk-2604)\*

Titles must associate progress, saved state, preferences, achievements, and other rewards with the user(s) who have recorded that progress, chosen the preferences, or earned the rewards. Titles accomplish this by properly handling user-change notifications. Titles must avoid saving state for users who are no longer signed in. Game save data must not have any dependencies on shared content or local storage.

For games that use the same TitleID across platforms, devices and/or console generations, game save progress must roam when the user is signed into the Xbox network as follows:

- Within the same platform (Xbox consoles).
- Within devices on the same platform (e.g., Xbox One and Xbox One S).
- Across generations in the device platform (e.g., Xbox One and Xbox Series X|S).
- Across PCs in the Windows platform (e.g., between two different PCs).
- Across PCs in the Windows platform and Xbox console platforms, (e.g., Windows and Xbox Series X|S) game save roaming is not required but is recommended to support the player's experience.
- For non-Microsoft platforms (e.g., iOS, Android, Switch, PlayStation®) game save roaming is not required but is recommended to support the player's experience.

#### 052-05 Correct User Association

**Test Steps**

1. Sign in to a profile and Launch the title.
2. Progress into gameplay and save game progress.
3. Terminate the title.
4. Sign out of the profile from Step 1 and sign in to a new profile.
5. Launch the title and attempt to access saved progress.

**Expected Result** 
Progress saved for the original user must not be visible/accessible to the new profile.

**Pass Examples**

1. Only saved progress associated with the new profile in step 4 is shown in step 5.

**Fail Examples**

1. The title allows a new profile to load a different profile's saved progress.

#### 052-06 Cloud Storage: Roaming

**Devices Needed:**

- Xbox One
- Xbox One S
- Xbox One X
- Xbox Series X Dev Kit (using Xbox Series X|S retail console mode)
- 2 PCs

**Test Steps**

1. Sign in to an Xbox profile on device A and launch the title.
2. Begin gameplay and make save progress (if possible, create a settings save by changing or adding a new setting configuration).
3. Exit the title.
4. Sign in on a second device from the same platform/generation (e.g., Xbox Series S and Xbox Series X, Xbox One and Xbox One S and a second PC) that was used in Step 1 with the same profile used in Step 1.
 - Launch the same title from Step 1 and verify that all saved games and any settings and/or configuration files can be accessed and loaded correctly and they don't have any dependencies on shared content.
5. For games using the same TitleID on the same platform across generations (e.g., Xbox One and Xbox Series X|S), repeat step 4.
6. For PC games using the same TitleID on the Windows platform, repeat step 4.
7. If supported, for games using the same TitleID across platforms (e.g., Windows and Xbox Series X|S):
 - Launch the same title from Step 1 on the other supported platforms and verify that all saved games and any settings and/or configuration files can be accessed and loaded correctly and they don't have any dependencies on shared content.

**Expected Result** 
Title-save progress must be associated with a user profile and must roam between like devices/platforms when the user is signed into Xbox services. For games using the same TitleID on the same platform across generations, game save data must roam between these platforms. For PC games using the same TitleID on the Windows platform, game save data must roam between different PCs. Game save data must not have any dependencies on shared content.

**Pass Examples**

1. Game saves and associated settings files can be downloaded successfully on a second console on the same console platform/generation (e.g., Xbox Series S and Xbox Series X or Xbox One and Xbox One S).
2. Game saves and associated settings files can be downloaded successfully on a second PC on the Windows platform.
3. For console games that share the same TitleID on the same platform across generations (e.g. Xbox One and Xbox Series X|S), saves and associated settings files can be roamed between these devices.
4. Game save data does not have any dependencies on shared content.

**Fail Examples**

1. Game saves and associated settings files cannot be downloaded successfully on a second console on the same platform/generation (e.g., Xbox Series S and Xbox Series X or Xbox One and Xbox One S).
2. Game saves and associated settings files cannot be downloaded successfully on a second PC on the Windows platform.
3. For console games that share the same TitleID on the same platform across generations (e.g. Xbox One and Xbox Series X|S), saves and associated settings files cannot be roamed between these devices.
4. The saves in the cloud are not recognized by the title on first launch, and through no user interaction, are subsequently overwritten on the second device.
5. Game save data has dependencies on shared content.

## Online Safety and Privacy

The requirements in this category pertain to the online safety and privacy of Xbox users.

### [XR-013: Linking Microsoft Accounts with Publisher Accounts](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr013?view=gdk-2604)\*

On Xbox, titles that use partner-hosted services or accounts that require credentials must support all Xbox users and offer to link that account with the user's Microsoft account. Outside of Xbox consoles, titles can choose to allow account linking to support their game experience.

If publisher account sign in is enabled within the title, the following rules apply:

**Publisher Account Sign In**

- **Accommodate All Users** 
 If a publisher account sign in is required for game features (single player, multiplayer, cross network gameplay, leader boards), sign in and sign up must support all user types, ages, and regions where the game title is offered and where those features are allowed by local/regional laws irrespective of age rating.
 
 - A game publisher may choose not to support a particular region, age, etc. for their publisher account. If a region, age group, or other group of players cannot create or sign into an account the title cannot require those users to sign in with an account for game features.
 - If a particular account setting is not supported in a title-based sign-up experience (e.g., age or region) the title must gracefully handle by providing messaging to sign up on an external site or mobile optimized experience where that user is supported.
- **Gain Consent and Provide Terms for Account Information Usage** 
 Titles must request to use and gain consent to use information from the player's Microsoft account to auto populate sign up/account creation experiences. Users must be provided with all applicable terms of use, privacy and other policies within the title (or a notice with a link to such information) during a publisher account creation process.
 
- **Disclose Requirements** 
 If a publisher account is required for gameplay or additional features, it must be disclosed in the title's product description and any physical packaging including any restrictions such as age. In title, the game must define the reason and use of the publisher account. If a publisher account limits or restricts the experience for child accounts, it is suggested to add this text to the store details page for buyer awareness:
 

> _Certain features of the game, including online multiplayer, communication and other online features, may not be accessible by Xbox child accounts. At Xbox, a child means players under the age of 13, unless local laws specify differently._

**Publisher Account/Microsoft Account Linking**

- **Authentication using the Xbox Secure Token Service (XSTS)** 
 XSTS tokens must be used to provide identity information for authentication when linking the user's publisher account to the user's Microsoft account. For more information about XSTS token authentication see [Xbox services authentication for title services](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/s2s-auth-calls/service-authentication/live-title-service-authentication?view=gdk-2604).
 
- **Gain Consent and Provide Choice** 
 Users must be notified of the account linking of the user's publisher account to the user's Microsoft account. The user must be given the choice to opt-out if linking their accounts. Users must have the ability to de-link accounts.
 
- **Accommodate All Users** 
 If a publisher account sign in is required for game features (Single player, multiplayer, cross network gameplay, leader boards), sign in and sign up must support all user types, ages, and regions where the game title is offered and where those features are allowed by local/regional laws irrespective of age rating.
 

Note

Publishers may implement additional fraud prevention mechanisms such as two-factor authentication interrupts when a linked account signs in from a new device for the first time. This behavior is not a violation of this XR.

#### 013-01 Linking Microsoft Accounts with Publisher Accounts

**Test Steps**

1. Verify the title supports or requires non-Xbox accounts or login for services or functionality.
2. Using a newly created Xbox profile, use the publisher provided service account or login to enter non-Xbox account credentials during initial setup.
3. Verify the title allows the user to view the terms of use in the app or informs the user how to view the terms of use, prior to completing the account linking process.
4. Verify that the user is not prompted to re-enter their non-Xbox account credentials in any location.
5. Sign out and sign back in while the title is running.
6. Repeat Step \[4\].
7. Terminate and reactivate the title using the same profile.
8. Repeat Step \[4\].
9. Terminate the title.
10. Verify that the title does not store non-Xbox account credentials locally by deleting any saved files that may have been created by the title.
11. Reactivate the title and repeat Step \[4\].
12. On a different console, launch the title using the same profile and repeat Step \[4\].
13. Verify the user can unlink their Xbox profile from the non-Xbox account.
14. Repeat steps \[1\]-\[13\] with an Xbox child account (under the age of 13) that falls within the games' age rating.

**Expected Result** 
Titles must allow publisher accounts to be created for all users who fall within the games' age rating. The user should only have to provide their credentials once and allows the user to view the terms of use, or informs the user how to view the terms of use, prior to completing the account linking process. Users are provided with a mechanism to unlink their Xbox profile from their non-Xbox account.

**Pass Examples**

1. The title never asks the user to re-enter their non-Xbox account or login credentials at any point after they have initially entered them and the title provides a notification of the terms of use both during the linking process and for as long as the accounts are linked.
2. The title allows publisher accounts to be created for all users who fall within the games' age rating.

**Fail Examples**

1. The title requires the user to enter their non-Xbox account or login credentials every time the title is launched.
2. The title requires the user to enter their non-Xbox account or login credentials when running the title from another console.
3. The title does not provide a method for viewing the terms of use during the account linking process.
4. The title does not provide a method for unlinking their Xbox profile from their non-Xbox account.
5. The title does not allow publisher accounts to be created for all users who fall within the games' age rating.

### [XR-015: Managing Player Communication](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr015?view=gdk-2604) \*

Titles must not allow communication over the Xbox network when the user's privacy settings do not allow it.

Titles meet this XR by retrieving data from Xbox network services. If the title uses its own services, it must check the user's privacy permissions at the beginning of a session or when a new user joins the session. For user-initiated scenarios outside of sessions, titles meet this requirement by checking privacy prior to displaying the user's data and before performing the action. The following permissions are available for titles to check:

Expand table

| Permission name | Description |
| --- | --- |
| CommunicateUsingText | Check whether the user can send text communications (e.g., text chat, message, etc.) or an invite to the target user. |
| CommunicateUsingVoice | Check whether the user can communicate using voice with the target user. |

During the gameplay session, titles which offer communication between Xbox network and non-Xbox network players must offer the ability to mute any non-Xbox network players for the duration of the session.

Note

Refer to [Privacy and permissions overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/identity/privacy/live-privacy-overview?view=gdk-2604) for details on how to check and resolve privacy and permissions issues in your title.

#### 015-01 User Communication\*\*

**Configuration:**

- Create a set of profiles with "Others can communicate with voice, text or invites" to Everyone, Friends and Blocked.
- For titles that support communication outside of Xbox, create a set of profiles with "You can communicate outside of Xbox with voice & text" to Allow, In-game friends and Blocked.
- Note: The difference between the "Allow" and "In-game friends" friends options are that "Allow" means you can talk to everyone cross network (including players you meet in random matchmaking). "In-game friends" are people you've explicitly chosen to play with by adding them to an in-game friends list.

**Test Steps**

1. On Device 1, sign in to a profile that has been configured with the specific set of permissions per the Configuration.
2. On Device 2, sign in to a profile that has no communication restrictions.
3. On both devices, launch the title and attempt to communicate using text, voice (both via Kinect and via the headset), and video in every location supported and attempt to send game invites.
4. Repeat Steps 1-3 for all profiles from the Configuration step.

**Expected Result** 
Titles must check the Xbox service for a user's permissions regarding privacy and online safety-related actions and must not transmit user data or allow communication over Xbox when the user's privacy & online safety settings do not allow it.

**Pass Examples**

1. The title prevents the user from communicating via voice and text over Xbox when that specific method of communication is configured to be blocked.
2. The title prevents the user from communicating via voice and text outside of Xbox when that specific method of communication is configured to be blocked.
3. The title prevents the user from receiving invites on Xbox when that is blocked.

**Fail Examples**

1. The user is able to communicate via voice and text over Xbox when that specific method of communication is configured to be blocked.
2. The user is able to communicate via voice and text outside of Xbox when that specific method of communication is configured to be blocked.
3. The title allows the user to receive invites on Xbox when that is blocked.

#### 015-02 Muting Support

**Test Steps**

1. As user A, mute user B.
2. Have both users join an Xbox multiplayer session.
3. Attempt to send voice communication from user B to user A.
4. Ensure that user A is unable to receive any voice communication from user B.

**Expected Result** 
User A must not be able to hear communication from user B.

**Pass Examples**

1. Voice communication from the muted user cannot be heard by the user who initiated the mute.

**Fail Examples**

1. Voice communication from the muted user can be heard by the user who initiated the mute.

#### 015-03 Blocked Users

**Test Steps**

1. As user A, block user B.
2. Have both users join an Xbox multiplayer session.
3. Attempt to send voice and written communication from user B to user A.
4. Locate any title-provided invitation mechanisms (any invitation mechanism that does not utilize the Xbox Shell).
5. Using each of the mechanisms located in step \[4\], attempt to send a game invite from user B to user A.
6. Ensure that user A is unable to receive any communication or invites from user B.

**Expected Result** 
User A must not be able to hear or see communication from user B. User A must not be able to receive game invitations from User B.

**Pass Examples**

1. Communication from the blocked user cannot be seen or heard by the user who initiated the block.
2. Game invitations from the blocked user are not received by the user who initiated the block.

**Fail Examples**

1. Communication from the blocked user can be seen or heard by the user who initiated the block.
2. Game invitations from the blocked user are received by the user who initiated the block.

### [XR-018: User-Generated Content](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr018?view=gdk-2604) \*

User generated content (UGC) refers to any in-game digital content produced by a player and made visible or accessible to one or more other people in an online state.

If your product contains UGC, you must:

- Provide an in-product means for users to report inappropriate or harmful UGC to the developer for review and removal/disablement (if in violation of content guidelines) and/or implement a method for proactive detection of inappropriate or harmful UGC (for example, text filtering).
- Publish content guidelines for user generated content (such as a terms of use or code of conduct), available to users either in-product or on the title's website.
- Be prepared to remove/disable high-risk illegal content at the request of Microsoft in the unlikely event that Microsoft becomes aware of illegal material on the Xbox network that has not been addressed via standard action mechanisms or processes.
- Respect player UGC settings and gracefully handle scenarios in which a user does not have access to UGC in-game due to restricted privileges.

Additionally, if your product is integrated with a third-party game mod platform, you must:

- Integrate with the platform's report/complaint API (if available) and moderate content if required by contractual agreement with the third party.
- Present a disclaimer, dialog, or visual indicator to users when content is not sourced from the developer.

#### 018-01 Reporting Inappropriate Content and UGC Text-String Verification

**Test Steps**

1. Identify any areas of the title where text can be entered between non friends and is then viewable by users on another device.
 
2. Verify the title provides an in-product way to report other users' inappropriate or harmful UGC to the developer.
 
3. If there is no way to report inappropriate content, in each area, enter a string, sub string, etc. that is in the [Forbidden Terms List](https://learn.microsoft.com/en-us/gaming/xbox-nda-docs/_content/gc/policies/console/certification-forbidden-terms).
 
 - Enter the forbidden term directly (i.e. "ForbiddenTerm").
 - Enter a forbidden term with another non-forbidden term separated by a space i.e. ("Good ForbiddenTerm").
4. If the title allows UGC to be created in an offline state, e.g. character names, disconnect the device from the network, enter forbidden term combinations and reconnect to the network.
 
5. Verify that the forbidden term is not visible to any other user on another device.
 
6. Repeat Steps 3-5 in each language supported by the title using forbidden terms from the matching locale.
 

**Expected Result** 
The title must provide an in-product way for users to report inappropriate or harmful UGC to the developer and/or implement a method for proactive detection of inappropriate or harmful UGC (for example, text filtering using the [StringService](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xbox.services.system.stringservice) API). Inappropriate or harmful content must either be blocked or obfuscated from non-local players on Xbox services.

Xbox gamertags are exempt from UGC requirements and should not be subject to text filtration, title-managed report options, or obfuscation due to a restricted UGC privilege.

Guidelines for UGC, such as a terms of use or code of conduct, are available to users either in-product or on the title's website.

Titles must not block entire game modes or experiences for users with restricted UGC privileges.

**Pass Examples**

1. Xbox gamertags are not filtered, obfuscated or subject to in-title reporting.
2. Cross-network usernames, publisher-managed usernames, custom character names or clan/squad/guild names are not obfuscated.
3. The title provides an in-product way for users to report inappropriate or harmful UGC to the developer.
4. The title prevents posting of inappropriate or harmful UGC and notifies the user for the reason the posting failed.
5. The title replaces inappropriate or harmful text with words or characters, such as _Content Blocked_, or _$!\*#&_.
6. User entered text which is shared real time in game, such as a lobby or in-game text overlay, or only between friends is not filtered.
7. Inappropriate or harmful text strings are visible to users on the local console but are not transmitted to other non-friends beyond the local console.
8. Guidelines for UGC, such as a terms of use or code of conduct, are available to users either in-product or on the title's website.
9. The title does not block entire game modes or experiences for users with restricted UGC privileges.

**Fail Examples**

1. Xbox gamertags are filtered or obfuscated.
2. The title does not provide a way for users to report inappropriate or harmful UGC to the developer or allows inappropriate or harmful UGC to be visible to non-friends on other devices.
3. The title allows the user to circumvent inappropriate or harmful UGC filtering by creating UGC in an offline state and subsequently sharing it online.
4. Guidelines for UGC (such as a terms of use or code of conduct), are not available to users either in-product or on the title's website.
5. The title blocks entire game modes or experiences for users with restricted UGC privileges.

## Achievements and Awards

The following requirements apply to titles that offer achievements and awards on the Xbox network.

### XR-055: Achievements and Gamerscore \*

Titles must provide the required number (minimum and maximum) of achievements and their associated gamerscore at launch. Titles are permitted to add achievements or gamerscore at any time after launch, with or without corresponding new content, but they cannot exceed title-based or calendar-based limits.

A single achievement cannot exceed 200 gamerscore and all achievements in the title must be achievable.

Unlocking achievements in the base game or a content update must represent a thorough exploration of or engagement with game content.

Expand table

| Item | Launch | Semi-annual additions | Lifetime limit |
| --- | --- | --- | --- |
| Minimum achievements | 10 | 0 | 10 |
| Maximum achievements | 100 | 100 | 500 |
| Gamerscore | 1000 | 1000 | 5000 |

Note

"Semi-annual" means January-June, July-December. Base game achievements and Gamerscore do not count towards the semi-annual limits.

#### 055-01 Achievements

**Test Steps**

1. Review the amount of gamerscore and total number of achievements supported by the title.
2. Play through the title and attempt to gain as many achievements as possible.
3. Repeat step 2 after resuming from connected-standby.
4. Repeat step 2 while disconnected from Xbox services.

**Expected Result** 
All achievements unlock according to their criteria and the maximum possible Gamerscore for the base game's launch is 1000G spread between 10-100 achievements. All achievements represent a thorough exploration of or engagement with game content.

**Pass Examples**

1. All achievements can be gained.
2. Achievements unlock as per their criteria.
3. All achievements represent a thorough exploration of or engagement with game content.
4. The launch version of the game has 1000 gamerscore spread across 10-100 achievements.

**Fail Examples**

1. An achievement doesn't unlock when the criteria has been met.
2. An achievement unlocks before the criteria has been met.
3. Achievements do not represent a thorough exploration of or engagement with game content.
4. All achievements can be unlocked within a few minutes of starting the game.
5. Achievements can be unlocked without any (or minimal) user input unless required as part of the core gameplay loop.
6. The launch version of the game does not have 1000G.
7. The launch version of the game has more or fewer than 10-100 achievements.
8. Achievements do not unlock after resuming from connected-standby.
9. A single achievement exceeds 200 gamerscore.
10. Achievements do not unlock after reconnection to Xbox services.

#### [XR-057: Unlocking Achievements](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr057?view=gdk-2604) \*

Users should earn all achievements that are defined by the base game without being required to purchase additional in-game content. Titles can't allow users to earn achievements by simply making purchases. For titles that have achievements that unlock based on a real-money purchase, that achievement should be unlockable through in-game activity or in-game currency that was earned through in-game activity.

#### 057-01 No Additional Purchases Required for Base Achievements

**Test Steps**

1. Review the achievement descriptions on the base title.
2. Verify that they do not require additional purchases or content.
3. Gain all achievements.

**Expected Result** 
All achievements can be gained without being required to purchase additional in-title content.

**Pass Examples**

1. All achievements can be gained without being required to purchase additional in-title content.
2. No achievements require additional in-title content.

**Fail Examples**

1. The user is required to purchase additional in-title content to unlock an achievement defined by the base title.

## Multiplayer Sessions

The requirements in this category pertain to game titles that provide multiplayer sessions on Xbox. Xbox offers a consistent and simple way to find multiplayer sessions and to fine-tune the parameters used to find those sessions.

### [XR-064: Joinable Game Sessions and Online Play](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr064?view=gdk-2604) \*

On Xbox consoles, titles that offer joinable game sessions must enable joinability through the Xbox shell interface.

Titles that offer cross platform multiplayer with Xbox consoles from PC devices using Xbox sign in must also enable joins through the Game Bar experience.

#### 064-01 Joining a Game Session from Outside the Game

**Configuration:**

- 2 Xbox Profiles
- 2 Devices
- Device 1 Profile A - Friends with Profile B
- Device 2 Profile B - Friends with Profile A

**Test Steps**

1. Using Profile A, create a joinable game session.
2. Using Profile B not running the title, access the Friends List via Game Bar and verify that the Profile A is listed as joinable.

- It is possible that some games may only support private multiplayer sessions and therefore not appear as joinable for Profile B, in which case please jump to step 5.

3. Profile B join Profile A's game.
4. Confirm that both profiles are placed into the game experience together.
5. Repeat steps 1- 4 but this time, instead of Profile B joining through Game Bar, have Profile A send a game invite via Game Bar to Profile B and make sure Profile B can receive, accept, and join Profile A.

**Expected Result** 
User B must be able to join user A's game and progress into the game experience together. For games that only support private multiplayer sessions and therefore do not appear as joinable for Profile B, it is acceptable for invites to be the only mechanism to join Profile A. For multiplayer game sessions that only support joining the session via matchmaking (e.g. ranked matches), it is acceptable to not support joining via Game Bar. Titles which offer cross platform multiplayer with Xbox consoles must enable joins through the Game Bar experience.

**Pass Examples**

1. Both profiles are placed into the game experience together.
2. User B is able to join user A's game and progress into the game experience together.
3. User A does not appear as joinable in the Friends List via Game Bar because the game only supports private multiplayer sessions, however user A can send user B a game invitation via Game Bar.
4. User A does not appear as joinable and is unable to send game invites via Game Bar while participating in a session that only supports joining via matchmaking (e.g. ranked matches).

**Fail Examples**

1. User B is not able to successfully join User A's game and is not placed in the game experience.
2. User A does not appear as joinable in Game Bar because the game only supports private multiplayer sessions, and user A cannot send user B a game invitation via Game Bar.

#### 064-02 Joining a Game Session from the Same Game

**Configuration**:

- 2 Xbox Profiles
- 2 Devices
- Device 1 Profile A - Friends with Profile B
- Device 2 Profile B - Friends with Profile A

**Test Steps**

1. Using Profile A, launch the title and create a joinable game session within the title.
2. Using Profile B, launch the same title and enter some experience within the title.
3. Using Profile B, join Profile A's game via Game Bar.

- It is possible that some games may only support private multiplayer sessions and therefore do not appear as joinable for Profile B, in which case please jump to step 5.

4. Confirm that both profiles are placed into the game experience together.
5. Repeat steps 1-4 but this time instead of Profile B joining through Game Bar, have Profile A send a game invite via Game Bar to Profile B and make sure Profile B can receive, accept, and join Profile A.

**Expected Result** 
User B must be able to join user A's game and progress into the game experience together. For games that only support private multiplayer sessions and therefore do not appear as joinable for Profile B, it is acceptable for invites to be the only mechanism to join Profile A. For multiplayer game sessions that only support joining the session via matchmaking (e.g. ranked matches), it is acceptable to not support joining via Game Bar. Titles which offer cross platform multiplayer with Xbox consoles must enable joins through the Game Bar experience.

**Pass Examples**

1. Both profiles are placed into the game experience together.
2. User B is able to join user A's game and progress into the game experience together.
3. User A does not appear as joinable in Game Bar because the game only supports private multiplayer sessions, however user A can send user B a game invitation via Game Bar.
4. User A does not appear as joinable and is unable to send game invites via Game Bar while participating in a session that only supports joining via matchmaking (e.g. ranked matches).

**Fail Examples**

1. User B is not able to successfully join User A's game and is not placed in the game experience.
2. User A does not appear as joinable in Game Bar because the game only supports private multiplayer sessions, and user A cannot send user B a game invitation via Game Bar.

#### 064-05 Non-Joinable Game

**Configuration**:

- 3 Xbox Profiles each signed into a different devices
- Device 1 Profile A - Friends with Profiles B & C
- Device 2 Profile B - Friends with Profile A
- Device 3 Profile C - Friends with Profile A

**Test Steps**

1. Using Profile A, launch the title and create a joinable game session.
2. Using Profile A, invite profiles B and C to the game.
3. Using Profile A, enter a game session so there is only one remaining slot after A joins.
4. Using Profile B, accept the invite.
5. Confirm Profiles A & B are playing together.
6. Using Profile C, accept the invite and attempt to join the game session.

**Expected Result** 
Profile C is asked to wait until the next opportunity to jump in or Profile C is messaged the reason for the failure to join the game session.

**Pass Examples**

1. Profile C is asked to wait until the next opportunity to jump in.
2. Profile C is messaged the reason for the failure to join the game session.

**Fail Examples**

1. Profile C is not asked to wait until the next opportunity to jump in and Profile C is not messaged for the failure to join.

### [XR-067: Maintaining Multiplayer Session State](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr067?view=gdk-2604) \*

On Xbox consoles, titles with online multiplayer functionality must maintain session-state information on the Xbox network. Titles do this through the Xbox Multiplayer Session Directory (MPSD) or if a title has their own multiplayer session state functionality, they may choose to instead record player interactions using the Multiplayer Activity Recent Player feature.

On devices other than Xbox consoles, titles which offer cross platform multiplayer with Xbox consoles must maintain session-state information in the Xbox Multiplayer Session Directory (MPSD). If they have their own session state functionality, they may choose to instead record player interactions using the Multiplayer Activity Recent Player feature.

#### 067-01 Maintaining Session State

**Test Steps**

1. Sign into an Xbox profile and launch the title on multiple devices.
2. Complete an Xbox game session with all players.
3. Using the Xbox App for Windows PCs (or Game Bar), view the recent players to verify that all players from the game session are included.
4. Repeat steps 1-3 several more times but this time using new accounts each time.
5. Repeat steps 1-4 but this time have one or more player(s) leave during gameplay and ensure their profile(s) still appear in the Recent Players list during step 2.

**Expected Result** 
Users must be able to review all players from each and every recently played game session.

**Pass Examples**

1. All profiles are included in the device's Recent Players list.

**Fail Examples**

1. Not all the profiles are included in the device's Recent Players list.
2. Users who quit during multiplayer gameplay do not appear in Recent Players.

## BVTs: Pre-certification testing of the build

The following tests (BVTs) are used to check a title's readiness for Xbox Certification testing.

#### BVT-01 Build Stability

**Test Steps**

1. Launch the title, navigate all menus and enter gameplay.
2. Attempt to reproduce stability issues found while performing other BVTs.

**Expected Result** 
The title must not have stability issues or long load times that would block full XR testing of the title.

#### BVT-02 Xbox network sign-in

**Preparation:**

- PC in the appropriate sandbox
- A new Xbox profile
- Xbox App

**Test Steps:**

1. Sign into an Xbox profile, launch the Xbox app and ensure the profile has no previous achievement data for the title.
 - For titles that don't support integration with the Xbox Network, ensure the profile does not have an existing license for the title.
2. Launch the title and verify if the title supports the Xbox Network.
 - If there is no visual indication of successful sign in launch the title without an Xbox profile signed into the Xbox app and check if the user is prompted to sign in.
3. Verify the user can enter gameplay.

**Expected Results:** 
The device sandbox is set correctly for the submission type, and a profile that has not seen the title before can sign in and successfully launch the title.

#### BVT-03 Dependencies

**Preparation:**

- PC with clean installation of windows
- A new Xbox profile
- Xbox App

**Test Steps:**

1. Verify the title is built using the GDK.
2. Remove all package dependencies from the device, except anything listed under vclibs.140.
3. Sign into an Xbox profile and begin installing the title.
4. Verify if the title pulls additional packages during installation.
5. Once installation completes, launch the title and verify the title functions as expected with only those packages installed during installation.

**Expected Result:** 
The title is fully functional using only the packages downloaded.

#### BVT-04 Matchmaking

**Test Steps**

1. Device 1: Select the most basic Xbox game mode and host an Xbox game session.
2. Device 2: Join Device 1's Xbox game session using quick match. (Repeat this step until the minimum number of devices has joined in-order-to start the game session.)
3. Device 1 and 2: Start and complete the Xbox game session.
4. Verify matchmaking works and users can enter gameplay in all other supported game modes.

**Expected Result** 
Device 2 should always be able to locate and join Device 1's game session. Both devices should be able to complete the Xbox game session without being disconnected or encountering stability issues.

#### BVT-05 DLC

**Test Steps**

1. Verify that the downloadable content submitted with the game is downloadable using the Xbox Store or an in-game mechanic.
2. Once downloaded, verify that the content can be easily identified in the game. (A detailed downloadable content description provided with the submission materials helps the certification team to find the downloadable content.)

**Expected Result** 
The downloadable content submitted with the title must be downloadable using Xbox Store or an in-game UI and once downloaded, should be easily identifiable in the game.

#### BVT-06 Languages

**Test Steps**

1. Ensure that the devices 'Windows display language' setting is set to English.
2. Progress into the title.
3. Verify the title:

- Does not crash or enter an unresponsive state
- Does not output any debug on screen.
- Implements localization in all intended areas.

4. Repeat steps 1-4 for all languages supported by the title.

**Expected Result** 
The title contains all supported languages. The title should also not contain stability issues or debug that are language specific.

#### BVT-07 Basic Configuration

**Test Steps**

1. Launch the title and ensure all BVT feature checks do not require changes to the PC settings such as Time/Date to work.
2. Verify that a workaround is not required to reach the main menu of the title.

**Expected Result** 
Basic functionality is expected to be working when a title is entering Certification.

#### BVT-08 Xbox Store Availability

**Configuration:**

- Submission ingested into Certification CERT and CERT.DEBUG sandboxes.

**Test Steps**

1. Sign in and attempt to install the title via the Store.
2. Upon completion of installation, launch title and navigate to the main menu (or equivalent screen).

**Expected Result** 
Titles must be able to be installed and launched while in the Certification CERT and CERT.DEBUG sandboxes.

#### BVT-09 Conditions for Resubmission

**Test Steps**

1. Attempt to reproduce all issues flagged as CFRs in the most recent report for the title.
2. Verify that any of the issues that reproduce have been granted exceptions.

**Expected Result** 
Issues marked as CFR in the previous report have been fixed unless an exception has been granted through the established exception process.

#### BVT-10 Version Check

**Test Steps**

1. Install the title.
2. Navigate to _C:/Program Files/Windowsapps_ and compare the installed folder name with the version listed in the submission form.
3. Compare the name of the installed MSIXVC with the name listed in the submission form.

**Expected Result** 
The name of the installed MSIXVC matches exactly with that called out in the submission documents.

#### BVT-11 Service Config Validation

**Test Steps**

1. Sign into an Xbox profile that has not previously accessed the title.
2. Launch the title.
3. Ensure the user is prompted to accept the Xbox network account permissions.
4. Check the title for a service config:

- For non-MSIXVC submissions, verify the installed package includes an _xboxservices.config_ file, and that the file is greater than 0 KB.
- For MSIXVC submissions, verify the installed package includes a _Microsoft.gameconfig_ file.

**Expected Result** 
The title's service config must be configured for test.

### PC test bench layout

Testing a game on various PC hardware configurations is essential for ensuring compatibility, identifying potential issues, and providing an optimal user experience. By testing different display resolutions, video cards, GPUs, and CPUs, developers can ensure that the game performs well across a wide range of setups, leading to a better gaming experience for all players.

The table below provides an overview of the various PC configurations utilized in a test bench.

Expand table

| Setting | PC 1 | PC 2 | PC 3 | PC 4 | PC 5 |
| --- | --- | --- | --- | --- | --- |
| CPU | AMD high-end CPU | AMD high-end CPU | Intel high-end CPU | Intel mid-end CPU | AMD/Intel high or mid-end CPU |
| GPU | AMD Radeon high-end GPU | Nvidia Geforce RTX high-end GPU | Nvidia GeForce RTX high-end GPU | AMD Radeon mid-end GPU | Integrated iGPU/APU |
| Resolution | 4K UHD (3840x2160) | 2K QHD (2560x1440) | 4K UHD (3840x2160) | HD 1080p | HD 1080p |
| Language | Language 1 | English | Language 2 | Language 3 | Language 4 |
| Game settings | Opposite to default settings | Default game settings | Change the settings every 30 minutes or after each level | Options should be set to the first quartile | Options should be set to the third quartile |

## Changes in this Release

Expand table

| Date | Document version | Change description |
| --- | --- | --- |
| November 1, 2025 | 6.0 | [XR-007 Cross-Network Data Usage](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr007pc?view=gdk-2604) has been added to the PC Xbox Requirements. It is a subset of the console version [XR-007 Cross-Network Play, Data Usage, and Companion App Interactions](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr007?view=gdk-2604) that contains business policies. It does not contain the technical requirements for cross-network gameplay. |

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

- Last updated on 04/03/2026