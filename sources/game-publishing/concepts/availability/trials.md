---
title: Trials overview
description: Trials overview.
services: gaming
author: FLY1NGSQU1RR3L
ms.author: clintw
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Trials overview

This topic walks you through the options available when you want to configure a **Trial**. You will need to choose **Time-limited**, **Unlimited** or **Usage-limited**, depending on your trial configuration. We will provide details in the following sections.

For any trial configuration for a game product, review the guidance and recommendations in [Implementing Trials for your game](/gaming/gdk/_content/gc/commerce/fundamentals/xstore-usage-limited-free-trials) before proceeding.

## Products this applies to:  

* Game 

## Does not apply to:  

*  Game Demo 
*  Bundle 
*  Add-on Bundle 
*  Durable or Durable with packages
*  Consumable (Microsoft Store-managed) or Consumable (Developer-managed)
*  Season Pass

## Configuration

Trials are configured in the **Pricing and Availability** module of your product. For more details about the configuration for a [Time-limited Trial](#time-limited-trial), [Usage-limited Trial](#usage-limited-trial) or [Unlimited Trial](#unlimited-trial), review the information in this topic.

## Time-limited Trial

### Definition  

This scenario will allow users to access a **Trial** version of the product for a limited amount of time. Customers can access the product for an amount of time that is configured in calendar days. 

### Configuration  

For information about configuring a time-limited trial, see [How to configure a time-limited trial](../../how-to/how-to-timedtrial.md).

## Usage-limited Trial  

### Definition  

This scenario will allow users to access a **Trial** version of the product for a limited amount of usage. Customers can access the product for an amount of usage that is configured in hours. Usage is consumed while the product is running on a device.

### Configuration  

For information about configuring a usage-limited trial, see [How to configure a usage-limited trial](../../how-to/how-to-create-usage-limited-free-trials.md).

## Unlimited Trial

### Definition  

This is also called a **Curated Trial**. This scenario will allow users to access a **Trial** version of the product for an unlimited amount of time and usage. The limitation of access to the product is managed by in-game logic; for example, to restrict access to specific game features or game progression.

> [!Important]
> Products using an unlimited trial must restrict access to the product by using in-game logic. If the trial access is not restricted correctly, customers might have unintended access to the product.

### Configuration  

For information about configuring an unlimited (curated) trial, see [How to configure a curated trial](../../how-to/how-to-curated-trial.md).

## Next steps

* [Set up a time-limited trial](../../how-to/how-to-timedtrial.md)
* [Set up a curated trial](../../how-to/how-to-curated-trial.md)

## See also

* [Implementing Trials for your game](/gaming/gdk/_content/gc/commerce/fundamentals/xstore-usage-limited-free-trials)
