---
author: dmcmahon
title: "Make package (makepkg2.exe)"
description: "Creates app packages, uploads packages to Partner Center, and performs related packaging operations."
kindex:
- Make Package (makepkg2.exe)
- makepkg2.exe
- MSIXVC2 packaging tool
ms.author: dmcmahon
ms.topic: article
edited: 02/19/2026
ms.date: '02/19/2026'
applies-to: pc-gdk
permissioned-type: public
---

# Make package (makepkg2.exe)

Creates app packages, uploads packages to Partner Center, and performs related packaging operations. `makepkg2` supports both MSIXVC (v1) and MSIXVC2 package formats. Use the `/msixvc2` flag to generate packages in the MSIXVC2 format.

`makepkg2` *command* `[options]`

## Global options

| Option | Description |
|--------|-------------|
| `/v` | Enables verbose output to the console. |
| `/?`, `/h` | Shows help and usage information. |

## Commands

- [pack](#pack)&mdash;Creates a new app package from files on disk.
- [upload](#upload)&mdash;Uploads a package or a directory of files to Partner Center.
- [genkey](#genkey)&mdash;Generates an encryption key for use with `pack /lk`.
- [genid](#genid)&mdash;Converts between a Product ID GUID and a Store ID.
- [genmap](#genmap)&mdash;Generates a mapping XML file based on content on disk.
- [validate](#validate)&mdash;Runs validation without creating a package.
- [localize](#localize)&mdash;Generates a Resources.pri file based on content on disk.
- [appdata](#appdata)&mdash;Builds application metadata (appdata.bin) from an AppxManifest.xml file.

---

<a id="pack"></a>

## pack

Creates a new app package from files on disk.

```
makepkg2 pack [options]
```

**Sample usage:**

```
makepkg2 pack /msixvc2 /f layout.xml /d <sourcedir> /pc /pd <destinationdir>
```

### Options

| Option | Description |
|--------|-------------|
| `/msixvc2` | Generate a package in the MSIXVC2 package format. Without this flag, an MSIXVC (v1) package is generated. |
| `/d <sourcedir>` | **(Required)** Specifies the source directory that contains the content to be packaged. |
| `/pd <destinationdir>` | **(Required)** Specifies the destination directory where the generated package is placed. |
| `/f <mapfile>` | Specifies the mapping file to use for packaging. If omitted, a default single-chunk layout is generated. |
| `/compress <method>` | Compresses the output. Available methods: `Automatic` (default), `None`. `Automatic` uses Brotli for MSIXVC2 packages and no compression for XVC/MSIXVC (v1) packages. |
| `/pc` | Generate a package for use on PC. |
| `/contentid <contentid>` | Specifies the content ID to which this package belongs. |
| `/gameos <gameos>` | Specifies the game OS file to be embedded in the package. |
| `/l` | Encrypts the package with a unique content license. |
| `/lk <key.lekb>` | Encrypts the package with a content license using a specified key file. Use `genkey` to generate the key file. |
| `/productid <productid>` | Specifies the product ID to which this package belongs. |
| `/maxencryptionfragments <count>` | Specifies the number of encryption fragments to reserve in the package metadata (XVC1 only). |
| `/priorpackage <OldPackage.msixvc>` | Specifies the XVC or MSIXVC package file from a prior pack operation. Used for content update size comparison. |
| `/loggable` | Suppresses output containing control characters that aren't suitable for being written to a log file. |
| `/symbolpaths <symbolpaths>` | Specifies additional paths for symbol resolution lookup during symbol bundling. Paths are specified as a semicolon-delimited list. |
| `/skipsymbolbundling` | Specifies that the symbol bundling step should be skipped. |
| `/skipvalidation` | Specifies that the validation step should be skipped. |
| `/validationcritical` | Specifies that failures in Submission Validator should be treated as critical failures for the MakePkg process. |
| `/openvalidationlog` | Specifies that the Submission Validator log file should be automatically opened in the default application for opening XML files after validation runs. |
| `/validationlanguage <lang>` | Specifies an additional language for building the Submission Validator log file. |
| `/validationpath <path>` | Specifies the path to use for loading SubmissionValidator.dll. |
| `/updatesubval` | Downloads the latest version of SubmissionValidator.dll automatically from `https://aka.ms/currentsubvalzip` before running validation, unless the current version already matches. Can be used with `/validationpath` to specify a custom download location. If the download fails, validation continues with the current version. |

### Remarks

By default, `makepkg2 pack` encrypts the package by using a well-known encryption key recognized by all development kits for testing purposes. These packages aren't cryptographically protected.

For additional protection of the uploaded package, XVC and MSIXVC (v1) packages can optionally use `/l` or `/lk` encryption modes. `/l` packages can't be installed on a devkit or PC for testing before upload. `/lk` packages can only be installed on a devkit for testing before upload. Regardless of the upload encryption mode, the Xbox service always encrypts the package for distribution with Microsoft managed encryption keys.

MSIXVC2 packages do not use client-side upload encryption. The Xbox service handles all encryption for distribution.

To generate a key file for use with `/lk`, use the [genkey](#genkey) command.

---

<a id="upload"></a>

## upload

Uploads a specified package to Partner Center. The `upload` command can also package from loose files and upload in a single operation when `/d` is specified.

If a branch or flight isn't specified, the package is uploaded to the `main` branch.

The EKB file and SubmissionValidator log file should be in the same directory as the package and are uploaded automatically. If a Symbol Bundle is present, it's also uploaded. The StoreId is extracted from the package but can optionally be provided if the package was generated without a StoreId.

```
makepkg2 upload [options]
```

**Sample usage (upload pre-built package):**

```
makepkg2 upload /pd <package_directory> /branch <branch> /auth CacheableBrowser
```

**Sample usage (package and upload from loose files):**

```
makepkg2 upload /d <sourcedir> /msixvc2 /pc /branch <branch>
```

### Options

#### Package source options

| Option | Description |
|--------|-------------|
| `/pd <package_directory>` | The directory where the package resides. If there's more than one package at this location, specify the full package file name instead of the directory name. |
| `/d <sourcedir>` | Specifies the source directory that contains the content to be packaged. When specified, the `upload` command packages the content and uploads it in a single operation. |
| `/f <mapfile>` | Specifies the mapping file to use for packaging (used with `/d`). |
| `/msixvc2` | Generate a package in the MSIXVC2 package format (used with `/d`). |
| `/compress <method>` | Compresses the output. Available methods: `Automatic` (default), `None`. `Automatic` uses Brotli for MSIXVC2 packages and no compression for XVC/MSIXVC (v1) packages. |
| `/pc` | Generate a package for use on PC (used with `/d`). |
| `/productid <productid>` | Specifies the product ID to which this package belongs. |

#### Destination options

| Option | Description |
|--------|-------------|
| `/storeid <storeId>` | The Store ID to use for the package. If not specified, the Store ID is extracted from the package. |
| `/branch <branch>` | The branch to upload the package to. Defaults to `main` if neither branch nor flight is specified. |
| `/flight <flight>` | The flight to upload the package to. Can't be used if a branch is specified. |
| `/market <market>` | The market to upload the package to. Defaults to `default`. |
| `/disclayout <path>` | An optional path to a disc layout file if the package will be shipped on disc and requires more than one disc. |

#### Authentication options

| Option | Description |
|--------|-------------|
| `/auth <method>` | The authentication method to use. Default: `CacheableBrowser`. Multiple authentication methods are available only for MSIXVC2 uploads. XVC and MSIXVC (v1) uploads can only use `CacheableBrowser`. For advanced authentication with those formats, use [PackageUploader](../package-uploader.md). For details, see [Authentication methods](#auth-methods). |
| `/tenantid <tenantId>` | The tenant to upload the package to. If not specified, the user's default tenant is used. |
| `/clientid <clientId>` | The client ID (application ID) to use for authentication. Required for `ManagedIdentity`, `ClientCertificate`, and `ClientSecret` authentication methods. |
| `/clientsecret <secret>` | The client secret to use for authentication. Requires `/auth ClientSecret`. |
| `/certthumbprint <thumbprint>` | The certificate thumbprint to use for `ClientCertificate` authentication. |
| `/certstore <store>` | The certificate store name (for example, `My`). Defaults to `My`. |
| `/certlocation <location>` | The certificate location (for example, `CurrentUser` or `LocalMachine`). Defaults to `CurrentUser`. |
| `/certpassword <password>` | The password for the certificate file (PFX/PKCS12). Only required if using a password-protected certificate file. |
| `/resourceid <resourceId>` | The Azure resource ID for `ManagedIdentityFederated` authentication. Required when using `/auth ManagedIdentityFederated`. |

#### Validation and symbol options

| Option | Description |
|--------|-------------|
| `/skipvalidation` | Specifies that the validation step should be skipped. |
| `/validationcritical` | Specifies that failures in Submission Validator should be treated as critical failures. |
| `/validationlanguage <lang>` | Specifies an additional language for building the Submission Validator log file. |
| `/validationpath <path>` | Specifies the path to use for loading SubmissionValidator.dll. |
| `/updatesubval` | Downloads the latest version of SubmissionValidator.dll before running validation. See [pack](#pack) for details. |
| `/symbolpaths <symbolpaths>` | Specifies additional paths for symbol resolution lookup during symbol bundling. Semicolon-delimited list. |
| `/skipsymbolbundling` | Specifies that the symbol bundling step should be skipped. |

<a id="auth-methods"></a>

### Authentication methods

The following authentication methods are available for the `upload` command.

| Method | Description |
|--------|-------------|
| `CacheableBrowser` | Opens a browser for interactive sign-in and caches credentials for subsequent uploads. This is the default. |
| `Browser` | Opens a browser for interactive sign-in without caching credentials. |
| `AzureCli` | Uses Azure CLI credentials. Useful when already authenticated via `az login`. |
| `AzurePipelines` | Uses the Azure Pipelines service connection. Ideal for Azure DevOps CI/CD pipelines. |
| `ManagedIdentity` | Uses an Azure Managed Identity. Requires `/clientid`. |
| `ManagedIdentityFederated` | Uses a federated Managed Identity. Requires `/clientid` and `/resourceid`. |
| `ClientSecret` | Uses a client ID and secret. Requires `/clientid` and `/clientsecret`. |
| `ClientCertificate` | Uses a client certificate. Requires `/clientid` and `/certthumbprint`. |
| `Environment` | Uses credentials from environment variables. |
| `Default` | Tries multiple methods in sequence. |

---

<a id="genkey"></a>

## genkey

Generates an encryption key file (LEKB) for use with the `pack /lk` option.

```
makepkg2 genkey [options]
```

### Options

| Option | Description |
|--------|-------------|
| `/ekb <ekbfile>` | Specifies the path to save the generated LEKB file. The `.lekb` extension is recommended to distinguish it from the `.ekb` file generated by `makepkg pack`. |

---

<a id="genid"></a>

## genid

Converts between a Product ID GUID and a Store ID.

```
makepkg2 genid [options]
```

### Options

| Option | Description |
|--------|-------------|
| `/storeid <storeId>` | Specifies the Store ID to convert. |
| `/productid <productId>` | Specifies a previously generated Product ID GUID to convert. |

---

<a id="genmap"></a>

## genmap

Generates a mapping XML file based on content on disk. The generated file contains a single chunk and can be edited to split content into multiple chunks or to add Intelligent Delivery tags.

```
makepkg2 genmap /f <mapfile> /d <contentdirectory>
```

### Options

| Option | Description |
|--------|-------------|
| `/f <mapfile>` | Specifies the path for the generated mapping file. |
| `/d <contentdirectory>` | Specifies the directory whose contents should be added to the mapping file. |

---

<a id="validate"></a>

## validate

Runs the validation steps for creating an application package without creating the package. This is useful for verifying that your content and configuration are correct before committing to a full pack operation.

```
makepkg2 validate [options]
```

The `validate` command accepts the same options as [pack](#pack).

---

<a id="localize"></a>

## localize

Generates a Resources.pri file based on content on disk.

```
makepkg2 localize /d <sourcedir> [options]
```

### Options

| Option | Description |
|--------|-------------|
| `/d <sourcedir>` | **(Required)** Specifies the source directory that contains the content to be packaged. |
| `/resw <reswdir>` | Optional directory path relative to the root directory that contains RESW files if they aren't in the immediate root directory. |
| `/pd <outputdir>` | Optional output directory for the resulting Resources.pri file. If not specified, the file is placed in the content directory. |
| `/t <tempdir>` | Optional directory for converting the Resources.pri contents to an XML format. |
| `/gc <gameconfigpath>` | Optional path to the MicrosoftGame.config file if it isn't located at the base of the content directory or has a name other than MicrosoftGame.config. |

---

<a id="appdata"></a>

## appdata

Builds application metadata (appdata.bin) based upon a valid AppxManifest.xml file.

```
makepkg2 appdata [options]
```

### Options

| Option | Description |
|--------|-------------|
| `/f <appmanifest>` | Specifies the path to the AppxManifest.xml file. |
| `/d <appmanifestdir>` | Specifies a directory containing the AppxManifest.xml file. |
| `/pd <outputdir>` | Specifies the output location for the generated file. Default is next to the AppxManifest.xml file. |
| `/nocrashdump` | Specifies that the application opts out of automatic generation and upload of crash dumps in case of a fault. |

---

## Differences from makepkg

`makepkg2` is the successor to `makepkg` and includes the following additions:

| Feature | makepkg | makepkg2 |
|---------|---------|----------|
| MSIXVC2 format | Not supported | `/msixvc2` flag |
| Upload to Partner Center | Basic (wraps PackageUploader) | Built-in `upload` command |
| Compression | Not supported | `/compress` option |
| Authentication for upload | `CacheableBrowser` only | 10 authentication methods |

Existing `makepkg` commands (`pack`, `genmap`, `genid`, `genkey`, `validate`, `localize`, `appdata`) work the same way in `makepkg2`. Scripts that use `makepkg` commands can switch to `makepkg2` without modification.

> [!NOTE]
> For MSIXVC (v1) packaging, both `makepkg` and `makepkg2` are supported. For MSIXVC2 packaging, `makepkg2` is required.

## See also

[MSIXVC2 packaging overview](../overviews/packaging-msixvc2-overview.md)  
[Getting started with MSIXVC2 for PC](../overviews/packaging-getting-started-for-PC-msixvc2.md)  
[Make package (makepkg.exe)](makepkg.md)  
[Deployment Package Schema](atoc-deployment-schema.md)  
[Xbox Game Package Manager](../xgpm.md)  
[Automating package uploading](../package-uploader.md)
