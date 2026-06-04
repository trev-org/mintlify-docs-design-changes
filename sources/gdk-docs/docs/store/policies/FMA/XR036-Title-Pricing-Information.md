---
title: "XR036 Title Pricing Information"
kindex:
- XR036 Title Pricing Information
- Title Pricing Information FMA
- Title Pricing Information FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Title Pricing Information"
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-036 : In Title Pricing Information

***

## FMA Scenario Severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-24)*

<br/>

**Test Cases**

<br/>

**036-01 In Title Pricing Information**

| Scenario                                                                                                                                                                     | Severity          | Platform              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| No current scenario.                                                                                                                                                         | Not Relevant (-4) | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                         | Very Minor (1)    | Xbox One, Xbox Series |
| In-title currency is displayed using the relevant international currency code (e.g. EUR, USD, GBP) instead of the equivalent currency symbol.                                | Minor (2)         | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                         | Moderate (6)      | Xbox One, Xbox Series |
| No current scenario.                                                                                                                                                         | Critical (12)     | Xbox One, Xbox Series |
| Price displayed in-title is different from the price in the Xbox store catalogue.                                                                                            | Catastrophic (22) | Xbox One, Xbox Series |
| Currency displayed for an in-title price is not specified or not correct (to be correct, it must match the Xbox store catalogue OR the XSAPI symbol in the FMA Notes table). | Catastrophic (22) | Xbox One, Xbox Series |


<br />

*Notes*
- The title may display DLC price as Free within the title or in the Xbox store. This issue is to be logged under Non-Testable XRs.
- See the following chart for currency codes:

| CountryCode  | Name                  | XSAPI Format  |  CurrencyCode  |
|--------------|-----------------------|---------------|----------------|
| AE           | United Arab Emirates  | 72.99         | USD            |
| AR           | Argentina             | $ 1.299,00    | ARS            |
| AT           | Austria               | 69,99 &euro;       | EUR            |
| AU           | Australia             | $99.95        | AUD            |
| BE           | Belgium               | &euro; 69,99       | EUR            |
| BR           | Brazil                | R$ 199,00     | BRL            |
| CA           | Canada                | $49.99        | CAD            |
| CH           | Switzerland           | CHF 79.00     | CHF            |
| CL           | Chile                 | $ 44.900,00   | CLP            |
| CN           | China                 | CN¥249.00     | CNY            |
| CO           | Colombia              | $234.900,00   | COP            |
| CZ           | Czech Republic        | 1 799,00 Kĝ   | CZK            |
| DE           | Germany               | 69,99 &euro;       | EUR            |
| DK           | Denmark               | 500,00 kr.    | DKK            |
| ES           | Spain                 | 69,99 &euro;       | EUR            |
| FI           | Finland               | 69.99 &euro;       | EUR            |
| FR           | France                | 69,99 &euro;       | EUR            |
| GB           | United Kingdom        | £44.99        | GBP            |
| GR           | Greece                | &euro; 69.99       | EUR            |
| HK           | Hong Kong SAR         | HK$416.00     | HKD            |
| HU           | Hungary               | 18 990,00 Ft  | HUF            |
| IE           | Republic of Ireland   | &euro; 69.99       | EUR            |
| IL           | Israel                | 340.00 ILS    | ILS            |
| IN           | India                 | Rs. 4,490.00  | INR            |
| IT           | Italy                 | &euro; 64,99       | EUR            |
| JP           | Japan                 | ¥6,912        | JPY            |
| KR           | South Korea           | ₩57,900       | KRW            |
| MX           | Mexico                | $1,097.00     | MXN            |
| NL           | Netherlands           | &euro; 69,99       | EUR            |
| NO           | Norway                | 549,00 kr.    | NOK            |
| NZ           | New Zealand           | $109.95       | NZD            |
| PL           | Poland                | 239,99 zł     | PLN            |
| PT           | Portugal              | 69,99 &euro;       | EUR            |
| RU           | Russia                | $39.99        | USD            |
| SA           | Saudi Arabia          | SAR 269.00    | SAR            |
| SE           | Sweden                | 599,00 kr     | SEK            |
| SG           | Singapore             | $69.90        | SGD            |
| SK           | Slovakia              | 69.99 &euro;       | EUR            |
| TR           | Türkiye               | 250,00 TL     | TRY            |
| TW           | Taiwan                | NT$1,674      | TWD            |
| US           | United States         | $39.99        | USD            |
| ZA           | South Africa          | R 799,00      | ZAR            |