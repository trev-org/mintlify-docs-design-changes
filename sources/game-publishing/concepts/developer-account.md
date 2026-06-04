---
title: Partner Center account and access management
description: Here's an overview of how to register for a Partner Center account to publish games to the Microsoft Store, and manage account users.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 6/27/2025
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Partner Center account and access management

Before you can create, manage and publish Xbox games in the Microsoft Store, you'll need to create an account for [Microsoft Partner Center](https://partner.microsoft.com/dashboard/home). 

> [!Important]
> If you're registering for Xbox development and publishing as a managed Creator, wait to open an account until instructed to by your Microsoft contacts. For more information, see [New Creator onboarding](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md).

[!INCLUDE [reminder](../includes/both-apps-and-games-share-same-info.md)]

## Manage users and access

Many studios have multiple users who want access to Partner Center.

To allow multiple users to access your Partner Center account, associate a Microsoft Entra (formerly Azure Active Directory) tenant to assign roles to individual users instead of sharing access to the Microsoft account. Each user can then sign in to Partner Center with their individual Entra credentials.

> [!TIP]
> If you want to let multiple people access the company account by signing in with the Microsoft account that opened it (instead of as individual users added to the account), see [the following guidelines](/windows/apps/publish/partner-center/partner-center-developer-account#additional-guidelines-for-company-accounts).

### Use Microsoft Entra with your Partner Center account

* [Associate Azure AD with your Partner Center account](/windows/apps/publish/partner-center/associate-existing-azure-ad-tenant-with-partner-center-account)
* [Create a new Azure AD tenant to associate with your Partner Center account](/windows/apps/publish/partner-center/create-new-azure-ad-tenant)
* [Remove Azure AD tenant associations from your Partner Center Account](/windows/apps/publish/partner-center/remove-azure-ad-tenant-associations)
* [Add users and groups in Azure AD applications](/windows/apps/publish/partner-center/overview-users-groups-azure-ad-applications)
* [Manage Azure AD applications in Partner Center](/windows/apps/publish/partner-center/manage-azure-ad-applications-in-partner-center)

### Manage user permissions in Partner Center

* [Overview of roles and permissions for account users](/windows/apps/publish/partner-center/overview-of-roles-and-permissions-for-account-users)
* [Assign roles to account users](/windows/apps/publish/partner-center/assign-roles-to-account-users)
   - **Note:** The standard roles provide broad access to all products within your Partner Center account. Consider using custom permissions instead of standard roles if you have multiple account users.
* [Assign account level custom permissions to account users](/windows/apps/publish/partner-center/assign-account-level-custom-permissions-to-account-users)
* [Assign product level custom permissions to account users](/windows/apps/publish/partner-center/assign-product-level-custom-permissions-to-account-users)

## Next steps

* [Create an Xbox game and configure game setup](../tutorial-xbox-managed/how-to-create-a-title-and-configure-game-setup.md)

## See also

* [Opening a developer account](/windows/apps/publish/partner-center/open-a-developer-account)
* [Manage account users](/windows/apps/publish/partner-center/manage-account-users)
* [Manage users in Partner Center](/windows/apps/publish/partner-center/manage-users-in-partner-center)
* [Set roles and custom permissions](/windows/apps/publish/partner-center/overview-of-roles-and-permissions-for-account-users)
