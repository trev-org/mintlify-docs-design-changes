---
title: "Xbox services authentication for title services"
description: "Describes how to use Xbox services authentication with a custom title service."
kindex:
- Xbox Live authentication for title services
- title service authentication
- XSTS
- authentication
- Xbox services, Title service authentication
- Xbox services, XSTS
- Xbox services, Authentication
- Xbox services, Xbox services authentication for title services
ms.topic: article
ms.localizationpriority: medium
author: joannaleecy
ms.author: fschober
edited: 01/09/2024
ms.date: '08/01/2022'
permissioned-type: public
---

# Xbox services authentication for title services

This topic describes how to use Xbox services authentication with a custom title service.

In addition to Xbox services, XSTS tokens can also be used for authentication and authorization of custom title services. Custom web services can use claims issued by Xbox services that are contained in a *partner XSTS token*.

A partner XSTS token holds a set of claims that are defined specifically for the target service. Token claims are issued and signed by Xbox services and are therefore significantly more tamperproof than any game client data. Custom title services must use XSTS token claims for validating user/device identity and authority. Some examples of claims that involve a partner XSTS token include the gamertag, player privileges, age group, and Partner XUID (pXUID) that is unique for the player under that title's publisher. For a full list of claims, see [Xbox services security token claims](security-tokens/live-token-claims.md).

Xbox services constructs the partner XSTS token so it's only readable by a custom web service and opaque to a client. To achieve this, the token is an encrypted JSON Web Token (JWT) and adheres to the RFC 7519 standard. The token is protected through asymmetric encryption that uses private and public encryption keys. In this way, only the web service that has the private key can decrypt and inspect the partner XSTS token.

Each token configuration is preformed and available on a *publisher level* in Partner Center. A developer specifies for token name, available claims and encryption certificate (keys), and token expiration time. This configuration is for a specific *Relying Party*.

Partner XSTS token use is limited to HTTPS connections to ensure security and is defined through the **Webservice Endpoint** configuration in Partner Center. This configuration specifies the pairing of partner XSTS token and web service URIs. Unlike the Relying Party configuration, Webservice Endpoints are configured *per title* in Partner Center.

## Relying Party configuration

To use custom web services, a title must first complete the single sign-on configuration in Partner Center. For more information, see [Configure Relying Party](../custom-service-config/relying-parties/live-relying-parties-nav.md).

The Relying Party configuration is configured at a *publisher level* and across all sandboxes. It's best practice to use the same Relying Party configurations for the same title service (across different titles) whenever possible.

## Webservice Endpoint configuration

In addition to the Relying Party configuration, a service endpoint must be configured in Partner Center for a title service to use partner XSTS tokens. For more information, see [Web services](../custom-service-config/web-services/live-web-services-nav.md).

Web service endpoints are configured at a *title level* in the global `DefaultNsal` configuration. `DefaultNsal` is the only configuration type for current titles. Previously configured titles might use other configuration types that reflect other environments, such as `CertificationNsal` and `RetailNsal`. To simplify configuration, these configuration types aren't available to new titles.

### Web service SSL certificates

All web service endpoints are required to use HTTPS and use SSL certificates that are issued by trusted Certificate Authorities (CAs). These certificates must not be specified in the web service endpoint configuration.

For development and testing, titles can use self-signed SSL certificates but it is not recommended if a trusted root certificate can be used.
Self-signed SSL communication isn't trusted by default on the Xbox console.
The HTTPS connection fails unless the certificate is added to the Webservice Endpoint definition on your title's Single Sign-on page in Partner Center.

For a list of recognized CAs, see [List of Participants - Microsoft Trusted Root Program](https://aka.ms/trustcertpartners) in the Security documentation. Services can also obtain a free, trusted SSL certificate from organizations such as [letsencrypt.org](https://letsencrypt.org).

## Token retrieval and connection flow

All title service endpoints should require a partner XSTS token for authentication and authorization. Without this information, communication with the service should be rejected.

For web services, the partner XSTS token and user identification (user hash) has to be included in the `Authentication` header of the request. For detailed information about the structure of these headers, see [Xbox services security tokens (XSTS tokens)](security-tokens/live-security-tokens.md).

For secure TCP/UDP services, the partner XSTS token and user identification (user hash) should be included in the initial authorization/handshake message. Without this information, communication with the service should be rejected. For these connections, a placeholder can be specified as the Webservice Endpoint URI that reflects the domain of the service.

## Obtaining a partner XSTS token on the client and sending the HTTPS request

The partner XSTS token and signature header data are obtained by the game client through the [XUserGetTokenAndSignatureUtf16Async](../../../../reference/system/xuser/functions/xusergettokenandsignatureutf16async.md) API with the following flow.

1. Call `XUserGetTokenAndSignatureUtf16Async` on the current user. Include the URL of the service and (if applicable) custom headers or message body in the API call.
    The API retrieves an XSTS token and message signature to use with the target endpoint or Xbox service. 
2. Retrieve the XSTS token and signature through `XUserGetTokenAndSignatureUtf16Result` from the asynchronous result.
    `XUserGetTokenAndSignatureUtf16Result` returns an encrypted XSTS token. Titles should treat the returned token as opaque data. Token data must not be written to disc or cached in title space beyond the subsequent service call.  Token caching is handled by `XUserGetTokenAndSignatureUtf16Async` for you.
3. Use create an HTTPS request to your target endpoint using Microsoft Windows HTTP Services (WinHTTP), the XSTS token and Signature values.
    All HTTPS calls must be performed through the WinHTTP API adding the XSTS Token value to the `Authentication` header and the Signature value as the `Signature` headers.

For secure TCP/UDP services, the same flow with the following changes is used.

* Instead of the service call URL, the title specifies the placeholder URI for the service.
* The authentication data is used during the initial authorization/handshake of the TCP/UDP connection.

## Handling partner XSTS tokens on the server

After the partner XSTS token is received by a title service, the service must parse, decrypt and validate the token's authenticity.  
For details on parsing and validating an XSTS token, see [Xbox services security tokens (XSTS tokens)](security-tokens/live-security-tokens.md).

Service developers are also strongly encouraged to use the [Game Service sample](https://aka.ms/xgdsamples) and [Xfest 2019 presentation XSTS Auth and Server to Server Made Easy](https://forums.xboxlive.com/articles/96129/xfest-online-2019-archive.html) for review and testing.
The sample has a full service library with token handling.

### Authentication and authorization

After a token has been parsed, decrypted and verified the service can trust the token's claims.  
For a list of all XSTS token claims see [Xbox services security token claims](security-tokens/live-token-claims.md).
The service should first use these claims for service-level authentication and authorization.  
Information contained in a partner XSTS token should always be considered authoritative.
Service calls don't need to replicate this information through other parts of the request.

Specific care must be taken for user identity. It must always be validated through an XSTS token claim and must not be used without validation from other sources for the service request. To identify a user for authentication purposes, a title service has two options.

* The **/user/pXUID (ptx)** claim.  
   For any scenarios that only require an identity for account linking, the Partner XUID (pXUID) should be used. This claim exposes a unique identifier of the user's Xbox services account under the current publisher.
* The **/user/XID** claim.  
   For any scenarios that require a service to return user identity or perform service-to-service calls to Xbox services services, the XUID of a user is needed. Examples of such services are custom leaderboard or matchmaking services, or services that validate purchases through Xbox services service calls.

Titles services must be authorized to enable the XUID in the partner XSTS token and store XUID information. Work with your Developer Partner Manager to go through that process. However, use of the pXUID doesn't require additional security reviews or permission.

Although the gamertag is available in the token claims, it must never be used as a unique identifier for a user. The gamertag can change and can therefore only be used for temporary display or caching purposes.

For authorization purposes, you can obtain the Xbox services privileges of a user through the */user/privileges* claim. These privileges are identical to the privileges exposed on Xbox services and must be verified for service access.  If a user doesn't have sufficient access rights, a service should provide an HTTP/401 error code.

After validation of user identity and privileges, services can use additional partner token claims to retrieve more information about the user and device for service logic.

### Token expiration and refresh

An XSTS token is valid for a specific duration configured in the corresponding Relying Party in Partner Center.
The default expiration time for an XSTS token is four hours.
Each token contains a time stamp that should be verified by the service before accepting the token claims.
If a token that has expired is presented to the custom service, the service should return an HTTP/401 error.

Because the [XUserGetTokenAndSignatureUtf16Async](../../../../reference/system/xuser/functions/xusergettokenandsignatureutf16async.md) on the client handles XSTS token expiration and caching, it should be called each time before sending a request to your game services.
The API ensures that the title always receives a valid token.
A title must not cache tokens otherwise.
