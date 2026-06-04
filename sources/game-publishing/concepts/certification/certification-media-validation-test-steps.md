---
title: Media Validation Test Steps
description: "Describes the media validation test steps required before the title can release."
services: gaming
author: LukeCraw
ms.author: alexmun
ms.service: gaming
ms.topic: article
ms.date: 10/09/2023
keywords: certification, discs, media, testing
ms.localizationpriority: medium
permissioned-type: public
---

# Media validation test steps

All media produced for the Xbox One platform needs to be verified before the title can be released. Media verification is conducted by Certification. To improve transparency and help ensure serious issues don’t make their way to the marketplace, we’ve published our disc check information here. Although this document provides step-by-step instructions, testers should use the test cases in the appendix at the bottom of this page for speed. The steps in this document match the tracking table.

Several Xbox One consoles are required for the test, which are labeled as follows.

**Xbox One A**  
This is an offline console. At the start of each test day, the flash version of this console needs to be compared to Xbox B. If there's a difference (for example, Xbox B received an update) then Xbox A must be connected to Xbox Live to also receive the flash update.

IMPORTANT – After receiving the update, Xbox A must be disconnected from the Xbox Live service and only reconnected again when the flash version goes out of sync.

To check the flash version, select: **ALL SETTINGS > SYSTEM > CONSOLE INFO & UPDATES > OS VERSION**.

**Xbox One B**  
This is an online console. This console is connected to the Xbox Live service at all times in test, and therefore is automatically on the RETAIL OS flash. Xbox B is connected to the CERT sandbox in Certification, but for external publishers, set your console to the RETAIL sandbox.

This can be verified by navigating to **SETTINGS > SYSTEM > CONSOLE INFO & UPDATES** and pressing LB, RB, LT, RT quickly and consecutively.

* LB (Left Bumper, the button on the top of the controller above the left trigger)
* RB (Right Bumper, the button on the top of the controller above the right trigger)
* LT (This is the Left Trigger)
* RT (This is the Right Trigger)

Further testing on the Xbox One family of devices should occur to make sure **offline and online installs work as intended on Xbox One, Xbox One S, and Xbox One X. This is especially important for games supporting intelligent delivery**.

## What are some of the issues I could find?

All discs on Xbox undergo rigorous checks at several stages of the manufacturing process.

**These tests are the minimum required before releasing discs to customers. Publishers must be aware that they are ultimately responsible for validating their products before approving the product’s release.**

* Does the disc-version of the game pass the console’s security checks? This is visible if the game encounters any problems during the installation process and is also the reason why we eject the disc multiple times. Each time the console reads the disc, a security check is performed, thus why we eject and reinsert the disc 10 times.
* Is the correct XVC version on the disc instead of an older version?
* Can the game install, launch, and be played while on an offline Xbox One? If a corrupted or old build of a game somehow makes its way to a disc, then it will be forced to seek an update from Xbox Live.
* Can the game install, launch, and be played while on an online Xbox One without constantly seeking an update from Xbox Live? Similar to the above, if the wrong game made its way onto the disc and a newer version exists on Xbox Live, it will seek an update from Xbox Live.
* Games that support intelligent delivery might request installation from Xbox Live on an offline console, but fail to pull down files and therefore won't properly install on an Xbox One S or Xbox One X.

## How to test on the first console (offline)

The following guide describes in detail how to perform each of the steps within the Xbox One Disc Verification Excel checklist. Refer to each description and associated image(s) for guidance before passing or failing each step.

This is for the first of your consoles, which is **OFFLINE**. Check that its OS recovery version matches the online console using the instructions above. If there's a mismatch and the console requires an update, initiate the update and then return the console to an offline state.

#### Step 1:

Ensure that the console is completely **offline**. To do this, you need to remove the Ethernet cable from the back of the console. Ensure that the console remains offline for the course of this test. No wireless internet connection should be enabled.

Turn on the console. Make sure the console operating system matches the operating system of the online console.

#### Step 2:

Refer to the title’s list of supported languages to choose a supported language. Once you understand the new console language(s), change the console language accordingly by navigating to **SETTINGS > SYSTEM > LANGUAGE & LOCATION.**

#### Step 3:

Sign in to the Silver Xbox profile by pressing the Xbox button to sign in from the top left of the **Xbox Home** screen. This will be the only profile on the console. This opens the account picker. Select **Sign in** on the Silver Xbox profile. Refer to your account tracking sheet and ensure you're using the correct profile.

If the console is offline, the **Xbox Home** screen will display **Connect to Xbox Live**.

#### Step 4:

Ensure that the disc is clean and that there are no scratches or dirt deposits. If there are any disc issues, replace the disc.

#### Step 5:

Check that the disc’s Binary ID matches the build required for the test. The disc’s Binary ID is displayed on the inner ring of the disc and uses an 8-digit hexadecimal format (for example, 0000012D). If it's a multi-disc title, repeat for each disc. 

**Refer to the disc order and ensure that the numbers match.**

#### Step 6:

Insert the disc into the console.
 
#### Step 7:

Observe that the installation begins and an incrementing progress bar is displayed within the title’s installation progression tile. This is an example title, not necessarily the one you're testing.

To pause installation, select the title’s installation progression tile, highlight the game installation tile, press the Menu button on the controller, and select **Pause Installation**.

You might see a **queued** status for a few seconds. This should last for no more than 30 seconds before installing and can be ignored, provided the title eventually installs itself.

#### Step 8:

Observe that a pop-up toast displays the name of the title being installed.

Some titles are small in size, which makes following steps [8] – [14] difficult to complete. We recommend completing these steps as soon as possible and before the title is fully installed.

#### Step 9:

Eject the disc from the console by pressing the disc eject button on the front of the console to the right of the disc slot.

#### Step 10:

Wait 10 seconds for the console to correctly terminate the game and stop all background processes.

#### Step 11:

Insert the disc and repeat steps [6] – [10] TEN times with each disc before the full game installation completes. This is checking that the console reads the disc correctly multiple times and that security on the disc is correctly validated.

#### Step 12:

At the end of the above, the disc should be out of the console. Insert the disc back into the console.

#### Step 13:

Installation begins with an incrementing progress bar on the title’s installation progression tile.

#### Step 14:

Observe that after a certain percentage of the title is installed, a pop-up toast displays **Ready to Start**. This means that the initial chunk required to launch the title is installed (if supported).

Some titles are small and the whole game is contained in the launch chunk, so rather than the above message, the title will only complete installation. This is fine.

If you eject and then reinsert the disc at this stage, the title will either automatically launch or be available to launch again.

#### Step 15:

Select the title’s installation progression tile, highlight the game installation tile, and press the A button to launch the title. The title’s installation progression tile refers to the tile displayed on the **Xbox Home** screen that contains the title’s name and that now displays **Ready to Start** within it. If the title fully installed in the launch chunk as mentioned earlier, the tile is no longer available and can be launched via the title tile.

#### Step 16:

Once the title is launched, proceed to active gameplay in the main game mode (for example, _Campaign_). Gain as much progress as possible before the installation reaches 100%, which will continue in the background during gameplay. If there was no launch chunk and the full title was installed prior to launch, move straight to step [17].

#### Step 17:

Observe that once the title is fully installed, a pop-up toast might be displayed (this isn't mandatory). For some titles, this isn't supported, so press the Xbox button and check on the progress of the installation. This is also visible on the console’s **Home** menu.

#### Step 18:

Continue gameplay for another 5 - 10 minutes after the title is fully installed. Check that all gameplay content seems identical across each console irrespective of the console's language. We want to make sure that the languages are installed and gameplay functions as you would expect. Report anything you're concerned about.

#### Step 19:

Eject the disc from the console. If the title is still running when you eject the disc, the title should terminate. If the title was correctly installed, you should be returned to the **Xbox Home** screen.

#### Step 20:

Turn off the console by holding the power button for 10 seconds. Make sure the console isn't in a connected standby state by removing the power cable from the back of the console and leaving it for about 30 seconds. This ensures all background processes are finished.

#### Step 21:

Reinsert the power cable into the back of the console and power the console on.

#### Step 22:

Press the Xbox button to sign in from the **Xbox Home** screen. Then select the same Silver profile as in step [3].

#### Step 23:

Select **My Games & Apps**, navigate to **Games** and then navigate to the title. Highlight the title’s tile and then press the A button to launch the title.

#### Step 24:

The title shouldn't launch without the disc in the console. A message should appear on screen prompting the user to either insert the disc or to connect to Xbox Live. This is passing behavior (see images). If the title launches without the disc in the console, then this is failing behavior.

#### Step 25:

Repeat steps [4] – [24] with all other discs if the game is part of a multi-disc package. If the disc is a single disc, then mark this as _Incomplete_. If there are multiple discs, then mark this as _Complete_.

#### Step 26:

Once finished, the title must be uninstalled. To do this, return to the **Xbox Home** screen and select **My Games & Apps**. Highlight the title’s tile and press the Menu button. Select **Manage Game & add-ons**. Select **Uninstall**.

#### Step 27:

Return the console to its default language/locale combination by navigating to **SETTINGS > SYSTEM > LANGUAGE & LOCATION**.

**The offline test is now complete.**


## How to test on the second online console

The following guide describes in detail how to perform each of the steps within the Xbox One Disc Verification Excel checklist. Refer to each description and associated image(s) for guidance before passing or failing each step.

#### Step 1:

Make sure that the console is **online**. To do this, you need to ensure the Ethernet cable is connected to the back of the console and has an internet connection. The console must remain online for the course of this test unless otherwise directed. Verification of the console successfully being connected to the Internet can be made during step [3]. Turn on the console by pressing the power button on the front of the console.

#### Step 2:

Refer to the title’s list of supported languages and choose one. Once you understand the new console language(s), change the console language accordingly by navigating to **SETTINGS > SYSTEM > LANGUAGE & LOCATION**.

#### Step 3:

Sign in to the Gold Xbox profile by pressing the Xbox button to sign in from the top left of the **Xbox Home** screen. This will be the only profile on the console. This opens the account picker. Select **Sign in** on the Gold Xbox profile (refer to your account tracking sheet and ensure you're using the correct profile).

If the console is offline, the **Xbox Home** screen will display **Connect to Xbox Live**.

#### Step 4:

Ensure that the console sandbox ID is set to the CERT. This can be verified by navigating to **SETTINGS > SYSTEM > CONSOLE INFO** and pressing LB > RB > LT > RT quickly and consecutively, and then selecting **DEVELOPER SETTINGS**. This stands for:
 
* LB (Left Bumper, the button on the top of the controller above the left trigger)
* RB (Right Bumper, the button on the top of the controller above the right trigger)
* LT (This is the Left Trigger)
* RT (This is the Right Trigger)

#### Step 5:

Ensure that the disc is clean and that there are no scratches or dirt deposits on the readable side of the disc. In addition, check that the disc’s Binary ID matches the build required for test. The disc’s Binary ID is displayed on the inner ring of the disc and uses an 8-digit hexadecimal format (for example, 0000012D). The same binary ID is also printed in small font in the inner ring of the underside of the disc. Refer to your own documents and ensure that the numbers match.

#### Step 6:

Insert the disc into the console.

#### Step 7:

Ensure that the console doesn't prompt the user to update the title.

#### Step 8:

Observe that the installation begins and an incrementing progress bar is displayed within the title’s installation progression tile.

To pause installation, select the title’s installation progression tile, highlight the game installation tile, press the Menu button on the controller, and select **Pause Installation**.

You might see a **queued** status for a few seconds. This should last for no more than 30 seconds before installing and can be ignored, providing the title eventually installs itself.

Some titles are small in size, which makes following steps [8] – [14] difficult to complete. We recommend completing these steps as soon as possible and before the title fully installs.

#### Step 9:

Observe that a pop-up toast displays the name of the title being installed.

#### Step 10:

Eject the disc from the console by pressing the disc eject button on the front of the console to the right of the disc slot.

#### Step 11:

Wait 10 seconds.

#### Step 12:

Insert the disc and repeat steps [6] – [11] TEN times with each disc before installation fully completes. This is checking that the console reads the disc correctly multiple times and that the security on the disc is correctly validated.

#### Step 13:

At the end of the above, the disc should be out of the console. Insert the disc back into the console.

#### Step 14:

Installation begins with an incrementing progress bar on the title’s installation progression tile.

#### Step 15:

Observe that a pop-up toast displays the name of the title being installed. This is an example title, not necessarily the one you're testing.

#### Step 16:

Observe that after a certain percentage of the title installation is complete, a pop-up toast displays **Ready to Start**. This means that the initial chunk required to launch the title is installed (if supported).

#### Step 17:

Observe that once the title is fully installed, a pop-up toast is displayed. For some titles, this isn't supported, so press the Xbox button and return to the **Home** screen occasionally to check on the progress of the installation.

#### Step 18:

Upon reaching full installation, launch the title and proceed to active gameplay for 5 - 10 minutes. Check that all gameplay content seems identical across each console, irrespective of the console language. We want to make sure that the languages are installed and gameplay functions as you would expect. Report anything you're concerned about. Once complete, terminate the title.

#### Step 19:

Physically disconnect from Xbox Live and ensure that the console is **offline**. To do this, you need to remove the Ethernet cable from the back of the console. Ensure that the console remains offline for the course of this test. No wireless internet connection should be enabled.

#### Step 20:

Turn off the console by holding down the power button for 10 seconds and then press the same power button to turn the console back on. Sign in to the same Gold Xbox profile from step [3] by pressing the Xbox button to sign in from the **Xbox Home** screen. This opens the account picker. Select **Sign in** on the Gold Xbox profile (refer to your account tracking sheet and ensure you're using the correct profile).

#### Step 21:

Launch the exact same title via its title tile or **Game Library**.

#### Step 22:

Play the title for a further 5 to 10 minutes to ensure gameplay can resume.

#### Step 23:

Repeat steps [4] – [22] with all other discs if the game is part of a multi-disc package. If the disc is a single disc, then mark this as _Incomplete_. If there are multiple discs, then mark this as _Complete_.

#### Step 24:

Once finished, the title must be uninstalled. To do this, return to the **Xbox Home** screen by pressing the Xbox button in the center of the controller and selecting **My games & apps**. Highlight the title’s tile and press the Menu button. Select **Manage Game & add-ons**. Select **Uninstall**. You can now turn off the console.

#### Step 25:

Return the console to its default language/locale combination by navigating to **ALL SETTINGS > SYSTEM > CONSOLE INFO > LANGUAGE & LOCATION**. Then, reconnect the network cable ready for the next test.

The online test is now complete.

## Validation on Additional Consoles

In addition to making sure these tests are performed on the entire family of Xbox One devices, there are several additional consoles available for both Worldwide discs (non-Chinese language) and Chinese language discs (also known as Pegasus). Repeat the same steps according to this Media Verification Replicator Disc Process based on their online or offline connectivity for each additional console. Refer to the checklist below for further details about which extra consoles to test.

## Supported Languages for Testing

As of September 2019, the Xbox One console supports the following languages:

Language as written – English Translation
Language Region as written – English Translation

- Danish
  - Dansk

- German
  - Deutschland – Germany
  - Österreich – Austria
  - Schweiz – Switzerland

- English
  - Australia
  - Canada
  - Czech Republic
  - Greece
  - Hong Kong SAR
  - Hungary
  - India
  - Ireland
  - Israel
  - New Zealand
  - Saudi Arabia
  - Singapore
  - Slovakia
  - South Africa
  - UAE
  - United Kingdom
  - United States

- Spanish
  - Español
  - Argentina – Argentina
  - Chile – Chile
  - Colombia – Mexico
  - España – Spain

- French
  - Français – French
  - Belgique – Belgium
  - Canada – Canada
  - Français – France
  - Suisse - Switzerland

- Italian
  - Italiano

- Nederlands
  - Dutch
  - België – Belgium
  - Nederland – Netherlands

- Norsk (Bokmål)
  - Norwegian

- Polski
  - Polish

- Português 
  - Portuguese
  - Brasil – Brazil
  - Português – Portugal

- Русский
  - Russian

- Suomi
  - Finnish

- Svenska
  - Swedish

- Türkçe
  - Turkish

- 한국어 
  - Korean

- 中文(简体)
  - Chinese Simplified

- 中文(繁體)
  - Chinese Traditional

- 香港特別行政區
  - Hong Kong SAR

- 台灣
  - Taiwan

- 日本語 
  - Japanese

## Appendix - Media validation checklist

Step | Test A - OFFLINE console (to be checked on an Xbox One, Xbox One S, and Xbox One X) | Status | Result
-----|-------------------------------------------------------------------------------------|--------|-------
1 | Power up a console with no network connection - this will remain offline. Ensure this console is on the correct OS by comparing to the Online Greybull (refer to documentation for help). |  |
2 | Ensure the console is set to the correct language and locale combination |  |
3 | Sign in to SILVER profile. |  |
4 | Check the disc is clean and scratch-free. |  |
5 | Validate the BinaryIDs on each of the discs match the builds required for test. Be extra aware if you're testing a multi-disc submission. |  |
6 | Insert the first disc into console. |  |
7 | Installation begins with an incrementing progress bar on the title’s installation progression tile. |  |
8 | On-screen prompt displays the name of the game being installed and an Installation Started message. |  |
9 | Eject Disc. |  |
10 | Wait 10 seconds. |  |
11 | Insert disc. Repeat steps [6]-[10] ten times with each disc before full game installation. The final of these 10 ends with disc ejected. |  |
12 | Insert disc into console. |  |
13 | Installation begins with an incrementing progress bar on the title’s installation progression tile. |  | 
14 | Launch chunk installs. "Ready to Start" message is displayed within the title’s installation progression tile (refer to documentation for help). |  |
15 | Highlight Live tile and launch the title. Note: If this is a multi-disc title, it might not be possible to play until disc two is also installed. |  |
16 | When the game is ready, enter main game mode and attempt to get as much progress as possible. |  |
17 | Progress bar reaches 100% and on-screen prompt might be displayed indicating full installation has completed. |  |
18 | Play for a further 5 - 10 minutes. |  |
19 | Eject disc. |  |
20 | Turn off the console fully - pull the plug. Leave for about 30 seconds. |  |
21 | Reinsert the plug and turn on the console. |  |
22 | Sign in the same SILVER profile used for Step 3. |  |
23 | Attempt to launch the title via title tile or Game Library. |  |
24 | Title shouldn't launch without disc in tray. The user is prompted to insert the disc or to connect to Xbox Live. |  |
25 | Repeat steps [4] - [24] for disc two, if supported. |  |
26 | Once completed, uninstall the title from the console. |  |
27 | Change your language to the next supported, if applicable. |  |

Step | Test B - ONLINE console (to be checked on an Xbox One, Xbox One S, and Xbox One X) | Status | Result
-----|------------------------------------------------------------------------------------|--------|-------
1 | Power up a console with an internet connection and an Xbox Live connection. |  | 
2 | Ensure the console is set to the correct language and locale combination |  | 
3 | Sign in to GOLD profile. |  | 
4 | Verify the console's Sandbox ID in the Developer Settings menu (refer to documentation for help) |  | 
5 | Check the disc is clean and scratch-free and validate the BinaryIDs on each of the discs match the builds required for test. Be extra aware if you're testing a multi-disc submission. |  | 
6 | Insert the first disc into console. |  | 
7 | The console doesn't prompt the user that the title needs an update. |  |  
8 | Installation begins with an incrementing progress bar on the title’s installation progression tile. |  | 
9 | On-screen prompt displays the name of the game being installed and an Installation Started message |  | 
10 | Eject the disc. |  | 
11 | Wait 10 seconds. |  | 
12 | Insert disc. Repeat steps [6]-[11] ten times with each disc before full game installation. The final of these 10 ends with disc ejected. |  | 
13 | Insert disc into console. |  | 
14 | Installation begins with an incrementing progress bar on the title’s installation progression tile. |  | 
15 | On-screen prompt in the form of a pop-up toast displays name of game being installed. |  | 
16 | Launch chunk installs. "Ready to Start" message is displayed within the title’s installation progression tile (refer to documentation for details). |  | 
17 | Progress bar reaches 100% and on-screen prompt might be displayed indicating full installation has completed. |  | 
18 | Play for 5 - 10 minutes. If this is a multi-disc title, it might not be possible to play until disc two is also installed.|  | 
19 | Physically disconnect Xbox Live connection.|  | 
20 | Reboot console and sign back in with the same GOLD profile used in Step 3.|  | 
21 | Launch the exact title via title game tile or Game Library.|  | 
22 | Play for 5 - 10 minutes.|  | 
23 | Repeat steps [5] - [22] for disc two, if supported.|  | 
24 | Once completed, uninstall the title from the console and eject the disc.|  | 
25 | Change your language to the next supported, if applicable, and reconnect the network cable.|  | 
