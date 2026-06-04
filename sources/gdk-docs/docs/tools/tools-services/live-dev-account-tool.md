---
title: "Developer Account tool (XblDevAccount.exe)"
description: "Manages authentication of a developer account and saves the credentials to be used across other Xbox services executables."
kindex:
- Xbox Live Developer Account tool (XblDevAccount.exe)
- Dev Account tool
- XblDevAccount.exe
- Xbox services, Developer Account tool
- Xbox services, Developer Account tool (XblDevAccount.exe)
- Xbox services, Dev Account tool
- Xbox services, XblDevAccount.exe
ms.topic: article
ms.localizationpriority: medium
author: joannaleecy
ms.date: 03/12/2018
edited: 00/00/0000
permissioned-type: public
---

# Xbox services Developer Account tool (XblDevAccount.exe)

Use the Xbox services Developer Account tool to manage authentication for a Partner Center account.
To interact with other developer tools that require a developer credential, such as Player Reset and Global Storage, you need this tool.
You must grant the Xbox services Tools Access permission to the Partner Center account to use this tool.

This command-line tool is part of the Microsoft Game Development Kit (GDK) and `XboxLiveTools.zip`. For more information, see [Development tools for Xbox Live](live-tools.md).

Use this executable to sign in and out of Partner Center accounts and save credentials for use across other Xbox services executables that require developer credentials.


## Usage

`signin:` This command authenticates the user and saves the last used account information for use across all other executables. The command displays a UI if needed.
``` 
XblDevAccount.exe signin --name xxx
```

| Option | Description |
| --- | --- |
| `-u`, `--name` | Required. The user name of the account. |
| `-t`, `--tenant` | The Microsoft Entra ID tenant of the account. Defaults to "common". |
| `--help` | Display the help screen. |
| `--version` | Display version information. |

***Success output example:***
```
Microsoft Partner Center account {Name} from {Account Source} has successfully signed in.
    ID: {id}
    AccountID: {accountId}
    AccountType: {accountType}
    AccountMoniker: {accountMoniker}
    AccountSource: {accountSource}
```

`signout`: This command deletes the last signed in account information and clears cached tokens.

```
XblDevAccount.exe signout
```

***Success output example:***
```
Microsoft Partner Center account {Name} from {Account Source} has successfully signed out.
```
