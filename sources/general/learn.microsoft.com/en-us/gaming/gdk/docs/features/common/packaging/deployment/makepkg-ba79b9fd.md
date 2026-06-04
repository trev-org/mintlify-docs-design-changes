# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Make package (makepkg.exe)

Feedback

Summarize this article for me

Note

For MSIXVC2 packaging, use `makepkg2.exe`. This tool supports MSIXVC, MSIXVC2, and XVC formats and includes built-in upload and validation commands. For more information, see [Make package (makepkg2.exe)](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg2?view=gdk-2604).

Creates app packages and app package metadata.

`makepkg` _command_ `[/updcompat 3] [/pc] [/gameos <gameos file>] [/priorpackage <prior package file>] [/f <file name>] [/d <content directory>] [/pd <output directory>] [/l | /lk <secret_key.lekb>] [/contentid <ID>] [/productid <ProductIDGUID>] [/nocrashdump] [/resw <resw directory>] [/t <xml output directory>] [/v] [/?]`

## Commands

### **genmap**

Builds an XML file to use with the `pack` command based on the contents of a target folder. The generated file contains a single chunk. You can edit the file to split it into chunks or add tags as needed.

`makepkg genmap /f <targetXmlFile> /d <contentdirectory>`

### **genid**

Converts between a Product ID GUID and a Store ID. The generated GUID matches the product ID you provide during submission of your product. You can convert a product ID GUID back to a Store ID.

`makepkg genid /storeid <storeId> | /productid <productId>`

### **pack**

Creates a new app package from files on disk.

`makepkg pack /f <mapping file> /d <content directory> /pd <output package directory> /productid <ProductIDGUID> [/l | /lk <secret_key.lekb>]`

Creates an app package in the **output package directory** by adding the files specified in the mapping file. For example, to package the contents of a directory with three files - a.txt, b.txt, and game.exe - use the following mapping file:

```
<Package>
    <Chunk Id="1000" Marker="Launch">
        <FileGroup DestinationPath="\" SourcePath=".\" Include="a.txt"/>
        <FileGroup DestinationPath="\" SourcePath=".\" Include="b.txt"/>
        <FileGroup DestinationPath="\" SourcePath=".\" Include="game.exe"/>
    </Chunk>
</Package>
```

For information about the mapping file schema, see [Deployment Package Schema](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/atoc-deployment-schema?view=gdk-2604). The content directory you specify with `/d` must contain a valid game configuration file named MicrosoftGame.config. This file is located in the build output directory of your app’s Visual Studio project. For information about the game configuration schema, see [MicrosoftGame.config Schema](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/microsoftgameconfig/microsoftgameconfig-schema?view=gdk-2604).

By default, `makepkg pack` encrypts the package by using a well-known encryption key recognized by all Development Kits for testing purposes (also known as the `/lt` encryption switch). These packages shouldn't be considered cryptographically protected. To protect the package file for secure upload, use the `/lk` <local EKB file> switch (recommended for development and submission for console) or `/l` switch, which overrides the default behavior.

MakePkg.exe scans for certain files in your package and moves them to a special _registration_ chunk. Among these files are MicrosoftGame.config, any images referenced within MicrosoftGame.config, and Resources.pri, if present.

> **NOTE:** Use `makepkg localize` to generate the Resources.pri file. For more advanced scenarios, see the topic for the [Make package resource index (makepri.exe)](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepri?view=gdk-2604) command-line tool. 
> You can manually lay out these files in the layout.xml file, by specifying "Registration" in the ID attribute for the chunk that contains these files.

> **NOTE:** Makepkg rejects binaries that contain relocations from within executable sections. Such relocations require modifications to the executable section at load time, which could enable code modifications to take place during this time. For this reason, makepkg fails if it's presented a binary with such traits. One common way to prevent this problem is to avoid merging read-only data sections into another executable section when compiling your binaries.

### **validate**

Runs the validation steps without building the package. Steps include running Submission Validator, which generates the log file that documents possible issues with package submission. Takes the same parameters as `makepkg pack`, except for the optional mapfile.

`makepkg validate [options] [/f <mapping file>] /d <content directory> /pd <output package directory>`

### **localize**

Generates a Resources.pri file from PNG and RESW files in a content directory. A MicrosoftGame.config file must be present in the directory in order for localized information to be discovered. This file should specify the language definitions and image files for shell localization. The resulting Resources.pri is placed at the root of the output directory if supplied and in the content directory if no output directory is supplied. If a temporary directory is supplied, an XML conversion of the Resources.pri file is generated in that temporary directory for manual validation. For more information about using Resources.pri files, see [MicrosoftGame.config localization](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-localization?view=gdk-2604).

`makepkg localize [/d <content directory>] /pd <destinationdir> /resw <resw directory> /t <xml output directory> /gc <game config path>`

### **genkey**

Generates a local escrowed key blob (LEKB). The command creates a random content key and stores it in the LEKB file.

Use the LEKB with the `makepkg pack /lk` encryption switch. Generally, use `genkey` for every trust boundary you want to establish. For example, you could use `genkey` once and use one key studio-wide, or use one key per product, depending on who should have access to the package.

To generate the LEKB:

`makepkg genkey /ekb <The path to save the generated LEKB file.>`

To use the LEKB to encrypt your package, use the `/lk` encryption switch:

`makepkg pack /lk <The path to your LEKB file created by the genkey command.>`

Provide the LEKB file as an option to `makepkg pack` to use a stable encryption key (`/lk` encryption) during package creation. This key offers four main benefits:

1. `packageutil compare` can generate correct update size estimates (unlike `/l`).
2. It enables secure delta upload to Partner Center by using the same algorithm that consoles and PCs use to download content updates (unlike `/l`).
3. You can install it onto devkits (unlike `/l`).
4. It uses secure encryption key material and can only be decrypted in specific environments (unlike `/lt`).

The contents of the LEKB file are only lightly obfuscated. You must ensure the security of your content packages by securing access to the LEKB file. **Anyone possessing the LEKB file and the content package file output by `makepkg pack` can decrypt its contents.**

> **NOTE:** Use the `.lekb` extension for the Local EKB file created by `genkey` to distinguish it from the `.ekb` file generated by `makepkg pack`. The "l" stands for "locally created".

## Options

Expand table

| Option | Description |
| --- | --- |
| `/validationpath` | Specifies the path for loading `SubmissionValidator.dll`. If you don't specify this value, `SubmissionValidator.dll` loads from the same directory as `MakePkg.exe`. |
| `/updcompat 3` | Used with the `pack` command. The only supported value is 3, which uses subfile content update granularity. |
| `/pc` | Used with the `pack` command. Optional parameter that indicates that this is an MSIXVC package specifically targeting PC publishing. Packages produced with this flag can be deployed to, tested, or published for Windows 10 PCs only, not for Xbox consoles. |
| `/priorpackage <prior package file>` | Used with the `pack` command. Optional parameter that specifies the prior package file to optimize subfile content updates. Implies `/updcompat 3`. |
| `/gameos <gameos file>` | Used with the `pack` command. Optional parameter that specifies the GameOS file to embed in the package. If you don't use this parameter or specify a GameOS file, the `GameOs.xvd` file is required to be in the layout directory next to the executable. |
| `/storeid <storeId>` | Used with the `genid` command. Specifies the Store ID to use. |
| `/f <file name>` | Specifies an input file. When used with the `pack` or `validate` command, it specifies a mapping file. When used with the `appdata` command, it specifies the Application Manifest file. |
| `/d <content directory>` | Specifies the content directory. The specified directory (for example, `layout\image\loose` directory for your project) must contain a valid MicrosoftGame.config file. |
| `/pd <output directory>` | Specifies the output directory. |
| `/lk <lekbfile>` | Encrypts the package with a content license by using a specified ekb file. See the **genkey command** for more information. 
By default, `makepkg pack` encrypts the package by using a well-known encryption key recognized by all devkits for testing purposes. Both the `/lk` and `/l` switch override the default behavior. 
 
**NOTE:** When submitting a package to certification, you must use `/l` or `/lk` unless the Certification team directs you to do otherwise. |
| `/l` | Encrypts the package with a unique content license. Used with the `pack` command. 
By default, `makepkg pack` encrypts the package by using a well-known encryption key recognized by all devkits for testing purposes. Both the `/lk` and `/l` switch override the default behavior. 
 
**NOTE:** When submitting a package to certification, you must use `/l` or `/lk` unless the Certification team directs you to do otherwise. |
| `/maxencryptionfragments <integer>` | Used with the `pack` command. This option increases the reserved space for encryption fragment metadata. It's not necessary for most game packages, but packages that have a long history of updates or many small edits to large files might need to override this value. See [this sectionAuthorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/packaging-updates?view=gdk-2604#fragmentation) for more information before using this option. |
| `/contentid <ID>` | Optional parameter that specifies the content ID to which this package belongs. The ID is a GUID. If you don't present this parameter or specify it with a value of `00000000-0000-0000-0000-000000000000`, a stable GUID based upon the package family name is used. This parameter isn't necessary when you prepare builds for submission. It's used with the `pack` command. It's recommended that you don't specify this option or that you keep this option the same between different invocations of `makepkg` per game product, to enable calculation of update sizes using the [packageutil compare utility](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/packageutil?view=gdk-2604). |
| `/productid <ProductIDGUID>` | Optional parameter that specifies the product ID to which this package belongs. The ID is a GUID. If you don't present this parameter, the GUID is `00000000-0000-0000-0000-000000000000`. This parameter isn't necessary when you prepare builds for submission. It's used with the `pack` and `genid` commands. `ProductID` is to be included when you want to enumerate the DLC packages installed from burned discs, or when the system is running offline. |
| `/symbolpaths` | Allows specifying more paths for symbol resolution lookup during the symbol bundling. Specify the paths as a semicolon-delimited list. |
| `/skipsymbolbundling` | Specifies that the symbol-bundling step should be skipped. We don't recommend using this flag. |
| `/skipvalidation` | Specifies that the validation step is to be skipped. No Submission Validator log file is generated when this flag is used. Don't use this flag for builds that might be submitted to certification, but it can speed up local iteration times. |
| `/validationcritical` | Specifies that failures in Submission Validator are to be treated as critical failures for the MakePkg process. |
| `/validationlanguage` | Specifies another language for building the submission validator log file. Specify this language in the BCP-47 format and a second log file is produced in this target language if the string resources are available. The current supported languages are Japanese (ja-JP), Korean (ko-KR), and Simplified Chinese (zh-CN). |
| `/t` | Used with the `localize` command. Optional directory for converting the `Resources.pri` contents to an XML format. Viewing the contents of `Resources.pri` in an XML format is convenient for ensuring the contents of `Resources.pri` are what you expect. |
| `/resw` | Used with the `localize` command. Optional directory path relative to the root directory, which contains RESW files if they aren't present in the immediate root directory. |
| `/gc` | Used with the `localize` command. Optional path to the MicrosoftGame.config file if it isn't located at the base of the content directory or has a name other than MicrosoftGame.config. |
| `/v` | Enables verbose output to the console. |
| `/loggable` | Suppresses output containing control characters that aren't suitable for being written to a log file. For example, copy progress uses a rolling percentage in nonverbose mode that can bloat log files. |
| `/?` | Displays help. |

## Remarks

When you run `makepkg pack`, the process creates a binary package file known as an Xbox Virtual Container (XVC). XVCs for console use the file name extension `.xvc`, and XVCs for PC use the file name extension `.msixvc`. Along with the different extensions, the package name includes a suffix that distinguishes between Xbox One Family (`_x`) and Xbox Series X|S Family (`_xs`) packages.

When you run `makepkg pack` or `makepkg validate`, the process performs a set of validation tests. The time these tests take depends on the size of the title and the number of files.

The validation test results are logged to an XML file in the same output directory as the app package output. The log lists all the errors that you must correct for the title to pass validation. The validation tests check for common errors that historically lead to delays or rejections in the ingestion and certification process.

`makepkg` sets the following exit codes:

Expand table

| Exit code | Description |
| --- | --- |
| 0 | Success |
| 1 | Bad environment: kernel driver isn't installed; not running in an elevated command prompt |
| 2 | Invalid command line |
| 3 | Failed to build the output |

The process also logs more extensive information to `stderr`.

## See also

[Deployment package schema](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/atoc-deployment-schema?view=gdk-2604)

[Make package resource index (makepri.exe)](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepri?view=gdk-2604)

[MicrosoftGame.config](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-toc?view=gdk-2604)

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