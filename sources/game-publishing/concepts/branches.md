---
title: Branches
description: Learn about branches in Partner Center.
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

# Branches

In Partner Center, branches are separate workspaces for each supported module.

The **Main** branch is the default branch. It automatically appears for all modules when you create the product. You can create extra branches in each supported module: **Packages**, **Store listings**, and **Pricing and availability**. Each branch is unique to that module. For example:

- A Test branch in **Packages** is independent from a **Test** branch in **Store listings**.
- Changes you make in one module's branch aren't automatically reflected in other modules.

---

## Differences between branches and sandboxes
[Sandboxes](sandboxes.md) and branches serve different but complementary purposes during development and publishing.

 - Use sandboxes as isolated environments where you publish and test your product. They control who can access your game and where it runs. They help you validate Xbox services, Store experiences, and release configurations before going live.
 - Use branches as configuration workspaces within Partner Center. They let you create and manage different versions of your product settings such as **Packages**, **Pricing and availability**, and **Store listings**, without affecting what’s already published.

In short:
 - Use branches to manage configuration changes.
 - Use sandboxes to publish and test those changes in an isolated environment.

---

## What you can and can't do with branches
Branches apply only to configuration modules in Partner Center. They don't create separate product identities or environments.

You can:
- Maintain multiple versions of configuration settings, such as **Pricing and availability** or **Store listings**.
- Test changes in development sandboxes without affecting live content.
- Submit different configurations for certification.

You can't:
- Use branches to isolate runtime behavior (use sandboxes for this purpose).
- Share branches across modules (each module has its own branches).
- Publish branches other than Main to the RETAIL sandbox.

---

## Use branches to test different settings
Use branches to configure and test different settings for use in different sandboxes. For example, to test pricing changes without overwriting your published configuration, create a new branch in **Pricing and availability** called **New pricing**, import your current settings from the **Main** branch, and then make the desired changes in your new branch. You can import the changes into the Main branch when you're ready to publish them.

### Importing settings from another branch
Importing copies the configuration from your branch into the Main branch for that module. The behavior is different for some modules.

 - **Packages** and **Pricing and availability** support direct imports from another branch.
 - **Store listings** supports export to a .csv file, which you can import to another branch. You can't import directly from another branch.

---

## Branch behavior for certification and publishing
The availability of branches is different between **Certifying** and **Publishing** a product.

 - When you submit a product for certification, you can specify the branch for each module.
 - When you publish a product, branch availability depends on the publishing destination:
   - You can publish only the **Main** branch to the **RETAIL** sandbox.
   - You can publish all branches to development sandboxes.

---

## Naming and managing branches
Use clear, descriptive names for branches so you can track their purpose.

For example:
- Development
- Internal QA
- Certification staging

Delete or reuse branches when they're no longer needed to keep your workspace manageable.

---

## Example workflow

You can use branches and sandboxes together to test changes safely.

For example:
1. Create a new branch in **Packages** to upload updated game builds.
2. Create a new branch in **Store listings** to update descriptions and images.
3. Publish these branches to a development sandbox.
4. Test the combined experience in the sandbox.
5. Import the validated changes into the **Main** branch for each module.
6. Publish to the RETAIL sandbox when ready.

---

## See also

 - [Sandboxes](sandboxes.md)
