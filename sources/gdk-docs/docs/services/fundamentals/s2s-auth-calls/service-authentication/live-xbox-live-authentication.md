---
title: "Xbox services authentication"
description: "Provides background information about Xbox services call authentication."
kindex:
- Xbox Live authentication
- XSTS
- authentication
- Xbox services, Xbox services authentication
- Xbox services, XSTS
- Xbox services, authentication
ms.topic: article
ms.localizationpriority: medium
author: joannaleecy
ms.author: fschober
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# Xbox services authentication

This topic provides background information about Xbox services call authentication.

To expose Xbox services at a faster pace, and to allow titles to use these services without a dependency on specific recovery releases, Xbox services are released as RESTful HTTPS endpoints. Authentication and authorization for these services require a valid Xbox Secure Token Service (XSTS) token and signature. For more information about XSTS tokens, see [Xbox services security tokens (XSTS tokens)](security-tokens/live-security-tokens.md).

Xbox services are called through two possible paths.

1. *Xbox services client*  
   From a client that is authenticated with Xbox services. These calls are always within a user context.
2. *Service-to-service*  
   From a custom title web service through service-to-service Xbox services calls. These calls are either on behalf of a user or made directly as a service.
   For more information about calls from title services, see [Title service calls to Xbox services](../s2s-calls/live-title-service-calls-xbox-live.md).  


## Client calls to Xbox services

For all calls to Xbox services by using the Microsoft Game Development Kit (GDK), we strongly recommend that titles use the Xbox Service APIs (XSAPI) that are bundled with Microsoft Game Development Kit (GDK) releases. These APIs handle HTTP requests and return available service data through objects directly to a title. They also implement the connection and caching behavior that we recommend for Xbox services and authentication. For more information about these APIs, see the Xbox Service API documentation [XSAPI reference](../../../../reference/live/xsapi-c/atoc-xsapi-c.md).

The following sections are provided only for completeness and a deeper understanding of Xbox services authentication.


### Initial setup

Xbox services are transparently preconfigured for all titles. No additional endpoint configuration is necessary. This applies for all `*.xboxlive.com` subdomains.


### Token retrieval and connection flow

To use any Xbox services endpoint, an XSTS authentication token and message signature must be present. Without this information, communication with the service is rejected.

The XSTS token and user identification (user hash) must be included in the `Authentication` header of the request. The message signature must be specified in the `Signature` header of the request. For detailed information about the structure of these headers, see [Xbox services security tokens (XSTS tokens)](security-tokens/live-security-tokens.md).


### Obtaining an XSTS token
  
The XSTS token and signature header data is obtained through the [XUserGetTokenAndSignatureUtf16Async](../../../../reference/system/xuser/functions/xusergettokenandsignatureutf16async.md) API. It provides the required headers for service requests.

The title then requests the XSTS token for an Xbox services endpoint by using the `XUserGetTokenAndSignatureUtf16Async` API through the following flow.

1. Call `XUserGetTokenAndSignatureUtf16Async` on the current user. Include the URL of the Xbox services and required headers or message body in the API call.  
    This API call retrieves the XSTS token for the Xbox services endpoint. The call generates a message signature for the message and predefined headers.
2. Retrieve the XSTS token and signature through `XUserGetTokenAndSignatureUtf16Result` from the asynchronous result.  
    `XUserGetTokenAndSignatureUtf16Result` returns an encrypted XSTS token. Titles should treat the returned token as opaque data. Token data must not be written to disc or cached in title space beyond the subsequent service call.
3. Use Microsoft Windows HTTP Services (WinHTTP), xCurl, and the XSTS token as appropriate in the Authorization header of the HTTPS request.  


### Token expiration and refresh

An XSTS token is valid only for a specific duration. The default expiration time for an XSTS token is four hours. Each token contains a time stamp that is verified by all Xbox services.

The [XUserGetTokenAndSignatureUtf16Async](../../../../reference/system/xuser/functions/xusergettokenandsignatureasync.md) API must be used for each new authentication or sign-in request. `XUserGetTokenAndSignatureUtf16Async` handles token expiration and caching. The API ensures that the title always receives a valid token. A title must not cache tokens otherwise.

When a token that is expired or not valid is presented to an Xbox services endpoint, an HTTP/401 error is returned.