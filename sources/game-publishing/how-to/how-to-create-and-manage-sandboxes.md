---
title: Create and manage development sandboxes
description: Learn about how to create and manage sandboxes in Partner Center.
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

# Create and manage sandboxes

Sandboxes provide isolated environments where you can publish and test your product before releasing it to players. They let you control which products can be deployed and who can access them.

You can use development sandboxes to validate gameplay, services, and Store experiences without affecting your live release.

## Key considerations

- Each sandbox has a unique sandbox ID.  
- Use development sandboxes for testing only.
- Access to development sandboxes requires Xbox test accounts.
- Use global sandboxes for certification and production publishing.  
- Control product access and visibility at the sandbox level.

For more information, see [Sandboxes](../concepts/sandboxes.md).

## Manage sandboxes in Partner Center

Manage sandboxes in the **Sandboxes** page. It displays all sandboxes available to your account. To find the page:

1. Go to the **Apps and games** dashboard in Partner Center.  
1. Select **Sandboxes**.

### Global sandboxes

Microsoft manages global sandboxes, such as **RETAIL**, and uses them for certification and live publishing. You can't create or modify global sandboxes.

### Development sandboxes

Development sandboxes are specific to your Partner Center account.

You can:

- Create new development sandboxes.  
- Configure access and permissions.  
- View products published to each sandbox.  

Each development sandbox has a unique sandbox ID. For more information, see [Sandbox identifiers](../concepts/sandboxes.md#sandbox-identifiers).

---

## Create a new sandbox

To create a sandbox:

1. Go to the **Apps and games** dashboard in Partner Center.  
1. Select **Sandboxes**.  
1. Select a sandbox identifier from the dropdown menu.
1. Choose a sandbox type:
   - **Isolated:** Only approved products can publish to the sandbox. You must explicitly grant access to each product.
   - **Shared:** Any product in your account can publish to the sandbox.
1. Select **New sandbox**.

---

## Manage an existing sandbox

Select a sandbox to view and manage its configuration.

You can:

- View products that are targeting the sandbox.  
- Change sandbox settings by selecting **Edit**.  

The product list shows:

- Product name  
- Product type  
- Submission version  
- Publish date

Use this information to track products that are published to the sandbox.

### Manage product access (isolated sandboxes)

For isolated sandboxes, you control which products can publish to the environment.

1. Go to the **Apps and games** dashboard in Partner Center.  
1. Select **Sandboxes**.
1. Select the sandbox you need to edit.
1. Select **Manage approved products**.
1. Select or clear each **product** to control whether it has access to use the sandbox.
1. Confirm your choices.

---

## See also

- [Sandboxes](../concepts/sandboxes.md)
- [Branches](../concepts/branches.md)
- [How to create and manage test accounts](how-to-create-and-manage-test-accounts.md)
