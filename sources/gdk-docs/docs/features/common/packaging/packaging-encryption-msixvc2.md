---
author: dmcmahon
title: "MSIXVC2 encryption model"
description: "Describes how encryption works in MSIXVC2 packages, including per-version encryption and differences from the MSIXVC encryption model."
kindex:
- MSIXVC2 encryption
- Per-version encryption
ms.author: dmcmahon
ms.topic: article
edited: 02/19/2026
ms.date: '02/19/2026'
permissioned-type: public
---

# MSIXVC2 encryption model

MSIXVC2 introduces a new encryption model designed for per-version content protection and fully parallel processing. This article describes how encryption works in MSIXVC2 and how it differs from the original MSIXVC model.

## Overview

MSIXVC2 encrypts content at the segment level. Each segment is independently encrypted, which enables efficient parallel processing during upload and delivery. Encryption keys are unique to each package version.

Content is encrypted in the following contexts:

- **On the CDN.** Content stored on the content distribution network is encrypted.
- **In transit.** Content delivered to the player's device is encrypted during download.

Content is **not** encrypted in the following contexts:

- **On the player's device after installation.** Installed files are stored as plain files on NTFS. There's no runtime decryption cost.

> [!NOTE]
> Executable (.exe) files remain encrypted as flat files and can only be launched, not read. This is consistent with the [Flat File Install](packaging-flatfileinstall.md) behavior for MSIXVC.

This model is consistent with the [Flat File Install](packaging-flatfileinstall.md) behavior introduced for MSIXVC in the March 2022 GDK, where installed files are accessible as unencrypted flat files. MSIXVC2 delivers this behavior natively without requiring the Flat File Install extraction step.

## Per-version encryption

Each version of a package is encrypted with its own set of keys. This means:

- **Pre-downloaded content remains secure.** If a player pre-downloads an update before its release date, the content can't be decrypted until the player has a license for that specific version.
- **Different versions use different keys.** Access to one version's encryption keys doesn't grant access to another version's content.
- **Sandbox and flight isolation.** Packages used across sandboxes, flights, or playtests can have distinct encryption, providing content isolation without requiring full reingestion.

> [!NOTE]
> Per-version licensing (the ability to license individual versions independently) isn't included in the MSIXVC2 preview and is targeted for general availability in GDK 2610.

## Per-segment encryption

Unlike MSIXVC, where encryption is applied across large contiguous regions of the package, MSIXVC2 encrypts each segment independently. This approach offers several practical benefits:

- **Efficient delivery.** Only the segments that have changed need to be re-encrypted and delivered. Unchanged segments retain their existing encrypted form on the CDN.
- **No cascading re-encryption.** Modifying one segment doesn't require re-encrypting adjacent segments.
- **No `/maxencryptionfragments` consideration.** The `/maxencryptionfragments` option is no longer a consideration in MSIXVC2. The per-segment encryption model eliminates the need for this option.

## Comparison with MSIXVC encryption

| Aspect | MSIXVC | MSIXVC2 |
|--------|--------|---------|
| Encryption scope | Large contiguous regions | Per-segment |
| Key scope | Shared across versions | Per-version keys |
| On-disk encryption (PC) | Unencrypted after Flat File Install | Unencrypted natively |
| On-disk encryption (console) | Encrypted | N/A (MSIXVC2 is PC-only) |
| CDN encryption | Yes | Yes |
| In-transit encryption | Yes | Yes |
| Runtime decryption cost | None on PC (Flat File Install) | None |

## Impact on IO performance

Because MSIXVC2 files are stored unencrypted on the player's device, there's no runtime decryption overhead. DirectStorage and standard Win32 file reads operate at full speed against plain NTFS files. Your game engine sees no difference between reading files from an MSIXVC2 installation and reading files from an unpackaged build directory.

## Development key

When you create an MSIXVC2 package using `makepkg2 pack`, the package is encrypted by default with a well-known development key recognized by all development kits. This key is suitable for local testing but shouldn't be considered cryptographically protected.

MSIXVC2 packages uploaded to Partner Center don't use client-side upload encryption. The Xbox service handles all encryption for distribution. The `/l` and `/lk` encryption modes are only applicable to XVC and MSIXVC (v1) packages.

## See also

[MSIXVC2 packaging overview](overviews/packaging-msixvc2-overview.md)  
[Content updates with MSIXVC2](packaging-updates-msixvc2.md)  
[Overview of packaging](overviews/packaging.md)  
[Flat File Install overview](packaging-flatfileinstall.md)  
[Make package (makepkg2.exe)](deployment/makepkg2.md)
