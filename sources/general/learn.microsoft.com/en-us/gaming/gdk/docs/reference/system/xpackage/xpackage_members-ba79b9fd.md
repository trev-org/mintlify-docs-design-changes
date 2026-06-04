# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/xpackage_members?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/xpackage_members?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# XPackage

Feedback

Summarize this article for me

Reference material for XPackage APIs.

## Functions

Expand table

| Function | Description |
| --- | --- |
| [XPackageChangeChunkInstallOrder](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagechangechunkinstallorder?view=gdk-2604) | Sets the selected chunks to install first. |
| [XPackageChunkAvailabilityCallback](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagechunkavailabilitycallback?view=gdk-2604) | A user-defined callback used by [XPackageEnumerateChunkAvailability](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageenumeratechunkavailability?view=gdk-2604). |
| [XPackageCloseInstallationMonitorHandle](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagecloseinstallationmonitorhandle?view=gdk-2604) | Closes a specified installation monitor. |
| [XPackageCloseMountHandle](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageclosemounthandle?view=gdk-2604) | Closes the specified mount handle. |
| [XPackageCreateInstallationMonitor](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagecreateinstallationmonitor?view=gdk-2604) | Creates a monitor of the state of an installation. |
| [XPackageEnumerateChunkAvailability](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageenumeratechunkavailability?view=gdk-2604) | Examines the installation package and enumerates the availability of all chunks that match the specified selectors. |
| [XPackageEnumerateFeatures](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageenumeratefeatures?view=gdk-2604) | Enumerates features defined in the package's layout file. |
| [XPackageEnumeratePackages](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageenumeratepackages?view=gdk-2604) | Finds installed or installing packages related to the calling process. |
| [XPackageEnumerationCallback](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageenumerationcallback?view=gdk-2604) | A callback used by [XPackageEnumeratePackages](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageenumeratepackages?view=gdk-2604). |
| [XPackageEstimateDownloadSize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageestimatedownloadsize?view=gdk-2604) | Computes the download size of the chunks that match the specified installation selectors. |
| [XPackageFeatureEnumerationCallback](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagefeatureenumerationcallback?view=gdk-2604) | The callback used by XPackageEnumerateFeatures to enumerate each feature. |
| [XPackageFindChunkAvailability](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagefindchunkavailability?view=gdk-2604) | Returns the minimum availability for the collection of chunks that match the specified selectors. |
| [XPackageGetCurrentProcessPackageIdentifier](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagegetcurrentprocesspackageidentifier?view=gdk-2604) | Returns an installation identity string that identifies the installation for this process. |
| [XPackageGetInstallationProgress](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagegetinstallationprogress?view=gdk-2604) | Returns the current progress of an installation. |
| [XPackageGetMountPath](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagegetmountpath?view=gdk-2604) | Gets the path to a mounted installation. |
| [XPackageGetMountPathSize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagegetmountpathsize?view=gdk-2604) | Gets the size required for an array to hold a mount path returned by [XPackageGetMountPath](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagegetmountpath?view=gdk-2604). |
| [XPackageGetUserLocale](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagegetuserlocale?view=gdk-2604) | Gets the current user locale. |
| [XPackageGetWriteStats](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagegetwritestats?view=gdk-2604) | Gets the output write statistics (writeStats). |
| [XPackageInstallationProgressCallback](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageinstallationprogresscallback?view=gdk-2604) | A callback used by [XPackageRegisterInstallationProgressChanged](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageregisterinstallationprogresschanged?view=gdk-2604). |
| [XPackageInstallChunks](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageinstallchunks?view=gdk-2604) | Starts the installation of chunks. |
| [XPackageInstallChunksAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageinstallchunksasync?view=gdk-2604) | Starts installation of chunks. |
| [XPackageInstallChunksResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageinstallchunksresult?view=gdk-2604) | Retrieves the result of a call to [XPackageInstallChunksAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageinstallchunksasync?view=gdk-2604). |
| [XPackageInstalledCallback](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageinstalledcallback?view=gdk-2604) | A user-defined callback used by the XPackageRegisterPackageInstalled function. |
| [XPackageIsPackagedProcess](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageispackagedprocess?view=gdk-2604) | Returns a Boolean that indicates whether the current process has an installation identity. |
| [XPackageMount](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagemount?view=gdk-2604) | This function is now deprecated. Use XPackageMountWithUiAsync instead. |
| [XPackageMountWithUiAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagemountwithuiasync?view=gdk-2604) | Asynchronously mounts the installation of specified content, and returns a mount handle to it. |
| [XPackageMountWithUiResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagemountwithuiresult?view=gdk-2604) | Gets the results of a call to XPackageMountWithUIAsync. |
| [XPackageRegisterInstallationProgressChanged](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageregisterinstallationprogresschanged?view=gdk-2604) | Registers a callback to be called when installation progress changes. |
| [XPackageRegisterPackageInstalled](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageregisterpackageinstalled?view=gdk-2604) | Registers a callback to be called when an installation is completed. |
| [XPackageUninstallPackage](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageuninstallpackage?view=gdk-2604) | Uninstalls a given package. |
| [XPackageUninstallChunks](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageuninstallchunks?view=gdk-2604) | Uninstalls chunks that match the specified selectors. |
| [XPackageUninstallUWPInstance](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageuninstalluwpinstance?view=gdk-2604) | Uninstalls a Universal Windows Platform (UWP) instance of a particular package for the current user if one is currently installed. |
| [XPackageUnregisterInstallationProgressChanged](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageunregisterinstallationprogresschanged?view=gdk-2604) | Unregisters a previously registered install progress changed callback. |
| [XPackageUnregisterPackageInstalled](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageunregisterpackageinstalled?view=gdk-2604) | Unregisters a previously registered install complete callback. |
| [XPackageUpdateInstallationMonitor](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackageupdateinstallationmonitor?view=gdk-2604) | Refreshes the progress returned from [XPackageGetInstallationProgress](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/functions/xpackagegetinstallationprogress?view=gdk-2604). |

## Structures

Expand table

| Structure | Description |
| --- | --- |
| [XPackageChunkSelector](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/structs/xpackagechunkselector?view=gdk-2604) | Defines the criteria for selecting a set of chunks. |
| [XPackageDetails](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/structs/xpackagedetails?view=gdk-2604) | Contains details about an installation. |
| [XPackageFeature](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/structs/xpackagefeature?view=gdk-2604) | Describes a feature. |
| [XPackageInstallationProgress](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/structs/xpackageinstallationprogress?view=gdk-2604) | Contains information about the progress of an installation. |
| [XPackageWriteStats](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/structs/xpackagewritestats?view=gdk-2604) | Contains the output write statistics (writeStats). |

## Enumerations

Expand table

| Enumeration | Description |
| --- | --- |
| [XPackageChunkAvailability](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/enums/xpackagechunkavailability?view=gdk-2604) | Indicates the availability of installation chunks. |
| [XPackageChunkSelectorType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/enums/xpackagechunkselectortype?view=gdk-2604) | Indicates the selector type. |
| [XPackageEnumerationScope](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/enums/xpackageenumerationscope?view=gdk-2604) | Indicates the scope of packages to be returned when installation packages are being enumerated. |
| [XPackageKind](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xpackage/enums/xpackagekind?view=gdk-2604) | Indicates the type of the installation package. |

## See also

[System API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/gc-reference-system-toc?view=gdk-2604) 
[XStore API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/xstore_members?view=gdk-2604)

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

- Last updated on 11/06/2025