---
author: M-Stahl
title: "Command Line Tool overview (tak.exe)"
description: "Describes how to create and validate touch control layouts. Enable streaming devices to acquire layouts from your Windows PC."
kindex:
- Command Line Tool (tak.exe)
- tak.exe (Touch Adaptation Kit)
ms.author: migonz
ms.topic: article
edited: '09/24/2021'
ms.date: '08/01/2022'
permissioned-type: public
---

# Touch Adaptation Kit Command Line Tool (tak.exe)

Use this article to create and validate touch control layouts by using the Touch Adaptation Kit (TAK).

## takxconfig.json and .takx files

The primary file types that the tak.exe command line tool operates on are the unpacked bundle configuration file (`takxconfig.json`) or a packaged bundle (`.takx`) file.
Depending on the command being run, one of these file types is always usable and represents the entire touch bundle. For backward compatibility and to make some inner loop scenarios easier, legacy arguments like `--layout-path` are still supported and will override content from `takxconfig.json`.

### Properties

`$schema` - _string_. JSON schema for a touch bundle config file. This should look similar to `https://raw.githubusercontent.com/microsoft/xbox-game-streaming-tools/main/touch-adaptation-kit/schemas/takxconfig/v1/takxconfig.json`, depending on the schema version that's selected.

`version` - _string_. Four part (for example, 1.0.0.0) version number for the bundle.

`versionName` - _string_, _optional_. Descriptive name of the version of the bundle.

`layouts` - _object_. Object defining the layouts option for the bundle. The `path` property within this specifies the relative path where the layouts are located.

`assets` - _object_, _optional_. Object defining the assets option for the bundle. The `path` property within this specifies the relative path where the assets are located.

`context` - _object_, _optional_. Object defining the context option for the bundle. The `path` property within this specifies the relative path where the context file is located.

`languages` - _object_, _optional_. Object defining the languages option for the bundle. The `items` property within this is an array that specifies the languages that are supported by the bundle.

### Samples

```json
{
  "$schema": "https://raw.githubusercontent.com/microsoft/xbox-game-streaming-tools/main/touch-adaptation-kit/schemas/takxconfig/v1/takxconfig.json",
  "layouts": {
    "path": "./layouts"
  },
  "assets": {
    "path": "./assets"
  },
  "context": {
    "path": "./context.json"
  },
  "languages": [
    "en",
    "en-US"
  ],
  "version": "2.0.0.0"
}
```

See [our GitHub](https://github.com/microsoft/xbox-game-streaming-tools/tree/main/touch-adaptation-kit/samples) for complete samples using the `takxconfig.json` file.

### Requirements

The version of the file is specified by the `$schema` attribute in the .json file. This specifies the specific set of properties that are available and enables IntelliSense in some editors.

The preceding properties are valid for the latest supported schema version. For older schema properties, see [our GitHub](https://github.com/microsoft/xbox-game-streaming-tools/tree/main/touch-adaptation-kit/schemas).

## Commands

Use the commands shown in the following table to ensure that touch controls work as intended when your title is played by using Xbox Game Streaming.

| Command                                                                 | Description                                                                                                      |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [create](game-streaming-tak-command-line-create-command.md)             | Create the source content of a touch adaptation bundle or add a layout to an existing one.                      |
| [convert](game-streaming-tak-command-line-convert-command.md)           | Convert a legacy layout set file into layout files that align with the latest format standards that our services support. |
| [license](game-streaming-tak-command-line-license-command.md)           | Display or accept the End User License Agreement (EULA) of the Touch Adaptation Kit Command Line Tool. |
| [notice](game-streaming-tak-command-line-notice-command.md)             | Display information about the third-party material incorporated in this software. |
| [pack](game-streaming-tak-command-line-pack-command.md)                 | Builds a touch adaptation bundle from a set of source content.                                                   |
| [serve](game-streaming-tak-command-line-serve-command.md)               | Provides a touch adaptation bundle so that a client application can download and use it.                         |
| [settings](game-streaming-tak-command-line-settings-command.md)         | View and set application settings. |
| [takx-version](game-streaming-tak-command-line-takx-version-command.md) | Determines the version of both the touch adaptation bundle and the maximum schema version of an included layout. |
| [unpack](game-streaming-tak-command-line-unpack-command.md)             | Unpacks an existing touch adaptation bundle into its component files.                                            |
| [verify](game-streaming-tak-command-line-verify-command.md)             | Verifies that the contents of the touch adaptation bundle are valid.                                             |
| [version](game-streaming-tak-command-line-version-command.md)           | Display version information about the Touch Adaptation Kit Command Line Tool. |

## Options

Use the information in the following table to apply the appropriate flags to all commands.

| Options              | Description                                                                                                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-v`, `--verbosity`  | Set the output verbosity of the command. The valid values for these flags are `Critical`, `Debug`, `Error`, `Information`, `None`, `Trace`, and `Warning`. The default verbosity is `Information`. |
| `--version`          | Show version information. |
| `--accept-license`   | Accept the license agreement of the application before running the command. Useful for automation. |
| `--reset-appId`      | Reset the Application ID that is associated with your machine. |
| `-?`, `-h`, `--help` | Show Help and usage information.                                                                                                                                                                   |

## See also

[Getting started with touch](../game-streaming-getting-started-with-touch.md)  
[Web Content test application (CTA)](../game-streaming-web-content-test-application.md)  
[How to get the TAK CLI](https://aka.ms/get-takcli)
