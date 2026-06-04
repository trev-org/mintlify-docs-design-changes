# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Application Management (wdapp.exe)

Feedback

Summarize this article for me

Application Management (wdapp.exe) is a command-line tool that installs and launches PC Microsoft Game Development Kit (GDK) titles. You can install and test both MSIXVC and MSIXVC2 packages with the `wdapp install` command.

Important

wdapp requires **Developer Mode** to be enabled in Windows Settings. If Developer Mode is not enabled, the tool will return an error. To enable it, go to **Settings > For developers** and toggle **Developer Mode** on.

wdapp provides the following subcommands.

Expand table

| Command | Description |
| --- | --- |
| [wdapp ids](https://learn.microsoft.com/#wdapp_ids) | Displays details about package and application identifiers. |
| [wdapp launch](https://learn.microsoft.com/#wdapp_launch) | Launches an application by AUMID or executable path. |
| [wdapp terminate](https://learn.microsoft.com/#wdapp_terminate) | Terminates the specified package. This only works for MSIXVC installed packages. |
| [wdapp list](https://learn.microsoft.com/#wdapp_list) | Lists all sideloaded applications on the PC. |
| [wdapp listdlc](https://learn.microsoft.com/#wdapp_listdlc) | Lists all installed and deployed downloadable-content packages. |
| [wdapp gamefolder](https://learn.microsoft.com/#wdapp_gamefolder) | Queries or sets the install folder for a drive. |
| [wdapp update](https://learn.microsoft.com/#wdapp_update) | Streams a packaged build update from a network share or local system file path. |
| [wdapp install](https://learn.microsoft.com/#wdapp_install) | Installs an application package created with [makepkg](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604) through streaming installation. |
| [wdapp register](https://learn.microsoft.com/#wdapp_register) | Registers the application in the specified folder. |
| [wdapp uninstall](https://learn.microsoft.com/#wdapp_uninstall) | Terminates and deregisters all the processes in the package. |
| [wdapp unregister](https://learn.microsoft.com/#wdapp_unregister) | Unregisters an application. |
| [wdapp migrate](https://learn.microsoft.com/#wdapp_migrate) | Migrates an MSIXVC install to Flat File Install format. |
| [wdapp feedback](https://learn.microsoft.com/#wdapp_feedback) | Opens the Feedback Hub to report a bug or suggestion. |

## Deploying, installing, updating, listing, and removing applications

### wdapp ids

Displays details about package and application identifiers, including the Package Family Name (PFN) and Application User Model ID (AUMID). This is useful for debugging package identity issues.

Expand table

| **wdapp ids** |
| --- |

This command takes no arguments. It prints information about identifiers used by other wdapp commands such as `launch` and `terminate`.

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

### wdapp launch

Launches an application by AUMID or executable path.

Expand table

| **wdapp launch** _AUMID_ | _Executable_ |
| --- |

Expand table

| 
Option

 | 

Description

 |
| --- | --- |
| _AUMID_ | Specifies the AUMID of the application to launch. Use either the AUMID or the Executable option, but not both. |
| _Executable_ | Specifies the path to the executable of the application to launch. Use either the AUMID or the Executable option, but not both. |
| _WaitToExit_ | Blocks until the title exits, then returns the title's exit code. |
| _log_ | Redirects stdout and stderr to files on the scratch drive. If no prefix is specified, files are named latest\_stdout.txt and latest\_stderr.txt. The prefix is truncated if longer than 32 characters. |
| _show all | launchResult | terminateResult | targetTerminateReason | exitCode_ | _all_ - Shows all results. 
 
_launchResult_ - The reason the game failed to launch. If this is S\_OK, the game launched successfully. 
 
_terminateResult_ - The reason the terminated state was reached. If this is S\_OK, termination was reached gracefully through proper Process Lifetime Management (PLM) flow. 
 
_targetTerminateReason_ - If available, why termination was targeted. Otherwise, S\_FALSE. 
 
_exitCode_ - The exit code returned by the game on process exit. Controls what is shown when the game exits while using the WaitToExit argument. |

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

### wdapp terminate

Terminates the specified package. This only works for MSIXVC installed packages.

Expand table

| **wdapp terminate** _AUMID_ | _PackageFullName_ |
| --- |

Expand table

| 
Option

 | 

Description

 |
| --- | --- |
| _AUMID_ | Specifies the AUMID (AppUserModelId) of the application to terminate. Use either the AUMID or the PackageFullName option, but not both. |
| _PackageFullName_ | Specifies the PackageFullName of the application to terminate. Use either the AUMID or the PackageFullName option, but not both. |

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

### wdapp list

Lists all sideloaded applications on the PC.

Expand table

| **wdapp list** |
| --- |

Expand table

| 
Option

 | 

Description

 |
| --- | --- |
| /d | Provides detailed information about the listed packages. |
| /json | Formats the response in JSON. |
| /includeStore | Includes packages installed from the Microsoft Store or Xbox App in the results. By default, only sideloaded development packages are shown. |

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

### wdapp listdlc

Lists all installed and deployed downloadable-content packages.

Expand table

| **wdapp listdlc** |
| --- |

Expand table

| 
Option

 | Description |
| --- | --- |
| /d | Provides detailed information about the listed DLC packages. |
| /json | Formats the response in JSON. |
| /includeStore | Includes DLC packages installed from the Microsoft Store or Xbox App in the results. By default, only sideloaded development DLC packages are shown. |

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

### wdapp gamefolder

Expand table

| **wdapp gamefolder** _<DriveLetter>:_ \[/set <FolderPath>\] |
| --- |

Expand table

| 
Option

 | 

Description

 |
| --- | --- |
| _<DriveLetter>:_ | Specifies the target drive the streaming install happens on. Defaults to OS drive in a root folder called XboxGames. |
| /set | Sets up the streaming install folder for the drive specified in <DriveLetter>. Defaults to XboxGames. |

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

### wdapp update

Expand table

| **wdapp update** _packagepath_ \[/l|/AllChunks\] \[/b\] \[/a\] \[/m\] \[/ContentTypes=\[semicolon-delimited specifier list\]\] \[/Languages=\[semicolon-delimited specifier list\]\] \[/Devices=\[semicolon-delimited specifier list\]\] \[/Tags=\[semicolon-delimited specifier list\]\] \[/Recipes=\[semicolon-delimited specifier list\]\] \[/Features=\[semicolon-delimited specifier list\]\] |
| --- |

Expand table

| 
Option

 | 

Description

 |
| --- | --- |
| _packagepath_ | Specifies the path to the package file that's used for the update. |
| /l | Specifies that the update stops after the launch chunk is received. |
| /AllChunks | Forcefully installs all chunks, even if they're unchanged. |
| /b | Specifies whether the update is allowed to go backward to a previous version. |
| /a | Registers the update as available. |
| /m | Registers the update as mandatory. |
| /ContentTypes=\[semicolon-delimited specifier list\] | Sets which content types to update by default. |
| /Languages=\[semicolon-delimited specifier list\] | Sets which languages to update by default. |
| /Devices=\[semicolon-delimited specifier list\] | Sets which devices to update by default. |
| /Tags=\[semicolon-delimited specifier list\] | Sets which tags to update by default. Use '/Tags=' to clear all tags. |
| /Recipes=\[semicolon-delimited specifier list\] | Sets which recipes to update by default. Can't be used with /Tags. |
| /Features=\[semicolon-delimited specifier list\] | Sets which features to update by default. Can't be used with /Tags. |

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

### wdapp install

Installs an application package created with [makepkg](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604) through streaming installation.

The **install** command mirrors the streaming installation process that occurs when an application is installed on a retail PC.

For more information about testing streaming installation packages, see [Streaming Installation and Intelligent Delivery: an overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/streaming_install-intelligent_delivery?view=gdk-2604).

Expand table

| **wdapp install** \[/l|/AllChunks\] \[/bootstrapper\] \[/drive=\[drive letter\]\] \[ /ContentTypes=\[semicolon-delimited specifier list\]\] \[/Languages=\[semicolon-delimited specifier list\]\] \[/Devices=\[semicolon-delimited specifier list\]\] \[/Tags=\[semicolon-delimited specifier list\]\] \[/Drive \[Optional\]\] \[/tm\] \[/l\] \[/v\] \[/w\]\] _{ packagepath | packageURI }_ |
| --- |

Expand table

| Option | Description |
| --- | --- |
| /bootstrapper | Invokes the [PC Bootstrapper](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-pc-bootstrapper?view=gdk-2604) when the game launches. The title runs as if it were a standard retail install, with the PC Bootstrapper invoked before the application runs any code. The application appears as a child process of the PC Bootstrapper. If this flag isn't set, prerequisite checks are invoked when the applicable runtime calls are made (for example, XUserAddAsync for sign-in validation). |
| /Features=\[semicolon-delimited list of Features\] | Specifies which features to install by default. Can't be used with /Tags. |
| /Recipes=\[semicolon-delimited list of Recipes\] | Specifies which recipes to install by default. Can't be used with /Tags. |
| _{ packagepath | packageURI }_ | Specifies the location of the application package by providing either _packagepath_, which is a path on the development computer, or _packageURI_, which is a URI. To install from a burned optical disc (DVD or Blu-ray Disc), the xo:\\ drive prefix followed by the file name can be provided to wdapp install:`wdapp install /w xo:\packagepath` |
| /Languages=\[semicolon-delimited specifier list\] | Sets which languages to install by default. |
| /Devices=\[semicolon-delimited specifier list\] | Sets which devices to install by default. |
| /Tags=\[semicolon-delimited specifier list\] | Sets which tags to install by default. Use '/Tags=' to clear all tags. |
| /drive=\[drive letter\] | Specifies the target drive that the application should be installed to instead of using the default. |
| /tm | Prints a transfer performance metrics summary after all the files have been transferred. |
| /l | Specifies that the installation stops after the launch chunk has been received. |
| /AllChunks | Specifies that the installation will forcefully install all chunks. |
| /v | Displays verbose messages. |

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

### wdapp register

Registers the application in the specified folder.

Expand table

| **wdapp register** _folder\_path_ |
| --- |

Expand table

| 
Option

 | 

Description

 |
| --- | --- |
| _folder\_path_ | Specifies the folder path that contains the \[MicrosoftGame.config\](../../../features/common/game-config/MicrosoftGameConfig-toc.md) file to register the title from. This path is relative to the application root directory. |

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

### wdapp uninstall

Terminates and deregisters all the processes in the package.

Expand table

| **wdapp uninstall** _package\_full\_name_ \[/Languages=\[list\]\] \[/Devices=\[list\]\] \[/Tags=\[list\]\] \[/Features=\[list\]\] \[/ContentTypes=\[list\]\] |
| --- |

Expand table

| 
Option

 | 

Description

 |
| --- | --- |
| _package\_full\_name_ | Specifies the full package name of the application. For example, **mygame\_1.0.0.0\_neutral\_\_r9wapr0zzdgy**. |
| /Languages=\[semicolon-delimited specifier list\] | Sets which languages to uninstall. When provided, only the specified language content is removed rather than the entire package. |
| /Devices=\[semicolon-delimited specifier list\] | Sets which devices to uninstall. |
| /Tags=\[semicolon-delimited specifier list\] | Sets which tags to uninstall. Use '/Tags=' to clear all tags. |
| /Features=\[semicolon-delimited specifier list\] | Sets which features to uninstall. Can't be used with /Tags. |
| /ContentTypes=\[semicolon-delimited specifier list\] | Sets which content types to uninstall. |

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

### wdapp unregister

Terminates and unregisters a package.

Expand table

| **wdapp unregister** _package\_full\_name_ |
| --- |

Expand table

| 
Option

 | 

Description

 |
| --- | --- |
| _package\_full\_name_ | Specifies the full package name of the application. For example, **mygame\_1.0.0.0\_neutral\_\_r9wapr0zzdgy**. |

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

### wdapp migrate

Migrates an existing MSIXVC install to the [Flat File Install](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-flatfileinstall?view=gdk-2604) format when using the March 2022 Microsoft Game Development Kit (GDK) or later.

Expand table

| **wdapp migrate** _<PackageFullName>_ |
| --- |

Expand table

| 
Option

 | 

Description

 |
| --- | --- |
| _<PackageFullName>_ | Specifies the full package name of the application. For example, **mygame\_1.0.0.0\_neutral\_\_r9wapr0zzdgy**. |

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

### wdapp feedback

Opens the Feedback Hub to report an Xbox game development bug or suggestion.

Expand table

| **wdapp feedback** |
| --- |

[Return to the top of this article.](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

## Remarks

For more information about installing and launching PC Microsoft Game Development Kit (GDK) titles, see [Using Microsoft Game Development Kit tools to install and launch your PC title](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/launching-on-pc?view=gdk-2604).

## See also

[PC Command-line tools](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-commandlinetools-toc?view=gdk-2604) [Flat File Install Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-flatfileinstall?view=gdk-2604) [Using Microsoft Game Development Kit tools to install and launch your PC title](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

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

- Last updated on 04/29/2026