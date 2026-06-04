---
author: M-Stahl
title: "xCurl overview"
description: "Describes the differences between the `xCurl` and the `libCurl` APIs."
kindex:
- xCurl Overview
- libcurl
ms.author: jameslen
ms.topic: article
ms.date: '03/23/2026'
edited: 03/23/2026
permissioned-type: public
---

# xCurl overview

This article describes the `xCurl` library, a Microsoft Game Development Kit (GDK) compliant implementation of the [libCurl](https://curl.haxx.se/libcurl/) APIs. `xCurl` simplifies title development by adhering to all security requirements and best practices without requiring any special title logic or handling. However, it doesn't support WebSocket communication. If you need to implement WebSocket communication, use [libHttpClient](http-networking.md#libhttpclient) instead.

`xCurl` differs from `libCurl` in that `xCurl` is implemented on top of [WinHttp](intro-winhttp.md) and automatically follows Microsoft Game Development Kit (GDK) requirements and best practices, including Process Lifetime Management (PLM). While `xCurl` is API compatible with `libCurl`, the transport layer within `xCurl` uses WinHttp exclusively and doesn't utilize `libCurl`. Thus, `xCurl` isn't required to be kept in sync with the open-source implementation of `libCurl`, including bug fixes, version numbers and more. Developers can use `xCurl` to maintain the same `libCurl` HTTP implementation across all platforms while changing only one header include and library linkage.

Several `libCurl` APIs aren't implemented in `xCurl` because they either aren't commonly used in game development scenarios, or don't have equivalent functionality within WinHttp that can be mapped to. The differences are described later in this article.

`xCurl` relies on the Gaming Runtime and can't be initialized until [XGameRuntimeInitialize](../../../../reference/system/xgameruntimeinit/functions/xgameruntimeinitialize.md) is called.

To understand how `xCurl` methods work, see the [libCurl API](https://curl.haxx.se/libcurl/c/) documentation.

> [!NOTE]
> `xCurl` and `WinHttp` implementations work on both Windows PC and Xbox console with no code changes required.

## Developer Support

`xCurl` is powered by WinHttp, not `libCurl`, and is a part of the Microsoft Game Development Kit (GDK).

Support requests should be sent via the recommended support paths for Microsoft Game Development Kit (GDK) titles, such as contacting your Microsoft Representative or reaching out to developer support team via the Xbox Developer Forums.

## Add xCurl to your project

To use `xCurl` in a Microsoft Game Development Kit (GDK) game on a Windows 10 PC or an Xbox console, include the `xCurl` extension SDK headers and libraries in your project.

 1. Ensure that you install the Gaming Runtime Development Kit (GRDK) on your development PC.
 1. Open the .vcxproj file for your game, and then add the following element. This links the import library and includes *xCurl.dll* with the build output.

    ```xml
    <GDKExtLibNames>Xbox.xCurl.API</GDKExtLibNames>
    ```

 1. `xCurl` has a different header to differentiate itself from `libCurl`. In the locations where *curl.h* would be included in your game, replace the header with *xCurl.h*, shown as follows.

    ```cpp
    #include <xCurl.h>
    ```

## Configuration

`xCurl` is equivalent to `libCurl` compiled with the following build flags.

- HTTP_ONLY
- CURL_NO_OLDIES
- CURL_DISABLE_PROXY
- CURL_DISABLE_COOKIES
- CURL_DISABLE_DOH
- CURL_DISABLE_PROGRESS_METER
- CURL_DISABLE_MIME
- USE_SCHANNEL

## Network initialization

`xCurl` handles network initialization automatically. You can set up and perform requests at any point in your title's lifecycle. Any requests started before the network is initialized are delayed and queued until the network becomes initialized. xCurl ensures that your requests are made at the earliest possible opportunity without any extra handling required by your title.

## Title suspend/resume

`xCurl` handles suspend and resume automatically. On suspend, all outstanding requests are canceled immediately and fail with `CURLE_NO_CONNECTION_AVAILABLE`. Additionally, querying `curl_easy_getinfo` for `CURLINFO_OS_ERRNO` on these requests returns `HRESULT_FROM_WIN32(PROCESS_SUSPEND_RESUME)` just like any other GRTS API in case you want to handle these failures differently from general network disconnect failures.

All `xCurl` handles remain valid throughout the title lifecycle including across suspend/resume boundaries. There's no need to clean up or initialize any `xCurl` handle on suspend/resume. Any new requests started after suspend are delayed until resume and the subsequent network initialization. This delay ensures that they start as soon as possible without requiring any extra handling by your title.

> [!NOTE]
> When your title uses the multi interface for `xCurl`, your title should continue to call `curl_multi_perform` along with optionally `curl_multi_poll` or `curl_multi_wait` on suspend while there are outstanding requests. `xCurl` blocks suspend until all in-progress requests are completed, and failing to call `curl_multi_perform` might cause your title to time out during suspend. We recommend continuing to call curl_multi_perform throughout the entire lifecycle regardless of the suspend/resume state. `xCurl` handles all intricacies of the suspended state internally.

## Security functionality

All HTTPS requests through `xCurl` follow the [communication security best practices (NDA article)](../../../../gdk-dev/game-principles/security/communication-security/communication-security-overview.md). `xCurl` automatically enforces any special certificate pinning specified through your title's "Single Sign-on Portal." Using `CURLOPT_SSL_VERIFYPEER` to disable certificate validation isn't supported.

On development kits you can specify the unencrypted HTTP scheme, `http://`, for debug traffic and testing purposes. For all RETAIL requests, you must specify the HTTPS scheme, `https://`, to provide the recommended level of protection. xCurl requests that don't explicitly specify a scheme infers the HTTPS scheme.

> [!NOTE] 
> `xCurl` doesn't perform automatic token insertion. To retrieve Xbox Live tokens, your title should call the `XUserGetTokenAndSignatureAsync` or `XUserGetTokenAndSignatureUtf16Async` GRTS APIs to retrieve the authorization and signature headers, and then use the `CURLOPT_HEADER`, `CURLOPT_HTTPHEADER`, or `CURLOPT_HEADERFUNCTION` options in a call to `curl_easy_setopt` to set the headers before making the request.

## Memory and concurrency considerations

`xCurl` shares the same concurrent request limitations that apply to `WinHttp`. Titles should limit concurrent requests to eight or less to ensure that all calls operate correctly. This concurrency limit applies to concurrent requests that are issued from any of `xCurl`, `WinHttp`, and Xbox Service APIs.

`xCurl` uses a flip buffer to receive data. This pattern allows it to provide more throughput by filling a second buffer while the title is reading from the first. However, if the read callback takes too long or if `curl_multi_perform` isn't called frequently enough in multi mode, WinSock kernel memory might build up. For more information on WinSock kernel memory, see [socket memory considerations](../game-mesh/winsock-intro-networking.md#SocketMemory).

### Controlling xCurl allocations

By default, `xCurl` uses the Windows heap and can have its allocations tracked through `XMemSetWin32HeapTrackingHooks`. Alternately, memory functions can be provided at initialization time like `libCurl`.

In addition to [curl_global_init_mem](https://curl.haxx.se/libcurl/c/curl_global_init_mem.html), `xCurl` provides the optional [xCurl_global_init_mem](../../../../reference/networking/xcurl/functions/xcurl_global_init_mem.md). The callbacks that are provided to this version of `init` are similar to other Microsoft Game Development Kit (GDK) memory callbacks and provide more information than the standard `libCurl` callbacks about the data that's being allocated.

## Supported options

The following options are supported with `easy` handles in `xCurl`.

- CURLOPT_VERBOSE
- CURLOPT_HEADER
- CURLOPT_NOBODY
- CURLOPT_FAILONERROR
- CURLOPT_UPLOAD
- CURLOPT_PUT
- CURLOPT_ACCEPT_ENCODING
- CURLOPT_TRANSFER_ENCODING
- CURLOPT_FOLLOWLOCATION
- CURLOPT_MAXREDIRS
- CURLOPT_POST
- CURLOPT_COPYPOSTFIELDS
- CURLOPT_POSTFIELDS
- CURLOPT_POSTFIELDSIZE
- CURLOPT_POSTFIELDSIZE_LARGE
- CURLOPT_POSTREDIR
- CURLOPT_REFERER
- CURLOPT_USERAGENT
- CURLOPT_HTTPHEADER
- CURLOPT_HTTPGET
- CURLOPT_HTTP_VERSION
- CURLOPT_CUSTOMREQUEST
- CURLOPT_HEADERDATA
- CURLOPT_ERRORBUFFER
- CURLOPT_WRITEDATA
- CURLOPT_READDATA
- CURLOPT_INFILESIZE
- CURLOPT_INFILESIZE_LARGE
- CURLOPT_CURLU
- CURLOPT_URL
- CURLOPT_PORT
- CURLOPT_TIMEOUT
- CURLOPT_TIMEOUT_MS
- CURLOPT_CONNECTTIMEOUT
- CURLOPT_CONNECTTIMEOUT_MS
- CURLOPT_DEBUGFUNCTION
- CURLOPT_DEBUGDATA
- CURLOPT_HEADERFUNCTION
- CURLOPT_WRITEFUNCTION
- CURLOPT_READFUNCTION
- CURLOPT_SSL_VERIFYPEER
- CURLOPT_SSL_VERIFYHOST
- CURLOPT_SSLCERT
- CURLOPT_BUFFERSIZE
- CURLOPT_UPLOAD_BUFFERSIZE
- CURLOPT_PRIVATE
- CURLOPT_IGNORE_CONTENT_LENGTH
- CURLOPT_HTTP_TRANSFER_DECODING
- CURLOPT_HTTP_CONTENT_DECODING

## Unsupported functionality

### Sockets and fd_set

`xCurl` doesn't expose the underlying socket that's used for transport. Therefore, `xCurl` doesn't implement any option and API that would be used for socket operations. This limit also removes the ability to use `fd_sets` to wait on data to arrive through `select` and `poll`. To wait for work to arrive, use `curl_multi_wait` and`curl_multi_poll`.

The following APIs aren't present in `xCurl`

- `curl_easy_send`
- `curl_easy_recv`
- `curl_multi_socket`
- `curl_multi_socket_action`
- `curl_multi_socket_all`
- `curl_multi_assign`
- `curl_multi_fdset`

The following options have no effect and return the `CURLE_NOT_BUILT_IN` error.

- CURLOPT_LOCALPORT
- CURLOPT_CONNECT_ONLY
- CURLOPT_SOCKOPTFUNCTION
- CURLOPT_SOCKOPTDATA
- CURLOPT_OPENSOCKETFUNCTION
- CURLOPT_OPENSOCKETDATA
- CURLOPT_CLOSESOCKETFUNCTION
- CURLOPT_CLOSESOCKETDATA
- CURLOPT_XOAUTH2_BEARER
- CURLOPT_PROGRESSFUNCTION
- CURLOPT_PROGRESSDATA
- CURLOPT_XFERINFOFUNCTION
- CURLOPT_XFERINFODATA
- CURLOPT_NOPROGRESS
- CURLINFO_LASTSOCKET
- CURLINFO_ACTIVESOCKET
- CURLMOPT_SOCKETFUNCTION
- CURLMOPT_SOCKETDATA
- CURLMOPT_PIPELINING
- CURLMOPT_PUSHFUNCTION

### CURL Share

The `CURL` `Share` interface isn't implemented.

### Pause and resume transfers

This feature is currently unsupported. Returning CURL_WRITEFUNC_PAUSE or CURL_READFUNC_PAUSE from a callback results in an aborted operation that can't be resumed.

## See also

 [libCurl API](https://curl.haxx.se/libcurl/c/)

 [Setting up web services at Partner Center (NDA article)](../../../../services/fundamentals/s2s-auth-calls/custom-service-config/web-services/live-web-services.md)

 [Fiddler on Xbox One consoles](../tools/fiddler-setup-networking.md)

 [Communication Security Best Practice Overview (NDA article)](../../../../gdk-dev/game-principles/security/communication-security/communication-security-overview.md)
