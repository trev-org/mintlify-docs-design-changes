# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/overviews/error-handling?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/overviews/error-handling?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Error handling in the Microsoft Game Development Kit

Feedback

Summarize this article for me

The Microsoft Game Development Kit (GDK) is built from many technologies, both new and existing. These technologies include many classic Win32-style APIs, COM APIs, DirectX graphics APIs, and others, which already have standard error-handling methods defined. As a result, how to handle errors varies based on the specific technology.

Most Microsoft Game Development Kit (GDK) APIs return an [HRESULT](https://learn.microsoft.com/en-us/windows/win32/debug/error-handling) value, although some APIs might still require the use of classic Win32 or COM error handling.

For the most part, the Microsoft Game Development Kit (GDK) APIs are designed to be "exception free," but games can still use C++ exception handling if they choose. This is often a good choice for handling unrecoverable errors that require a fast fail. It's also a good idea to continue using "exception-safe" coding styles that work with and without C++ exceptions in the code.

- [Handling HRESULTS from the Microsoft Game Development Kit (GDK) APIs](https://learn.microsoft.com/#new-apis)
- [Handling HRESULTS from Xbox Live APIs](https://learn.microsoft.com/#xbl-apis)
- [Handling errors with the new asynchronous model](https://learn.microsoft.com/#async-apis)
- [Classic Win32 error handling and COM error handling](https://learn.microsoft.com/#classic-apis)

## Handling HRESULTS from the Microsoft Game Development Kit (GDK) APIs

The majority of Microsoft Game Development Kit (GDK) APIs return an `HRESULT` value to indicate success or failure of the API call. You can use the `SUCCEEDED(hr)` or `FAILED(hr)` macros to handle success or errors that can be recovered from. For special handling for specific error cases, you can check the `HRESULT` return value to determine how to handle the error.

Note

Generally, success is indicated by `S_OK`, but there are other valid success return values, including `S_FALSE`. While this value isn't commonly used in modern COM APIs, we still recommend that you avoid using `hr == S_OK` and instead use `SUCCEEDED(hr)`.

The Microsoft Game Development Kit (GDK) defines a set of custom error codes in the _XgameErr.h_ file. For more information, see [Error codes](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/errorcodes?view=gdk-2604).

Many Microsoft Game Development Kit (GDK) APIs use the Windows Implementation Library (WIL) to wrap errors that are returned from internal Win32 or COM calls. To learn more about how WIL wraps errors to return an `HRESULT`, see [Error handling helpers](https://github.com/microsoft/wil/wiki/Error-handling-helpers).

## Handling HRESULTS from Xbox Live APIs

For a list of possible `HRESULTS` that are returned from Xbox Live calls, see [Xbox Live HRESULT Error Codes](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xbl-hresult-error-codes?view=gdk-2604).

You can also pass the `HRESULT` value to [XblGetErrorCondition](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/errors_c/functions/xblgeterrorcondition?view=gdk-2604) to group error conditions into groups of related errors, which you can then take action on. The error groups are defined in the [XblErrorCondition](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/errors_c/enums/xblerrorcondition?view=gdk-2604) enumeration.

## Handling errors with the new asynchronous model

The Microsoft Game Development Kit (GDK) introduces a new C style async model, described in [Asynchronous Programming Model](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-programming-model?view=gdk-2604). In the async model, there are typically pairs of APIs that you call, for example, [XGameUiShowTextEntryAsync](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameui/functions/xgameuishowtextentryasync?view=gdk-2604) and [XGameUiShowTextEntryResult](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameui/functions/xgameuishowtextentryresult?view=gdk-2604).

### Submitting the async task

The `...Async` API is called to queue up the function call on another thread. One of the parameters that's passed to the async call is an [XAsyncBlock](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xasync/structs/xasyncblock?view=gdk-2604) structure, which may optionally contain a user-specified callback function. If present, this function is called when the async task is completed. [XAsyncBlock](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xasync/structs/xasyncblock?view=gdk-2604) can also optionally specify a specific task queue to use for the async queueing. To track the progress of the call, you can use [XAsyncBlock](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xasync/structs/xasyncblock?view=gdk-2604).

The `...Async` function returns an `HRESULT` code, which indicates if the API was able to queue the task.

The most common `HRESULTS` returns from an async API call are the following:

- `S_OK`: Indicates that the task was successfully added to the task queue
- `E_NO_TASK_QUEUE`: Indicates that the process task queue has been disabled (set to `null`) and that [XAsyncBlock](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xasync/structs/xasyncblock?view=gdk-2604) didn't specify a task queue

### Checking the progress of an async task

You can call [XAsyncGetStatus](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xasync/functions/xasyncgetstatus?view=gdk-2604) to check on the status of an async task by passing in the [XAsyncBlock](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xasync/structs/xasyncblock?view=gdk-2604) that was used in the async API call. You can also pass in an optional Boolean value that indicates if [XAsyncGetStatus](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xasync/functions/xasyncgetstatus?view=gdk-2604) waits for the async task to be completed or canceled.

The most common `HRESULTS` that are returned from an [XAsyncGetStatus](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xasync/functions/xasyncgetstatus?view=gdk-2604) call are the following:

- `S_OK`: The async task was successfully completed.
- `E_PENDING`: The async task is still queued or is in progress.
- `E_ABORT`: The async task was canceled.
- `E_INVALIDARG`: The async block is invalid.
- Other: If the async task fails, this indicates that the `HRESULT` error code was returned by the async task. For a list of possible values, check the specific API documentation or see [Error codes](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/errorcodes?view=gdk-2604).

### Checking the result of an async task

If you've specified a callback in the async block, then in the callback function you can check the result of the async call by calling the matching `...Result` API. The `HRESULT` return value should match what would be returned by calling [XAsyncGetStatus](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xasync/functions/xasyncgetstatus?view=gdk-2604). If you call the API in the callback, you shouldn't get `E_PENDING` as a return value. However, if you call the API outside the callback, you should check the return value to ensure that the task isn't still in progress.

## Classic Win32 error handling and COM error handling

For Win32 APIs that don't return an `HRESULT` value, check the documentation to see how the return value indicates an error (typically by returning zero). You can then retrieve the most recent error code by calling the [GetLastError](https://learn.microsoft.com/en-us/windows/win32/api/errhandlingapi/nf-errhandlingapi-getlasterror) API. Note that you can convert a classic Win32 error code to an `HRESULT` by using the [HRESULT\_FROM\_WIN32](https://learn.microsoft.com/en-us/windows/win32/api/winerror/nf-winerror-hresult_from_win32) macro.

For more information about error handling in Win32 APIs, see [Error Handling](https://learn.microsoft.com/en-us/windows/win32/debug/error-handling).

For information about handling COM errors, see [Error Handling in COM](https://learn.microsoft.com/en-us/windows/win32/com/error-handling-in-com).

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