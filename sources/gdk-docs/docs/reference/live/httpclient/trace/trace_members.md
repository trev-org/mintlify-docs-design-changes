---
author: XBL
title: "trace (contents)"
description: Trace API
kindex: trace
ms.author: tculotta
ms.topic: navigation
security: public
edited: 00/00/0000
applies-to: pc-gdk
---

# trace  

  
## Interfaces  

| Interface | Description |  
| --- | --- |  
| [HCTraceImplScopeHelper](interfaces/HCTraceImplScopeHelper/hctraceimplscopehelper.md) | TBD   |  
  
## Functions  

| Function | Description |  
| --- | --- |  
| [HCSettingsGetTraceLevel](functions/hcsettingsgettracelevel.md) | Gets the trace level for the library. |  
| [HCSettingsSetTraceLevel](functions/hcsettingssettracelevel.md) | Sets the trace level for the library. Traces are sent the debug output. |  
| [HCTraceCleanup](functions/hctracecleanup.md) | Clean up tracing for the library. |  
| [HCTraceImplGetAreaVerbosity](functions/hctraceimplgetareaverbosity.md) | Get the trace verbosity level of an trace area. |  
| [HCTraceImplMessage](functions/hctraceimplmessage.md) | Send a trace message. |  
| [HCTraceImplSetAreaVerbosity](functions/hctraceimplsetareaverbosity.md) | Set the verbosity level of an trace area. |  
| [HCTraceInit](functions/hctraceinit.md) | Initialize tracing for the library. |  
| [HCTraceSetClientCallback](functions/hctracesetclientcallback.md) | Set a client callback for tracing. Note that once a trace callback is set, it may be called until HCTraceCleanup is called. |  
| [HCTraceSetEtwEnabled](functions/hctracesetetwenabled.md) | Enables or disables ETW tracing for Xbox and PC platforms. |  
| [HCTraceSetPlatformCallbacks](functions/hctracesetplatformcallbacks.md) | Sets the Platform Callbacks. |  
| [HCTraceSetTraceToDebugger](functions/hctracesettracetodebugger.md) | Sets or unsets if the trace is sent to the debugger. |  
  
## Structures  

| Structure | Description |  
| --- | --- |  
| [char](structs/char.md) | TBD   |  
  
## Enumerations  

| Enumeration | Description |  
| --- | --- |  
| [HCTraceLevel](enums/hctracelevel.md) | Diagnostic level used by tracing.|  
