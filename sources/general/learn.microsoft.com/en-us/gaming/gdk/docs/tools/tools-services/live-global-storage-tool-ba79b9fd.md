# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-global-storage-tool?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-global-storage-tool?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Global Storage tool (GlobalStorage.exe)

Feedback

Summarize this article for me

Global title storage is used to store data that everyone can read, such as rosters, maps, challenges, or art resources.

The Global Storage tool is used to manage global title storage in test sandboxes. Data must still be published to RETAIL via Partner Center.

This command-line tool is part of the GDK and `XboxLiveTools.zip`; see [Development tools for Xbox Live](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-tools?view=gdk-2604).

GlobalStorage.exe is used to manage title global storage in test sandboxes, before publish to RETAIL. XblDevAccount.exe signin is required to be called at least once before first use.

#### Usage:

_**quota:**_ Get title global storage quota information.

```
GlobalStorage.exe quota -scid xxx --sandbox xxx
```

Success output:

```
Your global storage quota: used bytes {usedBytes}, total bytes {totalBytes}
```

_**list:**_ Gets a list of blob meta-data under a given path for the title global storage.

```
GlobalStorage list --scid xxx --max-items 10 --path path --sandbox xxx
```

Success output:

```
Total 12 items found, Displaying item 0 to 12
        test.txt,       Config,         2
        ...
        tool.zip,       Binary,         1874772
```

_**delete:**_ Deletes a blob from title storage.

```
GlobalStorage delete --scid xxx --blob-path foo\bar\blob.txt --sandbox xxx --type Json
```

_**download:**_ Downloads blob data from title storage.

```
GlobalStorage download --scid xxx --output c:\test.txt --blob-path \text.txt --sandbox xxx --type Json
```

_**upload:**_ Uploads blob data to title storage.

```
GlobalStorage upload --scid xxx --file c:\test.txt --blob-path \text.txt --sandbox xxx --type Json
```

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

- Last updated on 01/26/2026