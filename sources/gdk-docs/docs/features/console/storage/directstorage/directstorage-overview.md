---
author: M-Stahl
title: "DirectStorage Overview"
description: "Provides an overview of DirectStorage in the Microsoft Game Development Kit (GDK)."
kindex: DirectStorage Overview
ms.author: mikester
ms.topic: article
edited: 07/07/2022
ms.date: '08/01/2022'
permissioned-type: public
---

# DirectStorage Overview

## Introduction

This article provides an overview of the DirectStorage APIs for
Xbox Series X&#124;S consoles only. Please see
[DirectStorage on Desktop](https://aka.ms/directstorage) for DirectStorage on Desktop details.

The latest NVMe storage devices connected by using a PCIe bus can achieve very
high levels of throughput and IOPS (I/O requests per second). The overhead of
Win32 APIs means that even though the available storage bandwidth can be
utilized, taking advantage of it might result in an unacceptably high CPU
utilization. This is especially true when the workload consists of a large
number of small requests.

The DirectStorage APIs are designed to remove most of the operating system's
overhead by closely interacting with the underlying NVMe hardware. This allows
for achieving a higher bandwidth with lower CPU usage. The goal is to enable
handling of up to 50,000 requests per second while using at most 10% of a
single CPU core.

### Existing issues

Game content is getting larger and larger as the need for higher resolution
assets increase with each console generation. The existing Xbox One hardware
and software has several limitations that are hampering developers in their
ability to get data from the hard drive to memory for this next-generation
content.

* High CPU usage
  * The existing Win32 APIs could require an entire CPU core in overhead.
  * This is based on the number of requests from the title.

* Insufficient maximum bandwidth from the disk
  * The [Maximizing File Performance on Xbox Series X&#124;S (NDA topic)](../../../../gdk-dev/console-dev/overviews/file-system/Maximizing_File_Performance_Win32_Scarlett.md) and [Maximizing File Performance on Xbox One (NDA topic)](../../../../gdk-dev/console-dev/overviews/file-system/Maximizing_File_Performance_Win32_Xbox_One.md) white paper covers this in detail.

* Inability to prioritize disk requests
  * Without the ability to prioritize title requests, it can be hard to create a
    responsive streaming system.

* Inability to cancel disk requests
  * Without the ability to cancel requests, it can be hard to create a
    speculative read system.

* No hardware accelerated decompression
  * Without hardware accelerated decompression, it can take a lot of CPU
    resources to perform the decompression in software.

The DirectStorage API set directly addresses each of these issues. The overall
effect is drastically increased performance from the Xbox file system.

### CPU usage

The main design goal for DirectStorage is to allow a title to sustain 50K IOPS
and only use between 5% and 10% of a single CPU core. This allows
the title to achieve maximum bandwidth from the NVMe storage subsystem, while at
the same time allowing the CPU to be used for other title requirements.

DirectStorage also adds support for hardware decompression. Each read request
can be routed directly from the NVMe drive to the built-in hardware
decompression block. This eliminates the need for a title to spend CPU resources
on decompression.

### Queued pipeline model

DirectStorage uses a batch method, where multiple requests are added to a queue.
At a later point in time, the queue is flushed to the next pipeline stage. This
immediately reduces the overall CPU cost for a transition between pipeline
stages. Under the existing Win32 API set, there's a transition for each request.
The DirectStorage queues utilize lock-free algorithms to minimize contention.
The title is given control over when each queue is flushed.

In many cases with the Win32 APIs, the data from the disk might need to be copied
to another buffer. In some cases, the data might need to be copied more than once.
DirectStorage removes this issue by mapping the title-provided destination
buffer directly into each pipeline layer. The hardware will write directly into
the buffer that's provided by the title.

Those changes contribute to significant reductions of the CPU overhead.

### Decompression

The ability for the hardware to decompress data has been increased. It can now
handle a wider variety of formats and at a higher speed than the NVMe subsystem
can provide data. Moreover, DirectStorage supports in-place decompression, which
removes the need to manage separate buffers for compressed and decompressed
data.

The hardware supports `BCPACK`, `DEFLATE`, and provides the ability to swizzle the
final contents. These formats aren't mutually exclusive. It's possible to have
all three applied to data. This gives the title the ability to choose which
method gives it the best compression ratio and performance. Different assets
can use different compression and swizzle settings.

### Queue depth

The previous recommendation was to only maintain 12&ndash;16 asynchronous
requests in flight at a time on a rotational drive. Going any larger had no benefit on performance, and
going smaller would significantly hurt performance. This led to titles
performing extra work to balance their outstanding read requests to stay within
the recommended target.

With the DirectStorage goal to allow a title to achieve 50,000 IOPS, our
recommendation has changed. The title no longer needs to try and balance between
outstanding work and queue depth. The title should submit all its outstanding
requests. There's no benefit to holding some requests back. In many cases,
holding requests back could hurt performance as the hardware is stalled, waiting
for new requests.

The operating system is still required to break larger read requests into
several smaller requests in some cases (for example, handling disk fragmentation).
However, this was considered in the DirectStorage architecture. The 50,000 IOPS
design goal is based on the title count of IO operations and not the final
requests going to the hardware.

### Notification

In the Win32 architecture, a significant amount of overhead is spent on
notifications of read completion. The title can either poll an *OVERLAPPED* structure,
wait for an associated Event handle, or to perform a synchronous
blocking read. Overall, this increases the resource demands of each read
request.

DirectStorage keeps the two asynchronous concepts of notifications while also
adding a third method. There's no support for synchronous blocking reads in
DirectStorage&mdash;it's possible for a title to implement its own system. However,
this isn't recommended.

The first asynchronous method is implemented through a status block that's set
when the associated requests are completed. The title can poll the block as
needed to determine when the reads are complete. This is similar to the Win32 method of
polling an *OVERLAPPED* structure for completion.

The second asynchronous method is using a Windows `Event` object to signal completion.
This is similar to using an *OVERLAPPED* structure with a corresponding `Event` object.
The title can use [WaitForSingleObject](/windows/win32/api/synchapi/nf-synchapi-waitforsingleobject)
method to cause the calling thread to suspend until the read operations are complete.

The third asynchronous method is implemented by using an [ID3D12Fence](/windows/win32/api/d3d12/nn-d3d12-id3d12fence). The title
can either suspend waiting for the fence or can poll the fence if needed.
There's also the benefit that the GPU can use the fence for direct notification
of completed requests.

The DirectStorage notification system isn't bound to a single read request. It's
an entry placed within the queue, which is signaled when all the preceding read
requests have finished. This gives the title control over how much granularity
it needs for notification. Notification is always signaled in queue order.
The queue can be considered a FIFO (first in, first out) queue. The title only
needs to query the last relevant notification. All previously enqueued requests
are guaranteed to have completed.

### Memory-to-memory decompression

DirectStorage provides a queue type to invoke the decompression hardware with
the decompression source being memory instead of a disk file. This allows the
decompression hardware to be utilized if the compressed asset isn't sourced
from a file or was previously sourced and kept into memory as a cache. A
memory-sourced queue only accepts memory-sourced requests, and a file-sourced
queue only accepts file-sourced requests.

If no decompression options are specified in a memory-sourced request, the
decompression hardware can also act as a DMA copy engine.

While DirectStorage guarantees the completion notifications are in order,
DirectStorage provides no guarantee on when the requests start to be processed.
As a result, there must be no data dependencies between pending requests. That
is, request A's destination can't be used as request B's source, unless request
B is enqueued after request A's completion.

Memory-sourced queues must be created with real-time priority. Additionally,
memory-sourced real-time requests are always processed by the decompression
hardware before disk-sourced requests that require decompression.
If disk-sourced queues don't have any decompression requests, the two
queue types are processed completely in parallel without affecting the other type.

### Priority

DirectStorage allows each queue to be assigned a priority level. Each entry in
the queue inherits the queue's priority. Four different priority levels are
provided: real-time, high, normal, and low. Requests are processed in a weighted round-
robin manner. For example, process X requests at high priority before processing
one request at normal priority. Process Y requests at normal priority before
processing one request at low priority.

Priority weighting is counted against each request's size. The default weighting
between each priority is roughly 10x. This means for each 1 KB of low priority
request, 10 KB of medium priority request and 100 KB of high priority request
would have been processed.

Existing Win32 read requests are routed through the same priority system. All
Win32 requests are considered normal priority.

Memory-sourced queues must be created with real-time priority.

### Cancellation

Each DirectStorage read request has a title-provided 64-bit mask associated with
it. This is to support the cancellation of pending read requests. The title can
cancel requests that match a specific set of flags within the mask.

Even with support for cancellation, it's still possible for a read request to be
processed by the hardware. The title cancellation request is a best-effort
attempt. If the request is already being actively processed by the hardware, it
can't be canceled.

Because the cancellation request is a best effort, the title must wait until
it's been notified that the read request has finished processing. The title
can't release any resources needed until a later notification in the queue is
received. However, during this time, new requests that match flags that were
used in a previous cancellation request can be enqueued and won't be canceled.

When a canceled request completes, it's considered a **success**, even if it
was canceled and didn't produce the complete result. In other words, if
cancellation is attempted on a request, the title can no longer consume the
result of the potentially canceled request upon completion.

### Guarantee

The Xbox One and Xbox One S consoles had a minimum guarantee of 40 MB/s. The
Xbox One X console increased the minimum guarantee to 60 MB/s. These numbers are
well below the actual hardware limits, which are in the 130 MB/s range. This was
entirely due to the overhead caused by the operating system.

DirectStorage removes most of the overhead caused by the operating system. This
allows a minimum guarantee closer to the hardware limits. The new minimum
performance guarantee is 2.0 GB/s over a 250 ms window for raw data. The use of
decompression on the content will push the final bandwidth higher.

Future Xbox consoles will support the addition of dynamic user-installable
drives that are also NVMe based. The same minimum performance guarantee that's
provided for the internal drive is also provided for the user-installable drive.

## API overview

The DirectStorage interfaces follow the same pattern as the Direct3D interfaces.
The title initially obtains a singleton factory. The factory is used to create
request queues and open files&mdash;each of these objects have a mapping
directly to the hardware. Individual requests are then enqueued into a queue to
be submitted to the hardware.

### IDStorageFactoryX

`IDStorageFactoryX` is the main interface for creating queues, opening files, and
submitting pending requests.

The `IDStorageFactoryX `object has the following methods.

* [OpenFile](../../../../reference/system/dstorage/interfaces/IDStorageFactoryX/methods/idstoragefactoryx_openfile.md)
  * Creates an `IDStorageFileX `object, which represents one file.

* [CreateQueue](../../../../reference/system/dstorage/interfaces/IDStorageFactoryX/methods/idstoragefactoryx_createqueue.md)
  * Creates an `IDStorageQueueX` object. Used to create read requests.

* [CreateStatusArray](../../../../reference/system/dstorage/interfaces/IDStorageFactoryX/methods/idstoragefactoryx_createstatusarray.md)
  * Creates an `IDStorageStatusArray` object, which manages completion status
    flags.

* [SetCPUAffinity](../../../../reference/system/dstorage/interfaces/IDStorageFactoryX/methods/idstoragefactoryx_setcpuaffinity.md)
  * Restricts DirectStorage's out-of-calling-thread work to a title-defined set
    of CPU cores.
  * **NOTE** DirectStorage tries to do most of the work in
    the calling thread. Out-of-calling-thread work only happens when it can't be
    done in the calling thread. Examples are as follows.
    * The underlying resource pipeline is full during `IDStorageQueueX::Submit`,
      and not all requests in the queue can be pushed forward. The remaining
      requests will be processed later when the resources free up, and it's
      done in a DirectStorage worker thread.
    * Processing of requests completion into `ID3DFence` or `IDStorageStatusArray`.

* [SetDebugFlags](../../../../reference/system/dstorage/interfaces/IDStorageFactoryX/methods/idstoragefactoryx_setdebugflags.md)
  * Controls whether DirectStorage would do additional validations at request
    enqueue time to aid debugging.

* [SetStagingBufferSize](../../../../reference/system/dstorage/interfaces/IDStorageFactoryX/methods/idstoragefactoryx_setstagingbuffersize.md)
  * Sets the size of staging buffer used to temporarily store content loaded
    from the storage device before it's decrypted/decompressed. If only
    memory sourced queues are used, the staging buffer can be 0 sized.

### IDStorageFactoryX1

The `IDStorageFactoryX1` interface extends the `IDStorageFactoryX` interface by
a [GetStats](../../../../reference/system/dstorage/interfaces/IDStorageFactoryX1/methods/idstoragefactoryx1_getstats.md) method.

* [GetStats](../../../../reference/system/dstorage/interfaces/IDStorageFactoryX1/methods/idstoragefactoryx1_getstats.md)
  * Gets the DirectStorage statistics. This function can be used to integrate
    DirectStorage with existing diagnostic and telemetry pipelines.
    It does minimal processing and thus can be called often. The statistics
    don't include Win32 file IO operations.

### IDStorageFactoryX2

The `IDStorageFactoryX2` interface extends the `IDStorageFactoryX1 interface by
a [CreateQueue1](../../../../reference/system/dstorage/interfaces/IDStorageFactoryX2/methods/idstoragefactoryx_createqueue1.md) method.

* [CreateQueue1](../../../../reference/system/dstorage/interfaces/IDStorageFactoryX2/methods/idstoragefactoryx_createqueue1.md)
  * Creates an `IDStorageQueueX2` object. Uses a new structure to allow
    additional options on queue creation, including the ability to override
    the auto-submit feature of a queue.

### IDStorageFileX

All files need to be initially opened by DirectStorage through the
`IDStorageFactoryX` object. This is equivalent to using `CreateFile` in the Win32
API interfaces.

Files are opened with the `FILE_SHARED_READ` permission. If needed, titles can
simultaneously open the file using the Win32 APIs provided the proper
permissions are respected. During development, both loose and packaged deployments are supported.

Files are either closed by explicitly calling the [Close](../../../../reference/system/dstorage/interfaces/IDStorageFileX/methods/idstoragefilex_close.md)
function on the file object or when the last reference to the matching
`IDStorageFileX` object is released. However, all outstanding I/O operations must
be complete before the file can be closed. This means that both methods to close
a file will block until all outstanding I/O operations on that file have completed.

The game can obtain a win32 handle to a file represented by an `IDStorageFileX` object
by calling the [GetHandle](../../../../reference/system/dstorage/interfaces/IDStorageFileX/methods/idstoragefilex_gethandle.md) function.
The handle is opened with `GENERIC_READ` permissions and `FILE_SHARE_READ` sharing mode.
It can be used for querying the file's size and so on. The handle should be closed
with `CloseHandle()` when it's no longer needed.

### IDStorageQueueX

Read requests are submitted to the NVMe through an `IDStorageQueueX` object.
However, the requests aren't submitted to the device until the title calls
[Submit](../../../../reference/system/dstorage/interfaces/IDStorageQueueX/methods/idstoragequeuex_submit.md) on the queue, or one of the Enqueue methods
filled more than half of the queue's capacity since last submission and triggers
an automatic submission. Submissions are handled as a single transition to the
next stage in the pipeline. This allows the title to control when the CPU cost
happens for transition between the title and the kernel.

`IDStorageQueueX` objects have four properties.

* [SourceType](../../../../reference/system/dstorage/enums/dstorage_request_source_type.md)
  * Specifies whether the queue can receive file-sourced requests or
    memory-sourced requests.

* [Priority](../../../../reference/system/dstorage/enums/dstorage_priority.md)
  * The priority of all requests submitted to the queue: real-time, high, normal, or low.
  * Memory-sourced queues must be created with real-time priority.
  * Requests are processed in a weighted round-robin order based on priority.
  * Win32 requests are processed at the normal priority level.

* **Capacity**
  * The maximum number of outstanding requests the queue can hold.
  * Attempting to enqueue a request when the queue is at capacity will block
    until entries are completed by the hardware.
  * The amount of memory needed for a queue is approximately queue capacity
    multiplied by the size of a `DSTORAGE_REQUEST`.

* **Name**
  * This is purely to aid in debugging. The name isn't used by any of the
    DirectStorage code but is visible in developer tooling, such as
    [PIX (NDA topic)](../../../../tools/tools-console/pix/pix-directstorage.md).

The hardware will process requests asynchronously to achieve the highest
throughput. However, unlike Win32, the title is notified of completion in FIFO
order. On notification of completion, it's guaranteed that all previous requests
to the same queue have also completed.

### IDStorageQueueX1

The `IDStorageQueueX1` interface extends the `IDStorageQueueX` interface with the
[EnqueueSetEvent](../../../../reference/system/dstorage/interfaces/IDStorageQueueX1/methods/idstoragequeuex_enqueuesetevent.md) method.

### IDStorageQueueX2

The `IDStorageQueueX2` interface extends the `IDStorageQueueX1 interface with the [CreateQueue1](../../../../reference/system/dstorage/interfaces/IDStorageFactoryX2/methods/idstoragefactoryx_createqueue1.md) method.

And one additional property.

* [Options](../../../../reference/system/dstorage/structs/dstorage_queue_options.md)
  * Flags that are used to control the behaviour of the Queue, including disabling auto-submit.



### EnqueueRequest

This interface is functionally the same as the Win32 `ReadFile` interface.
Individual read requests are created and submitted to the queue. The main
difference is that DirectStorage allows many requests to be queued up before
submission, supports hardware decompression, and supports cancellation.

Requests have several main properties.

**Source of the request**  
  Depending on the combination of `Options.SourceType` and
  `Options.SourceIsPhysicalPages`, DirectStorage uses one of the following three
  groups of properties to specify where the source data exists.
  - **File** and **FileOffset**
    - This group is used when `Options.SourceType` is `DSTORAGE_REQUEST_SOURCE_FILE`
    - **File** is previously opened with `IDStorageFactoryX::OpenFile`.
    - **FileOffset** needs to be 16-byte aligned if decompression is used, or
      has no alignment requirement if decompression isn't used.
      - This is a major change from Win32, which required 4 KiB alignment within
        the file for asynchronous reads.

  - **Source**
    - This group is used when `Options.SourceType` is `DSTORAGE_REQUEST_SOURCE_MEMORY`
      and `Options.SourceIsPhysicalPages` is `FALSE`.
    - The memory buffer holding data to be decompressed.

  - **SourcePageArray** and **SourcePageOffset**
    - This group is used when `Options.SourceType` is `DSTORAGE_REQUEST_SOURCE_MEMORY`
      and `Options.SourceIsPhysicalPages` is `TRUE`.
    - Similar to `Source`, but provides the source memory buffer in the form of an
      array of 64 KB physical pages and the byte offset in the first page.
    - Physical 64 KB pages can be allocated by `XMemAllocatePhysicalPages`.

**SourceSize**
  - Size, in bytes, of the source data to be read, either from a memory buffer
    or from a file.

**IntermediateSize**
  - When both `zlib` and `BCPACK`decompression are enabled in this request,
    `IntermediateSize` is used to specify the intermediate size that the source
    data zlib-decompresses to (and BCPACK-decompresses from).
  - Otherwise, it should be set to 0.

**Destination of the request**  
  Depending on `Options.DestinationIsPhysicalPages`, DirectStorage uses one of the
  following two groups of properties to specify where the destination exists.
  - **Destination**
    - This group is used when `Options.DestinationIsPhysicalPages` is `FALSE`.
    - The destination buffer for the final loaded data.
    - Decompression happens using shared internal buffers and can be considered
      in-place.

  - **DestinationPageArray** and **DestinationPageOffset**
    - This group is used when `Options.DestinationIsPhysicalPages` is `TRUE`.
    - Similar to `Destination` but provides the destination memory buffer in the
      form of an array of 64 KB physical pages and the byte offset in the first
      page.
    - Physical 64 KB pages can be allocated by `XMemAllocatePhysicalPages`.

**DestinationSize**
  - Expected size, in bytes, of the final loaded content. The destination must
    must contain sufficient space to accommodate the operation.
  - The size must be equal to **SourceSize** when decompression isn't used, or
    be greater than **SourceSize** when decompression is used.

**CancellationTag**
  - An arbitrary 64-bit tag that's defined by the title.
  - This tag is used as a mask for cancellation requests.

**Name**
  - Optional string to aid in debugging. The Name can appear in developer
    tooling, such as such as [PIX (NDA topic)](../../../../tools/tools-console/pix/pix-directstorage.md), or in the error record
    obtained from `IDStorageQueueX::RetrieveErrorRecord`. The `Name` string needs to
    be accessible through the lifetime of the request.

**Options**
  - **ZlibDecompress**
    - Indicates the data needs to be decompressed by using the RFC 1950
      decompression standard.
  - **BcpackMode**
    - Indicates which mode of `BCPACK` should be used to decompress the data.
    - None is a valid option and means that the data isn't `BCPACK` compressed.
  - **SwizzleMode**
    - Indicates how the final data should be swizzled in memory.
  - **DestinationIsPhysicalPages**
    - Indicates the destination buffer is specified using
      **DestinationPageArray** and **DestinationPageOffset** instead of
      **Destination**.
  - **SourceType**
    - A request can either be memory-sourced, and thus has the `Source`/
      `SourcePageArray` and `SourcePageOffset` properties, or file-sourced, and thus
      has the `File`/`FileOffset` properties.
  - **SourceIsPhysicalPages**
    - Indicates the source buffer is specified using **SourcePageArray**
      and **SourcePageOffset** instead of **Source**.

### EnqueueStatus/EnqueueSignal/EnqueueSetEvent

Requests can be enqueued and treated as a series of related requests. This is
done by enqueuing for notification when processing has reached a certain point
in the queue. Notifications are processed only when all previous read requests
have completed. This guarantees data is immediately available from all previous
requests.

The title has two polling methods and one wait method for notification. The
title can insert an `ID3D12Fence` object or an `IDStorageStatusArrayX` object or a
set event operation. The `ID3D12Fence` behaves as expected for an `ID3D12Fence`
object. A title thread can wait on an `Event`, the CPU can poll the fence, and the
GPU can poll the fence. The `IDStorageStatusArrayX` object allows polling for
completion by the CPU and access to possible read failures. The `EnqueueSetEvent`
method allows a title thread to wait for the specified event instead of polling.
This differs from `ID3D12Fence::SetEventOnCompletion` as the Xbox implementation
of `ID3D12Fence::SetEventOnCompletion` spins on the fence until it's signaled,
thus consuming the CPU hardware thread until the signal, whereas `EnqueueSetEvent`
allows the title thread to use `WaitForSingleObject`/`WaitForMultipleObjects` to
yield the CPU to other threads until the event is signaled.

As previously mentioned, all requests are completed in order, even if the underlying
hardware decides to reorder them for performance. Notifications aren't signaled
until all previous enqueued requests on the queue have completed.

### Decompression

Decompression is handled with dedicated hardware. This removes the CPU overhead
from traditional decompression algorithms. DirectStorage allocates a fixed block
of memory during initialization to use as a working buffer for decompression.
This allows for in-place decompression and removes the need to hold both the
compressed and decompressed data in memory at the same time.

The decompression hardware supports three modes of operation. The modes aren't
mutually exclusive so any combination of modes can be specified. Decompression
modes are applied in the following order: `DEFLATE`, `BCPACK`, and `Swizzle`.

- `ZLibDecompress`
  - This is the [IETF RFC 1950](https://www.ietf.org/rfc/rfc1950.txt) compression standard.

- `BCPack`
  - `BCPack` is a custom entropy coder designed specifically for BCn data.
    Generally, what this means is that color endpoints are separated from
    palette indices (that is, weights) and compressed using a rANS algorithm.

- `Swizzle`
  - `Swizzle` and shuffle modes can provide additional optimizations in content pipelines.

When high entropy data is compressed, it's possible for the compression to
actually grow the size. Conversely, the corresponding decompression will shrink
in size. DirectStorage doesn't allow shrinking decompression, and it's up to
the title to detect high entropy data that's incompressible and avoid
compressing on such assets. For further details, see the guide to [Optimizing
Compressed Content using DirectStorage and XBTC (NDA topic)](directstorage-compression.md).

### Staging buffer

DirectStorage internally uses a buffer to stage all content read from the raw
NVMe storage before it performs operations such as decryption and
decompression. This staging buffer allows the NVMe drive and the decryption/decompression silicon to work in a pipeline in parallel. It defaults to 32 MiB
and is allocated when the first DirectStorage factory pointer is retrieved.

If a title uses DirectStorage for only memory-to-memory decompression
operations, the staging buffer isn't necessary, and
[SetStagingBufferSize](../../../../reference/system/dstorage/interfaces/IDStorageFactoryX/methods/idstoragefactoryx_setstagingbuffersize.md) can be called
to set the staging buffer size to 0.

The current release of DirectStorage supports staging buffer sizes of 0, 16, 20, 24, 28 and 32 MiB. A smaller than default value size will save memory for the title, but might impact the overall read performance.

**NOTE:** [SetStagingBufferSize](../../../../reference/system/dstorage/interfaces/IDStorageFactoryX/methods/idstoragefactoryx_setstagingbuffersize.md)
can only be called when no `IDStorageQueueX` object nor `IDStorageFileX` object exists, otherwise it will throw an error.

### CancelRequestsWithTag

DirectStorage supports cancellation of requests. Each request has a title-
defined 64-bit tag associated with it. The purpose is to serve as a bitmask for
which requests to cancel. The title supplies a mask and a value for
cancellation. The queue will attempt to cancel all requests that match the
criteria: `tag & mask == value`.

Cancellation is a best-effort operation. Depending on where the request is in
the pipeline, it might not be possible to cancel. For example, the request could
be undergoing decompression by the hardware, which can't be canceled. The API
returns immediately and doesn't block waiting for all canceled requests to be
processed. Titles must wait until a later notification in the queue is signaled
before freeing the resources that are associated with canceled requests.

Care must be taken to avoid adding requests to a queue at the same time
[CancelRequestsWithTag](../../../../reference/system/dstorage/interfaces/IDStorageQueueX/methods/idstoragequeuex_cancelrequestswithtag.md) is being called.
In this case, the behavior is undefined. However, requests added to the queue
after the call to [CancelRequestsWithTag](../../../../reference/system/dstorage/interfaces/IDStorageQueueX/methods/idstoragequeuex_cancelrequestswithtag.md)
has returned won't be canceled even if the criteria are matched. Only previously
enqueued requests will be canceled.

### GetErrorEvent/RetrieveErrorRecord

If a read causes an error, that read is marked as completed. Future
notifications in the queue aren't blocked from signaling. Notification of errors
is handled through an `Event` object associated with the queue that can be
retrieved with [GetErrorEvent](../../../../reference/system/dstorage/interfaces/IDStorageQueueX/methods/idstoragequeuex_geterrorevent.md). The title can
use **WaitForSingleObject** on the `Event` returned by
[GetErrorEvent](../../../../reference/system/dstorage/interfaces/IDStorageQueueX/methods/idstoragequeuex_geterrorevent.md). If the event is signaled,
the title can get the first error since the last call to
the [RetrieveErrorRecord](../../../../reference/system/dstorage/interfaces/IDStorageQueueX/methods/idstoragequeuex_retrieveerrorrecord.md) function
by calling the [RetrieveErrorRecord](../../../../reference/system/dstorage/interfaces/IDStorageQueueX/methods/idstoragequeuex_retrieveerrorrecord.md)
function.

The error record returned by
[RetrieveErrorRecord](../../../../reference/system/dstorage/interfaces/IDStorageQueueX/methods/idstoragequeuex_retrieveerrorrecord.md) only contains data
for the first failed request in the queue since the last
[RetrieveErrorRecord](../../../../reference/system/dstorage/interfaces/IDStorageQueueX/methods/idstoragequeuex_retrieveerrorrecord.md). The data in the
error record is undefined if the error `Event` isn't signaled or the data has
already been retrieved.

### Query

Obtains information about the queue. It includes the [DSTORAGE_QUEUE_DESC](../../../../reference/system/dstorage/structs/dstorage_queue_desc.md) or [DSTORAGE_QUEUE_DESC1](../../../../reference/system/dstorage/structs/dstorage_queue_desc1.md)
structures used for queue's creation as well as the number of empty slots
and number of entries that need to be enqueued to trigger automatic
submission.

## Best Practices

The same best practices advice given for Win32 also applies to DirectStorage.
The thresholds for optimal performance have changed radically.

### Read sizes

The original advice for a rotational disk was to read in at least 128 KiB
blocks. The performance continues to increase with larger block sizes. 512
KiB-sized blocks achieved the best performance.

The lack of moving parts on the NVMe creates a much lower threshold. The read
performance has a large jump starting with 32 KiB reads and starts to top out
with 64 KiB. Reading larger than this doesn't increase performance. This means
that less effort needs to be made to merge data into larger blocks in the
package for optimal performance.

Above 512 KiB, if decompression is used, prefer smaller but more requests in
parallel, over a single huge request. A single huge request will force the
decompression to be serialized, while multiple concurrent requests allow
multiple decompression hardware units to work in parallel and achieve full
throughput.

In the October 2022 release of the Microsoft Game Development Kit (GDK), the maximum single request
size has been increased from 32 MiB as destination to 1 GiB for combined (source plus
destination) memory usage. It's provided to ease porting from other storage APIs
that allow large read sizes. But the previous size recommendation for achieving
maximum throughput still remains the same, because large requests don't allow
multiple decompression hardware units to work in parallel.

### Order

Previously with rotational disks, effort was spent to order the location of
reads on the disk. The ideal situation was to read from sequential locations on
the disk. This created the minimum amount of movement by the disk head, which
removed seek-time as a factor. Doing this could increase performance by an order
of magnitude. There was even benefit in submitting random reads sorted by
location, and in some cases, 2x faster.

It's still useful to order read requests to be as sequential as possible on an
NVMe drive. The NVMe drive reads in 64 KiB-aligned blocks. Because of this,
there can be wasted bandwidth reading unused sections of a 64 KiB block. If a
read request is only for 4 KiB, there will be 60 KiB of wasted bandwidth. The
NVMe will reuse that extra 60 KiB to satisfy other pending requests if possible.
For example, if you have two sequential reads, one for 32 KiB followed by 8 KiB,
there's still only one 64 KiB read from the drive.

### Queue management

The recommendation with rotation disks was to have a queue size between 12 and
16. There was no benefit with a larger queue depth, and the performance
reduction from using smaller queue depths was significant.

The NVMe specification says an NVMe drive should support multiple queues with a
depth of up to 65,536 entries per queue. DirectStorage supports this requirement,
thus allowing the title to submit thousands of requests at once.

Previously with rotational disks, titles would buffer pending requests to keep a
queue depth in the 12 to 16 range. The recommendation for DirectStorage is to
not buffer requests, but enqueue requests as soon as they're created. The entire
system is a pipeline, and title buffering will create bubbles in the pipeline,
which can seriously hurt performance.

Another recommendation is to create a queue with a capacity at least four times
the largest number of requests created per frame. This should allow enough
capacity so new requests can be added without stalling, waiting for existing
requests to complete.

### Notification management

In general, the fewer notification requests added to the queue the better. The
recommendation is to find a balance between title needs and keeping enqueued
notification requests to a minimum. Enqueuing a notification after each request
will only hurt overall performance due to the increased overhead of processing
of those notifications.

One example might be grouping on content. For example, SFS textures, terrain
needs (for example, mesh and texture), and actor needs (for example, mesh,
texture, and animation). This allows a single notification to be bound to the
availability of all assets that are needed to create an object.

The choice between using an `ID3D12Fence` versus a status array is dependent on
the title needs. Does the data need to be used immediately by the GPU? Is it
acceptable for the checking thread to suspend until reads are done? Is polling
periodically good enough because data can only be processed at certain points in
the frame?

### Considerations

With the potential of a much higher number of requests in flight, some care must
be taken to avoid creating bottlenecks in other parts of the title. The costs
for the title to manage the requests could quickly overwhelm the savings
achieved by DirectStorage. The recommendation is to look at all the supporting
code per request and determine what can be minimized.

Does each request require the allocation of a new memory block?

  - The memory system has overhead to find a new block and update internal lists.
  - Consider reusing memory blocks as much as possible.

Is a lock required to update managers?

  - Creates more contention as more updates are performed.
  - Consider going lockless as much as possible.

Is speculative loading used?

  - Cancellation is supported, which could lead to creating more requests.
  - However, memory needs to be available for the speculation.
  - Consider hard limits on speculation thresholds.

## See also

[DirectStorage](../directstorage-toc.md)  
[DirectStorage Usage and Internal Details (NDA topic)](directstorage-white-paper.md)  
[Optimizing Compressed Content using DirectStorage and XBTC (NDA topic)](directstorage-compression.md)  
[Analyzing DirectStorage performance (NDA topic)](../../../../tools/tools-console/pix/pix-directstorage.md)  
