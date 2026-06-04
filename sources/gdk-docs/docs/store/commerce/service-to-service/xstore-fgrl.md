---
author: fschober
title: "Fine Grained Rate Limiting for Microsoft Store APIs"
description: "Describes the expected calling patterns and fine grained rate limiting for Microsoft Store services calls."
kindex:
  - fine grained rate limiting
  - Microsoft Store API throttling
  - Store API request limits
  - service API rate limits
ms.author: cagood
ms.topic: article
edited: '03/18/2026'
ms.date: 03/31/2026
permissioned-type: public
---

# Fine-grained rate limiting for service-to-service Microsoft Store APIs

Xbox services enforce fine-grained rate limiting (FGRL), including Collections for service-to-service calls.
Your service should handle these limits and throttling responses.

## Affected Endpoints

The following endpoints enforce FGRL limits:

- [https://collections.mp.microsoft.com/v9.0/collections/publisherQuery](microsoft-store-apis/xstore-v9-query-for-products.md)

- [https://collections.mp.microsoft.com/v8.0/collections/b2bLicensePreview](microsoft-store-apis/xstore-v8-query-for-products.md)

- [https://collections.mp.microsoft.com/v8.0/collections/consume](microsoft-store-apis/xstore-v8-consume.md)

- [https://purchase.mp.microsoft.com/v8.0/b2b/orders/query](microsoft-store-apis/xstore-v8-clawbackv1.md)

- [https://purchase.mp.microsoft.com/v7.0/purchases/grant](microsoft-store-apis/xstore-v8-grant.md)

- [https://purchase.mp.microsoft.com/v8.0/b2b/recurrences/query](microsoft-store-apis/xstore-v8-recurrence-query.md)

- [https://purchase.mp.microsoft.com/v8.0/b2b/recurrences/{recurrenceId}/change](microsoft-store-apis/xstore-v8-recurrence-change.md)

These endpoints are used by the following GDK APIs:

- [XStoreQueryAssociatedProductsAsync](../../../reference/system/xstore/functions/xstorequeryassociatedproductsasync.md)

- [XStoreQueryProductsAsync](../../../reference/system/xstore/functions/xstorequeryproductsasync.md)

- [XStoreQueryEntitledProductsAsync](../../../reference/system/xstore/functions/xstorequeryentitledproductsasync.md)

## Rate Limits

As with Xbox services, rate limits are a combination of user + title ID for `XStore*` client APIs:

- **{userId;titleId}**: limit of 100 operations / 300 sec.

In addition to the user context, commerce endpoints also include a PublisherID flag, which is used for rate limiting of service-to-service calls:

- **{userId;publisherId}**: limit of 200 operations / 300 sec.

The limits are enforced for sustained traffic only.
No burst rate limits are enforced.

## Rate Limiting Behavior

Commerce APIs return HTTP 429 when throttled.
The response body includes additional information in the following format:

*The rate limit of {X} operations in {Y} seconds has been exceeded for aspect {Z}.*

The response header includes a `Retry-After` value indicating when the next request is allowed.

To reduce throttling, analyze call patterns, lower request volume where possible, and enforce `Retry-After` in your retry logic.

## See also

[Fine-Grained Rate Limiting](../../../services/develop/best-practices/live-fine-grained-rate-limiting.md)
