---
title: "Troubleshooting XStore development"
description: "Troubleshooting guide for most common issues when the XStore APIs don't work during development and testing."
kindex: Troubleshooting XStore development
author: anhillier-xbox
ms.author: timch
ms.topic: article
edited: '02/11/2026'
ms.date: '08/01/2022'
permissioned-type: public
---

# Troubleshooting XStore development

## Entitlements

When entitlements don't match a player's purchase activity, check for the following cases:

* If you're testing in a development sandbox on PC, Xbox test accounts must sign into the Xbox App before they sign into the Microsoft Store.
If a test account signs into the Microsoft Store first, the Microsoft Store defaults to using the RETAIL environment.
* Pre-order entitlements are inactive until their release date and aren't returned with client-based entitlement queries.
* Ensure that test accounts are restricted to purchasing within a single sandbox.
The collections service can return invalid results if the account has entitlements in multiple sandboxes.
* If you're testing in a development sandbox on console, an entitlement is immediately granted for a free product after selecting the **Get** button on the product details page in the Microsoft Store or when the game calls [XStoreShowPurchaseUIAsync](../../../reference/system/xstore/functions/xstoreshowpurchaseuiasync.md).
The entitlement is granted even if the purchase is aborted.
To avoid an automatic entitlement grant from occurring, publish add-on content with a non-zero price in sandbox.

For more information about entitlements, see [Granting players access to add-on content](../fundamentals/xstore-granting-access-to-content.md).

## Licensing

When a license is acquired for content a player doesn't own, verify that license sharing or caching isn't occurring on the device.

* License sharing and caching can leave test machines in an unclean state.
  * Removing accounts from a device doesn't remove their 'offline' designation. Offline-capable licenses continue to be shared with other accounts until the designation is changed or the licenses expire.
  * When a new account is added to a PC, the 'Offline permissions' setting can automatically be enabled for the account, which can cause unexpected license sharing to occur.
* To ensure a clean PC environment, always test in a fresh Virtual Machine.
* To return the console to a clean state, try the following steps:
  * Disable 'Home Xbox' (Settings > General > Personalization > My home Xbox) for each test account before removing them from the device.
  * Run 'Reset home Xbox' (Settings > Developer > Developer Settings) multiple times (15+) to remove the device designation for older accounts and then reboot the console.
  * If licenses continue to be shared, a [factory reset](../../../tools/tools-console/xbom/manager-tool-updating-console.md) might be required.

For more information about licensing, see [Granting players access to add-on content](../fundamentals/xstore-granting-access-to-content.md).

## Callback assigned in `XPackageRegisterPackageInstalled` isn't hit when DLC (Durable with package) is installed

If DLC installation state isn't obvious, first check `xbapp listdlc` or `wdapp listdlc` to verify that the expected DLC is listed.

Then check that the `AllowedProduct` in DLC microsoftgame.config matches that of the base game's `StoreId` node in its microsoftgame.config

If this DLC is a Smart Delivery product and the Xbox Series X/S base game is using an ERA DLC package, and the `AllowedProduct` in the ERA DLC's appxmanifest isn't the same as the product ID assigned to the Xbox Series X/S base game (`xbapp list /d`), then you might need to override the product ID.
This override is only possible for a packaged build:

```cmd
makepkg pack /d <dir> /pd <dir> /contentid <contentid> /productid <product ID of ERA product> /productidoverride
```

This situation can arise with an Xbox One base game that was migrated from the retired Xbox Developer Portal site.

## `XStoreShowPurchaseUIAsync` on PC shows purchase dialog briefly then returns `E_ABORT`

This issue can occur when:

* XStoreShowPurchaseUIAsync is called from an elevated (Administrator) process.
* You're debugging in Visual Studio with Administrator privileges, or from any process that was set to Run as Administrator.
The solution is to avoid calling this API while running as Administrator.
* UAC (User Access Control) is set to not display the confirmation prompt to the interactive user's desktop.

UAC is governed with these registry values:

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\EnableLUA`
`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\PromptOnSecureDesktop`

`EnableLUA` should be `1`. In some instances, toggling `PromptOnSecureDesktop` to `0` can also be effective.

This [page](/windows/security/identity-protection/user-account-control/user-account-control-group-policy-and-registry-key-settings) has more information on this and other related controls.

## XStore related error codes

| Hex Value | Error | Description |
| --------- | ----- | ----------- |
| 0x803F6300 | `XSTORE_E_NULL_LICENSE_SERVICE_CONTEXT` | The license service context is unavailable. |
| 0x803F6301 | `XSTORE_E_NULL_STORE_CONTEXT` | The store context object is null or not initialized. |
| 0x803F6302 | `XSTORE_E_INVALID_ID` | An ID was passed that's invalid or unknown. |
| 0x803F6303 | `XSTORE_E_INVALID_REQUEST` | The request has invalid parameters or format. |
| 0x803F6304 | `XSTORE_E_INVALID_RESPONSE` | Response from the store service was unexpected or invalid. |
| 0x803F6305 | `XSTORE_E_ZERO_RESULTS` | Zero results were returned when non-zero results were expected. |
| 0x803F6306 | `XSTORE_E_NULL_INPUT_PARAMETER` | Required parameter provided was null. |
| 0x803F6307 | `XSTORE_E_INVALID_INPUT_PARAMETER` | Provided input parameter is invalid. |
| 0x803F6308 | `XSTORE_E_INVALID_VERSION` | Clients making the request don't meet the minimum version required. |
| 0x803F6309 | `XSTORE_E_BAD_CONVERSION` | Unable to properly convert required parameter or response. |

## See also

[Commerce Overview](../commerce-nav.md)

[Enabling XStore development and testing](xstore-product-testing-setup.md)

[XStore API reference](../../../reference/system/xstore/xstore_members.md)
