---
title: Product groups
description: Manage product groups.
services: gaming
author: aarathin
ms.author: aarathin
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Product groups

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

Product groups help you organize your products in Partner Center. You can group related products and associate each product group with a dev studio. This is especially useful if your account publishes products developed by separate studios or subsidiaries.

Product groups that you create aren’t visible to customers and don’t affect how your apps, games, and bundles are displayed in the Microsoft Store. Product groups are only visible in Partner Center, to help with product management and organization.

If your account has  [multiple account users](/windows/apps/publish/partner-center/manage-account-users), you might be able to create users who [have permissions to perform tasks and/or view analytic data for the products within specific product groups](#assign-permissions-for-product-groups). 

## Create a new product group

Follow these steps to create a product group in Partner Center:

1. On your **Overview** page, select **Create new...** and then select **Product group**.

2. In the **Product group** name box, provide the name for your product group. This name won’t be visible to customers.

3. If this is the first time you’re creating a product group, or if you need to add a new dev studio, select **Create a new dev studio** and follow the steps outlined in the [next section](#create-a-new-dev-studio).

4. In the **Dev studio** dropdown list, select the dev studio you want to associate with your product group.

5. In the **Products** box, select each product (app, game, or bundle) you’d like to include, and then select **Add** to move your selections into the **Include in this product group** box. You can use the **Add** and **Remove** buttons to move the selected products in or out of the product group.

6. Select **Save**.

On the **Overview** page, you’ll see your new product group and the products it contains. To edit the product group (for example, to change its name, dev studio, or included products), select its name from your **Overview** page. Note that if you remove a published product from a product group, you might see inconsistencies in reported data or inventory calls.

## Create a new dev studio

Each of your product groups must be associated with a dev studio you define. When creating a product group, you can select any dev studio you've already created, in the **Dev studio** dropdown box; otherwise, select **Create a new dev studio** and follow these steps:

1. Enter a value for **Dev studio name**. This name won’t be visible to customers.

2. In the **Dev studio ID** box, enter the GUID for your dev studio if this dev studio belongs to a product group that was migrated from Xbox Developer Portal (XDP). If this isn't the case, leave this field blank, and we’ll generate an ID.

3. Select **Save** to return to the page where product groups are created. 

The new dev studio should now be available for selection and assignment to any of your product groups.

## Assign permissions for product groups

Managers for accounts with [multiple users](/windows/apps/publish/partner-center/manage-account-users) can grant permissions at the [product level](/windows/apps/publish/partner-center/assign-product-level-custom-permissions-to-account-users), to let some users work only on specific products. If your account includes product groups, you might also be able to assign permissions at the product-group level: to all or some products in the group (if you restrict permissions further). If your account has access to this option, when you choose to grant customized permissions for any user or edit the permissions for an existing user, you'll see your products organized by product groups.

Granting permissions for a product group and its products works similarly to granting permissions for an individual product and its add-ons. This process is described in the [Assign product-level custom permissions](/windows/apps/publish/partner-center/assign-product-level-custom-permissions-to-account-users) topic. See also the [Overview of custom permissions for account users](/windows/apps/publish/partner-center/overview-of-roles-and-permissions-for-account-users) topic. Here are the differences:

- The permission you grant at the product group level will apply to all products that are in the group now or will be added in the future. 

- If you select **Read only** at the product group level, you can select either **Read/write** or **Read only** for individual products within that product group. However, if you select **Read/write** at the product group level, you can select only **Read/write** for individual products within that product group.

To let a user create and edit product groups in the account, the user must have read/write access to the account-level **Manage product groups** permission or the **Manager** [standard role](/windows/apps/publish/partner-center/assign-roles-to-account-users).

## Next steps

- [How to create new products](../how-to/how-to-create-new-products.md)

## See also

- [Manage account users](/windows/apps/publish/partner-center/manage-account-users)
- [Assign roles to account users](/windows/apps/publish/partner-center/assign-roles-to-account-users)
- [Overview of custom permissions for account users](/windows/apps/publish/partner-center/windows/apps/publish/partner-center/overview-of-roles-and-permissions-for-account-users)
- [Assign product-level custom permissions](/windows/apps/publish/partner-center/assign-product-level-custom-permissions-to-account-users)
