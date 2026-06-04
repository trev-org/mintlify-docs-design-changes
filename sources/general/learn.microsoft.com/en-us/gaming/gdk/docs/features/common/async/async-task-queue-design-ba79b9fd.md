# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-task-queue-design?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-task-queue-design?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Async task queue design

Feedback

Summarize this article for me

This topic describes the Microsoft Game Development Kit (GDK) task queue that's used in conjunction with the Microsoft Game Development Kit (GDK) async design pattern. A _task queue_ is an API to queue work and for completion task callbacks. A task queue can be configured in one of several different dispatch modes, including a manual dispatching mechanism that you can use to carefully manage gaming workloads.

## Task queue API overview

A task queue is a composite of two queue ports: a work port and a completion port. These ports are bundled into the same object because you often need both: the work port for doing asynchronous work and the completion port for telling the user about it.

A task queue is described as follows.

- Contains two task queue ports.
 
- Each task queue port can have its own dispatch mode, which dictates how items in the queue are dispatched.
 
- Dispatch modes range from fully automatic dispatching through the system thread pool to fully manual dispatching where tasks must be explicitly removed.
 
- Callbacks can be submitted to either port of the queue.
 
- Queues are represented as handles. Handles can be duplicated, which essentially increases a reference count on the queue.
 

You can independently configure each task queue port by specifying a dispatch mode. A _dispatch mode_ determines how callbacks that are queued to a port are processed. There are several dispatch modes.

- **Thread Pool:** Callbacks that are queued to a thread pool queue are executed on the system thread pool. The thread pool invokes the calls in parallel, taking a call to execute from the queue in turn as thread pool threads become available.
 
- **Serialized Thread Pool:** Callbacks are queued and run on the thread pool but are run one after the other instead of running parallel across all thread pool threads.
 
- **Manual:** Callbacks that are queued to a manual queue aren't automatically dispatched. It's up to you to dispatch them on any thread you want. If you use manual task queues, you must ensure that you also pump the Windows message queue.
 
- **Immediate:** The immediate dispatch mode doesn't queue at all. It immediately executes the call on the thread that submitted the callback.
 

A task queue handle is a sharable resource. Closing the handle releases a reference on the queue. The queue isn't actually destroyed until all the references are released. `XTaskQueueDuplicateHandle`, `XTaskQueueSubmitCallback`, `XTaskQueueSubmitDelayedCallback` and `XTaskQueueCreateComposite` all add a reference to the queue handle. This means that the queue doesn't actually get destroyed until all callbacks have been completed.

A task queue handle is a per-process resource and can't be marshaled or used outside the process.

### Usage pattern

The typical usage pattern for a task queue is as follows.

1. Create a task queue handle, and then specify the dispatch modes for each port.
 
2. If you're using manual dispatching, establish app-specific threads for calling the queue's dispatch function.
 
3. Use the queue as a parameter to Microsoft Game Development Kit (GDK) calls or directly submit by using `XTaskQueueCallback`.
 
4. Optionally, terminate the task queue when your app shuts down.
 

### Async task queue how-to topics

This section provides how-to examples for common async task queue scenarios.

## In this section

[Creating a thread pool task queue](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-task-queue-design-howto/creating-thread-pool-task-queue?view=gdk-2604) 
Provides an example that shows how to create a task queue that dispatches both work and completion callbacks on the system thread pool.

[Submitting callbacks](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-task-queue-design-howto/submitting-callbacks?view=gdk-2604) 
Provides an example that shows how a callback is submitted to either the work port or the completion port of a task queue.

[Duplicating a task queue handle](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-task-queue-design-howto/duplicating-task-queue-handle?view=gdk-2604) 
Provides an example that shows how to duplicate a task queue handle. If you have long-running work, you might want to duplicate the task queue handle for the duration of the work. In this way, anyone calling `XTaskQueueCloseHandle` won't close the queue while you still need it.

[Creating a manual task queue](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-task-queue-design-howto/creating-manual-task-queue?view=gdk-2604) 
Provides an example that shows how to create a manually pumped task queue. It creates two STL threads that dispatch calls for both the work port and the completion port.

[Using events to control manual queue dispatching](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-task-queue-design-howto/control-manual-queue-dispatching?view=gdk-2604) 
Provides an example that shows how to use a task queue to signal a condition variable when it has items to dispatch.

[Using a task queue with a Windows message loop](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-task-queue-design-howto/task-queue-windows-msg-loop?view=gdk-2604) 
Provides an example that uses the thread pool for work but integrates completion port callbacks into a Win32 Window proc. This example also demonstrates the correct termination of a task queue when you integrate it with another threading model.

[Using the process task queue](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-task-queue-design-howto/using-process-task-queue?view=gdk-2604) 
Provides an example that shows how to use the process task queue. The default process task queue uses the thread pool for both work and completion dispatching.

[Creating a composite task queue](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-task-queue-design-howto/creating-composite-task-queue?view=gdk-2604) 
Provides an example that uses the thread pool for work but integrates completion port callbacks into a Win32 WindowProc callback function. This example also demonstrates the correct termination of a task queue when you're integrating it with another threading model.

[Using delayed callbacks](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-task-queue-design-howto/using-delayed-callbacks?view=gdk-2604) 
Provides an example that shows how to use delayed callbacks, invoking 10 callbacks once every 500 ms. Use a task queue to submit callbacks in the future by using the `XTaskQueueSubmitDelayedCallback` API. In this way, you can retry a failed call after a short delay, or use it as a cheap timer for periodic events.

[Using a task queue waiter](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-task-queue-design-howto/using-task-queue-waiter?view=gdk-2604) 
Provides an example that shows how to use a task queue waiter. You can register a Win32 kernel handle with a task queue. Your callback will be submitted to the queue when the handle becomes signaled.

### See also

[System](https://learn.microsoft.com/en-us/gaming/gdk/docs/archive/gc-system-toc?view=gdk-2604)

[Asynchronous programming model](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/async/async-programming-model?view=gdk-2604)

[XTaskQueue](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xtaskqueue/xtaskqueue_members?view=gdk-2604)

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

- Last updated on 04/28/2025