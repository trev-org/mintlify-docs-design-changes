---
title: "Store Development Entitlements Tool (DevEntitlementTool.exe)"
description: "Command-line tool to query, add, and remove Microsoft Store entitlements to/from Xbox test accounts in sandbox."
kindex:
- Xbox Live Store Development Entitlements Tool (DevEntitlementTool.exe)
- Entitlements tool
- Store Development Entitlements Tool
- DevEntitlementTool.exe
- Xbox services, Store Development Entitlements Tool
- Xbox services, Store Development Entitlements Tool (DevEntitlementTool.exe)
- Xbox services, Entitlements tool
- Xbox services, DevEntitlementTool.exe
ms.topic: article
ms.localizationpriority: medium
author: timch-ms
ms.author: timch
ms.date: 02/21/2024
edited: 10/06/2024
permissioned-type: public
---

# Store Development Entitlements Tool (DevEntitlementTool.exe)

Command-line tool to query, add, and remove Microsoft Store entitlements to/from Xbox test accounts in sandbox.

## Usage

`deventitlementtool <command> /e <testaccountemail> /s <sandboxid> [/p <productid>] [...]`

| Command | Description |
| ------- | ----------- |
| [query](#query) | Look up entitlements owned by an account |
| [add](#add) | Add one or more specified entitlements to account |
| [delete](#delete) | Delete one or more specified entitlements from account |
| [catalog](#catalog) | Show the available products sellable by specified parent product |

All commands require the /e (email) and /s (sandbox) parameters.
Initial sign-in with an account invokes an interactive password entry dialog.
Once successfully signed in, subsequent operations with the same account/sandbox on the device no longer require password entry.

## query

`deventitlementtool query /e <testaccountemail> /s <sandboxid> [/d]`

List all directly owned entitlements associated with this account in the sandbox.

### query output

```text
Entitlements found: {Number of entitlements}
{ProductID}: {Last Updated Date (UTC)} {Status}
...
```

### query example

```text
> DevEntitlementTool.exe query /e xdks-testaccount00000@xboxtest.com /s XDKS.1
Entitlements found: 2
9MT5TGW893HV: 4/18/2023 5:05:19 PM  Active
9N30KZZF4BR9: 7/24/2024 2:34:08 AM  Active
```

Use /d to show some more details for each entitlement:

```text
> DevEntitlementTool.exe query /e xdks-testaccount00000@xboxtest.com /s XDKS.1 /d
Entitlements found: 2
9MT5TGW893HV: 4/18/2023 5:05:19 PM  Active Consumable   ATG Sample Consumable 3
9N30KZZF4BR9: 7/24/2024 2:34:08 AM  Active Durable      ATG Sample Durable 1
```

## add

`deventitlementtool add /e <testaccountemail> /s <sandboxid> /p <productid1> [<productid2> <productid3> ...] [/q <quantity>] [/d]`

Adds an entitlement for one or more specified products to the account.
This command is the equivalent of purchasing the product from Store or through purchase API.

The `add` operation with an already entitled Game, Durable, Bundle, or Developer-Managed consumable, doesn't add another entitlement and the tool reports the existing entitlement.

For Store-managed consumable products, a default quantity of `1` is added to the consumable balance on each add command.
An optional quantity value can be specified to change this default value, but the quantity field can only be used if a single productID is passed with /p.
This option is useful for consumables that grant a quantity greater than `1` on purchase.

/d for more details is supported.

> [!NOTE]
> Quantity isn't verifiable with this tool.
To determine the current quantity of an item, examine the [XStoreCollectionData](../../reference/system/xstore/structs/xstorecollectiondata.md) struct.

The `add` operation with a bundle product grants all of its included products.
If a quantity is specified and the bundle includes Store-managed consumables, the same quantity is assigned to each consumable.

> [!NOTE]
> Subscription products aren't supported.

### add output

```console
Entitlements added: {Number of entitlements}
{ProductID}: {Last Updated Date (UTC)} {Status}
...
```

### add examples

Single entitlement added

```console
> DevEntitlementTool.exe add /e xdks-test00000@xboxtest.com /s XDKS.1 /p 9MT5TGW893HV
Entitlements added: 1
9MT5TGW893HV: 2/20/2024 12:21:25 AM Active
```

Multiple entitlements added

```console
> DevEntitlementTool.exe add /e xdks-test00000@xboxtest.com /s XDKS.1 /p 9P23V43P0XZZ 9N30KZZF4BR9 9NCX1H100M18
Entitlements added: 4
9P23V43P0XZZ: 2/20/2024 12:33:20 AM Active
9N30KZZF4BR9: 2/20/2024 12:33:20 AM Active
9NCX1H100M18: 2/20/2024 12:33:20 AM Active
```

Add consumable with quantity

```console
> DevEntitlementTool.exe add /e xdks-test00000@xboxtest.com /s XDKS.1 /p 9MT5TGW893HV /q 4321
Entitlements added: 1
9MT5TGW893HV: 2/20/2024 12:34:35 AM Active
```

## delete

`deventitlementtool delete /e <testaccountemail> /s <sandboxid> /p <productid1> [<productid2> <productid3> ...] [/all] [/d]`

Deletes one or more specified entitlements from the account.

If `/all` is specified, it attempts to delete all entitlements associated with the account and sandbox.

A Revoked status shows for deleting entitlements granted by this tool.

A Refunded status shows for deleting entitlements that were purchased conventionally through Store client or in-game API.

/d for more details is supported.

### delete output

```console
Entitlements deleted: {Number of entitlements}
{ProductID}: {Last Updated Date (UTC)} {Status}
...
```

### delete examples

```console
> DevEntitlementTool.exe delete /e xdks-test00000@xboxtest.com /s XDKS.1 /p 9P23V43P0XZZ 9N30KZZF4BR9 9NCX1H100M18
Entitlements deleted: 3
9P23V43P0XZZ: 2/20/2024 2:26:13 AM Revoked
9N30KZZF4BR9: 2/20/2024 2:26:13 AM Revoked
9NCX1H100M18: 2/20/2024 2:26:13 AM Revoked
```

```console
> DevEntitlementTool.exe delete /e xdks-test00000@xboxtest.com /s XDKS.1 /p 9PLRFWZWWF91
Entitlements deleted: 1
9PLRFWZWWF91: 1/1/0001 12:00:00 AM Refunded
```

## catalog

`deventitlementtool catalog /e <testaccountemail> /s <sandboxid> /p <productid1> [/m]`

Shows the set of products sellable by the provided product ID; that is, child add-on products and products with a *can use and sell* relationship to the productID in Partner Center.
This command is the equivalent returned by [XStoreQueryAssociatedProductsAsync](../../reference/system/xstore/functions/xstorequeryassociatedproductsasync.md).
Products don't return when configured in Partner Center as *available but not discoverable in the Microsoft Store*.
Optionally a market can be specified to retrieve the prices for that particular market.
The parameter needs to be an ISO two character region code, for example, GB, CA, JP, ES, etc.

### catalog output

```console
Parent product: {ProductID} ({Parent Product Name})
can sell {Number of products} products:
1. {ProductID} {Product Name} {Product Type} {Price}
2. {ProductID} {Product Name} {Product Type} {Price}
...
```

### catalog example

```console
> DevEntitlementTool.exe catalog /e xdks-test00000@xboxtest.com /s XDKS.1 /p 9NTL0QDWZ4FS /m SG
Parent product: 9NTL0QDWZ4FS (ATG In-Game Store)
can sell 16 products:
 1. 9PHPTTDP88F7: ATG Season Pass 1                        Durable      23.25 SGD
 2. 9NMDDZC7ZWRM: ATG Sample Year 1 Pass                   Durable      2850 SGD
 3. 9PGLXLWS7319: ATG Consumable Only Bundle               Durable      7.2 SGD
 4. 9P23V43P0XZZ: ATG Sample Durable 2                     Durable      0 SGD
 5. 9MZ0MGGFPLTP: ATG Sample Subscription 1                Durable      0 SGD
 6. 9MT5TGW893HV: ATG Sample Consumable 3                  Consumable   4.35 SGD
 7. 9N30KZZF4BR9: ATG Sample Durable 1                     Durable      0 SGD
 8. 9PLRFWZWWF91: ATG Sample Durable 4                     Durable      0 SGD
 9. 9PLNMXRKNM4C: ATG Sample Durable 1 (with package)      Durable      0 SGD
10. 9P8S15PJTB0P: ATG Sample Durable 3                     Durable      48.75 SGD
11. 9NCX1H100M18: ATG Sample Consumable 2                  Consumable   2.85 SGD
12. 9N0297GK108W: ATG Dev managed consumable 1             Consumable   2.1 SGD
13. 9NQWJKKNHF1L: ATG Downloadable Content Sample          Game         0 SGD
14. 9NRGW2QG5PCW: ATG Sample Pre-Order 1                   Durable      0 SGD
15. 9PHHWZ12RR23: ATG In-Game Store Deluxe Add-on          Durable      0 SGD
16. 9PFL4RQTB1P6: ATG Sample Consumable 1                  Consumable   1.5 SGD
```

## Remarks

This tool is strictly for use with Xbox test accounts and for sandbox products.
Use for retail accounts and scenarios is blocked.

There's a limit of add and delete operations per account per day.
This limit is adjusted based on observed usage.
To make requests for increased limits or other feedback, reach out through your Microsoft Account Representative.
