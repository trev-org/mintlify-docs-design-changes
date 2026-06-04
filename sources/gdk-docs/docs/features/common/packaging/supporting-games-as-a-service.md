---
author: jgup
title: "Supporting Games-as-a-Service (GaaS)"
description: "Recommendations on how the GDK can support Games-as-a-Service (GaaS)"
kindex:
- games as a service, supporting
- GaaS
ms.author: jgup
ms.topic: article
edited: 11/01/2019
ms.date: '08/01/2022'
permissioned-type: public
---

# Supporting Games-as-a-Service (GaaS)

Instead of being a standalone game that is released at a specific point in time, some games are 
shifting to a model where they are treated as service, getting seasons or updates that keep those 
games fresh over many years. This model is called Games-as-a-Service (GaaS). The GDK has good 
support for this model. This document provides an overview of the best practices to consider when 
using the GDK to support publishing a game as a service.

## GDK adoption

Each GDK is only supported for one year. While existing games can continue to ship using a retired 
GDK, this can be problematic for games that ship as a service. Games introducing new features after 
a GDK has been retired may encounter bugs or integration issues that were not seen in earlier use 
cases of the GDK. Equally, the game may want to take advantage of features only found in the newest 
GDKs that are getting released.

A game must be built against a single GDK. Games cannot mix components from one GDK with another. On 
console, the game only includes a single Game OS and the various GDK libraries may have 
dependencies on that underlying OS. On PC, only one version of the gaming runtime gets loaded into 
the game process, creating a similar "single version" environment as seen on console.

It is recommended that GaaS title periodically update to more recently released GDK that is still 
supported.

## Intelligent delivery

GaaS titles can get bigger and bigger over the years with the introduction of new content. Gamers 
may have limited amounts of storage space. This could impact their ability to install the game's 
latest update. While it is true that gamers have the ability to manage their own storage spaces, 
games built with [Intelligent Delivery](overviews/intelligentdelivery.md) give the gamer more flexibility and 
choice in how they use their storage space beyond uninstalling entire games wholesale and enables 
gamers to keep more games installed on their devices for much longer.

Using Intelligent Delivery, games can leverage 
[features and recipes](intelligentdelivery-features-recipes.md), choosing what is installed by 
default and giving games the ability to manage what parts of the game they want to keep installed 
and what parts they may want to remove because they aren't using it anymore.

GaaS titles could choose to put their new content into separate features to enable this kind of 
management. The idea is that the new content is a [durable](../../../store/commerce/fundamentals/xstore-dwobs.md). Here is one suggestion 
that would make this easier to manage:

1. In the game's layout file, make each durable correspond to a **Feature**.
1. The **Feature** will declare one or more **Tags** that can be used to indicate which of the 
   chunks in the layout file should be installed if the gamer has a license for that content.
1. Make sure that the layout file includes a **Recipe** that has a Store ID child. This recipe
   should reference a single feature that corresponds to the same Store ID. Adding the recipe will
   ensure that if the gamer has previously purchased this content, it will automatically get 
   installed. 
   > [!NOTE] 
   > There may be other features and recipes that have nothing to do with durables.

Following this recommendation means that games can then:

1. Call [XPackageEnumerateFeatures](../../../reference/system/xpackage/functions/xpackageenumeratefeatures.md) to enumerate the features.
1. Use the returned Store ID that is in the [XPackageFeature](../../../reference/system/xpackage/structs/xpackagefeature.md) to check for the 
   license, query for more details, or invoke store purchase flows.

All games larger than 40 GB should strongly consider using 
[Intelligent Delivery](overviews/intelligentdelivery.md). Games can consider using durables to support GaaS.

## Downloadable content

Instead of continuously evolving their base package, some GaaS titles may choose to evolve over the
years using [downloadable content (DLC)](packaging-downloadable-content-dlc.md). Games can choose 
to place assets or exectutable code into that DLC. With executable code there are two possible 
paths: DLLs and EXEs.

If the game puts DLLs into their DLC, they can:

1. Mount that DLC using [XPackageMountWithUiAsync](../../../reference/system/xpackage/functions/xpackagemountwithuiasync.md).
1. Use [LoadLibraryEx](/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibraryexa).
1. All previously mounted DLC stays mounted.

If the game puts an EXE into their DLC, they can:

1. Mount that DLC using [XPackageMountWithUiAsync](../../../reference/system/xpackage/functions/xpackagemountwithuiasync.md).
1. Call [XLaunchNewGames](../../../reference/system/xgame/functions/xlaunchnewgame.md) using the path from the mounted DLC. 
1. The existing game process will be terminated.
1. All DLC except the target of **XLaunchNewGames** will get unmounted.
1. The **G:** drive will continue to point at the root of the base package and not the newly
   launched EXE.
   
It is recommended games putting executable code into their DLC access that executable code using 
[LoadLibraryEx](/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibraryexa).
 
## See also

[Downloadable content (DLC)](packaging-downloadable-content-dlc.md)
[Features and recipes](intelligentdelivery-features-recipes.md)
[Intelligent Delivery](overviews/intelligentdelivery.md)
[XPackageMountWithUiAsync](../../../reference/system/xpackage/functions/xpackagemountwithuiasync.md)