---
author: M-Stahl
title: "XPersistentLocalStorage (API contents)"
description: "Reference material for the XPersistentLocalStorage APIs."
kindex: XPersistentLocalStorage
ms.topic: article
edited: 05/23/2019
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XPersistentLocalStorage  
  
Reference material for the XPersistentLocalStorage APIs.  
  
  
## Functions  
  
| Function | Description |  
| --- | --- |  
| [XPersistentLocalStorageGetPath](functions/xpersistentlocalstoragegetpath.md) | Returns the game-specific path to the persistent local storage (PLS) on the device. |  
| [XPersistentLocalStorageGetPathSize](functions/xpersistentlocalstoragegetpathsize.md) | Returns the length, in characters, of the path to the persistent local storage (PLS). |  
| [XPersistentLocalStorageGetSpaceInfo](functions/xpersistentlocalstoragegetspaceinfo.md) | Returns an [XPersistentLocalStorageSpaceInfo](structs/xpersistentlocalstoragespaceinfo.md) struct with storage space details, such as space available. |  
| [XPersistentLocalStorageMountForPackage](functions/xpersistentlocalstoragemountforpackage.md) | Mounts the persistent local storage (PLS) of the specified package as a read-only disc. |  
| [XPersistentLocalStoragePromptUserForSpaceAsync](functions/xpersistentlocalstoragepromptuserforspaceasync.md) | Allows titles to prompt users to free up a requested total number of Bytes of Growable Persistent Local Storage. |  
| [XPersistentLocalStoragePromptUserForSpaceResult](functions/xpersistentlocalstoragepromptuserforspaceresult.md) | Returns the result of a call to the function [XPersistentLocalStoragePromptUserForSpaceAsync](functions/xpersistentlocalstoragepromptuserforspaceasync.md). |  
  
## Structures  
  
| Structure | Description |  
| --- | --- |  
| [XPersistentLocalStorageSpaceInfo](structs/xpersistentlocalstoragespaceinfo.md) | Contains details about the state of Persistent Local Storage (PLS), returned by [XPersistentLocalStorageGetSpaceInfo](functions/xpersistentlocalstoragegetspaceinfo.md) |  
  
  
## See also  
[System API reference](../gc-reference-system-toc.md)  
