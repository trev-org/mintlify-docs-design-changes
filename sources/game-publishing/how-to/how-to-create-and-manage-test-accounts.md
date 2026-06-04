---
title: Create and manage Xbox test accounts
description: Learn how to create and manage Xbox test accounts in Partner Center.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 4/29/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Create and manage Xbox test accounts

Xbox test accounts give you access to development sandboxes where you can test your game. You can create multiple accounts for different scenarios, such as testing new builds, validating pricing changes, or reviewing changes to Store metadata.

Test accounts can sign in to development sandboxes, but standard Microsoft accounts (MSAs) can't.

---

## Key considerations

- Use test accounts only in development sandboxes.
- Create multiple accounts at once for testing scenarios.  
- Control access to sandboxes per batch.  
- Scope permissions so users only see accounts they create.

---

## Access the Xbox test accounts page

To open the **Xbox test accounts** page, where you can create, view, and manage test account batches:

1. Go to the **Apps and games** dashboard in Partner Center.  
1. Select **Xbox test accounts**.

---

## View and search test account batches

The **Xbox test accounts** page displays all test account batches available in your account.

You can:

- View batch details such as:
  - Batch account name
  - Batch size
  - Created by
  - Permissions
  - Access expiry
  - Status

- Search for batches using:
  - Keywords
  - Batch account name
  - Created by
  - Email
  - XUID

- Filter results using the **Search by** dropdown.

---

## Create a new test account batch

To create a new test account batch:

1. Go to the **Apps and games** dashboard in Partner Center.  
1. Select **Xbox test accounts**.
1. Select **Create a new account(s)**.
1. Configure the batch details:
   - **Test account batch name**: Defines the account prefix and name. Together, these form the account email. The first character of the name must be an alphabetic character (A-Z or a-z). A sequence of numbers is automatically added to the email during test account creation, based on the number of accounts in the batch.
   - **Account type**: Specifies the account tier for Xbox services.  
   - **Keywords**: Optional tags for organization and search.  
   - **Sandbox access**: Select the sandboxes that accounts can access.  
   - **Access expiry**: Set when sandbox access expires.
   - **Adult account batch size**: Specifies the number of adult accounts to create.
   - **Family accounts:** Specifies whether to include or exclude child accounts.
   - **Child accounts:** Specifies the number of child accounts to create (if applicable). 
1. Select **Next**.
1. Configure the Xbox profile details:
   - **First name:** Specifies the first name of the account owner.
   - **Last name:** Specifies the family name of the account owner.
   - **Password:** Specifies the account password.
   - **Re-enter password:** Confirms the account password.
   - **Secret question:** Specifies a secret question for test account recovery.
   - **Secret answer:** Specifies the answer to the chosen secret question.
   - **Recovery email:** Specifies an email for test account recovery. Defaults to the email of the current signed-in user.
   - **Account/region locale:** Specifies the account region.
1. Select **Submit**.

The test account batch is processed and the accounts are created.

> [!NOTE]
> Child accounts have extra restrictions based on family safety settings. For more information, see: [Xbox test accounts](/gaming/gdk/docs/services/develop/test-accounts/live-test-accounts#child-test-accounts).

---

## View and manage an existing test account batch

To view and update a test account batch's properties, view the accounts within the batch, and export the account batch details to a .csv file:

1. Go to the **Apps and games** dashboard in Partner Center.  
1. Select **Xbox test accounts**.
1. Select the required batch.

### Update batch properties

After you select a batch name, you can update:

- Keywords
- Sandbox access
- Access expiry
- Other batch configuration settings

These changes apply to all accounts in the batch.

### View batch accounts

Select **View batch accounts** to see the accounts within a batch.

For each account, you can view:

- Email  
- Gamertag  
- XUID  
- Account permissions (for example Adult or Child)  

Use this information to review the account's setup and permissions.

---

## Export test accounts

Select **Export to CSV** to download account details for a batch.

Exported data can include:

- Email addresses  
- Gamertags  
- XUIDs  
- Permissions  

Exporting is useful for sharing account details securely within your team or integrating with test workflows.

---

## See also

- [Xbox test accounts](/gaming/gdk/docs/services/develop/test-accounts/live-test-accounts)  
- [Sandboxes](../concepts/sandboxes.md)  
- [Branches](../concepts/branches.md)
