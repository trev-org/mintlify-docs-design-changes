---
title: "Xbox services sign-in for title websites"
description: "Supporting Xbox services sign-in on custom title websites."
kindex:
- Xbox services sign-in for title websites
- Xbox Live
- XSTS
- tokens
- website
- Xbox services, Xbox services sign-in for title websites
- Xbox services, XSTS
- Xbox services, tokens
- Xbox services, website registration
- Xbox services, authentication
ms.topic: article
ms.localizationpriority: medium
author: joannaleecy
ms.author: fschober
edited: 11/19/2021
ms.date: '08/01/2022'
permissioned-type: public
---

# Xbox services sign-in for title websites

A variety of scenarios call for building websites or web apps to which users can get authenticated using their Microsoft account (formerly referred to as their Xbox services account). This authentication allows access (typically read-only) to a user's Xbox services data, such as leaderboards, stats, game clips, and profile.

To enable authentication of the user, the website or web app first has to be registered with Microsoft to receive an identity for Microsoft account authentication. This is a one-time provisioning step. At runtime, the website first allows the user to authenticate with a Microsoft account, which provides credentials that can then be exchanged for Xbox services access tokens.

Xbox services access tokens can then be used to retrieve information for account-linking purposes and to access Xbox services on behalf of the user. The following section outlines these authentication flows in more detail.

## Authentication Overview

The process of enabling authentication for the user and getting authorization to access Xbox services data consists of three steps. The first step is a one-time provisioning step:

**Website registration**

* The website or web app gets an identity provisioned for use with a Microsoft account.
* This registration happens in the publisher's Microsoft Entra ID.

After this step is completed, you can develop your website or web app and perform the following steps at runtime to receive Xbox player authorization and authentication:

**User authentication to a Microsoft account**

1. The user accesses the website or starts the app.
2. The user is redirected to log into their Microsoft account via the OAuth2.0 endpoint.
3. The user enters their credentials successfully and consents for the website or app to access Xbox services information on his or her behalf.
4. The website or app receives an authorization code.
5. The website or app requests an access token, leveraging the authorization code and requesting the correct scope.
6. The website or app received an access token (and a refresh token if requested).

**User authentication to Xbox services**

7. Using the access token, the website or app makes a request for an Xbox services User Token (U Token).
8. The User token is then used to obtain X tokens (access tokens) from the Xbox Security Token Service (XSTS) to access Xbox services or title services.

## Website Registration

To be able to authenticate a user to a website using a Microsoft account, the website or app first needs to be registered with via the Microsoft Entra ID app registration interface.

1. Log into the Azure Portal with an account that has permission to register app within Microsoft Entra ID
2. Select *"App Registration"*
3. Select *"+ New Registration"*  
   * Enter a name for this application
   * For *"Supported account types"* select *"Personal Microsoft accounts only"*
   * Enter a redirect URL that you want the authentication flow to redirect the user to after successful authentication.  Make note of this as you'll need it later.  
     You can add additional URIs later as well
   * Complete the App registration
4. Make note of the Application (client) ID and the Directory (tenant) ID
5. Select Certificates & Secrets  
   * Select *"+ New Client Secret"*
   * Enter a Description
   * Select an Expiration Range
   * Click Add
   * Make note of the created Client Secret value as you'll need it later. This value should only be used and stored securely on your service.

## Integration

Implementing the flow mentioned above, and using the identifiers created during the registration process implement the following:

1. Begin the OAuth2.0 Flow by requesting an authorization code:  
    * Navigate the user to `https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize?client_id=[Application (client) ID from Registration]&response_type=code&redirect_uri=[RedirectUI given during registration]&scope=xboxlive.signin&xboxlive.offline_access`  
  In this example we are requesting a sign-in token and access to an offline token which can be used to refresh the access token after it expires. This will also show the correct account privacy and activity notices to the user.
    * Once the user completes logging into their Microsoft Account, they will be redirected to the redirect URI provided with the authorization code appended with the `"code="` followed by the authorization code.
    * The use of `xboxlive.offline_access` scope is optional and only needed for scenarios that require calls after the original sign-in token has expired. Other, additional scopes cannot be used for this request.

2. Redeem a Microsoft Account access token using the authorization code and the client secret generated during the application registration process:
   * Create a POST web request with the following properties:  
     URL: `https://login.microsoftonline.com/consumers/oauth2/v2.0/token`  
     Header: `Content-Type: application/x-www-form-urlencoded`  
     Body:  

     ```
     client_id=[Application (Client) ID]&code=[Authorization Code received above]&
     redirect_uri=[A redirect UI set in the application]&
     grant_type=authorization_code&client_secret=[Client secret value from application registration]
     ```

    * The response from the service will contain a JSON response with the following information:  
      Token Type: `Bearer`  
      Scope: `XboxLive.signin XboxLive.offline_access`  
      Expires_in: `Value`  
      Access_token: `[token value]`  
      This is your access token which you'll use to exchange with Xbox services for an Xbox User Token.

3. You can request an Xbox User token by calling the Xbox authentication endpoints and exchange your Microsoft Account access token for an Xbox User Token by completing the following request:  
   * Create a POST web request with the following properties:  
     URL: `https://user.auth.xboxlive.com/user/authenticate`  
     Header: `x-xbl-contract-version: 1`  
     Header: `content-type: application/json`  
     Body: A well formed json payload that includes following data:  

     ```
     {
       "RelyingParty": "http://auth.xboxlive.com",
       "TokenType": "JWT",
       "Properties": {
         "AuthMethod": "RPS",
         "SiteName": "user.auth.xboxlive.com",
         "RpsTicket": "d=[Microsoft Account access token received in the last step]"
       }
     }
     ```

   * The response from the service will contain a json payload containing the following information included the Xbox User Token.  You will need the Xbox User Token in the next step:  

     ```
     {
       "IssueInstant": "2021-06-08T23:45:50.2531302Z",
       "NotAfter": "2021-06-22T23:45:50.2531302Z",
       "Token": "d=[Xbox User Token]",
       "DisplayClaims": {
       "xui": [
           {
             "uhs": "[USER HASH]"
           }
         ]
       }
     }
     ```

4. You can then exchange your User Token for an X-token.  If you want to perform service-to-service calls on behalf of the user and need the DelegationToken claim or the XUID for the user you can request an X-token for your own Relying Party and then handle that token as you would normally to extract the needed claims.  

   ```
   POST https://xsts.auth.xboxlive.com/xsts/authorize HTTP/1.1
   x-xbl-contract-version: 1
   Content-Type: application/json
   Host: xsts.auth.xboxlive.com
   Content-Length: 1425
   Expect: 100-continue
   {
                   "Properties": {
                                   "SandboxId": "XDKS.1",
                                   "UserTokens": ["eyJlbmMiOiJBMTI4Q0JDK0hTMjU2IiwiYWxnIjoiUlN..."]
                   },
                   "RelyingParty": "[Your Relying Party here]",
                   "TokenType": "JWT"
   }
   ```