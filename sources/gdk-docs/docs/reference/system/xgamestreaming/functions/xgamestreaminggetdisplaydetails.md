---
author: gozhou
title: "XGameStreamingGetDisplayDetails"
description: "Gets the display details of the streaming client."
kindex: XGameStreamingGetDisplayDetails
ms.author: gozhou
ms.topic: reference
applies-to: pc-gdk
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# XGameStreamingGetDisplayDetails

This API returns display details of the specified client. This can be used to make informed decisions like what custom aspect ratios to render at or what resolution to use to enable DirectCapture. 

## Syntax  
  
```cpp
HRESULT XGameStreamingGetDisplayDetails(
        XGameStreamingClientId client,
        uint32_t maxSupportedPixels,
        float widestSupportedAspectRatio,
        float tallestSupportedAspectRatio,
        XGameStreamingDisplayDetails* displayDetails
)
```  

### Parameters  
  
*client* &nbsp;&nbsp;\_In\_  
Type: XGameStreamingClientId  
  
The streaming client that is being queried.
  
*maxSupportedPixels* &nbsp;&nbsp;\_In\_  
Type: uint32_t  
  
The maximum number of pixels supported by the game.

*widestSupportedAspectRatio* &nbsp;&nbsp;\_In\_  
Type: float
  
The widest aspect ratio supported by the game. This is computed from width / height using the widest supported resolution.

*tallestSupportedAspectRatio* &nbsp;&nbsp;\_In\_  
Type: float

The tallest aspect ratio supported by the game. This is computed from width / height using the tallest supported resolution.

*displayDetails* &nbsp;&nbsp;\_Out\_  
Type: [XGameStreamingDisplayDetails*](../structs/xgamestreamingdisplaydetails.md)  

The display details of the streaming client.

### Return value
Type: HRESULT
  
Returns **S_OK** if successful; otherwise, returns an error code.

#### Potential Errors

| Error Code | Error Value | Reason for Error |
| --- | --- | --- | 
| E_GAMESTREAMING_NOT_INITIALIZED | 0x89245400 | The XGameStreaming runtime has not been initialized. Call XGameStreamingInitialize before calling other APIs. |
| E_GAMESTREAMING_CLIENT_NOT_CONNECTED | 0x89245401 | The specified client is not connected. |
| E_GAMESTREAMING_NO_DATA | 0x89245402 | The requested data is not available. The data may be available later. |
| E_INVALIDARG | 0x80070057 | One or more of the parameters were invalid. `maxSupportedPixels` must be larger than 0. `widestSupportedAspectRatio` must be equal to or greater than 16/9 and must not be infinite. `tallestSupportedAspectRatio` must be equal to or less than 16/9 and must be larger than 0. |

For a list of error codes, see [Error Codes](../../../errorcodes.md).  

## Remarks

The data within `displayDetails` can be used to drive aspects of the game such as the resolution to render the game and to inform where to place critical info or UI to ensure it is interactable and not obscured.  

The `preferredWidth` and `preferredHeight` within the `displayDetails` struct is based on the actual display on the streaming client, limitations based on the streaming system, and the parameters provided by the game (`maxSupportedPixels`, `widestSupportedAspectRatio`, `tallestSupportedAspectRatio`).

Keep in mind that the data may not available at game startup and that it may not necessarily be available at the time of the client connected event so games should either use events or polling.

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

[XGameStreamingRegisterClientPropertiesChanged](xgamestreamingregisterclientpropertieschanged.md)  

[XGameStreamingSetResolution](xgamestreamingsetresolution.md)

[Custom Resolution Overview](../../../../features/common/game-streaming/game-streaming-custom-resolution-overview.md)