---
author: CameronGoodwin
title: "Requesting a User Store ID from your service with X-tokens or OAuth 2.0"
description: "Describes how to generate User Store IDs on a service using OAuth 2.0 or X-tokens without APIs on the client."
kindex:
  - request User Store ID with X token
  - request User Store ID with OAuth 2.0
  - backend User Store ID flow
  - delegated auth User Store ID
ms.author: cagood
ms.topic: article
edited: '03/23/2026'
ms.date: 03/31/2026
permissioned-type: public
---


# Requesting a User Store ID from your service with X-tokens or OAuth 2.0

This article describes how your service can generate User Store IDs directly, without exchanging access tokens and keys through the game client.
This approach is useful for:

* Experiences where there isn't a game client within the flow
* Linking the user's Xbox account to your own service's account for the user
* Games and services that are already using Xbox Security Tokens (XSTS or X-tokens) authentication for client-to-service and service-to-service calls

For information on User Store IDs in general, see [Requesting a User Store ID for service-to-service authentication](xstore-requesting-a-userstoreid.md).

## X-token requirement

This process requires the use of a Delegated Auth X-Token to identify the user that the User Store ID represents.

For more information on Delegated Auth X-Tokens and how to create them, see [Title service calls to Xbox services](../../../services/fundamentals/s2s-auth-calls/s2s-calls/live-title-service-calls-xbox-live.md).

## OAuth 2.0 requirements to generate the User Store IDs

If your service uses OAuth to have the user sign in with their Microsoft Account (MSA), the following are required:

* User must have an Xbox identity tied to their Microsoft Account as the OAuth credentials need to be exchanged for an X-token.
* The OAuth scope you request must include both `xboxlive.signin` and `xboxlive.offline_access` to ensure proper user consent for this flow and ability to retrieve the required X-token.

For more information on using Xbox services sign-in with OAuth on your service, see [Xbox services sign-in for title websites](../../../services/fundamentals/s2s-auth-calls/service-authentication/live-website-authentication.md).

## Steps when using OAuth 2.0 credentials

With OAuth, you obtain user consent and exchange OAuth credentials for an X-token against your relying party.
After that, continue with the same flow in [Steps when using X-Tokens](#steps-when-using-x-tokens).

Outline flow to exchange OAuth credentials for an X-token:

1. Obtain the OAuth 2.0 authorization code
2. Exchange the authorization code for an RPS token (also called a Microsoft Account access token)
3. Exchange the RPS token for an Xbox User Token
4. Exchange the Xbox User Token for an X-Token against your own Relying Party
5. Use the X-token in [Steps when using X-Tokens](#steps-when-using-x-tokens).

For full implementation details, see [Xbox services sign-in for title websites](../../../services/fundamentals/s2s-auth-calls/service-authentication/live-website-authentication.md).

## Steps when using X-Tokens

After you have an X-token that identifies the user for your relying party, use its `DelegationToken` claim to create a Delegated Auth X-token.
The initial X-token can come from either the game client or the OAuth 2.0 flow.

Outline flow to create a Delegated Auth X-token:

1. Extract the DelegationToken claim (`dlt`) from the user's X-token.
2. Obtain a Service Token from the XSAS service using your Business Partner certificate.
3. Exchange the DelegationToken, Service Token, and target Relying Party (see table) for a Delegated Auth X-token.

For full implementation details on how to create Delegated Auth X-tokens, see [Title service calls to Xbox services](../../../services/fundamentals/s2s-auth-calls/s2s-calls/live-title-service-calls-xbox-live.md).

In step 3, the Relying Party that you use depends on if you're generating a User Collections ID or a User Purchase ID for the user:

| User Store ID type | Delegated Auth X-token Relying Party | URI to create User Store ID |
| ------------------ | --------------------------------------- | --------------------------- |
| User Collections ID (`UserCollectionsId`) | ```http://licensing.xboxlive.com``` | ```https://collections.mp.microsoft.com/v7.0/beneficiaries/me/keys``` |
| User Purchase ID (`UserPurchaseId`) | ```http://mp.microsoft.com/``` | ```https://purchase.mp.microsoft.com/v7.0/users/me/keys``` |

## Request

Once you have the Delegated Auth X-token, request the User Store ID using the corresponding URI for the service you're calling.

### Request syntax

| Method | Request URI |
| ------ | ----------- |
| `POST` | ```collections.mp.microsoft.com/v7.0/beneficiaries/me/keys``` |
| `POST` | ```purchase.mp.microsoft.com/v7.0/users/me/keys``` |

### Request header

| Header | Type | Description |
| ------ | ---- | ----------- |
| `Authorization` | `string` | Required. Delegated Auth X-token in format `XBL3.0 x=[User Hash];[Token]` |
| `Host` | `string` | Must match the host of the URI being called |
| `Content-Length` | `number` | The length of the request body. |
| `Content-Type` | `string` | Specifies the request and response type. Currently, the only supported value is `application/json`. |

### Request body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `serviceTicket` | `string` | Your service's Collections Access Token or Purchase Access Token based on which of the URIs you're calling. For information on creating these access tokens, see [Understanding the different tokens and audience URIs](xstore-requesting-a-userstoreid.md#understanding-the-different-access-tokens-and-audience-uris). | Yes |
| `publisherUserId` | `string` | Optional value stamped into the User Store ID for your own tracking. | No |

### Request example

```html
POST https://collections.mp.microsoft.com/v7.0/beneficiaries/me/keys HTTP/1.1
Authorization: XBL3.0 x=13178812777611882182;eyJ...
Content-Length: 1352
Content-Type: application/json;
Host: collections.mp.microsoft.com
 
{
    "serviceTicket": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIn...",
    "publisherUserId": "CustomPublisherUserId"
}
```

## Response

### Response body

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `key` | `string` | User Store ID that can be used for service-to-service authentication with Microsoft Store services. | Yes |

### Response example

```html
HTTP/1.1 200 OK
Date: Wed, 23 Mar 2022 23:06:25 GMT
Content-Type: application/json; 
Content-Length: 1716
MS-CorrelationId: dd5be303-f9a0-408a-bd01-e8c63afa721a
MS-RequestId: 0b9c8e5e-dfdd-4cf8-bfbe-93a5be3a7f48
MS-CV: rqFUH3gA+UOmTyXe.0

{"key":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjY..."}
```

## See also

[Manage products from your services](service-to-service-nav.md)

[Authenticating your service with the Microsoft Store APIs](xstore-authenticating-your-service.md)

[Title service calls to Xbox services](../../../services/fundamentals/s2s-auth-calls/s2s-calls/live-title-service-calls-xbox-live.md)

[Xbox services sign-in for title websites](../../../services/fundamentals/s2s-auth-calls/service-authentication/live-website-authentication.md)

[Renewing a User Store ID key](xstore-renew-a-user-store-id-key.md)  

[Microsoft.StoreServices library](https://github.com/microsoft/Microsoft-Store-Services)  

[Microsoft.StoreServices sample](https://github.com/microsoft/Microsoft-Store-Services-Sample)
