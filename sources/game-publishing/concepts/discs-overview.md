---
title: Discs overview
description: Discs overview
services: gaming
author: FLY1NGSQU1RR3L
ms.author: clintw
ms.service: gaming
ms.topic: article
ms.date: 8/18/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Discs overview

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

Disc-based games represent an essential medium to distribute your title. This article walks you through the ins and outs of the disc ordering process and explains some configurations that must happen outside of the disc creation flow within Partner Center prior to disc creation.

You can complete the following actions in Partner Center.

* Create and configure a new disc request.
* Select Authorized Replicators (ARs) for final retail disc replication.
* Submit a test disc order for disc validation prior to final product replication at ARs.
* Approve/reject test discs.
* View and track the status of disc requests.

## Process of ordering discs

 1. Disc order request
    1. Submit a disc order request in Partner Center
    2. Microsoft contacts receive the disc order request for review and approval
    3. Approval status is communicated to the requester by Microsoft contacts
 2. Test discs are replicated
    1. Test disc order is submitted to ARs
    2. Test discs are shipped to designated recipients
    3. Test disc recipients test and approve discs
 3. Disc order request is completed
    1. Bill of Materials (BOM) is created
    2. Publisher approves release to manufacture (RTM)
    3. Discs go into production

## Disc requests

This section covers terminology and concepts for disc requests, also known as disc creation.
It's recommended to read this topic before creating your first disc.

This article describes features which are available only if you have the proper permissions.
For details, talk to your account manager or another contact at Microsoft.

If your game is shipping with physical disc media, you'll have an opportunity to verify that your game runs properly from all your binaries and media that are installed on the discs.
You'll be able to do this before you mass-produce the discs.

When your binaries and media are ready, order the discs by selecting the **Disc** menu item on the "Request management" page in Partner Center.
After your request is submitted, your Microsoft representative will review and approve it and give the go-ahead to the Test Disc Printing sites to begin printing.

> [!IMPORTANT]
> You can only request the creation of discs for products whose packages and listings have been submitted to certification.

### Disc Smart Delivery

Smart delivery is available on disc. Disc Smart Delivery can be done in either of two approaches, based on your needs.

* Disc + digital release
* Full disc support

#### Approach 1: Disc + digital release

Produce discs that only contain one of the two packages of different generations.
After the console goes online, it will use the license to be able to acquire the package of the higher generation based on the console it's being run on.

This will allow you to save space on disc to target the customers you are trying to reach.

#### Approach 2: Full disc support

You can add the actual double xvc file setup onto the disc itself.
This will allow for offline use of smart delivery, and there's no need for the user to download unless updates are available.

In order to provide this experience to customers, you must select both an Xbox Series X and an Xbox One package as displayed in [Step 1: Configure disc content for a single product](../how-to/how-to-request-and-manage-discs.md#step-cdc).

The option to add a package of each generation to the disc becomes available after you have uploaded at least one package of each generation for that product.

### Sibling products

The sibling relationship feature connects two products together.
This configuration is for the digital product and then read onto disc without further publisher input.

If any set of products going onto disc have a sibling relationship, we will send that information onto the disc's metadata so that the console will by default only install one of the two products even while offline.
You can see any sibling metadata that will appear on the disc from the disc summary page for a specific request.

### Supported and unsupported scenarios

There are some differences between digital and disc scenarios:

**Supported scenarios:**

* Multi-disc sets of up to six 50 GB discs.
* Discs of 25 GB or 50 GB. The size is determined automatically at creation time, based on the size of the content.
* Multi-product (bundle) on a single disc or disc set. Supported subproducts:
  * Game
  * Add-on with Durable
* Re-order, to send a previously created and tested disc file to an Authorized Replicator.

**Unsupported scenarios:**

* Bundles that include subproducts from multiple publishers
* Bundle manual age ratings for disc package
* Disc sets requiring more than six 50 GB discs
* Individual discs are larger than 50 GB
* UWP (Universal Windows Platform) product discs

> [!NOTE]
> If your title requires more than six discs (which exceeds the current service limit of 300 GB), please request an exception from your Microsoft Representative.

## Prerequisites for submitting disc requests

Before being ready to submit a disc, you must prepare a product (or a bundle of products) for digital release.
The packages and listings of the product must be either submitted to certification, or have passed certification, or have already been published to retail.

After they are in the correct certification state, the packages and listings of the product will become visible within the disc authorizing page.

There are two other additional requirements when creating content for a disc, which aren't requirements for digital release.

* Manual age ratings.
  For further information on physical age rating process, see [Age ratings](age-ratings.md).
* Promotional Art.
  This is the image that's used on the disc, so it's required for disc creation. The image on the disc will match the promotional art asset from the selected listing during disc authoring.

The manual age ratings and promotional art can be added later in the process, even after you've shipped digitally.

### Disc authoring access

To create discs, you must be a managed partner.
Not all partners can create discs.

If you don't see the **Disc** page under a product's left-hand navigation area, reach out to your account administrator to get access to the disc page.
If you have a manager level of access and don't see the **Disc** page in the left-hand navigation area, reach out to your Microsoft point of contact, to ensure your account is enabled for disc authoring.

Account admin role types provide access to users through account management.
The permission name is selected for each product under **Custom Permissions > Discs > Disc request**.

For information about user account management, see [Partner Center account](developer-account.md).

## Process of BOM creation

The Bill of Materials (BOM) is used as the catalyst for disc creation going to production.
This is created in conjunction with your Microsoft representative and is submitted to the replicator at the end of the disc request process. The contents of the disc will be tested and signed off by Certification and the partner before the BOM is created.

## Approval for release to manufacture

Managed creators must approve discs to be released to manufacture before disc orders can be placed with designated ARs. For details about this process, see [Release to Manufacture](../publishing-processes/managed-creators/publishing-processes-rtm.md).

## Next steps

* [How to request and manage discs](../how-to/how-to-request-and-manage-discs.md)

## See also

* [Royalty configuration](discs-royalty-configuration.md)
* [SKU Planning](../publishing-processes/managed-creators/publishing-processes-sku-planning.md)
* [Overview of custom permissions for account users](/windows/apps/publish/partner-center/overview-of-roles-and-permissions-for-account-users)
