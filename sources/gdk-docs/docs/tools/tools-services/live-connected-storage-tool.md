---
title: "Xbox Connected Storage tool (XblConnectedStorage.exe)"
description: "The connected Storage tool enables developers to download save data from their titles."
kindex:
- Download save games
- XblConnectedStorage.exe
- Xbox services, tools
- Xbox services, Xbox Connected Storage tool (XblConnectedStorage.exe)
- Xbox services, XblConnectedStorage.exe
ms.topic: article
ms.localizationpriority: medium
author: joannaleecy
ms.date: 06/24/2021
edited: 00/00/0000
permissioned-type: public
---

# Xbox Connected Storage tool (XblConnectedStorage.exe)

The Xbox Connected Storage tool is used to download game saves. It can download saves from 
any sandbox, including RETAIL. This is helpful when debugging difficult to reproduce issues.

This command-line tool is part of the Microsoft Game Development Kit (GDK) and `XboxLiveTools.zip`; see 
[Development tools for Xbox services](live-tools.md). It's also available in the GDK starting with 
version 2104.

XblConnectedStorage.exe is used to download the connected storage data for a user. The 
[Xbox services Developer Account tool (XblDevAccount.exe)](live-dev-account-tool.md) is required 
to sign in using a developer account prior to using the Xbox Connected Storage tool. 

## Usage
The Connected storage tool can be used to fetch an XML file representing the game save in the 
[import and export file format (NDA topic)](../tools-console/commandlinetools/xbstorage.md#xbstorage_fileformat). 
The XML file is meant for use with the [xbstorage.exe tool)](../tools-console/commandlinetools/xbstorage.md). 
which can be used to import data from the XML file into a connected storage space for use with 
Xbox Development Kit. The tool will handle decompression of gzipped saves automatically.

There are three requirements to fetch the XML file for a game save:
1. A developer account with read permissions for the Tools Access permission. To learn more, 
read about the [permissions needed to use the Connected Storage tool][#permissions-needed-to-use-the-tool]].
2. The Service Configuration ID (SCID) for the title. This can be found in Partner Center.
3. The classic Gamertag for the user whose save is to be pulled.

#### Example command line usage.

```
XblConnectedStorage --scid 00000000-0000-0000-0000-0000628cd0f2 --gamertag CrazyGiraffe
```

#### Command line options
Use the `--help` option to see the full list of available command line options supported by the tool. 

As of version 2020.6.0.0, the output is as follows:
```shell
XblConnectedStorage 2020.6.0.0
Copyright (C) 2021 Microsoft Corporation
USAGE:
Downloads the Connected Storage data for this user to ./output/xbstorage.xml:
XblConnectedStorage --scid 00000000-0000-0000-0000-0000628cd0f2 --gamertag CrazyGiraffe --output ./output/xbstorage.xml
 --sandbox TEST.0

  -c, --scid        Required. The service configuration ID (SCID) of the title

  -s, --sandbox     Required. The target sandbox for title storage

  -g, --gamertag    Required. The legacy gamertag of the player to retrieve storage for

  -o, --output      (Default: ./output/xbstorage.xml) The output file to write the xbstorage xml file to.

  --help            Display this help screen.

  --version         Display version information.
```

### Permissions needed to use the tool
Protecting the privacy of users and game save data is important. A developer account requires certain 
permissions to access the game save data using the Xbox Connected Storage tool. To view or modify 
those permissions for a developer account, follow these steps:

1. Open the [User management page](https://partner.microsoft.com/dashboard/account/v3/usermanagement#users) 
in Microsoft Partner Center
2. Select the user or group whose permissions you want view or modify
3. Click the "Customize Permissions" link
4. Select the product whose permissions you want to view or modify
5. Select "XBOX Live"
6. Select "Tools Access"

A developer account with the "Tools Access" Read permission is needed to download game saves for that 
product.


## Understanding error messages

### 500 Internal Server Error
This error occurs when trying to access a SCID/Sandbox combination that the current developer account 
doesn't have permissions to access. For guidance on how to resolve this issue, see the 
[Permissions needed to use the tool](#permissions-needed-to-use-the-tool) section of this document.
