---
author: CameronGoodwin
title: "purchase.mp.microsoft.com/v8.0/b2b/clawback/sastoken"
description: "Generates an SAS token to be able to authenticate with your Clawback event message queue."
kindex:
  - clawback sas token API
  - purchase mp clawback sastoken
  - v8 clawback export token
  - chargeback data access token
ms.author: cagood
ms.topic: reference
edited: '03/20/2026'
ms.date: 03/31/2026
permissioned-type: public
---

# purchase.mp.microsoft.com/v8.0/b2b/clawback/sastoken

This endpoint generates an [SAS token](/azure/storage/common/storage-sas-overview) to authenticate and access your Clawback event message queue.
For more information on a Clawback event message queue, see [Managing refunds and chargebacks from your service](../xstore-managing-refunds-and-chargebacks.md).

## Prerequisites

Review [Prerequisites for service-to-service APIs](../service-to-service-nav.md#prerequisites-for-service-to-service-apis).

To use this API, you must go through the onboarding process with the assistance of your Developer Partner Manager or Microsoft contact.
For more information on the onboarding process, see [Required setup / onboarding request](../xstore-managing-refunds-and-chargebacks.md#required-setup--onboarding-request).

## Request

### Request syntax

| Method | Request URI |
| ------ | ----------- |
| `GET` | ```purchase.mp.microsoft.com/v8.0/b2b/clawback/sastoken``` |

### Request header

| Header | Type | Description |
| ------ | ---- | ----------- |
| `Authorization` | `string` | Required. Your Microsoft Entra ID service access token in the form `Bearer` &lt;*token*&gt;. See [Creating Microsoft Entra ID access tokens](../xstore-requesting-a-userstoreid.md#step-3-creating-microsoft-entra-id-access-tokens). |
| `Host` | `string` | Must be set to the value `purchase.mp.microsoft.com`. |

### Request example

```html
GET https://purchase.mp.microsoft.com/v8.0/b2b/clawback/sastoken HTTP/1.1
Host: purchase.mp.microsoft.com
Authorization: Bearer [Microsoft Entra ID bearer token]
```

## Response

### Response body

The response body is JSON with the following values.

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `expiresOn` | `DateTime` | The UTC date and time that the SAS token expires | Yes |
| `uri` | `string` | Combined Storage resource URI and [SAS Token](/azure/storage/common/storage-sas-overview) to access the Clawback Message Queue. | Yes |

### Response example

```json

HTTP/1.1 200 OK
Date: Thu, 08 Dec 2022 20:13:46 GMT
Content-Length: 243
Content-Type: application/json; charset=utf-8
ms-correlationid: 70e6f659-ceee-4050-bdf3-56ea3beefe23
ms-requestid: 8c80d7ff-73e2-4a5c-9aca-79059fbc1beb
ms-cv: tRscYtHLJHps.0
x-content-type-options: nosniff

{
    "expiresOn":"2022-12-09T02:13Z",
    "uri":"https://uluufeofsxh2k.queue.core.windows.net:443/gxhxcvb32lnk4?sv=2021-10-04&spr=https&st=2022-12-08T20%3A13%3A46Z&se=2022-12-09T02%3A13%3A46Z&sp=rp&sig=OneHfX99E820avICZvXJUF14IyDuv2BrvY0kj%2Ftxc70%3D"
}

```

## Using the SAS token to access the Clawback event message queue

Once you have the `uri` parameter, you can access queue messages.
For more information, see [Processing Clawback messages from the queue](../xstore-managing-refunds-and-chargebacks.md#processing-clawback-messages-from-the-queue).

## Related articles

[Managing refunds and chargebacks from your service](../xstore-managing-refunds-and-chargebacks.md)

[Managing consumable products from your service](../xstore-managing-consumables-and-refunds.md)

[Manage products from your services](../service-to-service-nav.md)

[Authenticating your service with the Microsoft Store APIs](../xstore-authenticating-your-service.md)

[Azure Queue Storage REST APIs](/rest/api/storageservices/queue-service-rest-api)

[Azure Queue Storage using .NET](/azure/storage/queues/storage-dotnet-how-to-use-queues?tabs=dotnet)
