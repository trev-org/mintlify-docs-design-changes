---
title: "Updating a user's Presence via REST"
description: "Provides example code for updating Rich Presence strings."
kindex:
- Updating a user's Presence via REST
- Rich Presence
- Xbox services, Updating a user's Presence via REST
- Xbox services, REST
- Xbox services, Rich Presence
- Xbox services, XSAPI
author: joannaleecy
ms.topic: article
ms.localizationpriority: medium
ms.assetid: eb2bb82e-8730-4d74-9b33-95d133360e44
ms.date: '09/02/2022'
edited: 00/00/0000
permissioned-type: public
---

# Updating a user's Presence via REST

This topic provides example code for updating Rich Presence strings.

To update a Rich Presence string in your title, call the `Write Title` URI with the appropriate parameters in a JSON object.

This RESTful call is also wrapped by Xbox Service APIs (XSAPIs).
For information about the API that's related to this call, see [XblPresenceSetPresenceAsync](../../../../reference/live/xsapi-c/presence_c/functions/xblpresencesetpresenceasync.md).

The URI looks like the following:

```uri
POST /users/xuid({xuid})/devices/current/titles/current
```

The following fields are only for setting Rich Presence strings.
Other optional fields are related to writing presence for a title, but they're not listed in this topic.


## TitleRequest object

Property | Type | Required | Description
---|---|---|---
Activity|ActivityRequest|No|The record that describes in-title information (Rich Presence and media information, if available)


## ActivityRequest object

Property | Type | Required | Description
---|---|---|---
richPresence|RichPresenceRequest|No|The friendlyName of the Rich Presence string to use


## RichPresenceRequest object

Property | Type | Required | Description
---|---|---|---
Id|String|Yes|The friendlyName of the Rich Presence string to use
Scid|String|Yes|The scid that tells where the Rich Presence strings are defined

For example, to update the Rich Presence for the user whose xuid is 12345, the call looks like the following:

```uri
POST /users/xuid(12345)/devices/current/titles/current
```

It has the following JSON body.

```json
          {
            activity:
            {
              richPresence:
              {
                id:"playingMap",
                scid:"0000-0000-0000-0000-01010101"
              }
            }
          }
```

Using the wrapper API, this is a call to [XblPresenceSetPresenceAsync](../../../../reference/live/xsapi-c/presence_c/functions/xblpresencesetpresenceasync.md).

If you're keeping Xbox Player Data up to date, you don't have to reset the Rich Presence string to fill in the blank every time that the data changes.
In the previous example, the current map is being used.

Presence looks up the data in Xbox Player Data when a user tries to read the string to fill in the current value.
Even if the user is switching from one map to another, you don't have to reset the Rich Presence string in your game as long as you're sending the appropriate events to Xbox Player Data.

It might take a few seconds for the data to migrate through the Xbox Player Data system.

When someone attempts to read the Rich Presence of user 12345, the service looks at what locale is being requested and formats the string appropriately before returning it.
In this case, suppose a user wants to read the en-US string.

Reading Rich Presence works as follows.

```uri
GET /users/xuid(12345)?level=all
```

For more information about this call, see `GET (/users/xuid({xuid}))`.

The wrapper API for this is either [XblPresenceGetPresenceAsync](../../../../reference/live/xsapi-c/presence_c/functions/xblpresencegetpresenceasync.md) or [XblPresenceGetPresenceForMultipleUsersAsync](../../../../reference/live/xsapi-c/presence_c/functions/xblpresencegetpresenceformultipleusersasync.md).

In the previous example, you've requested the `PresenceRecord` of the user, whose xuid is 12345.
You've also requested that the level of detail be `all`.

If you didn't specify `all`, Rich Presence isn't returned. Instead, `all` returns the following in the JSON response.

```json
          {
            xuid:"12345",
            state:"online",
            devices:
            [
              {
                type:"D",
                titles:
                [
                  {
                    id:"12345",
                    name:"Buckets are Awesome",
                    lastModified:"2022-08-17T07:15:23.4930000",
                    placement: "full",
                    state:"active",
                    activity:
                    {
                      richPresence:"Playing on map:Mountains"
                    }
                  }
                ]
              }
            ]
          }
```
