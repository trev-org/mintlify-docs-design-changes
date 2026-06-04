---
title: "How to use a durable without a package"
description: "How to use a durable without a package product properly."
kindex:
- How to use a durable without a package
- Durables without a package
- DWOB
author: joannaleecy
ms.author: timch
ms.topic: article
edited: '09/25/2024'
ms.date: '08/01/2022'
permissioned-type: public
---


# How to use a durable without a package

Durables can be configured with or without a package that is downloaded to the client.
A durable without a package is easier to configure and use.
These durable types are typically used to gate access to content that is already part of the base game.
Many games opt to include the content for add-ons in the base game package because they use the assets for multiplayer or preview purposes even when unlicensed.

> [!NOTE]
> A Durable without a package isn't supported on discs.

Even without a downloadable package, the product type still provides a license according to the [Product sharing model for games](xstore-product-sharing-model-for-games.md).

It isn't enough to check for ownership using [XStoreQueryEntitledProductsAsync](../../../reference/system/xstore/functions/xstorequeryentitledproductsasync.md).
Instead, properly check for access to a durable using [XStoreAcquireLicenseForDurablesAsync](../../../reference/system/xstore/functions/xstoreacquirelicensefordurablesasync.md):

```cpp
void AcquireLicenseForDurable(const char* storeId)
{
    auto async = new XAsyncBlock{};
    async->queue = m_asyncQueue;
    async->callback = [](XAsyncBlock* async)
    {
        XStoreLicenseHandle result = {};

        HRESULT hr = XStoreAcquireLicenseForDurablesResult(
            async,
            &result);

        if (SUCCEEDED(hr))
        {
            bool isValid = XStoreIsLicenseValid(result);
            printf("Is valid license: %s\n", isValid? "yes" : "no");
        }
        else
        {
            printf("Error calling XStoreAcquireLicenseForDurablesResult: 0x%x\n", hr);
        }

        delete async;
    };

    HRESULT hr = XStoreAcquireLicenseForDurablesAsync(
        m_xStoreContext,
        storeId,
        async);

    if (FAILED(hr))
    {
        delete async;
        return;
    }
}
```

## See also

[Commerce Overview](../commerce-nav.md)

[Manage and license downloadable content (DLC)](xstore-manage-and-license-optional-packages.md)

[XStore API reference](../../../reference/system/xstore/xstore_members.md)
