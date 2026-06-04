# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# MicrosoftGame.config additional reference

Feedback

Summarize this article for me

## Summary

This article describes additional details/reference material for the MicrosoftGame.config file. It includes the following sections.

Expand table

| Section | Description |
| --- | --- |
| [Element details](https://learn.microsoft.com/#MicrosoftGameConfig-Elements) | Provides a list of MicrosoftGame.config element names, purpose and notes. |
| [Sample MicrosoftGame.config file](https://learn.microsoft.com/#MicrosoftGameConfig-Example) | Provides an example MicrosoftGame.config for Xbox and PC. |
| [XSD Schema for MicrosoftGame.config](https://learn.microsoft.com/#XSD-Schema-id) | Provides details on the XSD Schema used to validate the MicrosoftGame.config. |
| [Previous Element reference](https://learn.microsoft.com/#MicrosoftGameConfig-OldElements) | Provides a list of elements of note that have changed, including references to changes from ERA. |
| [MicrosoftGame.config and DLC creation](https://learn.microsoft.com/#MicrosoftGameConfig-DLC) | Provides more information on creating a MicrosoftGame.config for a DLC product. |
| [See also](https://learn.microsoft.com/#MicrosoftGameConfig-SeeAlso) | Provides links to additional documentation related to MicrosoftGame.config. |

### Game configVersion details

As of the March 2022 Microsoft Game Development Kit (GDK), the Game configVersion has been updated from 0 to 1 for new MicrosoftGame.config files generated using Microsoft Game Development Kit (GDK) tools. As of the October 2023 GDK, all titles must use configVersion="1". Submission Validator will report a FAILURE for any titles submitting using the October 2023 GDK with configVersion="0".

The changes between Game configVersion 0 and 1 are as follows.

- MSAAppId and TitleId element are required if either is specified in the MicrosoftGame.config (i.e. if the TitleId is specified, the MSAAppId must also be specified).
- MSAAppId and TitleId element are required if NoCodePCRoot element is specified or AdvancedUserModel element is set to the value of false.
- ModFolder, EnableWritesToPackageRoot, DisableFilesystemWriteVirtualization, and DisableRegistryWriteVirtualization elements have now been deprecated with configVersion 1.

Which requirements, defined in the schema, will be run against a title is defined by this value in the MicrosoftGame.config:

```
<Game configVersion="1">
```

The Game configVersion allows for values of 0 and 1. These new requirements will not impact existing titles upgrading to the March 2022 Microsoft Game Development Kit (GDK) as their Game configVersion will remain set to 0.

### Element details

This section details the element name, if required, purpose, parent node, and additional notes for definable elements within the MicrosoftGame.config.

Expand table

| Node Name | Required | Purpose | Parent | Notes |
| --- | --- | --- | --- | --- |
| [Game](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-game?view=gdk-2604) | Required | Singular Parent Node that contains all other content | | |
| [Identity](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-identity?view=gdk-2604) | Required | Defines the title's Name, Publisher and Version | Game | Title information can be found in Partner Center under Product Management -> Product Identity; see [Setting up a game at Partner Center, for Managed Partners](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/portal-config/live-setup-partner-center-partners?view=gdk-2604). 
Used during registration to uniquely identify the title. 
Name and Publisher are required fields. 
Version will default to 1.0.0.0 if not specified. 
Additional packages for subsequent console generations must increment package major version beyond existing package versions. |
| [ShellVisuals](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-shellvisuals?view=gdk-2604) | Required for packaged build | Defines the title's Shell presence. For example, Images and Names. | Game | Used during registration to surface the title in the Shell. |
| [Resources](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-resources?view=gdk-2604) | Optional | List of Language Locale pairs used to localize Shell Visuals. | Game | May be copied and pasted from an existing AppxManifest as the format is retained. 
For more information, see [Packaging](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/gc-packaging-toc?view=gdk-2604). |
| [Resource](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-resource?view=gdk-2604) | Optional | An individual entry of a Language Locale in the Resources list. | Resources | |
| [ExecutableList](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-executablelist?view=gdk-2604) | Required | List of title executables. | Game | At least one entry is required to register or package the title successfully. 
The "IsDevOnly" attribute allows you to ensure this entry will not be included in a submission signed package. 
Overrides for Display Name and Logo allow unique values for this exe in the shell (The resources specified above in "ShellVisuals" node will be the default for each exe unless otherwise overridden here). |
| [Executable](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-executable?view=gdk-2604) | Required | Specifies the details of a specific executable. | ExecutableList | This section attributes include the name of the executable (Name), which device it's built for (TargetDeviceFamily), it's Application ID (Id), if it's a Development only executable (IsDevOnly), if the display name from the ShellVisuals node should be overridden (OverrideDisplayName), if the Logo from ShellVisuals node should be overridden (OverrideLogo), if the Square480x480Logo from ShellVisuals node should be overridden (OverrideSquare480x480Logo), if the Square44x44Logo from ShellVisuals node should be overridden (OverrideSquare44x44Logo), if the SplashScreenImage from ShellVisuals node should be overridden (OverrideSplashScreenImage), and if the executable has an alias (Alias (currently Desktop only). |
| [AdvancedUserModel](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-advancedusermodel?view=gdk-2604) | Optional | Specifies if Advanced User Model should be used for your title. | Game | This means your title supports the active user changing without requiring a restart. If disabled, then the simple user model is used which guarantees your title will always keep the active user that it was launched with. See [GDK User Models (NDA article)Authorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/user/gamecore-user-models?view=gdk-2604) for more information. |
| [Protocol](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-protocol?view=gdk-2604) | Optional | Custom protocol that can be used to launch the game or bring the game into the foreground if it were already running. | ProtocolList | Specifies both the name of the custom protocol as well as optionally the path to the executable. See [Protocol Activation](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/overviews/protocolactivation?view=gdk-2604) for more information. |
| [ProtocolList](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-protocol?view=gdk-2604) | Optional | Specifies a collection of custom protocols that can be used to launch the game or bring the game into the foreground if it were already running. | Game | Must supply at least one Protocol. See [Protocol Activation](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/overviews/protocolactivation?view=gdk-2604) for more information. |
| [GameOsVersion](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-gameosversion?view=gdk-2604) | Optional (Console only) | Specifies the version of the Microsoft Game Development Kit (GDK) Game OS that this title requires to run. | Game | Will use the currently running or default Game OS if not specified. |
| [WindowsOsVersion](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-windowsosversion?view=gdk-2604) | Optional (PC only) | Specifies the minimum and suggested versions of Windows that this title requires to run. | DesktopRegistration | Allowed values are a four part version number (i.e. 10.0.19045.3570) and options are RequiredMinimum="#.#.#.#", SuggestedMinimum="#.#.#.#" Recommended="#.#.#.#" This suggested minimum element will default to 10.0.19045.3570 |
| [MediaCapture](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-mediacapture?view=gdk-2604) | Optional (Console only) | Specifies the desired behavior for system Media Capture apps while this title is running. | Game | Media capture requires title identity to be configured to work properly. |
| [GameDVRSystemComponent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-gamedvrsystemcomponent?view=gdk-2604) | Optional (Console only) | Specifies if the Game DVR system component is enabled or not. | MediaCapture | |
| [BlockBroadcast](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-blockbroadcast?view=gdk-2604) | Optional (Console only) | Specifies if broadcasting the title should be blocked or allowed. | MediaCapture | |
| [BlockGameDVR](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-blockgamedvr?view=gdk-2604) | Optional (Console only) | Specifies if Game DVR recordings of the title should be blocked or allowed. | MediaCapture | |
| [StoreId](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-storeid?view=gdk-2604) | Optional | Specifies the store identity of this title. | Game | Specified in Partner Center under Product Management -> Product Identity. |
| [AllowedProducts](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-allowedproducts?view=gdk-2604) | Optional | Specifies the StoreId of the associated title or titles that this Downloadable Content Package (DLC) title belongs to. | Game | For more information, see [Downloadable Content Packages (DLCs)](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-downloadable-content-dlc?view=gdk-2604). |
| [AllowedProduct](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-allowedproduct?view=gdk-2604) | Optional | Specifies the StoreId of the associated title that this Downloadable Content Package (DLC) title belongs to. | AllowedProducts | |
| [RelatedProducts](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-relatedproducts?view=gdk-2604) | Optional | Specifies the StoreId of products to which this DLC title is related. | Game | For more information, see [Downloadable Content Packages (DLCs)](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-downloadable-content-dlc?view=gdk-2604). |
| [RelatedProduct](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-relatedproduct?view=gdk-2604) | Optional | A specific entry of a StoreId of products to which this DLC title is related. | RelatedProducts | |
| [TargetDeviceFamilyForDLC](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-targetdevicefamilyfordlc?view=gdk-2604) | Optional (DLC only) | Specifies the target platform the DLC package is built for. Allowed values are XboxOne, Scarlett, and PC | Game | |
| [PersistentLocalStorage](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-persistentlocalstorage?view=gdk-2604) | Optional (Console only) | Specifies the desired size of the titles Persistent Local Storage. | Game | Persistent local storage requires title identity to be configured to work properly. |
| [SizeMB](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-sizemb?view=gdk-2604) | Optional (Console only) | Specifies the minimum size in MB of Persistent Local Storage. | PersistentLocalStorage | Persistent local storage requires title identity to be configured to work properly. |
| [GrowableToMB](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-growabletomb?view=gdk-2604) | Optional (Console only) | Specifies the maximum size in MB the Persistent Local Storage can grow to over time. | PersistentLocalStorage | Persistent local storage requires title identity to be configured to work properly. |
| [VirtualMachine](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-virtualmachine?view=gdk-2604) | Optional (Console only) | Specifies the title memory allocation on specific Xbox One hardware. | Game | |
| [XboxOneXTitleMemory](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-xboxonextitlememory?view=gdk-2604) | Optional (Console only) | Specifies the title memory setting for Xbox One X consoles. | Virtual Machine | Allowed values of "Standard" or "Advanced". |
| [XboxLockhartTitleMemory](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-xboxlockharttitlememory?view=gdk-2604) | Optional (Console only) | Specifies the title memory setting for Xbox Series S consoles. | Virtual Machine | Allowed values of "Standard" or "Advanced". |
| [XboxAnacondaTitleMemory](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-xboxanacondatitlememory?view=gdk-2604) | Optional (Console only) | Specifies the title memory setting for Xbox Series X consoles. | Virtual Machine | Allowed values of "Standard" or "Advanced". |
| [SMTEnabled](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-smtenabled?view=gdk-2604) | Optional (Console only) | Specifies if SMT is enabled or not. | Virtual Machine | |
| [RequiresEraShim](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-requireserashim?view=gdk-2604) | Optional (Console only) | Specifies if Xbox One ERA Shim is required or not. | Virtual Machine | |
| [XboxCompatibility](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-xboxcompatibility?view=gdk-2604) | Optional (Console only) | Specifies the maximum console generation that the game is compatible with. | Virtual Machine | Developers would use this with an Xbox One title that is running in backward compatibility on Xbox Series X|S. The primary usage of this would be to get access to enhanced features such as extra memory. The allowed values are "XboxOne", which will behave like a normal backward compatible title, and "Scarlett", which will allow the backward compatible title to access enhanced features. |
| [DlcCompatibility](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-dlccompatibility?view=gdk-2604) | Optional (Console only) | Specifies the minimum console generation for DLC the game is compatible with. | Virtual Machine | Developers would use this with an Xbox One title that is running on an Xbox Series X|S console but wishes to load DLC packages built for Xbox One. This would allow the DLC to exist on any storage, not just fast storage. |
| [MSAFullTrust](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-msafulltrust?view=gdk-2604) | Optional (PC Desktop only) | Specifies if the Title is declared as "MSA Full Trust". | Game | This should not be used unless otherwise noted by your Account Manager. |
| [MSAAppId](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-msaappid?view=gdk-2604) | Required | Specifies the Titles MSA App ID, which is used with Xbox Live Title ID (as follows) for identity with Xbox Live services. | Game | As of the March 2022 Microsoft Game Development Kit (GDK), the MSAAppId element must be present if the TitleId element is specified. |
| [TitleId](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-titleid?view=gdk-2604) | Optional | Specifies the Titles Xbox Live Title ID, used for identity with Xbox Live services. | Game | As of the March 2022 Microsoft Game Development Kit (GDK), the TitleId element must be present if the MSAAppId element is specified. |
| [RequiresXboxLive](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-requiresxboxlive?view=gdk-2604) | Optional | Specifies if the title requires Xbox Live connectivity in order to run. | Game | |
| [ExtendedAttributeList](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-extendedattributelist?view=gdk-2604) | Optional | Fallback for additional attributes outside of existing elements. | Game | This should not be used unless otherwise noted by your Account Manager. |
| [ExtendedAttribute](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-extendedattribute?view=gdk-2604) | Optional | A specific fallback designation in the Extended Attribute List. | Game | This should not be used unless otherwise noted by your Account Manager. |
| [DesktopRegistration](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-desktopregistration?view=gdk-2604) | Optional (PC Desktop only) | Specifies attributes to use when registering the title on the PC desktop platform. | Game | |
| [ProcessorArchitecture](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-processorarchitecture?view=gdk-2604) | Optional (PC Desktop only) | Specifies the processor architecture that matches your game executables. | DesktopRegistration | Attribute examples for this element are x64 & x86. |
| [MainPackageDependency](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-mainpackagedependency?view=gdk-2604) | Optional (PC Desktop DLC only) | Specifies the identity of the base package to which your DLC belongs. | DesktopRegistration | |
| [DependencyList](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-dependencylist?view=gdk-2604) | Optional (PC Desktop only) | Determines which framework packages need to be installed before installing the title package. | DesktopRegistration | For more information on child element usage, click [here](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604#MGC-Dependency). |
| [KnownDependency](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-knowndependency?view=gdk-2604) | Optional (PC Desktop only) | Shortcut to specify one of the commonly used framework packages. | DependencyList | Attribute specification of name is required and MinVersion is set automatically. Refer to the ST\_KnownDependency section in the following schema for a list of possible shortcuts. |
| [Dependency](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-dependency?view=gdk-2604) | Optional (PC Desktop only) | Specific framework package and version that are required to be installed ahead of the title. | DependencyList | Attribute specification of name and MinVersion must be set. |
| [CustomInstallActions](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-custominstallactions?view=gdk-2604) | Optional (PC Desktop only) | Specifies a custom installer action with Administration privileges the first time your game runs. | DesktopRegistration | Any executable you specify must be located under the "Installers" folder in the base folder of your game. Don't include any other files in the Installers folder. |
| [Folder](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-folder?view=gdk-2604) | Optional (PC Desktop only) | Specifies the folder location of the Installers. | CustomInstallActions | |
| [InstallActionList](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-installactionlist?view=gdk-2604) | Optional (PC Desktop only) | Specifies a list of install actions, including the executable file, name and arguments. | CustomInstallActions | |
| [InstallAction](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-installaction?view=gdk-2604) | Optional (PC Desktop only) | Specifies an install action, within the Install Action List. | InstallActionList | Maximum of 100 entries. |
| [RepairActionList](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-repairactionlist?view=gdk-2604) | Optional (PC Desktop only) | Specifies a list of repair actions. | CustomInstallActions | |
| [RepairAction](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-repairaction?view=gdk-2604) | Optional (PC Desktop only) | Specifies a repair action, within the Repair Action List. | RepairActionList | Maximum of 100 entries. |
| [UninstallActionList](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-uninstallactionlist?view=gdk-2604) | Optional (PC Desktop only) | Specifies a list of uninstall actions. | CustomInstallActions | |
| [UninstallAction](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-uninstallaction?view=gdk-2604) | Optional (PC Desktop only) | Specifies an uninstall action, within the Uninstall Action List. | UninstallActionList | Maximum of 100 entries. |
| [ModFolder](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-modfolder?view=gdk-2604) | Optional (PC Desktop only) | Defines the location of end-user mods for your game files. | DesktopRegistration | This element is now deprecated as of the March 2022 Microsoft Game Development Kit (GDK). |
| [DisableRegistryWriteVirtualization](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-disableregistrywritevirtualization?view=gdk-2604) | Optional (PC Desktop only) | Set to true if your game must make operating system-wide registry writes. | DesktopRegistration | This element is now deprecated as of the March 2022 Microsoft Game Development Kit (GDK). |
| [DisableFilesystemWriteVirtualization](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-disablefilesystemwritevirtualization?view=gdk-2604) | Optional (PC Desktop only) | Set to true if your game must make operating system-wide file writes. | DesktopRegistration | This element is now deprecated as of the March 2022 Microsoft Game Development Kit (GDK). |
| [EnableWritesToPackageRoot](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-enablewritestopackageroot?view=gdk-2604) | Optional (PC Desktop only) | Set to true if your game needs to write to the package install location. | DesktopRegistration | This element is now deprecated as of the March 2022 Microsoft Game Development Kit (GDK). |
| [MultiplayerProtocol](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-multiplayerprotocol?view=gdk-2604) | Optional (PC Desktop only) | Allows for protocol activation within the title via "ms-xbl-multiplayer" protocol. | DesktopRegistration | Primarily used to enable Xbox Game Bar to launch games / multiplayer game invites. |
| [FileTypeAssociation](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-filetypeassociation?view=gdk-2604) | Optional (PC Desktop only) | Allows a file type to be associated with an executable in your package. | DesktopRegistration | An example would be a specific extension for a title's map editor. See [File Type Activation](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/overviews/filetypeactivation?view=gdk-2604) for more information. |
| [DisplayName](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-displayname?view=gdk-2604) | Optional (PC Desktop only) | Specifies a display name for the File Type Association. | FileTypeAssociation | |
| [Logo](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-logo?view=gdk-2604) | Optional (PC Desktop only) | Specifies a logo for the File Type Association. | FileTypeAssociation | |
| [InfoTip](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-infotip?view=gdk-2604) | Optional (PC Desktop only) | Specifies an Info Tip for the File Type Association. | FileTypeAssociation | |
| [EditFlags](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-editflags?view=gdk-2604) | Optional (PC Desktop only) | Specifies Edit Flags for the File Type Association. | FileTypeAssociation | |
| [SupportedFileTypes](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-supportedfiletypes?view=gdk-2604) | Optional (PC Desktop only) | Specifies the supported file types for the File Type Association. | FileTypeAssociation | See [File Type Activation](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/overviews/filetypeactivation?view=gdk-2604) for more information. |
| [FileType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-filetype?view=gdk-2604) | Optional (PC Desktop only) | Specifies a file type extension to be used as part of the SupportedFileTypes element. | SupportedFileTypes | See [File Type Activation](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/overviews/filetypeactivation?view=gdk-2604) for more information. |
| [NoCodePCRoot](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-nocodepcroot?view=gdk-2604) | Optional (PC Desktop only) | Specifies the local folder where Save Games are stored for use when no code cloud saves are enabled for the package. | SaveGameStorage | |
| [DevelopmentOnly](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-developmentonly?view=gdk-2604) | Optional (Console only) | A list of development-only properties. | Game | |
| [ContentIdOverride](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-contentidoverride?view=gdk-2604) | Optional (Console only) | An override, for development only, to a game's ContentID. | DevelopmentOnly | Utilize the _xbapp list /d /nosystem_ command, with a package installed, to get your title's ContentID. |
| [EKBIDOverride](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-ekbidoverride?view=gdk-2604) | Optional (Console only) | An override, for development only, to a game's EKBID (trial version ID). | DevelopmentOnly | Utilize the _xbapp list /d_ command, with a package installed, to get your title's EKBID. |
| [DebugNetworkPortList](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-debugnetworkportlist?view=gdk-2604) | Optional (Console only) | A list of additional ports to open for development on a Development Kit. | DevelopmentOnly | |
| [DebugNetworkPort](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-debugnetworkport?view=gdk-2604) | Optional (Console only) | Additional port to open for development on a dev kit. | DebugNetworkPortList | |

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604)

## Sample MicrosoftGame.config file

The following MicrosoftGame.config is an example config showing how elements are used for Xbox Series X|S (with comments on differences for Xbox One). For an example of a MicrosoftGame.config for PC, see [Getting Started with Packaging For PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-pc?view=gdk-2604).

```
<?xml version="1.0" encoding="utf-8"?>
<Game configVersion="1">
    
    <Identity Name="41336PublisherName.ExampleGame" Publisher="CN=A4954634-DF4B-47C7-AB70-D3215D246AF1" Version="1.6.0.0"/>
    
    <GameOsVersion>**REPLACE**</GameOsVersion>
    
    <MediaCapture>
        <GameDVRSystemComponent>true</GameDVRSystemComponent>
        <BlockBroadcast>0</BlockBroadcast>
        <BlockGameDVR>0</BlockGameDVR>
    </MediaCapture>
    
    <PersistentLocalStorage>
        <SizeMB>322</SizeMB>
    </PersistentLocalStorage>
    
    <MSAAppId>0000000000000000</MSAAppId>

    <TitleId>FFFFFFFF</TitleId>

    <StoreId>9NZTKMP36L8J</StoreId>
    
    <RelatedProducts>
        <RelatedProduct>9NZTKMP36L8J</RelatedProduct>
        <RelatedProduct>9NQJV5BMKR6C</RelatedProduct>
        <RelatedProduct>9PNX38847DWW</RelatedProduct>
    </RelatedProducts>
    
    <VirtualMachine>
        <XboxLockhartTitleMemory>Standard</XboxLockhartTitleMemory>
        <XboxAnacondaTitleMemory>Standard</XboxAnacondaTitleMemory>
        <!-- <XboxOneXTitleMemory>Standard</XboxOneXTitleMemory> if MicrosoftGame.config is for Xbox One instead of Xbox Series X&#124;S. -->
    </VirtualMachine>
    
    <MSAFullTrust>false</MSAFullTrust>
    
    <ExecutableList>
         <!-- TargetDeviceFamily="XboxOne" if the MicrosoftGame.config is for Xbox One instead of Xbox Series X&#124;S. -->
        <Executable Name="ExampleGame.exe"
            TargetDeviceFamily="Scarlett"
            Id="Game"
            IsDevOnly="false"
            OverrideDisplayName="Example Game"
            OverrideLogo="OverriddenLogo.png" />
        <Executable Name="ExampleGame_Debug.exe"
            IsDevOnly="true"/>
        <Executable Name="ExampleGame_Profile.exe"
            IsDevOnly="true" />
    </ExecutableList>
    
    <ShellVisuals DefaultDisplayName="Example Game"
        PublisherDisplayName="Example Publisher"
        StoreLogo="StoreLogoFile.png"
        Square150x150Logo="LogoFile150x150.png"
        Square44x44Logo="LogoFile44x44.png"
        Square480x480Logo="LogoFile480x480.png"
        Description="Example Game"
        ForegroundText="light"
        BackgroundColor="#ffffff"
        SplashScreenImage="SplashScreen.png"/>
    
    <Resources>
        <Resource Language="en-us"/>
        <Resource Language="de-de"/>
        <Resource Language="es-mx"/>
    </Resources>

    <DevelopmentOnly>
      <DebugNetworkPortList>
        <DebugNetworkPort>4600</DebugNetworkPort>
      </DebugNetworkPortList>
    </DevelopmentOnly>
</Game>
```

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604)

## XSD Schema for MicrosoftGame.config

The latest schema for the MicrosoftGame.config file is in the <install root>/bin folder of the Microsoft Game Development Kit (GDK) installation as GameConfigSchema.xsd.

See the following example of the GameConfigSchema.xsd:

```
<?xml version="1.0" encoding="utf-8"?>
<xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <!-- Types -->

    <xs:simpleType name="ST_NonEmptyString">
        <xs:restriction base="xs:string">
            <xs:minLength value="1"/>
            <xs:maxLength value="32767"/>
            <xs:pattern value="[^\s]|([^\s].*[^\s])"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_GUID">
        <xs:restriction base="ST_NonEmptyString">
            <xs:pattern value="[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_VersionQuad">
        <xs:restriction base="ST_NonEmptyString">
            <xs:pattern value="(0|[1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])(\.(0|[1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])){3}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_Hex8">
        <xs:restriction base="ST_NonEmptyString">
            <xs:pattern value="[0-9a-fA-F]{8}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_Hex16">
        <xs:restriction base="ST_NonEmptyString">
            <xs:pattern value="[0-9a-fA-F]{16}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_PLSSize">
        <xs:restriction base="xs:integer">
            <!-- The actual max is determined by policy -->
            <xs:maxInclusive value="100000"/>
            <xs:minInclusive value="10"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_GrowablePLSSize">
        <xs:restriction base="xs:integer">
            <xs:minInclusive value="10"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:complexType name="CT_PersistentLocalStorage">
        <xs:all>
            <xs:element name="SizeMB" type="ST_PLSSize" minOccurs="0" maxOccurs="1"/>
            <xs:element name="GrowableToMB" type="ST_GrowablePLSSize" minOccurs="0" maxOccurs="1"/>
        </xs:all>
    </xs:complexType>

    <xs:simpleType name="ST_FileNameCharSet">
        <xs:restriction base="ST_NonEmptyString">
            <xs:pattern value="[^&lt;&gt;&quot;:%\|\?\*\x01-\x1f]+"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_FileName">
        <xs:restriction base="ST_FileNameCharSet">
            <xs:pattern value="([^/\\]*[^./\\]+)(\\[^/\\]*[^./\\]+)*"/>
            <xs:pattern value="([^/\\]*[^./\\]+)(/[^/\\]*[^./\\]+)*"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_FileNameNoPath">
        <xs:restriction base="ST_FileName">
            <xs:pattern value="[^\\/]+"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_AsciiWindowsId">
        <xs:restriction base="ST_NonEmptyString">
            <xs:pattern value="([A-Za-z][A-Za-z0-9]*)(\.[A-Za-z][A-Za-z0-9]*)*"/>
            <xs:maxLength value="255"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_DeviceFamily">
        <xs:restriction base="xs:string">
            <xs:enumeration value="XboxOne"/>
            <xs:enumeration value="Scarlett"/>
            <xs:enumeration value="PC"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_ApplicationId">
        <xs:restriction base="ST_AsciiWindowsId">
            <xs:maxLength value="64"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_StoreId">
        <xs:restriction base="xs:string">
            <xs:minLength value="12"/>
            <xs:maxLength value="12"/>
            <xs:pattern value="[0-9bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]{12}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_Executable">
        <xs:restriction base="ST_FileName">
            <xs:pattern value=".+\.([Ee][Xx][Ee])"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_ExecutableNoPath">
        <xs:restriction base="ST_FileName">
            <xs:pattern value="[^\\]+\.([Ee][Xx][Ee])"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_ImageFile">
        <xs:restriction base="ST_FileName">
            <xs:pattern value=".+\.(png)"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_ResourceReference">
        <xs:restriction base="ST_NonEmptyString">
            <xs:pattern value="\bms-resource:.{1,256}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_DisplayName">
        <xs:union memberTypes="ST_ResourceReference">
            <xs:simpleType>
                <xs:restriction base="ST_NonEmptyString">
                    <xs:maxLength value="256"/>
                </xs:restriction>
            </xs:simpleType>
        </xs:union>
    </xs:simpleType>

    <xs:simpleType name="ST_Description">
        <xs:restriction base="ST_NonEmptyString">
            <xs:pattern value="[^\x01-\x1f]+"/>
            <xs:maxLength value="2048"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_ForegroundText">
        <xs:restriction base="xs:string">
            <xs:enumeration value="light"/>
            <xs:enumeration value="dark"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_Color">
        <xs:restriction base="xs:string">
            <xs:pattern value="#[\da-fA-F]{6}"/>
            <xs:pattern value="aliceBlue|antiqueWhite|aqua|aquamarine|azure|beige|bisque|black|blanchedAlmond|blue|blueViolet|brown|burlyWood"/>
            <xs:pattern value="cadetBlue|chartreuse|chocolate|coral|cornflowerBlue|cornsilk|crimson|cyan|darkBlue|darkCyan|darkGoldenrod|darkGray"/>
            <xs:pattern value="darkGreen|darkKhaki|darkMagenta|darkOliveGreen|darkOrange|darkOrchid|darkRed|darkSalmon|darkSeaGreen|darkSlateBlue"/>
            <xs:pattern value="darkSlateGray|darkTurquoise|darkViolet|deepPink|deepSkyBlue|dimGray|dodgerBlue|firebrick|floralWhite|forestGreen"/>
            <xs:pattern value="fuchsia|gainsboro|ghostWhite|gold|goldenrod|gray|green|greenYellow|honeydew|hotPink|indianRed|indigo|ivory"/>
            <xs:pattern value="khaki|lavender|lavenderBlush|lawnGreen|lemonChiffon|lightBlue|lightCoral|lightCyan|lightGoldenrodYellow|lightGreen"/>
            <xs:pattern value="lightGray|lightPink|lightSalmon|lightSeaGreen|lightSkyBlue|lightSlateGray|lightSteelBlue|lightYellow|lime|limeGreen"/>
            <xs:pattern value="linen|magenta|maroon|mediumAquamarine|mediumBlue|mediumOrchid|mediumPurple|mediumSeaGreen|mediumSlateBlue|mediumSpringGreen"/>
            <xs:pattern value="mediumTurquoise|mediumVioletRed|midnightBlue|mintCream|mistyRose|moccasin|navajoWhite|navy|oldLace|olive|oliveDrab"/>
            <xs:pattern value="orange|orangeRed|orchid|paleGoldenrod|paleGreen|paleTurquoise|paleVioletRed|papayaWhip|peachPuff|peru|pink|plum"/>
            <xs:pattern value="powderBlue|purple|red|rosyBrown|royalBlue|saddleBrown|salmon|sandyBrown|seaGreen|seaShell|sienna|silver|skyBlue"/>
            <xs:pattern value="slateBlue|slateGray|snow|springGreen|steelBlue|tan|teal|thistle|tomato|transparent|turquoise|violet|wheat|white"/>
            <xs:pattern value="whiteSmoke|yellow|yellowGreen"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:complexType name="CT_Resources">
        <xs:sequence>
            <xs:element name="Resource" maxOccurs="200" minOccurs="0" >
                <xs:complexType>
                    <xs:attribute name="Language" type="xs:language" use="required"/>
                </xs:complexType>
            </xs:element>
        </xs:sequence>
    </xs:complexType>

     <xs:complexType name="CT_Identity">
        <xs:attribute name="Name" type="ST_PackageName" use="required"/>
        <xs:attribute name="Publisher" type="ST_Publisher" use="required"/>
        <xs:attribute name="ResourceId" type="ST_ResourceId" use="optional"/>
        <xs:attribute name="Version" type="ST_VersionQuad" use="optional"/>
    </xs:complexType>

    <xs:complexType name="CT_ShellVisuals">
        <xs:attribute name="DefaultDisplayName" type="ST_DisplayName" use="optional"/>
        <xs:attribute name="PublisherDisplayName" type="ST_DisplayName" use="optional"/>
        <xs:attribute name="StoreLogo" type="ST_ImageFile" use="optional"/>
        <xs:attribute name="Square150x150Logo" type="ST_ImageFile" use="optional"/>
        <xs:attribute name="Square44x44Logo" type="ST_ImageFile" use="optional"/>
        <xs:attribute name="Square480x480Logo" type="ST_ImageFile" use="optional"/>
        <xs:attribute name="Description" type="ST_Description" use="optional"/>
        <xs:attribute name="ForegroundText" type="ST_ForegroundText" use="optional"/>
        <xs:attribute name="BackgroundColor" type="ST_Color" use="optional"/>
        <xs:attribute name="SplashScreenImage" type="ST_ImageFile" use="optional"/>
    </xs:complexType>

    <xs:simpleType name="ST_MemoryConfig">
        <xs:restriction base="xs:string">
            <xs:enumeration value="Standard"/>
            <xs:enumeration value="Advanced"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_ConsoleGeneration">
        <xs:restriction base="xs:string">
            <xs:enumeration value="XboxOne"/>
            <xs:enumeration value="Scarlett"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:complexType name="CT_VirtualMachine">
        <xs:all>
            <xs:element name="XboxOneXTitleMemory" type="ST_MemoryConfig" minOccurs="0"/>
            <xs:element name="XboxAnacondaTitleMemory" type="ST_MemoryConfig" minOccurs="0"/>
            <xs:element name="SMTEnabled" type="xs:boolean" minOccurs="0"/>
            <xs:element name="RequiresEraShim" type="xs:boolean" minOccurs="0"/>
            <xs:element name="XboxCompatibility" type="ST_ConsoleGeneration" minOccurs="0"/>
            <xs:element name="DlcCompatibility" type="ST_ConsoleGeneration" minOccurs="0"/>
            <xs:element name="XboxLockhartTitleMemory" type="ST_MemoryConfig" minOccurs="0"/>
        </xs:all>
    </xs:complexType>

    <xs:complexType name="CT_DesktopRegistration">
        <xs:sequence minOccurs="0" maxOccurs="unbounded">
            <xs:element name="ProcessorArchitecture" type="ST_ProcessorArchitecture" minOccurs="0"/>
            <xs:element name="MainPackageDependency " minOccurs="0">
                <xs:complexType>
                    <xs:attribute name="Name" type="ST_PackageName"/>
                </xs:complexType>
            </xs:element>
            <xs:element name="DependencyList" type="CT_DependencyList" minOccurs="0"/>
            <xs:element name="CustomInstallActions" type="CT_CustomInstallActions" minOccurs="0"/>
            <xs:element name="ModFolder" minOccurs="0">
                <xs:complexType>
                    <xs:attribute name="Name" type="ST_FileNameNoPath" use="optional"/>
                </xs:complexType>
            </xs:element>
            <xs:element name="DisableRegistryWriteVirtualization" type="xs:boolean" minOccurs="0"/>
            <xs:element name="DisableFilesystemWriteVirtualization" type="xs:boolean" minOccurs="0"/>
            <xs:element name="EnableWritesToPackageRoot" type="xs:boolean" minOccurs="0"/>
            <xs:element name="MultiplayerProtocol" minOccurs="0">
                <xs:complexType>
                    <xs:simpleContent>
                        <xs:extension base="xs:boolean">
                            <xs:attribute name="Executable" type="ST_Executable"  use="optional"/>
                        </xs:extension>
                    </xs:simpleContent>
                </xs:complexType>
            </xs:element>
            <xs:element name="FileTypeAssociation" type="CT_FileTypeAssociation" minOccurs="0" maxOccurs="100"/>
        </xs:sequence>
    </xs:complexType>

    <xs:simpleType name="ST_KnownDependency">
        <xs:restriction base="xs:string">
            <xs:enumeration value="DX11"/>
            <xs:enumeration value="VC11"/>
            <xs:enumeration value="VC12"/>
            <xs:enumeration value="VC14"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_ProcessorArchitecture">
        <xs:restriction base="xs:string">
            <xs:enumeration value="x64"/>
            <xs:enumeration value="x86"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:complexType name="CT_DependencyList">
        <xs:sequence maxOccurs="128" minOccurs="0">
            <xs:element name="KnownDependency" minOccurs="0">
                <xs:complexType>
                    <xs:attribute name="Name" type="ST_KnownDependency" use="required"/>
                </xs:complexType>
            </xs:element>
            <xs:element name="Dependency" minOccurs="0">
                <xs:complexType>
                    <xs:attribute name="Name" type="ST_PackageName" use="required"/>
                    <xs:attribute name="MinVersion" type="ST_VersionQuad" use="required"/>
                </xs:complexType>
            </xs:element>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="CT_CustomInstallAction">
        <xs:attribute name="File" type="ST_FileName" use="required"/>
        <xs:attribute name="Name" type="ST_NonEmptyString" use="required"/>
        <xs:attribute name="Arguments" type="ST_NonEmptyString" />
    </xs:complexType>

    <xs:complexType name="CT_InstallActionList">
        <xs:sequence maxOccurs="100" minOccurs="0">
            <xs:element name="InstallAction" type="CT_CustomInstallAction" />
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="CT_RepairActionList">
        <xs:sequence maxOccurs="100" minOccurs="0">
            <xs:element name="RepairAction" type="CT_CustomInstallAction" />
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="CT_UninstallActionList">
        <xs:sequence maxOccurs="100" minOccurs="0">
            <xs:element name="UninstallAction" type="CT_CustomInstallAction" />
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="CT_CustomInstallActions">
        <xs:all>
            <xs:element name="Folder" type="ST_FileName" minOccurs="1"/>
            <xs:element name="InstallActionList" type="CT_InstallActionList" minOccurs="0"/>
            <xs:element name="RepairActionList" type="CT_RepairActionList" minOccurs="0"/>
            <xs:element name="UninstallActionList" type="CT_UninstallActionList" minOccurs="0"/>
        </xs:all>
    </xs:complexType>

    <xs:complexType name="CT_ExecutableList">
        <xs:sequence maxOccurs="unbounded" minOccurs="0">
            <xs:element name="Executable">
                <xs:complexType>
                    <xs:attribute name="Name" type="ST_Executable" use="required"/>
                    <xs:attribute name="TargetDeviceFamily" type="ST_DeviceFamily" use="optional"/>
                    <xs:attribute name="Id" type="ST_ApplicationId" use="optional"/>
                    <xs:attribute name="IsDevOnly" type="xs:boolean" use="optional"/>
                    <xs:attribute name="OverrideDisplayName" type="ST_DisplayName" use="optional"/>
                    <xs:attribute name="OverrideLogo" type="ST_ImageFile" use="optional"/>
                    <xs:attribute name="OverrideSquare480x480Logo" type="ST_ImageFile" use="optional"/>
                    <xs:attribute name="OverrideSquare44x44Logo" type="ST_ImageFile" use="optional"/>
                    <xs:attribute name="OverrideSplashScreenImage" type="ST_ImageFile" use="optional"/>
                    <xs:attribute name="Alias" type="ST_ExecutableNoPath" use="optional"/>
                </xs:complexType>
            </xs:element>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="CT_AllowedProductsList">
        <xs:sequence maxOccurs="unbounded" minOccurs="0">
            <xs:element name="AllowedProduct" type="ST_StoreId"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="CT_ExtendedAttributeList">
        <xs:sequence maxOccurs="unbounded" minOccurs="0">
            <xs:element name="ExtendedAttribute">
                <xs:complexType>
                    <xs:attribute name="Name" type="ST_NonEmptyString" use="optional"/>
                    <xs:attribute name="Value" type="ST_NonEmptyString" use="optional"/>
                </xs:complexType>
            </xs:element>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="CT_RelatedProductsList">
        <xs:sequence maxOccurs="unbounded" minOccurs="0">
            <xs:element name="RelatedProduct" type="ST_StoreId"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="CT_MediaCapture">
        <xs:all>
            <xs:element name="GameDVRSystemComponent" type="xs:boolean" minOccurs="0"/>
            <xs:element name="BlockBroadcast" type="xs:boolean" minOccurs="0"/>
            <xs:element name="BlockGameDVR" type="xs:boolean" minOccurs="0"/>
        </xs:all>
    </xs:complexType>

    <xs:simpleType name="ST_AllowedAsciiCharSet">
        <xs:restriction base="ST_NonEmptyString">
            <xs:pattern value="[-_. A-Za-z0-9]+"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_AsciiIdentifier">
        <xs:restriction base="ST_AllowedAsciiCharSet">
            <xs:pattern value="[^_ ]+"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_PackageName">
        <xs:restriction base="ST_AsciiIdentifier">
            <xs:minLength value="3"/>
            <xs:maxLength value="50"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_DistinguishedName">
        <xs:restriction base="ST_NonEmptyString">
            <xs:pattern value="(CN|L|O|OU|E|C|S|STREET|T|G|I|SN|DC|SERIALNUMBER|(OID\.(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))+))=(([^,+=&quot;&lt;&gt;#;])+|&quot;.*&quot;)(, ((CN|L|O|OU|E|C|S|STREET|T|G|I|SN|DC|SERIALNUMBER|(OID\.(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))+))=(([^,+=&quot;&lt;&gt;#;])+|&quot;.*&quot;)))*"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_Publisher">
        <xs:restriction base="ST_DistinguishedName">
            <xs:maxLength value="8192"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_ResourceId">
        <xs:restriction base="ST_AsciiIdentifier">
            <xs:maxLength value="30"/>
        </xs:restriction>
  </xs:simpleType>

    <xs:simpleType name="ST_Port">
        <xs:restriction base="ST_NonEmptyString">
            <xs:pattern value="[1-9][0-9]{0,4}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:complexType name="CT_DebugNetworkPortList">
        <xs:sequence maxOccurs="unbounded" minOccurs="0">
            <xs:element name="DebugNetworkPort" type="ST_Port"/>
        </xs:sequence>
    </xs:complexType>

    <xs:complexType name="CT_DevelopmentOnly">
      <xs:all>
        <xs:element name="ContentIdOverride" type="ST_GUID" minOccurs="0"/>
        <xs:element name="EKBIDOverride" type="ST_GUID" minOccurs="0"/>
        <xs:element name="DebugNetworkPortList" type="CT_DebugNetworkPortList" minOccurs="0"/>
      </xs:all>
    </xs:complexType>

    <xs:simpleType name="ST_FTAInfoTip">
        <xs:restriction base="ST_NonEmptyString">
            <xs:maxLength value="1024"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_ContentTypeCharSet">
        <xs:restriction base="ST_NonEmptyString">
            <xs:pattern value="[!#$%&amp;'*+-.^_`|~0-9a-z/]*"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_ContentType">
        <xs:restriction base="ST_ContentTypeCharSet">
            <xs:pattern value="[^/]{1,127}/[^/]{1,127}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_FileType">
        <xs:restriction base="ST_FileNameCharSet">
            <xs:pattern value="\.[^.\\]+"/>
            <xs:maxLength value="64"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:complexType name="CT_FTASupportedFileTypes">
        <xs:sequence>
            <xs:element name="FileType" maxOccurs="1000" >
                <xs:complexType>
                    <xs:simpleContent>
                        <xs:extension base="ST_FileType">
                            <xs:attribute name="ContentType" type="ST_ContentType" use="optional"/>
                        </xs:extension>
                    </xs:simpleContent>
                </xs:complexType>
            </xs:element>
        </xs:sequence>
    </xs:complexType>

    <xs:simpleType name="ST_FTAName">
        <xs:restriction base="ST_AllowedAsciiCharSet">
            <xs:pattern value="[^ A-Z]+"/>
            <xs:maxLength value="100"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:complexType name="CT_FileTypeAssociation">
        <xs:all>
            <xs:element name="DisplayName" type="ST_DisplayName" minOccurs="0"/>
            <xs:element name="Logo" type="ST_ImageFile" minOccurs="0"/>
            <xs:element name="InfoTip" type="ST_FTAInfoTip" minOccurs="0"/>
            <xs:element name="EditFlags" minOccurs="0">
                <xs:complexType>
                    <xs:attribute name="OpenIsSafe" type="xs:boolean" use="optional"/>
                    <xs:attribute name="AlwaysUnsafe" type="xs:boolean" use="optional"/>
                </xs:complexType>
            </xs:element>
            <xs:element name="SupportedFileTypes" type="CT_FTASupportedFileTypes"/>
        </xs:all>
        <xs:attribute name="Name" type="ST_FTAName" use="required"/>
        <xs:attribute name="Executable" type="ST_Executable"  use="optional"/>
    </xs:complexType>

    <xs:simpleType name="ST_GameSaveNoCodePcRootRelativeLocation">
        <xs:restriction base="xs:string">
            <xs:enumeration value="AppData"/>
            <xs:enumeration value="Public"/>
            <xs:enumeration value="LocalAppData"/>
            <xs:enumeration value="LocalAppDataLow"/>
            <xs:enumeration value="ProgramData"/>
            <xs:enumeration value="SavedGames"/>
            <xs:enumeration value="UserProfile"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="ST_GameSaveUserQuotaSize">
        <xs:restriction base="xs:integer">
            <xs:maxInclusive value="4096"/>
            <xs:minInclusive value="256"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:complexType name="CT_SaveGameStorage">
        <xs:all>
            <xs:element name="NoCodePCRoot" minOccurs="0">
                <xs:complexType>
                    <xs:simpleContent>
                        <xs:extension base="ST_FileName">
                            <xs:attribute name="RelativeTo" type="ST_GameSaveNoCodePcRootRelativeLocation" use="required"/>
                        </xs:extension>
                    </xs:simpleContent>
                </xs:complexType>
            </xs:element>
            <xs:element name="SCID" type="ST_GUID" minOccurs="0"/>
            <xs:element name="MaxUserQuota" type="ST_GameSaveUserQuotaSize" minOccurs="0"/>
        </xs:all>
    </xs:complexType>

    <!-- Root -->
    <xs:element name="Game">
        <xs:complexType>
            <xs:all>
                <xs:element name="Identity" type="CT_Identity" />
                <xs:element name="ShellVisuals" type="CT_ShellVisuals" minOccurs="0"/>
                <xs:element name="Resources" type="CT_Resources" minOccurs="0"/>
                <xs:element name="ExecutableList" type="CT_ExecutableList" minOccurs="0"/>
                <xs:element name="GameOsVersion" type="ST_VersionQuad" minOccurs="0"/>
                <xs:element name="MediaCapture" type="CT_MediaCapture" minOccurs="0"/>
                <xs:element name="StoreId" type="ST_StoreId" minOccurs="0" />
                <xs:element name="TargetDeviceFamilyForDLC" type="ST_DeviceFamily" minOccurs="0"/>
                <xs:element name="AllowedProducts" type="CT_AllowedProductsList" minOccurs="0"/>
                <xs:element name="RelatedProducts" type="CT_RelatedProductsList" minOccurs="0"/>
                <xs:element name="PersistentLocalStorage" type="CT_PersistentLocalStorage" minOccurs="0"/>
                <xs:element name="VirtualMachine" type="CT_VirtualMachine" minOccurs="0"/>
                <xs:element name="MSAFullTrust" type="xs:boolean" minOccurs="0"/>
                <xs:element name="MSAAppId" type="ST_NonEmptyString" minOccurs="0"/>
                <xs:element name="TitleId" type="ST_Hex8" minOccurs="0"/>
                <xs:element name="RequiresXboxLive" type="xs:boolean" minOccurs="0"/>
                <xs:element name="ExtendedAttributeList" type="CT_ExtendedAttributeList" minOccurs="0"/>
                <xs:element name="DesktopRegistration" type="CT_DesktopRegistration" minOccurs="0"/>
                <xs:element name="DevelopmentOnly" type="CT_DevelopmentOnly" minOccurs="0"/>
                <xs:element name="AdvancedUserModel" type="xs:boolean" default="true" minOccurs="0" maxOccurs="1" />
                <xs:element name="SaveGameStorage" type="CT_SaveGameStorage" minOccurs="0"/>
            </xs:all>
            <xs:attribute name="configVersion" use="required">
                <xs:simpleType>
                    <xs:restriction base="xs:integer">
                        <xs:maxInclusive value="1"/>
                    </xs:restriction>
                </xs:simpleType>
            </xs:attribute>
        </xs:complexType>
        <xs:unique name="Resource_Language">
            <xs:selector xpath="Resources/Resource"/>
            <xs:field xpath="@Language"/>
        </xs:unique>
    </xs:element>
</xs:schema>
```

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604)

## Previous Element reference

- PrimaryServiceConfig was an element used in Xbox One ERA AppxManifest.xml to define SCID calls. This is now defined in code and configured in DevCenter.
- VisualElements was an element used in Xbox One ERA AppxManifest.xml to define Store logos and other visual aspects of the title. This is now defined in ShellVisuals.
- GpuAvailability was an element used in Xbox One ERA AppxManifest.xml to define GPU availability. This is now done automatically as all Microsoft Game Development Kit (GDK) titles automatically get variable settings (as much GPU as possible).
- ConnectedStorageQuota was an element used in Xbox One ERA AppxManifest.xml to define connected storage size. This is now determined by a server-side setting.
- LicenseOverrides was an element used in Xbox One ERA debug\_licensing\_overrides.xml to define overrides for ContentID, ProductID, and EKBID. This is now managed in the MicrosoftGame.config directly with the ContentIDOverride, StoreId, and EKBIDOverride elements.
- NetworkManifest elements were defined in a previous version of MicrosoftGame.config. These are now done through existing Networking APIs with the exception of the DebugNetworkPortList elements.
- XboxOneTitleMemoryMaxMB & XboxOneXTitleMemoryMaxMB was an element used in a previous version of MicrosoftGame.config. The XboxOneTitleMemoryMaxMB is no longer configurable and the Xbox One X and Xbox Series S|X elements for Title Memory configuration are now XboxOneXTitleMemory, XboxLockhartTitleMemory, and XboxAnacondaTitleMemory.
- packageWriteRedirectionCompatibilityShim was previously an ExtendedAttribute value to enable this functionality ahead of the May 2020 GDK. As of the May 2020 GDK, this is now tracked as its own element, EnableWritesToPackageRoot.

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604)

## Restricted Capabilities Configuration

In the Microsoft Game Development Kit (GDK), restricted capabilities are configured via MicrosoftGame.config elements. A mapping of commonly used capabilities is as follows.

- runFullTrust capability is configured to be enabled by default.
- customInstallActions capability is configured by the CustomInstallActions element.

Restricted Capabilities require emailing your Account Manager to ensure permissions for these are enabled (this is required in addition to properly updating your MicrosoftGame.config). For more information on these capabilities and how to configure your MicrosoftGame.config to use them in your PC game, see [Getting started with packaging titles for PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-pc?view=gdk-2604).

## MicrosoftGame.config as part of DLC package creation

For more information on how to generate a MicrosoftGame.config for a DLC package, see [Downloadable content (DLC) packages](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-downloadable-content-dlc?view=gdk-2604).

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604)

## See also

[MicrosoftGame.config Element Reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc?view=gdk-2604) 
[MicrosoftGame.Config](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-toc?view=gdk-2604) 
[MicrosoftGame.Config Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604) 
[MicrosoftGame.Config Localization](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-localization?view=gdk-2604) 
[Overview of packaging](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging?view=gdk-2604) 
[PC Bootstrapper](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-pc-bootstrapper?view=gdk-2604)

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