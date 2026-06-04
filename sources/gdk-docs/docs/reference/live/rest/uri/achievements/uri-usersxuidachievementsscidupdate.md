---
title: "/users/xuid({xuid})/achievements/{scid}/update"
description: "/users/xuid({xuid})/achievements/{scid}/update"
ms.date: '08/28/2023'
ms.topic: article
keywords: xbox live, xbox, games, uwp, windows 10, xbox one
ms.author: brpeek
edited: 00/00/0000
permissioned-type: public
---

# /users/xuid({xuid})/achievements/{scid}/update
Updates the progress of an Achievement.

> **Note:**   
> Only supported for the platform.

 
The domain for these URIs is `achievements.xboxlive.com`.
 
  * [URI parameters](#ID4E2)
 
<a id="ID4E2"></a>

 
## URI parameters
 
| Parameter| Type| Description| 
| --- | --- | --- | --- | 
| xuid| 64-bit unsigned integer| Xbox User ID (XUID) of the user whose resource is being accessed. Must match the XUID of the authenticated user.| 
| scid| GUID| Unique identifier of the service configuration whose achievement is being accessed.| 
  
<a id="ID4EMC"></a>

 
## Valid methods

[POST (/users/xuid({xuid})/achievements/{scid}/{achievementid})](uri-usersxuidachievementsscidupdatepost.md)

&nbsp;&nbsp;Updates the progress of an Achievement.
 
<a id="ID4EWC"></a>

 
## See also
 
<a id="ID4EYC"></a>

 
##### Parent 

[Achievements URIs](atoc-reference-achievementsv2.md)