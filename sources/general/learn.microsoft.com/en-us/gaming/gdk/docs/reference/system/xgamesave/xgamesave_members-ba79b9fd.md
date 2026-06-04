# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/xgamesave_members?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/xgamesave_members?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# XGameSave

Feedback

Summarize this article for me

The XGameSave API is designed to enable creating, loading, saving and managing game related states. The primary difference between this and previous implementations is that this will provide a flat API with access to an Asynchronous Programming Model that allows the caller to control the threading and memory management of how the API behaves.

## Functions

Expand table

| Function | Description |
| --- | --- |
| [XGameSaveBlobInfoCallback](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesaveblobinfocallback?view=gdk-2604) | Callback function to retrieve the results of [XGameSaveEnumerateBlobInfo](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesaveenumerateblobinfo?view=gdk-2604). |
| [XGameSaveCloseContainer](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesaveclosecontainer?view=gdk-2604) | Closes the XGameSaveContainer. |
| [XGameSaveCloseProvider](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavecloseprovider?view=gdk-2604) | Releases resources held by the XGameSaveProvider. |
| [XGameSaveCloseUpdate](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavecloseupdate?view=gdk-2604) | Closes a XGameSaveUpdate. |
| [XGameSaveContainerInfoCallback](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavecontainerinfocallback?view=gdk-2604) | The callback function for a call made to [XGameSaveGetContainerInfo](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavegetcontainerinfo?view=gdk-2604). |
| [XGameSaveCreateContainer](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavecreatecontainer?view=gdk-2604) | Creates a XGameSaveContainer handle. |
| [XGameSaveCreateUpdate](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavecreateupdate?view=gdk-2604) | Creates an update which will later be submitted by calling [XGameSaveSubmitUpdate](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavesubmitupdate?view=gdk-2604). |
| [XGameSaveDeleteContainer](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavedeletecontainer?view=gdk-2604) | Deletes a XGameSaveContainer from cloud storage. |
| [XGameSaveDeleteContainerAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavedeletecontainerasync?view=gdk-2604) | Deletes a XGameSaveContainer asynchronously. |
| [XGameSaveDeleteContainerResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavedeletecontainerresult?view=gdk-2604) | Retrieves the result of a [XGameSaveDeleteContainerAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavedeletecontainerasync?view=gdk-2604) call, use this function to check the success of the call. |
| [XGameSaveEnumerateBlobInfo](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesaveenumerateblobinfo?view=gdk-2604) | Retrieves the blob info for the contents of a XGameSaveContainer. |
| [XGameSaveEnumerateBlobInfoByName](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesaveenumerateblobinfobyname?view=gdk-2604) | Retrieves the blob info for the contents of a XGameSaveContainer limited to the blobs which share a prefix with the blobNamePrefix parameter. |
| [XGameSaveEnumerateContainerInfo](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesaveenumeratecontainerinfo?view=gdk-2604) | Retrieves the container info for a XGameSaveProvider. |
| [XGameSaveEnumerateContainerInfoByName](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesaveenumeratecontainerinfobyname?view=gdk-2604) | Retrieves the container info for a XGameSaveProvider. |
| [XGameSaveGetContainerInfo](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavegetcontainerinfo?view=gdk-2604) | Retrieves info for the containers in a XGameSaveProvider. |
| [XGameSaveGetRemainingQuota](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavegetremainingquota?view=gdk-2604) | Returns the amount of data available to store using the XGameSave api. |
| [XGameSaveGetRemainingQuotaAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavegetremainingquotaasync?view=gdk-2604) | Returns the amount of data available to store using the XGameSave api asynchronously. |
| [XGameSaveGetRemainingQuotaResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavegetremainingquotaresult?view=gdk-2604) | Retrieves the results of the [XGameSaveGetRemainingQuotaAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavegetremainingquotaasync?view=gdk-2604) function. |
| [XGameSaveInitializeProvider](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesaveinitializeprovider?view=gdk-2604) | Provides and initializes a XGameSave Provider handle. |
| [XGameSaveInitializeProviderAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesaveinitializeproviderasync?view=gdk-2604) | Provides and initializes an XGameSave Provider handle asynchronously. |
| [XGameSaveInitializeProviderResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesaveinitializeproviderresult?view=gdk-2604) | Contains the results of a [XGameSaveInitializeProviderAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesaveinitializeproviderasync?view=gdk-2604) call. |
| [XGameSaveReadBlobData](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavereadblobdata?view=gdk-2604) | Reads the blob data for a container. |
| [XGameSaveReadBlobDataAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavereadblobdataasync?view=gdk-2604) | Read XGameSaveBlob data from a XGameSaveContainer asynchronously. |
| [XGameSaveReadBlobDataResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavereadblobdataresult?view=gdk-2604) | Retrieves the results of a [XGameSaveReadBlobDataAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavereadblobdataasync?view=gdk-2604) call. |
| [XGameSaveSubmitBlobDelete](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavesubmitblobdelete?view=gdk-2604) | Adds a delete action to a game save XGameSaveUpdate. |
| [XGameSaveSubmitBlobWrite](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavesubmitblobwrite?view=gdk-2604) | Adds a write action to a XGameSaveUpdate. |
| [XGameSaveSubmitUpdate](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavesubmitupdate?view=gdk-2604) | Submit an update to the XGameSave service. Updates blobs within a container. |
| [XGameSaveSubmitUpdateAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavesubmitupdateasync?view=gdk-2604) | Submit an update to the XGameSave service asynchronously. Updates blobs within a container. |
| [XGameSaveSubmitUpdateResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavesubmitupdateresult?view=gdk-2604) | Retrieves the result of the [XGameSaveSubmitUpdateAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/functions/xgamesavesubmitupdateasync?view=gdk-2604) call. |

## Structures

Expand table

| Structure | Description |
| --- | --- |
| [XGameSaveBlob](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/structs/xgamesaveblob?view=gdk-2604) | Unit of information for XGameSave storage. Resides within a XGameSaveContainer. |
| [XGameSaveBlobInfo](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/structs/xgamesaveblobinfo?view=gdk-2604) | Information about the XGameSaveBlob. |
| [XGameSaveContainerInfo](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamesave/structs/xgamesavecontainerinfo?view=gdk-2604) | Information about a XGameSaveContainer. |

## See also

[System API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/gc-reference-system-toc?view=gdk-2604)

---

## Feedback

Was this page helpful?

Yes No No

Need help with this topic?

Want to try using Ask Learn to clarify or guide you through this topic?

Ask Learn Ask Learn

Suggest a fix?

---

## Additional resources

---

- Last updated on 11/06/2025