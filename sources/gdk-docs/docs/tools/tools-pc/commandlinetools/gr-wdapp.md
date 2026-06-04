---
author: dmcmahon
title: "Application Management (wdapp.exe)"
description: "Installs and registers applications on the local PC."
ms.assetid: 4b2a4ee4-b4f3-1eae-254a-97b0eda1edc5
kindex:
- Application Management (wdapp.exe)
- application management, remote
- wdapp.exe
- tools options, remote application management
- command-line arguments, passing to an application with wdapp launch
- wdapp.exe, install
- wdapp.exe, uninstall
- wdapp.exe, register
- wdapp.exe, unregister
- wdapp.exe, launch
- wdapp.exe, list
- wdapp.exe, update
ms.topic: article
edited: 04/25/2026
applies-to: pc-gdk
ms.date: '04/25/2026'
permissioned-type: public
---

# Application Management (wdapp.exe)

Application Management (wdapp.exe) is a command-line tool that installs and launches PC Microsoft Game Development Kit (GDK) titles. You can install and test both MSIXVC and MSIXVC2 packages with the `wdapp install` command.

> [!IMPORTANT]
> wdapp requires **Developer Mode** to be enabled in Windows Settings. If Developer Mode is not enabled, the tool will return an error. To enable it, go to **Settings > For developers** and toggle **Developer Mode** on.

wdapp provides the following subcommands.  

| Command | Description |
| --- | --- |
| [wdapp ids](#wdapp_ids) | Displays details about package and application identifiers. |
| [wdapp launch](#wdapp_launch) | Launches an application by AUMID or executable path. |
| [wdapp terminate](#wdapp_terminate) | Terminates the specified package. This only works for MSIXVC installed packages. |
| [wdapp list](#wdapp_list) | Lists all sideloaded applications on the PC. |
| [wdapp listdlc](#wdapp_listdlc) | Lists all installed and deployed downloadable-content packages. |
| [wdapp gamefolder](#wdapp_gamefolder) | Queries or sets the install folder for a drive. |
| [wdapp update](#wdapp_update) | Streams a packaged build update from a network share or local system file path. |
| [wdapp install](#wdapp_install) | Installs an application package created with [makepkg](../../../features/common/packaging/deployment/makepkg.md) through streaming installation. |
| [wdapp register](#wdapp_register) | Registers the application in the specified folder. |
| [wdapp uninstall](#wdapp_uninstall) | Terminates and deregisters all the processes in the package. |
| [wdapp unregister](#wdapp_unregister) | Unregisters an application. |
| [wdapp migrate](#wdapp_migrate) | Migrates an MSIXVC install to Flat File Install format. |
| [wdapp feedback](#wdapp_feedback) | Opens the Feedback Hub to report a bug or suggestion. |

<a id="ID4EFMAC"></a>

   

## Deploying, installing, updating, listing, and removing applications  
 


<a id="wdapp_ids"></a>

### wdapp ids

Displays details about package and application identifiers, including the Package Family Name (PFN) and Application User Model ID (AUMID). This is useful for debugging package identity issues.

<table>
<tr><td><b>wdapp ids</b>
</td></tr>
</table>

This command takes no arguments. It prints information about identifiers used by other wdapp commands such as `launch` and `terminate`.

   
  
 [Return to the top of this article.](gr-wdapp.md)   
 
<a id="wdapp_launch"></a>



### wdapp launch 

Launches an application by AUMID or executable path.

<table>
<tr><td><b>wdapp launch</b> <i>AUMID</i> | <i>Executable</i>
</td></tr>
</table>

<table>
<tr><th>

Option</th><th>

Description</th></tr>

<tr><td><i>AUMID</i></td><td>Specifies the AUMID of the application to launch. Use either the AUMID or the Executable option, but not both.</td></tr>
<tr><td><i>Executable</i></td><td>Specifies the path to the executable of the application to launch. Use either the AUMID or the Executable option, but not both.</td></tr>
<tr><td><i>WaitToExit</i></td><td>Blocks until the title exits, then returns the title's exit code.</td></tr>
<tr><td><i>log</i></td><td>Redirects stdout and stderr to files on the scratch drive. If no prefix is specified, files are named latest_stdout.txt and latest_stderr.txt. The prefix is truncated if longer than 32 characters.</td></tr>
<tr><td><i>show all | launchResult | terminateResult | targetTerminateReason | exitCode </i></td><td><i>all</i> - Shows all results.<br/><br/>
<i>launchResult</i> - The reason the game failed to launch. If this is S_OK, the game launched successfully.<br/><br/>
<i>terminateResult</i> - The reason the terminated state was reached. If this is S_OK, termination was reached gracefully through proper Process Lifetime Management (PLM) flow.<br/><br/>
<i>targetTerminateReason</i> - If available, why termination was targeted. Otherwise, S_FALSE.<br/><br/>
<i>exitCode</i> - The exit code returned by the game on process exit. Controls what is shown when the game exits while using the WaitToExit argument.</td></tr>
</table>

   
  
 [Return to the top of this article.](gr-wdapp.md)   
 
<a id="wdapp_terminate"></a>



### wdapp terminate

Terminates the specified package. This only works for MSIXVC installed packages.

<table>
<tr><td><b>wdapp terminate</b> <i>AUMID</i> | <i>PackageFullName</i>
</td></tr>
</table>

<table>
<tr><th>

Option</th><th>

Description</th></tr>

<tr><td><i>AUMID</i></td><td>Specifies the AUMID (AppUserModelId) of the application to terminate. Use either the AUMID or the PackageFullName option, but not both.</td></tr>
<tr><td><i>PackageFullName</i></td><td>Specifies the PackageFullName of the application to terminate. Use either the AUMID or the PackageFullName option, but not both.</td></tr>
</table>

  
 [Return to the top of this article.](gr-wdapp.md)   
 

 

<a id="wdapp_list"></a>

   

### wdapp list 

Lists all sideloaded applications on the PC.

<table>
<tr><td><b>wdapp list</b>
</td></tr>
</table>

<table>
<tr><th>

Option</th><th>

Description</th></tr>

<tr><td>/d</td><td>Provides detailed information about the listed packages.</td></tr>
<tr><td>/json</td><td>Formats the response in JSON.</td></tr>
<tr><td>/includeStore</td><td>Includes packages installed from the Microsoft Store or Xbox App in the results. By default, only sideloaded development packages are shown.</td></tr>

</table>

   
  
 [Return to the top of this article.](gr-wdapp.md)   
 

<a id="wdapp_listdlc"></a>

   

### wdapp listdlc

Lists all installed and deployed downloadable-content packages.

<table>
<tr><td><b>wdapp listdlc</b>
</td></tr>
</table>

<table>

<tr><th>

Option</th><th>
Description</th></tr>

<tr><td>/d</td><td>Provides detailed information about the listed DLC packages.</td></tr>
<tr><td>/json</td><td>Formats the response in JSON.</td></tr>
<tr><td>/includeStore</td><td>Includes DLC packages installed from the Microsoft Store or Xbox App in the results. By default, only sideloaded development DLC packages are shown.</td></tr>


</table>

   
  
 [Return to the top of this article.](gr-wdapp.md)   
 


<a id="wdapp_gamefolder"></a>

   

### wdapp gamefolder 

<table>
<tr><td><b>wdapp gamefolder </b> <i>&lt;DriveLetter>:</i> [/set &lt;FolderPath>]
</td></tr>
</table>

<table>
<tr><th>

Option</th><th>

Description</th></tr>

<tr><td><i>&lt;DriveLetter>:</i></td><td>Specifies the target drive the streaming install happens on. Defaults to OS drive in a root folder called XboxGames.</td></tr>

<tr><td>/set</td><td>Sets up the streaming install folder for the drive specified in &lt;DriveLetter>. Defaults to XboxGames.</td></tr>

</table>

   
  
 [Return to the top of this article.](gr-wdapp.md)   




<a id="wdapp_update"></a>

   

### wdapp update 

<table>
<tr><td><b>wdapp update</b> <i>packagepath</i> [/l|/AllChunks] [/b] [/a] [/m] [/ContentTypes=[semicolon-delimited specifier list]] [/Languages=[semicolon-delimited specifier list]] [/Devices=[semicolon-delimited specifier list]] [/Tags=[semicolon-delimited specifier list]] [/Recipes=[semicolon-delimited specifier list]] [/Features=[semicolon-delimited specifier list]]
</td></tr>
</table>

<table>
<tr><th>

Option</th><th>

Description</th></tr>

<tr><td><i>packagepath</i></td><td>Specifies the path to the package file that's used for the update.</td></tr>

<tr><td>/l</td><td>Specifies that the update stops after the launch chunk is received.</td></tr>

<tr><td>/AllChunks</td><td>Forcefully installs all chunks, even if they're unchanged.</td></tr>

<tr><td>/b</td><td>Specifies whether the update is allowed to go backward to a previous version.</td></tr>

<tr><td>/a</td><td>Registers the update as available.</td></tr>

<tr><td>/m</td><td>Registers the update as mandatory.</td></tr>

<tr><td>/ContentTypes=[semicolon-delimited specifier list]</td><td>Sets which content types to update by default.</td></tr>

<tr><td>/Languages=[semicolon-delimited specifier list]</td><td>Sets which languages to update by default.</td></tr>

<tr><td>/Devices=[semicolon-delimited specifier list]</td><td>Sets which devices to update by default.</td></tr>

<tr><td>/Tags=[semicolon-delimited specifier list]</td><td>Sets which tags to update by default. Use '/Tags=' to clear all tags.</td></tr>

<tr><td>/Recipes=[semicolon-delimited specifier list]</td><td>Sets which recipes to update by default. Can't be used with /Tags.</td></tr>

<tr><td>/Features=[semicolon-delimited specifier list]</td><td>Sets which features to update by default. Can't be used with /Tags.</td></tr>

</table>

   
  
 [Return to the top of this article.](gr-wdapp.md)   





<a id="wdapp_install"></a>

   

### wdapp install  
   
  
Installs an application package created with [makepkg](../../../features/common/packaging/deployment/makepkg.md) through streaming installation.   
   
  
The **install** command mirrors the streaming installation process that occurs when an application is installed on a retail PC.    
   
  
For more information about testing streaming installation packages, see [Streaming Installation and Intelligent Delivery: an overview](../../../features/common/packaging/overviews/streaming_install-intelligent_delivery.md).
   
 
<table>
<tr><td><b>wdapp install</b> [/l|/AllChunks] [/bootstrapper] [/drive=[drive letter]] [ /ContentTypes=[semicolon-delimited specifier list]] [/Languages=[semicolon-delimited specifier list]] [/Devices=[semicolon-delimited specifier list]] [/Tags=[semicolon-delimited specifier list]] [/Drive [Optional]] [/tm] [/l] [/v] [/w]] <i>{ packagepath &#124; packageURI }</i>
</td></tr>
</table>

|Option|Description|
|---|---|
|/bootstrapper|Invokes the [PC Bootstrapper](../../../gdk-dev/pc-dev/overviews/gr-pc-bootstrapper.md) when the game launches. The title runs as if it were a standard retail install, with the PC Bootstrapper invoked before the application runs any code. The application appears as a child process of the PC Bootstrapper. If this flag isn't set, prerequisite checks are invoked when the applicable runtime calls are made (for example, XUserAddAsync for sign-in validation).|
|/Features=[semicolon-delimited list of Features]|Specifies which features to install by default. Can't be used with /Tags.|
|/Recipes=[semicolon-delimited list of Recipes]|Specifies which recipes to install by default. Can't be used with /Tags.|
|*{ packagepath &#124; packageURI }*|Specifies the location of the application package by providing either *packagepath*, which is a path on the development computer, or *packageURI*, which is a URI. To install from a burned optical disc (DVD or Blu-ray Disc), the xo:\ drive prefix followed by the file name can be provided to wdapp install:`wdapp install /w xo:\packagepath`
|/Languages=[semicolon-delimited specifier list]|Sets which languages to install by default.|
|/Devices=[semicolon-delimited specifier list]|Sets which devices to install by default.|
|/Tags=[semicolon-delimited specifier list]|Sets which tags to install by default. Use '/Tags=' to clear all tags.|
|/drive=[drive letter]|Specifies the target drive that the application should be installed to instead of using the default.|
|/tm|Prints a transfer performance metrics summary after all the files have been transferred.|
|/l|Specifies that the installation stops after the launch chunk has been received.|
|/AllChunks|Specifies that the installation will forcefully install all chunks.|
|/v|Displays verbose messages.|
 
 
 [Return to the top of this article.](gr-wdapp.md)   
 
 
<a id="wdapp_register"></a>

### wdapp register  
   
  
Registers the application in the specified folder.

<table>
<tr><td><b>wdapp register </b><i>folder_path</i>  
 </td></tr>
</table>
  
  
  
   
<table>
<tr><th>

Option</th><th>

Description</th></tr>

<tr><td><i>folder_path</i></td><td> Specifies the folder path that contains the [MicrosoftGame.config](../../../features/common/game-config/MicrosoftGameConfig-toc.md) file to register the title from. This path is relative to the application root directory.</td></tr>

</table>

   
  
 [Return to the top of this article.](gr-wdapp.md)   
 

 

<a id="wdapp_uninstall"></a>

   

### wdapp uninstall  
   
  
Terminates and deregisters all the processes in the package.  
 
<table>
<tr><td><b>wdapp uninstall </b><i>package_full_name</i> [/Languages=[list]] [/Devices=[list]] [/Tags=[list]] [/Features=[list]] [/ContentTypes=[list]]
</td></tr>
</table>



 
<table>
<tr><th>

Option</th><th>

Description</th></tr>

<tr><td><i>package_full_name</i></td><td> Specifies the full package name of the application. For example, <b>mygame_1.0.0.0_neutral__r9wapr0zzdgy</b>.  
 </td></tr>
<tr><td>/Languages=[semicolon-delimited specifier list]</td><td>Sets which languages to uninstall. When provided, only the specified language content is removed rather than the entire package.</td></tr>
<tr><td>/Devices=[semicolon-delimited specifier list]</td><td>Sets which devices to uninstall.</td></tr>
<tr><td>/Tags=[semicolon-delimited specifier list]</td><td>Sets which tags to uninstall. Use '/Tags=' to clear all tags.</td></tr>
<tr><td>/Features=[semicolon-delimited specifier list]</td><td>Sets which features to uninstall. Can't be used with /Tags.</td></tr>
<tr><td>/ContentTypes=[semicolon-delimited specifier list]</td><td>Sets which content types to uninstall.</td></tr>
</table>

   
  
 [Return to the top of this article.](gr-wdapp.md)   
 

 

 

  
<a id="wdapp_unregister"></a>

   

### wdapp unregister  
   
  
Terminates and unregisters a package.  
 
<table>
<tr><td><b>wdapp unregister </b><i>package_full_name</i>



</td></tr>
</table>



 
<table>
<tr><th>

Option</th><th>

Description</th></tr>

<tr><td><i>package_full_name</i></td><td> Specifies the full package name of the application. For example, <b>mygame_1.0.0.0_neutral__r9wapr0zzdgy</b>.  

 </td></tr>

</table>

   
  
 [Return to the top of this article.](gr-wdapp.md)   
 

 

<a id="wdapp_migrate"></a>

   

### wdapp migrate 
   
  
Migrates an existing MSIXVC install to the [Flat File Install](../../../features/common/packaging/packaging-flatfileinstall.md) format when using the March 2022 Microsoft Game Development Kit (GDK) or later.
 
<table>
<tr><td><b>wdapp migrate </b> <i>&lt;PackageFullName></i>
</td></tr>
</table>

<table>
<tr><th>

Option</th><th>

Description</th></tr>

<tr><td><i>&lt;PackageFullName></i></td><td>Specifies the full package name of the application. For example, <b>mygame_1.0.0.0_neutral__r9wapr0zzdgy</b>.</td></tr>

</table>

   
  
 [Return to the top of this article.](gr-wdapp.md)   

<a id="wdapp_feedback"></a>

### wdapp feedback

Opens the Feedback Hub to report an Xbox game development bug or suggestion.

<table>
<tr><td><b>wdapp feedback</b>
</td></tr>
</table>

   
  
 [Return to the top of this article.](gr-wdapp.md)   


   

 
<a id="remarks"></a>

   

## Remarks  
   
  
For more information about installing and launching PC Microsoft Game Development Kit (GDK) titles, see  [Using Microsoft Game Development Kit tools to install and launch your PC title](../launching-on-pc.md).
  
<a id="ID4EW5AG"></a>

   

## See also  
 [PC Command-line tools](gr-commandlinetools-toc.md) 
 [Flat File Install Overview](../../../features/common/packaging/packaging-flatfileinstall.md) 
 [Using Microsoft Game Development Kit tools to install and launch your PC title](gr-wdapp.md) 


 
