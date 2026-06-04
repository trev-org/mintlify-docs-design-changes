---
title: Review and publish
description: Modular submission.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: modular submission
ms.localizationpriority: medium
permissioned-type: public
---

# Review and publish

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

For Partner Center accounts with the proper permissions, Game products support modular publishing. Modular publishing gives you the flexibility to work on different modules, such as **Packages** or **Store listings**, independently and to submit them for **Certification** or publishing individually. Some product types, such as Durables, don't support modular submissions and all modules must be completed and submitted together.

When you're ready to publish your product to any sandbox, including RETAIL, select the **Review and Publish** button in your product.

## Before you begin

Before you publish your product, we strongly recommend that you review your product's [Audience](availability/visibility-audiences.md) and [Embargo](xbox-services.md#embargo-date) settings. Use **Private Audience** to ensure your product can't be discovered in the Microsoft Store earlier than intended, and use **Xbox Embargo** to prevent unintended access to your Xbox services, like Achievements.

## Publish your product with Review and Publish

When ready to publish your product to the Microsoft Store in RETAIL or a development sandbox, select the **Review and Publish** button near the top of the UI for any module, or on the **Product Overview** page.

You have the option to certify some content of your product before publishing it to the Microsoft Store. Doing so will help you identify any issues well in advance of publishing, and it will speed up the publishing process. For details on certification, see [Certification (Certify)](certification/certification-overview.md). If you haven't submitted the latest configuration of a module for **Certification** before using **Review and Publish**, you might need to wait for Certification to be completed before the publishing workflow will progress.

The first time you publish your product, even when it's to a development sandbox, you'll have to publish the entire product. This means that all modules must be marked **Complete**: that is, they must have the minimum information required for publishing. For this, you must provide the following:

 - **Setup**  
   - Select at least one device family in **Device family availability**.
 - **Properties**  
   - Select at least one **Genre** (or **Category** for apps).
   - In **Support info**, select **Yes** or **No** for **Does this product access, collect, or transmit personal information (data that could be used to identify a person)?** If you select **Yes**, you'll have to provide a **Privacy policy URL**.
 - **Age ratings**  
   - Complete the questionnaire to generate ratings.
 - **Packages**  
   - Upload one package. It must have a name you've reserved for the product, and it must pass validation checks. It doesn't have to be fully functional. 
 - **Store listings**  
   - Create a Store listing in one language. The listing must include a **Description** and a screenshot, for any device family.

> [!IMPORTANT]
> Before you can publish to RETAIL, products configured to use the [Reseller](availability/managed-creators/reseller-pricing.md) pricing model must have a **revenue SKU**. Products without a revenue SKU will be blocked from publishing to RETAIL, but can still be published to development sandboxes, or submitted for Certification. To request revenue SKU configuration, send the Store ID for your product to your [Microsoft contacts](../resources/managed-support/overview-microsoft-representatives-and-contacts.md).

Selecting the **Review and Publish** button will take you to the **Review and publish** page:

1. Select a publishing destination in the **Publish to** dropdown list. Select one of your sandboxes or choose **RETAIL** to publish to the Microsoft Store. Note that you might not be able to publish to **RETAIL** until your game has received concept approval.

2. In **Publish from**, select one of the following options:  
   1. **Default**: to publish the content from the Main branch (this can't be changed if you're publishing to the RETAIL sandbox). 
   2. **Custom**: to publish the content from specific branches.

You'll see a summary of the changes for each module, along with the option to select a branch (unless you selected **RETAIL** in the **Publish from** box). If you've already published your game to the **Publish to** destination, you can also clear the check box for any modules you don't want to publish again.

> [!IMPORTANT]
> If a module is already in the publishing process, you won't be able to start publishing another module. Only one publishing workflow can be in progress at any time.

### Notifications

> [!IMPORTANT]
> To ensure that you receive critical email notifications, you'll be required to verify your email address in Action Center. Go to [My Preferences](https://partner.microsoft.com/dashboard/actioncenter/mypreferences) in Action Center to verify.

After publishing a product, the owner of your developer account is always notified of the publishing status and required actions through email and the [Action Center](/partner-center/action-center-overview) in Partner Center. In addition, you can add members in either **developer** or **manager** role within your developer account and they'll receive the same notifications. You can also remove those who no longer need be notified.

To add or remove:

1. On the **Review and publish** page, look for the field **Submission notification audience**. If you can’t find the field, ensure the **Publish to** option is selected.
1. Select **Click here** to open the **Notification audience overview** page.
1. On the **Notification audience overview** page, add or remove the audience.

> [!NOTE]
> - The owner of your developer account is always notified and can’t be removed from the audience list.
> - The audience list is product specific and applied to all submissions of the product. To modify the notification recipients for a different product, follow the steps above for each product.
> - Add-on inherits parent product’s audience list and can’t be managed separately.

### Publishing SLAs

Each stage in the publishing process must be completed before the game can advance to the next stage. The SLAs below provide an estimated timeline for each stage.

  - **Processing:** < 6 hours
  - **Certification:** < 5 days - Products need to be certified before they can be published to the Microsoft Store. For details see [Certification](../concepts/certification/certification-overview.md). 
  - **Publishing:** < 6 hours

## Examples of publishing workflows

### Simple workflow: most basic scenario

1. Create a product, and work in the **Main** branch for each area, without creating any custom branches.
1. Publish the **Main** branch to your development sandbox for review. Initially, publish the entire product; next, publish subsequent updates individually.
1. When you feel confident about the final product, submit some of the individual areas (**Pricing and availability**, **Packages**, and **Store listings**) for certification, to ensure there are no failures.
1. When ready, publish the game to the RETAIL sandbox to make it available in the Microsoft Store as you configured in the **Pricing and availability** module.

### More complex workflow

In some situations, you'll have to test and iterate more extensively. Your workflow will start out as above (work in the **Main** branch, and then publish to sandboxes), but then you'll use branches, for more flexibility with testing options. Here's an example:

1. Create a new **Packages** branch (for example, "Beta Testing") where you'll try out a new version of your packages.

2. Publish Beta Testing to your development sandbox. This will let you acquire the packages in your development sandbox, and you won't have to remove the original packages from **Main**.

3. If the packages work well, submit Beta Testing to certification.

4. After Beta Testing passes certification, import the packages from Beta Testing into **Main**.

5. When ready, publish the Packages from **Main** to the RETAIL sandbox to make them available to all players.

## Next steps

- [Create and upload a game package](../tutorial-xbox-managed/how-to-create-a-package.md)
- [Submitting to Xbox Certification in Partner Center](../publishing-processes/managed-creators/publishing-processes-submitting-to-certification.md)

## See also

- [Action Center](/partner-center/action-center-overview)
