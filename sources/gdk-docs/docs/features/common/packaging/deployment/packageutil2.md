---
author: dmcmahon
title: "packageutil2.exe"
description: "Inspects, compares, and extracts content from MSIXVC and MSIXVC2 package files."
kindex:
- packageutil2.exe
- MSIXVC2 package inspection
ms.author: dmcmahon
ms.topic: article
edited: 02/20/2026
ms.date: '02/20/2026'
applies-to: pc-gdk
permissioned-type: public
---

# packageutil2.exe

PackageUtil2 inspects, compares, and extracts content from both MSIXVC and MSIXVC2 package files. It's the successor to [PackageUtil](packageutil.md) and supports the new MSIXVC2 package format.

```
packageutil2 [command] [options]
```

## Global options

| Option | Description |
|--------|-------------|
| `/v` | Enables verbose output to the console. |
| `/?`, `/h` | Show help and usage information. |

## Commands

- [`info`](#info)&mdash;Display package metadata.
- [`compare`](#compare)&mdash;Compare two packages and report differences.
- [`license`](#license)&mdash;Display signing key information.
- [`osinfo`](#osinfo)&mdash;Display game OS information.
- [`chunkinfo`](#chunkinfo)&mdash;Display chunk details.
- [`fileinfo`](#fileinfo)&mdash;Display file details.
- [`extract`](#extract)&mdash;Extract files from a package.

---

<a id="info"></a>

## info

Provides information about a package, including version number, ContentID, ProductID, GameOS version, and encryption key IDs.

```
packageutil2 info <packagefile>
```

### Arguments

| Argument | Description |
|----------|-------------|
| `<packagefile>` | Specifies the package file to examine. |

---

<a id="compare"></a>

## compare

Compares a base package with an updated package and reports the differences, including update size and changed segments.

```
packageutil2 compare <basepackagefile> <updatedpackagefile> [options]
```

### Arguments

| Argument | Description |
|----------|-------------|
| `<basepackagefile>` | Specifies the base package for the update comparison. |
| `<updatedpackagefile>` | Specifies the updated package for the update comparison. |

### Options

| Option | Description |
|--------|-------------|
| `/quiet` | Only print the summary information. |
| `/out <out>` | Specifies the output directory for comparison reports. |

---

<a id="license"></a>

## license

Displays information about the signing key used on a package. Optionally checks whether an EKB file matches the package.

```
packageutil2 license <packagefile> [<ekbfile>]
```

### Arguments

| Argument | Description |
|----------|-------------|
| `<packagefile>` | Specifies the package file to examine. |
| `<ekbfile>` | Optionally specifies an EKB file to check against the package to see if they match. |

---

<a id="osinfo"></a>

## osinfo

Provides information about a game OS, including GUID and four-part version number.

```
packageutil2 osinfo <gameos>
```

### Arguments

| Argument | Description |
|----------|-------------|
| `<gameos>` | Specifies the game OS file to examine. |

---

<a id="chunkinfo"></a>

## chunkinfo

Provides information about the chunks in a package, including chunk ID, chunk size, and Intelligent Delivery specifiers.

```
packageutil2 chunkinfo <packagefile>
```

### Arguments

| Argument | Description |
|----------|-------------|
| `<packagefile>` | Specifies the package file to examine. |

---

<a id="fileinfo"></a>

## fileinfo

Provides information about files in a package, including file names, sizes, and segment details.

```
packageutil2 fileinfo <packagefile> [options]
```

### Arguments

| Argument | Description |
|----------|-------------|
| `<packagefile>` | Specifies the package file to examine. |

---

<a id="extract"></a>

## extract

Extracts one or more files from a package to a specified output directory.

> [!NOTE]
> Extract is only supported for MSIXVC2 packages.

> [!NOTE]
> Extract can only extract from unencrypted packages. It can't extract from a package file on the Xbox CDN, for example.

```
packageutil2 extract /package <packagefile> /out <outputdir> [options]
```

### Options

| Option | Description |
|--------|-------------|
| `/package <package>` | Specifies the MSIXVC or MSIXVC2 package file. |
| `/file <file>` | Specifies a specific file to extract. If omitted, all files are extracted. |
| `/out <out>` | **(Required)** Specifies the directory to extract content to. |

**Sample usage:**

```
packageutil2 extract /package MyGame.msixvc /out extracted_files
```

---

## Differences from packageutil

`packageutil2` is the successor to `packageutil` and includes the following improvements:

| Feature | packageutil | packageutil2 |
|---------|-------------|--------------|
| MSIXVC2 format | Not supported | Fully supported |
| Extract files | Not supported | Built-in `extract` command |
| File information | Not supported | Built-in `fileinfo` command |
| Comparison reports | Detailed reports output to the package directory | Detailed reports with configurable output location via `/out` |

> [!NOTE]
> For MSIXVC (v1) packages, both `packageutil` and `packageutil2` are supported. For MSIXVC2 packages, `packageutil2` is required.

## JSON output for middleware and custom tooling

When you run `compare`, `packageutil2` creates a JSON companion file along with the HTML report. Middleware, engines, and custom tools can use this JSON file to programmatically inspect the package layout. For example, they can use it to locate files within the package binary, verify alignment, or extract structural information without fully unpacking the package.

The `fileinfo` command also produces structured output that's suitable for machine consumption.

The JSON output uses abbreviated field names to keep the file size small. The following table lists the key abbreviations.

| Abbreviated name | Full name | Description |
|------------------|-----------|-------------|
| `O` | Offset | The byte offset of a data segment within the package file. |
| `L` | Length | The length in bytes of a data segment. |

**Typical integration scenario**: An engine or tool reads the JSON output to build an index of file locations within the package. By using this index, the tool can directly read or validate specific assets without extracting the full package. This scenario is the primary use case for middleware that needs to assess package contents as part of a build or validation pipeline.

## See also

[MSIXVC2 packaging overview](../overviews/packaging-msixvc2-overview.md)  
[Make package (makepkg2.exe)](makepkg2.md)  
[packageutil.exe](packageutil.md)  
[Getting started with MSIXVC2 for PC](../overviews/packaging-getting-started-for-PC-msixvc2.md)
