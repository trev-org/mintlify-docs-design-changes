---
title: "Modern gamertags definition and terminology"
description: "Describes the components of modern gamertags and its definition."
kindex:
- Modern gamertags overview
- gamertags
author: joannaleecy
ms.topic: article
ms.localizationpriority: medium
edited: '08/26/2022'
ms.date: '08/01/2022'
permissioned-type: public
---

# Modern gamertags definition and terminology

A *unique modern gamertag* is the combination of the [modern gamertag](#modern-gamertag) and [suffix](#suffix) components. The modern gamertag component can be unique or a duplicate identifier. The suffix is the characters that, together with the gamertag, make it unique.

## String length

The unique modern gamertag is 16 characters long and has up to 12 characters from the modern gamertag component, followed by a "#" and the suffix number (if present).

The maximum 16-character limit means that a modern gamertag which has 12 characters is limited to a 3-digit suffix, which totals 16 rendered characters because of the "#" character.

As the number of characters in the modern gamertag decreases, the number of suffix characters can increase, but the total maximum byte count for the unique modern gamertag will never exceed this.

## Buffer size

Modern gamertag (XUserGamertagComponent::Modern)

Maximum length of 12 characters, with each character limited to having at most 1 diacritic, plus a null terminator.

If no modern gamertag is set by the user, this is identical to XUserGamertagComponent::Classic.

Maximum size of buffer is 97 bytes, including space for the null terminator; (12 characters + 12 diacritics) * (4 bytes/character) + (1-byte null terminator) = 97 bytes.

Suffix (XUserGamertagComponent::ModernSuffix)

Maximum length of 14 characters (with no diacritics), plus a null terminator.

## UTF-8 character ranges

Modern gamertag supports specific ranges of UTF-8 characters.
  
To have a finite set of glyphs, modern gamertags explicitly don't support the entire UTF-8 character range, but it does support subsets that target alphabets of specific languages.  
  
This set of glyphs is fixed and won't increase over time. If your title is programmed to support modern gamertags as of 2022, your title's gamertag integration will still work with gamertags that are created years later. To learn more, see [UTF-8 character ranges support](live-modern-gamertags-unicode.md).

According to Xbox requirements [XR-046](../../../../../store/policies/XR/XR046.md), all titles must be able to display modern gamertags correctly. This is to uphold quality and provide a consistent experience for players. To simply put it, your title should be able to render all characters that are supported.

One common challenge many developers face is that they're unable to accurately render all supported characters for all Xbox supported languages, and this isn't dependent on whether or not you have players using that language.

In response to feedback, we've adjusted XR-046. Titles are allowed to omit support for character ranges for specific languages they do not think are needed for customer usage. For example, excluding Thai because their title is not available in that language.

Omitted or unsupported character must also render as an empty rectangle or other symbol to clearly indicate an unsupported glyph position. They must not render as a blank space. Titles will fail this requirement if gamertags are not rendered correctly when supported Unicode characters are shown as blank characters due to missing glyphs.

## Terminology  

### Modern gamertag

A *modern gamertag* is a string of any of the supported UTF-8 characters before the suffix.
 A maximum of 12 rendered characters are supported, but because UTF-8 diacritics are needed to support the Hindi and Thai languages, it's possible that multiple characters in the string make up one rendered character. As a result, the string that's returned isn't necessarily a maximum of 12 characters, but could be 18 characters that render as 12 characters.

### Suffix

The *suffix* characters are what make the modern gamertag unique. Many users who have had their Xbox Live account since the classic gamertag system won't have a suffix, because their modern gamertag and their classic gamertag are the same. This helps you identify the user as the original owner of that gamertag. Any other user who creates an account and wants the same gamertag, by using the modern gamertag system, is assigned a random suffix to make their gamertag unique. This is a string field, not a number, and it can be any length from one to 14 characters.

### Unique modern gamertag

The *unique modern gamertag* is the combination of the modern gamertag string and the suffix that's preceded by a `#`. Users have guaranteed uniqueness with this full string, even if the gamertag string isn't unique.

> [!NOTE]
> Across all Xbox Live experiences, users are almost always rendered in this full way.  Their suffix is often de-emphasized by using a smaller and lighter-weight font.
  
## See also  
  
* [Modern gamertags](live-modern-gamertags-overview.md)
* [UTF-8 character ranges support](live-modern-gamertags-unicode.md)
* [Backwards compatibility](live-modern-backwards-compatibility.md)
