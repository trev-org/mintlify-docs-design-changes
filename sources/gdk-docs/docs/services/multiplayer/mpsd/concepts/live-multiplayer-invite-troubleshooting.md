---
title: "MPSD invite and activity troubleshooting"
description: "Provides troubleshooting for MPSD invite and activity functionality."
kindex: MPSD invite and activity troubleshooting
author: fschober
ms.topic: article
ms.localizationpriority: medium
ms.date: 04/13/2022
edited: 02/17/2023
permissioned-type: public
---

# MPSD invite and activity troubleshooting guide

The following guide is a starting point to assist titles with troubleshooting of invite and activity functionality using the MPSD.

Title developers that use this MPSD functionality and encounter issues, should first ensure that the used MPSD session is valid and no other API errors on MPSD calls or HTTP errors are present.

Without errors, disabled invite/activity join UI is most commonly caused by incorrect title or service configuration.

The best troubleshooting approach is to then follow these steps:

1. Verify that the MPSD session is not closed, locked or is full.  
   Invites and joins are disabled for sessions that are closed (`"closed": true`) or full. Locked MPSD sessions (`"locked": true`) only allow re-joins from previous session members.

2. Verify the Sandbox and titleID of all title instances in the test.  
   All title instances need to be in identical Sandboxes, use the same titleID (and SCID), and the MPSD session template needs to be configured in this Sandbox.

3. Verify all IDs in the MicrosoftGame.config file are set correctly.  
   The MicrosoftGame.config must include the correct titleID, SCID and Identity information matches the Partner Center configuration (visible in 'Game Setup') for your title.

4. Verify that the correct MPSD session configuration is in place for your scenario.  

    - The inviteProtocol constant is defined in the MPSD session. Titles must set the `"inviteProtocol": "game"` constant for correct invite behavior.

    - MPSD session does not include any join restriction. Verify that the joinRestriction property is not set to followed/local to prevent joins of non-followers or restrict joins altogether.

    - MPSD session userAuthorizationStyle property is set correctly. The userAuthorizationStyle property must be enabled for non-console device MPSD sessions and also requires a joinRestriction (either 'local' or 'followed'). This is a system limitation to prevent joins by arbitrary players and cannot be removed.  

    The recommended MPSD template configuration is:

    ```json
     /Constants/System/Capabilities:
         "inviteProtocol" : "game"
         "userAuthorizationStyle": true   (required for non-console devices)
     /Properties/System:
         "joinRestriction" : "none"   (console only) - "followed" (non-console devices) will allow Joins as well as invites. - "local" invite only, no joins allowed.
    ```

5. Verify that invite/join issues are not restricted to cross-device scenarios.  
   If invite/join issues occur only between different console types (Xbox Series X\|S, Xbox One) or between console/PC, then the crossPlay configuration of the title or MPSD session may be incorrect. By default, Xbox One devices will support cross-play if Xbox Series X\|S device family is not set.  

    - Verify that all relevant platforms are enabled in the Partner Center 'Xbox Settings'/'Device families' list once your title is released on additional platforms beyond Xbox One.

    - Verify that the cross-play MPSD session capability is enabled (`"crossPlay": true`).  

    The recommended MPSD template configuration is:

    ```json
     /Constants/System/Capabilities:
         "crossPlay" : "true"   if you want to support crossPlay between supported deviceTypes (Xbox One as the only device in Partner Center default supports Xbox Series X|S)
    ```

6. Verify the ownership behavior of the session is not causing an invite restriction.  
   A session that has hasOwners and a session owner set, also needs to set allowNonOwnerInviteHandles to true for non-owners to send invites. Set this constant accordingly for the desired behavior.

7. Verify the Device availability of your title in Partner Center.  
   The 'Game Setup'/'Device family availability' settings in Partner center can restrict functionality and availability of your title. Ensure all relevant platforms are enabled. By default, Xbox One devices will support cross-play if Xbox Series X\|S device family is not set.

8. Verify that your title is not limited to Private Audience groups.  
   Restricting title visibility to Private Audiences ('Pricing and availability'/'Visibility' in Partner Center) can restrict title access and service functionality. Ensure that both consoles/users are part of the Private Audience group if this is enabled.

9. Verify that the MultiplayerProtocol setting is present in the MicrosoftGame.config file for PC titles.  
   The MultiplayerProtocol setting must be set to true for Windows titles to enable the correct integration the Xbox Game Bar UI. See [MicrosoftGame.config overview](../../../../features/common/game-config/MicrosoftGameConfig-Overview.md) for more details.

10. Verify that you are not accidentally mixing MPA and MPSD service calls.  
   MPSD and MPA services cannot be used at the same time. Doing so will result in unexpected Activity/Join/Invite behavior. Titles must choose only one service.
