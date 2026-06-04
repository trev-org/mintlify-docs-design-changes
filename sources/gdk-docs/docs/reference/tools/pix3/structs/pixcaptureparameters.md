---
author: aablackm
title: "PIXCaptureParameters"
description: "Parameters for PIXBeginCapture."
kindex:
- PIXCaptureParameters
- PIX, PIXCaptureParameters
ms.author: mattployhar
ms.topic: reference
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# PIXCaptureParameters  

Parameters for [PIXBeginCapture](../functions/pixbegincapture.md).  

## Syntax  

```cpp
union PIXCaptureParameters
{
    enum PIXCaptureStorage
    {
        Memory = 0,
        MemoryCircular = 1, // Xbox only
        FileCircular = 2, // PC only
    };

    struct GpuCaptureParameters
    {
        PCWSTR FileName;
    } GpuCaptureParameters;

    struct TimingCaptureParameters
    {
        PCWSTR FileName;
        UINT32 MaximumToolingMemorySizeMb;
        PIXCaptureStorage CaptureStorage;

        BOOL CaptureGpuTiming;

        BOOL CaptureCallstacks;
        BOOL CaptureCpuSamples;
        UINT32 CpuSamplesPerSecond;

        BOOL CaptureFileIO;

        BOOL CaptureVirtualAllocEvents;
        BOOL CaptureHeapAllocEvents;
        BOOL CaptureXMemEvents; // Xbox only
        BOOL CapturePixMemEvents;
        BOOL CapturePageFaultEvents;
        BOOL CaptureVideoFrames; // Xbox only
    } TimingCaptureParameters;
};

typedef PIXCaptureParameters* PPIXCaptureParameters;
```

### Members  
  
*FileName*  
Type: PWSTR  

The file name for the capture on the console.  

*MaximumToolingMemorySizeMb*  
Type: UINT32  

The maximum number in MB of the buffer in tooling memory that will be used to hold capture data.  
The capture will either stop when the memory buffer is full, or use the the tooling memory as a ring buffer, depending on the value of *CaptureStorage*.

*CaptureStorage*  
Type: PIXCaptureStorage  

The capture mode.  When set to *Memory* `PIXBeginCapture` will fill up the tooling memory made available, then will discard any new data that comes in.  When set to *MemoryCircular*, `PIXBeginCapture` will use the tooling memory as a ring buffer.  The capture will run until tooling memory is full, but instead of stopping the capture, the oldest data will be aged out to make room for new data.  

*CaptureGpuTiming*  
Type: BOOL  

Determines whether or not to capture GPU Timing data, including PIX GPU events, GPU work, PIX GPU Markers and API Markers.

*CaptureCallstacks*  
Type: BOOL  

Determines whether or not to capture call stacks for context switches.  

*CaptureCpuSamples*  
Type: BOOL  

Determines whether or not to capture CPU samples.   

*CpuSamplesPerSecond*  
Type: UINT32  

The number of CPU samples per second to capture.   
  
*CaptureFileIO*  
Type: BOOL  

Determines whether or not to capture DirectStorage and Win32 file IO.  

*CaptureVirtualAllocEvents*  
Type: BOOL  

Determines whether or not to capture virtual allocation events.  

*CaptureHeapAllocEvents*  
Type: BOOL  

Determines whether or not to capture heap allocation events.  

*CaptureXMemEvents*  
Type: BOOL  

Determines whether or not to capture XMem allocation events.  

*CapturePixMemEvents*  
Type: BOOL  

Determines whether or not to capture allocations made with title-defined custom memory allocators.  

*CapturePageFaultEvents*  
Type: BOOL  

Determines whether or not to capture page fault events. 

*CaptureVideoFrames*  
Type: BOOL  

Determines whether or not to capture video frames. 

## Remarks  
  
This union is used by [PIXBeginCapture](../functions/pixbegincapture.md) to start a programmatically controlled PIX timing capture.   
  
`PixBeginCapture` also uses the flags returned by [PixGetCaptureState](../functions/pixgetcapturestate.md).   
   

## Requirements  

**Header:** pix3.h
  
**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  
[PIXBeginCapture](../functions/pixbegincapture.md)  
[PIX (NDA topic)](../../../../tools/tools-console/pix/pix.md)  
[pix3](../pix3_members.md)  