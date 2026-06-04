---
author: jonmartin
title: "Xbox Services Language Fallback"
description: "Language-region fallbacks for Xbox services."
kindex:
- Xbox Services Language Fallback
- Xbox services, Xbox Services Language Fallback
ms.author: jonmartin
ms.topic: reference
edited: 02/14/2024
applies-to: pc-gdk
ms.date: 05/08/2023
permissioned-type: public
---

# Xbox Services Language Fallback

If a user's system language setting is not included in a title's localized strings, Xbox services are able to automatically fallback to a language that is closest to it.

For example, if a console is set to Belgium French (fr-BE) and a localization for an achievement isn't available for it, then the system will check for a localization in its fallback language, France French (fr-FR). If a localization still cannot be found, it will fall back further into the default en-US.

## Official Xbox services languages that are available on console

|Locale|Fallback|
|------|--------|
|ar-AE |ar-SA   |
|ar-SA |ar-SA   |
|da-DK |da-DK   |
|de-AT |de-DE   |
|de-CH |de-DE   |
|de-DE |de-DE   |
|en-AE |en-GB   |
|en-AU |en-GB   |
|en-CA |en-GB   |
|en-CZ |en-GB   |
|en-GB |en-GB   |
|en-GR |en-GB   |
|en-HK |en-GB   |
|en-HU |en-GB   |
|en-IE |en-GB   |
|en-IL |en-GB   |
|en-IN |en-GB   |
|en-NZ |en-GB   |
|en-SA |en-GB   |
|en-SG |en-GB   |
|en-SK |en-GB   |
|en-ZA |en-GB   |
|en-US |en-US   |
|es-ES |es-ES   |
|es-AR |es-MX   |
|es-CL |es-MX   |
|es-CO |es-MX   |
|es-MX |es-MX   |
|fi-FI |fi-FI   |
|fr-BE |fr-FR   |
|fr-CA |fr-FR   |
|fr-CH |fr-FR   |
|fr-FR |fr-FR   |
|he-IL |he-IL   |
|it-IT |it-IT   |
|ja-JP |ja-JP   |
|ko-KR |ko-KR   |
|nb-NO |nb-NO   |
|nl-BE |nl-NL   |
|nl-NL |nl-NL   |
|pl-PL |pl-PL   |
|pt-BR |pt-BR   |
|pt-PT |pt-PT   |
|ru-RU |ru-RU   |
|sv-SE |sv-SE   |
|tr-TR |tr-TR   |
|zh-CN |zh-CN   |
|zh-SG |zh-CN   |
|zh-HK |zh-TW   |
|zh-TW |zh-TW   |
|uk-UA |uk-UA   |

> [!NOTE]
> While the default fallback is en-US, there are exceptions if the locale's language root is either "es", "fr", or "sa".
>
>|Language-root|Fallback|
>|-------------|--------|
>|es           |es-MX   |
>|fr           |fr-FR   |
>|sa           |ar-SA   |

## See also  
[Configuring localized strings in Partner Center](live-localized-strings-config.md)  
[Console-supported languages](../../../gdk-dev/game-principles/localization/console_supported_languages.md)  