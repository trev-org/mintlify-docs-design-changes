---
author: Jeffrey-Shi
title: "XUser Cross-Platform Support"
description: "Learn how XUser provides unified user authentication and management across Xbox consoles, Windows PC and handheld, and non-Microsoft platforms."
kindex:
- XUser cross-platform
- Xbox services, XUser cross-platform support
- Xbox services, Cross-platform authentication
- Xbox services, Remote Connect
ms.author: jeffshi
ms.topic: article
edited: 09/30/2025
ms.date: '09/30/2025'
permissioned-type: public
---

# XUser Cross-Platform Support

## Overview

XUser is the Gaming Runtime API for managing Xbox user accounts and authentication across platforms. It provides a unified interface for games to handle user sign-in, identity, and related user flows on Xbox consoles, Windows PC and handheld, and non-Microsoft platforms such as Steam Deck.

As part of the GDK's cross-platform initiative, XUser provides a consistent API surface across all platforms while accommodating the different capabilities and constraints of each environment.

### Integration Requirements

To use XUser in your game, include `XUser.h` in your source files and link against `XGameRuntime.lib`. The key difference between platforms is how runtime dependencies are handled:

#### Xbox consoles and Microsoft Store / Game Pass on Windows

The gaming runtime is built into the OS and handled by the store. Your game automatically uses the system’s built-in services and UI.

#### Other Stores on Windows

* Games use the OS’s built-in services and UI.
* The installer should run **GamingRepair.exe** to ensure that the Gaming Runtime Service is installed.

**Integrating the Gaming Repair Tool**

Add the Gaming Repair Tool to your game’s installer as a custom installation step:

1. **Include the tool in your game package** – It’s included with the GDK at `[GDK]\bin\GamingRepair.exe`.
2. **Add a Custom Action** – Run the tool before your game installs (for example: start /wait "Installing Gaming Services" GamingRepair.exe scenarioExternal). This verifies, downloads, installs, or repairs any missing Gaming Runtime components.
3. **Handle Errors** – Check the tool’s exit code. If it fails, notify the user and provide manual installation instructions.

> [!IMPORTANT]
> Steam games must include `XGameRuntime.dll` and its dependencies to support platforms where the system service isn’t available (for example, Steam Deck).
> On Steam Deck or other non-Microsoft platforms, the Gaming Repair Tool cannot be used. Instead, bundle `XGameRuntime.dll` and its dependencies in your game package and place them alongside your executable so they can load at runtime.

## Platform Differences and Unified API

On Xbox and Windows, the operating system handles Xbox Live sign-in and user management natively, providing system UI and secure storage for user credentials. XUser leverages these built-in system services on these platforms. On other gaming platforms such as Steam Deck or third-party environments, this native support does not exist.

Starting with the GDK 2510 release, XUser has been enhanced to work seamlessly on both types of platforms through a consistent API, with new APIs and event-driven patterns that enable games to provide the necessary UI and data handling where system support is unavailable:

- **On platforms with native support (Xbox, Windows)** - XUser uses the operating system's built-in services for authentication, UI, and credential storage. Games call XUser APIs, and the system handles the details automatically.

- **On platforms without native support (Steam Deck, etc.)** - XUser exposes the same core APIs, but games must implement event handlers to provide the necessary UI (such as displaying QR codes for sign-in) and data storage. This gives games full control over the authentication experience.

Regardless of platform, games obtain an `XUserHandle` that represents the player and can be used for services that support Xbox authentication (Xbox services, PlayFab services, etc.)

## New Cross-Platform Capabilities

The new APIs introduced for XUser focus on enabling platform-agnostic sign-in flows and data handling. The key capabilities include:

### Remote Connect Authentication

Allows users to sign in with their Xbox account on a device (such as Steam Deck) using a secondary device. Users can scan a QR code or enter a one-time code on a website to complete authentication. This is achieved through new XUser event handlers for displaying and closing code-based sign-in prompts.

### Single-Session Enforcement (SPoP)

Ensures users aren't running the same game in multiple locations simultaneously. If a conflict is detected, users are prompted to choose whether to "play here" or "switch account." New APIs enable games to present this choice and respond accordingly.

> [!NOTE]
> On Xbox consoles and Windows, the operating system continues to handle most authentication tasks automatically. The game may never see these events on those platforms. However, on non-Xbox platforms, the game can take full control through XUser's callback mechanisms.

## Remote Connect for Cross-Device Sign-In

Remote Connect is a feature that allows players to sign in to their Xbox account on a device by authenticating through another device (such as a phone or PC). This is commonly done via a short code or QR code displayed by the game.

### How It Works

On Xbox consoles, this "code flow" is handled automatically by the system UI. However, on platforms like Steam Deck or other third-party environments, there is no system-managed Xbox sign-in UI. The Remote Connect API in XUser enables games to facilitate this flow directly.

#### The Flow

1. **Event Handler Registration** - The game registers a Remote Connect event handler before initiating sign-in using `XUserPlatformRemoteConnectSetEventHandlers(...)`. The title provides callbacks to handle two key events:

   - **Show Event** - Triggered when XUser needs the game to display the one-time code or QR code. The handler presents a dialog or overlay with the code and instructions (for example: "Scan this QR code or visit xbox.com/play and enter code ABCD to sign in").
   
   - **Close Event** - Triggered when the remote sign-in process completes or is canceled, signaling the game to hide or close the code dialog.

2. **User Sign-In Initiation** - When calling `XUserAddAsync` to add a new user, if no local user is already signed in, the XUser system may use the Remote Connect flow (especially on headless or third-party platforms).

3. **Code Display** - XUser invokes the "show" callback, providing the authentication code or URL. The game's UI handler (such as `OnRemoteConnectShow`) displays the QR code or code string to the user.

4. **User Authentication** - The player uses their phone or web browser to log in with the provided code, linking their Xbox account to the current session.

5. **Completion** - Once authentication completes on the backend, XUser invokes the "close" callback, signaling that the code can be removed from the screen. At this point, XUser has obtained the user's Xbox Live token and creates the `XUserHandle`.

6. **Success** - The `XUserAddAsync` task returns successfully, and the user is signed in without entering credentials directly on the device.

### Implementation

To use Remote Connect, implement two callback functions and register them:

```cpp
XUserPlatformRemoteConnectEventHandlers remoteConnect = {};
remoteConnect.context = nullptr;
remoteConnect.show = &OnRemoteConnectShow;   // Display QR/code dialog
remoteConnect.close = &OnRemoteConnectClose; // Dismiss dialog

HRESULT hr = XUserPlatformRemoteConnectSetEventHandlers(nullptr, &remoteConnect);
```

After registering the handlers, call `XUserAddAsync` as usual to add a new user. In the `OnRemoteConnectShow` handler, retrieve the provided information (accessible via XUser APIs—typically a URL and code) and render it for the user in a pop-up or overlay. When `OnRemoteConnectClose` is called, the sign-in process has finished, and the game should hide the prompt.

> [!IMPORTANT]
> Call `XUserPlatformRemoteConnectSetEventHandlers` before calling `XUserAddAsync` (and generally before `XUserInitialize`) to ensure these events are handled properly.

### User Experience Considerations

To provide a good user experience:

- **Clear Instructions** - Clearly explain what the user needs to do when displaying the code.
- **Error Handling** - If the user cancels on the remote side or an error occurs, XUser will fail the sign-in attempt. Handle this in the normal completion callback of `XUserAddAsync`.
- **Timely Dismissal** - Hide the code immediately when the close event occurs to avoid user confusion.
- **Visual Design** - Ensure the QR code and instructions are large enough and clearly visible on the target device.

## Single-Session Enforcement (SPoP)

Single-Session Enforcement, or SPoP (Single Point of Presence), is a policy that ensures a single Xbox Live user profile does not run the same title concurrently on multiple devices. For example, if you launch a game on your PC while it's already running under your account on Xbox, one session should be suspended or signed out to prevent save game conflicts and other issues.

On Xbox consoles, this scenario triggers a system dialog telling the user that the game is already running elsewhere and asking if they want to continue (which would sign out from the other device). On non-Microsoft platforms, there's no built-in mechanism to enforce this. The XUser SPoP prompt API lets games detect this situation and present a "Play here or Switch account" choice to the player.

### How It Works

The SPoP API uses an event handler pattern similar to Remote Connect. When a sign-in conflict is detected, XUser invokes the game's handler instead of failing outright, allowing the game to present the user with options.

#### The Flow

1. **Event Handler Registration** - The game registers a SPoP prompt event handler before initiating sign-in using `XUserPlatformSpopPromptSetEventHandlers(...)`.

2. **Conflict Detection** - When calling `XUserAddAsync` to add a user, if XUser detects that the same user is already active elsewhere in the same title, it invokes the SPoP handler.

3. **Display Prompt** - The game's handler receives the user's modern gamertag and an operation handle. The handler should display a UI prompt such as: "[Gamertag] is already playing on another device. Do you want to play here instead (which will sign out elsewhere), or switch to a different account?" with options like "Play here" and "Switch account".

4. **User Choice** - The game waits for the user to make a selection. The operation remains pending until the game calls the completion API.

5. **Complete Operation** - Based on the user's choice, the game calls `XUserPlatformSpopPromptComplete` with the appropriate result:
   
   - **Play Here** - `XUserPlatformSpopOperationResult::SignInHere` - Signs in on this device and terminates the remote session.
   - **Switch Account** - `XUserPlatformSpopOperationResult::SwitchAccount` - Cancels sign-in on this device, allowing the user to choose a different account.
   - **Cancel** - `XUserPlatformSpopOperationResult::Canceled` - Aborts the sign-in attempt.

6. **Resolution** - XUser proceeds based on the result. If "Play here" was chosen, the remote session is terminated (the other device receives a sign-out event) and the user becomes active locally. If "Switch account" was chosen, `XUserAddAsync` fails and the game can prompt for a different account.

### Implementation

To use SPoP, implement a callback function and register it:

```cpp
HRESULT hr = XUserPlatformSpopPromptSetEventHandlers(nullptr, &OnSpopPrompt, nullptr);
```

In the `OnSpopPrompt` handler, the game receives the user identifier and modern gamertag. The handler should pause the game flow (since sign-in is pending) and present a UI prompt with the options. The handler stores the operation handle and does not complete it immediately.

When the user makes a choice:

```cpp
// If user chose "Play here"
XUserPlatformSpopPromptComplete(operation, XUserPlatformSpopOperationResult::SignInHere);

// If user chose "Switch account"
XUserPlatformSpopPromptComplete(operation, XUserPlatformSpopOperationResult::SwitchAccount);

// If dialog was canceled
XUserPlatformSpopPromptComplete(operation, XUserPlatformSpopOperationResult::Canceled);
```

> [!IMPORTANT]
> - Call `XUserPlatformSpopPromptSetEventHandlers` before calling `XUserAddAsync` to ensure conflicts are handled properly.
> - You must call `XUserPlatformSpopPromptComplete` exactly once for each SPoP event received, otherwise the sign-in will hang indefinitely.
> - If no handler is set and a conflict occurs, `XUserAddAsync` will fail with an error code, giving the user no opportunity to resolve the conflict gracefully.

### User Experience Considerations

To provide a good user experience:

- **Clear Messaging** - Display the user's gamertag and clearly explain that continuing will sign them out on the other device.
- **Visible Options** - Make both "Play here" and "Switch account" options clearly visible and understandable.
- **Prevent Save Conflicts** - Emphasize that this prevents save game conflicts and concurrent gameplay issues.
- **Platform-Specific Behavior** - On Xbox and Windows, the OS handles this automatically and the SPoP handler will never be invoked. On other platforms, your game is responsible for presenting this choice.

Without this API, sign-in conflicts would result in cryptic errors or automatic sign-outs without warning, leading to a poor user experience. The SPoP prompt makes the behavior explicit and user-driven, aligning with Xbox's single-session policy while giving players control.

## See Also

[User identity and XUser](player-identity-xuser.md)
