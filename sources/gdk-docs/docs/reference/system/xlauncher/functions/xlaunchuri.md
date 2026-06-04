---
author: M-Stahl
title: "XLaunchUri"
description: "Launches a URI on behalf of a user."
kindex: XLaunchUri
ms.author: michaelk
ms.topic: reference
edited: 03/10/2025
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XLaunchUri  

The Microsoft Game Development Kit (GDK) Launcher API provides a mechanism that enables games to launch an experience by invoking a URI.


## Syntax  
  
```cpp
HRESULT XLaunchUri(  
         XUserHandle requestingUser,  
         const char* uri  
)  
```  
  
### Parameters  
  
*requestingUser* &nbsp;&nbsp;\_In\_opt\_  
Type: XUserHandle  

  
Defines a handle identifying the user that makes the request.  


*uri* &nbsp;&nbsp;\_In\_z\_  
Type: char*  

  
String that indicates the URI to launch.  


  
### Return value
Type: HRESULT
  
HRESULT success or error code. 

Returns S_OK if successful; otherwise it returns an error code. For a list of error codes, see [Error Codes](../../../errorcodes.md).

| Return Code           | Description             |
|-----------------------|-------------------------|
| S_OK                  | The operation succeeded. |
| E_GAMEPACKAGE_NO_PACKAGE_IDENTIFIER | The URI passed in to this function attempted to launch an app to the background, but no suitable app could be found. It may not be installed. |
  
## Remarks
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
This launches another app via URI. It also accepts an optional user context and a required URI.

If successful, the destination URI is launched. Otherwise, an error is returned. This method is not considered time critical, and blocks until the underlying async system operation is completed, and either the destination URI has been launched, or an error has occurred.

If no app exists to handle the given URI's protocol scheme, the system  displays a prompt to the user asking if they would like to search the Windows Store for an application that handles that scheme.

### Launching into the Background

On console, Universal Windows Apps that have the [backgroundMediaPlayback](/windows/uwp/audio-video-camera/background-audio) capability in their appxmanifest file can be launched into the background instead of the foreground. To do this, prepend your URI with the string "ms-bgm-". For example, if your background media application responds to the protocol "companion-music-app://", then you could launch it into the background with the uri "ms-bgm-companion-music-app://". When the app receives the activation, the URI obtained from the [ProtocolActivatedEventArgs](/uwp/api/windows.applicationmodel.activation.protocolactivatedeventargs) will not include the "ms-bgm-" prefix.

When called in this way, XLaunchUri does not show the user a prompt when no suitable app is installed. Instead, if your game is using the April 2025 version of the GDK or later, it returns E_GAMEPACKAGE_NO_PACKAGE_IDENTIFIER. Your code can check for this return value and use it to display remediation UI to the user, as appropriate.

On PC, when XLaunchUri is called in this way it simply removes "ms-bgm-" from the beginning of the URI before launching it normally. It has no other effect on the system behavior on PC.

Here's an example of calling XLaunchUri to launch a companion music application:

```cpp
HRESULT BeginPlayingMusic(XUserHandle user)
{
    // Launch a well-known companion music application.
    // The game and app both need to agree on the URI scheme.
    HRESULT hr = XLaunchUri(user, "ms-bgm-companion-music-app://launch?play=true");
    if (hr == E_GAMEPACKAGE_NO_PACKAGE_IDENTIFIER)
    {
        // If the music app isn't installed, launch the store page so the user can download it.
        return XLaunchUri(user, "ms-windows-store://pdp/?ProductId=9FAKESTOREID");
    }

    return hr;
}
```

## Requirements  
  
**Header:** XLauncher.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XLauncher](../xlauncher_members.md)
  
  