---
author: M-Stahl
title: "Creating a disc subset"
description: "Describes how to create a disc that has a subset of the game’s content so that it fits on one disc."
ms.topic: article
edited: '09/25/2024'
ms.date: '09/25/2024'
permissioned-type: public
---

# Creating a disc subset

This article describes how to create a disc that has a subset of the game's content (also called *disc subsetting*) so that it fits on one disc.  

Game packages are often larger than what fits on a 50 GB Blu-ray Disc. To make a large game available on discs, you must either put the game on more than one disc (see [Multi-disc functionality](packaging-multi-disc.md) or trim the game down to a subset of the content so that it fits on one disc.

## Exclude content from your game by using the Exclude attribute

You can create a subset of content by using the `Exclude` attribute in the subset .xml file that you pass to `splitpkg`. Use `Exclude` to exclude devices, features, tags, or languages. For example, your game might have sections for a single-player campaign and multiplayer online play. You might already be using Intelligent Delivery to offer the Campaign and Multiplayer features. For the disc, you might decide to offer only the Campaign feature. You can create a game disc that excludes the Multiplayer feature as shown in the following example.

```XML
<Packages>
  <Package Name="GameDisc" MaxDiscs="1">
    <Exclude Features="Multiplayer" />
  </Package>
</Packages>
```

When this game disc is installed, it doesn't have content for the Multiplayer feature.  

> [!NOTE]
> If the game receives an update later (or the update is installed when the game disc is installed), the Multiplayer feature is downloaded from the Xbox content delivery network.

## Remove content from your game  

You can reduce the size of a game disc by removing content from your game. As an example, perhaps you have both the Campaign and Multiplayer features, but they each also have optional 4K assets. You can declare a chunk as requiring multiple tags by separating them with `#` as shown in the following example.

```XML
<Features>
  <Feature Id="Campaign" DisplayName="Campaign" Tags="Campaign;4kAssets"
  <Feature Id="Multiplayer" DisplayName="Multiplayer" Tags="Multiplayer;4kAssets"
</Features>
 
<Chunk Id="1" Tags="Campaign" />
<Chunk Id="2" Tags="Campaign#4kAssets" Devices="Xbox-Scarlett" />
<Chunk Id="3" Tags="Multiplayer" />
<Chunk Id="4" Tags="Multiplayer#4kAssets" Devices="Xbox-Scarlett" />
```

Here, chunk 2 is downloaded only to Xbox Series X|S consoles, and only if both `Campaign` and `4kAssets` are specified. When creating a disc subset file, all `4kAssets` can be excluded from the game disc as shown in the following example.

```XML
<Packages>
  <Package Name="GameDisc" MaxDiscs="1">
    <Exclude Tags="4kAssets" />
  </Package>
</Packages>
```

Another way to use this type of tagging is to define a tag for all the chunks that you don't want on the game disc as shown in the following example.

```XML
<Features>
  <Feature Id="Campaign" DisplayName="Campaign" Tags="Campaign"
  <Feature Id="Multiplayer" DisplayName="Multiplayer" Tags="Multiplayer"
  <Feature Id="Default" Tags="OmitFromDisc" Hidden="true"
</Features>
 
<Recipes>
  <Recipe Id="Default" IncludedFeatures="Default" />
</Recipes>
 
<Chunk Id="1" Tags="Campaign" />
<Chunk Id="2" Tags="Multiplayer" />
<Chunk Id="3" Tags="OmitFromDisc" />
<Chunk Id="4" Tags="OmitFromDisc" />
```

Here, any chunks with `OmitFromDisc` tags get added to a default feature that's always included by default. (This is because there is a recipe that includes the feature ID that has no Microsoft Store ID elements.) Creating this subset .xml file for `splitpkg` prevents any `OmitFromDisc` chunks from becoming part of the game disc as shown in the following example.

```XML
<Packages>
  <Package Name="GameDisc" MaxDiscs="1">
    <Exclude Tags="OmitFromDisc" />
  </Package>
</Packages>
```

