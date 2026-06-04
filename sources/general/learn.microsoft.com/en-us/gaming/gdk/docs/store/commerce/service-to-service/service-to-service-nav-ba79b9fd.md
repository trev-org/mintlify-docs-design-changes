# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/service-to-service-nav?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/service-to-service-nav?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Manage products from your services

Feedback

Summarize this article for me

You can run commerce flows from the client, but many scenarios are more reliable when your trusted game service calls the _Microsoft Store APIs_ directly. These REST APIs support cross-platform catalog and entitlement workflows.

## Core services and features

**Microsoft Store Collections Service:**

- Verify direct ownership (excluding shared entitlements from the [Product sharing model for games](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-product-sharing-model-for-games?view=gdk-2604) scenarios).
- Query owned products across your publisher catalog.
- Manage consumable fulfillment with retry-safe patterns.
- Detect Xbox Game Pass status (publisher authorization required).

**Microsoft Store Purchase Service:**

- Grant free products directly to a user's account.

**Microsoft Clawback Service:**

- Receive refund and chargeback events to reconcile granted purchases.

**Microsoft Recurrence Service:**

- Query and manage subscription state, renewal, and cancellation.

The following articles explain how to integrate these services into your own back end.

## Prerequisites for service-to-service APIs

### Authentication

Depending on the auth type your service uses, the API request's `Authorization` header requires either:

- Service access token (audience for `https://onestore.microsoft.com`)
- Delegated authorization X-token (Relying Party of `http://licensing.xboxlive.com`)

Note

We recommend using the Microsoft Entra ID auth flow. 
Not all service APIs support X-tokens and future services are planned to only support Microsoft Entra ID auth.

If using a Service access token, the corresponding User Store ID identifying the user must also be included in the request body as outlined in each API's article.

For more information between these auth methods, see [Authenticating your service with the Microsoft Store APIs](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-authenticating-your-service?view=gdk-2604).

### Product configuration

Products must also be configured in Partner Center for service-to-service visibility based on the auth type. If the configurations aren't published, the API calls succeed but return no product results.

For configuration details by auth type, see:

- [Extra configuration required to view and manage products with a User Store ID and Microsoft Entra ID auth](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-authenticating-your-service?view=gdk-2604#extra-configuration-required-to-view-and-manage-products-with-a-user-store-id-and-microsoft-entra-id-auth)
- [Extra configuration required to view and manage products with delegated auth X-tokens](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-authenticating-your-service?view=gdk-2604#extra-configuration-required-to-view-and-manage-products-with-delegated-authentication-x-tokens)

## In this section

[Authenticating your service with the Microsoft Store APIs](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-authenticating-your-service?view=gdk-2604) 
Describes how to get and use either delegated authentication X-tokens or User Store IDs to authenticate with Microsoft Store Services.

[Query user entitlements from your services](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-query-user-entitlements?view=gdk-2604) 
Describes how to query for digital content the user is entitled to from your own services.

[Detecting Xbox Game Pass subscription access from your service](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-detecting-game-pass?view=gdk-2604) 
Describes how to detect a user's Xbox Game Pass subscription status.

[Managing subscription products from your service](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-managing-subscriptions?view=gdk-2604) 
Describes how to use the Recurrence service to query and manage your subscription products and handle the different subscription states of a user.

[Managing consumable products from your service](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-managing-consumables-and-refunds?view=gdk-2604) 
Describes how to build a robust system that manages consumables on your game service including managing user refunds of consumed items.

[Managing refunds and chargebacks from your service](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-managing-refunds-and-chargebacks?view=gdk-2604) 
Describes how to configure and use a Clawback event queue to detect refunds, returns, and chargebacks of your Consumable and Store-managed Subscription product types.

[Requesting a User Store ID for service-to-service authentication](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-requesting-a-userstoreid?view=gdk-2604) 
Describes the required configuration and steps to get a User Store ID for service-to-service authentication with the Microsoft Store service APIs.

[Requesting a User Store ID from your service with X-tokens or OAuth 2.0](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-requesting-a-userstoreid-from-services?view=gdk-2604) 
Describes how to generate a User Store ID on your service using OAuth 2.0 and X-tokens without client-side UserStoreID APIs.

[Renewing a User Store ID key](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-renew-a-user-store-id-key?view=gdk-2604) 
Describes how to renew a User Store ID key.

## See also

[Commerce Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/commerce-nav?view=gdk-2604)

[XStore API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/xstore_members?view=gdk-2604)

---

## Feedback

Was this page helpful?

Yes No No

Need help with this topic?

Want to try using Ask Learn to clarify or guide you through this topic?

Ask Learn Ask Learn

Suggest a fix?

---

## Additional resources

---

- Last updated on 04/22/2026