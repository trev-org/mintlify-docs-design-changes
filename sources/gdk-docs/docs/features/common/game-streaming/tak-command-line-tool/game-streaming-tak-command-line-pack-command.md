---
author: M-Stahl
title: "Pack Command"
description: "Describes how to use the Touch Adaptation Kit Command Line Tool's Pack Command."
kindex:
- Touch Adaptation Kit Command Line Tool
- tak.exe (Touch Adaptation Kit)
- Pack Command
ms.author: migonz
ms.topic: article
edited: 11/28/2022
ms.date: 11/28/2022
permissioned-type: public
---

# Pack Command

The `pack` command is used to package the layouts into a touch adaptation bundle (takx).

This bundle is available for local testing via the [serve](game-streaming-tak-command-line-serve-command.md) command, or submitted by your Microsoft Account Representative for users via Xbox Game Streaming.

The following table shows the different options that are available for use with the `pack` command.

| Options                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--layout-path <layout-path>`              | Path to the root layout directory that you want to include in the bundle. This parameter is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--out`<br />`--output-path <output-path>` | Specifies the output file for the packaged Touch Adaptation Bundle. Normally a .takx file. This parameter is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--asset-path <asset-path>`                | Path to the root asset directory that you want to include in the bundle. If the bundle has no assets, this parameter isn't required.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--context file <context-file>`            | Path to the context file that you want to include in the bundle. If the bundle has no context, this parameter isn't required.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--default-layout <default-layout>`        | Name of the default layout. This should match the name of one of the files in the layout path.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--version <version>`                      | Content version of the touch adaptation bundle such as 1.0.0.0. Each touch adaptation bundle submitted to Microsoft for a title must have a semantically larger version number than any prior touch adaptation bundle that has been submitted. The [takx-version](game-streaming-tak-command-line-takx-version-command.md) command may be used to examine the version of an existing bundle. The version number of the touch adaptation bundle in use while a game is being streamed may be obtained by calling [XGameStreamingGetTouchBundleVersion](../../../../reference/system/xgamestreaming/functions/xgamestreaminggettouchbundleversion.md) |
| `--version-name <version-name>`            | Name of the content version of the touch adaptation bundle such as "DLC 1". Unlike the version number, the version name is optional and there are no requirements placed on its format. The [takx-version](game-streaming-tak-command-line-takx-version-command.md) command may be used to examine the version of an existing bundle. The version name of the touch adaptation bundle in use while a game is being streamed may be obtained by calling [XGameStreamingGetTouchBundleVersion](../../../../reference/system/xgamestreaming/functions/xgamestreaminggettouchbundleversion.md)                                                          |
| `--no-asset-optimization`                  | Ensures that the assets for efficient storage and communication aren't optimized. If set, the assets aren't modified.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--no-verify`                              | Ensures that the produced touch adaptation bundle is valid and isn't verified.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--language <language>`                    | IETF language tag of a language that you want to include in the produced bundle. If this parameter is specified multiple times, all the provided languages are included. If the parameter isn't specified, all layouts and assets that are found in the source directory are included in the bundle.                                                                                                                                                                                                                                                        |

### Examples

Use the following code example to package the layouts in a touch adaptation bundle.

___
Pack all the layouts in the layout-path into a single touch adaptation bundle with version of 1.0.0.0

```
C:\>tak pack --layout-path C:\tmp\layouts --out C:\tmp\MyGameLayouts.takx --version 1.0.0.0
Building touch adaptation bundle 'C:\tmp\MyGameLayouts.takx'
Verifying touch adaptation bundle 'C:\tmp\MyGameLayouts.takx'.
Verification complete. 0 error(s) and 0 warning(s) found.
```

___
Pack all the layouts in the layout-path into a single touch adaptation bundle. Set the layout `introLayout` as the one that will be presented to users before a specific layout request is made by the game

```
C:\>tak pack --layout-path C:\tmp\layouts --out C:\tmp\MyGameLayouts.takx --default-layout introLayout
Building touch adaptation bundle 'C:\tmp\MyGameLayouts.takx'
Verifying touch adaptation bundle 'C:\tmp\MyGameLayouts.takx'.
Verification complete. 0 error(s) and 0 warning(s) found.
```

___
Pack only the en-us layouts in the layout-path into a single touch adaptation bundle without any asset optimization

```
C:\>tak pack --layout-path C:\tmp\layouts --out C:\tmp\MyGameLayouts.takx --language en-us --no-asset-optimization
Building touch adaptation bundle 'C:\tmp\MyGameLayouts.takx'
Verifying touch adaptation bundle 'C:\tmp\MyGameLayouts.takx'.
Verification complete. 0 error(s) and 0 warning(s) found.
```

___
Pack only the en-us and es-us layouts in the layout-path into a single touch adaptation bundle.

```
C:\>tak pack --layout-path C:\tmp\layouts --out C:\tmp\MyGameLayouts.takx --language en-us --language es-us
Building touch adaptation bundle 'C:\tmp\MyGameLayouts.takx'
Verifying touch adaptation bundle 'C:\tmp\MyGameLayouts.takx'.
Verification complete. 0 error(s) and 0 warning(s) found.
```

___

## See also

[Touch Adaptation Kit Command Line Tool (tak.exe)](game-streaming-tak-command-line.md)
