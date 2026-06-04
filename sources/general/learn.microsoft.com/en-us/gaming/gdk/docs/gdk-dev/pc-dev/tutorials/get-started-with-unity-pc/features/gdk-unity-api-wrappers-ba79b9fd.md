# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/get-started-with-unity-pc/features/gdk-unity-api-wrappers?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/get-started-with-unity-pc/features/gdk-unity-api-wrappers?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Using C# wrappers for GDK APIs in your Unity project

Feedback

Summarize this article for me

Use this topic to understand how to use API wrappers to properly call Microsoft Game Development Kit (GDK) and Xbox services APIs from managed code.

## Accessing Microsoft Game Development Kit (GDK) APIs

After you've imported the Microsoft GDK API package from Unity, its functionality is available under the XGamingRuntime namespace. All Gaming Runtime APIs are available via static methods on the SDK class. All Xbox services APIs are available via static methods on the SDK.XBL class. The following example shows this availability.

```
using System; 

  

// The namespace under which the "GDK" functionality is available. 

using XGamingRuntime; 

  

namespace TestGame 

{ 

    static class Program 

    { 

        static void Main() 

        { 

            // All APIs are accessed through static methods on the SDK class. 

            Int32 hr = SDK.XGameRuntimeInitialize(); 

 

            // All Xbox services APIs are accessed through static methods on the SDK.XBL class. 

            Int32 hr = SDK.XBL.XblInitialize(SCID); 

            ... 

        } 

    } 

} 
```

## API coverage and conventions

Note

Not every API is available via the package. For a complete list of these APIs, see the Microsoft Game Development Kit (GDK) and Xbox services API lists later in this topic.

Conventions:

- API names match their GDK counterparts where possible.
- No exceptions. Errors are communicated via HRESULTs.
- Flat API surface with no object oriented encapsulation.
- out parameters are used in APIs that set parameters.
- Async methods use callbacks. For details, see the following section.

## Asynchronous programming model

Most async APIs take a callback as their last parameter. An example is shown as follows.

```
using System; 

using XGamingRuntime; 

  

class SignInManager 

{ 

    public void AddUser() 

    { 

        SDK.XUserAddAsync(XUserAddOptions.None, this.OnUserAddComplete); 

    } 

  

    private void OnUserAddComplete(Int32 hresult, XUserHandle userHandle) 

    { 

        // Check the result, and then do something with the handle. 

    } 

} 
```

Information about the threading model is as follows.

- Async methods execute immediately, and the work is performed on an available thread in the thread pool.
 - The thread pool is initialized internally after a call is made to SDK.XGameRuntimeInitialize().
 - No thread pool configuration options are exposed.
- The result callback is invoked after dispatch is called (that is, SDK.XTaskQueueDispatch()). As a result, it's important that dispatch is _called frequently_—ideally, during your game's update loop.
- The result callback is executed on the thread that invoked dispatch.

## Example differences between native APIs and managed wrappers

Native APIs and managed wrappers have minimal differences. For reference, the following two examples show signature and call functions of **XUserAddAsync** and **XblAchievementsUpdateAchievementAsync** in managed and native code.

### XUserAddAsync example

The native signature for XUserAddAsync is as follows.

```
STDAPI XUserAddAsync( 

    _In_ XUserAddOptions options, 

    _Inout_ XAsyncBlock* async 

    ) noexcept; 

 

STDAPI XUserAddResult( 

    _Inout_ XAsyncBlock* async, 

    _Out_ XUserHandle* newUser 

    ) noexcept; 
```

Where the managed signature for XUserAddAsync is:

```
public static void XGamingRuntime.SDK.XUserAddAsync( 

    XUserAddOptions options,  

    XUserAddCompleted completionRoutine 

); 

public delegate void XUserAddCompleted(Int32 hresult, XUserHandle userHandle); 
```

An example of how to call functions of XUserAddAsync in native code is as follows.

```
auto asyncBlock = std::make_unique<XAsyncBlock>(); 

ZeroMemory(asyncBlock.get(), sizeof(*asyncBlock)); 

asyncBlock->queue = _queue; 

asyncBlock->context = this; 

asyncBlock->callback = [](XAsyncBlock* ab) 

{ 

    auto asyncBlock = std::unique_ptr<XAsyncBlock>(ab); 

    XUserHandle user; 

    RETURN_IF_FAILED(XUserAddResult(ab, &user)); 

}; 

 

if (SUCCEEDED_LOG(XUserAddAsync( 

    XUserAddOptions::AddDefaultUserAllowingUI, 

    asyncBlock.get()))) 

{ 

    // The call succeeded, so release the std::unique_ptr ownership of XAsyncBlock* because the callback will take over ownership. 

    // If the call fails, the std::unique_ptr will keep ownership and delete the XAsyncBlock* 

    asyncBlock.release(); 

} 
```

Where the managed example of calling XUserAddAsync functions is:

```
Managed add user 

SDK.XUserAddAsync( 

    XUserAddOptions.AddDefaultUserAllowingUI,  

    (hr, userHandle) => 

    { 

        LOG("XUserAddAsync", hr); 

        if (hr >= 0) 

        { 

            this.userHandle = userHandle; 

            // Sign-in succeeded. 

        } 

        else 

        { 

            // Sign-in failed. 

        } 

    } 

); 
```

If the user prefers to use a custom queue or if the API does not include a callback implementation, the following example illustrates how to create an XAsyncBlock. The user must also ensure the proper dispatching and completion of the queue. Please visit [XTaskQueue library overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-libraries/async-library-xtaskqueue?view=gdk-2604) - for more information.

```

XAsyncBlock xAsyncBlock = new XAsyncBlock(queue, (_async) => 

{ 

    XUserHandle userHandle; 

    int hr = SDK.XUserAddResult(_async, out userHandle); 

  

    if (hr >= 0) 

    { 

        this.userHandle = userHandle; 

        // Sign-in succeeded. 

    } 

    else 

    { 

        // Sign-in failed. 

    } 

}, IntPtr.Zero); 

 

SDK.XUserAddAsync(XUserAddOptions.AddDefaultUserAllowingUI, xAsyncBlock); 
```

### XblAchievementsUpdateAchievementAsync example

The native signature for XblAchievementsUpdateAchievementAsync is as follows.

```
STDAPI XblAchievementsUpdateAchievementAsync( 

    _In_ XblContextHandle xboxLiveContext, 

    _In_ uint64_t xboxUserId, 

    _In_z_ const char* achievementId, 

    _In_ uint32_t percentComplete, 

    _In_ XAsyncBlock* async 

) XBL_NOEXCEPT; 
```

Where the managed signature for XblAchievementsUpdateAchievementAsync is:

```
public static void XGamingRuntime.SDK.XBL.XblAchievementsUpdateAchievementAsync( 

    XblContextHandle xboxLiveContext, 

    UInt64 xboxUserId, 

    string achievementId, 

    UInt32 percentComplete, 

    XblAchievementsUpdateAchievementResult completionRoutine); 

public delegate void XblAchievementsUpdateAchievementResult(Int32 hresult); 
```

An example of how to call functions of XblAchievementsUpdateAchievementAsync in native code is as follows.

```
auto asyncBlock = std::make_unique<XAsyncBlock>(); 

asyncBlock->queue = Data()->queue; 

asyncBlock->context = nullptr; 

asyncBlock->callback = [](XAsyncBlock* asyncBlock) 

{ 

    std::unique_ptr<XAsyncBlock> asyncBlockPtr{ asyncBlock }; // Take over ownership of the XAsyncBlock* 

    auto result = XAsyncGetStatus(asyncBlock, false); 

    if (SUCCEEDED(result)) 

    { 

        // Achievement updated. 

    } 

    else if (result == HTTP_E_STATUS_NOT_MODIFIED) 

    { 

        // Achievement isn't modified. 

    } 

    else 

    { 

        // Achievement failed to update. 

    } 

}; 

 

HRESULT hr = XblAchievementsUpdateAchievementAsync( 

    Data()->xboxLiveContext, 

    Data()->xboxUserId, 

    achievementId.c_str(), 

    percentComplete, 

    asyncBlock.get() 

); 

if (SUCCEEDED(hr)) 

{ 

    // The call succeeded, so release the std::unique_ptr ownership of XAsyncBlock* because the callback will take over ownership. 

    // If the call fails, the std::unique_ptr will keep ownership and delete the XAsyn-cBlock* 

    asyncBlock.release(); 

} 
```

Where the managed example of calling XblAchievementsUpdateAchievementAsync functions is:

```
SDK.XBL.XblAchievementsUpdateAchievementAsync( 

    xblContextHandle,  

    xboxUserId,  

    achievementId, 

    percentComplete 

    (achievementUpdateResult) => { 

        LOG("XblAchievementsUpdateAchievementAsync result", achievementUpdateResult); 

        if (achievementUpdateResult == 0) 

        { 

       	 	//  Achievement updated. 

       	} 

        else if (achievementUpdateResult == HTTP_E_STATUS_NOT_MODIFIED) //  0x80190130 

        { 

       		//  Achievement isn't modified. 

       	} 

        else 

        { 

       		//  Achievement failed to update. 

       	} 

    } 

); 
```

### Initializing Xbox Services API (XSAPI) in managed code

For reference, the following is an initialization of [XSAPI](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/xbox-services-api/live-gs-xbl-apis?view=gdk-2604) in managed code. This is the XSAPI signature in managed code.

```
public static Int32 XGamingRuntime.SDK.XBL.XblInitialize(string scid) 
```

The following is an example of the XSAPI call pattern in managed code.

```
Int32 hresult = SDK.XBL.XblInitialize(SCID); 
```

## List of Microsoft Game Development Kit (GDK) APIs in managed wrappers

The following Microsoft Game Development Kit (GDK) APIs are included in managed wrappers within the GDK Unity package. For more information about Microsoft Game Development Kit (GDK) APIs, see [System API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/gc-reference-system-toc?view=gdk-2604).

- [XAccessibility](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xaccessibility/xaccessibility_members?view=gdk-2604)
 - XClosedCaptionGetProperties
 - XClosedCaptionSetEnabled
 - XHighContrastGetMode
 - XSpeechToTextSendString
 - XSpeechToTextSetPositionHint
 - XSpeechToTextBeginHypothesisString
 - XSpeechToTextUpdateHypothesisString
 - XSpeechToTextFinalizeHypothesisString
 - XSpeechToTextCancelHypothesisString
- [XAppCapture](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xappcapture/xappcapture_members?view=gdk-2604)
 - XAppBroadcastGetStatus
 - XAppBroadcastIsAppBroadcasting
 - XAppBroadcastShowUI
 - XAppBroadcastRegisterIsAppBroadcastingChanged
 - XAppCaptureCloseLocalStream
 - XAppCaptureCloseScreenshotStream
 - XAppCaptureEnableRecord
 - XAppCaptureDisableRecord
 - XAppBroadcastUnregisterIsAppBroadcastingChanged
 - XAppCaptureMetadataAddStringEvent
 - XAppCaptureMetadataAddInt32Event
 - XAppCaptureMetadataAddDoubleEvent
 - XAppCaptureMetadataStartStringState
 - XAppCaptureMetadataStartInt32State
 - XAppCaptureMetadataStartDoubleState
 - XAppCaptureMetadataStopState
 - XAppCaptureMetadataStopAllStates
 - XAppCaptureMetadataRemainingStorageBytesAvailable
 - XAppCaptureOpenScreenshotStream
 - XAppCaptureReadScreenshotStream
 - XAppCaptureRecordDiagnosticClip
 - XAppCaptureTakeDiagnosticScreenshot
 - XAppCaptureTakeScreenshot
 - XAppCaptureRegisterMetadataPurged
 - XAppCaptureUnRegisterMetadataPurged
 - XAppCaptureReadLocalStream
 - XAppCaptureRecordTimespan
 - XAppCaptureGetVideoCaptureSettings
- [XAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xasync/xasync_members?view=gdk-2604)
 - XAsyncGetStatus
 - XAsyncGetResultSize
 - XAsyncCancel
 - XAsyncRun
- [XDisplay](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xdisplay/xdisplay_members?view=gdk-2604)
 - XDisplayTryEnableHdrMode
 - XDisplayAcquireTimeoutDeferral
 - XDisplayCloseTimeoutDeferralHandle
- [XError](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xerror/xerror_members?view=gdk-2604)
 - XErrorSetCallback
 - XErrorSetOptions
- [XGameEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameevent/xgameevent_members?view=gdk-2604)
 - XGameEventWrite
- [XGame](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgame/xgame_members?view=gdk-2604)
 - XGameGetXboxTitleId
 - XLaunchNewGame
 - XLaunchRestartOnCrash
- [XGameInvite](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameinvite/xgameinvite_members?view=gdk-2604)
 - XGameInviteRegisterForEvent
 - XGameInviteUnregisterForEvent
- [XGameProtocol](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameprotocol/xgameprotocol_members?view=gdk-2604)
 - XGameProtocolRegisterForActivation
 - XGameProtocolUnregisterForActivation
- [XGameRuntimeFeature](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameruntimefeature/xgameruntimefeature_members?view=gdk-2604)
 - XGameRuntimeIsFeatureAvailable
- [XGameRuntimeInit](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameruntimeinit/xgameruntimeinit_members?view=gdk-2604)
 - XGameRuntimeInitialize
 - XGameRuntimeUninitialize
- [XGameSave](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/xgamesave_members?view=gdk-2604)
 - XGameSaveInitializeProvider
 - XGameSaveInitializeProviderAsync
 - XGameSaveInitializeProviderResult
 - XGameSaveCloseProvider
 - XGameSaveGetRemainingQuota
 - XGameSaveGetRemainingQuotaAsync
 - XGameSaveGetRemainingQuotaResult
 - XGameSaveDeleteContainer
 - XGameSaveDeleteContainerAsync
 - XGameSaveDeleteContainerResult
 - XGameSaveCreateContainer
 - XGameSaveCloseContainer
 - XGameSaveGetContainerInfo
 - XGameSaveEnumerateContainerInfo
 - XGameSaveEnumerateContainerInfoByName
 - XGameSaveEnumerateBlobInfo
 - XGameSaveEnumerateBlobInfoByName
 - XGameSaveReadBlobData
 - XGameSaveReadBlobDataAsync
 - XGameSaveReadBlobDataResult
 - XGameSaveCreateUpdate
 - XGameSaveCloseUpdateHandle
 - XGameSaveSubmitBlobWrite
 - XGameSaveSubmitBlobDelete
 - XGameSaveSubmitUpdate
 - XGameSaveSubmitUpdateAsync
 - XGameSaveSubmitUpdateResult
- [XGameSaveFiles](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesavefiles/xgamesavefiles_members?view=gdk-2604)
 - XGameSaveFilesGetFolderWithUiAsync
 - XGameSaveFilesGetFolderWithUiResult
 - XGameSaveFilesGetRemainingQuota
- [XGameStreaming](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/xgamestreaming_members?view=gdk-2604)
 - XGameStreamingInitialize
 - XGameStreamingUninitialize
 - XGameStreamingIsStreaming
 - XGameStreamingGetClientCount
 - XGameStreamingGetClients
 - XGameStreamingGetConnectionState
 - XGameStreamingRegisterConnectionStateChanged
 - XGameStreamingUnregisterConnectionStateChanged
 - XGameStreamingHideTouchControls
 - XGameStreamingHideTouchControlsOnClient
 - XGameStreamingShowTouchControlLayout
 - XGameStreamingShowTouchControlLayoutOnClient
 - XGameStreamingRegisterClientPropertiesChanged
 - XGameStreamingUnregisterClientPropertiesChanged
 - XGameStreamingGetStreamPhysicalDimensions
 - XGameStreamingGetStreamAddedLatency
 - XGameStreamingGetServerLocationNameSize
 - XGameStreamingGetServerLocationName
 - XGameStreamingIsTouchInputEnabled
 - XGameStreamingGetLastFrameDisplayed
 - XGameStreamingUpdateTouchControlsState
 - XGameStreamingUpdateTouchControlsStateOnClient
 - XGameStreamingShowTouchControlsWithStateUpdate
 - XGameStreamingShowTouchControlsWithStateUpdateOnClient
 - XGameStreamingGetTouchBundleVersionNameSize
 - XGameStreamingGetTouchBundleVersion
 - XGameStreamingGetClientIPAddress
 - XGameStreamingGetSessionId
 - XGameStreamingGetDisplayDetails
 - XGameStreamingSetResolution
- [XGameUI](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameui/xgameui_members?view=gdk-2604)
 - XGameUIShowAchievementsAsync
 - XGameUIShowAchievementsResult
 - XGameUIShowMessageDialogAsync
 - XGameUIShowMessageDialogResult
 - XGameUIShowErrorDialogAsync
 - XGameUIShowErrorDialogResult
 - XGameUIShowTextEntryAsync
 - XGameUIShowTextEntryResultSize
 - XGameUIShowTextEntryResult
 - XGameUITextEntryClose
 - XGameUITextEntryGetExtents
 - XGameUITextEntryOpen
 - XGameUITextEntryGetState
 - XGameUITextEntryUpdatePositionHint
 - XGameUITextEntryUpdateVisibility
 - XGameUISetNotificationPositionHint
 - XGameUIShowSendGameInviteAsync
 - XGameUIShowSendGameInviteResult
 - XGameUIShowMultiplayerActivityGameInviteAsync
 - XGameUIShowMultiplayerActivityGameInviteResult
 - XGameUIShowWebAuthenticationAsync
 - XGameUIShowWebAuthenticationResult
 - XGameUIShowWebAuthenticationWithOptionsAsync
 - XGameUIShowWebAuthenticationResultSize
 - XGameUIShowPlayerProfileCardAsync
 - XGameUIShowPlayerProfileCardResult
 - XGameUIShowPlayerPickerAsync
 - XGameUIShowPlayerPickerResultCount
 - XGameUIShowPlayerPickerResult
- [XLauncher](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xlauncher/xlauncher_members?view=gdk-2604)
 - XLaunchUri
- [XNetworking](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/networking/xnetworking/xnetworking_members?view=gdk-2604)
 - XNetworkingGetConnectivityHint
 - XNetworkingQueryConfigurationSetting
 - XNetworkingQueryPreferredLocalUdpMultiplayerPort
 - XNetworkingQueryPreferredLocalUdpMultiplayerPortAsync
 - XNetworkingQueryPreferredLocalUdpMultiplayerPortAsyncResult
 - XNetworkingQuerySecurityInformationForUrlAsync
 - XNetworkingQuerySecurityInformationForUrlAsyncResultSize
 - XNetworkingQuerySecurityInformationForUrlAsyncResult
 - XNetworkingQuerySecurityInformationForUrlUtf16Async
 - XNetworkingQuerySecurityInformationForUrlUtf16AsyncResultSize
 - XNetworkingQuerySecurityInformationForUrlUtf16AsyncResult
 - XNetworkingQueryStatistics
 - XNetworkingRegisterConnectivityHintChanged
 - XNetworkingUnregisterConnectivityHintChanged
 - XNetworkingRegisterPreferredLocalUdpMultiplayerPortChanged
 - XNetworkingUnregisterPreferredLocalUdpMultiplayerPortChanged
 - XNetworkingVerifyServerCertificate
- [XPackage](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/xpackage_members?view=gdk-2604)
 - XPackageGetCurrentProcessPackageIdentifier
 - XPackageIsPackagedProcess
 - XPackageGetUserLocale
 - XPackageEnumeratePackages
 - XPackageFindChunkAvailability
 - XPackageChangeChunkInstallOrder
 - XPackageInstallChunks
 - XPackageUninstallChunks
 - XPackageInstallChunksAsync
 - XPackageInstallChunksResult
 - XPackageRegisterPackageInstalled
 - XPackageUnregisterPackageInstalled
 - XPackageEnumerateFeatures
 - XPackageEnumerateChunkAvailability
 - XPackageMount
 - XPackageMountWithUiAsync
 - XPackageMountWithUiResult
 - XPackageGetMountPath
 - XPackageGetMountPathSize
 - XPackageCloseMountHandle
 - XPackageCreateInstallationMonitor
 - XPackageCloseInstallationMonitorHandle
 - XPackageGetInstallationProgress
 - XPackageUpdateInstallationMonitor
 - XPackageRegisterInstallationProgressChanged
 - XPackageUnregisterInstallationProgressChanged
 - XPackageEstimateDownloadSize
 - XPackageGetWriteStats
 - XPackageUninstallUWPInstance
 - XPackageUninstallPackage
- [XPersistentLocalStorage](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpersistentlocalstorage/xpersistentlocalstorage_members?view=gdk-2604)
 - XPersistentLocalStorageGetPathSize
 - XPersistentLocalStorageGetPath
 - XPersistentLocalStorageGetSpaceInfo
 - XPersistentLocalStoragePromptUserForSpaceAsync
 - XPersistentLocalStoragePromptUserForSpaceResult
- [XSpeechSynthesizer](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xspeechsynthesizer/xspeechsynthesizer_members?view=gdk-2604)
 - XSpeechSynthesizerEnumerateInstalledVoices
 - XSpeechSynthesizerCreate
 - XSpeechSynthesizerCloseHandle
 - XSpeechSynthesizerSetDefaultVoice
 - XSpeechSynthesizerSetCustomVoice
 - XSpeechSynthesizerCreateStreamFromText
 - XSpeechSynthesizerCreateStreamFromSsml
 - XSpeechSynthesizerCloseStreamHandle
 - XSpeechSynthesizerGetStreamDataSize
 - XSpeechSynthesizerGetStreamData
- [XStore](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/xstore_members?view=gdk-2604)
 - XStoreCreateContext
 - XStoreCloseContextHandle
 - XStoreIsAvailabilityPurchasable
 - XStoreAcquireLicenseForPackageAsync
 - XStoreAcquireLicenseForPackageResult
 - XStoreCanAcquireLicenseForPackageAsync
 - XStoreCanAcquireLicenseForPackageResult
 - XStoreCanAcquireLicenseForStoreIdAsync
 - XStoreCanAcquireLicenseForStoreIdResult
 - XStoreCloseLicenseHandle
 - XStoreIsLicenseValid
 - XStoreQueryAddOnLicensesAsync
 - XStoreQueryAddOnLicensesResultCount
 - XStoreQueryAddOnLicensesResult
 - XStoreQueryGameLicenseAsync
 - XStoreQueryGameLicenseResult
 - XStoreQueryLicenseTokenAsync
 - XStoreQueryLicenseTokenResultSize
 - XStoreQueryLicenseTokenResult
 - XStoreRegisterGameLicenseChanged
 - XStoreUnregisterGameLicenseChanged
 - XStoreRegisterPackageLicenseLost
 - XStoreUnregisterGameLicenseChanged
 - XStoreUnregisterPackageLicenseLost
 - XStoreAcquireLicenseForDurablesAsync
 - XStoreQueryGameAndDlcPackageUpdatesAsync
 - XStoreQueryGameAndDlcPackageUpdatesResultCount
 - XStoreQueryGameAndDlcPackageUpdatesResult
 - XStoreDownloadAndInstallPackagesAsync
 - XStoreDownloadAndInstallPackagesResultCount
 - XStoreDownloadAndInstallPackagesResult
 - XStoreDownloadAndInstallPackageUpdatesAsync
 - XStoreDownloadAndInstallPackageUpdatesResult
 - XStoreDownloadPackageUpdatesAsync
 - XStoreDownloadPackageUpdatesResult
 - XStoreQueryPackageIdentifier
 - XStoreShowRedeemTokenUIAsync
 - XStoreShowRedeemTokenUIResult
 - XStoreShowRateAndReviewUIAsync
 - XStoreShowRateAndReviewUIResult
 - XStoreShowPurchaseUIAsync
 - XStoreShowPurchaseUIResult
 - XStoreQueryConsumableBalanceRemainingAsync
 - XStoreQueryConsumableBalanceRemainingResult
 - XStoreReportConsumableFulfillmentAsync
 - XStoreReportConsumableFulfillmentResult
 - XStoreGetUserCollectionsIdAsync
 - XStoreGetUserCollectionsIdResultSize
 - XStoreGetUserCollectionsIdResult
 - XStoreGetUserPurchaseIdAsync
 - XStoreGetUserPurchaseIdResultSize
 - XStoreGetUserPurchaseIdResult
 - XStoreQueryAssociatedProductsAsync
 - XStoreQueryAssociatedProductsResult
 - XStoreQueryEntitledProductsAsync
 - XStoreQueryEntitledProductsResult
 - XStoreQueryProductForCurrentGameAsync
 - XStoreQueryProductForCurrentGameResult
 - XStoreQueryProductForPackageAsync
 - XStoreQueryProductForPackageResult
 - XStoreQueryProductsAsync
 - XStoreQueryProductsResult
 - XStoreProductsQueryNextPageAsync
 - XStoreCloseProductsQueryHandle
 - XStoreAcquireLicenseForDurablesResult
 - XStoreEnumerateProductsQuery
 - XStoreProductsQueryHasMorePages
 - XStoreProductsQueryNextPageResult
 - XStoreShowAssociatedProductsUIAsync
 - XStoreShowAssociatedProductsUIResult
 - XStoreShowProductPageUIAsync
 - XStoreShowProductPageUIResult
- [XSystem](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xsystem/xsystem_members?view=gdk-2604)
 - XSystemGetAnalyticsInfo
 - XSystemGetAppSpecificDeviceId
 - XSystemGetConsoleId
 - XSystemGetDeviceType
 - XSystemGetXboxLiveSandboxId
 - XSystemGetRuntimeInfo
 - XSystemIsHandleValid
 - XSystemHandleTrack
- [XTaskQueue](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xtaskqueue/xtaskqueue_members?view=gdk-2604)
 - XTaskQueueCloseHandle
 - XTaskQueueCreate
 - XTaskQueueCreateComposite
 - XTaskQueueDispatch
 - XTaskQueueDuplicateHandle
 - XTaskQueueGetCurrentProcessTaskQueue
 - XTaskQueueGetPort
 - XTaskQueueRegisterMonitor
 - XTaskQueueRegisterWaiter
 - XTaskQueueSetCurrentProcessTaskQueue
 - XTaskQueueSubmitCallback
 - XTaskQueueSubmitDelayedCallback
 - XTaskQueueTerminate
 - XTaskQueueUnregisterMonitor
 - XTaskQueueUnregisterWaiter
- [XThread](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xthread/xthread_members?view=gdk-2604)
 - XThreadIsTimeSensitive
 - XThreadSetTimeSensitive
 - XThreadAssertNotTimeSensitive
- [XUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/xuser_members?view=gdk-2604)
 - XUserDuplicateHandle
 - XUserCloseHandle
 - XUserCompare
 - XUserGetMaxUsers
 - XUserAddAsync
 - XUserAddResult
 - XUserAddByIdWithUiAsync
 - XUserAddByIdWithUiResult
 - XUserGetId
 - XUserFindUserById
 - XUserGetLocalId
 - XUserFindUserByLocalId
 - XUserGetIsGuest
 - XUserGetState
 - XUserGetGamertag
 - XUserGetGamerPictureAsync
 - XUserGetAgeGroup
 - XUserCheckPrivilege
 - XUserResolvePrivilegeWithUiAsync
 - XUserResolvePrivilegeWithUiResult
 - XUserGetTokenAndSignatureUtf16Async
 - XUserResolveIssueWithUiUtf16Async
 - XUserResolveIssueWithUiUtf16Result
 - XUserRegisterForChangeEvent
 - XUserUnregisterForChangeEvent
 - XUserCloseSignOutDeferralHandle
 - XUserFindControllerForUserWithUiAsync
 - XUserFindControllerForUserWithUiResult
 - XUserFindForDevice
 - XUserGetDefaultAudioEndpointUtf16
 - XUserGetGamerPictureResultSize
 - XUserGetGamerPictureResult
 - XUserGetSignOutDeferral
 - XUserGetTokenAndSignatureAsync
 - XUserGetTokenAndSignatureResultSize
 - XUserGetTokenAndSignatureResult
 - XUserGetTokenAndSignatureUtf16ResultSize
 - XUserGetTokenAndSignatureUtf16Result
 - XUserIsStoreUser
 - XUserRegisterForDefaultAudioEndpointUtf16Changed
 - XUserRegisterForDeviceAssociationChanged
 - XUserResolveIssueWithUiAsync
 - XUserResolveIssueWithUiResult
 - XUserUnregisterForDefaultAudioEndpointUtf16Changed
 - XUserUnregisterForDeviceAssociationChanged

## List of Xbox services APIs in managed wrappers

The following Xbox services APIs are included in managed wrappers within the GDK Unity package. For more information about Xbox services APIs, see [Xbox Live API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/gc-reference-live-toc?view=gdk-2604).

- [XblContext](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/xbox_live_context_c/xbox_live_context_c_members?view=gdk-2604)
- [XblAchievements](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/achievements_c/achievements_c_members?view=gdk-2604)
- [XblEvents](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/events_c/events_c_members?view=gdk-2604)
- [XblLeaderboard](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/leaderboard_c/leaderboard_c_members?view=gdk-2604)
- [XblPresence](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/presence_c/presence_c_members?view=gdk-2604)
- [XblPrivacy](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/privacy_c/privacy_c_members?view=gdk-2604)
- [XblSocialManager](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_manager_c/social_manager_c_members?view=gdk-2604)
- [XblUserStatistics](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/user_statistics_c/user_statistics_c_members?view=gdk-2604)
- [XblHttpCall](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/http_call_c/http_call_c_members?view=gdk-2604)
- [XblGetErrorCondition](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/errors_c/errors_c_members?view=gdk-2604)
- [XblMultiplayer](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_c/multiplayer_c_members?view=gdk-2604)
- [XblMultiplayerManager](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/multiplayer_manager_c_members?view=gdk-2604)
- [XblMultiplayerActivity](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_activity_c/multiplayer_activity_c_members?view=gdk-2604)
- [XblMatchmaking](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/matchmaking_c/matchmaking_c_members?view=gdk-2604)
- [XblProfile](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/profile_c/profile_c_members?view=gdk-2604)
- [XblRealTimeActivity](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/real_time_activity_c/real_time_activity_c_members?view=gdk-2604)
- [XblTitleManagedStats](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/title_managed_statistics_c/title_managed_statistics_c_members?view=gdk-2604)
- [XblSocial](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/social_c/social_c_members?view=gdk-2604)
- [XblTitleStorage](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/title_storage_c/title_storage_c_members?view=gdk-2604)
- [XblUserStatics](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/user_statistics_c/user_statistics_c_members?view=gdk-2604)

## See also

[Get started with Unity for PC development](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/get-started-with-unity-pc/gc-get-started-with-unity-pc-toc?view=gdk-2604)

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

- Last updated on 05/16/2025