---
author: sstulman
title: "License Command"
description: "Describes how to use the Touch Adaptation Kit Command Line Tool's License Command."
kindex:
- Touch Adaptation Kit Command Line Tool
- tak.exe (Touch Adaptation Kit)
- License Command
ms.author: sstulman
ms.topic: article
ms.date: 05/10/2024
permissioned-type: public
---

# License Command

The `license` command is used to display or accept the End User License Agreement (EULA) of the Touch Adaptation Kit Command Line Tool.

In order to use the Touch adaptation Kit Command Line Tool, this license agreement must be accepted.

The following table shows the different options that are available for use with the `license` command.

| Options                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-a`<br />`--action <Accept\|Check\|Decline\|Display>`              |  Action to perform on the license.<br/>Default: `Display` |
| `--language <language>`                | Optional IETF language tag for a language to use for displaying the application's license agreement. Supports `ja-JP`, `ko-KR`, and `zh-CN`. Any other value or none specified will default to using English (`en-US`). |
| `--accept-license`            | This is a [global option](game-streaming-tak-command-line.md#options) that can be used with [any of the commands](game-streaming-tak-command-line.md#commands) that this product offers in order to automatically accept the license agreement. This is useful in CI environments and automation. |

### Examples

Use the following code examples to display or accept the End User License Agreement (EULA) of the Touch Adaptation Kit Command Line Tool.
___
View the End User License Agreenment (EULA).

```
C:\>tak license
MICROSOFT SOFTWARE LICENSE TERMS
MICROSOFT TOUCH ADAPTATION KIT COMMAND LINE TOOL

...
```
___
Accept the End User License Agreement (EULA) with the `--action` option.

```
C:\>tak license --action Accept
```
___
View the End User License Agreement (EULA) in another language.

```
C:\>tak license --language ja-JP
MICROSOFT ソフトウェア ライセンス条項
MICROSOFT TOUCH ADAPTATION KIT COMMAND LINE TOOL

...
```

## See also

[Touch Adaptation Kit Command Line Tool (tak.exe)](game-streaming-tak-command-line.md)