---
author: M-Stahl
title: "Testing packages on a development PC"
description: "Describes PackageTesting packages on a development PC."
kindex: Testing Packages on PC
ms.topic: article
edited: 10/04/2019
ms.date: '08/01/2022'
permissioned-type: public
---

# Testing packages on a development PC

This section will describe how to test a PC Microsoft Game Development Kit (GDK) game after it has been successfully packaged into an MSIXVC build file, in addition to providing diagnostic steps on the GamingServices dependencies that need to be present to run an installed package successfully.

> [!TIP]
> You can sideload and test **MSIXVC2 packages** by using the `wdapp install` command described in this article. You can also upload the MSIXVC2 package that you test locally directly to Partner Center. For more information, see [Getting started with MSIXVC2 for PC](overviews/packaging-getting-started-for-PC-msixvc2.md).

To install the following components, and to test packaged games by using this GDK, a 19H1 build of Windows is required on the target development PC.

## Testing an app  

When you have an MSIXVC build file for testing on your development PC, install it by using the `wdapp.exe install <MSIXVC>` command. For more information about installing and managing your PC GDK title, see [Utilizing Microsoft Game Development Kit tools to install and launch your PC title](../../../tools/tools-pc/launching-on-pc.md).

## Diagnosing and troubleshooting Gaming Services dependencies

The MSIXVC packaging and deployment steps for the development PC depend on the Gaming Services package being installed. The GamingServices package is installed with the GDK and shouldn't require any manual steps to set up.

If you run into issues that indicate a Gaming Services package is missing, confirm that this package is installed by running the following Windows PowerShell command:<br/>
`Get-AppxPackage Microsoft.GamingServices` 

If you find that the package isn't present, first try repairing your GDK installation. If not, locate the *GamingServices.msixbundle* package within the GDK installation directory, and run the following command to install it:<br/> `Add-AppxPackage <PathToGamingServices.msixbundle>` 

If you suspect there's a problem with the Gaming Services package, you can manually remove it by running the following command from an administrator command prompt:<br/>
`Get-AppxPackage *Microsoft.GamingServices* | Remove-AppxPackage -allusers`

Finally, to manually acquire or update Gaming Services, download it from the Microsoft Store by using the following link.

[Gaming Services in Microsoft Store](ms-windows-store://pdp/?productid=9MWPM2CQNLHN)

Find the version string from the `Get-AppxPackage` command and enter it exactly in this command.
