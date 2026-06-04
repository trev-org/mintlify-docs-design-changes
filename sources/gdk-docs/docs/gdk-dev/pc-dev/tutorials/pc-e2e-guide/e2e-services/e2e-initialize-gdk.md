---
author: sdgmiller
title: "Initialization and setup"
description: "Describes how to set up the Gaming Runtime and enable your app to use GDK features."
kindex: Initializing the GDK
ms.topic: article
edited: 05/05/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Initializing the Microsoft Game Development Kit

To start using Steamworks after adding it to your game's project, you need to call the `SteamAPI_Init` function
 to initialize the API. Optionally, you can call `SteamAPI_RestartAppIfNecessary` to relaunch the app
through Steam if necessary. Initializing the Microsoft Game Development Kit (GDK) is a bit more involved, because there isn't a unified app used to launch the game and communicate with the different gaming services like there is on Steam.

To start using the APIs in the GDK, you need to use the following steps.

1. Add a *MicrosoftGame.config* file to your project.
2. Initialize the Gaming Runtime service.
3. Initialize the Xbox Services API to make calls to Xbox Live for user identity, cloud saves, achievements,
    and more.
4. Sign the user in to Xbox Live. Store the handle and Xbox User ID (XUID) that was returned after a successful sign-in for future use.

> [!NOTE]  
> On Steam, you have access to the user's Steam ID and all the APIs at load time, because the Steam launcher automatically injects the user's account information when games are launched from their service. The Xbox Live APIs are used by games across multiple launchers, so you don't get this for free. You need to manually sign the user in at launch.  

For information about how to do step 1, see [MicrosoftGame.config overview](../../../../../features/common/game-config/MicrosoftGameConfig-Overview.md).

You can find information about how to do steps 2&ndash;4 in [Getting started with Xbox Live APIs](../../../../../services/fundamentals/xbox-services-api/live-gs-xbl-apis.md)
(or summarized as follows), making sure to implement the behavior that's described in the Cleaning up XSAPI section of that topic as well. After the Gaming Runtime and Xbox Services API have been initialized, you can sign the user in to Xbox Live. You don't need to create an `XTaskQueue` because that's automatically created for you if you leave it blank.

```cpp
#include <XGameRuntimeInit.h>
#include <XTaskQueue.h>
#include <xsapi-c/services_c.h>

// ...

void InitializeXboxLive()
{
    // ...
    HRESULT hr = XGameRuntimeInitialize();
    if (FAILED(hr))
    {
        // handle error: couldn't initialize the Gaming Runtime service.
    }

    XblInitArgs xblArgs = {};
    xblArgs.scid = "00000000-0000-0000-0000-000000000000"; // Add your SCID here that you got from the Partner Center web portal.

    HRESULT hr = XblInitialize(&xblArgs);
    if (FAILED(hr))
    {
        // handle error: couldn't initialize Xbox Live.
    }
    // ...
}
```

## Sign the user in to Xbox Live

Use the [XUserAddAsync API](../../../../../features/common/user/xuser_howto_best_practice_signing_in.md) to sign a user in to Xbox Live. If this is
the first time they're signing in to your game, they're given a list of privileges that your game is requesting. They'll need to explicitly authorize these privileges to access their Xbox Live account.  

After they're successfully signed in, you can use the `XUserHandle` reference that you passed into the [XUserAddResult](../../../../../reference/system/xuser/functions/xuseraddresult.md) function. It can be
used to obtain information about that Xbox Live user, such as their gamertag, gamer photo, sign-in state, age group, and
privileges.  

After the user signs in for the first time, they should be able to successfully sign in silently (that is, with no action
required on their part) if they don't need to resolve a UI prompt (such as a new privacy agreement) since they last
launched the game. However, you'll still need to make these API calls to gain identity access.  

An [XblContextHandle](../../../../../reference/live/xsapi-c/types_c/handles/xblcontexthandle.md) will be needed to call Xbox Live APIs. You can use the
[XblContextCreateHandle](../../../../../reference/live/xsapi-c/xbox_live_context_c/functions/xblcontextcreatehandle.md) function to get an [XblContextHandle](../../../../../reference/live/xsapi-c/types_c/handles/xblcontexthandle.md) by using an `XUserHandle`.  

