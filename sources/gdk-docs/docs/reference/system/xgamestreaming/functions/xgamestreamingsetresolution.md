---
author: gozhou
title: "XGameStreamingSetResolution"
description: "Sets the resolution of the stream."
kindex: XGameStreamingSetResolution
ms.author: gozhou
ms.topic: reference
applies-to: pc-gdk
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# XGameStreamingSetResolution

Sets the resolution of the stream.

## Syntax  
  
```cpp
HRESULT XGameStreamingSetResolution(
        uint32_t width,
        uint32_t height
)
```  

### Parameters  
  
*width* &nbsp;&nbsp;\_In\_  
Type: uint32_t  
  
The width to set the stream resolution to.
  
*height* &nbsp;&nbsp;\_In\_  
Type: uint32_t  
  
The height to set the stream resolution to.

### Return value
Type: HRESULT
  
Returns **S_OK** if successful; otherwise, returns an error code.

#### Potential Errors

| Error Code | Error Value | Reason for Error |
| --- | --- | --- | 
| E_GAMESTREAMING_NOT_INITIALIZED | 0x89245400 | The XGameStreaming runtime has not been initialized. Call XGameStreamingInitialize before calling other APIs. |
| E_INVALIDARG | 0x80070057 | The *width* and/or the *height* parameter or the hardware did not meet the requirements. |

For a list of error codes, see [Error Codes](../../../errorcodes.md).  

## Remarks

This API with non-standard resolutions will only succeed on Xbox Game Streaming servers, Xbox Series X Dev Kit, and Xbox Series S Test Kit. Standard resolutions like 720p and 1080p will succeed regardless of the hardware. The reason is because a retail Xbox can only stream via Remote Play and may still be outputting video to the TV so using a non-standard resolution would produce a distorted image.

The width and height must be a minimum of 640x360 and the maximum can be found in the `maxWidth` and `maxHeight` fields of the [XGameStreamingDisplayDetails](../structs/xgamestreamingdisplaydetails.md) which can be retrieved from [XGameStreamingGetDisplayDetails](xgamestreaminggetdisplaydetails.md).

The maximum pixels, calculated from `width` * `height`, must be equal to or less than the encoder's maximum. The maximum can be found by using the [XGameStreamingGetDisplayDetails](xgamestreaminggetdisplaydetails.md) API. This value may be increased in the future.

The `width` and `height` must be divisible by 8.

The API can be called as frequently as desired however the stream resolution can only change once every 200ms. The last resolution from any calls that occur within that 200ms window will be applied after that window has elapsed.

Be aware that this API will set the resolution on the stream for all connected clients. This means that special consideration must be taken to determine what is the best option for the game when multiple clients are connected. It may mean using a standard 16:9 resolution or it may mean trying to find the resolution that best fits all clients. 

> [!NOTE]
> Changing the stream resolution modifies view rectangle scaling in ID3D12CommandQueue::PresentX. D3D12XBOX_PRESENT_PLANE_PARAMETERS.pDestPlacementBase scale factors of 0.0-1.0 refer to the height and width passed to XGameStreamingSetResolution, rather than the standard 1920x1080 or 3840x2160 resolution they would otherwise refer to.  

## Example

```C++

#define DEFAULT_GAME_WIDTH 1920
#define DEFAULT_GAME_HEIGHT 1080

#define GAME_WIDEST_SUPPORTED_ASPECT_RATIO 21.5f / 9.0f
#define GAME_TALLEST_SUPPORTED_ASPECT_RATIO 16.0f / 10.0f

static uint32_t s_currentStreamWidth = DEFAULT_GAME_WIDTH;
static uint32_t s_currentStreamHeight = DEFAULT_GAME_HEIGHT;

// Option 1: Event driven. Note: be aware of potential threading issues when using the task queue.
void GameStreamingClientManager::OnConnectionStateChanged(XGameStreamingClientId client, XGameStreamingConnectionState connected)
{
    // Other connection work like registering or unregistering for the client properties change events.
    ...

    UpdateResolutionIfNeeded();
}

void GameStreamingClientManager::OnClientPropertiesChanged(
    XGameStreamingClientId client,
    uint32_t updatedPropertiesCount,
    XGameStreamingClientProperty* updatedProperties)
{
    for (uint32_t i = 0; i < updatedPropertiesCount; ++i)
    {
        switch (updatedProperties[i])
        {
        case XGameStreamingClientProperty::DisplayDetails:
        {
            UpdateResolutionIfNeeded();
            break;
        }

        default:
            // A characteristic we are not tracking - do nothing
            break;
        }
    }
}

// Option 2: Polling.

void Game::Update(DX::StepTimer const& timer)
{
    ...

    gameStreamingClientManager->UpdateResolutionIfNeeded();

    ...
}

void GameStreamingClientManager::UpdateResolutionIfNeeded()
{
    bool changeResolution = false;
    bool useDefaultResolution = true;

    // Only use custom resolution when there is only one streaming client connected.
    if (XGameStreamingGetClientCount() == 1)
    {
        XGameStreamingClientId client;
        uint32_t clientsUsed = 0;
        HRESULT hr = XGameStreamingGetClients(1, &client, &clientsUsed);
        if (SUCCEEDED(hr) && clientsUsed == 1)
        {
            XGameStreamingDisplayDetails displayDetails = {};
            hr = XGameStreamingGetDisplayDetails(client, DEFAULT_GAME_WIDTH * DEFAULT_GAME_HEIGHT, GAME_WIDEST_SUPPORTED_ASPECT_RATIO, GAME_TALLEST_SUPPORTED_ASPECT_RATIO, &displayDetails);

            if (SUCCEEDED(hr))
            {
                useDefaultResolution = false;

                // Assuming the game supports all resolutions, use the stream resolution to the preferred dimensions as provided.
                if (s_currentStreamWidth != displayDetails.preferredWidth || s_currentStreamHeight != displayDetails.preferredHeight)
                {
                    changeResolution = true;
                    s_currentStreamWidth = displayDetails.preferredWidth;
                    s_currentStreamHeight = displayDetails.preferredHeight;
                }
            }
            else
            {
                LogFormat(L"XGameStreamingGetDisplayDetails failed %x", hr);
            }
        }
        else
        {
            LogFormat(L"XGameStreamingGetClients failed hr=%x clientsUsed=%d", hr, clientsUsed);
        }
    }

    if (useDefaultResolution)
    {
        if (s_currentStreamWidth != DEFAULT_GAME_WIDTH || s_currentStreamHeight != DEFAULT_GAME_HEIGHT)
        {
            changeResolution = true;
            s_currentStreamWidth = DEFAULT_GAME_WIDTH;
            s_currentStreamHeight = DEFAULT_GAME_HEIGHT;
        }
    }

    if (changeResolution)
    {
        // Update the stream to the new resolution.
        HRESULT hr = XGameStreamingSetResolution(s_currentStreamWidth, s_currentStreamHeight);
        if (SUCCEEDED(hr))
        {
            // Update the game to render at the new resolution.
        }
        else
        {
            LogFormat(L"XGameStreamingSetResolution failed %x", hr);
        }
    }
}

```

## Requirements  
  
**Header:** xgamestreaming.h  
**Library:** xgameruntime.lib  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XGameStreaming](../xgamestreaming_members.md)  
[XGameStreamingDisplayDetails](../structs/xgamestreamingdisplaydetails.md)  
[XGameStreamingGetDisplayDetails](xgamestreaminggetdisplaydetails.md)  
[Custom Resolution Overview](../../../../features/common/game-streaming/game-streaming-custom-resolution-overview.md)  