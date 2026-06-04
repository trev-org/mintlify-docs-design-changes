---
author: sstulman
title: "Version Command"
description: "Describes how to use the Touch Adaptation Kit Command Line Tool's Version Command."
kindex:
- Touch Adaptation Kit Command Line Tool
- tak.exe (Touch Adaptation Kit)
- Version Command
ms.author: sstulman
ms.topic: article
ms.date: 05/13/2024
permissioned-type: public
---

# Version Command

The `version` command is used to display version information of the tool.

The following table shows the different options that are available for use with the `version` command.

| Options                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--short`              |  Only display the version number as output, excluding copyright, notice, and commit information. </br>Default: `false`. |

### Examples

Use the following code examples to display version information.
___
Display the current version information.

```
C:\>tak version
Microsoft Touch Adaptation Kit Command Line Tool version 11.0.0.0
Copyright (C) Microsoft Corporation. All rights reserved.

This software incorporates material from third parties.
Please run "tak notice" for complete details.
```

___
Display just the version number.

```
C:\>tak version --short
11.0.0.0
```

## See also

[Touch Adaptation Kit Command Line Tool (tak.exe)](game-streaming-tak-command-line.md)