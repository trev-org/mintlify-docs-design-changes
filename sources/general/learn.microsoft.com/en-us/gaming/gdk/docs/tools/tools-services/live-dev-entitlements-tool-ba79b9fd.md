# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-dev-entitlements-tool?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-dev-entitlements-tool?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Store Development Entitlements Tool (DevEntitlementTool.exe)

Feedback

Summarize this article for me

Command-line tool to query, add, and remove Microsoft Store entitlements to/from Xbox test accounts in sandbox.

## Usage

`deventitlementtool <command> /e <testaccountemail> /s <sandboxid> [/p <productid>] [...]`

Expand table

| Command | Description |
| --- | --- |
| [query](https://learn.microsoft.com/#query) | Look up entitlements owned by an account |
| [add](https://learn.microsoft.com/#add) | Add one or more specified entitlements to account |
| [delete](https://learn.microsoft.com/#delete) | Delete one or more specified entitlements from account |
| [catalog](https://learn.microsoft.com/#catalog) | Show the available products sellable by specified parent product |

All commands require the /e (email) and /s (sandbox) parameters. Initial sign-in with an account invokes an interactive password entry dialog. Once successfully signed in, subsequent operations with the same account/sandbox on the device no longer require password entry.

## query

`deventitlementtool query /e <testaccountemail> /s <sandboxid> [/d]`

List all directly owned entitlements associated with this account in the sandbox.

### query output

```
Entitlements found: {Number of entitlements}
{ProductID}: {Last Updated Date (UTC)} {Status}
...
```

### query example

```
> DevEntitlementTool.exe query /e xdks-testaccount00000@xboxtest.com /s XDKS.1
Entitlements found: 2
9MT5TGW893HV: 4/18/2023 5:05:19 PM  Active
9N30KZZF4BR9: 7/24/2024 2:34:08 AM  Active
```

Use /d to show some more details for each entitlement:

```
> DevEntitlementTool.exe query /e xdks-testaccount00000@xboxtest.com /s XDKS.1 /d
Entitlements found: 2
9MT5TGW893HV: 4/18/2023 5:05:19 PM  Active Consumable   ATG Sample Consumable 3
9N30KZZF4BR9: 7/24/2024 2:34:08 AM  Active Durable      ATG Sample Durable 1
```

## add

`deventitlementtool add /e <testaccountemail> /s <sandboxid> /p <productid1> [<productid2> <productid3> ...] [/q <quantity>] [/d]`

Adds an entitlement for one or more specified products to the account. This command is the equivalent of purchasing the product from Store or through purchase API.

The `add` operation with an already entitled Game, Durable, Bundle, or Developer-Managed consumable, doesn't add another entitlement and the tool reports the existing entitlement.

For Store-managed consumable products, a default quantity of `1` is added to the consumable balance on each add command. An optional quantity value can be specified to change this default value, but the quantity field can only be used if a single productID is passed with /p. This option is useful for consumables that grant a quantity greater than `1` on purchase.

/d for more details is supported.

Note

Quantity isn't verifiable with this tool. To determine the current quantity of an item, examine the [XStoreCollectionData](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/structs/xstorecollectiondata?view=gdk-2604) struct.

The `add` operation with a bundle product grants all of its included products. If a quantity is specified and the bundle includes Store-managed consumables, the same quantity is assigned to each consumable.

Note

Subscription products aren't supported.

### add output

```
Entitlements added: {Number of entitlements}
{ProductID}: {Last Updated Date (UTC)} {Status}
...
```

### add examples

Single entitlement added

```
> DevEntitlementTool.exe add /e xdks-test00000@xboxtest.com /s XDKS.1 /p 9MT5TGW893HV
Entitlements added: 1
9MT5TGW893HV: 2/20/2024 12:21:25 AM Active
```

Multiple entitlements added

```
> DevEntitlementTool.exe add /e xdks-test00000@xboxtest.com /s XDKS.1 /p 9P23V43P0XZZ 9N30KZZF4BR9 9NCX1H100M18
Entitlements added: 4
9P23V43P0XZZ: 2/20/2024 12:33:20 AM Active
9N30KZZF4BR9: 2/20/2024 12:33:20 AM Active
9NCX1H100M18: 2/20/2024 12:33:20 AM Active
```

Add consumable with quantity

```
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

```
Entitlements deleted: {Number of entitlements}
{ProductID}: {Last Updated Date (UTC)} {Status}
...
```

### delete examples

```
> DevEntitlementTool.exe delete /e xdks-test00000@xboxtest.com /s XDKS.1 /p 9P23V43P0XZZ 9N30KZZF4BR9 9NCX1H100M18
Entitlements deleted: 3
9P23V43P0XZZ: 2/20/2024 2:26:13 AM Revoked
9N30KZZF4BR9: 2/20/2024 2:26:13 AM Revoked
9NCX1H100M18: 2/20/2024 2:26:13 AM Revoked
```

```
> DevEntitlementTool.exe delete /e xdks-test00000@xboxtest.com /s XDKS.1 /p 9PLRFWZWWF91
Entitlements deleted: 1
9PLRFWZWWF91: 1/1/0001 12:00:00 AM Refunded
```

## catalog

`deventitlementtool catalog /e <testaccountemail> /s <sandboxid> /p <productid1> [/m]`

Shows the set of products sellable by the provided product ID; that is, child add-on products and products with a _can use and sell_ relationship to the productID in Partner Center. This command is the equivalent returned by [XStoreQueryAssociatedProductsAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xstore/functions/xstorequeryassociatedproductsasync?view=gdk-2604). Products don't return when configured in Partner Center as _available but not discoverable in the Microsoft Store_. Optionally a market can be specified to retrieve the prices for that particular market. The parameter needs to be an ISO two character region code, for example, GB, CA, JP, ES, etc.

### catalog output

```
Parent product: {ProductID} ({Parent Product Name})
can sell {Number of products} products:
1. {ProductID} {Product Name} {Product Type} {Price}
2. {ProductID} {Product Name} {Product Type} {Price}
...
```

### catalog example

```
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

This tool is strictly for use with Xbox test accounts and for sandbox products. Use for retail accounts and scenarios is blocked.

There's a limit of add and delete operations per account per day. This limit is adjusted based on observed usage. To make requests for increased limits or other feedback, reach out through your Microsoft Account Representative.

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