---
author: dmcmahon
title: "Content updates with MSIXVC2"
description: "Describes how content updates work with the MSIXVC2 packaging format, including content-based segmentation, deduplication, and how update sizes are dramatically reduced compared to MSIXVC."
kindex:
- MSIXVC2 content updates
- Content update MSIXVC2
ms.author: dmcmahon
ms.topic: article
edited: 02/19/2026
ms.date: '02/19/2026'
permissioned-type: public
---

# Content updates with MSIXVC2

MSIXVC2 fundamentally changes how content updates are calculated and delivered. With the original MSIXVC format, content updates operate at fixed 4 KB block boundaries and are sensitive to file layout, chunk ordering, and alignment within pack files. With MSIXVC2, content updates use content-based segmentation to track changes at the byte level, eliminating the alignment constraints that inflate update sizes in MSIXVC.

> [!NOTE]
> For content update guidance specific to the original MSIXVC format, see [Content update best practices](packaging-updates.md).

## How MSIXVC2 content updates work

### Content-based segmentation

MSIXVC2 splits file data into variable-size segments based on the actual content rather than fixed block boundaries. Each segment is identified by a hash of its contents.

This approach means:

- **Moving a file between chunks doesn't trigger a re-download.** The file's content hashes stay the same no matter which chunk it belongs to.
- **Reordering files within a chunk doesn't trigger a re-download.** Segment boundaries are determined by content, not position.
- **Reordering chunks doesn't trigger a re-download.** Chunk layout is a logical concept that doesn't affect the physical segmentation of data.
- **Inserting or removing data doesn't cascade.** Unlike fixed-block systems, a small insertion doesn't shift all subsequent blocks and force redownloads of unchanged content.

### Deduplication on upload

Every segment is hashed before upload. The upload process queries the CDN to determine which segments already exist from prior versions. Only new or changed segments are uploaded and delivered to players. This deduplication happens automatically&mdash;no developer action is required.

### Per-segment encryption and compression

Each segment is independently compressed and encrypted. This ensures that updating one segment doesn't affect others.

## What changes from MSIXVC

The following alignment and layout constraints from MSIXVC content updates **don't apply** to MSIXVC2:

| MSIXVC constraint | MSIXVC2 behavior |
|-------------------|------------------|
| Align assets to 4 KB boundaries within pack files | Not required. Content-based segmentation is alignment-independent. |
| Don't change chunk IDs or move files between chunks | Chunk layout changes are free. No redownload penalty. |
| Don't reorder chunks, files, or assets | Reordering is free. Segment hashes are content-based. |
| Data can't be efficiently moved | Data movement is handled naturally by content hashing. |
| Fixed minimum hash tree overhead scales with game size | Minimal overhead; partially downloadable. |

> [!TIP]
> If you're currently investing effort in maintaining stable file ordering, freezing asset layouts, or carefully managing 4 KB alignment in your build pipeline, MSIXVC2 eliminates the need for that work. These optimizations still apply if you're shipping XVC packages for console.

## Update size comparison

The following data compares content update sizes between MSIXVC and MSIXVC2 for the same title builds. No changes were made to the games&mdash;same assets, same builds, different packaging format.

| Title | Engine | MSIXVC update | MSIXVC2 update | Reduction |
|-------|--------|---------------|----------------|-----------|
| Game A | Unity | 1.27 GB | 71 MB | ↓ 94% |
| Game B | Unity | 411 MB | 49 MB | ↓ 88% |
| Game C | Custom | 2.5 GB | 473 MB | ↓ 81% |
| Game D | Unreal | 1.75 GB | 595 MB | ↓ 66% |

Game D shows a smaller improvement because the title was already hand-optimized for MSIXVC content updates (CUv3). Most titles that haven't done this optimization work will see larger reductions. With MSIXVC2, this optimization work is no longer necessary.

## Package overhead reduction

Every MSIXVC package includes a fixed minimum hash tree whose size scales with the total game size. This overhead is always fully downloaded with every update. For large titles, this overhead is significant:

| Title | MSIXVC overhead | MSIXVC2 overhead | Reduction |
|-------|-----------------|------------------|-----------|
| Game C (~320 GB) | 2.049 GB (0.66%) | 184.3 MB (0.06%) | ↓ 91% |

MSIXVC2 overhead can also be partially downloaded, meaning players only receive the portions of metadata that are relevant to their update.

## Base game size improvements

Content-based segmentation and built-in compression also reduce base game download sizes:

| Title | MSIXVC base | MSIXVC2 base | Reduction |
|-------|-------------|--------------|-----------|
| Game A | 11.7 GB | 4.2 GB | ↓ 64% |
| Game B | 918 MB | 558 MB | ↓ 39% |
| Game C | 320.0 GB | 270.5 GB | ↓ 15% |
| Game D | 129.9 GB | 121.0 GB | ↓ 7% |

Titles with uncompressed content or significant duplicate data across chunks see the largest base size reductions. Titles that already compress all content and have no duplication (like Game D) see smaller but still meaningful improvements.

## Evaluating MSIXVC2 for your title

To measure the content update improvement for your own title:

1. Take two sequential builds of your game (for example, a release build and the subsequent patch).
2. Package both builds by using `makepkg2`.

   ```
   makepkg2 pack /msixvc2 /f layout.xml /d <old_build> /pc /pd <output_old>
   makepkg2 pack /msixvc2 /f layout.xml /d <new_build> /pc /pd <output_new> /priorpackage <output_old\package.msixvc>
   ```

3. Compare the resulting update size against an equivalent MSIXVC (v1) build.
4. Report your findings to your Microsoft representative. This data helps prioritize improvements before GA.

> [!IMPORTANT]
> During preview, upload MSIXVC2 packages to a separate branch in Partner Center (for example, `msixvc2-preview`). Don't mix MSIXVC2 and MSIXVC packages on the same branch&mdash;reverting a branch from MSIXVC2 back to MSIXVC requires a full re-upload and forces a full redownload for players on that branch. See [Preview best practices](overviews/packaging-msixvc2-overview.md#preview-best-practices) for details.

## Padding considerations for cross-platform titles

If your title ships on both PC (MSIXVC2) and console (XVC), you can use separate padding configurations for each platform. Under MSIXVC2, you can safely reduce or remove padding for your PC build without affecting update efficiency. If you prefer to maintain the same configuration across platforms, that configuration also works without penalty&mdash;MSIXVC2 handles both cases.

## See also

[MSIXVC2 packaging overview](overviews/packaging-msixvc2-overview.md)  
[Content update best practices (MSIXVC)](packaging-updates.md)  
[MSIXVC2 encryption model](packaging-encryption-msixvc2.md)  
[Getting started with MSIXVC2 for PC](overviews/packaging-getting-started-for-PC-msixvc2.md)  
[Make package (makepkg2.exe)](deployment/makepkg2.md)
