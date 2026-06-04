# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/user/users-input-devices?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/user/users-input-devices?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Users and input devices

Feedback

Summarize this article for me

Games need to know which input devices are associated to a specified user. This is key to answering the following questions:

- Who took an action in the game?
 
- Who gets the achievement?
 
- Who's making the purchase?
 

This topic covers some key concepts that help you handle these associations and answer these kinds of questions.

## Differences in user model from Xbox One ERA and Microsoft Game Development Kit (GDK)

Whether developing a new Microsoft Game Development Kit (GDK) title or porting a previous title from Xbox One ERA, implementing user and input device management can be confusing when accustomed to the user model from Xbox One ERA.

- Titles that need users, such as when game saves or achievements are needed, must establish a primary user. This primary user is a title-only construct and not provided by the system.
 
- The title only knows about users added via a call to [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604). The title is not informed of any actions taken by the system for users that it hasn't added.
 
- When a device that was previously associated to a title user is associated to a user that the title is unaware of, the title is only informed of a device association event without a new user.
 
- If a device that wasn't associated to a title user becomes associated to another user that also wasn't added with [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604), then the title is not informed of the association event.
 
- The Account Picker acts differently based on how it was brought up (System Guide vs [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604)).
 

Note

The UserManagement sample covers user management and input device pairing behavior across a wide variety of game situations. It also handles XR requirements as they relate to users and input devices. For more information about samples, see [Microsoft Game Development Kit samples](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/development-downloads/gdk-samples-home?view=gdk-2604).

## How to identify a specified user

Games use the _local ID_ to interact with input devices. The local ID is an identifier that stays with the user throughout their lifetime within the game session. The local ID is usable across any processes that a game spawns or if the game calls [XLaunchNewGame](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgame/functions/xlaunchnewgame?view=gdk-2604). Don't use the local ID to identify a user across gaming sessions.

To get the local ID for a user, use the [XUserGetLocalId](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xusergetlocalid?view=gdk-2604) function.

## How to identify a particular input device

Gaming devices, such as gamepads, arcade sticks, and wheels, all have a unique _device ID_ that's represented by an [APP\_LOCAL\_DEVICE\_ID](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/structs/app_local_device_id?view=gdk-2604) structure. This device ID persists across multiple launches of the game or restarts of the system. The device ID is different between two different games running on the same system.

If you're using `XInput` on the console, you can get the device ID by using [XInputGetDeviceId](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/input/xinputongameinput/functions/xinputgetdeviceid?view=gdk-2604).

If you're using [GameInput](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/input/overviews/input-overview?view=gdk-2604), you can get the device ID from the `deviceId` member of the [GameInputDeviceInfo](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/input/gameinput/structs/gameinputdeviceinfo?view=gdk-2604) object that's returned from a call to [IGameInputDevice::GetDeviceInfo](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/input/gameinput/interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo?view=gdk-2604).

## User Model

When a title needs to have users, for example when game saves or achievements are needed, the title is fully responsible for establishing a primary user. This primary user must be maintained even when allowing for multiple users to sign in. The title must also allow the primary user to be changed as needed. A method to do so would be to have a _Switch User_ prompt that brings up an Account Picker with [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604).

The Account Picker lists all the users who have previously signed in on the console, has an **Add new** button for signing in to new accounts, and allows signing in temporary guest users. Any of these user accounts can be selected, regardless of the user's true identity. The system supports users who are choosing to play as others in this way.

Microsoft Game Development Kit (GDK) titles do not have full knowledge of users on the system. Instead, users can only be added to a title via a call to [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604). Users added in this way are the only users the title can interact with. The system will not inform the title about actions made for users that the title hasn't added. As a result, the title should maintain its own list of users.

The Account Picker can be brought up two different ways: from the System Guide and via [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604). This picker behaves differently in these two circumstances:

Expand table

| Case | [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604) Account Picker | Guide Account Picker |
| --- | --- | --- |
| Selecting user that hasn't signed in to the title | The user becomes signed in to both the system and the title. | The user is only signed in to the system. The title is not informed of the sign-in. |
| Selecting user that has already signed in to the title | The user is already signed-in to the title, so no further user state changes happen. | The user is already signed-in to the title, so no further user state changes happen. |

Note

The set of users signed-in to a title is always a sub-set of the users signed in to the system. A title cannot have users signed-in that the system doesn't have signed-in. However, the system can have users that the title does not know about.

User Events can be handled via an [XUserChangeEventCallback](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuserchangeeventcallback?view=gdk-2604) registered with [XUserRegisterForChangeEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuserregisterforchangeevent?view=gdk-2604). Events will only be called for users that have been signed in with [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604). When a user signs out from the system, the title must react accordingly and either remove the user from the title or allow the player to try to sign in the user again.

## Input Device Associations

The Microsoft Game Development Kit (GDK) allows for users to have any number of input devices associated to them. This can be challenging when porting older titles that may assume a 1:1 mapping between users and devices.

Device associations are usually made via the Account Picker. The input device that selects the user from the UI becomes associated with that user. Associations can change from other cases too, such as when a user is signed out or when [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604) is used without UI via the [AddDefaultUserSilently](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/enums/xuseraddoptions?view=gdk-2604) and [AddDefaultUserAllowingUI](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/enums/xuseraddoptions?view=gdk-2604) options.

The Account Picker behaves different for associations as well based on how the picker was brought up:

Expand table

| Case | [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604) Account Picker | Guide Account Picker |
| --- | --- | --- |
| Selecting user that hasn't signed in to the title | After the user is signed in to the title, the device that completed the prompt becomes associated to the user. | The user is signed in to the system (if not already signed in) and the device that completed the prompt is associated to that user. Since the title doesn't know about this user, it will be informed that the device is unassociated. |
| Selecting user that has already signed in to the title | The device that completed the prompt becomes associated to the system and title user. | The device that completed the prompt becomes associated to the system and title user. |

If the user was automatically signed in the title without an Account Picker by a call to [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604) utilizing one of the [AddDefaultUserSilently](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/enums/xuseraddoptions?view=gdk-2604) or [AddDefaultUserAllowingUI](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/enums/xuseraddoptions?view=gdk-2604) options, the input device pairings that the system had are communicated to the title.

To be notified of user device association changes, you can register an [XUserDeviceAssociationChangedCallback](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuserdeviceassociationchangedcallback?view=gdk-2604) callback with the [XUserRegisterForDeviceAssociationChanged](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuserregisterfordeviceassociationchanged?view=gdk-2604) method. You can also call [XUserFindForDevice](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuserfindfordevice?view=gdk-2604) to look up an association for a specific device.

Note

Since the title can only know about users that have been added with [XUserAddAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync?view=gdk-2604), user device association callbacks and methods can only return users that the title has previously added.

## Matching the user to a default audio endpoint

Headsets or microphones are frequently provided with games. Following are some important questions to ask.

- Does the user have a headset? If so, which headset are they likely using? What's the default communication-rendering audio endpoint?
 
- Does the user have a microphone associated to them? What's the default communication-capturing endpoint?
 

To answer these questions for a specific user, games can call [XUserGetDefaultAudioEndpointUtf16](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xusergetdefaultaudioendpointutf16?view=gdk-2604). Just as user-to-device associations can change, the default audio endpoints associated to a specific user can also change. To detect these association changes, games should call [XUserRegisterForDefaultAudioEndpointUtf16Changed](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuserregisterfordefaultaudioendpointutf16changed?view=gdk-2604) and pay attention to the resulting callback.

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