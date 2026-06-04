# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/xappcapture_members?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/xappcapture_members?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# XAppCapture

Feedback

Summarize this article for me

Xbox and Desktop include native Broadcasting experiences each with their own rules on which applications can be broadcasted by a user. These APIs will allow the developer to bring up the broadcasting UI as well as detect when the user is broadcasting. The app developer can provide metadata events and states to be saved or broadcasted with the captured video and audio file/stream.

## Functions

Expand table

| Function | Description |
| --- | --- |
| [XAppBroadcastGetStatus](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappbroadcastgetstatus?view=gdk-2604) | Retrieves the current status for broadcasting for the device and current app. |
| [XAppBroadcastIsAppBroadcasting](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappbroadcastisappbroadcasting?view=gdk-2604) | Determines whether the app is currently broadcasting. |
| [XAppBroadcastMonitorCallback](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappbroadcastmonitorcallback?view=gdk-2604) | Sets the callback function for [XAppBroadcastRegisterIsAppBroadcastingChanged](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappbroadcastregisterisappbroadcastingchanged?view=gdk-2604). The function set here will be called each time the broadcast status changes. |
| [XAppBroadcastRegisterIsAppBroadcastingChanged](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappbroadcastregisterisappbroadcastingchanged?view=gdk-2604) | Register an app broadcast status change event handler. |
| [XAppBroadcastShowUI](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappbroadcastshowui?view=gdk-2604) | Show broadcast UI to app user so that they may start broadcasting activity. |
| [XAppBroadcastUnregisterIsAppBroadcastingChanged](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappbroadcastunregisterisappbroadcastingchanged?view=gdk-2604) | Remove an app broadcast status change event handler. |
| [XAppCaptureCancelUserRecord](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturecanceluserrecord?view=gdk-2604) | Stops and deletes an ongoing GameDVR user recording, started via [XAppCaptureStartUserRecord](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturestartuserrecord?view=gdk-2604) and specified by the inputted ID. |
| [XAppCaptureCloseLocalStream](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturecloselocalstream?view=gdk-2604) | Closes and deletes the specified recording stream. |
| [XAppCaptureCloseScreenshotStream](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcaptureclosescreenshotstream?view=gdk-2604) | Closes a screenshot stream. |
| [XAppCaptureDisableRecord](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturedisablerecord?view=gdk-2604) | Disables video recording for the player. |
| [XAppCaptureEnableRecord](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcaptureenablerecord?view=gdk-2604) | Enables recording / screenshot for the current user. |
| [XAppCaptureGetVideoCaptureSettings](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturegetvideocapturesettings?view=gdk-2604) | Queries the device's GameDVR settings that include encoding type, color format, resolution, maximum possible recording length, and whether the current user allows captures by games. |
| [XAppCaptureMetadataAddDoubleEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturemetadataadddoubleevent?view=gdk-2604) | Add a metadata event with a double value to your app capture. |
| [XAppCaptureMetadataAddInt32Event](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturemetadataaddint32event?view=gdk-2604) | Add a metadata event with an Int32 value to your app capture. |
| [XAppCaptureMetadataAddStringEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturemetadataaddstringevent?view=gdk-2604) | Add a metadata event with a string value to your app capture. |
| [XAppCaptureMetadataPurgedCallback](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturemetadatapurgedcallback?view=gdk-2604) | Set the callback function to be called when a metadata purge occurs. |
| [XAppCaptureMetadataRemainingStorageBytesAvailable](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturemetadataremainingstoragebytesavailable?view=gdk-2604) | Returns the remaining storage available for app capture metadata. Measured in bytes. |
| [XAppCaptureMetadataStartDoubleState](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturemetadatastartdoublestate?view=gdk-2604) | Add a metadata state with a double value to your app capture. |
| [XAppCaptureMetadataStartInt32State](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturemetadatastartint32state?view=gdk-2604) | Add a metadata state with an Int32 value to your app capture. |
| [XAppCaptureMetadataStartStringState](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturemetadatastartstringstate?view=gdk-2604) | Add a metadata state with a string value to your app capture. |
| [XAppCaptureMetadataStopAllStates](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturemetadatastopallstates?view=gdk-2604) | Stops all state events currently active. |
| [XAppCaptureMetadataStopState](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturemetadatastopstate?view=gdk-2604) | Add a state stop for a particular named state to the app capture metadata. |
| [XAppCaptureOpenScreenshotStream](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcaptureopenscreenshotstream?view=gdk-2604) | Opens a screenshot stream. |
| [XAppCaptureReadLocalStream](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturereadlocalstream?view=gdk-2604) | Reads the contents of the .mp4 file generated by an earlier call to [XAppCaptureRecordTimespan](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturerecordtimespan?view=gdk-2604). |
| [XAppCaptureReadScreenshotStream](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturereadscreenshotstream?view=gdk-2604) | Reads a screenshot stream. |
| [XAppCaptureRecordDiagnosticClip](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturerecorddiagnosticclip?view=gdk-2604) | Records a diagnostic clip from your app. |
| [XAppCaptureRecordTimespan](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturerecordtimespan?view=gdk-2604) | Makes a GameDVR recording. |
| [XAppCaptureRegisterMetadataPurged](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcaptureregistermetadatapurged?view=gdk-2604) | Register an event handler for meta data purge events. |
| [XAppCaptureStartUserRecord](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturestartuserrecord?view=gdk-2604) | Start a recording as if the user had triggered it. |
| [XAppCaptureStopUserRecord](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturestopuserrecord?view=gdk-2604) | Stop and saves an ongoing user recording, started via [XAppCaptureStartUserRecord](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturestartuserrecord?view=gdk-2604) and specified by the inputted ID. |
| [XAppCaptureTakeDiagnosticScreenshot](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturetakediagnosticscreenshot?view=gdk-2604) | Takes a diagnostic screenshot from your app. |
| [XAppCaptureTakeScreenshot](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturetakescreenshot?view=gdk-2604) | Takes a screenshot. |
| [XAppCaptureUnRegisterMetadataPurged](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcaptureunregistermetadatapurged?view=gdk-2604) | Remove an event handler for meta data purge events. |

## Structures

Expand table

| Structure | Description |
| --- | --- |
| [XAppBroadcastStatus](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/structs/xappbroadcaststatus?view=gdk-2604) | Describes the state of broadcasting abilities for an app/game. |
| [XAppCaptureDiagnosticScreenshotResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/structs/xappcapturediagnosticscreenshotresult?view=gdk-2604) | App capture screenshot and descriptive information. |
| [XAppCaptureLocalResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/structs/xappcapturelocalresult?view=gdk-2604) | Contains the result from calling XAppCaptureRecordTimespan. |
| [XAppCaptureRecordClipResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/structs/xappcapturerecordclipresult?view=gdk-2604) | Captured video clip and descriptive information. |
| [XAppCaptureScreenshotFile](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/structs/xappcapturescreenshotfile?view=gdk-2604) | Captured screenshot and descriptive information. |
| [XAppCaptureScreenshotStream](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/structs/xappcapturescreenshotstream?view=gdk-2604) | Represents a screenshot stream. |
| [XAppCaptureTakeScreenshotResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/structs/xappcapturetakescreenshotresult?view=gdk-2604) | Represents the results of taking a screenshot. |
| [XAppCaptureUserRecordingResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/structs/xappcaptureuserrecordingresult?view=gdk-2604) | Contains the result from calling [XAppCaptureStopUserRecord](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/functions/xappcapturestopuserrecord?view=gdk-2604). |
| [XAppCaptureVideoCaptureSettings](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/structs/xappcapturevideocapturesettings?view=gdk-2604) | GameDVR video capture settings. |

## Enumerations

Expand table

| Enumeration | Description |
| --- | --- |
| [XAppCaptureMetadataPriority](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/enums/xappcapturemetadatapriority?view=gdk-2604) | Levels of priority for app capture meta data. Used to determine what data is most important when storage constraints are implemented and some meta data must be deleted. |
| [XAppCaptureScreenshotFormatFlag](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/enums/xappcapturescreenshotformatflag?view=gdk-2604) | Determines the definition quality of the screenshot capture. |
| [XAppCaptureVideoColorFormat](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/enums/xappcapturevideocolorformat?view=gdk-2604) | The color format used in GameDVR recordings. |
| [XAppCaptureVideoEncoding](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/enums/xappcapturevideoencoding?view=gdk-2604) | Determines the video encoding type video capture. |

## See also

[XAppCapture Error Codes](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/xappcapture_errors?view=gdk-2604) 
[System API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/gc-reference-system-toc?view=gdk-2604)

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

- Last updated on 06/12/2025