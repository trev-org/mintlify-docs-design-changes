---
title: "Retrieving game save files generated during certification testing"
description: "How to use GDK tools to get save files from the CERT sandbox and apply them to test accounts for developer testing."
kindex:
- certification
- CERT sandbox
ms.topic: article
ms.localizationpriority: medium
author: wleach
ms.author: wleach
ms.date: 05/16/2023
edited: 00/00/0000
permissioned-type: public
---

# Retrieving game save files generated during certification testing

## So, your certification report has crashes listed?

This is not uncommon, especially during optional certification test passes before all the bugs have been squashed.  The challenge can often be reproducing these issues in a development build back in the studio.

If crash dumps are unavailable or unhelpful, perhaps the save file from the account cert were using could be.  By applying the save file from the cert test account to your dev sandbox test account, you may be able to home in on the issue more readily.

This article shows you how.

## How to get the save from CERT and apply it to your test account

[XblConnectedStorage](../../../tools/tools-services/live-connected-storage-tool.md) will get the save blob from Xbox Live CERT sandbox.

[Xbstorage](../../../tools/tools-console/commandlinetools/xbstorage.md) will be used to apply the save to a test account in the dev sandbox for console.

[Xgamesaveutil](../../../tools/tools-pc/commandlinetools/gr-xgamesaveutil.md) will be used to apply the save to a test account in the dev sandbox for PC.


### Pre-requisites

1. [GDK or GDK Tools](https://aka.ms/gdkdl) installed on the PC being used
2. Login credentials to the Partner Center account from which the game is published
   * with Xbox Live "Tools Access" permission to the game product ([permissions documentation](/windows/apps/publish/partner-center/assign-product-level-custom-permissions-to-account-users#xbox-live-))
   * if the login is a guest account on you will need the Microsoft Entra tenant name on which the account is a guest (probably in the form ?.onmicrosoft.com).
3. Xbox Service Configuration ID (SCID) of the game from the Game Setup/Identity details section in Partner Center.
4. Package Family Name (PFN) of the game from the same location.
5. Gamertags of the accounts for which you wish to retrieve the saves, provided by the certification team.
6. Sandbox name that certification were using: CERT or CERT.DEBUG.
7. Email address of the test account to which you wish to apply the save.

### Retrieve the save blob from Xbox Live

1. Open a GDK command prompt window
2. Sign into the Partner Center account from Pre-requisite #2 using [xbldevaccount](../../../tools/tools-services/live-dev-account-tool.md), for example:
   <pre>C:\temp>xbldevaccount signin --name billyray@mylovelygamecompany.com</pre>

   If you are signing in as a guest on another tenant, use the --tenant option, for example:

   <pre>C:\temp>xbldevaccount signin --name billyray@mylovelygamecompany.com --tenant sombodyelseslovelygamecompany.onmicrosoft.com</pre>
3. Use XblConnectedStorage command line to pull the save from Xbox Live, for example:
   <pre>C:\temp>xblconnectedstorage --scid 00000000-0000-0000-0000-000012345678 -s CERT --gamertag "2 SomeCertAccount" --output .\GameSaveFrom2SomeCertAccount.xml
   Using Dev account billyray@mylovelygamecompany.com from WindowsDevCenter
   Operation complete. Downloaded 4 save containers to .\GameSaveFrom2SomeCertAccount.xml.</pre>


If all is successful, you should now have the save blob in the xml file you specified.  You should be able to see the base64 encoded binary blobs within.  More information on the file format is available [here (NDA topic)](../../../tools/tools-console/commandlinetools/xbstorage.md#xbstorage_fileformat).

### Apply the save to the test account (console)

Follow the instructions in the xbstorage documentation to apply the xml file to the storage space, for example:

<pre>C:\temp>xbstorage import .\GameSaveFrom2SomeCertAccount.xml /msa:MLGC-MyTestAccount0000@xboxtest.com /replace /verbose</pre>

### Apply the save to the test account (PC)

Follow the instructions from the XGameSaveUtil documentation to apply the xml file to the storage space, for example:

<pre>C:\temp>xgamesaveutil import .\GameSaveFrom2SomeCertAccount.xml /pfn:mygame_xxxxxx /replace</pre>

## Caveats

### Timing

Due to the way certification need to test, the account may continue to be used after the issue has occurred.  Certification reports are typically issued after testing is complete.

This may result in the save on Xbox Live being more up to date than the one used at the time the issue was experienced.

### Xblconnectedstorage output directory

If you don't supply --output to xblconnectedstorage.exe, it will try to output into the current working directory.  If you've just started a GDK command prompt, that will likely be your Windows System directory, so xblconnectedstorage will fail.  Recommend being explicit and supplying --output parameter to point to your writable location.

### Modern gamertags

This procedure is currently untested with modern gamertags.