---
author: M-Stahl
title: "packageutil.exe"
description: "Retrieves signing key information for a package file and compares a base package file with an updated package file."
kindex: packageutil.exe
ms.topic: article
edited: 10/30/2019
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# packageutil.exe

> [!NOTE]
> To inspect MSIXVC2 packages, use `packageutil2.exe`. For more information, see the MSIXVC2 documentation.
   
  
PackageUtil retrieves the signing key information for a package file and compares a base package file with an updated package file.  
   
  
PackageUtil provides the following subcommands and functions:  

| Command | Description |
|--------|-------------|
| [`packageutil license`](#packageutil_license) | Retrieves information about the signing key used on the specified package. |
| [`packageutil compare`](#packageutil_compare) | Compares two packages created by MakePkg.exe: a base package file and an updated package file. |
| [`packageutil info`](#packageutil_info) | Provides information about a package, including the version number, ContentID, ProductID, GameOS version, and Encryption Key IDs. |
| [`packageutil chunkinfo`](#packageutil_chunkinfo) | Provides information about the chunks in a package, including the ID, chunk size, and specifiers. |
| [`osinfo`](#packageutil_osinfo) | Provides information about a particular title's OS, including the GUID, edition number, and four-part version number. |
<!--- 
<table> 
<tr> <th>

Command</th> <th>

Description</th> </tr>
 
<tr> <td><a href="#packageutil_license">packageutil license</a></td> <td>Retrieves information about the signing key used on the specified package.</td> </tr>
 
<tr> <td><a href="#packageutil_compare">packageutil compare</a></td> <td>Compares two packages created by MakePkg.exe: a base package file and an updated package file.</td> </tr>
 
<tr> <td><a href="#packageutil_info">packageutil info</a></td> <td>Provides information about a package, including the version number, ContentID, ProductID, GameOS version, and Encryption Key IDs.</td> </tr>
 
<tr> <td><a href="#packageutil_chunkinfo">packageutil chunkinfo</a></td> <td>Provides information about the chunks in a package, including the ID, chunk size, and specifiers.</td> </tr>
<tr> <td><a href="#packageutil_osinfo">osinfo</a></td><td>Provides information about a particular title's OS, including the GUID, edition number, and four-part version number.</td></tr>
 </table>
--->
 
<a id="packageutil_license"></a>

   

## packageutil license  
   
  
Retrieves information about the signing encryption key used on the specified package. The license command causes `packageutil` to output one of the following values:  
   
   * Submission signed (`/l`) - only for submission to Partner Center
   * Test signed - (`/lt`) - sideload enabled; insecurely encrypted

> [!NOTE]
> Currently, `packageutil license` returns `/lk` signed packages as `/l` signed.
 

| Command |
|--------|
| `packageutil license` *\<packagefile>* `[\<ekbfile>] [/?]` |
<!--- 
<table>
<tr><td><code>packageutil license </code><i>&lt;packagefile></i><code> [&lt;ekbfile>] [/?]</code>
</td></tr>
</table>
--->

| Option | Description |
|--------|-------------|
| *\<packagefile>* | Specifies the package file to examine. |
| \<ekbfile> | Optionally verifies that an EKB file is the correct EKB file associated with the package file. When you submit your package for certification, you can use this test to ensure that you're providing the correct EKB file for the package being certified. If you specify an EKB file, `packageutil` displays **Matched Package and EKB** or **ERROR: Mismatched Package and EKB**, in addition to the signing key information. The EKB file contains the encryption key material and is created along with the encrypted package when a package is built with [`makepkg /l` or `makepkg /lk`](makepkg.md). If you're using `makepkg /lk`, don't specify the CEKB or LEKB file for this parameter. |
| `/?` | Displays help text. |

<!--- 
<table>
<tr><th>

Option</th><th>

Description</th></tr>

<tr><td><i>&lt;packagefile></i></td><td> Specifies the package file to examine. </td></tr>

<tr><td>&lt;ekbfile></td><td> Optionally verifies that an EKB file is the correct EKB file associated with the package file. When you're submitting your package for certification, this test can be used to ensure you're providing the correct EKB file for the package being certified. If you specify an EKB file, `packageutil` displays "Matched Package and EKB" or "ERROR: Mismatched Package and EKB" in addition to the signing key information. The EKB file contains the encryption key material and is created along with the encrypted package when a package is being built with [`makepkg /l` or `makepkg /lk`](makepkg.md). If you're using `makepkg /lk`, don't specify the CEKB or LEKB file for this parameter. </td></tr>

<tr><td>/?</td><td> Displays help text. </td></tr>
</table>
--->
  
<a id="packageutil_compare"></a>

## `packageutil compare`  
  
PackageUtil compares two packages created by the `makepkg` command: a base package file and an updated package file. Create both packages by using the same ContentID. Both packages must use the `/lk` (recommended) encryption option, or the default encryption mode. Don't use the `/l` command-line switch, because the comparison results aren't accurate.

PackageUtil produces a report that includes a list of data that is downloaded to update from the base package file to the updated package file. The report uses the same algorithm that a retail console uses to perform the update. The report lists the percent of each file that is downloaded and, within each file, the exact ranges of data that are downloaded.

Finally, PackageUtil provides an estimate of the size of the download that is performed when the console is updated from the base package to the update package. If the package uses Intelligent Delivery, then this estimate is produced for various scenarios of device type and language combinations.  


| Command |
|---------|
| `packageutil compare` *\<basepackagefile>* *\<updatedpackagefile>* `[/?]` |

<!--- 
<table>
<tr><td><code>packageutil compare </code><i>&lt;basepackagefile></i> <i>&lt;updatedpackagefile></i><code> [/?]</code>



</td></tr>
</table>
--->
| Option | Description |
|--------|-------------|
| *\<basepackagefile>* | Specifies the base package file for the comparison. |
| *\<updatedpackagefile>* | Specifies the updated package file for the comparison. |
| `/?` | Displays help text. |

<!---- 
<table>
<tr><th>
Option</th><th>
Description</th></tr>
<tr><td><i>&lt;basepackagefile></i></td><td> Specifies the base package file for the comparison. </td></tr>
<tr><td><i>&lt;updatedpackagefile></i></td><td> Specifies the updated package file for the comparison. </td></tr>
<tr><td>/?</td><td> Displays help text. </td></tr>
</table>
---> 
  
<a id="packageutil_info"></a>

## packageutil info  

Provides information about a package, including the version number, ContentID, ProductID, GameOS version, and Encryption Key IDs.  

| Command |
|---------|
| `packageutil info` *\<packagefile>* |

<!--- 
<table>
<tr><td><code>packageutil info </code><i>&lt;packagefile></i>



</td></tr>
</table>
--->
| Option | Description |
|--------|-------------|
| *\<packagefile>* | Specifies the package file to examine. |

<!--- 
<table>
<tr><th>

Option</th><th>

Description</th></tr>

<tr><td><i>&lt;packagefile></i></td><td> Specifies the package file to examine. </td></tr>
</table>
--->
  
<a id="packageutil_chunkinfo"></a>

## `packageutil chunkinfo`  

Shows information about the chunks in a package, including the ID, chunk size, and specifiers.  

| Command |
|---------|
| `packageutil chunkinfo` *\<packagefile>* |
<!--- 
<table>
<tr><td><code>packageutil chunkinfo </code><i>&lt;packagefile></i>
</td></tr>
</table>
--->

| Option | Description |
|--------|-------------|
| *\<packagefile>* | Specifies the package file to examine. |
<!--- 
<table>
<tr><th>

Option</th><th>

Description</th></tr>

<tr><td><i>&lt;packagefile></i></td><td> Specifies the package file to examine. </td></tr>
</table>
--->
<a id="packageutil_osinfo"></a>

## `packageutil osinfo`
Provides information about a particular title's OS, including the GUID, edition number, and four-part version number.

| Command |
|---------|
| `packageutil osinfo` |
<!--- 
<table>
<tr><td><code>packageutil osinfo </code></td></tr>
</table>
--->

<a id="packageutil_json"></a>

## `packageutil` JSON output

When you run `packageutil compare` (or use `makepkg pack /priorpackage`), the process generates a JSON file alongside the update report. This JSON file contains detailed package structure information. Middleware, engines, and custom tooling that need to understand the internal layout of a package primarily use this file.

The JSON output uses abbreviated field names to keep file sizes small. The following table lists the key abbreviated names and their meanings.

| Abbreviated name | Full name | Description |
|------------------|-----------|-------------|
| `O` | Offset | The byte offset of a data segment within the package file. |
| `L` | Length | The length in bytes of a data segment. |

The primary use case for this JSON file is enabling engine integrations and middleware to programmatically inspect the package layout. For example, they can locate specific files within the package binary, verify alignment of assets, or build custom tooling that processes or validates package contents without fully extracting the package.

> [!NOTE]
> For MSIXVC2 packages, use `packageutil2`, which produces equivalent JSON output through the `compare` and `fileinfo` commands. See [packageutil2.exe](packageutil2.md) for details.

<a id="ID4EZH"></a>

## See also  
 [Deployment package schema](atoc-deployment-schema.md)

 [Make package resource index (makepri.exe)](makepri.md)

  
