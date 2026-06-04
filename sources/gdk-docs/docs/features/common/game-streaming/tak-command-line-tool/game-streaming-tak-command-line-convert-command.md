---
author: sstulman
title: "Convert Command"
description: "Describes how to use the Touch Adaptation Kit Command Line Tool's Convert Command."
kindex:
- Touch Adaptation Kit Command Line Tool
- tak.exe (Touch Adaptation Kit)
- Convert Command
ms.author: sstulman
ms.topic: article
ms.date: 05/13/2024
permissioned-type: public
---

# Convert Command

The `convert` command is a tool that not only transforms legacy layout set files into component layouts, but also modernizes them to align with the latest format standards that our services support.

The following table shows the different options that are available for use with the `convert` command.

| Options                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--layout-set <layout-set>`              |  Layout set file to convert. This parameter is required. |
| `--out`</br>`--output-path <output-path>`              |  Path to the root layout directory to extract the component layouts into. This parameter is required. |

### Example

Use the following code example to convert a legacy layout set file.

```
C:\>tak convert --layout-set C:\tmp\convert-test\legacy-layout\legacy-layout.json --out C:\tmp\convert-test\converted-layout
Writing touch adaptation bundle contents to 'C:\tmp\convert-test\converted-layout'.
```

## See also

[Touch Adaptation Kit Command Line Tool (tak.exe)](game-streaming-tak-command-line.md)