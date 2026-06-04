---
author: CameronGoodwin
title: "Requesting a User Store ID for service-to-service authentication"
description: "Describes the required configuration and steps to get a User Store ID for service-to-service authentication with the Microsoft Store service APIs."
kindex:
  - request User Store ID
  - service-to-service User Store ID
  - obtain User Store ID for backend
  - Store user identity token
ms.author: cagood
ms.topic: article
edited: '03/23/2026'
ms.date: 03/31/2026
permissioned-type: public
---

# Requesting a User Store ID for service-to-service authentication

This article describes the setup and steps to obtain a User Store ID for Microsoft Store service-to-service authentication.

A User Store ID authenticates service calls to the Microsoft Store APIs on behalf of a specific user.
This identity on Xbox consoles is tied to the account of the `XUser` object.
On PC, the identity is tied to the account signed in to the Microsoft Store app and used for purchases.

> [!NOTE]
> On PC, the account identity between the Microsoft Store app can be different than the account signed in to Xbox Live and playing the game.
For more information on how the playing and purchasing accounts can be different, see [Handling mismatched store account scenarios on PC](../pc-specific-considerations/xstore-handling-mismatched-store-accounts.md).

There are two types of User Store ID keys.

1. [User Collections ID](#to-create-a-user-collections-id-key-for-the-microsoft-store-collections-service) to authenticate with the Microsoft Store Collections service
2. [User Purchase ID](#to-create-a-user-purchase-id-key-for-the-microsoft-store-purchase-service) to authenticate with the Microsoft Store Purchase service

The following sections outline the process for getting a User Store ID to call the respective services:

1. [Configure a Microsoft Entra ID application](#step-1-configure-a-microsoft-entra-id-application).
2. [Associate your Microsoft Entra application ID with your client app in Partner Center](#step-2-associate-your-microsoft-entra-application-id-with-your-client-app-in-partner-center).
3. In your service, [create Microsoft Entra ID access tokens](#step-3-creating-microsoft-entra-id-access-tokens) that represent your publisher identity.
4. In your game, [create a User Store ID key](#step-4-create-a-user-store-id-key) and that represents the identity of the user and pass this key back to your service.
5. [Authenticate requests to the Microsoft Store APIs](#step-5-authenticate-calls-to-the-microsoft-store-apis).
6. [Renew a User Store ID key](xstore-renew-a-user-store-id-key.md) when it expires.

This process involves two software components:

* **Your service:** Secure back-end that creates Microsoft Entra access tokens and calls Store APIs.
* **Your game:** Client that creates User Store ID keys for the signed-in user and passes them to your service.

## The Microsoft.StoreServices .NET library and sample

To streamline integration, use the Microsoft.StoreServices on GitHub.
The library handles authentication and key flows, and provides wrappers for Store service calls.
The sample includes end-to-end patterns for consumables, refund reconciliation, and key renewal.

* [Microsoft.StoreServices library](https://github.com/microsoft/Microsoft-Store-Services)
* [Microsoft.StoreServices sample](https://github.com/microsoft/Microsoft-Store-Services-Sample)

## Step 1: Configure a Microsoft Entra ID application

Before you can use the Microsoft Store APIs, create a Microsoft Entra web application that identifies your service when calling the APIs.
From the registered web app, get the tenant ID, application ID, and secret key to generate the required access tokens in future steps.

> [!NOTE]
> You can reuse the web app's tenant ID, application ID, and secret key across multiple games and products under your publisher. You don't need to create a new one for each game.

1. If you haven't already, follow the instructions in [Quickstart: Register an application with the Microsoft identity platform](/azure/active-directory/develop/active-directory-integrating-applications) to register a **Web app / API** application with Microsoft Entra ID.

   > [!NOTE]
   > When you register your application, choose **Web app / API** as the application type. This type enables you to retrieve a key (also called a *client secret*) for your application.
   To call the Microsoft Store APIs, you must provide a client secret when you request an access token from Microsoft Entra ID in a later step.

1. In the [Azure Management Portal](https://portal.azure.com/), go to **Microsoft Entra ID**.
 Select your directory, **App registrations** in the left pane, and then your application.
1. Copy the **Application (client) ID** and **Directory (tenant) ID** values for use later.
1. Create and copy a new client secret under **Certificates & Secrets** from the left pane.

## Step 2: Associate your Microsoft Entra application ID with your client app in Partner Center

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard), and then select your game.
1. Select **Services** &gt; **Product collections and purchases**. Enter your Microsoft Entra application ID into one of the available **Client ID** fields.
1. Select **Save**.
1. Republish the game and its add-ons to the store.

> [!NOTE]
> Add-on products inherit the Client IDs saved to their parent game's **Product collections and purchases** page. Game Bundle products have their own **Product collections and purchases** page where you need to add the Client IDs.

## Step 3: Creating Microsoft Entra ID access tokens

All API requests need a Bearer token, known as the Service access token, in the Authorization header.
The other access token needed depends on which services or API you're calling.

> [!IMPORTANT]
> Create Microsoft Entra ID access tokens only in the context of your service, not in your app. If you send your client secret to your app, it could be compromised.

### Understanding the different access tokens and audience URIs

Each access token is associated with a different audience URI used to create it.

| Access token Type | Audience URI | Use |
| ----------------- | ------------ | --- |
| Service access token | `https://onestore.microsoft.com/.default` | Bearer token in Authorization header to the Store Service endpoints |
| Collections access token | `https://onestore.microsoft.com/b2b/keys/create/collections/.default` | Creating a User Collections ID (`UserCollectionsId`) to call b2bLicensePreview or publisherQuery |
| Purchase access token | `https://onestore.microsoft.com/b2b/keys/create/purchase/.default` | Creating a User Purchase ID (`UserPurchaseId`) to call Recurrence, or other Purchase services |

> [!IMPORTANT]
> Never send service access tokens that use the `https://onestore.microsoft.com/.default` audience to the client. Store them securely within your service.

### Creating access tokens

To create the access tokens, use the OAuth 2.0 API in your service. Follow the instructions in [Microsoft identity platform and the OAuth 2.0 client credentials flow](/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow) to send an HTTP POST to the `https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/token` endpoint.
The following example shows a sample request.

``` syntax
POST https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/token HTTP/1.1
Host: login.microsoftonline.com
Content-Type: application/x-www-form-urlencoded; charset=utf-8

grant_type=client_credentials
&client_id=<your_client_id>
&client_secret=<your_client_secret>
&resource=https://onestore.microsoft.com/.default
```

For each token request:

* Set `client_id` and `client_secret` to your app registration values from [Azure Management Portal](https://portal.azure.com/).
* Set `resource` to the audience URI for the token type you need. See [Understanding the different access tokens and audience URIs](#understanding-the-different-access-tokens-and-audience-uris).

You can create a new access token before or after an existing access token expires.

For more information about the structure of an access token, see [Security tokens](/azure/active-directory/develop/security-tokens).

## Step 4: Create a User Store ID key

To identify the user in the request, your service obtains a User Store ID key.
**User Store ID** is used as a general term for either a User Collections ID or a User Purchase ID.
The only difference between these keys is which corresponding service they can authenticate with.

You can generate User Store ID keys on the client by using GDK APIs or on your service.
This section focuses on creating User Store ID keys on the client through the GDK APIs.
For more information about how to generate User Store ID keys on your service, see [Requesting a User Store ID from your service with X-tokens or OAuth 2.0](xstore-requesting-a-userstoreid-from-services.md).

User Store ID keys are JSON Web Tokens (JWT) that represent the user signed in to the Microsoft Store App.
For more information about the claims in this key, see [Claims in a User Store ID key](#claims-in-a-user-store-id-key).

> [!NOTE]
> Each User Store ID key is valid for 30 days. Your service can renew the key before it expires. If your service requires continued access to query the user's entitlements, renew your Microsoft Store ID keys rather than create new ones. For more information, see [Renewing a User Store ID key](xstore-renew-a-user-store-id-key.md).

### To create a User Collections ID key for the Microsoft Store Collections service

The User Collections ID key enables you to query products owned by a user and manage consumable products by using the Collections APIs.
For more information about consumable management, see [Managing consumable products from your service](xstore-managing-consumables-and-refunds.md).

1. Pass a Collections access token that you created in [Step 3](#step-3-creating-microsoft-entra-id-access-tokens) to the game.

1. In the game, call [XStoreGetUserCollectionsIdAsync](../../../reference/system/xstore/functions/xstoregetusercollectionsidasync.md) to retrieve the User Collections ID key.

   Pass the Collections access token as the `serviceTicket` parameter.  

   Optionally, pass your internal user identifier in `publisherUserId`.

1. After your app successfully creates a User Collections ID key, pass the key back to your service.

### To create a User Purchase ID key for the Microsoft Store Purchase service

The User Purchase ID key enables you to query products owned by a user and manage consumable products by using the Purchase APIs.
For more information about consumable management, see [Managing consumable products from your service](xstore-managing-consumables-and-refunds.md).

1. Pass a Purchase access token that you created in [Step 3](#step-3-creating-microsoft-entra-id-access-tokens) to the game.

1. In the game, call [XStoreGetUserPurchaseIdAsync](../../../reference/system/xstore/functions/xstoregetuserpurchaseidasync.md) to retrieve the User Purchase ID key.

   Pass the Purchase Access Token as the `serviceTicket` parameter.  

   Optionally, pass your internal user identifier in `publisherUserId`.

1. After your app successfully creates a User Purchase ID key, pass the key back to your service.

## Step 5: Authenticate calls to the Microsoft Store APIs

For instructions, see [Authenticating with Microsoft Entra ID and User Store IDs](xstore-authenticating-your-service.md#authenticating-with-microsoft-entra-id-and-user-store-ids).

## Step 6: Renew a User Store ID key when it expires

For instructions, see [Renewing a User Store ID key](xstore-renew-a-user-store-id-key.md).

## Additional information

### Diagram of creating a User Store ID key

The following diagram illustrates the process of creating a User Store ID key.

![Image of a diagram that shows the process of creating a User Store ID key. From left to right, there are blocks for Your service, Microsoft Entra ID, and your app with the previous two arranged vertically, Windows SDK, and Store. There are four numbered arrows that show the flow from Your service to Microsoft Entra ID, Your service to Your app, Your app to Windows SDK and Store, and then from Your app to Your service. There are dotted arrows from Store to Windows SDK, Windows SDK to Your app, and from Microsoft Entra ID to your service.](../../../../media/public-images/xstore/b2b-1.png)

### Claims in a User Store ID key

A User Store ID key is a JWT that represents the identity of the user whose product ownership information you want to access.
When you decode it by using Base64, a User Store ID key contains the claims shown in the following table.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `iat` | `int` | Time at which the key was issued, expressed as epoch time. Use this value to determine the token's age. |
| `iss` | `string` | Identifies the issuer. Has the same value as the `aud` claim. |
| `aud` | `string` | Identifies the audience. It must be one of the following values: `https://collections.mp.microsoft.com/v6.0/keys` or `https://purchase.mp.microsoft.com/v6.0/keys`. |
| `exp` | `int` | Identifies the expiration time on which or after which the key is no longer valid for processing, except renewing keys. The value of this claim is expressed as epoch time. |
| `nbf` | `int` | Identifies the time at which the token is valid for processing. The value of this claim is expressed as epoch time. |
| `http://schemas.microsoft.com/marketplace/2015/08/claims/key/clientId` | `string` | The client ID that identifies the developer. |
| `http://schemas.microsoft.com/marketplace/2015/08/claims/key/payload` | `string` | An opaque payload (encrypted and Base64-encoded) that contains information intended only for use by Microsoft Store Services. |
| `http://schemas.microsoft.com/marketplace/2015/08/claims/key/userId` | `string` | A user ID that identifies the current user in the context of your services. The same value that you pass into the optional `publisherUserId` parameter of the [method you use to create the User Store ID key](#step-4-create-a-user-store-id-key). |
| `http://schemas.microsoft.com/marketplace/2015/08/claims/key/refreshUri` | `string` | The URI that you can use to renew the key. |

The following example shows a decoded User Store ID header.

```json
{
    "typ":"JWT",
    "alg":"RS256",
    "kid": "36D101AF67A9F61B8017FB96F91EDD4B22F05804",
    "x5t":"agA_pgJ7Twx_Ex2_rEeQ2o5fZ5g"
}
```

Treat the JWT signature and `kid` claim as opaque values in client and title services.
The Store APIs validate the signature.

Example of a decoded User Store ID claim set.

```json
{
    "http://schemas.microsoft.com/marketplace/2015/08/claims/key/clientId": "1d577369placeholder7393beef1e13d",
    "http://schemas.microsoft.com/marketplace/2015/08/claims/key/payload": "placeholderytCRzCHSqnfczv3f0343wfSydx7hghfu0snWzMqyoAGy5DSJ5rMSsKoQFAccs1iNlwlGrX+/eIwh/VlUhLrncyP8c18mNAzAGK+lTAd2oiMQWRRAZxPwGrJrwiq2fTq5NOVDnQS9Za6/GdRjeiQrv6c0x+WNKxSQ7LV/uH1x+IEhYVtDu53GiXIwekltwaV6EkQGphYy7tbNsW2GqxgcoLLMUVOsQjI+FYBA3MdQpalV/aFN4UrJDkMWJBnmz3vrxBNGEApLWTS4Bd3cMswXsV9m+VhOEfnv+6PrL2jq8OZFoF3FUUpY8Fet2DfFr6xjZs3CBS1095J2yyNFWKBZxAXXNjn+zkvqqiVRjjkjNajhuaNKJk4MGHfk2rZiMy/aosyaEpCyncdisHVSx/S4JwIuxTnfnlY24vS0OXy7mFiZjjB8qL03cLsBXM4utCyXSIggb90GAx0+EFlVoJD7+ZKlm1M90xO/QSMDlrzFyuqcXXDBOnt7rPynPTrOZLVF+ODI5HhWEqArkVnc5MYnrZD06YEwClmTDkHQcxCvU+XUEvTbEk69qR2sfnuXV4cJRRWseUTfYoGyuxkQ2eWAAI1BXGxYECIaAnWF0W6ThweL5ZZDdadW9Ug5U3fZd4WxiDlB/EZ3aTy8kYXTW4Uo0adTkCmdLibw=",
    "http://schemas.microsoft.com/marketplace/2015/08/claims/key/userId": "infusQplaceholder/SZWoPB4FqLEwHXgZFuMJ6TuTY=",
    "http://schemas.microsoft.com/marketplace/2015/08/claims/key/refreshUri": "https://collections.mp.microsoft.com/v6.0/b2b/keys/renew",
    "iat": 1442395542,
    "iss": "https://collections.mp.microsoft.com/v6.0/keys",
    "aud": "https://collections.mp.microsoft.com/v6.0/keys",
    "exp": 1450171541,
    "nbf": 1442391941
}
```

## See also

[Manage products from your services](service-to-service-nav.md)

[Authenticating your service with the Microsoft Store APIs](xstore-authenticating-your-service.md)

[Requesting a User Store ID from your service with X-tokens or OAuth 2.0](xstore-requesting-a-userstoreid-from-services.md)

[Renewing a User Store ID key](xstore-renew-a-user-store-id-key.md)  

[Microsoft.StoreServices library](https://github.com/microsoft/Microsoft-Store-Services)  

[Microsoft.StoreServices sample](https://github.com/microsoft/Microsoft-Store-Services-Sample)
