---
author: M-Stahl
title: "Takx Version Command"
description: "Describes how to Touch Adaptation Kit Command Line Tool's Takx Version Command."
kindex:
- Touch Adaptation Kit Command Line Tool
- tak.exe (Touch Adaptation Kit)
- Takx Version Command
ms.author: migonz
ms.topic: article
edited: 11/28/2022
ms.date: 11/28/2022
permissioned-type: public
---

# Takx Version Command

Use the `takx-version` command to determine the schema versions of the touch adaptation bundle, and the highest schema version of the layouts that are included.

The following table shows the required options for determining the schema versions.

| Options                                 | Description                                                                                      |
| --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `--takx`<br />`--takx-file <takx-file>` | Path to the touch adaptation bundle to determine the schema version. This parameter is required. |

### Example

Use the following code example to determine the schema versions of the touch adaptation bundle.

```
C:\>tak takx-version --takx-file C:\tmp\MyGameLayouts.takx
Version information for 'MyGameLayouts.takx':
  Version: 1.1.0.0
  Version Name: DLC 1
```

## See also

[Touch Adaptation Kit Command Line Tool (tak.exe)](game-streaming-tak-command-line.md)