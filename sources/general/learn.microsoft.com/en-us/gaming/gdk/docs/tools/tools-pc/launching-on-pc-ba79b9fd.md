# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/launching-on-pc?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/launching-on-pc?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Utilizing Microsoft Game Development Kit tools to install and launch your PC title

Feedback

Summarize this article for me

This topic describes the Microsoft Game Development Kit (GDK) tools for installing and launching your PC title. It explains how to use these tools and provides insights about troubleshooting PC installation and launch issues.

## Tools to install and launch your title on PC

Note

For more information about the app-launch, and launching with the Gaming Runtime, see [Launching a Win32 game](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604#MSGC-PCLaunch).

The Microsoft Game Development Kit (GDK) provides the following approaches to installing your title.

- [wdapp.exe install](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604#wdapp_install): Used to install an .MSIXVC package of your title. For more information about packaging your PC title, see [Getting started with packaging titles for a PC by using the MSIXVC packaging tools](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-pc?view=gdk-2604). If you wish to enable the full [PC Bootstrapper](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-pc-bootstrapper?view=gdk-2604) flow with your package, you can enable this via the /bootstrapper flag.
 
- [wdapp.exe register](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604#wdapp_register): Used to register a loose file folder to be able to launch. For more information, see [PC game registration](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/title-registration-pc?view=gdk-2604). Starting in the June 2022 GDK, you only need to register your game if you want to enable desktop and start menu shell icons, such as when you test your retail install scenario.
 

The Microsoft Game Development Kit (GDK) provides the following approaches to launching your title:

- After you've registered your title, it appears as selectable in the Start menu, and is searchable in the search box.
 
- [wdapp.exe launch](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604#wdapp_launch) is used to launch a title by using either its application user model ID (AUMID) or a path to the executable.
 
- Windows Device Portal (WDP): go to **Installed Apps**, and then select **Start**.
 

### Launching with the PC Bootstrapper enabled

To launch with the full [PC Bootstrapper](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-pc-bootstrapper?view=gdk-2604) flow as a retail user would see, you must sideload a package via wdapp install and use the /bootstrapper flag. For loose builds or installs without the flag, the PC Bootstrapper functionality will be limited to enforcing simplified user model at the time XUserAddAsync is called.

### Launching with and without title identity

As of the June 2022 GDK, the runtime should function identically regardless of the method used to launch the title as long as your [MicrosoftGame.config](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604) is configured correctly.

### Launching with command-line arguments

As of the June 2022 GDK, you can simply launch your executable directly passing in any \[launch args\] directly.

Additionally, you may use one of the following methods to launch your title with command-line arguments:

- `WdApp Launch [launch args]` from a GDK command prompt.
 
- `<ExecutionAlias> [launch args]` in a command prompt.
 
- Command-line arguments in Visual Studio project properties.
 

For more information about using an Execution Alias, see [ExecutionAlias](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-executable?view=gdk-2604#MicrosoftGameConfig-Alias).

## Troubleshooting PC installation and launch issues

### Error code 0x80073CFF: Deployment of package failed because no valid license or sideloading policy could be applied. A developer license or enterprise sideloading configuration may be required.

#### The issue

You experienced an issue when you attempted to install, register, or launch your title.

#### The fix

The fix is to enable Developer Mode on your PC by using the following steps.

1. Open **Settings**.
 
2. Enter _Developer_ in the search field.
 
3. From the list of options that are displayed, select **Use developer features**.
 
4. Select **Developer mode**. A dialog box appears, saying that the system is adding features. Ensure that you wait for this process to finish .
 

### Error code 0x80073cfc: The application cannot be started. Try reinstalling the application to fix the problem.

#### The issue

You experienced an issue with one of the initial steps in the installation process.

#### The workaround

You can uninstall and reinstall the Gaming Runtime Services (GRTS). Follow these steps to do so.

1. Open a PowerShell Admin command prompt.
 
2. Execute this command: `get-appxpackage *gamings*`
 
3. Execute this command: `remove-package <package fullname from step 2 for the gamingservices package>`
 
4. Open the Xbox app, and then install a game. This triggers the installation of the gamingservices package from the Microsoft Store.
 

### Error code 0x87e00017: Install source was found but cannot be reached. Likely internet problem.

#### The issue

This error code corresponds to `IM_E_UNREACHABLE_INSTALL_SOURCE`. You experience this error if the deployment system is unable to access your files. However, while that might be the case, it can also mean that the installation directory has become corrupted. The most common cause of this is a partially successful deployment that didn't properly clean up afterward.

#### The fix

To fix these issues

1. Run the app `wdapp list`.
 
2. In the resulting list, look for any versions of games that you installed.
 
3. Uninstall all of the games by using `wdapp uninstall <pfn>`.
 
4. Try installing your game again.
 

### Error code 0x80080203: The specified package format is not valid: The file is not a valid app package because it is missing a required footprint file.

#### The issue

This occurs because you have a "nested MSIXVC" (which can easily happen). Let's say your desktop build is _C:\\MyGame_. You decide to create a package by using [makepkg.exe](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604) in a subfolder under _C:\\MyGame_ (for example, in _C:\\MyGame\\Package_). This works the first time because no package is generated, but then you experience this issue after you try to create a package again. In addition to this failure (which is caused by having two _AppxManifest.xml_ files in the package), running _makepkg.exe_ on _C:\\MyGame_ would try to package the existing .msixvc into the new package (unless you excluded it from the genmap).

#### The fix

To fix this issue, ensure that your package directory is outside the directory that contains your _MicrosoftGame.config_.

### Error code 0x80070490: Element not found

#### The issue

This issue occurs if attempting to install an .XVC (the packaging format for an Xbox package) with `wdapp install`.

#### The workaround

Ensure that you use `wdapp install` for .MSIXVC packages (the packaging format for a PC package) only.

### Errors launching via wdapp when the title folder is shared

#### The issue

If you share a folder with Windows File Sharing, that you've previously registered with [wdapp.exe register](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604#wdapp_register), it causes the Gaming Runtime to lose share permissions, and you subsequently experience this error.

```
    'WdApp.exe launch' must be called with an AUMID to activate an application.

    Use 'WdApp.exe list' to get a list of sideloaded packages including AUMID values.

    Alternatively, if your executable specifies an Alias in the *MicrosoftGame.config*,

    typing the alias name at the command prompt will do an application activation.

    Failed with 0x80070057.
```

#### The workaround

The issue is related to the access control list (ACL). Sharing the folder prevents access to the app model. That is, the container loses permission to read files when sharing. To work around is to follow these steps to save and restore the ACL data.

1. Before you share the folder, run 'icacls /save AclFile' to save the ACLs of the package folder.
 
2. Share the folder by using Windows File Sharing.
 
3. To restore the previous ACLs, run 'icacls /restore AclFile'.
 

In addition to this workaround, you could also re-register by first running `wdapp.exe unregister`, and then running `wdapp.exe register`. This restores permissions while retaining folder sharing.

### Error code 0x80070005: Access is denied.

#### The issue

You are encounter a "0x8007005: Access is Denied" error when running the wdapp install command.

#### The fix

Make sure you are passing the full path to the .msixvc file. For example:

Correct:

_wdapp install "c:\\MyGame\\GDKBuildFolder\\GdkGame\_1.0.0.0\_x64\_\_pmsdash4d.msixvc"_

Incorrect (missing the full path to the .msixvc):

_wdapp install "c:\\MyGame\\GDKBuildFolder"_

### Error code 0x000007b: STATUS\_INVALID\_IMAGE\_FORMAT

#### The issue

You are encounter a "0x000007b" error when running the wdapp launch command.

#### The fix

The issue is that the executable being launched is a different platform architecture than what is specified in the MicrosoftGame.config. The DesktopRegistration element in the MicrosoftGame.config has an optional child element called ProcessorArchitecture that can specify either 'x86' or 'x64' as its value. Ensuring that this specification matches the platform architecture of the executable defined in the Executable element will resolve this issue.

### Error code 0x800701B1: A device which does not exist was specified.

#### The issue

You are encounter a "0x800701B1" error when running the wdapp install /drive command.

#### The fix

The issue is that the target drive was not detected by the Windows Store. Ensure that the target drive is present in the "New apps will save to:" drop down list in "Settings -> Storage Settings -> Change where my new content is saved" on your local PC. If the drive is not present, please check the drive's health and ensure the local PC has the latest Windows updates.

### Error code 0x80072F78: WININET\_E\_INVALID\_SERVER\_RESPONSE

#### The issue

You are encounter a "0x80072F78" error when running the wdapp install command.

#### The fix

This issue has been associated with firewall proxy configuration settings blocking this address "settings-win.data.microsoft.com". This address is needed for install settings to be properly cached when installing your PC GDK title. Please ensure this address is allowed in your firewall software.

## See also

[Get started with the Microsoft Game Development Kit](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/get-started/get-started-home?view=gdk-2604)

[Getting started with packaging for PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-pc?view=gdk-2604)

[PC Bootstrapper](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-pc-bootstrapper?view=gdk-2604)

[MicrosoftGame.config](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-toc?view=gdk-2604)

[Application Management (wdapp.exe)](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-wdapp?view=gdk-2604)

[PC game registration](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/title-registration-pc?view=gdk-2604)

[Flat File Install Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-flatfileinstall?view=gdk-2604)

[Command-line tools (for PC)](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/commandlinetools/gr-commandlinetools-toc?view=gdk-2604)

[PC game development (environment and tools)](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/gc-tools-pc-toc?view=gdk-2604)

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