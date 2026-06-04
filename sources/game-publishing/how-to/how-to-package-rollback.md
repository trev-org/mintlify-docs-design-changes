---
title: How to rollback a game to a previous package submission
description: "This topic describes how to rollback a game to one of its previous retail general availability (GA) submissions."
kindex: rollback, package, recovery, mitigation, outage, emergency
author: e-h-s
ms.author: edwardst
ms.date: 8/13/2025
ms.service: gaming
ms.topic: article
permissioned-type: public
---

# How to rollback a game to a previous package submission

This topic describes how to rollback a game to one of its previous retail general availability (GA) submissions. The topic covers supported scenarios, dependencies, associated risks, and follow-up actions.

## Description

This scenario demonstrates how to rollback a game by selecting one of its previously published retail submissions. Both the current live package and the rollback candidate must be GA submissions. The rollback submission uses the previously uploaded packages. You don’t need to upload the package again or redo the certification process.

The instructions in this topic apply to these products with packages.

* Games
* Game demos
* Durables that have bits

## Basic rollback scenario

1. Sign in to **Partner Center**.
2. In **Partner Center**, go to the product you want to rollback.
3. Select **Packages**, and then go to the **Rollback package** section.
4. Ensure you're on the **Main** branch, and then select **Configure rollback**.
5. Enter the **Submission date** of your game's previous submission.
6. Select **Review**. A **Rollback preview** of the package versions appears.
7. To proceed, select **Finish**.
8. On the **Acknowledgement** dialog, resolve any dependency issues.
9. Select **Submit**.

## Other rollback scenarios

### Unsupported packages

The following scenarios describe rollback submission that might contain packages that don't support a rollback operation.

* Universal Windows Platform (UWP) apps don't support a rollback to previous versions.
* Where the chosen rollback submission doesn’t have a recently added package.

If a rollback submission contains unsupported packages, you can still publish it. Your rollback submission won't change the package versions for those unsupported packages. When published, the system uses the current live version. If the system detects a package that doesn't support rollback, a corresponding warning message about it appears in the **Rollback package** flyout.

### Package flights

Package flights distribute specific packages to a limited group of testers. Customers will still use the GA packages published to the Microsoft Store without disruption. Rollbacks don't include package flights. You can only configure and publish the GA packages in a rollback submission. For more information about package flights, see [Package flights](how-to-package-flights-for-xvc-packages.md).

### Packages that have a custom availability date

Custom availability dates keep the original value of the rollback target submission packages. The same principle applies when there are multiple packages in rollback target submissions. The custom availability date for each package keeps the package's original value. When the custom availability date value is in the past, the system automatically resets the date value to the current date.

## See also

* [Packages](../concepts/packages-overview.md)
