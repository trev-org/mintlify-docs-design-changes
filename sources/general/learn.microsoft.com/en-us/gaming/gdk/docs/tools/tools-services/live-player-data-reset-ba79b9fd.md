# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-player-data-reset?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-player-data-reset?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Player Data Reset tool (XblPlayerDataReset.exe)

Feedback

Summarize this article for me

The Player Data Reset tool can be used to reset a player or a group of players' data in test sandboxes. You can reset data such as achievements, leaderboards, stats and title history. An individual account can be reset by its email address or XUID. To reset by XUID, you must first run the XblDevAccount.exe tool to log in the Partner Center account that owns the account to be reset. To reset by the test account's email address, you will need to know the test account's password.

This command-line tool is part of the GDK and, separately, the Xbox services Tools package. To learn how to get the XblPlayerDataReset.exe tool, see [Development tools for Xbox services](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-tools?view=gdk-2604).

## Reset by XUID

To use the Player Data Reset tool to reset a user by their XUID, the developer account used to sign-in (with XblDevAccount.exe) must have proper permission for the specific product. Note "Tools Access" is not an account level permission, it is a product level permission. So, you must grant the "Tools Access" permission for every single product you want to reset the player data for.

1. Log in to Partner Center with a developer account that has administrative privileges.
2. Navigate to the Account setting => Users page: ([https://partner.microsoft.com/dashboard/account/usermanagement](https://partner.microsoft.com/dashboard/account/usermanagement))
3. Click on the user or group that needs the "Tools Access" permission.
4. If the user or group is currently assigned to a standard role (such as Developer), you need to switch to "Customize permissions".
5. On the next page, move to "Product-level" permissions table, expand the "Xbox Live" table header, and find the "Tools access" column.
6. Explicitly check that box for the products or product groups you want to grant the "Tools Access" permission for.

When permissions are setup, the test account data can then be reset as follows:

```
XblPlayerDataReset.exe --scid <SCID> --sandbox <SNDBOX.0> --xuid <XUID1,XUID2,XUID3,...>
```

## Reset by email address

To reset by test account email addresses, you will need to know the password for each test account. Use the command below, which will pop up a window for you to log in as the test user:

```
XblPlayerDataReset.exe --scid <SCID> --sandbox <SNDBOX.0> --user <XXXXXX-aaa@xboxtest.com,XXXXXX-bbb@xboxtest.com,...>
```

## Reset by file

To reset by file, you can pass the file location of either a delmited file of XUIDs, a delimited file of emails, or a [Partner Center account export](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/develop/test-accounts/live-exporting-test-accounts?view=gdk-2604).

```
XblPlayerDataReset.exe --scid <SCID> --sandbox <SNDBOX.0> --file </path/to/file>
```

## Delimiter option

You can optionally set a custom delimiter for any of the above reset options. The default delimiter is a comma (,).

```
XblPlayerDataReset.exe --scid <SCID> --sandbox <SNDBOX.0> --xuid <XUID1*XUID2*XUID3*...> --delimiter *
XblPlayerDataReset.exe --scid <SCID> --sandbox <SNDBOX.0> --user <XXXXXX-aaa@xboxtest.com$XXXXXX-bbb@xboxtest.com$...> --delimiter $
XblPlayerDataReset.exe --scid <SCID> --sandbox <SNDBOX.0> --file </path/to/file> --delimiter %
```

## Output

If the command succeeds or fails, you will see output similiar to what is listed below.

_**Success**_

```
Player {email} data reset has completed successfully.
```

_**Error**_

```
Player {email} data reset has completed with errors:
    Leaderboard reset contains error: {errorMessage}
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

- Last updated on 01/26/2026