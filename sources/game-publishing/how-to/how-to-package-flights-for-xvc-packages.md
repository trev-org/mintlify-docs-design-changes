---
title: How to configure package flights for game packages
description: How to configure package flights for game packages.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# How to configure package flights for game packages

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

Package flights can be used to distribute packages to a designated set of testers without disrupting the experience of your other customers.

## Package flights with game packages (XVC/MSIXVC)

If your account has the proper permissions, you can create package flights that include XVC or MSIXVC packages, and you can then distribute the packages to *known Xbox device groups* (XVC) or *known user groups* (MSIXVC) that you create in Partner Center. A known Xbox device group can have up to 10,000 unique Xbox network device IDs, and it will let you deliver the flighted packages only to the devices you specify.

> [!IMPORTANT]
> Known Xbox device groups can be used only with package flights that contain XVC packages. They won't work with other testing and flighting options, such as a [private audience](../concepts/availability/visibility-audiences.md), or with other scenarios, such as targeted notifications.

For packages to be distributed correctly, you must use the correct type of groups for your package flights.

* If a package flight contains *only XVC packages*, you must use one or more known Xbox device groups.
* If a package flight contains *only MSIXVC packages*, you must use one or more known user groups.
* If a package flight contains *XVC and MSIXVC packages*, you must use at least one known Xbox device group and at least one known user group. The devices included in your known Xbox device group will receive an XVC package from your package flight, and the customers in the known user group will receive an MSIXVC package from your package flight.

### Create a new package flight

> [!IMPORTANT]
> Before a package flight can be created, a base package must be published to the RETAIL sandbox from your product's **Main** branch in **Packages**.

1. In Partner Center, go to the product you want to create a new package flight for.
   
2. On the **Packages** page, select **+ New...** and then select **Flight**.

3. Enter a **Package flight name** and select the **Flight groups** that should receive the package flight. The package flight **Rank** doesn't apply to XVC packages.
   1. If you haven't created a **Flight group**, follow the steps in [Create a Known Xbox device group or Known user group](#create-a-known-xbox-device-group-or-known-user-group).

5. Select **Create flight**.

6. Upload your XVC or MSIXVC packages to the new package flight branch.

7. When you're ready to publish the package flight, select **Review and publish** from the package flight branch.

### Create a Known Xbox device group or Known user group

1. In Partner Center, go to the **Apps and games** dashboard.
2. In the **Engage** section of the navigation menu on the left, select **Customer groups**.
3. In the **My customer groups** section, select **Create new group**.
4. On the next page, in the **Group name** box, provide a name for your group.
5. Select the appropriate group type&mdash;either **Known Xbox device group** or **Known user group**.
6. Enter the members of the group.
   1. For Known Xbox devices groups, enter the **Xbox network device IDs** of the devices you want to add to the group. You must include at least one device ID (for example, FD00123412341234). The device IDs must not exceed 10,000. Enter the device IDs directly into the field, and separate them with spaces, commas, semicolons, or line breaks. Alternatively, select **Import .csv** and then create the group from a list of email addresses in a .csv file.
   2. For Known user groups, enter the email address that's associated with the Microsoft account for the user.
7. After you select **Save**, the group will be available for your use.

You can also create a known Xbox device group by selecting **Create a flight group** on the page where package flights are created. However, you must reenter any information that you've already provided on that page.

> [!Important]
> It's your responsibility to obtain any necessary consent from the people who use the devices that you add to your group. Make sure they understand that they'll be getting packages that are different from your non-flighted submission.

### Edit a customer group

After you create a customer group, you can neither remove it from your dashboard nor change its name, but you can edit its membership at any time. You have several options for selecting customer groups for editing.

* Select **Customer groups** from the page navigation on the **Apps and games** dashboard. Under **My customer groups**, select the name of the group you want to edit.
* On the page where package flights are created, select **View and manage existing groups**.
* Select the group's name from a package flight's overview page.

After selecting a group, add or remove members of the group as required.

For more extensive changes, select **Export .csv** to save your group membership information to a .csv file. Make your changes in this file, and then select **Import .csv** to update the group membership with your changes.

A complete update of the membership might take up to 30 minutes. You don't need to publish a new submission to let new devices access your submission through package flights. The devices will have access as soon as the changes are implemented.

## Market-specific package flights

To create flights that target specific market groups, use market-specific package flights. This feature is often used by creating a console group that will receive market-specific packages, and then flighting all the packages to that group. Consoles in that group can receive, install, and test the packages, and then switch markets to reinstall the package for different markets.

> [!NOTE]
> The market groups that can be selected for the package flight are determined by the market groups that are configured in the Main branch and published to the RETAIL sandbox. See [Market-specific packages](how-to-manage-advanced-settings-for-packages.md).

### Create a market-specific package flight

1. Confirm that you've published market-specific packages to RETAIL. If no market-specific packages have been published previously, you'll only be able to use the base package group in the package flight.
   
3. On the **Packages** page for the package flight, select **Select market groups to include**.

4. In the **Select markets groups to include** window, select the market groups for the package flight.

5. Select **Continue**.

6. If needed, to exclude the Base market group from the flight, select **Exclude** under **Base packages**. In the dialog that appears, select **Exclude** again.

7. Upload packages to each market group in the flight branch.

8. When you're ready to publish the package flight, select **Review and publish** from the package flight branch.

### Change markets for an existing flight

1. On the **Packages** page for the flight, select **Select market groups to include**.

2. In the **Select market groups to include** window, add or remove market groups for the package flight.

3. Select **Continue**.

For markets that aren't part of the flight, no packages are required, and no flight payload is published.

If multiple flights are published to the same console group, consoles in that group will receive the flight that was published most recently.

## See also

* [Packages](../concepts/packages-overview.md)
* [Visibility - Audiences](../concepts/availability/visibility-audiences.md)
* [Market-specific packages](how-to-manage-advanced-settings-for-packages.md)
