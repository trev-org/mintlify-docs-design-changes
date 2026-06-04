---
author: CameronGoodwin
title: "Handling mismatched store account scenarios on PC"
description: "Describes the PC specific scenario and how to handle when users have different accounts signed into the game and store."
kindex:
  - mismatched Store and Xbox accounts on PC
  - Microsoft Store account mismatch
  - User Store ID for mismatched account handling
  - PC purchase account and player account
ms.author: cagood
ms.topic: article
edited: 07/02/2021
ms.date: '08/01/2022'
permissioned-type: public
---

# Handling mismatched store account scenarios on PC

The `XStoreContext` on PC titles in production is linked to the Microsoft Account (MSA) that is currently signed into the Microsoft Store app.
Therefore, all XStore API results are scoped to that specific Microsoft Account.
This account can sign out or switch with another account at any time without notice.
Additionally, the Microsoft Store account can be switched from the Xbox app based on user settings.

Similarly, the Xbox services account can be switched with the sign-in flow in-game to create an account mis-match between the Xbox and Microsoft Store apps.
The mismatched account status can be intentional for family or shared PC scenarios.

Not handling scenarios of switched or mismatched accounts between the account playing the game and account signed into the Microsoft Store can lead to user frustration.
For example, users not receiving in-game items after a purchase was made.

The following article describes how to plan for, handle, and mitigate when there's an account mismatch on the PC.

> [!NOTE]
> The scenarios outlined aren't an issue on the Xbox console.
The `XStoreContext` is always tied to the `XUser` account you created the context from.
Therefore, the XStore APIs and transactions are always tied to the active `XUser` object in your game.

> [!NOTE]
> Testing in a Developer Sandbox requires the Xbox and Windows Store accounts to be in sync. Because the Microsoft Store account is not used when running in sandbox, mismatched account scenarios can only be tested in the production / RETAIL environment. For more information, see [Testing mismatched account scenarios](#testing-mismatched-account-scenarios) for more info.

## General guidance

Games that aren't Xbox services-enabled (that is, use an Xbox services account to represent the playing user) should plan for and understand that the purchasing account (MSA signed into the Microsoft Store) can change at any time.
Therefore, when consumable products are purchased in-game the game should immediately start the commerce flow to query for the purchased consumables and fulfill (consume) the item.
Then the game or a title service updates and tracks the balance of the consumable for that user.
Similar to mobile game commerce scenarios where the primary device account is the one that pays but the game account, whatever that is, gets the in-game credit for the purchase.

For more guidance See [Managing consumable products from your service](../service-to-service/xstore-managing-consumables-and-refunds.md).  

Games that support Xbox services should decide early in design to support or not the mismatched account (MSA) scenarios.
If your service does't support mismatched accounts, you should force the user to sync the accounts to enable in-game purchase and use of content.
Data reported from Windows indicates that 10-15% of Xbox services users have a different MSA signed into the Microsoft Store app than Xbox services in a Windows session.
Therefore, we recommend supporting the mismatched account scenario for this user group.
However, if the game's commerce system is built around an assumption the Xbox services account is also the purchasing account, there are steps to check that the MSA accounts are in sync between Xbox services and the Microsoft Store.
An example of a game that would want to ensure the accounts are synchronized is a game supporting both the Xbox Console and Windows PC versions using the same game services.
Similarly, a game that was originally released on the Xbox and ported to the PC could be designed around the playing account and commerce identity being the same.
The specific implications and issues around handling the mismatched accounts within your Xbox services-enabled game are outlined in the following sections.

### Example scenario

Your Microsoft Account (MSA) is signed into the Windows PC and also the Microsoft Store app.
You purchase an Xbox services-enabled game through the Microsoft Store (or download through PC Game Pass) and install the game.
When launching the game, you select your Xbox services account that is the same credentials (MSA) as the account signed into the Microsoft Store.
When you purchase an in-game consumable, your account is charged and credited the expected consumable quantity in the Microsoft Store services.
The game or game's back-end services query your entitlements, see the consumable, fulfill the consumable, and grants the product or value to your in-game account.

Later your child wants to also play the game and signs into Xbox services in the game with their own Microsoft Account.
The Microsoft Store app still has your Microsoft Account signed in.
The child starts a purchase in-game for the same consumable you purchased previously.
Again, your Microsoft Account is charged and credited in the Microsoft store.
The game or back-end services query for new entitlements based on the `XStoreContext` and sees the consumable in your account's store results.
The game or back-end service fulfills the consumable and grants the product to the active player, who in this instance is now your child's account.

The end result is that your account is charged, but the game gives the in-game product or value to your child's account instead of your account.

## Server-to-Server issues with X-Tokens

Titles that use Xbox services have access to using X-Tokens to make calls on-behalf-of the user playing the game from their back-end services. Particularly, querying products the user owns and [following best practices for implementing a consumable commerce system](../service-to-service/xstore-managing-consumables-and-refunds.md) within your game.
However, Delegated Auth X-Tokens are tied to the Xbox services user account that's playing the game.
Therefore, using X-Tokens for server-to-server calls to the Microsoft Store APIs aren't able to handle the mismatched account scenario outlined previously.
The query results only return what the Xbox services account's MSA purchases when signed into the Microsoft Store.

## Server-to-Server auth with User Store IDs

To handle the mismatched account scenarios, service-to-service calls to the Microsoft Store APIs must use the [User Store ID](../service-to-service/xstore-authenticating-your-service.md#authenticating-with-microsoft-entra-id-and-user-store-ids) for authentication.
A User Store ID is a secure token obtained from the client so that it represents the identity of the account signed into the Microsoft Store at that moment.
The User Store ID is then used in the authentication flow to the Microsoft Store APIs on behalf of the user represented in the User Store ID.

For more information, see [Authenticating with Microsoft Entra ID and User Store IDs](../service-to-service/xstore-authenticating-your-service.md#authenticating-with-microsoft-entra-id-and-user-store-ids)

## Recommendations when requiring synchronized accounts for in-game commerce

Although we recommended that Xbox services-enabled titles support the mismatched account scenarios, it isn't required.
The running title can do a validation check to know if the Xbox services account playing the game matches the same MSA signed into the Microsoft Store, allowing the title to block in-game transactions and purchases when they aren't the same.
Allowing the game services to only act on and consume items through the service-to-service calls that the Xbox services account directly owns.
Games can check if the accounts are mismatched by using the [XUserIsStoreUser](../../../reference/system/xuser/functions/xuserisstoreuser.md) function.

If you choose to require the user to synchronize their accounts signed into Xbox services and the Microsoft Store, your title must provide UI and guidance for the user to understand when their accounts aren't the same and how to resolve the issue.

Recommended UI elements:

- Notify the user early in the game's UI that the account signed into the Microsoft Store is different from the Xbox services account playing the game.
- Explain that add-ons or content purchased for the game won't work unless the account signed into the Microsoft Store is the same as their Xbox services account.
- Message that the in-game store won't allow purchases unless the accounts are the same.
- Provide guidance to go to the Microsoft Store app and sign-in with the same account used for Xbox services.
- Provide guidance to go to the Xbox app and set the preference to sign their Xbox services account into the Microsoft Store for them.

## Testing mismatched account scenarios

As noted previously, the mismatched account scenarios aren't effective and testable in development sandboxes.
Because the identity and results of the store APIs are tied to the account signed into the Xbox app on PC in development sandboxes.
Therefore, you can only test or verify mismatched account scenarios in the production / RETAIL environment.
To test these scenarios, you should set up a private flight group in Partner Center with your test accounts for the RETAIL environment.
You then can publish your title or test title to RETAIL where only the accounts in the flight group can view it.
Allowing you to test scenarios with different accounts signed into the game, Xbox app, and Microsoft Store app.

## See also

[Commerce Overview](../commerce-nav.md)

[Manage products from your services](../service-to-service/service-to-service-nav.md)

[XStore API reference](../../../reference/system/xstore/xstore_members.md)
