---
title: "Gamertags overview"
description: "Provides an overview about gamertags."
kindex:
- gamertags overview
- classic gamertags
- modern gamertags
author: joannaleecy
ms.topic: article
ms.localizationpriority: medium
edited: 00/00/0000
ms.date: '08/23/2022'
permissioned-type: public
---

# Gamertags overview

Microsoft offers two forms of gamertags&mdash;[classic](live-classic-gamertags-overview.md) and [modern](live-modern-gamertags-overview.md).

Classic gamertag was introduced many years ago and have been used globally so players didn't have to use their actual names in games.

Today, a gamertag is more than an alias, it's a form of identity and an important social media handle for Xbox gamers.

As the community grew, there was an increasing demand for people wanting to have the same gamertag. With the inclusion of more regions and languages, Xbox also wanted to support an expanded character set. To make this happen, we introduced modern gamertags.

## Steps to display gamertags in title

When developing titles using the GDK, follow these steps to help you display gamertags in your title.

* [Retrieve gamertags](#retrieve-gamertags) in the string format you need.
* Render all the characters on screen. See [Display gamertags](#display-gamertags) below.
* Review the [unicode range supported in modern gamertag](live-modern-gamertags-unicode.md) and ensure that your title is able to display supported characters accurately. This is applicable if your title supports and displays modern gamertags.

<a id="retrieve-gamertags"></a>

### Retrieve gamertags

Different experiences need access to different gamertag fields, so each component is available individually.

If you have not decided whether your title is supporting modern or classic gamertags, see [Modern gamertags](live-modern-gamertags-overview.md) and [Classic gamertags](live-classic-gamertags-overview.md).

Specify which component you want to retrieve by using the [XUserGamertagComponent](../../../../../reference/system/xuser/enums/xusergamertagcomponent.md) enumeration. The **XUserGamertagComponent** enumeration constant is then passed into the [XUserGetGamertag](../../../../../reference/system/xuser/functions/xusergetgamertag.md) function as shown in the following table. For more information about the length limits for each gamertag component, see [XUserGamertagComponent](../../../../../reference/system/xuser/enums/xusergamertagcomponent.md).

| Component | Enumeration constant | Example |
| --- | --- | --- |
| Modern gamertag | `XUserGamertagComponent::Modern` | "Dragon" |
| Suffix | `XUserGamertagComponent::ModernSuffix` | "1652" |
| Unique modern gamertag | `XUserGamertagComponent::UniqueModern` | "Dragon#1652" |
| Classic | `XUserGamertagComponent::Classic` | "Dragon1652" |

**Note**: Players with only classic gamertags have no suffix.

<a id="display-gamertags"></a>

### Display gamertags

After retrieving a player's gamertag in the format your title needs using the APIs described in the earlier section, your title is responsible for the rendering the gamertags on screen.

Modern and classic gamertags have different lengths and encoding. But modern gamertags offer full backwards compatibility so existing titles that only support classic modern gamertags are still able to properly render modern gamertags. Because modern gamertags support UTF-8 characters, they're automatically converted for titles that support only classic gamertags. For details, see [Backwards compatibility and gamertag conversions](live-modern-backwards-compatibility.md).

**Important**: Gamertag display in titles must meet Xbox Requirements. To learn more about the requirements, see [XR-046](../../../../../store/policies/XR/XR046.md).

* [Modern gamertag](live-modern-gamertags-overview.md): Display all 16 characters of the unique modern gamertag, which includes up to 12 characters of the modern gamertag, followed by # and the suffix number (if present). It supports specific ranges of UTF-8 characters. For details, see [Modern gamertag overview](live-modern-gamertags-overview.md).

* [Classic gamertag](live-classic-gamertags-overview.md): Correctly display all 15 characters of the classic gamertag. Classic gamertags supports only ASCII characters a-z, A-Z, 0-9, comma (,), and space (ASCII character 0x20). For details, see [Classic gamertag overview](live-classic-gamertags-overview.md).

## Player experience

Players who created their account after modern gamertags were released, or have followed the "change gamertag" flow, can choose a modern gamertag.

After their modern gamertag is chosen, a classic gamertag is auto-generated for them.

Players who have created their account before modern gamertags were released and have not followed the "change gamertag" flow, have a classic gamertag.

For end-user experience information about modern gamertags, see [Express Yourself with New Gamertag Features](https://news.xbox.com/2019/06/10/express-yourself-with-new-gamertag-features/) and [Gamertag update FAQ](https://support.xbox.com/help/account-profile/profile/gamertag-update-faq).

## See also  

* [Modern gamertags](live-modern-gamertags-overview.md)
* [Classic gamertags](live-classic-gamertags-overview.md)
* [Modern gamertag backwards compatibility](live-modern-backwards-compatibility.md)
* [XR-046](../../../../../store/policies/XR/XR046.md)