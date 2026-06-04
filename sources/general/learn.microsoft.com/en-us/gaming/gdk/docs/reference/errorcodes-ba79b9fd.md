# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/errorcodes?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/errorcodes?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Error codes

Feedback

Summarize this article for me

Constant definitions for the Microsoft Game Development Kit (GDK) error code values, declared in XGameErr.h.

Expand table

| Code | Value | Description |
| --- | --- | --- |
| E\_GAME\_MISSING\_GAME\_CONFIG | 0x87e5001F | This app is missing a required MicrosoftGame.Config file. |
| E\_GAMERUNTIME\_NOT\_INITIALIZED | 0x89240100 | The game runtime not initialized. |
| E\_GAMERUNTIME\_DLL\_NOT\_FOUND | 0x89240101 | The game runtime DLL wasn't found. |
| E\_GAMERUNTIME\_VERSION\_MISMATCH | 0x89240102 | The game runtime DLL doesn't support this version of the Microsoft Game Development Kit (GDK). |
| E\_GAMERUNTIME\_WINDOW\_NOT\_FOREGROUND | 0x89240103 | The operation requires an application window to be in the foreground. |
| E\_GAMERUNTIME\_SUSPENDED | 0x89240104 | The game runtime is in a suspended state. |
| E\_GAMERUNTIME\_UNINITIALIZE\_ACTIVEOBJECTS | 0x89240105 | The game runtime has active objects at XGameRuntimeUninitialize. |
| E\_GAMERUNTIME\_MULTIPLAYER\_NOT\_CONFIGURED | 0x89240106 | There's no multiplayer activity set on the service for this user on this title. |
| E\_GAMERUNTIME\_OPTIONS\_MISMATCH | 0x89240109 | Indicates other code in different module already initialized the runtime with a given set of options. The runtime must be uninitialized before it can be initialized with a different set of options. |
| E\_GAMERUNTIME\_OPTIONS\_NOT\_SUPPORTED | 0x8924010A | The options passed aren't compatible with the game's package. When a game is packaged, the game config information passed into the options structure must match the game config of the package. |
| E\_GAMERUNTIME\_GAMECONFIG\_BAD\_FORMAT | 0x8924010B | Indicates the game config passed to Initialize can't be parsed. |
| E\_GAMERUNTIME\_INVALID\_HANDLE | 0x8924010C | If the game runtime is uninitialized and later reinitialized, handles aren't valid for use across initializations. |
| E\_GAMEUSER\_MAX\_USERS\_ADDED | 0x89245100 | Can't add this user because the max number of users reached. |
| E\_GAMEUSER\_SIGNED\_OUT | 0x89245101 | Can't perform the operation because the user is signed out. |
| E\_GAMEUSER\_RESOLVE\_USER\_ISSUE\_REQUIRED | 0x89245102 | Needs UI to resolve an issue with this user. In general, if you're getting E\_GAMEUSER\_RESOLVE\_USER\_ISSUE\_REQUIRED (can happen from multiple APIs), you should call [XUserResolveIssueWithUiAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuserresolveissuewithuiasync?view=gdk-2604). |
| E\_GAMEUSER\_DEFERRAL\_NOT\_AVAILABLE | 0x89245103 | Not an appropriate time to request deferral. |
| E\_GAMEUSER\_USER\_NOT\_FOUND | 0x89245104 | User matching the ID wasn't found. |
| E\_GAMEUSER\_NO\_TOKEN\_REQUIRED | 0x89245105 | No token is required for this call. |
| E\_GAMEUSER\_NO\_DEFAULT\_USER | 0x89245106 | There's no current default user. If you're getting this error, it likely means that you called XUserAddAsync(AddDefaultUsersSilently, ...). To fix the issue, you should call XUserAddAsync again, this time without AddDefaultUserSilently to get a user. |
| E\_GAMEUSER\_FAILED\_TO\_RESOLVE | 0x89245107 | Failed to resolve the given privilege. |
| E\_GAMEUSER\_NO\_TITLE\_ID | 0x89245108 | An Xbox live titleID must be configured. |
| E\_GAMEUSER\_UNKNOWN\_GAME\_IDENTITY | 0x89245109 | The game identity isn't recognized. This error happens when the <MSAAppId> and <TitleId> don't match the ones associated to the game. |
| E\_GAMEUSER\_NO\_PACKAGE\_IDENTITY | 0x89245110 | A package identity must be configured. |
| E\_GAMEUSER\_FAILED\_TO\_GET\_TOKEN | 0x89245111 | The token request failed. |
| E\_GAMEUSER\_INVALID\_APP\_CONFIGURATION | 0x89245112 | The MSAAppId in the game config is invalid or isn't configured for the authentication stack. |
| E\_GAMEUSER\_MALFORMED\_MSAAPPID | 0x89245113 | The MSAAppId in the game config doesn't match an expected format, either a 16 character string or GUID. |
| E\_GAMEUSER\_INCONSISTENT\_MSAAPPID\_AND\_TITLEID | 0x89245114 | The MSAAppId and TitleId in the game config don't match the ones associated to the game. |
| E\_GAMEPACKAGE\_APP\_NOT\_PACKAGED | 0x89245200 | The game isn't packaged in a container. |
| E\_GAMEPACKAGE\_NO\_INSTALLED\_LANGUAGES | 0x89245201 | The game uses Intelligent Delivery to selectively install languages, but none of the languages are installed. |
| E\_GAMEPACKAGE\_NO\_STORE\_ID | 0x89245202 | This API requires that the StoreId attribute be set in the application's game config. |
| E\_GAMEPACKAGE\_INVALID\_SELECTOR | 0x89245203 | A chunk selector was provided which doesn't resolve to a chunk in the package. |
| E\_GAMEPACKAGE\_DOWNLOAD\_REQUIRED | 0x89245204 | One or more required chunks must be downloaded to mount the package on this device. |
| E\_GAMEPACKAGE\_NO\_TAG\_CHANGE | 0x89245205 | Change installed chunks in this package using Features, not tags. |
| E\_GAMEPACKAGE\_DLC\_NOT\_SUPPORTED | 0x89245206 | Game does not support the DLC package. Ensure the correct DLC compatibility is set in the game config. |
| E\_GAMEPACKAGE\_DUPLICATE\_ID\_VALUES | 0x89245207 | The package contains more than one executable mapping to the same 'ID' attribute. Check the game config for duplicate 'ID' attributes in the 'Executable' elements. |
| E\_GAMEPACKAGE\_NO\_PACKAGE\_IDENTIFIER | 0x89245208 | Couldn't resolve an identifier for the package. The package might not be installed. |
| E\_GAMEPACKAGE\_CONFIG\_NO\_ROOT\_NODE | 0x89245209 | couldn't find a root <Game> node in the MicrosoftGame.config file. Check the MicrosoftGame.config file to ensure it's properly formatted. |
| E\_GAMEPACKAGE\_CONFIG\_ZERO\_VERSION | 0x8924520A | The 'Version' attribute in the 'Identity' node in the MicrosoftGame.config can't be 0.0.0.0. Increment or remove this attribute. If no version is specified, the default value is 1.0.0.0. |
| E\_GAMEPACKAGE\_CONFIG\_NO\_MSAAPPID\_NOTITLEID | 0x8924520B | The 'MSAAppId' or 'TitleId' element in the MicrosoftGame.config is missing. If one of these values is specified, both must be specified when using configVersion >= 1. Use the MicrosoftGame.config Editor "Associate with Store" feature to automatically retrieve ID values from Partner Center. |
| E\_GAMEPACKAGE\_CONFIG\_DEPRECATED\_PC\_ENTRIES | 0x8924520C | The DesktopRegistration entries "modFolder", "enableWritesToPackageRoot", "disableRegistryWriteVirtualization" and "disableFilesystemWriteVirtualization" are deprecated in configVersion >= 1. |
| E\_GAMEPACKAGE\_CONFIG\_SUM\_REQUIRES\_MSAAPPID | 0x8924520D | The 'MSAAppId' and 'TitleId' elements in the MicrosoftGame.config are required when using the Simplified User Model (AdvancedUserModel element) and configVersion >= 1. Use the MicrosoftGame.config Editor "Associate with Store" feature to automatically retrieve ID values from Partner Center. |
| E\_GAMEPACKAGE\_CONFIG\_NO\_CODE\_CLOUD\_SAVES\_REQUIRES\_MSAAPPID | 0x8924520E | The 'MSAAppId' and 'TitleId' elements in the MicrosoftGame.config are required when using No Code Cloud Saves (NoCodePCRoot element) and configVersion >= 1. Use the MicrosoftGame.config Editor "Associate with Store" feature to automatically retrieve ID values from Partner Center. |
| E\_GAMEPACKAGE\_CONFIG\_MSAAPPID\_OR\_TITLEID\_IS\_DEFAULT | 0x8924520F | The 'MSAAppId' or 'TitleId' element in the MicrosoftGame.config is a default value. If NoCodePCRoot or AdvancedUserModel is specified, then the TitleId and MSAAppId must both be valid IDs from Partner Center when using configVersion >= 1. Use the MicrosoftGame.config Editor "Associate with Store" feature to automatically retrieve ID values from Partner Center. |
| E\_GAMESTORE\_LICENSE\_ACTION\_NOT\_APPLICABLE\_TO\_PRODUCT | 0x89245300 | The game requested a license for a product that can't be licensed. |
| E\_GAMESTORE\_NETWORK\_ERROR | 0x89245301 | The game failed to communicate with the store network. |
| E\_GAMESTORE\_SERVER\_ERROR | 0x89245302 | The game received a bad response from the store server. |
| E\_GAMESTORE\_INSUFFICIENT\_QUANTITY | 0x89245303 | The user doesn't have enough of this consumable to use the requested amount. |
| E\_GAMESTORE\_ALREADY\_PURCHASED | 0x89245304 | The user already owns this product. |
| E\_GAMESTREAMING\_NOT\_INITIALIZED | 0x89245400 | The XGameStreaming runtime not initialized. Call XGameStreamingInitialize before calling other APIs. |
| E\_GAMESTREAMING\_CLIENT\_NOT\_CONNECTED | 0x89245401 | The specified client isn't connected. |
| E\_GAMESTREAMING\_NO\_DATA | 0x89245402 | The requested data isn't available. The data might be available later. |
| E\_GAMESTREAMING\_NO\_DATACENTER | 0x89245403 | The current machine isn't running in a datacenter. |
| E\_GAMESTREAMING\_NOT\_STREAMING\_CONTROLLER | 0x89245404 | The current reading didn't come from a streaming controller. |

## See also

[API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/gc-reference-toc?view=gdk-2604)

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

- Last updated on 01/14/2026