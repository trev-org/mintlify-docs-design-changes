---
author: dmcmahon
title: "Submission Validator messages"
description: "Provides advisory, failure, and warning message types from Submission Validator."
kindex:
- Submission Validator (SubmissionValidator.dll)
- SubmissionValidator.dll
- validation
- Warnings
- Errors
- Advisory
- Messages
ms.author: dmcmahon
ms.topic: article
edited: 00/00/0000
ms.date: '08/30/2022'
permissioned-type: public
---

# Submission Validator messages  

This article provides advisory, failure, and warning message-type output from [Submission Validator (SubmissionValidator.dll)](submissionvalidator.md) when it validates a package that was created with the Microsoft Game Development Kit (GDK). These messages are organized in tables by message type.  

## Message type: Informational  

| Name | Description |
|:---- | :-----------|
| ILI_CannotCheckNonRetailDependencies | Failed to scan for non-retail dependencies in file %ws. |
| ILI_ChunksContainsMixedDataTypes | Note: You can ignore this warning if you are using /updcompat 2. The following Chunks contain a mixture of files with executable data and files without executable data: %s.  To optimize for future Content Updates to executables, you are advised to place files with executable content into their own chunks.  If you are packaging an update to an existing title ignore this warning for any chunks which you are not adding/modifying in this update. |
| ILI_DefaultTitleMemory | You do not have a 'TitleMemory' entry in your manifest. Your title will have access to a default amount of memory as specified by the system. This default may change in the future. Please check the XDK documentation for information on how to populate this in your manifest. |
| ILI_DefaultTitleMemoryFinal | You do not have a 'TitleMemory' entry in your manifest. Your title will only have access to the default value of 5 GB of memory on all consoles unless you specify this value. Please check the XDK documentation for information on how to populate this in your manifest. |
| ILI_DoesNotFullyUseIntelligentInstall | Package does not take full advantage of intelligent install. Consider adding recipes and features to improve user experience and download sizes. |
| ILI_DoesNotUseIntelligentInstall | Package does not take advantage of intelligent install. Consider adding recipes and features, and tagging chunks, to improve user experience and download sizes. |
| ILI_ErrorParsingXmlLayout | Error parsing XML layout file. Check that you have set XML_Cert_Layout to the full path and filename. Cannot continue validation. |
| ILI_PcGdkUpdatesOnly | The GDK used to compile your binaries is not approved for new title submissions. This GDK version is allowed only for Content Updates where the original release used this GDK version. Use only supported GDK versions according to the Approved Libraries page located at  https://aka.ms/GdkApprovedLibs |
| ILI_NoGdkVersionFound | A GDK version was not able to be extracted from your game executable. The version of the tools used for packaging will be used as the GDK version for this submission. If this is not correct, ensure any executables listed in your MicrosoftGame.config include XGameRuntime.h or you include appropriate middleware which consumes this header. See https://aka.ms/EmbeddedGdkVersion for more information|
| ILI_GameConfigVersionIsZero | The MicrosoftGame.config file is using configVersion set to '0'. We recommend that the configVersion be updated to version '1' when using this version of the packaging tools to ensure the latest required fields are respected. |
| ILI_GameOsVersionUpdatesOnly | The GameOS included in this package is not approved for new title submissions. This GameOS version is allowed only for Content Updates where the original release used this GameOS version. Use only supported GameOS versions according to the Approved Libraries page on the Developer Network Portal. |
| ILI_KinectFaceFiles | Title includes the Microsoft.Kinect.dll and specifies the 'kinectFace' capability but does not include required NUI databases (FaceAlignment.bin, FaceDetector.bin, FaceOrientation.bin) for Kinect face tracking. If your title uses other face tracking features in Microsoft.Kinect.dll, this warning can be ignored. |
| ILI_LaunchChunkSizeCheckLargest | The largest launch set on a %ws device is %llu bytes (%0.3f GB) for %ws. |
| ILI_LaunchChunkSizeCheckSmallest | The smallest launch set on a %ws device is %llu bytes (%0.3f GB) for %ws. |
| ILI_LogoFileFallingBackToDefault | %s: Using default image for language %s (%s) |
| ILI_NeedsCertException | File found which possibly matches a component requiring an XR-12 exception. Please work with your DAM to ensure you have approval to ship this file: %ws. |
| ILI_NonContiguousBlocks | Found non-contiguous blocks in region: 0x%x |
| ILI_NonLocalizedApp | Non-localized app: 'resources.pri' is missing in the title root. |
| ILI_OutOfDatePCTooling | PC submissions may experience update performance problems if built with tools prior to the October 2021 GDK.  For more information, contact your Developer Account Manager. |
| ILI_RequiresXboxLive | The RequiresXboxLive element is set to true in the MicrosoftGame.config file. This element will require the console to be online to launch and play your title. This element does not need to be set to true for your title to utilize Xbox services. |
| ILI_SingleChunkContainsMixedDataTypes | Note: You can ignore this warning if you are using /updcompat 2. Chunk %s contains a mixture of files with executable data and files without executable data.  To optimize for future Content Updates to executables, you are advised to place files with executable content into their own chunks.  If you are packaging an update to an existing title ignore this warning for any chunks which you are not adding/modifying in this update. |
| ILI_SymbolBundlingDisabled | Symbol bundling disabled. Ensure the command line to MakePkg does not specify /skipsymbolbundling and verify the environment variable SUBMISSION_VALIDATION_NO_SYMBOL_BUNDLING does not exist or is set to 0 to enable symbol bundling |
| ILI_SymbolBundlingNotNeeded | Symbol bundling is not needed for ADK applications. |
| ILI_UpdateOnlyBinaryVersion | %ws included in this package is not approved for new title submissions. This version is allowed only for Content Updates where the original release used this version. Use only supported component versions according to the Approved Libraries page on the Developer Network Portal. |
| ILI_XvcPrintLaunchSize | The total size of the chunks in the entire package launch set is %llu bytes (%0.3f GB). See the Package Specifier Check below for details on the largest and smallest launch sizes a user will experience. |
  

## Message type: Failure  

| Name | Description |
|:---- | :-----------|
| ILI_AdkOnlyComponent | %ws included in this package is an ADK only component. GDK/XDK titles should only use supported GDK/XDK components according to the Approved Libraries page on the Developer Network Portal |
| ILI_ArchitectureArm64Mismatch | Executable with the Architecture attribute set to ARM64 is not compiled for the ARM64 platform. Please ensure the attributes are set correctly for this executable in your MicrosoftGame.config file. |
| ILI_ArchitectureArm64NotMarked |Executable is compiled for the ARM64 platform but does not have the Architecture attribute set to ARM64. Please ensure the attributes are set correctly for this executable in your MicrosoftGame.config file.|
| ILI_BackgroundAudio |Manifest includes Background Audio, generally not allowed. Contact your Developer Account Manager. |
| ILI_BadExtensionFoundSevere | File with suspect extension. Ensure this file is intentionally included: %ws |
| ILI_BadNamespaceQualifier | Namespace qualifier mx: not needed for internetClientServer or privateNetworkClientServer. |
| ILI_BadXimVersion | %ws included in this package has known issues and is no longer accepted for title certification. Update to the latest QFE for your XDK to get the required fixes for this component. |
| ILI_BatCheckFailed | Bat check failed, size: %.02f MB. This can result in installation failures on retail devices. Try disabling Virus Scanning and Indexing software and try again or install the XDK Tools or GDK Tools from August 2015 or later. Contact your Development Account Manager for additional assistance. |
| ILI_BlockedFileFound | %ws |
| ILI_BothMBAndGBForMaxTitleMemory | Use of both 'Size' and 'SizeInMegabytes' for 'TitleMemory' is not allowed. The number of bytes must be specified using only one of these attributes. |
| ILI_CannotCheckNonRetailDependencies | Failed to scan for non-retail dependencies in file %ws |
| ILI_CannotDetermineGameOsVersion | Version identifier of GameOS for this title cannot be determined. Set environment variable XDK_Cert_GameOS before calling MakePkg |
| ILI_CannotIdentifyEmbeddedGameOsVersion | Version identifier of embedded GameOS cannot be determined. Package: %ws. |
| ILI_CannotIdentifyGameOsVersion | Version identifier of GameOS cannot be determined. GameOS: %ws |
| ILI_ConfigMissingLogoFile | The %s attribute in the ShellVisuals element is required before submitting this package to certification. |
| ILI_ConfigMissingShellVisuals | The ShellVisuals element is required before submitting this package to certification. |
| ILI_ConnectedStorageParseFailure | Unexpectedly failed to parse the MaxMegabytesPerUser from the mx:ConnectedStorage element.  Ensure this element is the number of megabytes of requested storage. |
| ILI_DefaultMSAAppId | The MicrosoftGame.config file has the default value for the MSAAppId element. Please correct this to the real value for your application from Partner Center or by running the Store Association Wizard in the MicrosoftGame.config Editor tool before submitting to certification. |
| ILI_DefaultTitleId | The MicrosoftGame.config file has the default value for the TitleId element. Please correct this to the real value for your application from Partner Center or by running the Store Association Wizard in the MicrosoftGame.config Editor tool before submitting to certification. |
| ILI_DeprecatedPCEntries | The MicrosoftGame.config file contains deprecated DesktopRegistration entries.  Please remove 'modFolder', 'enableWritesToPackageRoot', 'disableRegistryWriteVirtualization' and 'disableFilesystemWriteVirtualization' entries before submitting to certification. |
| ILI_DlcAllowedProductMissing | `<mx:AllowedProduct>` is required for DLC package. |
| ILI_DlcCannotHaveTitleId | A DLC package should not specify the TitleId element in the MicrosoftGame.config file. Please remove this element before packaging your DLC content. |
| ILI_DlcFinalChunkMustBeLaunchChunk | Content Packages require final layout chunk to include attribute Marker=\"Launch\" |
| ILI_DlcInvalidApplicationElement | `<application>` is not valid for DLC package. |
| ILI_DlcMatchingParentProduct | AllowedProduct ID cannot match the Product ID of the DLC being packaged.  It should match the Product Id of the parent title. |
| ILI_DlcMissingVisualElements | `<mx:ContentPackageVisualElements>` is required for DLC package. |
| ILI_DlcNullProduct | AllowedProduct ID 00000000-0000-0000-0000-0000000000 is not valid for submission. |
| ILI_DuplicateActivatableClassId | Manifest contains duplicate ActivatableClassId entries, which will cause deployment problems. ActivatableClassId: %ws. |
| ILI_DuplicateSystemResourceElement | mx:XboxSystemResources element appeared more than once. Please consolidate duplicate elements. |
| ILI_EmptyAgeRating | Age rating element in this package is not valid, it must be completely removed or specify valid ratings (Age ratings are allowed only for Content Updates where the original release declared age ratings). Additional guidance can be found in XR-017 or by contacting your Microsoft representative. |
| ILI_ExtendedVideoPlayback | Manifest specifies resourceConfiguration value extendedVideoPlayback which requires a certification exception. Contact your Developer Account Manager. |
| ILI_GameConfigCtrlCharacters | String '%s' contains one or more invalid characters. Try converting to ASCII if the character is not visible. |
| ILI_GameOsAndMsComponentMismatch | The GameOS version does not match the version of other Microsoft components included in this package. Use only components from the same GDK/XDK release. Refer to the Approved Libraries page on the Developer Network Portal |
| ILI_InvalidWindowsOsVersionRelationship | The WindowsOsVersion element violates the requirement that the RequiredMinimum value must be less than or equal to the SuggestedMinimum value which must be less than or equal to the Recommended value. |
| ILI_GameOsVersionNotApproved | The GameOS included in this package is not an approved version. Use only supported GameOS versions according to the Approved Libraries page on the Developer Network Portal |
| ILI_HasMissingDependency | %ws: Binary file has a dependency on a Microsoft Visual Studio C++ Redistributable package (%ws). This must be specifically listed as a framework dependency in your MicrosoftGame.config file. It can be listed using a KnownDependency element with the name '%ws'. |
| ILI_ImageDimensionsIncorrect | %ws: image dimensions incorrect (%d x %d). Requires %d x %d (%ws) |
| ILI_ImageDimensionsIncorrectAlternate | %ws: image dimensions incorrect (%d x %d). Requires %d x %d or %d x %d (%ws) |
| ILI_ImageDimensionsIncorrectAlternateForLanguage | %ws: image dimensions incorrect for language %ws (%d x %d). Requires %d x %d or %d x %d (%ws) |
| ILI_ImageDimensionsIncorrectForLanguage | %ws: image dimensions incorrect for language %ws (%d x %d). Requires %d x %d (%ws) |
| ILI_ImageIncorrectBitPerPixel | %ws: bit-per-pixel value incorrect (%ws). Requires 24 bpp + Alpha (%ws) |
| ILI_ImageIncorrectBitPerPixelForLanguage | %ws: bit-per-pixel value incorrect for language %ws (%ws). Requires 24 bpp + Alpha (%ws) |
| ILI_ImageMissing | %ws: required, referenced in manifest, but file not found (%ws) |
| ILI_ImageMissingFromLayout | %ws: required, referenced in manifest, but file not found in layout (%ws) |
| ILI_ImageMissingFromManifest | %ws: required, but not referenced in manifest. |
| ILI_IncompatibleKinectPipelines | Specified Kinect Pipeline versions are incompatible: mx:AudioPipeline = %ws, mx:SpeechPipeline = %ws, mx:VisionPipeline = %ws. See standard out for more information. |
| ILI_InvalidAgeRating | Invalid rating specified: %ws |
| ILI_InvalidBinary | Invalid: %ws |
| ILI_InvalidBinaryManaged | Managed: %ws |
| ILI_InvalidBinaryNoDynamicBase | %ws: Binary file was compiled with /DYNAMICBASE:NO which disables address space layout randomization. Please remove this compiler flag to meet the requirements of the platform. |
| ILI_InvalidBinaryNoHighEntropy | %ws: Binary file was compiled with /HIGHENTROPYVA:NO which disables high-entropy 64-bit ASLR. Please remove this compiler flag to meet the requirements of the platform. |
| ILI_InvalidBinaryNotAmd64 | Not AMD64: %ws. |
| ILI_InvalidCapability | Invalid capability: %s. Check for correct case and namespace. |
| ILI_InvalidCharactersInManifestString | String %ws contains one or more invalid characters. |
| ILI_InvalidGpuAvailability | Manifest specifies invalid value (%ws) for mx:GpuAvailability. Value must be either 'fixed' or 'variable'. |
| ILI_KinectCapMissing | kinectAudio and kinectGamechat capabilities must both be specified if either are specified. |
| ILI_LogoFileBadBpp | %s: bit-per-pixel value incorrect (%s). Requires 24 bpp + Alpha (%s) |
| ILI_LogoFileBadBppForLanguage | %s: bit-per-pixel value incorrect for language %s (%s). Requires 24 bpp + Alpha (%s) |
| ILI_LogoFileBadDimensions | %s: image dimensions incorrect (%dx%d). Requires %dx%d (%s) |
| ILI_LogoFileBadDimensionsForLanguage | %s: image dimensions incorrect for language %s (%dx%d). Requires %dx%d (%s) |
| ILI_LogoFileBadDimensionsForLanguageWithAlts | %s: image dimensions incorrect for language %s (%dx%d). Requires %dx%d or %dx%d (%s) |
| ILI_LogoFileBadDimensionsWithAlts | %s: image dimensions incorrect (%dx%d). Requires %dx%d or %dx%d (%s) |
| ILI_LogoFileNotFound | The %s file was not found (%s) |
| ILI_LogoFileNotInLayout | The %s file is not found in the layout for this package (%s) |
| ILI_LogoFileNotInLayoutForLanguage | The %s file for language %s is not found in the layout for this package (%s) |
| ILI_MissingAppDataBin | Required AppData.bin file is not found. Use the 'MakePkg appdata' command to generate AppData.bin. |
| ILI_MissingAudioPipeline | mx:Kinect is specified without specifying mx:AudioPipeline |
| ILI_MissingIgnorableNamespaces | Package must have an IgnorableNamespaces attribute with value set to 'mx' |
| ILI_MissingLanguage | The language %ws was specified in the layout but not present in the manifest. Please add this language to the manifest. |
| ILI_MissingLanguageGameCore | The language %ws was specified in the layout but not present in the game config. Please add this language to the game config. |
| ILI_MissingNamespaceQual | Missing required namespace qualifier. %s must be mx:%s. |
| ILI_MissingNamespaceQualifier | Missing required namespace qualifier. %ws must be mx:%ws. |
| ILI_MissingSpeechPipeline | mx:Kinect is specified without specifying mx:SpeechPipeline |
| ILI_MissingVisionPipeline | mx:Kinect is specified without specifying mx:VisionPipeline |
| ILI_MoreThanOneRetailExecutable | Multiple shipping executables specified in the MicrosoftGame.config file. Please use the IsDevOnly attribute to mark all executables not intended to ship in the retail package. |
| ILI_MsComponentMismatch | Mismatched component versions. Use only components from the same GDK/XDK release. Refer to the Approved Libraries page on the Developer Network Portal. |
| ILI_MultipleApplications | Multiple applications detected in AppXManifest. Only single application packages are supported. |
| ILI_NoMSAAppIdOrTitleId | The MicrosoftGame.config file does not contain both a TitleId and MSAAppId element. If one of these values is specified, then they must both be specified when using configVersion >= 1. Please provide the value for your application from Partner Center or by running the Store Association Wizard in the MicrosoftGame.config Editor tool before submitting to certification. |
| ILI_NonRetailExecutableInCertPackage | One or more developer executables are specified in the MicrosoftGame.config file. If planning to submit this package, please remove any executable elements with the IsDevOnly=\"true\" attribute from the MicrosoftGame.config file and create a new package before submitting to certification. |
| ILI_NoRetailExecutable | No executable found without the IsDevOnly attribute set to true. The built retail package will have no executables. |
| ILI_NotApprovedBinaryVersion |  %ws included in this package is not an approved version. Use only supported component versions according to the Approved Libraries page on the Developer Network Portal. |
| ILI_NoVersionForMsComponentCritical | Failed to extract version information for: %ws. |
| ILI_NullRelatedProduct | RelatedProduct ID 00000000-0000-0000-0000-0000000000 is not valid for submission. |
| ILI_OnlineSubValUnsupportedGDK | A required update to Submission Validator is available. The latest version can be downloaded from https://aka.ms/subval_gdk. Download and install the update, then rebuild the package. Contact your Developer Account Manager for assistance. |
| ILI_OnlineVersionFileIncomplete | Submission Validator version information file is missing from the server or invalid. Version check could not be completed. |
| ILI_OnlineVersionFileInvalid | Submission Validator version information file is missing from the server or invalid. Version check could not be completed. |
| ILI_PEContainsTextBssSection | %ws: Binary file contains a .textbss section which will prevent this file from being loaded in a retail scenario. Please review how this file is being compiled to avoid this section. Most likely, this file was compiled with the /ZI flag which is not supported for retail binaries. |
| ILI_PlsInvalidUsage | mx:PersistentLocalStorage is only allowed for use in XDK titles. |
| ILI_PlsParseError | Unexpectedly failed to parse the SizeInMegabytes from the mx:PersistentLocalStorage element.  Ensure this element is the number of megabytes of requested storage. |
| ILI_ReceiveDebug | mx:SecureDeviceSocketUsage Type='ReceiveDebug' is not supported and must be removed from the manifest. |
| ILI_RelyingParty | mx:RelyingParty is not supported and must be removed from the manifest |
| ILI_SendDebug | mx:SecureDeviceSocketUsage Type='SendDebug' is not supported and must be removed from the manifest. |
| ILI_SimplifiedUserModelNotSupported | PC submissions built with your version of the GDK cannot use the Simplified User Model. Please set the AdvancedUserModel element to true in your MicrosoftGame.config file. For more information, contact your Developer Account Manager. |
| ILI_SpecifierCheckFailed | The specifier check unexpectedly failed (0x%08x). Verify the package was created as expected. |
| ILI_SuppressPartyChat | Use of the CanSuppressPartyChat capability requires adherence to strict user experience practices and requires an XR-72 exception. Please work with your Developer Account Manager to get an exception or remove the capability from your manifest. |
| ILI_ToastCapable | Manifest includes ToastCapable, generally not allowed. Contact your Developer Account Manager. |
| ILI_UnexpectedContentPackageNode | A Non-DLC package cannot have a ContentPackage node. |
| ILI_XboxFission | mx:XboxFission is not supported and must be removed from the manifest |
| ILI_XcapiNotFound | Update required for XCAPI.dll. Contact your Developer Account Manager for assistance. |
| ILI_XcapiVersionFailure | Unable to determine XCAPI version information. Contact your Developer Account Manager for assistance. |
| ILI_XdkOnlyComponent | %ws included in this package is an XDK only component. ADK titles should only use supported ADK components according to the Approved Libraries page on the Developer Network Portal. |
| ILI_PcGdkUnsupported | The GDK used to compile your binaries is not supported. Use only supported GDK versions according to the Approved Libraries page located at  https://aka.ms/GdkApprovedLibs | 
| ILI_XvcPackageSizeExceeded | The size of this package exceeds the maximum allowed size for uploading to Partner Center. The maximum size of a package for uploading to Partner Center is {0} GB." |
| ILI_MissingDependentFile | {0}: Binary file has a dependency on a file that is not included in the layout: {1}. This file must be included in the layout for your package |


## Message type: Warning  

| Name | Description |
|:---- | :-----------|
| ILI_XvcPackageSizeApproached | The size of this package is approaching the maximum allowed size for uploading to Partner Center. The maximum size of a package for uploading to Partner Center is {0} GB.|
| ILI_ArchitectureAmd64Mismatch | File with an x64 architecture detected while the ProcessorArchitecture of the package is marked as x86: %ws. Ensure your ProcessorArchitecture matches the architecture of the runtime components of your game. |
| ILI_BadAchievements2017 | If your title is using the Achievements 2017 architecture, users may not be able to unlock achievements when the console is offline. Update to the latest QFE for your XDK to get the required fixes for this component.
| ILI_BadExtensionFoundSuspect | File with suspect extension. Ensure this file is intentionally included: %ws. |
| ILI_BadGen8Dependency | %ws: Binary file appears to have a dependency on the Xbox One graphics stack (d3d12_x.dll). If this is an Xbox One family package ensure the primary executable specifies the TargetDeviceFamily attribute as \"XboxOne\" in the MicrosoftGame.config file. |
| ILI_BadScarlettDependency | %ws: Binary file appears to have a dependency on the Scarlett graphics stack (d3d12_xs.dll). If this is a Scarlett package ensure the primary executable specifies the TargetDeviceFamily attribute as 'Scarlett' in the MicrosoftGame.config file. |
| ILI_CannotCheckNonRetailDependenciesForPC | Failed to scan for non-retail dependencies in file %ws. This may be expected if the file is protected with anti-tampering software. If this is the case, this safety check cannot be performed but this will not impact your title at certification time. |
| ILI_ChunkSizeCheckFailed | The size of chunk %d is larger than %llu bytes (%0.3f GB), which could restrict options for creating a multi-disc product. Consider breaking this chunk into two or more smaller chunks. |
| ILI_ConnectedStorageQuotaRequest | mx:ConnectedStorage element specifies a change in Connected Storage quota limit to %ws MB. This requires a certification exception. Contact your Developer Account Manager. |
| ILI_ContainsAgeRatings | Age rating element included in this package is not approved for new title submissions. Age ratings are allowed only for Content Updates where the original release declared age ratings. Additional guidance can be found in XR-017 or by contacting your Microsoft representative. |
| ILI_GameOsVersionMismatch | The extracted GameOSVersion of the GameOS included in this package does not match the expected GameOSVersion matching the GUID from Partner Center. This is unexpected and you should contact your Microsoft representative. |
| ILI_GameOsVersionMismatchWithCompiledBinaries | The GameOS included in this package does not match any GameOS version used in compilation of the game binaries: %ws. |
| ILI_GameOsVersionNotReleased | Because of the GameOS used, this package has a dependency on an Xbox recovery which will not be available to retail consumers until a future date. |
| ILI_GetXvdInformationFailure | Failed to parse header information from the built package (0x%08x) |
| ILI_HasOldMissingDependency | %ws: Binary file has a dependency on an older Microsoft Visual Studio C++ DLL (%ws). This file must be included in the layout for your package. |
| ILI_ImageSpecifiedButNotFound | Logo file in the Properties element not found: '%ws'. |
| ILI_InvalidLayoutFileSpecified | Layout filepath points to a file that does not exist or is not accessible: '%s'. Check not performed |
| ILI_InvalidValueMaxTitleMemory | Your value for 'TitleMemory' for 'ConsoleType=Xbox_One_X' may not allow additional memory for system use. You can use a value of 9216 MB (9 GB) or a value of less than or equal to 8704 MB (8.5 GB) to avoid this. |
| ILI_LaunchChunkSizeCheckDiscrepency | The size of your smallest launch set on %ws devices is less than half the size of your largest launch set. Please verify your usage of the \"Devices\" and \"Languages\" specifiers to ensure this is intentional. |
| ILI_LayoutParsingError | Error parsing XML layout file. |
| ILI_LegacyFalQfe3Warning | You are building a package using XDK QFE3, and the layout xml file provided does not contain a 'Registration' chunk. There is a known issue in this XDK release which may cause your title to fail to install on console recoveries starting with build version 10158.0.131008-1234. Please validate your package installs successfully on that recovery or later, and consult with your Developer Account Manager if your package fails to install. |
| ILI_LongDestFilePathFound | Destination file found with a long path (greater than 255 characters) that is not supported with your XDK/GDK tools. This file may be silently omitted from the package or may cause packaging to fail: %ws. |
| ILI_LongSourceFilePathFound | Source file found with a long absolute path (greater than 260 characters) that is not supported with your XDK/GDK tools. This file may be silently omitted from the package or may cause packaging to fail: %ws. |
| ILI_NoLayoutFileSpecified | The path and name of the title layout XML file must be set before calling makepkg.  Check not performed. |
| ILI_NonRetailDependencyFound | Non-retail dependency in file %ws: %ws. |
| ILI_NoOnline | Submission Validator was unable to connect to the internet resource to check it is the most recent version. Error: 0x%08X |
| ILI_NoOnlineVersionDownload | Submission Validator was able to connect to the internet resource for the version check but could not complete the check for other reasons. Error: 0x%08X |
| ILI_NoOnlineVersionFile | Submission Validator either was unable to connect to the internet resource or was able to connect for the version check but could not complete the check for other reasons. Error: 0x%08X |
| ILI_NoVersionForMsComponent | Failed to extract version information for: %ws. If you built your own version of this DLL then this is expected and this warning can be ignored. |
| ILI_OldAppDataBin | AppXManifest.xml appears to be newer than AppData.bin. Consider using the 'MakePkg appdata' command to regenerate AppData.bin |
| ILI_OnlineSubValPendingExpirationGDK | An update to Submission Validator is now available. Version %ws will expire soon. Update to version %ws from https://aka.ms/subval_gdk as soon as possible. |
| ILI_OutOfDatePCTooling | PC submissions may experience update performance problems if built with tools prior to the October 2021 GDK.  For more information, contact your Developer Account Manager. |
| ILI_PlsQuotaRequest | mx:PersistentLocalStorage element specifies more than 4 GB of requested storage (%s MB). This requires a certification exception. Contact your Developer Account Manager. |
| ILI_ProtocolLinkRegistration | Manifest contains link protocol registration, generally not allowed. Contact your Developer Account Manager. Protocol name: %ws. |
| ILI_RegionCheckFailed | Region check failed: 0x%x |
| ILI_RegionSize | Region size: %.02f MB |
| ILI_RequestAdditionalMaxTitleMemory | Requesting additional memory for Xbox One consoles requires approval. Please ensure you work with your Developer Account Manager for approval to use %d MB of memory. |
| ILI_SkippingBinaryScan | Skipping Binary Scan due to environment variable SUBMISSION_VALIDATION_SKIP_BINARY_SCAN |
| ILI_SpecifierCheckSkipped | Package specifier check not run (package was not found). |
| ILI_SymbolHandlingDirectoryCreationError | Failed to create the directory structure for the symbol cache: %s (0x%08x). |
| ILI_SymbolHandlingFileCopyError | Failed to copy the file %s to the temporary cache folder (0x%08x). |
| ILI_SymbolHandlingFilePathTooLong | The file path is too long to be bundled and this file will be skipped: %s. |
| ILI_SymbolHandlingInitCachePathError | Failed to find a temporary path for creating the cache folder (0x%08x). |
| ILI_SymbolHandlingInitError | Failed to initialize symbol handling (0x%08x). |
| ILI_SymbolHandlingLookupError | Failed to find matching symbols for %s (0x%08x). |
| ILI_SymbolHandlingLookupFileNotFound | Symbol file not found for %s. Try specifying a semicolon delimited list of paths where symbols can be found for this file to /symbolpaths via MakePkg (October 2016 and later GDKs/XDKs) or setting the environment variable _NT_SYMBOL_PATH. The GUID for this PDB is %s. |
| ILI_SymbolHandlingLookupPdbInfoMissing | Symbol information is not available in the PE header for %s. If this is unexpected, ensure this file was compiled with symbol information. |
| ILI_SymbolHandlingNoFilesToBundle | No symbol files found to bundle. Bundle will not be created. |
| ILI_SymbolHandlingZipCreationError | Failed to create symbol cache compressed folder (0x%08x). |
| ILI_UsedExtendedAttribute | ExtendedAttribute '%s' with value '%s' may require a certification exception. Contact your Development Account Manager for more information. |
| ILI_UsingDirectoryStructureForSearch | The path and name of the title layout XML file should be set before calling MakePkg, this check will instead be based on directory structure starting at the following directory: %ws. |
| ILI_UsingOfflineVersionList | Could not validate the MS component versions against the online approved library list. Using the offline fallback version check. |
| ILI_XvcLaunchSizeQueryFailed | Failed to get the package launch set size (0x%08x). |
| ILI_XvcPackageSizeExceeded | The size of this package exceeds the maximum allowed size for mastering to a disc. If you intend to produce physical disc media, you should create a DiscLayout.xml file and test individual optical disc image layouts using the SplitPkg.exe tool. Please refer to the GDK/XDK documentation for further details. |
| ILI_XvcSizeCheckSkipped | Package size check not run (package was not found). |
| ILI_XvcSizeQueryFailed | Failed to get the package size (0x%08x). |


## See also  
 [Submission Validator (SubmissionValidator.dll)](submissionvalidator.md)  

 [Submission Validator quality checks](submissionvalidator-tests.md)  

 [Make package (makepkg.exe)](../deployment/makepkg.md)  

 [Title packaging, content updates, and streaming-installation testing](../title-packaging-streaming-install-testing.md)  

 Xbox Requirements (XRs) [(Xbox Developer Downloads > Partner, Publishing, and Release Management Information > XGD Partner Documentation)](https://aka.ms/xgddl)  

  
