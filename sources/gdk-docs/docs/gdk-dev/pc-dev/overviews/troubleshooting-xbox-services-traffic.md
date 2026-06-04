---
author: sdgmiller
title: "Troubleshooting Xbox Services traffic for PC games"
description: "Describes how to troubleshoot Xbox Services network traffic for PC games."
kindex:
- Troubleshooting Xbox Services traffic for PC games
- Fiddler, troubleshooting Xbox Services traffic for PC games
ms.topic: article
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# Troubleshooting Xbox Services network traffic for PC games

This article explains how to review a PC game's network traffic when your Microsoft Game Development Kit (GDK) title uses Xbox Services but doesn’t interact with them as expected. Reviewing the traffic helps you identify where the issue occurs.

## Use Fiddler to examine network traffic  

Install [Fiddler](../../../tools/tools-services/live-fiddler-inspect-web-calls.md) to view the game's network traffic to and from xboxlive.com. 

### Expected network traffic

After you install Fiddler, compare the game's network traffic to the expected traffic for Xbox services.

#### Expected network traffic for sign in  

If your game signs a player in, the network traffic includes a packet to userpresence.xboxlive.com:  
`POST https://userpresence.xboxlive.com/users/xuid(2814616665093727)/devices/current/titles/current HTTP/1.1`  
xuid(XXXXXX) is the Xbox User ID of your signed-in test account.  
If the packet doesn't appear, try the following steps. 

* Verify that the values you set in MicrosoftGame.config or your engine’s IDE match the values for your project in Microsoft Partner Center. Ensure that both locations use the same settings.
* Verify that your development PC uses the sandbox that's assigned to your project in Partner Center. To check the current sandbox, open the GDK Command Prompt, and then run `XBLPCSandbox.exe`. If the sandbox doesn’t match the one you expect, set it by running `XBLPCSandbox.exe \<sandbox name>` in the same window. For example: `XBLPCSandbox.exe XDKS.1`.
* Ensure that your test account is signed in. To check this, open the Xbox app, and then confirm that your test account appears.

#### Expected network traffic for querying and setting achievements

If your game requests achievement‑status information for your test account, the network traffic includes a packet to achievements.xboxlive.com that looks similar to the following request. 
`GET https://achievements.xboxlive.com/users/xuid(2814616665093727)/achievements?titleId=1794603332&orderBy=title HTTP/1.1`  

If the request succeeds, the packet has a response that lists the current status of achievements for the test user for your game.

If your game updates an achievement for your test account, the network traffic includes a packet to achievements.xboxlive.com that looks similar to the following request.

```
POST https://achievements.xboxlive.com/users/xuid(2814616665093727)/achievements/00000000-0000-0000-0000-00006af77944/update HTTP/1.1
...
{"action":"progressUpdate","serviceConfigId":"00000000-0000-0000-0000-00006af77944","titleId":1794603332,"userId":"2814616665093727","achievements":[{"id":"1","percentComplete":100}]}
```

If these packets don't appear, or you don't get the expected response, try the following steps.

* Ensure that your test account is signed in. To check this, open the Xbox app, and then confirm that your test account appears.
* Verify that your achievements are published to your sandbox in Partner Center.

For more information about configuring Achievements with Unreal Engine games, see [Getting started with Unreal Engine](../tutorials/get-started-with-unreal-pc/gc-get-started-with-unreal-pc.md#achievements).

#### Expected network traffic for Cloud Saves  

Cloud Save calls don't generate network traffic immediately. Instead, they prompt the `GamingServices` process to send packets to titlestorage.xboxlive.com, following the standard Connected Storage request pattern shown in the following section.
```
PUT https://titlestorage.xboxlive.com/connectedstorage/users/xuid(2814616665093727)/scids/00000000-0000-0000-0000-00006AF77944/lock HTTP/1.1
```
To see the network traffic from the `GamingServices` process in Fiddler, redirect `winhttp` to Fiddler by using the following command in a command shell with administrator privileges. 

```
netsh winhttp set proxy localhost:8888
```

To clear the redirect, use the following command.

```
netsh winhttp reset proxy
```
