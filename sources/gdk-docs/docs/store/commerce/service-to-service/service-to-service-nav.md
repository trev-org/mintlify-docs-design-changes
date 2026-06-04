---
author: CameronGoodwin
title: "Manage products from your services (contents)"
description: "Overview for configuring service-to-service calls to the Microsoft Store APIs and key scenarios enabled through these calls."
kindex:
  - Microsoft Store service-to-service
  - Store commerce service APIs
  - manage products from services
  - Xbox commerce backend integration
ms.author: cagood
ms.topic: article
edited: '03/19/2026'
ms.date: 03/31/2026
permissioned-type: public
---


# Manage products from your services

You can run commerce flows from the client, but many scenarios are more reliable when your trusted game service calls the *Microsoft Store APIs* directly.
These REST APIs support cross-platform catalog and entitlement workflows.

## Core services and features

**Microsoft Store Collections Service:**

* Verify direct ownership (excluding shared entitlements from the [Product sharing model for games](../fundamentals/xstore-product-sharing-model-for-games.md) scenarios).
* Query owned products across your publisher catalog.
* Manage consumable fulfillment with retry-safe patterns.
* Detect Xbox Game Pass status (publisher authorization required).

**Microsoft Store Purchase Service:**

* Grant free products directly to a user's account.

**Microsoft Clawback Service:**

* Receive refund and chargeback events to reconcile granted purchases.

**Microsoft Recurrence Service:**

* Query and manage subscription state, renewal, and cancellation.

The following articles explain how to integrate these services into your own back end.

## Prerequisites for service-to-service APIs

### Authentication

Depending on the auth type your service uses, the API request's `Authorization` header requires either:

* Service access token (audience for `https://onestore.microsoft.com`)
* Delegated authorization X-token (Relying Party of `http://licensing.xboxlive.com`)

> [!NOTE]
> We recommend using the Microsoft Entra ID auth flow.  
> Not all service APIs support X-tokens and future services are planned to only support Microsoft Entra ID auth.

If using a Service access token, the corresponding User Store ID identifying the user must also be included in the request body as outlined in each API's article.

For more information between these auth methods, see [Authenticating your service with the Microsoft Store APIs](xstore-authenticating-your-service.md).

### Product configuration

Products must also be configured in Partner Center for service-to-service visibility based on the auth type.
If the configurations aren't published, the API calls succeed but return no product results.

For configuration details by auth type, see:

* [Extra configuration required to view and manage products with a User Store ID and Microsoft Entra ID auth](xstore-authenticating-your-service.md#extra-configuration-required-to-view-and-manage-products-with-a-user-store-id-and-microsoft-entra-id-auth)
* [Extra configuration required to view and manage products with delegated auth X-tokens](xstore-authenticating-your-service.md#extra-configuration-required-to-view-and-manage-products-with-delegated-authentication-x-tokens)

## In this section  
  
[Authenticating your service with the Microsoft Store APIs](xstore-authenticating-your-service.md)  
Describes how to get and use either delegated authentication X-tokens or User Store IDs to authenticate with Microsoft Store Services.  
  
[Query user entitlements from your services](xstore-query-user-entitlements.md)  
Describes how to query for digital content the user is entitled to from your own services.  
  
[Detecting Xbox Game Pass subscription access from your service](xstore-detecting-game-pass.md)  
Describes how to detect a user's Xbox Game Pass subscription status.  
  
[Managing subscription products from your service](xstore-managing-subscriptions.md)  
Describes how to use the Recurrence service to query and manage your subscription products and handle the different subscription states of a user.  
  
[Managing consumable products from your service](xstore-managing-consumables-and-refunds.md)  
Describes how to build a robust system that manages consumables on your game service including managing user refunds of consumed items.  
  
[Managing refunds and chargebacks from your service](xstore-managing-refunds-and-chargebacks.md)  
Describes how to configure and use a Clawback event queue to detect refunds, returns, and chargebacks of your Consumable and Store-managed Subscription product types.  
  
[Requesting a User Store ID for service-to-service authentication](xstore-requesting-a-userstoreid.md)  
Describes the required configuration and steps to get a User Store ID for service-to-service authentication with the Microsoft Store service APIs.  
  
[Requesting a User Store ID from your service with X-tokens or OAuth 2.0](xstore-requesting-a-userstoreid-from-services.md)  
Describes how to generate a User Store ID on your service using OAuth 2.0 and X-tokens without client-side UserStoreID APIs.  
  
[Renewing a User Store ID key](xstore-renew-a-user-store-id-key.md)  
Describes how to renew a User Store ID key.  
  
## See also

[Commerce Overview](../commerce-nav.md)

[XStore API reference](../../../reference/system/xstore/xstore_members.md)
