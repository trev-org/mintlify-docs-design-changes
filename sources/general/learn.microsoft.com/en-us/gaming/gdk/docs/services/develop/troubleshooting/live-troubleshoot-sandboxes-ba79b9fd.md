# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/services/develop/troubleshooting/live-troubleshoot-sandboxes?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/develop/troubleshooting/live-troubleshoot-sandboxes?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Troubleshooting Sign-in and Sandbox Errors

Feedback

Summarize this article for me

This article helps you diagnose and fix common sign-in and sandbox-related errors for your game in a development sandbox on PC.

## In this article

- [Preflight checklist](https://learn.microsoft.com/#preflight-checklist)
- [Diagnostic flowchart](https://learn.microsoft.com/#diagnostic-flowchart)
- [Account and sandbox errors](https://learn.microsoft.com/#account-and-sandbox-errors)
- [Configuration errors](https://learn.microsoft.com/#configuration-errors)
- [Game-specific troubleshooting](https://learn.microsoft.com/#game-specific-troubleshooting)
- [Additional troubleshooting](https://learn.microsoft.com/#additional-troubleshooting)
- [Error code quick reference](https://learn.microsoft.com/#error-code-quick-reference)

---

## Preflight checklist

Before investigating specific errors, work through this checklist. Most sign-in issues are caused by one of these items being misconfigured. Verify **all** of the following before proceeding to the diagnostic flowchart and error sections below.

Important

It is critical to have the XblPCSandbox.exe tool already installed. For more detail on how to obtain it, refer to [Sandboxes overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/sandboxes/live-setup-sandbox?view=gdk-2604)

### Environment checks

These items affect your ability to sign in to Xbox services at all—including the Xbox App. Check these first.

---

### ✅ 1. Review the sandbox Id does not have any typos

Make sure the sandbox Id has been typed correctly.

**How to check:**

```
XblPCSandbox /get
```

Compare the output with the sandbox shown on the **Gameplay settings** page in Partner Center. You can do so by using [https://partner.microsoft.com/en-us/xboxconfig?appid=\[productId\]](https://partner.microsoft.com/en-us/xboxconfig?appid=%5BproductId%5D), replacing the \[productId\] parameter with your respective _Product Id_.

**How to fix:**

```
XblPCSandbox <your sandbox ID>
```

See [Sandboxes overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/sandboxes/live-setup-sandbox?view=gdk-2604) for detailed instructions on switching sandboxes.

---

### ✅ 2. Your sandbox is correct

Your PC must be in the same development sandbox that your game's Xbox services configuration has been published to.

**How to check:**

```
XblPCSandbox /get
```

Compare the output with the sandbox shown on the **Gameplay settings** page in Partner Center. You can do so by using [https://partner.microsoft.com/en-us/xboxconfig?appid=\[productId\]](https://partner.microsoft.com/en-us/xboxconfig?appid=%5BproductId%5D), replacing the \[productId\] parameter with your respective _Product Id_.

**How to fix:**

```
XblPCSandbox <your sandbox ID>
```

See [Sandboxes overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/sandboxes/live-setup-sandbox?view=gdk-2604) for detailed instructions on switching sandboxes.

---

### ✅ 3. Your test account is valid

Test accounts can become invalid for several reasons. Verify all of the following:

#### The account's access to the sandbox isn't expired

Test accounts access to sandboxes have an expiration date. Accounts with expired access to the sandbox can't sign in to the sandbox.

**How to check:**

1. Go to [Partner Center](https://partner.microsoft.com/dashboard).
2. Select **Apps and Games**
3. Select **Xbox Test accounts** (or go to [Test accounts management](https://partner.microsoft.com/dashboard/xbox/testaccounts)).
4. Find your test account and check the **Access Expires** and **Status** column.

**How to fix:**

If the account is expired, create a new test account or extend the expiration date for the existing account.

#### The account has access to your sandbox

When you create a test account, you must grant it access to specific sandboxes.

**How to check:**

1. In Partner Center, go to **Xbox services** > **Test accounts**.
2. Select your test account.
3. Verify that your development sandbox is listed under the account's sandbox access.

**How to fix:**

Edit the test account and add your development sandbox to its access list.

#### The credentials are correct

Make sure you're using the correct email address and password for the test account. Test account email addresses typically end in `@xboxtest.com`.

---

### ✅ 4. Xbox gaming components are up to date

Xbox services relies on the Xbox App and the Gaming Services component on your PC. An outdated version of either can cause unexpected sign-in failures.

**How to check:**

1. Follow the information provided for the [Game Repair Tool](https://support.xbox.com/en-MD/help/games-apps/troubleshooting/gaming-services-repair-tool)

---

### ✅ 5. Restart your PC

Sometimes a background service needed for sign-in (such as the Xbox Live Auth Manager or Gaming Services) gets into a bad state. A PC restart can resolve transient issues that the steps above won't catch.

Before doing so, it is important to submit a bug through Feedback Hub so that it can be tracked and addressed in a future release.

You can do so by using the following command:

```
XblPCSandbox /feedback
```

Or, if done directly from Feedback Hub, **Category: Gaming and Xbox** and **Area: Developer Tools**

**When to do this:**

If you've verified all of the environment checks above and sign-in still fails, restart your PC and try again before moving on to the project checks.

---

### Project checks

These items affect sign-in from your game specifically. If you can sign in to the Xbox App but not from your game, start here.

---

### ✅ 6. Your IDs match Partner Center

The IDs in your `MicrosoftGame.config` must exactly match the values in Partner Center. A single mismatched value will prevent sign-in.

**How to check:**

Open your `MicrosoftGame.config` and compare these values against Partner Center:

Expand table

| MicrosoftGame.config field | Where to find it in Partner Center |
| --- | --- |
| `StoreId` | **Game Setup** > **Identity details** > **Show details** > Store ID |
| `Identity/Name` | **Game Setup** > **Identity details** > **Show details** > Package/Identity/Name |
| `Identity/Publisher` | **Game Setup** > **Identity details** > **Show details** > Package/Identity/Publisher |
| `TitleId` | **Xbox services** > **Xbox Settings** > Title ID (**hexadecimal** value, not decimal) |
| `MSAAppId` | **Xbox services** > **Xbox Settings** > MSA App ID (can be a GUID or hexadecimal) |

Additionally, check the **SCID** (Service Configuration ID). The SCID isn't in your `MicrosoftGame.config`—it's passed as a parameter to the [XblInitialize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/xbox_live_global_c/functions/xblinitialize?view=gdk-2604) method. Find it under **Xbox services** > **Xbox Settings** in Partner Center.

Tip

Use the **Store Association Wizard** in the [MicrosoftGame.config Editor](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-editor?view=gdk-2604) to link your game automatically and reduce the chance of typos.

---

### ✅ 7. Xbox services configuration is published to your sandbox

Even after saving changes in Partner Center, they are **not** active until you publish them to your development sandbox.

**How to check:**

1. Go to [Partner Center](https://partner.microsoft.com/dashboard).
2. Select your product.
3. Navigate to **Xbox services** > **Gameplay settings**.
4. Select the tab for your development sandbox.
5. Check the publish status.

**How to fix:**

If changes haven't been published, select **Publish** to push them to your development sandbox. Wait approximately **30 minutes** for the changes to propagate before testing again.

Warning

Clicking **Save** on the Xbox Settings page does **not** publish changes. You must explicitly publish from the **Gameplay settings** page.

---

### ✅ 8. PC Platform is enabled

If you're developing on PC, the **Windows 10 PC** (and later) platform must be enabled for your title. Without this, sign-in will fail with error `0x87dd0005 (AM_E_XAST_UNEXPECTED)`.

**How to check:**

1. Go to [Partner Center](https://partner.microsoft.com/dashboard).
2. Select your product.
3. Navigate to **Xbox services** > **Xbox Settings**.
4. Verify that the **Windows 10 PC** checkbox is **checked**. Do this for the latest Windows versions as well.

**How to fix:**

1. Check the **Windows 10 PC** checkbox.
2. Select **Save**.
3. Go to **Gameplay settings** and **publish** your settings to your development sandbox.
4. Wait approximately **30 minutes** before testing.

---

## Diagnostic flowchart

If the preflight checklist didn't resolve your issue, use this step-by-step process to narrow down the root cause. Start at Step 1 and follow the branches.

```
┌─────────────────────────────────────────────────────────┐
│                  Still can't sign in?                   │
│         Start here after completing the                 │
│              Preflight Checklist                        │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
        ┌───────────────────────────────┐
        │  STEP 1: Can you sign in to   │
        │  the Xbox App with your       │
        │  test account?                │
        └───────┬───────────────┬───────┘
                │               │
            YES ▼           NO  ▼
    ┌───────────────┐   ┌──────────────────────────────────────────────┐
    │  Sandbox and  │   │  Sandbox or account                          │
    │  account are  │   │  issue. Check:                               │
    │  working.     │   │                                              │
    │  Go to Step 2 │   │  • Is the sandbox ID correct?                │
    │               │   │  • Is the account access to sandbox expired? │
    └───────┬───────┘   │  • Does the account have sandbox access?     │
            │           │  • Are the credentials right?                │
            │           │  • Is the Xbox App up to date?               │
            │           │  • Is the Xbox App licensed?                 │
            │           │                                              │
            │           │  See: Account & Sandbox Errors below         │
            │           └──────────────────────────────────────────────┘
            ▼
┌───────────────────────────────┐
│  STEP 2: Can you sign in to   │
│  a sample project with your   │
│  game's IDs?                  │
└───────┬───────────────┬───────┘
        │               │
    YES ▼           NO  ▼
┌───────────────┐   ┌──────────────────────────────┐
│  Config is    │   │  Configuration issue.        │
│  working.     │   │  Check:                      │
│  Go to Step 3 │   │                              │
│               │   │  • Are the IDs correct in    │
└───────┬───────┘   │    MicrosoftGame.config?     │
        │           │  • Are the gameplay settings │
        │           │    published to the sandbox? │
        │           │  • Is the PC Platform        │
        │           │    enabled?                  │
        │           │  • Is the SCID correct in    │
        │           │    XblInitialize?            │
        │           │                              │
        │           │  See: Configuration          │
        │           │  Errors below                │
        │           └──────────────────────────────┘
        ▼
┌───────────────────────────────┐
│  STEP 3: Game-specific issue  │
│  The sample works but your    │
│  game doesn't.                │
│                               │
│  • Compare the MicrosoftGame  │
│    .config files              │
│  • Compare the sign-in code   │
│  • Check the error code in    │
│     reference table below     │
└───────────────────────────────┘
```

---

## Account and sandbox errors

If you could **not** sign in to the Xbox App (Step 1 of the [diagnostic flowchart](https://learn.microsoft.com/#diagnostic-flowchart)), the issue is with your sandbox switch, test account, or Xbox App itself.

### The user isn't in this sandbox (0x8015DC12)

The test account doesn't have access to the sandbox, or the game's configuration doesn't match the sandbox.

**Common causes and fixes:**

Expand table

| Cause | Fix |
| --- | --- |
| IDs in `MicrosoftGame.config` don't match Partner Center | See [checklist item 1](https://learn.microsoft.com/#-1-review_the_sandbox_Id_does_not_have_any_typos) and [checklist item 2](https://learn.microsoft.com/#-2-your-sandbox-is-correct) |
| Test account doesn't have sandbox access | Edit the test account in Partner Center and add your sandbox |
| Test account access to the sandbox is expired | Check the expiration date in Partner Center; create a new account or extend it |
| Using an isolated sandbox instead of shared | Check sandbox type in Partner Center; switch to a shared sandbox unless you have a specific reason to use isolated. See [Isolated vs. shared sandboxes](https://learn.microsoft.com/#isolated-vs-shared-sandboxes). |

### Incorrect sandbox ID

Common mistakes include:

- Missing or extra characters: `XDKS1` instead of `XDKS.1`
- Wrong sandbox: switching to a different sandbox than where your game's config was published

**How to fix:**

1. Run `XblPCSandbox /get` and compare the output against Partner Center.
2. Rerun `XblPCSandbox <correct sandbox ID>` with the exact value from Partner Center.

### Wrong sandbox for test account (Garrison error)

If you see an error message suggesting your account should work in a different sandbox, or the Xbox identity service returns an unexpected error during sign-in, you're likely signed into the wrong sandbox for that test account.

**How to fix:**

1. Run `XblPCSandbox /get` to confirm which sandbox your PC is set to.
2. In Partner Center, go to **Xbox services** > **Test accounts** and verify your test account has access to that sandbox.
3. If the sandbox doesn't match, switch to the correct one: `XblPCSandbox <correct sandbox ID>`

### Xbox App licensing error (0x803F8001)

The Xbox App may fail to launch if you haven't previously opened it in RETAIL.

**How to fix:**

1. Switch to RETAIL: `XblPCSandbox /retail` (or `XblPCSandbox RETAIL`)
2. Open the Xbox App and let it launch fully.
3. Switch back to your development sandbox: `XblPCSandbox <your sandbox ID>`

### Can't find the Xbox App

The Xbox App is available in the Microsoft Store, but **only when you are in the RETAIL sandbox**. If you can't find it:

1. Switch to RETAIL: `XblPCSandbox /retail` (or `XblPCSandbox RETAIL`)
2. Search for "Xbox" in the Microsoft Store and install it.
3. Switch back to your sandbox.

---

## Configuration errors

If you **can** sign in to the Xbox App but **cannot** sign in within your game or a sample project (Step 2 of the [diagnostic flowchart](https://learn.microsoft.com/#diagnostic-flowchart)), the issue is with your game's Xbox services configuration.

### PC Platform not enabled (0x87dd0005, AM\_E\_XAST\_UNEXPECTED)

This error means the Windows 10 PC platform wasn't added in Partner Center. Check for later versions as well.

**How to fix:**

1. In Partner Center, navigate to your product > **Xbox services** > **Xbox Settings**.
2. Check the **Windows 10 PC** checkbox.
3. Select **Save**.
4. Go to **Gameplay settings** and **publish** your settings to your development sandbox.
5. Wait **30 minutes** and try signing in again.

Warning

Clicking **Save** on the Xbox Settings page does **not** publish changes. You must explicitly publish from the **Gameplay settings** page for sign-in to work.

### Xbox services configuration not published

Changes saved in Partner Center aren't active until published to your development sandbox.

**How to fix:**

1. Go to **Xbox services** > **Gameplay settings** in Partner Center.
2. Select your development sandbox tab.
3. Select **Publish**.
4. Wait approximately **30 minutes** for changes to propagate.

### Incorrect IDs in MicrosoftGame.config

A common cause of sign-in errors is one or more mismatched values in `MicrosoftGame.config`.

**How to fix:**

Use the **Store Association Wizard** in the [MicrosoftGame.config Editor](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-editor?view=gdk-2604) to link your game and autopopulate the correct values. Or manually verify each value against Partner Center using [checklist item 1](https://learn.microsoft.com/#-1-your-ids-match-partner-center).

### Incorrect SCID in XblInitialize

The SCID is **not** in `MicrosoftGame.config`—it's passed as a parameter to [XblInitialize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/xbox_live_global_c/functions/xblinitialize?view=gdk-2604). Make sure you're passing the correct SCID from Partner Center (**Xbox services** > **Xbox Settings**).

### Isolated vs. shared sandboxes

Unless you have a specific reason to use an isolated sandbox, use a **shared** sandbox. You can check your sandbox type in Partner Center. Isolated sandboxes have additional restrictions that can cause sign-in failures.

---

## Game-specific troubleshooting

If the Xbox App sign-in works **and** a sample project works with your game's IDs, but your game still can't sign in (Step 3 of the [diagnostic flowchart](https://learn.microsoft.com/#diagnostic-flowchart)), the issue is specific to your game's code or configuration.

### Compare MicrosoftGame.config files

Diff your game's `MicrosoftGame.config` against the working sample. Look for extra or missing fields, formatting differences, or incorrect values.

### Compare sign-in code

Compare your game's sign-in implementation with the sample's code. Look for differences in how `XUserAddAsync` is called (options, callbacks, error handling).

### No default user (0x89245106, E\_GAMEUSER\_NO\_DEFAULT\_USER)

This error means there's no current default user signed in.

**Cause:** You called `XUserAddAsync` with the `AddDefaultUserSilently` option, but no user is currently signed in.

**How to fix:**

Please refer to [`XUserAddAsync`](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync) and [AdvancedUserModel](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-advancedusermodel) for more information.

---

## Additional troubleshooting

### Xbox services is experiencing an outage

If you've exhausted all other options, check whether Xbox services is having an outage:

- [Xbox Status page](https://support.xbox.com/xbox-live-status)

Important

**Known limitation (GDK 26.04):** `XblPCSandbox` fails to switch sandboxes when run over an SSH session. Run `XblPCSandbox` from a local session instead.

---

## Error code quick reference

Expand table

| Error code | Name | Likely cause | Fix |
| --- | --- | --- | --- |
| `0x8015DC12` | User not in sandbox | Mismatched IDs, no sandbox access, expired access for the test account to the sandbox, or isolated sandbox | See [checklist](https://learn.microsoft.com/#preflight-checklist); verify IDs, account access, and sandbox type |
| `0x87dd0005` | `AM_E_XAST_UNEXPECTED` | PC Platform not enabled in Partner Center | Enable **Windows 10 (and later) PC** in Xbox Settings, **publish** to sandbox, wait 30 min |
| `0x89245106` | `E_GAMEUSER_NO_DEFAULT_USER` | No default user signed in; called `XUserAddAsync(AddDefaultUserSilently)` | Refer to [`XUserAddAsync`](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuseraddasync) and [AdvancedUserModel](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/elements/microsoftgameconfig-element-advancedusermodel) for more information on how to address this. |
| `0x803F8001` | Licensing error | Xbox App not previously launched in RETAIL | Switch to RETAIL, launch Xbox App, switch back to dev sandbox |
| `0x80004005` | Generic sign-in failure | Sandbox or account misconfiguration; can also indicate a service-side issue | Work through the [Preflight checklist](https://learn.microsoft.com/#preflight-checklist); verify sandbox ID, test account access, and account expiration. If the issue persists, try restarting your PC and re-switching sandboxes. |

Note

If you see an error code not listed here, please submit the issue through Feedback Hub.

Use xblPcSandbox /feedback to submit the bug

Or, if done directly from Feedback Hub, **Category: Gaming and Xbox** and **Area: Developer Tools**

---

## See also

- [Sandboxes overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/sandboxes/live-setup-sandbox?view=gdk-2604)
- [Advanced sandboxes conceptual overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/sandboxes/live-advanced-sandboxes?view=gdk-2604)
- [Test accounts](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/develop/test-accounts/live-test-accounts?view=gdk-2604)
- [Xbox services configuration overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/portal-config/live-portal-config-overview?view=gdk-2604)
- [MicrosoftGame.config overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604)
- [XblPCSandbox.exe reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-pc-sandbox-switcher?view=gdk-2604)

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