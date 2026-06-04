---
title: "Xbox test accounts"
description: "Overview of using test accounts for testing your Xbox services-enabled game during development."
kindex:
- Xbox Live test accounts overview
- test accounts, overview
- Xbox services, Xbox test accounts overview
- Xbox services, test accounts overview
- Xbox services, test accounts
- Xbox services, enabled game
author: joannaleecy
ms.author: erbergst
ms.topic: article
edited: 00/00/0000
ms.localizationpriority: medium
ms.assetid: e8076233-c93c-4961-86ac-27ec74917ebc
ms.date: 04/04/2017
permissioned-type: public
---

# Xbox test accounts

When testing functionality in your title during development, it can be helpful to create additional Xbox test accounts.
For example, you might want a fresh account with no achievements. Or you might want to make several accounts and make them friends of each other for testing social scenarios.

To address these scenarios, you are able to create one or more test accounts.  


Test accounts are also able to sign into your *Development Sandbox*, whereas a regular MSA cannot due to security restrictions. For more information, see [Sandboxes](../../fundamentals/sandboxes/live-sandboxes-nav.md).





## Creating Test Accounts

If you are in the Managed Partners Program, you may create test accounts exclusively for use in your development sandboxes. You can also create multiple test accounts at once. For the steps to create one or more test account, see [Creating test account](live-setup-testaccounts.md).

## Child Test Accounts

While privilege checking and adherence applies to all accounts, it's important to note the experience and expectations for child accounts specifically. For child accounts, restrictions on certain activities may be blocked due to age-based defaults and/or configurations by the child's family organizer (parent or guardian). Children cannot make changes themselves, however, with certain activities it is possible and expected the game title invokes the necessary system UI to allow young players to request an exception via an approval flow for that associated activity. In such circumstances, for instance, a young player may be blocked from multiplayer globally, but the family parent or guardian could approve multiplayer for the specific title via the system UI; then the child would and should be able to access this game mode for that specific title. More details on specific game requirements can be found at [XR-045](../../../store/policies/XR/XR045.md). To learn about the definition of Microsoft child account, you may refer to the [Family & Online Safety on XBox](https://support.xbox.com/help/family-online-safety/child-accounts/add-family-member-on-xbox-one).

## Add granular permissions

If you are a managed partner and would like to allow more members of your team to create test accounts, use granular permission. This permission limits their view to only the accounts they created. After the privilege is set for select users (or groups), Account admins will still be able to see all Test Accounts created in the studio.

To add this permission in Partner Center:

1. Click on the gear icon at the top right. Then go to **Account settings**.
2. Select **User Management** on the left navigation pane.
3. Select or search for the user (or group) you'd like to modify
4. On the **customize permission** tab, select **Test account (owned)** and click **Save** at the bottom of the page.
![Partner Center granular permissions](../../../../media/public-images/live/test-accounts/test-accounts-granular-permissions.jpg)

## Exporting Test Accounts

If you are in the Managed Partners Program, then you may also export test accounts for viewing. For steps to export test accounts, see [Exporting Xbox test accounts](live-exporting-test-accounts.md).

### See also  

[Creating test accounts](live-setup-testaccounts.md)