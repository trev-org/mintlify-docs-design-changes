# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-dev-account-tool?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-dev-account-tool?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Xbox services Developer Account tool (XblDevAccount.exe)

Feedback

Summarize this article for me

Use the Xbox services Developer Account tool to manage authentication for a Partner Center account. To interact with other developer tools that require a developer credential, such as Player Reset and Global Storage, you need this tool. You must grant the Xbox services Tools Access permission to the Partner Center account to use this tool.

This command-line tool is part of the Microsoft Game Development Kit (GDK) and `XboxLiveTools.zip`. For more information, see [Development tools for Xbox Live](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-tools?view=gdk-2604).

Use this executable to sign in and out of Partner Center accounts and save credentials for use across other Xbox services executables that require developer credentials.

## Usage

`signin:` This command authenticates the user and saves the last used account information for use across all other executables. The command displays a UI if needed.

```
XblDevAccount.exe signin --name xxx
```

Expand table

| Option | Description |
| --- | --- |
| `-u`, `--name` | Required. The user name of the account. |
| `-t`, `--tenant` | The Microsoft Entra ID tenant of the account. Defaults to "common". |
| `--help` | Display the help screen. |
| `--version` | Display version information. |

_**Success output example:**_

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

_**Success output example:**_

```
Microsoft Partner Center account {Name} from {Account Source} has successfully signed out.
```

---

## Feedback

Was this page helpful?

Yes No No

Need help with this topic?

Want to try using Ask Learn to clarify or guide you through this topic?

Ask Learn Ask Learn

Suggest a fix?

---

## Additional resources

---

- Last updated on 04/22/2026