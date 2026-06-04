---
title: "MPA troubleshooting guide"
description: "Provides troubleshooting steps for the Multiplayer Activity service."
kindex: MPA troubleshooting guide
ms.topic: article
author: fschober
ms.author: thboard
ms.date: 04/12/2022
ms.localizationpriority: high
edited: 04/12/2022
permissioned-type: public
---

# MPA invite and activity troubleshooting guide

The following guide is a starting point to assist titles with troubleshooting of invite and activity functionality using the MPA service.

Title developers should first ensure that  no errors for MPA API calls or HTTP errors are present. Without errors, disabled invite/activity join UI is most commonly caused by incorrect title or service configuration.

The best troubleshooting approach is to then follow these steps:

1. Verify that the current activity has no limiting `JoinRestriction`, values set to `Followed` or `InviteOnly` limit joinability. 

2. Verify that the `platform` property of the activity or `allowCrossPlatformJoin` invite flag does not restrict crossplay.  
   Setting a specific `platform` value (e.g. `XboxOne`) limits activity platform UI joins and invites to that platform. Setting the `allowCrossPlatformJoin` invite flag to `false`, automatically fills the platform field with the current platform. The invite is only received by players on that platform.

3. Verify the Sandbox and titleID of all title instances in the test.  
   All title instances need to be in identical Sandboxes, use the same titleID (and SCID), and the MPSD session template needs to be configured in this Sandbox.

4. Verify all IDs in the MicrosoftGame.config file are set correctly.  
   The MicrosoftGame.config must include the correct titleID, SCID and Identity information matches the Partner Center configuration (visible in 'Game Setup') for your title.

5. Verify the Device availability of your title in Partner Center.  
   The 'Game Setup'/'Device family availability' settings in Partner center can restrict functionality and availability of your title. Ensure all relevant platforms are enabled. By default, Xbox One devices will support cross-play if Xbox Series X\|S device family is not set.

6. Verify that your title is not limited to Private Audience groups.  
   Restricting title visibility to Private Audiences ('Pricing and availability'/'Visibility' in Partner Center) can restrict title access and service functionality. For example, if the signed-in user is not part of the Private Audience, the returned Recent Player information will not include a proper title name. Ensure that both consoles/users are part of the Private Audience group if this is enabled. 

7. Verify that the MultiplayerProtocol setting is present in the MicrosoftGame.config file for PC titles.  
   The MultiplayerProtocol setting must be set to true for Windows titles to enable the correct integration the Xbox Game Bar UI. See [MicrosoftGame.config overview](../../../../features/common/game-config/MicrosoftGameConfig-Overview.md) for more details.

8. Verify that you are not accidentally mixing MPA and MPSD service calls.  
   MPSD and MPA services cannot be used at the same time. Doing so will result in unexpected Activity/Join/Invite behavior. Titles must choose only one service.

9. The platform UI will not disable activities that are full (`currentPlayers` equal to `maxPlayers`). This is primarily to avoid race conditions, but also `currentPlayers` is an optional field. If you would like to limit joinability in full situations, you will need to delete the activity or handle the error case when a player joins and it is full. Error messaging is recommended since it's already required to be handled via the game. 
