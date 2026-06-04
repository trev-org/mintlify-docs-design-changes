# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-basic-store-operations?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-basic-store-operations?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Basic store operations

Feedback

Summarize this article for me

An in-game store typically involves three basic operations:

1. [Determining what users can purchase](https://learn.microsoft.com/#1-determining-what-users-can-purchase)
2. [Evaluating what products the user owns or is entitled to](https://learn.microsoft.com/#2-evaluating-what-products-the-user-owns-or-is-entitled-to)
3. [Purchasing eligible products](https://learn.microsoft.com/#3-purchasing-eligible-products)

This article illustrates sample code for each operation, derived from the InGameStore sample, which is continuously updated to reflect best practices.

## Preparing to call XStore APIs

All `XStore` APIs operate over an `XStoreContextHandle` created by using [XStoreCreateContext](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorecreatecontext?view=gdk-2604).

This context enables you to perform store operations in the context of the specified user on console and the default user available on a PC. On console, a Suspend or Quick Resume event invalidates the context. To safely handle these conditions, close the `XStoreContextHandle` and recreate it whenever the game resumes from a suspended state.

## 1\. Determining what users can purchase

What a game usually offers for purchase is their add-ons. The following code demonstrates the basic [XStoreQueryAssociatedProductsAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryassociatedproductsasync?view=gdk-2604) API call needed for the game to know what products are available.

This query automatically returns only **purchasable** add-ons associated with the game. Unrelated products associated with the same publisher (that is, configured with the same Partner Center account) can also be made to return in this call so long as the game is set with a "can sell" relationship to this product in the **Product relationship setup** section in Partner Center.

To learn more about configuring product relationships, see [Configure product relationships for a game](https://learn.microsoft.com/en-us/gaming/game-publishing/tutorial-xbox-managed/how-to-create-product-relationships).

```
bool CALLBACK ProductEnumerationCallback(const XStoreProduct* product, void* context)
{
    // Handle adding the product to the game

    printf("%s %s %u\n", product->title, product->storeId, product->productKind);

    return true;
}

void QueryCatalog()
{
    auto async = new XAsyncBlock{};
    async->queue = m_asyncQueue;
    async->callback = [](XAsyncBlock* async)
    {
        XStoreProductQueryHandle queryHandle = nullptr;

        HRESULT hr = XStoreQueryAssociatedProductsResult(async, &queryHandle);
        if (SUCCEEDED(hr))
        {
            hr = XStoreEnumerateProductsQuery(queryHandle, async->context, ProductEnumerationCallback);

            if (SUCCEEDED(hr))
            {
                // TODO: Check for more pages to process
                printf("Enumeration complete\n");
            }

            XStoreCloseProductsQueryHandle(queryHandle);
            delete async;
        }
    };

    XStoreProductKind typeFilter =
        XStoreProductKind::Consumable |
        XStoreProductKind::Durable |
        XStoreProductKind::Game;

    HRESULT hr = XStoreQueryAssociatedProductsAsync(
        m_xStoreContext,
        typeFilter,
        UINT8_MAX,  // placeholder maximum, see Paging
        async)

    if (FAILED(hr))
    {
        delete async;
    }
}
```

### Things to note

- Only purchasable products are returned with `XStoreQueryAssociatedProductsAsync`; products that are only granted in bundles or otherwise not set to be independently purchasable don't return. For the latter, use `XStoreQueryProductsAsync`.
- There's no upfront knowledge of the number of products that return, therefore the count must be accumulated.

### Paging

Handling paging isn't optional when querying associated products or entitlements. The number of pages returned by the service, and the number of items returned per page, can vary between environments and service load. For an example of how to handle paging, see [XStoreQueryAssociatedProductsAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryassociatedproductsasync?view=gdk-2604).

### Other options

[XStoreQueryProductsAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryproductsasync?view=gdk-2604) can be used to query specific products, if the `storeId` is known or if other `actionFilters` are desired. "Actions" are usage scenarios that apply to a product, which include verbs like `Purchase`, `License`, `Gift`, and `Redeem`.

[XStoreQueryAssociatedProductsForStoreIdAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryassociatedproductsforstoreidasync?view=gdk-2604) can be used to query associated products for other games, which can be useful to cross-sell a different title's add-ons.

[XStoreQueryProductForCurrentGameAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryproductforcurrentgameasync?view=gdk-2604) is to query just the product for the currently running game.

[XStoreShowAssociatedProductsUIAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstoreshowassociatedproductsuiasync?view=gdk-2604) transitions the user to the Microsoft Store app to a view of associated products, filtered by product kind. This API is an alternative to having to enumerate available products to present in an in-game interface.

![Add-ons for this game](https://learn.microsoft.com/../../../../media/public-images/xstore/addonsforthisgame.png?view=gdk-2604)

## 2\. Evaluating what products the user owns or is entitled to

This step involves much of the same code shown earlier, but with these replacements:

- [XStoreQueryAssociatedProductsAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryassociatedproductsasync?view=gdk-2604) → [XStoreQueryEntitledProductsAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryentitledproductsasync?view=gdk-2604)
- [XStoreQueryAssociatedProductsResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryassociatedproductsresult?view=gdk-2604) → [XStoreQueryEntitledProductsResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryentitledproductsresult?view=gdk-2604)

The `QueryEntitledProducts` APIs return the products entitled to the user. Entitled means the user either directly owns the product, satisfies the entitlement through other products (such as bundles and subscriptions), or gains entitlement through a shared entitlement from another user.

Additionally, the results of [XStoreQueryAssociatedProductsAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryassociatedproductsasync?view=gdk-2604) (and related functions) determine entitlement. The [XStoreProduct](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/structs/xstoreproduct?view=gdk-2604) struct contains an `isInUserCollection` field that's set to true when the user is entitled.

### Consumable ownership

The consumable quantity is noted in `XStoreProduct.skus[i].collectionData.quantity`. Typically, there's only one SKU for a consumable product.

You can also use [XStoreQueryConsumableBalanceRemainingAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryconsumablebalanceremainingasync?view=gdk-2604) to inquire about quantity, but avoid using it for a large number of consumables individually as each call incurs a service call.

To maintain the integrity of consumable-based ecosystems, use service-side validation and redemption of consumables. For more information, see [Consumable-based ecosystems](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-consumable-based-ecosystems?view=gdk-2604).

### Durable ownership

It's not enough to check if the account owns the product to determine that they should be entitled to use the product in-game. Durable products must adhere to the content sharing policy that is described in [Product sharing model for games](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-product-sharing-model-for-games?view=gdk-2604).

Use [XStoreAcquireLicenseForPackageAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstoreacquirelicenseforpackageasync?view=gdk-2604) for a **durable with a package** to determine if it's licensable according to the rules of content sharing.

Use [XStoreAcquireLicenseForDurablesAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstoreacquirelicensefordurablesasync?view=gdk-2604) for a **durable without a package** to do the same.

Use [XStoreQueryAddOnLicensesAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryaddonlicensesasync?view=gdk-2604) for a **digitally** licensed game to return the list of licensable durable without package products.

For more information, see [Manage and license downloadable content](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-manage-and-license-optional-packages?view=gdk-2604) and [How to use a durable without a package](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/fundamentals/xstore-dwobs?view=gdk-2604).

## 3\. Purchasing eligible products

To show the purchase flow for a purchasable product, pass the `storeId` into the [XStoreShowPurchaseUIAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstoreshowpurchaseuiasync?view=gdk-2604) API:

```
void MakePurchase(const char* storeId)
{
    auto async = new XAsyncBlock{};
    async->context = &storeId;
    async->queue = m_asyncQueue;
    async->callback = [](XAsyncBlock *async)
    {
        const char* = reinterpret_cast<const char*>(async->context);

        HRESULT hr = XStoreShowPurchaseUIResult(async);
        if (SUCCEEDED(hr))
        {
            printf("Purchase succeeded (%s)\n", storeId);

            // Refresh ownership and update game
        }
        else
        {
            printf("Purchase failed (%s) 0x%x\n", storeId, hr);

            if (hr == E_GAMESTORE_ALREADY_PURCHASED)
            {
                printf("Already own this\n");
            }
        }

        delete async;
    };

    HRESULT hr = XStoreShowPurchaseUIAsync(
        m_xStoreContext,
        storeId,
        nullptr,    // Can be used to override the title bar text
        nullptr,    // Can be used to provide extra details to purchase
        async);

    if (FAILED(hr))
    {
        delete async;
        printf("Error calling XStoreShowPurchaseUIAsync : 0x%x\n", hr);
        return;
    }
}

```

Players can also make purchases outside of the game by explicitly switching to the Microsoft Store, on Xbox.com, PC, mobile apps, or other outlets. Therefore, provide a place in your game that reliably refreshes product ownership on demand. The initial sign-in flow is a perfect spot, but also add the refresh as part of the transition to the in-game store or somewhere in the settings.

## See also

[Commerce Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/commerce-nav?view=gdk-2604)

[Enabling XStore development and testing](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/commerce/getting-started/xstore-product-testing-setup?view=gdk-2604)

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