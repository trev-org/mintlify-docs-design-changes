---
author: M-Stahl
title: "Executable Element (MicrosoftGame.config)"
description: "MicrosoftGame.config Reference for Executable Element."
kindex: Executable
ms.author: dmcmahon
ms.topic: article
edited: 01/06/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# MicrosoftGame.config Element - Executable

Specifies the details of a specific executable. This section attributes include the name of the executable (Name), which device it's built for (TargetDeviceFamily), it's Application ID (Id), if it's a Development only executable (IsDevOnly), if the display name from the ShellVisuals node should be overridden (OverrideDisplayName), if the Logo from ShellVisuals node should be overridden (OverrideLogo), if the Square480x480Logo from ShellVisuals node should be overridden (OverrideSquare480x480Logo), if the Square44x44Logo from ShellVisuals node should be overridden (OverrideSquare44x44Logo), if the SplashScreenImage from ShellVisuals node should be overridden (OverrideSplashScreenImage), and if the executable has an alias (currently Desktop only).

## Parent
This element's parent is the ExecutableList element.

## Requirement
This element is required to be set.

## Platform
This element pertains to PC and Console.

## Behavior
* Attributes are:
  * Name
  * TargetDeviceFamily
  * Architecture
  * Id
  * IsDevOnly
  * OverrideDisplayName
  * OverrideLogo
  * OverrideSquare480x480Logo
  * OverrideSquare44x44Logo
  * OverrideSplashScreenImage
  * Alias
* Default values are:
  * Name attribute does not have a default value.
  * TargetDeviceFamily attributes default value is whatever device you are running title on.
  * Architecture default value is x64
  * Id attribute has a default value based on the Name attribute. If Name attribute can't generate a valid Id, a fallback of Game0 will be used.
  * IsDevOnly attribute has a default value of false.
  * OverrideDisplayName attribute has a default value of its corresponding attribute in ShellVisuals.
  * OverrideLogo attribute has a default value of its corresponding attribute in ShellVisuals.
  * OverrideSquare480x480Logo attribute has a default value of its corresponding attribute in ShellVisuals.
  * OverrideSquare44x44Logo attribute has a default value of its corresponding attribute in ShellVisuals.
  * OverrideSplashScreenImage attribute has a default value of its corresponding attribute in ShellVisuals.
  * Alias has no default value.
* Allowed values:
  * Name allowed value is the executable in a relative path from the game root.
  * TargetDeviceFamily allowed values are XboxOne, Scarlett, PC.
  * Architecture allowed values are x64 and ARM64
  * Id allowed value is an ASCII string of up to 64 characters.
  * IsDevOnly allowed values are true or false.
  * OverrideDisplayName allowed value is a string of up to 256 characters.
  * OverrideLogo allowed value is a relative file path to a .png file.
  * OverrideSquare480x480Logo allowed value is a relative file path to a .png file.
  * OverrideSquare44x44Logo allowed value is a relative file path to a .png file.
  * OverrideSplashScreenImage allowed value is a relative file path to a .png file.
  * Alias allowed value is an executable name (same as Name but can not have a path).

## Remarks
* Name attribute is required.
* TargetDeviceFamily attribute is required for packaging.
* When including an executable with Architecture = ARM64, you must also include an executable with Architecture = x64. If do not include an x64 binary, the package will fail to build with error 0x89245212 E_GAMEPACKAGE_CONFIG_x64_EXECUTABLE_REQUIRED

### Executable & TargetDeviceFamily
The Executable element is intended to set attributes for your titles executable. This element is not applicable for DLC package configuration.

During development, any number of Executable elements are valid to be defined in the ExecutableList element for loose file deployment. When packaging before final package submission, multiple Executable elements are supported and any number of executable elements with the IsDevOnly attribute will be included in the package. 

However, during final package submission for mastering and certification, any executable with the IsDevOnly attribute must be manually removed from the MicrosoftGame.config file and package contents. Prior to the March 2024 GDK, isDevOnly executables were automatically stripped as part of encrypted package generation (signed with [MakePkg.exe pack](../../../../features/common/packaging/deployment/makepkg.md) **/lk** or **/l**). Submission Validator will continue to issue a FAILURE if an isDevOnly executable is found.

When specifying an Executable element in the ExecutableList element, you can provide an attribute called TargetDeviceFamily. This is intended to specify what target device the executable is built for. The allowed values of the TargetDeviceFamily attribute are **Xbox One, Scarlett & PC**.

Packaging will default to the XboxOne TargetDeviceFamily if no Executable has the TargetDevieFamily attribute defined when running **MakePkg pack** for Xbox consoles. When specifying the /pc flag to **MakePkg pack**, Packaging will default to the PC TargetDeviceFamily if no Executable has the TargetDeviceFamily attribute defined. [MakePkg.exe](../../../../features/common/packaging/deployment/makepkg.md) **requires all executables in the MicrosoftGame.config use the same TargetDeviceFamily specification** to properly generate a package for your title. You will get the following error when attempting to run [MakePkg.exe](../../../../features/common/packaging/deployment/makepkg.md) with two or more TargetDeviceFamily attributes present in your ExecutableList element.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Error: All executables must have the same value for TargetDeviceFamily in the MicrosoftGame.config file when building a package. (found XboxOne and Scarlett)</span>

<a id="MicrosoftGameConfig-Alias"></a>

#### ExecutionAlias

The Alias attribute off of the Executable element can be used to benefit from ExecutionAlias functionality for launching your PC title from the command prompt by it's alias name and with title identity.

The Alias attribute should be set to the executable name to ensure the title is registered and identity is correct when using an alias. If the alias is used in the current directory of the executable, Windows will defer to the executable name directly vs. the alias and as such the benefits of registration and proper identity will not work in this scenario. If the current directory for the executable is in the %PATH% environment variable on the local PC, it will also defer to the executable instead of the alias.

When running an executable alias in a command prompt, you can provide title arguments via ```<ExecutionAlias> [launch args]``` usage.

For more information on launching your title on PC, please see [Utilizing Microsoft Game Development Kit tools to install and launch your PC title](../../../../tools/tools-pc/launching-on-pc.md).

## See Also
[MicrosoftGame.config Reference - Table of Contents](gc-microsoftgameconfig-toc.md)  
