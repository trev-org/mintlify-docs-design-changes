---
author: sstulman
title: "Settings Command"
description: "Describes how to use the Touch Adaptation Kit Command Line Tool's Settings Command."
kindex:
- Touch Adaptation Kit Command Line Tool
- tak.exe (Touch Adaptation Kit)
- Settings Command
ms.author: sstulman
ms.topic: article
ms.date: 05/10/2024
permissioned-type: public
---

# Settings Command

The `settings` command is used to view and set application settings.

The following table shows the different options that are available for use with the `settings` command.

| Options                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--telemetry-level <All\|Error\|Off>`              |  Set the telemetry collection level of the application. |

### Examples

Use the following code examples to view or set the application settings.
___
View the current application settings.

```
C:\>tak settings
Current Settings:
Telemetry Level - All
```

___
Turn off telemetry in the application.

```
C:\>tak settings --telemetry-level Off
Updated '--telemetry-level' setting from 'All' to 'Off'.
Current Settings:
Telemetry Level - Off
```

## See also

[Touch Adaptation Kit Command Line Tool (tak.exe)](game-streaming-tak-command-line.md)