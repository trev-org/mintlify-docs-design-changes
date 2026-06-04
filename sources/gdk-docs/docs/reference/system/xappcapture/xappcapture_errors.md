---
author: avchikar97
title: "XAppCapture Error Codes"
description: "XAppCapture Error Codes"
kindex: XAppCaptureErrors
ms.author: achikarmane
ms.topic: reference
edited: 08/19/2024
quality: good
applies-to: pc-gdk
ms.date: '08/19/2024'
permissioned-type: public
---

# XAppCapture Error Codes

A list of all XAppCapture-specific error codes that can be generated from [XAppCapture APIs](xappcapture_members.md).

| HRESULT | Message |  
| --- | --- |  
| 0x82323001 | The GameDVR service unexpectedly shut down |  
| 0x82323002 | There is not enough storage space to save another clip |  
| 0x82323003 | StartRecord(...) did not finish or was not called from this instance of ApplicationClipCapture before calling StopRecord(...) |  
| 0x82323004 | There are too many concurrent recordings |  
| 0x82323005 | HTTP Response text is too big |  
| 0x82323006 | Information about an earlier call to StartRecord(...) is missing. StopRecord(...) may have been called too late |  
| 0x82323007 | StopRecord(...) was not called within the alloted time after StartRecord(...) |  
| 0x82323008 | The asynchronous called failed but did not return an error code |  
| 0x82323009 | Update attempted on a clip where cloud ID is not available |  
| 0x8232300A | There was an error writing to the file |  
| 0x8232300B | Did not find any frames to record. Either game was in the background during the specified time period or recording was requested too soon after the game was activated |  
| 0x8232300C | Did not find any frames to record. Either game was in the background during the specified time period or game not running during the specified time period |  
| 0x8232300D | The clip metadata is incorrectly formatted |  
| 0x8232300E | Start time is too old or too far into future |  
| 0x8232300F | Duration of recording is too short or too long |  
| 0x82323010 | The user or title does not have access to the specified clip |  
| 0x82323011 | There is no field to update |  
| 0x82323012 | Recording was disabled during the time period requested |  
| 0x82323013 | StartRecord(...) was called while another recording is being made |  
| 0x82323014 | StopRecord(...) was called but no recording was started |  
| 0x82323015 | RecordTimespan(...) was called while another recording is being made |  
| 0x82323016 | There was a delay uploading the clip. Upload will be attempted again later. Games can safely ignore this error, or use it to inform the user that the request is still in the queue but will take more time to complete |  
| 0x82323017 | Either there is no title running or the title does not have proper credentials |  
| 0x82323018 | GameDVR is blocked by title |  
| 0x82323019 | Cannot perform this operation on a local clip |  
| 0x8232301A | Guest user is not supported for this API |  
| 0x8232301B | Broadcast is in progress |  
| 0x8232301C | GameStreaming is blocked for this title |  
| 0x8232301D | GameStreaming is in progress |  
| 0x8232301E | GameDVR is disabled by the game captures setting in Preferences |  
| 0x8232301F | Too many files, cannot create more |  
| 0x82323020 | Game is not visible and cannot be recorded |  
| 0x82323021 | WebCamera is not available |  
| 0x82323022 | Preview Stream is not available when RecordingMode is not GameDVR |  
| 0x82323023 | GameDVR pipeline is still waiting for the first iframe |  
| 0x82323024 | GameDVR is allowed only by user |  
| 0x82323025 | Operation comes too soon in sequence |  

## See also  

[XAppCapture reference](xappcapture_members.md)  
[System API reference](../gc-reference-system-toc.md)  
