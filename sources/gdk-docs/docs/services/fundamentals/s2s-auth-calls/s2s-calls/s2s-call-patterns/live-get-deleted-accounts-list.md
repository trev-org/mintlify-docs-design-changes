---
title: "Getting the deleted accounts list"
description: "Describes how to dynamically retrieve the deleted account list for GDPR compliance from your service."
kindex:
- Getting the deleted accounts list
- Web Services
- GDPR erasure list endpoint
- Xbox services, Getting the deleted accounts list
- Xbox services, Deleted accounts list
- Xbox services, GDPR erasure list endpoint
- Xbox services, GDPR
- Xbox services, GDPR compliance
- Xbox services, Erasure list endpoint
- Xbox services, Retrieve deleted account list
ms.topic: article
ms.localizationpriority: medium
author: joannaleecy
ms.author: cagood
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# Getting the deleted accounts list from a service

This method provides a list of userId's for users who have requested their Xbox services account and data be removed in compliance with General Data Protection Regulations (GDPR).
For more questions regarding GDPR compliance, see your organization's legal compliance team.

The list of deleted accounts can also be retrieved manually through the Partner Center portal.

This API shouldn't be called continuously. It should only be used by a publisher a few times per day at most.
If the service is called too frequently, it will return HTTP 429 (Too many requests), with information on when the next call can be made.


## Prerequisites

To use this method, you'll need to use an Xbox Secure Token Service (XSTS) token for the Relying Party `https://xboxlive.com/`.

For more information, see [Title service calls to Xbox services](../live-title-service-calls-xbox-live.md).


## Request


### Request syntax

| Method | Request URI                                                 |
|--------|-------------------------------------------------------------|
| GET   | ```https://deletedaccounts.xboxlive.com/ids``` |


### Request header

| Header         | Type   | Description                                                                                           |
|----------------|--------|-------------------------------------------------------------------------------------------------------|
| Authorization  | string | Required. The service authorization XSTS token. |
| Signature      | string | Required.        |
| User-Agent     | string | Optional but recommended. Helps identify your service for logging and investigations.                 |
| Host           | string | Must be set to the value **deletedaccounts.xboxlive.com**.                                            |
| Content-Type   | string | Specifies the request and response type. Currently, the only supported value is **application/json**. |


### Request URI parameters

| Parameter     | Type   | Description                                                                        | Required |
|---------------|--------|------------------------------------------------------------------------------------|----------|
| StartDate     | string | Specifies the start of the date range of deleted account requests (YYYY-MM-DDTHH:MM:SS) UTC | No  |
| EndDate       | string | Specifies the end of the date range of deleted account requests (YYYY-MM-DDTHH:MM:SS) UTC | No  |


### Request example

```html
GET https://deletedaccounts.xboxlive.com/ids?StartDate=2020-02-24T00:00:00&EndDate=2020-02-25T00:00:00 HTTP/1.1
Authorization: XBL3.0 x=2218837447227500391;eyJlbmMiOiJ...
Signature: AAAAAQHVT...
User-Agent: {identifier string of your service}
Content-Type: application/json;
Host: deletedaccounts.xboxlive.com
```


## Response

```json
HTTP/1.1 200 OK
Cache-Control: no-cache, no-store
Content-Length: 78296
Content-Type: application/json
X-Content-Type-Options: nosniff
MS-CV: QLHKwZlzGkqLt4smjd+qqQ.2.5.0
Date: Wed, 26 Feb 2020 00:23:34 GMT

[
    {
        "publisher": {
            "Id": "4dcc8ca0-72cc-4cfb-888c-cfddda8d2ebe",
            "Name": ""
        },
        "Ids": [
            "89E3C2A11A16CB93BD99D756377EA750DD493D95",
            "EB1F2FCEDC0B166084D5111810BA2F1156B416CE",
            ...
            "0ACFB1A45A7E0F49EF96729F036ECF555C0A4D75",
            "7187F79C48F1B6CB9FBA8C764B379C6ADB60D182"
        ]
    }
]
```


### Response body

| Parameter         | Type                     | Description          | Required |
|-------------------|--------------------------|----------------------|----------|
| Publisher         | PublisherInformation     | Identifying information of the publisher who was tied to the authorization of the request. See PublisherInformation object table below | Yes       |
| Ids               | list&lt;string&gt; | An array of the userIds who have requested their accounts and data be removed. The default format of these Ids are the PXUIDs of the accounts for the calling publisher. If the publisher is authorized for XUID access and usage in their services, then the IDs will be returned as XUIDs of the users.        | Yes       |

The `PublisherInformation` object contains the following parameters.

| Parameter     | Type   | Description                                                                        | Required |
|---------------|--------|------------------------------------------------------------------------------------|----------|
| Id            | string | PublisherId which matches the Business Partner Certificate used for authentication. This can be found in the beginning of the "Issued to:" field of the Business Partner Certificate | Yes      |
| Name          | string | String name of the publisher. Usually this is blank.             | No       |


#### HTTP error codes

| Code | Error        | Inner error code           | Description           |
|------|--------------|----------------------------|-----------------------|
| 401  | Unauthorized | Expired Token              | The XSTS token has expired and a new one is required to complete the call. |
| 403  | Unauthorized | Invalid Token              | Token used isn't authorized to authenticate with this endpoint. Token might be for the wrong Sandbox or Relying Party.|
| 429  | Throttled    | Too frequent calls         | The service has been called too many times for the user within the specified call limits. See the response for information on when your service can make another call for this user to the service. |


## See also

[Xbox services RESTful Reference](../../../../../reference/live/rest/atoc-xboxlivews-reference.md)

[Title service calls to Xbox services](../live-title-service-calls-xbox-live.md)