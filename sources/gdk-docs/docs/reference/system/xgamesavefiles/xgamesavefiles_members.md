---
author: M-Stahl
title: "XGameSaveFiles (API contents)"
description: "Reference material for XGameSaveFiles APIs."
kindex: XGameSaveFiles
ms.topic: article
edited: 06/04/2019
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameSaveFiles  

XGameSaveFiles is a set of APIs that enable reading and writing data on behalf of a user / game to be persisted across game sessions and seamlessly synced with the cloud to be used across multiple devices.  

This is a variation of the XGameSave API designed to be used with Simple File based access once the gamesave path is retrieved.  
  
  
## Functions  
  
| Function | Description |  
| --- | --- |  
| [XGameSaveFilesGetFolderWithUiAsync](functions/xgamesavefilesgetfolderwithuiasync.md) | Returns a folder that can be used to contain directories and files for storage. |  
| [XGameSaveFilesGetFolderWithUiResult](functions/xgamesavefilesgetfolderwithuiresult.md) | Returns a folder that can be used to contain directories and files for storage in the cloud. |  
| [XGameSaveFilesGetRemainingQuota](functions/xgamesavefilesgetremainingquota.md) | Returns the amount of data available to store save data using the XGameSaveFiles API. |  
  
  
## See also  
[System API reference](../gc-reference-system-toc.md)  
