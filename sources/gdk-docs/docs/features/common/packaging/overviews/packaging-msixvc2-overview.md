---
author: dmcmahon
title: "MSIXVC2 packaging overview"
description: "Provides an overview of the MSIXVC2 packaging format for PC games, including key differences from MSIXVC, benefits, and how to get started."
kindex:
- MSIXVC2
- MSIXVC2 overview
- Packaging MSIXVC2
ms.author: dmcmahon
ms.topic: article
edited: 02/19/2026
ms.date: '02/19/2026'
permissioned-type: public
---

# MSIXVC2 packaging overview

MSIXVC2 is the new packaging format for PC games built with the Microsoft Game Development Kit (GDK). It delivers significantly smaller base game packages and content updates, faster packaging, and a simplified upload workflow compared to the original MSIXVC format. MSIXVC2 is available as a preview starting with the April 2026 GDK and targets general availability in the October 2026 GDK.

> [!IMPORTANT]
> MSIXVC2 is **PC-only**. Xbox console games continue to use the existing XVC packaging format. The `makepkg2` tool handles both formats&mdash;one tool for both  platforms.

## Why MSIXVC2

The original MSIXVC packaging format was designed for a world of infrequent updates and disc-based distribution. Modern game development looks different: games exceed 100 GB, updates ship weekly or daily, and players expect small, fast, frequent updates.

MSIXVC2 addresses the development friction around packaging, upload times, and content update efficiency by changing how game content is segmented, deduplicated, and delivered.

## Key improvements

### Smaller content updates

MSIXVC2 eliminates the alignment padding and chunk-boundary constraints that inflate content updates today. Changes are tracked at the byte level rather than at fixed 4 KB block boundaries. Moving a file between chunks or reordering content within a chunk doesn't trigger a redownload&mdash;only genuinely changed content is delivered.

In testing across shipped titles, some update sizes are reduced by 64&ndash;94% compared to MSIXVC.

### Faster packaging

`makepkg2 pack` runs significantly faster than `makepkg pack` for large titles. Packaging overhead that previously accounted for minutes of build time is largely eliminated.

| Title | MakePkg pack | MakePkg2 pack | Speedup |
|-------|-------------|---------------|---------|
| Small title (~1 GB) | 5 sec | 2 sec | 2.2x |
| Medium title (~12 GB) | 70 sec | 12 sec | 5.7x |
| Large title (~130 GB) | 14 min | 3 min | 4.6x |
| Very large title (~320 GB) | 52 min | 7 min | 7.6x |

### Reduced package overhead

Every MSIXVC package today includes a fixed minimum hash tree that scales with game size. For a 320 GB title, this overhead is approximately 2 GB and is always fully downloaded with every update. MSIXVC2 reduces this overhead by over 90% and allows it to be partially downloaded.

### Built-in compression

Assets that aren't already compressed are transparently compressed for transport and storage on the CDN. On the player's machine, files are installed uncompressed. 

### Per-version encryption

Each version of a package is encrypted with its own set of keys. Content that is predownloaded remains secure until its release date. Encryption is applied at the CDN and in transit. On the player's device, installed files are stored unencrypted.

### One-command upload from loose files

With MSIXVC2, you can combine packaging and uploading into a single step:

```
makepkg2 upload /d <your_build_folder>
```

The traditional two-step workflow (pack locally, then upload separately) is still supported for teams that want to inspect their package before uploading.

## Format differences

| Aspect | MSIXVC | MSIXVC2 |
|--------|--------|---------|
| Segmentation | Fixed-size 4 KB aligned blocks | Variable-size content-based segments |
| Encryption | Shared key across versions | Per-version keys |
| Package overhead | Fixed minimum hash tree based on game size | Minimal overhead |
| Chunk layout impact | Reordering chunks or moving files triggers redownload | Chunk layout changes are metadata-only&mdash;no redownload of moved assets |

## What stays the same

- **Your game doesn't know.** Files are installed in their original form. Your engine reads them the same way it reads files from an unpackaged build directory—Win32 reads and DirectStorage work unchanged.
- **Your scripts don't break.** Existing MakePkg commands work unchanged in `makepkg2`. During the preview period, the `/msixvc2` flag opts in to the new format. At GA MakePkg2 will create msixvc2 packages by default.

> [!NOTE]
> During the preview, MSIXVC2 packaging uses `makepkg2.exe` as a separate tool. After the preview, `makepkg2.exe` is planned to replace `makepkg.exe`, so you won't need to update your build scripts.
- **Intelligent Delivery works the same.** You define chunks the same way. The difference is under the hood&mdash;reordering chunks is free.
- **Partner Center submission flow is unchanged.** Same APIs, same UI for uploading and publishing.
- **Console builds are unaffected.** XVC continues to work for Xbox consoles. `makepkg2` handles both formats.

## Scope and timeline

| Milestone | Details |
|-----------|---------|
| **April 2026 GDK** (2604) | Public preview&mdash;opt-in with `/msixvc2` flag |
| **October 2026 GDK** (2610) | General availability targeted |

During the preview period, you can sideload and publish MSIXVC2 packages to your sandboxes for testing. Submission Validator will prevent MSIXVC2 packages from being submitted to certification for public release. To release an MSIXVC2 package to the public during preview, contact your Microsoft representative for an exception.

## Preview best practices

MSIXVC2 uses a different internal format than MSIXVC. The two formats aren't interchangeable within the same package branch in Partner Center. Follow these guidelines to evaluate MSIXVC2 safely during the preview.

### Use a separate branch or package set

Publish your MSIXVC2 packages to a **new branch** (or a separate package/sandbox configuration) in Partner Center. Don't overwrite your production MSIXVC packages with MSIXVC2 builds. Keeping MSIXVC2 on its own branch lets you evaluate the format side-by-side with your existing MSIXVC pipeline without disrupting your live game or your existing content update history.

### Downgrading from MSIXVC2 to MSIXVC

Reverting a branch from MSIXVC2 back to MSIXVC is **not a supported workflow** during preview. Because the two formats segment content differently, switching a branch back to MSIXVC forces a full re-ingestion of all content&mdash;effectively a complete reupload and a full redownload for any players on that branch. Plan accordingly: treat MSIXVC2 branches as forward-only during the preview period.

### Recommended preview workflow

1. **Keep your existing MSIXVC pipeline running** for production releases.
2. **Create a new Partner Center branch** (for example, `msixvc2-preview`) for MSIXVC2 testing.
3. **Publish MSIXVC2 packages to a development sandbox** using the new branch. Validate installs, updates, and Intelligent Delivery behavior.
4. **Compare content update sizes** between your MSIXVC and MSIXVC2 branches to quantify the improvement for your title. See [Evaluating MSIXVC2 for your title](../packaging-updates-msixvc2.md#evaluating-msixvc2-for-your-title).
5. **Plan your migration to MSIXVC2** for GA, when `makepkg2` will create MSIXVC2 packages by default and Submission Validator will accept them for certification.

## Padding and alignment considerations

With MSIXVC, content update efficiency depends on careful 4 KB alignment of assets within pack files. With MSIXVC2, these alignment requirements are eliminated. Content-based segmentation automatically identifies unchanged data regardless of alignment or layout.

If your title ships on both PC and console, you can use separate padding configurations. Under MSIXVC2, you can safely reduce or remove padding for your PC build. If you prefer to maintain the same configuration across platforms, that works as well&mdash;MSIXVC2 handles both cases without penalty.

## Getting started

To start using MSIXVC2, see [Getting started with MSIXVC2 for PC](packaging-getting-started-for-PC-msixvc2.md).

For the `makepkg2` command-line reference, see [Make package 2 (makepkg2.exe)](../deployment/makepkg2.md).

## See also

[Overview of packaging](packaging.md)  
[Getting started with MSIXVC2 for PC](packaging-getting-started-for-PC-msixvc2.md)  
[Getting started with MSIXVC for PC](packaging-getting-started-for-PC.md)  
[Content updates with MSIXVC2](../packaging-updates-msixvc2.md)  
[MSIXVC2 encryption model](../packaging-encryption-msixvc2.md)  
[Make package (makepkg2.exe)](../deployment/makepkg2.md)  
[Xbox Game Package Manager](../xgpm.md)  
[Automating package uploading](../package-uploader.md)
