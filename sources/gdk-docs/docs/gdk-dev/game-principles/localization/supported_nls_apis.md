---
author: M-Stahl
title: "Supported NLS functions"
description: "Describes the NLS functions that are part of `WINAPI FAMILY GAMES`."
kindex:
- NLS
- National Language Support (NLS) Functions
ms.author: jgup
ms.topic: article
edited: 04/21/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Supported NLS functions 

The National Language Support (NLS) functions help applications support the different 
language-specific and locale-specific needs of users around the world. Only those API functions that are 
defined under the `WINAPI_PARTITION_GAMES` partition in the `WinNLS.h` header file are 
available for use on Xbox. The following functions are currently available for use
via the `WinNls.h` header file.

> [!NOTE]
> APIs marked as "DEPRECATED" work with 
the Microsoft Game Development Kit (GDK) with caveats as documented on Microsoft Docs. However, we strongly recommend the replacement APIs.

| Function| State| Replacement |
| ---| ---| --- |
| `EnumSystemLocalesEx`| |  |
| `FindNLSStringEx`| |  |
| `FoldStringA`| |  |
| `GetACP`| |  |
| `GetCurrencyFormatEx`| |  |
| `GetGeoInfoEx`| |  |
| `GetLocaleInfoEx`| |  |
| `GetNumberFormatEx`| |  |
| `GetStringTypeA`| |  |
| `GetStringTypeExA`| |  |
| `GetThreadLocalevoid);`| |  |
| `GetUserDefaultGeoName`| |  |
| `GetUserDefaultLocaleName`| |  |
| `GetUserPreferredUILanguages` | NOT SUPPORTED  | Always returns en-US  |
| `IdnToAscii`| |  |
| `IdnToUnicode`             | |  |
| `IsValidCodePage`| |  |
| `IsValidLocaleName`| |  |
| `LCIDToLocaleName`| |  |
| `LCMapStringEx`| |  |
| `LocaleNameToLCID`| |  |
| `ResolveLocaleName`| |  |
| `SetThreadLocale`| |  |
| `CompareString`| DEPRECATED| `CompareStringEx` |
| `CompareStringA`| DEPRECATED| `CompareStringEx`|
| `EnumSystemLocalesA`| DEPRECATED| `EnumSystemLocalesEx` |
| `EnumSystemLocalesW`| DEPRECATED| `EnumSystemLocalesEx` |
| `FindNLSString`| DEPRECATED| `FindNLSStringEx` |
| `GetCPInfo`| DEPRECATED| Use Unicode |
| `GetCPInfoExA`| DEPRECATED| Use Unicode |
| `GetCPInfoExW`| DEPRECATED| Use Unicode |
| `GetCurrencyFormatA`| DEPRECATED| `GetCurrencyFormatEx` |
| `GetCurrencyFormatW`| DEPRECATED| `GetCurrencyFormatEx` |
| `GetGeoInfoA`| DEPRECATED| `GetGeoInfoEx` |
| `GetGeoInfoW`| DEPRECATED| `GetGeoInfoEx` |
| `GetLocaleInfoA`| DEPRECATED| `GetLocaleInfoEx` |
| `GetLocaleInfoW`| DEPRECATED| `GetLocaleInfoEx` |
| `GetNumberFormatA`| DEPRECATED| `GetNumberFormatEx` |
| `GetNumberFormatW`| DEPRECATED| `GetNumberFormatEx` |
| `GetUserGeoID`| DEPRECATED| `GetUserDefaultLocaleName` |
| `LCMapStringA`| DEPRECATED| `LCMapStringEx` |
| `LCMapStringW`| DEPRECATED| `LCMapStringEx` |


## Functionality notes for Xbox Game OS

The Game OS versions of the NLS functions do *not* support the full functionality available on PC. In particular, the Game OS image does not contain the linguistic casing locale data tables present on Windows. Therefore, the collation and casing operations are always computed using *Ordinal* value regardless of the locale setting.

The general recommendation is to perform culture-sensitive casing and sorting as part of your localization process rather than relying on the runtime APIs to handle this on Xbox.

This impacts the behavior of the following functions:

|NLS|
|--|
| LCMapStringEx |
| CompareStringEx |
| CompareString |
| CompareStringA |

| Collation | Wide | Multibyte |
|--|--|--|
| std::collate | | |
| strcoll | wcscoll | _mbscoll |
| _stricoll | _wcsicoll | _mbsicoll |
| _strncoll | _wcsncoll | _mbsncoll |
| _strnicoll | _wcsnicoll | _mbsnicoll |

| Uppercasing | Variant | Wide variant |
|---|---|---|
| std::toupper | toupper | towupper |
| _toupper | _toupper_l | _towupper_l |
| std::isupper | isupper | iswupper |
| _isupper_l | _iswupper_l | |

| Lowercasing | Variant | Wide variant |
|---|---|---|
| std::tolower | tolower | towlower |
| _tolower | _tolower_l | _towlower_l |
| std::islower | islower | iswlower |
| _islower_l | _iswlower_l | |

> [!NOTE]
> The list above is not exhaustive as some other functions in the Standard C++ Library may rely on the impacted functions for their implementation.

## See also

[Localization and globalization (overview)](localization_overview.md)