---
title: "Achievement Update (JSON)"
description: " Achievement Update (JSON)"
ms.date: '08/29/2023'
ms.topic: article
keywords: xbox live, xbox, games, uwp, windows 10, xbox one
ms.author: brpeek
author: brianpeek
kindex: Achievement (JSON)
edited: 00/00/0000
permissioned-type: public
---

# Achievement Update (JSON)

An Achievement Update object (version 2).
<a id="ID4EN"></a>


## Achievement Update

The Achievement Update object has the following specification. All members are required.

| Member| Type| Description|
| --- | --- | --- |
| action{ string| Required. Set to the value of "progressUpdate"
| serviceConfigId| string| Required. SCID for this resource. Identifies the title(s) this achievement is related to. |
| titleId | 32-bit unsigned integer| Required. The Title ID of the game issuing the call to the service. |
| userId| 64-bit unsigned integer| Required. The Xbox User ID (XUID) of the user.| 
| achievements| Required. Array of achievement objects with id and percentComplete provided. |

## Achievements array object members

| Member| Type| Description|
| --- | --- | --- |
| id| string| Required. ID of the achievement to update.|
| percentComplete| 32-bit unsigned integer| Required.  The percentage completed for the achievement.  Set to 100 to unlock immediately.


<a id="ID4EIAAC"></a>


## Sample JSON syntax

```json
{
    "action": "progressUpdate",
    "serviceConfigId": "00000000-0000-0000-0000-000000000000",
    "titleId": 0000000000,
    "userId": "2810000000000000",
    "achievements": [
        {
            "id": "1",
            "percentComplete": 100
        }
    ]
}
```

<a id="ID4ERAAC"></a>


## See also

<a id="ID4ETAAC"></a>


##### Parent

[JavaScript Object Notation (JSON) Object Reference](atoc-xboxlivews-reference-json.md)