---
title: "Backwards compatibility"
description: "Describes backwards compatibility of modern gamertags."
kindex:
- Modern gamertags overview
- gamertags
author: joannaleecy
ms.author: rlehew
ms.topic: article
ms.localizationpriority: medium
edited: 10/04/2021
ms.date: '08/01/2022'
permissioned-type: public
---

# Backwards compatibility and gamertag conversions

This article explains the backwards compatibility of modern gamertags and how they are rendered in titles that supports only classic gamertags.

## Backwards compatibility

One of the top questions developers want to know is if they need to upgrade an existing title to support modern gamertags.

For backwards compatibility, the previous, classic gamertag system remains completely untouched. The 15-character alphanumerical limitations still apply, and you don't have to return a modern gamertag instead of a classic one via previous APIs or fields.

Modern gamertags are represented by 3 new fields (enumeration constants) that live side-by-side with the previous gamertag field.  

We encourage you to support modern gamertags because this is how users want to represent themselves—particularly international users. Supporting the full set of UTF-8 glyphs means building in-game fonts that include them all, and this requires a longer-term transition.

You can continue to use classic gamertags indefinitely, moving over to modern gamertags is not a forced requirement due to the difficulty in particular with diacritic fonts.  

## Modern gamertag conversions for titles that support only classic gamertags
  
Classic gamertags, predating the modern gamertag system, are distinct by their string, auto-generation for new users, and character limitations.

### No suffix for classic gamertags
  
All Xbox users who created their account before modern gamertags existed have a classic gamertag, and they're automatically returned in the modern gamertag fields via APIs. However, they won't have a suffix.

### Auto-generated classic gamertags  
  
Users who created their account after modern gamertags were released, or have followed the "change gamertag" flow, can choose a modern gamertag. After their modern gamertag is chosen, a classic gamertag is auto-generated for them. Ensure that this auto-generated classic gamertag aligns with the user's modern gamertag, so that they're strongly correlated and clearly related to each other.

#### ASCII-only modern gamertags  
  
If a user chooses the modern gamertag StormYeti, and it's assigned a suffix of 1234, then their unique modern gamertag is StormYeti#1234. Their auto-generated classic gamertag becomes StormYeti1234.

This allows users to still identify themselves and others in older titles that don't support the new gamertag system.
  
#### Modern gamertags with ASCII look-alike characters  
  
As previously stated, the modern gamertag system recognizes Latin "look-alike" characters within the supported character ranges. For example, if a user chooses ЯΔDiΩ as their modern gamertag, and it's assigned a suffix 8402, their unique modern gamertag is ЯΔDiΩ#8402. Their auto-generated classic gamertag is RADiO8402.  

> [!NOTE]
> Users might use these Latin "look-alike" characters to give their gamertag personality and uniqueness.  
  
#### Modern gamertags with non-ASCII UTF-8 characters  
  
For users who choose a modern gamertag with non-Latin look-alike UTF-8 characters, such as ドラゴン, they're always assigned a suffix, even if no one else has yet taken that string of characters.
  
For these scenarios, the classic gamertag that's auto-generated for them will appear as the example Player8452 9238, and they're presented an opportunity when they create their account to choose their own meaningful classic gamertag.  
  
Because the classic gamertag namespace is limited to alphanumerical characters, their classic gamertag has no visible relationship to their modern gamertag, and experiences that show only the classic gamertag might make the user unrecognizable alongside experiences that were designed for modern gamertags.  
  
> [!NOTE]
> We handle these scenarios carefully in the design of Xbox shell experiences. There's a years-long transition period, and when the modern and classic gamertags don't align, both are shown in key places&mdash;particularly in experiences the Xbox shell provides over games and related to gaming, such as the [Recent Players list](../../../../multiplayer/mpa/concepts/live-mpa-recent-players.md).  

## See also  
  
* [Modern gamertag definition](live-modern-gamertags-definition.md)
* [UTF-8 character ranges support](live-modern-gamertags-unicode.md)
* [XR-046](../../../../../store/policies/XR/XR046.md)
