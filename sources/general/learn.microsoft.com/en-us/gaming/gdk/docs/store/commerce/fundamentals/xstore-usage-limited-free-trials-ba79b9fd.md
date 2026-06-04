# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-usage-limited-free-trials?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-usage-limited-free-trials?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Implementing trials for your game

Feedback

Summarize this article for me

You can configure several different types of free trials for your game:

- _Time-limited free trials_ - These trials expire after a certain amount of _calendar_ time passes (for example, seven days after the user downloads the trial, regardless of how long they use it).
- _Usage-limited free trials_ - Allows configuration to let the user run the game for a certain amount of _game runtime_, then requires that the user purchase the game to continue using it.
- _Curated trials_ - These trials have no expiry or game runtime limits, but the game can limit what is playable. Similar to a demo, but the whole game is required to be downloaded.

Note

Time- and Usage-based trials are intended to be offered once per title per user and must not be mixed with other trial offers. Expired or exhausted trial entitlements stay on the user account and prevents acquisition of any extra trial offers for the same game. Trial type can't be altered or reset once a trial is acquired by a customer.

Note

Some trials are free but are limited to users who own specific subscriptions. This article applies to those trials as well.

Note

Games running as part of **Free Play Days** offers aren't running as actual trials, but can be launched only by temporary full licenses. Trial configuration and related structures don't apply.

## Configuring a usage-limited trial in Partner Center

Note

You can access this feature only if you have the proper permissions and if your game uses [restrictive licensing](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/pc-specific-considerations/xstore-open-and-restrictive-licensing?view=gdk-2604). For details, contact your Microsoft account manager.

You can configure usage-limited free trials in Partner Center without altering the game's code. However, you have to add code in the following scenarios:

- Restricting trial access only to the user who acquired the trial in the store.
- Saving game state between play sessions and carrying over the user's progress from the trial to the full game after being purchased.

1. From the **Submission overview** page, go to the **Pricing and availability** page.
 
2. Under **Free trial**, open the drop-down menu, and then select **Usage-limited**.
 
3. In the second drop-down menu that appears, select the maximum time that users can use your app.
 
4. Select **Save**.
 

After you publish your game to Microsoft Store, you'll see the trial information on the game's product page.

## Restrict access to only users who acquired the trial

In some cases, you might want to let only trial owners run the game. This limitation is important for a usage-limited trial as you don't want someone else to run down the trial time for another account. You can implement this functionality by checking the [XStoreGameLicense](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/structs/xstoregamelicense?view=gdk-2604)`.isTrialOwnedByThisUser` property. If it's `false`, block the current player from proceeding and inform the user to obtain their own trial license.

The user that owns the active trial license is displayed on a message when the trial game is launched:

![Usage limited trial TCUI: "<Gamertag>, you have less than x hours left"](https://learn.microsoft.com/../../../../media/public-images/xstore/usagelimitedtrial.png?view=gdk-2604)

The following code example shows how to do check `isTrialOwnedByThisUser`.

```
void CALLBACK GameLicenseTrialCheck(XAsyncBlock* asyncBlock)
{
    XStoreGameLicense result{};

    HRESULT hr = XStoreQueryGameLicenseResult(
        asyncBlock,
        &result);

    // Is this a trial?
    if (result.isActive && result.isTrial)
    {
        // Is this trial owned by this user?  
        if (!result.isTrialOwnedByThisUser)
        {
            // The user can't use another user's trial time. Show an error message.
        }
    }
}

void QueryGameLicense(XStoreContextHandle storeContextHandle, XTaskQueueHandle taskQueueHandle)
{
    auto async = new XAsyncBlock{};
     asyncBlock->queue = m_asyncQueue;
    asyncBlock->callback = GameLicenseTrialCheck;

    HRESULT hr = XStoreQueryGameLicenseAsync(
        storeContextHandle,
        async);
}

```

## Save the game state for the original trial user

Xbox services-enabled games that have single player campaigns or other game modes tracking progress between sessions use connected storage to save the game state. With a limited trial, however, a PC user can create multiple Microsoft accounts and keep playing beyond the time limit while saving progress (by using the same Xbox account). For more information on this scenario, see [Handling mismatched store account scenarios on PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/pc-specific-considerations/xstore-handling-mismatched-store-accounts?view=gdk-2604).

This loophole can be prevented by saving the [XStoreGameLicense](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/structs/xstoregamelicense?view=gdk-2604)`.trialUniqueId` value when the game progress is saved. Later, when the user starts playing the trial again, you can check whether the `trialUniqueId` value matches the one from the first run.

This code assumes the game saves the `trialUniqueId` as part of the game save, and has a `GetSavedTrialUniqueId` function that returns this value.

```
void CALLBACK GameLicenseTrialCheck(XAsyncBlock* asyncBlock)
{
    XStoreGameLicense result{};

    HRESULT hr = XStoreQueryGameLicenseResult(
        asyncBlock,
        &result);

    // Is this a trial?
    if (result.isActive && result.isTrial)
    {
        // Is this trial owned by this user?
        if (!result.isTrialOwnedByThisUser)
        {
            // The user can't use another user's trial time. Show an error message.
        }
        else
        {
            // Read the trialUniqueId that was saved with the game on the first run.
            char trialUniqueId = GetSavedTrialUniqueId();
            if (trialUniqueId != result.trialUniqueId)
            {
                // Because the IDs don't match, start the game from the beginning.
            }
        }
    }
}
```

## Testing trials in development

In order to test your game with a trial license, the game must first be configured with a trial license in Partner Center.

### Xbox

For local builds, a real license is required. For loose and packaged builds, applying a content ID and EKBID override is required in MicrosoftGameConfig. For more information, see [Enabling license testing](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/getting-started/xstore-licensing-setup?view=gdk-2604).

Note the actual EKBID from a trial build must be used here. To get the EKBID, you need to download the game build from the Microsoft Store with an account that has a trial license.

![Trial PDP with "Install Free Trial" button highlighted](https://learn.microsoft.com/../../../../media/public-images/xstore/pdptrial.png?view=gdk-2604)

Once configured, launching with a [test account](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/develop/test-accounts/live-setup-testaccounts?view=gdk-2604) that obtained the trial license from the store, `XStoreGameLicense` exhibits accurate trial attributes. Launching the build should display the trial notification UI.

### PC

Same as how to enable builds with a full license—use the correct app identity in MicrosoftGame.config and ensure the proper content ID in the registry location, and the build respects the license for the signed in account of the Microsoft Store app, trial or otherwise.

## See also

[Commerce Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/commerce-nav?view=gdk-2604)

[Enabling XStore development and testing](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/getting-started/xstore-product-testing-setup?view=gdk-2604)

[Enabling license testing](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/getting-started/xstore-licensing-setup?view=gdk-2604)

[XStore API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/xstore_members?view=gdk-2604)

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