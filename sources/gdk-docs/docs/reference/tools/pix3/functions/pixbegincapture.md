---
author: aablackm
title: "PIXBeginCapture"
description: "Starts a programmatically controlled PIX capture."
kindex:
- PIXBeginCapture
- PIX, PIXBeginCapture
ms.author: mattployhar
ms.topic: reference
edited: 00/00/0000
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# PIXBeginCapture  
  
Starts a programmatically controlled PIX timing capture.
  

## Syntax  

```cpp
HRESULT PIXBeginCapture(  
         DWORD captureFlags,  
         const PPIXCaptureParameters captureParameters  
)  
```  

### Parameters  
  
*captureFlags* &nbsp;&nbsp;  
Type: DWORD  


A flag indicating the type of capture to perform. Only one capture flag can be passed to `PIXBeginCapture` at a time. 

*captureParameters* &nbsp;&nbsp;\_In\_opt\_  
Type: PPIXCaptureParameters  

For timing captures, pass a pointer to the `TimingCaptureParameters` structure, or pass a pointer to the [PIXCaptureParameters](../structs/pixcaptureparameters.md) union, which contains the `TimingCaptureParameters` structure.  

### Return value
  
Type: HRESULT

Indicates whether the capture was successfully initiated. S_FALSE is returned on success. Only one capture may be running at a time. If `PIXBeginCapture` is called when another capture is currently running, E_PENDING will be returned and the call will have no effect.  
  
#### Flags
  
| Flag | Value | Description |  
| --- | --- | --- |  
| PIX_CAPTURE_TIMING | (1 << 0) | System timing.|  
| PIX_CAPTURE_GPU | (1 << 1) | Captures all commands and their inputs sent to the GPU so that it can be replayed and analyzed.|  
| PIX_CAPTURE_FUNCTION_SUMMARY | (1 << 2) | A function summary capture was initiated from the **Home** tab.|  
| PIX_CAPTURE_FUNCTION_DETAILS | (1 << 3) | A request for additional function details was initiated using the **Capture Additional Calls** button from either a function summary or callgraph capture.|  
| PIX_CAPTURE_CALLGRAPH | (1 << 4) | A callgraph capture was initiated either from PIX or programmatically by calling `PIXBeginCapture`.|  
| PIX_CAPTURE_INSTRUCTION_TRACE | (1 << 5) | A CPU instruction trace capture is in progress.|  
| PIX_CAPTURE_SYSTEM_MONITOR_COUNTERS | (1 << 6) | System monitor counters.|  
| PIX_CAPTURE_VIDEO | (1 << 7) | Video playback.|  
| PIX_CAPTURE_AUDIO | (1 << 8) | Audio playback.|
| PIX_CAPTURE_GPU_TRACE | (1 << 9) | Captures GPU Streaming Performance Monitor (SPM) counters and Shader Queue Thread Tracing (SQTT) data from nearly all GPU blocks. |
| PIX_CAPTURE_RESERVED | (1 << 15) |  Placeholder flag used internally by PIX for future or specialized capture scenarios.  |

<a id="remarksSection"></a>
  
## Remarks  
  
This function initiates a PIX capture from title code. `PIXBeginCapture` can currently only be used to take a [timing capture (NDA topic)](../../../../tools/tools-console/pix/new-timing-captures.md).


`PIXBeginCapture` stores the capture data in tooling memory on the console.  The amount of tooling memory made available to the capture is specified by setting the `MaximumToolingMemorySizeMb` field in the [PIXCaptureParameters](../structs/pixcaptureparameters.md) structure.

Programmatic Timing Captures can be taken in one of two modes, as defined by the value of the `PIXCaptureStorage` enum in the [PIXCaptureParameters](../structs/pixcaptureparameters.md) structure.  When `PIXCaptureStorage` is set to *Memory* `PIXBeginCapture` will fill up the tooling memory made available, then will discard any new data that comes in.  When `PIXCaptureStorage` is set to *MemoryCircular*, `PIXBeginCapture` will use the tooling memory as a ring buffer.  The capture will run until tooling memory is full, but instead of stopping the capture, the oldest data will be aged out to make room for new data.  The capture will continue to run.  *MemoryCircular* captures are designed to run for extended periods of time, while not exhausting the available tooling memory on the console.

Timing captures taken using `PIXBeginCapture` must be copied back to the PC and converted into an .xpix file before they can be viewed in PIX.  See [Opening Programmatic Timing Captures (NDA topic)](../../../../tools/tools-console/pix/open-offline-timing-captures.md) for a description of the steps required to view a programmatic capture in PIX.

Use [PIXEndCapture](pixendcapture.md) to stop a PIX capture from title code.

```cpp
//
//  timing capture
//
PIXCaptureParameters captureParams = {};

captureParams.TimingCaptureParameters.CaptureGpuTiming = TRUE;
captureParams.TimingCaptureParameters.CaptureCallstacks = TRUE;
captureParams.TimingCaptureParameters.CaptureCpuSamples = TRUE;
captureParams.TimingCaptureParameters.CpuSamplesPerSecond = 4000;

captureParams.TimingCaptureParameters.CaptureStorage = PIXCaptureParameters::Memory;
captureParams.TimingCaptureParameters.FileName = wstrFilename;
captureParams.TimingCaptureParameters.MaximumToolingMemorySizeMb = 4096;

XSF_ERROR_IF_FAILED(PIXBeginCapture(PIX_CAPTURE_TIMING, &captureParams));

```
  
## Requirements  
  
**Header:** pix3.h
  
**Library:** pixevt.lib
  
**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  
  
[PIXEndCapture](pixendcapture.md)  
[PIXCaptureParameters](../structs/pixcaptureparameters.md)  
[PIX3](../pix3_members.md)  
[PIX (NDA topic)](../../../../tools/tools-console/pix/pix.md)  