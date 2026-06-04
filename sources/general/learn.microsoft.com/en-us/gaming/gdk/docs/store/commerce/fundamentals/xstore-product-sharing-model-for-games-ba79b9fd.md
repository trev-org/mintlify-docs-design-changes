# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-product-sharing-model-for-games?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-product-sharing-model-for-games?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Product sharing model for games

Feedback

Summarize this article for me

Users of Windows and the Xbox family of devices enjoy the ability to share their digital purchases with others in their household. However, sharing these digital items differs between the platforms for Xbox and Windows. This behavior causes some confusion with game developers about when and where a user has access to digital content after a purchase.

This article outlines how sharing differs between the two platforms. Use this information to plan for working with the Xbox sharing policies when you design your monetization model and content.

The terms in the following table are important in this article.

Expand table

| Term | Definition |
| --- | --- |
| Entitlement | A user's rights to a product. Obtained by direct purchase or by sharing on a device. |
| Satisfying entitlement | An entitlement granted by a product that's being included in a bundle, subscription, or season pass. The user doesn't own the product directly but rather through ownership of the parent product. The parent product includes the satisfying entitlement. |
| License | A digital key that's used to indicate an entitlement to content, such as games, apps, and durables. Licenses are granted if a user has the required entitlement. Entitlements are indicated through online or offline licenses. |
| Home console | An Xbox console designated to share the offline licenses of the purchasing account (also known as _Home Xbox_). |
| Offline PC | A Windows device designated to allow limited offline play and isn't subject to concurrency restrictions. |
| Durable | A piece of content that is intended as an add-on but limited to a single purchase. A durable can include a content package, but isn't required. Examples: Map pack and game expansion. |
| Consumable | A product that the user can purchase and exchange for a limited-use item, currency, or an effect within the game. Consumables have a quantity that reflects the number of that specific product available to the user. The same user can purchase consumables multiple times to increase their quantity of the consumable product. The user's quantity of the consumable is retrieved through the [XStore](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/xstore_members?view=gdk-2604) and [Microsoft Store service](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/service-to-service/xstore-managing-consumables-and-refunds?view=gdk-2604) APIs. When the user uses a quantity of the consumable product in-game, the title reports this quantity to the Microsoft Store. The amount consumed is then deducted from the user's inventory. Examples: In-game currency, limited-time stats boost, and special weapon ammunition. |

## Users and accounts

A user is a specific, physical person who interacts with a device. On Xbox, a user is associated with an Xbox account, which is the same account used for Xbox sign-in and Microsoft Store purchases. Multiple users can sign in to an Xbox console, and each can have a separate Xbox account (unless playing as a guest).

On Windows, a user can sign in with different Microsoft accounts across multiple touch points.

- A Windows sign-in session
- The Xbox app (including Xbox services enabled games)
- Microsoft Store
- Web browsers

Therefore, multiple users on a Windows device can represent separate sign-ins. The Xbox app and Microsoft Store currently enforce a limit of a single user focus within their individual scopes. However, they don't require or enforce that it's the _same_ user between them concurrently. Although not required, a game can implement a check to help ensure that the user account signed in to Xbox services and that the account signed in to Microsoft Store are the same. This scenario most closely simulates the sign-in requirements and behavior on an Xbox device. For more information, see [Handling mismatched store account scenarios on PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/pc-specific-considerations/xstore-handling-mismatched-store-accounts?view=gdk-2604).

On Windows devices, license and sharing behavior are tied to the Microsoft account currently signed in to Microsoft Store. Which can be different than the account signed in to Xbox services within a game. In this article, we use the term _account_ instead of _user_ to avoid potential confusion.

## Sharing model and policy for the Xbox device family

Customers expect the following sharing policies and behaviors established for the Xbox One and Xbox Series family of consoles. These policies apply to all games and game add-ons excluding consumables.

### Xbox Home console sharing

Home console (**Settings** > **Personalization** > **My home Xbox**), the purchaser of digital content on Xbox can share access with anyone else who signs in to the console. While other accounts use the content, the purchasing account doesn't need to be signed in. This sharing applies to games, durable add-ons, and content enabled as part of a subscription (Ex: Xbox Game Pass).

Specifically, for durable add-ons (that is, downloadable content (DLC)) obtained through Microsoft Store, a game must not determine access to the content based on the direct entitlement of the signed-in account. Instead, the game must rely on the [XstoreAcquireLicense APIs](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/xstore_members?view=gdk-2604) to enforce access to a durable as the licensing APIs report proper sharing access.

Ownership of consumable add-ons is entirely per account and isn't shared.

### Xbox digital content on any console

When signed in and connected to the internet on a console that isn't the user's Home Console, a roaming license is obtained. All users currently signed into that console have full access to the purchaser's library of digital games and durable content. When the purchaser's account signs out, all roaming licenses for their content become invalid and unusable by other accounts on the device.

If the purchaser isn't signed in and someone who isn't an owner attempts to launch the title, the system shows the following message.

> **Do you own this game or app?** If you have a game disc, insert it now. If you purchased this online, make sure you are signed in to Xbox services. If you do not have the rights to play it, you can purchase it at the Microsoft Store (0x803f8001).

A link to the Microsoft Store page of the title is provided to the user to purchase their own entitlement.

If a user is playing a title they don't own and the owner account signs out, the license is lost. The system terminates the game and displays the "Do you own this game or app?" message.

### Xbox Live Gold sharing

The multiplayer and social benefits of Xbox Live Gold are shared with any other Xbox accounts that are signed in to the Home console without requiring the Xbox Live Gold subscriber to be signed in. On other consoles, these benefits are shared with any Xbox accounts, if the subscriber is signed in and connected to Xbox services.

## Consumables sharing policy

Consumables aren't shared between users and are tied to only the purchasing account. Some monetization models and incentives for premium bundles can be implemented by using consumables because those items are intended to be granted to only the purchaser and not shared with others. Examples include double XP weekends; exclusive cosmetic items; or one-time, in-game resource allotments. Some free-to-play game models also focus on per-user monetization for upgrades and items because there's no up-front cost to play the game for any user.

The recommendation for implementing a single-purchase per-user product is offering in-game products purchased with virtual currency (consumables). See [Consumable-based ecosystems](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-consumable-based-ecosystems?view=gdk-2604).

## Windows sharing policy

Games on Windows, regardless of whether they're configured for Xbox Play Anywhere, are governed with specific licensing behavior for Windows apps. These terms affect both the installation and the ability to license—that is, concurrent execution—of the content. There are two main behavior profiles for paid content: _Windows default_ and _restrictive licensing_.

Following are the different licensing behaviors for sharing on Windows.

_Default:_

All accounts on up to 10 devices can launch the title concurrently.

_Restrictive licensing:_

- Offline PC: All accounts on this device can launch the title.
 
- All other PCs: The purchasing account must be signed in to the Microsoft Store app to launch the title, and only one instance of the title can be active at one time on any other PC.
 

### Windows default

#### Default installations

By default, paid apps can be installed on up to ten Windows devices. Installation requires the purchasing account to be signed in to Microsoft Store. This limitation is on the account, not the title. When the purchaser signs in to a new device and downloads content onto it, the device is added to the account's download device pool. If the account attempts to download the content to another device after ten active installs, a message informs them to remove a device from the pool before proceeding.

The notification in the title's product details page indicating the title follows this behavior can be seen here:

> **Installation** Get this app while signed in to your Microsoft account and install it on up to ten Windows devices.

The Xbox console is included in the device pool. This pool can be viewed and managed on accounts.microsoft.com as shown in the following screenshot.

![Screenshot of the Manage your download devices for apps and games page](https://learn.microsoft.com/../../../../media/public-images/xstore/product-sharing-model-for-games-img1.png?view=gdk-2604)

#### Default license concurrency

After the title is installed on the device, it can be launched without restriction. The default license model allows the title to run on up to 10 devices at a time. It doesn't matter whether the purchasing user is signed in to Microsoft Store, the Xbox app, or anywhere in Windows. Therefore it's possible for 10 unique Xbox users to play under the single purchaser's license. But single-point of presence (SPOP) is enforced so that each Xbox account can only be running one game instance at a time. A single Xbox account can't be signed into the game concurrently across two devices.

### Restrictive licensing

#### Restrictive licensing installations

In contrast to the Windows default, publishers can request the title be configured with the _restrictive licensing_ policy. This policy adds concurrency checks to limit how many devices can run the app at the same time. We recommend this policy for all non-free games. When restrictive licensing is enabled, the following message appears on the product detail page.

> **Installation** Install on your home Xbox console and a Windows PC and have access when you're connected to your Microsoft account.

The Xbox installation and sharing behavior remain unchanged as previously described in this article. On Windows, restrictive licensing means the 10-device limit is lifted. The title can be installed on an unlimited number of devices.

#### Restrictive licensing concurrency

Restrictive licensing imposes restrictions on the behavior of the title. Specifically, it limits the ability for multiple installations of the app to run concurrently based on a single entitlement. With titles using this model, only two Windows PC instances of the title can run at any one time. The two instances would be the offline PC's license and the roaming license of the purchaser.

The Microsoft Store app provides an option to designate a specific Windows device to be the account's offline PC. The following screenshot shows offline permissions to manage devices.

![Screenshot of offline permissions to manage your devices. "Make this PC the one I use to run some games or apps that have limited licenses, even when I'm offline."](https://learn.microsoft.com/../../../../media/public-images/xstore/product-sharing-model-for-games-img2.png?view=gdk-2604)

When this option is enabled for a device, the title can be launched when there's no active Internet connection to check the app's license status. However, the license must be acquired and downloaded previously while the PC is online. This license must be renewed periodically, which requires an Internet connection; the license isn't intended to enable permanent offline play. Users can change their offline PC device up to _three times_ in a 365-day period.

All other devices not designated with offline permissions must acquire a roaming license when the title is launched. To get the roaming license, the purchasing account to be signed in to the Microsoft Store app. Acquiring a new roaming license revokes any active roaming license in use on any of the other devices that have the title installed. When the license is revoked on a running instance of the app, the user is presented with a system dialog box when the app terminates as shown in the following screenshot.

![Screenshot of "This game has ended here because you started it up on another device."](https://learn.microsoft.com/../../../../media/public-images/xstore/product-sharing-model-for-games-img3.png?view=gdk-2604)

Note

The offline PC isn't subject to this concurrency enforcement.

### DLC and add-ons sharing

Durable add-on type products' sharing behavior is governed with the same policy as the parent app. A Durable either with or without a package can be licensed, if the parent app is appropriately licensed. The title must perform [XStore API](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/xstore_members?view=gdk-2604) license acquisition and verification, especially to access the contents of a durable with a package.

### Single-user products

We recommend that games use game Microsoft Store-managed consumables for single-user products.

## Summary

You should now have a better understanding of how sharing works for game products on Xbox and Windows. This information can help you to decide which product types and licensing models— for example, restricted licensing— that you want to employ with your game on Xbox or on Windows. If you have questions or feel that the sharing model outlined here doesn't fit your game's monetization design, contact your Microsoft Account Representative.

## References

[Windows: Usage rules for Digital Goods ("Rules")](https://support.microsoft.com/help/10563/windows-10-usage-rules-digital-goods)

[Designate an Xbox One console as your home Xbox](https://support.xbox.com/games/game-setup/my-home-xbox)

[Playing your games on other Xbox One consoles](https://support.xbox.com/games/game-setup/playing-across-multiple-consoles)

[Sharing your Xbox Live Gold subscription](https://support.xbox.com/xbox-one/xbox-live/xbox-live-gold-sharing-features)

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