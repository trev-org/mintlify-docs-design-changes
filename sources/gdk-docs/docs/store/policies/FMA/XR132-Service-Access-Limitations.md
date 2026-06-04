---
title: "XR132 Service Access Limitations"
kindex:
- XR132 Service Access Limitations
- Service Access Limitations FMA
- Service Access Limitations FMA Severities
ms.author: lukecr
ms.topic: article
description: "FMA Scoring for Service Access Limitations"
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# XR-132 : Service Access Limitations

***

## FMA Scenario Severities

*View [Xbox Requirements](https://developer.microsoft.com/en-us/games/xbox/docs/gdk/console-certification-requirements-and-tests#heading-10)*

<br/>

**Test Cases**

<br />

**132-01 Service Access Limitations**

| Scenario                                                                                | Severity          | Platform                       |
|-----------------------------------------------------------------------------------------|-------------------|--------------------------------|
| No Current Scenario                                                                     | Not Relevant (-4) |                                |
| No Current Scenario                                                                     | Very Minor (1)    |                                |
| No Current Scenario                                                                     | Minor (2)         |                                |
| No Current Scenario                                                                     | Moderate (6)      |                                |
| The title exceeds the sustain limit (limit at which rate limiting takes effect) by 10x. | Critical (12)     | Xbox One, Xbox Series, Windows |
| No Current Scenario                                                                     | Catastrophic (22) | |


<br />

*Notes*
- Any titles in RETAIL before April 2018 are considered Legacy and are exempt from this XR.  This includes any and all CUs which appear thereafter.

<br />
<br />


**132-02 Game Event Limitations**

| Scenario                                                    | Severity          | Platform              |
|-------------------------------------------------------------|-------------------|-----------------------|
| No Current Scenario                                         | Not Relevant (-4) |                       |
| No Current Scenario                                         | Very Minor (1)    |                       |
| No Current Scenario                                         | Minor (2)         |                       |
| No Current Scenario                                         | Moderate (6)      |                       |
| The title triggers the Game Event Limitations system toast. | Critical (12)     | Xbox One, Xbox Series |
| No Current Scenario                                         | Catastrophic (22) |


<br />

*Notes*
- No current FMA Notes to consider.