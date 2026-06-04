---
author: M-Stahl
title: "Verify Command"
description: "Describes how to use the Touch Adaptation Kit Command Line Tool's Verify Command."
kindex:
- Touch Adaptation Kit Command Line Tool
- tak.exe (Touch Adaptation Kit)
- Verify Command
ms.author: migonz
ms.topic: article
edited: 11/28/2022
ms.date: 11/28/2022
permissioned-type: public
---

# Verify command

Use the `verify` command to verify that the contents of the touch adaptation bundle are valid with the options shown in the following table.

| Options                                         | Description                                                                                                                                                                                                                         |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--takx`<br/>`--takx-file <takx-file>`          | Path to the touch adaptation bundle that you want to verify. This parameter is required.                                                                                                                                            |
| `--log`<br/>`--log-file`<br/>`--out <log-file>` | Path to a file that you want to write the verification results into. This parameter is required.                                                                                                                                    |
| `--default-layout <default-layout>`             | Set the name of the expected default layout. If this parameter is provided, a verification error is raised if the default layout isn't the same as the provided layout name.                                                        |
| `--layout-version <layout-version>`             | Specify the semantic version with which every layout in the touch adaptation bundle must be compatible. If this parameter isn't specified, the only verification that's required is for all layouts to have a valid schema version. |
| `--manifest-version <manifest-version>`         | Specify the semantic version with which the manifest schema version must be compatible. If this parameter isn't specified, the only verification that's required is for the manifest to have a valid schema version.                |

### Bundle Verification Levels

The verify command (and the verification stage of the `pack` and `serve` commands) informs the caller of any issues with the touch adaptation bundle. This verification process employs the following classification of issues to help guide the developer towards a fully functioning bundle.

#### Error

Errors in verification mean that something is wrong with the bundle. It is extremely likely that loading the bundle will fail. Examples of this include items like incorrect or unparsable JSON, missing assets, or missing the `neutral` language. Any errors will block the `pack` and `serve` commands unless the `--no-verify` option is used.

#### Warning

Verification warnings are items that signal possible problems with the bundle but do not block the `pack` or `serve` commands. For example, assets that are in the bundle but not referenced by any layout will produce warnings as this could indicate that the developer has inadvertently included unreleased assets but could also indicate that the developer is in the process of testing out new assets and hasn't built all of the layouts yet or needs to update the `allowedStateValues` block.

> [!NOTE]
> Warnings will block the ability for your Microsoft Account Representative to submit the bundle.

### Examples

Use the following code example to verify a touch adaptation bundle's validity.

___
Verify a touch adaptation bundle and have no errors

```
C:\>tak verify --takx-file C:\tmp\MyGameLayouts.takx
Verifying touch adaptation bundle 'C:\tmp\MyGameLayout.takx'.
Verification complete. 0 error(s) and 0 warning(s) found.
```

___
Verify a touch adaptation bundle and specify an expected default layout and have an error when the default layout isn't present

```
C:\>tak verify --takx-file C:\tmp\MyGameLayouts.takx  --default-layout initialLayout
Verifying touch adaptation bundle 'C:\tmp\MyGameLayout.takx'.
ERROR: takxmanifest.json(1): error : Actual default layout 'menu_ui' isn't the expected default layout 'initialLayout'.
Verification complete. 1 error(s) and 0 warning(s) found.
```

## See also

[Touch Adaptation Kit Command Line Tool (tak.exe)](game-streaming-tak-command-line.md)