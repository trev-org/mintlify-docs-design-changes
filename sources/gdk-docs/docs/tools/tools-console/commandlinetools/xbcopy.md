---
author: dmcmahon
title: "xbCopy (xbcopy.exe)"
description: "Differential file copy."
ms.assetid: b1f5a3c7-9e4f-4d2a-8e8b-6c7f1e9d0a3d
kindex:
- xbCopy (xbcopy.exe)
- xbcopy.exe
ms.author: dmcmahon
ms.topic: article
edited: '02/09/2024'
ms.date: '02/09/2024'
permissioned-type: public
---

# xbCopy (xbcopy.exe)  

Use this tool to perform differential file copy  to and from your development console. 

<table>
<tr><td><b>xbcopy</b> <i>source</i> <i>destination</i> [search_pattern[...]] [<i>options</i>] [/s[:]<i>levels</i>] [/X[:]<i>address[+&lt;accesskey>]</i>]</td></tr>
</table>

| Option | Description |
| ------ | ----------- |
| *source* | Source directory path |
| *destination* | Destination directory path |
| *search_pattern* | Specifies the file(s) to be copied or the search pattern(s) (wild characters * and ? are supported). If you don't specify this parameter * is used as the default value. Search patterns are seperated by a space and can include a link to a file e.g. xbcopy.exe c:\mysource xD:\console\path *.png *.txt specific_file.json |
| *options* | Specifies the options to use with the xbcopy command, including copy, modes, and logging options. |
| /s:[levels] | Copies files that are in a specified directory and all its subdirectories. Levels is and optional integer that specifies the subdirectory recursion depth. For example /s:1 processes only the specified directory  and the subdirectories one level below it. If /s is specified but levels isn't, all subdirectories are included.|
| /X[:]*address[+&lt;accesskey>]* | - Use this option to specify the host name or address (shown as **Tools IP** on the console) of a targeted console without changing the default console. For details about setting a host name for a console, see [Setting a host name for the console IP address](../../../gdk-dev/console-dev/dev-kits/settings/setting-a-hostname.md).<br/>- If you don't use this option, the default console (previously set by [Connect (xbconnect.exe)](xbconnect.md)) is used. <br/>- Use the *accesskey* string to provide access to a console only to those people who have the access key. <br/>- Set the access key by using the command **xbconfig accesskey=your-key**, and then restart your console to make the access key effective.<br/>- To access a console that's been configured with an access key, you must include a plus sign (+) and the access key after the IP address or host name of the console.<br/>- If an access key is provided when the default console is set by [xbconnect](xbconnect.md), the access key is stored as part of the default console's address.<br/>- For more information about access keys, see [xbconfig accesskey](xbconfig.md). |
| /LC | Specify the locale code. Used to overide the default locale code |

### Copy modes ###

Copy modes are mutually exclusive, only one can be specified for each copy operation. If no copy mode is specified the tool will check if the files were modified or not, only modified files will be considered for the the copy operation.


| Option | Description | Filter Support | Search pattern support|
| ------ | ----------- | ------ | ----------- |
|/list |Enumerates or list all the files that will be copied, this works as a copy preview.|Yes|Yes|
|/overwrite |If selected the tool will not check if the files are being modified, so all files while be overwritten.|Yes |Yes| 
|/mirror| Deletes destination files and directories that no longer exist in the source. If this mode is specified, search patterns and filter options cannot be specified.|No|No|

### Filter options ###

These options allows the user to specify which files and directories are going to be part of the copy through filters. The tool allows offers two types of filters:

 - On-shell command filters (/exd, /exf/ /ina, and /exa).
 - JSON file filters (/rules)

| Option | Description |
| ------- | ------- |
|/exf [<i>file-name</i>] […] | Excludes files that match the specified names or paths. Wildcard characters * and ? are supported. For example: <i>xbcopy src dst /s /exf *.png *.data</i> will exclude all files with png and data extensions.|
|/exd [<i>directory-name</i>] […] | Excludes directories that match the specified names and paths. Wildcard characters * and ? are supported. For example: <i>xbcopy src dst /s /exd *assets*</i> will exclude any directory that contains the word assets on its name from being copy.|
|/ina:[R][A][S][H] |Include only files for which any of the specified attributes are set. Supported include valid options are <i>R</i> (Read only), <i>A</i> (Archive), <i>S</i> (System), and <i>H</i> (Hidden) |
|/exa:[R][A][S][H] | Exclude files for which any of the specified attributes are set. Supported exclude valid options are <i>R</i> (Read only), <i>A</i> (Archive), <i>S</i> (System), and <i>H</i> (Hidden) |
|/rules:[<i>file_name</i>]| Specify a JSON file that provides more powerful exclude/include file/directory filtering capabilities that the ones provided by the on-shell command parameters. For more information about the file format please look at the [JSON Rule file format](#json-rule-file-format) section.|


### Logging options ###

xbCopy provides the following logging options:

| Option | Description |
| ------- | ------- |
| /nlh | Do not include the header into the logging |
| /nlc | Do not include the file column titles into the logging |
| /nlsi | Do not include the file size into the logging |
| /nlst | Do not include the file copy status into the logging |
| /nlsu | Do not include the summary into the logging |
| /nlp | Do not include copy progress into the logging |
| /nlf | Do not include file names into the logging |

### JSON rule file format ###
This file is made up two arrays of JSON rule objects. You could specify one or both depending on your needs.
One array contains the rules to specify which files or directories are going to be excluded from the copy operation while the other array contains the rules to specify which files or directories are going to be included.

Things to consider:

- A file or directory to be excluded or included must match at least one of the rules in each array respectively.
- If a given directory is excluded all its subdirectories are excluded as well.
- If no include rules are specified then all files and directories will be part of the copy, unless they match one of the exclude rules.
- Exclude rules take precedence so if a file or directory matches both an include and an exclude rule, it will be excluded.
- Within an array, rules are applied in order. That means that the ones that you define first on the array are the ones that are checked first.

Below you can see the general syntax format of the JSON rule file:
```
{
        "ExcludeRules" : [rule_1, rule_2, rule_3, …, rule_N],
        "IncludeRules"  : [rule_1, rule_2, rule_3, …, rule_N]
}
```
#### Rule Format ####

Rule objects are made up at least two attributes, a search pattern (wildcard or a regex), and ApplyTo. Path attribute is optional. Below you could find a description for each of the attributes.

| Attribute | Description | Required (see remarks)|
| ------- | ------- |------- |
| "Wildcard" | Specifies a wild character search pattern, that a file or directory must match to be consider included or excluded depending on where the rule is placed. Only * and ? are supported as part of the wild character search pattern. | Yes |
| "Regex" | Specifies a regex search pattern, that a file or directory must match to be consider included or excluded depending on where the rule is placed. |Yes |
| "ApplyTo" | Specifies the rule scope, in other words if the rule will be applied to only files, only directories, or both. Valid Values are "File", "Directory", or "Both"| Yes |
| "Path" | Specifies over what the search pattern will be applied, it could be the full path, the relative path or the single name. If this parameter is not provided then full path is assumed. Valid values are "Full", "Relative", or "Name" |No |


> Note: Wildcard and Regex attributes cannot be used simultaneously on the same rule, you could specify just one at a time per rule. Be careful while defining and positioning the rule, particularly if there is overlap between them.

### JSON rule file examples ###

#### Example 1: A rule file format to exclude files and directories. ####

The file below will:
 - Excludes files with extension .xml and .exe
 - Excludes any directory whose name is equal to "assets"
```
{
        "ExcludeRules" : 
        [
                {
                        "Wildcard" : "*.xml",
                        "ApplyTo"  : "File"
                },
                {
                        "Wildcard" : "assets",
                        "ApplyTo"  : "Directory", 
                        "Path"        : "Name"
                },
                {
                        "Regex"      : "^.*\\.exe$",
                        "ApplyTo"  : "File",
                        "Path"        : "Name"
                }
        ],

        "IncludeRules" : []
}
```

#### Example 2: A rule file format to specify which files and directories must be copied. ####

This rule file format will only copy files with extensions .exe and .data
```
{
        "ExcludeRules" : [],
        "IncludeRules" : 
        [
                {
                        "Wildcard" : "*.exe",
                        "ApplyTo"  : "File"
                },
                {
                        "Wildcard" : "*.data",
                        "ApplyTo"  : "File"
                }
        ]
}
```

### xbCopy examples ###

| Example | Description |
| ------ | ------ |
|xbcopy c:\mysource xD:\Some\RemoteFolder *.png /s | Single search pattern and all sub-directories|
|xbcopy c:\mysource xD:\Some\RemoteFolder *.png /s:2 | Single search pattern and two sub-directories deep|
|xbcopy c:\mysource xD:\Some\RemoteFolder *.png *.txt *.log /s| Multiple search patterns |
|xbcopy c:\mysource xD:\Some\RemoteFolder /exd *data*| Single exclude directory |
|xbcopy c:\mysource xD:\Some\RemoteFolder /s /exd *data* *bin* | Multiple exclude directories |
|xbcopy c:\mysource xD:\Some\RemoteFolder /s /exf *.xml| Single exclude file filter|
|xbcopy c:\mysource xD:\Some\RemoteFolder /s /exf specific_file.ext *.mp?| Multiple exclude files |
|xbcopy c:\mysource xD:\Some\RemoteFolder /s /rules:filter.json| Apply filter by using a json rule file |
|xbcopy c:\mysource xD:\Some\RemoteFolder /s /rules:filter.json /list | Apply the list copy mode to preview the copy|


<a id="ID4EJE"></a>
  
## See also  

[Command-line tools](commandlinetools.md)

[File Copy](xbcp.md)

[XTF transport errors](xtf-transport-errors.md)  