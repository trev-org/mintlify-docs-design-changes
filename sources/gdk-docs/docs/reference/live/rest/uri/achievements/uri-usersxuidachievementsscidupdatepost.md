---
title: "POST (/users/xuid({xuid})/achievements/{scid}/update)"
description: "POST (/users/xuid({xuid})/achievements/{scid}/update)"
ms.date: '08/28/2023'
ms.topic: article
keywords: xbox live, xbox, games, uwp, windows 10, xbox one
ms.author: brpeek
edited: 00/00/0000
permissioned-type: public
---

# POST (/users/xuid({xuid})/achievements/{scid}/update)
Updates the progress of an Achievement.
The domain for these URIs is `achievements.xboxlive.com`.  

  * [URI parameters](#ID4EV)
  * [Authorization](#ID4EAB)
  * [Required Request Headers](#ID4EPG)
  * [Optional Request Headers](#ID4EPH)
  * [Request body](#ID4ECBAC)
  * [HTTP status codes](#ID4ENBAC)
  * [Response body](#ID4EBGAC)

## Remarks

- A successful call will return an HTTP status code of 200 with an empty response body.
- If the call results in no change to achievement progress (i.e. it is already unlocked or at the same percent complete), the call will return an HTTP status code of 304 with an empty response body.
 
<a id="ID4EV"></a>

 
## URI parameters
 
| Parameter| Type| Description| 
| --- | --- | --- | 
| xuid| 64-bit unsigned integer| Xbox User ID (XUID) of the user whose resource is being accessed. Must match the XUID of the authenticated user.| 
| scid| GUID| Unique identifier of the service configuration whose achievement is being accessed.| 
  
<a id="ID4EAB"></a>

 
## Authorization
 
Claim| Required?| Description| Behavior if missing| 
| --- | --- | --- | --- | 
| User| Yes| A valid user on Xbox LIVE for whom the request is being made.| 403 Forbidden| 
  
<a id="ID4EPG"></a>

 
## Required Request Headers
 
| Header| Type| Description| 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| Authorization| string| Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=&lt;userhash>;&lt;token>".| 
| x-xbl-contract-version| 2| API contract version.| 

<a id="ID4EPH"></a>

 
## Optional Request Headers
 
| Header| Type| Description| 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| Accept-Language| string| List of desired locales and fallbacks (e.g., fr-FR, fr, en-GB, en-WW, en-US). The Achievements service will work through the list until it finds matching localized strings. If none are found, it attempts to match the location defined in the user token, which comes from the user's IP address. If still no matching localized strings are found, it uses the default strings provided by the title developer/publisher. | 
  
<a id="ID4ECBAC"></a>


## Request body
An [AchievementUpdateRequest (JSON)](../../json/json-achievementupdaterequest.md) object.

<a id="ID4EPB"></a>
### Sample request

`POST /users/xuid({2810000000000000})/achievements/{00000000-0000-0000-0000-000000000000}/update`

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
  
<a id="ID4ENBAC"></a>

 
## HTTP status codes
 
The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](../../additional/httpstatuscodes.md).
 
| Code| Reason phrase| Description| 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| 200| OK| The session was successfully retrieved.| 
| 301| Moved Permanently| The service has moved to a different URI.| 
| 304| Not Modified| The achievement progress was not modified.|
| 307| Temporary Redirect| The URI for this resource has temporarily changed.| 
| 400| Bad Request| Service could not understand malformed request. Typically an invalid parameter.| 
| 401| Unauthorized| The request requires user authentication.| 
| 403| Forbidden| The request is not allowed for the user or service.| 
| 404| Not Found| The specified resource could not be found.| 
| 406| Not Acceptable| Resource version is not supported; should be rejected by the MVC layer.| 
| 408| Request Timeout| The request took too long to complete.| 
| 410| Gone| The requested resource is no longer available.| 
  
<a id="ID4EBGAC"></a>

## Response body
The response body is empty.

## See also

##### Parent 

[/users/xuid({xuid})/achievements/{scid}/update](uri-usersxuidachievementsscidupdate.md)