---
author: M-Stahl
title: "Unpack Command"
description: "Describes how to use the Touch Adaptation Kit Command Line Tool's Unpack Command."
kindex:
- Touch Adaptation Kit Command Line Tool
- tak.exe (Touch Adaptation Kit)
- Unpack Command
ms.author: migonz
ms.topic: article
edited: 11/28/2022
ms.date: 11/28/2022
permissioned-type: public
---

# Unpack Command

Use the `unpack` command to unpack a touch adaptation bundle into its component files with the options shown in the following table.

| Options                                   | Description                                                                              |
| ----------------------------------------- | ---------------------------------------------------------------------------------------- |
| `--takx`<br/>`--takx-file <takx-file>`    | Path to the touch adaptation bundle that you want to unpack. This parameter is required. |
| `--out`<br/>`--output-path <output-path>` | Path to a directory that you want to unpack the bundle into. This parameter is required. |

### Example

Use the following code example to unpack a bundle into its component files.

```
C:\>tak unpack --takx-file C:\tmp\MyGameLayouts.takx --output-path C:\tmp\MyGameLayout
Writing touch adaptation bundle contents to 'C:\tmp\MyGameLayout'.
```

## See also

[Touch Adaptation Kit Command Line Tool (tak.exe)](game-streaming-tak-command-line.md)