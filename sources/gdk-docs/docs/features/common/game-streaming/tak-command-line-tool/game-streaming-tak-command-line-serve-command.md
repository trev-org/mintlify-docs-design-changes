---
author: M-Stahl
title: "Serve Command"
description: "Describes how to use the Touch Adaptation Kit Command Line Tool's Serve Command."
kindex:
- Touch Adaptation Kit Command Line Tool
- tak.exe (Touch Adaptation Kit)
- Serve Command
ms.author: migonz
ms.topic: article
edited: 11/28/2022
ms.date: 11/28/2022
permissioned-type: public
---

# Serve Command

The `serve` command is used to make the specified layouts available to the CTA for validation experiences.

Either provide a packaged touch adaptation bundle (that's created with the `pack` command), or provide a set of layouts that aren't packaged.

The following table shows the different options that are available for use with the `serve` command.

| Options                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--takx`, `--takx-file <takx-file>`                     | Path to the touch adaptation bundle that you want to serve. Either this parameter or the `--layout-path` or the `--takxconfig` parameter is required.                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--takxconfig`, `--takx-config-file <takx-config-file>` | Path to `takxconfig.json` file representing the bundle that you want to serve. Either this parameter or the `--layout-path` or the `--takx` parameter is required.                                                                                                                                                                                                                                                                                                                                                                                              |
| `--layout-path <layout-path>`                           | Path to the root layout directory that you want to include in the bundle that's served. Either this parameter or the `--takx-file` or the `--takxconfig` parameter is required. When `--takxconfig` is specified, this argument overrides the path specified in the `takxconfig.json` file.                                                                                                                                                                                                                                                                     |
| `--asset-path <asset-path>`                             | Path to the root asset directory that you want to include in the bundle that's served. If the bundle doesn't have assets, this parameter isn't required. When `--takxconfig` is specified, this argument overrides the path specified in the `takxconfig.json` file.                                                                                                                                                                                                                                                                                            |
| `--context file <context-file>`                         | Path to the context file that you want to include in the bundle. If the bundle doesn't have context, this parameter isn't required. When `--takxconfig` is specified, this argument overrides the path specified in the `takxconfig.json` file.                                                                                                                                                                                                                                                                                                                 |
| `--default-layout <default-layout>`                     | Name of the default layout. This should match the name of one of the files that's in the layout path. When `--takxconfig` is specified, this argument overrides the default specified in the `takxconfig.json` file.                                                                                                                                                                                                                                                                                                                                            |
| `--version <version>`                                   | Content version of the touch adaptation bundle such as 1.0.0.0. Each touch adaptation bundle submitted to Microsoft for a title must have a semantically larger version number than any prior touch adaptation bundle that has been submitted. The version number of the touch adaptation bundle in use while a game is being streamed may be obtained by calling [XGameStreamingGetTouchBundleVersion](../../../../reference/system/xgamestreaming/functions/xgamestreaminggettouchbundleversion.md). When `--takxconfig` is specified, this argument overrides the version specified in the `takxconfig.json` file. |
| `--version-name <version-name>`                         | Name of the content version of the touch adaptation bundle such as "DLC 1". Unlike the version number, the version name is optional and there are no requirements placed on its format. The version name of the touch adaptation bundle in use while a game is being streamed may be obtained by calling [XGameStreamingGetTouchBundleVersion](../../../../reference/system/xgamestreaming/functions/xgamestreaminggettouchbundleversion.md). When `--takxconfig` is specified, this argument overrides the version name specified in the `takxconfig.json` file.                                                     |
| `--no-asset-optimization`                               | Ensure that the assets for efficient storage and communication aren't optimized. If set, the assets aren't modified.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `--no-verify`                                           | Ensure that the produced touch adaptation bundle is valid and isn't verified                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--language <language>`                                 | IETF language tag of a language to include in the produced bundle that's served. If this parameter is specified multiple times, all the provided languages are included. If the parameter isn't specified, all layouts and assets that are found in the source directory are included in the bundle that's served. When `--takxconfig` is specified, this argument overrides the languages specified in the `takxconfig.json` file.                                                                                                                             |
| `--port <port>`                                         | Port to serve the touch adaptation bundle. The default port is 9269.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `--host <host>`                                         | Host to serve the touch adaptation bundle. The default host is`0.0.0.0`, which enables the bundle on all network interfaces. Use `localhost` to enable the server only as a loopback or a specific IP that controls which interface the server is available on.                                                                                                                                                                                                                                                                                                 |
| `--certificate-file <certificate-file>`                 | Path to the .pfx certificate file to authenticate the server for secure HTTPS requests. This flag is necessary for the tool to host an authenticated HTTPS server. <br/><br/>⚠️ **NOTE:** The [Web Content Test Application (CTA)](../game-streaming-web-content-test-application.md) can only connect to remote sideload servers that use `https` and this option.  |
| `--certificate-password <certificate-password>`         | Password required to access the certificate data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--password <password>`                                 | Password for authenticating the client. This is an optional flag to restrict client access to the touch adaptation bundles when sideloading over https. In order to successfully authenticate the client, the provided password must match the password provided in the client's developer settings on the GameStreaming app.                                                                                                                                                                                                                                   |

### Examples

Use the following code example to serve a touch adaptation bundle on a host.

___
Serve all the layouts in the layout-path on the default port and host and declare a specific version/version name

```
C:\>tak serve --layout-path C:\tmp\layouts --version 1.0.0.2 --versionName DLC2
Verifying touch adaptation bundle 'C:\tmp\layouts'.
Now listening on: http://0.0.0.0:9269
Application started. Press Ctrl+C to shut down.
Hosting environment: Production
Content root path: C:\tmp
```

___
Serve a specified touch adaptation bundle only over localhost

```
C:\>tak serve --takx-file C:\tmp\MyGameLayouts.takx --host localhost
Now listening on: http://localhost:9269
Application started. Press Ctrl+C to shut down.
Hosting environment: Production
Content root path: C:\tmp
```

___

<a id="certificate-generation"></a>

### Certificate Generation Instructions

A certificate is required to host an authenticated secure server for sideloading Touch Bundles. Any appropriate SSL certificate can be used, but the instructions below will create a certificate as well

1. Obtain the script to generate self-signed certificate from the [Xbox Game Streaming Tools GitHub](https://github.com/microsoft/xbox-game-streaming-tools/blob/main/touch-adaptation-kit/scripts/Create-SelfSignedCertificate.ps1)

    a. Navigate to the link above, select 'raw', and copy-paste the script contents into a document on your local machine

    b. Alternatively, run the following command in Powershell to download the script

    ```powershell
    Invoke-WebRequest -Uri https://raw.githubusercontent.com/microsoft/xbox-game-streaming-tools/main/touch-adaptation-kit/scripts/Create-SelfSignedCertificate.ps1 -Out ./Create-SelfSignedCertificate.ps1
    ```

> [!NOTE]
> The Create-SelfSignedCertificate.ps1 script only works on Windows. Tools may exist on other operating systems to generate valid self signed certificates

2. Run the downloaded script in Powershell.
3. The script will prompt you for a password to secure the certificate. Set the password by entering it here. This password will be used as input to the -certificate-password flag of the serve command.
    This will generate two files: `sideload.pfx` and `sideload.cer`. The path to the `sideload.pfx` certificate file is to be passed as input to the -certificate-file flag of the serve command.

### Trusting the certificate on different clients

Load the .cer file onto your device. This can be accomplished via e-mail, OneDrive, USB, ADB, AirDrop etc. Trust the certificate in the usual manner appropriate for the given device.

#### Windows

1. Double click the `sideload.cer` file
2. Select 'Install Certificate'. This will open Certificate Import Wizard.
3. Select 'Current User' as the Store location.
4. In the next window, select 'Place all certificates in the following store' then select 'Browse for Trusted Root Certification Authorities'.

#### Android

1. On your Android device, navigate to Settings > Security > Advanced > Encryption & credentials > Install from Storage.
2. Install the certificate by selecting **CA certificate** and then browse for the `sideload.cer` file downloaded in the previous section

   Once installed, this certificate can be viewed under Trusted Credentials > User

See [Google's documentation](https://support.google.com/pixelphone/answer/2844832?hl=en) for more information.

#### iOS

1. Navigate to the Files application on your iOS device to install the .cer file to your device profiles
2. A new profile should be generated based on the .cer file profile name. This can be found under Settings > General > Profiles & Device Management.
3. Install the certificate. The certificate signature should show as verified.
4. To test the installed certificate, navigate to Settings > General > About > Certificate Trust Settings. Enable full trust for the root certificate that was just installed.

See [Apple's documentation](https://support.apple.com/en-us/HT204477) for more information.

### Examples

Use the following code example to serve a touch adaptation bundle on a host securely.

___
Serve all layouts in the layout path on the default host and port over https

```
C:\>  tak serve --layout-path C:\tmp\layouts --certificate-file C:\tmp\sideload.pfx --certificate-password "password"
Adding local loopback exemption for PC app connections.
OK.
Hosting starting
Now listening on: https://0.0.0.0:9269
Application started. Press Ctrl+C to shut down.
Hosting environment: Production
Content root path: C:\tmp
Hosting started
```

___
Serve all layouts in the layout path on the default host and port securely upon authenticating the client.

```
C:\>  tak serve --layout-path C:\tmp\layouts --certificate-file C:\tmp\sideload.pfx --certificate-password "certificatePassword" -password "password"
Adding local loopback exemption for PC app connections.
OK.
Hosting starting
User profile is available. Using 'AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Now listening on: https://0.0.0.0:9269
Application started. Press Ctrl+C to shut down.
Hosting environment: Production
```

___

## See also

[Touch Adaptation Kit Command Line Tool (tak.exe)](game-streaming-tak-command-line.md)
