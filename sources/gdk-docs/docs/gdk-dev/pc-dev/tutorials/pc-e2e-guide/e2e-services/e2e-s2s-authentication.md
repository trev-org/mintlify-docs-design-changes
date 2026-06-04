---
author: sdgmiller
title: "Implement S2S authentication in your game"
description: "Describes how to implement S2S authentication in your game."
kindex:
- User authentication and ownership
- Xbox services, Xbox account
- Xbox services, identity
- Xbox services, user authentication
ms.topic: article
edited: 06/03/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Implement service-to-service authentication in your game

Using the Microsoft Game Development Kit (GDK) for service-to-service authentication allows your service to securely interact with Microsoft Store APIs. This method uses User Store IDs or delegated authentication tokens to authenticate calls. Ensuring seamless integration and secure transactions.

We recommend that new titles and services use the Microsoft Entra ID authentication flow with User Store IDs for both Xbox titles on PC console. Future services and development for Microsoft Store uses User Store IDs and not X-tokens.

## Implement service-to-service authentication by using Microsoft Entra ID and User Store IDs

A User Store ID can be used to authenticate a call from your service to the Microsoft Store API.  

There are two types of User Store IDs.

* `UserCollectionsID`: Authenticates with the Microsoft Store Collections service
* `UserPurchaseID`: Authenticates with the Microsoft Store Purchase service

This process involves two software components that perform different tasks.

* Your service: An application that runs securely in the context of your business environment. This app can be implemented by using any development platform that you choose. Your service is responsible for creating the Microsoft Entra ID access tokens that are needed for calling the REST URIs for the Microsoft Store Collections service.
* Your game: The game for which you want to access and manage entitlement information (including add-ons for the game). This game is responsible for creating the User Store ID keys that you need to call the Microsoft Store APIs with.
  The game can either directly create the User Store ID keys or pass an X-token to your service to create the key. For more information on creating the Store ID keys on your service, see [Requesting a User Store ID from your service with X-tokens or OAuth 2.0](../../../../../store/commerce/service-to-service/xstore-requesting-a-userstoreid-from-services.md).

This scenario outlines the necessary configuration and steps to get a User Store ID for service-to-service authentication between the Microsoft Store service APIs and your service.  

1. [Configure a Microsoft Entra ID application](../../../../../store/commerce/service-to-service/xstore-requesting-a-userstoreid.md#step-1-configure-a-microsoft-entra-id-application): Before you can use the Microsoft Store APIs, you must create a Microsoft Entra ID web application, retrieve the tenant ID and application ID for the application, and generate a key.  
   The Microsoft Entra application must have the following options enabled under **Manage**->**Authentication**.
   * Access Tokens
   * ID Tokens
   * Supported Account Types must include **personal Microsoft accounts** (for example, Skype and Xbox)
1. [Associate your Microsoft Entra application ID with your client app in Microsoft Partner Center](../../../../../store/commerce/service-to-service/xstore-requesting-a-userstoreid.md#step-2-associate-your-microsoft-entra-application-id-with-your-client-app-in-partner-center): In order to get results for your products when calling Microsoft Store APIs, you must associate your Microsoft Entra application ID with your game in Partner Center. A republish is also required to your sandbox or the RETAIL environment of the game and all add-on products.
1. [Create Microsoft Entra ID access tokens](../../../../../store/commerce/service-to-service/xstore-requesting-a-userstoreid.md#step-3-creating-microsoft-entra-id-access-tokens): To call the Microsoft Store APIs, two different Microsoft Entra access tokens are required. These two tokens are the Service Access Token and a User Store ID.
1. [Create a User Store ID key](../../../../../store/commerce/service-to-service/xstore-requesting-a-userstoreid.md#step-4-create-a-user-store-id-key): In your game, create a User Store ID key that represents the identity of the user currently signed in to the Microsoft Store app. Pass this key back to your service.
1. [Authenticating with Microsoft Entra ID and User Store IDs](../../../../../store/commerce/service-to-service/xstore-authenticating-your-service.md#authenticating-with-microsoft-entra-id-and-user-store-ids): All Microsoft Store service APIs support authentication through Microsoft Entra ID and User Store IDs.
1. [Renew a Microsoft Store ID key](../../../../../store/commerce/service-to-service/xstore-renew-a-user-store-id-key.md): When you generate a User Store ID key, it has a lifetime of 30 days. Within the 30-day lifetime, the key is honored for authentication to the Microsoft Store Services. The key can also be renewed before it expires to generate a new User Store ID for the same Microsoft Entra application Client ID and User identities.

## See also

The GDK documentation is the best source of up-to-date information. For details see the following articles.

* [Authenticating your service with the Microsoft Store APIs](../../../../../store/commerce/service-to-service/xstore-authenticating-your-service.md)

* [Requesting a User Store ID for service-to-service authentication](../../../../../store/commerce/service-to-service/xstore-requesting-a-userstoreid.md)

* [Requesting a User Store ID from your service with X-tokens or OAuth 2.0](../../../../../store/commerce/service-to-service/xstore-requesting-a-userstoreid-from-services.md)  

### The Microsoft.StoreServices .NET library and sample

To help streamline integration into your games of this authentication flow, see the publicly available GitHub project for the Microsoft.StoreServices library. This library simplifies the process for authenticating with and calling the Microsoft Store Services from your back-end services. With these services, you can verify and manage user purchases made for your app or game within the Microsoft Store (including Xbox consoles).

This sample highlights how a web service can integrate with the Microsoft.StoreServices library and has example logic for managing consumable products, reconciling refunded purchases, renewing expired User Store IDs, and more. This sample also provides a configuration guide that includes the steps in this article about how to configure and set up your Microsoft Entra ID for this authentication method.

* [Microsoft.StoreServices library](https://github.com/microsoft/Microsoft-Store-Services)
* [Microsoft.StoreServices sample](https://github.com/microsoft/Microsoft-Store-Services-Sample)
* [Microsoft.StoreServicesClient sample](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/MicrosoftStoreServicesClient)
