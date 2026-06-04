---
title: "Configuring Game DVR in Partner Center"
description: "Configuring Xbox services Game DVR in Partner Center."
kindex:
- Configuring Game DVR in Partner Center
- Game DVR
- Game DVR, enabling for a Windows game
- Enabling Game DVR for a Windows game
- Configuring Xbox services Game DVR strings in Partner Center
- strings, configuring Xbox services Game DVR in Partner Center
- Game DVR, strings
- Xbox services, Configuring Game DVR in Partner Center
- Xbox services, Game DVR
- Xbox services, Enabling Game DVR for a Windows game
- Xbox services, Configuring Xbox services Game DVR strings in Partner Center
- Xbox services, Configuring Xbox services Game DVR in Partner Center
- Xbox services, Strings
- Xbox services, Game DVR strings
ms.topic: article
ms.assetid: e0f307d2-ea02-48ea-bcdf-828272a894d4
ms.localizationpriority: medium
author: joannaleecy
ms.date: 10/30/2017
edited: 00/00/0000
permissioned-type: public
---

# Configuring Game DVR in Partner Center

On Xbox One, one of the most popular features is Game DVR, which allows gamers easy access to recording, editing and sharing their most epic gaming moments.

## Game DVR strings  

The Game DVR strings will appear as the title for any developer-created game DVR clips in your title.

Configuring the string in the service will ensure that the correct localized version of that string shows up in any apps where that clip is featured.
For example, if you wanted to create a clip when a user beats the final boss of your title, you could start by configuring a string called 'Boss Battle'.
When making the call in your title code to create the clip, you would reference the ID.

To configure Game DVR strings that are associated with your game, you can use [Partner Center](https://partner.microsoft.com/dashboard).

**To add a game DVR string:**

1. Go to Partner Center and select your title.

2. Select **Xbox services** > **Gameplay settings** in the left navigation pane. The **Gameplay Setting** page appears.

3. Select **Game DVR** or **Game Clips**. The "Gameplay Setting" page is refreshed and the Game Clips information appears.

4. Select the **Create new string** button. The "New game dvr string" dialog appears.

   
   
   
   ![The "New game dvr string" dialog box](../../../../media/public-images/live/test-release/portal-config/live-game-dvr-images/game-dvr-1.png)
    
5. Enter the Game DVR string, and then click the **Confirm** button.


## Enabling Game DVR for Windows games

Checking **Customers can use Windows 10 features to record and broadcast clips of this game** in Partner Center will enable Game DVR for a Windows game. 
