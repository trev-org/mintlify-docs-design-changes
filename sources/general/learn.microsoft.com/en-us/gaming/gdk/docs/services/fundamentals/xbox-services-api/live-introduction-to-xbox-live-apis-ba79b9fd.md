# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/xbox-services-api/live-introduction-to-xbox-live-apis?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/xbox-services-api/live-introduction-to-xbox-live-apis?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Xbox services API overview

Feedback

Summarize this article for me

There are two ways to get information from Xbox services.

1. Use a client-side API called **Xbox services API** or XSAPI. It's also known as Xbox Live API.
2. Call the **Xbox services REST endpoints** directly. They're also known as Xbox Live REST endpoints.

### Advantages of using XSAPI

The advantages of using the Xbox services API (XSAPI) include:

- Details of authentication, encoding, and HTTP sending and receiving are taken care of for you.
- Arguments to, and data returned from, the wrapper API is handled in native data types. You don't need to perform JSON encoding and decoding.
- Calling web services directly involves multiple asynchronous steps, which the wrapper API encapsulates. This makes title code easier to read and write.
- Some functionality, such as writing game events, is only available in XSAPI.

### Advantages of using Xbox services REST endpoints

The advantages of using the Xbox services REST endpoints directly include:

- The ability to call Xbox services endpoints from a web service.
- The ability to call endpoints that aren't included in XSAPI. It only includes APIs that we believe games will use. If there's anything missing, contact us via the forums.
- Some functionality available via the REST endpoints might not have a corresponding XSAPI wrapper.

Your games and apps aren't limited to using just one of these methods. You can use the XSAPI wrapper and still call the REST endpoints directly if needed. For more information, see [Xbox services REST API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/rest/atoc-xboxlivews-reference?view=gdk-2604).

## Client-side API set

XSAPI exposes client-side APIs that support a wide range of customer scenarios.

**Important**: For GDK development, use only the XSAPI C-based API. XSAPI WinRT and C++11 APIs are included here for your information only.

- [XSAPI C-based API](https://learn.microsoft.com/#xsapi-c-based-api) (GDK); new as of June 2018
- XSAPI WinRT API (XDK and Xbox Creators program only)
- XSAPI C++11 based API (XDK and Xbox Creators program only)

### XSAPI C-based API

- Supports PC and Xbox console GDK titles.
- Allows titles to control the memory allocations when calling XSAPI.
- Allows titles to gain full control of thread handling when calling XSAPI.
- Uses a new HTTP library, [libHttpClient](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/httpclient/atoc-httpclient?view=gdk-2604), designed for game developers.

To learn more, see [Introduction to the Xbox Live C APIs](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/xbox-services-api/live-xsapi-flat-c?view=gdk-2604).

For API reference, see [XSAPI C reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/atoc-xsapi-c?view=gdk-2604).

## See also

[Introduction to the XSAPI C APIs](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/xbox-services-api/live-xsapi-flat-c?view=gdk-2604) 
[XSAPI reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/atoc-xsapi-c?view=gdk-2604) 
[REST API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/rest/atoc-xboxlivews-reference?view=gdk-2604) 
[libHttpClient](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/httpclient/atoc-httpclient?view=gdk-2604)

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