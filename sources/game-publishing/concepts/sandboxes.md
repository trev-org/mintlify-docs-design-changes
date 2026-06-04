---
title: Sandboxes
description: Learn about development and global sandboxes used during Xbox game development and publishing.
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

# Sandboxes

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

Create Xbox games in sandboxes. This approach is known as _content isolation_. When you create a product in a sandbox, you can test it in an isolated environment that only selected users can access. Access is restricted to Microsoft accounts (MSAs) that have permission to sign into the sandbox.  

Sandboxes are essential for Xbox game development. They provide an environment to test Xbox services, such as multiplayer and achievements, alongside the Microsoft Store experience. You can test the game installation experience and review your Store product details page (PDP), including **Store listings**, **Properties**, and **Gaming metadata**. 

Some product types automatically support sandboxes. For other product types, such as game bundles, select **Create this product in a sandbox** when you create the product.

You must create your product in a sandbox if it:

* Uses Xbox services.
* Is an add-on with a separate Microsoft Store listing.
* Is an add-on whose parent product is in a sandbox.
* Is a bundle that contains products that use Xbox services.
* Contains one or more XVC packages.

---

## Differences between branches and sandboxes
Branches and sandboxes are separate concepts that you often use together during development and publishing. In Partner Center, each supported module has its own branches. The **Main** branch is the default branch. It automatically appears for all modules when you create the product. You can create extra branches in each supported module: **Packages**, **Store listings**, and **Pricing and availability**. Each branch is unique to that module. For example:

- A Test branch in **Packages** is independent from a **Test** branch in **Store listings**.
- Changes you make in one module's branch aren't automatically reflected in other modules.

Use branches to configure and test different settings for use in different sandboxes. For example, to test pricing changes without overwriting your published configuration, create a new branch in **Pricing and availability** called **New pricing**, import your current settings from the **Main** branch, and then make the desired changes in your new branch. You can import the changes into the **Main** branch when you're ready to publish them.

For more information, see [Branches](branches.md).

---

## Sandbox types
There are two types of sandboxes: **global** and **development**.

 - Global sandboxes include **RETAIL**, where players access games and services, and other sandboxes used for certification testing.
 - Development sandboxes are specific to your Partner Center account. You can use these sandboxes to develop and test your products.

### Isolated and Shared development sandboxes
You can configure development sandboxes as **Isolated** or **Shared**. 

 - Any product in your account can use a **Shared** sandbox.
 - Only products you specify can use an **Isolated** sandbox.

If you configure a sandbox as Isolated, you must select the products that you can publish to that sandbox. Add-ons inherit permissions from their parent product. To update the product list, select the sandbox on the **Sandboxes** page and then select **Manage approved products** on the page that follows. You can also change the sandbox's type between **Isolated** and **Shared** at any time.

---

## Sandbox identifiers

Each Partner Center account has access to 100 development sandboxes. Each development sandbox has a unique identifier consisting of two parts: a prefix that's unique to your Partner Center account, such as ABCDEF, and a numerical value between 0 and 99. Together, these parts form the sandbox ID, for example, **ABCDEF.1**.

Global sandboxes are named without a numerical value, for example **RETAIL**.

It's common to have:

 - One or more sandboxes for development. For example, a sandbox for each of your development teams.
 - One or more sandboxes for QA. For example, a sandbox for your internal QA team and a sandbox for each external QA team you work with.
 - One sandbox for certification staging, as a location to prepare and test release candidates that you submit for certification. 
  
This structure enables your teams to remain agile and focused on their area of the product.

---

## Create and manage development sandboxes

When you create a new game in a sandbox, you select a primary development sandbox in the **Game setup** page. If you don't have any sandboxes created, select **Manage sandboxes** to visit the **Sandboxes** page and create your first development sandbox. Create new development sandboxes as needed by returning to the **Sandboxes** page. It's accessible from the **Apps and games** dashboard and your product's setup page.

For more information, visit: [How to create and manage development sandboxes](../how-to/how-to-create-and-manage-sandboxes.md).

---

## Create and manage test accounts

You must sign in to a sandbox by using an authorized MSA before you can access any products or Xbox services that are published in that sandbox. Global sandboxes, like **RETAIL**, use standard MSAs. Development sandboxes use Xbox test accounts that you create in Partner Center. You control the sandboxes that each test account can access. To create and configure test accounts, go to the **Apps and games** dashboard and then select **Xbox test accounts**. Here, you can:

 - Create batches of test accounts.
 - View and modify the properties of a test account batch, such as the account type and sandbox access.
 - View the test account batch details, such as the email, gamertag, XUID, and permissions for each test account in the batch.
 - Delete batches of test accounts.

For more information, see [How to create and manage Xbox test accounts](../how-to/how-to-create-and-manage-test-accounts.md).

---

## Publish a product to a sandbox

Publish your product to a sandbox to view or test it.

### Publish Xbox services
If you only need to publish the Xbox services for a game, go to **Gameplay settings**, select **Publish**, and then select where to publish the settings. 

### Publish a product
To publish a product, use the **Review and publish** option. You can access it from your product's **Overview** page. On the **Review and publish** page, select the intended destination in the **Publish to** dropdown. If you select **RETAIL**, you can only publish from your product's **Main** branch. If you select a development sandbox, you choose where to **Publish from**. You can select **RETAIL**, if the product is already published to this sandbox, or **Custom**. Selecting **Custom** lets you choose the branch with the intended configuration for each of your product's modules.

After you select **Publish**, monitor the publishing status by checking the information displayed on the **Overview** page. You can select **History** to review previous publishing details.

> [!NOTE]
> The only global sandbox you can publish to is RETAIL. To submit updates for certification, use the **Certify** workflow.

---

## Test a product in a sandbox
After you publish to a sandbox, sign in to the sandbox with an authorized account. If you only published Xbox services, you can connect to the services by using a package deployed to your device through the Game Development Kit (GDK) tools. If you published the full product, its availability in the Microsoft Store in the sandbox depends on the **Schedule** configured in the **Pricing and availability** module. For more information, see [Configure a product to be visible and purchasable in the Microsoft Store](../how-to/how-to-visible-release.md).

If you configured your product's **Pricing and availability** module to have a **Release** date or **Discoverable in the Microsoft Store** date in the future, you can't find it by using the search functionality in the Microsoft Store. You can find the product by using the Store protocol link found on the product's **Setup** page in Partner Center.

> [!NOTE]
> If you configured [Private audience](availability/visibility-audiences.md) in the **Visibility** section of your product's **Pricing and availability** module, it doesn't affect the visibility of your product in a development sandbox. **Private audience** only applies to products published in the RETAIL sandbox.

---

## Manage a user's sandbox-level permissions

When [adding users to your Partner Center account](/windows/apps/publish/partner-center/overview-users-groups-azure-ad-applications), you can [grant customized permissions](/windows/apps/publish/partner-center/overview-of-roles-and-permissions-for-account-users). For the **Test accounts** and **Xbox devices** account-level permissions, you can select the specific sandboxes for which the user has these permissions. To do so, select the permission and then select either **All sandboxes** or one or more individual sandboxes. Checking **All sandboxes** grants the permission to all existing sandboxes and any sandboxes created in the future. To grant the permission to all current sandboxes but not future sandboxes, clear **All sandboxes** and then select each sandbox individually.

---

## See also

* [How to create and manage development sandboxes](../how-to/how-to-create-and-manage-sandboxes.md)
* [Branches](branches.md)
* [Review and Publish](modular-submission.md)
* [Manage account users](/windows/apps/publish/partner-center/manage-account-users)
