---
title: "Server-side handling of Xbox services User Privileges"
description: "Describes how Xbox services determine what privileges a user has, and what that means for your title."
kindex:
- Server-side handling of Xbox Live User Privileges
- Xbox services, Server-side handling of Xbox services User Privileges
- Xbox services, single sign-on
- Xbox services, SSO
- Xbox services, Xbox Secure Token Service
- Xbox services, XSTS
- Xbox services, configuring relying party
- Xbox services, MXA
ms.topic: article
author: joannaleecy
ms.author: jeffshi
ms.date: 03/12/2020
edited: 02/18/2021
permissioned-type: public
---

# Server-side handling of Xbox services User Privileges

Use this topic to configure your [single sign-on (SSO) services](/azure/active-directory/manage-apps/what-is-single-sign-on) (also known as relying parties) to integrate with Xbox services privileges.

## Prerequisites

To enforce privilege-based access control to your service, you must have a service that's configured for SSO with Xbox services.
This enables the Xbox Secure Token Service (XSTS) to issue tokens that are encrypted with a public key that you provide during configuration.
This is referred to as *configuring your relying party*.

For more information, see [Xbox services authentication for title services](../../../s2s-auth-calls/service-authentication/live-title-service-authentication.md).

## Implementing privilege-based access control in partner services

The client app must send the XSTS token for the partner service by using the "authorization" header of the HTTP request.  

After the token is decrypted by the partner service, and the signature of the token verified, the privilege claim must be extracted and verified with the expected privilege for the service.  

The [Game Server](https://aka.ms/gdkdl) sample is a good resource for examples of how to handles XSTS tokens and retrieving the include claims.

> [!NOTE]
> Xbox services tokens can contain multiple user identities. Each user identity that's within the token has a privilege claim.  

For example, you can use the code for a partner matchmaking service to determine if each user on a request is authorized to join multiplayer sessions.  

### Token format for privileges

Privileges are carried in the user and privileges claim for each user identity of a token.
The privilege claim contains a space-delimited collection of integers.
Each integer represents a specific privilege.  

If a value is in the collection, it means that the user currently has the privilege and is authorized to access the corresponding feature.

The following code is an example of a full-decrypted JSON web token that contains the privilege claim.  

```json
...
{ "enc":"A128CBC+HS256", ... }.
{ "typ":"JWT", ... }.
{
"aud":"rp://your_relying_party.com/",
"iss":"xsts.auth.xboxLive.com", ...
"cnf":"
{...}",
"xdi":"
{...}",
"xti":"
{...}",
"xui":"
[
{
"xid":"2533274991020393",
"gtg":"SampleGamertag1",
"agg":"Adult",
...,
"prv":"211 212 220 226 227 228 229 230 231 234 237 240 243 244 245 246 247 248 249 251 252 255"
},
{
"xid":"1234574991020397",
"gtg":"SampleGamertag2",
"agg":"Adult",
...,
"prv":"211 212 220 226 227 228 229 230 231 234 237 240 243 244 246 251 252 255"
}
]"
}
...
```
  
## See also  
  
[Xbox services User Privileges overview](../live-user-privileges-overview.md)  
[Client-side use of Xbox services User Privileges](live-user-privileges-client.md)
