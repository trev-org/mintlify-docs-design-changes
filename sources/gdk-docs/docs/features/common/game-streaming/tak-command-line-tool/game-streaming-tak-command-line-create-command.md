---
author: M-Stahl
title: "Create Command overview"
description: "Describes how to use the Touch Adaptation Kit Command Line Tool's Create Command."
kindex:
- Touch Adaptation Kit Command Line Tool
- tak.exe (Touch Adaptation Kit)
- Create Command
ms.author: niadibpo
ms.topic: article
edited: 11/28/2022
ms.date: 11/28/2022
permissioned-type: public
---

# Create Command

The `create` command is used to create the source content of a touch adaptation bundle (or unpacked bundle for short), or add new layouts to an existing unpacked bundle. 
This is a quick entry point for getting started with adding touch adaptation to a game.

The following table shows the different sub commands that are available to use with the `create` command. Note that the `create` command cannot be used by itself and a sub command must be provided.

| Sub-commands               | Description                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------- |
| [`bundle`](#create-bundle) | Creates a new unpacked touch adaptation bundle for development                           |
| [`layout`](#create-layout) | Creates a new layout based on a template in an existing unpacked touch adaptation bundle |

<a id="create-bundle"></a>

## Create Bundle

The `create bundle` sub command provides a quick creation of all the source content required for a new touch adaptation bundle. It is a starting point to touch adaptation if an existing unpacked bundle does not exist for a game.

It creates all the directories and files necessary to get started with a new bundle. This includes the root [layouts](../game-streaming-touch-touch-adaptation-bundle.md#layouts) directory which contains the JSON layout files for different languages, the root [assets](../game-streaming-touch-touch-adaptation-bundle.md#assets) directory which contains the assets for various DPIs per language, the root bundle [configuration](../game-streaming-touch-touch-adaptation-bundle.md#configuration) file (`takxconfig.json`) that describes the bundle, and an empty [context](../game-streaming-touch-touch-adaptation-bundle.md#context) file for dynamic layout state and reusable layout definitions.

<a id="create-bundle-options"></a>

### Options

Use the options in the following table to configure the creation of an unpacked touch adaptation bundle.

| Options                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--destination`<br/>`--name`                                   | REQUIRED. Destination path to place the unpacked bundle. This can be a simple name or a full path.<br/> [!NOTE] If any files or directories exist in the destination, the `--overwrite-destination` option must be used to delete them first.<br/> [!NOTE] If a simple name is used instead of a path, the current working directory will contain the created bundle. |
| `--layouts-directory-name`<br/>`--layouts-dir`<br/>`--layouts` | Name of the subdirectory to store the touch control layouts. This is the root layouts directory.<br/>Default: `layouts`.                                                                                                                                                                                                                                                                                         |
| `--assets-directory-name`<br/>`--assets-dir`<br/>`--assets`    | Name of the subdirectory to store the touch control assets. This is the root assets directory.<br/>Default: `assets`.                                                                                                                                                                                                                                                                                            |
| `--layout-languages`                                           | List of IETF language tags to use for language directory creation under the root layouts directory. `neutral` will always get created.<br/>Default: empty list.                                                                                                                                                                                                                                                  |
| `--asset-languages`                                            | List of IETF language tags to use for language directory creation under the root assets directory. `neutral` will always get created.<br/>Default: empty list.                                                                                                                                                                                                                                                   |
| `--version`                                                    | Content version for the bundle.<br/>Default: `1.0.0.0`.                                                                                                                                                                                                                                                                                                                                                          |
| `--version-name`                                               | Name of the content version for the bundle.<br/>Default: Empty string.                                                                                                                                                                                                                                                                                                                                           |
| `--context-file-name`<br/>`--context-file`<br/>`--context`     | Name of the context file for the bundle.<br/>Default: `context.json`.                                                                                                                                                                                                                                                                                                                                            |
| `--templates`                                                  | List of one or more template layouts to add to the bundle upon creation. The templates are always added to the `neutral` layout language directory, as well as any language directories corresponding to languages specified in `--layout-languages`.<br/>[View list of available templates.](game-streaming-tak-command-line-templates.md)<br/>Default: `Blank`.                                                |
| `--no-templates`                                               | Do not add any templates to the bundle. Cannot be used if `--templates` is specified.<br/>Default: `false`.                                                                                                                                                                                                                                                                                                      |
| `--overwrite-destination`<br/>`--overwrite`                    | Deletes any previous content in the destination. This is REQUIRED if the destination is not empty.<br/>Default: `false`.                                                                                                                                                                                                                                                                                         |

<a id="create-bundle-examples"></a>

### Examples

The following examples demonstrate how to create a new unpacked touch adaptation bundle.

___
Create a simple new unpacked bundle with the default blank template

```
D:\CreateBundleExamples> tak create bundle --name SampleBundle
Creating loose touch adaptation bundle 'SampleBundle'.
Creating bundle config file.
Creating layouts and assets directories.
Creating language directories.
Creating context file.
Added 1 templates to bundle.
Created loose touch adaptation bundle at 'D:\CreateBundleExamples\SampleBundle'.
```
Output:
```
D:.
└───CreateBundleExamples
    └───SampleBundle
        │   context.json
        │   takxconfig.json
        │
        ├───assets
        │   └───neutral
        │       ├───@1.0x
        │       ├───@1.5x
        │       ├───@2.0x
        │       ├───@3.0x
        │       └───@4.0x
        └───layouts
            └───neutral
                    blank.json
```

___
Create a new bundle in a different drive, with some layout languages, templates, and custom directory names

```
C:\> tak create bundle --destination D:\CreateBundleExamples\SomeFolder\AnotherFolder\SampleBundle --layout-languages fr fr-FR en-US --templates Menu Cinematic RacingBasic RacingAdvanced --layouts-dir touch-control-layouts --assets-dir touch-control-assets --context-file touch-control-context
Creating loose touch adaptation bundle 'SampleBundle'.
Creating bundle config file.
Creating layouts and assets directories.
Creating language directories.
Creating context file.
Added 4 templates to bundle.
Created loose touch adaptation bundle at 'D:\CreateBundleExamples\SomeFolder\AnotherFolder\SampleBundle'.
```

Output:
```
D:.
└───CreateBundleExamples
    └───SomeFolder
        └───AnotherFolder
            └───SampleBundle
                │   takxconfig.json
                │   touch-control-context.json
                │
                ├───touch-control-assets
                │   └───neutral
                │       ├───@1.0x
                │       ├───@1.5x
                │       ├───@2.0x
                │       ├───@3.0x
                │       └───@4.0x
                └───touch-control-layouts
                    ├───en
                    │   └───en-US
                    │           cinematic.json
                    │           menu.json
                    │           racing-advanced.json
                    │           racing-basic.json
                    │
                    ├───fr
                    │   │   cinematic.json
                    │   │   menu.json
                    │   │   racing-advanced.json
                    │   │   racing-basic.json
                    │   │
                    │   └───fr-FR
                    │           cinematic.json
                    │           menu.json
                    │           racing-advanced.json
                    │           racing-basic.json
                    │
                    └───neutral
                            cinematic.json
                            menu.json
                            racing-advanced.json
                            racing-basic.json
```
> [!NOTE]
> In the command, specifying both 'fr' and 'fr-FR' with the --layout-languages option results in templates being added to each corresponding directory. However, as only 'en-US' is specified, templates are added exclusively to the 'en-US' directory and not to the parent 'en' directory. Templates are consistently added to the neutral directory regardless of these specifications.

The bundle configuration file (`takxconfig.json`) produced will reflect a configuration representing the paramters passed to the `create bundle` command.
```json
{
  "$schema": "https://raw.githubusercontent.com/microsoft/xbox-game-streaming-tools/main/touch-adaptation-kit/schemas/takxconfig/v1/takxconfig.json",
  "layouts": {
    "path": "touch-control-layouts"
  },
  "assets": {
    "path": "touch-control-assets"
  },
  "context": {
    "path": "touch-control-context.json"
  },
  "version": "1.0.0.0",
  "versionName": "Initial"
}
```

___

<a id="create-layout"></a>

## Create Layout

The `create layout` sub command enables adding a new layout to an existing unpacked bundle. The output produced by [`create bundle`](#create-bundle) can be used as the input for the `create layout` by providing the `takxconfig.json` file created at the root of the unpacked bundle as the value for the `--takx-config-file` option.

Similar to [`create bundle`](#create-bundle), a template can be used for layout creation in this command, or default to `Blank`. Adding layouts to multiple layout language directories is also supported, and the same rules regarding the file not existing or `--overwrite` being required also apply.

<a id="create-layout-options"></a>

### Options

Use the options in the following table to configure the creation of a layout in an unpacked touch adaptation bundle.

| Option                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--takx-config-file`<br/>`--takxconfig` | REQUIRED. Path to the bundle configuration file. Must be named `takxconfig.json`.                                                                                                                                                                                                                                                                                                                                                            |
| `--name`                                | Name of the layout. This will also be its file name.<br/>It is recommended that layouts are named as they best fit the game.<br/>Default: name of the template used (e.g., `shooter-basic.json`).                                                                                                                                                                                                                           |
| `--languages`                           | List of IETF language tags for which the layout should be added. The layout will always get added to the `neutral` layout language directory regardless of the value passed here. If a language tag is specified here while no matching directory is found for it under the root layouts directory, the directory(s) will get created.<br/>Default: empty list.                                                                              |
| `--all-languages`<br/>`--all`           | Create the layout in all language subdirectories found under the root layouts directory specified in the bundle configuration file (`takxconfig.json`).<br/>Cannot be set to `true` when `--languages` is specified.<br/>Default: `false`                                                                                                                                                                                                    |
| `--template`                            | Template to use for the layout.<br/>[View list of available templates.](game-streaming-tak-command-line-templates.md)<br/>Default: `Blank`                                                                                                                                                                                                                                                                                                   |
| `--overwrite`                           | Overwrite any existing layout files with the same name.<br/>This is REQUIRED if any language subdirectories under the root layouts directory contain JSON files with the same name. For example, if `--name` is `test`, `--languages` is set to `en-US`, and the `en-US` directory does not contains a file named `test.json` while `neutral` does, the command will not execute without `--overwrite` being specified.<br/>Default: `false` |
| `--set-default`<br/>`--default`         | Set the layout created as the default layout in the bundle configuration file (`takxconfig.json`).<br/>Default: `false`                                                                                                                                                                                                                                                                                                                      |

<a id="create-layout-examples"></a>

### Examples

The following examples demonstrate how to create a new layout in an existing unpacked touch adaptation bundle.

___
Create a simple new layout using the default `Blank` template.
```
D:\CreateLayoutExamples\SampleBundle> tak create layout --name sample-layout --takxconfig .\takxconfig.json
Verifying bundle configuration file (takxconfig.json).
Verification complete. 0 error(s), 0 warning(s) and 0 note(s) found.
Created layout 'sample-layout' using template 'Blank' in 1 directories.
```
Output:
```
D:.
└───CreateLayoutExample
    └───SampleBundle
        │   context.json
        │   takxconfig.json
        │
        └───layouts
            └───neutral
                    sample-layout.json
```
___
Create a new layout using a specific template for several languages in the bundle.
```
D:\CreateLayoutExamples> tak create layout --takxconfig .\SampleBundle\takxconfig.json --template ShooterBasic --languages ja-JP en en-US
Verifying bundle configuration file (takxconfig.json).
Verification complete. 0 error(s), 0 warning(s) and 0 note(s) found.
WARNING: A language directory for 'ja-JP' does not exist under the root layouts directory. It will be created, as well as any relevant parenting directories if applicable to the language.
WARNING: A language directory for 'en' does not exist under the root layouts directory. It will be created, as well as any relevant parenting directories if applicable to the language.
WARNING: A language directory for 'en-US' does not exist under the root layouts directory. It will be created, as well as any relevant parenting directories if applicable to the language.
Created layout 'shooter-basic' using template 'ShooterBasic' in 4 directories.
```
Output:
```
D:.
└───CreateLayoutExample
    └───SampleBundle
        │   context.json
        │   takxconfig.json
        │
        └───layouts
            ├───en
            │   │   shooter-basic.json
            │   │
            │   └───en-US
            │           shooter-basic.json
            │
            ├───ja
            │   └───ja-JP
            │           shooter-basic.json
            │
            └───neutral
                    shooter-basic.json
```
> [!NOTE]
> The layout was established in the 'en' directory but not in the 'ja' directory, as the former was the only one specified for the '--languages' parameter.

___
Create a new layout for all languages
```
D:\CreateLayoutExamples> tak create layout --takxconfig .\SampleBundle\takxconfig.json --all-languages
Verifying bundle configuration file (takxconfig.json).
Verification complete. 0 error(s), 0 warning(s) and 0 note(s) found.
Created layout 'blank' using template 'Blank' in 5 directories.
```
Output:
```
D:.
└───SampleBundle
    │   context.json
    │   takxconfig.json
    │
    └───layouts
        ├───en
        │   │   blank.json
        │   │   shooter-basic.json
        │   │
        │   └───en-US
        │           blank.json
        │           shooter-basic.json
        │
        ├───ja
        │   │   blank.json
        │   │
        │   └───ja-JP
        │           blank.json
        │           shooter-basic.json
        │
        └───neutral
                blank.json
                shooter-basic.json
```

___

## See also

[Touch Adaptation Kit Command Line Tool (tak.exe)](game-streaming-tak-command-line.md)
