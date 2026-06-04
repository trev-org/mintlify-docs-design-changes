---
author: CameronGoodwin
title: "Using License Tokens to validate licensing on your services"
description: "Explains how License Tokens can be used to validate a user's license on a service."
kindex:
    - License Token validation for services
    - XStoreQueryLicenseTokenAsync
    - JWT license token verification
    - service side license validation on PC
ms.author: cagood
ms.topic: article
edited: '09/08/2021'
ms.date: '08/01/2022'
permissioned-type: public
---

# Using License Tokens to validate licensing on your services

License Tokens within the Microsoft Game Development Kit (GDK) runtime provide a means for a game service to validate that the client has a valid license for the running app without having to trust the client.
These tokens are intended for validating licenses for apps that are running on PC and aren't needed for Xbox apps.

A License Token is formatted as a JSON Web Token (JWT) and can be unpacked by using the available JWT handlers.
For a validation test, you can enter a License Token into the JWT decoding tool at [http://jwt.io](http://jwt.io).  

A License Token has the sections that are shown in the following table.

| Section | Description |
| ------- | - |
| Header | Provides the x5t that's used to determine the correct certificate to use for validating the token. |
| Payload | Contains a base64-encoded string in the `LicenseTokenClaim` value that gives additional information about the license from the client. Also provides the expiration date of `LicenseToken`. |
| Signature | Standard JWT signature for validating the integrity and source of the token. Use the public cert of the signing certificate downloaded from Microsoft for validation. |

## Obtaining a License Token from the client

To obtain a License Token, the client must call the [XStoreQueryLicenseTokenAsync](../../../reference/system/xstore/functions/xstorequerylicensetokenasync.md) API with the Store ID of the product and a custom developer string.
This API retrieves a License Token for the productID based on the entitlements of the user account currently signed in to the Microsoft Store app.
If you're working in a development sandbox, your [test account](../../../services/develop/test-accounts/live-setup-testaccounts.md) must be signed in to both the Xbox Windows app and the Microsoft Store app. When the token is retrieved, it should then be sent to your own service to be validated.
License Tokens shouldn't be validated on the client because that would negate the trust of the results that are coming from the client to your service.

For an example of how to obtain a License Token, see the [In-Game Store sample](https://aka.ms/gdkdl).

## Validating a License Token on your service

For a full code example of how to handle License Tokens, see the [Game Service sample](https://aka.ms/gdkdl).

You need to obtain the RSA public key from the certificate that was used to sign the token.
To determine the full URL to download the certificate, you need to determine `certificateId` in one of the following ways.

* Extract the `certificateId` value within the base64-encoded payload.
* Base64-decode the x5t value from the header into a byte array, and convert it to a string.
Example code provided in the Game Service sample.
* After you have `certificateId`, take that value in the decoded string and then append it to `https://licensing.mp.microsoft.com/v8.0/licenseToken/fullCertificate/{certificateId}` to get the direct download link of the certificate.

The result is an XML document with the raw certificate data that can then be used to create a certificate object such as X509Certificate2 (see the Game Service sample for source code).
You should cache this certificate, eliminating the need to download it each time that a License Token is validated.

With the RSA public key of the certificate, you can then use standard JWT signature validation to ensure that the License Token is from a reliable source and the contents of the token are unmodified.

## Using the information within the License Token

The payload of the License Token contains a `LicenseTokenClaim` value that's a base64-encoded string of extra JSON data.
The first part of the string can be ignored after decoding, so look for the first "{" to denote the beginning of the JSON data.

```json
[Unicode character string that can be ignored]
{
    "certificateId": "C4FC9E583CC4D5FEB96712619B5BE7499FECB5FA",
    "customDeveloperString": "anti-replay string",
    "licensableProducts": [
        {
            "endDate": "9999-12-31T23:59:59.9999999+00:00",
            "isShared": false,
            "id": "fc80277459b04bc7a158b49c0c5574e1",
            "productId": "9NN4ZHKML55R",
            "skuId": "0010",
            "userId": "m8jGdShdpG8vu9nIQiAn3lBIQJ+TD0r2jAJvfmGYmGI="
        }
    ],
    "payload": "T3Jqb3H+YHkjgBksJcsBaL6noHabm5JfyCYaV9nnV+XTiAzNfHKCdUqK2KZkZNk7aYfsVJ0CL2mFQg8XdYtxOv+YmHi+6qhXv6Wp5mx3e4+ZFavbobwjPbVgVsKpDV3TxKdUCIhVPPtDOziqWsUB3+z4plopXM+SargAqqBchQOQklRf5z4NXkAqWer31MmZWwXeEcsfH7Ac/usMlrQakT1IepxnR7+bZIKzp7B9QcWN2lJzyP4TYg8gVnYBGT9cRWxy/IgY0gL5FYNLnDJM1A3D2JcmsCsKuCVpzzn2eXdSAGha00oqBdCcQMr34da54x1s47lvZTdP+Z4Z/BjSQw==",
    "tokenVersion": 1
}
```

If the client has a valid license for the product, its information is included in the `licensableProducts` list with the following parameters for each product.

| Parameter | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| `endDate` | `datetime` | UTC datetime when the license of the item would end. Set to a max date of 9999-12-31 in most cases | Yes |
| `isShared` | `bool` | Returns false, doesn't actually indicate if the current account is the direct owner or the license is being shared based on the [Product sharing model for games](../fundamentals/xstore-product-sharing-model-for-games.md) | Yes |
| `id` | `string` | Unique identifier for the entitlement that the license represents and can be mapped to a specific account. Matches the `id` value of a call to the Collections services for the user who owns the license. | Yes |
| `productId` | `string` | | Yes |
| `skuId` | `string` | | Yes |
| `userId` | `string` | ID for the user associated to the license. | Yes |

The `payload` string is reserved for future use

### userId and ID values and uses

`id` value:

* Tied to the specific license instance retrieved from the store
* Can be used to identify and track the license being used, including across logins
* Can be used to implement license-specific bans
* Reappearing ID values across sessions or users can indicate license sharing or reuse

`userId` value:

* Represents the user whose account owns the license
* Format not easily mapped to other Xbox related IDs (XUID, pXUID), but a matching `id` value of the license token in a call to [Collections](../service-to-service/xstore-query-user-entitlements.md) for the same ProductId would indicate the license token and userId are tied to the account you're calling Collections on-behalf-of

## Preventing replay attacks with the customDeveloperString parameter

Because a client could intercept the transmission of a valid token to your service and then replay that valid token, it's important to properly use the `customDeveloperString` parameter of the `XStoreQueryLicenseToken` API.
This string should be generated on your server and be unique for each license check that you want to do.
After the string is generated, it should be sent down to the client who then passes the string to the `XStoreQueryLicenseToken` API.
The value is then embedded into the License Token's payload and protected from modification by the validation signature on the token.

After the client sends the token up to your service, you can check that the `customDeveloperString` value exactly matches the value that the server generated and sent to the client.
If this value doesn't match, it might indicate a replay of an old token in an attempt to deceive the service because all other aspects of the token are still valid.
We recommend that `customDeveloperString` is set to a random string or GUID for each license check performed.  

## See also

[Commerce](../commerce-nav.md)

[XStore](../../../reference/system/xstore/xstore_members.md)

[XStoreQueryLicenseTokenAsync](../../../reference/system/xstore/functions/xstorequerylicensetokenasync.md)

[XStoreQueryLicenseTokenResult](../../../reference/system/xstore/functions/xstorequerylicensetokenresult.md)
